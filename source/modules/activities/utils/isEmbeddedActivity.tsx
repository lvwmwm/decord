// Module ID: 7107
// Function ID: 7108
// Name: isEmbeddedActivity
// Dependencies: [676, 5808, 2]
// Exports: default

// Module 7107 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5808)(arg0, ActivityFlags.EMBEDDED);
};
