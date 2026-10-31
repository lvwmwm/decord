// Module ID: 17804
// Function ID: 17805
// Name: UserSettingsDesignSystemFormPrimitives
// Dependencies: [32, 19, 17, 1072, 21, 5014, 5624, 7058, 7061, 7060, 7369, 14607, 6974, 6975, 15853, 11949, 8673, 15852, 6027, 2]
// Exports: default

// Module 17804 (UserSettingsDesignSystemFormPrimitives)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Text_Text from "Text/Text" /* 5624 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6974 */;
import TableRow2 from "TableRow" /* 6975 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7058 */;
import TableRowGroup3 from "TableRowGroup" /* 7060 */;
import TableRadioRow from "TableRadioRow" /* 7061 */;
import TableSwitchRow5 from "TableSwitchRow" /* 7369 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8673 */;
import VoiceXIcon from "VoiceXIcon" /* 11949 */;
import Checkbox from "Checkbox" /* 14607 */;
import TableSliderRow from "TableSliderRow" /* 15852 */;
import Slider2 from "Slider" /* 15853 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function Radio() {
  let items;
  let items1;
  const obj = { children: items };
  items = [metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Radio" }), metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Select a single option from a short list of multiple options" }), ];
  const obj2 = { title: "Role Colors", hasIcons: false, defaultValue: "color-in-names", onChange: NOOP, children: items1 };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  items1 = [metroRequire(TableRadioRow.TableRadioRow, { label: "Show role colors in names", value: "color-in-names" }), metroRequire(TableRadioRow.TableRadioRow, { label: "Show role colors next to names", value: "color-next-to-names" }), metroRequire(TableRadioRow.TableRadioRow, { label: "Don't show role colors", value: "no-color" }), metroRequire(TableRadioRow.TableRadioRow, { label: "Disabled Item", subLabel: "This should not be selectable", value: "option4", disabled: true })];
  items[2] = metroImportDefault(TableRadioGroup, obj2);
  return metroImportDefault(metroImportAll, obj);
}
function Switch() {
  let TableSwitchRow;
  let c0;
  let closure_129_0;
  let items;
  let items1;
  let obj7;
  let tmp2;
  let tmp4;
  let tmp6;
  let tmp8;
  const f113014 = (arg0) => {
    _undefined(arg0);
  };
  [tmp2, closure_129_0] = _slicedToArray(react.useState(true), 2);
  const tmp = _slicedToArray(react.useState(true), 2);
  const obj = { value: tmp2, onValueChange: react.useCallback(f113014, []) };
  [tmp4, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj2 = { value: tmp4, onValueChange: react.useCallback(f113014, []) };
  [tmp6, c0] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  c0 = undefined;
  const obj3 = { value: tmp6, onValueChange: react.useCallback(f113014, []) };
  [tmp8, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj5 = { children: items };
  items = [, , , ];
  const obj4 = { value: tmp8, onValueChange: react.useCallback(f113014, []) };
  items[0] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Switch" });
  items[1] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Toggle the state of a single setting on or off, immediately" });
  const obj6 = { title: "Emoji", hasIcons: false, children: metroRequire(TableSwitchRow, obj7) };
  const TableRowGroup = TableRowGroup3.TableRowGroup;
  obj7 = { label: "Show emoji reactions on messages", subLabel: "Show more information in less space" };
  TableSwitchRow = TableSwitchRow5.TableSwitchRow;
  const merged = Object.assign(obj);
  items[2] = metroRequire(TableRowGroup, obj6);
  const obj8 = { title: "Display images, videos, and lolcats", hasIcons: false, children: items1 };
  const TableRowGroup2 = TableRowGroup3.TableRowGroup;
  const obj9 = { label: "When posted as links to chat" };
  const TableSwitchRow2 = TableSwitchRow5.TableSwitchRow;
  const merged1 = Object.assign(obj2);
  items1 = [metroRequire(TableSwitchRow2, obj9), , , ];
  const obj10 = { label: "When uploaded directly to Discord" };
  const TableSwitchRow3 = TableSwitchRow5.TableSwitchRow;
  const merged2 = Object.assign(obj3);
  items1[1] = metroRequire(TableSwitchRow3, obj10);
  const obj11 = { label: "With image descriptions" };
  const TableSwitchRow4 = TableSwitchRow5.TableSwitchRow;
  const merged3 = Object.assign(obj4);
  items1[2] = metroRequire(TableSwitchRow4, obj11);
  const obj12 = { label: "Disabled switch item", subLabel: "This should not be switchable", disabled: true, value: false, onValueChange: NOOP };
  items1[3] = metroRequire(TableSwitchRow5.TableSwitchRow, obj12);
  items[3] = metroImportDefault(TableRowGroup2, obj8);
  return metroImportDefault(metroImportAll, obj5);
}
function InlineCheckbox(startChecked) {
  let c0;
  let description;
  let label;
  let required;
  let tmp2;
  let flag = startChecked.startChecked;
  ({ label, description, required } = startChecked);
  if (flag === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = true;
  }
  c0 = undefined;
  [tmp2, c0] = _slicedToArray(react.useState(flag), 2);
  const tmp = _slicedToArray(react.useState(flag), 2);
  const onToggle = react.useCallback((arg0) => {
    _undefined(arg0);
  }, []);
  return metroRequire(Checkbox.Checkbox, { label, description, required, checked, onToggle });
}
function InlineCheckboxDemo() {
  let items;
  const obj = { children: items };
  items = [metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Inline Checkbox" }), metroRequire(InlineCheckbox, { label: "Checkbox label", description: "This is a description", startChecked: true }), metroRequire(InlineCheckbox, { label: "Trust google.com links from now on" }), metroRequire(InlineCheckbox, { label: "I agree to the Terms of Service", required: true })];
  return metroImportDefault(metroImportAll, obj);
}
function CheckboxRowDemo() {
  let items;
  let items1;
  const obj = { children: items };
  items = [metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Checkbox" }), metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Select one or more options from a short list of options" }), ];
  const obj2 = { title: "Who can send you a friend request?", hasIcons: false, children: items1 };
  const TableRowGroup = TableRowGroup3.TableRowGroup;
  items1 = [, , ];
  const obj3 = { label: "Everyone", subLabel: "Anyone can send you a friend request", checked: false, onPress: NOOP };
  items1[0] = metroRequire(TableCheckboxRow.TableCheckboxRow, obj3);
  const obj4 = { label: "Friends of Friends", subLabel: "Anyone who is friends with your friends can send you a friend request", checked: true, onPress: NOOP };
  items1[1] = metroRequire(TableCheckboxRow.TableCheckboxRow, obj4);
  const obj5 = { label: "Server Members", subLabel: "Anyone who is in a server with you can send you a friend request", checked: true, onPress: NOOP };
  items1[2] = metroRequire(TableCheckboxRow.TableCheckboxRow, obj5);
  items[2] = metroImportDefault(TableRowGroup, obj2);
  return metroImportDefault(metroImportAll, obj);
}
function SliderDemo() {
  let Slider;
  let items;
  let obj3;
  const obj = { children: items };
  items = [metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Slider" }), ];
  const obj2 = { start: true, end: true, label: "Volume", subLabel: metroRequire(Slider, obj3) };
  const TableRow = TableRow2.TableRow;
  obj3 = { startIcon: metroRequire(VoiceXIcon.VoiceXIcon, {}), endIcon: metroRequire(VoiceNormalIcon.VoiceNormalIcon, {}), onChange: NOOP, accessibilityLabel: "Volume" };
  Slider = Slider2.Slider;
  items[1] = metroRequire(TableRow, obj2);
  return metroImportDefault(metroImportAll, obj);
}
function TableSliderRowDemo() {
  let items;
  let obj3;
  const obj = { children: items };
  items = [metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "TableSliderRow" }), metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "A slider setting with its label and current value, for settings tables" }), ];
  const obj2 = { hasIcons: false, children: metroRequire(TableSliderRow.TableSliderRow, obj3) };
  const TableRowGroup = TableRowGroup3.TableRowGroup;
  obj3 = {
    label: "Bitrate",
    defaultValue: 64,
    minValue: 8,
    maxValue: 96,
    formatValue(arg0) {
      return "" + Math.round(arg0) + "kbps";
    }
  };
  items[2] = metroRequire(TableRowGroup, obj2);
  return metroImportDefault(metroImportAll, obj);
}
const ScrollView = react_native.ScrollView;
const NOOP = Constants.NOOP;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 32 } });
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemFormPrimitives.tsx");

export default function UserSettingsDesignSystemFormPrimitives() {
  let Stack;
  let items;
  let obj2;
  const obj = { children: metroImportDefault(Stack, obj2) };
  obj2 = { spacing: 24, style: closure_9().container, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroRequire(Radio, {}), metroRequire(Switch, {}), metroRequire(CheckboxRowDemo, {}), metroRequire(InlineCheckboxDemo, {}), metroRequire(SliderDemo, {}), metroRequire(TableSliderRowDemo, {})];
  return metroRequire(ScrollView, obj);
};
