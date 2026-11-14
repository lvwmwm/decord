// Module ID: 15818
// Function ID: 15819
// Name: UserProfileWidgetsEmptyState
// Dependencies: [32, 19, 17, 502, 8479, 7962, 21, 575, 5306, 15819, 504, 15810, 15823, 15824, 15825, 10516, 5929, 1113, 15826, 5936, 8546, 5552, 15828, 2121, 2]
// Exports: default

// Module 15818 (UserProfileWidgetsEmptyState)
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Constants from "Constants" /* 7962 */;
import Constants2 from "Constants" /* 8479 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8546 */;
import useAddableWidgetsDefault from "useAddableWidgets" /* 15810 */;
import UserProfileWidgetOptionAddButton from "UserProfileWidgetOptionAddButton" /* 15819 */;
import UserProfileAddableWidgetCategories from "UserProfileAddableWidgetCategories" /* 15823 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
let closure_8 = Constants2.TrackUserProfileEditActions;
const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_14 = [1.3, 1.6, 2.3, 3.3];
const UserProfileWidgetsEmptyState_str = "UserProfileWidgetsEmptyState";
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, centeredText: { textAlign: "center" }, scroller: { alignSelf: "stretch", marginHorizontal: -PROFILE_SIDE_PADDING }, scrollerContent: { paddingHorizontal: PROFILE_SIDE_PADDING, gap: PX_12 } };
obj2 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
let closure_16 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsEmptyState.tsx");

export default function UserProfileWidgetsEmptyState() {
  let closure_1;
  let compact;
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let padding;
  let tmp7;
  let userId;
  let tmp = closure_16();
  let obj = require("get initialized");
  const items = [AuthenticationStore];
  _require = obj.useStateFromStores(items, () => id.getId());
  const tmp5 = useAddableWidgetsDefault();
  importDefault = tmp5;
  let obj2 = compact;
  const items1 = [tmp5];
  const memo = compact.useMemo(() => {
    const obj = UserProfileAddableWidgetCategories;
    return obj.partitionAddableWidgets(closure_1).interestsWidgets;
  }, items1);
  [tmp7, dependencyMap] = compact.useState(0);
  const sum = tmp7 + PROFILE_SIDE_PADDING;
  _slicedToArray(compact.useState(0), 2);
  _slicedToArray = sum;
  compact = require("UserProfileWidgetOptionAddButton").NUMBER_OF_COLUMNS_BY_VARIANT.compact;
  let found = closure_14.find((item) => {
    const diff = (_slicedToArray - Math.floor(item) * PX_12) / item - 2 * PX_16;
    const diff1 = compact - 1;
    return diff / (compact + diff1 * UserProfileWidgetOptionAddButton.GRID_GAP_TO_COVER_RATIO) <= 90;
  });
  if (found == null) {
    found = arr4[arr4.length - 1];
  }
  let result = (sum - Math.floor(found) * PX_12) / found;
  const width = result;
  const callback = obj2.useCallback((nativeEvent) => {
    dependencyMap(nativeEvent.nativeEvent.layout.width);
  }, []);
  let closure_6 = tmp4(15824)();
  const tmp2Result = require("ConjureCustomWidget");
  const canConjureCustomWidget = tmp2Result.useCanConjureCustomWidget(UserProfileWidgetsEmptyState_str);
  const tmp2Result2 = require("ConjureMobileExperiment");
  let isConjureMobileEnabled = tmp2Result2.useIsConjureMobileEnabled(canConjureCustomWidget, UserProfileWidgetsEmptyState_str);
  let obj3 = { style: tmp.container, onLayout: callback, children: items3 };
  const obj4 = { style: tmp.textContainer, children: items2 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centeredText, children: intl.string(require("intl").t["oqalC+"]) };
  const Heading = tmp2(5929).Heading;
  intl = tmp2(1113).intl;
  items2 = [closure_10(Heading, obj5), ];
  const obj6 = { variant: "body-sm/normal", color: "text-default", style: tmp.centeredText, children: intl2.string(require("intl").t.O9SQ1c) };
  const Text = tmp2(5929).Text;
  intl2 = tmp2(1113).intl;
  items2[1] = closure_10(Text, obj6);
  items3 = [closure_11(closure_6, obj4), , ];
  let tmp15Result = tmp7 > 0 && memo.length > 0;
  const tmp10 = PX_12;
  const tmp16 = closure_6;
  if (tmp15Result) {
    ({ scroller: obj9.style, scrollerContent: obj9.contentContainerStyle } = tmp);
    const obj7 = { horizontal: true, style: null, contentContainerStyle: null, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: result + tmp10, accessibilityRole: "list", accessibilityLabel: intl3.string(require("intl").t["+EIBSA"]), children: items4 };
    intl3 = tmp2(1113).intl;
    items4 = [
      memo.map((widget) => {
          let closure_0 = widget;
          const obj = {
            widget,
            variant: "compact",
            width,
            padding,
            onPress() {
              return closure_6(widget);
            }
          };
          const tmp = closure_1(dependencyMap[9]);
          return closure_1_10(tmp, obj, widget.getUniqueKey());
        }),

    ];
    const tmp19 = width;
    if (isConjureMobileEnabled) {
      const obj8 = { width: result, padding: PX_16 };
      isConjureMobileEnabled = tmp17(tmp4(15826), obj8);
    }
    items4[1] = isConjureMobileEnabled;
    tmp15Result = tmp15(tmp19, obj7);
  }
  items3[1] = tmp15Result;
  const obj10 = {
    variant: "secondary",
    text: intl4.string(require("intl").t["/NKLK5"]),
    onPress() {
      const obj = UserProfileAnalyticsUtils;
      const obj2 = { userId, action: constants.PRESS_ADD_WIDGET };
      const result = obj.trackUserProfileEditAction(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(15828, dependencyMap.paths), "UserProfileWidgetAddActionSheet");
    }
  };
  const Button = tmp2(5936).Button;
  intl4 = tmp2(1113).intl;
  items3[2] = closure_10(Button, obj10);
  return closure_11(tmp16, obj3);
};
