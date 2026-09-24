// Module ID: 9603
// Function ID: 9604
// Name: getEmbeddedActivitiesManager
// Dependencies: [9604, 2]
// Exports: default

// Module 9603 (getEmbeddedActivitiesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return require("EmbeddedActivitiesNativeManager");
};
