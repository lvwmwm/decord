// Module ID: 15192
// Function ID: 15193
// Name: UserProfileWidgetsEmptyState
// Dependencies: [32, 19, 17, 502, 8825, 7437, 21, 575, 5140, 15193, 504, 15182, 15197, 15198, 9767, 5751, 1113, 15199, 5758, 8833, 5374, 15201, 2118, 2]
// Exports: default

// Module 15192 (UserProfileWidgetsEmptyState)
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import Constants from "Constants" /* 7437 */;
import Constants2 from "Constants" /* 8825 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8833 */;
import useAddableWidgetsDefault from "useAddableWidgets" /* 15182 */;
import UserProfileWidgetOptionAddButton from "UserProfileWidgetOptionAddButton" /* 15193 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const UserProfileWidgetOptionAddButtonDefault = UserProfileWidgetOptionAddButton;
let _require, dependencyMap;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
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
  let compact;
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let padding;
  let tmp6;
  let userId;
  let width;
  let tmp = closure_16();
  let obj = require("get initialized");
  const items = [AuthenticationStore];
  _require = obj.useStateFromStores(items, () => id.getId());
  const arr2 = useAddableWidgetsDefault();
  let obj2 = react;
  [tmp6, importDefault] = compact(react.useState(0), 2);
  const sum = tmp6 + PROFILE_SIDE_PADDING;
  dependencyMap = sum;
  compact(react.useState(0), 2);
  compact = require("UserProfileWidgetOptionAddButton").NUMBER_OF_COLUMNS_BY_VARIANT.compact;
  let found = closure_14.find((item) => {
    const diff = (dependencyMap - Math.floor(item) * PX_12) / item - 2 * PX_16;
    const diff1 = compact - 1;
    return diff / (compact + diff1 * UserProfileWidgetOptionAddButton.GRID_GAP_TO_COVER_RATIO) <= 90;
  });
  if (found == null) {
    found = arr3[arr3.length - 1];
  }
  let result = (sum - Math.floor(found) * PX_12) / found;
  react = result;
  const callback = obj2.useCallback((nativeEvent) => {
    importDefault(nativeEvent.nativeEvent.layout.width);
  }, []);
  let closure_5 = tmp4(15197)();
  const tmp2Result = require("ConjureCustomWidget");
  const canConjureCustomWidget = tmp2Result.useCanConjureCustomWidget(UserProfileWidgetsEmptyState_str);
  const tmp2Result2 = require("ConjureMobileExperiment");
  let isConjureMobileEnabled = tmp2Result2.useIsConjureMobileEnabled(canConjureCustomWidget, UserProfileWidgetsEmptyState_str);
  let obj3 = { style: tmp.container, onLayout: callback, children: items2 };
  const obj4 = { style: tmp.textContainer, children: items1 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centeredText, children: intl.string(require("intl").t["oqalC+"]) };
  const Heading = tmp2(5751).Heading;
  intl = tmp2(1113).intl;
  items1 = [closure_10(Heading, obj5), ];
  const obj6 = { variant: "body-sm/normal", color: "text-default", style: tmp.centeredText, children: intl2.string(require("intl").t.O9SQ1c) };
  const Text = tmp2(5751).Text;
  intl2 = tmp2(1113).intl;
  items1[1] = closure_10(Text, obj6);
  items2 = [closure_11(closure_6, obj4), , ];
  let tmp14Result = tmp6 > 0 && arr2.length > 0;
  const tmp15 = closure_6;
  const tmp9 = PX_12;
  if (tmp14Result) {
    ({ scroller: obj9.style, scrollerContent: obj9.contentContainerStyle } = tmp);
    const obj7 = { horizontal: true, style: null, contentContainerStyle: null, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: result + tmp9, accessibilityRole: "list", accessibilityLabel: intl3.string(require("intl").t["+EIBSA"]), children: items3 };
    intl3 = tmp2(1113).intl;
    items3 = [
      arr2.map((widget) => {
          let closure_0 = widget;
          const obj = {
            widget,
            variant: "compact",
            width,
            padding,
            onPress() {
              return closure_5(widget);
            }
          };
          const tmp = UserProfileWidgetOptionAddButtonDefault;
          return closure_1_10(tmp, obj, widget.getUniqueKey());
        }),

    ];
    const tmp18 = closure_5;
    if (isConjureMobileEnabled) {
      const obj8 = { width: result, padding: PX_16 };
      isConjureMobileEnabled = tmp16(tmp4(15199), obj8);
    }
    items3[1] = isConjureMobileEnabled;
    tmp14Result = tmp14(tmp18, obj7);
  }
  items2[1] = tmp14Result;
  const obj10 = {
    variant: "secondary",
    text: intl4.string(require("intl").t["/NKLK5"]),
    onPress() {
      const obj = UserProfileAnalyticsUtils;
      const obj2 = { userId, action: constants.PRESS_ADD_WIDGET };
      const result = obj.trackUserProfileEditAction(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(15201, dependencyMap.paths), "UserProfileWidgetAddActionSheet");
    }
  };
  const Button = tmp2(5758).Button;
  intl4 = tmp2(1113).intl;
  items2[2] = closure_10(Button, obj10);
  return closure_11(tmp15, obj3);
};
