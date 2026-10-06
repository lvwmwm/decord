// Module ID: 10632
// Function ID: 10633
// Name: isGameActivity
// Dependencies: [1085, 2]
// Exports: default

// Module 10632 (isGameActivity)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  return null != type && type.type === ActivityTypes.PLAYING;
};
