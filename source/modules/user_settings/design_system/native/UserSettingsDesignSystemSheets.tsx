// Module ID: 14338
// Function ID: 108268
// Name: DemoActionSheet
// Dependencies: []
// Exports: default

// Module 14338 (DemoActionSheet)
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
  const arg1 = tmp9;
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
    tmp16 = callback2(arg1(dependencyMap[8]).ActionSheetHeaderPressableText, obj);
  }
  obj.leading = tmp16;
  let tmp21 = first;
  if (first) {
    const obj1 = { onPress: NOOP };
    tmp21 = callback2(arg1(dependencyMap[9]).ActionSheetCloseButton, obj1);
  }
  obj.trailing = tmp21;
  obj.header = callback2(arg1(dependencyMap[7]).BottomSheetTitleHeader, obj);
  const obj2 = { spacing: 24 };
  const obj3 = {};
  const items = [callback2(arg1(dependencyMap[11]).TextInput, { value: first2, onChange: tmp5[1], label: "Title" }), ];
  const obj4 = {
    -9223372036854775808: true,
    -9223372036854775808: true,
    0: true,
    9223372036854775807: true,
    0: true,
    value: tmp8,
    onChange: tmp9,
    onClear() {
      return tmp9("");
    }
  };
  items[1] = callback2(arg1(dependencyMap[11]).TextInput, obj4);
  obj3.children = items;
  const items1 = [callback3(arg1(dependencyMap[10]).Stack, obj3), , ];
  const obj5 = { hasIcons: false };
  const items2 = [callback2(arg1(dependencyMap[12]).ActionSheetSwitchRow, { value: first1, onValueChange: tmp3[1], label: "Show Leading" }), callback2(arg1(dependencyMap[12]).ActionSheetSwitchRow, { value: first, onValueChange: tmp[1], label: "Show Trailing" })];
  obj5.children = items2;
  items1[1] = callback3(arg1(dependencyMap[12]).ActionSheetRow.Group, obj5);
  items1[2] = callback2(arg1(dependencyMap[11]).TextInput, {
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
  obj.children = callback3(arg1(dependencyMap[10]).Stack, obj2);
  return callback2(arg1(dependencyMap[6]).ActionSheet, obj);
}
function showDemoPromoSheet() {
  importDefault(dependencyMap[13]).openLazy(() => Promise.resolve(closure_12), "promo-sheet-demo");
}
function DemoPromoSheet() {
  let obj = {
    size: "lg",
    onPress() {
      return callback(closure_2[13]).hideActionSheet("promo-sheet-demo");
    }
  };
  const intl = arg1(dependencyMap[16]).intl;
  obj.text = intl.string(arg1(dependencyMap[16]).t.BddRzS);
  const tmp2 = callback2(arg1(dependencyMap[15]).Button, obj);
  if (tmp) {
    obj = {};
    obj = { placeholder: true, autoComplete: true, errorMessage: true };
    const obj1 = { uri: importDefault(dependencyMap[18]) };
    obj.src = obj1;
    obj.graphic = obj;
    obj.actions = tmp2;
    let obj2 = obj;
  } else {
    obj2 = { illustration: callback2(importDefault(dependencyMap[19]), {}), actions: tmp2 };
  }
  return callback2(arg1(dependencyMap[17]).PromoSheet, obj2);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
const NOOP = arg1(dependencyMap[3]).NOOP;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: { overflow: "center", flex: "center" } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx");

export default function UserSettingsDesignSystemSheets() {
  let obj = { contentContainerStyle: callback4().container };
  obj = {};
  obj = {};
  const obj1 = {};
  const items = [
    callback2(arg1(dependencyMap[21]).Text, { "Null": true, "Null": true }),
    callback2(arg1(dependencyMap[21]).Text, {}),
    callback2(arg1(dependencyMap[15]).Button, {
      onPress() {
        callback(closure_2[13]).openLazy(() => Promise.resolve(closure_10), "demo-sheet");
      },
      text: "Show Action Sheet"
    })
  ];
  obj1.children = items;
  obj.children = callback3(arg1(dependencyMap[10]).Stack, obj1);
  const items1 = [callback2(arg1(dependencyMap[20]).Card, obj), ];
  const obj3 = {};
  const obj4 = {};
  const items2 = [callback2(arg1(dependencyMap[21]).Text, { "Null": true, "Null": true }), callback2(arg1(dependencyMap[21]).Text, {}), callback2(arg1(dependencyMap[15]).Button, { onPress: showDemoPromoSheet, text: "Show Promo Sheet" })];
  obj4.children = items2;
  obj3.children = callback3(arg1(dependencyMap[10]).Stack, obj4);
  items1[1] = callback2(arg1(dependencyMap[20]).Card, obj3);
  obj.children = items1;
  obj.children = callback3(arg1(dependencyMap[10]).Stack, obj);
  return callback2(ScrollView, obj);
};
