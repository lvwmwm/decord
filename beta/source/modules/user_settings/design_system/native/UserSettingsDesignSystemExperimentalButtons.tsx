// Module ID: 15370
// Function ID: 15371
// Name: UserSettingsDesignSystemExperimentalButtons
// Dependencies: [19, 17, 1074, 21, 4531, 576, 8370, 5279, 5999, 5925, 6473, 4780, 5281, 4832, 4540, 5293, 8055, 6799, 2]
// Exports: default

// Module 15370 (UserSettingsDesignSystemExperimentalButtons)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useToken from "useToken" /* 4531 */;
import native from "native" /* 4540 */;
import AssetRegistryDefault from "AssetRegistry" /* 4780 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 5925 */;
import TableRowGroup7 from "TableRowGroup" /* 5999 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 6473 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 6799 */;
import RowButton2 from "RowButton" /* 8055 */;
import native2 from "native" /* 8370 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ View: c3, ScrollView: closure_4 } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx");

export default function UserSettingsDesignSystemExperimentalButtons() {
  let HeaderButton;
  let PressableScale;
  let RowButton;
  let Stack;
  let Stack2;
  let TwinButtons;
  let items;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj12;
  let obj16;
  let obj20;
  let obj21;
  let obj22;
  let obj25;
  let obj26;
  let obj6;
  let obj8;
  let obj9;
  let tmp3;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj2 = native2;
  const collapsibleFloatingActionButtonState = obj2.useCollapsibleFloatingActionButtonState();
  const obj4 = { children: items3 };
  const obj3 = native2;
  const obj5 = { onScroll: obj3.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState), children: metroImportDefault(Stack, obj6) };
  obj6 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: items };
  Stack = Stack_Stack.Stack;
  const obj7 = { title: "Header Button", description: "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.", hasIcons: false, children: metroRequire(_false, obj8) };
  obj8 = { style: obj9, children: metroRequire(HeaderButton, obj10) };
  obj9 = { alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
  const TableRowGroup = TableRowGroup7.TableRowGroup;
  obj10 = {
    onPress() {

    },
    text: "Channel Name",
    icon: AssetRegistryDefault2,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6
  };
  HeaderButton = native2.HeaderButton;
  items = [metroRequire(TableRowGroup, obj7), , , , , , ];
  const obj11 = { title: "Input Button", description: "A specialized button which looks like a text field, but functions as a button.", hasIcons: false, children: metroImportDefault(Stack2, obj12) };
  const TableRowGroup2 = TableRowGroup7.TableRowGroup;
  obj12 = { spacing: nativeDefault.space.PX_24, children: items1 };
  Stack2 = Stack_Stack.Stack;
  const obj13 = {
    onPress() {

    },
    size: "lg",
    text: "Search",
    icon: AssetRegistryDefault3,
    round: true
  };
  const InputButton = native2.InputButton;
  items1 = [metroRequire(InputButton, obj13), ];
  const obj14 = {
    onPress() {

    },
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: AssetRegistryDefault,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  };
  const InputButton2 = native2.InputButton;
  items1[1] = metroRequire(InputButton2, obj14);
  items[1] = metroRequire(TableRowGroup2, obj11);
  const obj15 = { title: "Twin Buttons", description: "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.", hasIcons: false, children: metroImportDefault(TwinButtons, obj16) };
  const TableRowGroup3 = TableRowGroup7.TableRowGroup;
  obj16 = { children: items2 };
  TwinButtons = native2.TwinButtons;
  items2 = [, ];
  const obj17 = {
    onPress() {

    },
    text: "Add Status"
  };
  items2[0] = metroRequire(components_Button_Button.Button, obj17);
  const obj18 = {
    onPress() {

    },
    text: "Edit Profile"
  };
  items2[1] = metroRequire(components_Button_Button.Button, obj18);
  items[2] = metroRequire(TableRowGroup3, obj15);
  const obj19 = { title: "PressableScale", description: "If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.", hasIcons: false, children: metroRequire(_false, obj20) };
  obj20 = { style: { padding: token }, children: metroRequire(PressableScale, obj21) };
  const TableRowGroup4 = TableRowGroup7.TableRowGroup;
  obj21 = {
    onPress() {

    },
    children: metroRequire(_false, obj22)
  };
  obj22 = { style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 }, children: metroRequire(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }) };
  PressableScale = native2.PressableScale;
  items[3] = metroRequire(TableRowGroup4, obj19);
  const obj23 = { title: "Experimental Blur Background Row Button", description: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.", hasIcons: false, children: metroRequire(_false, {}) };
  const TableRowGroup5 = TableRowGroup7.TableRowGroup;
  items[4] = metroRequire(TableRowGroup5, obj23);
  const obj24 = { theme: ThemeTypes.DARK, children: metroRequire(tmp3, obj25) };
  const ThemeContextProvider = native.ThemeContextProvider;
  obj25 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"], children: metroRequire(RowButton, obj26) };
  obj26 = {
    icon: AssetRegistryDefault4,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {

    }
  };
  tmp3 = LinearGradientDefault;
  RowButton = RowButton2.RowButton;
  items[5] = metroRequire(ThemeContextProvider, obj24);
  const obj27 = { title: "Collapsible Floating Action Button", description: "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.", hasIcons: false, children: metroRequire(_false, { style: { padding: 48 } }) };
  const TableRowGroup6 = TableRowGroup7.TableRowGroup;
  items[6] = metroRequire(TableRowGroup6, obj27);
  items3 = [metroRequire(React3, obj5), ];
  const obj28 = {
    icon: AssetRegistryDefault4,
    onPress() {

    },
    positionBottom: 32,
    text: "Floating Action Button",
    state: collapsibleFloatingActionButtonState
  };
  const CollapsibleFloatingActionButton = native2.CollapsibleFloatingActionButton;
  items3[1] = metroRequire(CollapsibleFloatingActionButton, obj28);
  return metroImportDefault(_false, obj4);
};
