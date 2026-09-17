import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export interface DocumentData {
    id: string;
    title: string;
    date: string;
    parent: null | string;
    order: number;
    author: string;
    category: string;
    tags: string[];
}

export interface DocumentContent extends DocumentData {
    contentHtml: string;
}

const postDirectory = path.join(process.cwd(), 'docs');

export const getDocuments = (): DocumentData[] => {
    const filesName = fs.readdirSync(postDirectory);

    const allDocuments: DocumentData[] = filesName.map((fileName) => {
        const id = fileName.replace('.md', '');

        const fullPath = path.join(postDirectory, fileName);

        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...(matterResult.data as Omit<DocumentData, 'id'>),
        };
    });

    return allDocuments.sort((a, b) => a.order - b.order);
};

export async function getDocumentContent(id: string): Promise<DocumentContent> {
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents);
    const processContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processContent.toString();

    return {
        id,
        ...(matterResult.data as Omit<DocumentData, 'id'>),
        contentHtml,
    };
}
