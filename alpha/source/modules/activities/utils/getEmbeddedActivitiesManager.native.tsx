// Module ID: 8963
// Function ID: 8964
// Name: getEmbeddedActivitiesManager
// Dependencies: [8964, 2]
// Exports: default

// Module 8963 (getEmbeddedActivitiesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return require("EmbeddedActivitiesNativeManager");
};
