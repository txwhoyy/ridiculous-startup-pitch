import { mkdirSync, writeFileSync } from "node:fs";

// The pitch: revenge naming rights for potholes. Heartbreak pays $25 a
// pothole, and the city uses that money to fix the road — petty, personal,
// and the only pothole fundraiser drivers would actually fund.
const PITCH =
  "We sell the right to name a pothole after your ex — heartbroken drivers pay $25 a pothole, and cities finally fix the roads with the money.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
