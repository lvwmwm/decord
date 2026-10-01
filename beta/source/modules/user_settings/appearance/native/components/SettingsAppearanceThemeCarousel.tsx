// Module ID: 14818
// Function ID: 14819
// Name: SettingsAppearanceThemeCarousel
// Dependencies: [19, 17, 14819, 1074, 21, 4566, 1177, 4836, 576, 5266, 12, 14820, 4837, 4840, 1230, 8661, 4832, 1610, 10222, 4801, 1115, 14823, 2]
// Exports: default

// Module 14818 (SettingsAppearanceThemeCarousel)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 14819 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
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
let size;
let tmp;
const timingPresets = tmp(4840);
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let closure_11 = ReanimatedRexport.createAnimatedComponent(native.Icon);
let createStyles = createStyles_mod;
let obj = { container: obj2, textCentered: { textAlign: "center" }, labelGroup: obj3, titleContainer: obj4, floatingNuxContainer: obj5, floatingNux: obj6, arrowLeft: obj7, uppercase: { textTransform: "uppercase" }, selectionBorder: size, a11yThemeList: { flexDirection: "row" }, a11yThemeListScroll: { flexGrow: 0 } };
obj2 = { gap: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4, alignItems: "center" };
obj4 = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj5 = { position: "absolute", left: nativeDefault.space.PX_24 };
obj6 = { borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_8, shadowColor: "#000000" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj7 = { transform: items };
items = [{ rotate: "90deg" }];
size = { position: "absolute", alignSelf: "center", width: SettingsAppearanceConstants.THEME_ITEM_WIDTH, height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT, borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
let closure_12 = createStyles(obj);
const __initData = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default function SettingsAppearanceThemeCarousel(themes) {
  let View;
  let animatedStyles;
  let closure_4;
  let defaultIndex;
  let deviceWidth;
  let intl3;
  let items10;
  let items11;
  let items12;
  let items13;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj19;
  let obj9;
  let onThemeSelected;
  let tmp18;
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  ({ animatedStyles, hasOnyxNux: closure_4, onThemeSelected } = themes);
  const isSynced = themes.isSynced;
  let tmp = closure_12();
  const tmp2 = themes;
  const tmp3 = isPreview;
  let obj = themes(isPreview[9]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  deviceWidth.useRef(null);
  const ref = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  let closure_8 = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => theme.theme === constants.ONYX);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj2 = themes(isPreview[5]);
  const sharedValue = obj2.useSharedValue(false);
  let obj3 = themes(isPreview[5]);
  const sharedValue1 = obj3.useSharedValue(false);
  const items1 = [sharedValue, sharedValue1];
  const effect = deviceWidth.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items1);
  const items2 = [onThemeSelected];
  closure_11 = deviceWidth.useMemo(() => {
    const obj = _modDef12;
    return obj.debounce(onThemeSelected, 180);
  }, items2);
  const items3 = [isPreview, onThemeSelected, currentThemeIndex];
  const callback = deviceWidth.useCallback((themePreset) => {
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
    return closure_8(currentThemeIndex(isPreview[11]), obj);
  }, items3);
  const obj4 = themes(isPreview[5]);
  class L {
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
  L.__closure = { withTiming: themes(isPreview[12]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[13]).timingStandard };
  L.__workletHash = 6079461696466;
  L.__initData = __initData;
  let tmp12 = closure_4;
  ({ withTiming: themes(isPreview[12]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[13]).timingStandard });
  const animatedStyle = obj4.useAnimatedStyle(L);
  let tmp13 = null;
  if (themes[currentThemeIndex].type !== themes(isPreview[14]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj7 = { source: currentThemeIndex(tmp3[15]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[6]).IconSizes.SMALL_20 };
    tmp13 = closure_8(closure_11, obj7);
  }
  const items4 = [tmp13, ];
  const obj8 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: obj9.getName() };
  obj9 = themes[currentThemeIndex];
  const Text = tmp2(tmp3[16]).Text;
  items4[1] = closure_8(Text, obj8);
  if (!isScreenReaderEnabled) {
    let tmp17Result1;
    let stringResult;
    if (!tmp2(tmp3[17]).isThumbstickScrollDevice) {
      const obj10 = { children: items5 };
      const obj11 = { pointerEvents: "none", style: tmp.selectionBorder };
      items5 = [closure_8(tmp12, obj11), ];
      size = {
        ref,
        data: themes,
        renderItem: callback,
        style: obj12,
        width: ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN,
        height: ref.THEME_ITEM_HEIGHT,
        loop: false,
        pagingEnabled: true,
        defaultIndex,
        onSnapToItem: onThemeSelected,
        scrollAnimationDuration: 200,
        onProgressChange(arg0, arg1) {
              const rounded = Math.round(arg1);
              if (rounded !== ref.current) {
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
                tmp2.current = rounded;
                closure_11(rounded);
              }
              const tmp8 = closure_4;
              if (tmp8) {
                const _Math = Math;
                const tmp12 = arg1 < closure_8 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
                if (tmp12) {
                  const result1 = sharedValue1.set(true);
                }
                set = sharedValue.set;
                const value = sharedValue1.get();
                const tmp18 = !value && !tmp12;
                const result2 = set(tmp18);
              }
            }
      };
      obj12 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: ref.THEME_ITEM_HORIZONTAL_MARGIN };
      items5[1] = closure_8(currentThemeIndex(tmp3[18]), size);
      tmp17Result1 = tmp11(sharedValue1, obj10);
    }
    const obj14 = { animated: true, style: items6, variant: "text-sm/medium", children: null };
    items6 = [animatedStyles.headerSecondary, tmp.textCentered];
    const obj13 = { children: tmp17Result1 };
    const tmp17Result = closure_8(tmp12, obj13);
    if (isPreview) {
      if (themes[currentThemeIndex].type !== tmp2(tmp3[14]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
        const intl2 = tmp2(tmp3[20]).intl;
        stringResult = intl2.string(tmp2(tmp3[20]).t.VqGKm0);
      }
      obj14.children = stringResult;
      const obj15 = { children: items7 };
      items7 = [tmp17Result, ];
      const obj16 = { style: tmp.labelGroup, children: items8 };
      items8 = [tmp18, closure_8(tmp24, obj14)];
      items7[1] = sharedValue(tmp12, obj16);
      const obj17 = { style: tmp.container, children: items13 };
      const obj18 = { style: tmp.floatingNuxContainer, children: sharedValue(View, obj19) };
      obj19 = { style: items9, children: items11 };
      items9 = [tmp.floatingNux, animatedStyle, , ];
      ({ bgSurfaceOverlay: arr11[2], borderFaint: arr11[3] } = animatedStyles);
      const obj20 = { style: items10, source: currentThemeIndex(tmp3[21]), size: tmp2(tmp3[6]).IconSizes.REFRESH_SMALL_16 };
      items10 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      const tmp11Result2 = sharedValue(sharedValue1, obj15);
      View = currentThemeIndex(tmp3[5]).View;
      items11 = [closure_8(closure_11, obj20), ];
      const obj21 = { animated: true, style: items12, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: intl3.string(tmp2(tmp3[20]).t.y2b7CA) };
      items12 = [animatedStyles.textNormal, tmp.uppercase];
      const Text2 = tmp2(tmp3[16]).Text;
      intl3 = tmp2(tmp3[20]).intl;
      items11[1] = closure_8(Text2, obj21);
      items13 = [closure_8(tmp12, obj18), tmp11Result2];
      return sharedValue(tmp12, obj17);
    }
    const intl = tmp2(tmp3[20]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[20]).t;
    if (isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
  }
  const obj22 = {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      let obj2;
      let closure_0 = index;
      const obj = { children: closure_8(currentThemeIndex(isPreview[11]), obj2) };
      obj2 = {
        themePreset,
        isPreview,
        isSelected: index === currentThemeIndex,
        onPress() {
          return onThemeSelected(index);
        }
      };
      return closure_8(closure_4, obj, "theme-" + index);
    })
  };
  tmp17Result1 = tmp17(onThemeSelected, obj22);
};
