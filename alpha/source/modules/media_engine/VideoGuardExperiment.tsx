// Module ID: 14025
// Function ID: 14026
// Name: VideoGuardExperiment
// Dependencies: [1452, 2]

// Module 14025 (VideoGuardExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-video-guard", kind: "user", defaultConfig: { videoEnabled: true }, variations: obj2 };
obj2 = { 1: null, 2: { videoEnabled: false } };
obj2[2] = { videoEnabled: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoGuardExperiment.tsx");

export const VIDEO_GUARD_BLOG_POST_URL = "https://discord.com/blog/a-letter-to-the-discord-community-in-brazil";
export const VideoGuardExperiment = apexExperiment;
