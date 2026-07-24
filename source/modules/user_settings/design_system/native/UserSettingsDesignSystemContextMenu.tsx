// Module ID: 14493
// Function ID: 110683
// Name: contextMenuItems
// Dependencies: [31, 27, 33, 11831, 9204, 7743, 9350, 4095, 14494, 14495, 10017, 4130, 689, 22, 9338, 4543, 5167, 4126, 2]
// Exports: default

// Module 14493 (contextMenuItems)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function contextMenuItems(length) {
  const _require = length;
  let obj = _require(22);
  const dependencyMap = obj.shuffle(closure_8);
  let result = _require(22).shuffle(items);
  obj = { length };
  const obj2 = _require(22);
  return Array.from(obj).map((arg0, arg1) => {
    const obj = { label: length[arg1 % length.length], IconComponent: undefined, iconSource: length2[arg1 % length2.length] };
    let str = "default";
    if (arg1 === closure_0 - 1) {
      str = "destructive";
    }
    obj.variant = str;
    obj.action = function action() {

    };
    return obj;
  });
}
function DemoContextMenu(count) {
  let require;
  let triggerOnLongPress;
  ({ label: require, triggerOnLongPress } = count);
  if (triggerOnLongPress === undefined) {
    triggerOnLongPress = false;
  }
  let num = count.count;
  if (num === undefined) {
    num = 3;
  }
  let num2 = count.sections;
  if (num2 === undefined) {
    num2 = 1;
  }
  let str = count.alignButton;
  if (str === undefined) {
    str = "flex-start";
  }
  const items = [num, num2];
  obj = { style: obj };
  obj = { alignSelf: str };
  const memo = num2.useMemo(() => {
    if (num2 > 1) {
      const _Array = Array;
      const obj = { length: num2 };
      let mapped = Array.from(obj).map(() => outer2_10(outer1_1));
      const arr = Array.from(obj);
    } else {
      mapped = outer1_10(num);
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
      obj["text"] = closure_0;
      obj["variant"] = "primary";
      return outer1_5(outer1_0(num[15]).Button, obj);
    }
  };
  obj.children = callback(require(num[14]).ContextMenu, obj);
  return callback(closure_3, obj);
}
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let items = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
let closure_8 = ["Launch Probe!", "Activate Laser", "Teleport Widget", "Engage Hyperdrive", "Deploy Robots", "Initiate Time Warp", "Beam Up Snacks", "Hack Database", "Trigger Cosmic Boom", "Unleash Space Vortex", "Activate Cloaking Device"];
_createForOfIteratorHelperLoose = { container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 } };
_createForOfIteratorHelperLoose = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginVertical: 12 };
_createForOfIteratorHelperLoose.divider = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.card };
  const items = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Basic Example" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "You press the button to open the menu and then select an action, or tap and pan down in a single gesture." }), callback(DemoContextMenu, { label: "Open Menu" })];
  obj.children = items;
  const items1 = [callback2(require(5167) /* getCardBackgroundToken */.Card, obj), , , , , ];
  const obj1 = { style: tmp.card };
  const items2 = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Long Press" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can also have the menu open on long press instead." }), callback(DemoContextMenu, { triggerOnLongPress: true, label: "Long Press to Open" })];
  obj1.children = items2;
  items1[1] = callback2(require(5167) /* getCardBackgroundToken */.Card, obj1);
  const obj2 = { style: tmp.card };
  const items3 = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Sections" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can pass an array of arrays of items to create sections in the menu." }), callback(DemoContextMenu, { label: "Open Sectioned Menu", sections: 3, count: 2 })];
  obj2.children = items3;
  items1[2] = callback2(require(5167) /* getCardBackgroundToken */.Card, obj2);
  const obj3 = { style: tmp.card };
  const items4 = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Automatic Alignment" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "The menu will automatically align itself so that it doesn't overflow offscreen horizontally." }), callback(DemoContextMenu, { alignButton: "flex-end", label: "Open Right-Aligned Menu" }), callback(closure_3, { style: tmp.divider }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "It will also position itself vertically, so that it doesn't overflow offscreen vertically." }), callback(DemoContextMenu, { count: 8, label: "Open Tall Menu" })];
  obj3.children = items4;
  items1[3] = callback2(require(5167) /* getCardBackgroundToken */.Card, obj3);
  const obj5 = { style: tmp.card };
  const items5 = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Intentional Alignment" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning." }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space." }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { count: 3, align: "right", label: "Open Right" }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { count: 3, alignButton: "flex-end", align: "left", label: "Open Left" }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { count: 3, align: "below", label: "Always Open Below" }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { count: 3, alignButton: "flex-end", align: "above", label: "Always Open Above" })];
  obj5.children = items5;
  items1[4] = callback2(require(5167) /* getCardBackgroundToken */.Card, obj5);
  const obj10 = { style: tmp.card };
  const items6 = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Overflow Scrolling" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll." }), callback(DemoContextMenu, { count: 30, label: "Open Really Tall Menu" })];
  obj10.children = items6;
  items1[5] = callback2(require(5167) /* getCardBackgroundToken */.Card, obj10);
  obj.children = items1;
  obj.children = callback2(closure_3, obj);
  return callback(closure_4, obj);
};
