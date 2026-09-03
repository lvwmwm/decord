// Module ID: 7495
// Function ID: 7496
// Name: isEmbeddedActivity
// Dependencies: [673, 6167, 2]
// Exports: default

// Module 7495 (isEmbeddedActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import hasFlagDefault from "hasFlag" /* 6167 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
