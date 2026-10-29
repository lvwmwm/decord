// Module ID: 17135
// Function ID: 17136
// Name: SettingsAppearanceThemePickerScreen
// Dependencies: [5, 32, 19, 17, 5029, 1250, 1389, 1205, 1204, 1206, 1207, 5030, 1095, 21, 5005, 587, 1381, 1125, 17136, 14306, 17138, 558, 576, 1497, 573, 5239, 1208, 1253, 5027, 16886, 5636, 5032, 1504, 7313, 7338, 6993, 8938, 5086, 5002, 5181, 5243, 5246, 16885, 16357, 16358, 6771, 5701, 5071, 9772, 5271, 6940, 6968, 6990, 16887, 17140, 9182, 17146, 17158, 17167, 7281, 10963, 2]

// Module 17135 (SettingsAppearanceThemePickerScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1095 */;
import intl4 from "intl" /* 1125 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1253 */;
import themes2 from "themes" /* 5027 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5030 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5239 */;
import timing from "timing" /* 5243 */;
import timingPresets from "timingPresets" /* 5246 */;
import Text_Text from "Text/Text" /* 5271 */;
import QuestTypes from "QuestTypes" /* 6771 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 14306 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16357 */;
import HexagonCampaignAnalytics from "HexagonCampaignAnalytics" /* 16358 */;
import HexagonCampaignPreviousPerkValues from "HexagonCampaignPreviousPerkValues" /* 16885 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 16886 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 16887 */;
import ThemeLightIcon from "ThemeLightIcon" /* 17136 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 17138 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5029 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1250 */;
import UserStore from "UserStore" /* 1389 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1205 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;
import ThemeConstants from "ThemeConstants" /* 1207 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c5, c6, closure_3, closure_7, importDefault, navigation;

let closure_14;
let closure_17;
let closure_18;
let closure_19;
let map1;
let num;
let obj3;
let obj4;
let tmp;
const HexagonCampaignUtils = tmp(5032);
function needsHexagonCampaignEnrollment(themes) {
  const obj = MobileThemesUtils;
  let result = obj.isHexagonCampaignMobileTheme(themes);
  if (result) {
    const tmpResult = HexagonCampaignUtils;
    result = !tmpResult.isEnrolledInHexagonCampaign(UserStore.getCurrentUser(), HexagonCampaignPerk.CLIENT_THEME);
  }
  return result;
}
let View = react_native.View;
({ SystemTheme: map1, SystemThemeState: closure_14 } = ThemeConstants);
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_24, marginBottom: num };
createStyles = createStyles.createStyles;
num = 0;
if (!PlatformUtils.isIOS()) {
  num = nativeDefault.space.PX_16;
}
let obj2 = { container: obj, landscapeContainer: obj3, landscapePreview: { flex: 1 }, landscapeSelector: { flex: 1, justifyContent: "center", overflow: "hidden" }, segmentedControlContainer: obj4, textCentered: { textAlign: "center" } };
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj4 = { width: "100%", gap: nativeDefault.space.PX_16, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_20 = createStyles(obj2);
let items = [, , , ];
({ LIGHT: arr[0], DARK: arr[1], ONYX: arr[2], ASH: arr[3] } = ThemeTypes);
let closure_22 = items.map((item) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(item, nativeDefault.colors.CARD_SECONDARY_BG);
});
let cardSecondaryStops = items.map((item, index) => index);
createStyles = createStyles_mod;
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_24 = createStyles.createAnimatedThemedStyles(obj5, items);
createStyles = createStyles_mod;
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_25 = createStyles.createAnimatedThemedStyles(obj6, items);
createStyles = createStyles_mod;
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_26 = createStyles.createAnimatedThemedStyles(obj7, items);
createStyles = createStyles_mod;
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_27 = createStyles.createAnimatedThemedStyles(obj8, items);
createStyles = createStyles_mod;
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_28 = createStyles.createAnimatedThemedStyles(obj9, items);
createStyles = createStyles_mod;
let obj10 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_29 = createStyles.createAnimatedThemedStyles(obj10, items);
createStyles = createStyles_mod;
let obj11 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_30 = createStyles.createAnimatedThemedStyles(obj11, items);
createStyles = createStyles_mod;
let obj12 = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_31 = createStyles.createAnimatedThemedStyles(obj12, items);
createStyles = createStyles_mod;
let obj13 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_32 = createStyles.createAnimatedThemedStyles(obj13, items);
createStyles = createStyles_mod;
let obj14 = { borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_33 = createStyles.createAnimatedThemedStyles(obj14, items);
createStyles = createStyles_mod;
let obj15 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_34 = createStyles.createAnimatedThemedStyles(obj15, items);
createStyles = createStyles_mod;
let obj16 = { borderColor: nativeDefault.colors.BORDER_NORMAL };
let closure_35 = createStyles.createAnimatedThemedStyles(obj16, items);
createStyles = createStyles_mod;
let obj17 = { tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
let closure_36 = createStyles.createAnimatedThemedStyles(obj17, items);
createStyles = createStyles_mod;
let obj18 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_37 = createStyles.createAnimatedThemedStyles(obj18, items);
createStyles = createStyles_mod;
const obj19 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_38 = createStyles.createAnimatedThemedStyles(obj19, items);
createStyles = createStyles_mod;
const obj20 = { color: nativeDefault.colors.TEXT_BRAND };
let closure_39 = createStyles.createAnimatedThemedStyles(obj20, items);
function getSegmentedControlItems() {
  let intl;
  let intl2;
  let intl3;
  const obj = { label: intl.string(intl4.t.K2sFfo), id: ThemeTypes.LIGHT, icon: closure_17(ThemeLightIcon.ThemeLightIcon, {}), page: null };
  intl = intl4.intl;
  items = [obj, , ];
  const obj2 = { label: intl2.string(intl4.t.b8Cei3), id: ThemeTypes.DARK, icon: closure_17(ThemeDarkIcon.ThemeDarkIcon, {}), page: null };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl4.t.Do4ZJx), id: ThemeTypes.ONYX, icon: closure_17(ThemeMidnightIcon.ThemeMidnightIcon, {}), page: null };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
}
const __initData = { code: "function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
const __initData2 = { code: "function SettingsAppearanceThemePickerScreenTsx2(activeIndex_0){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex_0));}" };
const __initData3 = { code: "function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme_0=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme_0.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}}" };
function ThemePicker(defaultIndex) {
  let _undefined;
  let animatedStyle;
  let c13;
  let c15;
  let canGoBack;
  let closure_23;
  let deviceHeight;
  let deviceWidth;
  let first;
  let hasOnyxNux;
  let intl;
  let items10;
  let items13;
  let items15;
  let items9;
  let obj10;
  let result;
  let themeSelector;
  let tmp12;
  let tmp16;
  let tmp22;
  let tmp23;
  let tmp48;
  let tmp49;
  let tmp59;
  defaultIndex = defaultIndex.defaultIndex;
  const mobileThemes = defaultIndex.mobileThemes;
  const isPreview = defaultIndex.isPreview;
  const isSynced = defaultIndex.isSynced;
  ({ deviceWidth, canGoBack } = defaultIndex);
  const hasSaveButton = defaultIndex.hasSaveButton;
  const headerTitle = defaultIndex.headerTitle;
  const onSaveTheme = defaultIndex.onSaveTheme;
  const mode = defaultIndex.mode;
  c13 = undefined;
  let closure_14;
  c15 = undefined;
  let stateFromStores;
  let c17;
  let activeIndex;
  let activeIndex2;
  let memo2;
  let obj6;
  let first1;
  cardSecondaryStops = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  let callback1;
  let callback2;
  let callback3;
  let stateFromStores1;
  let callback4;
  ({ deviceHeight, themeSelector, hasOnyxNux } = defaultIndex);
  let tmp = memo2();
  let tmp2 = deviceWidth > deviceHeight;
  let tmp3 = defaultIndex;
  let tmp4 = isPreview;
  let obj = defaultIndex(isPreview[32]);
  navigation = obj.useNavigation();
  const tmp6 = mobileThemes;
  const tmp7 = mobileThemes(isPreview[33]);
  const analyticsLocations = tmp7(mobileThemes(isPreview[34]).CLIENT_THEMES_THEME_SELECTOR).analyticsLocations;
  let obj2 = hasSaveButton;
  let tmp8 = canGoBack;
  const tmp9 = canGoBack(hasSaveButton.useState(defaultIndex), 2);
  const themeIndex = tmp9[0];
  let closure_12 = tmp9[1];
  const useState = hasSaveButton.useState;
  let obj3 = defaultIndex(isPreview[28]);
  let str = "dark-content";
  if (obj3.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  [tmp12, c13] = tmp8(useState(str), 2);
  tmp8(useState(str), 2);
  closure_14 = tmp14;
  const tmp3Result = tmp3(tmp4[35]);
  const headerHeight = tmp3Result.useHeaderHeight();
  [tmp16, c15] = tmp8(obj2.useState(0), 2);
  tmp8(obj2.useState(0), 2);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = obj2.useMemo(getSegmentedControlItems, []);
  const memo1 = obj2.useMemo(() => {
    let theme;
    return obj6.findIndex((item) => item === theme.theme);
  }, []);
  items = [themeIndex];
  const tmp3Result9 = tmp3(tmp4[24]);
  stateFromStores = tmp3Result9.useStateFromStores(items, () => {
    const obj = defaultIndex(isPreview[28]);
    return obj.isThemeLight(first.systemTheme) ? stateFromStores.LIGHT : stateFromStores.DARK;
  });
  [tmp22, tmp23] = tmp8(obj2.useState(memo1), 2);
  c17 = tmp23;
  tmp8(obj2.useState(memo1), 2);
  const tmp3Result10 = tmp3(tmp4[36]);
  const segmentedControlState = tmp3Result10.useSegmentedControlState({ items: memo, pageWidth: tmp16, defaultIndex: memo1 });
  activeIndex = segmentedControlState.activeIndex;
  function ee() {
    return activeIndex.get();
  }
  ee.__closure = { activeIndex };
  ee.__workletHash = 12670867470872;
  ee.__initData = __initData;
  let fn = function $(arg0) {
    const obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(c17);
    runOnJSResult(Math.round(arg0));
  };
  const tmp3Result11 = tmp3(tmp4[37]);
  let obj4 = { runOnJS: tmp3(tmp4[37]).runOnJS, setPendingThemeIndex: tmp23 };
  fn.__closure = obj4;
  fn.__workletHash = 2409373048953;
  fn.__initData = __initData2;
  const animatedReaction = tmp3Result11.useAnimatedReaction(ee, fn);
  let num = 1;
  const useSharedValue = tmp3(tmp4[37]).useSharedValue;
  tmp3(tmp4[37]);
  if ("light" === mobileThemes[defaultIndex].theme) {
    num = 0;
  }
  activeIndex2 = segmentedControlState.activeIndex;
  if ("nitro" === themeSelector) {
    activeIndex2 = useSharedValue(num);
  }
  memo2 = obj2.useMemo(() => {
    const hexWithOpacity = defaultIndex(isPreview[38]).hexWithOpacity;
    defaultIndex(isPreview[38]);
    return hexWithOpacity(defaultIndex(isPreview[39]).OverlayColors.LIGHT, defaultIndex(isPreview[39]).OverlayOpacity.LEVEL_1);
  }, []);
  const tmp3Result13 = tmp3(tmp4[37]);
  class Re {
    constructor() {
      let interpolateColorResult;
      let obj4;
      let value;
      let withTiming;
      const tmp = mobileThemes;
      if (closure_14) {
        value = first;
      } else {
        value = activeIndex2.get();
      }
      if (closure_14) {
        let obj;
        if (tmp[value].type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
          const obj3 = { backgroundColor: obj4.withTiming(memo2, timingPresets.timingStandard) };
          obj = obj3;
          obj4 = timing;
        }
        return obj;
      }
      obj = { backgroundColor: withTiming(interpolateColorResult, timingPresets.timingStandard) };
      withTiming = timing.withTiming;
      timing;
      const obj2 = ReanimatedRexport;
      interpolateColorResult = obj2.interpolateColor(activeIndex2.get(), cardSecondaryStops, closure_22);
    }
  }
  let obj5 = { mobileThemes, isClientThemesSelector: tmp14, currentThemeIndex: themeIndex, themeTypeIndex: activeIndex2, ClientThemeType: tmp3(tmp4[27]).ClientThemeType, withTiming: tmp3(tmp4[40]).withTiming, interpolateColor: tmp3(tmp4[37]).interpolateColor, cardSecondaryStops, cardSecondaryStyles: first1, timingStandard: tmp3(tmp4[41]).timingStandard, bgRaised: memo2 };
  Re.__closure = obj5;
  Re.__workletHash = 16778869283384;
  Re.__initData = __initData3;
  obj6 = { textNormal: stateFromStores1(activeIndex2), textMuted: closure_32(activeIndex2), textBrand: closure_39(activeIndex2), borderFaint: closure_33(activeIndex2), borderStrong: closure_34(activeIndex2), borderNormal: closure_35(activeIndex2), headerPrimary: callback4(activeIndex2), headerSecondary: closure_31(activeIndex2), activityIcon: closure_36(activeIndex2), bgModSubtle: closure_25(activeIndex2), bgModStrong: callback1(activeIndex2), iconHeaderSecondary: closure_37(activeIndex2), iconInteractive: closure_38(activeIndex2), bgBasePrimary: closure_24(activeIndex2), bgSurfaceOverlay: callback2(activeIndex2), bgSurfaceHigh: callback3(activeIndex2), bgRaised: animatedStyle };
  animatedStyle = tmp3Result13.useAnimatedStyle(Re);
  const tmp8Result6 = tmp8(obj2.useState(false), 2);
  first1 = tmp8Result6[0];
  cardSecondaryStops = tmp8Result6[1];
  closure_24 = obj2.useRef(false);
  closure_25 = obj2.useRef(false);
  const items1 = [mode, analyticsLocations, isSynced];
  callback1 = obj2.useCallback((themes) => {
    const obj = MobileThemesUtils;
    const result = obj.isHexagonCampaignMobileTheme(themes);
    let tmp4 = result;
    if (tmp4) {
      let id;
      const isHexagonCampaignClientThemePreset = HexagonCampaignUtils.isHexagonCampaignClientThemePreset;
      HexagonCampaignUtils;
      if (null != mode) {
        const syncedClientTheme = ThemeStore.getSyncedClientTheme(tmp6);
        let prop;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.backgroundGradientPresetId;
        }
        id = prop;
      } else {
        const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      tmp4 = !isHexagonCampaignClientThemePreset(id);
    }
    if (result) {
      const tmpResult6 = HexagonCampaignPreviousPerkValues;
      const result1 = tmpResult6.saveHexagonCampaignPreviousClientTheme();
    }
    if (null != mode) {
      const tmpResult7 = UserSettingsAppearanceThemeUtils;
      const result2 = tmpResult7.handleSaveSyncedModeTheme(themes, tmp13, analyticsLocations);
    } else {
      const tmpResult8 = UserSettingsAppearanceThemeUtils;
      tmpResult8.handleSaveTheme(themes, analyticsLocations, isSynced);
    }
    if (result) {
      const tmpResult9 = HexagonActionCreators;
      const result3 = tmpResult9.markHexagonCampaignPerkApplied(HexagonCampaignPerk.CLIENT_THEME);
    }
    if (tmp4) {
      const obj2 = { perks: items, content: QuestTypes.QuestContent.CLIENT_THEME_SETTINGS, contentSurface: HexagonCampaignAnalytics.HexagonCampaignContentSurface.THEME_PICKER };
      items = [HexagonCampaignPerk.CLIENT_THEME];
      const trackHexagonCampaignPerkAction = HexagonCampaignAnalytics.trackHexagonCampaignPerkAction;
      HexagonCampaignAnalytics;
      const result4 = trackHexagonCampaignPerkAction(obj2);
    }
  }, items1);
  const useCallback = obj2.useCallback;
  _require = isSynced(function*(arg0, value) {
    let intl;
    let obj4;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_1_24.current = true;
            closure_1_23(true);
            value = false;
            c4 = 2;
            c5 = 3;
            c6 = 1;
            const obj5 = { value: obj4.ensureHexagonCampaignEnrollment(constants.CLIENT_THEME), done: false };
            obj4 = closure_0(isPreview[43]);
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1_24.current = false;
          closure_1_23(false);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            value = false;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1_24.current = false;
            closure_1_23(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              callback1(closure_0);
              value = true;
            }
            c4 = 1;
          }
          c4 = 0;
          closure_1_24.current = false;
          closure_1_23(false);
          const tmp20 = value;
          if (!tmp20) {
            obj6 = { text: intl.string(closure_0(isPreview[17]).t.F8FvUy) };
            const open = mobileThemes(isPreview[46]).open;
            const tmp24 = mobileThemes(isPreview[46]);
            intl = closure_0(isPreview[17]).intl;
            open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj6);
          }
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        }
      } catch (tmp44) {
        closure_3 = tmp44;
        if (0 === c4) {
          c6 = 3;
          throw tmp44;
        } else if (1 === tmp46) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  const items2 = [callback1];
  callback2 = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [themeIndex, tmp14, activeIndex2, onSaveTheme, mobileThemes, navigation, callback1, callback2];
  callback3 = obj2.useCallback(isSynced(function*(arg0, value) {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let close;
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            close = function close() {
              if (null == closure_1_7) {
                navigation.goBack();
              } else {
                tmp();
              }
            };
            if (!ref.current) {
              let tmp11;
              if (closure_14) {
                tmp11 = tmp9[first];
              } else {
                tmp11 = tmp9[activeIndex2.get(activeIndex2)];
              }
              if (needsHexagonCampaignEnrollment(tmp11)) {
                c1 = 1;
                c2 = 1;
                const obj4 = { value: callback2(tmp11), done: false };
                return obj4;
              } else {
                callback1(tmp11);
                close();
                c2 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else if (value) {
          close();
        }
        c2 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp18) {
        c2 = 3;
        throw tmp18;
      }
    }
  }), items3);
  const items4 = [onSaveTheme];
  const tmp3Result14 = tmp3(tmp4[24]);
  stateFromStores1 = tmp3Result14.useStateFromStores(items4, () => onSaveTheme.hasHiddenHexagonCampaignPreset);
  const items5 = [hasSaveButton, mobileThemes, themeIndex, defaultIndex, isPreview, mode, stateFromStores1];
  callback4 = obj2.useCallback(() => {
    const tmp = hasSaveButton;
    if (tmp) {
      return null;
    } else {
      let tmp8;
      const tmp5 = isPreview;
      if (!tmp5) {
        if (null == mode) {
          const tmp12 = stateFromStores1;
          if (!tmp12) {
            tmp8 = tmp4;
          } else {
            tmp8 = null;
          }
        } else {
          tmp8 = null;
        }
      } else {
        tmp8 = null;
        MobileThemesUtils;
      }
      return tmp8;
    }
  }, items5);
  const items6 = [navigation, callback4, callback1, callback2];
  const effect = obj2.useEffect(() => {
    const addListener = navigation.addListener;
    let closure_0 = isSynced((arg0) => {
      let ref;
      let ref2;
      const data = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0, value) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: "IconComponent" };
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
                return { value, done: true };
              } else {
                closure_2 = tmp2;
                closure_1 = tmp;
                const obj5 = data;
                if (!ref2.current) {
                  const tmp13 = closure_1_30();
                  if (null != tmp13) {
                    if (closure_2_41(tmp13)) {
                      obj5.preventDefault();
                      if (!ref.current) {
                        c3 = 1;
                        c4 = 1;
                        const obj4 = { value: closure_1_27(tmp13), done: false };
                        return obj4;
                      }
                    } else {
                      closure_1_26(tmp13);
                    }
                  }
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              ref2.current = true;
              closure_1_9.dispatch(data.data.action);
            }
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          } catch (tmp21) {
            c4 = 3;
            throw tmp21;
          }
        }
      })();
    });
    return addListener("beforeRemove", function() {
      return closure_0(...arguments);
    });
  }, items6);
  const items7 = [themeIndex, callback3, analyticsLocations, mobileThemes, isSynced, isPreview, headerTitle, tmp14, navigation, , , , , , , , ];
  ({ textNormal: arr8[9], textBrand: arr8[10] } = obj6);
  items7[11] = canGoBack;
  items7[12] = onSaveTheme;
  items7[13] = hasSaveButton;
  items7[14] = tmp22;
  items7[15] = stateFromStores;
  items7[16] = first1;
  const effect1 = obj2.useEffect(() => {
    let fn2;
    let textNormal;
    let tmp;
    let tmp3 = first1;
    const tmp2 = first1;
    if (!tmp2) {
      let result = closure_14 && isPreview;
      if (result) {
        let tmp5 = defaultIndex;
        let obj = defaultIndex(isPreview[25]);
        result = obj.isNitroGatedMobileTheme(tmp);
      }
      tmp3 = result;
    }
    defaultIndex = tmp3;
    const setOptions = navigation.setOptions;
    let obj2 = defaultIndex(isPreview[16]);
    let fn;
    if (!obj2.isIOS()) {
      fn = () => closure_1_17(headerTitle, {});
    }
    let obj3 = {
      headerBackground: fn,
      headerTransparent: true,
      headerBackVisible: false,
      headerLeft() {
        let obj2;
        if (canGoBack) {
          let theme = stateFromStores;
          let tmp4;
          if (null != closure_1_1[first]) {
            if ("system" !== closure_1_1[first].theme) {
              theme = tmp3.theme;
            }
            tmp4 = theme;
          }
          const obj = { theme: tmp4, children: c17(mobileThemes(isPreview[48]), obj2) };
          const ThemeContextProvider = defaultIndex(isPreview[47]).ThemeContextProvider;
          obj2 = { navigation };
          return c17(ThemeContextProvider, obj);
        } else {
          return null;
        }
      },
      headerTitle() {
        let stringResult;
        const obj = { animated: true, variant: "redesign/heading-18/bold", style: textNormal.textNormal, children: stringResult };
        stringResult = headerTitle;
        const Text = defaultIndex(isPreview[49]).Text;
        const tmp = c17;
        if (headerTitle == null) {
          const intl = tmp2(tmp3[17]).intl;
          stringResult = intl.string(tmp2(tmp3[17]).t.XAS5Pi);
        }
        return tmp(Text, obj);
      },
      headerTitleAlign: "center",
      headerRight: fn2
    };
    const tmp8 = hasSaveButton;
    if (tmp8) {
      fn2 = () => {
        let Text;
        let intl;
        let obj3;
        let tmp5;
        let tmpResult;
        if (first1) {
          tmpResult = tmp(tmp2(6940).ActivityIndicator, { size: "small" });
        } else {
          let obj2 = result;
          const obj = { hitSlop: 8, disabled: result, onPress: callback3, children: tmp5(Text, obj3) };
          const PressableOpacity = tmp2(6968).PressableOpacity;
          items = [obj6.textBrand, ];
          Text = Text_Text.Text;
          tmp5 = closure_17;
          if (result) {
            obj2 = { opacity: 0.4 };
          }
          items[1] = obj2;
          obj3 = { animated: true, variant: "text-md/semibold", style: items, children: intl.string(intl4.t.i4jeWR) };
          intl = intl4.intl;
          tmpResult = tmp(PressableOpacity, obj);
        }
        return tmpResult;
      };
    }
    setOptions(obj3);
  }, items7);
  const tmp3Result15 = tmp3(tmp4[52]);
  tmp3Result15.useNavigatorBackPressHandler(() => !canGoBack);
  const items8 = [themeIndex];
  let rounded = deviceWidth;
  const callback5 = obj2.useCallback((mobileThemesIndex) => {
    if (mobileThemesIndex !== first) {
      closure_12(mobileThemesIndex);
      const obj = ClientThemesBackgroundActionCreators;
      const result = obj.updateMobilePendingThemeIndex(mobileThemesIndex);
    }
  }, items8);
  if (tmp2) {
    const _Math = Math;
    rounded = Math.floor(deviceWidth / 2);
  }
  if ("nitro" === themeSelector) {
    let obj7 = { themes: mobileThemes, currentThemeIndex: themeIndex, isPreview, isSynced, defaultIndex, deviceWidth: rounded, animatedStyles: obj6, hasOnyxNux, onThemeSelected: callback5 };
    tmp48 = c17(tmp6(tmp4[54]), obj7);
    tmp49 = c17;
  } else {
    let tmp44;
    if (null != mobileThemes[tmp22]) {
      let theme = stateFromStores;
      if ("system" !== mobileThemes[tmp22].theme) {
        theme = tmp42.theme;
      }
      tmp44 = theme;
    }
    const tmp46 = headerTitle;
    const obj8 = { style: tmp.segmentedControlContainer, onLayout: callback, children: items9 };
    const obj9 = { theme: tmp44, children: c17(tmp3(tmp4[55]).SegmentedControl, obj10) };
    let ThemeContextProvider = tmp3(tmp4[47]).ThemeContextProvider;
    obj10 = { variant: "experimental_Large", state: segmentedControlState };
    items9 = [c17(ThemeContextProvider, obj9), ];
    const obj11 = { animated: true, variant: "text-xs/medium", style: items10, children: intl.string(tmp3(tmp4[17]).t.d5Gu9A) };
    items10 = [obj6.headerSecondary, tmp.textCentered];
    let Text = tmp3(tmp4[49]).Text;
    intl = tmp3(tmp4[17]).intl;
    items9[1] = c17(Text, obj11);
    tmp48 = activeIndex(headerTitle, obj8);
    tmp49 = c17;
  }
  const items11 = [themeIndex, mobileThemes, activeIndex2, stateFromStores];
  const effect2 = obj2.useEffect(() => {
    let theme;
    if ("system" === mobileThemes[first].theme) {
      let DARK = stateFromStores;
      if (stateFromStores == null) {
        DARK = ThemeTypes.DARK;
      }
      theme = DARK;
    } else {
      theme = tmp.theme;
    }
    const result = activeIndex2.set(items.indexOf(theme));
    let str = "light-content";
    const tmp5 = c13;
    if (theme === ThemeTypes.LIGHT) {
      str = "dark-content";
    }
    tmp5(str);
  }, items11);
  const memo3 = obj2.useMemo(tmp6(tmp4[56]), []);
  const obj12 = { themes: mobileThemes, themeIndex, animatedStyles: obj6, data: memo3, useGradientBackground: "nitro" === themeSelector, isNitroLocked: result };
  result = tmp14;
  const tmp6Result = tmp6(tmp4[57]);
  if ("nitro" === themeSelector) {
    result = isPreview;
  }
  if (result) {
    const tmp3Result16 = tmp3(tmp4[25]);
    result = tmp3Result16.isNitroGatedMobileTheme(mobileThemes[themeIndex]);
  }
  const tmp49Result = tmp49(tmp6Result, obj12);
  const items12 = [{ width: "100%", height: "100%" }, ];
  let bgBasePrimary = !tmp14;
  View = tmp6(tmp4[37]).View;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj6.bgBasePrimary;
  }
  const obj13 = { style: items12, children: items13 };
  items12[1] = bgBasePrimary;
  let tmp49Result2 = null;
  if ("nitro" === themeSelector) {
    const obj14 = { themes: mobileThemes, themeIndex, isDimmed: true };
    tmp49Result2 = tmp49(tmp6(tmp4[58]), obj14);
  }
  items13 = [tmp49Result2, ];
  const items14 = [tmp.container, , ];
  let landscapeContainer = tmp2;
  const SafeAreaPaddingView = tmp3(tmp4[59]).SafeAreaPaddingView;
  if (tmp2) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj15 = { bottom: true, style: items14, children: items15 };
  items14[1] = landscapeContainer;
  items14[2] = { marginTop: headerHeight };
  items15 = [tmp49(tmp6(tmp4[60]), { animated: true, barStyle: tmp12 }), ];
  const obj16 = { children: null };
  const tmp58 = activeIndex2;
  if (tmp2) {
    const obj17 = { style: tmp.landscapePreview, children: tmp49Result };
    const items16 = [tmp49(headerTitle, obj17), ];
    const obj18 = { style: tmp.landscapeSelector, children: tmp48 };
    items16[1] = tmp49(headerTitle, obj18);
    obj16.children = items16;
    tmp59 = obj16;
  } else {
    const items17 = [tmp49Result, tmp48];
    obj16.children = items17;
    tmp59 = obj16;
  }
  items15[1] = activeIndex(tmp58, tmp59);
  items13[1] = activeIndex(SafeAreaPaddingView, obj15);
  return activeIndex(View, obj13);
}
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedThemePicker(arg0) {
  let canGoBack;
  let hasOnyxNux;
  let hasSaveButton;
  let headerTitle;
  let height;
  let isPreview;
  let isSynced;
  let mode;
  let onSaveTheme;
  let theme;
  let themeSelector;
  let tmp10;
  let tmp19;
  let tmp9;
  let useSystemTheme;
  let userPreset;
  let userTheme;
  let usingSystemTheme;
  let width;
  let tmp = mode;
  let obj = mode(userPreset[22]);
  const cResult = obj.c(34);
  ({ onSaveTheme, headerTitle, canGoBack, themeSelector, hasSaveButton, hasOnyxNux, mode } = arg0);
  let str = "nitro";
  if (undefined !== themeSelector) {
    str = themeSelector;
  }
  ({ width, height } = usingSystemTheme(userPreset[23])());
  const tmp7 = usingSystemTheme;
  const tmp8 = usingSystemTheme(userPreset[23])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [closure_7, , , , ];
    items[1] = ThemeStore;
    items[2] = UnsyncedUserSettingsStore;
    items[3] = SelectivelySyncedUserSettingsStore;
    items[4] = CustomThemeMobileStore;
    const fn = function i() {
      const obj = { userPreset: closure_7.gradientPreset, isPreview: closure_7.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, isSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), userTheme: theme.theme, hasCustomTheme: CustomThemeMobileStore.hasCustomTheme() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(userPreset[24]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp9, tmp10);
  ({ isSynced, usingSystemTheme } = stateFromStoresObject);
  userPreset = stateFromStoresObject.userPreset;
  ({ isPreview, userTheme } = stateFromStoresObject);
  const hasCustomTheme = stateFromStoresObject.hasCustomTheme;
  const tmpResult2 = tmp(userPreset[25]);
  const allMobileThemes = tmpResult2.useAllMobileThemes(mode);
  let id;
  if (userPreset != null) {
    id = userPreset.id;
  }
  const tmp18 = id === tmp(userPreset[26]).BackgroundGradientPresetId.EASTER_EGG;
  let closure_5 = tmp18;
  if (cResult[2] === allMobileThemes) {
    let arr3;
    if (cResult[3] === tmp18) {
      arr3 = cResult[4];
    }
    let tmp21 = arr3;
    if (null != mode) {
      let tmp23;
      if (cResult[7] === arr3) {
        let tmp22;
        if (cResult[8] === mode) {
          tmp22 = cResult[9];
        }
        tmp21 = tmp22;
      }
      if (cResult[10] !== mode) {
        const fn2 = function j(theme) {
          let tmp = "system" !== theme.theme;
          if (tmp) {
            let isThemeDarkResult;
            if (mode === map1.DARK) {
              const obj2 = themes2;
              isThemeDarkResult = obj2.isThemeDark(theme.theme);
            } else {
              const obj = themes2;
              isThemeDarkResult = obj.isThemeLight(theme.theme);
            }
            tmp = isThemeDarkResult;
          }
          return tmp;
        };
        cResult[10] = mode;
        cResult[11] = fn2;
        tmp23 = fn2;
      } else {
        tmp23 = cResult[11];
      }
      const found = arr3.filter(tmp23);
      cResult[7] = arr3;
      class J {
        constructor() {
          let syncedModeThemeIndex;
          if (null != mode) {
            const obj2 = UserSettingsAppearanceThemeUtils;
            syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
          } else {
            const obj = UserSettingsAppearanceThemeUtils;
            syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, arr3, userTheme, hasCustomTheme);
          }
          return syncedModeThemeIndex;
        }
      }
      cResult[9] = found;
      tmp22 = found;
    }
    closure_7 = tmp21;
    if (cResult[12] === hasCustomTheme) {
      if (cResult[13] === arr3) {
        if (cResult[14] === mode) {
          if (cResult[15] === tmp21) {
            if (cResult[16] === userPreset) {
              if (cResult[17] === userTheme) {
                let tmp25;
                if (cResult[18] === usingSystemTheme) {
                  tmp25 = cResult[19];
                }
                const tmp26 = tmp7(userPreset[30])(tmp25);
                if (cResult[20] === (undefined === canGoBack || canGoBack)) {
                  if (cResult[21] === tmp26) {
                    if (cResult[22] === (undefined !== hasOnyxNux && hasOnyxNux)) {
                      if (cResult[23] === (undefined !== hasSaveButton && hasSaveButton)) {
                        if (cResult[24] === headerTitle) {
                          if (cResult[25] === height) {
                            if (cResult[26] === isPreview) {
                              if (cResult[27] === isSynced) {
                                if (cResult[28] === mode) {
                                  if (cResult[29] === tmp21) {
                                    if (cResult[30] === onSaveTheme) {
                                      if (cResult[31] === str) {
                                        let tmp27;
                                        if (cResult[32] === width) {
                                          tmp27 = cResult[33];
                                        }
                                        return tmp27;
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
                  }
                }
                let obj2 = { defaultIndex: null, isPreview, isSynced, mobileThemes: tmp21, deviceWidth: width, deviceHeight: height, canGoBack: tmp4, themeSelector: str, onSaveTheme, hasSaveButton: tmp5, hasOnyxNux: tmp6, headerTitle, mode };
                class J {
                  constructor() {
                    let syncedModeThemeIndex;
                    if (null != mode) {
                      const obj2 = UserSettingsAppearanceThemeUtils;
                      syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
                    } else {
                      const obj = UserSettingsAppearanceThemeUtils;
                      syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, arr3, userTheme, hasCustomTheme);
                    }
                    return syncedModeThemeIndex;
                  }
                }
                const tmp30 = closure_17(ThemePicker, obj2);
                cResult[20] = undefined === canGoBack || canGoBack;
                cResult[21] = tmp26;
                cResult[22] = undefined !== hasOnyxNux && hasOnyxNux;
                cResult[23] = undefined !== hasSaveButton && hasSaveButton;
                cResult[24] = headerTitle;
                cResult[25] = height;
                cResult[26] = isPreview;
                cResult[27] = isSynced;
                cResult[28] = mode;
                cResult[29] = tmp21;
                cResult[30] = onSaveTheme;
                cResult[31] = str;
                cResult[32] = width;
                cResult[33] = tmp30;
                tmp27 = tmp30;
              }
            }
          }
        }
      }
    }
    class J {
      constructor() {
        let syncedModeThemeIndex;
        if (null != mode) {
          const obj2 = UserSettingsAppearanceThemeUtils;
          syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(closure_7, tmp);
        } else {
          const obj = UserSettingsAppearanceThemeUtils;
          syncedModeThemeIndex = obj.getUserThemeIndex(userPreset, usingSystemTheme, arr3, userTheme, hasCustomTheme);
        }
        return syncedModeThemeIndex;
      }
    }
    cResult[12] = hasCustomTheme;
    cResult[13] = arr3;
    cResult[14] = mode;
    cResult[15] = tmp21;
    cResult[16] = userPreset;
    cResult[17] = userTheme;
    cResult[18] = usingSystemTheme;
    cResult[19] = J;
    tmp25 = J;
  }
  if (cResult[5] !== tmp18) {
    class G {
      constructor(type) {
        let tmp3 = type.type !== ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
        if (!tmp3) {
          tmp3 = type.id !== preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
        }
        if (!tmp3) {
          tmp3 = closure_5;
        }
        return tmp3;
      }
    }
    cResult[5] = tmp18;
    cResult[6] = G;
    tmp19 = G;
  } else {
    class G {
      constructor(type) {
        let tmp3 = type.type !== ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
        if (!tmp3) {
          tmp3 = type.id !== preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
        }
        if (!tmp3) {
          tmp3 = closure_5;
        }
        return tmp3;
      }
    }
  }
  const found1 = allMobileThemes.filter(tmp19);
  cResult[2] = allMobileThemes;
  cResult[3] = tmp18;
  cResult[4] = found1;
  arr3 = found1;
}) : (function ConnectedThemePicker(canGoBack) {
  let c1;
  let c3;
  let c4;
  let constants2;
  let headerTitle;
  let height;
  let isPreview;
  let isSynced;
  let onSaveTheme;
  let theme;
  let useSystemTheme;
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
  let flag3 = canGoBack.hasOnyxNux;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const mode = canGoBack.mode;
  importDefault = undefined;
  userPreset = undefined;
  c3 = undefined;
  c4 = undefined;
  let memo1;
  let memo2;
  let tmp = require("useWindowDimensions")();
  ({ width, height } = tmp);
  let obj = mode(userPreset[24]);
  items = [memo1, ThemeStore, UnsyncedUserSettingsStore, SelectivelySyncedUserSettingsStore, memo2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { userPreset: memo1.gradientPreset, isPreview: memo1.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants2.ON, isSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), userTheme: theme.theme, hasCustomTheme: memo2.hasCustomTheme() };
    return obj;
  });
  ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
  ({ userTheme: c3, hasCustomTheme: c4, isSynced, isPreview } = stateFromStoresObject);
  let obj2 = mode(userPreset[25]);
  const allMobileThemes = obj2.useAllMobileThemes(mode);
  const items1 = [userPreset, allMobileThemes];
  const memo = allMobileThemes.useMemo(() => {
    let id;
    if (userPreset != null) {
      id = userPreset.id;
    }
    let closure_0 = id === preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((type) => {
      let tmp3 = type.type !== mode(userPreset[27]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      const tmp = mode;
      const tmp2 = userPreset;
      if (!tmp3) {
        tmp3 = type.id !== tmp(tmp2[26]).BackgroundGradientPresetId.EASTER_EGG;
      }
      if (!tmp3) {
        tmp3 = closure_0;
      }
      return tmp3;
    });
  }, items1);
  const items2 = [memo];
  memo1 = allMobileThemes.useMemo(() => memo, items2);
  const items3 = [memo1, mode];
  memo2 = allMobileThemes.useMemo(() => {
    let found;
    if (null == mode) {
      found = memo1;
    } else {
      let tmp = memo1;
      found = memo1.filter((theme) => {
        let tmp = "system" !== theme.theme;
        if (tmp) {
          let isThemeDarkResult;
          if (closure_1_0 === constants.DARK) {
            const obj2 = mode(userPreset[28]);
            isThemeDarkResult = obj2.isThemeDark(theme.theme);
          } else {
            const obj = mode(userPreset[28]);
            isThemeDarkResult = obj.isThemeLight(theme.theme);
          }
          tmp = isThemeDarkResult;
        }
        return tmp;
      });
    }
    return found;
  }, items3);
  const obj3 = {
    defaultIndex: require("useInitialValue")(() => {
      let syncedModeThemeIndex;
      if (null != mode) {
        const obj2 = UserSettingsAppearanceThemeUtils;
        syncedModeThemeIndex = obj2.getSyncedModeThemeIndex(memo2, tmp);
      } else {
        const obj = UserSettingsAppearanceThemeUtils;
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
    hasOnyxNux: flag3,
    headerTitle,
    mode
  };
  return closure_17(ThemePicker, obj3);
});
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx");

export default tmp5;
