// Module ID: 17498
// Function ID: 17499
// Name: SettingsAppearanceThemeCarousel
// Dependencies: [32, 19, 17, 17499, 1072, 5166, 21, 1652, 1187, 5141, 575, 5398, 5374, 16699, 6919, 1624, 5169, 5378, 5381, 12, 17500, 10194, 5761, 10807, 5384, 1113, 17249, 16721, 17503, 2]
// Exports: default

// Module 17498 (SettingsAppearanceThemeCarousel)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5374 */;
import timing_timing from "timing/timing" /* 5378 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 17499 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5166 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
const timingPresets = tmp2(5381);
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ HexagonCampaignPerk: c9, HexagonCampaignPerkAvailability: c10 } = HexagonCampaignConstants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let closure_14 = module_1652.createAnimatedComponent(native.Icon);
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
let closure_16 = { code: "(function SettingsAppearanceThemeCarouselTsx1(){let[badgeOpacity]=this.__closure;return{opacity:badgeOpacity.get()};})" };
let closure_17 = { code: "(function SettingsAppearanceThemeCarouselTsx2(){let[withTiming,isOnyxNuxVisible,timingStandard]=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default function SettingsAppearanceThemeCarousel(themes) {
  let View2;
  let animatedStyles;
  let closure_5;
  let closure_9;
  let intl3;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let obj11;
  let obj12;
  let obj17;
  let obj26;
  let onThemeSelected;
  let str;
  let str2;
  let tmp26;
  let tmp27;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp43Result6;
  let tmp53;
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
  closure_16 = tmp14;
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
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (c12) {
      num = 1;
    }
    const result = set(withTiming(num, timingPresets.timingStandard));
  }, items3);
  const items4 = [closure_16, sharedValue2];
  let c0;
  [tmp26, tmp27] = items4;
  const tmp2Result9 = tmp2(tmp3[7]);
  class SettingsAppearanceThemeCarouselTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items5 = [tmp27];
  SettingsAppearanceThemeCarouselTsx1.__closure = items5;
  SettingsAppearanceThemeCarouselTsx1.__workletHash = 10804085890430;
  SettingsAppearanceThemeCarouselTsx1.__initData = tmp26;
  const items6 = [sharedValue, sharedValue1];
  const animatedStyle = tmp2Result9.useAnimatedStyle(SettingsAppearanceThemeCarouselTsx1);
  const effect1 = obj2.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items6);
  const items7 = [onThemeSelected];
  closure_18 = obj2.useMemo(() => {
    const obj = _modDef12;
    return obj.debounce(onThemeSelected, 180);
  }, items7);
  const items8 = [isPreview, onThemeSelected, currentThemeIndex];
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
  }, items8);
  const items9 = [sharedValue2, , , ];
  const useAnimatedStyle = tmp2(tmp3[7]).useAnimatedStyle;
  tmp2(tmp3[7]);
  items9[1] = tmp2(tmp3[17]).withTiming;
  items9[2] = sharedValue;
  items9[3] = tmp2(tmp3[18]).timingStandard;
  c0 = undefined;
  let c1;
  let c2;
  [tmp32, tmp33, tmp34, tmp35] = items9;
  class SettingsAppearanceThemeCarouselTsx2 {
    constructor() {
      let str;
      let num = 0;
      const obj = _undefined;
      const tmp = c0;
      if (_undefined.get()) {
        num = 1;
      }
      const obj2 = { opacity: tmp(num, c2), pointerEvents: str };
      str = "none";
      if (obj.get()) {
        str = "auto";
      }
      return obj2;
    }
  }
  const items10 = [tmp33, tmp34, tmp35];
  SettingsAppearanceThemeCarouselTsx2.__closure = items10;
  SettingsAppearanceThemeCarouselTsx2.__workletHash = 8724897694824;
  SettingsAppearanceThemeCarouselTsx2.__initData = tmp32;
  const animatedStyle1 = useAnimatedStyle(SettingsAppearanceThemeCarouselTsx2);
  let tmp39 = null;
  const tmp2Result11 = tmp2(tmp3[12]);
  if (tmp2Result11.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
    const obj7 = { source: currentThemeIndex(tmp3[21]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[8]).IconSizes.SMALL_20 };
    tmp39 = sharedValue1(rounded, obj7);
  }
  const items11 = [tmp39, ];
  const obj8 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-xs/semibold", children: obj12.getName() };
  obj12 = themes[currentThemeIndex];
  const Text = tmp2(tmp3[22]).Text;
  items11[1] = sharedValue1(Text, obj8);
  if (!isScreenReaderEnabled) {
    let tmp43Result7;
    let stringResult;
    if (!tmp2(tmp3[15]).isThumbstickScrollDevice) {
      const obj10 = { pointerEvents: "none", style: tmp.selectionBorder };
      const obj9 = { children: items12 };
      items12 = [sharedValue1(tmp38, obj10), ];
      size = {
        ref,
        data: themes,
        renderItem: callback,
        style: obj11,
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
                const withTiming = timing_timing.withTiming;
                timing_timing;
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
      obj11 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: ref.THEME_ITEM_HORIZONTAL_MARGIN };
      items12[1] = sharedValue1(currentThemeIndex(tmp3[23]), size);
      tmp43Result7 = tmp37(memo1, obj9);
    }
    const obj14 = { animated: true, style: items13, variant: "body-sm/medium", children: null };
    items13 = [animatedStyles.headerSecondary, tmp.textCentered];
    const obj13 = { children: tmp43Result7 };
    const tmp43Result = sharedValue1(closure_5, obj13);
    if (isPreview) {
      const tmp2Result12 = tmp2(tmp3[12]);
      if (tmp2Result12.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
        const intl2 = tmp2(tmp3[25]).intl;
        stringResult = intl2.string(tmp2(tmp3[25]).t.VqGKm0);
      }
      obj14.children = stringResult;
      const tmp43Result4 = sharedValue1(tmp49, obj14);
      let tmp37Result3 = tmp43Result4;
      if (memo) {
        const obj15 = { style: tmp.hintContainer, children: items14 };
        const obj16 = { style: tmp53, pointerEvents: str, accessibilityElementsHidden: !result, importantForAccessibility: str2, children: sharedValue1(currentThemeIndex(tmp3[26]), obj17) };
        str = "none";
        tmp53 = !result && tmp.hidden;
        if (result) {
          str = "auto";
        }
        str2 = "no-hide-descendants";
        if (result) {
          str2 = "auto";
        }
        obj17 = { animatedStyles };
        items14 = [sharedValue1(tmp38, obj16), ];
        let tmp43Result5 = !result;
        if (tmp43Result5) {
          const obj18 = { style: tmp.hintOverlay, children: tmp43Result4 };
          tmp43Result5 = tmp43(tmp38, obj18);
        }
        items14[1] = tmp43Result5;
        tmp37Result3 = tmp37(tmp38, obj15);
      }
      const obj20 = { style: items15, children: tmp43Result6 };
      items15 = [tmp.badgeSlot, animatedStyle];
      tmp43Result6 = result;
      const obj19 = { style: tmp.swatchesGroup, children: items16 };
      const View = currentThemeIndex(tmp3[7]).View;
      const tmp56 = memo1;
      if (result) {
        tmp43Result6 = hexagonCampaignPerkAvailability !== sharedValue.LOCKED;
      }
      if (tmp43Result6) {
        const obj21 = { variant: "overlay", perk: tmp21.CLIENT_THEME };
        tmp43Result6 = tmp43(tmp57(tmp3[27]), obj21);
      }
      const obj22 = { children: items17 };
      items16 = [sharedValue1(View, obj20), tmp43Result];
      items17 = [tmp37(tmp38, obj19), ];
      const obj23 = { style: tmp.labelGroup, children: items18 };
      items18 = [tmp44, tmp37Result3];
      items17[1] = c12(closure_5, obj23);
      const obj24 = { style: tmp.container, children: items23 };
      const obj25 = { style: tmp.floatingNuxContainer, children: c12(View2, obj26) };
      obj26 = { style: items19, children: items21 };
      items19 = [tmp.floatingNux, animatedStyle1, , ];
      ({ bgSurfaceOverlay: arr21[2], borderFaint: arr21[3] } = animatedStyles);
      const obj27 = { style: items20, source: currentThemeIndex(tmp3[28]), size: tmp2(tmp3[8]).IconSizes.REFRESH_SMALL_16 };
      items20 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      const tmp37Result4 = c12(tmp56, obj22);
      View2 = tmp57(tmp3[7]).View;
      items21 = [sharedValue1(rounded, obj27), ];
      const obj28 = { animated: true, style: items22, variant: "body-sm/medium", maxFontSizeMultiplier: 1.5, children: intl3.string(tmp2(tmp3[25]).t.y2b7CA) };
      items22 = [animatedStyles.textNormal, tmp.uppercase];
      const Text2 = tmp2(tmp3[22]).Text;
      intl3 = tmp2(tmp3[25]).intl;
      items21[1] = sharedValue1(Text2, obj28);
      items23 = [sharedValue1(tmp38, obj25), tmp37Result4];
      return c12(closure_5, obj24);
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
  const obj29 = {
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
  tmp43Result7 = tmp43(onThemeSelected, obj29);
};
