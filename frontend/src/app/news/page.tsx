import Link from "next/link";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function NewsPage() {
  const newsList = [
    {
      id: 1,
      title: "Название новости 1",
      date: "10 октября 2025",
      description: "Описание первой новости. Краткий текст о событии.",
      image: "https://heroui.com/images/hero-card-complete.jpeg",
    },
    {
      id: 2,
      title: "Название новости 2",
      date: "9 октября 2025",
      description: "Описание второй новости. Ещё немного деталей.",
      image: "https://heroui.com/images/hero-card.jpeg",
    },
  ];

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
                {news.title}
              </Link>
              <small className="text-muted-foreground mt-1">{news.date}</small>
              <p className="text-base text-default-700 mt-2">
                {news.description}
              </p>
            </CardHeader>

            <CardBody className="p-0 mt-3">
              <Link href={`/articles/${news.id}`} className="block w-full">
                <Image
                  alt={news.title}
                  src={news.image}
                  className="rounded-xl w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                  removeWrapper
                />
              </Link>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
