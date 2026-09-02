// Module ID: 9262
// Function ID: 9263
// Name: isGameActivity
// Dependencies: [673, 2]
// Exports: default

// Module 9262 (isGameActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};
