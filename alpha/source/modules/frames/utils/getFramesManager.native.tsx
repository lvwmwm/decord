// Module ID: 8804
// Function ID: 8805
// Name: getFramesManager
// Dependencies: [8743, 2]
// Exports: default

// Module 8804 (getFramesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/frames/utils/getFramesManager.native.tsx");

export default function getFramesManager() {
  return require("FramesNativeManager");
};
