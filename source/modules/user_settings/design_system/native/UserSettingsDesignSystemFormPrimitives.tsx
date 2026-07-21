// Module ID: 14340
// Function ID: 108282
// Name: Radio
// Dependencies: []
// Exports: default

// Module 14340 (Radio)
function Radio() {
  let obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, { "Null": true, "Null": true }), callback2(arg1(dependencyMap[6]).Text, { "Null": true, "Null": true }), ];
  obj = { enableAnimation: "Array", landscapeSelector: "isArray", GAME_SERVER_WAKE: "accessibilityRole", onChange: NOOP };
  const items1 = [callback2(arg1(dependencyMap[8]).TableRadioRow, { raw: "r", body: "isArray" }), callback2(arg1(dependencyMap[8]).TableRadioRow, { raw: false, body: false }), callback2(arg1(dependencyMap[8]).TableRadioRow, { raw: -1793, body: 1602303 }), callback2(arg1(dependencyMap[8]).TableRadioRow, { accessibilityElementsHidden: true, importantForAccessibility: "/assets/modules/go_live", position: null, top: "f6e3c365e8a3adf05325d11d5ed6a02b" })];
  obj.children = items1;
  items[2] = callback3(arg1(dependencyMap[7]).TableRadioGroup, obj);
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
  const items = [callback2(arg1(dependencyMap[6]).Text, {}), callback2(arg1(dependencyMap[6]).Text, { "Null": true, "Null": true }), , ];
  obj = { "Bool(false)": "r", "Bool(false)": "isArray" };
  obj = {};
  const merged = Object.assign(tmp);
  obj.children = callback2(arg1(dependencyMap[10]).TableSwitchRow, obj);
  items[2] = callback2(arg1(dependencyMap[9]).TableRowGroup, obj);
  const obj1 = { "Bool(false)": null, "Bool(false)": null };
  const merged1 = Object.assign(tmp2);
  const items1 = [callback2(arg1(dependencyMap[10]).TableSwitchRow, { label: "When posted as links to chat" }), , , ];
  const merged2 = Object.assign(tmp3);
  items1[1] = callback2(arg1(dependencyMap[10]).TableSwitchRow, { label: "When uploaded directly to Discord" });
  const merged3 = Object.assign(useSwitchState(false));
  items1[2] = callback2(arg1(dependencyMap[10]).TableSwitchRow, { label: "With image descriptions" });
  const obj5 = { 765285362: true, 765363082: true, -731778973: true, 1677984849: true, onValueChange: NOOP };
  items1[3] = callback2(arg1(dependencyMap[10]).TableSwitchRow, obj5);
  obj1.children = items1;
  items[3] = callback3(arg1(dependencyMap[9]).TableRowGroup, obj1);
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
  ({ checked, onPress } = function useCheckboxState(flag) {
    if (flag === undefined) {
      flag = true;
    }
    let closure_0;
    const tmp = callback(React.useState(flag), 2);
    closure_0 = tmp[1];
    return {
      checked: tmp[0],
      onPress: React.useCallback((arg0) => {
        callback(arg0);
      }, [])
    };
  }(flag));
  return callback2(arg1(dependencyMap[11]).Checkbox, { label, description, required, checked, onToggle });
}
function InlineCheckboxDemo() {
  const obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, {}), callback2(InlineCheckbox, {}), callback2(InlineCheckbox, { label: "Trust google.com links from now on" }), callback2(InlineCheckbox, {})];
  obj.children = items;
  return callback3(closure_8, obj);
}
function CheckboxRowDemo() {
  let obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, { "Null": true, "Null": true }), callback2(arg1(dependencyMap[6]).Text, { "Null": false, "Null": false }), ];
  obj = {};
  obj = { onPress: NOOP };
  const items1 = [callback2(arg1(dependencyMap[12]).TableCheckboxRow, obj), , ];
  const obj1 = { "Bool(false)": "Array", "Bool(false)": "SERVER_GUIDE_CHANNEL_SELECTED", "Bool(false)": "REMOTE_COMMAND", onPress: NOOP };
  items1[1] = callback2(arg1(dependencyMap[12]).TableCheckboxRow, obj1);
  const obj2 = { "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020734361615981828, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007368407964913208, "Bool(false)": 278528.29358007014, onPress: NOOP };
  items1[2] = callback2(arg1(dependencyMap[12]).TableCheckboxRow, obj2);
  obj.children = items1;
  items[2] = callback3(arg1(dependencyMap[9]).TableRowGroup, obj);
  obj.children = items;
  return callback3(closure_8, obj);
}
function SliderDemo() {
  let obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, {}), ];
  obj = { "Bool(false)": "<string:1890058242>", "Bool(false)": "<string:1889927171>", "Bool(false)": "<string:998703107>" };
  obj = { startIcon: callback2(arg1(dependencyMap[15]).VoiceXIcon, {}), endIcon: callback2(arg1(dependencyMap[16]).VoiceNormalIcon, {}), onValueChange: NOOP };
  obj.subLabel = callback2(arg1(dependencyMap[14]).Slider, obj);
  items[1] = callback2(arg1(dependencyMap[13]).TableRow, obj);
  obj.children = items;
  return callback3(closure_8, obj);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
const NOOP = arg1(dependencyMap[3]).NOOP;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: { 0: "SERVER_GUIDE_CHANNEL_SELECTED", 9223372036854775807: "canLaunchActivity" } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemFormPrimitives.tsx");

export default function UserSettingsDesignSystemFormPrimitives() {
  let obj = {};
  obj = { spacing: 24, style: callback4().container };
  const items = [callback2(Radio, {}), callback2(Switch, {}), callback2(CheckboxRowDemo, {}), callback2(InlineCheckboxDemo, {}), callback2(SliderDemo, {})];
  obj.children = items;
  obj.children = callback3(arg1(dependencyMap[17]).Stack, obj);
  return callback2(ScrollView, obj);
};
