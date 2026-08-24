// Module ID: 10011
// Function ID: 10012
// Name: InstantInviteUsesLabel
// Dependencies: [19, 21, 4739, 2]
// Exports: default

// Module 10011 (InstantInviteUsesLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4739 */;
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
