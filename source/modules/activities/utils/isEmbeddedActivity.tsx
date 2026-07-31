// Module ID: 6028
// Function ID: 6029
// Name: isEmbeddedActivity
// Dependencies: [676, 6029, 2]
// Exports: default

// Module 6028 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(6029)(arg0, ActivityFlags.EMBEDDED);
};
