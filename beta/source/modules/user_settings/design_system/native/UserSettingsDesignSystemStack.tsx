// Module ID: 15395
// Function ID: 15396
// Name: UserSettingsDesignSystemStack
// Dependencies: [19, 17, 21, 4836, 576, 5279, 5919, 4832, 2]
// Exports: default

// Module 15395 (UserSettingsDesignSystemStack)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import Card_Card from "Card/Card" /* 5919 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
function StackBlock() {
  const obj = { style: closure_6().block };
  return React3(React2, obj);
}
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { padding: 16, flex: 1, alignItems: "center" }, block: obj2 };
obj2 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 80, flex: 1 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx");

export default function UserSettingsDesignSystemStack() {
  let Stack;
  let Stack2;
  let Stack4;
  let Stack6;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj2;
  let obj3;
  let obj5;
  let obj8;
  const obj = { children: React3(React2, obj2) };
  obj2 = { style: closure_6().container, children: hasOwnProperty(Stack, obj3) };
  obj3 = { spacing: 16, children: items2 };
  Stack = Stack_Stack.Stack;
  const obj4 = { children: hasOwnProperty(Stack2, obj5) };
  const Card = Card_Card.Card;
  obj5 = { children: items };
  Stack2 = Stack_Stack.Stack;
  items = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks are vertical and have a spacing of 8." }), ];
  const obj6 = { children: items1 };
  const Stack3 = Stack_Stack.Stack;
  items1 = [React3(StackBlock, {}), React3(StackBlock, {})];
  items[2] = hasOwnProperty(Stack3, obj6);
  items2 = [React3(Card, obj4), , ];
  const obj7 = { children: hasOwnProperty(Stack4, obj8) };
  const Card2 = Card_Card.Card;
  obj8 = { children: items3 };
  Stack4 = Stack_Stack.Stack;
  items3 = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Spacing" }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8." }), ];
  const obj9 = { spacing: 24, children: items4 };
  const Stack5 = Stack_Stack.Stack;
  items4 = [React3(StackBlock, {}), React3(StackBlock, {})];
  items3[2] = hasOwnProperty(Stack5, obj9);
  items2[1] = React3(Card2, obj7);
  const obj10 = { children: hasOwnProperty(Stack6, obj11) };
  const Card3 = Card_Card.Card;
  obj11 = { children: items5 };
  Stack6 = Stack_Stack.Stack;
  items5 = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Horizontal" }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the direction with the direction prop. The direction prop can be either horizontal or vertical." }), ];
  const obj12 = { direction: "horizontal", children: items6 };
  const Stack7 = Stack_Stack.Stack;
  items6 = [React3(StackBlock, {}), React3(StackBlock, {})];
  items5[2] = hasOwnProperty(Stack7, obj12);
  items2[2] = React3(Card3, obj10);
  return React3(_false, obj);
};
