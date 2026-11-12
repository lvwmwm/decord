// Module ID: 7993
// Function ID: 7994
// Name: isEmbeddedActivity
// Dependencies: [1072, 7580, 2]
// Exports: default

// Module 7993 (isEmbeddedActivity)
import Constants from "Constants" /* 1072 */;
import hasFlagDefault from "hasFlag" /* 7580 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
