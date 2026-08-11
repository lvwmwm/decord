// Module ID: 7200
// Function ID: 7201
// Name: isEmbeddedActivity
// Dependencies: [676, 5930, 2]
// Exports: default

// Module 7200 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5930)(arg0, ActivityFlags.EMBEDDED);
};
