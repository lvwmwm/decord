// Module ID: 11254
// Function ID: 11255
// Name: InstantInviteUsesLabel
// Dependencies: [19, 21, 558, 568, 4754, 2]

// Module 11254 (InstantInviteUsesLabel)
import c from "c" /* 568 */;
import Text_Text from "Text/Text" /* 4754 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxs = fn(21).jsxs;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ uses, maxUses, style } = arg0);
  let combined = uses;
  if (0 !== maxUses) {
    const _HermesInternal = HermesInternal;
    combined = "" + uses + "/" + maxUses;
  }
  if (cResult[0] === combined) {
    if (cResult[1] === style) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  const obj2 = { variant: "text-md/semibold", color: "text-default", style, children: null };
  const items = ["Uses: ", combined];
  obj2.children = items;
  const tmp7 = jsxs(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", style, children: null });
  cResult[0] = combined;
  cResult[1] = style;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((style) => {
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
});
