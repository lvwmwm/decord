// Module ID: 8825
// Function ID: 69731
// Name: DefaultVideoBackground
// Dependencies: [7923, 2]
// Exports: default

// Module 8825 (DefaultVideoBackground)
import { DefaultVideoBackground } from "VideoFilterType";

let obj = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = require("set").fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  obj = { [closure_0.OPTION_1]: obj, [closure_0.OPTION_2]: obj, [closure_0.OPTION_3]: obj, [closure_0.OPTION_4]: obj, [closure_0.OPTION_7]: obj, [closure_0.OPTION_8]: obj, [closure_0.OPTION_9]: obj, [closure_0.OPTION_10]: obj };
  return obj;
};
