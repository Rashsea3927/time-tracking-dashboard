import Profile from "@components/profile";
import TrackingDashboard, { type Activity } from "@components/tracking-dashboard";

import activitiesData from "./data/data.json";

const activities = activitiesData as Activity[];

export default function Home() {
  return <TrackingDashboard activities={activities} profile={<Profile />} />;
}
