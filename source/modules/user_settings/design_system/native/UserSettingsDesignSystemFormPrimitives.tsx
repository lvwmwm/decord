// Module ID: 14351
// Function ID: 108357
// Name: Radio
// Dependencies: []
// Exports: default

// Module 14351 (Radio)
function Radio() {
  let obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, { <string:2807142664>: "text-md/medium", <string:1446667417>: "text-subtle" }), callback2(arg1(dependencyMap[6]).Text, { <string:2807142664>: 1107296668, <string:1446667417>: 131135 }), ];
  obj = { enableAnimation: null, resizeMode: null, style: null, onChange: NOOP };
  const items1 = [callback2(arg1(dependencyMap[8]).TableRadioRow, {}), callback2(arg1(dependencyMap[8]).TableRadioRow, { "Null": true, "Null": true }), callback2(arg1(dependencyMap[8]).TableRadioRow, { "Null": -458753, "Null": 410189823 }), callback2(arg1(dependencyMap[8]).TableRadioRow, { 9223372036854775807: true, 9223372036854775807: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZl", 0: null, 9223372036854775807: "fe4b97b436254fc7acefb2a09ad076de" })];
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
  const items = [callback2(arg1(dependencyMap[6]).Text, { <string:2807142664>: true, <string:1446667417>: true }), callback2(arg1(dependencyMap[6]).Text, { <string:2807142664>: "text-lg/bold", <string:1446667417>: "control-overlay-secondary-text-default" }), , ];
  obj = { -9223372036854775808: "text-sm/normal", 9223372036854775807: "control-overlay-secondary-text-default" };
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
  const items = [callback2(arg1(dependencyMap[6]).Text, { <string:2807142664>: "MenuAlign", <string:1446667417>: "<string:457310208>" }), callback2(InlineCheckbox, {}), callback2(InlineCheckbox, { label: "Trust google.com links from now on" }), callback2(InlineCheckbox, {})];
  obj.children = items;
  return callback3(closure_8, obj);
}
function CheckboxRowDemo() {
  let obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, { <string:2807142664>: 1866596355, <string:1446667417>: -587201805 }), callback2(arg1(dependencyMap[6]).Text, { <string:2807142664>: false, <string:1446667417>: false }), ];
  obj = {};
  obj = { onPress: NOOP };
  const items1 = [callback2(arg1(dependencyMap[12]).TableCheckboxRow, obj), callback2(arg1(dependencyMap[12]).TableCheckboxRow, { onPress: NOOP }), ];
  const obj2 = { <string:2748076974>: true, <string:4151042911>: "/assets/.cache/intl/bW9kdWxlcy9jbGlwcw==", label: null, onPress: NOOP };
  items1[2] = callback2(arg1(dependencyMap[12]).TableCheckboxRow, obj2);
  obj.children = items1;
  items[2] = callback3(arg1(dependencyMap[9]).TableRowGroup, obj);
  obj.children = items;
  return callback3(closure_8, obj);
}
function SliderDemo() {
  let obj = {};
  const items = [callback2(arg1(dependencyMap[6]).Text, {}), ];
  obj = { user: "bijna 1 jaar", body: "bijna {{count}} jaar", label: 32 };
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
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: { <string:2839314540>: null, <string:172088541>: null } });
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
