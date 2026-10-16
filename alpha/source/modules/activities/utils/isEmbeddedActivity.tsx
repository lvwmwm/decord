// Module ID: 7645
// Function ID: 7646
// Name: isEmbeddedActivity
// Dependencies: [1087, 7234, 2]
// Exports: default

// Module 7645 (isEmbeddedActivity)
import Constants from "Constants" /* 1087 */;
import hasFlagDefault from "hasFlag" /* 7234 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
