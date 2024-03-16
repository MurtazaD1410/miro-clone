"use client";

import React, { FormEventHandler, useEffect, useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useRenameModal } from "@/store/use-rename-modal";


const RenameModal = () => {
  const { isOpen, initalValues, onClose } = useRenameModal();
  const [title, setTitle] = useState(initalValues.title);
  const { mutate, pending } = useApiMutation(api.board.update);

  useEffect(() => {
    setTitle(initalValues.title);
  }, [initalValues.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate({
      id: initalValues.id,
      title: title,
    })
      .then(() => {
        toast.success("Board renamed!");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to rename board");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this board</DialogDescription>
        <form action="" onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Board Title"
          />
          <DialogFooter className="">
            <DialogClose asChild>
              <Button
                type="button"
                variant={"outline"}
                className="mt-3 sm:mt-0"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
