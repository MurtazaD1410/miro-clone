"use client";

import React, { memo } from "react";

import { colorToCSS } from "@/lib/utils";
import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";

import Ellipse from "./ellipse";
import Note from "./note";
import Path from "./path";
import Rectangle from "./reactangle";
import Text from "./text";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Path:
        return (
          <Path
            key={id}
            points={layer.points}
            onPointerDown={(e) => onLayerPointerDown(e, id)}
            stroke={selectionColor}
            x={layer.x}
            y={layer.y}
            fill={layer.fill ? colorToCSS(layer.fill) : "#000"}
          />
        );
      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      default:
        console.warn("unknow layer type");
        return null;
    }

    return <div>LayerPreview</div>;
  }
);

LayerPreview.displayName = "LayerPreview";

export default LayerPreview;
