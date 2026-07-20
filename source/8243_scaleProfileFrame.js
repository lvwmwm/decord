// Module ID: 8243
// Function ID: 65060
// Name: scaleProfileFrame
// Dependencies: []
// Exports: default

// Module 8243 (scaleProfileFrame)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};
