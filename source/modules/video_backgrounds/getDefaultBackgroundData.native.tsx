// Module ID: 9216
// Function ID: 9217
// Name: DefaultVideoBackground
// Dependencies: [8320, 2]
// Exports: default

// Module 9216 (DefaultVideoBackground)
import { DefaultVideoBackground } from "VideoFilterType";

let closure_1 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = require("set").fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  return { [closure_0.OPTION_1]: closure_1, [closure_0.OPTION_2]: closure_1, [closure_0.OPTION_3]: closure_1, [closure_0.OPTION_4]: closure_1, [closure_0.OPTION_7]: closure_1, [closure_0.OPTION_8]: closure_1, [closure_0.OPTION_9]: closure_1, [closure_0.OPTION_10]: closure_1 };
};
