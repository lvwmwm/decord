// Module ID: 15879
// Function ID: 15880
// Name: HexagonCampaignDaysLeftBadge
// Dependencies: [19, 17, 1392, 4996, 21, 1104, 4971, 587, 558, 576, 504, 4998, 7554, 5037, 4978, 5234, 5691, 1128, 4247, 2]

// Module 15879 (HexagonCampaignDaysLeftBadge)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1104 */;
import _modDef4247 from "module_4247" /* 4247 */;
import shared from "shared" /* 4978 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4996 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4998 */;
import native from "native" /* 5037 */;
import Text_Text from "Text/Text" /* 5234 */;
import useCountdownDefault from "useCountdown" /* 7554 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const intl2 = tmp(1128);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHexagonCampaignDaysLeft(item) {
  let hexagonCampaignPerkCutoffMs;
  let stateFromStores;
  let tmp5;
  let tmp6;
  let obj = stateFromStores(576);
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      currentUser = currentUser.getCurrentUser();
      let premiumType;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      return premiumType;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp2Result = stateFromStores(504);
  stateFromStores = tmp2Result.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === item) {
    let tmp9;
    if (cResult[3] === stateFromStores) {
      tmp9 = cResult[4];
    }
    const tmp18 = useCountdownDefault(tmp9, closure_8);
    let num4 = 0;
    const days = tmp18.days;
    const _Math3 = Math;
    if (tmp18.hours > 0) {
      num4 = 1;
    }
    return max(days + num4, 1);
  }
  if (null != item) {
    const tmp2Result2 = stateFromStores(4998);
    hexagonCampaignPerkCutoffMs = tmp2Result2.getHexagonCampaignPerkCutoffMs(item, stateFromStores);
  } else {
    const _Math = Math;
    const items1 = [];
    HermesBuiltin.arraySpread(items1, closure_9.map((item) => {
      const obj = HexagonCampaignUtils;
      return obj.getHexagonCampaignPerkCutoffMs(item, stateFromStores);
    }), 0);
    const _Math2 = Math;
    hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(min, items1, Math);
  }
  cResult[2] = item;
  cResult[3] = stateFromStores;
  cResult[4] = hexagonCampaignPerkCutoffMs;
  tmp9 = hexagonCampaignPerkCutoffMs;
}) : (function useHexagonCampaignDaysLeft(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const items1 = [arg0, stateFromStores];
  const memo = react.useMemo(() => {
    let hexagonCampaignPerkCutoffMs;
    if (null != closure_0) {
      let obj = HexagonCampaignUtils;
      hexagonCampaignPerkCutoffMs = obj.getHexagonCampaignPerkCutoffMs(tmp2, stateFromStores);
    } else {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(items, closure_9.map((item) => {
        const obj = closure_0(dependencyMap[11]);
        return obj.getHexagonCampaignPerkCutoffMs(item, stateFromStores);
      }), 0);
      const _Math2 = Math;
      hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(min, items, Math);
    }
    return hexagonCampaignPerkCutoffMs;
  }, items1);
  const tmp3 = stateFromStores(7554)(memo, closure_8);
  let num = 0;
  const days = tmp3.days;
  let _Math = Math;
  if (tmp3.hours > 0) {
    num = 1;
  }
  return max(days + num, 1);
});
let closure_11 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignBadge(arg0) {
  let items;
  let obj7;
  let renderIcon;
  let text;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let variant;
  const obj = react2;
  const cResult = obj.c(23);
  ({ variant, renderIcon, text } = arg0);
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_10();
  const tmpResult = native;
  const theme = tmpResult.useThemeContext().theme;
  if (cResult[0] === renderIcon) {
    if (cResult[1] === tmp4.badge) {
      if (cResult[2] === tmp4.badgeExpressiveDark) {
        if (cResult[3] === tmp4.badgeExpressiveLight) {
          if (cResult[4] === tmp4.badgeOverlay) {
            if (cResult[5] === theme) {
              if (cResult[6] === str) {
                tmp5 = cResult[7];
                tmp6 = cResult[8];
                tmp7 = cResult[9];
                tmp8 = cResult[10];
              }
              if (cResult[15] === text) {
                let tmp18;
                if (cResult[16] === tmp8) {
                  tmp18 = cResult[17];
                }
                if (cResult[18] === tmp5) {
                  if (cResult[19] === tmp6) {
                    if (cResult[20] === tmp7) {
                      let tmp21;
                      if (cResult[21] === tmp18) {
                        tmp21 = cResult[22];
                      }
                      return tmp21;
                    }
                  }
                }
                const obj2 = { style: tmp6, children: items };
                items = [tmp7, tmp18];
                const tmp23 = metroImportDefault(tmp5, obj2);
                cResult[18] = tmp5;
                cResult[19] = tmp6;
                cResult[20] = tmp7;
                cResult[21] = tmp18;
                cResult[22] = tmp23;
                tmp21 = tmp23;
              }
              const obj3 = { variant: "text-xxs/semibold", color: tmp8, children: text };
              const tmp20 = metroRequire(Text_Text.Text, obj3);
              cResult[15] = text;
              cResult[16] = tmp8;
              cResult[17] = tmp20;
              tmp18 = tmp20;
            }
          }
        }
      }
    }
  }
  const tmpResult2 = shared;
  const isThemeDarkResult = tmpResult2.isThemeDark(theme);
  if ("overlay" === str) {
    obj7 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
    const obj4 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
  } else if ("expressive" === str) {
    let obj6;
    if (isThemeDarkResult) {
      obj6 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_DARK, textColor: "text-overlay-dark" };
      const obj5 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_DARK, textColor: "text-overlay-dark" };
    } else {
      obj6 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
    }
    obj7 = obj6;
  } else {
    obj7 = { iconColor: nativeDefault.colors.TEXT_DEFAULT, textColor: "text-default" };
  }
  const textColor = obj7.textColor;
  let badgeOverlay = "overlay" === str;
  const iconColor = obj7.iconColor;
  if (badgeOverlay) {
    badgeOverlay = tmp4.badgeOverlay;
  }
  const tmp15 = "expressive" === str && (isThemeDarkResult ? tmp4.badgeExpressiveDark : tmp4.badgeExpressiveLight);
  if (cResult[11] === tmp4.badge) {
    if (cResult[12] === badgeOverlay) {
      let tmp16;
      if (cResult[13] === tmp15) {
        tmp16 = cResult[14];
      }
      const renderIconResult = renderIcon(iconColor);
      cResult[0] = renderIcon;
      cResult[1] = tmp4.badge;
      cResult[2] = tmp4.badgeExpressiveDark;
      cResult[3] = tmp4.badgeExpressiveLight;
      cResult[4] = tmp4.badgeOverlay;
      cResult[5] = theme;
      cResult[6] = str;
      cResult[7] = View;
      cResult[8] = tmp16;
      cResult[9] = renderIconResult;
      cResult[10] = textColor;
      tmp6 = tmp16;
      tmp8 = textColor;
      tmp7 = renderIconResult;
      tmp5 = tmp14;
    }
  }
  const items1 = [tmp4.badge, badgeOverlay, tmp15];
  cResult[11] = tmp4.badge;
  cResult[12] = badgeOverlay;
  cResult[13] = tmp15;
  cResult[14] = items1;
  tmp16 = items1;
}) : (function HexagonCampaignBadge(variant) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignDaysLeftBadge(variant) {
  let first;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(6);
  variant = variant.variant;
  const tmp4 = closure_11(variant.perk);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(color) {
      const obj = { size: "xxs", color };
      return closure_1_6(require("ClockIcon").ClockIcon, obj);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const intl = intl2.intl;
    const obj2 = { days: tmp4 };
    const formatToPlainStringResult = intl.formatToPlainString(_modDef4247["noGK/D"], obj2);
    cResult[1] = tmp4;
    cResult[2] = formatToPlainStringResult;
    tmp6 = formatToPlainStringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp6) {
    let tmp9;
    if (cResult[4] === variant) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp10 = metroRequire(closure_12, { variant, renderIcon: first, text: tmp6 });
  cResult[3] = tmp6;
  cResult[4] = variant;
  cResult[5] = tmp10;
  tmp9 = tmp10;
}) : (function HexagonCampaignDaysLeftBadge(variant) {
  let intl;
  let tmp;
  let obj = {
    variant: variant.variant,
    renderIcon(color) {
      const obj = { size: "xxs", color };
      return closure_1_6(require("ClockIcon").ClockIcon, obj);
    },
    text: intl.formatToPlainString(_modDef4247["noGK/D"], { days: tmp })
  };
  tmp = closure_11(variant.perk);
  intl = intl2.intl;
  return metroRequire(closure_12, obj);
});
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx");

export default tmp5;
export const useHexagonCampaignDaysLeft = tmp4;
