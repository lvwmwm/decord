// Module ID: 16355
// Function ID: 16356
// Name: HexagonCampaignSheet
// Dependencies: [5, 32, 19, 17, 1208, 1392, 15618, 4994, 5264, 9864, 1255, 1098, 21, 1412, 1411, 9220, 4969, 587, 558, 576, 4997, 504, 7251, 7276, 14739, 4996, 1633, 2053, 9865, 16356, 5661, 1128, 5208, 16354, 10624, 5232, 16361, 7246, 15851, 5242, 16362, 6985, 7293, 16363, 5263, 2]

// Module 16355 (HexagonCampaignSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1255 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1411 */;
import DisplayNameFont from "DisplayNameFont" /* 1412 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5264 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9220 */;
import AppIconConstants from "AppIconConstants" /* 9864 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1208 */;
import UserStore from "UserStore" /* 1392 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15618 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4994 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, c3, c4, importDefault, perk;

let Platform;
let StyleSheet;
let closure_12;
let closure_16;
let closure_17;
let closure_18;
let items;
let metroRequire;
let obj10;
let obj11;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ Platform, View: metroRequire, StyleSheet } = react_native);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HexagonCampaignPerk: unpackModuleId, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const isHexagonCampaignAppIcon = AppIconConstants.isHexagonCampaignAppIcon;
const HEXAGON_GRADIENT_PRESET = ClientThemesConstants.HEXAGON_GRADIENT_PRESET;
const Fonts = Constants.Fonts;
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
const HexagonCampaignSheet_str = "HexagonCampaignSheet";
let c20 = 143.48;
let obj = { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId: DisplayNameEffect.DisplayNameEffect.SOLID, colors: [] };
let PRIMARY_SEMIBOLD = useDisplayNameStylesFont.DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
if (PRIMARY_SEMIBOLD == null) {
  PRIMARY_SEMIBOLD = Fonts.PRIMARY_SEMIBOLD;
}
let createStyles = createStyles_mod;
let obj2 = { content: obj3, card: obj4, cardShade: obj5, previewArea: obj6, scaledPreviewContainer: { width: 288 }, scaledPreview: rect, rows: obj7, rowIcon: size, fontRowIcon: obj8, fontRowIconText: { fontFamily: PRIMARY_SEMIBOLD }, badgeRow: obj9, footer: obj10, legal: obj11 };
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj4 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_52 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { height: 274, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center" };
rect = { position: "absolute", top: 0, left: 0, width: 360, transform: items, transformOrigin: "top left" };
items = [{ scale: 0.8 }];
obj7 = { paddingTop: nativeDefault.space.PX_16 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 0 };
obj8 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj9 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj10 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj11 = { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_16 };
let closure_22 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScaledPreview(children) {
  let PX_12;
  let closure_129_0;
  let first;
  let tmp5;
  let tmp8;
  obj = react2;
  const cResult = obj.c(12);
  children = children.children;
  const tmp3 = closure_22();
  [tmp5, closure_129_0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(nativeEvent) {
      closure_1_0(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (null != tmp5) {
    const _Math = Math;
    PX_12 = Math.max((274 - 0.8 * tmp5) / 2, 0);
  } else {
    PX_12 = nativeDefault.space.PX_12;
  }
  if (cResult[1] !== PX_12) {
    const obj2 = { marginTop: PX_12 };
    cResult[1] = PX_12;
    cResult[2] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp3.scaledPreviewContainer) {
    let tmp9;
    if (cResult[4] === tmp8) {
      tmp9 = cResult[5];
    }
    if (cResult[6] === children) {
      let tmp10;
      if (cResult[7] === tmp3.scaledPreview) {
        tmp10 = cResult[8];
      }
      if (cResult[9] === tmp9) {
        let tmp14;
        if (cResult[10] === tmp10) {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
      const obj3 = { style: tmp9, children: tmp10 };
      const tmp17 = authStore3(metroRequire, obj3);
      cResult[9] = tmp9;
      cResult[10] = tmp10;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { style: tmp3.scaledPreview, onLayout: first, children };
    const tmp13 = authStore3(metroRequire, obj4);
    cResult[6] = children;
    cResult[7] = tmp3.scaledPreview;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  const items = [tmp3.scaledPreviewContainer, tmp8];
  cResult[3] = tmp3.scaledPreviewContainer;
  cResult[4] = tmp8;
  cResult[5] = items;
  tmp9 = items;
}) : (function ScaledPreview(children) {
  let PX_12;
  let c0;
  let items;
  let obj2;
  let tmp3;
  c0 = undefined;
  children = children.children;
  const tmp = closure_22();
  [tmp3, c0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp3) {
    const _Math = Math;
    PX_12 = Math.max((274 - 0.8 * tmp3) / 2, 0);
  } else {
    PX_12 = nativeDefault.space.PX_12;
  }
  obj = { style: items, children: authStore3(metroRequire, obj2) };
  items = [tmp.scaledPreviewContainer, { marginTop: PX_12 }];
  obj2 = { style: tmp.scaledPreview, onLayout: callback, children };
  return authStore3(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function usePerkSelectable(arg0) {

}
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignSheet() {
  let analyticsLocations;
  let closure_3;
  let closure_5;
  let currentUser;
  let items4;
  let obj14;
  let obj5;
  let obj8;
  let stateFromStores;
  let tmp10;
  let tmp13Result;
  let tmp48;
  let tmp5;
  let tmp59;
  let tmp6;
  let tmp9;
  let tmp = stateFromStores;
  let tmp2 = analyticsLocations;
  obj = stateFromStores(analyticsLocations[19]);
  const cResult = obj.c(115);
  const tmp4 = closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [currentUser];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[21]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [closure_7];
    const fn2 = function v() {
      return closure_7.shouldSync("appearance");
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult10 = tmp(tmp2[21]);
  const stateFromStores1 = tmpResult10.useStateFromStores(tmp9, tmp10);
  const tmp14 = stateFromStores1(tmp2[22]);
  analyticsLocations = tmp14(stateFromStores1(tmp2[23]).QUEST_HOME_PAGE).analyticsLocations;
  const tmpResult11 = tmp(tmp2[24]);
  let HEXAGON = tmpResult11.useCurrentAppIcon();
  if (typeof usePerkSelectable === "function") {
    tmp(tmp2[20]);
    const tmp18 = HexagonCampaignSheet_str;
    const tmp20 = closure_12;
    if (typeof usePerkSelectable === "function") {
      tmp(tmp2[20]);
      if (typeof usePerkSelectable === "function") {
        const tmpResult14 = tmp(tmp2[20]);
        const tmp28 = tmpResult14.useHexagonCampaignPerkAvailability(tmp25, tmp18) === tmp20.SELECTABLE;
        if (cResult[4] === tmp19 === tmp21) {
          if (cResult[5] === tmp23 === tmp24) {
            let tmp29;
            let tmp31;
            let tmp30;
            let tmp35;
            let tmp34;
            let tmp40;
            if (cResult[6] === tmp28) {
              tmp29 = cResult[7];
            }
            _asyncToGenerator = tmp29;
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [HexagonCampaignPersistedStore];
              class X {
                constructor() {
                  return HexagonCampaignPersistedStore.hasAppliedPerk;
                }
              }
              cResult[8] = items2;
              cResult[9] = X;
              tmp31 = X;
              tmp30 = items2;
            } else {
              tmp30 = cResult[8];
              tmp31 = cResult[9];
            }
            const _Symbol2 = Symbol;
            const tmpResult15 = tmp(tmp2[21]);
            const stateFromStores2 = tmpResult15.useStateFromStores(tmp30, tmp31);
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const items3 = [HexagonCampaignPersistedStore];
              class K {
                constructor() {
                  return HexagonCampaignPersistedStore.previousPerkValues;
                }
              }
              cResult[10] = items3;
              cResult[11] = K;
              tmp35 = K;
              tmp34 = items3;
            } else {
              tmp34 = cResult[10];
              tmp35 = cResult[11];
            }
            const tmpResult16 = tmp(tmp2[21]);
            const stateFromStores3 = tmpResult16.useStateFromStores(tmp34, tmp35);
            let displayNameStyles;
            if (stateFromStores != null) {
              displayNameStyles = stateFromStores.displayNameStyles;
            }
            if (cResult[12] !== displayNameStyles) {
              const tmpResult17 = tmp(tmp2[25]);
              const result = tmpResult17.hasHexagonCampaignDisplayNameFont(displayNameStyles);
              class K {
                constructor() {
                  return HexagonCampaignPersistedStore.previousPerkValues;
                }
              }
              cResult[13] = result;
              tmp40 = result;
            } else {
              tmp40 = cResult[13];
            }
            isHexagonCampaignAppIcon(HEXAGON);
            const tmp44 = _slicedToArray;
            const first = _slicedToArray(react.useState(stateFromStores2), 1)[0];
            const _Symbol3 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = {};
              cResult[14] = obj2;
              class K {
                constructor() {
                  return HexagonCampaignPersistedStore.previousPerkValues;
                }
              }
            }
            [tmp48, _slicedToArray] = tmp44(react.useState(tmp46), 2);
            tmp44(react.useState(tmp46), 2);
            if (cResult[15] === tmp29) {
              let tmp49;
              let tmp62;
              if (cResult[16] === tmp48) {
                tmp49 = cResult[17];
              }
              react = tmp49;
              class K {
                constructor() {
                  return HexagonCampaignPersistedStore.previousPerkValues;
                }
              }
              const first1 = tmp56[0];
              closure_7 = tmp56[1];
              currentUser = obj10.useRef(false);
              [tmp59, HexagonCampaignPersistedStore] = tmp44(react.useState(0), 2);
              const _Math = Math;
              const _Symbol4 = Symbol;
              tmp44(react.useState(0), 2);
              const bound = Math.max(tmp13(tmp2[26])().bottom, closure_13);
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                cResult[18] = 4;
                class K {
                  constructor() {
                    return HexagonCampaignPersistedStore.previousPerkValues;
                  }
                }
              } else {
                tmp62 = cResult[18];
              }
              const sum = bound + tmp62;
              let displayNameStyles1;
              if (stateFromStores != null) {
                displayNameStyles1 = stateFromStores.displayNameStyles;
              }
              if (displayNameStyles1 == null) {
                displayNameStyles1 = obj;
              }
              if (cResult[19] === displayNameStyles1) {
                if (cResult[20] === tmp40) {
                  if (cResult[21] === stateFromStores3) {
                    let tmp65;
                    let tmp66;
                    if (cResult[22] === stateFromStores) {
                      tmp65 = cResult[23];
                      tmp66 = cResult[24];
                    }
                    if (cResult[25] === tmp65) {
                      let tmp72;
                      if (cResult[26] === displayNameStyles1) {
                        tmp72 = cResult[27];
                      }
                      let closure_10 = tmp72;
                      if (tmp49[constants.DISPLAY_NAME_STYLE]) {
                        tmp66 = tmp72;
                      }
                      class K {
                        constructor() {
                          return HexagonCampaignPersistedStore.previousPerkValues;
                        }
                      }
                      if (tmp49[constants.APP_ICON]) {
                        HEXAGON = tmp(tmp2[28]).LimitedTimeAppIconIds.HEXAGON;
                      }
                      if (cResult[28] === analyticsLocations) {
                        if (cResult[29] === tmp72) {
                          if (cResult[30] === stateFromStores1) {
                            if (cResult[31] === tmp49) {
                              let tmp74;
                              if (cResult[32] === stateFromStores) {
                                tmp74 = cResult[33];
                              }
                              const _Symbol5 = Symbol;
                              class K {
                                constructor() {
                                  return HexagonCampaignPersistedStore.previousPerkValues;
                                }
                              }
                              if (null == stateFromStores) {
                                return null;
                              } else {
                                let tmp78;
                                let tmp80;
                                let tmp84;
                                let tmp86;
                                const _Symbol10 = Symbol;
                                if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                                  let intl = tmp(tmp2[31]).intl;
                                  const stringResult = intl.string(tmp(tmp2[31]).t.TTUKuI);
                                  class K {
                                    constructor() {
                                      return HexagonCampaignPersistedStore.previousPerkValues;
                                    }
                                  }
                                  cResult[35] = stringResult;
                                  tmp78 = stringResult;
                                } else {
                                  tmp78 = cResult[35];
                                }
                                class K {
                                  constructor() {
                                    return HexagonCampaignPersistedStore.previousPerkValues;
                                  }
                                }
                                if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                                  let obj3 = { gradient: null, absolute: true };
                                  class K {
                                    constructor() {
                                      return HexagonCampaignPersistedStore.previousPerkValues;
                                    }
                                  }
                                  const tmp83 = closure_16(tmp(tmp2[34]).Gradient, obj3);
                                  cResult[36] = tmp83;
                                  tmp80 = tmp83;
                                } else {
                                  tmp80 = cResult[36];
                                }
                                if (cResult[37] !== tmp4.rowIcon) {
                                  let obj4 = { perk: constants.CLIENT_THEME, label: tmp78, icon: closure_16(first1, obj5) };
                                  class K {
                                    constructor() {
                                      return HexagonCampaignPersistedStore.previousPerkValues;
                                    }
                                  }
                                  obj5 = { style: tmp4.rowIcon, children: tmp80 };
                                  cResult[37] = tmp4.rowIcon;
                                  cResult[38] = obj4;
                                  tmp84 = obj4;
                                } else {
                                  tmp84 = cResult[38];
                                }
                                const _Symbol6 = Symbol;
                                if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                                  let intl2 = tmp(tmp2[31]).intl;
                                  const stringResult1 = intl2.string(tmp(tmp2[31]).t.fobter);
                                  class K {
                                    constructor() {
                                      return HexagonCampaignPersistedStore.previousPerkValues;
                                    }
                                  }
                                  cResult[39] = stringResult1;
                                  tmp86 = stringResult1;
                                } else {
                                  tmp86 = cResult[39];
                                }
                                if (cResult[40] === tmp4.fontRowIcon) {
                                  let tmp88;
                                  let tmp89;
                                  if (cResult[41] === tmp4.rowIcon) {
                                    tmp88 = cResult[42];
                                  }
                                  if (cResult[43] !== tmp4.fontRowIconText) {
                                    let obj6 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp4.fontRowIconText, children: "Gg" };
                                    class K {
                                      constructor() {
                                        return HexagonCampaignPersistedStore.previousPerkValues;
                                      }
                                    }
                                    cResult[43] = tmp4.fontRowIconText;
                                    cResult[44] = tmp91;
                                    tmp89 = tmp91;
                                  } else {
                                    tmp89 = cResult[44];
                                  }
                                  if (cResult[45] === tmp88) {
                                    let tmp92;
                                    let tmp98;
                                    if (cResult[46] === tmp89) {
                                      tmp92 = cResult[47];
                                    }
                                    const _Symbol7 = Symbol;
                                    class K {
                                      constructor() {
                                        return HexagonCampaignPersistedStore.previousPerkValues;
                                      }
                                    }
                                    if (cResult[49] !== tmp4.rowIcon) {
                                      let obj7 = { perk: constants.APP_ICON, label: tmp97, icon: closure_16(tmp13Result, obj8) };
                                      class K {
                                        constructor() {
                                          return HexagonCampaignPersistedStore.previousPerkValues;
                                        }
                                      }
                                      obj8 = { id: tmp(tmp2[28]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp4.rowIcon };
                                      cResult[49] = tmp4.rowIcon;
                                      cResult[50] = obj7;
                                      tmp98 = obj7;
                                      tmp13Result = stateFromStores1(tmp2[36]);
                                    } else {
                                      tmp98 = cResult[50];
                                    }
                                    if (cResult[51] === tmp84) {
                                      if (cResult[52] === tmp92) {
                                        let tmp103;
                                        let tmp112;
                                        const _Symbol8 = Symbol;
                                        class K {
                                          constructor() {
                                            return HexagonCampaignPersistedStore.previousPerkValues;
                                          }
                                        }
                                        const _Symbol9 = Symbol;
                                        if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                          const tmp105 = closure_16(stateFromStores1(tmp2[38]), {});
                                          class K {
                                            constructor() {
                                              return HexagonCampaignPersistedStore.previousPerkValues;
                                            }
                                          }
                                          tmp103 = tmp105;
                                        } else {
                                          tmp103 = cResult[56];
                                        }
                                        if (cResult[57] !== tmp4.badgeRow) {
                                          const obj9 = { children: tmp109 };
                                          class K {
                                            constructor() {
                                              return HexagonCampaignPersistedStore.previousPerkValues;
                                            }
                                          }
                                          tmp109[0] = tmp102;
                                          const obj11 = { style: tmp4.badgeRow, children: tmp103 };
                                          tmp109[1] = closure_16(first1, obj11);
                                          cResult[57] = tmp4.badgeRow;
                                          cResult[58] = closure_17(first1, obj9);
                                          const tmp111 = closure_17(first1, obj9);
                                        }
                                        if (cResult[59] !== sum) {
                                          const obj12 = { paddingBottom: sum };
                                          class K {
                                            constructor() {
                                              return HexagonCampaignPersistedStore.previousPerkValues;
                                            }
                                          }
                                          cResult[60] = obj12;
                                          tmp112 = obj12;
                                        } else {
                                          tmp112 = cResult[60];
                                        }
                                        if (cResult[61] === tmp4.footer) {
                                          let tmp113;
                                          let tmp114;
                                          if (cResult[62] === tmp112) {
                                            tmp113 = cResult[63];
                                          }
                                          if (cResult[64] !== first) {
                                            const string = tmp(tmp2[31]).intl.string;
                                            const t = tmp(tmp2[31]).t;
                                            class K {
                                              constructor() {
                                                return HexagonCampaignPersistedStore.previousPerkValues;
                                              }
                                            }
                                            cResult[64] = first;
                                            cResult[65] = tmp115;
                                            tmp114 = tmp115;
                                          } else {
                                            tmp114 = cResult[65];
                                          }
                                          if (cResult[66] === tmp74) {
                                            if (cResult[67] === first1) {
                                              let tmp116;
                                              if (cResult[68] === tmp114) {
                                                tmp116 = cResult[69];
                                              }
                                              if (cResult[70] === tmp113) {
                                                const _Math2 = Math;
                                                const bound1 = Math.max(tmp59 - sum, 0);
                                                class K {
                                                  constructor() {
                                                    return HexagonCampaignPersistedStore.previousPerkValues;
                                                  }
                                                }
                                                if (cResult[75] === tmp49) {
                                                  let username = stateFromStores.globalName;
                                                  if (username == null) {
                                                    username = stateFromStores.username;
                                                  }
                                                  class K {
                                                    constructor() {
                                                      return HexagonCampaignPersistedStore.previousPerkValues;
                                                    }
                                                  }
                                                  const obj13 = { children: closure_16(stateFromStores1(tmp2[40]), obj14) };
                                                  obj14 = { user: stateFromStores, displayName: username, selectedFontId: null, selectedEffectId: null, selectedColors: null, appIconId: HEXAGON, appIconScale: 0.8125, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true };
                                                  ({ fontId: obj32.selectedFontId, effectId: obj32.selectedEffectId, colors: obj32.selectedColors } = tmp66);
                                                  cResult[78] = HEXAGON;
                                                  cResult[79] = tmp66.colors;
                                                  cResult[80] = tmp66.effectId;
                                                  cResult[81] = tmp66.fontId;
                                                  cResult[82] = username;
                                                  cResult[83] = stateFromStores;
                                                  cResult[84] = closure_16(closure_23, obj13);
                                                  const tmp132 = closure_16(closure_23, obj13);
                                                }
                                                let tmp123 = tmp49[tmp16.CLIENT_THEME];
                                                if (tmp123) {
                                                  const obj15 = { children: items4 };
                                                  class K {
                                                    constructor() {
                                                      return HexagonCampaignPersistedStore.previousPerkValues;
                                                    }
                                                  }
                                                  const obj16 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true, angleOverride };
                                                  items4 = [closure_16(tmp(tmp2[34]).Gradient, obj16), ];
                                                  const obj17 = { style: tmp4.cardShade };
                                                  items4[1] = closure_16(first1, obj17);
                                                  tmp123 = closure_17(closure_18, obj15);
                                                }
                                                cResult[75] = tmp49;
                                                cResult[76] = tmp4.cardShade;
                                                cResult[77] = tmp123;
                                              }
                                              class K {
                                                constructor() {
                                                  return HexagonCampaignPersistedStore.previousPerkValues;
                                                }
                                              }
                                              const obj18 = { style: tmp113, onLayout: tmp77, children: tmp116 };
                                              cResult[70] = tmp113;
                                              cResult[71] = tmp116;
                                              cResult[72] = closure_16(first1, obj18);
                                              const tmp120 = closure_16(first1, obj18);
                                            }
                                          }
                                          class K {
                                            constructor() {
                                              return HexagonCampaignPersistedStore.previousPerkValues;
                                            }
                                          }
                                          const obj19 = { size: "lg", grow: true, text: tmp114, onPress: tmp74, loading: first1, disabled: first1 };
                                          const tmp117 = closure_16(tmp(tmp2[39]).Button, obj19);
                                          cResult[66] = tmp74;
                                          cResult[67] = first1;
                                          cResult[68] = tmp114;
                                          cResult[69] = tmp117;
                                          tmp116 = tmp117;
                                        }
                                        const items5 = [tmp4.footer, tmp112];
                                        cResult[61] = tmp4.footer;
                                        cResult[62] = tmp112;
                                        cResult[63] = items5;
                                        tmp113 = items5;
                                      }
                                    }
                                    const items6 = [tmp84, tmp92, tmp98];
                                    cResult[51] = tmp84;
                                    cResult[52] = tmp92;
                                    cResult[53] = tmp98;
                                    cResult[54] = items6;
                                  }
                                  class K {
                                    constructor() {
                                      return HexagonCampaignPersistedStore.previousPerkValues;
                                    }
                                  }
                                  tmp93[0] = constants.DISPLAY_NAME_STYLE;
                                  tmp93[1] = tmp86;
                                  const obj20 = { style: tmp88, children: tmp89 };
                                  tmp93[2] = closure_16(first1, obj20);
                                  cResult[45] = tmp88;
                                  cResult[46] = tmp89;
                                  cResult[47] = tmp93;
                                  tmp92 = tmp93;
                                }
                                const items7 = [, ];
                                ({ rowIcon: arr5[0], fontRowIcon: arr5[1] } = tmp4);
                                cResult[40] = tmp4.fontRowIcon;
                                cResult[41] = tmp4.rowIcon;
                                cResult[42] = items7;
                                tmp88 = items7;
                              }
                            }
                          }
                        }
                      }
                      let closure_0 = _asyncToGenerator(async (arg0, value) => {
                        let intl;
                        let intl2;
                        let obj6;
                        if (c4 === 2) {
                          c4 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp3 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj2 = { value, done: true };
                            return obj2;
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          try {
                            c4 = 2;
                            if (0 === c3) {
                              if (arg0 === 1) {
                                c4 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c4 = 3;
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                const isThemeSynced = tmp;
                                closure_0 = undefined;
                                if (null != closure_0) {
                                  if (!ref.current) {
                                    ref.current = true;
                                    closure_1_7(true);
                                    analyticsLocations = 1;
                                    const obj4 = { selection, displayNameStyles, premiumType: tmp51.premiumType, isThemeSynced, analyticsLocations };
                                    c3 = 2;
                                    c4 = 1;
                                    const obj5 = { value: obj6.applyHexagonCampaignPerks(obj4), done: false };
                                    obj6 = closure_0(analyticsLocations[29]);
                                    return obj5;
                                  }
                                }
                              }
                            } else {
                              if (1 === c3) {
                                analyticsLocations = 0;
                                closure_0 = false;
                              } else if (arg0 === 1) {
                                c4 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                analyticsLocations = 0;
                                c4 = 3;
                                obj = { value, done: true };
                                return obj;
                              } else {
                                closure_0 = value;
                                analyticsLocations = 0;
                              }
                              ref.current = false;
                              closure_1_7(false);
                              if (closure_0) {
                                const tmp14Result = stateFromStores1(analyticsLocations[32]);
                                tmp14Result.hideActionSheet(closure_0(analyticsLocations[33]).HEXAGON_CAMPAIGN_SHEET_KEY);
                                const _Object = Object;
                                const values = Object.values(selection);
                                const _Boolean = Boolean;
                                if (values.some(Boolean)) {
                                  const obj7 = { text: intl2.string(closure_0(analyticsLocations[31]).t.fX2UkH), variant: "success" };
                                  const open2 = stateFromStores1(analyticsLocations[30]).open;
                                  const tmp29 = stateFromStores1(analyticsLocations[30]);
                                  intl2 = closure_0(analyticsLocations[31]).intl;
                                  open2("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj7);
                                }
                              } else {
                                const obj8 = { text: intl.string(closure_0(analyticsLocations[31]).t.F8FvUy) };
                                const open = stateFromStores1(analyticsLocations[30]).open;
                                const tmp14Result2 = stateFromStores1(analyticsLocations[30]);
                                intl = closure_0(analyticsLocations[31]).intl;
                                open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj8);
                              }
                            }
                            c4 = 3;
                            return { value: "IconComponent", done: null };
                          } catch (tmp44) {
                            if (0 === analyticsLocations) {
                              c4 = 3;
                              throw tmp44;
                            } else {
                              c3 = 1;
                            }
                          }
                        }
                      });
                      function handleSave() {
                        return closure_0(...arguments);
                      }
                      cResult[28] = analyticsLocations;
                      cResult[29] = tmp72;
                      cResult[30] = stateFromStores1;
                      cResult[31] = tmp49;
                      cResult[32] = stateFromStores;
                      cResult[33] = handleSave;
                      tmp74 = handleSave;
                    }
                    class K {
                      constructor() {
                        return HexagonCampaignPersistedStore.previousPerkValues;
                      }
                    }
                    cResult[25] = tmp65;
                    cResult[26] = displayNameStyles1;
                    cResult[27] = tmp73;
                    tmp72 = tmp73;
                  }
                }
              }
              const tmp13Result2 = stateFromStores1(tmp2[27]);
              const result1 = tmp13Result2.canUsePremiumProfileCustomization(stateFromStores);
              let tmp68 = displayNameStyles1;
              if (tmp40) {
                const getHexagonCampaignRestoredDisplayNameStyles = tmp(tmp2[25]).getHexagonCampaignRestoredDisplayNameStyles;
                tmp(tmp2[25]);
                class K {
                  constructor() {
                    return HexagonCampaignPersistedStore.previousPerkValues;
                  }
                }
                const obj22 = { currentDisplayNameStyles: undefined, previousDisplayNameStyles: stateFromStores3.displayNameStyles, canUsePremiumProfileCustomization: result1 };
                let hexagonCampaignRestoredDisplayNameStyles = getHexagonCampaignRestoredDisplayNameStyles(obj22);
                if (hexagonCampaignRestoredDisplayNameStyles == null) {
                  hexagonCampaignRestoredDisplayNameStyles = obj;
                }
                tmp68 = hexagonCampaignRestoredDisplayNameStyles;
              }
              cResult[19] = displayNameStyles1;
              cResult[20] = tmp40;
              cResult[21] = stateFromStores3;
              cResult[22] = stateFromStores;
              cResult[23] = result1;
              cResult[24] = tmp68;
              tmp66 = tmp68;
              tmp65 = result1;
            }
            const obj23 = {};
            const tmp51 = tmp29;
            let merged = Object.assign(tmp29);
            const merged1 = Object.assign(tmp48);
            cResult[15] = tmp29;
            cResult[16] = tmp48;
            cResult[17] = obj23;
            tmp49 = obj23;
          }
        }
        const obj24 = {};
        obj24[constants.CLIENT_THEME] = tmp19 === tmp21;
        obj24[constants.DISPLAY_NAME_STYLE] = tmp23 === tmp24;
        obj24[constants.APP_ICON] = tmp28;
        cResult[4] = tmp19 === tmp21;
        cResult[5] = tmp23 === tmp24;
        cResult[6] = tmp28;
        cResult[7] = obj24;
        tmp29 = obj24;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function HexagonCampaignSheet() {
  let Button;
  let TableRowGroup;
  let analyticsLocations;
  let closure_1;
  let closure_7;
  let currentUser;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let items12;
  let items6;
  let items7;
  let items8;
  let items9;
  let memo;
  let obj12;
  let obj13;
  let obj15;
  let obj17;
  let obj20;
  let obj22;
  let obj24;
  let obj25;
  let obj33;
  let obj35;
  let obj5;
  let obj8;
  let obj9;
  let stateFromStores;
  let tmp30;
  let tmp40;
  let tmp55;
  let tmp5Result3;
  let username;
  obj = function _handleSave2() {
    let displayNameStyles;
    let isThemeSynced;
    let ref;
    let selection;
    obj = _asyncToGenerator(async (arg0, value) => {
      let c2;
      let intl;
      let intl2;
      let obj6;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_0;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = undefined;
              if (null != stateFromStores) {
                if (!ref.current) {
                  ref.current = true;
                  closure_2_7(true);
                  closure_0 = false;
                  analyticsLocations = 1;
                  obj4 = { selection, displayNameStyles, premiumType: tmp51.premiumType, isThemeSynced, analyticsLocations };
                  c3 = 2;
                  c4 = 1;
                  obj5 = { value: obj6.applyHexagonCampaignPerks(obj4), done: false };
                  obj6 = closure_0(analyticsLocations[29]);
                  return obj5;
                }
              }
            }
          } else {
            if (1 === c3) {
              analyticsLocations = 0;
              closure_0 = false;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              analyticsLocations = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              analyticsLocations = 0;
            }
            closure_129_8.current = false;
            closure_129_7(false);
            if (closure_0) {
              const tmp14Result = tmp(analyticsLocations[32]);
              tmp14Result.hideActionSheet(closure_0(analyticsLocations[33]).HEXAGON_CAMPAIGN_SHEET_KEY);
              const _Object = Object;
              const values = Object.values(closure_129_5);
              const _Boolean = Boolean;
              if (values.some(Boolean)) {
                const obj7 = { text: intl2.string(closure_0(analyticsLocations[31]).t.fX2UkH), variant: "success" };
                const open2 = tmp(analyticsLocations[30]).open;
                const tmp29 = tmp(analyticsLocations[30]);
                intl2 = closure_0(analyticsLocations[31]).intl;
                open2("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj7);
              }
            } else {
              const obj8 = { text: intl.string(closure_0(analyticsLocations[31]).t.F8FvUy) };
              const open = tmp(analyticsLocations[30]).open;
              const tmp14Result2 = tmp(analyticsLocations[30]);
              intl = closure_0(analyticsLocations[31]).intl;
              open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj8);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp44) {
          if (0 === analyticsLocations) {
            c4 = 3;
            throw tmp44;
          } else {
            c3 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_22();
  let tmp2 = stateFromStores;
  const tmp3 = analyticsLocations;
  obj = stateFromStores(analyticsLocations[21]);
  const items = [currentUser];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(analyticsLocations[21]);
  const items1 = [closure_7];
  importDefault = obj2.useStateFromStores(items1, () => closure_7.shouldSync("appearance"));
  let tmp5 = importDefault;
  const tmp6 = require("useAnalyticsLocations");
  analyticsLocations = tmp6(require("AnalyticsLocation").QUEST_HOME_PAGE).analyticsLocations;
  let obj3 = stateFromStores(analyticsLocations[24]);
  const currentAppIcon = obj3.useCurrentAppIcon();
  if (typeof usePerkSelectable === "function") {
    let obj4 = {};
    const tmp2Result = tmp2(tmp3[20]);
    obj4[tmp9] = tmp2Result.useHexagonCampaignPerkAvailability(tmp11, HexagonCampaignSheet_str) === memo.SELECTABLE;
    if (typeof usePerkSelectable === "function") {
      const tmp2Result7 = tmp2(tmp3[20]);
      obj4[tmp14] = tmp2Result7.useHexagonCampaignPerkAvailability(tmp15, HexagonCampaignSheet_str) === memo.SELECTABLE;
      if (typeof usePerkSelectable === "function") {
        const tmp2Result8 = tmp2(tmp3[20]);
        obj4[tmp16] = tmp2Result8.useHexagonCampaignPerkAvailability(tmp17, HexagonCampaignSheet_str) === memo.SELECTABLE;
        const items2 = [HexagonCampaignPersistedStore];
        const tmp2Result9 = tmp2(tmp3[21]);
        const stateFromStores1 = tmp2Result9.useStateFromStores(items2, () => HexagonCampaignPersistedStore.hasAppliedPerk);
        const items3 = [HexagonCampaignPersistedStore];
        const tmp2Result10 = tmp2(tmp3[21]);
        const stateFromStores2 = tmp2Result10.useStateFromStores(items3, () => HexagonCampaignPersistedStore.previousPerkValues);
        let displayNameStyles;
        const hasHexagonCampaignDisplayNameFont = tmp2(tmp3[25]).hasHexagonCampaignDisplayNameFont;
        tmp2(tmp3[25]);
        if (stateFromStores != null) {
          displayNameStyles = stateFromStores.displayNameStyles;
        }
        const result = hasHexagonCampaignDisplayNameFont(displayNameStyles);
        const tmp26 = isHexagonCampaignAppIcon(currentAppIcon);
        const first = _slicedToArray(obj5.useState(stateFromStores1), 1)[0];
        let tmp29 = _slicedToArray(obj5.useState({}), 2);
        [tmp30, _slicedToArray] = tmp29;
        const obj10 = obj5;
        obj5 = {};
        let merged = Object.assign(obj4);
        let merged1 = Object.assign(tmp30);
        [first1, closure_7] = obj5.useState(false);
        currentUser = obj5.useRef(false);
        [tmp40, HexagonCampaignPersistedStore] = _slicedToArray(obj5.useState(0), 2);
        const _Math = Math;
        const tmp39 = _slicedToArray(obj5.useState(0), 2);
        const sum = Math.max(tmp5(tmp3[26])().bottom, obj) + 4;
        let displayNameStyles1;
        if (stateFromStores != null) {
          displayNameStyles1 = stateFromStores.displayNameStyles;
        }
        if (displayNameStyles1 == null) {
          displayNameStyles1 = obj;
        }
        const tmp5Result = tmp5(tmp3[27]);
        const result1 = tmp5Result.canUsePremiumProfileCustomization(stateFromStores);
        let tmp46 = displayNameStyles1;
        if (result) {
          let displayNameStyles2;
          const getHexagonCampaignRestoredDisplayNameStyles = tmp2(tmp3[25]).getHexagonCampaignRestoredDisplayNameStyles;
          tmp2(tmp3[25]);
          if (stateFromStores != null) {
            displayNameStyles2 = stateFromStores.displayNameStyles;
          }
          let obj6 = { currentDisplayNameStyles: displayNameStyles2, previousDisplayNameStyles: stateFromStores2.displayNameStyles, canUsePremiumProfileCustomization: result1 };
          let hexagonCampaignRestoredDisplayNameStyles = getHexagonCampaignRestoredDisplayNameStyles(obj6);
          if (hexagonCampaignRestoredDisplayNameStyles == null) {
            hexagonCampaignRestoredDisplayNameStyles = obj;
          }
          tmp46 = hexagonCampaignRestoredDisplayNameStyles;
        }
        const items4 = [result1, displayNameStyles1];
        memo = obj10.useMemo(() => {
          let tmp5;
          obj = {};
          if (result1) {
            const merged = Object.assign(displayNameStyles1);
            obj.fontId = HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
            tmp5 = obj;
          } else {
            const merged1 = Object.assign(obj);
            obj.fontId = HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
            tmp5 = obj;
          }
          return tmp5;
        }, items4);
        if (obj5[result1.DISPLAY_NAME_STYLE]) {
          tmp46 = memo;
        }
        let HEXAGON = currentAppIcon;
        if (tmp26) {
          let DEFAULT = stateFromStores2.appIconId;
          if (DEFAULT == null) {
            DEFAULT = tmp2(tmp3[28]).FreemiumAppIconIds.DEFAULT;
          }
          HEXAGON = DEFAULT;
        }
        if (obj5[result1.APP_ICON]) {
          HEXAGON = tmp2(tmp3[28]).LimitedTimeAppIconIds.HEXAGON;
        }
        if (null == stateFromStores) {
          return null;
        } else {
          let obj7 = { perk: tmp8.CLIENT_THEME, label: intl.string(tmp2(tmp3[31]).t.TTUKuI), icon: closure_16(first1, obj8) };
          intl = tmp2(tmp3[31]).intl;
          obj8 = { style: tmp.rowIcon, children: closure_16(tmp2(tmp3[34]).Gradient, obj9) };
          const items5 = [obj7, , ];
          obj9 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true };
          const obj11 = { perk: result1.DISPLAY_NAME_STYLE, label: intl2.string(tmp2(tmp3[31]).t.fobter), icon: closure_16(first1, obj12) };
          intl2 = tmp2(tmp3[31]).intl;
          obj12 = { style: items6, children: closure_16(tmp2(tmp3[35]).Text, obj13) };
          items6 = [, ];
          ({ rowIcon: arr11[0], fontRowIcon: arr11[1] } = tmp);
          obj13 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.fontRowIconText, children: "Gg" };
          items5[1] = obj11;
          const obj14 = { perk: result1.APP_ICON, label: intl3.string(tmp2(tmp3[31]).t.DTv8Yq), icon: closure_16(tmp5Result3, obj15) };
          intl3 = tmp2(tmp3[31]).intl;
          obj15 = { id: tmp2(tmp3[28]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp.rowIcon };
          items5[2] = obj14;
          tmp5Result3 = tmp5(tmp3[36]);
          const obj16 = { header: closure_17(first1, obj17), footer: closure_16(first1, obj20), startExpanded: true, children: closure_17(first1, obj24) };
          obj17 = { children: items7 };
          BottomSheet = tmp2(tmp3[44]).BottomSheet;
          const obj18 = { title: intl4.string(tmp2(tmp3[31]).t.rZmLDm) };
          const BottomSheetTitleHeader = tmp2(tmp3[37]).BottomSheetTitleHeader;
          intl4 = tmp2(tmp3[31]).intl;
          items7 = [closure_16(BottomSheetTitleHeader, obj18), ];
          const obj19 = { style: tmp.badgeRow, children: closure_16(tmp5(tmp3[38]), {}) };
          items7[1] = closure_16(first1, obj19);
          obj20 = { style: items8, onLayout: tmp51, children: closure_16(Button, obj22) };
          items8 = [tmp.footer, ];
          const obj21 = { paddingBottom: sum };
          items8[1] = obj21;
          Button = tmp2(tmp3[39]).Button;
          const intl5 = tmp2(tmp3[31]).intl;
          const string = intl5.string;
          const t = tmp2(tmp3[31]).t;
          obj22 = {
            size: "lg",
            grow: true,
            text: string(first ? t["R3BPH+"] : t["1Qm822"]),
            onPress: function handleSave() {
                      return obj(...arguments);
                    },
            loading: first1,
            disabled: first1
          };
          obj24 = { style: obj25, children: items12 };
          const _Math2 = Math;
          let tmp61Result = obj5[tmp8.CLIENT_THEME];
          obj25 = { paddingBottom: Math.max(tmp40 - sum, 0) };
          const obj26 = { style: tmp.content, children: items11 };
          const obj27 = { style: tmp.card, children: items10 };
          const tmp59 = HEXAGON_GRADIENT_PRESET;
          if (tmp61Result) {
            const obj28 = { children: items9 };
            const obj29 = { gradient: tmp59, absolute: true, angleOverride };
            items9 = [closure_16(tmp2(tmp3[34]).Gradient, obj29), ];
            const obj30 = { style: tmp.cardShade };
            items9[1] = closure_16(first1, obj30);
            tmp61Result = tmp61(closure_18, obj28);
          }
          items10 = [tmp61Result, ];
          const obj32 = { user: stateFromStores, displayName: username, selectedFontId: null, selectedEffectId: null, selectedColors: null, appIconId: HEXAGON, appIconScale: 0.8125, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true };
          username = stateFromStores.globalName;
          const obj31 = { style: tmp.previewArea, children: closure_16(tmp55, obj33) };
          tmp55 = closure_23;
          const tmp5Result4 = tmp5(tmp3[40]);
          if (username == null) {
            username = stateFromStores.username;
          }
          ({ fontId: obj23.selectedFontId, effectId: obj23.selectedEffectId, colors: obj23.selectedColors } = tmp46);
          obj33 = { children: closure_16(tmp5Result4, obj32) };
          items10[1] = closure_16(first1, obj31);
          items11 = [closure_17(first1, obj27), ];
          const obj34 = { style: tmp.rows, children: closure_16(TableRowGroup, obj35) };
          obj35 = {
            hasIcons: true,
            children: items5.map((perk) => {
                      let icon;
                      let label;
                      let tmp2;
                      perk = perk.perk;
                      ({ label, icon } = perk);
                      obj = {
                        icon,
                        label,
                        value: obj5[perk],
                        disabled: tmp2,
                        onValueChange(arg0) {
                          let closure_0 = arg0;
                          return closure_1_4((arg0) => {
                            obj = {};
                            const merged = Object.assign(arg0);
                            obj[perk] = closure_0;
                            return obj;
                          });
                        }
                      };
                      tmp2 = first1;
                      const TableSwitchRow = stateFromStores(analyticsLocations[42]).TableSwitchRow;
                      const tmp = closure_1_16;
                      if (!first1) {
                        tmp2 = !obj4[perk];
                      }
                      return tmp(TableSwitchRow, obj, perk);
                    })
          };
          TableRowGroup = tmp2(tmp3[41]).TableRowGroup;
          items11[1] = closure_16(first1, obj34);
          items12 = [closure_17(first1, obj26), ];
          const obj36 = { style: tmp.legal, children: closure_16(tmp5(tmp3[43]), { showLogo: true }) };
          items12[1] = closure_16(first1, obj36);
          return closure_16(BottomSheet, obj16);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
size = size_mod;
let result1 = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignSheet.tsx");

export default tmp8;
