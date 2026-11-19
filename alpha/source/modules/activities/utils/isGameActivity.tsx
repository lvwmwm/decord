// Module ID: 13426
// Function ID: 13427
// Name: isGameActivity
// Dependencies: [5531, 2]
// Exports: default

// Module 13426 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5531 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
