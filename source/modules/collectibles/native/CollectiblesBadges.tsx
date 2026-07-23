// Module ID: 7869
// Function ID: 62689
// Name: NewBadge
// Dependencies: [31, 27, 1851, 33, 4130, 689, 4126, 1212, 7870, 4652, 7871, 2]
// Exports: IconBadgePill, IconTextBadge, LimitedTimeBadge, LockBadge, NewBadge, PremiumBadge

// Module 7869 (NewBadge)
import "result";
import { View } from "get ActivityIndicator";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { badgeTextUppercase: { textTransform: "uppercase" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.badgeSurfaceDarkMode = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.badgeSurfaceLightMode = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.newIconBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingHorizontal: 6, paddingVertical: 2 };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingHorizontal: 6, paddingVertical: 2 };
_createForOfIteratorHelperLoose.limitedTimeBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4 };
const obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.lockIconBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
const obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", gap: 2 };
_createForOfIteratorHelperLoose.newLockIconBadge = obj5;
const obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.badgePill = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, paddingVertical: 1.5, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, flexShrink: 1 };
const obj7 = { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.iconTextBadge = obj7;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj6 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, paddingVertical: 1.5, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, flexShrink: 1 };
const result = require("GuildFeatures").fileFinishedImporting("modules/collectibles/native/CollectiblesBadges.tsx");

export const NewBadge = function NewBadge(style) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.newIconBadge, style.style];
  obj = { variant: "text-sm/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(View, obj);
};
export const LockBadge = function LockBadge(isNew) {
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = _createForOfIteratorHelperLoose();
  if (flag) {
    let obj = { premiumType: PremiumTypes.TIER_2 };
    const items = [tmp.newLockIconBadge, style];
    obj.style = items;
    obj = { size: "xxs", color: importDefault(689).colors.WHITE };
    const items1 = [callback(require(4652) /* LockIcon */.LockIcon, obj), ];
    const obj1 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
    items1[1] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items1;
    let tmp7 = callback2(importDefault(7870), obj);
    const tmp11 = importDefault(7870);
  } else {
    obj = {};
    const items2 = [tmp.lockIconBadge, style];
    obj.style = items2;
    const obj2 = { size: "sm", color: importDefault(689).colors.WHITE };
    obj.children = callback(require(4652) /* LockIcon */.LockIcon, obj2);
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
  const tmp = _createForOfIteratorHelperLoose();
  if (flag) {
    let obj = { premiumType: PremiumTypes.TIER_2 };
    const items = [tmp.newLockIconBadge, style];
    obj.style = items;
    obj = { size: "xxs", color: importDefault(689).colors.WHITE };
    const items1 = [callback(require(7871) /* NitroWheelIcon */.NitroWheelIcon, obj), ];
    const obj1 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
    items1[1] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items1;
    let tmp7 = callback2(importDefault(7870), obj);
    const tmp11 = importDefault(7870);
  } else {
    obj = {};
    const items2 = [tmp.lockIconBadge, style];
    obj.style = items2;
    const obj2 = { size: "sm", color: importDefault(689).colors.WHITE };
    obj.children = callback(require(7871) /* NitroWheelIcon */.NitroWheelIcon, obj2);
    tmp7 = callback(View, obj);
  }
  return tmp7;
};
export const LimitedTimeBadge = function LimitedTimeBadge(style) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.limitedTimeBadge, style.style];
  obj = { variant: "text-xs/bold", color: "text-overlay-dark", style: tmp.badgeTextUppercase };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["h/uBCR"]);
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(View, obj);
};
export const IconBadgePill = function IconBadgePill(isDark) {
  let accessibilityLabel;
  let icon;
  isDark = isDark.isDark;
  ({ icon, accessibilityLabel } = isDark);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items, accessibilityLabel };
  items = [tmp.badgePill, isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode];
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
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.iconTextBadge, isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode];
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
  items1[1] = closure_5(require(4126) /* Text */.Text, obj);
  obj.children = items1;
  return closure_6(View, obj);
};
