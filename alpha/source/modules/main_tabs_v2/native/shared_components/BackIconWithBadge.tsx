// Module ID: 16832
// Function ID: 16833
// Name: BackIconWithBadge
// Dependencies: [19, 17, 6966, 21, 5170, 575, 504, 16833, 1187, 9611, 1357, 7093, 7145, 10904, 2]
// Exports: CloseIconWithBadgeOnSide, LeftBackIconWithBadge, SettingsLeftIconWithBadge

// Module 16832 (BackIconWithBadge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 7093 */;
import XSmallIcon from "XSmallIcon" /* 7145 */;
import ClipView from "ClipView" /* 9611 */;
import XLargeIcon from "XLargeIcon" /* 10904 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6966 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp4;
const native = tmp4(1187);
function IconWithBadge(includeNotificationsCount) {
  let items5;
  let items6;
  let obj3;
  let obj5;
  let obj7;
  let tmp12;
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = includeNotificationsCount.hideBadge;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let num;
  let memo;
  const Icon = includeNotificationsCount.Icon;
  const tmp = closure_8();
  const items = [GuildReadStateStore];
  const items1 = [flag2];
  const obj = flag2(memo[6]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    num = 0;
    if (!flag2) {
      num = GuildReadStateStore.getTotalMentionCount();
    }
    return num;
  }, items1);
  const tmp5 = num;
  num = 0;
  if (!flag2) {
    let num2 = 0;
    if (null != stateFromStores) {
      num2 = stateFromStores;
    }
    let num3 = 0;
    if (flag) {
      num3 = tmp6;
    }
    num = num2 + num3;
  }
  const items2 = [num];
  memo = react.useMemo(() => {
    let BADGE_SIZE;
    if (num < 10) {
      BADGE_SIZE = native.BADGE_SIZE;
    } else {
      BADGE_SIZE = native.BADGE_SIZE + 8;
    }
    return BADGE_SIZE;
  }, items2);
  const items3 = [num, memo];
  const memo1 = react.useMemo(() => {
    if (0 !== num) {
      const BADGE_PADDING = native.BADGE_PADDING;
      size = { shape: ClipView.CutoutShape.RoundedRect, x: 12 - BADGE_PADDING, y: 16 - BADGE_PADDING, width: memo + 2 * BADGE_PADDING, height: native.BADGE_SIZE + 2 * BADGE_PADDING, cornerRadius: (native.BADGE_SIZE + 2 * BADGE_PADDING) / 2 };
      return size;
    }
  }, items3);
  size = undefined;
  const tmp2Result = flag2(memo[10]);
  if (tmp2Result.isAndroid()) {
    size = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
  }
  const obj2 = { style: size, children: tmp12(View, obj3) };
  obj3 = { style: tmp.backIcon, children: items6 };
  tmp12 = closure_7;
  const tmp5Result = tmp5(memo[9]);
  if (null != memo1) {
    const items4 = [memo1];
    items5 = items4;
  } else {
    items5 = [];
  }
  const obj4 = { cutouts: items5, children: closure_6(Icon, obj5) };
  obj5 = { size: "md", style: tmp.backIcon, color: "interactive-text-default" };
  items6 = [closure_6(tmp5Result, obj4), ];
  let tmp10Result = null;
  if (num > 0) {
    const obj6 = { style: tmp.badgeWrapper, children: closure_6(flag2(memo[8]).Badge, obj7) };
    obj7 = { value: num, maxValue: 99 };
    tmp10Result = tmp10(tmp11, obj6);
  }
  items6[1] = tmp10Result;
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
export function SettingsLeftIconWithBadge(navigation) {
  let tmp5;
  navigation = navigation.navigation;
  let flag = navigation.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = navigation.hideBadge;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [navigation];
  const obj = { includeNotificationsCount: flag, hideBadge: flag2, Icon: null };
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
}
export function LeftBackIconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { includeNotificationsCount: flag, Icon: ArrowLargeLeftIcon.ArrowLargeLeftIcon };
  return metroRequire(IconWithBadge, obj);
}
export function CloseIconWithBadgeOnSide(count) {
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
}
