// Module ID: 10712
// Function ID: 10713
// Name: isGameActivity
// Dependencies: [1084, 2]
// Exports: default

// Module 10712 (isGameActivity)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  return null != type && type.type === ActivityTypes.PLAYING;
};
