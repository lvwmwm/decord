// Module ID: 9169
// Function ID: 9170
// Name: isGameActivity
// Dependencies: [676, 2]
// Exports: default

// Module 9169 (isGameActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};
