// Module ID: 15414
// Function ID: 15415
// Name: UserSettingsDesignSystemAIShimmer
// Dependencies: [32, 19, 17, 21, 4836, 5281, 5279, 5919, 4832, 13939, 2]
// Exports: default

// Module 15414 (UserSettingsDesignSystemAIShimmer)
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Card_Card from "Card/Card" /* 5919 */;
import AIShimmer from "AIShimmer" /* 13939 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function Picker(arg0) {
  ({ options, value: require, onChange: dependencyMap } = arg0);
  let obj = {
    style: closure_8().buttonRow,
    children: options.map((text) => {
      require = text;
      let str = "secondary";
      const Button = components_Button_Button.Button;
      const tmp = closure_1_6;
      if (text === require) {
        str = "primary";
      }
      const obj = {
        size: "sm",
        variant: str,
        text,
        onPress() {
          return dependencyMap(closure_0);
        }
      };
      return tmp(Button, obj, text);
    })
  };
  return closure_6(closure_5, obj);
}
function Stage(children) {
  const obj = { style: closure_8().stage, children: children.children };
  return metroRequire(hasOwnProperty, obj);
}
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { padding: 16 }, buttonRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, stage: { minHeight: 28, justifyContent: "center" } });
const text = ["Reading the channel", "Finding the highlights", "Writing it up"];
const options = ["text-xs/normal", "text-sm/normal", "text-md/normal", "text-lg/semibold"];
const options2 = ["text-default", "text-subtle"];
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAIShimmer.tsx");

export default function UserSettingsDesignSystemAIShimmer() {
  let Stack;
  let Stack2;
  let Stack3;
  let Stack4;
  let first;
  let first1;
  let first2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj15;
  let obj2;
  let obj20;
  let obj4;
  let obj7;
  let obj9;
  let tmp11;
  let tmp5;
  let tmp8;
  const tmp = closure_8();
  const ref = react.useRef(null);
  [first, tmp5] = react.useState("text-md/normal");
  [first1, tmp8] = react.useState("text-default");
  [first2, tmp11] = react.useState("text-subtle");
  const obj = { contentContainerStyle: tmp.container, children: metroImportDefault(Stack, obj2) };
  obj2 = { spacing: 24, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { children: metroImportDefault(Stack2, obj4) };
  const Card = Card_Card.Card;
  obj4 = { children: items };
  Stack2 = Stack_Stack.Stack;
  items = [metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: "Variant" }), metroRequire(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Any Mana text variant. The glyph band scales with the font size. Default `text-md/normal`." }), , ];
  const obj5 = { options, value: first, onChange: tmp5 };
  items[2] = metroRequire(Picker, obj5);
  const obj6 = { children: metroRequire(AIShimmer.AIShimmer, obj7) };
  obj7 = { text, variant: first };
  items[3] = metroRequire(Stage, obj6);
  items1 = [metroRequire(Card, obj3), , ];
  const obj8 = { children: metroImportDefault(Stack3, obj9) };
  const Card2 = Card_Card.Card;
  obj9 = { children: items2 };
  Stack3 = Stack_Stack.Stack;
  items2 = [metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" }), metroRequire(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The text and moving glyph band can use different colors." }), metroRequire(Text_Text.Text, { variant: "text-md/medium", children: "Text color" }), , , , ];
  const obj10 = { options: options2, value: first1, onChange: tmp8 };
  items2[3] = metroRequire(Picker, obj10);
  items2[4] = metroRequire(Text_Text.Text, { variant: "text-md/medium", children: "Glyph color" });
  const obj11 = { options: options2, value: first2, onChange: tmp11 };
  items2[5] = metroRequire(Picker, obj11);
  const obj12 = { children: metroRequire(AIShimmer.AIShimmer, obj13) };
  obj13 = { text, color: first1, glyphColor: first2 };
  items2[6] = metroRequire(Stage, obj12);
  items1[1] = metroRequire(Card2, obj8);
  const obj14 = { children: metroImportDefault(Stack4, obj15) };
  const Card3 = Card_Card.Card;
  obj15 = { children: items3 };
  Stack4 = Stack_Stack.Stack;
  items3 = [metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: "Manual Trigger" }), metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: ["`delay=", null, "` turns off automatic changes. Use play() to run the next animation."] }), , ];
  const obj16 = { style: tmp.buttonRow, children: items4 };
  items4 = [, ];
  const obj17 = {
    size: "sm",
    variant: "secondary",
    text: "play()",
    onPress() {
      const current = ref.current;
      let playResult;
      if (current != null) {
        playResult = current.play();
      }
      return playResult;
    }
  };
  items4[0] = metroRequire(components_Button_Button.Button, obj17);
  const obj18 = {
    size: "sm",
    variant: "secondary",
    text: "stop()",
    onPress() {
      const current = ref.current;
      let stopResult;
      if (current != null) {
        stopResult = current.stop();
      }
      return stopResult;
    }
  };
  items4[1] = metroRequire(components_Button_Button.Button, obj18);
  items3[2] = metroImportDefault(hasOwnProperty, obj16);
  const obj19 = { children: metroRequire(AIShimmer.AIShimmer, obj20) };
  obj20 = { ref, text, delay: null };
  items3[3] = metroRequire(Stage, obj19);
  items1[2] = metroRequire(Card3, obj14);
  return metroRequire(React3, obj);
};
