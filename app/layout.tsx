import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getDocuments } from './lib/docs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'DocuCraft- A documentation website by protocol',
    description: 'A documentation website by protocol',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    const allDocuments = getDocuments();
    console.log(allDocuments);
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="h-full lg:ml-72 xl:ml-80">
                    <Header />
                    <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
                        <main className="flex-auto py-16">
                            <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                                <div className="absolute left-1/2 top-0 -ml-152 h-100 w-325 dark:mask-[linear-gradient(white,transparent)]">
                                    <div className="absolute inset-0 bg-linear-to-r from-[#36b49f] to-[#DBFF75] opacity-40 mask-[radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
                                </div>
                            </div>
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
