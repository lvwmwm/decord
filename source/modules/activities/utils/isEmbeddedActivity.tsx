// Module ID: 7244
// Function ID: 7245
// Name: isEmbeddedActivity
// Dependencies: [676, 5971, 2]
// Exports: default

// Module 7244 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5971)(arg0, ActivityFlags.EMBEDDED);
};
