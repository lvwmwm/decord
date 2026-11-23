// Module ID: 14562
// Function ID: 14563
// Name: UserProfileWidgetsEmptyState
// Dependencies: [32, 19, 17, 502, 8069, 7564, 21, 575, 4913, 14563, 504, 14555, 14567, 14570, 14572, 14573, 9953, 5504, 1112, 14574, 5511, 8136, 5127, 14576, 2119, 2]
// Exports: default

// Module 14562 (UserProfileWidgetsEmptyState)
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import Constants from "Constants" /* 7564 */;
import Constants2 from "Constants" /* 8069 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8136 */;
import useAddableWidgetsDefault from "useAddableWidgets" /* 14555 */;
import UserProfileWidgetOptionAddButton from "UserProfileWidgetOptionAddButton" /* 14563 */;
import useApplicationWidgetAffinityDataDefault from "useApplicationWidgetAffinityData" /* 14567 */;
import WidgetEmptyStateSuggestionUtils from "WidgetEmptyStateSuggestionUtils" /* 14570 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

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
  let addableWidgets;
  let applicationAffinityData;
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let padding;
  let tmp8;
  let userId;
  let tmp = closure_16();
  let obj = require("get initialized");
  const items = [id];
  _require = obj.useStateFromStores(items, () => id.getId());
  const tmp5 = useAddableWidgetsDefault();
  importDefault = tmp5;
  const tmp6 = useApplicationWidgetAffinityDataDefault(tmp5);
  dependencyMap = tmp6;
  let obj2 = react;
  const items1 = [tmp5, tmp6];
  const memo = react.useMemo(() => {
    const obj = WidgetEmptyStateSuggestionUtils;
    const obj2 = { addableWidgets, applicationAffinityData, hasClips: false };
    return obj.getWidgetEmptyStateSuggestions(obj2);
  }, items1);
  const tmp7 = _slicedToArray(react.useState(0), 2);
  [tmp8, _slicedToArray] = tmp7;
  const sum = tmp8 + PROFILE_SIDE_PADDING;
  react = sum;
  const compact = require("UserProfileWidgetOptionAddButton").NUMBER_OF_COLUMNS_BY_VARIANT.compact;
  let found = closure_14.find((item) => {
    const diff = (react - Math.floor(item) * PX_12) / item - 2 * PX_16;
    const diff1 = compact - 1;
    return diff / (compact + diff1 * UserProfileWidgetOptionAddButton.GRID_GAP_TO_COVER_RATIO) <= 90;
  });
  if (found == null) {
    found = arr4[arr4.length - 1];
  }
  let result = (sum - Math.floor(found) * PX_12) / found;
  const width = result;
  const callback = obj2.useCallback((nativeEvent) => {
    _slicedToArray(nativeEvent.nativeEvent.layout.width);
  }, []);
  id = tmp4(14572)();
  const tmp2Result = require("ConjureCustomWidget");
  const canConjureCustomWidget = tmp2Result.useCanConjureCustomWidget(UserProfileWidgetsEmptyState_str);
  const tmp2Result2 = require("ConjureMobileExperiment");
  let isConjureMobileEnabled = tmp2Result2.useIsConjureMobileEnabled(canConjureCustomWidget, UserProfileWidgetsEmptyState_str);
  let obj3 = { style: tmp.container, onLayout: callback, children: items3 };
  const obj4 = { style: tmp.textContainer, children: items2 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centeredText, children: intl.string(require("intl").t["oqalC+"]) };
  const Heading = tmp2(5504).Heading;
  intl = tmp2(1112).intl;
  items2 = [closure_10(Heading, obj5), ];
  const obj6 = { variant: "body-sm/normal", color: "text-default", style: tmp.centeredText, children: intl2.string(require("intl").t.O9SQ1c) };
  const Text = tmp2(5504).Text;
  intl2 = tmp2(1112).intl;
  items2[1] = closure_10(Text, obj6);
  items3 = [closure_11(width, obj4), , ];
  let tmp16Result = tmp8 > 0 && memo.length > 0;
  const tmp11 = PX_12;
  const tmp17 = width;
  if (tmp16Result) {
    ({ scroller: obj9.style, scrollerContent: obj9.contentContainerStyle } = tmp);
    const obj7 = { horizontal: true, style: null, contentContainerStyle: null, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: result + tmp11, accessibilityRole: "list", accessibilityLabel: intl3.string(require("intl").t["+EIBSA"]), children: items4 };
    intl3 = tmp2(1112).intl;
    items4 = [
      memo.map((widget) => {
          let closure_0 = widget;
          const obj = {
            widget,
            variant: "compact",
            width,
            padding,
            onPress() {
              return id(widget);
            }
          };
          const tmp = addableWidgets(applicationAffinityData[9]);
          return closure_1_10(tmp, obj, widget.getUniqueKey());
        }),

    ];
    const tmp20 = compact;
    if (isConjureMobileEnabled) {
      const obj8 = { width: result, padding: PX_16 };
      isConjureMobileEnabled = tmp18(tmp4(14574), obj8);
    }
    items4[1] = isConjureMobileEnabled;
    tmp16Result = tmp16(tmp20, obj7);
  }
  items3[1] = tmp16Result;
  const obj10 = {
    variant: "secondary",
    text: intl4.string(require("intl").t["/NKLK5"]),
    onPress() {
      const obj = UserProfileAnalyticsUtils;
      const obj2 = { userId, action: constants.PRESS_ADD_WIDGET };
      const result = obj.trackUserProfileEditAction(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(14576, dependencyMap.paths), "UserProfileWidgetAddActionSheet");
    }
  };
  const Button = tmp2(5511).Button;
  intl4 = tmp2(1112).intl;
  items3[2] = closure_10(Button, obj10);
  return closure_11(tmp17, obj3);
};
