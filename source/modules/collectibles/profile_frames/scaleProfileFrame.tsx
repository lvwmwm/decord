// Module ID: 8865
// Function ID: 8866
// Name: scaleProfileFrame
// Dependencies: [2]
// Exports: default

// Module 8865 (scaleProfileFrame)
let result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
