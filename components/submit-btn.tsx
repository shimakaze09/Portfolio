"use client";

import React, { useTransition } from "react";
import { FaPaperPlane } from "react-icons/fa";

// Since our React version (18.2) doesn't expose a stable useFormStatus, we approximate
// a pending state by wrapping the button in a form and using startTransition when clicked.
// The Contact form still uses an action attribute; we intercept click to show a spinner until next tick.
export default function SubmitBtn() {
    const [isPending, startTransition] = useTransition();

    return (
        <button
            type="submit"
            onClick={(e) => {
                // Trigger a transition for visual feedback; form action still handled by server action.
                startTransition(() => { /* no-op: transition boundary */ })
            }}
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
            disabled={isPending}
        >
            {isPending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Submit{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </>
            )}
        </button>
    );
}