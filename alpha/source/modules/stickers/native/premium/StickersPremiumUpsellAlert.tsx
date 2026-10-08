// Module ID: 9735
// Function ID: 9736
// Name: StickersPremiumUpsellAlert
// Dependencies: [19, 17, 7120, 1085, 1391, 21, 9736, 1126, 587, 9737, 9738, 5090, 558, 576, 1200, 5086, 584, 7127, 9331, 1496, 6841, 1264, 9328, 5009, 6189, 9739, 5394, 2]

// Module 9735 (StickersPremiumUpsellAlert)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import Text_Text from "Text/Text" /* 5086 */;
import openPremiumModalDefault from "openPremiumModal" /* 9328 */;
import AssetRegistryDefault from "AssetRegistry" /* 9736 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9737 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9738 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import IAPStore from "IAPStore" /* 7120 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let obj5;
let obj6;
let unpackModuleId;
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9, AnalyticsObjects: c10 } = Constants);
({ SubscriptionPlans: unpackModuleId, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_12, PRICE_PLACEHOLDER: map1 } = PremiumConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = {
  icon: AssetRegistryDefault,
  description() {
    const intl = intl4.intl;
    return intl.string(intl4.t.uAfKTe);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE
};
let items = [obj, , ];
let obj2 = {
  icon: AssetRegistryDefault2,
  description() {
    const intl = intl4.intl;
    const obj = { numFreeGuildSubscriptions };
    return intl.formatToPlainString(intl4.t.aVSVBO, obj);
  }
};
items[1] = obj2;
let obj3 = {
  icon: AssetRegistryDefault3,
  description() {
    const intl = intl4.intl;
    return intl.string(intl4.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN
};
items[2] = obj3;
let createStyles = createStyles_mod;
let obj4 = { alert: { paddingTop: 18 }, shortHeightAlert: { height: 500 }, content: { alignItems: "center" }, closeContainer: { flexDirection: "row-reverse", width: "100%", marginBottom: 16 }, description: { textAlign: "center", lineHeight: 20 }, perks: obj5, perkRow: obj6, lastPerkRow: { borderBottomWidth: 0 }, perkIcon: { width: 24, marginRight: 20 }, perkText: { lineHeight: 20, flexShrink: 1 }, imageHeader: { marginBottom: 12 } };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 0, paddingHorizontal: 12, paddingVertical: 8, width: "100%" };
createStyles = createStyles.createStyles;
obj6 = { paddingVertical: 10, borderBottomColor: nativeDefault.unsafe_rawColors.PRIMARY_560, borderBottomWidth: 1, flexDirection: "row", alignItems: "center" };
let closure_17 = createStyles(obj4);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerkRow(perk) {
  const obj = react2;
  const cResult = obj.c(17);
  perk = perk.perk;
  const isLastPerk = perk.isLastPerk;
  const tmp4 = closure_17();
  let lastPerkRow;
  if (isLastPerk) {
    lastPerkRow = tmp4.lastPerkRow;
  }
  if (cResult[0] === tmp4.perkRow) {
    let tmp6;
    if (cResult[1] === lastPerkRow) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === perk.color) {
      if (cResult[4] === perk.icon) {
        if (cResult[5] === tmp4.perkIcon) {
          let tmp9;
          let tmp12;
          if (cResult[6] === null == perk.color) {
            tmp9 = cResult[7];
          }
          const perkText = tmp4.perkText;
          if (cResult[8] !== perk) {
            const descriptionResult = perk.description();
            cResult[8] = perk;
            cResult[9] = descriptionResult;
            tmp12 = descriptionResult;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] === tmp4.perkText) {
            let tmp14;
            if (cResult[11] === tmp12) {
              tmp14 = cResult[12];
            }
            if (cResult[13] === tmp6) {
              if (cResult[14] === tmp9) {
                let tmp17;
                if (cResult[15] === tmp14) {
                  tmp17 = cResult[16];
                }
                return tmp17;
              }
            }
            const obj2 = { style: tmp6, children: items };
            items = [tmp9, tmp14];
            const tmp20 = authStore3(React3, obj2);
            cResult[13] = tmp6;
            cResult[14] = tmp9;
            cResult[15] = tmp14;
            cResult[16] = tmp20;
            tmp17 = tmp20;
          }
          const obj3 = { style: perkText, variant: "text-md/medium", color: "interactive-text-active", children: tmp12 };
          const tmp16 = authStore2(Text_Text.Text, obj3);
          cResult[10] = tmp4.perkText;
          cResult[11] = tmp12;
          cResult[12] = tmp16;
          tmp14 = tmp16;
        }
      }
    }
    const obj4 = { style: tmp4.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
    const tmp11 = authStore2(native.Icon, obj4);
    cResult[3] = perk.color;
    cResult[4] = perk.icon;
    cResult[5] = tmp4.perkIcon;
    cResult[6] = null == perk.color;
    cResult[7] = tmp11;
    tmp9 = tmp11;
  }
  const items1 = [tmp4.perkRow, lastPerkRow];
  cResult[0] = tmp4.perkRow;
  cResult[1] = lastPerkRow;
  cResult[2] = items1;
  tmp6 = items1;
}) : (function PerkRow(perk) {
  let items1;
  perk = perk.perk;
  const isLastPerk = perk.isLastPerk;
  const tmp = closure_17();
  items = [tmp.perkRow, ];
  let lastPerkRow;
  const tmp2 = authStore3;
  const tmp3 = React3;
  if (isLastPerk) {
    lastPerkRow = tmp.lastPerkRow;
  }
  const obj = { style: items, children: items1 };
  items[1] = lastPerkRow;
  items1 = [, ];
  const obj2 = { style: tmp.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
  items1[0] = authStore2(native.Icon, obj2);
  const obj3 = { style: tmp.perkText, variant: "text-md/medium", color: "interactive-text-active", children: perk.description() };
  const Text = Text_Text.Text;
  items1[1] = authStore2(Text, obj3);
  return tmp2(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function StickersPremiumUpsellAlert(arg0) {
  let analyticsLocation;
  let analyticsLocations;
  let items1;
  let length;
  let obj8;
  let onClose;
  let priceString;
  let ready;
  let tmp5;
  let tmp6;
  const tmp = analyticsLocation;
  let obj = analyticsLocation(576);
  const cResult = obj.c(38);
  ({ onClose, analyticsLocation } = arg0);
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      if (!ready.isReady()) {
        let obj = analyticsLocations(dependencyMap[16]);
        obj.wait(() => {
          const obj = analyticsLocations(closure_1_2[17]);
          return obj.loadProducts();
        });
      }
    };
    items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = react.useEffect(tmp5, tmp6);
  const tmp9 = analyticsLocations(9331)(closure_11.PREMIUM_MONTH_TIER_2);
  if (tmp9 != null) {
    priceString = tmp9.priceString;
  }
  const height = tmp8(1496)().height;
  analyticsLocations = tmp8(6841)().analyticsLocations;
  if (cResult[2] === analyticsLocation) {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      cResult[5] = intl.string(tmp(1126).t.f3Pet9);
      const stringResult = intl.string(tmp(1126).t.f3Pet9);
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      cResult[6] = intl2.string(tmp(1126).t.o3Tnif);
      const stringResult1 = intl2.string(tmp(1126).t.o3Tnif);
    }
    let shortHeightAlert = null;
    if (height <= 580) {
      shortHeightAlert = tmp4.shortHeightAlert;
    }
    if (cResult[7] === tmp4.alert) {
      let tmp17;
      let tmp20;
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { source: analyticsLocations(5009) };
        const Icon = tmp(1200).Icon;
        const tmp19 = closure_14(Icon, obj2);
        cResult[10] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] !== onClose) {
        let obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: tmp17 };
        const tmp22 = closure_14(tmp(6189).PressableOpacity, obj3);
        cResult[11] = onClose;
        cResult[12] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[12];
      }
      if (cResult[13] === tmp4.closeContainer) {
        let tmp27;
        const _Symbol4 = Symbol;
        const content = tmp4.content;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class K {
            constructor() {
              return true;
            }
          }
          cResult[16] = K;
          tmp27 = K;
        } else {
          class K {
            constructor() {
              return true;
            }
          }
        }
        if (cResult[17] !== tmp4.imageHeader) {
          class K {
            constructor() {
              return true;
            }
          }
          const obj4 = { source: analyticsLocations(9739), style: tmp4.imageHeader };
          cResult[17] = tmp4.imageHeader;
          cResult[18] = closure_14(closure_5, obj4);
          const tmp30 = closure_14(closure_5, obj4);
        } else {
          class K {
            constructor() {
              return true;
            }
          }
        }
        const description = tmp4.description;
        if (cResult[19] !== priceString) {
          class K {
            constructor() {
              return true;
            }
          }
          const format = tmp32.format;
          const TBsJfQ = tmp(1126).t.TBsJfQ;
          const tmp33 = priceString;
          if (priceString == null) {
            class K {
              constructor() {
                return true;
              }
            }
          }
          const obj5 = { monthlyPrice: tmp33 };
          cResult[19] = priceString;
          cResult[20] = format(TBsJfQ, obj5);
          const formatResult = format(TBsJfQ, obj5);
        } else {
          class K {
            constructor() {
              return true;
            }
          }
        }
        if (cResult[21] === tmp4.description) {
          let tmp38;
          class K {
            constructor() {
              return true;
            }
          }
          const _Symbol5 = Symbol;
          const perks = tmp4.perks;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class K {
              constructor() {
                return true;
              }
            }
            const mapped = items.map((perk, index) => {
              const obj = { perk, isLastPerk: index === items.length - 1 };
              return closure_1_14(closure_1_18, obj, index);
            });
            cResult[24] = mapped;
            tmp38 = mapped;
          } else {
            class K {
              constructor() {
                return true;
              }
            }
          }
          if (cResult[25] !== tmp4.perks) {
            class K {
              constructor() {
                return true;
              }
            }
            const obj6 = { style: perks, children: tmp38 };
            cResult[25] = tmp4.perks;
            cResult[26] = closure_14(closure_4, obj6);
            const tmp42 = closure_14(closure_4, obj6);
          } else {
            class K {
              constructor() {
                return true;
              }
            }
          }
          if (cResult[27] === tmp4.content) {
            class K {
              constructor() {
                return true;
              }
            }
          }
          const obj7 = { children: closure_15(closure_4, obj8) };
          obj8 = { style: content, onStartShouldSetResponder: tmp27, children: items1 };
          items1 = [tmp28, tmp35, tmp40];
          cResult[27] = tmp4.content;
          cResult[28] = tmp28;
          cResult[29] = tmp35;
          cResult[30] = tmp40;
          cResult[31] = closure_14(closure_6, obj7);
          const tmp48 = closure_14(closure_6, obj7);
        }
        const obj9 = { style: description, variant: "text-md/medium", children: tmp31 };
        cResult[21] = tmp4.description;
        cResult[22] = tmp31;
        cResult[23] = closure_14(tmp(5086).Text, obj9);
        const tmp37 = closure_14(tmp(5086).Text, obj9);
      }
      const obj10 = { style: tmp4.closeContainer, children: tmp20 };
      cResult[13] = tmp4.closeContainer;
      cResult[14] = tmp20;
      cResult[15] = closure_14(closure_4, obj10);
      const tmp26 = closure_14(closure_4, obj10);
    }
    const items2 = [tmp4.alert, shortHeightAlert];
    cResult[7] = tmp4.alert;
    cResult[8] = shortHeightAlert;
    cResult[9] = items2;
  }
  function onConfirm() {
    let obj2;
    const obj = { location: obj2 };
    obj2 = { section: React4.STICKER_PREMIUM_TIER_2_UPSELL_MODAL, object: constants.BUTTON_CTA };
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_PROMOTION_OPENED = metroImportAll.PREMIUM_PROMOTION_OPENED;
    AnalyticsUtilsDefault;
    const merged = Object.assign(analyticsLocation);
    track(PREMIUM_PROMOTION_OPENED, obj);
    const obj3 = { analyticsLocations };
    openPremiumModalDefault(obj3);
  }
  cResult[2] = analyticsLocation;
  cResult[3] = analyticsLocations;
  cResult[4] = onConfirm;
}) : (function StickersPremiumUpsellAlert(arg0) {
  let Icon;
  let PressableOpacity;
  let TBsJfQ;
  let format;
  let intl;
  let intl2;
  let items1;
  let items2;
  let length;
  let obj3;
  let obj4;
  let onClose;
  let ready;
  ({ onClose, analyticsLocation: require } = arg0);
  let analyticsLocations;
  const tmp = closure_17();
  const effect = react.useEffect(() => {
    if (!ready.isReady()) {
      let obj = analyticsLocations(dependencyMap[16]);
      obj.wait(() => {
        const obj = analyticsLocations(closure_1_2[17]);
        return obj.loadProducts();
      });
    }
  }, []);
  const tmp5 = analyticsLocations(9331)(closure_11.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  const height = tmp3(1496)().height;
  analyticsLocations = tmp3(6841)().analyticsLocations;
  let obj = {
    cancelText: intl.string(intl4.t.f3Pet9),
    confirmColor: native.ButtonColors.GREEN,
    confirmText: intl2.string(intl4.t.o3Tnif),
    onConfirm() {
      let obj2;
      const obj = { location: obj2 };
      obj2 = { section: React4.STICKER_PREMIUM_TIER_2_UPSELL_MODAL, object: constants.BUTTON_CTA };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_PROMOTION_OPENED = metroImportAll.PREMIUM_PROMOTION_OPENED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(require);
      track(PREMIUM_PROMOTION_OPENED, obj);
      const obj3 = { analyticsLocations };
      openPremiumModalDefault(obj3);
    },
    onClose,
    onCancel: onClose,
    style: items,
    children: items1
  };
  const tmp3Result = analyticsLocations(5394);
  intl = intl4.intl;
  intl2 = intl4.intl;
  items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  let obj2 = { style: tmp.closeContainer, children: closure_14(PressableOpacity, obj3) };
  obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: closure_14(Icon, obj4) };
  PressableOpacity = tmp9(6189).PressableOpacity;
  obj4 = { source: analyticsLocations(5009) };
  Icon = tmp9(1200).Icon;
  items1 = [closure_14(closure_4, obj2), ];
  const obj5 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    },
    children: items2
  };
  items2 = [, , ];
  const obj6 = { source: analyticsLocations(9739), style: tmp.imageHeader };
  items2[0] = closure_14(closure_5, obj6);
  const obj7 = { style: tmp.description, variant: "text-md/medium", children: format(TBsJfQ, { monthlyPrice: priceString }) };
  const Text = tmp9(5086).Text;
  const intl3 = tmp9(1126).intl;
  format = intl3.format;
  TBsJfQ = tmp9(1126).t.TBsJfQ;
  const tmp13 = closure_6;
  if (priceString == null) {
    priceString = closure_13;
  }
  const obj8 = { children: closure_15(closure_4, obj5) };
  items2[1] = closure_14(Text, obj7);
  const obj9 = {
    style: tmp.perks,
    children: items.map((perk, index) => {
      const obj = { perk, isLastPerk: index === items.length - 1 };
      return closure_1_14(closure_1_18, obj, index);
    })
  };
  items2[2] = closure_14(closure_4, obj9);
  items1[1] = closure_14(tmp13, obj8);
  return closure_15(tmp3Result, obj);
});
const result = size.fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default tmp7;
