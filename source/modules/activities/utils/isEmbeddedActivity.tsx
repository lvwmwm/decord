// Module ID: 6022
// Function ID: 6023
// Name: isEmbeddedActivity
// Dependencies: [676, 6023, 2]
// Exports: default

// Module 6022 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(6023)(arg0, ActivityFlags.EMBEDDED);
};
