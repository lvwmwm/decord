// Module ID: 15368
// Function ID: 15369
// Name: UserSettingsDesignSystemRowButton
// Dependencies: [19, 17, 21, 8053, 5279, 576, 4832, 8055, 6799, 2]
// Exports: default

// Module 15368 (UserSettingsDesignSystemRowButton)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import AssetRegistryDefault from "AssetRegistry" /* 6799 */;
import Form from "Form" /* 8053 */;
import RowButton8 from "RowButton" /* 8055 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx");

export default function UserSettingsDesignSystemRowButton() {
  let Icon;
  let Stack;
  let Stack2;
  let items;
  let items1;
  let items2;
  let obj13;
  let obj3;
  let obj4;
  let obj6;
  const obj = { children: items1 };
  const obj2 = { title: "Row Buttons", description: metroRequire(Stack, obj3), children: hasOwnProperty(_false, {}) };
  const FormSection = Form.FormSection;
  obj3 = { style: obj4, children: items };
  obj4 = { padding: nativeDefault.space.PX_16 };
  Stack = Stack_Stack.Stack;
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue." })];
  items1 = [hasOwnProperty(FormSection, obj2), ];
  const obj5 = { style: { padding: 16 }, children: metroRequire(Stack2, obj6) };
  obj6 = { children: items2 };
  Stack2 = Stack_Stack.Stack;
  const obj7 = {
    variant: "primary",
    icon: AssetRegistryDefault,
    label: "Primary Row Button",
    onPress() {

    }
  };
  const RowButton = RowButton8.RowButton;
  items2 = [hasOwnProperty(RowButton, obj7), , , , , , ];
  const obj8 = {
    variant: "primary",
    icon: AssetRegistryDefault,
    label: "Primary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  const RowButton2 = RowButton8.RowButton;
  items2[1] = hasOwnProperty(RowButton2, obj8);
  const obj9 = {
    variant: "secondary",
    icon: AssetRegistryDefault,
    label: "Secondary Row Button",
    onPress() {

    }
  };
  const RowButton3 = RowButton8.RowButton;
  items2[2] = hasOwnProperty(RowButton3, obj9);
  const obj10 = {
    icon: AssetRegistryDefault,
    label: "Secondary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  const RowButton4 = RowButton8.RowButton;
  items2[3] = hasOwnProperty(RowButton4, obj10);
  const obj11 = {
    icon: AssetRegistryDefault,
    label: "Secondary Row Button",
    subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
    onPress() {

    }
  };
  const RowButton5 = RowButton8.RowButton;
  items2[4] = hasOwnProperty(RowButton5, obj11);
  const obj12 = {
    icon: hasOwnProperty(Icon, obj13),
    label: "Row Button",
    subLabel: "With a custom RowButton.Icon",
    onPress() {

    }
  };
  const RowButton6 = RowButton8.RowButton;
  obj13 = { source: AssetRegistryDefault };
  Icon = RowButton8.RowButton.Icon;
  items2[5] = hasOwnProperty(RowButton6, obj12);
  const obj14 = {
    icon: AssetRegistryDefault,
    label: "Row Button",
    subLabel: "I am disabled",
    onPress() {

    },
    disabled: true
  };
  const RowButton7 = RowButton8.RowButton;
  items2[6] = hasOwnProperty(RowButton7, obj14);
  items1[1] = hasOwnProperty(_false, obj5);
  return metroRequire(React3, obj);
};
