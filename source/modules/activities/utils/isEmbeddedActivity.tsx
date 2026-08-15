// Module ID: 7259
// Function ID: 7260
// Name: isEmbeddedActivity
// Dependencies: [676, 7260, 2]
// Exports: default

// Module 7259 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(7260)(arg0, ActivityFlags.EMBEDDED);
};
