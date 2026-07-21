// Module ID: 14343
// Function ID: 108314
// Name: Radio
// Dependencies: []
// Exports: default

// Module 14343 (Radio)
function Radio() {
  let obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, { <string:1749439162>: true, <string:140675621>: true }), callback2(arg1(dependencyMap[6]).Text, { <string:1749439162>: false, <string:140675621>: false }), ];
  obj = { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, onChange: NOOP };
  const items1 = [callback2(arg1(dependencyMap[8]).TableRadioRow, { <string:2048437162>: 13341348115668932000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:2887950716>: NaN }), callback2(arg1(dependencyMap[8]).TableRadioRow, { <string:2048437162>: -458753, <string:2887950716>: 410189823 }), callback2(arg1(dependencyMap[8]).TableRadioRow, { <string:2048437162>: true, <string:2887950716>: true }), callback2(arg1(dependencyMap[8]).TableRadioRow, { accessible: true, variant: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZl", r: null, 1674994086: "e48043bf745ca0395ac959c7415a3757" })];
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
  const items = [callback2(arg1(dependencyMap[6]).Text, { <string:1749439162>: true, <string:140675621>: true }), callback2(arg1(dependencyMap[6]).Text, { <string:1749439162>: "text-sm/normal", <string:140675621>: "control-overlay-secondary-text-default" }), , ];
  obj = { "Bool(false)": "absolute", "Bool(false)": 0 };
  obj = {};
  const merged = Object.assign(tmp);
  obj.children = callback2(arg1(dependencyMap[10]).TableSwitchRow, obj);
  items[2] = callback2(arg1(dependencyMap[9]).TableRowGroup, obj);
  const obj1 = {};
  const merged1 = Object.assign(tmp2);
  const items1 = [callback2(arg1(dependencyMap[10]).TableSwitchRow, { label: "When posted as links to chat" }), , , ];
  const merged2 = Object.assign(tmp3);
  items1[1] = callback2(arg1(dependencyMap[10]).TableSwitchRow, { label: "When uploaded directly to Discord" });
  const merged3 = Object.assign(useSwitchState(false));
  items1[2] = callback2(arg1(dependencyMap[10]).TableSwitchRow, { label: "With image descriptions" });
  items1[3] = callback2(arg1(dependencyMap[10]).TableSwitchRow, { onValueChange: NOOP });
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
  const items = [callback2(arg1(dependencyMap[6]).Text, { <string:1749439162>: "construct", <string:140675621>: "isArray" }), callback2(InlineCheckbox, {}), callback2(InlineCheckbox, { label: "Trust google.com links from now on" }), callback2(InlineCheckbox, {})];
  obj.children = items;
  return callback3(closure_8, obj);
}
function CheckboxRowDemo() {
  let obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, { <string:1749439162>: "invalid_palette", <string:140675621>: "" }), callback2(arg1(dependencyMap[6]).Text, { <string:1749439162>: false, <string:140675621>: false }), ];
  obj = {};
  obj = { onPress: NOOP };
  const items1 = [callback2(arg1(dependencyMap[12]).TableCheckboxRow, obj), , ];
  const obj1 = { display: null, GUILD_BOOSTING_FAQ: null, animatedContentGestureState: null, onPress: NOOP };
  items1[1] = callback2(arg1(dependencyMap[12]).TableCheckboxRow, obj1);
  const obj2 = { display: "<string:16777748>", GUILD_BOOSTING_FAQ: "<string:35348547>", animatedContentGestureState: "<string:35348224>", onPress: NOOP };
  items1[2] = callback2(arg1(dependencyMap[12]).TableCheckboxRow, obj2);
  obj.children = items1;
  items[2] = callback3(arg1(dependencyMap[9]).TableRowGroup, obj);
  obj.children = items;
  return callback3(closure_8, obj);
}
function SliderDemo() {
  let obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, {}), ];
  obj = {};
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
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: {} });
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
