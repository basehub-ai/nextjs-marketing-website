"use client";

import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import React from "react";

export function CopyButton({ text }: { text: string }) {
  const [isShowingTooltip, setIsShowingTooltip] = React.useState(false);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsShowingTooltip(true);
      setTimeout(() => setIsShowingTooltip(false), 2000);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return (
    <button className="relative" onClick={handleClick}>
      {isShowingTooltip ? (
        <span className="absolute -left-2 -top-2 -translate-y-full transform rounded border border-border bg-surface-secondary p-1 text-xs text-text-secondary dark:border-dark-border dark:bg-dark-surface-secondary dark:text-dark-text-secondary">
          Copied!
        </span>
      ) : null}
      <ClipboardCopyIcon />
    </button>
  );
}
