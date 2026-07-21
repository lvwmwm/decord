// Module ID: 8247
// Function ID: 65072
// Name: scaleProfileFrame
// Dependencies: [284214097]
// Exports: default

// Module 8247 (scaleProfileFrame)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
