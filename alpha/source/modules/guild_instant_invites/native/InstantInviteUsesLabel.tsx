// Module ID: 13789
// Function ID: 13790
// Name: InstantInviteUsesLabel
// Dependencies: [19, 21, 5414, 2]
// Exports: default

// Module 13789 (InstantInviteUsesLabel)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5414 */;
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
  return jsxs(Text_Text.Text, { variant: "body-md/semibold", color: "text-default", style, children: items });
};
