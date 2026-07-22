// Module ID: 14471
// Function ID: 109036
// Name: DevToolsDismissableContentsScreen
// Dependencies: []
// Exports: default

// Module 14471 (DevToolsDismissableContentsScreen)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
obj1 = { padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.contentContainer = obj1;
const tmp2 = arg1(dependencyMap[4]);
obj.headerSection = { paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
const obj2 = { paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
obj.search = { paddingBottom: importDefault(dependencyMap[6]).space.PX_8 };
const obj3 = { paddingBottom: importDefault(dependencyMap[6]).space.PX_8 };
obj.sectionHeader = { paddingBottom: importDefault(dependencyMap[6]).space.PX_8 };
const obj5 = { "Null": "string", "Null": "string", marginBottom: "color", marginVertical: importDefault(dependencyMap[6]).space.PX_32 };
obj.emptyState = obj5;
let closure_10 = obj1.createStyles(obj);
let closure_11 = importAllResult.memo((content) => {
  let end;
  let handleToggleDismissState;
  let isDismissed;
  let start;
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = importDefault(dependencyMap[8])(arg1(dependencyMap[7]).DismissibleContent[label]));
  return callback2(arg1(dependencyMap[9]).TableSwitchRow, { start, end, onValueChange, value, label });
});
const obj4 = { paddingBottom: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  let dailyCapOverridden;
  let newUserMinAgeRequiredOverridden;
  const tmp = callback4();
  let obj = arg1(closure_2[11]);
  let str = "";
  const tmp2 = callback(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  const first = tmp2[0];
  const arg1 = first;
  const importDefault = tmp2[1];
  closure_2 = React.useCallback((str) => {
    const items = [];
    for (const key10014 in closure_0(closure_2[7]).DismissibleContent) {
      let tmp9 = key10014;
      let isNaNResult = tmp;
      if (!tmp) {
        let tmp2 = closure_1;
        let tmp3 = closure_2;
        let tmp4 = closure_1(closure_2[12]);
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
        let arr = items.push(key10014);
        // continue
      }
      continue;
    }
    const sorted = items.sort((localeCompare) => localeCompare.localeCompare(arg1));
    return items;
  }, []);
  const tmp4 = callback(React.useState(() => {
    let str = "";
    if (null != first) {
      str = first;
    }
    return closure_2(str);
  }), 2);
  const first1 = tmp4[0];
  let callback = first1;
  const React = tmp4[1];
  let obj1 = arg1(closure_2[13]);
  const items = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ dailyCapOverridden: closure_6.dailyCapOverridden, newUserMinAgeRequiredOverridden: closure_6.newUserMinAgeRequiredOverridden }));
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden } = stateFromStoresObject);
  let obj2 = arg1(closure_2[14]);
  const tmp6 = callback(obj2.useForceBountiesSwipeUpNux(), 2);
  const View = tmp7;
  const items1 = [tmp6[1]];
  obj = {};
  obj = { style: tmp.headerSection };
  callback = React.useCallback((arg0) => {
    tmp7(arg0);
    if (arg0) {
      const result = first(closure_2[15]).clearDismissedScrollAffordanceBountyIds();
      const obj = first(closure_2[15]);
    }
  }, items1);
  obj1 = { -9223372036854775808: true, 9223372036854775807: "/assets/.cache/intl/bW9kdWxlcy9pbnRs" };
  obj2 = { onValueChange: arg1(closure_2[17]).overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  const items2 = [callback2(arg1(closure_2[9]).TableSwitchRow, obj2), , ];
  const obj3 = { onValueChange: arg1(closure_2[17]).overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
  items2[1] = callback2(arg1(closure_2[9]).TableSwitchRow, obj3);
  items2[2] = callback2(arg1(closure_2[9]).TableSwitchRow, { onValueChange: callback, value: true === tmp6[0], label: "Force bounties swipe-up NUX", subLabel: "When enabled, treat bounties swipe-up NUX as shown so scroll affordances always appear. Reopen the bounties modal after toggling." });
  obj1.children = items2;
  obj.children = callback3(arg1(closure_2[16]).TableRowGroup, obj1);
  const items3 = [callback2(View, obj), , , , ];
  const obj5 = { style: tmp.headerSection };
  const obj6 = { -9223372036854775808: "/assets/.cache/intl/bW9kdWxlcy9jbGlwcw==", 9223372036854775807: null };
  const obj7 = { label: "Clear all dismissed dismissible contents", onPress: arg1(closure_2[19]).clearDismissedContents, icon: callback2(arg1(closure_2[20]).TrashIcon, {}), trailing: callback2(arg1(closure_2[21]).TableRowArrow, {}) };
  const items4 = [callback2(arg1(closure_2[18]).TableRow, obj7), , ];
  const obj8 = { label: "Clear all guild dismissed dismissible contents", onPress: arg1(closure_2[19]).clearGuildDismissedContents, icon: callback2(arg1(closure_2[20]).TrashIcon, {}), trailing: callback2(arg1(closure_2[21]).TableRowArrow, {}) };
  items4[1] = callback2(arg1(closure_2[18]).TableRow, obj8);
  const obj9 = { label: "Dismiss all dismissible contents", onPress: arg1(closure_2[19]).checkAllDismissedContents, icon: callback2(arg1(closure_2[22]).DoubleCheckmarkIcon, {}), trailing: callback2(arg1(closure_2[21]).TableRowArrow, {}) };
  items4[2] = callback2(arg1(closure_2[18]).TableRow, obj9);
  obj6.children = items4;
  obj5.children = callback3(arg1(closure_2[16]).TableRowGroup, obj6);
  items3[1] = callback2(View, obj5);
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
  obj10.children = callback2(arg1(closure_2[23]).SearchField, obj11);
  items3[2] = callback2(View, obj10);
  const obj12 = { "Null": null, ti: "1146ad1374798af61befeddbf75c5f47", tk: "es-ES.messages.1146ad1374798af61befeddbf75c5f47.compiled.messages", tl: "jsona", style: tmp.sectionHeader };
  items3[3] = callback2(arg1(closure_2[24]).Text, obj12);
  let tmp13 = null;
  if (0 === first1.length) {
    const obj13 = { style: tmp.emptyState };
    const obj14 = { UNKNOWN_EMOJI: true, paddingVertical: "/assets/.cache/intl/bW9kdWxlcy9pbnRs", getChangeTitle: null };
    const obj15 = { marginBottom: importDefault(closure_2[6]).space.PX_16 };
    obj14.style = obj15;
    const items5 = [callback2(arg1(closure_2[24]).Text, obj14), callback2(arg1(closure_2[25]).SearchEmpty, {})];
    obj13.children = items5;
    tmp13 = callback3(View, obj13);
  }
  items3[4] = tmp13;
  obj.children = items3;
  const obj16 = { style: tmp.container };
  const obj17 = { data: first1 };
  const items6 = [tmp.contentContainer, ];
  const obj18 = { paddingBottom: importDefault(closure_2[10])({ includeKeyboardHeight: true }).insets.bottom + importDefault(closure_2[6]).space.PX_16 };
  items6[1] = obj18;
  obj17.contentContainerStyle = items6;
  obj17.keyboardShouldPersistTaps = "handled";
  obj17.ListHeaderComponent = callback3(closure_9, obj);
  obj17.keyExtractor = function keyExtractor(arg0) {
    return arg0;
  };
  obj17.renderItem = function renderItem(content) {
    const index = content.index;
    return callback4(closure_11, { content: content.item, start: 0 === index, end: index === first1.length - 1 });
  };
  obj16.children = callback2(arg1(closure_2[26]).FlashList, obj17);
  return callback2(View, obj16);
};
