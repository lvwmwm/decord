// Module ID: 10258
// Function ID: 10259
// Name: PremiumFeatureUpsell
// Dependencies: [109, 19, 17, 1378, 1078, 7708, 21, 8133, 4450, 1119, 4790, 580, 558, 568, 10259, 9457, 8137, 9465, 8130, 10260, 1181, 10261, 10257, 4786, 8970, 5230, 1098, 5219, 5223, 7441, 9719, 8575, 4529, 1245, 10262, 2]

// Module 10258 (PremiumFeatureUpsell)
import nativeDefault from "native" /* 580 */;
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import PremiumUtils from "PremiumUtils" /* 4450 */;
import spring from "spring" /* 5219 */;
import springPresets from "springPresets" /* 5223 */;
import LinearGradientDefault from "LinearGradient" /* 5230 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8130 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8133 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getPremiumUpsellLabel(TIER_0, featureName, cResult) {
  const premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(TIER_0);
  if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl6 = tmp(1119).intl;
    const obj2 = { nitroTierName: premiumTypeDisplayName, onClick: cResult };
    return intl6.format(tmp(1119).t["tw/SSq"], obj2);
  } else if (tmp(8133).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl5 = tmp(1119).intl;
    const obj3 = { nitroTierName: premiumTypeDisplayName, onClick: cResult };
    return intl5.format(tmp(1119).t.gMVjeS, obj3);
  } else if (tmp(8133).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
    const intl4 = tmp(1119).intl;
    const obj4 = { nitroTierName: premiumTypeDisplayName, onClick: cResult };
    return intl4.format(tmp(1119).t.eontIh, obj4);
  } else if (tmp(8133).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl3 = tmp(1119).intl;
    const obj5 = { maxFileSize: tmp(4450).getMaxFileSizeForPremiumType(TIER_0), nitroTierName: premiumTypeDisplayName, onClick: cResult };
    return intl3.format(tmp(1119).t.zzyLEK, obj5);
  } else if (tmp(8133).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl2 = tmp(1119).intl;
    const obj6 = { nitroTierName: premiumTypeDisplayName, onClick: cResult };
    return intl2.format(tmp(1119).t.lyxfbj, obj6);
  } else if (tmp(8133).EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl = tmp(1119).intl;
    const obj7 = { onClick: cResult };
    return intl.format(tmp(1119).t.x2dQxN, obj7);
  }
}
let closure_3 = ["shouldShow"];
get_ActivityIndicator = fn(17);
({ StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const PremiumConstants = fn(1378);
({ PremiumSubscriptionSKUs: closure_8, PremiumTypes: closure_9, PremiumUpsellTypes: c10 } = PremiumConstants);
const AnalyticEvents = fn(1078).AnalyticEvents;
const Gradients = fn(7708).Gradients;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4790);
let closure_16 = createStyles.createStyles((arg0) => {
  const obj = { container: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_12, justifyContent: "space-between" }, containerShadow: null, nitroWheel: null, labelContainer: null, text: null, nitroWheelButton: null, nitroWheelIcon: null, nitroWheelDisabled: null, button: null, gradient: null };
  const obj3 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  obj3.shadowColor = arg0 ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2 : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
  obj3.shadowOpacity = 0.6;
  obj.containerShadow = obj3;
  const size = { width: 20, height: 20, marginEnd: tmp(580).space.PX_4 };
  obj.nitroWheel = size;
  const obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_12, justifyContent: "space-between" };
  obj.labelContainer = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 };
  obj.text = { flexShrink: 1, flexWrap: "wrap" };
  obj.nitroWheelButton = { marginStart: -2, width: 20, height: 20 };
  obj.nitroWheelIcon = { marginEnd: 4 };
  obj.nitroWheelDisabled = { opacity: 0.6 };
  const obj4 = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 };
  obj.button = { alignSelf: "center", borderRadius: nativeDefault.radii.round };
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.gradient = {};
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((featureName) => {
  const cResult = featureName(568).c(49);
  featureName = featureName.featureName;
  ({ showShadow, style } = featureName);
  let containerShadow = undefined === showShadow || showShadow;
  if (cResult[0] !== featureName) {
    const upsellType = tmp(10259).getUpsellType(featureName);
    cResult[0] = featureName;
    cResult[1] = upsellType;
    let tmp4 = upsellType;
    let tmpResult = tmp(10259);
  } else {
    tmp4 = cResult[1];
  }
  let obj = featureName(568);
  const premiumUpsellConfig = featureName(9457).usePremiumUpsellConfig(tmp4);
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp7 = closure_16(useTier0UpsellContent);
  dependencyMap = tmp7;
  if (cResult[2] !== featureName) {
    let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(8137).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
    if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(9465).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
      const tmpResult7 = tmp(9465);
    }
    cResult[2] = featureName;
    cResult[3] = mobileEmojiPickerUpsellRestyleEnabledForFeature;
    let tmp8 = mobileEmojiPickerUpsellRestyleEnabledForFeature;
    const tmpResult6 = tmp(8137);
  } else {
    tmp8 = cResult[3];
  }
  closure_3 = tmp8;
  const tmp11 = useTier0UpsellContent ? closure_9.TIER_0 : closure_9.TIER_2;
  if (cResult[4] !== featureName) {
    const fn = function b() {
      return openPremiumUpsellActionSheetDefault(featureName);
    };
    cResult[4] = featureName;
    cResult[5] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === featureName) {
    if (cResult[7] === tmp11) {
      if (cResult[8] === tmp12) {
        let tmp13 = cResult[9];
      }
      if (cResult[10] !== featureName) {
        const analyticsPage = tmp(10259).getAnalyticsPage(featureName);
        cResult[10] = featureName;
        cResult[11] = analyticsPage;
        let tmp15 = analyticsPage;
        const tmpResult8 = tmp(10259);
      } else {
        tmp15 = cResult[11];
      }
      const tmp18 = useTier0UpsellContent(10260)(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, tmp15);
      const loading = tmp18.loading;
      const onPress = tmp18.onPress;
      if (containerShadow) {
        containerShadow = tmp7.containerShadow;
      }
      if (cResult[12] === style) {
        if (cResult[13] === tmp7.container) {
          if (cResult[14] === containerShadow) {
            let tmp19 = cResult[15];
          }
          if (cResult[16] === tmp7.nitroWheel) {
            if (cResult[17] === tmp8) {
              if (cResult[18] === useTier0UpsellContent) {
                let tmp20 = cResult[19];
              }
              if (cResult[20] === tmp13) {
                if (cResult[21] === tmp7.text) {
                  let tmp25 = cResult[22];
                }
                if (cResult[23] === tmp7.labelContainer) {
                  if (cResult[24] === tmp20) {
                    if (cResult[25] === tmp25) {
                      let tmp27 = cResult[26];
                    }
                    if (cResult[27] !== useTier0UpsellContent) {
                      const intl = tmp(1119).intl;
                      const string = intl.string;
                      let cM8bbx = tmp(1119).t;
                      if (useTier0UpsellContent) {
                        cM8bbx = cM8bbx.cM8bbx;
                        let stringResult = string(cM8bbx);
                      } else {
                        stringResult = string(cM8bbx["8x0jKT"]);
                      }
                      cResult[27] = useTier0UpsellContent;
                      cResult[28] = stringResult;
                    } else {
                      if (cResult[29] === loading) {
                        if (cResult[30] === tmp7.nitroWheelButton) {
                          if (cResult[31] === tmp7.nitroWheelDisabled) {
                            if (cResult[32] === tmp7.nitroWheelIcon) {
                              if (cResult[33] === tmp8) {
                                let tmp33 = cResult[34];
                              }
                              if (cResult[35] === tmp7.gradient) {
                                if (cResult[36] === useTier0UpsellContent) {
                                  let tmp34 = cResult[37];
                                }
                                if (cResult[38] === loading) {
                                  if (cResult[39] === onPress) {
                                    if (cResult[40] === tmp7.button) {
                                      if (cResult[41] === tmp30) {
                                        if (cResult[42] === tmp33) {
                                          if (cResult[43] === tmp34) {
                                            let tmp36 = cResult[44];
                                          }
                                          if (cResult[45] === tmp27) {
                                            if (cResult[46] === tmp36) {
                                              if (cResult[47] === tmp19) {
                                                let tmp38 = cResult[48];
                                              }
                                              return tmp38;
                                            }
                                          }
                                          class M {
                                            constructor() {
                                              tmp = jsx;
                                              tmp2 = closure_0;
                                              tmp3 = closure_2;
                                              if (closure_3) {
                                                obj1 = { size: "xxs", color: null, style: null };
                                                tmp5 = closure_1;
                                                tmp6 = closure_2;
                                                obj1.color = closure_1(closure_2[11]).colors.WHITE;
                                                items = [, ];
                                                items[0] = closure_2.nitroWheelIcon;
                                                nitroWheelDisabled2 = loading;
                                                if (loading) {
                                                  nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
                                                }
                                                items[1] = nitroWheelDisabled2;
                                                obj1.style = items;
                                                tmpResult = tmp(tmp2(tmp3[24]).NitroWheelIcon, obj1);
                                              } else {
                                                items1 = [, ];
                                                items1[0] = closure_2.nitroWheelButton;
                                                nitroWheelDisabled = loading;
                                                if (loading) {
                                                  nitroWheelDisabled = closure_2.nitroWheelDisabled;
                                                }
                                                obj = { style: null };
                                                items1[1] = nitroWheelDisabled;
                                                obj.style = items1;
                                                tmpResult = tmp(tmp2(tmp3[20]).NitroWheel, obj);
                                              }
                                              return tmpResult;
                                            }
                                          }
                                          let obj2 = { style: tmp19, children: null };
                                          let items = [tmp27, tmp36];
                                          obj2.children = items;
                                          const tmp40 = closure_14(closure_7, obj2);
                                          cResult[45] = tmp27;
                                          cResult[46] = tmp36;
                                          cResult[47] = tmp19;
                                          cResult[48] = tmp40;
                                          tmp38 = tmp40;
                                        }
                                      }
                                    }
                                  }
                                }
                                class M {
                                  constructor() {
                                    tmp = jsx;
                                    tmp2 = closure_0;
                                    tmp3 = closure_2;
                                    if (closure_3) {
                                      obj1 = { size: "xxs", color: null, style: null };
                                      tmp5 = closure_1;
                                      tmp6 = closure_2;
                                      obj1.color = closure_1(closure_2[11]).colors.WHITE;
                                      items = [, ];
                                      items[0] = closure_2.nitroWheelIcon;
                                      nitroWheelDisabled2 = loading;
                                      if (loading) {
                                        nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
                                      }
                                      items[1] = nitroWheelDisabled2;
                                      obj1.style = items;
                                      tmpResult = tmp(tmp2(tmp3[24]).NitroWheelIcon, obj1);
                                    } else {
                                      items1 = [, ];
                                      items1[0] = closure_2.nitroWheelButton;
                                      nitroWheelDisabled = loading;
                                      if (loading) {
                                        nitroWheelDisabled = closure_2.nitroWheelDisabled;
                                      }
                                      obj = { style: null };
                                      items1[1] = nitroWheelDisabled;
                                      obj.style = items1;
                                      tmpResult = tmp(tmp2(tmp3[20]).NitroWheel, obj);
                                    }
                                    return tmpResult;
                                  }
                                }
                                const obj3 = { disabled: loading, shrink: true, style: tmp7.button, size: tmp(1181).ButtonSizes.XSMALL, onPress, text: tmp30, color: tmp(1181).ButtonColors.GREEN, renderIcon: tmp33, renderLinearGradient: tmp34 };
                                const tmp37 = closure_13(tmp(1181).ShinyButton, obj3);
                                cResult[38] = loading;
                                cResult[39] = onPress;
                                cResult[40] = tmp7.button;
                                cResult[41] = tmp30;
                                cResult[42] = tmp33;
                                cResult[43] = tmp34;
                                cResult[44] = tmp37;
                                tmp36 = tmp37;
                              }
                              class M {
                                constructor() {
                                  tmp = jsx;
                                  tmp2 = closure_0;
                                  tmp3 = closure_2;
                                  if (closure_3) {
                                    obj1 = { size: "xxs", color: null, style: null };
                                    tmp5 = closure_1;
                                    tmp6 = closure_2;
                                    obj1.color = closure_1(closure_2[11]).colors.WHITE;
                                    items = [, ];
                                    items[0] = closure_2.nitroWheelIcon;
                                    nitroWheelDisabled2 = loading;
                                    if (loading) {
                                      nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
                                    }
                                    items[1] = nitroWheelDisabled2;
                                    obj1.style = items;
                                    tmpResult = tmp(tmp2(tmp3[24]).NitroWheelIcon, obj1);
                                  } else {
                                    items1 = [, ];
                                    items1[0] = closure_2.nitroWheelButton;
                                    nitroWheelDisabled = loading;
                                    if (loading) {
                                      nitroWheelDisabled = closure_2.nitroWheelDisabled;
                                    }
                                    obj = { style: null };
                                    items1[1] = nitroWheelDisabled;
                                    obj.style = items1;
                                    tmpResult = tmp(tmp2(tmp3[20]).NitroWheel, obj);
                                  }
                                  return tmpResult;
                                }
                              }
                              cResult[35] = tmp7.gradient;
                              cResult[36] = useTier0UpsellContent;
                              cResult[37] = tmp35;
                              tmp34 = tmp35;
                            }
                          }
                        }
                      }
                      class M {
                        constructor() {
                          tmp = jsx;
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          if (closure_3) {
                            obj1 = { size: "xxs", color: null, style: null };
                            tmp5 = closure_1;
                            tmp6 = closure_2;
                            obj1.color = closure_1(closure_2[11]).colors.WHITE;
                            items = [, ];
                            items[0] = closure_2.nitroWheelIcon;
                            nitroWheelDisabled2 = loading;
                            if (loading) {
                              nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
                            }
                            items[1] = nitroWheelDisabled2;
                            obj1.style = items;
                            tmpResult = tmp(tmp2(tmp3[24]).NitroWheelIcon, obj1);
                          } else {
                            items1 = [, ];
                            items1[0] = closure_2.nitroWheelButton;
                            nitroWheelDisabled = loading;
                            if (loading) {
                              nitroWheelDisabled = closure_2.nitroWheelDisabled;
                            }
                            obj = { style: null };
                            items1[1] = nitroWheelDisabled;
                            obj.style = items1;
                            tmpResult = tmp(tmp2(tmp3[20]).NitroWheel, obj);
                          }
                          return tmpResult;
                        }
                      }
                      cResult[29] = loading;
                      cResult[30] = tmp7.nitroWheelButton;
                      cResult[31] = tmp7.nitroWheelDisabled;
                      cResult[32] = tmp7.nitroWheelIcon;
                      cResult[33] = tmp8;
                      cResult[34] = M;
                      tmp33 = M;
                    }
                  }
                }
                const obj4 = { style: tmp7.labelContainer, children: null };
                let items1 = [tmp20, tmp25];
                obj4.children = items1;
                const tmp29 = closure_14(closure_7, obj4);
                cResult[23] = tmp7.labelContainer;
                cResult[24] = tmp20;
                cResult[25] = tmp25;
                cResult[26] = tmp29;
                tmp27 = tmp29;
              }
              const obj5 = { style: tmp7.text, variant: "text-sm/medium", children: tmp13 };
              const tmp26 = closure_13(tmp(4786).Text, obj5);
              cResult[20] = tmp13;
              cResult[21] = tmp7.text;
              cResult[22] = tmp26;
              tmp25 = tmp26;
            }
          }
          if (tmp8) {
            cResult[16] = tmp7.nitroWheel;
            class M {
              constructor() {
                tmp = jsx;
                tmp2 = closure_0;
                tmp3 = closure_2;
                if (closure_3) {
                  obj1 = { size: "xxs", color: null, style: null };
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  obj1.color = closure_1(closure_2[11]).colors.WHITE;
                  items = [, ];
                  items[0] = closure_2.nitroWheelIcon;
                  nitroWheelDisabled2 = loading;
                  if (loading) {
                    nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
                  }
                  items[1] = nitroWheelDisabled2;
                  obj1.style = items;
                  tmpResult = tmp(tmp2(tmp3[24]).NitroWheelIcon, obj1);
                } else {
                  items1 = [, ];
                  items1[0] = closure_2.nitroWheelButton;
                  nitroWheelDisabled = loading;
                  if (loading) {
                    nitroWheelDisabled = closure_2.nitroWheelDisabled;
                  }
                  obj = { style: null };
                  items1[1] = nitroWheelDisabled;
                  obj.style = items1;
                  tmpResult = tmp(tmp2(tmp3[20]).NitroWheel, obj);
                }
                return tmpResult;
              }
            }
            cResult[17] = tmp8;
            cResult[18] = useTier0UpsellContent;
            cResult[19] = tmp21;
            tmp20 = tmp21;
          } else {
            const obj6 = { source: null, style: null, disableColor: true };
            class M {
              constructor() {
                tmp = jsx;
                tmp2 = closure_0;
                tmp3 = closure_2;
                if (closure_3) {
                  obj1 = { size: "xxs", color: null, style: null };
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  obj1.color = closure_1(closure_2[11]).colors.WHITE;
                  items = [, ];
                  items[0] = closure_2.nitroWheelIcon;
                  nitroWheelDisabled2 = loading;
                  if (loading) {
                    nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
                  }
                  items[1] = nitroWheelDisabled2;
                  obj1.style = items;
                  tmpResult = tmp(tmp2(tmp3[24]).NitroWheelIcon, obj1);
                } else {
                  items1 = [, ];
                  items1[0] = closure_2.nitroWheelButton;
                  nitroWheelDisabled = loading;
                  if (loading) {
                    nitroWheelDisabled = closure_2.nitroWheelDisabled;
                  }
                  obj = { style: null };
                  items1[1] = nitroWheelDisabled;
                  obj.style = items1;
                  tmpResult = tmp(tmp2(tmp3[20]).NitroWheel, obj);
                }
                return tmpResult;
              }
            }
            obj6.source = tmp17(useTier0UpsellContent ? 10261 : 10257);
            obj6.style = tmp7.nitroWheel;
            closure_13(tmp23, obj6);
          }
        }
      }
      const items2 = [tmp7.container, containerShadow, style];
      cResult[12] = style;
      cResult[13] = tmp7.container;
      cResult[14] = containerShadow;
      cResult[15] = items2;
      tmp19 = items2;
      tmp17 = useTier0UpsellContent;
    }
  }
  const tmp14 = getPremiumUpsellLabel(tmp11, featureName, tmp12);
  cResult[6] = featureName;
  cResult[7] = tmp11;
  cResult[8] = tmp12;
  cResult[9] = tmp14;
  tmp13 = tmp14;
}) : ((featureName) => {
  featureName = featureName.featureName;
  let flag = featureName.showShadow;
  if (flag === undefined) {
    flag = true;
  }
  let loading;
  let obj = featureName(9457);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(featureName(10259).getUpsellType(featureName));
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp4 = closure_16(useTier0UpsellContent);
  dependencyMap = tmp4;
  let obj2 = featureName(10259);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = featureName(8137).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(9465).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
    let tmpResult = tmp(9465);
  }
  const obj3 = featureName(8137);
  const tmp7 = getPremiumUpsellLabel(useTier0UpsellContent ? closure_9.TIER_0 : closure_9.TIER_2, featureName, () => openPremiumUpsellActionSheetDefault(featureName));
  const tmp8 = useTier0UpsellContent;
  const tmp9 = useTier0UpsellContent(10260);
  const tmp9Result = tmp9(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, featureName(10259).getAnalyticsPage(featureName));
  loading = tmp9Result.loading;
  let items = [tmp4.container, , ];
  if (flag) {
    flag = tmp4.containerShadow;
  }
  const obj4 = { style: items, children: null };
  items[1] = flag;
  items[2] = featureName.style;
  const obj5 = { style: tmp4.labelContainer, children: null };
  if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    let items1 = [tmp13, ];
    const obj6 = { style: tmp4.text, variant: "text-sm/medium", children: tmp7 };
    items1[1] = closure_13(tmp(4786).Text, obj6);
    obj5.children = items1;
    const items2 = [tmp11(tmp12, obj5), ];
    const obj7 = { disabled: loading, shrink: true, style: tmp4.button, size: tmp(1181).ButtonSizes.XSMALL, onPress: tmp9Result.onPress, text: null, color: null, renderIcon: null, renderLinearGradient: null };
    const intl = tmp(1119).intl;
    const string = intl.string;
    const t = tmp(1119).t;
    if (useTier0UpsellContent) {
      let stringResult = string(t.cM8bbx);
    } else {
      stringResult = string(t["8x0jKT"]);
    }
    obj7.text = stringResult;
    obj7.color = tmp(1181).ButtonColors.GREEN;
    obj7.renderIcon = function renderIcon() {
      if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
        const obj2 = { size: "xxs", color: nativeDefault.colors.WHITE, style: null };
        const items = [closure_2.nitroWheelIcon, ];
        let nitroWheelDisabled2 = loading;
        if (loading) {
          nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
        }
        items[1] = nitroWheelDisabled2;
        obj2.style = items;
        let tmpResult = tmp(tmp2(8970).NitroWheelIcon, obj2);
      } else {
        const items1 = [closure_2.nitroWheelButton, ];
        let nitroWheelDisabled = loading;
        if (loading) {
          nitroWheelDisabled = closure_2.nitroWheelDisabled;
        }
        const obj = { style: null };
        items1[1] = nitroWheelDisabled;
        obj.style = items1;
        tmpResult = tmp(tmp2(1181).NitroWheel, obj);
      }
      return tmpResult;
    };
    obj7.renderLinearGradient = function renderLinearGradient() {
      const obj = { style: closure_2.gradient, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: useTier0UpsellContent ? Gradients.PREMIUM_TIER_0 : Gradients.PREMIUM_TIER_2_TRI_COLOR };
      return __initData2(LinearGradientDefault, obj);
    };
    items2[1] = closure_13(tmp(1181).ShinyButton, obj7);
    obj4.children = items2;
    return tmp11(tmp12, obj4);
  } else {
    const obj8 = { source: tmp8(useTier0UpsellContent ? 10261 : 10257), style: tmp4.nitroWheel, disableColor: true };
    closure_13(tmp(1181).Icon, obj8);
  }
});
const __initData = { code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationEnterExit(value, cleanUp) {
  closure_0 = cleanUp;
  const obj = { opacity: null };
  const fn = function l(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 7812030105128;
  fn.__initData = __initData;
  obj.opacity = spring.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
  return obj;
}
animationEnterExit.__closure = { withSpring: fn(5219).withSpring, springStandard: fn(5223).springStandard };
animationEnterExit.__workletHash = 15470414797897;
animationEnterExit.__initData = { code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
ReactCompilerGating = fn(558);
let obj3 = { withSpring: fn(5219).withSpring, springStandard: fn(5223).springStandard };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((shouldShow) => {
  const cResult = require("c").c(12);
  if (cResult[0] !== shouldShow) {
    shouldShow = shouldShow.shouldShow;
    const tmp8 = _objectWithoutProperties(shouldShow, _location);
    _require = tmp8;
    cResult[0] = shouldShow;
    cResult[1] = tmp8;
    cResult[2] = shouldShow;
    let tmp5 = shouldShow;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  const ref = noop.useRef(false);
  analyticsLocations = ref(tmp2[29])().analyticsLocations;
  let obj = require("c");
  let obj2 = noop;
  const tmp10 = ref;
  _location = require("analytics").useAnalyticsContext().location;
  const tmp11 = ref(analyticsLocations[31])(tmp5);
  _objectWithoutProperties = tmp11;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _(arg0, style) {
      const obj = { style, children: null };
      const merged = Object.assign(arg0);
      obj.children = closure_1_13(closure_1_17, {});
      return closure_1_13(ref(analyticsLocations[32]).View, obj);
    };
    cResult[3] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === _location) {
      if (cResult[6] === tmp4.featureName) {
        if (cResult[7] === tmp11) {
          let tmp13 = cResult[8];
          let tmp14 = cResult[9];
        }
        const effect = obj2.useEffect(tmp13, tmp14);
        let tmp16;
        if (tmp11) {
          tmp16 = tmp4;
        }
        if (cResult[10] !== tmp16) {
          const obj3 = { useReducedMotion: false, item: tmp16, entering: animationEnterExit, exiting: animationEnterExit, renderItem: tmp12 };
          const tmp20 = closure_13(tmp10(tmp2[34]), obj3);
          cResult[10] = tmp16;
          cResult[11] = tmp20;
          let tmp17 = tmp20;
        } else {
          tmp17 = cResult[11];
        }
        return tmp17;
      }
    }
  }
  class U {
    constructor() {
      current = closure_1.current;
      tmp2 = !current;
      tmp = closure_1;
      if (!current) {
        tmp2 = closure_4;
      }
      if (!tmp2) {
        return;
      } else {
        tmp3 = closure_1;
        castPremiumSubscriptionAsSkuId = closure_2;
        flag = undefined;
        obj = closure_1(closure_2[33]);
        tmp4 = AnalyticEvents;
        tmp5 = closure_0;
        featureName = closure_0.featureName;
        tmp6 = closure_0;
        if (closure_0(closure_2[7]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
          tmp12 = PremiumUpsellTypes;
          APP_ICON_INLINE_UPSELL = PremiumUpsellTypes.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
        } else if (tmp6(castPremiumSubscriptionAsSkuId[7]).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
          tmp11 = PremiumUpsellTypes;
          APP_ICON_INLINE_UPSELL = PremiumUpsellTypes.EMOJI_EVERYWHERE_INLINE_UPSELL;
        } else if (tmp6(castPremiumSubscriptionAsSkuId[7]).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
          tmp10 = PremiumUpsellTypes;
          APP_ICON_INLINE_UPSELL = PremiumUpsellTypes.STICKERS_EVERYWHERE_INLINE_UPSELL;
        } else {
          if (tmp6(castPremiumSubscriptionAsSkuId[7]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
            tmp9 = PremiumUpsellTypes;
            APP_ICON_INLINE_UPSELL = PremiumUpsellTypes.LARGER_FILE_UPLOAD_INLINE_UPSELL;
          } else if (tmp6(castPremiumSubscriptionAsSkuId[7]).EntitlementFeatureNames.APP_ICONS !== featureName) {
            if (tmp6(castPremiumSubscriptionAsSkuId[7]).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
              tmp7 = PremiumUpsellTypes;
              APP_ICON_INLINE_UPSELL = PremiumUpsellTypes.STREAM_QUALITY_UPSELL;
            }
          }
          tmp8 = PremiumUpsellTypes;
          APP_ICON_INLINE_UPSELL = PremiumUpsellTypes.APP_ICON_INLINE_UPSELL;
        }
        obj1 = { type: null, location: null, location_stack: null, sku_id: null };
        obj1.type = APP_ICON_INLINE_UPSELL;
        tmp13 = location;
        obj1.location = location;
        tmp14 = analyticsLocations;
        obj1.location_stack = analyticsLocations;
        tmp6 = tmp6(castPremiumSubscriptionAsSkuId[8]);
        castPremiumSubscriptionAsSkuId = tmp6.castPremiumSubscriptionAsSkuId;
        tmp15 = PremiumSubscriptionSKUs;
        obj1.sku_id = castPremiumSubscriptionAsSkuId(PremiumSubscriptionSKUs.TIER_2);
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        flag = true;
        tmp.current = true;
      }
      return;
    }
  }
  const items = [ref, _location, analyticsLocations, tmp11, tmp4.featureName];
  cResult[4] = analyticsLocations;
  cResult[5] = _location;
  cResult[6] = tmp4.featureName;
  cResult[7] = tmp11;
  cResult[8] = U;
  cResult[9] = items;
  tmp14 = items;
  tmp13 = U;
}) : ((shouldShow) => {
  let merged = Object.assign(shouldShow, Object.assign({ shouldShow: 0 }));
  let analyticsLocations;
  const ref = noop.useRef(false);
  analyticsLocations = ref(analyticsLocations[29])().analyticsLocations;
  const _location = merged(analyticsLocations[30]).useAnalyticsContext().location;
  const tmp3 = ref(analyticsLocations[31])(shouldShow.shouldShow);
  closure_4 = tmp3;
  const items = [ref, _location, analyticsLocations, tmp3, merged.featureName];
  const callback = noop.useCallback((arg0, style) => {
    const obj = { style, children: null };
    merged = Object.assign(arg0);
    obj.children = closure_1_13(closure_1_17, {});
    return closure_1_13(ref(analyticsLocations[32]).View, obj);
  }, []);
  const effect = noop.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = closure_4;
    }
    if (tmp2) {
      let castPremiumSubscriptionAsSkuId = dependencyMap;
      const featureName = merged.featureName;
      let tmp6 = require;
      if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
        let APP_ICON_INLINE_UPSELL = constants.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
      } else if (tmp6(8133).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
        APP_ICON_INLINE_UPSELL = constants.EMOJI_EVERYWHERE_INLINE_UPSELL;
      } else if (tmp6(8133).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
        APP_ICON_INLINE_UPSELL = constants.STICKERS_EVERYWHERE_INLINE_UPSELL;
      } else {
        if (tmp6(8133).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
          APP_ICON_INLINE_UPSELL = constants.LARGER_FILE_UPLOAD_INLINE_UPSELL;
        } else if (tmp6(8133).EntitlementFeatureNames.APP_ICONS !== featureName) {
          if (tmp6(8133).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
            APP_ICON_INLINE_UPSELL = constants.STREAM_QUALITY_UPSELL;
          }
        }
        APP_ICON_INLINE_UPSELL = constants.APP_ICON_INLINE_UPSELL;
      }
      const obj2 = { type: APP_ICON_INLINE_UPSELL, location: _location, location_stack: analyticsLocations, sku_id: null };
      tmp6 = tmp6(4450);
      castPremiumSubscriptionAsSkuId = tmp6.castPremiumSubscriptionAsSkuId;
      obj2.sku_id = castPremiumSubscriptionAsSkuId(closure_2_8.TIER_2);
      AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
      ref.current = true;
    }
  }, items);
  let tmp8;
  let obj = merged(analyticsLocations[30]);
  let tmp6 = closure_13;
  if (tmp3) {
    tmp8 = merged;
  }
  return tmp6(ref(analyticsLocations[34]), { useReducedMotion: false, item: tmp8, entering: animationEnterExit, exiting: animationEnterExit, renderItem: callback });
});
