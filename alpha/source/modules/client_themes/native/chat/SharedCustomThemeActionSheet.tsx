// Module ID: 11570
// Function ID: 11571
// Name: SharedCustomThemeActionSheet
// Dependencies: [32, 19, 17, 4734, 1085, 1392, 21, 5091, 587, 558, 576, 1265, 11571, 4927, 5259, 6835, 1126, 2795, 5087, 5376, 6836, 504, 4728, 7135, 6872, 1200, 1252, 2]

// Module 11570 (SharedCustomThemeActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1200 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1252 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4728 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4927 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5259 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7135 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 11571 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, baseTheme, closure_7, importDefault;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
const f108678 = (item) => "#" + item;
({ useEffect: hasOwnProperty, useLayoutEffect: metroRequire, useRef: metroImportDefault } = react);
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { contentWrapper: { paddingHorizontal: 43.5, paddingVertical: 12 }, centeredText: { textAlign: "center" }, ctaContainer: { paddingHorizontal: 15, flexDirection: "column", display: "flex", gap: 6 }, nitroWheelButton: { marginStart: -2, width: 20, height: 20 }, getNitroButton: obj2 };
obj2 = { borderRadius: nativeDefault.radii.round };
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let centeredText;
  let closure_3;
  let colors;
  let contentWrapper;
  let first;
  let first1;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let sharedClientTheme;
  let tmp11;
  let tmp18;
  let tmp19;
  let tmp55;
  let tmp6;
  let tmp = sharedClientTheme;
  let tmp2 = customUserThemeSettings;
  let obj = sharedClientTheme(customUserThemeSettings[10]);
  const cResult = obj.c(36);
  sharedClientTheme = message.message.sharedClientTheme;
  let tmp4 = closure_14();
  const tmp5 = closure_7(null);
  importDefault = tmp5;
  if (cResult[0] !== sharedClientTheme) {
    let tmp7;
    if (undefined !== sharedClientTheme) {
      let obj4 = { colors: colors.map(f108678), gradientColorStops: [], gradientAngle: null, baseMix: null };
      colors = sharedClientTheme.colors;
      ({ gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = sharedClientTheme);
      tmp7 = obj4;
    }
    cResult[0] = sharedClientTheme;
    cResult[1] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[1];
  }
  let obj3 = first1;
  [first, _slicedToArray] = first1.useState(tmp6);
  if (cResult[2] !== sharedClientTheme) {
    baseTheme = undefined;
    if (undefined !== sharedClientTheme) {
      const tmpResult = tmp(tmp2[26]);
      baseTheme = tmpResult.getBaseTheme(sharedClientTheme.base_theme);
    }
    cResult[2] = sharedClientTheme;
    cResult[3] = baseTheme;
    tmp11 = baseTheme;
  } else {
    tmp11 = cResult[3];
  }
  const tmp8Result = _slicedToArray(obj3.useState(tmp11), 2);
  first1 = tmp8Result[0];
  let closure_5 = tmp8Result[1];
  const tmp8Result2 = _slicedToArray(obj3.useState(false), 2);
  const first2 = tmp8Result2[0];
  closure_7 = tmp8Result2[1];
  const ref = obj3.useRef(true);
  if (cResult[4] !== sharedClientTheme) {
    class M {
      constructor() {
        let colors;
        let tmp4;
        const tmp = closure_3;
        if (undefined !== sharedClientTheme) {
          const obj = { colors: colors.map(f108678), gradientColorStops: [], gradientAngle: null, baseMix: null };
          colors = tmp2.colors;
          ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
          tmp4 = obj;
        }
        tmp(tmp4);
        baseTheme = undefined;
        const tmp6 = closure_5;
        if (undefined !== sharedClientTheme) {
          const obj2 = ClientThemesUtils;
          baseTheme = obj2.getBaseTheme(tmp2.base_theme);
        }
        tmp6(baseTheme);
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
      }
    }
    const items = [sharedClientTheme];
    cResult[4] = sharedClientTheme;
    cResult[5] = M;
    cResult[6] = items;
    tmp19 = items;
    tmp18 = M;
  } else {
    class M {
      constructor() {
        let colors;
        let tmp4;
        const tmp = closure_3;
        if (undefined !== sharedClientTheme) {
          const obj = { colors: colors.map(f108678), gradientColorStops: [], gradientAngle: null, baseMix: null };
          colors = tmp2.colors;
          ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
          tmp4 = obj;
        }
        tmp(tmp4);
        baseTheme = undefined;
        const tmp6 = closure_5;
        if (undefined !== sharedClientTheme) {
          const obj2 = ClientThemesUtils;
          baseTheme = obj2.getBaseTheme(tmp2.base_theme);
        }
        tmp6(baseTheme);
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
      }
    }
    tmp19 = cResult[6];
  }
  closure_5(tmp18, tmp19);
  if (cResult[7] === first1) {
    let tmp24;
    let tmp23;
    let tmp29;
    let tmp28;
    class M {
      constructor() {
        let colors;
        let tmp4;
        const tmp = closure_3;
        if (undefined !== sharedClientTheme) {
          const obj = { colors: colors.map(f108678), gradientColorStops: [], gradientAngle: null, baseMix: null };
          colors = tmp2.colors;
          ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
          tmp4 = obj;
        }
        tmp(tmp4);
        baseTheme = undefined;
        const tmp6 = closure_5;
        if (undefined !== sharedClientTheme) {
          const obj2 = ClientThemesUtils;
          baseTheme = obj2.getBaseTheme(tmp2.base_theme);
        }
        tmp6(baseTheme);
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
      }
    }
    closure_5(H, items5);
    if (cResult[11] !== first2) {
      class I {
        constructor() {
          ref.current = !first2;
        }
      }
      const items1 = [first2];
      cResult[11] = first2;
      cResult[12] = I;
      cResult[13] = items1;
      tmp24 = items1;
      tmp23 = I;
    } else {
      class I {
        constructor() {
          ref.current = !first2;
        }
      }
      tmp24 = cResult[13];
    }
    first2(tmp23, tmp24);
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return () => {
            if (ref.current) {
              const obj = sharedClientTheme(first[12]);
              obj.clearPreviewTheme();
              const obj2 = sharedClientTheme(first[13]);
              obj2.refreshTheme();
            }
          };
        }
      }
      const items2 = [ref];
      cResult[14] = N;
      cResult[15] = items2;
      tmp29 = items2;
      tmp28 = N;
    } else {
      class N {
        constructor() {
          return () => {
            if (ref.current) {
              const obj = sharedClientTheme(first[12]);
              obj.clearPreviewTheme();
              const obj2 = sharedClientTheme(first[13]);
              obj2.refreshTheme();
            }
          };
        }
      }
      tmp29 = cResult[15];
    }
    closure_5(tmp28, tmp29);
    if (cResult[16] === first1) {
      let tmp32;
      let tmp34;
      let tmp37;
      class N {
        constructor() {
          return () => {
            if (ref.current) {
              const obj = sharedClientTheme(first[12]);
              obj.clearPreviewTheme();
              const obj2 = sharedClientTheme(first[13]);
              obj2.refreshTheme();
            }
          };
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return () => {
              if (ref.current) {
                const obj = sharedClientTheme(first[12]);
                obj.clearPreviewTheme();
                const obj2 = sharedClientTheme(first[13]);
                obj2.refreshTheme();
              }
            };
          }
        }
        cResult[19] = tmp33;
        tmp32 = tmp33;
      } else {
        class N {
          constructor() {
            return () => {
              if (ref.current) {
                const obj = sharedClientTheme(first[12]);
                obj.clearPreviewTheme();
                const obj2 = sharedClientTheme(first[13]);
                obj2.refreshTheme();
              }
            };
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return () => {
              if (ref.current) {
                const obj = sharedClientTheme(first[12]);
                obj.clearPreviewTheme();
                const obj2 = sharedClientTheme(first[13]);
                obj2.refreshTheme();
              }
            };
          }
        }
        let obj5 = { title: intl.string(require("module_2795")["3ej1LT"]) };
        const BottomSheetTitleHeader = tmp(tmp2[15]).BottomSheetTitleHeader;
        intl = tmp(tmp2[16]).intl;
        const tmp36 = closure_12(BottomSheetTitleHeader, obj5);
        cResult[20] = tmp36;
        tmp34 = tmp36;
      } else {
        class N {
          constructor() {
            return () => {
              if (ref.current) {
                const obj = sharedClientTheme(first[12]);
                obj.clearPreviewTheme();
                const obj2 = sharedClientTheme(first[13]);
                obj2.refreshTheme();
              }
            };
          }
        }
      }
      const _Symbol4 = Symbol;
      ({ contentWrapper, centeredText } = tmp4);
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return () => {
              if (ref.current) {
                const obj = sharedClientTheme(first[12]);
                obj.clearPreviewTheme();
                const obj2 = sharedClientTheme(first[13]);
                obj2.refreshTheme();
              }
            };
          }
        }
        const stringResult = obj6.string(require("module_2795").qZMUoL);
        cResult[21] = stringResult;
        tmp37 = stringResult;
      } else {
        class N {
          constructor() {
            return () => {
              if (ref.current) {
                const obj = sharedClientTheme(first[12]);
                obj.clearPreviewTheme();
                const obj2 = sharedClientTheme(first[13]);
                obj2.refreshTheme();
              }
            };
          }
        }
      }
      if (cResult[22] !== tmp4.centeredText) {
        class N {
          constructor() {
            return () => {
              if (ref.current) {
                const obj = sharedClientTheme(first[12]);
                obj.clearPreviewTheme();
                const obj2 = sharedClientTheme(first[13]);
                obj2.refreshTheme();
              }
            };
          }
        }
        const obj7 = { variant: "heading-md/medium", style: centeredText, children: tmp37 };
        cResult[22] = tmp4.centeredText;
        cResult[23] = closure_12(tmp(tmp2[18]).Text, obj7);
        const tmp41 = closure_12(tmp(tmp2[18]).Text, obj7);
      } else {
        class N {
          constructor() {
            return () => {
              if (ref.current) {
                const obj = sharedClientTheme(first[12]);
                obj.clearPreviewTheme();
                const obj2 = sharedClientTheme(first[13]);
                obj2.refreshTheme();
              }
            };
          }
        }
      }
      if (cResult[24] === tmp4.contentWrapper) {
        let tmp49;
        class N {
          constructor() {
            return () => {
              if (ref.current) {
                const obj = sharedClientTheme(first[12]);
                obj.clearPreviewTheme();
                const obj2 = sharedClientTheme(first[13]);
                obj2.refreshTheme();
              }
            };
          }
        }
        if (cResult[27] !== tmp31) {
          class N {
            constructor() {
              return () => {
                if (ref.current) {
                  const obj = sharedClientTheme(first[12]);
                  obj.clearPreviewTheme();
                  const obj2 = sharedClientTheme(first[13]);
                  obj2.refreshTheme();
                }
              };
            }
          }
          const obj8 = { onPressApply: tmp31 };
          cResult[27] = tmp31;
          cResult[28] = closure_12(closure_15, obj8);
          const tmp48 = closure_12(closure_15, obj8);
        } else {
          class N {
            constructor() {
              return () => {
                if (ref.current) {
                  const obj = sharedClientTheme(first[12]);
                  obj.clearPreviewTheme();
                  const obj2 = sharedClientTheme(first[13]);
                  obj2.refreshTheme();
                }
              };
            }
          }
        }
        const _Symbol5 = Symbol;
        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              return () => {
                if (ref.current) {
                  const obj = sharedClientTheme(first[12]);
                  obj.clearPreviewTheme();
                  const obj2 = sharedClientTheme(first[13]);
                  obj2.refreshTheme();
                }
              };
            }
          }
          const obj9 = { text: intl2.string(tmp(tmp2[16]).t["13/7kX"]), onPress: tmp32, variant: "secondary" };
          const Button = tmp(tmp2[19]).Button;
          intl2 = tmp(tmp2[16]).intl;
          const tmp50 = closure_12(Button, obj9);
          cResult[29] = tmp50;
          tmp49 = tmp50;
        } else {
          class N {
            constructor() {
              return () => {
                if (ref.current) {
                  const obj = sharedClientTheme(first[12]);
                  obj.clearPreviewTheme();
                  const obj2 = sharedClientTheme(first[13]);
                  obj2.refreshTheme();
                }
              };
            }
          }
        }
        if (cResult[30] === tmp4.ctaContainer) {
          class N {
            constructor() {
              return () => {
                if (ref.current) {
                  const obj = sharedClientTheme(first[12]);
                  obj.clearPreviewTheme();
                  const obj2 = sharedClientTheme(first[13]);
                  obj2.refreshTheme();
                }
              };
            }
          }
          if (cResult[33] === tmp42) {
            class N {
              constructor() {
                return () => {
                  if (ref.current) {
                    const obj = sharedClientTheme(first[12]);
                    obj.clearPreviewTheme();
                    const obj2 = sharedClientTheme(first[13]);
                    obj2.refreshTheme();
                  }
                };
              }
            }
            return tmp55;
          }
          const obj10 = { ref: tmp5, backdropOpacity: 0, children: items3 };
          items3 = [tmp34, tmp42, tmp51];
          const tmp57 = closure_13(tmp(tmp2[20]).BottomSheet, obj10);
          cResult[33] = tmp42;
          cResult[34] = tmp51;
          cResult[35] = tmp57;
          tmp55 = tmp57;
        }
        const obj11 = { style: tmp4.ctaContainer, children: items4 };
        items4 = [tmp46, tmp49];
        cResult[30] = tmp4.ctaContainer;
        cResult[31] = tmp46;
        cResult[32] = closure_13(ref, obj11);
        const tmp54 = closure_13(ref, obj11);
      }
      const obj12 = { style: contentWrapper, children: tmp40 };
      cResult[24] = tmp4.contentWrapper;
      cResult[25] = tmp40;
      cResult[26] = closure_12(ref, obj12);
      const tmp45 = closure_12(ref, obj12);
    }
    function onPressApply() {
      const tmp2 = undefined !== customUserThemeSettings && undefined !== first1 && null !== ref.current;
      if (tmp2) {
        closure_7(true);
        const obj = CustomThemeMobileActionCreators;
        obj.updateCustomTheme(customUserThemeSettings, first1);
        const obj3 = { customUserThemeSettings, theme: first1 };
        const obj2 = UserSettingsActionCreators;
        obj2.saveClientTheme(obj3);
        const obj4 = CustomThemeMobileActionCreators;
        obj4.clearPreviewTheme();
        const obj5 = AnalyticsUtilsDefault;
        obj5.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
        const current = ref.current;
        current.closeActionSheet();
      }
    }
    cResult[16] = first1;
    cResult[17] = customUserThemeSettings;
    cResult[18] = onPressApply;
  }
  class H {
    constructor() {
      let tmp2 = undefined !== first;
      const tmp = first;
      if (tmp2) {
        tmp2 = undefined !== first1;
      }
      if (tmp2) {
        const obj2 = { baseTheme: first1, customTheme: tmp };
        const obj = CustomThemeMobileActionCreators;
        obj.previewCustomTheme(obj2);
        const obj3 = ThemeActionCreators;
        obj3.refreshTheme();
      }
    }
  }
  items5 = [customUserThemeSettings, first1];
  cResult[7] = first1;
  cResult[8] = customUserThemeSettings;
  cResult[9] = H;
  cResult[10] = items5;
}) : ((message) => {
  let Text;
  let closure_3;
  let colors;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let obj8;
  const sharedClientTheme = message.message.sharedClientTheme;
  let tmp = closure_14();
  let tmp2 = closure_7(null);
  importDefault = tmp2;
  let obj = first1;
  let tmp4;
  const useState = first1.useState;
  if (undefined !== sharedClientTheme) {
    let obj4 = { colors: colors.map(f108678), gradientColorStops: [], gradientAngle: null, baseMix: null };
    colors = sharedClientTheme.colors;
    ({ gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = sharedClientTheme);
    tmp4 = obj4;
  }
  [first, _slicedToArray] = useState(tmp4);
  baseTheme = undefined;
  const useState2 = obj.useState;
  if (undefined !== sharedClientTheme) {
    let obj3 = sharedClientTheme(customUserThemeSettings[26]);
    baseTheme = obj3.getBaseTheme(sharedClientTheme.base_theme);
  }
  const tmp5Result = _slicedToArray(useState2(baseTheme), 2);
  first1 = tmp5Result[0];
  let closure_5 = tmp5Result[1];
  const tmp5Result2 = _slicedToArray(obj.useState(false), 2);
  const first2 = tmp5Result2[0];
  closure_7 = tmp5Result2[1];
  const ref = obj.useRef(true);
  const items = [sharedClientTheme];
  closure_5(() => {
    let colors;
    let tmp4;
    const tmp = closure_3;
    if (undefined !== sharedClientTheme) {
      const obj = { colors: colors.map(f108678), gradientColorStops: [], gradientAngle: null, baseMix: null };
      colors = tmp2.colors;
      ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
      tmp4 = obj;
    }
    tmp(tmp4);
    baseTheme = undefined;
    const tmp6 = closure_5;
    if (undefined !== sharedClientTheme) {
      const obj2 = ClientThemesUtils;
      baseTheme = obj2.getBaseTheme(tmp2.base_theme);
    }
    tmp6(baseTheme);
    const obj3 = AnalyticsUtilsDefault;
    obj3.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
  }, items);
  const items1 = [customUserThemeSettings, first1];
  closure_5(() => {
    let tmp2 = undefined !== first;
    const tmp = first;
    if (tmp2) {
      tmp2 = undefined !== first1;
    }
    if (tmp2) {
      const obj2 = { baseTheme: first1, customTheme: tmp };
      const obj = CustomThemeMobileActionCreators;
      obj.previewCustomTheme(obj2);
      const obj3 = ThemeActionCreators;
      obj3.refreshTheme();
    }
  }, items1);
  const items2 = [first2];
  first2(() => {
    ref.current = !first2;
  }, items2);
  const items3 = [ref];
  closure_5(() => () => {
    if (ref.current) {
      const obj = sharedClientTheme(first[12]);
      obj.clearPreviewTheme();
      const obj2 = sharedClientTheme(first[13]);
      obj2.refreshTheme();
    }
  }, items3);
  let obj5 = { ref: tmp2, backdropOpacity: 0, children: items4 };
  BottomSheet = sharedClientTheme(customUserThemeSettings[20]).BottomSheet;
  const obj6 = { title: intl.string(require("module_2795")["3ej1LT"]) };
  const BottomSheetTitleHeader = sharedClientTheme(customUserThemeSettings[15]).BottomSheetTitleHeader;
  intl = sharedClientTheme(customUserThemeSettings[16]).intl;
  items4 = [closure_12(BottomSheetTitleHeader, obj6), , ];
  const obj7 = { style: tmp.contentWrapper, children: closure_12(Text, obj8) };
  obj8 = { variant: "heading-md/medium", style: tmp.centeredText, children: intl2.string(require("module_2795").qZMUoL) };
  Text = sharedClientTheme(customUserThemeSettings[18]).Text;
  intl2 = sharedClientTheme(customUserThemeSettings[16]).intl;
  items4[1] = closure_12(ref, obj7);
  const obj9 = { style: tmp.ctaContainer, children: items5 };
  items5 = [, ];
  const obj10 = {
    onPressApply() {
      const tmp2 = undefined !== customUserThemeSettings && undefined !== first1 && null !== ref.current;
      if (tmp2) {
        closure_7(true);
        const obj = CustomThemeMobileActionCreators;
        obj.updateCustomTheme(customUserThemeSettings, first1);
        const obj3 = { customUserThemeSettings, theme: first1 };
        const obj2 = UserSettingsActionCreators;
        obj2.saveClientTheme(obj3);
        const obj4 = CustomThemeMobileActionCreators;
        obj4.clearPreviewTheme();
        const obj5 = AnalyticsUtilsDefault;
        obj5.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
        const current = ref.current;
        current.closeActionSheet();
      }
    }
  };
  items5[0] = closure_12(closure_15, obj10);
  const obj18 = {
    text: intl3.string(sharedClientTheme(customUserThemeSettings[16]).t["13/7kX"]),
    onPress: function onPressBack() {
      if (null !== ref.current) {
        const obj = CustomThemeMobileActionCreators;
        obj.clearPreviewTheme();
        const obj2 = ThemeActionCreators;
        obj2.refreshTheme();
        const current = tmp.current;
        current.closeActionSheet();
      }
    },
    variant: "secondary"
  };
  const Button = sharedClientTheme(customUserThemeSettings[19]).Button;
  intl3 = sharedClientTheme(customUserThemeSettings[16]).intl;
  items5[1] = closure_12(Button, obj18);
  items4[2] = closure_13(ref, obj9);
  return closure_13(BottomSheet, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function PrimaryActionButton(onPressApply) {
  let TIER_2;
  let nitroWheelButton;
  let premiumTypeSubscription;
  let tmp10;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(12);
  onPressApply = onPressApply.onPressApply;
  const tmp4 = closure_14();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SubscriptionStore];
    const fn = function o() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const obj3 = PremiumUtilsDefault;
  const premiumTypeFromSubscription = obj3.getPremiumTypeFromSubscription(stateFromStores);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function onPressSubscribe() {
      let items;
      const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: items, analyticsLocation: {} };
      items = [];
      const tmp = openPremiumPlanSelectionActionSheetDefault;
      items[0] = AnalyticsLocationDefault.SHARE_CUSTOM_CLIENT_THEME_EMBED;
      tmp(obj);
    }
    cResult[2] = onPressSubscribe;
    tmp10 = onPressSubscribe;
  } else {
    tmp10 = cResult[2];
  }
  if (premiumTypeFromSubscription !== PremiumTypes.TIER_2) {
    let tmp16;
    let tmp18;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t.pj0XBN);
      cResult[3] = stringResult;
      tmp16 = stringResult;
    } else {
      tmp16 = cResult[3];
    }
    if (cResult[4] !== tmp4.nitroWheelButton) {
      const fn2 = function f() {
        const obj = { style: nitroWheelButton.nitroWheelButton };
        return authStore2(native.NitroWheel, obj);
      };
      cResult[4] = tmp4.nitroWheelButton;
      cResult[5] = fn2;
      tmp18 = fn2;
    } else {
      tmp18 = cResult[5];
    }
    if (cResult[6] === tmp4.getNitroButton) {
      let tmp19;
      if (cResult[7] === tmp18) {
        tmp19 = cResult[8];
      }
      tmp13 = tmp19;
    }
    const obj2 = { text: tmp16, onPress: tmp10, renderIcon: tmp18, style: tmp4.getNitroButton };
    const tmp21 = closure_12(tmp(1200).ShinyButton, obj2);
    cResult[6] = tmp4.getNitroButton;
    cResult[7] = tmp18;
    cResult[8] = tmp21;
    tmp19 = tmp21;
  } else {
    let tmp11;
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult1 = intl.string(tmp(1126).t["1Qm822"]);
      cResult[9] = stringResult1;
      tmp11 = stringResult1;
    } else {
      tmp11 = cResult[9];
    }
    if (cResult[10] !== onPressApply) {
      const obj4 = { text: tmp11, onPress: onPressApply, variant: "primary" };
      const tmp15 = closure_12(tmp(5376).Button, obj4);
      cResult[10] = onPressApply;
      cResult[11] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[11];
    }
  }
  return tmp13;
}) : (function PrimaryActionButton(onPressApply) {
  let TIER_2;
  let intl;
  let intl2;
  let nitroWheelButton;
  let premiumTypeSubscription;
  let tmp6;
  onPressApply = onPressApply.onPressApply;
  let tmp = closure_14();
  _require = tmp;
  let obj = require("get initialized");
  let items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = PremiumUtilsDefault;
  if (obj2.getPremiumTypeFromSubscription(stateFromStores) !== PremiumTypes.TIER_2) {
    const obj3 = {
      text: intl2.string(require("intl").t.pj0XBN),
      onPress: function onPressSubscribe() {
          let items;
          const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: items, analyticsLocation: {} };
          items = [];
          const tmp = openPremiumPlanSelectionActionSheetDefault;
          items[0] = AnalyticsLocationDefault.SHARE_CUSTOM_CLIENT_THEME_EMBED;
          tmp(obj);
        },
      renderIcon() {
          const obj = { style: nitroWheelButton.nitroWheelButton };
          return authStore2(native.NitroWheel, obj);
        },
      style: tmp.getNitroButton
    };
    const ShinyButton = tmp2(1200).ShinyButton;
    intl2 = tmp2(1126).intl;
    tmp6 = closure_12(ShinyButton, obj3);
  } else {
    const obj4 = { text: intl.string(require("intl").t["1Qm822"]), onPress: onPressApply, variant: "primary" };
    const Button = tmp2(5376).Button;
    intl = tmp2(1126).intl;
    tmp6 = closure_12(Button, obj4);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx");

export default tmp4;
