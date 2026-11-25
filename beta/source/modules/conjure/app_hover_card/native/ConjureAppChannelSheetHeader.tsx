// Module ID: 13900
// Function ID: 13901
// Name: ConjureAppChannelSheetHeader
// Dependencies: [19, 21, 4913, 5929, 575, 12287, 5504, 12290, 2]
// Exports: default

// Module 13900 (ConjureAppChannelSheetHeader)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5504 */;
import Stack_Stack from "Stack/Stack" /* 5929 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 12287 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp4;
const ConjureCreatorBylineDefault = tmp4(12290);
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ details: { flex: 1 } });
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/ConjureAppChannelSheetHeader.tsx");

export default function ConjureAppChannelSheetHeader(guildId) {
  let application;
  let creator;
  let items;
  let items1;
  ({ application, creator } = guildId);
  guildId = guildId.guildId;
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_12, align: "center", children: items };
  const tmp = closure_5();
  const Stack = Stack_Stack.Stack;
  items = [_false(ConjureAppSheetIconDefault, { application }), ];
  const obj2 = { spacing: nativeDefault.space.PX_4, style: tmp.details, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [, ];
  const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", lineClamp: 2, children: application.name };
  items1[0] = _false(Text_Text.Text, obj3);
  let tmp5Result = null;
  const tmp5 = _false;
  if (null != creator) {
    const obj4 = { creator, guildId };
    tmp5Result = tmp5(ConjureCreatorBylineDefault, obj4);
  }
  items1[1] = tmp5Result;
  items[1] = React3(Stack2, obj2);
  return React3(Stack, obj);
};
