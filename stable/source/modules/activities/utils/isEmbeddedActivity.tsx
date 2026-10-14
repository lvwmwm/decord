// Module ID: 7229
// Function ID: 7230
// Name: isEmbeddedActivity
// Dependencies: [1085, 6816, 2]
// Exports: default

// Module 7229 (isEmbeddedActivity)
import Constants from "Constants" /* 1085 */;
import hasFlagDefault from "hasFlag" /* 6816 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
