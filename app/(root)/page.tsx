import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

// const questions = [
//   {
//     _id: "1",
//     title: "How to learn React?",
//     description: "I want to learn React, can anyone help me?",
//     tags: [
//       { _id: "1", name: "React" },
//       // { _id: "2", name: "JavaScript" },s
//     ],
//     author: { _id: "1", name: "John Doe" },
//     upvotes: 10,
//     answers: 5,
//     views: 100,
//     createdAt: new Date(),
//   },
//   {
//     _id: "2",
//     title: "How to learn JavaScript?",
//     description: "I want to learn JavaScript, can anyone help me?",
//     tags: [
//       // { _id: "1", name: "React" },
//       { _id: "2", name: "JavaScript" },
//     ],
//     author: { _id: "1", name: "John Doe" },
//     upvotes: 10,
//     answers: 5,
//     views: 100,
//     createdAt: new Date(),
//   },
// ];

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2024-09-01T10:00:00Z"),
    image: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
  },
  {
    _id: "2",
    title: "Best practices for JavaScript ES6?",
    description: "What are some best practices for writing clean ES6 code?",
    tags: [
      { _id: "2", name: "JavaScript" },
      { _id: "3", name: "ES6" },
    ],
    author: { _id: "2", name: "Jane Smith" },
    upvotes: 7,
    answers: 2,
    views: 80,
    createdAt: new Date("2024-09-10T14:30:00Z"),
    image: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
  },
  {
    _id: "3",
    title: "How to style components in Next.js?",
    description: "Should I use CSS modules or styled-components in Next.js?",
    tags: [
      { _id: "4", name: "Next.js" },
      { _id: "5", name: "CSS" },
    ],
    author: { _id: "3", name: "Alice Johnson" },
    upvotes: 15,
    answers: 4,
    views: 150,
    createdAt: new Date("2024-09-15T09:20:00Z"),
    image: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
  },
  {
    _id: "4",
    title: "How to deploy a Next.js app?",
    description: "What are the steps to deploy a Next.js app to Vercel?",
    tags: [
      { _id: "4", name: "Next.js" },
      { _id: "6", name: "Deployment" },
    ],
    author: { _id: "4", name: "Bob Lee" },
    upvotes: 5,
    answers: 1,
    views: 60,
    createdAt: new Date("2024-09-20T12:00:00Z"),
    image: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
  },
  {
    _id: "5",
    title: "Understanding useEffect in React",
    description: "Can someone explain how useEffect works with examples?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "7", name: "Hooks" },
    ],
    author: { _id: "5", name: "Charlie Kim" },
    upvotes: 20,
    answers: 6,
    views: 200,
    createdAt: new Date("2024-09-22T16:45:00Z"),
    image: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
