// Module ID: 15156
// Function ID: 15157
// Name: UserProfileWidgetAddActionSheet
// Dependencies: [32, 19, 17, 21, 5170, 575, 5781, 1113, 1627, 15155, 5422, 15146, 15157, 15158, 9077, 7449, 7405, 12344, 14401, 2]
// Exports: default

// Module 15156 (UserProfileWidgetAddActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Text_Text from "Text/Text" /* 5781 */;
import UserProfileWidgetOptionAddButtonDefault from "UserProfileWidgetOptionAddButton" /* 15146 */;
import useAddProfileWidgetDefault from "useAddProfileWidget" /* 15155 */;
import useStableAddableWidgetsDefault from "useStableAddableWidgets" /* 15157 */;
import UserProfileAddableWidgetCategories from "UserProfileAddableWidgetCategories" /* 15158 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function WidgetCategoryEmptyState(tabName) {
  let Text;
  let intl;
  let obj2;
  tabName = tabName.tabName;
  const tmp = closure_8();
  const obj = { style: tmp.emptyState, children: metroRequire(Text, obj2) };
  obj2 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: intl.formatToPlainString(intl4.t.mcdIFp, { tabName }) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return metroRequire(View, obj);
}
function WidgetOptionsPage(widgets) {
  let closure_0;
  let items;
  let tmp5;
  widgets = widgets.widgets;
  const tabName = widgets.tabName;
  let tmp = closure_8();
  const bottom = useSafeAreaInsetsDefault().bottom;
  _require = useAddProfileWidgetDefault();
  if (0 === widgets.length) {
    const obj2 = { tabName };
    tmp5 = closure_6(WidgetCategoryEmptyState, obj2);
  } else {
    let obj = {
      contentContainerStyle: items,
      children: widgets.map((widget) => {
          const obj = {
            widget,
            onPress() {
              return widget(widget);
            },
            padding: nativeDefault.space.PX_12
          };
          const tmp = UserProfileWidgetOptionAddButtonDefault;
          return closure_1_6(tmp, obj, widget.getUniqueKey());
        })
    };
    items = [tmp.list, ];
    const obj3 = { paddingBottom: bottom };
    items[1] = obj3;
    const BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
    tmp5 = closure_6(BottomSheetScrollView, obj);
  }
  return tmp5;
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, list: obj3, emptyState: obj4, emptyStateText: { textAlign: "center" } };
obj2 = { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
obj4 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetAddActionSheet.tsx");

export default function UserProfileWidgetAddActionSheet() {
  let BottomSheetTitleHeader;
  let applicationWidgets;
  let closure_0;
  let closure_1;
  let first;
  let interestsWidgets;
  let intl3;
  let items1;
  let items2;
  let obj5;
  let obj6;
  const tmp = closure_8();
  [first, _require] = react.useState(0);
  const tmp4 = useStableAddableWidgetsDefault();
  importDefault = tmp4;
  const items = [tmp4];
  const memo = react.useMemo(() => {
    const obj = UserProfileAddableWidgetCategories;
    return obj.partitionAddableWidgets(closure_1);
  }, items);
  ({ interestsWidgets, applicationWidgets } = memo);
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.NpchGq);
  const intl2 = require("intl").intl;
  const stringResult1 = intl2.string(require("intl").t.EKR8Ps);
  let obj = { pageWidth: first, items: items1 };
  const useSegmentedControlState = require("SegmentedControlState").useSegmentedControlState;
  const tmp8 = require("SegmentedControlState");
  items1 = [{ id: "interests", label: stringResult, page: closure_6(WidgetOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) }, ];
  ({ id: "interests", label: stringResult, page: closure_6(WidgetOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) });
  items1[1] = { id: "gameStats", label: stringResult1, page: closure_6(WidgetOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) };
  ({ id: "gameStats", label: stringResult1, page: closure_6(WidgetOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) });
  const segmentedControlState = useSegmentedControlState(obj);
  const callback = react.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj4 = { header: closure_6(BottomSheetTitleHeader, obj5), scrollable: true, startExpanded: true, children: closure_7(View, obj6) };
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj5 = { title: intl3.string(require("intl").t["grUgR+"]) };
  BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl3 = require("intl").intl;
  obj6 = { style: tmp.container, onLayout: callback, children: items2 };
  items2 = [, ];
  const obj7 = { children: closure_6(require("Tabs").Tabs, { state: segmentedControlState }) };
  items2[0] = closure_6(View, obj7);
  items2[1] = closure_6(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState });
  return closure_6(ActionSheet, obj4);
};
