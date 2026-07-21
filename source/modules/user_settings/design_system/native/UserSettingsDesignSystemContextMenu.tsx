// Module ID: 14318
// Function ID: 108132
// Name: contextMenuItems
// Dependencies: [0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14318 (contextMenuItems)
import closure_2 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function contextMenuItems(length) {
  const arg1 = length;
  let obj = arg1(closure_1[13]);
  closure_1 = obj.shuffle(closure_8);
  let closure_2 = arg1(closure_1[13]).shuffle(items);
  obj = { length };
  const obj2 = arg1(closure_1[13]);
  return Array.from(obj).map((arg0, arg1) => {
    const obj = { label: closure_1[arg1 % closure_1.length], IconComponent: undefined, iconSource: closure_2[arg1 % closure_2.length] };
    let str = "default";
    if (arg1 === arg0 - 1) {
      str = "destructive";
    }
    obj.variant = str;
    obj.action = function action() {

    };
    return obj;
  });
}
function DemoContextMenu(count) {
  let triggerOnLongPress;
  ({ label: closure_0, triggerOnLongPress } = count);
  if (triggerOnLongPress === undefined) {
    triggerOnLongPress = false;
  }
  let num = count.count;
  if (num === undefined) {
    num = 3;
  }
  const dependencyMap = num;
  let num2 = count.sections;
  if (num2 === undefined) {
    num2 = 1;
  }
  const React = num2;
  let str = count.alignButton;
  if (str === undefined) {
    str = "flex-start";
  }
  const items = [num, num2];
  let obj = { style: obj };
  obj = { alignSelf: str };
  const memo = React.useMemo(() => {
    if (num2 > 1) {
      const _Array = Array;
      const obj = { length: num2 };
      let mapped = Array.from(obj).map(() => callback(closure_1));
      const arr = Array.from(obj);
    } else {
      mapped = callback3(num);
    }
    return mapped;
  }, items);
  obj = {
    triggerOnLongPress,
    items: memo,
    align: count.align,
    title: "Sample title",
    children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      const merged = Object.assign(ref, obj);
      obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj["text"] = callback;
      obj["variant"] = "primary";
      return callback2(callback(num[15]).Button, obj);
    }
  };
  obj.children = callback(arg1(dependencyMap[14]).ContextMenu, obj);
  return callback(closure_3, obj);
}
({ View: closure_3, ScrollView: closure_4 } = __exportStarResult1);
({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
const items = [importDefault(dependencyMap[3]), require("__exportStarResult1"), require("__exportStarResult1"), require("__exportStarResult1"), require("__exportStarResult1"), require("__exportStarResult1"), require("__exportStarResult1"), require("__exportStarResult1")];
let closure_8 = [];
__exportStarResult1 = { container: { start: null, length: "166185917b52ede00e3e20d3f1f7faeb", body: "CheckmarkSmallIcon" }, card: { gap: 12 } };
__exportStarResult1 = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000092349256818313, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061976, "Null": -13336029583459642000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, backgroundColor: importDefault(dependencyMap[12]).colors.BORDER_SUBTLE };
__exportStarResult1.divider = __exportStarResult1;
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  const tmp = __exportStarResult1();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.card };
  const items = [callback(arg1(dependencyMap[17]).Text, { "Null": "r", "Null": "isArray" }), callback(arg1(dependencyMap[17]).Text, { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }), callback(DemoContextMenu, { label: "Open Menu" })];
  obj.children = items;
  const items1 = [callback2(arg1(dependencyMap[16]).Card, obj), , , , , ];
  const obj1 = { style: tmp.card };
  const items2 = [callback(arg1(dependencyMap[17]).Text, { "Null": "Array", "Null": "approximate_presence_count" }), callback(arg1(dependencyMap[17]).Text, { "Bool(false)": "isArray", "Bool(false)": "isArray", "Bool(false)": "isArray" }), callback(DemoContextMenu, {})];
  obj1.children = items2;
  items1[1] = callback2(arg1(dependencyMap[16]).Card, obj1);
  const obj2 = { style: tmp.card };
  const items3 = [callback(arg1(dependencyMap[17]).Text, { "Null": "text-md/normal", "Null": "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant." }), callback(arg1(dependencyMap[17]).Text, {}), callback(DemoContextMenu, { "Bool(true)": "Array", "Bool(true)": "isArray", "Bool(true)": "names" })];
  obj2.children = items3;
  items1[2] = callback2(arg1(dependencyMap[16]).Card, obj2);
  const obj3 = { style: tmp.card };
  const items4 = [callback(arg1(dependencyMap[17]).Text, {}), callback(arg1(dependencyMap[17]).Text, {}), callback(DemoContextMenu, { 1644887556: 147492, 1868337518: 1930839889 }), callback(closure_3, { style: tmp.divider }), callback(arg1(dependencyMap[17]).Text, { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }), callback(DemoContextMenu, { "Bool(false)": null, "Bool(false)": null })];
  obj3.children = items4;
  items1[3] = callback2(arg1(dependencyMap[16]).Card, obj3);
  const obj5 = { style: tmp.card };
  const items5 = [callback(arg1(dependencyMap[17]).Text, {}), callback(arg1(dependencyMap[17]).Text, {}), callback(arg1(dependencyMap[17]).Text, {}), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { "Bool(false)": 65467094052469780000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001586576, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003722880124027 }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { "Bool(false)": "About me", "Bool(false)": 100, "Bool(false)": "Long form text use TextArea" }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, {})];
  obj5.children = items5;
  items1[4] = callback2(arg1(dependencyMap[16]).Card, obj5);
  const obj10 = { style: tmp.card };
  const items6 = [callback(arg1(dependencyMap[17]).Text, {}), callback(arg1(dependencyMap[17]).Text, {}), callback(DemoContextMenu, { "Bool(false)": "isArrayBufferToString", "Bool(false)": "FILE_TYPES_REQUIRED_ADDITIONAL_CHECK" })];
  obj10.children = items6;
  items1[5] = callback2(arg1(dependencyMap[16]).Card, obj10);
  obj.children = items1;
  obj.children = callback2(closure_3, obj);
  return callback(closure_4, obj);
};
