// Module ID: 7847
// Function ID: 7848
// Name: isEmbeddedActivity
// Dependencies: [1084, 7446, 2]
// Exports: default

// Module 7847 (isEmbeddedActivity)
import Constants from "Constants" /* 1084 */;
import hasFlagDefault from "hasFlag" /* 7446 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
