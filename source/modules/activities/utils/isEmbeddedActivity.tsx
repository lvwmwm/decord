// Module ID: 7343
// Function ID: 7344
// Name: isEmbeddedActivity
// Dependencies: [676, 6037, 2]
// Exports: default

// Module 7343 (isEmbeddedActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import hasFlagDefault from "hasFlag" /* 6037 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
