// Module ID: 10215
// Function ID: 78861
// Name: InstantInviteUsesLabel
// Dependencies: [31, 33, 4126, 2]
// Exports: default

// Module 10215 (InstantInviteUsesLabel)
import "result";
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
  const obj = { variant: "text-md/semibold", color: "text-default", style: style.style };
  const items = ["Uses: ", combined];
  obj.children = items;
  return jsxs(require(4126) /* Text */.Text, { variant: "text-md/semibold", color: "text-default", style: style.style });
};
