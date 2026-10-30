// Module ID: 17194
// Function ID: 17195
// Name: SettingsAppearanceThemeCarousel
// Dependencies: [32, 19, 17, 17195, 1072, 5034, 21, 5090, 1188, 5009, 575, 5269, 5245, 16411, 6778, 1623, 5037, 5249, 5252, 12, 17196, 9994, 5619, 10609, 5255, 1114, 16945, 16433, 17199, 2]
// Exports: default

// Module 17194 (SettingsAppearanceThemeCarousel)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1188 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5245 */;
import timing from "timing" /* 5249 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 17195 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5034 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
const timingPresets = tmp2(5252);
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
let closure_17 = { code: "function SettingsAppearanceThemeCarouselTsx2(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default function SettingsAppearanceThemeCarousel(themes) {
  let View2;
  let animatedStyles;
  let closure_16;
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
  let closure_18;
  const isSynced = themes.isSynced;
  let tmp = isThumbstickScrollDevice();
  let tmp2 = themes;
  let tmp3 = isPreview;
  let obj = themes(isPreview[11]);
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
  const obj5 = themes(isPreview[12]);
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
  __initData = tmp14;
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
  const useTrackHexagonCampaignContentViewed = tmp2(tmp3[13]).useTrackHexagonCampaignContentViewed;
  tmp2(tmp3[13]);
  const CLIENT_THEME_SETTINGS = tmp2(tmp3[14]).QuestContent.CLIENT_THEME_SETTINGS;
  let tmp19 = memo;
  const THEME_PICKER = tmp2(tmp3[13]).HexagonCampaignContentSurface.THEME_PICKER;
  if (memo) {
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = isScreenReaderEnabled;
    }
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = tmp2(tmp3[15]).isThumbstickScrollDevice;
    }
    tmp19 = isThumbstickScrollDevice;
  }
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(CLIENT_THEME_SETTINGS, THEME_PICKER, tmp19);
  const tmp2Result7 = tmp2(tmp3[16]);
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
  class K {
    constructor() {
      const obj = { opacity: sharedValue2.get() };
      return obj;
    }
  }
  K.__closure = { badgeOpacity: sharedValue2 };
  K.__workletHash = 11624303332519;
  K.__initData = __initData;
  const items4 = [sharedValue, sharedValue1];
  const animatedStyle = tmp2Result9.useAnimatedStyle(K);
  const effect1 = obj2.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items4);
  const items5 = [onThemeSelected];
  closure_18 = obj2.useMemo(() => {
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
    return sharedValue1(currentThemeIndex(isPreview[20]), obj);
  }, items6);
  const tmp2Result10 = tmp2(tmp3[7]);
  class Q {
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
  Q.__closure = { withTiming: tmp2(tmp3[17]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: tmp2(tmp3[18]).timingStandard };
  Q.__workletHash = 16840053984177;
  Q.__initData = sharedValue2;
  ({ withTiming: tmp2(tmp3[17]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: tmp2(tmp3[18]).timingStandard });
  const animatedStyle1 = tmp2Result10.useAnimatedStyle(Q);
  let tmp32 = null;
  const tmp2Result11 = tmp2(tmp3[12]);
  if (tmp2Result11.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
    let tmp34 = rounded;
    const obj8 = { source: currentThemeIndex(tmp3[21]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[8]).IconSizes.SMALL_20 };
    tmp32 = sharedValue1(rounded, obj8);
  }
  const items7 = [tmp32, ];
  const obj9 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: obj14.getName() };
  obj14 = themes[currentThemeIndex];
  const Text = tmp2(tmp3[22]).Text;
  items7[1] = sharedValue1(Text, obj9);
  if (!isScreenReaderEnabled) {
    let tmp36Result7;
    let stringResult;
    if (!tmp2(tmp3[15]).isThumbstickScrollDevice) {
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
      items8[1] = sharedValue1(currentThemeIndex(tmp3[23]), size);
      tmp36Result7 = tmp30(memo1, obj10);
    }
    const obj15 = { animated: true, style: items9, variant: "text-sm/medium", children: null };
    items9 = [animatedStyles.headerSecondary, tmp.textCentered];
    const obj13 = { children: tmp36Result7 };
    const tmp36Result = sharedValue1(closure_5, obj13);
    if (isPreview) {
      const tmp2Result12 = tmp2(tmp3[12]);
      if (tmp2Result12.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
        const intl2 = tmp2(tmp3[25]).intl;
        stringResult = intl2.string(tmp2(tmp3[25]).t.VqGKm0);
      }
      obj15.children = stringResult;
      const tmp36Result4 = sharedValue1(tmp42, obj15);
      let tmp30Result3 = tmp36Result4;
      if (memo) {
        const obj16 = { style: tmp.hintContainer, children: items10 };
        const obj17 = { style: tmp46, pointerEvents: str, accessibilityElementsHidden: !result, importantForAccessibility: str2, children: sharedValue1(currentThemeIndex(tmp3[26]), obj18) };
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
        tmp36Result6 = tmp36(tmp50(tmp3[27]), obj22);
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
      const obj28 = { style: items16, source: currentThemeIndex(tmp3[28]), size: tmp2(tmp3[8]).IconSizes.REFRESH_SMALL_16 };
      items16 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      const tmp30Result4 = c12(tmp49, obj23);
      View2 = tmp50(tmp3[7]).View;
      items17 = [tmp36(rounded, obj28), ];
      const obj29 = { animated: true, style: items18, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: intl3.string(tmp2(tmp3[25]).t.y2b7CA) };
      items18 = [animatedStyles.textNormal, tmp.uppercase];
      const Text2 = tmp2(tmp3[22]).Text;
      intl3 = tmp2(tmp3[25]).intl;
      items17[1] = sharedValue1(Text2, obj29);
      items19 = [tmp36(tmp31, obj26), tmp30Result4];
      return c12(closure_5, obj25);
    }
    const intl = tmp2(tmp3[25]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[25]).t;
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
      const obj = { children: sharedValue1(currentThemeIndex(isPreview[20]), obj2) };
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
};
