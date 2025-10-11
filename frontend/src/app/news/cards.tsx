"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, Image, Spinner } from "@heroui/react";
import type { NewsItem } from "@/app/news/types";

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export function Cards() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await fetch(`${STRAPI_BASE_URL}/articles`, {
          cache: "default",
        });

        if (!response.ok) {
          console.error(
            "Ошибка при запросе:",
            response.status,
            response.statusText,
          );
          return;
        }

        const data: NewsItem[] = await response.json();
        setNewsList(data);
      } catch (error) {
        console.error("Ошибка при загрузке новостей:", error);
      } finally {
        setLoading(false);
      }
    }

    void loadNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg">
        <Spinner
          classNames={{ label: "text-foreground mt-4" }}
          label="Загрузка новостей..."
          variant="default"
        />
      </div>
    );
  }

  if (newsList.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-muted-foreground">
        Новостей пока нет 😕
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 space-y-16">
      {newsList.map((news) => (
        <div key={news.id} className="w-full max-w-screen-md">
          <Card className="w-full shadow-none bg-transparent">
            <CardHeader className="pb-3 flex-col items-start">
              <Link
                href={`/articles/${news.id}`}
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {news.Title}
              </Link>
              <small className="text-muted-foreground mt-1">
                {news.published_at}
              </small>
              <p className="text-base text-default-700 mt-2">
                {news.Description}
              </p>
            </CardHeader>

            <CardBody className="p-0 mt-3 overflow-hidden">
              {news.Media?.[0]?.url && (
                <Link href={`/articles/${news.id}`} className="block w-full">
                  <Image
                    alt={news.Title}
                    src={`${STRAPI_BASE_URL}${news.Media[0].url}`}
                    className="rounded-xl w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                    removeWrapper
                  />
                </Link>
              )}
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
