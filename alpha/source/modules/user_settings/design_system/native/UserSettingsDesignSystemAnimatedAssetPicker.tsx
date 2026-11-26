// Module ID: 17470
// Function ID: 17471
// Name: UserSettingsDesignSystemAnimatedAssetPicker
// Dependencies: [32, 19, 17, 21, 5043, 575, 7546, 7507, 7406, 5275, 5634, 7251, 5257, 7253, 2]
// Exports: default

// Module 17470 (UserSettingsDesignSystemAnimatedAssetPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { scroll: { flex: 1, minHeight: 0 }, list: obj2, empty: obj3 };
obj2 = { paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAnimatedAssetPicker.tsx");

export default function UserSettingsDesignSystemAnimatedAssetPicker(onSelect) {
  let c3;
  let items1;
  let names;
  let obj2;
  let str;
  let tmp3;
  let tmp8Result;
  ({ sheetKey: require, names } = onSelect);
  onSelect = onSelect.onSelect;
  _slicedToArray = undefined;
  const selectedName = onSelect.selectedName;
  const tmp = closure_8();
  [str, tmp3] = _slicedToArray(react.useState(""), 2);
  const tmp2 = _slicedToArray(react.useState(""), 2);
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  _slicedToArray = toLocaleLowerCaseResult;
  const items = [names, toLocaleLowerCaseResult];
  const memo = react.useMemo(() => {
    let found;
    if ("" === c3) {
      found = names;
    } else {
      found = names.filter((toLocaleLowerCase) => {
        const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
        return toLocaleLowerCaseResult.includes(closure_1_3);
      });
    }
    return found;
  }, items);
  const ActionSheet = require("ActionSheet").ActionSheet;
  let str2 = "assets";
  const BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  const length = names.length;
  const tmp5 = closure_7;
  if (1 === names.length) {
    str2 = "asset";
  }
  let obj = { scrollable: true, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: "Close the asset picker", header: closure_6(BottomSheetTitleHeader, obj2), children: items1 };
  obj2 = { title: "Asset", subtitle: "" + length + " " + str2 };
  items1 = [closure_6(require("SearchBar").SearchBar, { size: "md", round: true, grow: false, accessibilityLabel: "Search assets", placeholder: "Search assets", onChange: tmp3 }), ];
  const obj3 = { style: tmp.scroll, contentContainerStyle: tmp.list, keyboardShouldPersistTaps: "handled", children: tmp8Result };
  const BottomSheetScrollView = tmp6(tmp7[9]).BottomSheetScrollView;
  if (0 === memo.length) {
    const obj4 = { style: tmp.empty, children: closure_6(require("Text/Text").Text, { variant: "body-md/normal", color: "text-muted", children: "No assets match." }) };
    tmp8Result = tmp8(View, obj4);
  } else {
    const obj5 = {
      value: selectedName,
      onChange: function handlePick(arg0) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(require);
          onSelect(arg0);
        },
      hasIcons: false,
      accessibilityLabel: "Asset",
      children: memo.map((value) => {
          const obj = { value, label: value, labelLineClamp: 1 };
          return closure_1_6(require("TableRadioRow").TableRadioRow, obj, value);
        })
    };
    const TableRadioGroup = tmp6(tmp7[11]).TableRadioGroup;
    tmp8Result = tmp8(TableRadioGroup, obj5);
  }
  items1[1] = closure_6(BottomSheetScrollView, obj3);
  return tmp5(ActionSheet, obj);
};
