// Module ID: 8259
// Function ID: 8260
// Name: isEmbeddedActivity
// Dependencies: [1071, 8260, 2]
// Exports: default

// Module 8259 (isEmbeddedActivity)
import Constants from "Constants" /* 1071 */;
import hasFlagDefault from "hasFlag" /* 8260 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
