// Module ID: 8401
// Function ID: 8402
// Name: isEmbeddedActivity
// Dependencies: [1071, 8402, 2]
// Exports: default

// Module 8401 (isEmbeddedActivity)
import Constants from "Constants" /* 1071 */;
import hasFlagDefault from "hasFlag" /* 8402 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
