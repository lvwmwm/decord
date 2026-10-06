// Module ID: 10253
// Function ID: 10254
// Name: PremiumGiftFeaturesCard
// Dependencies: [109, 19, 17, 10167, 1380, 1097, 21, 588, 4837, 5837, 558, 576, 10241, 504, 8670, 10254, 10255, 8684, 8682, 1127, 4833, 8689, 5282, 8291, 10256, 2017, 10257, 4544, 5292, 2]

// Module 10253 (PremiumGiftFeaturesCard)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl5 from "intl" /* 1127 */;
import StringUtils from "StringUtils" /* 2017 */;
import native from "native" /* 4544 */;
import Text_Text from "Text/Text" /* 4833 */;
import components_Button_Button from "components/Button/Button" /* 5282 */;
import LinearGradientDefault from "LinearGradient" /* 5292 */;
import TextStylesDefault from "TextStyles" /* 5837 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8291 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 8670 */;
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo" /* 8682 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 8684 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8689 */;
import MarketingComponentType from "MarketingComponentType" /* 10241 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10254 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10255 */;
import MarketingComponentHooks from "MarketingComponentHooks" /* 10256 */;
import PremiumGiftPromotionDetailsDefault from "PremiumGiftPromotionDetails" /* 10257 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10167 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import Constants from "Constants" /* 1097 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let marketingComponentByType;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj13;
let obj14;
let obj2;
let obj3;
let obj5;
let obj6;
let obj7;
let obj9;
let unpackModuleId;
let closure_3 = ["premiumType", "onPress", "style", "claimableRewards", "isSelected", "variant"];
const View = react_native.View;
({ PremiumTypes: metroImportDefault, SubscriptionIntervalTypes: metroImportAll } = PremiumConstants);
({ Fonts: c9, ThemeTypes: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { default: obj2, compact: obj3, smallCompact: { paddingVertical: 2 } };
obj2 = { paddingVertical: nativeDefault.space.PX_8 };
obj3 = { paddingVertical: nativeDefault.space.PX_4 };
let obj4 = { default: obj5, compact: obj6, smallCompact: obj7 };
obj5 = { marginTop: nativeDefault.space.PX_24 };
obj6 = { marginTop: nativeDefault.space.PX_12 };
obj7 = { marginTop: nativeDefault.space.PX_8 };
let obj8 = { default: obj9, compact: obj10, smallCompact: obj11 };
obj9 = { marginTop: nativeDefault.space.PX_8 };
obj10 = { marginTop: nativeDefault.space.PX_12 };
obj11 = { marginTop: nativeDefault.space.PX_8 };
let obj12 = { default: obj13, compact: obj14, smallCompact: { marginTop: nativeDefault.space.PX_8 } };
obj13 = { marginTop: nativeDefault.space.PX_24 };
obj14 = { marginTop: nativeDefault.space.PX_12 };
({ marginTop: nativeDefault.space.PX_8 });
let closure_17 = createStyles.createStyles(() => {
  let obj2;
  obj = { card: obj2, logo: { marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 }, pricing: { maxWidth: 140, marginStart: nativeDefault.space.PX_24 }, featureTitle: { marginStart: nativeDefault.space.PX_24 }, features: { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 }, button: { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 }, featureIcon: { width: 24, height: 24 }, featureText: obj8, promotionDetailsContainer: { marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm } };
  obj2 = { justifyContent: "flex-start", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  ({ marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 });
  ({ maxWidth: 140, marginStart: nativeDefault.space.PX_24 });
  ({ marginStart: nativeDefault.space.PX_24 });
  ({ marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 });
  obj8 = { marginStart: -8 };
  ({ marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 });
  const tmp2 = TextStylesDefault;
  const merged1 = Object.assign(tmp2(constants2.PRIMARY_NORMAL, nativeDefault.colors.WHITE, 16));
  ({ marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Button;
  let arr;
  let claimableRewards;
  let isSelected;
  let items1;
  let items2;
  let obj10;
  let onPress;
  let premiumType;
  let style;
  let tmp14;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let variant;
  obj = react2;
  const cResult = obj.c(66);
  if (cResult[0] !== arg0) {
    ({ premiumType, onPress, style, claimableRewards, isSelected, variant } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = claimableRewards;
    cResult[2] = onPress;
    cResult[3] = premiumType;
    cResult[4] = tmp12;
    cResult[5] = style;
    cResult[6] = isSelected;
    cResult[7] = variant;
    tmp9 = variant;
    tmp8 = isSelected;
    tmp7 = style;
    tmp6 = tmp12;
    tmp5 = premiumType;
    tmp4 = onPress;
    arr = claimableRewards;
  } else {
    arr = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
    tmp9 = cResult[7];
  }
  let str = "default";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    const fn = function w() {
      marketingComponentByType = marketingComponentByType.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
      let prop = null;
      if (null != marketingComponentByType) {
        prop = null;
        if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
          prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
        }
      }
      return prop;
    };
    cResult[8] = items;
    cResult[9] = fn;
    tmp15 = fn;
    tmp14 = items;
  } else {
    tmp14 = cResult[8];
    tmp15 = cResult[9];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp14, tmp15);
  const tmp19 = closure_17(null != arr && 1 === arr.length);
  const tmp21 = usePremiumFeaturesDefault(tmp5);
  const tmp22 = usePremiumProductPricingStringDefault(tmp5, metroImportAll.MONTH);
  const tmp23 = usePremiumProductPricingStringDefault(tmp5, metroImportAll.YEAR);
  const tmp24 = useShouldShowGiftingPromotionDecoDefault(tmp5) && null != arr && arr.length > 0;
  if (cResult[10] === tmp7) {
    let tmp25;
    if (cResult[11] === tmp19.card) {
      tmp25 = cResult[12];
    }
    if (cResult[13] === tmp7) {
      let tmp26;
      let tmp27;
      if (cResult[14] === tmp19.card) {
        tmp26 = cResult[15];
      }
      if (cResult[16] !== tmp5) {
        const obj2 = { premiumType: tmp5 };
        const tmp29 = unpackModuleId(PremiumFeaturesWumpusDefault, obj2);
        cResult[16] = tmp5;
        cResult[17] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[17];
      }
      if (cResult[18] === tmp5) {
        let tmp30;
        if (cResult[19] === tmp19.logo) {
          tmp30 = cResult[20];
        }
        if (cResult[21] === tmp19.pricing) {
          let tmp35;
          if (cResult[22] === obj8[str]) {
            tmp35 = cResult[23];
          }
          if (cResult[24] === tmp22) {
            let tmp36;
            if (cResult[25] === tmp23) {
              tmp36 = cResult[26];
            }
            if (cResult[27] === tmp35) {
              let tmp38;
              if (cResult[28] === tmp36) {
                tmp38 = cResult[29];
              }
              if (cResult[30] === tmp19.featureTitle) {
                let tmp43;
                let tmp44;
                let tmp46;
                if (cResult[31] === obj4[str]) {
                  tmp43 = cResult[32];
                }
                const _Symbol = Symbol;
                if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(1127).intl;
                  const stringResult = intl2.string(intl5.t.JgsVht);
                  cResult[33] = stringResult;
                  tmp44 = stringResult;
                } else {
                  tmp44 = cResult[33];
                }
                if (cResult[34] !== tmp43) {
                  const obj3 = { style: tmp43, variant: "heading-sm/bold", color: "text-overlay-light", children: tmp44 };
                  const tmp48 = unpackModuleId(Text_Text.Text, obj3);
                  cResult[34] = tmp43;
                  cResult[35] = tmp48;
                  tmp46 = tmp48;
                } else {
                  tmp46 = cResult[35];
                }
                if (cResult[36] === tmp21) {
                  if (cResult[37] === tmp19.featureIcon) {
                    if (cResult[38] === tmp19.featureText) {
                      if (cResult[39] === tmp19.features) {
                        let tmp51;
                        let tmp54;
                        let tmp58;
                        let stringResult1;
                        if (cResult[40] === obj[str]) {
                          tmp51 = cResult[41];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                          obj4 = { style: { flexGrow: 1 } };
                          const tmp57 = unpackModuleId(View, obj4);
                          cResult[42] = tmp57;
                          tmp54 = tmp57;
                        } else {
                          tmp54 = cResult[42];
                        }
                        if (cResult[43] === arr) {
                          if (cResult[44] === stateFromStores) {
                            if (cResult[45] === (null != arr && 1 === arr.length)) {
                              if (cResult[46] === (undefined === tmp8 || tmp8)) {
                                if (cResult[47] === tmp4) {
                                  if (cResult[48] === tmp5) {
                                    if (cResult[49] === tmp24) {
                                      if (cResult[50] === tmp19.button) {
                                        if (cResult[51] === str) {
                                          tmp58 = cResult[52];
                                        }
                                        if (cResult[53] === tmp5) {
                                          if (cResult[54] === tmp6) {
                                            if (cResult[55] === tmp38) {
                                              if (cResult[56] === tmp46) {
                                                if (cResult[57] === tmp51) {
                                                  if (cResult[58] === tmp58) {
                                                    if (cResult[59] === tmp26) {
                                                      if (cResult[60] === tmp27) {
                                                        let tmp68;
                                                        if (cResult[61] === tmp30) {
                                                          tmp68 = cResult[62];
                                                        }
                                                        if (cResult[63] === tmp68) {
                                                          let tmp75;
                                                          if (cResult[64] === tmp25) {
                                                            tmp75 = cResult[65];
                                                          }
                                                          return tmp75;
                                                        }
                                                        const obj5 = { style: tmp25, children: tmp68 };
                                                        const tmp78 = unpackModuleId(View, obj5);
                                                        cResult[63] = tmp68;
                                                        cResult[64] = tmp25;
                                                        cResult[65] = tmp78;
                                                        tmp75 = tmp78;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj6 = { premiumType: tmp5, style: tmp26, children: items1 };
                                        const tmp20Result = PremiumFeaturesBackgroundDefault;
                                        const merged = Object.assign(tmp6);
                                        items1 = [tmp27, tmp30, tmp38, tmp46, tmp51, tmp54, tmp58];
                                        const tmp74 = closure_12(tmp20Result, obj6);
                                        cResult[53] = tmp5;
                                        cResult[54] = tmp6;
                                        cResult[55] = tmp38;
                                        cResult[56] = tmp46;
                                        cResult[57] = tmp51;
                                        cResult[58] = tmp58;
                                        cResult[59] = tmp26;
                                        cResult[60] = tmp27;
                                        cResult[61] = tmp30;
                                        cResult[62] = tmp74;
                                        tmp68 = tmp74;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (tmp24) {
                          if (null != stateFromStores) {
                            let tmp60Result;
                            if (tmp5 === metroImportDefault.TIER_2) {
                              const obj7 = { config: stateFromStores, numClaimableRewards: arr.length, isLargeSize: null != arr && 1 === arr.length, isSelected: undefined === tmp8 || tmp8, onPress: tmp4 };
                              tmp60Result = unpackModuleId(closure_18, obj7);
                            }
                            cResult[43] = arr;
                            cResult[44] = stateFromStores;
                            cResult[45] = null != arr && 1 === arr.length;
                            cResult[46] = undefined === tmp8 || tmp8;
                            cResult[47] = tmp4;
                            cResult[48] = tmp5;
                            cResult[49] = tmp24;
                            cResult[50] = tmp19.button;
                            cResult[51] = str;
                            cResult[52] = tmp60Result;
                            tmp58 = tmp60Result;
                          }
                        }
                        const obj9 = { style: items2, children: unpackModuleId(Button, obj10) };
                        items2 = [tmp19.button, obj12[str]];
                        Button = tmp(5282).Button;
                        const tmp61 = View;
                        if (tmp5 === metroImportDefault.TIER_0) {
                          const intl4 = tmp(1127).intl;
                          stringResult1 = intl4.string(tmp(1127).t.rk4Uu8);
                        } else {
                          const intl3 = tmp(1127).intl;
                          stringResult1 = intl3.string(tmp(1127).t.Ve9Ge6);
                        }
                        obj10 = { variant: "primary-overlay", text: stringResult1, onPress: tmp4 };
                        tmp60Result = tmp60(tmp61, obj9);
                      }
                    }
                  }
                }
                const obj11 = { style: tmp19.features, features: tmp21, iconStyle: null, labelStyle: null, rowStyle: obj[str] };
                ({ featureIcon: obj8.iconStyle, featureText: obj8.labelStyle } = tmp19);
                const tmp53 = unpackModuleId(PremiumFeatureListDefault, obj11);
                cResult[36] = tmp21;
                cResult[37] = tmp19.featureIcon;
                cResult[38] = tmp19.featureText;
                cResult[39] = tmp19.features;
                cResult[40] = obj[str];
                cResult[41] = tmp53;
                tmp51 = tmp53;
              }
              const items3 = [tmp19.featureTitle, obj4[str]];
              cResult[30] = tmp19.featureTitle;
              cResult[31] = obj4[str];
              cResult[32] = items3;
              tmp43 = items3;
            }
            obj12 = { style: tmp35, variant: "text-sm/medium", color: "text-overlay-light", children: tmp36 };
            const tmp40 = unpackModuleId(Text_Text.Text, obj12);
            cResult[27] = tmp35;
            cResult[28] = tmp36;
            cResult[29] = tmp40;
            tmp38 = tmp40;
          }
          const intl = tmp(1127).intl;
          const obj13 = { monthlyPrice: tmp22, yearlyPrice: tmp23 };
          const formatResult = intl.format(intl5.t.Ob6fwp, obj13);
          cResult[24] = tmp22;
          cResult[25] = tmp23;
          cResult[26] = formatResult;
          tmp36 = formatResult;
        }
        const items4 = [tmp19.pricing, obj8[str]];
        cResult[21] = tmp19.pricing;
        cResult[22] = obj8[str];
        cResult[23] = items4;
        tmp35 = items4;
      }
      const obj14 = { style: tmp19.logo, premiumType: tmp5 };
      const tmp32 = unpackModuleId(PremiumFeaturesLogoDefault, obj14);
      cResult[18] = tmp5;
      cResult[19] = tmp19.logo;
      cResult[20] = tmp32;
      tmp30 = tmp32;
    }
    const items5 = [tmp19.card, tmp7];
    cResult[13] = tmp7;
    cResult[14] = tmp19.card;
    cResult[15] = items5;
    tmp26 = items5;
  }
  const items6 = [tmp19.card, tmp7];
  cResult[10] = tmp7;
  cResult[11] = tmp19.card;
  cResult[12] = items6;
  tmp25 = items6;
}) : ((variant) => {
  let Button;
  let claimableRewards;
  let intl;
  let intl2;
  let isSelected;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let onPress;
  let premiumType;
  let stringResult;
  let style;
  ({ premiumType, onPress, style, claimableRewards, isSelected } = variant);
  if (isSelected === undefined) {
    isSelected = true;
  }
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  const merged = Object.assign(variant, Object.assign({ premiumType: 0, onPress: 0, style: 0, claimableRewards: 0, isSelected: 0, variant: 0 }));
  obj = get_initialized;
  const items = [PromotionsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
      }
    }
    return prop;
  });
  const tmp6 = closure_17(null != claimableRewards && 1 === claimableRewards.length);
  const tmp8 = usePremiumFeaturesDefault(premiumType);
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, metroImportAll.MONTH);
  const tmp10 = usePremiumProductPricingStringDefault(premiumType, metroImportAll.YEAR);
  const obj2 = { style: items1, children: null };
  items1 = [tmp6.card, style];
  const obj3 = { premiumType, style: items2 };
  items2 = [tmp6.card, style];
  const tmp11 = useShouldShowGiftingPromotionDecoDefault(premiumType) && null != claimableRewards && claimableRewards.length > 0;
  const tmp7Result = PremiumFeaturesBackgroundDefault;
  const merged1 = Object.assign(merged);
  const items3 = [unpackModuleId(PremiumFeaturesWumpusDefault, { premiumType }), , , , , , ];
  obj4 = { style: tmp6.logo, premiumType };
  items3[1] = unpackModuleId(PremiumFeaturesLogoDefault, obj4);
  const obj5 = { style: items4, variant: "text-sm/medium", color: "text-overlay-light", children: intl.format(intl5.t.Ob6fwp, { monthlyPrice: tmp9, yearlyPrice: tmp10 }) };
  items4 = [tmp6.pricing, obj8[str]];
  const Text = tmp2(4833).Text;
  intl = tmp2(1127).intl;
  items3[2] = unpackModuleId(Text, obj5);
  const obj6 = { style: items5, variant: "heading-sm/bold", color: "text-overlay-light", children: intl2.string(intl5.t.JgsVht) };
  items5 = [tmp6.featureTitle, obj4[str]];
  const Text2 = tmp2(4833).Text;
  intl2 = tmp2(1127).intl;
  items3[3] = unpackModuleId(Text2, obj6);
  const obj7 = { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] };
  items3[4] = unpackModuleId(PremiumFeatureListDefault, obj7);
  items3[5] = unpackModuleId(View, { style: { flexGrow: 1 } });
  const tmp14 = closure_12;
  if (tmp11) {
    if (null != stateFromStores) {
      let tmp12Result;
      if (premiumType === metroImportDefault.TIER_2) {
        obj8 = { config: stateFromStores, numClaimableRewards: claimableRewards.length, isLargeSize: null != claimableRewards && 1 === claimableRewards.length, isSelected, onPress };
        tmp12Result = tmp12(closure_18, obj8);
      }
      items3[6] = tmp12Result;
      obj3.children = items3;
      obj2.children = tmp14(tmp7Result, obj3);
      return unpackModuleId(View, obj2);
    }
  }
  const obj9 = { style: items6, children: unpackModuleId(Button, { variant: "primary-overlay", text: stringResult, onPress }) };
  items6 = [tmp6.button, obj12[str]];
  Button = tmp2(5282).Button;
  if (premiumType === metroImportDefault.TIER_0) {
    const intl4 = tmp2(1127).intl;
    stringResult = intl4.string(tmp2(1127).t.rk4Uu8);
  } else {
    const intl3 = tmp2(1127).intl;
    stringResult = intl3.string(tmp2(1127).t.Ve9Ge6);
  }
  tmp12Result = tmp12(tmp13, obj9);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((isLargeSize) => {
  let config;
  let first;
  let isSelected;
  let items1;
  let mobileBody;
  let numClaimableRewards;
  let obj5;
  let onPress;
  let tmp7;
  obj = react2;
  const cResult = obj.c(18);
  ({ config, numClaimableRewards, isSelected, onPress } = isLargeSize);
  const tmp4 = closure_17(isLargeSize.isLargeSize);
  const obj2 = MarketingComponentHooks;
  const themeAndReducedMotionAwareAssetUrl = obj2.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  const promotionDetailsContainer = tmp4.promotionDetailsContainer;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [4294967102, 4294967053];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== config.header) {
    let header;
    const tmpResult = StringUtils;
    if (tmpResult.isNullOrEmpty(config.header)) {
      const intl = tmp(1127).intl;
      header = intl.string(tmp(1127).t.OEtqpm);
    } else {
      header = config.header;
    }
    cResult[1] = config.header;
    cResult[2] = header;
    tmp7 = header;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === config.mobileBody) {
    let tmp8;
    if (cResult[4] === numClaimableRewards) {
      tmp8 = cResult[5];
    }
    if (cResult[6] === themeAndReducedMotionAwareAssetUrl) {
      if (cResult[7] === isSelected) {
        if (cResult[8] === tmp7) {
          let tmp9;
          let tmp13;
          let tmp15;
          if (cResult[9] === tmp8) {
            tmp9 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1127).intl;
            const stringResult = intl3.string(intl5.t.Ve9Ge6);
            cResult[11] = stringResult;
            tmp13 = stringResult;
          } else {
            tmp13 = cResult[11];
          }
          if (cResult[12] !== onPress) {
            const obj3 = { variant: "primary-overlay", text: tmp13, onPress };
            const tmp17 = unpackModuleId(components_Button_Button.Button, obj3);
            cResult[12] = onPress;
            cResult[13] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[13];
          }
          if (cResult[14] === tmp4.promotionDetailsContainer) {
            if (cResult[15] === tmp9) {
              let tmp18;
              if (cResult[16] === tmp15) {
                tmp18 = cResult[17];
              }
              return tmp18;
            }
          }
          obj4 = { theme: constants3.DARK, children: closure_12(LinearGradientDefault, obj5) };
          const ThemeContextProvider = tmp(4544).ThemeContextProvider;
          obj5 = { style: promotionDetailsContainer, colors: first, children: items1 };
          items1 = [tmp9, tmp15];
          const tmp23 = unpackModuleId(ThemeContextProvider, obj4);
          cResult[14] = tmp4.promotionDetailsContainer;
          cResult[15] = tmp9;
          cResult[16] = tmp15;
          cResult[17] = tmp23;
          tmp18 = tmp23;
        }
      }
    }
    const obj6 = { imageUrl: themeAndReducedMotionAwareAssetUrl, title: tmp7, subtitle: tmp8, subtitleColor: "text-default", shouldAnimate: isSelected };
    const tmp12 = unpackModuleId(PremiumGiftPromotionDetailsDefault, obj6);
    cResult[6] = themeAndReducedMotionAwareAssetUrl;
    cResult[7] = isSelected;
    cResult[8] = tmp7;
    cResult[9] = tmp8;
    cResult[10] = tmp12;
    tmp9 = tmp12;
  }
  const tmpResult2 = StringUtils;
  if (tmpResult2.isNullOrEmpty(config.mobileBody)) {
    const intl2 = tmp(1127).intl;
    const obj7 = { availableCount: numClaimableRewards };
    mobileBody = intl2.formatToPlainString(tmp(1127).t["2h5M+X"], obj7);
  } else {
    mobileBody = config.mobileBody;
  }
  cResult[3] = config.mobileBody;
  cResult[4] = numClaimableRewards;
  cResult[5] = mobileBody;
  tmp8 = mobileBody;
}) : ((config) => {
  let header;
  let intl3;
  let isSelected;
  let items;
  let mobileBody;
  let numClaimableRewards;
  let obj3;
  let onPress;
  let tmp6;
  let tmp7;
  config = config.config;
  ({ numClaimableRewards, isSelected, onPress } = config);
  const tmp = closure_17(config.isLargeSize);
  obj = MarketingComponentHooks;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  const obj2 = { theme: constants3.DARK, children: tmp6(tmp7, obj3) };
  const ThemeContextProvider = native.ThemeContextProvider;
  obj3 = { style: tmp.promotionDetailsContainer, colors: [4294967102, 4294967053], children: items };
  obj4 = { imageUrl: themeAndReducedMotionAwareAssetUrl, title: header, subtitle: mobileBody, subtitleColor: "text-default", shouldAnimate: isSelected };
  tmp7 = LinearGradientDefault;
  const tmp8 = PremiumGiftPromotionDetailsDefault;
  const obj5 = StringUtils;
  tmp6 = closure_12;
  if (obj5.isNullOrEmpty(config.header)) {
    const intl = tmp2(1127).intl;
    header = intl.string(tmp2(1127).t.OEtqpm);
  } else {
    header = config.header;
  }
  const tmp2Result = StringUtils;
  if (tmp2Result.isNullOrEmpty(config.mobileBody)) {
    const intl2 = tmp2(1127).intl;
    const obj6 = { availableCount: numClaimableRewards };
    mobileBody = intl2.formatToPlainString(tmp2(1127).t["2h5M+X"], obj6);
  } else {
    mobileBody = config.mobileBody;
  }
  items = [unpackModuleId(tmp8, obj4), ];
  const obj7 = { variant: "primary-overlay", text: intl3.string(intl5.t.Ve9Ge6), onPress };
  const Button = tmp2(5282).Button;
  intl3 = tmp2(1127).intl;
  items[1] = unpackModuleId(Button, obj7);
  return unpackModuleId(ThemeContextProvider, obj2);
});
const memoResult = react.memo(tmp5);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;
