// Module ID: 8018
// Function ID: 8019
// Name: isEmbeddedActivity
// Dependencies: [1078, 7589, 2]
// Exports: default

// Module 8018 (isEmbeddedActivity)
import Constants from "Constants" /* 1078 */;
import hasFlagDefault from "hasFlag" /* 7589 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
