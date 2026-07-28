// Module ID: 8072
// Function ID: 64028
// Name: scaleProfileFrame
// Dependencies: [2]
// Exports: default

// Module 8072 (scaleProfileFrame)
let result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
