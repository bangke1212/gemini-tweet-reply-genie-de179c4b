import { createFileRoute } from "@tanstack/react-router";
// @ts-expect-error - JSX module without types
import App from "@/tweet/App.jsx";
import "@/tweet/index.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tweet Reply Generator" },
      {
        name: "description",
        content:
          "Generate engaging tweet replies with AI. Paste a tweet, get multiple reply options instantly.",
      },
    ],
  }),
  component: App,
});