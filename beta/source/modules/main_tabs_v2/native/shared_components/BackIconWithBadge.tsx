// Module ID: 16040
// Function ID: 16041
// Name: BackIconWithBadge
// Dependencies: [19, 17, 7050, 21, 4836, 576, 504, 16031, 1177, 8276, 1365, 5940, 5992, 4785, 2]
// Exports: CloseIconWithBadgeOnSide, LeftBackIconWithBadge, SettingsLeftIconWithBadge

// Module 16040 (BackIconWithBadge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import XLargeIcon from "XLargeIcon" /* 4785 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5940 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import ClipView from "ClipView" /* 8276 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp4;
const native = tmp4(1177);
function IconWithBadge(includeNotificationsCount) {
  let c0;
  let items4;
  let items5;
  let obj3;
  let obj5;
  let obj7;
  let tmp11;
  let totalMentionCount;
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  let memo;
  const Icon = includeNotificationsCount.Icon;
  const tmp = closure_8();
  const items = [GuildReadStateStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let num = 0;
  const value = memo(16031)().value;
  const tmp5 = memo;
  if (null != stateFromStores) {
    num = stateFromStores;
  }
  let num2 = 0;
  if (flag) {
    num2 = value;
  }
  const sum = num + num2;
  _require = sum;
  const items1 = [sum];
  memo = react.useMemo(() => {
    let BADGE_SIZE;
    if (c0 < 10) {
      BADGE_SIZE = native.BADGE_SIZE;
    } else {
      BADGE_SIZE = native.BADGE_SIZE + 8;
    }
    return BADGE_SIZE;
  }, items1);
  const items2 = [sum, memo];
  const memo1 = react.useMemo(() => {
    if (0 !== c0) {
      const BADGE_PADDING = native.BADGE_PADDING;
      size = { shape: ClipView.CutoutShape.RoundedRect, x: 12 - BADGE_PADDING, y: 16 - BADGE_PADDING, width: memo + 2 * BADGE_PADDING, height: native.BADGE_SIZE + 2 * BADGE_PADDING, cornerRadius: (native.BADGE_SIZE + 2 * BADGE_PADDING) / 2 };
      return size;
    }
  }, items2);
  size = undefined;
  const tmp2Result = require("utils/PlatformUtils");
  if (tmp2Result.isAndroid()) {
    size = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
  }
  const obj2 = { style: size, children: tmp11(View, obj3) };
  obj3 = { style: tmp.backIcon, children: items5 };
  tmp11 = closure_7;
  const tmp5Result = tmp5(8276);
  if (null != memo1) {
    const items3 = [memo1];
    items4 = items3;
  } else {
    items4 = [];
  }
  const obj4 = { cutouts: items4, children: closure_6(Icon, obj5) };
  obj5 = { size: "md", style: tmp.backIcon, color: "interactive-text-default" };
  items5 = [closure_6(tmp5Result, obj4), ];
  let tmp9Result = null;
  if (sum > 0) {
    const obj6 = { style: tmp.badgeWrapper, children: closure_6(require("native").Badge, obj7) };
    obj7 = { value: sum, maxValue: 99 };
    tmp9Result = tmp9(tmp10, obj6);
  }
  items5[1] = tmp9Result;
  return closure_6(View, obj2);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { badgeWrapper: { position: "absolute", top: 16, left: 12 }, backIcon: { height: 24, width: 24 }, iconWithBadge: obj2 };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, padding: 7, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let closure_8 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

export const BACK_ICON_WITH_BADGE_HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
export const SettingsLeftIconWithBadge = function SettingsLeftIconWithBadge(navigation) {
  let tmp5;
  navigation = navigation.navigation;
  let flag = navigation.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const items = [navigation];
  const obj = { includeNotificationsCount: flag, Icon: null };
  const tmp = metroRequire;
  const tmp2 = IconWithBadge;
  if (react.useMemo(() => navigation.getState().index > 0, items)) {
    obj.Icon = ArrowLargeLeftIcon.ArrowLargeLeftIcon;
    tmp5 = obj;
  } else {
    obj.Icon = XSmallIcon.XSmallIcon;
    tmp5 = obj;
  }
  return tmp(tmp2, tmp5);
};
export const LeftBackIconWithBadge = function LeftBackIconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { includeNotificationsCount: flag, Icon: ArrowLargeLeftIcon.ArrowLargeLeftIcon };
  return metroRequire(IconWithBadge, obj);
};
export const CloseIconWithBadgeOnSide = function CloseIconWithBadgeOnSide(count) {
  let items;
  count = count.count;
  const obj = { style: closure_8().iconWithBadge, children: items };
  items = [metroRequire(XLargeIcon.XLargeIcon, { size: "sm", color: "white" }), ];
  let tmp3Result = null;
  const tmp = metroImportDefault;
  const tmp2 = View;
  const tmp3 = metroRequire;
  if (count > 0) {
    const obj2 = { value: count };
    tmp3Result = tmp3(native.Badge, obj2);
  }
  items[1] = tmp3Result;
  return tmp(tmp2, obj);
};
