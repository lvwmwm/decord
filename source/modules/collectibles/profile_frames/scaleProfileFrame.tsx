// Module ID: 8255
// Function ID: 65134
// Name: scaleProfileFrame
// Dependencies: [2]
// Exports: default

// Module 8255 (scaleProfileFrame)
let result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
