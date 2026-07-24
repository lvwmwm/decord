// Module ID: 14505
// Function ID: 110749
// Name: StackBlock
// Dependencies: [31, 27, 33, 4130, 689, 4541, 5167, 4126, 2]
// Exports: default

// Module 14505 (StackBlock)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
function StackBlock() {
  return callback(closure_2, { style: _createForOfIteratorHelperLoose().block });
}
({ View: closure_2, ScrollView: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16, flex: 1, alignItems: "center" } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, height: 80, flex: 1 };
_createForOfIteratorHelperLoose.block = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx");

export default function UserSettingsDesignSystemStack() {
  let obj = {};
  obj = { style: _createForOfIteratorHelperLoose().container };
  obj = { spacing: 16 };
  const obj1 = {};
  const obj2 = {};
  const items = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Basic Example" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks are vertical and have a spacing of 8." }), ];
  const obj3 = {};
  const items1 = [callback(StackBlock, {}), callback(StackBlock, {})];
  obj3.children = items1;
  items[2] = callback2(require(4541) /* Stack */.Stack, obj3);
  obj2.children = items;
  obj1.children = callback2(require(4541) /* Stack */.Stack, obj2);
  const items2 = [callback(require(5167) /* getCardBackgroundToken */.Card, obj1), , ];
  const obj4 = {};
  const obj5 = {};
  const items3 = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Spacing" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8." }), ];
  const obj6 = { spacing: 24 };
  const items4 = [callback(StackBlock, {}), callback(StackBlock, {})];
  obj6.children = items4;
  items3[2] = callback2(require(4541) /* Stack */.Stack, obj6);
  obj5.children = items3;
  obj4.children = callback2(require(4541) /* Stack */.Stack, obj5);
  items2[1] = callback(require(5167) /* getCardBackgroundToken */.Card, obj4);
  const obj7 = {};
  const obj8 = {};
  const items5 = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Horizontal" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the direction with the direction prop. The direction prop can be either horizontal or vertical." }), ];
  const obj9 = { direction: "horizontal" };
  const items6 = [callback(StackBlock, {}), callback(StackBlock, {})];
  obj9.children = items6;
  items5[2] = callback2(require(4541) /* Stack */.Stack, obj9);
  obj8.children = items5;
  obj7.children = callback2(require(4541) /* Stack */.Stack, obj8);
  items2[2] = callback(require(5167) /* getCardBackgroundToken */.Card, obj7);
  obj.children = items2;
  obj.children = callback2(require(4541) /* Stack */.Stack, obj);
  obj.children = callback(closure_2, obj);
  return callback(closure_3, obj);
};
