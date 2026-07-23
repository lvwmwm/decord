// Module ID: 14463
// Function ID: 110496
// Name: DemoActionSheet
// Dependencies: [57, 31, 27, 653, 33, 4130, 5500, 5186, 8390, 5501, 4541, 7512, 5502, 4098, 1324, 4543, 1212, 11548, 5919, 12699, 5167, 4126, 2]
// Exports: default

// Module 14463 (DemoActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let require = arg1;
function DemoActionSheet() {
  let tmp11;
  let tmp12;
  let tmp8;
  let tmp9;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const tmp3 = callback(React.useState(false), 2);
  const first1 = tmp3[0];
  const tmp5 = callback(React.useState("Header title"), 2);
  const first2 = tmp5[0];
  [tmp8, tmp9] = callback(React.useState("Header subtitle"), 2);
  const require = tmp9;
  const tmp7 = callback(React.useState("Header subtitle"), 2);
  [tmp11, tmp12] = callback(React.useState("Reset"), 2);
  const importDefault = tmp12;
  let obj = {};
  obj = { title: first2 };
  let tmp15;
  if ("" !== tmp8) {
    tmp15 = tmp8;
  }
  obj.subtitle = tmp15;
  let tmp16 = first1;
  if (first1) {
    obj = { onPress: NOOP, label: tmp11 };
    tmp16 = callback2(require(8390) /* ActionSheetHeaderPressableText */.ActionSheetHeaderPressableText, obj);
  }
  obj.leading = tmp16;
  let tmp21 = first;
  if (first) {
    const obj1 = { onPress: NOOP };
    tmp21 = callback2(require(5501) /* ActionSheetCloseButton */.ActionSheetCloseButton, obj1);
  }
  obj.trailing = tmp21;
  obj.header = callback2(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  const obj2 = { spacing: 24 };
  const obj3 = {};
  const items = [callback2(require(7512) /* TextInput */.TextInput, { value: first2, onChange: tmp5[1], label: "Title" }), ];
  const obj4 = {
    value: tmp8,
    onChange: tmp9,
    label: "Subtitle",
    maxLength: 100,
    isClearable: true,
    onClear() {
      return tmp9("");
    }
  };
  items[1] = callback2(require(7512) /* TextInput */.TextInput, obj4);
  obj3.children = items;
  const items1 = [callback3(require(4541) /* Stack */.Stack, obj3), , ];
  const obj5 = { hasIcons: false };
  const items2 = [callback2(require(5502) /* ActionSheetRowIcon */.ActionSheetSwitchRow, { value: first1, onValueChange: tmp3[1], label: "Show Leading" }), callback2(require(5502) /* ActionSheetRowIcon */.ActionSheetSwitchRow, { value: first, onValueChange: tmp[1], label: "Show Trailing" })];
  obj5.children = items2;
  items1[1] = callback3(require(5502) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj5);
  items1[2] = callback2(require(7512) /* TextInput */.TextInput, {
    value: tmp11,
    onChange: tmp12,
    label: "Leading",
    isDisabled: !first1,
    isClearable: true,
    onClear() {
      return tmp12("");
    }
  });
  obj2.children = items1;
  obj.children = callback3(require(4541) /* Stack */.Stack, obj2);
  return callback2(require(5500) /* ActionSheet */.ActionSheet, obj);
}
function showDemoPromoSheet() {
  importDefault(4098).openLazy(() => Promise.resolve(outer1_12), "promo-sheet-demo");
}
function DemoPromoSheet() {
  let obj = {
    size: "lg",
    onPress() {
      return outer1_1(outer1_2[13]).hideActionSheet("promo-sheet-demo");
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.BddRzS);
  const tmp2 = callback2(require(4543) /* Button */.Button, obj);
  if (tmp) {
    obj = { graphic: null, gradientColor: "purple", title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!" };
    obj = { type: "image", src: null, aspectRatio: "16/9" };
    const obj1 = { uri: importDefault(5919) };
    obj.src = obj1;
    obj.graphic = obj;
    obj.actions = tmp2;
    let obj2 = obj;
  } else {
    obj2 = { illustration: callback2(importDefault(12699), {}), title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: tmp2 };
  }
  return callback2(require(11548) /* PromoSheet */.PromoSheet, obj2);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16, alignItems: "center" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx");

export default function UserSettingsDesignSystemSheets() {
  let obj = { contentContainerStyle: callback4().container };
  obj = {};
  obj = {};
  const obj1 = {};
  const items = [
    callback2(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" }),
    callback2(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements." }),
    callback2(require(4543) /* Button */.Button, {
      onPress() {
        outer1_1(outer1_2[13]).openLazy(() => Promise.resolve(outer2_10), "demo-sheet");
      },
      text: "Show Action Sheet"
    })
  ];
  obj1.children = items;
  obj.children = callback3(require(4541) /* Stack */.Stack, obj1);
  const items1 = [callback2(require(5167) /* getCardBackgroundToken */.Card, obj), ];
  const obj3 = {};
  const obj4 = {};
  const items2 = [callback2(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: "Promo Sheet" }), callback2(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "A sheet with an illustration, title, description, and actions." }), callback2(require(4543) /* Button */.Button, { onPress: showDemoPromoSheet, text: "Show Promo Sheet" })];
  obj4.children = items2;
  obj3.children = callback3(require(4541) /* Stack */.Stack, obj4);
  items1[1] = callback2(require(5167) /* getCardBackgroundToken */.Card, obj3);
  obj.children = items1;
  obj.children = callback3(require(4541) /* Stack */.Stack, obj);
  return callback2(ScrollView, obj);
};
