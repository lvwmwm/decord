// Module ID: 8293
// Function ID: 8294
// Name: CollectiblesBadges
// Dependencies: [19, 17, 1374, 21, 4836, 576, 4832, 1115, 8294, 5409, 8122, 2]
// Exports: IconBadgePill, IconTextBadge, LimitedTimeBadge, LockBadge, NewBadge, PremiumBadge

// Module 8293 (CollectiblesBadges)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Text_Text from "Text/Text" /* 4832 */;
import LockIcon3 from "LockIcon" /* 5409 */;
import NitroWheelIcon3 from "NitroWheelIcon" /* 8122 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8294 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { badgeTextUppercase: { textTransform: "uppercase" }, badgeSurfaceDarkMode: obj2, badgeSurfaceLightMode: obj3, newIconBadge: obj4, limitedTimeBadge: obj5, lockIconBadge: { backgroundColor: nativeDefault.colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: nativeDefault.radii.round }, newLockIconBadge: { backgroundColor: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: nativeDefault.radii.round, alignItems: "center", gap: 2 }, badgePill: { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 }, iconTextBadge: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.round } };
obj2 = { backgroundColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, paddingHorizontal: 6, paddingVertical: 2 };
obj5 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
({ backgroundColor: nativeDefault.colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: nativeDefault.radii.round });
({ backgroundColor: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: nativeDefault.radii.round, alignItems: "center", gap: 2 });
({ paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 });
({ flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.round });
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesBadges.tsx");

export const NewBadge = function NewBadge(style) {
  let Text;
  let intl;
  let items;
  let obj2;
  style = style.style;
  const tmp = closure_7();
  const obj = { style: items, children: hasOwnProperty(Text, obj2) };
  items = [tmp.newIconBadge, style];
  obj2 = { variant: "text-sm/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: intl.string(intl2.t.y2b7CA) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return hasOwnProperty(View, obj);
};
export const LockBadge = function LockBadge(isNew) {
  let LockIcon;
  let intl;
  let items;
  let items1;
  let items2;
  let obj5;
  let tmp7;
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = closure_7();
  if (flag) {
    const obj2 = { premiumType: PremiumTypes.TIER_2, style: items, children: items1 };
    items = [tmp.newLockIconBadge, style];
    const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
    const tmp11 = PremiumFeaturesBackgroundDefault;
    const LockIcon2 = LockIcon3.LockIcon;
    items1 = [hasOwnProperty(LockIcon2, obj3), ];
    const obj4 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: intl.string(intl2.t.y2b7CA) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items1[1] = hasOwnProperty(Text, obj4);
    tmp7 = metroRequire(tmp11, obj2);
  } else {
    const obj = { style: items2, children: hasOwnProperty(LockIcon, obj5) };
    items2 = [tmp.lockIconBadge, style];
    obj5 = { size: "sm", color: nativeDefault.colors.WHITE };
    LockIcon = LockIcon3.LockIcon;
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
};
export const PremiumBadge = function PremiumBadge(isNew) {
  let NitroWheelIcon;
  let intl;
  let items;
  let items1;
  let items2;
  let obj5;
  let tmp7;
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = closure_7();
  if (flag) {
    const obj2 = { premiumType: PremiumTypes.TIER_2, style: items, children: items1 };
    items = [tmp.newLockIconBadge, style];
    const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
    const tmp11 = PremiumFeaturesBackgroundDefault;
    const NitroWheelIcon2 = NitroWheelIcon3.NitroWheelIcon;
    items1 = [hasOwnProperty(NitroWheelIcon2, obj3), ];
    const obj4 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: intl.string(intl2.t.y2b7CA) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items1[1] = hasOwnProperty(Text, obj4);
    tmp7 = metroRequire(tmp11, obj2);
  } else {
    const obj = { style: items2, children: hasOwnProperty(NitroWheelIcon, obj5) };
    items2 = [tmp.lockIconBadge, style];
    obj5 = { size: "sm", color: nativeDefault.colors.WHITE };
    NitroWheelIcon = NitroWheelIcon3.NitroWheelIcon;
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
};
export const LimitedTimeBadge = function LimitedTimeBadge(style) {
  let Text;
  let intl;
  let items;
  let obj2;
  style = style.style;
  const tmp = closure_7();
  const obj = { style: items, children: hasOwnProperty(Text, obj2) };
  items = [tmp.limitedTimeBadge, style];
  obj2 = { variant: "text-xs/bold", color: "text-overlay-dark", style: tmp.badgeTextUppercase, children: intl.string(intl2.t["h/uBCR"]) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return hasOwnProperty(View, obj);
};
export const IconBadgePill = function IconBadgePill(isDark) {
  let accessibilityLabel;
  let icon;
  let str;
  isDark = isDark.isDark;
  ({ icon, accessibilityLabel } = isDark);
  const tmp = closure_7();
  const items = [tmp.badgePill, ];
  items[1] = isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode;
  const obj = { style: items, accessibilityLabel, children: hasOwnProperty(icon, { size: "xs", color: str }) };
  str = "white";
  const tmp3 = View;
  if (isDark) {
    str = "black";
  }
  return hasOwnProperty(tmp3, obj);
};
export const IconTextBadge = function IconTextBadge(isDark) {
  let icon;
  let items1;
  let label;
  isDark = isDark.isDark;
  ({ icon, label } = isDark);
  const tmp = closure_7();
  const items = [tmp.iconTextBadge, ];
  const obj = { style: items, children: items1 };
  items[1] = isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode;
  let str = "white";
  const tmp2 = metroRequire;
  const tmp3 = View;
  if (isDark) {
    str = "black";
  }
  items1 = [hasOwnProperty(icon, { size: "xs", color: str }), ];
  let str2 = "text-overlay-light";
  const Text = Text_Text.Text;
  if (isDark) {
    str2 = "text-overlay-dark";
  }
  const obj2 = { variant: "text-xs/bold", color: str2, style: tmp.badgeTextUppercase, children: label };
  items1[1] = hasOwnProperty(Text, obj2);
  return tmp2(tmp3, obj);
};
