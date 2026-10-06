// Module ID: 10388
// Function ID: 10389
// Name: isGameActivity
// Dependencies: [1086, 2]
// Exports: default

// Module 10388 (isGameActivity)
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  return null != type && type.type === ActivityTypes.PLAYING;
};
