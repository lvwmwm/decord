// Module ID: 11301
// Function ID: 11302
// Name: InstantInviteUsesLabel
// Dependencies: [19, 21, 4825, 2]
// Exports: default

// Module 11301 (InstantInviteUsesLabel)
import Text_Text from "Text/Text" /* 4825 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxs = fn(21).jsxs;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default function InstantInviteUsesLabel(style) {
  ({ uses, maxUses } = style);
  let combined = uses;
  if (0 !== maxUses) {
    const _HermesInternal = HermesInternal;
    combined = "" + uses + "/" + maxUses;
  }
  const obj = { variant: "text-md/semibold", color: "text-default", style: style.style, children: null };
  const items = ["Uses: ", combined];
  obj.children = items;
  return jsxs(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", style: style.style, children: null });
};
