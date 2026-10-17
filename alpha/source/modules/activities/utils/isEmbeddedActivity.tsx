// Module ID: 7692
// Function ID: 7693
// Name: isEmbeddedActivity
// Dependencies: [1087, 7288, 2]
// Exports: default

// Module 7692 (isEmbeddedActivity)
import Constants from "Constants" /* 1087 */;
import hasFlagDefault from "hasFlag" /* 7288 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
