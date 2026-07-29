// Module ID: 6024
// Function ID: 6025
// Name: isEmbeddedActivity
// Dependencies: [676, 6025, 2]
// Exports: default

// Module 6024 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(6025)(arg0, ActivityFlags.EMBEDDED);
};
