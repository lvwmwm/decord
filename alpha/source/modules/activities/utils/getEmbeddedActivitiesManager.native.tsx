// Module ID: 8990
// Function ID: 8991
// Name: getEmbeddedActivitiesManager
// Dependencies: [8991, 2]
// Exports: default

// Module 8990 (getEmbeddedActivitiesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return require("EmbeddedActivitiesNativeManager");
};
