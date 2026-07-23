// Module ID: 14585
// Function ID: 111189
// Name: DismissableContentsEmpty
// Dependencies: [57, 31, 27, 1338, 33, 4130, 689, 1334, 14586, 5504, 5503, 12996, 5165, 1331, 4089, 5171, 14587, 5772, 4126, 9371, 5045, 1557, 10673, 566, 13912, 13913, 7879, 2]
// Exports: default

// Module 14585 (DismissableContentsEmpty)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function DismissableContentsEmpty() {
  let obj = { style: callback4().emptyState };
  obj = { style: null, variant: "heading-lg/semibold", children: "No results found" };
  obj = { marginBottom: importDefault(689).space.PX_16 };
  obj.style = obj;
  const items = [callback2(require(4126) /* Text */.Text, obj), callback2(require(9371) /* getSearchEmptySource */.SearchEmpty, {})];
  obj.children = items;
  return callback3(View, obj);
}
function filterDismissableContent(str) {
  const items = [];
  for (const key10014 in require(1334) /* DismissibleContent */.DismissibleContent) {
    let tmp9 = key10014;
    let isNaNResult = tmp;
    if (!tmp) {
      let tmp2 = importDefault;
      let tmp3 = dependencyMap;
      let tmp4 = importDefault(5045);
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
      continue;
    }
    continue;
  }
  const sorted = items.sort((localeCompare) => localeCompare.localeCompare(arg1));
  return items;
}
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.contentContainer = _createForOfIteratorHelperLoose;
obj.headerSection = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.search = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.sectionHeader = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj5 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_32, justifyContent: "center", alignItems: "center" };
obj.emptyState = obj5;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = importAllResult.memo((content) => {
  let end;
  let handleToggleDismissState;
  let isDismissed;
  let start;
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = importDefault(14586)(require(1334) /* DismissibleContent */.DismissibleContent[label]));
  return callback2(require(5504) /* TableSwitchRow */.TableSwitchRow, { start, end, onValueChange, value, label });
});
let closure_12 = importAllResult.memo((arg0) => {
  let dailyCapOverridden;
  let forceBountiesSwipeUpNux;
  let initialSearchQuery;
  let newUserMinAgeRequiredOverridden;
  let onForceBountiesSwipeUpNuxChange;
  let onSearchChange;
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux, initialSearchQuery, onForceBountiesSwipeUpNuxChange, onSearchChange } = arg0);
  const tmp = callback4();
  let obj = {};
  obj = { style: tmp.headerSection };
  obj = { title: "Global Overrides", hasIcons: false };
  const obj1 = { onValueChange: require(12996) /* handleDCShownToUser */.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  const items = [callback2(require(5504) /* TableSwitchRow */.TableSwitchRow, obj1), , ];
  const obj2 = { onValueChange: require(12996) /* handleDCShownToUser */.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
  items[1] = callback2(require(5504) /* TableSwitchRow */.TableSwitchRow, obj2);
  items[2] = callback2(require(5504) /* TableSwitchRow */.TableSwitchRow, { onValueChange: onForceBountiesSwipeUpNuxChange, value: forceBountiesSwipeUpNux, label: "Force bounties swipe-up NUX", subLabel: "When enabled, treat bounties swipe-up NUX as shown so scroll affordances always appear. Reopen the bounties modal after toggling." });
  obj.children = items;
  obj.children = callback3(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
  const items1 = [callback2(View, obj), , , ];
  const obj3 = { style: tmp.headerSection };
  const obj4 = { title: "Bulk actions", hasIcons: true };
  const obj5 = { label: "Clear all dismissed dismissible contents", onPress: require(1331) /* _createForOfIteratorHelperLoose */.clearDismissedContents, icon: callback2(require(4089) /* TrashIcon */.TrashIcon, {}), trailing: callback2(require(5171) /* TableRowArrow */.TableRowArrow, {}) };
  const items2 = [callback2(require(5165) /* TableRowInner */.TableRow, obj5), , ];
  const obj6 = { label: "Clear all guild dismissed dismissible contents", onPress: require(1331) /* _createForOfIteratorHelperLoose */.clearGuildDismissedContents, icon: callback2(require(4089) /* TrashIcon */.TrashIcon, {}), trailing: callback2(require(5171) /* TableRowArrow */.TableRowArrow, {}) };
  items2[1] = callback2(require(5165) /* TableRowInner */.TableRow, obj6);
  const obj7 = { label: "Dismiss all dismissible contents", onPress: require(1331) /* _createForOfIteratorHelperLoose */.checkAllDismissedContents, icon: callback2(require(14587) /* DoubleCheckmarkIcon */.DoubleCheckmarkIcon, {}), trailing: callback2(require(5171) /* TableRowArrow */.TableRowArrow, {}) };
  items2[2] = callback2(require(5165) /* TableRowInner */.TableRow, obj7);
  obj4.children = items2;
  obj3.children = callback3(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj4);
  items1[1] = callback2(View, obj3);
  items1[2] = callback2(View, { style: tmp.search, children: callback2(require(5772) /* SearchField */.SearchField, { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange }) });
  const obj9 = { style: tmp.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: "Dismissible Contents" };
  items1[3] = callback2(require(4126) /* Text */.Text, obj9);
  obj.children = items1;
  return callback3(closure_9, obj);
});
let obj4 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  const tmp = callback4();
  const ref = first.useRef(null);
  const importDefault = first.useRef(0);
  let obj = ref(10673);
  const tmp4 = callback(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  const dependencyMap = tmp4[0];
  callback = tmp5;
  first = callback(first.useState(() => {
    let str = "";
    if (null != closure_2) {
      str = closure_2;
    }
    return str;
  }), 1)[0];
  const tmp7 = callback(first.useState(() => {
    let str = "";
    if (null != closure_2) {
      str = closure_2;
    }
    return outer1_14(str);
  }), 2);
  const first1 = tmp7[0];
  let _isNativeReflectConstruct = tmp7[1];
  let obj1 = ref(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ dailyCapOverridden: lib.dailyCapOverridden, newUserMinAgeRequiredOverridden: lib.newUserMinAgeRequiredOverridden }));
  const dailyCapOverridden = stateFromStoresObject.dailyCapOverridden;
  const newUserMinAgeRequiredOverridden = stateFromStoresObject.newUserMinAgeRequiredOverridden;
  const tmp2 = importDefault(1557)();
  const tmp9 = callback(ref(13912).useForceBountiesSwipeUpNux(), 2);
  const first2 = tmp9[0];
  callback4 = tmp11;
  const items1 = [tmp9[1]];
  callback = first.useCallback((arg0) => {
    tmp11(arg0);
    if (arg0) {
      const result = ref(table[25]).clearDismissedScrollAffordanceBountyIds();
      const obj = ref(table[25]);
    }
  }, items1);
  const callback1 = first.useCallback(() => {
    let current = ref.current;
    const animationFrame = requestAnimationFrame(() => {
      current = current.current;
      if (null != current) {
        const obj = { offset: current, animated: false };
        current.scrollToOffset(obj);
      }
    });
  }, []);
  const items2 = [tmp4[1], callback1];
  const callback2 = first.useCallback((arg0) => {
    tmp5(arg0);
    lib(outer1_14(arg0));
    callback1();
  }, items2);
  const items3 = [dailyCapOverridden, newUserMinAgeRequiredOverridden, first2, first, callback, callback2];
  const callback3 = first.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items4 = [first1.length];
  const memo = first.useMemo(() => dailyCapOverridden(callback1, { dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux: true === first2, initialSearchQuery: first, onForceBountiesSwipeUpNuxChange: callback, onSearchChange: callback2 }), items3);
  obj = { style: tmp.container };
  callback4 = first.useCallback((content) => {
    const index = content.index;
    return dailyCapOverridden(callback, { content: content.item, start: 0 === index, end: index === first1.length - 1 });
  }, items4);
  obj = { ref, data: first1, contentContainerStyle: null, keyboardShouldPersistTaps: "handled", keyboardDismissMode: "on-drag", automaticallyAdjustKeyboardInsets: true };
  const items5 = [tmp.contentContainer, ];
  obj1 = { paddingBottom: tmp2.bottom + importDefault(689).space.PX_16 };
  items5[1] = obj1;
  obj.contentContainerStyle = items5;
  obj.ListHeaderComponent = memo;
  obj.ListEmptyComponent = callback2;
  obj.keyExtractor = function keyExtractor(arg0) {
    return arg0;
  };
  obj.renderItem = callback4;
  obj.onScroll = callback3;
  obj.scrollEventThrottle = 16;
  obj.children = dailyCapOverridden(ref(7879).FlashList, obj);
  return dailyCapOverridden(first1, obj);
};
