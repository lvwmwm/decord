// Module ID: 15053
// Function ID: 114614
// Name: MentionsBadge
// Dependencies: [31, 33, 1273, 2]
// Exports: default

// Module 15053 (MentionsBadge)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  let isMentionLowImportance;
  let mentionsCount;
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(require(1273) /* Button */.Badge, { value, isMentionLowImportance });
};
