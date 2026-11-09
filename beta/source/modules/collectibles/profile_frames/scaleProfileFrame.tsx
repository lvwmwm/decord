// Module ID: 8870
// Function ID: 8871
// Name: scaleProfileFrame
// Dependencies: [2]
// Exports: default

// Module 8870 (scaleProfileFrame)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth, arg1) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
