import ContentDisplay from "@/components/ContentDisplay";

interface PageProps{
    params: Promise<{contentId: string}>
}
const Page = async ({ params }: PageProps) => {
    const {contentId} = await params;
  return (
    <div>
      <ContentDisplay id={ contentId} />
    </div>
  );
};

export default Page;