// Module ID: 8759
// Function ID: 8760
// Name: getEmbeddedActivitiesManager
// Dependencies: [8760, 2]
// Exports: default

// Module 8759 (getEmbeddedActivitiesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return require("EmbeddedActivitiesNativeManager");
};
