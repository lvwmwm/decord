// Module ID: 14427
// Function ID: 110279
// Name: UserSettingsDesignSystemButtonGroup
// Dependencies: [31, 27, 33, 4130, 4541, 4126, 4965, 4543, 7771, 5792, 2]
// Exports: default

// Module 14427 (UserSettingsDesignSystemButtonGroup)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16, paddingBottom: 64 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx");

export default function UserSettingsDesignSystemButtonGroup() {
  let obj = {};
  obj = { style: callback3().container };
  obj = { spacing: 24 };
  const obj1 = {};
  const obj2 = {};
  const items = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Text Button Example" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks buttons vertically. This is best for buttons with text." }), ];
  const obj3 = {};
  const obj4 = {
    text: "Agree",
    variant: "primary",
    onPress() {

    }
  };
  const items1 = [callback(require(4543) /* Button */.Button, obj4), ];
  const obj5 = {
    text: "Cancel",
    variant: "secondary",
    onPress() {

    }
  };
  items1[1] = callback(require(4543) /* Button */.Button, obj5);
  obj3.children = items1;
  items[2] = callback2(require(4965) /* ButtonGroup */.ButtonGroup, obj3);
  obj2.children = items;
  obj1.children = callback2(require(4541) /* Stack */.Stack, obj2);
  const items2 = [callback(closure_3, obj1), , ];
  const obj6 = {};
  const obj7 = {};
  const items3 = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "IconButton Example" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "For IconButtons, a horizontal layout is recommended" }), ];
  const obj8 = { direction: "horizontal" };
  const obj9 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: importDefault(5792),
    onPress() {

    }
  };
  const items4 = [callback(require(7771) /* IconButton */.IconButton, obj9), ];
  const obj10 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: importDefault(5792),
    onPress() {

    }
  };
  items4[1] = callback(require(7771) /* IconButton */.IconButton, obj10);
  obj8.children = items4;
  items3[2] = callback2(require(4965) /* ButtonGroup */.ButtonGroup, obj8);
  obj7.children = items3;
  obj6.children = callback2(require(4541) /* Stack */.Stack, obj7);
  items2[1] = callback(closure_3, obj6);
  const obj11 = {};
  const obj12 = {};
  const items5 = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout." }), callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "The Button with text must have the grow prop." }), , , ];
  const obj13 = { direction: "horizontal" };
  const obj14 = {
    text: "Search",
    variant: "secondary",
    grow: true,
    onPress() {

    }
  };
  const items6 = [callback(require(4543) /* Button */.Button, obj14), ];
  const obj15 = {
    accessibilityLabel: "Cancel",
    variant: "secondary",
    icon: importDefault(5792),
    onPress() {

    }
  };
  items6[1] = callback(require(7771) /* IconButton */.IconButton, obj15);
  obj13.children = items6;
  items5[3] = callback2(require(4965) /* ButtonGroup */.ButtonGroup, obj13);
  items5[4] = callback(require(4126) /* Text */.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children: "More than one text button should not be put in a horizontal group." });
  items5[5] = callback(require(4126) /* Text */.Text, { variant: "text-sm/medium", color: "text-subtle", children: "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons." });
  obj12.children = items5;
  obj11.children = callback2(require(4541) /* Stack */.Stack, obj12);
  items2[2] = callback(closure_3, obj11);
  obj.children = items2;
  obj.children = callback2(require(4541) /* Stack */.Stack, obj);
  obj.children = callback(closure_3, obj);
  return callback(closure_4, obj);
};
