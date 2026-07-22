// Module ID: 15014
// Function ID: 113046
// Name: IconWithBadge
// Dependencies: []
// Exports: CloseIconWithBadgeOnSide, LeftBackIconWithBadge, SettingsLeftIconWithBadge

// Module 15014 (IconWithBadge)
function IconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  let arg1;
  let importDefault;
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let num = 0;
  if (null != stateFromStores) {
    num = stateFromStores;
  }
  let num2 = 0;
  if (flag) {
    num2 = importDefault(dependencyMap[7])().value;
  }
  const sum = num + num2;
  arg1 = sum;
  const items1 = [sum];
  const memo = React.useMemo(() => {
    if (sum < 10) {
      let BADGE_SIZE = sum(closure_2[8]).BADGE_SIZE;
    } else {
      BADGE_SIZE = sum(closure_2[8]).BADGE_SIZE + 8;
    }
    return BADGE_SIZE;
  }, items1);
  importDefault = memo;
  const items2 = [sum, memo];
  const memo1 = React.useMemo(() => {
    if (0 !== sum) {
      const BADGE_PADDING = sum(closure_2[8]).BADGE_PADDING;
      const obj = { shape: sum(closure_2[9]).CutoutShape.RoundedRect, x: 12 - BADGE_PADDING, y: 16 - BADGE_PADDING, width: memo + 2 * BADGE_PADDING, height: sum(closure_2[8]).BADGE_SIZE + 2 * BADGE_PADDING, cornerRadius: (sum(closure_2[8]).BADGE_SIZE + 2 * BADGE_PADDING) / 2 };
      return obj;
    }
  }, items2);
  obj = {};
  let obj2 = arg1(dependencyMap[10]);
  obj = undefined;
  if (obj2.isAndroid()) {
    obj = {};
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
  obj2.children = callback(includeNotificationsCount.Icon, { style: tmp.backIcon });
  const items5 = [callback(importDefault(dependencyMap[9]), obj2), ];
  let tmp12 = null;
  if (sum > 0) {
    const obj4 = { style: tmp.badgeWrapper };
    const obj5 = { value: sum, maxValue: 99 };
    obj4.children = callback(arg1(dependencyMap[8]).Badge, obj5);
    tmp12 = callback(View, obj4);
  }
  items5[1] = tmp12;
  obj1.children = items5;
  obj.children = closure_7(View, obj1);
  return callback(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { badgeWrapper: {}, backIcon: {} };
obj = { -9223372036854775808: 1.1, 0: 27, -9223372036854775808: "dm_spam_filter_v2", 0: "enum", 9223372036854775807: null, 0: "\u2639\uFE0F", gap: importDefault(dependencyMap[5]).space.PX_4, borderRadius: importDefault(dependencyMap[5]).modules.button.BORDER_RADIUS, backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj.iconWithBadge = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

export const BACK_ICON_WITH_BADGE_HIT_SLOP = {};
export const SettingsLeftIconWithBadge = function SettingsLeftIconWithBadge(navigation) {
  navigation = navigation.navigation;
  const arg1 = navigation;
  let flag = navigation.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const items = [navigation];
  const obj = { includeNotificationsCount: flag };
  if (React.useMemo(() => navigation.getState().index > 0, items)) {
    obj.Icon = tmp3(tmp4[11]).ArrowLargeLeftIcon;
    let tmp5 = obj;
  } else {
    obj.Icon = tmp3(tmp4[12]).XSmallIcon;
    tmp5 = obj;
  }
  return closure_6(IconWithBadge, tmp5);
};
export const LeftBackIconWithBadge = function LeftBackIconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { includeNotificationsCount: flag, Icon: arg1(dependencyMap[11]).ArrowLargeLeftIcon };
  return callback(IconWithBadge, obj);
};
export const CloseIconWithBadgeOnSide = function CloseIconWithBadgeOnSide(count) {
  count = count.count;
  let obj = { style: callback2().iconWithBadge };
  const items = [callback(arg1(dependencyMap[13]).XLargeIcon, { "Bool(false)": true, "Bool(false)": "/assets/images/native" }), ];
  let tmp3 = null;
  if (count > 0) {
    obj = { value: count };
    tmp3 = callback(arg1(dependencyMap[8]).Badge, obj);
  }
  items[1] = tmp3;
  obj.children = items;
  return closure_7(View, obj);
};
