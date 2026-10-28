// Module ID: 16901
// Function ID: 16902
// Name: SettingsAppearanceThemeCarousel
// Dependencies: [32, 19, 17, 16902, 1084, 5029, 21, 5085, 1199, 5004, 587, 558, 576, 5303, 5238, 16121, 6748, 1627, 5032, 5242, 5245, 12, 5248, 1125, 16903, 9935, 5270, 10550, 16653, 16144, 16906, 2]

// Module 16901 (SettingsAppearanceThemeCarousel)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import intl4 from "intl" /* 1125 */;
import native from "native" /* 1199 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5238 */;
import timing from "timing" /* 5242 */;
import HapticUtils from "HapticUtils" /* 5248 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 16902 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5029 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5085 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let constants, set, set2;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let items;
let map1;
let metroRequire;
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
const timingPresets = tmp2(5245);
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ HexagonCampaignPerk: c9, HexagonCampaignPerkAvailability: c10 } = HexagonCampaignConstants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let closure_14 = ReanimatedRexport.createAnimatedComponent(native.Icon);
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
let closure_15 = createStyles(obj);
let __initData = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{badgeOpacity}=this.__closure;return{opacity:badgeOpacity.get()};}" };
let closure_17 = { code: "function SettingsAppearanceThemeCarouselTsx2(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?\"auto\":\"none\"};}" };
let __initData2 = { code: "function SettingsAppearanceThemeCarouselTsx3(){const{badgeOpacity}=this.__closure;return{opacity:badgeOpacity.get()};}" };
const __initData3 = { code: "function SettingsAppearanceThemeCarouselTsx4(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};}" };
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsAppearanceThemeCarousel(themes) {
  let animatedStyles;
  let closure_16;
  let first;
  let hasOnyxNux;
  let isPreview;
  let items;
  let items1;
  let items10;
  let items11;
  let items3;
  let items5;
  let items6;
  let items7;
  let obj18;
  let rounded;
  let tmp12;
  let tmp14;
  let tmp = themes;
  let tmp2 = isPreview;
  let obj = themes(isPreview[12]);
  const cResult = obj.c(131);
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  isPreview = themes.isPreview;
  const defaultIndex = themes.defaultIndex;
  const deviceWidth = themes.deviceWidth;
  const isSynced = themes.isSynced;
  ({ animatedStyles, hasOnyxNux } = themes);
  const onThemeSelected = themes.onThemeSelected;
  const tmp4 = rounded();
  let obj2 = themes(isPreview[13]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = deviceWidth;
  const ref = deviceWidth.useRef(null);
  constants = deviceWidth.useRef(defaultIndex);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(theme) {
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
  const tmpResult = tmp(tmp2[7]);
  const sharedValue = tmpResult.useSharedValue(false);
  const tmpResult9 = tmp(tmp2[7]);
  const sharedValue1 = tmpResult9.useSharedValue(false);
  if (cResult[1] !== themes[currentThemeIndex]) {
    const tmpResult10 = tmp(tmp2[14]);
    let result = tmpResult10.isHexagonCampaignMobileTheme(tmp11);
    cResult[1] = themes[currentThemeIndex];
    cResult[2] = result;
    tmp12 = result;
  } else {
    tmp12 = cResult[2];
  }
  let closure_13 = tmp12;
  if (cResult[3] !== themes) {
    const someResult = themes.some(tmp(tmp2[14]).isHexagonCampaignMobileTheme);
    cResult[3] = themes;
    cResult[4] = someResult;
    tmp14 = someResult;
  } else {
    tmp14 = cResult[4];
  }
  const findIndexResult1 = themes.findIndex(tmp(tmp2[14]).isHexagonCampaignMobileTheme);
  rounded = Math.ceil(deviceWidth / (onThemeSelected.THEME_ITEM_WIDTH + onThemeSelected.THEME_ITEM_HORIZONTAL_MARGIN));
  if (cResult[5] === rounded) {
    let tmp19;
    if (cResult[6] === findIndexResult1) {
      tmp19 = cResult[7];
    }
    __initData = tmp19;
    if (cResult[8] === defaultIndex) {
      let tmp21 = defaultIndex;
      class U {
        constructor() {
          return closure_16(defaultIndex);
        }
      }
      const first1 = tmp22[0];
      let closure_18 = tmp24;
      let tmp25 = !first1 && tmp19(currentThemeIndex);
      if (tmp25) {
        tmp22[1](true);
      }
      const useTrackHexagonCampaignContentViewed = tmp(tmp2[15]).useTrackHexagonCampaignContentViewed;
      tmp(tmp2[15]);
      const CLIENT_THEME_SETTINGS = tmp(tmp2[16]).QuestContent.CLIENT_THEME_SETTINGS;
      let tmp28 = tmp14;
      const THEME_PICKER = tmp(tmp2[15]).HexagonCampaignContentSurface.THEME_PICKER;
      if (tmp14) {
        tmp28 = first1 || isScreenReaderEnabled || tmp(tmp2[17]).isThumbstickScrollDevice;
        const tmp29 = first1 || isScreenReaderEnabled || tmp(tmp2[17]).isThumbstickScrollDevice;
      }
      const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(CLIENT_THEME_SETTINGS, THEME_PICKER, tmp28);
      let str = "SettingsAppearanceThemeCarousel";
      let tmp31 = constants;
      const tmpResult12 = tmp(tmp2[18]);
      const hexagonCampaignPerkAvailability = tmpResult12.useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
      let num11 = 0;
      const useSharedValue = tmp(tmp2[7]).useSharedValue;
      tmp(tmp2[7]);
      if (tmp12) {
        num11 = 1;
      }
      const sharedValue2 = useSharedValue(num11);
      if (cResult[11] === sharedValue2) {
        let tmp35;
        let tmp36;
        if (cResult[12] === tmp12) {
          tmp35 = cResult[13];
          tmp36 = cResult[14];
        }
        const effect = obj3.useEffect(tmp35, tmp36);
        const tmpResult14 = tmp(tmp2[7]);
        class U {
          constructor() {
            return closure_16(defaultIndex);
          }
        }
        const obj4 = { badgeOpacity: sharedValue2 };
        tmp38.__closure = obj4;
        tmp38.__workletHash = 11624303332519;
        tmp38.__initData = __initData;
        const animatedStyle = tmpResult14.useAnimatedStyle(tmp38);
        if (cResult[15] === sharedValue1) {
          let tmp41;
          let tmp42;
          let tmp44;
          if (cResult[16] === sharedValue) {
            tmp41 = cResult[17];
            tmp42 = cResult[18];
          }
          const effect1 = obj3.useEffect(tmp42, tmp41);
          if (cResult[19] !== onThemeSelected) {
            currentThemeIndex(tmp2[21]);
            class U {
              constructor() {
                return closure_16(defaultIndex);
              }
            }
            cResult[19] = onThemeSelected;
            cResult[20] = tmp47;
            tmp44 = tmp47;
          } else {
            tmp44 = cResult[20];
          }
          class U {
            constructor() {
              return closure_16(defaultIndex);
            }
          }
          if (cResult[21] === sharedValue2) {
            if (cResult[22] === deviceWidth) {
              if (cResult[23] === first1) {
                if (cResult[24] === sharedValue1) {
                  if (cResult[25] === hasOnyxNux) {
                    if (cResult[26] === tmp19) {
                      if (cResult[27] === sharedValue) {
                        if (cResult[28] === tmp44) {
                          if (cResult[29] === num2) {
                            let tmp48;
                            if (cResult[30] === themes) {
                              tmp48 = cResult[31];
                            }
                            if (cResult[32] === currentThemeIndex) {
                              if (cResult[33] === isPreview) {
                                if (cResult[34] === isSynced) {
                                  let tmp49;
                                  if (cResult[35] === themes) {
                                    tmp49 = cResult[36];
                                  }
                                  if (cResult[37] === currentThemeIndex) {
                                    if (cResult[38] === isPreview) {
                                      let tmp50;
                                      if (cResult[39] === onThemeSelected) {
                                        tmp50 = cResult[40];
                                      }
                                      let closure_21 = tmp50;
                                      if (cResult[41] === currentThemeIndex) {
                                        if (cResult[42] === isPreview) {
                                          let tmp51;
                                          if (cResult[43] === onThemeSelected) {
                                            tmp51 = cResult[44];
                                          }
                                          function xe() {
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
                                          const tmpResult15 = tmp(tmp2[7]);
                                          class U {
                                            constructor() {
                                              return closure_16(defaultIndex);
                                            }
                                          }
                                          const useAnimatedStyle = tmpResult15.useAnimatedStyle;
                                          tmp54[0] = tmp(tmp2[19]).withTiming;
                                          tmp54[1] = sharedValue;
                                          tmp54[2] = tmp(tmp2[20]).timingStandard;
                                          xe.__closure = tmp54;
                                          xe.__workletHash = 1532887600753;
                                          xe.__initData = first1;
                                          const animatedStyle1 = useAnimatedStyle(xe);
                                          if (cResult[45] === animatedStyles.iconHeaderSecondary) {
                                            if (cResult[46] === currentThemeIndex) {
                                              let tmp58;
                                              if (cResult[47] === themes) {
                                                tmp58 = cResult[48];
                                              }
                                              const headerPrimary = animatedStyles.headerPrimary;
                                              class U {
                                                constructor() {
                                                  return closure_16(defaultIndex);
                                                }
                                              }
                                              if (cResult[51] === animatedStyles.headerPrimary) {
                                                let tmp64;
                                                if (cResult[52] === tmp63) {
                                                  tmp64 = cResult[53];
                                                }
                                                if (cResult[54] === tmp4.titleContainer) {
                                                  if (cResult[55] === tmp58) {
                                                    let tmp67;
                                                    let tmp70;
                                                    if (cResult[56] === tmp64) {
                                                      tmp67 = cResult[57];
                                                    }
                                                    if (cResult[58] === defaultIndex) {
                                                      if (cResult[59] === deviceWidth) {
                                                        if (cResult[60] === isScreenReaderEnabled) {
                                                          if (cResult[61] === tmp48) {
                                                            if (cResult[62] === onThemeSelected) {
                                                              if (cResult[63] === tmp50) {
                                                                if (cResult[64] === tmp51) {
                                                                  if (cResult[65] === tmp4.a11yThemeList) {
                                                                    if (cResult[66] === tmp4.a11yThemeListScroll) {
                                                                      if (cResult[67] === tmp4.selectionBorder) {
                                                                        if (cResult[68] === themes) {
                                                                          tmp70 = cResult[69];
                                                                        }
                                                                        if (cResult[70] === animatedStyles.headerSecondary) {
                                                                          let tmp80;
                                                                          let tmp81;
                                                                          if (cResult[71] === tmp4.textCentered) {
                                                                            tmp80 = cResult[72];
                                                                          }
                                                                          if (cResult[73] !== tmp49) {
                                                                            const tmp49Result = tmp49();
                                                                            cResult[73] = tmp49;
                                                                            class U {
                                                                              constructor() {
                                                                                return closure_16(defaultIndex);
                                                                              }
                                                                            }
                                                                            cResult[74] = tmp49Result;
                                                                            tmp81 = tmp49Result;
                                                                          } else {
                                                                            tmp81 = cResult[74];
                                                                          }
                                                                          if (cResult[75] === tmp80) {
                                                                            let tmp83;
                                                                            if (cResult[76] === tmp81) {
                                                                              tmp83 = cResult[77];
                                                                            }
                                                                            if (cResult[78] === animatedStyles) {
                                                                              if (cResult[79] === tmp14) {
                                                                                if (cResult[80] === tmp83) {
                                                                                  if (cResult[81] === tmp12) {
                                                                                    if (cResult[82] === tmp4.hidden) {
                                                                                      if (cResult[83] === tmp4.hintContainer) {
                                                                                        let tmp85;
                                                                                        if (cResult[84] === tmp4.hintOverlay) {
                                                                                          tmp85 = cResult[85];
                                                                                        }
                                                                                        if (cResult[86] === animatedStyle) {
                                                                                          let tmp87;
                                                                                          if (cResult[87] === tmp4.badgeSlot) {
                                                                                            tmp87 = cResult[88];
                                                                                          }
                                                                                          if (cResult[89] === hexagonCampaignPerkAvailability) {
                                                                                            let tmp88;
                                                                                            if (cResult[90] === tmp12) {
                                                                                              tmp88 = cResult[91];
                                                                                            }
                                                                                            if (cResult[92] === tmp87) {
                                                                                              let tmp92;
                                                                                              if (cResult[93] === tmp88) {
                                                                                                tmp92 = cResult[94];
                                                                                              }
                                                                                              if (cResult[95] === tmp4.swatchesGroup) {
                                                                                                if (cResult[96] === tmp70) {
                                                                                                  let tmp95;
                                                                                                  if (cResult[97] === tmp92) {
                                                                                                    tmp95 = cResult[98];
                                                                                                  }
                                                                                                  if (cResult[99] === tmp85) {
                                                                                                    if (cResult[100] === tmp4.labelGroup) {
                                                                                                      let tmp98;
                                                                                                      if (cResult[101] === tmp67) {
                                                                                                        tmp98 = cResult[102];
                                                                                                      }
                                                                                                      if (cResult[103] === tmp95) {
                                                                                                        let tmp101;
                                                                                                        if (cResult[104] === tmp98) {
                                                                                                          tmp101 = cResult[105];
                                                                                                        }
                                                                                                        if (cResult[106] === animatedStyle1) {
                                                                                                          if (cResult[107] === animatedStyles.bgSurfaceOverlay) {
                                                                                                            if (cResult[108] === animatedStyles.borderFaint) {
                                                                                                              let tmp106;
                                                                                                              if (cResult[109] === tmp4.floatingNux) {
                                                                                                                tmp106 = cResult[110];
                                                                                                              }
                                                                                                              if (cResult[111] === animatedStyles.iconInteractive) {
                                                                                                                let tmp107;
                                                                                                                if (cResult[112] === tmp4.arrowLeft) {
                                                                                                                  tmp107 = cResult[113];
                                                                                                                }
                                                                                                                if (cResult[114] === animatedStyles.textNormal) {
                                                                                                                  let tmp111;
                                                                                                                  let tmp113;
                                                                                                                  if (cResult[115] === tmp4.uppercase) {
                                                                                                                    tmp111 = cResult[116];
                                                                                                                  }
                                                                                                                  const _Symbol = Symbol;
                                                                                                                  class U {
                                                                                                                    constructor() {
                                                                                                                      return closure_16(defaultIndex);
                                                                                                                    }
                                                                                                                  }
                                                                                                                  if (cResult[118] !== tmp111) {
                                                                                                                    const obj5 = { animated: true, style: tmp111, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: null };
                                                                                                                    class U {
                                                                                                                      constructor() {
                                                                                                                        return closure_16(defaultIndex);
                                                                                                                      }
                                                                                                                    }
                                                                                                                    const tmp115 = sharedValue(tmp(tmp2[26]).Text, obj5);
                                                                                                                    cResult[118] = tmp111;
                                                                                                                    cResult[119] = tmp115;
                                                                                                                    tmp113 = tmp115;
                                                                                                                  } else {
                                                                                                                    tmp113 = cResult[119];
                                                                                                                  }
                                                                                                                  if (cResult[120] === tmp106) {
                                                                                                                    if (cResult[121] === tmp107) {
                                                                                                                      let tmp116;
                                                                                                                      if (cResult[122] === tmp113) {
                                                                                                                        tmp116 = cResult[123];
                                                                                                                      }
                                                                                                                      if (cResult[124] === tmp4.floatingNuxContainer) {
                                                                                                                        let tmp120;
                                                                                                                        if (cResult[125] === tmp116) {
                                                                                                                          tmp120 = cResult[126];
                                                                                                                        }
                                                                                                                        if (cResult[127] === tmp101) {
                                                                                                                          if (cResult[128] === tmp4.container) {
                                                                                                                            let tmp123;
                                                                                                                            if (cResult[129] === tmp120) {
                                                                                                                              tmp123 = cResult[130];
                                                                                                                            }
                                                                                                                            return tmp123;
                                                                                                                          }
                                                                                                                        }
                                                                                                                        class U {
                                                                                                                          constructor() {
                                                                                                                            return closure_16(defaultIndex);
                                                                                                                          }
                                                                                                                        }
                                                                                                                        const obj6 = { style: tmp104, children: items };
                                                                                                                        items = [tmp120, tmp101];
                                                                                                                        const tmp125 = sharedValue1(isSynced, obj6);
                                                                                                                        cResult[127] = tmp101;
                                                                                                                        cResult[128] = tmp4.container;
                                                                                                                        cResult[129] = tmp120;
                                                                                                                        cResult[130] = tmp125;
                                                                                                                        tmp123 = tmp125;
                                                                                                                      }
                                                                                                                      class U {
                                                                                                                        constructor() {
                                                                                                                          return closure_16(defaultIndex);
                                                                                                                        }
                                                                                                                      }
                                                                                                                      const obj7 = { style: tmp105, children: tmp116 };
                                                                                                                      const tmp122 = sharedValue(isSynced, obj7);
                                                                                                                      cResult[124] = tmp4.floatingNuxContainer;
                                                                                                                      cResult[125] = tmp116;
                                                                                                                      cResult[126] = tmp122;
                                                                                                                      tmp120 = tmp122;
                                                                                                                    }
                                                                                                                  }
                                                                                                                  const obj8 = { style: tmp106, children: items1 };
                                                                                                                  items1 = [tmp107, tmp113];
                                                                                                                  const tmp119 = sharedValue1(currentThemeIndex(tmp2[7]).View, obj8);
                                                                                                                  cResult[120] = tmp106;
                                                                                                                  cResult[121] = tmp107;
                                                                                                                  cResult[122] = tmp113;
                                                                                                                  cResult[123] = tmp119;
                                                                                                                  tmp116 = tmp119;
                                                                                                                }
                                                                                                                const items2 = [, ];
                                                                                                                class U {
                                                                                                                  constructor() {
                                                                                                                    return closure_16(defaultIndex);
                                                                                                                  }
                                                                                                                }
                                                                                                                items2[1] = tmp4.uppercase;
                                                                                                                cResult[114] = animatedStyles.textNormal;
                                                                                                                cResult[115] = tmp4.uppercase;
                                                                                                                cResult[116] = items2;
                                                                                                                tmp111 = items2;
                                                                                                              }
                                                                                                              class U {
                                                                                                                constructor() {
                                                                                                                  return closure_16(defaultIndex);
                                                                                                                }
                                                                                                              }
                                                                                                              const obj9 = { style: items3, source: currentThemeIndex(tmp2[30]), size: tmp(tmp2[8]).IconSizes.REFRESH_SMALL_16 };
                                                                                                              items3 = [tmp4.arrowLeft, animatedStyles.iconInteractive];
                                                                                                              const tmp110 = sharedValue(findIndexResult1, obj9);
                                                                                                              cResult[111] = animatedStyles.iconInteractive;
                                                                                                              cResult[112] = tmp4.arrowLeft;
                                                                                                              cResult[113] = tmp110;
                                                                                                              tmp107 = tmp110;
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                        const items4 = [, , , ];
                                                                                                        class U {
                                                                                                          constructor() {
                                                                                                            return closure_16(defaultIndex);
                                                                                                          }
                                                                                                        }
                                                                                                        items4[1] = animatedStyle1;
                                                                                                        ({ bgSurfaceOverlay: arr11[2], borderFaint: arr11[3] } = animatedStyles);
                                                                                                        cResult[106] = animatedStyle1;
                                                                                                        cResult[107] = animatedStyles.bgSurfaceOverlay;
                                                                                                        cResult[108] = animatedStyles.borderFaint;
                                                                                                        cResult[109] = tmp4.floatingNux;
                                                                                                        cResult[110] = items4;
                                                                                                        tmp106 = items4;
                                                                                                      }
                                                                                                      class U {
                                                                                                        constructor() {
                                                                                                          return closure_16(defaultIndex);
                                                                                                        }
                                                                                                      }
                                                                                                      const obj10 = { children: items5 };
                                                                                                      items5 = [tmp95, tmp98];
                                                                                                      const tmp103 = sharedValue1(closure_13, obj10);
                                                                                                      cResult[103] = tmp95;
                                                                                                      cResult[104] = tmp98;
                                                                                                      cResult[105] = tmp103;
                                                                                                      tmp101 = tmp103;
                                                                                                    }
                                                                                                  }
                                                                                                  class U {
                                                                                                    constructor() {
                                                                                                      return closure_16(defaultIndex);
                                                                                                    }
                                                                                                  }
                                                                                                  const obj11 = { style: tmp4.labelGroup, children: items6 };
                                                                                                  items6 = [tmp67, tmp85];
                                                                                                  const tmp100 = sharedValue1(isSynced, obj11);
                                                                                                  cResult[99] = tmp85;
                                                                                                  cResult[100] = tmp4.labelGroup;
                                                                                                  cResult[101] = tmp67;
                                                                                                  cResult[102] = tmp100;
                                                                                                  tmp98 = tmp100;
                                                                                                }
                                                                                              }
                                                                                              class U {
                                                                                                constructor() {
                                                                                                  return closure_16(defaultIndex);
                                                                                                }
                                                                                              }
                                                                                              const obj12 = { style: tmp4.swatchesGroup, children: items7 };
                                                                                              items7 = [tmp92, tmp70];
                                                                                              const tmp97 = sharedValue1(isSynced, obj12);
                                                                                              cResult[95] = tmp4.swatchesGroup;
                                                                                              cResult[96] = tmp70;
                                                                                              cResult[97] = tmp92;
                                                                                              cResult[98] = tmp97;
                                                                                              tmp95 = tmp97;
                                                                                            }
                                                                                            class U {
                                                                                              constructor() {
                                                                                                return closure_16(defaultIndex);
                                                                                              }
                                                                                            }
                                                                                            const obj13 = { style: tmp87, children: tmp88 };
                                                                                            const tmp94 = sharedValue(currentThemeIndex(tmp2[7]).View, obj13);
                                                                                            cResult[92] = tmp87;
                                                                                            cResult[93] = tmp88;
                                                                                            cResult[94] = tmp94;
                                                                                            tmp92 = tmp94;
                                                                                          }
                                                                                          let tmp89 = tmp12;
                                                                                          class U {
                                                                                            constructor() {
                                                                                              return closure_16(defaultIndex);
                                                                                            }
                                                                                          }
                                                                                          if (tmp89) {
                                                                                            const obj14 = { variant: "overlay", perk: null };
                                                                                            class U {
                                                                                              constructor() {
                                                                                                return closure_16(defaultIndex);
                                                                                              }
                                                                                            }
                                                                                            tmp89 = sharedValue(currentThemeIndex(tmp2[29]), obj14);
                                                                                          }
                                                                                          cResult[89] = hexagonCampaignPerkAvailability;
                                                                                          cResult[90] = tmp12;
                                                                                          cResult[91] = tmp89;
                                                                                          tmp88 = tmp89;
                                                                                        }
                                                                                        const items8 = [, ];
                                                                                        class U {
                                                                                          constructor() {
                                                                                            return closure_16(defaultIndex);
                                                                                          }
                                                                                        }
                                                                                        items8[1] = animatedStyle;
                                                                                        cResult[86] = animatedStyle;
                                                                                        cResult[87] = tmp4.badgeSlot;
                                                                                        cResult[88] = items8;
                                                                                        tmp87 = items8;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                            class U {
                                                                              constructor() {
                                                                                return closure_16(defaultIndex);
                                                                              }
                                                                            }
                                                                            cResult[78] = animatedStyles;
                                                                            cResult[79] = tmp14;
                                                                            cResult[80] = tmp83;
                                                                            cResult[81] = tmp12;
                                                                            cResult[82] = tmp4.hidden;
                                                                            cResult[83] = tmp4.hintContainer;
                                                                            cResult[84] = tmp4.hintOverlay;
                                                                            cResult[85] = tmp83;
                                                                            tmp85 = tmp86;
                                                                          }
                                                                          class U {
                                                                            constructor() {
                                                                              return closure_16(defaultIndex);
                                                                            }
                                                                          }
                                                                          const obj15 = { animated: true, style: tmp80, variant: "text-sm/medium", children: tmp81 };
                                                                          const tmp84 = sharedValue(tmp(tmp2[26]).Text, obj15);
                                                                          cResult[75] = tmp80;
                                                                          cResult[76] = tmp81;
                                                                          cResult[77] = tmp84;
                                                                          tmp83 = tmp84;
                                                                        }
                                                                        const items9 = [, ];
                                                                        class U {
                                                                          constructor() {
                                                                            return closure_16(defaultIndex);
                                                                          }
                                                                        }
                                                                        items9[1] = tmp4.textCentered;
                                                                        cResult[70] = animatedStyles.headerSecondary;
                                                                        cResult[71] = tmp4.textCentered;
                                                                        cResult[72] = items9;
                                                                        tmp80 = items9;
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
                                                    class U {
                                                      constructor() {
                                                        return closure_16(defaultIndex);
                                                      }
                                                    }
                                                    if (!isScreenReaderEnabled) {
                                                      if (!tmp(tmp2[17]).isThumbstickScrollDevice) {
                                                        const obj16 = { children: items10 };
                                                        class U {
                                                          constructor() {
                                                            return closure_16(defaultIndex);
                                                          }
                                                        }
                                                        tmp75[1] = tmp4.selectionBorder;
                                                        items10 = [sharedValue(tmp72, tmp75), ];
                                                        size = { ref, data: themes, renderItem: tmp51, style: obj18, width: tmp17.THEME_ITEM_WIDTH + tmp17.THEME_ITEM_HORIZONTAL_MARGIN, height: tmp17.THEME_ITEM_HEIGHT, loop: false, pagingEnabled: true, defaultIndex, onSnapToItem: onThemeSelected, scrollAnimationDuration: 200, onProgressChange: tmp48 };
                                                        obj18 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: onThemeSelected.THEME_ITEM_HORIZONTAL_MARGIN };
                                                        items10[1] = sharedValue(currentThemeIndex(tmp2[27]), size);
                                                        let tmp71Result = sharedValue1(closure_13, obj16);
                                                      }
                                                      class U {
                                                        constructor() {
                                                          return closure_16(defaultIndex);
                                                        }
                                                      }
                                                      cResult[58] = defaultIndex;
                                                      cResult[59] = deviceWidth;
                                                      cResult[60] = isScreenReaderEnabled;
                                                      cResult[61] = tmp48;
                                                      cResult[62] = onThemeSelected;
                                                      cResult[63] = tmp50;
                                                      cResult[64] = tmp51;
                                                      cResult[65] = tmp4.a11yThemeList;
                                                      cResult[66] = tmp4.a11yThemeListScroll;
                                                      cResult[67] = tmp4.selectionBorder;
                                                      cResult[68] = themes;
                                                      cResult[69] = tmp79;
                                                      tmp70 = tmp79;
                                                    }
                                                    ({ a11yThemeListScroll: obj17.style, a11yThemeList: obj17.contentContainerStyle } = tmp4);
                                                    const obj20 = {
                                                      horizontal: true,
                                                      style: null,
                                                      contentContainerStyle: null,
                                                      children: themes.map((item, index) => {
                                                                                                          let obj2;
                                                                                                          const obj = { children: closure_21(obj2) };
                                                                                                          obj2 = { item, index };
                                                                                                          return unpackModuleId(hasOwnProperty, obj, "theme-" + index);
                                                                                                        })
                                                    };
                                                    tmp71Result = tmp71(hasOnyxNux, obj20);
                                                  }
                                                }
                                                class U {
                                                  constructor() {
                                                    return closure_16(defaultIndex);
                                                  }
                                                }
                                                const obj21 = { style: tmp57, children: items11 };
                                                items11 = [tmp58, tmp64];
                                                const tmp69 = sharedValue1(isSynced, obj21);
                                                cResult[54] = tmp4.titleContainer;
                                                cResult[55] = tmp58;
                                                cResult[56] = tmp64;
                                                cResult[57] = tmp69;
                                                tmp67 = tmp69;
                                              }
                                              const obj22 = { animated: true, style: headerPrimary, variant: "heading-sm/semibold", children: tmp63 };
                                              const tmp66 = sharedValue(tmp(tmp2[26]).Text, obj22);
                                              cResult[51] = animatedStyles.headerPrimary;
                                              cResult[52] = tmp63;
                                              cResult[53] = tmp66;
                                              tmp64 = tmp66;
                                            }
                                          }
                                          let tmp59 = null;
                                          const tmpResult16 = tmp(tmp2[14]);
                                          if (tmpResult16.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
                                            const obj23 = { source: currentThemeIndex(tmp2[25]), style: animatedStyles.iconHeaderSecondary, size: tmp(tmp2[8]).IconSizes.SMALL_20 };
                                            class U {
                                              constructor() {
                                                return closure_16(defaultIndex);
                                              }
                                            }
                                            tmp59 = sharedValue(findIndexResult1, obj23);
                                          }
                                          cResult[45] = animatedStyles.iconHeaderSecondary;
                                          cResult[46] = currentThemeIndex;
                                          cResult[47] = themes;
                                          cResult[48] = tmp59;
                                          tmp58 = tmp59;
                                        }
                                      }
                                      class U {
                                        constructor() {
                                          return closure_16(defaultIndex);
                                        }
                                      }
                                      cResult[41] = currentThemeIndex;
                                      cResult[42] = isPreview;
                                      cResult[43] = onThemeSelected;
                                      cResult[44] = tmp52;
                                      tmp51 = tmp52;
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
                                    return sharedValue(currentThemeIndex(isPreview[24]), obj);
                                  }
                                  class U {
                                    constructor() {
                                      return closure_16(defaultIndex);
                                    }
                                  }
                                  cResult[37] = currentThemeIndex;
                                  cResult[38] = isPreview;
                                  cResult[39] = onThemeSelected;
                                  cResult[40] = renderA11yThemeItem;
                                  tmp50 = renderA11yThemeItem;
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
                            class U {
                              constructor() {
                                return closure_16(defaultIndex);
                              }
                            }
                            cResult[32] = currentThemeIndex;
                            cResult[33] = isPreview;
                            cResult[34] = isSynced;
                            cResult[35] = themes;
                            cResult[36] = getHintText;
                            tmp49 = getHintText;
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
            const tmp = !first1 && closure_16(arg1);
            if (tmp) {
              closure_18(true);
            }
            rounded = Math.round(arg1);
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
              tmp13.current = rounded;
              closure_1_20(rounded);
            }
            const tmp21 = hasOnyxNux;
            if (tmp21) {
              const _Math = Math;
              const tmp25 = arg1 < num2 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
              if (tmp25) {
                const result2 = sharedValue1.set(true);
              }
              set = sharedValue.set;
              const value = sharedValue1.get();
              const tmp31 = !value && !tmp25;
              const result3 = set(tmp31);
            }
          }
          cResult[21] = sharedValue2;
          cResult[22] = deviceWidth;
          cResult[23] = first1;
          cResult[24] = sharedValue1;
          cResult[25] = hasOnyxNux;
          cResult[26] = tmp19;
          cResult[27] = sharedValue;
          cResult[28] = tmp44;
          cResult[29] = num2;
          cResult[30] = themes;
          cResult[31] = onProgressChange;
          tmp48 = onProgressChange;
        }
        function ce() {
          let closure_0;
          const timeout = setTimeout(() => {
            const result = sharedValue.set(false);
            const result1 = sharedValue1.set(true);
          }, 5500);
          return () => clearTimeout(closure_0);
        }
        const items12 = [sharedValue, sharedValue1];
        cResult[15] = sharedValue1;
        cResult[16] = sharedValue;
        cResult[17] = items12;
        cResult[18] = ce;
        tmp42 = ce;
        tmp41 = items12;
      }
      function ie() {
        let num = 0;
        set = sharedValue2.set;
        const withTiming = timing.withTiming;
        timing;
        if (closure_13) {
          num = 1;
        }
        const result = set(withTiming(num, timingPresets.timingStandard));
      }
      const items13 = [tmp12, sharedValue2];
      cResult[11] = sharedValue2;
      cResult[12] = tmp12;
      cResult[13] = ie;
      cResult[14] = items13;
      tmp36 = items13;
      tmp35 = ie;
    }
    class U {
      constructor() {
        return closure_16(defaultIndex);
      }
    }
    cResult[8] = defaultIndex;
    cResult[9] = tmp19;
    cResult[10] = U;
  }
  function isHexagonOnScreenAt(arg0) {
    let tmp2 = findIndexResult1 >= 0;
    if (tmp2) {
      const _Math = Math;
      tmp2 = Math.abs(arg0 - tmp) < rounded / 2;
    }
    return tmp2;
  }
  cResult[5] = rounded;
  cResult[6] = findIndexResult1;
  cResult[7] = isHexagonOnScreenAt;
  tmp19 = isHexagonOnScreenAt;
}) : (function SettingsAppearanceThemeCarousel(themes) {
  let View2;
  let animatedStyles;
  let closure_18;
  let closure_5;
  let closure_9;
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
  let items19;
  let items8;
  let items9;
  let obj12;
  let obj14;
  let obj18;
  let obj27;
  let onThemeSelected;
  let str;
  let str2;
  let tmp36Result6;
  let tmp46;
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  const defaultIndex = themes.defaultIndex;
  const deviceWidth = themes.deviceWidth;
  ({ animatedStyles, hasOnyxNux: closure_5, onThemeSelected } = themes);
  let isThumbstickScrollDevice;
  let sharedValue2;
  __initData2 = undefined;
  const isSynced = themes.isSynced;
  let tmp = isThumbstickScrollDevice();
  let tmp2 = themes;
  let tmp3 = isPreview;
  let obj = themes(isPreview[13]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let obj2 = deviceWidth;
  deviceWidth.useRef(null);
  const ref = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  constants = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => theme.theme === constants.ONYX);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj3 = themes(isPreview[7]);
  const sharedValue = obj3.useSharedValue(false);
  const obj4 = themes(isPreview[7]);
  const sharedValue1 = obj4.useSharedValue(false);
  const obj5 = themes(isPreview[14]);
  let result = obj5.isHexagonCampaignMobileTheme(themes[currentThemeIndex]);
  let c12 = result;
  const items1 = [themes];
  const memo = deviceWidth.useMemo(() => themes.some(MobileThemesUtils.isHexagonCampaignMobileTheme), items1);
  const items2 = [themes];
  const memo1 = deviceWidth.useMemo(() => themes.findIndex(MobileThemesUtils.isHexagonCampaignMobileTheme), items2);
  let rounded = Math.ceil(deviceWidth / (ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN));
  const tmp13 = defaultIndex(deviceWidth.useState(() => {
    let tmp3 = memo1 >= 0;
    if (tmp3) {
      const _Math = Math;
      tmp3 = Math.abs(tmp - tmp2) < rounded / 2;
    }
    return tmp3;
  }), 2);
  isThumbstickScrollDevice = tmp13[0];
  let closure_16 = tmp14;
  let tmp15 = !isThumbstickScrollDevice;
  if (tmp15) {
    let num = 0;
    let tmp16 = memo1 >= 0;
    if (tmp16) {
      let _Math = Math;
      tmp16 = Math.abs(currentThemeIndex - memo1) < rounded / 2;
    }
    tmp15 = tmp16;
  }
  if (tmp15) {
    tmp13[1](true);
  }
  const useTrackHexagonCampaignContentViewed = tmp2(tmp3[15]).useTrackHexagonCampaignContentViewed;
  tmp2(tmp3[15]);
  const CLIENT_THEME_SETTINGS = tmp2(tmp3[16]).QuestContent.CLIENT_THEME_SETTINGS;
  let tmp19 = memo;
  const THEME_PICKER = tmp2(tmp3[15]).HexagonCampaignContentSurface.THEME_PICKER;
  if (memo) {
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = isScreenReaderEnabled;
    }
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = tmp2(tmp3[17]).isThumbstickScrollDevice;
    }
    tmp19 = isThumbstickScrollDevice;
  }
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(CLIENT_THEME_SETTINGS, THEME_PICKER, tmp19);
  const tmp2Result7 = tmp2(tmp3[18]);
  const hexagonCampaignPerkAvailability = tmp2Result7.useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
  let num2 = 0;
  const useSharedValue = tmp2(tmp3[7]).useSharedValue;
  tmp2(tmp3[7]);
  const tmp21 = constants;
  if (result) {
    num2 = 1;
  }
  sharedValue2 = useSharedValue(num2);
  const items3 = [result, sharedValue2];
  const effect = obj2.useEffect(() => {
    let num = 0;
    set = sharedValue2.set;
    const withTiming = timing.withTiming;
    timing;
    if (c12) {
      num = 1;
    }
    const result = set(withTiming(num, timingPresets.timingStandard));
  }, items3);
  const tmp2Result9 = tmp2(tmp3[7]);
  class Y {
    constructor() {
      const obj = { opacity: sharedValue2.get() };
      return obj;
    }
  }
  Y.__closure = { badgeOpacity: sharedValue2 };
  Y.__workletHash = 4931734771173;
  Y.__initData = __initData2;
  const items4 = [sharedValue, sharedValue1];
  const animatedStyle = tmp2Result9.useAnimatedStyle(Y);
  const effect1 = obj2.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items4);
  const items5 = [onThemeSelected];
  __initData2 = obj2.useMemo(() => {
    const obj = _modDef12;
    return obj.debounce(onThemeSelected, 180);
  }, items5);
  const items6 = [isPreview, onThemeSelected, currentThemeIndex];
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
    return sharedValue1(currentThemeIndex(isPreview[24]), obj);
  }, items6);
  const tmp2Result10 = tmp2(tmp3[7]);
  class U {
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
  U.__closure = { withTiming: tmp2(tmp3[19]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: tmp2(tmp3[20]).timingStandard };
  U.__workletHash = 12494364562679;
  U.__initData = __initData3;
  ({ withTiming: tmp2(tmp3[19]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: tmp2(tmp3[20]).timingStandard });
  const animatedStyle1 = tmp2Result10.useAnimatedStyle(U);
  let tmp32 = null;
  const tmp2Result11 = tmp2(tmp3[14]);
  if (tmp2Result11.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
    let tmp34 = rounded;
    const obj8 = { source: currentThemeIndex(tmp3[25]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[8]).IconSizes.SMALL_20 };
    tmp32 = sharedValue1(rounded, obj8);
  }
  const items7 = [tmp32, ];
  const obj9 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: obj14.getName() };
  obj14 = themes[currentThemeIndex];
  const Text = tmp2(tmp3[26]).Text;
  items7[1] = sharedValue1(Text, obj9);
  if (!isScreenReaderEnabled) {
    let tmp36Result7;
    let stringResult;
    if (!tmp2(tmp3[17]).isThumbstickScrollDevice) {
      const obj10 = { children: items8 };
      const obj11 = { pointerEvents: "none", style: tmp.selectionBorder };
      items8 = [tmp36(tmp31, obj11), ];
      size = {
        ref,
        data: themes,
        renderItem: callback,
        style: obj12,
        width: tmp11.THEME_ITEM_WIDTH + tmp11.THEME_ITEM_HORIZONTAL_MARGIN,
        height: tmp11.THEME_ITEM_HEIGHT,
        loop: false,
        pagingEnabled: true,
        defaultIndex,
        onSnapToItem: onThemeSelected,
        scrollAnimationDuration: 200,
        onProgressChange(arg0, arg1) {
              let tmp = !isThumbstickScrollDevice;
              if (tmp) {
                let tmp3 = memo1 >= 0;
                if (tmp3) {
                  const _Math = Math;
                  tmp3 = Math.abs(arg1 - tmp2) < rounded / 2;
                }
                tmp = tmp3;
              }
              if (tmp) {
                closure_16(true);
              }
              rounded = Math.round(arg1);
              if (Math.abs(arg1 - rounded) > 0.01) {
                const result = sharedValue2.set(0);
              } else {
                let num3 = 0;
                set2 = sharedValue2.set;
                const withTiming = timing.withTiming;
                timing;
                if (null != themes[rounded]) {
                  num3 = 0;
                  const obj = MobileThemesUtils;
                  if (obj.isHexagonCampaignMobileTheme(themes[rounded])) {
                    num3 = 1;
                  }
                }
                set2(withTiming(num3, timingPresets.timingStandard));
              }
              if (rounded !== ref.current) {
                const obj2 = HapticUtils;
                const result1 = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
                tmp16.current = rounded;
                closure_18(rounded);
              }
              const tmp24 = closure_5;
              if (tmp24) {
                const _Math2 = Math;
                const tmp28 = arg1 < closure_9 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
                if (tmp28) {
                  const result2 = sharedValue1.set(true);
                }
                set = sharedValue.set;
                const value = sharedValue1.get();
                const tmp34 = !value && !tmp28;
                const result3 = set(tmp34);
              }
            }
      };
      obj12 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: ref.THEME_ITEM_HORIZONTAL_MARGIN };
      items8[1] = sharedValue1(currentThemeIndex(tmp3[27]), size);
      tmp36Result7 = tmp30(memo1, obj10);
    }
    const obj15 = { animated: true, style: items9, variant: "text-sm/medium", children: null };
    items9 = [animatedStyles.headerSecondary, tmp.textCentered];
    const obj13 = { children: tmp36Result7 };
    const tmp36Result = sharedValue1(closure_5, obj13);
    if (isPreview) {
      const tmp2Result12 = tmp2(tmp3[14]);
      if (tmp2Result12.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
        const intl2 = tmp2(tmp3[23]).intl;
        stringResult = intl2.string(tmp2(tmp3[23]).t.VqGKm0);
      }
      obj15.children = stringResult;
      const tmp36Result4 = sharedValue1(tmp42, obj15);
      let tmp30Result3 = tmp36Result4;
      if (memo) {
        const obj16 = { style: tmp.hintContainer, children: items10 };
        const obj17 = { style: tmp46, pointerEvents: str, accessibilityElementsHidden: !result, importantForAccessibility: str2, children: sharedValue1(currentThemeIndex(tmp3[28]), obj18) };
        str = "none";
        tmp46 = !result && tmp.hidden;
        if (result) {
          str = "auto";
        }
        str2 = "no-hide-descendants";
        if (result) {
          str2 = "auto";
        }
        obj18 = { animatedStyles };
        items10 = [tmp36(tmp31, obj17), ];
        let tmp36Result5 = !result;
        if (tmp36Result5) {
          const obj19 = { style: tmp.hintOverlay, children: tmp36Result4 };
          tmp36Result5 = tmp36(tmp31, obj19);
        }
        items10[1] = tmp36Result5;
        tmp30Result3 = tmp30(tmp31, obj16);
      }
      const obj21 = { style: items11, children: tmp36Result6 };
      items11 = [tmp.badgeSlot, animatedStyle];
      tmp36Result6 = result;
      const obj20 = { style: tmp.swatchesGroup, children: items12 };
      const View = currentThemeIndex(tmp3[7]).View;
      const tmp49 = memo1;
      if (result) {
        tmp36Result6 = hexagonCampaignPerkAvailability !== sharedValue.LOCKED;
      }
      if (tmp36Result6) {
        const obj22 = { variant: "overlay", perk: tmp21.CLIENT_THEME };
        tmp36Result6 = tmp36(tmp50(tmp3[29]), obj22);
      }
      const obj23 = { children: items13 };
      items12 = [tmp36(View, obj21), tmp36Result];
      items13 = [c12(tmp31, obj20), ];
      const obj24 = { style: tmp.labelGroup, children: items14 };
      items14 = [tmp37, tmp30Result3];
      items13[1] = c12(closure_5, obj24);
      const obj25 = { style: tmp.container, children: items19 };
      const obj26 = { style: tmp.floatingNuxContainer, children: c12(View2, obj27) };
      obj27 = { style: items15, children: items17 };
      items15 = [tmp.floatingNux, animatedStyle1, , ];
      ({ bgSurfaceOverlay: arr17[2], borderFaint: arr17[3] } = animatedStyles);
      const obj28 = { style: items16, source: currentThemeIndex(tmp3[30]), size: tmp2(tmp3[8]).IconSizes.REFRESH_SMALL_16 };
      items16 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      const tmp30Result4 = c12(tmp49, obj23);
      View2 = tmp50(tmp3[7]).View;
      items17 = [tmp36(rounded, obj28), ];
      const obj29 = { animated: true, style: items18, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: intl3.string(tmp2(tmp3[23]).t.y2b7CA) };
      items18 = [animatedStyles.textNormal, tmp.uppercase];
      const Text2 = tmp2(tmp3[26]).Text;
      intl3 = tmp2(tmp3[23]).intl;
      items17[1] = sharedValue1(Text2, obj29);
      items19 = [tmp36(tmp31, obj26), tmp30Result4];
      return c12(closure_5, obj25);
    }
    const intl = tmp2(tmp3[23]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[23]).t;
    if (isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
  }
  const obj30 = {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      let obj2;
      let closure_0 = index;
      const obj = { children: sharedValue1(currentThemeIndex(isPreview[24]), obj2) };
      obj2 = {
        themePreset,
        isPreview,
        isSelected: index === currentThemeIndex,
        onPress() {
          return onThemeSelected(index);
        }
      };
      return sharedValue1(closure_5, obj, "theme-" + index);
    })
  };
  tmp36Result7 = tmp36(onThemeSelected, obj30);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default tmp8;
