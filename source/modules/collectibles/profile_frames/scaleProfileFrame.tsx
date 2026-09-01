// Module ID: 8547
// Function ID: 8548
// Name: scaleProfileFrame
// Dependencies: [2]
// Exports: default

// Module 8547 (scaleProfileFrame)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
