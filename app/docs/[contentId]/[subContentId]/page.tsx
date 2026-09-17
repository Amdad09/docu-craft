import ContentDisplay from "@/components/ContentDisplay";

interface PageProps{
    params: Promise<{subContentId: string}>
}
const Page = async ({ params }: PageProps) => {
    const { subContentId } = await params;
  return (
    <div>
     <ContentDisplay id={subContentId}/>
    </div>
  );
};

export default Page;