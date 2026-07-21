// Module ID: 14034
// Function ID: 106712
// Name: getThemeOverride
// Dependencies: []
// Exports: default

// Module 14034 (getThemeOverride)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ SystemTheme: closure_11, SystemThemeState: closure_12 } = arg1(dependencyMap[8]));
const ThemeTypes = arg1(dependencyMap[9]).ThemeTypes;
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16, gap: importDefault(dependencyMap[12]).space.PX_24 };
let obj3 = arg1(dependencyMap[13]);
if (!obj3.isIOS()) {
  num = importDefault(dependencyMap[12]).space.PX_16;
}
obj.marginBottom = num;
obj.container = obj;
const tmp3 = arg1(dependencyMap[10]);
obj.landscapeContainer = { flexDirection: "row", gap: importDefault(dependencyMap[12]).space.PX_16 };
obj.landscapePreview = { flex: 1 };
obj.landscapeSelector = { <string:768902381>: true, <string:896389916>: true, <string:193613281>: true };
const obj2 = { "Null": "isArray", "Null": "body", "Null": "message", gap: importDefault(dependencyMap[12]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16, marginBottom: importDefault(dependencyMap[12]).space.PX_16 };
obj.segmentedControlContainer = obj2;
obj.textCentered = { textAlign: "center" };
let closure_17 = obj.createStyles(obj);
const items = [, , , ];
({ LIGHT: arr[0], DARKER: arr[1], MIDNIGHT: arr[2], DARK: arr[3] } = ThemeTypes);
let closure_19 = items.map((theme) => {
  const internal = importDefault(dependencyMap[12]).internal;
  return internal.resolveSemanticColor(theme, importDefault(dependencyMap[12]).colors.CARD_SECONDARY_BG);
});
let closure_20 = items.map((arg0, arg1) => arg1);
let obj6 = arg1(dependencyMap[14]);
obj3 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
let closure_21 = obj6.createAnimatedThemedStyles(obj3, items);
let obj8 = arg1(dependencyMap[14]);
const obj1 = { flexDirection: "row", gap: importDefault(dependencyMap[12]).space.PX_16 };
let closure_22 = obj8.createAnimatedThemedStyles({ backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_SUBTLE }, items);
let obj10 = arg1(dependencyMap[14]);
const obj4 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_SUBTLE };
let closure_23 = obj10.createAnimatedThemedStyles({ backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_STRONG }, items);
let obj12 = arg1(dependencyMap[14]);
obj6 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGHEST };
let closure_24 = obj12.createAnimatedThemedStyles(obj6, items);
let obj14 = arg1(dependencyMap[14]);
const obj5 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_STRONG };
let closure_25 = obj14.createAnimatedThemedStyles({ backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH }, items);
let obj16 = arg1(dependencyMap[14]);
obj8 = { color: importDefault(dependencyMap[12]).colors.TEXT_DEFAULT };
let closure_26 = obj16.createAnimatedThemedStyles(obj8, items);
let obj18 = arg1(dependencyMap[14]);
const obj7 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH };
let closure_27 = obj18.createAnimatedThemedStyles({ color: importDefault(dependencyMap[12]).colors.MOBILE_TEXT_HEADING_PRIMARY }, items);
const obj9 = { color: importDefault(dependencyMap[12]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj10 = { color: importDefault(dependencyMap[12]).colors.TEXT_SUBTLE };
let closure_28 = arg1(dependencyMap[14]).createAnimatedThemedStyles(obj10, items);
const obj21 = arg1(dependencyMap[14]);
const obj23 = arg1(dependencyMap[14]);
let closure_29 = obj23.createAnimatedThemedStyles({ color: importDefault(dependencyMap[12]).colors.TEXT_MUTED }, items);
const obj11 = { color: importDefault(dependencyMap[12]).colors.TEXT_MUTED };
obj12 = { borderColor: importDefault(dependencyMap[12]).colors.BORDER_MUTED };
let closure_30 = arg1(dependencyMap[14]).createAnimatedThemedStyles(obj12, items);
const obj25 = arg1(dependencyMap[14]);
const obj27 = arg1(dependencyMap[14]);
let closure_31 = obj27.createAnimatedThemedStyles({ borderColor: importDefault(dependencyMap[12]).colors.BORDER_STRONG }, items);
const obj13 = { borderColor: importDefault(dependencyMap[12]).colors.BORDER_STRONG };
obj14 = { borderColor: importDefault(dependencyMap[12]).colors.BORDER_NORMAL };
let closure_32 = arg1(dependencyMap[14]).createAnimatedThemedStyles(obj14, items);
const obj29 = arg1(dependencyMap[14]);
const obj31 = arg1(dependencyMap[14]);
let closure_33 = obj31.createAnimatedThemedStyles({ tintColor: importDefault(dependencyMap[12]).colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON }, items);
const obj15 = { tintColor: importDefault(dependencyMap[12]).colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
obj16 = { tintColor: importDefault(dependencyMap[12]).colors.TEXT_SUBTLE };
let closure_34 = arg1(dependencyMap[14]).createAnimatedThemedStyles(obj16, items);
const obj33 = arg1(dependencyMap[14]);
const obj35 = arg1(dependencyMap[14]);
let closure_35 = obj35.createAnimatedThemedStyles({ tintColor: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_DEFAULT }, items);
const obj17 = { tintColor: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_DEFAULT };
obj18 = { color: importDefault(dependencyMap[12]).colors.TEXT_BRAND };
let closure_36 = arg1(dependencyMap[14]).createAnimatedThemedStyles(obj18, items);
function getSegmentedControlItems() {
  let obj = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj.label = intl.string(arg1(dependencyMap[15]).t.K2sFfo);
  obj.id = ThemeTypes.LIGHT;
  obj.icon = callback2(arg1(dependencyMap[16]).ThemeLightIcon, {});
  obj.page = null;
  const items = [obj, , ];
  obj = {};
  const intl2 = arg1(dependencyMap[15]).intl;
  obj.label = intl2.string(arg1(dependencyMap[15]).t.b8Cei3);
  obj.id = ThemeTypes.DARKER;
  obj.icon = callback2(arg1(dependencyMap[17]).ThemeDarkIcon, {});
  obj.page = null;
  items[1] = obj;
  obj = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  obj.label = intl3.string(arg1(dependencyMap[15]).t.pQwSpQ);
  obj.id = ThemeTypes.MIDNIGHT;
  obj.icon = callback2(arg1(dependencyMap[18]).ThemeMidnightIcon, {});
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
  const arg1 = defaultIndex;
  const mobileThemes = defaultIndex.mobileThemes;
  const importDefault = mobileThemes;
  const isPreview = defaultIndex.isPreview;
  const dependencyMap = isPreview;
  const isSynced = defaultIndex.isSynced;
  let callback = isSynced;
  ({ deviceWidth, canGoBack } = defaultIndex);
  const React = canGoBack;
  const hasSaveButton = defaultIndex.hasSaveButton;
  const View = hasSaveButton;
  const headerTitle = defaultIndex.headerTitle;
  let closure_6 = headerTitle;
  const onSaveTheme = defaultIndex.onSaveTheme;
  let closure_7 = onSaveTheme;
  const isRefreshEnabled = defaultIndex.isRefreshEnabled;
  let closure_8 = isRefreshEnabled;
  const mode = defaultIndex.mode;
  let closure_9 = mode;
  let callback2;
  let tmp10;
  let closure_16;
  let callback3;
  let items;
  let closure_19;
  let closure_20;
  let callback4;
  let callback5;
  let callback6;
  let callback7;
  ({ deviceHeight, themeSelector, hasMidnightNux } = defaultIndex);
  const tmp = callback3();
  let obj = arg1(dependencyMap[28]);
  const navigation = obj.useNavigation();
  let closure_10 = navigation;
  const analyticsLocations = importDefault(dependencyMap[29])(importDefault(dependencyMap[30]).CLIENT_THEMES_THEME_SELECTOR).analyticsLocations;
  const tmp6 = callback(React.useState(defaultIndex), 2);
  const first = tmp6[0];
  let num = 1;
  let closure_13 = tmp6[1];
  let obj1 = arg1(dependencyMap[25]);
  let str = "dark-content";
  if (obj1.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  const tmp8 = callback(React.useState(str), 2);
  callback2 = tmp8[num];
  let obj2 = arg1(dependencyMap[31]);
  tmp10 = "nitro" === themeSelector;
  const headerHeight = obj2.useHeaderHeight();
  const tmp11 = callback(React.useState(0), 2);
  closure_16 = tmp11[num];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  items = [isRefreshEnabled];
  const memo = React.useMemo(getSegmentedControlItems, []);
  const memo1 = React.useMemo(() => {
    if (mode.theme === lib.DARK) {
      if (!isRefreshEnabled) {
        let index = tmp18.indexOf(lib.DARKER);
      }
      return index;
    }
    index = tmp18.findIndex((arg0) => arg0 === theme.theme);
  }, items);
  let obj3 = arg1(dependencyMap[20]);
  const items1 = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items1, () => defaultIndex(isPreview[25]).isThemeLight(mode.systemTheme) ? closure_13.LIGHT : closure_13.DARKER);
  callback3 = stateFromStores;
  const tmp16 = callback(React.useState(memo1), 2);
  const first1 = tmp16[0];
  items = tmp18;
  let obj4 = arg1(dependencyMap[32]);
  const segmentedControlState = obj4.useSegmentedControlState({ items: memo, pageWidth: tmp11[0], defaultIndex: memo1 });
  const activeIndex = segmentedControlState.activeIndex;
  closure_19 = activeIndex;
  let obj5 = arg1(dependencyMap[33]);
  class Z {
    constructor() {
      return activeIndex.get();
    }
  }
  Z.__closure = { activeIndex };
  Z.__workletHash = 12670867470872;
  Z.__initData = closure_38;
  const fn = function q(arg0) {
    const obj = defaultIndex(isPreview[33]);
    defaultIndex(isPreview[33]).runOnJS(tmp18)(Math.round(arg0));
  };
  obj = { runOnJS: arg1(dependencyMap[33]).runOnJS, setPendingThemeIndex: tmp18 };
  fn.__closure = obj;
  fn.__workletHash = 7003433484889;
  fn.__initData = closure_39;
  const animatedReaction = obj5.useAnimatedReaction(Z, fn);
  let obj7 = arg1(dependencyMap[33]);
  if ("light" === mobileThemes[defaultIndex].theme) {
    num = 0;
  }
  let activeIndex2 = segmentedControlState.activeIndex;
  if (tmp10) {
    activeIndex2 = obj7.useSharedValue(num);
  }
  closure_20 = activeIndex2;
  const memo2 = React.useMemo(() => defaultIndex(isPreview[34]).hexWithOpacity(defaultIndex(isPreview[35]).OverlayColors.LIGHT, defaultIndex(isPreview[35]).OverlayOpacity.LEVEL_1), []);
  callback4 = memo2;
  let obj8 = arg1(dependencyMap[33]);
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
          tmp9 = closure_21;
          num3 = 37;
          obj.backgroundColor = obj5.withTiming(closure_21, defaultIndex(isPreview[37]).timingStandard);
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
  obj = { mobileThemes, isClientThemesSelector: tmp10, currentThemeIndex: first, themeTypeIndex: activeIndex2, ClientThemeType: arg1(dependencyMap[24]).ClientThemeType, withTiming: arg1(dependencyMap[36]).withTiming, interpolateColor: arg1(dependencyMap[33]).interpolateColor, cardSecondaryStops: closure_20, cardSecondaryStyles: closure_19, timingStandard: arg1(dependencyMap[37]).timingStandard, bgRaised: memo2 };
  De.__closure = obj;
  De.__workletHash = 10807943820408;
  De.__initData = closure_40;
  obj1 = {};
  const animatedStyle = obj8.useAnimatedStyle(De);
  obj1.textNormal = callback9(activeIndex2);
  obj1.textMuted = callback12(activeIndex2);
  obj1.textBrand = callback19(activeIndex2);
  obj1.borderFaint = callback13(activeIndex2);
  obj1.borderStrong = callback14(activeIndex2);
  obj1.borderNormal = callback15(activeIndex2);
  obj1.headerPrimary = callback10(activeIndex2);
  obj1.headerSecondary = callback11(activeIndex2);
  obj1.activityIcon = callback16(activeIndex2);
  obj1.bgModSubtle = callback5(activeIndex2);
  obj1.bgModStrong = callback6(activeIndex2);
  obj1.iconHeaderSecondary = callback17(activeIndex2);
  obj1.iconInteractive = callback18(activeIndex2);
  obj1.bgBasePrimary = callback4(activeIndex2);
  obj1.bgSurfaceOverlay = callback7(activeIndex2);
  obj1.bgSurfaceHigh = callback8(activeIndex2);
  obj1.bgRaised = animatedStyle;
  callback5 = obj1;
  const items2 = [first, tmp10, activeIndex2, onSaveTheme, mobileThemes, isSynced, analyticsLocations, navigation, mode];
  const callback1 = React.useCallback(() => {
    if (tmp10) {
      let tmp3 = tmp[closure_12];
    } else {
      tmp3 = tmp[closure_20.get(closure_20)];
    }
    if (null != mode) {
      const result = defaultIndex(isPreview[27]).handleSaveSyncedModeTheme(tmp3, mode, analyticsLocations);
      const obj2 = defaultIndex(isPreview[27]);
      const tmp10 = defaultIndex;
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
  callback6 = callback1;
  const items3 = [hasSaveButton, mobileThemes, first, defaultIndex, isPreview, analyticsLocations, isSynced, mode];
  callback2 = React.useCallback(() => {
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
  callback7 = callback2;
  const items4 = [navigation, callback2];
  const effect = React.useEffect(() => navigation.addListener("beforeRemove", () => {
    callback();
  }), items4);
  const items5 = [first, callback1, analyticsLocations, mobileThemes, isSynced, isPreview, headerTitle, tmp10, navigation, , , , , , , ];
  ({ textNormal: arr6[9], textBrand: arr6[10] } = obj1);
  items5[11] = canGoBack;
  items5[12] = onSaveTheme;
  items5[13] = hasSaveButton;
  items5[14] = first1;
  items5[15] = stateFromStores;
  const effect1 = React.useEffect(() => {
    let tmp = tmp10;
    if (tmp10) {
      tmp = isPreview;
    }
    if (tmp) {
      tmp = mobileThemes[closure_12].type !== defaultIndex(isPreview[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
    }
    const defaultIndex = tmp;
    const obj = {};
    let fn;
    if (!obj2.isIOS()) {
      fn = () => callback2(closure_5, {});
    }
    obj.headerBackground = fn;
    obj.headerLeft = function headerLeft() {
      if (closure_4) {
        let obj = { theme: callback3(callback, closure_12, closure_17) };
        obj = { navigation: closure_10 };
        obj.children = callback2(callback(closure_2[39]), obj);
        return callback2(tmp(closure_2[38]).ThemeContextProvider, obj);
      } else {
        return null;
      }
    };
    obj.headerTitle = function headerTitle() {
      const obj = { 665604545: false, 1470947939: 400, style: closure_22.textNormal };
      if (null != closure_6) {
        let stringResult = closure_6;
      } else {
        const intl = tmp(closure_2[15]).intl;
        stringResult = intl.string(tmp(closure_2[15]).t.XAS5Pi);
      }
      obj.children = stringResult;
      return closure_14(closure_14(closure_2[40]).Text, obj);
    };
    let fn2;
    if (hasSaveButton) {
      fn2 = () => {
        let obj = { hitSlop: 8, disabled: tmp, onPress: closure_23 };
        obj = {};
        const items = [closure_22.textBrand, ];
        let tmp2 = tmp;
        if (closure_14) {
          obj = { opacity: 0.4 };
          tmp2 = obj;
        }
        items[1] = tmp2;
        obj.style = items;
        const intl = tmp(closure_2[15]).intl;
        obj.children = intl.string(closure_14(closure_2[15]).t.i4jeWR);
        obj.children = closure_14(closure_14(closure_2[40]).Text, obj);
        return closure_14(closure_14(closure_2[41]).PressableOpacity, obj);
      };
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items5);
  let obj11 = arg1(dependencyMap[42]);
  obj11.useNavigatorBackPressHandler(() => !canGoBack);
  const items6 = [first];
  let rounded = deviceWidth;
  callback3 = React.useCallback((mobileThemesIndex) => {
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
  if (tmp10) {
    obj2 = { themes: mobileThemes, currentThemeIndex: first, isPreview, isSynced, defaultIndex, deviceWidth: rounded, animatedStyles: obj1, hasMidnightNux, isRefreshEnabled, onThemeSelected: callback3 };
    let tmp38 = callback2(importDefault(dependencyMap[44]), obj2);
  } else {
    obj3 = { style: tmp.segmentedControlContainer, onLayout: callback };
    obj4 = { theme: getThemeOverride(mobileThemes, first1, stateFromStores) };
    obj5 = { variant: "experimental_Large", state: segmentedControlState };
    obj4.children = callback2(arg1(dependencyMap[45]).SegmentedControl, obj5);
    const items7 = [callback2(arg1(dependencyMap[38]).ThemeContextProvider, obj4), ];
    const obj6 = {};
    const items8 = [obj1.headerSecondary, tmp.textCentered];
    obj6.style = items8;
    const intl = arg1(dependencyMap[15]).intl;
    obj6.children = intl.string(arg1(dependencyMap[15]).t.d5Gu9A);
    items7[1] = callback2(arg1(dependencyMap[40]).Text, obj6);
    obj3.children = items7;
    tmp38 = tmp10(View, obj3);
    const tmp32 = getThemeOverride(mobileThemes, first1, stateFromStores);
  }
  const items9 = [first, mobileThemes, activeIndex2, stateFromStores, isRefreshEnabled];
  const effect2 = React.useEffect(() => {
    if ("system" === mobileThemes[closure_12].theme) {
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
      const result = activeIndex2.set(tmp18.indexOf(DARKER));
      let str = "light-content";
      if (DARKER === lib.LIGHT) {
        str = "dark-content";
      }
      closure_14(str);
    }
  }, items9);
  const memo3 = React.useMemo(importDefault(dependencyMap[46]), []);
  obj7 = { themes: mobileThemes, themeIndex: first, animatedStyles: obj1, data: memo3, useGradientBackground: tmp10 };
  let tmp46 = tmp10;
  const tmp4 = importDefault(dependencyMap[29]);
  const tmp44 = callback2;
  if (tmp10) {
    tmp46 = isPreview;
  }
  if (tmp46) {
    tmp46 = mobileThemes[first].type !== arg1(dependencyMap[24]).ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  obj7.isNitroLocked = tmp46;
  const tmp44Result = tmp44(importDefault(dependencyMap[47]), obj7);
  obj8 = {};
  const items10 = [{}, ];
  let bgBasePrimary = !tmp10;
  if (!tmp10) {
    bgBasePrimary = obj1.bgBasePrimary;
  }
  items10[1] = bgBasePrimary;
  obj8.style = items10;
  let tmp51 = null;
  if (tmp10) {
    const obj9 = { themes: mobileThemes, themeIndex: first, isDimmed: true };
    tmp51 = callback2(importDefault(dependencyMap[48]), obj9);
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
  const items13 = [callback2(importDefault(dependencyMap[50]), { animated: true, barStyle: tmp8[0] }), ];
  obj11 = {};
  if (deviceWidth > deviceHeight) {
    const obj12 = { style: tmp.landscapePreview, children: tmp44Result };
    const items14 = [callback2(View, obj12), ];
    const obj13 = { style: tmp.landscapeSelector, children: tmp38 };
    items14[1] = callback2(View, obj13);
    obj11.children = items14;
    let tmp58 = obj11;
  } else {
    const items15 = [tmp44Result, tmp38];
    obj11.children = items15;
    tmp58 = obj11;
  }
  items13[1] = tmp10(closure_16, tmp58);
  obj10.children = items13;
  items11[1] = tmp10(arg1(dependencyMap[49]).SafeAreaPaddingView, obj10);
  obj8.children = items11;
  return tmp10(importDefault(dependencyMap[33]).View, obj8);
}
const obj37 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[51]).fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx");

export default function ConnectedThemePicker(canGoBack) {
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
  const arg1 = mode;
  let importDefault;
  let dependencyMap;
  let closure_3;
  let React;
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  ({ width, height } = importDefault(dependencyMap[19])());
  let obj = arg1(dependencyMap[20]);
  const items = [closure_6, closure_9, closure_10, closure_8, closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ userPreset: tmp4.gradientPreset, isPreview: tmp4.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, isSynced: memo1.shouldSync("appearance"), userTheme: memo2.theme, hasCustomTheme: memo.hasCustomTheme() }));
  ({ usingSystemTheme: closure_1, userPreset } = stateFromStoresObject);
  dependencyMap = userPreset;
  ({ userTheme: closure_3, hasCustomTheme: closure_4 } = stateFromStoresObject);
  ({ isSynced, isPreview } = stateFromStoresObject);
  const tmp = importDefault(dependencyMap[19])();
  const allMobileThemes = arg1(dependencyMap[21]).useAllMobileThemes(mode);
  View = allMobileThemes;
  const tmp4 = importDefault(dependencyMap[22])("SettingsAppearanceThemePickerScreen");
  closure_6 = tmp4;
  const items1 = [userPreset, allMobileThemes];
  const memo = React.useMemo(() => {
    let id;
    if (null != userPreset) {
      id = userPreset.id;
    }
    const mode = id === mode(userPreset[23]).BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((type) => {
      let tmp = type.type !== callback(closure_2[24]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (!tmp) {
        tmp = type.id !== callback(closure_2[23]).BackgroundGradientPresetId.EASTER_EGG;
      }
      if (!tmp) {
        tmp = callback;
      }
      return tmp;
    });
  }, items1);
  closure_7 = memo;
  const items2 = [memo, tmp4];
  const memo1 = React.useMemo(() => {
    if (tmp4) {
      let items = tmp;
    } else {
      items = [tmp[1], memo[0]];
      HermesBuiltin.arraySpread(memo.slice(2), 2);
      const tmp4 = items;
    }
    return items;
  }, items2);
  closure_8 = memo1;
  const items3 = [memo1, mode];
  const memo2 = React.useMemo(() => {
    if (null == mode) {
      let found = memo1;
    } else {
      found = memo1.filter((theme) => {
        if ("system" === theme.theme) {
          return tmp;
        } else if (callback === constants.DARK) {
          theme = theme.theme;
          let isThemeDarkResult = callback(closure_2[25]).isThemeDark(theme);
          const obj2 = callback(closure_2[25]);
        } else {
          isThemeDarkResult = callback(closure_2[25]).isThemeLight(theme.theme);
          const obj = callback(closure_2[25]);
        }
      });
    }
    return found;
  }, items3);
  closure_9 = memo2;
  obj = {
    defaultIndex: importDefault(dependencyMap[26])(() => {
      if (null != mode) {
        let syncedModeThemeIndex = mode(userPreset[27]).getSyncedModeThemeIndex(memo2, mode);
        const obj2 = mode(userPreset[27]);
      } else {
        const obj = mode(userPreset[27]);
        syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, closure_1, memo1, closure_3, closure_4);
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
  return callback2(ThemePicker, obj);
};
