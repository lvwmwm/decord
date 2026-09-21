// Module ID: 7986
// Function ID: 7987
// Name: isEmbeddedActivity
// Dependencies: [1078, 7557, 2]
// Exports: default

// Module 7986 (isEmbeddedActivity)
import Constants from "Constants" /* 1078 */;
import hasFlagDefault from "hasFlag" /* 7557 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
