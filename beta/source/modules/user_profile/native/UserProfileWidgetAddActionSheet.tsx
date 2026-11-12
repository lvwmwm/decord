// Module ID: 15233
// Function ID: 15234
// Name: UserProfileWidgetAddActionSheet
// Dependencies: [32, 19, 17, 21, 5170, 575, 5783, 1113, 1627, 5424, 15229, 15225, 15230, 9800, 15231, 5406, 7424, 7071, 11666, 4026, 15221, 7159, 15234, 15235, 15212, 9092, 7459, 7415, 12374, 14468, 2]
// Exports: default

// Module 15233 (UserProfileWidgetAddActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef4026 from "module_4026" /* 4026 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import BottomSheetModal from "BottomSheetModal" /* 5424 */;
import Text_Text from "Text/Text" /* 5783 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9800 */;
import useConjureServerWidgetOffersDefault from "useConjureServerWidgetOffers" /* 15212 */;
import turnOnConjureServerWidgetDefault from "turnOnConjureServerWidget" /* 15221 */;
import UserProfileWidgetOptionAddButtonDefault from "UserProfileWidgetOptionAddButton" /* 15225 */;
import useAddProfileWidgetDefault from "useAddProfileWidget" /* 15229 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 15230 */;
import UserProfileWidgetOptionConjureButtonDefault from "UserProfileWidgetOptionConjureButton" /* 15231 */;
import useStableAddableWidgetsDefault from "useStableAddableWidgets" /* 15234 */;
import UserProfileAddableWidgetCategories from "UserProfileAddableWidgetCategories" /* 15235 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function WidgetCategoryEmptyState(tabName) {
  let Text;
  let intl;
  let obj2;
  tabName = tabName.tabName;
  const tmp = closure_9();
  const obj = { style: tmp.emptyState, children: metroRequire(Text, obj2) };
  obj2 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: intl.formatToPlainString(intl5.t.mcdIFp, { tabName }) };
  Text = Text_Text.Text;
  intl = intl5.intl;
  return metroRequire(View, obj);
}
function WidgetOptionsScrollView(children) {
  let items;
  children = children.children;
  const obj = { contentContainerStyle: items, children };
  items = [closure_9().list, ];
  closure_9();
  items[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  return metroRequire(BottomSheetModal.BottomSheetScrollView, obj);
}
function WidgetOptionsList(widgets) {
  let items;
  widgets = widgets.widgets;
  const children = widgets.children;
  let closure_0 = useAddProfileWidgetDefault();
  let obj = { children: items };
  items = [
    widgets.map((widget) => {
      const obj = {
        widget,
        onPress() {
          return widget(widget);
        },
        padding: nativeDefault.space.PX_12
      };
      const tmp = UserProfileWidgetOptionAddButtonDefault;
      return closure_1_6(tmp, obj, widget.getUniqueKey());
    }),
    children
  ];
  return closure_7(WidgetOptionsScrollView, obj);
}
function InterestsOptionsPage(widgets) {
  widgets = widgets.widgets;
  const tabName = widgets.tabName;
  const obj = ConjureCustomWidget;
  const canConjureCustomWidget = obj.useCanConjureCustomWidget(UserProfileWidgetAddActionSheet_str);
  const obj2 = ConjureMobileExperiment;
  let isConjureMobileEnabled = obj2.useIsConjureMobileEnabled(canConjureCustomWidget, UserProfileWidgetAddActionSheet_str);
  if (0 === widgets.length) {
    let tmp7Result;
    if (!isConjureMobileEnabled) {
      const obj3 = { tabName };
      tmp7Result = metroRequire(WidgetCategoryEmptyState, obj3);
    }
    return tmp7Result;
  }
  const obj4 = { widgets, children: isConjureMobileEnabled };
  const tmp8 = WidgetOptionsList;
  if (isConjureMobileEnabled) {
    isConjureMobileEnabled = tmp7(UserProfileWidgetOptionConjureButtonDefault, {});
  }
  tmp7Result = tmp7(tmp8, obj4);
}
function GameStatsOptionsPage(widgets) {
  let tmp4;
  widgets = widgets.widgets;
  if (0 === widgets.length) {
    const obj2 = { tabName: tmp };
    tmp4 = metroRequire(WidgetCategoryEmptyState, obj2);
  } else {
    const obj = { widgets };
    tmp4 = metroRequire(WidgetOptionsList, obj);
  }
  return tmp4;
}
function hideSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet("UserProfileWidgetAddActionSheet");
}
function ServerWidgetOptionRow(widget) {
  let Icon;
  let intl;
  let obj3;
  widget = widget.widget;
  const obj = widget(7424);
  const getOrFetchApplication = obj.useGetOrFetchApplication(widget.applicationId);
  let str;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = {
    icon: closure_6(Icon, obj3),
    label: str,
    subLabel: intl.formatToPlainString(_modDef4026.ZZywee, { applicationName: str }),
    onPress() {
      return turnOnConjureServerWidgetDefault(widget.applicationId, hideSheet);
    }
  };
  const TableRow = tmp(7071).TableRow;
  obj3 = { IconComponent: widget(11666).CirclePlusIcon };
  Icon = tmp(7071).TableRow.Icon;
  intl = tmp(1113).intl;
  return closure_6(TableRow, obj2);
}
function ServerWidgetsOptionsPage(offers) {
  let tmp4;
  offers = offers.offers;
  if (0 === offers.length) {
    const obj2 = { tabName: tmp };
    tmp4 = metroRequire(WidgetCategoryEmptyState, obj2);
  } else {
    let obj = {
      children: offers.map((widgets) => {
          let guildId;
          let guildName;
          widgets = widgets.widgets;
          ({ guildId, guildName } = widgets);
          let obj = {
            title: guildName,
            hasIcons: true,
            children: widgets.map((widget) => {
              const obj = { widget };
              return closure_1_6(closure_1_16, obj, widget.getUniqueKey());
            })
          };
          const TableRowGroup = require("TableRowGroup").TableRowGroup;
          return closure_1_6(TableRowGroup, obj, guildId);
        })
    };
    tmp4 = metroRequire(WidgetOptionsScrollView, obj);
  }
  return tmp4;
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const UserProfileWidgetAddActionSheet_str = "UserProfileWidgetAddActionSheet";
let createStyles = createStyles_mod;
let obj = { container: obj2, tabs: obj3, list: obj4, emptyState: obj5, emptyStateText: { textAlign: "center" } };
obj2 = { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_12 };
obj5 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetAddActionSheet.tsx");

export default function UserProfileWidgetAddActionSheet() {
  let BottomSheetTitleHeader;
  let applicationWidgets;
  let closure_0;
  let closure_1;
  let first;
  let first1;
  let interestsWidgets;
  let intl4;
  let items1;
  let items3;
  let items4;
  let obj6;
  let obj8;
  let obj9;
  let tmp11;
  const tmp2 = closure_9();
  let obj = react;
  [first, _require] = react.useState(0);
  const tmp7 = useStableAddableWidgetsDefault();
  importDefault = tmp7;
  const items = [tmp7];
  const memo = react.useMemo(() => {
    const obj = UserProfileAddableWidgetCategories;
    return obj.partitionAddableWidgets(closure_1);
  }, items);
  ({ interestsWidgets, applicationWidgets } = memo);
  const arr2 = useConjureServerWidgetOffersDefault();
  [first1, tmp11] = react.useState(false);
  const tmp12 = arr2.length > 0 && !first1;
  if (tmp12) {
    tmp11(true);
  }
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.NpchGq);
  const intl2 = require("intl").intl;
  const stringResult1 = intl2.string(require("intl").t.EKR8Ps);
  const intl3 = require("intl").intl;
  const stringResult2 = intl3.string(_modDef4026.OUrOHL);
  const obj2 = { pageWidth: first, items: items1 };
  const useSegmentedControlState = require("SegmentedControlState").useSegmentedControlState;
  const tmp18 = require("SegmentedControlState");
  items1 = [{ id: "interests", label: stringResult, page: closure_6(InterestsOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) }, ];
  ({ id: "interests", label: stringResult, page: closure_6(InterestsOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) });
  items1[1] = { id: "gameStats", label: stringResult1, page: closure_6(GameStatsOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) };
  ({ id: "gameStats", label: stringResult1, page: closure_6(GameStatsOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) });
  if (first1) {
    const obj5 = { id: "fromYourServers", label: stringResult2, page: closure_6(ServerWidgetsOptionsPage, obj6) };
    const items2 = [obj5];
    items3 = items2;
    obj6 = { offers: arr2, tabName: stringResult2 };
  } else {
    items3 = [];
  }
  HermesBuiltin.arraySpread(items1, items3, 2);
  const segmentedControlState = useSegmentedControlState(obj2);
  const callback = obj.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj7 = { header: closure_6(BottomSheetTitleHeader, obj8), scrollable: true, startExpanded: true, children: closure_7(View, obj9) };
  const ActionSheet = tmp14(7459).ActionSheet;
  obj8 = { title: intl4.string(require("intl").t["grUgR+"]) };
  BottomSheetTitleHeader = tmp14(7415).BottomSheetTitleHeader;
  intl4 = tmp14(1113).intl;
  obj9 = { style: tmp2.container, onLayout: callback, children: items4 };
  items4 = [, ];
  const obj10 = { style: tmp2.tabs, children: closure_6(require("Tabs").Tabs, { state: segmentedControlState }) };
  items4[0] = closure_6(View, obj10);
  items4[1] = closure_6(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState });
  return closure_6(ActionSheet, obj7);
};
