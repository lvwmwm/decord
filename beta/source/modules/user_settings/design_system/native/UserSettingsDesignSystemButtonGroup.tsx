// Module ID: 15366
// Function ID: 15367
// Name: UserSettingsDesignSystemButtonGroup
// Dependencies: [19, 17, 21, 4836, 5279, 4832, 5745, 5281, 7363, 6799, 2]
// Exports: default

// Module 15366 (UserSettingsDesignSystemButtonGroup)
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ButtonGroup4 from "ButtonGroup" /* 5745 */;
import AssetRegistryDefault from "AssetRegistry" /* 6799 */;
import IconButton4 from "IconButton" /* 7363 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 64 } });
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx");

export default function UserSettingsDesignSystemButtonGroup() {
  let Stack;
  let Stack2;
  let Stack3;
  let Stack4;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj15;
  let obj2;
  let obj3;
  let obj5;
  const obj = { children: hasOwnProperty(_false, obj2) };
  obj2 = { style: closure_7().container, children: metroRequire(Stack, obj3) };
  obj3 = { spacing: 24, children: items2 };
  const obj4 = { children: metroRequire(Stack2, obj5) };
  Stack = Stack_Stack.Stack;
  obj5 = { children: items };
  Stack2 = Stack_Stack.Stack;
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Text Button Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks buttons vertically. This is best for buttons with text." }), ];
  const obj6 = { children: items1 };
  const ButtonGroup = ButtonGroup4.ButtonGroup;
  items1 = [, ];
  const obj7 = {
    text: "Agree",
    variant: "primary",
    onPress() {

    }
  };
  items1[0] = hasOwnProperty(components_Button_Button.Button, obj7);
  const obj8 = {
    text: "Cancel",
    variant: "secondary",
    onPress() {

    }
  };
  items1[1] = hasOwnProperty(components_Button_Button.Button, obj8);
  items[2] = metroRequire(ButtonGroup, obj6);
  items2 = [hasOwnProperty(_false, obj4), , ];
  const obj9 = { children: metroRequire(Stack3, obj10) };
  obj10 = { children: items3 };
  Stack3 = Stack_Stack.Stack;
  items3 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "IconButton Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "For IconButtons, a horizontal layout is recommended" }), ];
  const obj11 = { direction: "horizontal", children: items4 };
  const ButtonGroup2 = ButtonGroup4.ButtonGroup;
  const obj12 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: AssetRegistryDefault,
    onPress() {

    }
  };
  const IconButton = IconButton4.IconButton;
  items4 = [hasOwnProperty(IconButton, obj12), ];
  const obj13 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: AssetRegistryDefault,
    onPress() {

    }
  };
  const IconButton2 = IconButton4.IconButton;
  items4[1] = hasOwnProperty(IconButton2, obj13);
  items3[2] = metroRequire(ButtonGroup2, obj11);
  items2[1] = hasOwnProperty(_false, obj9);
  const obj14 = { children: metroRequire(Stack4, obj15) };
  obj15 = { children: items5 };
  Stack4 = Stack_Stack.Stack;
  items5 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout." }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The Button with text must have the grow prop." }), , , ];
  const obj16 = { direction: "horizontal", children: items6 };
  const ButtonGroup3 = ButtonGroup4.ButtonGroup;
  items6 = [, ];
  const obj17 = {
    text: "Search",
    variant: "secondary",
    grow: true,
    onPress() {

    }
  };
  items6[0] = hasOwnProperty(components_Button_Button.Button, obj17);
  const obj18 = {
    accessibilityLabel: "Cancel",
    variant: "secondary",
    icon: AssetRegistryDefault,
    onPress() {

    }
  };
  const IconButton3 = IconButton4.IconButton;
  items6[1] = hasOwnProperty(IconButton3, obj18);
  items5[3] = metroRequire(ButtonGroup3, obj16);
  items5[4] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children: "More than one text button should not be put in a horizontal group." });
  items5[5] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons." });
  items2[2] = hasOwnProperty(_false, obj14);
  return hasOwnProperty(React3, obj);
};
