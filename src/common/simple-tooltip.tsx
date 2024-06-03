"use client";
import clsx from "clsx";
import * as Tooltip from "@radix-ui/react-tooltip";

export type SimpleTooltipProps = {
  content: React.ReactNode;
  delayDuration?: Tooltip.TooltipProps["delayDuration"];
  disabled?: boolean;
  className?: string;
} & Omit<Tooltip.TooltipProps, "className">;

export function SimpleTooltip({ children, content, className, ...props }: SimpleTooltipProps) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className={clsx(
            "text-text-secondary dark:text-dark-text-secondary max-w-[160px] rounded-md border border-border bg-surface-primary p-2 text-sm dark:border-dark-border dark:bg-dark-surface-primary",
            className,
          )}
          {...props}
        >
          {content}
          <Tooltip.Arrow className="z-20 border-b fill-surface-primary dark:fill-dark-surface-primary" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export function TooltipProvider({ children }: { children?: React.ReactNode }) {
  return <Tooltip.Provider>{children}</Tooltip.Provider>;
}
