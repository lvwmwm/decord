// Module ID: 11277
// Function ID: 87779
// Name: FlashListWrapper
// Dependencies: []
// Exports: default

// Module 11277 (FlashListWrapper)
function FlashListWrapper(scrollable) {
  let obj = Object.create(null);
  obj.scrollable = 0;
  const merged = Object.assign(scrollable, obj);
  const tmp4 = arg1(dependencyMap[7]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const DEFAULT_CONTENT_PADDING = arg1(dependencyMap[3]).DEFAULT_CONTENT_PADDING;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { listItemContainer: { overflow: "hidden" } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.CARD_BACKGROUND_DEFAULT };
obj.listItem = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.firstItem = { borderTopLeftRadius: importDefault(dependencyMap[6]).radii.xl, borderTopRightRadius: importDefault(dependencyMap[6]).radii.xl };
const obj1 = { borderTopLeftRadius: importDefault(dependencyMap[6]).radii.xl, borderTopRightRadius: importDefault(dependencyMap[6]).radii.xl };
obj.lastItem = { borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.xl, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.xl };
const obj2 = { borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.xl, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.xl };
obj.divider = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, marginLeft: 16 };
let closure_9 = obj.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, marginLeft: 16 };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx");

export default function AppLauncherChoicesActionSheet(option) {
  let initChoiceIndex;
  let onDismiss;
  option = option.option;
  const arg1 = option;
  const onChoiceSelect = option.onChoiceSelect;
  const importDefault = onChoiceSelect;
  let callback;
  let React;
  let View;
  let closure_6;
  ({ initChoiceIndex, onDismiss } = option);
  const tmp = callback3();
  const dependencyMap = tmp;
  const bottom = importDefault(dependencyMap[8])().bottom;
  let obj = arg1(dependencyMap[9]);
  let sum = bottom;
  if (!obj.isIOS()) {
    sum = bottom + closure_6;
  }
  const tmp4 = callback(React.useState(() => function toChoicesWithIndex(choices) {
    let items = choices;
    if (null == choices) {
      items = [];
    }
    return items.map((choice, originalIndex) => ({ choice, originalIndex }));
  }(option.choices)), 2);
  const first = tmp4[0];
  callback = first;
  React = tmp4[1];
  const tmp5 = callback(React.useState(initChoiceIndex), 2);
  const first1 = tmp5[0];
  View = first1;
  closure_6 = tmp5[1];
  const items = [option.choices];
  const items1 = [onChoiceSelect, first1, tmp, first];
  callback = React.useCallback((query) => {
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
    const option = item;
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
        callback2(item.originalIndex);
        callback(item.choice, item.originalIndex);
        callback(closure_2[12]).hideActionSheet();
      }
    };
    const items1 = [tmp.listItem];
    obj.children = callback2(option(tmp[11]).FormRadioRow, obj);
    return callback2(first1, obj);
  }, items1);
  const callback2 = React.useCallback(() => callback2(option(tmp[11]).FormDivider, { style: tmp.divider }), items2);
  let tmp11 = null != option.choices;
  if (tmp11) {
    const choices = option.choices;
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
    tmp14 = callback2(arg1(dependencyMap[15]).AppLauncherListSearchBar, obj);
  }
  const items3 = [tmp14, ];
  if (0 === first.length) {
    let tmp20 = callback2(arg1(dependencyMap[15]).AppLauncherListEmptyState, {});
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
    tmp20 = callback2(FlashListWrapper, obj1);
  }
  items3[1] = tmp20;
  obj.children = items3;
  return closure_8(arg1(dependencyMap[14]).AppLauncherCommandOptionActionSheet, obj);
};
