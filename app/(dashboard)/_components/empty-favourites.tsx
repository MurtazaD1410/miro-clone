import React from "react";

import Image from "next/image";

const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/empty-favourites.svg"}
        alt="Empty"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No favourite boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favouriting a board.
      </p>
    </div>
  );
};

export default EmptyFavourites;
