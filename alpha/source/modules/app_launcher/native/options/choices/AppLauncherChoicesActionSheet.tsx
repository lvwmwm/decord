// Module ID: 12142
// Function ID: 12143
// Name: AppLauncherChoicesActionSheet
// Dependencies: [32, 109, 19, 1502, 21, 558, 576, 7280, 1631, 1381, 6766, 7044, 5247, 7098, 12143, 12145, 2]

// Module 12142 (AppLauncherChoicesActionSheet)
import react2 from "react" /* 576 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1502 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6766 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let item;

let c9;
let metroImportAll;
let tmp;
const defaultMVCPConfig = tmp(7280);
const f115095 = (choice, originalIndex) => ({ choice, originalIndex });
let closure_3 = ["scrollable"];
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function FlashListWrapper(scrollable) {
  let tmp10Result;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== scrollable) {
    scrollable = scrollable.scrollable;
    const tmp8 = _objectWithoutProperties(scrollable, closure_3);
    cResult[0] = scrollable;
    cResult[1] = tmp8;
    cResult[2] = scrollable;
    tmp5 = scrollable;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp9;
    if (cResult[4] === tmp5) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmpResult = defaultMVCPConfig;
  if (tmp5) {
    const BottomSheetFlashList = tmpResult.BottomSheetFlashList;
    const obj2 = { preserveScrollMomentum: true };
    const merged = Object.assign(tmp4);
    tmp10Result = tmp10(BottomSheetFlashList, obj2);
  } else {
    const FlashList = tmpResult.FlashList;
    const obj3 = { scrollEnabled: false };
    const merged1 = Object.assign(tmp4);
    tmp10Result = tmp10(FlashList, obj3);
  }
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp10Result;
  tmp9 = tmp10Result;
}) : (function FlashListWrapper(scrollable) {
  let tmp2Result;
  scrollable = scrollable.scrollable;
  const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
  const tmp3 = defaultMVCPConfig;
  if (scrollable) {
    const BottomSheetFlashList = tmp3.BottomSheetFlashList;
    const obj2 = { preserveScrollMomentum: true };
    const merged1 = Object.assign(merged);
    tmp2Result = tmp2(BottomSheetFlashList, obj2);
  } else {
    const FlashList = tmp3.FlashList;
    const obj = { scrollEnabled: false };
    const merged2 = Object.assign(merged);
    tmp2Result = tmp2(FlashList, obj);
  }
  return tmp2Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherChoicesActionSheet(option) {
  let data;
  let first1;
  let initChoiceIndex;
  let items;
  let obj4;
  let obj5;
  let onDismiss;
  let tmp12;
  let tmp4;
  let tmp7;
  let tmp = option;
  let obj = option(data[6]);
  const cResult = obj.c(25);
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  ({ onDismiss, initChoiceIndex } = option);
  const bottom = onChoiceSelect(data[8])().bottom;
  if (cResult[0] !== bottom) {
    let sum = bottom;
    const tmpResult = tmp(data[9]);
    if (!tmpResult.isIOS()) {
      sum = bottom + DEFAULT_CONTENT_PADDING;
    }
    cResult[0] = bottom;
    cResult[1] = sum;
    tmp4 = sum;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== option.choices) {
    const fn = function v() {
      let choices = option.choices;
      if (choices == null) {
        choices = [];
      }
      return choices.map(f115095);
    };
    cResult[2] = option.choices;
    cResult[3] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[3];
  }
  const tmp8 = first1(react.useState(tmp7), 2);
  data = tmp8[0];
  closure_3 = tmp8[1];
  const tmp10 = first1(react.useState(initChoiceIndex), 2);
  first1 = tmp10[0];
  let closure_5 = tmp10[1];
  if (cResult[4] !== option.choices) {
    const fn2 = function y(query) {
      let choices;
      const obj = { query, choices, limit: null };
      choices = option.choices;
      const queryChoice = AutocompleteUtilsDefault.queryChoice;
      AutocompleteUtilsDefault;
      if (choices == null) {
        choices = [];
      }
      closure_3(queryChoice(obj));
    };
    cResult[4] = option.choices;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === data) {
    if (cResult[7] === onChoiceSelect) {
      let tmp13;
      if (cResult[8] === first1) {
        tmp13 = cResult[9];
      }
      let tmp16 = null != option.choices;
      if (tmp16) {
        let choices = option.choices;
        let length;
        if (choices != null) {
          length = choices.length;
        }
        let num7 = 5;
        if (tmp14) {
          num7 = 10;
        }
        tmp16 = length >= num7;
      }
      if (cResult[10] === tmp12) {
        let tmp19;
        let tmp24Result;
        if (cResult[11] === tmp16) {
          tmp19 = cResult[12];
        }
        if (cResult[13] === data) {
          if (cResult[14] === tmp4) {
            if (cResult[15] === tmp13) {
              if (cResult[16] === tmp16) {
                let tmp23;
                if (cResult[17] === 0 === tmp18) {
                  tmp23 = cResult[18];
                }
                if (cResult[19] === onDismiss) {
                  if (cResult[20] === option) {
                    if (cResult[21] === tmp16) {
                      if (cResult[22] === tmp19) {
                        let tmp27;
                        if (cResult[23] === tmp23) {
                          tmp27 = cResult[24];
                        }
                        return tmp27;
                      }
                    }
                  }
                }
                const obj2 = { option, startExpanded: tmp16, onDismiss, scrollable: tmp16, children: items };
                items = [tmp19, tmp23];
                const tmp29 = closure_9(tmp(data[15]).AppLauncherCommandOptionActionSheet, obj2);
                cResult[19] = onDismiss;
                cResult[20] = option;
                cResult[21] = tmp16;
                cResult[22] = tmp19;
                cResult[23] = tmp23;
                cResult[24] = tmp29;
                tmp27 = tmp29;
              }
            }
          }
        }
        if (0 === tmp18) {
          tmp24Result = tmp24(tmp(tmp2[14]).AppLauncherListEmptyState, {});
        } else {
          const obj3 = {
            scrollable: tmp16,
            contentContainerStyle: obj4,
            scrollIndicatorInsets: obj5,
            keyExtractor(choice) {
                      return "" + choice.choice.name + "_" + choice.originalIndex;
                    },
            data,
            renderItem: tmp13,
            accessibilityRole: "radiogroup"
          };
          obj4 = { paddingBottom: tmp4 };
          obj5 = { bottom: tmp4 };
          tmp24Result = tmp24(closure_10, obj3);
        }
        cResult[13] = data;
        cResult[14] = tmp4;
        cResult[15] = tmp13;
        cResult[16] = tmp16;
        cResult[17] = 0 === tmp18;
        cResult[18] = tmp24Result;
        tmp23 = tmp24Result;
      }
      let tmp20 = tmp16;
      if (tmp20) {
        const obj6 = { onChange: tmp12 };
        tmp20 = closure_8(tmp(tmp2[14]).AppLauncherListSearchBar, obj6);
      }
      cResult[10] = tmp12;
      cResult[11] = tmp16;
      cResult[12] = tmp20;
      tmp19 = tmp20;
    }
  }
  class O {
    constructor(arg0) {
      item = option.item;
      index = option.index;
      tmp = null != closure_2;
      if (tmp) {
        num = 1;
        tmp = index === closure_2.length - 1;
      }
      obj = {
        start: 0 === index,
        end: tmp,
        label: item.choice.displayName,
        value: item.originalIndex,
        legacyCompat_selected: closure_4 === item.originalIndex,
        legacyCompat_onPress() {
              closure_5(item.originalIndex);
              onChoiceSelect(item.choice, item.originalIndex);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
      };
      return closure_1_8(option(closure_2[11]).TableRadioRow, obj);
    }
  }
  cResult[6] = data;
  cResult[7] = onChoiceSelect;
  cResult[8] = first1;
  cResult[9] = O;
  tmp13 = O;
}) : (function AppLauncherChoicesActionSheet(option) {
  let initChoiceIndex;
  let items2;
  let obj5;
  let obj6;
  let onDismiss;
  let tmp18;
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  let data;
  closure_3 = undefined;
  let first1;
  let closure_5;
  let tmp = data;
  ({ initChoiceIndex, onDismiss } = option);
  const bottom = onChoiceSelect(data[8])().bottom;
  let obj = option(data[9]);
  let sum = bottom;
  if (!obj.isIOS()) {
    sum = bottom + DEFAULT_CONTENT_PADDING;
  }
  const tmp5 = first1(react.useState(() => {
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    return choices.map(f115095);
  }), 2);
  data = tmp5[0];
  closure_3 = tmp5[1];
  const tmp6 = first1(react.useState(initChoiceIndex), 2);
  first1 = tmp6[0];
  closure_5 = tmp6[1];
  const items = [option.choices];
  const items1 = [onChoiceSelect, first1, data];
  const callback = react.useCallback((query) => {
    let choices;
    const obj = { query, choices, limit: null };
    choices = option.choices;
    const queryChoice = AutocompleteUtilsDefault.queryChoice;
    AutocompleteUtilsDefault;
    if (choices == null) {
      choices = [];
    }
    closure_3(queryChoice(obj));
  }, items);
  const callback1 = react.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = {
      start: 0 === index,
      end: null != first && index === first.length - 1,
      label: item.choice.displayName,
      value: item.originalIndex,
      legacyCompat_selected: first1 === item.originalIndex,
      legacyCompat_onPress() {
        closure_5(item.originalIndex);
        onChoiceSelect(item.choice, item.originalIndex);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    };
    const tmp = null != first && index === first.length - 1;
    return closure_1_8(option(first[11]).TableRadioRow, obj);
  }, items1);
  let tmp11 = null != option.choices;
  if (tmp11) {
    let choices = option.choices;
    let length1;
    if (choices != null) {
      length1 = choices.length;
    }
    let num = 5;
    if (tmp10) {
      num = 10;
    }
    tmp11 = length1 >= num;
  }
  let tmp14 = tmp11;
  const length = data.length;
  const obj2 = { option, startExpanded: tmp11, onDismiss, scrollable: tmp11, children: items2 };
  const AppLauncherCommandOptionActionSheet = tmp2(tmp[15]).AppLauncherCommandOptionActionSheet;
  const tmp13 = closure_9;
  if (tmp11) {
    const obj3 = { onChange: callback };
    tmp14 = closure_8(tmp2(tmp[14]).AppLauncherListSearchBar, obj3);
  }
  items2 = [tmp14, ];
  if (0 === length) {
    tmp18 = closure_8(tmp2(tmp[14]).AppLauncherListEmptyState, {});
  } else {
    const obj4 = {
      scrollable: tmp11,
      contentContainerStyle: obj5,
      scrollIndicatorInsets: obj6,
      keyExtractor(choice) {
          return "" + choice.choice.name + "_" + choice.originalIndex;
        },
      data,
      renderItem: callback1,
      accessibilityRole: "radiogroup"
    };
    obj5 = { paddingBottom: sum };
    obj6 = { bottom: sum };
    tmp18 = closure_8(closure_10, obj4);
  }
  items2[1] = tmp18;
  return tmp13(AppLauncherCommandOptionActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx");

export default tmp3;
