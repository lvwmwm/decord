// Module ID: 14515
// Function ID: 110833
// Name: Radio
// Dependencies: [57, 31, 27, 653, 33, 4130, 4126, 7654, 7653, 5501, 5502, 9060, 9132, 5165, 13142, 10746, 4658, 4541, 2]
// Exports: default

// Module 14515 (Radio)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function Radio() {
  let obj = {};
  const items = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Radio" }), callback2(require(4126) /* Text */.Text, { variant: "text-md/normal", children: "Select a single option from a short list of multiple options" }), ];
  obj = { title: "Role Colors", hasIcons: false, defaultValue: "color-in-names", onChange: NOOP };
  const items1 = [callback2(require(7653) /* TableRadioRow */.TableRadioRow, { label: "Show role colors in names", value: "color-in-names" }), callback2(require(7653) /* TableRadioRow */.TableRadioRow, { label: "Show role colors next to names", value: "color-next-to-names" }), callback2(require(7653) /* TableRadioRow */.TableRadioRow, { label: "Don't show role colors", value: "no-color" }), callback2(require(7653) /* TableRadioRow */.TableRadioRow, { label: "Disabled Item", subLabel: "This should not be selectable", value: "option4", disabled: true })];
  obj.children = items1;
  items[2] = callback3(require(7654) /* context */.TableRadioGroup, obj);
  obj.children = items;
  return callback3(closure_8, obj);
}
function useSwitchState(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let closure_0;
  const tmp = callback(React.useState(flag), 2);
  closure_0 = tmp[1];
  return {
    value: tmp[0],
    onValueChange: React.useCallback((arg0) => {
      callback(arg0);
    }, [])
  };
}
function Switch() {
  const tmp = useSwitchState();
  const tmp2 = useSwitchState(false);
  const tmp3 = useSwitchState();
  let obj = {};
  const items = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Switch" }), callback2(require(4126) /* Text */.Text, { variant: "text-md/normal", children: "Toggle the state of a single setting on or off, immediately" }), , ];
  obj = { title: "Emoji", hasIcons: false };
  obj = { label: "Show emoji reactions on messages", subLabel: "Show more information in less space" };
  const merged = Object.assign(tmp);
  obj.children = callback2(require(5502) /* TableSwitchRow */.TableSwitchRow, obj);
  items[2] = callback2(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj);
  const obj1 = { title: "Display images, videos, and lolcats", hasIcons: false };
  const merged1 = Object.assign(tmp2);
  const items1 = [callback2(require(5502) /* TableSwitchRow */.TableSwitchRow, { label: "When posted as links to chat" }), , , ];
  const merged2 = Object.assign(tmp3);
  items1[1] = callback2(require(5502) /* TableSwitchRow */.TableSwitchRow, { label: "When uploaded directly to Discord" });
  const merged3 = Object.assign(useSwitchState(false));
  items1[2] = callback2(require(5502) /* TableSwitchRow */.TableSwitchRow, { label: "With image descriptions" });
  const obj5 = { label: "Disabled switch item", subLabel: "This should not be switchable", disabled: true, value: false, onValueChange: NOOP };
  items1[3] = callback2(require(5502) /* TableSwitchRow */.TableSwitchRow, obj5);
  obj1.children = items1;
  items[3] = callback3(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj1);
  obj.children = items;
  return callback3(closure_8, obj);
}
function InlineCheckbox(startChecked) {
  let checked;
  let description;
  let label;
  let onPress;
  let required;
  let flag = startChecked.startChecked;
  ({ label, description, required } = startChecked);
  if (flag === undefined) {
    flag = false;
  }
  ({ checked, onPress } = (function useCheckboxState(flag) {
    if (flag === undefined) {
      flag = true;
    }
    let closure_0;
    const tmp = outer1_2(outer1_3.useState(flag), 2);
    closure_0 = tmp[1];
    return {
      checked: tmp[0],
      onPress: outer1_3.useCallback((arg0) => {
        callback(arg0);
      }, [])
    };
  })(flag));
  return callback2(require(9060) /* Checkbox */.Checkbox, { label, description, required, checked, onToggle });
}
function InlineCheckboxDemo() {
  const obj = {};
  const items = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Inline Checkbox" }), callback2(InlineCheckbox, { label: "Checkbox label", description: "This is a description", startChecked: true }), callback2(InlineCheckbox, { label: "Trust google.com links from now on" }), callback2(InlineCheckbox, { label: "I agree to the Terms of Service", required: true })];
  obj.children = items;
  return callback3(closure_8, obj);
}
function CheckboxRowDemo() {
  let obj = {};
  const items = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Checkbox" }), callback2(require(4126) /* Text */.Text, { variant: "text-md/normal", children: "Select one or more options from a short list of options" }), ];
  obj = { title: "Who can send you a friend request?", hasIcons: false };
  obj = { label: "Everyone", subLabel: "Anyone can send you a friend request", checked: false, onPress: NOOP };
  const items1 = [callback2(require(9132) /* TableCheckboxRow */.TableCheckboxRow, obj), , ];
  const obj1 = { label: "Friends of Friends", subLabel: "Anyone who is friends with your friends can send you a friend request", checked: true, onPress: NOOP };
  items1[1] = callback2(require(9132) /* TableCheckboxRow */.TableCheckboxRow, obj1);
  const obj2 = { label: "Server Members", subLabel: "Anyone who is in a server with you can send you a friend request", checked: true, onPress: NOOP };
  items1[2] = callback2(require(9132) /* TableCheckboxRow */.TableCheckboxRow, obj2);
  obj.children = items1;
  items[2] = callback3(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj);
  obj.children = items;
  return callback3(closure_8, obj);
}
function SliderDemo() {
  let obj = {};
  const items = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: "Slider" }), ];
  obj = { start: true, end: true, label: "Volume" };
  obj = { startIcon: callback2(require(10746) /* VoiceXIcon */.VoiceXIcon, {}), endIcon: callback2(require(4658) /* VoiceNormalIcon */.VoiceNormalIcon, {}), onValueChange: NOOP };
  obj.subLabel = callback2(require(13142) /* Slider */.Slider, obj);
  items[1] = callback2(require(5165) /* TableRowInner */.TableRow, obj);
  obj.children = items;
  return callback3(closure_8, obj);
}
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16, paddingBottom: 32 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemFormPrimitives.tsx");

export default function UserSettingsDesignSystemFormPrimitives() {
  let obj = {};
  obj = { spacing: 24, style: callback4().container };
  const items = [callback2(Radio, {}), callback2(Switch, {}), callback2(CheckboxRowDemo, {}), callback2(InlineCheckboxDemo, {}), callback2(SliderDemo, {})];
  obj.children = items;
  obj.children = callback3(require(4541) /* Stack */.Stack, obj);
  return callback2(ScrollView, obj);
};
