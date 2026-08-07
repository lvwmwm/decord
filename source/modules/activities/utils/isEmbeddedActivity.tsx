// Module ID: 7139
// Function ID: 7140
// Name: isEmbeddedActivity
// Dependencies: [676, 5868, 2]
// Exports: default

// Module 7139 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5868)(arg0, ActivityFlags.EMBEDDED);
};
