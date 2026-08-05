// Module ID: 8714
// Function ID: 8715
// Name: scaleProfileFrame
// Dependencies: [2]
// Exports: default

// Module 8714 (scaleProfileFrame)
let result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
