// Module ID: 7431
// Function ID: 7432
// Name: isEmbeddedActivity
// Dependencies: [676, 6123, 2]
// Exports: default

// Module 7431 (isEmbeddedActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import hasFlagDefault from "hasFlag" /* 6123 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
