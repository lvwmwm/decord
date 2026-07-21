// Module ID: 14460
// Function ID: 108961
// Name: DevToolsDismissableContentsScreen
// Dependencies: []
// Exports: default

// Module 14460 (DevToolsDismissableContentsScreen)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, paddingTop: importDefault(dependencyMap[6]).space.PX_16, flex: 1 };
obj.container = obj;
obj1 = { flex: 1, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.list = obj1;
const tmp2 = arg1(dependencyMap[4]);
obj.search = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
const obj2 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.section = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
const obj3 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
obj.sectionHeader = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
const obj4 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.emptyState = { marginVertical: importDefault(dependencyMap[6]).space.PX_32 };
let closure_9 = obj1.createStyles(obj);
let closure_10 = importAllResult.memo((content) => {
  let end;
  let handleToggleDismissState;
  let isDismissed;
  let start;
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = importDefault(dependencyMap[8])(arg1(dependencyMap[7]).DismissibleContent[label]));
  return callback2(arg1(dependencyMap[9]).TableSwitchRow, { start, end, onValueChange, value, label });
});
const obj5 = { marginVertical: importDefault(dependencyMap[6]).space.PX_32 };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  let dailyCapOverridden;
  let newUserMinAgeRequiredOverridden;
  const tmp = callback4();
  const arg1 = tmp;
  const tmp2 = importDefault(closure_2[11])();
  let obj = arg1(closure_2[13]);
  let str = "";
  const tmp4 = callback(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  const first = tmp4[0];
  const importDefault = first;
  closure_2 = tmp4[1];
  let callback = importAllResult.useCallback((str) => {
    const dismissableContent = [];
    for (const key10014 in closure_0(closure_2[7]).DismissibleContent) {
      let tmp9 = key10014;
      let isNaNResult = tmp;
      if (!tmp) {
        let tmp2 = closure_1;
        let tmp3 = closure_2;
        let tmp4 = closure_1(closure_2[14]);
        let formatted = arg0.toLowerCase();
        isNaNResult = tmp4(formatted, key10014.toLowerCase());
      }
      if (isNaNResult) {
        let _isNaN = isNaN;
        let _Number = Number;
        isNaNResult = isNaN(Number(key10014));
      }
      if (!isNaNResult) {
        continue;
      } else {
        let arr = dismissableContent.push(key10014);
        // continue
      }
      continue;
    }
    const sorted = dismissableContent.sort((localeCompare) => localeCompare.localeCompare(arg1));
    const sections = [dismissableContent.length];
    return { dismissableContent, sections };
  }, []);
  const tmp6 = callback(importAllResult.useState(() => {
    let str = "";
    if (null != first) {
      str = first;
    }
    return closure_3(str);
  }), 2);
  const first1 = tmp6[0];
  const dismissableContent = first1.dismissableContent;
  let closure_5 = tmp6[1];
  let obj1 = arg1(closure_2[15]);
  const items = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ dailyCapOverridden: tmp10.dailyCapOverridden, newUserMinAgeRequiredOverridden: tmp10.newUserMinAgeRequiredOverridden }));
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden } = stateFromStoresObject);
  let obj2 = arg1(closure_2[16]);
  const tmp9 = callback(obj2.useForceBountiesSwipeUpNux(), 2);
  closure_6 = tmp10;
  const items1 = [tmp9[1]];
  callback = importAllResult.useCallback((arg0) => {
    const tmp = tmp10(arg0);
    if (arg0) {
      const result = tmp(closure_2[17]).clearDismissedScrollAffordanceBountyIds();
      const obj = tmp(closure_2[17]);
    }
  }, items1);
  const items2 = [dismissableContent];
  const tmp3 = importDefault(closure_2[12])();
  const items3 = [tmp];
  const callback1 = importAllResult.useCallback((arg0, arg1) => callback4(closure_10, { content: dismissableContent[arg1], start: 0 === arg1, end: arg1 === dismissableContent.length - 1 }), items2);
  obj = { style: tmp.container };
  obj = { style: tmp.section };
  const callback2 = importAllResult.useCallback(() => callback4(tmp(closure_2[19]).Text, { style: tmp.sectionHeader }), items3);
  obj1 = {};
  obj2 = { onValueChange: arg1(closure_2[21]).overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  const items4 = [callback2(arg1(closure_2[9]).TableSwitchRow, obj2), , ];
  const obj3 = { onValueChange: arg1(closure_2[21]).overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
  items4[1] = callback2(arg1(closure_2[9]).TableSwitchRow, obj3);
  items4[2] = callback2(arg1(closure_2[9]).TableSwitchRow, { onValueChange: callback, value: true === tmp9[0], label: "Force bounties swipe-up NUX", subLabel: "When enabled, treat bounties swipe-up NUX as shown so scroll affordances always appear. Reopen the bounties modal after toggling." });
  obj1.children = items4;
  obj.children = callback3(arg1(closure_2[20]).TableRowGroup, obj1);
  const items5 = [callback2(closure_5, obj), , , ];
  const obj5 = { style: tmp.section };
  const obj6 = { "Bool(false)": null, "Bool(false)": "1d74a82e87825a8e88397d4d91dbcec8" };
  const obj7 = { label: "Clear all dismissed dismissible contents", onPress: arg1(closure_2[23]).clearDismissedContents, icon: callback2(arg1(closure_2[24]).TrashIcon, {}), trailing: callback2(arg1(closure_2[25]).TableRowArrow, {}) };
  const items6 = [callback2(arg1(closure_2[22]).TableRow, obj7), , ];
  const obj8 = { label: "Clear all guild dismissed dismissible contents", onPress: arg1(closure_2[23]).clearGuildDismissedContents, icon: callback2(arg1(closure_2[24]).TrashIcon, {}), trailing: callback2(arg1(closure_2[25]).TableRowArrow, {}) };
  items6[1] = callback2(arg1(closure_2[22]).TableRow, obj8);
  const obj9 = { label: "Dismiss all dismissible contents", onPress: arg1(closure_2[23]).checkAllDismissedContents, icon: callback2(arg1(closure_2[26]).DoubleCheckmarkIcon, {}), trailing: callback2(arg1(closure_2[25]).TableRowArrow, {}) };
  items6[2] = callback2(arg1(closure_2[22]).TableRow, obj9);
  obj6.children = items6;
  obj5.children = callback3(arg1(closure_2[20]).TableRowGroup, obj6);
  items5[1] = callback2(closure_5, obj5);
  const obj10 = { style: tmp.search };
  const obj11 = { size: "md" };
  if (null != first) {
    str = first;
  }
  obj11.defaultValue = str;
  obj11.onChange = function onChange(arg0) {
    callback(arg0);
    callback3(callback2(arg0));
  };
  obj10.children = callback2(arg1(closure_2[27]).SearchField, obj11);
  items5[2] = callback2(closure_5, obj10);
  if (dismissableContent.length > 0) {
    const obj12 = { style: tmp.list, estimatedListSize: "windowSize", itemSize: tmp2, placeholderConfig: tmp12, renderItem: callback1, renderSectionHeader: callback2, sections: first1.sections, sectionHeaderSize: tmp3, insetEnd: importDefault(closure_2[10])({ includeKeyboardHeight: true }).insets.bottom + importDefault(closure_2[6]).space.PX_16, wrapChildren: true };
    let tmp22 = callback2(importDefault(closure_2[28]), obj12);
    const tmp21 = importDefault(closure_2[28]);
  } else {
    const obj13 = { style: tmp.emptyState };
    const obj14 = {};
    const obj15 = { marginBottom: importDefault(closure_2[6]).space.PX_16 };
    obj14.style = obj15;
    const items7 = [callback2(arg1(closure_2[19]).Text, obj14), callback2(arg1(closure_2[29]).SearchEmpty, {})];
    obj13.children = items7;
    tmp22 = callback3(closure_5, obj13);
  }
  items5[3] = tmp22;
  obj.children = items5;
  return callback3(closure_5, obj);
};
