// Module ID: 7105
// Function ID: 7106
// Name: GuildBoostingMarketingPersistentCta
// Dependencies: [19, 17, 5079, 1085, 21, 5090, 587, 558, 576, 573, 4810, 5374, 6161, 5086, 7106, 5387, 2]

// Module 7105 (GuildBoostingMarketingPersistentCta)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import spring from "spring" /* 5374 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
let View = react_native.View;
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 120;
const SPRING_CONFIG = { stiffness: 70, damping: 10 };
let createStyles = createStyles_mod;
let obj = { wrapper: { display: "flex", alignItems: "center", position: "absolute", width: "100%", zIndex: 1, bottom: -76 }, innerWraper: size, guildInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10 }, guildIcon: size1, guildIconText: obj2, guildName: { flexGrow: 1, flexShrink: 1, flexBasis: "auto" }, buttonContainer: { height: 40 }, button: { minWidth: 100 }, border: { padding: 2, borderRadius: 80 } };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, display: "flex", flexDirection: "row", alignItems: "center", position: "relative", height: 76, width: 343, borderRadius: 76, paddingLeft: 13, paddingVertical: 13, paddingRight: 27 };
createStyles = createStyles.createStyles;
size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginRight: 10, height: 50, width: 50, borderRadius: 25 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_10 = createStyles(obj);
const __initData = { code: "function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}" };
const __initData2 = { code: "function GuildBoostingMarketingPersistentCtaTsx2(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBoostingMarketingPersistentCta(premiumGroupRole) {
  let fractionalPremiumState;
  let guild;
  let isVisible;
  let items1;
  let items2;
  let previousGuildSubscriptionSlot;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let obj = isVisible(576);
  const cResult = obj.c(38);
  const tmp4 = closure_10();
  ({ fractionalPremiumState, guild, previousGuildSubscriptionSlot, isVisible } = premiumGroupRole);
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    class G {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = G;
    tmp6 = G;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = isVisible(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const fn = function y() {
    let items;
    let num3;
    let withSpring2;
    let num = -120;
    let num2 = -120;
    if (!stateFromStores) {
      const withSpring = spring.withSpring;
      spring;
      if (!isVisible) {
        num = c8;
      }
      num2 = withSpring(num, SPRING_CONFIG);
    }
    const obj = { transform: items, opacity: withSpring2(num3, SPRING_CONFIG) };
    items = [{ translateY: num2 }];
    num3 = 0;
    withSpring2 = spring.withSpring;
    spring;
    if (isVisible) {
      num3 = 1;
    }
    return obj;
  };
  const tmpResult2 = isVisible(4810);
  fn.__closure = { useReducedMotion: stateFromStores, VISIBILITY_OFFSET, withSpring: isVisible(5374).withSpring, isVisible, SPRING_CONFIG };
  fn.__workletHash = 14370895185277;
  fn.__initData = __initData;
  ({ useReducedMotion: stateFromStores, VISIBILITY_OFFSET, withSpring: isVisible(5374).withSpring, isVisible, SPRING_CONFIG });
  const animatedStyle = tmpResult2.useAnimatedStyle(fn);
  if (cResult[2] === animatedStyle) {
    let tmp10;
    if (cResult[3] === tmp4.wrapper) {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    class G {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    if (cResult[8] === guild) {
      if (cResult[9] === tmp4.guildIcon) {
        let tmp15;
        if (cResult[10] === tmp4.guildIconText) {
          tmp15 = cResult[11];
        }
        if (cResult[12] === guild.name) {
          let tmp20;
          if (cResult[13] === tmp4.guildName) {
            tmp20 = cResult[14];
          }
          if (cResult[15] === tmp4.guildInfoContainer) {
            if (cResult[16] === tmp15) {
              let tmp24;
              if (cResult[17] === tmp20) {
                tmp24 = cResult[18];
              }
              if (cResult[19] === fractionalPremiumState) {
                if (cResult[20] === guild) {
                  if (cResult[21] === premiumGroupRole) {
                    if (cResult[22] === previousGuildSubscriptionSlot) {
                      let tmp27;
                      if (cResult[23] === tmp4.button) {
                        tmp27 = cResult[24];
                      }
                      if (cResult[25] === tmp4.buttonContainer) {
                        let tmp31;
                        if (cResult[26] === tmp27) {
                          tmp31 = cResult[27];
                        }
                        if (cResult[28] === tmp4.innerWraper) {
                          if (cResult[29] === tmp31) {
                            let tmp34;
                            if (cResult[30] === tmp24) {
                              tmp34 = cResult[31];
                            }
                            if (cResult[32] === tmp4.border) {
                              let tmp37;
                              if (cResult[33] === tmp34) {
                                tmp37 = cResult[34];
                              }
                              if (cResult[35] === tmp37) {
                                let tmp40;
                                if (cResult[36] === tmp10) {
                                  tmp40 = cResult[37];
                                }
                                return tmp40;
                              }
                              class G {
                                constructor() {
                                  return useReducedMotion.useReducedMotion;
                                }
                              }
                              const obj3 = { style: tmp10, children: tmp37 };
                              const tmp42 = closure_6(stateFromStores(4810).View, obj3);
                              cResult[35] = tmp37;
                              cResult[36] = tmp10;
                              cResult[37] = tmp42;
                              tmp40 = tmp42;
                            }
                            class G {
                              constructor() {
                                return useReducedMotion.useReducedMotion;
                              }
                            }
                            const obj4 = { angle: 45, angleCenter: tmp12, colors: tmp13, locations: tmp14, style: tmp4.border, useAngle: true, children: tmp34 };
                            const tmp39 = closure_6(stateFromStores(5387), obj4);
                            cResult[32] = tmp4.border;
                            cResult[33] = tmp34;
                            cResult[34] = tmp39;
                            tmp37 = tmp39;
                          }
                        }
                        class G {
                          constructor() {
                            return useReducedMotion.useReducedMotion;
                          }
                        }
                        const obj6 = { style: tmp4.innerWraper, children: items1 };
                        items1 = [tmp24, tmp31];
                        const tmp36 = closure_7(View, obj6);
                        cResult[28] = tmp4.innerWraper;
                        cResult[29] = tmp31;
                        cResult[30] = tmp24;
                        cResult[31] = tmp36;
                        tmp34 = tmp36;
                      }
                      class G {
                        constructor() {
                          return useReducedMotion.useReducedMotion;
                        }
                      }
                      const obj7 = { style: tmp4.buttonContainer, children: tmp27 };
                      const tmp33 = closure_6(View, obj7);
                      cResult[25] = tmp4.buttonContainer;
                      cResult[26] = tmp27;
                      cResult[27] = tmp33;
                      tmp31 = tmp33;
                    }
                  }
                }
              }
              class G {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              const obj8 = { guild, previousGuildSubscriptionSlot, useShortenedCTA: true, styles: tmp4.button, analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR, fractionalPremiumState, premiumGroupRole };
              const tmp30 = closure_6(stateFromStores(7106), obj8);
              cResult[19] = fractionalPremiumState;
              cResult[20] = guild;
              cResult[21] = premiumGroupRole;
              cResult[22] = previousGuildSubscriptionSlot;
              cResult[23] = tmp4.button;
              cResult[24] = tmp30;
              tmp27 = tmp30;
            }
          }
          class G {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          const obj9 = { style: tmp4.guildInfoContainer, children: items2 };
          items2 = [tmp15, tmp20];
          const tmp26 = closure_7(View, obj9);
          cResult[15] = tmp4.guildInfoContainer;
          cResult[16] = tmp15;
          cResult[17] = tmp20;
          cResult[18] = tmp26;
          tmp24 = tmp26;
        }
        class G {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        tmp22[0] = tmp4.guildName;
        tmp22[3] = guild.name;
        const tmp23 = closure_6(isVisible(5086).Text, tmp22);
        cResult[12] = guild.name;
        cResult[13] = tmp4.guildName;
        cResult[14] = tmp23;
        tmp20 = tmp23;
      }
    }
    ({ guildIcon: obj5.style, guildIconText: obj5.textStyle } = tmp4);
    const obj10 = { style: null, textStyle: null, guild, size: isVisible(6161).GuildIconSizes.LARGE };
    const tmp18 = stateFromStores(6161);
    const tmp19 = closure_6(tmp18, obj10);
    let num3 = 8;
    cResult[8] = guild;
    cResult[9] = tmp4.guildIcon;
    cResult[10] = tmp4.guildIconText;
    cResult[11] = tmp19;
    tmp15 = tmp19;
  }
  const items3 = [tmp4.wrapper, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.wrapper;
  cResult[4] = items3;
  tmp10 = items3;
}) : (function GuildBoostingMarketingPersistentCta(arg0) {
  let fractionalPremiumState;
  let guild;
  let isVisible;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj5;
  let obj6;
  let premiumGroupRole;
  let previousGuildSubscriptionSlot;
  let tmp4;
  let useReducedMotion;
  const tmp = closure_10();
  ({ guild, isVisible } = arg0);
  ({ fractionalPremiumState, previousGuildSubscriptionSlot, premiumGroupRole } = arg0);
  let obj = isVisible(573);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const fn = function _() {
    let items;
    let num3;
    let withSpring2;
    let num = -120;
    let num2 = -120;
    if (!stateFromStores) {
      const withSpring = spring.withSpring;
      spring;
      if (!isVisible) {
        num = c8;
      }
      num2 = withSpring(num, SPRING_CONFIG);
    }
    const obj = { transform: items, opacity: withSpring2(num3, SPRING_CONFIG) };
    items = [{ translateY: num2 }];
    num3 = 0;
    withSpring2 = spring.withSpring;
    spring;
    if (isVisible) {
      num3 = 1;
    }
    return obj;
  };
  const obj2 = isVisible(4810);
  fn.__closure = { useReducedMotion: stateFromStores, VISIBILITY_OFFSET, withSpring: isVisible(5374).withSpring, isVisible, SPRING_CONFIG };
  fn.__workletHash = 10455540747486;
  fn.__initData = __initData2;
  ({ useReducedMotion: stateFromStores, VISIBILITY_OFFSET, withSpring: isVisible(5374).withSpring, isVisible, SPRING_CONFIG });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { style: items1, children: closure_6(tmp4, obj5) };
  items1 = [tmp.wrapper, animatedStyle];
  View = stateFromStores(4810).View;
  obj5 = { angle: 45, angleCenter: { x: 0.5, y: 0.5 }, colors: items2, locations: [0, 1], style: tmp.border, useAngle: true, children: closure_7(View, obj6) };
  tmp4 = stateFromStores(5387);
  items2 = [stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_BLUE, stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj6 = { style: tmp.innerWraper, children: items4 };
  const obj7 = { style: tmp.guildInfoContainer, children: items3 };
  const obj8 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: isVisible(6161).GuildIconSizes.LARGE };
  const tmp5 = stateFromStores(6161);
  items3 = [closure_6(tmp5, obj8), ];
  const obj9 = { style: tmp.guildName, variant: "text-md/bold", lineClamp: 1, children: guild.name };
  items3[1] = closure_6(isVisible(5086).Text, obj9);
  items4 = [closure_7(View, obj7), ];
  const obj10 = { style: tmp.buttonContainer, children: closure_6(stateFromStores(7106), obj11) };
  obj11 = { guild, previousGuildSubscriptionSlot, useShortenedCTA: true, styles: tmp.button, analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR, fractionalPremiumState, premiumGroupRole };
  items4[1] = closure_6(View, obj10);
  return closure_6(View, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx");

export default tmp5;
export const VISIBILITY_OFFSET = 120;
