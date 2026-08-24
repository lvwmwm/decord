// Module ID: 15555
// Function ID: 15556
// Name: MentionsBadge
// Dependencies: [19, 21, 1297, 2]
// Exports: default

// Module 15555 (MentionsBadge)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(Button.Badge, { value, isMentionLowImportance });
};
