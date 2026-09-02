// Module ID: 16050
// Function ID: 16051
// Name: MentionsBadge
// Dependencies: [19, 21, 1296, 2]
// Exports: default

// Module 16050 (MentionsBadge)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1296 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(Button.Badge, { value, isMentionLowImportance });
};
