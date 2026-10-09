// Module ID: 9754
// Function ID: 9755
// Name: StickersPremiumUpsellAlert
// Dependencies: [19, 17, 7125, 1085, 1392, 21, 9755, 1126, 587, 9756, 9757, 5091, 558, 576, 1200, 5087, 584, 7132, 9369, 1497, 6848, 1265, 9366, 5010, 6191, 6163, 9758, 5395, 2]

// Module 9754 (StickersPremiumUpsellAlert)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import Text_Text from "Text/Text" /* 5087 */;
import openPremiumModalDefault from "openPremiumModal" /* 9366 */;
import AssetRegistryDefault from "AssetRegistry" /* 9755 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9756 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9757 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import IAPStore from "IAPStore" /* 7125 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj5;
let obj6;
let unpackModuleId;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ AnalyticEvents: metroImportDefault, AnalyticsSections: metroImportAll, AnalyticsObjects: c9 } = Constants);
({ SubscriptionPlans: c10, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: unpackModuleId, PRICE_PLACEHOLDER: closure_12 } = PremiumConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
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
    const obj = { numFreeGuildSubscriptions: unpackModuleId };
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
let closure_16 = createStyles(obj4);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerkRow(perk) {
  const obj = react2;
  const cResult = obj.c(17);
  perk = perk.perk;
  const isLastPerk = perk.isLastPerk;
  const tmp4 = closure_16();
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
          const tmp16 = map1(Text_Text.Text, obj3);
          cResult[10] = tmp4.perkText;
          cResult[11] = tmp12;
          cResult[12] = tmp16;
          tmp14 = tmp16;
        }
      }
    }
    const obj4 = { style: tmp4.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
    const tmp11 = map1(native.Icon, obj4);
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
  const tmp = closure_16();
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
  items1[0] = map1(native.Icon, obj2);
  const obj3 = { style: tmp.perkText, variant: "text-md/medium", color: "interactive-text-active", children: perk.description() };
  const Text = Text_Text.Text;
  items1[1] = map1(Text, obj3);
  return tmp2(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function StickersPremiumUpsellAlert(arg0) {
  let analyticsLocation;
  let analyticsLocations;
  let items1;
  let items2;
  let length;
  let obj9;
  let onClose;
  let priceString;
  let ready;
  let tmp5;
  let tmp6;
  const tmp = analyticsLocation;
  let obj = analyticsLocation(576);
  const cResult = obj.c(38);
  ({ onClose, analyticsLocation } = arg0);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
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
  const tmp9 = analyticsLocations(9369)(closure_10.PREMIUM_MONTH_TIER_2);
  if (tmp9 != null) {
    priceString = tmp9.priceString;
  }
  const height = tmp8(1497)().height;
  analyticsLocations = tmp8(6848)().analyticsLocations;
  if (cResult[2] === analyticsLocation) {
    let tmp10;
    let tmp11;
    let tmp13;
    if (cResult[3] === analyticsLocations) {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.f3Pet9);
      cResult[5] = stringResult;
      tmp11 = stringResult;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.o3Tnif);
      cResult[6] = stringResult1;
      tmp13 = stringResult1;
    } else {
      tmp13 = cResult[6];
    }
    let shortHeightAlert = null;
    if (height <= 580) {
      shortHeightAlert = tmp4.shortHeightAlert;
    }
    if (cResult[7] === tmp4.alert) {
      let tmp16;
      let tmp17;
      let tmp20;
      if (cResult[8] === shortHeightAlert) {
        tmp16 = cResult[9];
      }
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { source: analyticsLocations(5010) };
        const Icon = tmp(1200).Icon;
        const tmp19 = closure_13(Icon, obj2);
        cResult[10] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] !== onClose) {
        let obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: tmp17 };
        const tmp22 = closure_13(tmp(6191).PressableOpacity, obj3);
        cResult[11] = onClose;
        cResult[12] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[12];
      }
      if (cResult[13] === tmp4.closeContainer) {
        let tmp23;
        let tmp27;
        let tmp28;
        let tmp32;
        if (cResult[14] === tmp20) {
          tmp23 = cResult[15];
        }
        const _Symbol4 = Symbol;
        const content = tmp4.content;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function j() {
            return true;
          };
          cResult[16] = fn2;
          tmp27 = fn2;
        } else {
          tmp27 = cResult[16];
        }
        if (cResult[17] !== tmp4.imageHeader) {
          const obj4 = { source: analyticsLocations(9758), style: tmp4.imageHeader };
          const tmp8Result = analyticsLocations(6163);
          const tmp31 = closure_13(tmp8Result, obj4);
          cResult[17] = tmp4.imageHeader;
          cResult[18] = tmp31;
          tmp28 = tmp31;
        } else {
          tmp28 = cResult[18];
        }
        const description = tmp4.description;
        if (cResult[19] !== priceString) {
          const intl3 = tmp(1126).intl;
          const format = intl3.format;
          let tmp33 = priceString;
          const TBsJfQ = tmp(1126).t.TBsJfQ;
          if (priceString == null) {
            tmp33 = closure_12;
          }
          const obj5 = { monthlyPrice: tmp33 };
          const formatResult = format(TBsJfQ, obj5);
          cResult[19] = priceString;
          cResult[20] = formatResult;
          tmp32 = formatResult;
        } else {
          tmp32 = cResult[20];
        }
        if (cResult[21] === tmp4.description) {
          let tmp35;
          let tmp38;
          let tmp41;
          if (cResult[22] === tmp32) {
            tmp35 = cResult[23];
          }
          const _Symbol5 = Symbol;
          const perks = tmp4.perks;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const mapped = items.map((perk, index) => {
              const obj = { perk, isLastPerk: index === items.length - 1 };
              return closure_1_13(closure_1_17, obj, index);
            });
            cResult[24] = mapped;
            tmp38 = mapped;
          } else {
            tmp38 = cResult[24];
          }
          if (cResult[25] !== tmp4.perks) {
            const obj6 = { style: perks, children: tmp38 };
            const tmp44 = closure_13(closure_4, obj6);
            cResult[25] = tmp4.perks;
            cResult[26] = tmp44;
            tmp41 = tmp44;
          } else {
            tmp41 = cResult[26];
          }
          if (cResult[27] === tmp4.content) {
            if (cResult[28] === tmp28) {
              if (cResult[29] === tmp35) {
                let tmp45;
                if (cResult[30] === tmp41) {
                  tmp45 = cResult[31];
                }
                if (cResult[32] === onClose) {
                  if (cResult[33] === tmp10) {
                    if (cResult[34] === tmp23) {
                      if (cResult[35] === tmp45) {
                        let tmp51;
                        if (cResult[36] === tmp16) {
                          tmp51 = cResult[37];
                        }
                        return tmp51;
                      }
                    }
                  }
                }
                const obj7 = { cancelText: tmp11, confirmColor: tmp(1200).ButtonColors.GREEN, confirmText: tmp13, onConfirm: tmp10, onClose, onCancel: onClose, style: tmp16, children: items1 };
                items1 = [tmp23, tmp45];
                const tmp8Result2 = analyticsLocations(5395);
                const tmp54 = closure_14(tmp8Result2, obj7);
                cResult[32] = onClose;
                cResult[33] = tmp10;
                cResult[34] = tmp23;
                cResult[35] = tmp45;
                cResult[36] = tmp16;
                cResult[37] = tmp54;
                tmp51 = tmp54;
              }
            }
          }
          const obj8 = { children: closure_14(closure_4, obj9) };
          obj9 = { style: content, onStartShouldSetResponder: tmp27, children: items2 };
          items2 = [tmp28, tmp35, tmp41];
          const tmp50 = closure_13(closure_5, obj8);
          cResult[27] = tmp4.content;
          cResult[28] = tmp28;
          cResult[29] = tmp35;
          cResult[30] = tmp41;
          cResult[31] = tmp50;
          tmp45 = tmp50;
        }
        const obj10 = { style: description, variant: "text-md/medium", children: tmp32 };
        const tmp37 = closure_13(tmp(5087).Text, obj10);
        cResult[21] = tmp4.description;
        cResult[22] = tmp32;
        cResult[23] = tmp37;
        tmp35 = tmp37;
      }
      const obj11 = { style: tmp4.closeContainer, children: tmp20 };
      const tmp26 = closure_13(closure_4, obj11);
      cResult[13] = tmp4.closeContainer;
      cResult[14] = tmp20;
      cResult[15] = tmp26;
      tmp23 = tmp26;
    }
    const items3 = [tmp4.alert, shortHeightAlert];
    cResult[7] = tmp4.alert;
    cResult[8] = shortHeightAlert;
    cResult[9] = items3;
    tmp16 = items3;
  }
  function onConfirm() {
    let obj2;
    const obj = { location: obj2 };
    obj2 = { section: metroImportAll.STICKER_PREMIUM_TIER_2_UPSELL_MODAL, object: constants.BUTTON_CTA };
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_PROMOTION_OPENED = metroImportDefault.PREMIUM_PROMOTION_OPENED;
    AnalyticsUtilsDefault;
    const merged = Object.assign(analyticsLocation);
    track(PREMIUM_PROMOTION_OPENED, obj);
    const obj3 = { analyticsLocations };
    openPremiumModalDefault(obj3);
  }
  cResult[2] = analyticsLocation;
  cResult[3] = analyticsLocations;
  cResult[4] = onConfirm;
  tmp10 = onConfirm;
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
  const tmp = closure_16();
  const effect = react.useEffect(() => {
    if (!ready.isReady()) {
      let obj = analyticsLocations(dependencyMap[16]);
      obj.wait(() => {
        const obj = analyticsLocations(closure_1_2[17]);
        return obj.loadProducts();
      });
    }
  }, []);
  const tmp5 = analyticsLocations(9369)(closure_10.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  const height = tmp3(1497)().height;
  analyticsLocations = tmp3(6848)().analyticsLocations;
  let obj = {
    cancelText: intl.string(intl4.t.f3Pet9),
    confirmColor: native.ButtonColors.GREEN,
    confirmText: intl2.string(intl4.t.o3Tnif),
    onConfirm() {
      let obj2;
      const obj = { location: obj2 };
      obj2 = { section: metroImportAll.STICKER_PREMIUM_TIER_2_UPSELL_MODAL, object: constants.BUTTON_CTA };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_PROMOTION_OPENED = metroImportDefault.PREMIUM_PROMOTION_OPENED;
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
  const tmp3Result = analyticsLocations(5395);
  intl = intl4.intl;
  intl2 = intl4.intl;
  items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  let obj2 = { style: tmp.closeContainer, children: closure_13(PressableOpacity, obj3) };
  obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: closure_13(Icon, obj4) };
  PressableOpacity = tmp9(6191).PressableOpacity;
  obj4 = { source: analyticsLocations(5010) };
  Icon = tmp9(1200).Icon;
  items1 = [closure_13(closure_4, obj2), ];
  const obj5 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    },
    children: items2
  };
  const obj6 = { source: analyticsLocations(9758), style: tmp.imageHeader };
  const tmp3Result2 = analyticsLocations(6163);
  items2 = [closure_13(tmp3Result2, obj6), , ];
  const obj7 = { style: tmp.description, variant: "text-md/medium", children: format(TBsJfQ, { monthlyPrice: priceString }) };
  const Text = tmp9(5087).Text;
  const intl3 = tmp9(1126).intl;
  format = intl3.format;
  TBsJfQ = tmp9(1126).t.TBsJfQ;
  const tmp13 = closure_5;
  if (priceString == null) {
    priceString = closure_12;
  }
  const obj8 = { children: closure_14(closure_4, obj5) };
  items2[1] = closure_13(Text, obj7);
  const obj9 = {
    style: tmp.perks,
    children: items.map((perk, index) => {
      const obj = { perk, isLastPerk: index === items.length - 1 };
      return closure_1_13(closure_1_17, obj, index);
    })
  };
  items2[2] = closure_13(closure_4, obj9);
  items1[1] = closure_13(tmp13, obj8);
  return closure_14(tmp3Result, obj);
});
const result = size.fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default tmp7;
