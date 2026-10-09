// Module ID: 13800
// Function ID: 13801
// Name: GuildBoostingMarketingProgressBarMarker
// Dependencies: [19, 17, 1085, 21, 13801, 13802, 13803, 5091, 587, 558, 576, 4992, 4811, 4928, 4930, 5375, 12276, 6163, 10679, 8006, 5087, 2]

// Module 13800 (GuildBoostingMarketingProgressBarMarker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import spring from "spring" /* 5375 */;
import AssetRegistryDefault from "AssetRegistry" /* 13801 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13802 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13803 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let TIER_1;
let TIER_2;
let TIER_3;
let items;
let items1;
let metroImportDefault;
let metroRequire;
let obj5;
let obj6;
let size;
let size1;
let size2;
const View = react_native.View;
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const TierMarkerPositions = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
let obj2 = { [TIER_1]: AssetRegistryDefault, [TIER_2]: AssetRegistryDefault2, [TIER_3]: AssetRegistryDefault3 };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
let createStyles = createStyles_mod;
let obj3 = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 }, progressBarMarkerInnerCircleIconUnlocked: size };
size = { width: "95%", height: "95%", tintColor: nativeDefault.colors.WHITE };
let closure_10 = createStyles.createStyles(obj3);
let closure_11 = { stiffness: 50, damping: 5 };
const __initData = { code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}" };
const __initData2 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProgressBarMarkerInnerContent(isDisabled) {
  let PREMIUM_PERK_PINK;
  let isCurrentTier;
  let isTierAnimated;
  let isTierUnlocked;
  let items1;
  let items2;
  let sharedValue;
  let tier;
  let useReducedMotion;
  let tmp = useReducedMotion;
  let obj = useReducedMotion(isTierUnlocked[10]);
  const cResult = obj.c(16);
  ({ tier, isTierUnlocked, useReducedMotion } = isDisabled);
  isDisabled = isDisabled.isDisabled;
  ({ isTierAnimated, isCurrentTier } = isDisabled);
  const tmp4 = closure_10();
  const tmp6 = sharedValue(isTierUnlocked[11])();
  obj2 = useReducedMotion(isTierUnlocked[12]);
  sharedValue = obj2.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  if (isTierUnlocked) {
    PREMIUM_PERK_PINK = tmp5(tmp2[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const hexWithOpacity = tmp(tmp2[13]).hexWithOpacity;
    tmp(isTierUnlocked[13]);
    const WHITE = tmp5(tmp2[8]).unsafe_rawColors.WHITE;
    let num = 1;
    const tmpResult3 = tmp(isTierUnlocked[14]);
    if (tmpResult3.isThemeDark(tmp6)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = hexWithOpacity(WHITE, num);
  }
  if (cResult[0] === sharedValue) {
    let tmp9;
    let tmp10;
    if (cResult[1] === isTierUnlocked) {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const effect = PREMIUM_PERK_PINK.useEffect(tmp9, tmp10);
    const tmpResult4 = tmp(isTierUnlocked[12]);
    class N {
      constructor() {
        let items;
        let num = 1;
        const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
        if (!useReducedMotion) {
          num = 1;
          if (isTierUnlocked) {
            num = sharedValue.get();
          }
        }
        items = [{ scale: num }];
        return obj;
      }
    }
    const obj3 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, shouldAnimate: isTierUnlocked, scale: sharedValue };
    N.__closure = obj3;
    N.__workletHash = 15398057099178;
    N.__initData = __initData;
    const animatedStyle = tmpResult4.useAnimatedStyle(N);
    if (cResult[4] === isDisabled) {
      if (cResult[5] === tmp4) {
        if (cResult[6] === isTierUnlocked) {
          let tmp15;
          let tmp21;
          if (cResult[7] === tier) {
            tmp15 = cResult[8];
          }
          if (!isCurrentTier) {
            if (cResult[9] === animatedStyle) {
              let tmp22;
              if (cResult[10] === tmp4.progressBarMarkerInnerCircleBackground) {
                tmp22 = cResult[11];
              }
              if (cResult[12] === tmp15) {
                if (cResult[13] === tmp4.progressBarMarkerInnerCircle) {
                  let tmp25;
                  if (cResult[14] === tmp22) {
                    tmp25 = cResult[15];
                  }
                  tmp21 = tmp25;
                }
              }
              class N {
                constructor() {
                  let items;
                  let num = 1;
                  const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                  if (!useReducedMotion) {
                    num = 1;
                    if (isTierUnlocked) {
                      num = sharedValue.get();
                    }
                  }
                  items = [{ scale: num }];
                  return obj;
                }
              }
              tmp28[0] = tmp4.progressBarMarkerInnerCircle;
              let items = [tmp22, tmp15];
              tmp28[1] = items;
              const tmp29 = closure_7(View, tmp28);
              cResult[12] = tmp15;
              cResult[13] = tmp4.progressBarMarkerInnerCircle;
              cResult[14] = tmp22;
              cResult[15] = tmp29;
              tmp25 = tmp29;
            }
            const obj4 = { style: items1 };
            items1 = [, ];
            class N {
              constructor() {
                let items;
                let num = 1;
                const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                if (!useReducedMotion) {
                  num = 1;
                  if (isTierUnlocked) {
                    num = sharedValue.get();
                  }
                }
                items = [{ scale: num }];
                return obj;
              }
            }
            items1[1] = animatedStyle;
            const tmp24 = closure_6(sharedValue(isTierUnlocked[12]).View, obj4);
            cResult[9] = animatedStyle;
            cResult[10] = tmp4.progressBarMarkerInnerCircleBackground;
            cResult[11] = tmp24;
            tmp22 = tmp24;
          } else {
            tmp21 = tmp15;
          }
          return tmp21;
        }
      }
    }
    let tmp17 = null;
    if (tier !== BoostedGuildTiers.NONE) {
      let tmp30Result;
      if (isDisabled) {
        tmp30Result = tmp30(tmp(tmp2[16]).BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
      } else {
        const obj5 = { source: obj2[tier], style: items2 };
        items2 = [, ];
        class N {
          constructor() {
            let items;
            let num = 1;
            const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
            if (!useReducedMotion) {
              num = 1;
              if (isTierUnlocked) {
                num = sharedValue.get();
              }
            }
            items = [{ scale: num }];
            return obj;
          }
        }
        const tmp5Result = sharedValue(isTierUnlocked[17]);
        const unsafe_rawColors = tmp5(tmp2[8]).unsafe_rawColors;
        const obj6 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
        items2[1] = obj6;
        tmp30Result = tmp30(tmp5Result, obj5);
      }
      tmp17 = tmp30Result;
    }
    cResult[4] = isDisabled;
    cResult[5] = tmp4;
    cResult[6] = isTierUnlocked;
    cResult[7] = tier;
    cResult[8] = tmp17;
    tmp15 = tmp17;
  }
  const fn = function u() {
    const tmp = isTierUnlocked;
    if (tmp) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const obj = spring;
      const result1 = set(obj.withSpring(1, closure_11));
    }
  };
  const items3 = [isTierUnlocked, sharedValue];
  cResult[0] = sharedValue;
  cResult[1] = isTierUnlocked;
  cResult[2] = fn;
  cResult[3] = items3;
  tmp10 = items3;
  tmp9 = fn;
}) : (function ProgressBarMarkerInnerContent(arg0) {
  let isCurrentTier;
  let isDisabled;
  let isTierAnimated;
  let isTierUnlocked;
  let items1;
  let items2;
  let items3;
  let tier;
  let tmp14;
  let useReducedMotion;
  ({ tier, isTierUnlocked, useReducedMotion } = arg0);
  let sharedValue;
  isTierUnlocked = undefined;
  let PREMIUM_PERK_PINK;
  ({ isTierAnimated, isCurrentTier, isDisabled } = arg0);
  let tmp = closure_10();
  const tmp4 = sharedValue(isTierUnlocked[11])();
  let obj = useReducedMotion(isTierUnlocked[12]);
  let num = 1;
  sharedValue = obj.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  if (isTierUnlocked) {
    PREMIUM_PERK_PINK = tmp2(tmp3[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const hexWithOpacity = tmp5(isTierUnlocked[13]).hexWithOpacity;
    useReducedMotion(isTierUnlocked[13]);
    const WHITE = tmp2(tmp3[8]).unsafe_rawColors.WHITE;
    const tmp5Result3 = useReducedMotion(isTierUnlocked[14]);
    if (tmp5Result3.isThemeDark(tmp4)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = hexWithOpacity(WHITE, num);
  }
  let items = [isTierUnlocked, sharedValue];
  const effect = PREMIUM_PERK_PINK.useEffect(() => {
    const tmp = isTierUnlocked;
    if (tmp) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const obj = spring;
      const result1 = set(obj.withSpring(1, closure_11));
    }
  }, items);
  const fn = function w() {
    let items;
    let num = 1;
    const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
    if (!useReducedMotion) {
      num = 1;
      if (isTierUnlocked) {
        num = sharedValue.get();
      }
    }
    items = [{ scale: num }];
    return obj;
  };
  fn.__closure = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, shouldAnimate: isTierUnlocked, scale: sharedValue };
  fn.__workletHash = 15193519633545;
  fn.__initData = __initData2;
  let tmp10 = null;
  const tmp5Result4 = useReducedMotion(isTierUnlocked[12]);
  const animatedStyle = tmp5Result4.useAnimatedStyle(fn);
  if (tier !== BoostedGuildTiers.NONE) {
    let tmp18Result;
    if (isDisabled) {
      tmp18Result = tmp18(tmp5(tmp3[16]).BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
    } else {
      obj2 = { source: obj2[tier], style: items1 };
      items1 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
      const tmp2Result = sharedValue(isTierUnlocked[17]);
      const unsafe_rawColors = tmp2(tmp3[8]).unsafe_rawColors;
      const obj3 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
      items1[1] = obj3;
      tmp18Result = tmp18(tmp2Result, obj2);
    }
    tmp10 = tmp18Result;
  }
  if (!isCurrentTier) {
    const obj5 = { style: items2 };
    items2 = [tmp.progressBarMarkerInnerCircleBackground, animatedStyle];
    const obj4 = { style: tmp.progressBarMarkerInnerCircle, children: items3 };
    items3 = [closure_6(tmp2(isTierUnlocked[12]).View, obj5), tmp10];
    tmp14 = closure_7(View, obj4);
  } else {
    tmp14 = tmp10;
  }
  return tmp14;
});
createStyles = createStyles_mod;
let obj4 = { progressBarMarker: size1, progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 }, progressBarMarkerLabel: obj5, progressBarMarkerLabelWithIcon: obj6, progressBarMarkerLabelLocked: { opacity: 0.4 }, progressBarMarkerUnlockedIcon: size2 };
size1 = { height: 28, width: 28, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: items, zIndex: 1 };
items = [{ translateX: -14 }];
obj5 = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
createStyles = createStyles.createStyles;
obj6 = { transform: items1 };
items1 = [{ translateX: -7 }];
size2 = { height: 12, width: 12, marginRight: 2, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_15 = createStyles(obj4);
const __initData3 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx3(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}" };
const __initData4 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx4(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProgressBarMarker(isDisabled) {
  let PREMIUM_PERK_PINK;
  let closure_2;
  let closure_3;
  let guild;
  let items;
  let items1;
  let items3;
  let sharedValue;
  let tier;
  let useReducedMotion;
  let tmp = useReducedMotion;
  let obj = useReducedMotion(576);
  const cResult = obj.c(41);
  ({ guild, tier, useReducedMotion } = isDisabled);
  isDisabled = isDisabled.isDisabled;
  const revealedTier = isDisabled.revealedTier;
  const tmp4 = closure_15();
  const tmp6 = sharedValue(4992)();
  obj2 = useReducedMotion(4811);
  sharedValue = obj2.useSharedValue(1);
  dependencyMap = tmp8;
  backgroundColor = tmp11;
  if (tier === guild.premiumTier) {
    if (guild.premiumTier >= tier && revealedTier >= tier) {
      PREMIUM_PERK_PINK = tmp5(587).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    if (cResult[0] === tier === guild.premiumTier) {
      if (cResult[1] === sharedValue) {
        let tmp14;
        let tmp15;
        let tmp22;
        if (cResult[2] === (guild.premiumTier >= tier && revealedTier >= tier)) {
          tmp14 = cResult[3];
          tmp15 = cResult[4];
        }
        const effect = backgroundColor.useEffect(tmp14, tmp15);
        const fn2 = function v() {
          let items;
          let num = 1;
          const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
          if (!useReducedMotion) {
            num = sharedValue.get();
          }
          items = [{ scale: num }];
          return obj;
        };
        const obj3 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, scale: sharedValue };
        fn2.__closure = obj3;
        fn2.__workletHash = 6048829722949;
        fn2.__initData = __initData3;
        const tmpResult = tmp(4811);
        const animatedStyle = tmpResult.useAnimatedStyle(fn2);
        const text = `${100 * obj[tier]}%`;
        if (cResult[5] !== `${100 * obj[tier]}%`) {
          const obj4 = { left: text };
          cResult[5] = text;
          cResult[6] = obj4;
          tmp22 = obj4;
        } else {
          tmp22 = cResult[6];
        }
        if (cResult[7] === tmp4.progressBarMarker) {
          let tmp23;
          if (cResult[8] === tmp22) {
            tmp23 = cResult[9];
          }
          if (cResult[10] === tmp4.progressBarMarkerBackground) {
            let tmp24;
            if (cResult[11] === animatedStyle) {
              tmp24 = cResult[12];
            }
            if (cResult[13] === tier === guild.premiumTier) {
              if (cResult[14] === isDisabled) {
                if (cResult[15] === revealedTier >= tier) {
                  if (cResult[16] === guild.premiumTier >= tier) {
                    if (cResult[17] === tier) {
                      let tmp27;
                      if (cResult[18] === useReducedMotion) {
                        tmp27 = cResult[19];
                      }
                      const tmp31 = !(guild.premiumTier >= tier && revealedTier >= tier) && tmp4.progressBarMarkerLabelLocked;
                      const progressBarMarkerLabelWithIcon = tmp11 && tier !== BoostedGuildTiers.NONE && tmp4.progressBarMarkerLabelWithIcon;
                      if (cResult[20] === tmp4.progressBarMarkerLabel) {
                        if (cResult[21] === tmp31) {
                          let tmp33;
                          if (cResult[22] === progressBarMarkerLabelWithIcon) {
                            tmp33 = cResult[23];
                          }
                          if (cResult[24] === tmp4.progressBarMarkerUnlockedIcon) {
                            if (cResult[25] === (guild.premiumTier >= tier && revealedTier >= tier)) {
                              let tmp34;
                              let tmp39;
                              let tmp41;
                              if (cResult[26] === tier) {
                                tmp34 = cResult[27];
                              }
                              if (cResult[28] !== tier) {
                                const tmpResult4 = tmp(8006);
                                const tierName = tmpResult4.getTierName(tier, { useLevels: false });
                                cResult[28] = tier;
                                cResult[29] = tierName;
                                tmp39 = tierName;
                              } else {
                                tmp39 = cResult[29];
                              }
                              if (cResult[30] !== tmp39) {
                                const obj5 = { variant: "text-xs/medium", children: tmp39 };
                                const tmp43 = closure_6(tmp(5087).Text, obj5);
                                cResult[30] = tmp39;
                                cResult[31] = tmp43;
                                tmp41 = tmp43;
                              } else {
                                tmp41 = cResult[31];
                              }
                              if (cResult[32] === tmp33) {
                                if (cResult[33] === tmp34) {
                                  let tmp44;
                                  if (cResult[34] === tmp41) {
                                    tmp44 = cResult[35];
                                  }
                                  if (cResult[36] === tmp44) {
                                    if (cResult[37] === tmp23) {
                                      if (cResult[38] === tmp24) {
                                        let tmp48;
                                        if (cResult[39] === tmp27) {
                                          tmp48 = cResult[40];
                                        }
                                        return tmp48;
                                      }
                                    }
                                  }
                                  const obj6 = { style: tmp23, children: items };
                                  items = [tmp24, tmp27, tmp44];
                                  const tmp51 = closure_7(PREMIUM_PERK_PINK, obj6);
                                  cResult[36] = tmp44;
                                  cResult[37] = tmp23;
                                  cResult[38] = tmp24;
                                  cResult[39] = tmp27;
                                  cResult[40] = tmp51;
                                  tmp48 = tmp51;
                                }
                              }
                              const obj7 = { style: tmp33, children: items1 };
                              items1 = [tmp34, tmp41];
                              const tmp47 = closure_7(PREMIUM_PERK_PINK, obj7);
                              cResult[32] = tmp33;
                              cResult[33] = tmp34;
                              cResult[34] = tmp41;
                              cResult[35] = tmp47;
                              tmp44 = tmp47;
                            }
                          }
                          let tmp35 = tmp11 && tier !== BoostedGuildTiers.NONE;
                          if (tmp35) {
                            const obj8 = { source: sharedValue(10679), style: tmp4.progressBarMarkerUnlockedIcon };
                            const tmp5Result = sharedValue(6163);
                            tmp35 = closure_6(tmp5Result, obj8);
                          }
                          cResult[24] = tmp4.progressBarMarkerUnlockedIcon;
                          cResult[25] = guild.premiumTier >= tier && revealedTier >= tier;
                          cResult[26] = tier;
                          cResult[27] = tmp35;
                          tmp34 = tmp35;
                        }
                      }
                      const items2 = [tmp4.progressBarMarkerLabel, tmp31, progressBarMarkerLabelWithIcon];
                      cResult[20] = tmp4.progressBarMarkerLabel;
                      cResult[21] = tmp31;
                      cResult[22] = progressBarMarkerLabelWithIcon;
                      cResult[23] = items2;
                      tmp33 = items2;
                    }
                  }
                }
              }
            }
            const obj9 = { tier, isDisabled, isTierUnlocked: guild.premiumTier >= tier, isTierAnimated: revealedTier >= tier, isCurrentTier: tier === guild.premiumTier, useReducedMotion };
            const tmp30 = closure_6(closure_14, obj9);
            cResult[13] = tier === guild.premiumTier;
            cResult[14] = isDisabled;
            cResult[15] = revealedTier >= tier;
            cResult[16] = guild.premiumTier >= tier;
            cResult[17] = tier;
            cResult[18] = useReducedMotion;
            cResult[19] = tmp30;
            tmp27 = tmp30;
          }
          const obj10 = { style: items3 };
          items3 = [tmp4.progressBarMarkerBackground, animatedStyle];
          const tmp26 = closure_6(sharedValue(4811).View, obj10);
          cResult[10] = tmp4.progressBarMarkerBackground;
          cResult[11] = animatedStyle;
          cResult[12] = tmp26;
          tmp24 = tmp26;
        }
        const items4 = [tmp4.progressBarMarker, tmp22];
        cResult[7] = tmp4.progressBarMarker;
        cResult[8] = tmp22;
        cResult[9] = items4;
        tmp23 = items4;
      }
    }
    const fn = function u() {
      const tmp = closure_3 && closure_2;
      if (tmp) {
        const result = sharedValue.set(0);
        set = sharedValue.set;
        const obj = spring;
        const result1 = set(obj.withSpring(1, closure_11));
      }
    };
    const items5 = [guild.premiumTier >= tier && revealedTier >= tier, sharedValue, tier === guild.premiumTier];
    cResult[0] = tier === guild.premiumTier;
    cResult[1] = sharedValue;
    cResult[2] = guild.premiumTier >= tier && revealedTier >= tier;
    cResult[3] = fn;
    cResult[4] = items5;
    tmp15 = items5;
    tmp14 = fn;
  }
  const tmpResult5 = tmp(4930);
  const isThemeDarkResult = tmpResult5.isThemeDark(tmp6);
  const hexWithOpacity = tmp(4928).hexWithOpacity;
  tmp(4928);
  const unsafe_rawColors = tmp5(587).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    let num = 0.4;
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
}) : (function ProgressBarMarker(arg0) {
  let closure_2;
  let closure_3;
  let guild;
  let isDisabled;
  let items1;
  let items2;
  let items3;
  let items5;
  let revealedTier;
  let tier;
  let tmp5Result4;
  let useReducedMotion;
  ({ guild, tier, useReducedMotion } = arg0);
  let sharedValue;
  let PREMIUM_PERK_PINK;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = closure_15();
  const tmp4 = sharedValue(4992)();
  let obj = useReducedMotion(4811);
  sharedValue = obj.useSharedValue(1);
  dependencyMap = tmp7;
  let tmp20Result = tmp9 && tmp8;
  backgroundColor = tmp20Result;
  if (tier === guild.premiumTier) {
    if (tmp20Result) {
      PREMIUM_PERK_PINK = tmp2(587).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    let items = [tmp20Result, sharedValue, tier === guild.premiumTier];
    const effect = backgroundColor.useEffect(() => {
      const tmp = closure_3 && closure_2;
      if (tmp) {
        const result = sharedValue.set(0);
        set = sharedValue.set;
        const obj = spring;
        const result1 = set(obj.withSpring(1, closure_11));
      }
    }, items);
    const tmp5Result = useReducedMotion(4811);
    class P {
      constructor() {
        let items;
        let num = 1;
        const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
        if (!useReducedMotion) {
          num = sharedValue.get();
        }
        items = [{ scale: num }];
        return obj;
      }
    }
    obj2 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, scale: sharedValue };
    P.__closure = obj2;
    P.__workletHash = 25784602338;
    P.__initData = __initData4;
    const obj3 = { style: items1, children: items3 };
    items1 = [tmp.progressBarMarker, ];
    const obj4 = { left: `${100 * obj[tier]}%` };
    items1[1] = obj4;
    const animatedStyle = tmp5Result.useAnimatedStyle(P);
    const obj5 = { style: items2 };
    items2 = [tmp.progressBarMarkerBackground, animatedStyle];
    items3 = [closure_6(tmp2(4811).View, obj5), , ];
    const obj6 = { tier, isDisabled, isTierUnlocked: guild.premiumTier >= tier, isTierAnimated: revealedTier >= tier, isCurrentTier: tier === guild.premiumTier, useReducedMotion };
    items3[1] = closure_6(closure_14, obj6);
    const items4 = [tmp.progressBarMarkerLabel, !tmp20Result && tmp.progressBarMarkerLabelLocked, ];
    const progressBarMarkerLabelWithIcon = tmp20Result && tier !== BoostedGuildTiers.NONE && tmp.progressBarMarkerLabelWithIcon;
    const obj7 = { style: items4, children: items5 };
    items4[2] = progressBarMarkerLabelWithIcon;
    if (tmp20Result) {
      tmp20Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp20Result) {
      const obj8 = { source: sharedValue(10679), style: tmp.progressBarMarkerUnlockedIcon };
      const tmp2Result = sharedValue(6163);
      tmp20Result = tmp20(tmp2Result, obj8);
    }
    items5 = [tmp20Result, ];
    const obj9 = { variant: "text-xs/medium", children: tmp5Result4.getTierName(tier, { useLevels: false }) };
    const Text = tmp5(5087).Text;
    tmp5Result4 = useReducedMotion(8006);
    items5[1] = closure_6(Text, obj9);
    items3[2] = closure_7(PREMIUM_PERK_PINK, obj7);
    return closure_7(PREMIUM_PERK_PINK, obj3);
  }
  const tmp5Result5 = useReducedMotion(4930);
  const isThemeDarkResult = tmp5Result5.isThemeDark(tmp4);
  const hexWithOpacity = tmp5(4928).hexWithOpacity;
  useReducedMotion(4928);
  const unsafe_rawColors = tmp2(587).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    let num = 0.4;
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default tmp4;
export const MARKER_DIMENSIONS = 28;
export { TierMarkerPositions };
