// Module ID: 10622
// Function ID: 10623
// Name: getEmbeddedActivitiesManager
// Dependencies: [10623, 2]
// Exports: default

// Module 10622 (getEmbeddedActivitiesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return require("EmbeddedActivitiesNativeManager");
};
