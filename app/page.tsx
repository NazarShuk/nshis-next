import MarkdownRenderer from "@/app/MarkdownRenderer";

export default function Home() {
  return (
    <div>
        <MarkdownRenderer url={"https://raw.githubusercontent.com/NazarShuk/NazarShuk/main/README.md"} />
    </div>
  );
}
