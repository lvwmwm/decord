// Module ID: 13788
// Function ID: 13789
// Name: ConjureCreatorByline
// Dependencies: [19, 21, 5306, 6337, 575, 1187, 5929, 13789, 2]
// Exports: default

// Module 13788 (ConjureCreatorByline)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import conjureCreatorByline from "conjureCreatorByline" /* 13789 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ text: { flexShrink: 1 } });
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/ConjureCreatorByline.tsx");

export default function ConjureCreatorByline(arg0) {
  let creator;
  let guildId;
  let items;
  let tmp3Result;
  ({ creator, guildId } = arg0);
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: items };
  const tmp = closure_5();
  const Stack = Stack_Stack.Stack;
  const obj2 = { user: creator, guildId, size: native.AvatarSizes.XSMALL_20, accessible: false };
  const Avatar = native.Avatar;
  items = [_false(Avatar, obj2), ];
  const obj3 = { variant: "body-sm/normal", color: "text-muted", lineClamp: 1, style: tmp.text, children: tmp3Result.formatConjureCreatorByline(creator) };
  const Text = tmp3(5929).Text;
  tmp3Result = conjureCreatorByline;
  items[1] = _false(Text, obj3);
  return React3(Stack, obj);
};
