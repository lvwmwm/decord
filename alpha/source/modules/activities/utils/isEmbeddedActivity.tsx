// Module ID: 8403
// Function ID: 8404
// Name: isEmbeddedActivity
// Dependencies: [1072, 8404, 2]
// Exports: default

// Module 8403 (isEmbeddedActivity)
import Constants from "Constants" /* 1072 */;
import hasFlagDefault from "hasFlag" /* 8404 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
