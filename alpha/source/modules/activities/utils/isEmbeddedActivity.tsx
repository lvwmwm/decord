// Module ID: 8028
// Function ID: 8029
// Name: isEmbeddedActivity
// Dependencies: [1072, 7625, 2]
// Exports: default

// Module 8028 (isEmbeddedActivity)
import Constants from "Constants" /* 1072 */;
import hasFlagDefault from "hasFlag" /* 7625 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
