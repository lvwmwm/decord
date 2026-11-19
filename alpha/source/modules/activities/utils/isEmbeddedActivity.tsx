// Module ID: 7941
// Function ID: 7942
// Name: isEmbeddedActivity
// Dependencies: [1072, 7942, 2]
// Exports: default

// Module 7941 (isEmbeddedActivity)
import Constants from "Constants" /* 1072 */;
import hasFlagDefault from "hasFlag" /* 7942 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
