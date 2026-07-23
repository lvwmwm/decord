// Module ID: 14155
// Function ID: 108908
// Name: getThemeOverride
// Dependencies: [57, 31, 27, 3942, 1322, 1279, 1278, 1280, 1281, 482, 33, 4130, 689, 477, 4130, 1212, 14156, 10356, 14158, 1450, 624, 4063, 1324, 1282, 3944, 3840, 5450, 14072, 1457, 5464, 5484, 5094, 8360, 3991, 3974, 3941, 4131, 4134, 3842, 9129, 4126, 4660, 5093, 14073, 14160, 8760, 14166, 14178, 14187, 5121, 9757, 2]
// Exports: default

// Module 14155 (getThemeOverride)
import _slicedToArray from "_slicedToArray";
import Background from "Background";
import { View } from "getThemeNameForAnalytics";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import SystemThemeState from "SystemThemeState";
import { ThemeTypes } from "sum";
import jsxProd from "module_3991";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "get ActivityIndicator";

let closure_11;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
function getThemeOverride(mobileThemes, first1, stateFromStores) {
  let theme = stateFromStores;
  let tmp2;
  if (null != mobileThemes[first1]) {
    if ("system" !== tmp.theme) {
      theme = tmp.theme;
    }
    tmp2 = theme;
  }
  return tmp2;
}
let num = 0;
({ SystemTheme: closure_11, SystemThemeState: closure_12 } = SystemThemeState);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
if (!set.isIOS()) {
  num = require("_createForOfIteratorHelperLoose").space.PX_16;
}
_createForOfIteratorHelperLoose.marginBottom = num;
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.landscapeContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.landscapePreview = { flex: 1 };
_createForOfIteratorHelperLoose.landscapeSelector = { flex: 1, justifyContent: "center", overflow: "hidden" };
let obj2 = { width: "100%", gap: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.segmentedControlContainer = obj2;
_createForOfIteratorHelperLoose.textCentered = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let items = [, , , ];
({ LIGHT: arr[0], DARKER: arr[1], MIDNIGHT: arr[2], DARK: arr[3] } = ThemeTypes);
let closure_19 = items.map((theme) => {
  const internal = importDefault(689).internal;
  return internal.resolveSemanticColor(theme, importDefault(689).colors.CARD_SECONDARY_BG);
});
let closure_20 = items.map((arg0, arg1) => arg1);
set = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let closure_21 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles(set, items);
let obj1 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_22 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE }, items);
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
let closure_23 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG }, items);
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST };
let closure_24 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles(_createForOfIteratorHelperLoose, items);
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
let closure_25 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH }, items);
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let closure_26 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles(_createForOfIteratorHelperLoose, items);
let obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let closure_27 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY }, items);
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let closure_28 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles(_createForOfIteratorHelperLoose, items);
let obj9 = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_29 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED }, items);
_createForOfIteratorHelperLoose = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
let closure_30 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles(_createForOfIteratorHelperLoose, items);
let obj11 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let closure_31 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG }, items);
_createForOfIteratorHelperLoose = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_NORMAL };
let closure_32 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles(_createForOfIteratorHelperLoose, items);
let obj13 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
let closure_33 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ tintColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON }, items);
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let closure_34 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles(_createForOfIteratorHelperLoose, items);
const obj15 = { tintColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
let closure_35 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT }, items);
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
let closure_36 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles(_createForOfIteratorHelperLoose, items);
function getSegmentedControlItems() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.K2sFfo);
  obj.id = ThemeTypes.LIGHT;
  obj.icon = callback(require(14156) /* ThemeLightIcon */.ThemeLightIcon, {});
  obj.page = null;
  const items = [obj, , ];
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.b8Cei3);
  obj.id = ThemeTypes.DARKER;
  obj.icon = callback(require(10356) /* ThemeDarkIcon */.ThemeDarkIcon, {});
  obj.page = null;
  items[1] = obj;
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.pQwSpQ);
  obj.id = ThemeTypes.MIDNIGHT;
  obj.icon = callback(require(14158) /* ThemeMidnightIcon */.ThemeMidnightIcon, {});
  obj.page = null;
  items[2] = obj;
  return items;
}
let closure_38 = { code: "function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
let closure_39 = { code: "function SettingsAppearanceThemePickerScreenTsx2(activeIndex){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex));}" };
let closure_40 = { code: "function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}}" };
function ThemePicker(defaultIndex) {
  let canGoBack;
  let deviceHeight;
  let deviceWidth;
  let hasMidnightNux;
  let themeSelector;
  defaultIndex = defaultIndex.defaultIndex;
  const mobileThemes = defaultIndex.mobileThemes;
  const isPreview = defaultIndex.isPreview;
  const isSynced = defaultIndex.isSynced;
  ({ deviceWidth, canGoBack } = defaultIndex);
  const hasSaveButton = defaultIndex.hasSaveButton;
  const headerTitle = defaultIndex.headerTitle;
  const onSaveTheme = defaultIndex.onSaveTheme;
  const isRefreshEnabled = defaultIndex.isRefreshEnabled;
  const mode = defaultIndex.mode;
  let callback;
  let callback2;
  let closure_16;
  let stateFromStores;
  let c18;
  let activeIndex;
  let activeIndex2;
  let memo2;
  let obj1;
  let callback1;
  callback2 = undefined;
  ({ deviceHeight, themeSelector, hasMidnightNux } = defaultIndex);
  let tmp = stateFromStores();
  let obj = defaultIndex(isPreview[28]);
  const navigation = obj.useNavigation();
  const analyticsLocations = mobileThemes(isPreview[29])(mobileThemes(isPreview[30]).CLIENT_THEMES_THEME_SELECTOR).analyticsLocations;
  const tmp6 = isSynced(canGoBack.useState(defaultIndex), 2);
  const first = tmp6[0];
  let num = 1;
  let closure_13 = tmp6[1];
  obj1 = defaultIndex(isPreview[25]);
  let str = "dark-content";
  if (obj1.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  const tmp8 = isSynced(canGoBack.useState(str), 2);
  callback = tmp8[num];
  let obj2 = defaultIndex(isPreview[31]);
  callback2 = tmp10;
  const headerHeight = obj2.useHeaderHeight();
  const tmp11 = isSynced(canGoBack.useState(0), 2);
  closure_16 = tmp11[num];
  callback = canGoBack.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let items = [isRefreshEnabled];
  const memo = canGoBack.useMemo(getSegmentedControlItems, []);
  const memo1 = canGoBack.useMemo(() => {
    if (mode.theme === lib.DARK) {
      if (!isRefreshEnabled) {
        let index = _undefined.indexOf(lib.DARKER);
      }
      return index;
    }
    index = _undefined.findIndex((arg0) => arg0 === mode.theme);
  }, items);
  let obj3 = defaultIndex(isPreview[20]);
  const items1 = [mode];
  stateFromStores = obj3.useStateFromStores(items1, () => defaultIndex(isPreview[25]).isThemeLight(mode.systemTheme) ? closure_13.LIGHT : closure_13.DARKER);
  const tmp16 = isSynced(canGoBack.useState(memo1), 2);
  const first1 = tmp16[0];
  c18 = tmp18;
  let obj4 = defaultIndex(isPreview[32]);
  const segmentedControlState = obj4.useSegmentedControlState({ items: memo, pageWidth: tmp11[0], defaultIndex: memo1 });
  activeIndex = segmentedControlState.activeIndex;
  let obj5 = defaultIndex(isPreview[33]);
  class Z {
    constructor() {
      return activeIndex.get();
    }
  }
  Z.__closure = { activeIndex };
  Z.__workletHash = 12670867470872;
  Z.__initData = closure_38;
  let fn = function q(arg0) {
    const obj = defaultIndex(isPreview[33]);
    defaultIndex(isPreview[33]).runOnJS(c18)(Math.round(arg0));
  };
  obj = { runOnJS: defaultIndex(isPreview[33]).runOnJS, setPendingThemeIndex: tmp18 };
  fn.__closure = obj;
  fn.__workletHash = 7003433484889;
  fn.__initData = closure_39;
  const animatedReaction = obj5.useAnimatedReaction(Z, fn);
  let obj7 = defaultIndex(isPreview[33]);
  if ("light" === mobileThemes[defaultIndex].theme) {
    num = 0;
  }
  activeIndex2 = segmentedControlState.activeIndex;
  if ("nitro" === themeSelector) {
    activeIndex2 = obj7.useSharedValue(num);
  }
  memo2 = canGoBack.useMemo(() => defaultIndex(isPreview[34]).hexWithOpacity(defaultIndex(isPreview[35]).OverlayColors.LIGHT, defaultIndex(isPreview[35]).OverlayOpacity.LEVEL_1), []);
  let obj8 = defaultIndex(isPreview[33]);
  class De {
    constructor() {
      tmp = mobileThemes;
      if (themeSelector) {
        value = closure_12;
      } else {
        tmp2 = activeIndex;
        value = activeIndex.get();
      }
      if (themeSelector) {
        tmp4 = defaultIndex;
        tmp5 = isPreview;
        num = 24;
        if (tmp[value].type !== defaultIndex(isPreview[24]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
          obj = {};
          tmp7 = defaultIndex;
          tmp8 = isPreview;
          num2 = 36;
          obj5 = defaultIndex(isPreview[36]);
          tmp9 = c21;
          num3 = 37;
          obj.backgroundColor = obj5.withTiming(c21, defaultIndex(isPreview[37]).timingStandard);
        }
        return obj;
      }
      obj = {};
      obj2 = defaultIndex(isPreview[36]);
      obj3 = defaultIndex(isPreview[33]);
      interpolateColorResult = obj3.interpolateColor(activeIndex.get(), activeIndex, activeIndex);
      obj.backgroundColor = obj2.withTiming(interpolateColorResult, defaultIndex(isPreview[37]).timingStandard);
      return;
    }
  }
  obj = { mobileThemes, isClientThemesSelector: tmp10, currentThemeIndex: first, themeTypeIndex: activeIndex2, ClientThemeType: defaultIndex(isPreview[24]).ClientThemeType, withTiming: defaultIndex(isPreview[36]).withTiming, interpolateColor: defaultIndex(isPreview[33]).interpolateColor, cardSecondaryStops: activeIndex2, cardSecondaryStyles: activeIndex, timingStandard: defaultIndex(isPreview[37]).timingStandard, bgRaised: memo2 };
  De.__closure = obj;
  De.__workletHash = 10807943820408;
  De.__initData = closure_40;
  obj1 = {};
  const animatedStyle = obj8.useAnimatedStyle(De);
  obj1.textNormal = callback4(activeIndex2);
  obj1.textMuted = callback7(activeIndex2);
  obj1.textBrand = callback14(activeIndex2);
  obj1.borderFaint = callback8(activeIndex2);
  obj1.borderStrong = callback9(activeIndex2);
  obj1.borderNormal = callback10(activeIndex2);
  obj1.headerPrimary = callback5(activeIndex2);
  obj1.headerSecondary = callback6(activeIndex2);
  obj1.activityIcon = callback11(activeIndex2);
  obj1.bgModSubtle = obj1(activeIndex2);
  obj1.bgModStrong = callback1(activeIndex2);
  obj1.iconHeaderSecondary = callback12(activeIndex2);
  obj1.iconInteractive = callback13(activeIndex2);
  obj1.bgBasePrimary = memo2(activeIndex2);
  obj1.bgSurfaceOverlay = callback2(activeIndex2);
  obj1.bgSurfaceHigh = callback3(activeIndex2);
  obj1.bgRaised = animatedStyle;
  const items2 = [first, "nitro" === themeSelector, activeIndex2, onSaveTheme, mobileThemes, isSynced, analyticsLocations, navigation, mode];
  callback1 = canGoBack.useCallback(() => {
    if (c15) {
      let tmp3 = tmp[first];
    } else {
      tmp3 = tmp[activeIndex2.get(activeIndex2)];
    }
    if (null != mode) {
      const result = defaultIndex(isPreview[27]).handleSaveSyncedModeTheme(tmp3, mode, analyticsLocations);
      const obj2 = defaultIndex(isPreview[27]);
    } else {
      defaultIndex(isPreview[27]).handleSaveTheme(tmp3, analyticsLocations, isSynced);
      const obj = defaultIndex(isPreview[27]);
    }
    if (null == onSaveTheme) {
      navigation.goBack();
    } else {
      onSaveTheme();
    }
  }, items2);
  const items3 = [hasSaveButton, mobileThemes, first, defaultIndex, isPreview, analyticsLocations, isSynced, mode];
  callback2 = canGoBack.useCallback(() => {
    if (!hasSaveButton) {
      if (null != mode) {
        if (first !== defaultIndex) {
          const result = defaultIndex(isPreview[27]).handleSaveSyncedModeTheme(tmp, mode, analyticsLocations);
          const obj2 = defaultIndex(isPreview[27]);
        }
      } else {
        defaultIndex(isPreview[27]).handleSaveTheme(tmp, analyticsLocations, isSynced);
        const obj = defaultIndex(isPreview[27]);
      }
    }
  }, items3);
  const items4 = [navigation, callback2];
  const effect = canGoBack.useEffect(() => navigation.addListener("beforeRemove", () => {
    outer1_24();
  }), items4);
  const items5 = [first, callback1, analyticsLocations, mobileThemes, isSynced, isPreview, headerTitle, "nitro" === themeSelector, navigation, , , , , , , ];
  ({ textNormal: arr6[9], textBrand: arr6[10] } = obj1);
  items5[11] = canGoBack;
  items5[12] = onSaveTheme;
  items5[13] = hasSaveButton;
  items5[14] = first1;
  items5[15] = stateFromStores;
  const effect1 = canGoBack.useEffect(() => {
    let tmp = c15;
    if (c15) {
      tmp = isPreview;
    }
    if (tmp) {
      tmp = mobileThemes[first].type !== defaultIndex(isPreview[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
    }
    defaultIndex = tmp;
    let obj = { headerBackground: null, headerTransparent: true, headerBackVisible: false, headerLeft: null, headerTitle: null, headerTitleAlign: "center" };
    let fn;
    if (!obj2.isIOS()) {
      fn = () => callback(hasSaveButton, {});
    }
    obj.headerBackground = fn;
    obj.headerLeft = function headerLeft() {
      if (outer1_4) {
        let obj = { theme: outer2_42(outer1_1, outer1_12, outer1_17) };
        obj = { navigation: outer1_10 };
        obj.children = callback(mobileThemes(isPreview[39]), obj);
        return callback(defaultIndex(isPreview[38]).ThemeContextProvider, obj);
      } else {
        return null;
      }
    };
    obj.headerTitle = function headerTitle() {
      const obj = { animated: true, variant: "redesign/heading-18/bold", style: outer1_22.textNormal };
      if (null != outer1_6) {
        let stringResult = outer1_6;
      } else {
        const intl = defaultIndex(isPreview[15]).intl;
        stringResult = intl.string(defaultIndex(isPreview[15]).t.XAS5Pi);
      }
      obj.children = stringResult;
      return closure_14(defaultIndex(isPreview[40]).Text, obj);
    };
    let fn2;
    if (hasSaveButton) {
      fn2 = () => {
        let obj = { hitSlop: 8, disabled: closure_0, onPress: outer1_23 };
        obj = { animated: true, variant: "text-md/semibold" };
        const items = [outer1_22.textBrand, ];
        let tmp2 = closure_0;
        if (closure_0) {
          obj = { opacity: 0.4 };
          tmp2 = obj;
        }
        items[1] = tmp2;
        obj.style = items;
        const intl = defaultIndex(isPreview[15]).intl;
        obj.children = intl.string(defaultIndex(isPreview[15]).t.i4jeWR);
        obj.children = closure_14(defaultIndex(isPreview[40]).Text, obj);
        return closure_14(defaultIndex(isPreview[41]).PressableOpacity, obj);
      };
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items5);
  let obj11 = defaultIndex(isPreview[42]);
  obj11.useNavigatorBackPressHandler(() => !canGoBack);
  const items6 = [first];
  let rounded = deviceWidth;
  callback3 = canGoBack.useCallback((mobileThemesIndex) => {
    if (mobileThemesIndex !== first) {
      lib(mobileThemesIndex);
      const result = defaultIndex(isPreview[43]).updateMobilePendingThemeIndex(mobileThemesIndex);
      const obj = defaultIndex(isPreview[43]);
    }
  }, items6);
  if (deviceWidth > deviceHeight) {
    const _Math = Math;
    rounded = Math.floor(deviceWidth / 2);
  }
  if ("nitro" === themeSelector) {
    obj2 = { themes: mobileThemes, currentThemeIndex: first, isPreview, isSynced, defaultIndex, deviceWidth: rounded, animatedStyles: obj1, hasMidnightNux, isRefreshEnabled, onThemeSelected: callback3 };
    let tmp38 = callback(mobileThemes(isPreview[44]), obj2);
  } else {
    obj3 = { style: tmp.segmentedControlContainer, onLayout: callback };
    obj4 = { theme: getThemeOverride(mobileThemes, first1, stateFromStores) };
    obj5 = { variant: "experimental_Large", state: segmentedControlState };
    obj4.children = callback(defaultIndex(isPreview[45]).SegmentedControl, obj5);
    const items7 = [callback(defaultIndex(isPreview[38]).ThemeContextProvider, obj4), ];
    const obj6 = { animated: true, variant: "text-xs/medium" };
    const items8 = [obj1.headerSecondary, tmp.textCentered];
    obj6.style = items8;
    let intl = defaultIndex(isPreview[15]).intl;
    obj6.children = intl.string(defaultIndex(isPreview[15]).t.d5Gu9A);
    items7[1] = callback(defaultIndex(isPreview[40]).Text, obj6);
    obj3.children = items7;
    tmp38 = callback2(hasSaveButton, obj3);
    const tmp32 = getThemeOverride(mobileThemes, first1, stateFromStores);
  }
  const items9 = [first, mobileThemes, activeIndex2, stateFromStores, isRefreshEnabled];
  const effect2 = canGoBack.useEffect(() => {
    if ("system" === mobileThemes[first].theme) {
      if (null != stateFromStores) {
        let DARKER2 = stateFromStores;
      } else {
        DARKER2 = lib.DARKER;
      }
    } else {
      let DARKER = tmp.theme;
      if (!tmp7) {
        DARKER = lib.DARKER;
      }
      const result = activeIndex2.set(_undefined.indexOf(DARKER));
      let str = "light-content";
      if (DARKER === lib.LIGHT) {
        str = "dark-content";
      }
      closure_14(str);
    }
  }, items9);
  const memo3 = canGoBack.useMemo(mobileThemes(isPreview[46]), []);
  obj7 = { themes: mobileThemes, themeIndex: first, animatedStyles: obj1, data: memo3, useGradientBackground: tmp10 };
  let tmp46 = tmp10;
  const tmp4 = mobileThemes(isPreview[29]);
  const tmp44 = callback;
  if ("nitro" === themeSelector) {
    tmp46 = isPreview;
  }
  if (tmp46) {
    tmp46 = mobileThemes[first].type !== defaultIndex(isPreview[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  obj7.isNitroLocked = tmp46;
  const tmp44Result = tmp44(mobileThemes(isPreview[47]), obj7);
  obj8 = {};
  const items10 = [{ width: "100%", height: "100%" }, ];
  let bgBasePrimary = !tmp10;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj1.bgBasePrimary;
  }
  items10[1] = bgBasePrimary;
  obj8.style = items10;
  let tmp51 = null;
  if ("nitro" === themeSelector) {
    const obj9 = { themes: mobileThemes, themeIndex: first, isDimmed: true };
    tmp51 = callback(mobileThemes(isPreview[48]), obj9);
  }
  const items11 = [tmp51, ];
  const obj10 = { bottom: true };
  const items12 = [tmp.container, , ];
  let landscapeContainer = tmp2;
  if (deviceWidth > deviceHeight) {
    landscapeContainer = tmp.landscapeContainer;
  }
  items12[1] = landscapeContainer;
  items12[2] = { marginTop: headerHeight };
  obj10.style = items12;
  const items13 = [callback(mobileThemes(isPreview[50]), { animated: true, barStyle: tmp8[0] }), ];
  obj11 = {};
  if (deviceWidth > deviceHeight) {
    const obj12 = { style: tmp.landscapePreview, children: tmp44Result };
    const items14 = [callback(hasSaveButton, obj12), ];
    const obj13 = { style: tmp.landscapeSelector, children: tmp38 };
    items14[1] = callback(hasSaveButton, obj13);
    obj11.children = items14;
    let tmp58 = obj11;
  } else {
    const items15 = [tmp44Result, tmp38];
    obj11.children = items15;
    tmp58 = obj11;
  }
  items13[1] = callback2(closure_16, tmp58);
  obj10.children = items13;
  items11[1] = callback2(defaultIndex(isPreview[49]).SafeAreaPaddingView, obj10);
  obj8.children = items11;
  return callback2(mobileThemes(isPreview[33]).View, obj8);
}
let result = set.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx");

export default function ConnectedThemePicker(canGoBack) {
  let c1;
  let c3;
  let c4;
  let headerTitle;
  let height;
  let isPreview;
  let isSynced;
  let onSaveTheme;
  let userPreset;
  let width;
  let flag = canGoBack.canGoBack;
  ({ onSaveTheme, headerTitle } = canGoBack);
  if (flag === undefined) {
    flag = true;
  }
  let str = canGoBack.themeSelector;
  if (str === undefined) {
    str = "nitro";
  }
  let flag2 = canGoBack.hasSaveButton;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = canGoBack.hasMidnightNux;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const mode = canGoBack.mode;
  let importDefault;
  userPreset = undefined;
  c3 = undefined;
  let React;
  let allMobileThemes;
  let c6;
  let memo;
  let memo1;
  let memo2;
  ({ width, height } = importDefault(userPreset[19])());
  let obj = mode(userPreset[20]);
  let items = [c6, memo2, closure_10, memo1, memo];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ userPreset: _undefined.gradientPreset, isPreview: _undefined.isPreview, usingSystemTheme: outer1_10.useSystemTheme === outer1_12.ON, isSynced: memo1.shouldSync("appearance"), userTheme: memo2.theme, hasCustomTheme: memo.hasCustomTheme() }));
  ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
  ({ userTheme: c3, hasCustomTheme: c4 } = stateFromStoresObject);
  ({ isSynced, isPreview } = stateFromStoresObject);
  let tmp = importDefault(userPreset[19])();
  allMobileThemes = mode(userPreset[21]).useAllMobileThemes(mode);
  const tmp4 = importDefault(userPreset[22])("SettingsAppearanceThemePickerScreen");
  c6 = tmp4;
  const items1 = [userPreset, allMobileThemes];
  memo = React.useMemo(() => {
    let id;
    if (null != userPreset) {
      id = userPreset.id;
    }
    let closure_0 = id === mode(userPreset[23]).BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((type) => {
      let tmp = type.type !== mode(userPreset[24]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (!tmp) {
        tmp = type.id !== mode(userPreset[23]).BackgroundGradientPresetId.EASTER_EGG;
      }
      if (!tmp) {
        tmp = closure_0;
      }
      return tmp;
    });
  }, items1);
  const items2 = [memo, tmp4];
  memo1 = React.useMemo(() => {
    if (c6) {
      let items = tmp;
    } else {
      items = [tmp[1], memo[0]];
      HermesBuiltin.arraySpread(memo.slice(2), 2);
    }
    return items;
  }, items2);
  const items3 = [memo1, mode];
  memo2 = React.useMemo(() => {
    if (null == mode) {
      let found = memo1;
    } else {
      found = memo1.filter((theme) => {
        if ("system" === theme.theme) {
          return tmp;
        } else if (outer1_0 === outer2_11.DARK) {
          theme = theme.theme;
          let isThemeDarkResult = mode(userPreset[25]).isThemeDark(theme);
          const obj2 = mode(userPreset[25]);
        } else {
          isThemeDarkResult = mode(userPreset[25]).isThemeLight(theme.theme);
          const obj = mode(userPreset[25]);
        }
      });
    }
    return found;
  }, items3);
  obj = {
    defaultIndex: importDefault(userPreset[26])(() => {
      if (null != mode) {
        let syncedModeThemeIndex = mode(userPreset[27]).getSyncedModeThemeIndex(memo2, mode);
        const obj2 = mode(userPreset[27]);
      } else {
        const obj = mode(userPreset[27]);
        syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, c1, memo1, c3, c4);
      }
      return syncedModeThemeIndex;
    }),
    isPreview,
    isSynced,
    mobileThemes: memo2,
    deviceWidth: width,
    deviceHeight: height,
    canGoBack: flag,
    themeSelector: str,
    onSaveTheme,
    hasSaveButton: flag2,
    hasMidnightNux: flag3,
    headerTitle,
    isRefreshEnabled: tmp4,
    mode
  };
  return callback(ThemePicker, obj);
};
