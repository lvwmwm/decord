// Module ID: 15177
// Function ID: 115536
// Name: IconWithBadge
// Dependencies: [31, 27, 6878, 33, 4130, 689, 566, 15168, 1273, 7961, 478, 5091, 5119, 4084, 2]
// Exports: CloseIconWithBadgeOnSide, LeftBackIconWithBadge, SettingsLeftIconWithBadge

// Module 15177 (IconWithBadge)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function IconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  let _require;
  let memo;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getTotalMentionCount());
  let num = 0;
  if (null != stateFromStores) {
    num = stateFromStores;
  }
  let num2 = 0;
  if (flag) {
    num2 = memo(15168)().value;
  }
  const sum = num + num2;
  _require = sum;
  const items1 = [sum];
  memo = React.useMemo(() => {
    if (_undefined < 10) {
      let BADGE_SIZE = _undefined(outer1_2[8]).BADGE_SIZE;
    } else {
      BADGE_SIZE = _undefined(outer1_2[8]).BADGE_SIZE + 8;
    }
    return BADGE_SIZE;
  }, items1);
  const items2 = [sum, memo];
  const memo1 = React.useMemo(() => {
    if (0 !== _undefined) {
      const BADGE_PADDING = _undefined(outer1_2[8]).BADGE_PADDING;
      const obj = { shape: _undefined(outer1_2[9]).CutoutShape.RoundedRect, x: 12 - BADGE_PADDING, y: 16 - BADGE_PADDING, width: memo + 2 * BADGE_PADDING, height: _undefined(outer1_2[8]).BADGE_SIZE + 2 * BADGE_PADDING, cornerRadius: (_undefined(outer1_2[8]).BADGE_SIZE + 2 * BADGE_PADDING) / 2 };
      return obj;
    }
  }, items2);
  obj = {};
  let obj2 = _require(478);
  obj = undefined;
  if (obj2.isAndroid()) {
    obj = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
  }
  obj.style = obj;
  const obj1 = { style: tmp.backIcon };
  obj2 = {};
  if (null != memo1) {
    const items3 = [memo1];
    let items4 = items3;
  } else {
    items4 = [];
  }
  obj2.cutouts = items4;
  const obj3 = { size: "md", style: tmp.backIcon, color: "interactive-text-default" };
  obj2.children = callback(includeNotificationsCount.Icon, obj3);
  const items5 = [callback(memo(7961), obj2), ];
  let tmp12 = null;
  if (sum > 0) {
    const obj4 = { style: tmp.badgeWrapper };
    const obj5 = { value: sum, maxValue: 99 };
    obj4.children = callback(_require(1273).Badge, obj5);
    tmp12 = callback(View, obj4);
  }
  items5[1] = tmp12;
  obj1.children = items5;
  obj.children = closure_7(View, obj1);
  return callback(View, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { badgeWrapper: { position: "absolute", top: 16, left: 12 }, backIcon: { height: 24, width: 24 } };
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").modules.button.BORDER_RADIUS, padding: 7, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.iconWithBadge = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

export const BACK_ICON_WITH_BADGE_HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
export const SettingsLeftIconWithBadge = function SettingsLeftIconWithBadge(navigation) {
  navigation = navigation.navigation;
  let flag = navigation.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const items = [navigation];
  const obj = { includeNotificationsCount: flag };
  if (React.useMemo(() => navigation.getState().index > 0, items)) {
    obj.Icon = tmp3(5091).ArrowLargeLeftIcon;
    let tmp5 = obj;
  } else {
    obj.Icon = tmp3(5119).XSmallIcon;
    tmp5 = obj;
  }
  return closure_6(IconWithBadge, tmp5);
};
export const LeftBackIconWithBadge = function LeftBackIconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { includeNotificationsCount: flag, Icon: require(5091) /* ArrowLargeLeftIcon */.ArrowLargeLeftIcon };
  return callback(IconWithBadge, obj);
};
export const CloseIconWithBadgeOnSide = function CloseIconWithBadgeOnSide(count) {
  count = count.count;
  let obj = { style: _createForOfIteratorHelperLoose().iconWithBadge };
  const items = [callback(require(4084) /* XLargeIcon */.XLargeIcon, { size: "sm", color: "white" }), ];
  let tmp3 = null;
  if (count > 0) {
    obj = { value: count };
    tmp3 = callback(require(1273) /* Button */.Badge, obj);
  }
  items[1] = tmp3;
  obj.children = items;
  return closure_7(View, obj);
};
