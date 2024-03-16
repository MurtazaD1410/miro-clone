"use client";

import React, { memo } from "react";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useSelf, useStorage } from "@/liveblocks.config";
import { LayerType, Side, XYWH } from "@/types/canvas";

interface selectionBoxProps {
  onResizeHandlePosition: (corner: Side, initialBounds: XYWH) => void;
}

const HANDLE_WIDTH = 8;

const SelectionBox = memo(({ onResizeHandlePosition }: selectionBoxProps) => {
  const soleLayerId = useSelf((me) =>
    me.presence.selection.length === 1 ? me.presence.selection[0] : null
  );

  const isShowingHandles = useStorage(
    (root) =>
      soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
  );

  const bounds = useSelectionBounds();

  if (!bounds) {
    return null;
  }

  return (
    <>
      <rect
        className="fill-transparent stroke-blue-500 stroke-1 pointer-events-none "
        style={{ transform: `translate(${bounds.x}px,${bounds.y}px)` }}
        x={0}
        y={0}
        width={bounds.width}
        height={bounds.height}
      />
      {isShowingHandles && (
        <>
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: "nwse-resize",
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px,${
                bounds.y - HANDLE_WIDTH / 2
              }px)`,
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
            }}
            x={0}
            y={0}
            width={bounds.width}
            height={bounds.height}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePosition(Side.Top + Side.Left, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: "ns-resize",
              transform: `translate(${
                bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2
              }px,${bounds.y - HANDLE_WIDTH / 2}px)`,
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
            }}
            x={0}
            y={0}
            width={bounds.width}
            height={bounds.height}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePosition(Side.Top, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: "nesw-resize",
              transform: `translate(${
                bounds.x - HANDLE_WIDTH / 2 + bounds.width
              }px,${bounds.y - HANDLE_WIDTH / 2}px)`,
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
            }}
            x={0}
            y={0}
            width={bounds.width}
            height={bounds.height}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePosition(Side.Top + Side.Right, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: "ew-resize",
              transform: `translate(${
                bounds.x - HANDLE_WIDTH / 2 + bounds.width
              }px,${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
            }}
            x={0}
            y={0}
            width={bounds.width}
            height={bounds.height}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePosition(Side.Right, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: "ew-resize",
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px,${
                bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2
              }px)`,
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
            }}
            x={0}
            y={0}
            width={bounds.width}
            height={bounds.height}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePosition(Side.Left, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: "nwse-resize",
              transform: `translate(${
                bounds.x - HANDLE_WIDTH / 2 + bounds.width
              }px,${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
            }}
            x={0}
            y={0}
            width={bounds.width}
            height={bounds.height}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePosition(Side.Bottom + Side.Right, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: "nesw-resize",
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px,${
                bounds.y + bounds.height - HANDLE_WIDTH / 2
              }px)`,
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
            }}
            x={0}
            y={0}
            width={bounds.width}
            height={bounds.height}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePosition(Side.Bottom + Side.Left, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: "ns-resize",
              transform: `translate(${
                bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2
              }px,${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
            }}
            x={0}
            y={0}
            width={bounds.width}
            height={bounds.height}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePosition(Side.Bottom, bounds);
            }}
          />
        </>
      )}
    </>
  );
});

SelectionBox.displayName = "SelectionBox";

export default SelectionBox;
