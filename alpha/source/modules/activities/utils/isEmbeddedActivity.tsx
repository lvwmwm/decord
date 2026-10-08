// Module ID: 7421
// Function ID: 7422
// Name: isEmbeddedActivity
// Dependencies: [1085, 6999, 2]
// Exports: default

// Module 7421 (isEmbeddedActivity)
import Constants from "Constants" /* 1085 */;
import hasFlagDefault from "hasFlag" /* 6999 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
