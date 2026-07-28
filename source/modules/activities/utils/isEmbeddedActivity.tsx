// Module ID: 6006
// Function ID: 53230
// Name: isEmbeddedActivity
// Dependencies: [653, 6007, 2]
// Exports: default

// Module 6006 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(6007)(arg0, ActivityFlags.EMBEDDED);
};
