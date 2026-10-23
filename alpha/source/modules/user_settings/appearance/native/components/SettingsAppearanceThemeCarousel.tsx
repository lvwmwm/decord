// Module ID: 16593
// Function ID: 16594
// Name: SettingsAppearanceThemeCarousel
// Dependencies: [19, 17, 16594, 1087, 4994, 21, 5050, 1202, 4969, 587, 558, 576, 5265, 5200, 4997, 5204, 5207, 12, 5210, 1128, 16595, 9900, 5232, 1630, 10514, 16363, 5035, 15851, 16598, 2]

// Module 16593 (SettingsAppearanceThemeCarousel)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5200 */;
import timing from "timing" /* 5204 */;
import HapticUtils from "HapticUtils" /* 5210 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 16594 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4994 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5050 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let constants, set2;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let tmp2;
let unpackModuleId;
const timingPresets = tmp2(5207);
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
let ThemeTypes = Constants.ThemeTypes;
({ HexagonCampaignPerk: metroImportAll, HexagonCampaignPerkAvailability: c9 } = HexagonCampaignConstants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let set = ReanimatedRexport.createAnimatedComponent(native.Icon);
let createStyles = createStyles_mod;
let obj = { container: obj2, textCentered: { textAlign: "center" }, hintContainer: { alignSelf: "stretch" }, hintOverlay: { position: "absolute", top: 0, left: 0, right: 0 }, hidden: { opacity: 0 }, labelGroup: obj3, swatchesGroup: obj4, badgeSlot: obj5, titleContainer: obj6, floatingNuxContainer: obj7, floatingNux: obj8, arrowLeft: obj9, uppercase: { textTransform: "uppercase" }, selectionBorder: size, a11yThemeList: { flexDirection: "row" }, a11yThemeListScroll: { flexGrow: 0 } };
obj2 = { gap: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4, alignItems: "center" };
obj4 = { gap: nativeDefault.space.PX_12, alignItems: "center" };
obj5 = { height: nativeDefault.space.PX_16, justifyContent: "center" };
obj6 = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj7 = { position: "absolute", left: nativeDefault.space.PX_24 };
obj8 = { borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_8, shadowColor: "#000000" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj9 = { transform: items };
items = [{ rotate: "90deg" }];
size = { position: "absolute", alignSelf: "center", width: SettingsAppearanceConstants.THEME_ITEM_WIDTH, height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT, borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
let closure_14 = createStyles(obj);
let __initData = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{badgeOpacity}=this.__closure;return{opacity:badgeOpacity.get()};}" };
const __initData2 = { code: "function SettingsAppearanceThemeCarouselTsx2(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?\"auto\":\"none\"};}" };
const __initData3 = { code: "function SettingsAppearanceThemeCarouselTsx3(){const{badgeOpacity}=this.__closure;return{opacity:badgeOpacity.get()};}" };
const __initData4 = { code: "function SettingsAppearanceThemeCarouselTsx4(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};}" };
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsAppearanceThemeCarousel(themes) {
  let animatedStyles;
  let closure_15;
  let defaultIndex;
  let deviceWidth;
  let first;
  let hasOnyxNux;
  let isPreview;
  let items;
  let items11;
  let items12;
  let items3;
  let items5;
  let items6;
  let items7;
  let items9;
  let obj22;
  let obj27;
  let str;
  let tmp12;
  let tmp14;
  let tmp = themes;
  let tmp2 = isPreview;
  let obj = themes(isPreview[11]);
  const cResult = obj.c(123);
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  const isSynced = themes.isSynced;
  ({ animatedStyles, hasOnyxNux } = themes);
  const onThemeSelected = themes.onThemeSelected;
  const tmp4 = closure_14();
  let obj2 = themes(isPreview[12]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = deviceWidth;
  const ref = deviceWidth.useRef(null);
  constants = deviceWidth.useRef(defaultIndex);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function y(theme) {
      return theme.theme === ref.ONYX;
    };
    let num = 0;
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const findIndexResult = themes.findIndex(first);
  let num2 = 0;
  if (findIndexResult >= 0) {
    num2 = findIndexResult;
  }
  const tmpResult = tmp(tmp2[6]);
  const sharedValue = tmpResult.useSharedValue(false);
  const tmpResult8 = tmp(tmp2[6]);
  const sharedValue1 = tmpResult8.useSharedValue(false);
  if (cResult[1] !== themes[currentThemeIndex]) {
    const tmpResult9 = tmp(tmp2[13]);
    let result = tmpResult9.isHexagonCampaignMobileTheme(tmp11);
    cResult[1] = themes[currentThemeIndex];
    cResult[2] = result;
    tmp12 = result;
  } else {
    tmp12 = cResult[2];
  }
  let closure_12 = tmp12;
  if (cResult[3] !== themes) {
    const someResult = themes.some(tmp(tmp2[13]).isHexagonCampaignMobileTheme);
    cResult[3] = themes;
    cResult[4] = someResult;
    tmp14 = someResult;
  } else {
    tmp14 = cResult[4];
  }
  const tmpResult10 = tmp(tmp2[14]);
  const hexagonCampaignPerkAvailability = tmpResult10.useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
  let num7 = 0;
  const useSharedValue = tmp(tmp2[6]).useSharedValue;
  tmp(tmp2[6]);
  const tmp16 = constants;
  if (tmp12) {
    num7 = 1;
  }
  const sharedValue2 = useSharedValue(num7);
  if (cResult[5] === sharedValue2) {
    let tmp20;
    let tmp21;
    if (cResult[6] === tmp12) {
      tmp20 = cResult[7];
      tmp21 = cResult[8];
    }
    const effect = obj3.useEffect(tmp20, tmp21);
    const fn2 = function $() {
      const obj = { opacity: sharedValue2.get() };
      return obj;
    };
    const obj4 = { badgeOpacity: sharedValue2 };
    fn2.__closure = obj4;
    fn2.__workletHash = 11624303332519;
    fn2.__initData = __initData;
    const tmpResult12 = tmp(tmp2[6]);
    const animatedStyle = tmpResult12.useAnimatedStyle(fn2);
    if (cResult[9] === sharedValue1) {
      let tmp25;
      let tmp26;
      let tmp28;
      if (cResult[10] === sharedValue) {
        tmp25 = cResult[11];
        tmp26 = cResult[12];
      }
      const effect1 = obj3.useEffect(tmp25, tmp26);
      if (cResult[13] !== onThemeSelected) {
        const obj10 = currentThemeIndex(tmp2[17]);
        const debounceResult = obj10.debounce(onThemeSelected, 180);
        cResult[13] = onThemeSelected;
        cResult[14] = debounceResult;
        tmp28 = debounceResult;
      } else {
        tmp28 = cResult[14];
      }
      closure_14 = tmp28;
      if (cResult[15] === sharedValue2) {
        if (cResult[16] === deviceWidth) {
          if (cResult[17] === sharedValue1) {
            if (cResult[18] === hasOnyxNux) {
              if (cResult[19] === sharedValue) {
                if (cResult[20] === tmp28) {
                  if (cResult[21] === num2) {
                    let tmp31;
                    if (cResult[22] === themes) {
                      tmp31 = cResult[23];
                    }
                    if (cResult[24] === currentThemeIndex) {
                      if (cResult[25] === isPreview) {
                        if (cResult[26] === isSynced) {
                          if (cResult[29] === currentThemeIndex) {
                            if (cResult[30] === isPreview) {
                              let tmp33;
                              if (cResult[31] === onThemeSelected) {
                                tmp33 = cResult[32];
                              }
                              __initData = tmp33;
                              if (cResult[33] === currentThemeIndex) {
                                if (cResult[34] === isPreview) {
                                  let tmp34;
                                  if (cResult[35] === onThemeSelected) {
                                    tmp34 = cResult[36];
                                  }
                                  function ce() {
                                    let str;
                                    const withTiming = timing.withTiming;
                                    let num = 0;
                                    timing;
                                    const obj = sharedValue;
                                    if (sharedValue.get()) {
                                      num = 1;
                                    }
                                    const obj2 = { opacity: withTiming(num, timingPresets.timingStandard), pointerEvents: str };
                                    str = "none";
                                    if (obj.get()) {
                                      str = "auto";
                                    }
                                    return obj2;
                                  }
                                  const obj5 = { withTiming: tmp(tmp2[15]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: tmp(tmp2[16]).timingStandard };
                                  const useAnimatedStyle = tmp(tmp2[6]).useAnimatedStyle;
                                  tmp(tmp2[6]);
                                  ce.__closure = obj5;
                                  ce.__workletHash = 1532887600753;
                                  ce.__initData = __initData2;
                                  class J {
                                    constructor() {
                                      let closure_0;
                                      const timeout = setTimeout(() => {
                                        const result = sharedValue.set(false);
                                        const result1 = sharedValue1.set(true);
                                      }, 5500);
                                      return () => clearTimeout(closure_0);
                                    }
                                  }
                                  if (cResult[37] === animatedStyles.iconHeaderSecondary) {
                                    if (cResult[38] === currentThemeIndex) {
                                      let tmp39;
                                      let tmp44;
                                      if (cResult[39] === themes) {
                                        tmp39 = cResult[40];
                                      }
                                      const headerPrimary = animatedStyles.headerPrimary;
                                      if (cResult[41] !== themes[currentThemeIndex]) {
                                        const name = obj14.getName();
                                        cResult[41] = themes[currentThemeIndex];
                                        cResult[42] = name;
                                        tmp44 = name;
                                      } else {
                                        tmp44 = cResult[42];
                                      }
                                      if (cResult[43] === animatedStyles.headerPrimary) {
                                        let tmp46;
                                        if (cResult[44] === tmp44) {
                                          tmp46 = cResult[45];
                                        }
                                        if (cResult[46] === tmp4.titleContainer) {
                                          if (cResult[47] === tmp39) {
                                            let tmp49;
                                            let tmp53;
                                            if (cResult[48] === tmp46) {
                                              tmp49 = cResult[49];
                                            }
                                            if (cResult[50] === defaultIndex) {
                                              if (cResult[51] === deviceWidth) {
                                                if (cResult[52] === isScreenReaderEnabled) {
                                                  if (cResult[53] === tmp31) {
                                                    if (cResult[54] === onThemeSelected) {
                                                      if (cResult[55] === tmp33) {
                                                        if (cResult[56] === tmp34) {
                                                          if (cResult[57] === tmp4.a11yThemeList) {
                                                            if (cResult[58] === tmp4.a11yThemeListScroll) {
                                                              if (cResult[59] === tmp4.selectionBorder) {
                                                                if (cResult[60] === themes) {
                                                                  tmp53 = cResult[61];
                                                                }
                                                                if (cResult[62] === animatedStyles.headerSecondary) {
                                                                  let tmp63;
                                                                  let tmp64;
                                                                  if (cResult[63] === tmp4.textCentered) {
                                                                    tmp63 = cResult[64];
                                                                  }
                                                                  if (cResult[65] !== tmp32) {
                                                                    const tmp32Result = tmp32();
                                                                    cResult[65] = tmp32;
                                                                    cResult[66] = tmp32Result;
                                                                    tmp64 = tmp32Result;
                                                                  } else {
                                                                    tmp64 = cResult[66];
                                                                  }
                                                                  if (cResult[67] === tmp63) {
                                                                    let tmp66;
                                                                    if (cResult[68] === tmp64) {
                                                                      tmp66 = cResult[69];
                                                                    }
                                                                    if (cResult[70] === animatedStyles) {
                                                                      if (cResult[71] === tmp14) {
                                                                        if (cResult[72] === tmp66) {
                                                                          if (cResult[73] === tmp12) {
                                                                            if (cResult[74] === tmp4.hidden) {
                                                                              if (cResult[75] === tmp4.hintContainer) {
                                                                                let tmp69;
                                                                                if (cResult[76] === tmp4.hintOverlay) {
                                                                                  tmp69 = cResult[77];
                                                                                }
                                                                                if (cResult[78] === animatedStyle) {
                                                                                  let tmp76;
                                                                                  if (cResult[79] === tmp4.badgeSlot) {
                                                                                    tmp76 = cResult[80];
                                                                                  }
                                                                                  if (cResult[81] === hexagonCampaignPerkAvailability) {
                                                                                    let tmp77;
                                                                                    if (cResult[82] === tmp12) {
                                                                                      tmp77 = cResult[83];
                                                                                    }
                                                                                    if (cResult[84] === tmp76) {
                                                                                      let tmp85;
                                                                                      if (cResult[85] === tmp77) {
                                                                                        tmp85 = cResult[86];
                                                                                      }
                                                                                      if (cResult[87] === tmp4.swatchesGroup) {
                                                                                        if (cResult[88] === tmp53) {
                                                                                          let tmp89;
                                                                                          if (cResult[89] === tmp85) {
                                                                                            tmp89 = cResult[90];
                                                                                          }
                                                                                          if (cResult[91] === tmp69) {
                                                                                            if (cResult[92] === tmp4.labelGroup) {
                                                                                              let tmp93;
                                                                                              if (cResult[93] === tmp49) {
                                                                                                tmp93 = cResult[94];
                                                                                              }
                                                                                              if (cResult[95] === tmp89) {
                                                                                                let tmp97;
                                                                                                if (cResult[96] === tmp93) {
                                                                                                  tmp97 = cResult[97];
                                                                                                }
                                                                                                if (cResult[98] === tmp37) {
                                                                                                  if (cResult[99] === animatedStyles.bgSurfaceOverlay) {
                                                                                                    if (cResult[100] === animatedStyles.borderFaint) {
                                                                                                      let tmp103;
                                                                                                      if (cResult[101] === tmp4.floatingNux) {
                                                                                                        tmp103 = cResult[102];
                                                                                                      }
                                                                                                      if (cResult[103] === animatedStyles.iconInteractive) {
                                                                                                        let tmp104;
                                                                                                        if (cResult[104] === tmp4.arrowLeft) {
                                                                                                          tmp104 = cResult[105];
                                                                                                        }
                                                                                                        if (cResult[106] === animatedStyles.textNormal) {
                                                                                                          let tmp109;
                                                                                                          let tmp110;
                                                                                                          let tmp112;
                                                                                                          if (cResult[107] === tmp4.uppercase) {
                                                                                                            tmp109 = cResult[108];
                                                                                                          }
                                                                                                          const _Symbol = Symbol;
                                                                                                          if (cResult[109] === Symbol.for("react.memo_cache_sentinel")) {
                                                                                                            let intl = tmp(tmp2[19]).intl;
                                                                                                            let stringResult = intl.string(tmp(tmp2[19]).t.y2b7CA);
                                                                                                            cResult[109] = stringResult;
                                                                                                            tmp110 = stringResult;
                                                                                                          } else {
                                                                                                            tmp110 = cResult[109];
                                                                                                          }
                                                                                                          if (cResult[110] !== tmp109) {
                                                                                                            const obj6 = { animated: true, style: tmp109, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: tmp110 };
                                                                                                            const tmp114 = sharedValue(tmp(tmp2[22]).Text, obj6);
                                                                                                            cResult[110] = tmp109;
                                                                                                            cResult[111] = tmp114;
                                                                                                            tmp112 = tmp114;
                                                                                                          } else {
                                                                                                            tmp112 = cResult[111];
                                                                                                          }
                                                                                                          if (cResult[112] === tmp103) {
                                                                                                            if (cResult[113] === tmp104) {
                                                                                                              let tmp115;
                                                                                                              if (cResult[114] === tmp112) {
                                                                                                                tmp115 = cResult[115];
                                                                                                              }
                                                                                                              if (cResult[116] === tmp4.floatingNuxContainer) {
                                                                                                                let tmp119;
                                                                                                                if (cResult[117] === tmp115) {
                                                                                                                  tmp119 = cResult[118];
                                                                                                                }
                                                                                                                if (cResult[119] === tmp97) {
                                                                                                                  if (cResult[120] === tmp4.container) {
                                                                                                                    let tmp123;
                                                                                                                    if (cResult[121] === tmp119) {
                                                                                                                      tmp123 = cResult[122];
                                                                                                                    }
                                                                                                                    return tmp123;
                                                                                                                  }
                                                                                                                }
                                                                                                                const obj7 = { style: tmp101, children: items };
                                                                                                                items = [tmp119, tmp97];
                                                                                                                const tmp126 = sharedValue1(isSynced, obj7);
                                                                                                                cResult[119] = tmp97;
                                                                                                                class J {
                                                                                                                  constructor() {
                                                                                                                    let closure_0;
                                                                                                                    const timeout = setTimeout(() => {
                                                                                                                      const result = sharedValue.set(false);
                                                                                                                      const result1 = sharedValue1.set(true);
                                                                                                                    }, 5500);
                                                                                                                    return () => clearTimeout(closure_0);
                                                                                                                  }
                                                                                                                }
                                                                                                                cResult[120] = tmp4.container;
                                                                                                                cResult[121] = tmp119;
                                                                                                                cResult[122] = tmp126;
                                                                                                                tmp123 = tmp126;
                                                                                                              }
                                                                                                              const obj8 = { style: tmp102, children: tmp115 };
                                                                                                              cResult[116] = tmp4.floatingNuxContainer;
                                                                                                              cResult[117] = tmp115;
                                                                                                              const tmp122 = sharedValue(isSynced, obj8);
                                                                                                              class J {
                                                                                                                constructor() {
                                                                                                                  let closure_0;
                                                                                                                  const timeout = setTimeout(() => {
                                                                                                                    const result = sharedValue.set(false);
                                                                                                                    const result1 = sharedValue1.set(true);
                                                                                                                  }, 5500);
                                                                                                                  return () => clearTimeout(closure_0);
                                                                                                                }
                                                                                                              }
                                                                                                              tmp119 = tmp122;
                                                                                                            }
                                                                                                          }
                                                                                                          const items1 = [tmp104, tmp112];
                                                                                                          const obj9 = { style: tmp103, children: null };
                                                                                                          class J {
                                                                                                            constructor() {
                                                                                                              let closure_0;
                                                                                                              const timeout = setTimeout(() => {
                                                                                                                const result = sharedValue.set(false);
                                                                                                                const result1 = sharedValue1.set(true);
                                                                                                              }, 5500);
                                                                                                              return () => clearTimeout(closure_0);
                                                                                                            }
                                                                                                          }
                                                                                                          const tmp118 = sharedValue1(currentThemeIndex(tmp2[6]).View, obj9);
                                                                                                          cResult[112] = tmp103;
                                                                                                          cResult[113] = tmp104;
                                                                                                          cResult[114] = tmp112;
                                                                                                          cResult[115] = tmp118;
                                                                                                          tmp115 = tmp118;
                                                                                                        }
                                                                                                        const items2 = [animatedStyles.textNormal, tmp4.uppercase];
                                                                                                        cResult[106] = animatedStyles.textNormal;
                                                                                                        cResult[107] = tmp4.uppercase;
                                                                                                        cResult[108] = items2;
                                                                                                        tmp109 = items2;
                                                                                                      }
                                                                                                      const obj11 = { style: items3, source: currentThemeIndex(tmp2[28]), size: tmp(tmp2[7]).IconSizes.REFRESH_SMALL_16 };
                                                                                                      items3 = [tmp4.arrowLeft, animatedStyles.iconInteractive];
                                                                                                      const tmp108 = sharedValue(sharedValue2, obj11);
                                                                                                      class J {
                                                                                                        constructor() {
                                                                                                          let closure_0;
                                                                                                          const timeout = setTimeout(() => {
                                                                                                            const result = sharedValue.set(false);
                                                                                                            const result1 = sharedValue1.set(true);
                                                                                                          }, 5500);
                                                                                                          return () => clearTimeout(closure_0);
                                                                                                        }
                                                                                                      }
                                                                                                      cResult[103] = animatedStyles.iconInteractive;
                                                                                                      cResult[104] = tmp4.arrowLeft;
                                                                                                      cResult[105] = tmp108;
                                                                                                      tmp104 = tmp108;
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                const items4 = [tmp4.floatingNux, tmp37, , ];
                                                                                                ({ bgSurfaceOverlay: arr12[2], borderFaint: arr12[3] } = animatedStyles);
                                                                                                cResult[98] = tmp37;
                                                                                                cResult[99] = animatedStyles.bgSurfaceOverlay;
                                                                                                cResult[100] = animatedStyles.borderFaint;
                                                                                                class J {
                                                                                                  constructor() {
                                                                                                    let closure_0;
                                                                                                    const timeout = setTimeout(() => {
                                                                                                      const result = sharedValue.set(false);
                                                                                                      const result1 = sharedValue1.set(true);
                                                                                                    }, 5500);
                                                                                                    return () => clearTimeout(closure_0);
                                                                                                  }
                                                                                                }
                                                                                                cResult[101] = tmp4.floatingNux;
                                                                                                cResult[102] = items4;
                                                                                                tmp103 = items4;
                                                                                              }
                                                                                              const obj12 = { children: items5 };
                                                                                              items5 = [tmp89, tmp93];
                                                                                              const tmp100 = sharedValue1(closure_12, obj12);
                                                                                              cResult[95] = tmp89;
                                                                                              class J {
                                                                                                constructor() {
                                                                                                  let closure_0;
                                                                                                  const timeout = setTimeout(() => {
                                                                                                    const result = sharedValue.set(false);
                                                                                                    const result1 = sharedValue1.set(true);
                                                                                                  }, 5500);
                                                                                                  return () => clearTimeout(closure_0);
                                                                                                }
                                                                                              }
                                                                                              cResult[97] = tmp100;
                                                                                              tmp97 = tmp100;
                                                                                            }
                                                                                          }
                                                                                          const obj13 = { style: tmp4.labelGroup, children: items6 };
                                                                                          items6 = [tmp49, tmp69];
                                                                                          const tmp96 = sharedValue1(isSynced, obj13);
                                                                                          cResult[91] = tmp69;
                                                                                          class J {
                                                                                            constructor() {
                                                                                              let closure_0;
                                                                                              const timeout = setTimeout(() => {
                                                                                                const result = sharedValue.set(false);
                                                                                                const result1 = sharedValue1.set(true);
                                                                                              }, 5500);
                                                                                              return () => clearTimeout(closure_0);
                                                                                            }
                                                                                          }
                                                                                          cResult[92] = tmp4.labelGroup;
                                                                                          cResult[93] = tmp49;
                                                                                          cResult[94] = tmp96;
                                                                                          tmp93 = tmp96;
                                                                                        }
                                                                                      }
                                                                                      const obj15 = { style: tmp4.swatchesGroup, children: items7 };
                                                                                      items7 = [tmp85, tmp53];
                                                                                      const tmp92 = sharedValue1(isSynced, obj15);
                                                                                      cResult[87] = tmp4.swatchesGroup;
                                                                                      class J {
                                                                                        constructor() {
                                                                                          let closure_0;
                                                                                          const timeout = setTimeout(() => {
                                                                                            const result = sharedValue.set(false);
                                                                                            const result1 = sharedValue1.set(true);
                                                                                          }, 5500);
                                                                                          return () => clearTimeout(closure_0);
                                                                                        }
                                                                                      }
                                                                                      cResult[88] = tmp53;
                                                                                      cResult[89] = tmp85;
                                                                                      cResult[90] = tmp92;
                                                                                      tmp89 = tmp92;
                                                                                    }
                                                                                    const obj16 = { style: tmp76, children: tmp77 };
                                                                                    cResult[84] = tmp76;
                                                                                    cResult[85] = tmp77;
                                                                                    const tmp88 = sharedValue(currentThemeIndex(tmp2[6]).View, obj16);
                                                                                    class J {
                                                                                      constructor() {
                                                                                        let closure_0;
                                                                                        const timeout = setTimeout(() => {
                                                                                          const result = sharedValue.set(false);
                                                                                          const result1 = sharedValue1.set(true);
                                                                                        }, 5500);
                                                                                        return () => clearTimeout(closure_0);
                                                                                      }
                                                                                    }
                                                                                    tmp85 = tmp88;
                                                                                  }
                                                                                  let tmp78 = tmp12;
                                                                                  if (tmp78) {
                                                                                    let tmp82;
                                                                                    if (hexagonCampaignPerkAvailability === num2.LOCKED) {
                                                                                      const obj17 = { theme: ref.DARK, children: sharedValue(tmp(tmp2[27]).HexagonCampaignExtendPerkBadge, {}) };
                                                                                      const ThemeContextProvider = tmp(tmp2[26]).ThemeContextProvider;
                                                                                      tmp82 = sharedValue(ThemeContextProvider, obj17);
                                                                                    } else {
                                                                                      const obj18 = { variant: "overlay", perk: tmp16.CLIENT_THEME };
                                                                                      tmp82 = sharedValue(currentThemeIndex(tmp2[27]), obj18);
                                                                                    }
                                                                                    tmp78 = tmp82;
                                                                                  }
                                                                                  cResult[81] = hexagonCampaignPerkAvailability;
                                                                                  cResult[82] = tmp12;
                                                                                  cResult[83] = tmp78;
                                                                                  tmp77 = tmp78;
                                                                                }
                                                                                const items8 = [tmp4.badgeSlot, animatedStyle];
                                                                                cResult[78] = animatedStyle;
                                                                                cResult[79] = tmp4.badgeSlot;
                                                                                cResult[80] = items8;
                                                                                tmp76 = items8;
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    let tmp71Result = tmp66;
                                                                    if (tmp14) {
                                                                      let hidden = !tmp12;
                                                                      const obj19 = { style: tmp4.hintContainer, children: items9 };
                                                                      const tmp71 = sharedValue1;
                                                                      if (!tmp12) {
                                                                        hidden = tmp4.hidden;
                                                                      }
                                                                      const obj20 = { style: hidden, pointerEvents: str, accessibilityElementsHidden: !tmp12, importantForAccessibility: str2, children: sharedValue(currentThemeIndex(tmp2[25]), obj22) };
                                                                      str = "none";
                                                                      if (tmp12) {
                                                                        str = "auto";
                                                                      }
                                                                      class J {
                                                                        constructor() {
                                                                          let closure_0;
                                                                          const timeout = setTimeout(() => {
                                                                            const result = sharedValue.set(false);
                                                                            const result1 = sharedValue1.set(true);
                                                                          }, 5500);
                                                                          return () => clearTimeout(closure_0);
                                                                        }
                                                                      }
                                                                      obj22 = { animatedStyles };
                                                                      items9 = [sharedValue(isSynced, obj20), ];
                                                                      let tmp73Result = !tmp12;
                                                                      if (tmp73Result) {
                                                                        const obj23 = { style: tmp4.hintOverlay, children: tmp66 };
                                                                        tmp73Result = tmp73(tmp72, obj23);
                                                                      }
                                                                      items9[1] = tmp73Result;
                                                                      tmp71Result = tmp71(tmp72, obj19);
                                                                    }
                                                                    cResult[70] = animatedStyles;
                                                                    cResult[71] = tmp14;
                                                                    cResult[72] = tmp66;
                                                                    cResult[73] = tmp12;
                                                                    class J {
                                                                      constructor() {
                                                                        let closure_0;
                                                                        const timeout = setTimeout(() => {
                                                                          const result = sharedValue.set(false);
                                                                          const result1 = sharedValue1.set(true);
                                                                        }, 5500);
                                                                        return () => clearTimeout(closure_0);
                                                                      }
                                                                    }
                                                                    cResult[75] = tmp4.hintContainer;
                                                                    cResult[76] = tmp4.hintOverlay;
                                                                    cResult[77] = tmp71Result;
                                                                    tmp69 = tmp71Result;
                                                                  }
                                                                  const obj24 = { animated: true, style: tmp63, variant: "text-sm/medium", children: tmp64 };
                                                                  cResult[67] = tmp63;
                                                                  cResult[68] = tmp64;
                                                                  const tmp68 = sharedValue(tmp(tmp2[22]).Text, obj24);
                                                                  class J {
                                                                    constructor() {
                                                                      let closure_0;
                                                                      const timeout = setTimeout(() => {
                                                                        const result = sharedValue.set(false);
                                                                        const result1 = sharedValue1.set(true);
                                                                      }, 5500);
                                                                      return () => clearTimeout(closure_0);
                                                                    }
                                                                  }
                                                                  tmp66 = tmp68;
                                                                }
                                                                const items10 = [animatedStyles.headerSecondary, tmp4.textCentered];
                                                                cResult[62] = animatedStyles.headerSecondary;
                                                                cResult[63] = tmp4.textCentered;
                                                                cResult[64] = items10;
                                                                tmp63 = items10;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            if (!isScreenReaderEnabled) {
                                              let tmp54Result2;
                                              if (!tmp(tmp2[23]).isThumbstickScrollDevice) {
                                                const obj25 = { children: items11 };
                                                const obj26 = { pointerEvents: "none", style: tmp4.selectionBorder };
                                                items11 = [sharedValue(isSynced, obj26), ];
                                                size = { ref, data: themes, renderItem: tmp34, style: obj27, width: onThemeSelected.THEME_ITEM_WIDTH + onThemeSelected.THEME_ITEM_HORIZONTAL_MARGIN, height: onThemeSelected.THEME_ITEM_HEIGHT, loop: false, pagingEnabled: true, defaultIndex, onSnapToItem: onThemeSelected, scrollAnimationDuration: 200, onProgressChange: tmp31 };
                                                obj27 = { width: null, justifyContent: "center", alignItems: "center", marginLeft: onThemeSelected.THEME_ITEM_HORIZONTAL_MARGIN };
                                                class J {
                                                  constructor() {
                                                    let closure_0;
                                                    const timeout = setTimeout(() => {
                                                      const result = sharedValue.set(false);
                                                      const result1 = sharedValue1.set(true);
                                                    }, 5500);
                                                    return () => clearTimeout(closure_0);
                                                  }
                                                }
                                                items11[1] = sharedValue(currentThemeIndex(tmp2[24]), size);
                                                tmp54Result2 = sharedValue1(closure_12, obj25);
                                              }
                                              const obj28 = { children: tmp54Result2 };
                                              const tmp54Result = sharedValue(isSynced, obj28);
                                              cResult[50] = defaultIndex;
                                              cResult[51] = deviceWidth;
                                              cResult[52] = isScreenReaderEnabled;
                                              cResult[53] = tmp31;
                                              class J {
                                                constructor() {
                                                  let closure_0;
                                                  const timeout = setTimeout(() => {
                                                    const result = sharedValue.set(false);
                                                    const result1 = sharedValue1.set(true);
                                                  }, 5500);
                                                  return () => clearTimeout(closure_0);
                                                }
                                              }
                                              cResult[55] = tmp33;
                                              cResult[56] = tmp34;
                                              cResult[57] = tmp4.a11yThemeList;
                                              cResult[58] = tmp4.a11yThemeListScroll;
                                              cResult[59] = tmp4.selectionBorder;
                                              cResult[60] = themes;
                                              cResult[61] = tmp54Result;
                                              tmp53 = tmp54Result;
                                            }
                                            ({ a11yThemeListScroll: obj21.style, a11yThemeList: obj21.contentContainerStyle } = tmp4);
                                            const obj29 = {
                                              horizontal: true,
                                              style: null,
                                              contentContainerStyle: null,
                                              children: themes.map((item, index) => {
                                                                                          let obj2;
                                                                                          const obj = { children: closure_15(obj2) };
                                                                                          obj2 = { item, index };
                                                                                          return authStore(React3, obj, "theme-" + index);
                                                                                        })
                                            };
                                            tmp54Result2 = tmp54(hasOnyxNux, obj29);
                                          }
                                        }
                                        const obj30 = { style: tmp38, children: items12 };
                                        items12 = [tmp39, tmp46];
                                        const tmp52 = sharedValue1(isSynced, obj30);
                                        cResult[46] = tmp4.titleContainer;
                                        class J {
                                          constructor() {
                                            let closure_0;
                                            const timeout = setTimeout(() => {
                                              const result = sharedValue.set(false);
                                              const result1 = sharedValue1.set(true);
                                            }, 5500);
                                            return () => clearTimeout(closure_0);
                                          }
                                        }
                                        cResult[47] = tmp39;
                                        cResult[48] = tmp46;
                                        cResult[49] = tmp52;
                                        tmp49 = tmp52;
                                      }
                                      const obj31 = { animated: true, style: headerPrimary, variant: "heading-sm/semibold", children: tmp44 };
                                      const tmp48 = sharedValue(tmp(tmp2[22]).Text, obj31);
                                      cResult[43] = animatedStyles.headerPrimary;
                                      class J {
                                        constructor() {
                                          let closure_0;
                                          const timeout = setTimeout(() => {
                                            const result = sharedValue.set(false);
                                            const result1 = sharedValue1.set(true);
                                          }, 5500);
                                          return () => clearTimeout(closure_0);
                                        }
                                      }
                                      cResult[45] = tmp48;
                                      tmp46 = tmp48;
                                    }
                                  }
                                  let tmp40 = null;
                                  const tmpResult14 = tmp(tmp2[13]);
                                  if (tmpResult14.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
                                    const obj32 = { source: currentThemeIndex(tmp2[21]), style: animatedStyles.iconHeaderSecondary, size: tmp(tmp2[7]).IconSizes.SMALL_20 };
                                    tmp40 = sharedValue(sharedValue2, obj32);
                                  }
                                  cResult[37] = animatedStyles.iconHeaderSecondary;
                                  cResult[38] = currentThemeIndex;
                                  cResult[39] = themes;
                                  cResult[40] = tmp40;
                                  tmp39 = tmp40;
                                }
                              }
                              function le(themePreset) {
                                const index = themePreset.index;
                                let obj = {
                                  themePreset: themePreset.item,
                                  isPreview,
                                  isSelected: index === currentThemeIndex,
                                  onPress() {
                                    if (null != ref.current) {
                                      const current = tmp.current;
                                      const currentIndex = current.getCurrentIndex();
                                      if (currentIndex === index) {
                                        return onThemeSelected(index);
                                      } else {
                                        if (currentIndex !== index) {
                                          if (0 === currentIndex) {
                                            const iter = ref.current;
                                            const obj2 = { count: index };
                                            return iter.next(obj2);
                                          } else {
                                            const current2 = tmp.current;
                                            const obj = { index, animated: true };
                                            current2.scrollTo(obj);
                                          }
                                        }
                                        const current3 = tmp.current;
                                        if (current3 != null) {
                                          const obj3 = { index, animated: true };
                                          current3.scrollTo(obj3);
                                        }
                                      }
                                    }
                                  },
                                  isNew: false
                                };
                                return sharedValue(currentThemeIndex(isPreview[20]), obj);
                              }
                              cResult[33] = currentThemeIndex;
                              cResult[34] = isPreview;
                              cResult[35] = onThemeSelected;
                              cResult[36] = le;
                              tmp34 = le;
                            }
                          }
                          function renderA11yThemeItem(themePreset) {
                            const index = themePreset.index;
                            const obj = {
                              themePreset: themePreset.item,
                              isPreview,
                              isSelected: index === currentThemeIndex,
                              onPress() {
                                return onThemeSelected(index);
                              }
                            };
                            return sharedValue(currentThemeIndex(isPreview[20]), obj);
                          }
                          cResult[29] = currentThemeIndex;
                          cResult[30] = isPreview;
                          cResult[31] = onThemeSelected;
                          cResult[32] = renderA11yThemeItem;
                          tmp33 = renderA11yThemeItem;
                        }
                      }
                    }
                    function getHintText() {
                      let stringResult;
                      const tmp = isPreview;
                      if (tmp) {
                        const obj = MobileThemesUtils;
                        if (obj.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
                          const intl2 = intl4.intl;
                          stringResult = intl2.string(intl4.t.VqGKm0);
                        }
                        return stringResult;
                      }
                      const intl = intl4.intl;
                      const string = intl.string;
                      const t = intl4.t;
                      if (isSynced) {
                        stringResult = string(t.lhV0Y2);
                      } else {
                        stringResult = string(t.d5Gu9A);
                      }
                    }
                    cResult[24] = currentThemeIndex;
                    cResult[25] = isPreview;
                    cResult[26] = isSynced;
                    cResult[27] = themes;
                    cResult[28] = getHintText;
                    class J {
                      constructor() {
                        let closure_0;
                        const timeout = setTimeout(() => {
                          const result = sharedValue.set(false);
                          const result1 = sharedValue1.set(true);
                        }, 5500);
                        return () => clearTimeout(closure_0);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      function onProgressChange(arg0, arg1) {
        const rounded = Math.round(arg1);
        if (Math.abs(arg1 - rounded) > 0.01) {
          const result = sharedValue2.set(0);
        } else {
          let num = 0;
          set2 = sharedValue2.set;
          const withTiming = timing.withTiming;
          timing;
          if (null != themes[rounded]) {
            num = 0;
            const obj = MobileThemesUtils;
            if (obj.isHexagonCampaignMobileTheme(themes[rounded])) {
              num = 1;
            }
          }
          set2(withTiming(num, timingPresets.timingStandard));
        }
        if (rounded !== ref.current) {
          const obj2 = HapticUtils;
          const result1 = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          tmp9.current = rounded;
          closure_14(rounded);
        }
        const tmp17 = hasOnyxNux;
        if (tmp17) {
          const _Math = Math;
          const tmp21 = arg1 < num2 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp21) {
            const result2 = sharedValue1.set(true);
          }
          set = sharedValue.set;
          const value = sharedValue1.get();
          const tmp27 = !value && !tmp21;
          const result3 = set(tmp27);
        }
      }
      cResult[15] = sharedValue2;
      cResult[16] = deviceWidth;
      cResult[17] = sharedValue1;
      class J {
        constructor() {
          let closure_0;
          const timeout = setTimeout(() => {
            const result = sharedValue.set(false);
            const result1 = sharedValue1.set(true);
          }, 5500);
          return () => clearTimeout(closure_0);
        }
      }
      cResult[19] = sharedValue;
      cResult[20] = tmp28;
      cResult[21] = num2;
      cResult[22] = themes;
      cResult[23] = onProgressChange;
      tmp31 = onProgressChange;
    }
    class J {
      constructor() {
        let closure_0;
        const timeout = setTimeout(() => {
          const result = sharedValue.set(false);
          const result1 = sharedValue1.set(true);
        }, 5500);
        return () => clearTimeout(closure_0);
      }
    }
    const items13 = [sharedValue, sharedValue1];
    cResult[9] = sharedValue1;
    cResult[10] = sharedValue;
    cResult[11] = J;
    cResult[12] = items13;
    tmp26 = items13;
    tmp25 = J;
  }
  class K {
    constructor() {
      let num = 0;
      set = sharedValue2.set;
      const withTiming = timing.withTiming;
      timing;
      if (closure_12) {
        num = 1;
      }
      const result = set(withTiming(num, timingPresets.timingStandard));
    }
  }
  const items14 = [tmp12, sharedValue2];
  cResult[5] = sharedValue2;
  cResult[6] = tmp12;
  cResult[7] = K;
  cResult[8] = items14;
  tmp21 = items14;
  tmp20 = K;
}) : (function SettingsAppearanceThemeCarousel(themes) {
  let View2;
  let animatedStyles;
  let closure_4;
  let closure_8;
  let defaultIndex;
  let deviceWidth;
  let intl3;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items7;
  let items8;
  let items9;
  let obj13;
  let obj14;
  let obj19;
  let obj29;
  let onThemeSelected;
  let str;
  let str2;
  let tmp36;
  let tmp41;
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  ({ animatedStyles, hasOnyxNux: closure_4, onThemeSelected } = themes);
  let sharedValue2;
  let closure_13;
  const isSynced = themes.isSynced;
  let tmp = closure_14();
  let tmp2 = themes;
  const tmp3 = isPreview;
  let obj = themes(isPreview[12]);
  let obj2 = deviceWidth;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const ref = deviceWidth.useRef(null);
  ThemeTypes = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  constants = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => theme.theme === constants.ONYX);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj3 = themes(isPreview[6]);
  const sharedValue = obj3.useSharedValue(false);
  const obj4 = themes(isPreview[6]);
  const sharedValue1 = obj4.useSharedValue(false);
  const obj5 = themes(isPreview[13]);
  let result = obj5.isHexagonCampaignMobileTheme(themes[currentThemeIndex]);
  let c11 = result;
  const items1 = [themes];
  const memo = deviceWidth.useMemo(() => themes.some(MobileThemesUtils.isHexagonCampaignMobileTheme), items1);
  const obj6 = themes(isPreview[14]);
  const hexagonCampaignPerkAvailability = obj6.useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
  let num = 0;
  const useSharedValue = themes(isPreview[6]).useSharedValue;
  const tmp10 = constants;
  const tmp12 = themes(isPreview[6]);
  if (result) {
    num = 1;
  }
  sharedValue2 = useSharedValue(num);
  const items2 = [result, sharedValue2];
  const effect = obj2.useEffect(() => {
    let num = 0;
    set = sharedValue2.set;
    const withTiming = timing.withTiming;
    timing;
    if (c11) {
      num = 1;
    }
    const result = set(withTiming(num, timingPresets.timingStandard));
  }, items2);
  const fn = function z() {
    const obj = { opacity: sharedValue2.get() };
    return obj;
  };
  fn.__closure = { badgeOpacity: sharedValue2 };
  fn.__workletHash = 4931734771173;
  fn.__initData = __initData3;
  const items3 = [sharedValue, sharedValue1];
  const tmp2Result = tmp2(tmp3[6]);
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const effect1 = obj2.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [onThemeSelected];
  closure_13 = obj2.useMemo(() => {
    const obj = _modDef12;
    return obj.debounce(onThemeSelected, 180);
  }, items4);
  const items5 = [isPreview, onThemeSelected, currentThemeIndex];
  const callback = obj2.useCallback((themePreset) => {
    const index = themePreset.index;
    let obj = {
      themePreset: themePreset.item,
      isPreview,
      isSelected: index === currentThemeIndex,
      onPress() {
        if (null != ref.current) {
          const current = tmp.current;
          const currentIndex = current.getCurrentIndex();
          if (currentIndex === index) {
            return onThemeSelected(index);
          } else {
            if (currentIndex !== index) {
              if (0 === currentIndex) {
                const iter = ref.current;
                const obj2 = { count: index };
                return iter.next(obj2);
              } else {
                const current2 = tmp.current;
                const obj = { index, animated: true };
                current2.scrollTo(obj);
              }
            }
            const current3 = tmp.current;
            if (current3 != null) {
              const obj3 = { index, animated: true };
              current3.scrollTo(obj3);
            }
          }
        }
      },
      isNew: false
    };
    return sharedValue1(currentThemeIndex(isPreview[20]), obj);
  }, items5);
  const tmp2Result4 = tmp2(tmp3[6]);
  class X {
    constructor() {
      let str;
      const withTiming = timing.withTiming;
      let num = 0;
      timing;
      const obj = sharedValue;
      if (sharedValue.get()) {
        num = 1;
      }
      const obj2 = { opacity: withTiming(num, timingPresets.timingStandard), pointerEvents: str };
      str = "none";
      if (obj.get()) {
        str = "auto";
      }
      return obj2;
    }
  }
  X.__closure = { withTiming: tmp2(tmp3[15]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: tmp2(tmp3[16]).timingStandard };
  X.__workletHash = 12494364562679;
  X.__initData = __initData4;
  ({ withTiming: tmp2(tmp3[15]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: tmp2(tmp3[16]).timingStandard });
  const animatedStyle1 = tmp2Result4.useAnimatedStyle(X);
  let tmp21 = null;
  const tmp2Result5 = tmp2(tmp3[13]);
  if (tmp2Result5.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
    const obj9 = { source: currentThemeIndex(tmp3[21]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[7]).IconSizes.SMALL_20 };
    tmp21 = sharedValue1(closure_13, obj9);
  }
  const items6 = [tmp21, ];
  const obj10 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: obj14.getName() };
  obj14 = themes[currentThemeIndex];
  const Text = tmp2(tmp3[22]).Text;
  items6[1] = sharedValue1(Text, obj10);
  if (!isScreenReaderEnabled) {
    let tmp25Result7;
    let stringResult;
    if (!tmp2(tmp3[23]).isThumbstickScrollDevice) {
      let tmp27 = sharedValue2;
      const obj11 = { children: items7 };
      const obj12 = { pointerEvents: "none", style: tmp.selectionBorder };
      items7 = [tmp25(tmp20, obj12), ];
      size = {
        ref,
        data: themes,
        renderItem: callback,
        style: obj13,
        width: ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN,
        height: ref.THEME_ITEM_HEIGHT,
        loop: false,
        pagingEnabled: true,
        defaultIndex,
        onSnapToItem: onThemeSelected,
        scrollAnimationDuration: 200,
        onProgressChange(arg0, arg1) {
              const rounded = Math.round(arg1);
              if (Math.abs(arg1 - rounded) > 0.01) {
                const result = sharedValue2.set(0);
              } else {
                let num = 0;
                set2 = sharedValue2.set;
                const withTiming = timing.withTiming;
                timing;
                if (null != themes[rounded]) {
                  num = 0;
                  const obj = MobileThemesUtils;
                  if (obj.isHexagonCampaignMobileTheme(themes[rounded])) {
                    num = 1;
                  }
                }
                set2(withTiming(num, timingPresets.timingStandard));
              }
              if (rounded !== ref.current) {
                const obj2 = HapticUtils;
                const result1 = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
                tmp9.current = rounded;
                closure_13(rounded);
              }
              const tmp17 = closure_4;
              if (tmp17) {
                const _Math = Math;
                const tmp21 = arg1 < closure_8 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
                if (tmp21) {
                  const result2 = sharedValue1.set(true);
                }
                set = sharedValue.set;
                const value = sharedValue1.get();
                const tmp27 = !value && !tmp21;
                const result3 = set(tmp27);
              }
            }
      };
      obj13 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: ref.THEME_ITEM_HORIZONTAL_MARGIN };
      items7[1] = sharedValue1(currentThemeIndex(tmp3[24]), size);
      tmp25Result7 = tmp19(sharedValue2, obj11);
    }
    const obj16 = { animated: true, style: items8, variant: "text-sm/medium", children: null };
    items8 = [animatedStyles.headerSecondary, tmp.textCentered];
    const obj15 = { children: tmp25Result7 };
    const tmp25Result = sharedValue1(closure_4, obj15);
    if (isPreview) {
      const tmp2Result6 = tmp2(tmp3[13]);
      if (tmp2Result6.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
        const intl2 = tmp2(tmp3[19]).intl;
        stringResult = intl2.string(tmp2(tmp3[19]).t.VqGKm0);
      }
      obj16.children = stringResult;
      const tmp25Result4 = sharedValue1(tmp32, obj16);
      let tmp19Result3 = tmp25Result4;
      if (memo) {
        const obj17 = { style: tmp.hintContainer, children: items9 };
        const obj18 = { style: tmp36, pointerEvents: str, accessibilityElementsHidden: !result, importantForAccessibility: str2, children: sharedValue1(currentThemeIndex(tmp3[25]), obj19) };
        str = "none";
        tmp36 = !result && tmp.hidden;
        if (result) {
          str = "auto";
        }
        str2 = "no-hide-descendants";
        if (result) {
          str2 = "auto";
        }
        obj19 = { animatedStyles };
        items9 = [tmp25(tmp20, obj18), ];
        let tmp25Result5 = !result;
        if (tmp25Result5) {
          const obj20 = { style: tmp.hintOverlay, children: tmp25Result4 };
          tmp25Result5 = tmp25(tmp20, obj20);
        }
        items9[1] = tmp25Result5;
        tmp19Result3 = tmp19(tmp20, obj17);
      }
      const obj22 = { style: items10, children: tmp41 };
      items10 = [tmp.badgeSlot, animatedStyle];
      tmp41 = result;
      const obj21 = { style: tmp.swatchesGroup, children: items11 };
      const View = currentThemeIndex(tmp3[6]).View;
      const tmp39 = sharedValue2;
      if (result) {
        let tmp25Result6;
        if (hexagonCampaignPerkAvailability === sharedValue.LOCKED) {
          const obj23 = { theme: ThemeTypes.DARK, children: sharedValue1(tmp2(tmp3[27]).HexagonCampaignExtendPerkBadge, {}) };
          const ThemeContextProvider = tmp2(tmp3[26]).ThemeContextProvider;
          tmp25Result6 = tmp25(ThemeContextProvider, obj23);
        } else {
          const obj24 = { variant: "overlay", perk: tmp10.CLIENT_THEME };
          tmp25Result6 = tmp25(tmp40(tmp3[27]), obj24);
        }
        tmp41 = tmp25Result6;
      }
      const obj25 = { children: items12 };
      items11 = [tmp25(View, obj22), tmp25Result];
      items12 = [tmp19(tmp20, obj21), ];
      const obj26 = { style: tmp.labelGroup, children: items13 };
      items13 = [tmp26, tmp19Result3];
      items12[1] = c11(closure_4, obj26);
      const obj27 = { style: tmp.container, children: items18 };
      const obj28 = { style: tmp.floatingNuxContainer, children: c11(View2, obj29) };
      obj29 = { style: items14, children: items16 };
      items14 = [tmp.floatingNux, animatedStyle1, , ];
      ({ bgSurfaceOverlay: arr16[2], borderFaint: arr16[3] } = animatedStyles);
      const obj30 = { style: items15, source: currentThemeIndex(tmp3[28]), size: tmp2(tmp3[7]).IconSizes.REFRESH_SMALL_16 };
      items15 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      const tmp19Result4 = c11(tmp39, obj25);
      View2 = tmp40(tmp3[6]).View;
      items16 = [tmp25(closure_13, obj30), ];
      const obj31 = { animated: true, style: items17, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: intl3.string(tmp2(tmp3[19]).t.y2b7CA) };
      items17 = [animatedStyles.textNormal, tmp.uppercase];
      const Text2 = tmp2(tmp3[22]).Text;
      intl3 = tmp2(tmp3[19]).intl;
      items16[1] = sharedValue1(Text2, obj31);
      items18 = [tmp25(tmp20, obj28), tmp19Result4];
      return c11(closure_4, obj27);
    }
    const intl = tmp2(tmp3[19]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[19]).t;
    if (isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
  }
  const obj32 = {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      let obj2;
      let closure_0 = index;
      const obj = { children: sharedValue1(currentThemeIndex(isPreview[20]), obj2) };
      obj2 = {
        themePreset,
        isPreview,
        isSelected: index === currentThemeIndex,
        onPress() {
          return onThemeSelected(index);
        }
      };
      return sharedValue1(closure_4, obj, "theme-" + index);
    })
  };
  tmp25Result7 = tmp25(onThemeSelected, obj32);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default tmp8;
