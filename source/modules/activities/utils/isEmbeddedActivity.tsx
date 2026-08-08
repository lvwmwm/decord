// Module ID: 7199
// Function ID: 7200
// Name: isEmbeddedActivity
// Dependencies: [676, 5928, 2]
// Exports: default

// Module 7199 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5928)(arg0, ActivityFlags.EMBEDDED);
};
