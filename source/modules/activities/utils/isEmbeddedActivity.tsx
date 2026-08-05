// Module ID: 7093
// Function ID: 7094
// Name: isEmbeddedActivity
// Dependencies: [676, 5822, 2]
// Exports: default

// Module 7093 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5822)(arg0, ActivityFlags.EMBEDDED);
};
