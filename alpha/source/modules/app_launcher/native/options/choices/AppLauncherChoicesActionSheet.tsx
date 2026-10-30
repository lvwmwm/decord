// Module ID: 12319
// Function ID: 12320
// Name: AppLauncherChoicesActionSheet
// Dependencies: [32, 19, 1497, 21, 7288, 1626, 1376, 6773, 7055, 5253, 7106, 12320, 12321, 2]
// Exports: default

// Module 12319 (AppLauncherChoicesActionSheet)
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1497 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6773 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 7288 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let item;

let metroImportDefault;
let metroRequire;
function FlashListWrapper(scrollable) {
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
}
let _slicedToArray = _slicedToArray_mod;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx");

export default function AppLauncherChoicesActionSheet(option) {
  let closure_3;
  let closure_5;
  let data;
  let first1;
  let initChoiceIndex;
  let items2;
  let obj5;
  let obj6;
  let onDismiss;
  let tmp18;
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  data = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_5 = undefined;
  let tmp = data;
  ({ initChoiceIndex, onDismiss } = option);
  const bottom = onChoiceSelect(data[5])().bottom;
  let obj = option(data[6]);
  let sum = bottom;
  if (!obj.isIOS()) {
    sum = bottom + closure_5;
  }
  [data, _slicedToArray] = first1.useState(() => {
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    return choices.map((choice, originalIndex) => ({ choice, originalIndex }));
  });
  [first1, closure_5] = first1.useState(initChoiceIndex);
  const items = [option.choices];
  const items1 = [onChoiceSelect, first1, data];
  const callback = first1.useCallback((query) => {
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
  const callback1 = first1.useCallback((item) => {
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
    return closure_1_6(option(first[8]).TableRadioRow, obj);
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
  const AppLauncherCommandOptionActionSheet = tmp2(tmp[11]).AppLauncherCommandOptionActionSheet;
  const tmp13 = closure_7;
  if (tmp11) {
    const obj3 = { onChange: callback };
    tmp14 = closure_6(tmp2(tmp[12]).AppLauncherListSearchBar, obj3);
  }
  items2 = [tmp14, ];
  if (0 === length) {
    tmp18 = closure_6(tmp2(tmp[12]).AppLauncherListEmptyState, {});
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
    tmp18 = closure_6(FlashListWrapper, obj4);
  }
  items2[1] = tmp18;
  return tmp13(AppLauncherCommandOptionActionSheet, obj2);
};
