// Module ID: 8400
// Function ID: 8401
// Name: isEmbeddedActivity
// Dependencies: [1071, 8401, 2]
// Exports: default

// Module 8400 (isEmbeddedActivity)
import Constants from "Constants" /* 1071 */;
import hasFlagDefault from "hasFlag" /* 8401 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
