// Module ID: 11317
// Function ID: 88082
// Name: FlashListWrapper
// Dependencies: [57, 31, 27, 1455, 33, 4130, 689, 7527, 1557, 477, 4974, 7636, 4098, 7423, 11318, 11319, 2]
// Exports: default

// Module 11317 (FlashListWrapper)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function FlashListWrapper(scrollable) {
  let obj = Object.create(null);
  obj.scrollable = 0;
  const merged = Object.assign(scrollable, obj);
  const tmp4 = require(7527) /* defaultMVCPConfig */;
  if (scrollable.scrollable) {
    obj = { preserveScrollMomentum: true };
    const merged1 = Object.assign(merged);
    let tmp3Result = tmp3(tmp4.BottomSheetFlashList, obj);
  } else {
    obj = { scrollEnabled: false };
    const merged2 = Object.assign(merged);
    tmp3Result = tmp3(tmp4.FlashList, obj);
  }
  return tmp3Result;
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { listItemContainer: { overflow: "hidden" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.listItem = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.firstItem = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.xl };
let obj1 = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.xl };
_createForOfIteratorHelperLoose.lastItem = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.xl };
let obj2 = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.xl };
_createForOfIteratorHelperLoose.divider = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginLeft: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginLeft: 16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx");

export default function AppLauncherChoicesActionSheet(option) {
  let initChoiceIndex;
  let onDismiss;
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  let first;
  let React;
  let first1;
  let closure_6;
  ({ initChoiceIndex, onDismiss } = option);
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  const bottom = onChoiceSelect(1557)().bottom;
  let obj = option(477);
  let sum = bottom;
  if (!obj.isIOS()) {
    sum = bottom + closure_6;
  }
  const tmp4 = first(React.useState(() => (function toChoicesWithIndex(choices) {
    let items = choices;
    if (null == choices) {
      items = [];
    }
    return items.map((choice, originalIndex) => ({ choice, originalIndex }));
  })(option.choices)), 2);
  first = tmp4[0];
  React = tmp4[1];
  const tmp5 = first(React.useState(initChoiceIndex), 2);
  first1 = tmp5[0];
  closure_6 = tmp5[1];
  let items = [option.choices];
  let items1 = [onChoiceSelect, first1, tmp, first];
  const callback = React.useCallback((query) => {
    let obj = onChoiceSelect(tmp[10]);
    obj = { query };
    let choices = option.choices;
    if (null == choices) {
      choices = [];
    }
    obj.choices = choices;
    obj.limit = null;
  }, items);
  const items2 = [tmp.divider];
  const callback1 = React.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let lastItem = null != first;
    if (lastItem) {
      lastItem = index === first.length - 1;
    }
    let obj = {};
    const items = [tmp.listItemContainer, , ];
    let firstItem = 0 === index;
    if (firstItem) {
      firstItem = tmp.firstItem;
    }
    items[1] = firstItem;
    if (lastItem) {
      lastItem = tmp.lastItem;
    }
    items[2] = lastItem;
    obj.style = items;
    obj = {
      style: items1,
      label: item.choice.displayName,
      align: "right",
      selected: first1 === item.originalIndex,
      onPress() {
        outer1_6(item.originalIndex);
        outer1_1(item.choice, item.originalIndex);
        onChoiceSelect(table[12]).hideActionSheet();
      }
    };
    items1 = [tmp.listItem];
    obj.children = outer1_7(option(tmp[11]).FormRadioRow, obj);
    return outer1_7(first1, obj);
  }, items1);
  const callback2 = React.useCallback(() => outer1_7(option(tmp[11]).FormDivider, { style: tmp.divider }), items2);
  let tmp11 = null != option.choices;
  if (tmp11) {
    let choices = option.choices;
    let length;
    if (null != choices) {
      length = choices.length;
    }
    let num = 5;
    if (tmp10) {
      num = 10;
    }
    tmp11 = length >= num;
  }
  obj = { option, startExpanded: tmp11, onDismiss, scrollable: tmp11 };
  let tmp14 = tmp11;
  if (tmp11) {
    obj = { onChange: callback };
    tmp14 = callback(option(11319).AppLauncherListSearchBar, obj);
  }
  const items3 = [tmp14, ];
  if (0 === first.length) {
    let tmp20 = callback(option(11319).AppLauncherListEmptyState, {});
  } else {
    const obj1 = { scrollable: tmp11 };
    const obj2 = { paddingBottom: sum };
    obj1.contentContainerStyle = obj2;
    const obj3 = { bottom: sum };
    obj1.scrollIndicatorInsets = obj3;
    obj1.keyExtractor = function keyExtractor(choice) {
      return "" + choice.choice.name + "_" + choice.originalIndex;
    };
    obj1.data = first;
    obj1.renderItem = callback1;
    obj1.ItemSeparatorComponent = callback2;
    obj1.accessibilityRole = "radiogroup";
    tmp20 = callback(FlashListWrapper, obj1);
  }
  items3[1] = tmp20;
  obj.children = items3;
  return closure_8(option(11318).AppLauncherCommandOptionActionSheet, obj);
};
