// Module ID: 12287
// Function ID: 12288
// Name: ConjureCreatorByline
// Dependencies: [19, 21, 4913, 5929, 575, 1186, 5504, 12288, 2]
// Exports: default

// Module 12287 (ConjureCreatorByline)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import Stack_Stack from "Stack/Stack" /* 5929 */;
import conjureCreatorByline from "conjureCreatorByline" /* 12288 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
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
  const Text = tmp3(5504).Text;
  tmp3Result = conjureCreatorByline;
  items[1] = _false(Text, obj3);
  return React3(Stack, obj);
};
