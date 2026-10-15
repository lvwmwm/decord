// Module ID: 7643
// Function ID: 7644
// Name: isEmbeddedActivity
// Dependencies: [1085, 7232, 2]
// Exports: default

// Module 7643 (isEmbeddedActivity)
import Constants from "Constants" /* 1085 */;
import hasFlagDefault from "hasFlag" /* 7232 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
