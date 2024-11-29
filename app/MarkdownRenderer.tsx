"use client"
import { useState, useEffect } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

export const dynamic = 'force-dynamic';

export default function MarkdownRenderer({ url }: { url: string }) {
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(url);
                const markdown = await response.text();

                // Convert markdown to HTML
                const result = await remark()
                    .use(html)
                    .process(markdown);

                setContent(result.toString());
            } catch (error) {
                console.error('Error fetching markdown:', error);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchMarkdown();
    }, [url]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
