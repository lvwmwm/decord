// Module ID: 7266
// Function ID: 7267
// Name: isEmbeddedActivity
// Dependencies: [676, 5992, 2]
// Exports: default

// Module 7266 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5992)(arg0, ActivityFlags.EMBEDDED);
};
