// Module ID: 7862
// Function ID: 62629
// Name: NewBadge
// Dependencies: []
// Exports: IconBadgePill, IconTextBadge, LimitedTimeBadge, LockBadge, NewBadge, PremiumBadge

// Module 7862 (NewBadge)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const PremiumTypes = arg1(dependencyMap[2]).PremiumTypes;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { badgeTextUppercase: { textTransform: "uppercase" } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.WHITE };
obj.badgeSurfaceDarkMode = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.badgeSurfaceLightMode = { backgroundColor: importDefault(dependencyMap[5]).colors.BADGE_BACKGROUND_BRAND };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BADGE_BACKGROUND_BRAND };
obj.newIconBadge = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[5]).radii.round, paddingHorizontal: 6, paddingVertical: 2 };
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[5]).radii.round, paddingHorizontal: 6, paddingVertical: 2 };
obj.limitedTimeBadge = { backgroundColor: importDefault(dependencyMap[5]).colors.WHITE, borderRadius: importDefault(dependencyMap[5]).radii.md, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, paddingVertical: importDefault(dependencyMap[5]).space.PX_4 };
const obj3 = { backgroundColor: importDefault(dependencyMap[5]).colors.WHITE, borderRadius: importDefault(dependencyMap[5]).radii.md, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, paddingVertical: importDefault(dependencyMap[5]).space.PX_4 };
obj.lockIconBadge = { backgroundColor: importDefault(dependencyMap[5]).colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: importDefault(dependencyMap[5]).radii.round };
const obj5 = { experimental_withBlurBackground: true, label: true, presentation: true, enabled: true, type: true, isExpired: true, isLeader: true, backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.newLockIconBadge = obj5;
const obj4 = { backgroundColor: importDefault(dependencyMap[5]).colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.badgePill = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_4, paddingVertical: 1.5, borderRadius: importDefault(dependencyMap[5]).radii.round, flexShrink: 1 };
const obj7 = { hasVoted: "safety_user_sentiment_notice_dismissed_at", isExpired: "message", alignButton: null, label: "text-sm/semibold", secondaryLabel: "text-default", paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.iconTextBadge = obj7;
let closure_7 = obj.createStyles(obj);
const obj6 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_4, paddingVertical: 1.5, borderRadius: importDefault(dependencyMap[5]).radii.round, flexShrink: 1 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/collectibles/native/CollectiblesBadges.tsx");

export const NewBadge = function NewBadge(style) {
  const tmp = callback3();
  let obj = { style: items };
  const items = [tmp.newIconBadge, style.style];
  obj = { style: tmp.badgeTextUppercase };
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.y2b7CA);
  obj.children = callback(arg1(dependencyMap[6]).Text, obj);
  return callback(View, obj);
};
export const LockBadge = function LockBadge(isNew) {
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = callback3();
  if (flag) {
    let obj = { premiumType: PremiumTypes.TIER_2 };
    const items = [tmp.newLockIconBadge, style];
    obj.style = items;
    obj = { size: "xxs", color: importDefault(dependencyMap[5]).colors.WHITE };
    const items1 = [callback(arg1(dependencyMap[9]).LockIcon, obj), ];
    const obj1 = { style: tmp.badgeTextUppercase };
    const intl = arg1(dependencyMap[7]).intl;
    obj1.children = intl.string(arg1(dependencyMap[7]).t.y2b7CA);
    items1[1] = callback(arg1(dependencyMap[6]).Text, obj1);
    obj.children = items1;
    let tmp7 = callback2(importDefault(dependencyMap[8]), obj);
    const tmp11 = importDefault(dependencyMap[8]);
  } else {
    obj = {};
    const items2 = [tmp.lockIconBadge, style];
    obj.style = items2;
    const obj2 = { size: "sm", color: importDefault(dependencyMap[5]).colors.WHITE };
    obj.children = callback(arg1(dependencyMap[9]).LockIcon, obj2);
    tmp7 = callback(View, obj);
  }
  return tmp7;
};
export const PremiumBadge = function PremiumBadge(isNew) {
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = callback3();
  if (flag) {
    let obj = { premiumType: PremiumTypes.TIER_2 };
    const items = [tmp.newLockIconBadge, style];
    obj.style = items;
    obj = { size: "xxs", color: importDefault(dependencyMap[5]).colors.WHITE };
    const items1 = [callback(arg1(dependencyMap[10]).NitroWheelIcon, obj), ];
    const obj1 = { style: tmp.badgeTextUppercase };
    const intl = arg1(dependencyMap[7]).intl;
    obj1.children = intl.string(arg1(dependencyMap[7]).t.y2b7CA);
    items1[1] = callback(arg1(dependencyMap[6]).Text, obj1);
    obj.children = items1;
    let tmp7 = callback2(importDefault(dependencyMap[8]), obj);
    const tmp11 = importDefault(dependencyMap[8]);
  } else {
    obj = {};
    const items2 = [tmp.lockIconBadge, style];
    obj.style = items2;
    const obj2 = { size: "sm", color: importDefault(dependencyMap[5]).colors.WHITE };
    obj.children = callback(arg1(dependencyMap[10]).NitroWheelIcon, obj2);
    tmp7 = callback(View, obj);
  }
  return tmp7;
};
export const LimitedTimeBadge = function LimitedTimeBadge(style) {
  const tmp = callback3();
  let obj = { style: items };
  const items = [tmp.limitedTimeBadge, style.style];
  obj = { style: tmp.badgeTextUppercase };
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.h/uBCR);
  obj.children = callback(arg1(dependencyMap[6]).Text, obj);
  return callback(View, obj);
};
export const IconBadgePill = function IconBadgePill(isDark) {
  let accessibilityLabel;
  let icon;
  isDark = isDark.isDark;
  ({ icon, accessibilityLabel } = isDark);
  const tmp = callback3();
  let obj = { style: items, accessibilityLabel };
  const items = [tmp.badgePill, isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode];
  obj = { size: "xs" };
  let str = "white";
  if (isDark) {
    str = "black";
  }
  obj.color = str;
  obj.children = closure_5(icon, obj);
  return closure_5(View, obj);
};
export const IconTextBadge = function IconTextBadge(isDark) {
  let icon;
  let label;
  isDark = isDark.isDark;
  ({ icon, label } = isDark);
  const tmp = callback3();
  let obj = { style: items };
  const items = [tmp.iconTextBadge, isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode];
  obj = { size: "xs" };
  let str = "white";
  if (isDark) {
    str = "black";
  }
  obj.color = str;
  const items1 = [closure_5(icon, obj), ];
  obj = { variant: "text-xs/bold" };
  let str2 = "text-overlay-light";
  if (isDark) {
    str2 = "text-overlay-dark";
  }
  obj.color = str2;
  obj.style = tmp.badgeTextUppercase;
  obj.children = label;
  items1[1] = closure_5(arg1(dependencyMap[6]).Text, obj);
  obj.children = items1;
  return closure_6(View, obj);
};
