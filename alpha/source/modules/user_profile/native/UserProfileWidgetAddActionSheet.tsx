// Module ID: 16822
// Function ID: 16823
// Name: UserProfileWidgetAddActionSheet
// Dependencies: [32, 19, 17, 502, 8900, 21, 5143, 575, 5763, 1113, 1627, 504, 12571, 8908, 5384, 5402, 16823, 16826, 16831, 9131, 7504, 7460, 12379, 14424, 2]
// Exports: default

// Module 16822 (UserProfileWidgetAddActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import Text_Text from "Text/Text" /* 5763 */;
import Constants from "Constants" /* 8900 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8908 */;
import WidgetUtils from "WidgetUtils" /* 12571 */;
import useStableAddableWidgetsDefault from "useStableAddableWidgets" /* 16826 */;
import UserProfileAddableWidgetCategories from "UserProfileAddableWidgetCategories" /* 16831 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
function WidgetCategoryEmptyState(tabName) {
  let Text;
  let intl;
  let obj2;
  tabName = tabName.tabName;
  const tmp = closure_10();
  const obj = { style: tmp.emptyState, children: metroImportAll(Text, obj2) };
  obj2 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: intl.formatToPlainString(intl4.t.mcdIFp, { tabName }) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return metroImportAll(View, obj);
}
function WidgetOptionsPage(widgets) {
  let closure_1;
  let id;
  let items2;
  let tmp6;
  widgets = widgets.widgets;
  let stateFromStores;
  const tabName = widgets.tabName;
  let tmp = closure_10();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = stateFromStores(504);
  const items = [AuthenticationStore];
  const tmp3 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const items1 = [stateFromStores];
  importDefault = react.useCallback((getProfileEditAnalyticsOptions) => {
    const obj = WidgetUtils;
    obj.addWidgetToPending(getProfileEditAnalyticsOptions);
    const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
    const obj2 = { userId: stateFromStores, action: constants.WIDGET_ADDED };
    UserProfileAnalyticsUtils;
    const merged = Object.assign(getProfileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
    const result = trackUserProfileEditAction(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items1);
  if (0 === widgets.length) {
    let obj2 = { tabName };
    tmp6 = closure_8(WidgetCategoryEmptyState, obj2);
  } else {
    let obj3 = {
      contentContainerStyle: items2,
      children: widgets.map((widget) => {
          let closure_0 = widget;
          const obj = {
            widget,
            onPress() {
              return closure_1(widget);
            },
            padding: closure_1(dependencyMap[7]).space.PX_12
          };
          const tmp = closure_1(dependencyMap[16]);
          return closure_1_8(tmp, obj, widget.getUniqueKey());
        })
    };
    items2 = [tmp.list, ];
    const obj4 = { paddingBottom: bottom };
    items2[1] = obj4;
    const BottomSheetScrollView = tmp3(5402).BottomSheetScrollView;
    tmp6 = closure_8(BottomSheetScrollView, obj3);
  }
  return tmp6;
}
const View = react_native.View;
let closure_7 = Constants.TrackUserProfileEditActions;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, list: obj3, emptyState: obj4, emptyStateText: { textAlign: "center" } };
obj2 = { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
obj4 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetAddActionSheet.tsx");

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
  const tmp = closure_10();
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
  items1 = [{ id: "interests", label: stringResult, page: closure_8(WidgetOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) }, ];
  ({ id: "interests", label: stringResult, page: closure_8(WidgetOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) });
  items1[1] = { id: "gameStats", label: stringResult1, page: closure_8(WidgetOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) };
  ({ id: "gameStats", label: stringResult1, page: closure_8(WidgetOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) });
  const segmentedControlState = useSegmentedControlState(obj);
  const callback = react.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj4 = { header: closure_8(BottomSheetTitleHeader, obj5), scrollable: true, startExpanded: true, children: closure_9(View, obj6) };
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj5 = { title: intl3.string(require("intl").t["grUgR+"]) };
  BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl3 = require("intl").intl;
  obj6 = { style: tmp.container, onLayout: callback, children: items2 };
  items2 = [, ];
  const obj7 = { children: closure_8(require("Tabs").Tabs, { state: segmentedControlState }) };
  items2[0] = closure_8(View, obj7);
  items2[1] = closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState });
  return closure_8(ActionSheet, obj4);
};
