// Module ID: 10817
// Function ID: 10818
// Name: isGameActivity
// Dependencies: [673, 2]
// Exports: default

// Module 10817 (isGameActivity)
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
