// Module ID: 7119
// Function ID: 7120
// Name: isEmbeddedActivity
// Dependencies: [676, 5837, 2]
// Exports: default

// Module 7119 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5837)(arg0, ActivityFlags.EMBEDDED);
};
