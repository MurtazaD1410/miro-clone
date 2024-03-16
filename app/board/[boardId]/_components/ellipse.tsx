import React from "react";

import { colorToCSS } from "@/lib/utils";
import { EllipseLayer } from "@/types/canvas";

interface EllipseLayerProps {
  id: string;
  layer: EllipseLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const Ellipse = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: EllipseLayerProps) => {
  const { x, y, width, fill, height } = layer;

  return (
    <ellipse
      className={"drop-shadow-md"}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      y={0}
      x={0}
      cx={width / 2}
      cy={height / 2}
      rx={width / 2}
      ry={height / 2}
      strokeWidth={1}
      stroke={selectionColor || "transparent"}
      fill={fill ? colorToCSS(fill) : "#c5c5c5"}
    />
  );
};

export default Ellipse;
