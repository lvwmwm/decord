// Module ID: 7239
// Function ID: 7240
// Name: isEmbeddedActivity
// Dependencies: [676, 5969, 2]
// Exports: default

// Module 7239 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5969)(arg0, ActivityFlags.EMBEDDED);
};
