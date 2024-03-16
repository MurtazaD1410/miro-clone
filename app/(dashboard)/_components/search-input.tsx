"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useDebounce, useDebounceValue } from "usehooks-ts";

import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");
  const [debouncedValue, setValue] = useDebounceValue(searchVal, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    setValue(searchVal);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="top-1/2 left-3 absolute transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search Boards"
        onChange={handleChange}
        value={searchVal}
      />
    </div>
  );
};

export default SearchInput;
