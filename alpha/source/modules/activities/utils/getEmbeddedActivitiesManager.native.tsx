// Module ID: 8929
// Function ID: 8930
// Name: getEmbeddedActivitiesManager
// Dependencies: [8930, 2]
// Exports: default

// Module 8929 (getEmbeddedActivitiesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return require("EmbeddedActivitiesNativeManager");
};
