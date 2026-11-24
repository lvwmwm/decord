// Module ID: 9363
// Function ID: 9364
// Name: scaleProfileFrame
// Dependencies: [2]
// Exports: default

// Module 9363 (scaleProfileFrame)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth, arg1) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
