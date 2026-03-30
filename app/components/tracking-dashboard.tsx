"use client";

import { useState, type ReactNode } from "react";

import EllipsisIcon from "@assets/icon-ellipsis.svg";
import ExerciseIcon from "@assets/icon-exercise.svg";
import PlayIcon from "@assets/icon-play.svg";
import SelfCareIcon from "@assets/icon-self-care.svg";
import SocialIcon from "@assets/icon-social.svg";
import StudyIcon from "@assets/icon-study.svg";
import WorkIcon from "@assets/icon-work.svg";
import Image, { StaticImageData } from "next/image";

export type Timeframe = "daily" | "weekly" | "monthly";

export type Activity = {
  title: string;
  timeframes: Record<Timeframe, { current: number; previous: number }>;
};

const PERIODS: { value: Timeframe; label: string }[] = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
];

type ActivityStyle = {
  background: string;
  src: StaticImageData;
  alt: string;
};

const ACTIVITY_STYLE_MAP: Record<string, ActivityStyle> = {
  Work: { background: "bg-orange-300", src: WorkIcon, alt: "work icon" },
  Play: { background: "bg-blue-300", src: PlayIcon, alt: "play icon" },
  Study: { background: "bg-pink-400", src: StudyIcon, alt: "study icon" },
  Exercise: { background: "bg-green-400", src: ExerciseIcon, alt: "exercise icon" },
  Social: { background: "bg-purple-700", src: SocialIcon, alt: "social icon" },
  "Self Care": { background: "bg-yellow-300", src: SelfCareIcon, alt: "self care icon" },
};

function labelBackground(activity: string): ActivityStyle {
  return ACTIVITY_STYLE_MAP[activity] ?? ACTIVITY_STYLE_MAP.Work;
}

function previousLabel(period: Timeframe): string {
  switch (period) {
    case "daily":
      return "Yesterday";
    case "weekly":
      return "Last Week";
    case "monthly":
      return "Last Month";
  }
}

function formatHours(n: number): string {
  return n === 1 ? "1hr" : `${n}hrs`;
}

type Props = {
  activities: Activity[];
  profile: ReactNode;
};

export default function TrackingDashboard({ activities, profile }: Props) {
  const [timeframe, setTimeframe] = useState<Timeframe>("weekly");

  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2">
      <div className="bg-navy-900 rounded-2xl pb-6 md:col-span-3 lg:col-span-1 lg:row-span-2">
        {profile}
        <div className="flex items-center justify-center md:gap-2 lg:flex-col lg:items-start lg:justify-start lg:gap-5 lg:pl-8">
          {PERIODS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setTimeframe(value)}
              className={`text-preset-5 flex-1 font-normal ${timeframe === value ? "text-white" : "text-purple-500"} md:grow-0 md:basis-[109px] lg:basis-auto`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {/* <ul className="grid gap-6 md:grid-cols-3"> */}
      {activities.map((item) => {
        const { current, previous } = item.timeframes[timeframe];
        const prev = previousLabel(timeframe);
        const style = labelBackground(item.title);
        return (
          <div key={item.title} className={`${style.background} relative overflow-hidden rounded-2xl pt-10 lg:flex lg:pt-11`}>
            <Image className="absolute top-5 right-12 scale-325" src={style.src} alt={style.alt} width={24} height={24} />
            <div className="bg-navy-900 relative grid w-full grid-cols-2 gap-2 rounded-2xl px-6 py-7">
              <h2 className="text-preset-5 col-span-1 self-center font-medium whitespace-nowrap text-white">{item.title}</h2>
              <Image className="col-span-1 self-center justify-self-end" src={EllipsisIcon} alt="ellipsis icon" width={21} height={5} />
              <p className="text-preset-3 self-center font-light text-white md:col-span-2 md:mt-2 md:text-6xl md:leading-[66px]">{formatHours(current)}</p>
              <p className="text-preset-6 text-navy-200 self-center justify-self-end md:col-span-2 md:row-start-3 md:justify-self-start">
                {prev} - {formatHours(previous)}
              </p>
            </div>
          </div>
        );
      })}
      {/* </ul> */}
    </div>
  );
}
