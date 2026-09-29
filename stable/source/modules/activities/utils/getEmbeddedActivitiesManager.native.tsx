// Module ID: 9607
// Function ID: 9608
// Name: getEmbeddedActivitiesManager
// Dependencies: [9608, 2]
// Exports: default

// Module 9607 (getEmbeddedActivitiesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return require("EmbeddedActivitiesNativeManager");
};
