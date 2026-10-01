// Module ID: 15412
// Function ID: 15413
// Name: UserSettingsDesignSystemAILoader
// Dependencies: [19, 17, 21, 4836, 4832, 5279, 5919, 13935, 2]
// Exports: default

// Module 15412 (UserSettingsDesignSystemAILoader)
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import Card_Card from "Card/Card" /* 5919 */;
import AILoader from "AILoader" /* 13935 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
function DemoRow(arg0) {
  let children;
  let label;
  ({ label, children } = arg0);
  const obj = { style: closure_6().row, children: items };
  items = [React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: label }), children];
  return hasOwnProperty(_false, obj);
}
({ ScrollView: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { padding: 16 }, row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } });
let closure_7 = [12, 16, 24];
let items = [{ color: "text-default", label: "text-default" }, { color: "text-subtle", label: "text-subtle" }];
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAILoader.tsx");

export default function UserSettingsDesignSystemAILoader() {
  let Stack;
  let Stack2;
  let Stack3;
  let items1;
  let items2;
  let obj2;
  let obj4;
  let obj6;
  let obj = { contentContainerStyle: closure_6().container, children: hasOwnProperty(Stack, obj2) };
  obj2 = { spacing: 24, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { children: hasOwnProperty(Stack2, obj4) };
  const Card = Card_Card.Card;
  obj4 = { children: items };
  Stack2 = Stack_Stack.Stack;
  items = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Sizes" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "`size` is the glyph size in pixels; the gap between slots scales with it. Default 16." }),
    closure_7.map((size) => {
      let obj2;
      const obj = { label: "" + size + "px", children: closure_1_4(AILoader.AILoader, obj2) };
      obj2 = { size };
      return closure_1_4(DemoRow, obj, size);
    })
  ];
  items1 = [React3(Card, obj3), ];
  const obj5 = { children: hasOwnProperty(Stack3, obj6) };
  const Card2 = Card_Card.Card;
  obj6 = { children: items2 };
  Stack3 = Stack_Stack.Stack;
  items2 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Any semantic text token. Defaults to `text-default`." }),
    items.map((color) => {
      const label = color.label;
      const obj = { label, children: closure_1_4(AILoader.AILoader, { color: color.color }) };
      return closure_1_4(DemoRow, obj, label);
    })
  ];
  items1[1] = React3(Card2, obj5);
  return React3(React2, obj);
};
