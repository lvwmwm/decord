// Module ID: 16475
// Function ID: 16476
// Name: HexagonCampaignDaysLeftBadge
// Dependencies: [19, 17, 1383, 5039, 21, 1089, 5014, 575, 504, 5041, 7624, 5080, 5021, 5624, 5740, 1113, 4285, 2]
// Exports: default, useHexagonCampaignDaysLeft

// Module 16475 (HexagonCampaignDaysLeftBadge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import DurationsDefault from "Durations" /* 1089 */;
import shared from "shared" /* 5021 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5041 */;
import native from "native" /* 5080 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp2;
const Text_Text = tmp2(5624);
const f109994 = () => {
  currentUser = currentUser.getCurrentUser();
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  return premiumType;
};
function HexagonCampaignBadge(variant) {
  let iconColor;
  let items1;
  let obj6;
  let renderIcon;
  let text;
  let textColor;
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  ({ renderIcon, text } = variant);
  const tmp = closure_10();
  const obj = native;
  const theme = obj.useThemeContext().theme;
  const obj2 = shared;
  const isThemeDarkResult = obj2.isThemeDark(theme);
  if ("overlay" === str) {
    obj6 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
    const obj3 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
  } else if ("expressive" === str) {
    let obj5;
    if (isThemeDarkResult) {
      obj5 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_DARK, textColor: "text-overlay-dark" };
      const obj4 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_DARK, textColor: "text-overlay-dark" };
    } else {
      obj5 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
    }
    obj6 = obj5;
  } else {
    obj6 = { iconColor: nativeDefault.colors.TEXT_DEFAULT, textColor: "text-default" };
  }
  const items = [tmp.badge, , ];
  let badgeOverlay = "overlay" === str;
  ({ iconColor, textColor } = obj6);
  const tmp10 = View;
  const tmp9 = metroImportDefault;
  if (badgeOverlay) {
    badgeOverlay = tmp.badgeOverlay;
  }
  items[1] = badgeOverlay;
  const obj7 = { style: items, children: items1 };
  const tmp11 = "expressive" === str && (isThemeDarkResult ? tmp.badgeExpressiveDark : tmp.badgeExpressiveLight);
  items[2] = tmp11;
  items1 = [renderIcon(iconColor), metroRequire(Text_Text.Text, { variant: "text-xxs/semibold", color: textColor, children: text })];
  return tmp9(tmp10, obj7);
}
const View = react_native.View;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = 60 * DurationsDefault.Millis.SECOND;
let closure_9 = Object.values(HexagonCampaignPerk);
let createStyles = createStyles_mod;
let obj = { badge: obj2, badgeOverlay: obj3, badgeExpressiveDark: obj4, badgeExpressiveLight: obj5 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, paddingVertical: 3, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_40 };
obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.WHITE };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx");

export default function HexagonCampaignDaysLeftBadge(perk) {
  let intl;
  let maxResult;
  perk = perk.perk;
  const tmp2 = dependencyMap;
  const variant = perk.variant;
  let obj = perk(504);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, f109994);
  const items1 = [perk, stateFromStores];
  const memo = react.useMemo(() => {
    let hexagonCampaignPerkCutoffMs;
    if (null != perk) {
      let obj = HexagonCampaignUtils;
      hexagonCampaignPerkCutoffMs = obj.getHexagonCampaignPerkCutoffMs(tmp2, stateFromStores);
    } else {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(items, closure_9.map((item) => {
        const obj = perk(dependencyMap[9]);
        return obj.getHexagonCampaignPerkCutoffMs(item, stateFromStores);
      }), 0);
      const _Math2 = Math;
      hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(min, items, Math);
    }
    return hexagonCampaignPerkCutoffMs;
  }, items1);
  const tmp6 = stateFromStores(7624)(memo, closure_8);
  let num = 0;
  const days = tmp6.days;
  let _Math = Math;
  const tmp = perk;
  const tmp5 = stateFromStores;
  if (tmp6.hours > 0) {
    num = 1;
  }
  const obj2 = {
    variant,
    renderIcon(color) {
      const obj = { size: "xxs", color };
      return closure_1_6(perk(dependencyMap[14]).ClockIcon, obj);
    },
    text: intl.formatToPlainString(tmp5(4285)["noGK/D"], { days: maxResult })
  };
  maxResult = max(days + num, 1);
  intl = tmp(1113).intl;
  return closure_6(HexagonCampaignBadge, obj2);
};
export function useHexagonCampaignDaysLeft(arg0) {
  let closure_0;
  _require = arg0;
  const items = [UserStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f109994);
  const items1 = [arg0, stateFromStores];
  const memo = react.useMemo(() => {
    let hexagonCampaignPerkCutoffMs;
    if (null != perk) {
      let obj = HexagonCampaignUtils;
      hexagonCampaignPerkCutoffMs = obj.getHexagonCampaignPerkCutoffMs(tmp2, stateFromStores);
    } else {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(items, closure_9.map((item) => {
        const obj = perk(dependencyMap[9]);
        return obj.getHexagonCampaignPerkCutoffMs(item, stateFromStores);
      }), 0);
      const _Math2 = Math;
      hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(min, items, Math);
    }
    return hexagonCampaignPerkCutoffMs;
  }, items1);
  const tmp3 = stateFromStores(7624)(memo, closure_8);
  let num = 0;
  const days = tmp3.days;
  const _Math = Math;
  if (tmp3.hours > 0) {
    num = 1;
  }
  return max(days + num, 1);
}
