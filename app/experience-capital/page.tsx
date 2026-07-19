import type { Metadata } from "next";
import ExperienceCapital from "./ExperienceCapital";

export const metadata: Metadata = {
  title: "Experience Capital | Turn a lifetime of experience into value",
  description:
    "A respectful, free assessment that helps experienced professionals explore consulting, mentoring, writing and legacy opportunities.",
};

export default function ExperienceCapitalPage() {
  return <ExperienceCapital />;
}
