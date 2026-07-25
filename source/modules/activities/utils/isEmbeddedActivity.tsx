// Module ID: 5972
// Function ID: 53110
// Name: isEmbeddedActivity
// Dependencies: [653, 5973, 2]
// Exports: default

// Module 5972 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5973)(arg0, ActivityFlags.EMBEDDED);
};
