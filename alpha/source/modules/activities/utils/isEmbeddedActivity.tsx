// Module ID: 7981
// Function ID: 7982
// Name: isEmbeddedActivity
// Dependencies: [1074, 7555, 2]
// Exports: default

// Module 7981 (isEmbeddedActivity)
import Constants from "Constants" /* 1074 */;
import hasFlagDefault from "hasFlag" /* 7555 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
