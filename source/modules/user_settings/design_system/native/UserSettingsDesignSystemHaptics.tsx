// Module ID: 14345
// Function ID: 108329
// Name: HapticButton
// Dependencies: []
// Exports: default

// Module 14345 (HapticButton)
function HapticButton(text) {
  const arg1 = text.type;
  return callback(arg1(dependencyMap[4]).Button, {
    variant: "secondary",
    onPress() {
      return type(closure_1[5]).triggerHapticFeedback(type);
    },
    text: text.label
  });
}
importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
let closure_5 = obj.createStyles({ container: { paddingTop: "center", color: "center" } });
obj = { type: importDefault(dependencyMap[6]).IMPACT_LIGHT, label: "IMPACT_LIGHT" };
const items = [obj, , , , , , , , ];
obj = { type: importDefault(dependencyMap[6]).IMPACT_MEDIUM, label: "IMPACT_MEDIUM" };
items[1] = obj;
const tmp3 = arg1(dependencyMap[2]);
items[2] = { type: importDefault(dependencyMap[6]).IMPACT_HEAVY, label: "IMPACT_HEAVY" };
const obj1 = { type: importDefault(dependencyMap[6]).IMPACT_HEAVY, label: "IMPACT_HEAVY" };
items[3] = { type: importDefault(dependencyMap[6]).NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
const obj2 = { type: importDefault(dependencyMap[6]).NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
items[4] = { type: importDefault(dependencyMap[6]).DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
const obj3 = { type: importDefault(dependencyMap[6]).DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
items[5] = { type: importDefault(dependencyMap[6]).DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
const obj4 = { type: importDefault(dependencyMap[6]).DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
items[6] = { type: importDefault(dependencyMap[6]).DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
const obj5 = { type: importDefault(dependencyMap[6]).DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
items[7] = { type: importDefault(dependencyMap[6]).SOFT, label: "SOFT" };
const obj6 = { type: importDefault(dependencyMap[6]).SOFT, label: "SOFT" };
items[8] = { type: importDefault(dependencyMap[6]).SELECTION, label: "SELECTION" };
const obj7 = { type: importDefault(dependencyMap[6]).SELECTION, label: "SELECTION" };
const items1 = [{ type: importDefault(dependencyMap[6]).RIGID, label: "RIGID" }, , ];
const obj8 = { type: importDefault(dependencyMap[6]).RIGID, label: "RIGID" };
items1[1] = { type: importDefault(dependencyMap[6]).NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
const obj9 = { type: importDefault(dependencyMap[6]).NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
items1[2] = { type: importDefault(dependencyMap[6]).NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
const obj10 = { type: importDefault(dependencyMap[6]).NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
const items2 = [{ type: importDefault(dependencyMap[6]).CONFIRM, label: "CONFIRM" }, , , , , , , ];
const obj11 = { type: importDefault(dependencyMap[6]).CONFIRM, label: "CONFIRM" };
items2[1] = { type: importDefault(dependencyMap[6]).REJECT, label: "REJECT" };
const obj12 = { type: importDefault(dependencyMap[6]).REJECT, label: "REJECT" };
items2[2] = { type: importDefault(dependencyMap[6]).GESTURE_START, label: "GESTURE_START" };
const obj13 = { type: importDefault(dependencyMap[6]).GESTURE_START, label: "GESTURE_START" };
items2[3] = { type: importDefault(dependencyMap[6]).GESTURE_END, label: "GESTURE_END" };
const obj14 = { type: importDefault(dependencyMap[6]).GESTURE_END, label: "GESTURE_END" };
items2[4] = { type: importDefault(dependencyMap[6]).SEGMENT_TICK, label: "SEGMENT_TICK" };
const obj15 = { type: importDefault(dependencyMap[6]).SEGMENT_TICK, label: "SEGMENT_TICK" };
items2[5] = { type: importDefault(dependencyMap[6]).SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
const obj16 = { type: importDefault(dependencyMap[6]).SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
items2[6] = { type: importDefault(dependencyMap[6]).TOGGLE_ON, label: "TOGGLE_ON" };
const obj17 = { type: importDefault(dependencyMap[6]).TOGGLE_ON, label: "TOGGLE_ON" };
items2[7] = { type: importDefault(dependencyMap[6]).TOGGLE_OFF, label: "TOGGLE_OFF" };
const obj18 = { type: importDefault(dependencyMap[6]).TOGGLE_OFF, label: "TOGGLE_OFF" };
const items3 = [{ type: importDefault(dependencyMap[6]).CLOCK_TICK, label: "CLOCK_TICK" }, , , , , , , , , , , , ];
const obj19 = { type: importDefault(dependencyMap[6]).CLOCK_TICK, label: "CLOCK_TICK" };
items3[1] = { type: importDefault(dependencyMap[6]).CONTEXT_CLICK, label: "CONTEXT_CLICK" };
const obj20 = { type: importDefault(dependencyMap[6]).CONTEXT_CLICK, label: "CONTEXT_CLICK" };
items3[2] = { type: importDefault(dependencyMap[6]).KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
const obj21 = { type: importDefault(dependencyMap[6]).KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
items3[3] = { type: importDefault(dependencyMap[6]).KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
const obj22 = { type: importDefault(dependencyMap[6]).KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
items3[4] = { type: importDefault(dependencyMap[6]).KEYBOARD_TAP, label: "KEYBOARD_TAP" };
const obj23 = { type: importDefault(dependencyMap[6]).KEYBOARD_TAP, label: "KEYBOARD_TAP" };
items3[5] = { type: importDefault(dependencyMap[6]).LONG_PRESS, label: "LONG_PRESS" };
const obj24 = { type: importDefault(dependencyMap[6]).LONG_PRESS, label: "LONG_PRESS" };
items3[6] = { type: importDefault(dependencyMap[6]).TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
const obj25 = { type: importDefault(dependencyMap[6]).TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
items3[7] = { type: importDefault(dependencyMap[6]).VIRTUAL_KEY, label: "VIRTUAL_KEY" };
const obj26 = { type: importDefault(dependencyMap[6]).VIRTUAL_KEY, label: "VIRTUAL_KEY" };
items3[8] = { type: importDefault(dependencyMap[6]).VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
const obj27 = { type: importDefault(dependencyMap[6]).VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
items3[9] = { type: importDefault(dependencyMap[6]).EFFECT_CLICK, label: "EFFECT_CLICK" };
const obj28 = { type: importDefault(dependencyMap[6]).EFFECT_CLICK, label: "EFFECT_CLICK" };
items3[10] = { type: importDefault(dependencyMap[6]).EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
const obj29 = { type: importDefault(dependencyMap[6]).EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
items3[11] = { type: importDefault(dependencyMap[6]).EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
const obj30 = { type: importDefault(dependencyMap[6]).EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
items3[12] = { type: importDefault(dependencyMap[6]).EFFECT_TICK, label: "EFFECT_TICK" };
const items4 = [{}, {}, { 0: -515396076, -9223372036854775808: 1900008570, 0: 10 }, {}, {}, { 0: true, -9223372036854775808: true, 0: true }];
const obj31 = { type: importDefault(dependencyMap[6]).EFFECT_TICK, label: "EFFECT_TICK" };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemHaptics.tsx");

export default function UserSettingsDesignSystemHaptics() {
  let obj = { contentContainerStyle: callback3().container };
  obj = { spacing: 24 };
  obj = {};
  const obj1 = {};
  const items = [callback(arg1(dependencyMap[9]).Text, {}), callback(arg1(dependencyMap[9]).Text, {}), ];
  items[2] = items.map((label) => {
    label = label.label;
    return callback2(closure_11, { type: label.type, label }, label);
  });
  obj1.children = items;
  obj.children = callback2(arg1(dependencyMap[7]).Stack, obj1);
  const items1 = [callback(arg1(dependencyMap[8]).Card, obj), , , , ];
  const obj2 = {};
  const obj3 = {};
  const items2 = [
    callback(arg1(dependencyMap[9]).Text, {}),
    callback(arg1(dependencyMap[9]).Text, { deer: "/assets/modules/collectibles/native/images", Ufm9XX: 375, playstationVersion: 162 }),
    items1.map((label) => {
      label = label.label;
      return callback2(closure_11, { type: label.type, label }, label);
    })
  ];
  obj3.children = items2;
  obj2.children = callback2(arg1(dependencyMap[7]).Stack, obj3);
  items1[1] = callback(arg1(dependencyMap[8]).Card, obj2);
  const obj4 = {};
  const obj5 = {};
  const items3 = [
    callback(arg1(dependencyMap[9]).Text, {}),
    callback(arg1(dependencyMap[9]).Text, { deer: 750888.9130273163, Ufm9XX: 17835840536987025000000000000000000000000000000000000000000000000000000000000000, playstationVersion: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004383619097214926 }),
    items2.map((label) => {
      label = label.label;
      return callback2(closure_11, { type: label.type, label }, label);
    })
  ];
  obj5.children = items3;
  obj4.children = callback2(arg1(dependencyMap[7]).Stack, obj5);
  items1[2] = callback(arg1(dependencyMap[8]).Card, obj4);
  const obj6 = {};
  const obj7 = {};
  const items4 = [
    callback(arg1(dependencyMap[9]).Text, { <string:1749439162>: null, <string:140675621>: null }),
    callback(arg1(dependencyMap[9]).Text, { deer: true, Ufm9XX: true, playstationVersion: true }),
    items3.map((label) => {
      label = label.label;
      return callback2(closure_11, { type: label.type, label }, label);
    })
  ];
  obj7.children = items4;
  obj6.children = callback2(arg1(dependencyMap[7]).Stack, obj7);
  items1[3] = callback(arg1(dependencyMap[8]).Card, obj6);
  const obj8 = {};
  const obj9 = {};
  const items5 = [
    callback(arg1(dependencyMap[9]).Text, { <string:1749439162>: null, <string:140675621>: null }),
    callback(arg1(dependencyMap[9]).Text, {}),
    items4.map((description) => {
      let label;
      ({ label, pattern: closure_0 } = description);
      const obj = {
        variant: "secondary",
        onPress() {
          return callback(closure_1[10]).triggerPattern(callback(closure_1[10]).Patterns[closure_0]);
        },
        text: "" + label + " (" + description.description + ")"
      };
      return callback2(callback(closure_1[4]).Button, obj, label);
    })
  ];
  obj9.children = items5;
  obj8.children = callback2(arg1(dependencyMap[7]).Stack, obj9);
  items1[4] = callback(arg1(dependencyMap[8]).Card, obj8);
  obj.children = items1;
  obj.children = callback2(arg1(dependencyMap[7]).Stack, obj);
  return callback(ScrollView, obj);
};
