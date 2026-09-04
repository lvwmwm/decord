// Module ID: 7672
// Function ID: 7673
// Name: isEmbeddedActivity
// Dependencies: [673, 7251, 2]
// Exports: default

// Module 7672 (isEmbeddedActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import hasFlagDefault from "hasFlag" /* 7251 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
