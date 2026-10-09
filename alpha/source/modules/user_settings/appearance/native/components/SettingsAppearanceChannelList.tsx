// Module ID: 15499
// Function ID: 15500
// Name: SettingsAppearanceChannelList
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 15500, 15501, 15502, 1126, 15508, 8608, 15511, 4811, 2]

// Module 15499 (SettingsAppearanceChannelList)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4811 */;
import SettingsAppearanceChannelRowItemDefault from "SettingsAppearanceChannelRowItem" /* 15500 */;
import SettingsAppearanceMessagesHeaderItemDefault from "SettingsAppearanceMessagesHeaderItem" /* 15501 */;
import SettingsAppearanceActivityCardsItemDefault from "SettingsAppearanceActivityCardsItem" /* 15502 */;
import SettingsAppearanceGradientBackgroundDefault from "SettingsAppearanceGradientBackground" /* 15508 */;
import SettingsAppearanceChannelListPreviewNitroUpsellDefault from "SettingsAppearanceChannelListPreviewNitroUpsell" /* 15511 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { channelPreviewGradient: obj2, channelPreviewCardContainer: obj3 };
obj2 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flex: 1, marginTop: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl, width: "100%", borderWidth: 1, shadowColor: "#000000" };
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
let closure_7 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelListPreview(arg0) {
  let animatedStyles;
  let data;
  let isNitroLocked;
  let items;
  let obj7;
  let themeIndex;
  let themes;
  let tmp16;
  let tmp5;
  let useGradientBackground;
  let obj = animatedStyles(576);
  const cResult = obj.c(25);
  ({ themes, themeIndex, animatedStyles } = arg0);
  ({ data, useGradientBackground, isNitroLocked } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== animatedStyles) {
    const fn = function n(item) {
      item = item.item;
      const kind = item.kind;
      if ("channel-row" === kind) {
        const obj2 = { animatedStyles };
        const tmp21 = SettingsAppearanceChannelRowItemDefault;
        const merged = Object.assign(item);
        return hasOwnProperty(tmp21, obj2);
      } else if ("messages-header" === kind) {
        const obj3 = { animatedStyles };
        const tmp13 = SettingsAppearanceMessagesHeaderItemDefault;
        const merged1 = Object.assign(item);
        return hasOwnProperty(tmp13, obj3);
      } else if ("activity-cards" === kind) {
        const obj = { animatedStyles };
        const tmp5 = SettingsAppearanceActivityCardsItemDefault;
        const merged2 = Object.assign(item);
        return hasOwnProperty(tmp5, obj);
      } else {
        return null;
      }
    };
    cResult[0] = animatedStyles;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === animatedStyles.borderNormal) {
    if (cResult[3] === tmp4.channelPreviewCardContainer) {
      let tmp7;
      let tmp9;
      if (cResult[4] === (!useGradientBackground && animatedStyles.bgSurfaceHigh)) {
        tmp7 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(animatedStyles(1126).t.iGxm3x);
        cResult[6] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[6];
      }
      if (cResult[7] === tmp4.channelPreviewGradient) {
        if (cResult[8] === themeIndex) {
          if (cResult[9] === themes) {
            let tmp11;
            let tmp17;
            let tmp19;
            if (cResult[10] === useGradientBackground) {
              tmp11 = cResult[11];
            }
            const _Symbol2 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { paddingVertical: nativeDefault.space.PX_16 };
              cResult[12] = obj2;
              tmp17 = obj2;
            } else {
              tmp17 = cResult[12];
            }
            const _Symbol3 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const fn2 = function f(id) {
                return id.id;
              };
              cResult[13] = fn2;
              tmp19 = fn2;
            } else {
              tmp19 = cResult[13];
            }
            if (cResult[14] === data) {
              let tmp20;
              if (cResult[15] === tmp5) {
                tmp20 = cResult[16];
              }
              if (cResult[17] === isNitroLocked) {
                let tmp24;
                if (cResult[18] === themes[themeIndex]) {
                  tmp24 = cResult[19];
                }
                if (cResult[20] === tmp24) {
                  if (cResult[21] === tmp7) {
                    if (cResult[22] === tmp11) {
                      let tmp28;
                      if (cResult[23] === tmp20) {
                        tmp28 = cResult[24];
                      }
                      return tmp28;
                    }
                  }
                }
                let obj3 = { style: tmp7, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp9, children: items };
                items = [tmp11, tmp20, tmp24];
                const tmp31 = closure_6(ReanimatedRexportDefault.View, obj3);
                cResult[20] = tmp24;
                cResult[21] = tmp7;
                cResult[22] = tmp11;
                cResult[23] = tmp20;
                cResult[24] = tmp31;
                tmp28 = tmp31;
              }
              const obj4 = { visible: isNitroLocked, theme: themes[themeIndex] };
              const tmp27 = closure_5(SettingsAppearanceChannelListPreviewNitroUpsellDefault, obj4);
              cResult[17] = isNitroLocked;
              cResult[18] = themes[themeIndex];
              cResult[19] = tmp27;
              tmp24 = tmp27;
            }
            let tmp21 = closure_5;
            const obj5 = { contentContainerStyle: tmp17, data, renderItem: tmp5, keyExtractor: tmp19, showsVerticalScrollIndicator: false, importantForAccessibility: "no-hide-descendants" };
            const tmp22 = closure_5(animatedStyles(8608).FlashList, obj5);
            cResult[14] = data;
            cResult[15] = tmp5;
            cResult[16] = tmp22;
            tmp20 = tmp22;
          }
        }
      }
      let tmp12 = null;
      if (useGradientBackground) {
        let tmp13 = closure_5;
        const obj6 = { style: tmp4.channelPreviewGradient, children: closure_5(tmp16, obj7) };
        obj7 = { themes, themeIndex, isDimmed: false, backgroundToken: nativeDefault.colors.BACKGROUND_BASE_LOW };
        tmp16 = SettingsAppearanceGradientBackgroundDefault;
        tmp12 = closure_5(closure_4, obj6);
      }
      cResult[7] = tmp4.channelPreviewGradient;
      cResult[8] = themeIndex;
      cResult[9] = themes;
      cResult[10] = useGradientBackground;
      cResult[11] = tmp12;
      tmp11 = tmp12;
    }
  }
  const items1 = [tmp4.channelPreviewCardContainer, animatedStyles.borderNormal, tmp6];
  cResult[2] = animatedStyles.borderNormal;
  cResult[3] = tmp4.channelPreviewCardContainer;
  cResult[4] = !useGradientBackground && animatedStyles.bgSurfaceHigh;
  cResult[5] = items1;
  tmp7 = items1;
}) : (function ChannelListPreview(useGradientBackground) {
  let animatedStyles;
  let data;
  let intl;
  let isNitroLocked;
  let items2;
  let obj3;
  let obj5;
  let themeIndex;
  let themes;
  let tmp4Result;
  ({ themes, themeIndex, animatedStyles } = useGradientBackground);
  useGradientBackground = useGradientBackground.useGradientBackground;
  ({ data, isNitroLocked } = useGradientBackground);
  const tmp = closure_7();
  const items = [animatedStyles];
  let tmp5 = dependencyMap;
  const callback = react.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("channel-row" === kind) {
      const obj2 = { animatedStyles };
      const tmp21 = SettingsAppearanceChannelRowItemDefault;
      const merged = Object.assign(item);
      return hasOwnProperty(tmp21, obj2);
    } else if ("messages-header" === kind) {
      const obj3 = { animatedStyles };
      const tmp13 = SettingsAppearanceMessagesHeaderItemDefault;
      const merged1 = Object.assign(item);
      return hasOwnProperty(tmp13, obj3);
    } else if ("activity-cards" === kind) {
      const obj = { animatedStyles };
      const tmp5 = SettingsAppearanceActivityCardsItemDefault;
      const merged2 = Object.assign(item);
      return hasOwnProperty(tmp5, obj);
    } else {
      return null;
    }
  }, items);
  const items1 = [tmp.channelPreviewCardContainer, animatedStyles.borderNormal, ];
  let bgSurfaceHigh = !useGradientBackground;
  const View = ReanimatedRexportDefault.View;
  const tmp3 = closure_6;
  if (!useGradientBackground) {
    bgSurfaceHigh = animatedStyles.bgSurfaceHigh;
  }
  let obj = { style: items1, accessible: true, accessibilityRole: "image", accessibilityLabel: intl.string(animatedStyles(1126).t.iGxm3x), children: items2 };
  items1[2] = bgSurfaceHigh;
  intl = animatedStyles(1126).intl;
  let tmp7 = null;
  const tmp6 = animatedStyles;
  if (useGradientBackground) {
    let obj2 = { style: tmp.channelPreviewGradient, children: closure_5(tmp4Result, obj3) };
    obj3 = { themes, themeIndex, isDimmed: false, backgroundToken: tmp4(587).colors.BACKGROUND_BASE_LOW };
    tmp4Result = SettingsAppearanceGradientBackgroundDefault;
    tmp7 = closure_5(closure_4, obj2);
  }
  items2 = [tmp7, , ];
  const obj4 = {
    contentContainerStyle: obj5,
    data,
    renderItem: callback,
    keyExtractor(id) {
      return id.id;
    },
    showsVerticalScrollIndicator: false,
    importantForAccessibility: "no-hide-descendants"
  };
  obj5 = { paddingVertical: nativeDefault.space.PX_16 };
  const FlashList = tmp6(8608).FlashList;
  items2[1] = closure_5(FlashList, obj4);
  const obj6 = { visible: isNitroLocked, theme: themes[themeIndex] };
  items2[2] = closure_5(SettingsAppearanceChannelListPreviewNitroUpsellDefault, obj6);
  return tmp3(View, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx");

export default tmp7;
