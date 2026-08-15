// Module ID: 13097
// Function ID: 13098
// Name: dispatchAutoDisableVideo
// Dependencies: [4529, 709, 2]
// Exports: default

// Module 13097 (dispatchAutoDisableVideo)
import { MediaEngineContextTypes } from "DesktopSources";

const result = require("set").fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(arg0, arg1) {
  const importDefault = arg0;
  const dependencyMap = arg1;
  importDefault(709).wait(() => {
    let obj = callback(table[1]);
    obj = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: outer1_2.DEFAULT, userId: callback, videoToggleState: table, persist: false, isAutomatic: true };
    obj.dispatch(obj);
  });
};
