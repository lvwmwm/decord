// Module ID: 10360
// Function ID: 10361
// Name: InstantInviteUsesLabel
// Dependencies: [19, 21, 4251, 2]
// Exports: default

// Module 10360 (InstantInviteUsesLabel)
import "noop";
import { jsxs } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default function InstantInviteUsesLabel(style) {
  let maxUses;
  let uses;
  ({ uses, maxUses } = style);
  let combined = uses;
  if (0 !== maxUses) {
    const _HermesInternal = HermesInternal;
    combined = "" + uses + "/" + maxUses;
  }
  const children = ["Uses: ", combined];
  return jsxs(require(4251) /* Text */.Text, { variant: "text-md/semibold", color: "text-default", style: style.style, children });
};
