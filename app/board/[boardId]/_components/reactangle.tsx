import React from "react";

import { colorToCSS } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";

interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const Rectangle = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: RectangleProps) => {
  const { x, y, width, fill, height } = layer;

  return (
    <rect
      className={"drop-shadow-md"}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      y={0}
      x={0}
      width={width}
      height={height}
      strokeWidth={1}
      stroke={selectionColor || "transparent"}
      fill={fill ? colorToCSS(fill) : "#c5c5c5"}
    />
  );
};

export default Rectangle;
