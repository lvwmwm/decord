// Module ID: 15171
// Function ID: 15172
// Name: DevToolsDismissableContentsScreen
// Dependencies: [32, 19, 17, 2033, 21, 4836, 576, 2029, 15172, 6621, 5999, 9700, 5917, 2026, 4790, 5924, 15173, 6471, 4832, 9778, 5829, 1613, 9388, 504, 8179, 2]
// Exports: default

// Module 15171 (DevToolsDismissableContentsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2026 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import TrashIcon from "TrashIcon" /* 4790 */;
import Text_Text from "Text/Text" /* 4832 */;
import fuzzysearchDefault from "fuzzysearch" /* 5829 */;
import TableRow4 from "TableRow" /* 5917 */;
import TableRowArrow from "TableRowArrow" /* 5924 */;
import TableRowGroup3 from "TableRowGroup" /* 5999 */;
import SearchField from "SearchField" /* 6471 */;
import TableSwitchRow3 from "TableSwitchRow" /* 6621 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 9700 */;
import SearchEmpty from "SearchEmpty" /* 9778 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 15172 */;
import DoubleCheckmarkIcon from "DoubleCheckmarkIcon" /* 15173 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2033 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function DismissableContentsEmpty() {
  let items;
  let obj3;
  const obj = { style: closure_10().emptyState, children: items };
  const obj2 = { style: obj3, variant: "heading-lg/semibold", children: "No results found" };
  obj3 = { marginBottom: nativeDefault.space.PX_16 };
  const Text = Text_Text.Text;
  items = [metroImportDefault(Text, obj2), metroImportDefault(SearchEmpty.SearchEmpty, {})];
  return metroImportAll(View, obj);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3, headerSection: obj4, search: obj5, sectionHeader: obj6, emptyState: obj7 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { paddingBottom: nativeDefault.space.PX_16 };
obj5 = { paddingBottom: nativeDefault.space.PX_8 };
obj6 = { paddingBottom: nativeDefault.space.PX_8 };
obj7 = { marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
let closure_10 = createStyles(obj);
let closure_11 = react.memo((content) => {
  let end;
  let handleToggleDismissState;
  let isDismissed;
  let start;
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent[label]));
  toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent[label]);
  return metroImportDefault(TableSwitchRow3.TableSwitchRow, { start, end, onValueChange, value, label });
});
let closure_12 = react.memo((arg0) => {
  let TableRowGroup;
  let TableRowGroup2;
  let dailyCapOverridden;
  let initialSearchQuery;
  let items;
  let items1;
  let items2;
  let newUserMinAgeRequiredOverridden;
  let obj3;
  let obj7;
  let onSearchChange;
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, onSearchChange } = arg0);
  const tmp = closure_10();
  const obj = { children: items1 };
  const obj2 = { style: tmp.headerSection, children: metroImportAll(TableRowGroup, obj3) };
  obj3 = { title: "Global Overrides", hasIcons: false, children: items };
  TableRowGroup = TableRowGroup3.TableRowGroup;
  const obj4 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  const TableSwitchRow = TableSwitchRow3.TableSwitchRow;
  items = [metroImportDefault(TableSwitchRow, obj4), ];
  const obj5 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
  const TableSwitchRow2 = TableSwitchRow3.TableSwitchRow;
  items[1] = metroImportDefault(TableSwitchRow2, obj5);
  items1 = [metroImportDefault(View, obj2), , , ];
  const obj6 = { style: tmp.headerSection, children: metroImportAll(TableRowGroup2, obj7) };
  obj7 = { title: "Bulk actions", hasIcons: true, children: items2 };
  TableRowGroup2 = TableRowGroup3.TableRowGroup;
  const obj8 = { label: "Clear all dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearDismissedContents, icon: metroImportDefault(TrashIcon.TrashIcon, {}), trailing: metroImportDefault(TableRowArrow.TableRowArrow, {}) };
  const TableRow = TableRow4.TableRow;
  items2 = [metroImportDefault(TableRow, obj8), , ];
  const obj9 = { label: "Clear all guild dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents, icon: metroImportDefault(TrashIcon.TrashIcon, {}), trailing: metroImportDefault(TableRowArrow.TableRowArrow, {}) };
  const TableRow2 = TableRow4.TableRow;
  items2[1] = metroImportDefault(TableRow2, obj9);
  const obj10 = { label: "Dismiss all dismissible contents", onPress: UserSettingsProtoActionCreators.checkAllDismissedContents, icon: metroImportDefault(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: metroImportDefault(TableRowArrow.TableRowArrow, {}) };
  const TableRow3 = TableRow4.TableRow;
  items2[2] = metroImportDefault(TableRow3, obj10);
  items1[1] = metroImportDefault(View, obj6);
  const obj11 = { style: tmp.search, children: metroImportDefault(SearchField.SearchField, { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange }) };
  items1[2] = metroImportDefault(View, obj11);
  const obj12 = { style: tmp.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: "Dismissible Contents" };
  items1[3] = metroImportDefault(Text_Text.Text, obj12);
  return metroImportAll(React4, obj);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  let FlashList;
  let callback1;
  let closure_3;
  let closure_6;
  let first1;
  let initialSearchQuery;
  let items4;
  let obj4;
  let tmp5;
  const f101304 = (localeCompare, arg1) => localeCompare.localeCompare(arg1);
  let tmp = callback1();
  let tmp2 = useSafeAreaInsetsDefault();
  const ref = initialSearchQuery.useRef(null);
  importDefault = initialSearchQuery.useRef(0);
  let obj = ref(9388);
  let tmp4 = _slicedToArray(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  [dependencyMap, tmp5] = tmp4;
  _slicedToArray = tmp5;
  initialSearchQuery = _slicedToArray(initialSearchQuery.useState(() => {
    let str = dependencyMap;
    if (dependencyMap == null) {
      str = "";
    }
    return str;
  }), 1)[0];
  [first1, closure_6] = initialSearchQuery.useState(() => {
    let str = dependencyMap;
    if (dependencyMap == null) {
      str = "";
    }
    const items = [];
    const tmp = "" === str;
    for (const key10013 in dismissible_content.DismissibleContent) {
      let isNaNResult = tmp;
      if (!isNaNResult) {
        let tmp4 = fuzzysearchDefault;
        let formatted = str.toLowerCase();
        isNaNResult = tmp4(formatted, key10013.toLowerCase());
      }
      if (isNaNResult) {
        let _isNaN = isNaN;
        let _Number = Number;
        isNaNResult = isNaN(Number(key10013));
      }
      if (!isNaNResult) {
        continue;
      } else {
        let arr = items.push(key10013);
        continue;
      }
      continue;
    }
    const sorted = items.sort(f101304);
    return items;
  });
  let items = [closure_6];
  const obj2 = ref(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ dailyCapOverridden: closure_6.dailyCapOverridden, newUserMinAgeRequiredOverridden: closure_6.newUserMinAgeRequiredOverridden }));
  const dailyCapOverridden = stateFromStoresObject.dailyCapOverridden;
  const newUserMinAgeRequiredOverridden = stateFromStoresObject.newUserMinAgeRequiredOverridden;
  const callback = initialSearchQuery.useCallback(() => {
    let current = ref.current;
    const animationFrame = requestAnimationFrame(() => {
      current = ref.current;
      if (current != null) {
        const obj = { offset: current, animated: false };
        current.scrollToOffset(obj);
      }
    });
  }, []);
  const items1 = [tmp5, callback];
  callback1 = initialSearchQuery.useCallback((str) => {
    let tmp5;
    tmp5(str);
    const items = [];
    const tmp2 = closure_6;
    const tmp3 = "" === str;
    for (const key10015 in dismissible_content.DismissibleContent) {
      let isNaNResult = tmp3;
      if (!isNaNResult) {
        tmp5 = dependencyMap;
        let tmp6 = fuzzysearchDefault;
        let formatted = str.toLowerCase();
        isNaNResult = tmp6(formatted, key10015.toLowerCase());
      }
      if (isNaNResult) {
        let _isNaN = isNaN;
        let _Number = Number;
        isNaNResult = isNaN(Number(key10015));
      }
      if (!isNaNResult) {
        continue;
      } else {
        let arr = items.push(key10015);
        continue;
      }
      continue;
    }
    const sorted = items.sort(f101304);
    tmp2(items);
    callback();
  }, items1);
  const items2 = [dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, callback1];
  const callback2 = initialSearchQuery.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items3 = [first1.length];
  const memo = initialSearchQuery.useMemo(() => {
    const obj = { dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, onSearchChange: callback1 };
    return metroImportDefault(closure_12, obj);
  }, items2);
  const obj3 = { style: tmp.container, children: dailyCapOverridden(FlashList, obj4) };
  const callback3 = initialSearchQuery.useCallback((content) => {
    const index = content.index;
    const obj = { content: content.item, start: 0 === index, end: index === first1.length - 1 };
    return metroImportDefault(closure_11, obj);
  }, items3);
  obj4 = {
    ref,
    data: first1,
    contentContainerStyle: items4,
    keyboardShouldPersistTaps: "handled",
    keyboardDismissMode: "on-drag",
    automaticallyAdjustKeyboardInsets: true,
    ListHeaderComponent: memo,
    ListEmptyComponent: DismissableContentsEmpty,
    keyExtractor(arg0) {
      return arg0;
    },
    renderItem: callback3,
    onScroll: callback2,
    scrollEventThrottle: 16
  };
  items4 = [tmp.contentContainer, ];
  const obj5 = { paddingBottom: tmp2.bottom + nativeDefault.space.PX_16 };
  FlashList = ref(8179).FlashList;
  items4[1] = obj5;
  return dailyCapOverridden(first1, obj3);
};
