// Module ID: 16830
// Function ID: 16831
// Name: BackIconWithBadge
// Dependencies: [19, 17, 7960, 21, 4829, 576, 504, 16821, 1177, 9174, 1365, 5933, 5985, 4781, 2]
// Exports: CloseIconWithBadgeOnSide, LeftBackIconWithBadge, SettingsLeftIconWithBadge

// Module 16830 (BackIconWithBadge)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import XLargeIcon from "XLargeIcon" /* 4781 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5933 */;
import ClipView from "ClipView" /* 9174 */;
import noop from "module_19" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7960 */;

require = fn;
function IconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  let memo;
  const tmp = closure_8();
  const items = [GuildReadStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let num = 0;
  if (null != stateFromStores) {
    num = stateFromStores;
  }
  let num2 = 0;
  if (flag) {
    num2 = memo(16821)().value;
  }
  const sum = num + num2;
  _require = sum;
  const items1 = [sum];
  memo = noop.useMemo(() => {
    if (c0 < 10) {
      let BADGE_SIZE = native.BADGE_SIZE;
    } else {
      BADGE_SIZE = native.BADGE_SIZE + 8;
    }
    return BADGE_SIZE;
  }, items1);
  const items2 = [sum, memo];
  const memo1 = noop.useMemo(() => {
    if (0 !== c0) {
      const BADGE_PADDING = native.BADGE_PADDING;
      const size = { shape: ClipView.CutoutShape.RoundedRect, x: 12 - BADGE_PADDING, y: 16 - BADGE_PADDING, width: memo + 2 * BADGE_PADDING, height: native.BADGE_SIZE + 2 * BADGE_PADDING, cornerRadius: (native.BADGE_SIZE + 2 * BADGE_PADDING) / 2 };
      return size;
    }
  }, items2);
  const obj = require("initialize");
  const tmp5 = memo;
  let size;
  if (tmp2Result.isAndroid()) {
    size = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
  }
  const obj2 = { style: size, children: null };
  const obj3 = { style: tmp.backIcon, children: null };
  const tmp11 = closure_7;
  tmp2Result = require("utils/PlatformUtils");
  if (null != memo1) {
    const items3 = [memo1];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const obj4 = { cutouts: items4, children: closure_6(includeNotificationsCount.Icon, { size: "md", style: tmp.backIcon, color: "interactive-text-default" }) };
  const items5 = [closure_6(tmp5(9174), obj4), ];
  let tmp9Result = null;
  if (sum > 0) {
    const obj6 = { style: tmp.badgeWrapper, children: null };
    const obj7 = { value: sum, maxValue: 99 };
    obj6.children = tmp9(tmp2(1177).Badge, obj7);
    tmp9Result = tmp9(tmp10, obj6);
  }
  items5[1] = tmp9Result;
  obj3.children = items5;
  obj2.children = tmp11(View, obj3);
  return closure_6(View, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { badgeWrapper: { position: "absolute", top: 16, left: 12 }, backIcon: { height: 24, width: 24 }, iconWithBadge: { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, padding: 7, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT } };
let closure_8 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

export const BACK_ICON_WITH_BADGE_HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
export const SettingsLeftIconWithBadge = function SettingsLeftIconWithBadge(navigation) {
  navigation = navigation.navigation;
  let flag = navigation.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const items = [navigation];
  const obj = { includeNotificationsCount: flag, Icon: null };
  if (noop.useMemo(() => navigation.getState().index > 0, items)) {
    obj.Icon = tmp3(5933).ArrowLargeLeftIcon;
    let tmp5 = obj;
  } else {
    obj.Icon = tmp3(5985).XSmallIcon;
    tmp5 = obj;
  }
  return timestampProducer(IconWithBadge, tmp5);
};
export const LeftBackIconWithBadge = function LeftBackIconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  return timestampProducer(IconWithBadge, { includeNotificationsCount: flag, Icon: ArrowLargeLeftIcon.ArrowLargeLeftIcon });
};
export const CloseIconWithBadgeOnSide = function CloseIconWithBadgeOnSide(count) {
  count = count.count;
  const obj = { style: closure_8().iconWithBadge, children: null };
  const items = [timestampProducer(XLargeIcon.XLargeIcon, { size: "sm", color: "white" }), ];
  let tmp3Result = null;
  if (count > 0) {
    const obj2 = { value: count };
    tmp3Result = timestampProducer(native.Badge, obj2);
  }
  items[1] = tmp3Result;
  obj.children = items;
  return React5(View, obj);
};
