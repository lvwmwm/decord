// Module ID: 6982
// Function ID: 55795
// Name: isEmbeddedActivity
// Dependencies: [653, 5689, 2]
// Exports: default

// Module 6982 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5689)(arg0, ActivityFlags.EMBEDDED);
};
