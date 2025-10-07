"use client";

import { useQueryState } from "nuqs";
import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const filters = [
  { name: "React", value: "react" },
  { name: "JavaScript", value: "javascript" },

  //   { name: "Newest", value: "newest" },
  //   { name: "Popular", value: "popular" },
  //   { name: "Unanswered", value: "unanswered" },
  //   { name: "Recommeded", value: "recommended" },
];

const HomeFilter = () => {
  const [active, setActive] = useQueryState("filter", {
    defaultValue: "",
    parse: (value) => value as string,
    shallow: false,
  });

  const handleTypeClick = (value: string) => {
    if (active === value) {
      setActive("");
    } else {
      setActive(value);
    }
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            `body-medium rounded-lg px-6 capitalize shadow-none`,
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
