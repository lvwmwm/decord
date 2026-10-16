// Module ID: 10485
// Function ID: 10486
// Name: isGameActivity
// Dependencies: [1087, 2]
// Exports: default

// Module 10485 (isGameActivity)
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  return null != type && type.type === ActivityTypes.PLAYING;
};
