// Module ID: 14321
// Function ID: 108164
// Name: contextMenuItems
// Dependencies: []
// Exports: default

// Module 14321 (contextMenuItems)
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
let closure_2 = importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const items = [importDefault(dependencyMap[3]), importDefault(dependencyMap[4]), importDefault(dependencyMap[5]), importDefault(dependencyMap[6]), importDefault(dependencyMap[7]), importDefault(dependencyMap[8]), importDefault(dependencyMap[9]), importDefault(dependencyMap[10])];
let closure_8 = ["diversity", "Symbol", "kind", "accessible", "children", "Boolean", "ct", "call", "Promise", "channel", "map"];
let obj = arg1(dependencyMap[11]);
obj = { container: {}, card: { gap: 12 } };
obj = { textAlign: "/assets/images/native/community", fontSize: 62, marginBottom: 65, backgroundColor: importDefault(dependencyMap[12]).colors.BORDER_SUBTLE };
obj.divider = obj;
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.card };
  const items = [callback(arg1(dependencyMap[17]).Text, { <string:1749439162>: true, <string:140675621>: "/assets/images/native/icons" }), callback(arg1(dependencyMap[17]).Text, {}), callback(DemoContextMenu, { label: "Open Menu" })];
  obj.children = items;
  const items1 = [callback2(arg1(dependencyMap[16]).Card, obj), , , , , ];
  const obj1 = { style: tmp.card };
  const items2 = [callback(arg1(dependencyMap[17]).Text, { <string:1749439162>: 2018574338, <string:140675621>: 1362780627 }), callback(arg1(dependencyMap[17]).Text, { deer: "row", Ufm9XX: null, playstationVersion: "wrap" }), callback(DemoContextMenu, { "Null": 0.0000000000000000000000000000000000000000000021895311079773908, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003488860420505554 })];
  obj1.children = items2;
  items1[1] = callback2(arg1(dependencyMap[16]).Card, obj1);
  const obj2 = { style: tmp.card };
  const items3 = [callback(arg1(dependencyMap[17]).Text, {}), callback(arg1(dependencyMap[17]).Text, {}), callback(DemoContextMenu, { "Null": "Array", "Null": "isArray", "Null": "x" })];
  obj2.children = items3;
  items1[2] = callback2(arg1(dependencyMap[16]).Card, obj2);
  const obj3 = { style: tmp.card };
  const items4 = [callback(arg1(dependencyMap[17]).Text, { <string:1749439162>: "<string:695009281>", <string:140675621>: "<string:1312948225>" }), callback(arg1(dependencyMap[17]).Text, { deer: "<string:3875537318>", Ufm9XX: "<string:1107296717>", playstationVersion: "text-md/normal" }), callback(DemoContextMenu, {}), callback(closure_3, { style: tmp.divider }), callback(arg1(dependencyMap[17]).Text, {}), callback(DemoContextMenu, { "Bool(false)": "braintree:merchantId", "Bool(false)": "<string:3024158976>" })];
  obj3.children = items4;
  items1[3] = callback2(arg1(dependencyMap[16]).Card, obj3);
  const obj5 = { style: tmp.card };
  const items5 = [callback(arg1(dependencyMap[17]).Text, {}), callback(arg1(dependencyMap[17]).Text, {}), callback(arg1(dependencyMap[17]).Text, { deer: "<string:180682753>", Ufm9XX: "<string:3410100226>", playstationVersion: "<string:3288334697>" }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, {}), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, {}), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { "Null": -83740493256455500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000326560837047163, "Null": 100 }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { Map: false, Symbol: false, gap: false, resolve: false })];
  obj5.children = items5;
  items1[4] = callback2(arg1(dependencyMap[16]).Card, obj5);
  const obj10 = { style: tmp.card };
  const items6 = [callback(arg1(dependencyMap[17]).Text, { <string:1749439162>: "heading-lg/bold", <string:140675621>: "Clearable" }), callback(arg1(dependencyMap[17]).Text, { deer: "text-md/normal", Ufm9XX: "Inputs can use the isClearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value.", playstationVersion: "text-md/normal" }), callback(DemoContextMenu, {})];
  obj10.children = items6;
  items1[5] = callback2(arg1(dependencyMap[16]).Card, obj10);
  obj.children = items1;
  obj.children = callback2(closure_3, obj);
  return callback(closure_4, obj);
};
