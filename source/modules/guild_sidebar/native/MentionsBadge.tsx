// Module ID: 15353
// Function ID: 15354
// Name: MentionsBadge
// Dependencies: [19, 21, 1297, 2]
// Exports: default

// Module 15353 (MentionsBadge)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  let isMentionLowImportance;
  let mentionsCount;
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(require(1297) /* Button */.Badge, { value, isMentionLowImportance });
};
