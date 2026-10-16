// Module ID: 7646
// Function ID: 7647
// Name: isEmbeddedActivity
// Dependencies: [1087, 7236, 2]
// Exports: default

// Module 7646 (isEmbeddedActivity)
import Constants from "Constants" /* 1087 */;
import hasFlagDefault from "hasFlag" /* 7236 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
