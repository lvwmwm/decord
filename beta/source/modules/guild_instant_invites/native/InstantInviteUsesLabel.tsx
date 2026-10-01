// Module ID: 10410
// Function ID: 10411
// Name: InstantInviteUsesLabel
// Dependencies: [19, 21, 4832, 2]
// Exports: default

// Module 10410 (InstantInviteUsesLabel)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsxs = Fragment.jsxs;
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default function InstantInviteUsesLabel(style) {
  let maxUses;
  let uses;
  ({ uses, maxUses } = style);
  let combined = uses;
  style = style.style;
  if (0 !== maxUses) {
    const _HermesInternal = HermesInternal;
    combined = "" + uses + "/" + maxUses;
  }
  const items = ["Uses: ", combined];
  return jsxs(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", style, children: items });
};
