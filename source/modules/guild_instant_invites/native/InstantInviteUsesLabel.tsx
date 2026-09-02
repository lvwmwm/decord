// Module ID: 10906
// Function ID: 10907
// Name: InstantInviteUsesLabel
// Dependencies: [19, 21, 4474, 2]
// Exports: default

// Module 10906 (InstantInviteUsesLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4474 */;
import { jsxs } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default function InstantInviteUsesLabel(style) {
  ({ uses, maxUses } = style);
  let combined = uses;
  if (0 !== maxUses) {
    const _HermesInternal = HermesInternal;
    combined = "" + uses + "/" + maxUses;
  }
  const children = ["Uses: ", combined];
  return jsxs(Text.Text, { variant: "text-md/semibold", color: "text-default", style: style.style, children });
};
