// Module ID: 7426
// Function ID: 7427
// Name: isEmbeddedActivity
// Dependencies: [1085, 7012, 2]
// Exports: default

// Module 7426 (isEmbeddedActivity)
import Constants from "Constants" /* 1085 */;
import hasFlagDefault from "hasFlag" /* 7012 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
