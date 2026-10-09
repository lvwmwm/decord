// Module ID: 17004
// Function ID: 17005
// Name: ConjureSettingOptionsSheet
// Dependencies: [32, 19, 21, 558, 576, 1631, 6892, 6835, 6305, 1126, 3827, 6290, 6269, 6183, 6267, 5055, 6266, 2]

// Module 17004 (ConjureSettingOptionsSheet)
import intl3 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6290 */;
import BottomSheetModal from "BottomSheetModal" /* 6305 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6835 */;
import ActionSheet2 from "ActionSheet" /* 6892 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingOptionsSheet(selected) {
  let closure_2;
  let closure_3;
  let closure_4;
  let first;
  let intl2;
  let items;
  let items1;
  let multiple;
  let onChange;
  let options;
  let str;
  let title;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp25Result;
  let tmp6;
  let tmp = onChange;
  let tmp2 = dependencyMap;
  let obj = onChange(576);
  const cResult = obj.c(33);
  ({ title, options, multiple, onChange } = selected);
  selected = selected.selected;
  const bottom = first(1631)().bottom;
  [str, tmp6] = _slicedToArray(react.useState(""), 2);
  const tmp5 = _slicedToArray(react.useState(""), 2);
  [first, dependencyMap] = react.useState(selected);
  if (cResult[0] === bottom) {
    if (cResult[1] === multiple) {
      if (cResult[2] === onChange) {
        if (cResult[3] === options) {
          if (cResult[4] === first) {
            if (cResult[5] === str) {
              let tmp9;
              let tmp10;
              let tmp11;
              let tmp12;
              let tmp13;
              let flag;
              let tmp14;
              if (cResult[6] === title) {
                tmp9 = cResult[7];
                tmp10 = cResult[8];
                tmp11 = cResult[9];
                tmp12 = cResult[10];
                tmp13 = cResult[11];
                flag = cResult[12];
                tmp14 = cResult[13];
              }
              if (cResult[23] === tmp9) {
                if (cResult[24] === tmp11) {
                  if (cResult[25] === tmp12) {
                    let tmp30;
                    if (cResult[26] === tmp13) {
                      tmp30 = cResult[27];
                    }
                    if (cResult[28] === tmp10) {
                      if (cResult[29] === flag) {
                        if (cResult[30] === tmp14) {
                          let tmp33;
                          if (cResult[31] === tmp30) {
                            tmp33 = cResult[32];
                          }
                          return tmp33;
                        }
                      }
                    }
                    const obj2 = { scrollable: flag, header: tmp14, children: tmp30 };
                    const tmp35 = closure_5(tmp10, obj2);
                    cResult[28] = tmp10;
                    cResult[29] = flag;
                    cResult[30] = tmp14;
                    cResult[31] = tmp30;
                    cResult[32] = tmp35;
                    tmp33 = tmp35;
                  }
                }
              }
              const obj3 = { contentContainerStyle: tmp11, children: items };
              items = [tmp12, tmp13];
              const tmp32 = closure_6(tmp9, obj3);
              cResult[23] = tmp9;
              cResult[24] = tmp11;
              cResult[25] = tmp12;
              cResult[26] = tmp13;
              cResult[27] = tmp32;
              tmp30 = tmp32;
            }
          }
        }
      }
    }
  }
  const str2 = str.trim();
  _slicedToArray = str2.toLowerCase();
  let found = options.filter((label) => {
    let hasItem = "" === closure_3;
    if (!hasItem) {
      const str = label.label;
      const formatted = str.toLowerCase();
      hasItem = formatted.includes(tmp);
    }
    return hasItem;
  });
  const substr = found.slice(0, 50);
  if (cResult[14] !== onChange) {
    function update(arg0) {
      closure_2(arg0);
      const items = [...arg0];
      onChange(items);
    }
    cResult[14] = onChange;
    cResult[15] = update;
    tmp15 = update;
  } else {
    tmp15 = cResult[15];
  }
  react = tmp15;
  const ActionSheet = tmp(6892).ActionSheet;
  if (cResult[16] !== title) {
    const obj4 = { title };
    const tmp18 = closure_5(tmp(6835).BottomSheetTitleHeader, obj4);
    cResult[16] = title;
    cResult[17] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[17];
  }
  const BottomSheetScrollView = tmp(6305).BottomSheetScrollView;
  if (cResult[18] !== bottom) {
    const obj5 = { paddingBottom: bottom };
    cResult[18] = bottom;
    cResult[19] = obj5;
    tmp19 = obj5;
  } else {
    tmp19 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(first(3827).azjxC0);
    cResult[20] = stringResult;
    tmp20 = stringResult;
  } else {
    tmp20 = cResult[20];
  }
  if (cResult[21] !== str) {
    const obj6 = { placeholder: tmp20, value: str, onChange: tmp6, autoCapitalize: "none", autoCorrect: false };
    const tmp24 = closure_5(tmp(6290).TextInput, obj6);
    cResult[21] = str;
    cResult[22] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[22];
  }
  if (multiple) {
    const obj7 = {
      hasIcons: false,
      children: substr.map((label) => {
          const obj = {
            label: label.label,
            checked: first.includes(label.id),
            onPress(arg0) {
              let found;
              let id;
              const tmp2 = closure_4;
              if (arg0) {
                const items = [];
                items[HermesBuiltin.arraySpread(items, first, 0)] = label.id;
                found = items;
              } else {
                found = arr.filter((item) => item !== id.id);
              }
              return tmp2(found);
            }
          };
          const TableCheckboxRow = onChange(closure_2[13]).TableCheckboxRow;
          return closure_1_5(TableCheckboxRow, obj, label.id);
        })
    };
    const TableRowGroup = tmp(6269).TableRowGroup;
    tmp25Result = closure_5(TableRowGroup, obj7);
  } else {
    let str3 = first[0];
    const TableRadioGroup = tmp(6267).TableRadioGroup;
    const tmp25 = closure_6;
    if (str3 == null) {
      str3 = "";
    }
    const obj8 = {
      hasIcons: false,
      defaultValue: str3,
      accessibilityLabel: title,
      onChange(arg0) {
          let items;
          const tmp = closure_4;
          if ("" === arg0) {
            items = [];
          } else {
            items = [arg0];
          }
          tmp(items);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
      children: items1
    };
    const obj9 = { value: "", label: intl2.string(first(3827).AWITGU) };
    const TableRadioRow = tmp(6266).TableRadioRow;
    intl2 = tmp(1126).intl;
    items1 = [
      closure_5(TableRadioRow, obj9),
      substr.map((id) => {
          const obj = { value: id.id, label: id.label };
          return closure_1_5(onChange(closure_2[16]).TableRadioRow, obj, id.id);
        })
    ];
    tmp25Result = tmp25(TableRadioGroup, obj8);
  }
  cResult[0] = bottom;
  cResult[1] = multiple;
  cResult[2] = onChange;
  cResult[3] = options;
  cResult[4] = first;
  cResult[5] = str;
  cResult[6] = title;
  cResult[7] = BottomSheetScrollView;
  cResult[8] = ActionSheet;
  cResult[9] = tmp19;
  cResult[10] = tmp22;
  cResult[11] = tmp25Result;
  cResult[12] = true;
  cResult[13] = tmp16;
  tmp13 = tmp25Result;
  tmp14 = tmp16;
  flag = true;
  tmp12 = tmp22;
  tmp11 = tmp19;
  tmp10 = ActionSheet;
  tmp9 = BottomSheetScrollView;
}) : (function ConjureSettingOptionsSheet(arg0) {
  let BottomSheetScrollView;
  let closure_2;
  let closure_3;
  let first;
  let intl;
  let intl2;
  let items;
  let items1;
  let multiple;
  let obj2;
  let options;
  let selected;
  let str;
  let title;
  let tmp4;
  let tmp9Result;
  ({ title, options, onChange: require } = arg0);
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp2 = dependencyMap;
  ({ multiple, selected } = arg0);
  const tmp = first;
  const bottom = first(1631)().bottom;
  [str, tmp4] = _slicedToArray(react.useState(""), 2);
  const tmp3 = _slicedToArray(react.useState(""), 2);
  [first, dependencyMap] = react.useState(selected);
  const str2 = str.trim();
  _slicedToArray = str2.toLowerCase();
  let found = options.filter((label) => {
    let hasItem = "" === closure_3;
    if (!hasItem) {
      const str = label.label;
      const formatted = str.toLowerCase();
      hasItem = formatted.includes(tmp);
    }
    return hasItem;
  });
  const substr = found.slice(0, 50);
  let obj = { scrollable: true, header: closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: closure_6(BottomSheetScrollView, obj2) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const obj3 = { placeholder: intl.string(first(3827).azjxC0), value: str, onChange: tmp4, autoCapitalize: "none", autoCorrect: false };
  const TextInput = TextInput_TextInput.TextInput;
  intl = intl3.intl;
  items = [closure_5(TextInput, obj3), ];
  if (multiple) {
    const obj4 = {
      hasIcons: false,
      children: substr.map((label) => {
          const obj = {
            label: label.label,
            checked: first.includes(label.id),
            onPress(arg0) {
              let found;
              let id;
              const tmp2 = arg0;
              if (tmp2) {
                const items = [];
                items[HermesBuiltin.arraySpread(items, first, 0)] = label.id;
                found = items;
              } else {
                found = arr.filter((item) => item !== id.id);
              }
              closure_2(found);
              const items1 = [...found];
              require(items1);
            }
          };
          const TableCheckboxRow = require("TableCheckboxRow").TableCheckboxRow;
          return closure_1_5(TableCheckboxRow, obj, label.id);
        })
    };
    const TableRowGroup = tmp8(6269).TableRowGroup;
    tmp9Result = tmp7(TableRowGroup, obj4);
  } else {
    let str3 = first[0];
    const TableRadioGroup = tmp8(6267).TableRadioGroup;
    if (str3 == null) {
      str3 = "";
    }
    const obj5 = {
      hasIcons: false,
      defaultValue: str3,
      accessibilityLabel: title,
      onChange(arg0) {
          let items;
          if ("" === arg0) {
            items = [];
          } else {
            items = [arg0];
          }
          closure_2(items);
          const items1 = [...items];
          require(items1);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
      children: items1
    };
    const obj6 = { value: "", label: intl2.string(tmp(3827).AWITGU) };
    const TableRadioRow = tmp8(6266).TableRadioRow;
    intl2 = tmp8(1126).intl;
    items1 = [
      tmp7(TableRadioRow, obj6),
      substr.map((id) => {
          const obj = { value: id.id, label: id.label };
          return closure_1_5(require("TableRadioRow").TableRadioRow, obj, id.id);
        })
    ];
    tmp9Result = tmp9(TableRadioGroup, obj5);
  }
  items[1] = tmp9Result;
  return closure_5(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingOptionsSheet.tsx");

export default tmp3;
