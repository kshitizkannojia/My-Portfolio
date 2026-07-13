"use server";

import { cacheLife } from "next/cache";
import { config } from "@/data/config";

// unauthenticated github api = 60 req/hr per ip; 5min cache -> ~12 req/hr
// throws on failure: errors aren't cached, so bad fetch retries next request
export async function getGithubStars(): Promise<number> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 300 });

  const res = await fetch(
    `https://api.github.com/repos/${config.githubUsername}/${config.githubRepo}`,
    { headers: { Accept: "application/vnd.github+json" } },
  );
  if (!res.ok) {
    // Gracefully return 0 if the repo doesn't exist yet (404) or rate-limited
    return 0;
  }

  const data = await res.json();
  if (typeof data.stargazers_count !== "number") {
    return 0;
  }
  return data.stargazers_count;
}
