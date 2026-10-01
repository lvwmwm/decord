// Module ID: 11647
// Function ID: 11648
// Name: AppLauncherChoicesActionSheet
// Dependencies: [32, 19, 17, 1484, 21, 4836, 576, 8179, 1613, 1364, 5754, 8053, 4800, 6364, 11648, 11649, 2]
// Exports: default

// Module 11647 (AppLauncherChoicesActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5754 */;
import Form from "Form" /* 8053 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8179 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, item;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
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
let react = react_mod;
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { listItemContainer: { overflow: "hidden" }, listItem: obj2, firstItem: obj3, lastItem: obj4, divider: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { borderTopLeftRadius: nativeDefault.radii.xl, borderTopRightRadius: nativeDefault.radii.xl };
obj4 = { borderBottomLeftRadius: nativeDefault.radii.xl, borderBottomRightRadius: nativeDefault.radii.xl };
obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx");

export default function AppLauncherChoicesActionSheet(option) {
  let closure_2;
  let closure_4;
  let initChoiceIndex;
  let items3;
  let obj5;
  let obj6;
  let onDismiss;
  let tmp20;
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  let data;
  react = undefined;
  let first1;
  let closure_6;
  ({ initChoiceIndex, onDismiss } = option);
  let tmp = closure_9();
  dependencyMap = tmp;
  const tmp2 = dependencyMap;
  const bottom = onChoiceSelect(1613)().bottom;
  let tmp3 = option;
  let obj = option(1364);
  let sum = bottom;
  if (!obj.isIOS()) {
    sum = bottom + closure_6;
  }
  const tmp6 = data(react.useState(() => {
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    return choices.map((choice, originalIndex) => ({ choice, originalIndex }));
  }), 2);
  data = tmp6[0];
  react = tmp6[1];
  const tmp7 = data(react.useState(initChoiceIndex), 2);
  first1 = tmp7[0];
  closure_6 = tmp7[1];
  let items = [option.choices];
  let items1 = [onChoiceSelect, first1, tmp, data];
  const callback = react.useCallback((query) => {
    let choices;
    const obj = { query, choices, limit: null };
    choices = option.choices;
    const queryChoice = AutocompleteUtilsDefault.queryChoice;
    AutocompleteUtilsDefault;
    if (choices == null) {
      choices = [];
    }
    closure_4(queryChoice(obj));
  }, items);
  const items2 = [tmp.divider];
  const callback1 = react.useCallback((item) => {
    let items1;
    let obj2;
    item = item.item;
    const index = item.index;
    let lastItem = null != first && index === first.length - 1;
    const items = [closure_2.listItemContainer, , ];
    let firstItem = 0 === index;
    const originalIndex = item.originalIndex;
    const tmp = first1;
    const tmp3 = first1;
    if (firstItem) {
      firstItem = tmp4.firstItem;
    }
    items[1] = firstItem;
    if (lastItem) {
      lastItem = tmp4.lastItem;
    }
    let obj = { style: items, children: tmp2(option(closure_2[11]).FormRadioRow, obj2) };
    items[2] = lastItem;
    obj2 = {
      style: items1,
      label: item.choice.displayName,
      align: "right",
      selected: tmp === originalIndex,
      onPress() {
        closure_6(item.originalIndex);
        onChoiceSelect(item.choice, item.originalIndex);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    };
    items1 = [closure_2.listItem];
    return closure_1_7(tmp3, obj);
  }, items1);
  const callback2 = react.useCallback(() => {
    const obj = { style: closure_2.divider };
    return metroImportDefault(Form.FormDivider, obj);
  }, items2);
  let tmp13 = null != option.choices;
  if (tmp13) {
    let choices = option.choices;
    let length1;
    if (choices != null) {
      length1 = choices.length;
    }
    let num = 5;
    if (tmp12) {
      num = 10;
    }
    tmp13 = length1 >= num;
  }
  let obj2 = { option, startExpanded: tmp13, onDismiss, scrollable: tmp13, children: items3 };
  let tmp16 = tmp13;
  const length = data.length;
  const AppLauncherCommandOptionActionSheet = tmp3(11648).AppLauncherCommandOptionActionSheet;
  const tmp15 = closure_8;
  if (tmp13) {
    const obj3 = { onChange: callback };
    tmp16 = closure_7(tmp3(11649).AppLauncherListSearchBar, obj3);
  }
  items3 = [tmp16, ];
  if (0 === length) {
    tmp20 = closure_7(tmp3(11649).AppLauncherListEmptyState, {});
  } else {
    const obj4 = {
      scrollable: tmp13,
      contentContainerStyle: obj5,
      scrollIndicatorInsets: obj6,
      keyExtractor(choice) {
          return "" + choice.choice.name + "_" + choice.originalIndex;
        },
      data,
      renderItem: callback1,
      ItemSeparatorComponent: callback2,
      accessibilityRole: "radiogroup"
    };
    obj5 = { paddingBottom: sum };
    obj6 = { bottom: sum };
    tmp20 = closure_7(FlashListWrapper, obj4);
  }
  items3[1] = tmp20;
  return tmp15(AppLauncherCommandOptionActionSheet, obj2);
};
