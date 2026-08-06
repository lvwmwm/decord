// Module ID: 7120
// Function ID: 7121
// Name: isEmbeddedActivity
// Dependencies: [676, 5849, 2]
// Exports: default

// Module 7120 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5849)(arg0, ActivityFlags.EMBEDDED);
};
