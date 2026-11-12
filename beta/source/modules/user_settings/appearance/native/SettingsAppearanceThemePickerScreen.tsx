// Module ID: 17617
// Function ID: 17618
// Name: SettingsAppearanceThemePickerScreen
// Dependencies: [5, 32, 19, 17, 5194, 1238, 1385, 1193, 1192, 1194, 1195, 5195, 1083, 21, 5170, 575, 1377, 1113, 17618, 11353, 17620, 1493, 563, 5398, 1196, 1241, 5192, 5771, 17362, 5198, 1500, 7420, 7445, 7104, 9102, 9092, 1652, 1705, 5167, 5340, 5402, 5405, 17361, 16810, 16811, 6872, 5869, 5231, 9942, 5783, 7048, 7076, 7103, 17363, 17622, 9327, 17628, 17640, 17649, 7388, 11384, 2]
// Exports: default

// Module 17617 (SettingsAppearanceThemePickerScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl4 from "intl" /* 1113 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5398 */;
import Text_Text from "Text/Text" /* 5783 */;
import QuestTypes from "QuestTypes" /* 6872 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 11353 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16810 */;
import HexagonCampaignAnalytics from "HexagonCampaignAnalytics" /* 16811 */;
import HexagonCampaignPreviousPerkValues from "HexagonCampaignPreviousPerkValues" /* 17361 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 17362 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 17363 */;
import ThemeLightIcon from "ThemeLightIcon" /* 17618 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 17620 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5194 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import UserStore from "UserStore" /* 1385 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_3, importDefault, navigation;

let closure_14;
let closure_17;
let closure_18;
let closure_19;
let map1;
let num;
let obj3;
let obj4;
let tmp;
const HexagonCampaignUtils = tmp(5198);
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
let closure_23 = items.map((item, index) => index);
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
const obj17 = { tintColor: nativeDefault.colors.REDESIGN_ACTIVITY_CARD_BADGE_ICON };
let closure_36 = createStyles.createAnimatedThemedStyles(obj17, items);
createStyles = createStyles_mod;
const obj18 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
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
let closure_42 = { code: "(function SettingsAppearanceThemePickerScreenTsx1(){let[activeIndex]=this.__closure;return activeIndex.get();})" };
let closure_43 = { code: "(function SettingsAppearanceThemePickerScreenTsx2(activeIndex){let[scheduleOnRN,setPendingThemeIndex]=this.__closure;scheduleOnRN(setPendingThemeIndex,Math.round(activeIndex));})" };
let closure_44 = { code: "(function SettingsAppearanceThemePickerScreenTsx3(){let[mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised]=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}})" };
function ThemePicker(defaultIndex) {
  let animatedStyle;
  let c13;
  let canGoBack;
  let deviceHeight;
  let deviceWidth;
  let first;
  let hasOnyxNux;
  let intl;
  let items15;
  let items16;
  let items19;
  let items21;
  let obj8;
  let onLayout;
  let ref;
  let result;
  let themeSelector;
  let tmp12;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp65;
  let tmp66;
  let tmp76;
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
  let stateFromStores;
  let activeIndex2;
  let obj4;
  let first1;
  let closure_19;
  closure_20 = undefined;
  let closure_21;
  let callback;
  let callback1;
  let callback2;
  let stateFromStores1;
  let callback3;
  ({ deviceHeight, themeSelector, hasOnyxNux } = defaultIndex);
  let tmp = closure_20();
  let tmp2 = deviceWidth > deviceHeight;
  let tmp3 = defaultIndex;
  let tmp4 = isPreview;
  let obj = defaultIndex(isPreview[30]);
  navigation = obj.useNavigation();
  const tmp6 = mobileThemes;
  const tmp7 = mobileThemes(isPreview[31]);
  const analyticsLocations = tmp7(mobileThemes(isPreview[32]).CLIENT_THEMES_THEME_SELECTOR).analyticsLocations;
  let obj2 = hasSaveButton;
  let tmp8 = canGoBack;
  const tmp9 = canGoBack(hasSaveButton.useState(defaultIndex), 2);
  const themeIndex = tmp9[0];
  let closure_12 = tmp9[1];
  const useState = hasSaveButton.useState;
  let obj3 = defaultIndex(isPreview[26]);
  let str = "dark-content";
  if (obj3.isThemeDark(mobileThemes[defaultIndex].theme)) {
    str = "light-content";
  }
  [tmp12, c13] = tmp8(useState(str), 2);
  tmp8(useState(str), 2);
  closure_14 = tmp14;
  const tmp3Result = tmp3(tmp4[33]);
  const headerHeight = tmp3Result.useHeaderHeight();
  const tmp15 = tmp6(tmp4[34])();
  const width = tmp15.width;
  let num = 0;
  ({ ref, onLayout } = tmp15);
  if (undefined !== width) {
    num = width;
  }
  const memo = obj2.useMemo(getSegmentedControlItems, []);
  const memo1 = obj2.useMemo(() => {
    let theme;
    return closure_21.findIndex((item) => item === theme.theme);
  }, []);
  items = [themeIndex];
  const tmp3Result9 = tmp3(tmp4[22]);
  stateFromStores = tmp3Result9.useStateFromStores(items, () => {
    const obj = defaultIndex(isPreview[26]);
    return obj.isThemeLight(first.systemTheme) ? activeIndex2.LIGHT : activeIndex2.DARK;
  });
  [tmp20, tmp21] = tmp8(obj2.useState(memo1), 2);
  tmp8(obj2.useState(memo1), 2);
  const tmp3Result10 = tmp3(tmp4[35]);
  const segmentedControlState = tmp3Result10.useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: memo1 });
  const activeIndex = segmentedControlState.activeIndex;
  const items1 = [closure_42, activeIndex];
  let c0;
  [tmp24, tmp25] = items1;
  const tmp3Result11 = tmp3(tmp4[36]);
  class SettingsAppearanceThemePickerScreenTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp25];
  SettingsAppearanceThemePickerScreenTsx1.__closure = items2;
  SettingsAppearanceThemePickerScreenTsx1.__workletHash = 4189626295489;
  SettingsAppearanceThemePickerScreenTsx1.__initData = tmp24;
  const items3 = [closure_43, , ];
  const useAnimatedReaction = tmp3Result11.useAnimatedReaction;
  items3[1] = tmp3(tmp4[37]).scheduleOnRN;
  items3[2] = tmp21;
  c0 = undefined;
  let c1;
  [tmp26, tmp27, tmp28] = items3;
  class SettingsAppearanceThemePickerScreenTsx2 {
    constructor(arg0) {
      _undefined(c1, Math.round(arg0));
    }
  }
  const items4 = [tmp27, tmp28];
  SettingsAppearanceThemePickerScreenTsx2.__closure = items4;
  SettingsAppearanceThemePickerScreenTsx2.__workletHash = 2807189811629;
  SettingsAppearanceThemePickerScreenTsx2.__initData = tmp26;
  const animatedReaction = useAnimatedReaction(SettingsAppearanceThemePickerScreenTsx1, SettingsAppearanceThemePickerScreenTsx2);
  let num2 = 1;
  const useSharedValue = tmp3(tmp4[36]).useSharedValue;
  tmp3(tmp4[36]);
  if ("light" === mobileThemes[defaultIndex].theme) {
    num2 = 0;
  }
  activeIndex2 = segmentedControlState.activeIndex;
  if ("nitro" === themeSelector) {
    activeIndex2 = useSharedValue(num2);
  }
  const memo2 = obj2.useMemo(() => {
    const hexWithOpacity = defaultIndex(isPreview[38]).hexWithOpacity;
    defaultIndex(isPreview[38]);
    return hexWithOpacity(defaultIndex(isPreview[39]).OverlayColors.LIGHT, defaultIndex(isPreview[39]).OverlayOpacity.LEVEL_1);
  }, []);
  const items5 = [closure_44, mobileThemes, tmp14, themeIndex, activeIndex2, , , , , , , ];
  const useAnimatedStyle = tmp3(tmp4[36]).useAnimatedStyle;
  tmp3(tmp4[36]);
  items5[5] = tmp3(tmp4[25]).ClientThemeType;
  items5[6] = tmp3(tmp4[40]).withTiming;
  items5[7] = tmp3(tmp4[36]).interpolateColor;
  items5[8] = callback1;
  items5[9] = callback;
  items5[10] = tmp3(tmp4[41]).timingStandard;
  items5[11] = memo2;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items5;
  class SettingsAppearanceThemePickerScreenTsx3 {
    constructor() {
      let value;
      const tmp = c0;
      if (c1) {
        value = c2;
      } else {
        value = _undefined.get();
      }
      if (c1) {
        let obj;
        if (tmp[value].type !== _undefined2.STANDARD_BACKGROUND_THEME) {
          obj = { backgroundColor: _undefined3(c10, c9) };
          const obj2 = { backgroundColor: _undefined3(c10, c9) };
        }
        return obj;
      }
      obj = { backgroundColor: _undefined3(_undefined4(_undefined.get(), c7, c8), c9) };
    }
  }
  const items6 = [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
  SettingsAppearanceThemePickerScreenTsx3.__closure = items6;
  SettingsAppearanceThemePickerScreenTsx3.__workletHash = 5300958173313;
  SettingsAppearanceThemePickerScreenTsx3.__initData = tmp33;
  obj4 = { textNormal: closure_29(activeIndex2), textMuted: closure_32(activeIndex2), textBrand: closure_39(activeIndex2), borderFaint: closure_33(activeIndex2), borderStrong: closure_34(activeIndex2), borderNormal: closure_35(activeIndex2), headerPrimary: closure_30(activeIndex2), headerSecondary: closure_31(activeIndex2), activityIcon: closure_36(activeIndex2), bgModSubtle: stateFromStores1(activeIndex2), bgModStrong: callback3(activeIndex2), iconHeaderSecondary: closure_37(activeIndex2), iconInteractive: closure_38(activeIndex2), bgBasePrimary: callback2(activeIndex2), bgSurfaceOverlay: closure_27(activeIndex2), bgSurfaceHigh: closure_28(activeIndex2), bgRaised: animatedStyle };
  animatedStyle = useAnimatedStyle(SettingsAppearanceThemePickerScreenTsx3);
  const tmp8Result4 = tmp8(obj2.useState(false), 2);
  first1 = tmp8Result4[0];
  closure_19 = tmp8Result4[1];
  closure_20 = obj2.useRef(false);
  closure_21 = obj2.useRef(false);
  const items7 = [mode, analyticsLocations, isSynced];
  callback = obj2.useCallback((themes) => {
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
  }, items7);
  const useCallback = obj2.useCallback;
  _require = isSynced(function*(arg0, value) {
    let intl;
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
        return { value: "HermesInternal", done: null };
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
            closure_1_20.current = true;
            closure_1_19(true);
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
          closure_1_20.current = false;
          closure_1_19(false);
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
            closure_1_20.current = false;
            closure_1_19(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              callback(closure_0);
              value = true;
            }
            c4 = 1;
          }
          c4 = 0;
          closure_1_20.current = false;
          closure_1_19(false);
          const tmp20 = value;
          if (!tmp20) {
            const obj6 = { text: intl.string(closure_0(isPreview[17]).t.F8FvUy) };
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
  const items8 = [callback];
  callback1 = useCallback(function() {
    return closure_0(...arguments);
  }, items8);
  const items9 = [themeIndex, tmp14, activeIndex2, onSaveTheme, mobileThemes, navigation, callback, callback1];
  callback2 = obj2.useCallback(isSynced(function*(arg0, value) {
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
        return { value: "HermesInternal", done: null };
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
                obj4 = { value: callback1(tmp11), done: false };
                return obj4;
              } else {
                callback(tmp11);
                close();
                c2 = 3;
                return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
      } catch (tmp18) {
        c2 = 3;
        throw tmp18;
      }
    }
  }), items9);
  const items10 = [onSaveTheme];
  const tmp3Result14 = tmp3(tmp4[22]);
  stateFromStores1 = tmp3Result14.useStateFromStores(items10, () => onSaveTheme.hasHiddenHexagonCampaignPreset);
  const items11 = [hasSaveButton, mobileThemes, themeIndex, defaultIndex, isPreview, mode, stateFromStores1];
  callback3 = obj2.useCallback(() => {
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
  }, items11);
  const items12 = [navigation, callback3, callback, callback1];
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
            return { value: "HermesInternal", done: null };
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
                  const tmp13 = closure_1_26();
                  if (null != tmp13) {
                    if (closure_2_41(tmp13)) {
                      obj5.preventDefault();
                      if (!ref.current) {
                        c3 = 1;
                        c4 = 1;
                        obj4 = { value: closure_1_23(tmp13), done: false };
                        return obj4;
                      }
                    } else {
                      closure_1_22(tmp13);
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
            return { value: "HermesInternal", done: null };
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
  }, items12);
  const items13 = [themeIndex, callback2, analyticsLocations, mobileThemes, isSynced, isPreview, headerTitle, tmp14, navigation, , , , , , , , ];
  ({ textNormal: arr14[9], textBrand: arr14[10] } = obj4);
  items13[11] = canGoBack;
  items13[12] = onSaveTheme;
  items13[13] = hasSaveButton;
  items13[14] = tmp20;
  items13[15] = stateFromStores;
  items13[16] = first1;
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
        let obj = defaultIndex(isPreview[23]);
        result = obj.isNitroGatedMobileTheme(tmp);
      }
      tmp3 = result;
    }
    defaultIndex = tmp3;
    const setOptions = navigation.setOptions;
    let obj2 = defaultIndex(isPreview[16]);
    let fn;
    if (!obj2.isIOS()) {
      fn = () => obj4(headerTitle, {});
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
          const obj = { theme: tmp4, children: obj4(mobileThemes(isPreview[48]), obj2) };
          const ThemeContextProvider = defaultIndex(isPreview[47]).ThemeContextProvider;
          obj2 = { navigation };
          return obj4(ThemeContextProvider, obj);
        } else {
          return null;
        }
      },
      headerTitle() {
        let stringResult;
        const obj = { animated: true, variant: "heading-md/semibold", style: textNormal.textNormal, children: stringResult };
        stringResult = headerTitle;
        const Text = defaultIndex(isPreview[49]).Text;
        const tmp = obj4;
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
          tmpResult = tmp(tmp2(7048).ActivityIndicator, { size: "small" });
        } else {
          let obj2 = result;
          const obj = { hitSlop: 8, disabled: result, onPress: callback2, children: tmp5(Text, obj3) };
          const PressableOpacity = tmp2(7076).PressableOpacity;
          items = [obj4.textBrand, ];
          Text = Text_Text.Text;
          tmp5 = closure_17;
          if (result) {
            obj2 = { opacity: 0.4 };
          }
          items[1] = obj2;
          obj3 = { animated: true, variant: "body-md/semibold", style: items, children: intl.string(intl4.t.i4jeWR) };
          intl = intl4.intl;
          tmpResult = tmp(PressableOpacity, obj);
        }
        return tmpResult;
      };
    }
    setOptions(obj3);
  }, items13);
  const tmp3Result15 = tmp3(tmp4[52]);
  tmp3Result15.useNavigatorBackPressHandler(() => !canGoBack);
  const items14 = [themeIndex];
  let rounded = deviceWidth;
  const callback4 = obj2.useCallback((mobileThemesIndex) => {
    if (mobileThemesIndex !== first) {
      closure_12(mobileThemesIndex);
      const obj = ClientThemesBackgroundActionCreators;
      const result = obj.updateMobilePendingThemeIndex(mobileThemesIndex);
    }
  }, items14);
  if (tmp2) {
    const _Math = Math;
    rounded = Math.floor(deviceWidth / 2);
  }
  if ("nitro" === themeSelector) {
    let obj5 = { themes: mobileThemes, currentThemeIndex: themeIndex, isPreview, isSynced, defaultIndex, deviceWidth: rounded, animatedStyles: obj4, hasOnyxNux, onThemeSelected: callback4 };
    tmp65 = obj4(tmp6(tmp4[54]), obj5);
    tmp66 = obj4;
  } else {
    let tmp61;
    if (null != mobileThemes[tmp20]) {
      let theme = stateFromStores;
      if ("system" !== mobileThemes[tmp20].theme) {
        theme = tmp59.theme;
      }
      tmp61 = theme;
    }
    let obj6 = { style: tmp.segmentedControlContainer, ref, onLayout, children: items15 };
    let obj7 = { theme: tmp61, children: obj4(tmp3(tmp4[55]).SegmentedControl, obj8) };
    let ThemeContextProvider = tmp3(tmp4[47]).ThemeContextProvider;
    obj8 = { variant: "experimental_Large", state: segmentedControlState };
    items15 = [obj4(ThemeContextProvider, obj7), ];
    const obj9 = { animated: true, variant: "body-xs/medium", style: items16, children: intl.string(tmp3(tmp4[17]).t.d5Gu9A) };
    items16 = [obj4.headerSecondary, tmp.textCentered];
    let Text = tmp3(tmp4[49]).Text;
    intl = tmp3(tmp4[17]).intl;
    items15[1] = obj4(Text, obj9);
    tmp65 = first1(headerTitle, obj6);
    tmp66 = obj4;
  }
  const items17 = [themeIndex, mobileThemes, activeIndex2, stateFromStores];
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
  }, items17);
  const memo3 = obj2.useMemo(tmp6(tmp4[56]), []);
  const obj10 = { themes: mobileThemes, themeIndex, animatedStyles: obj4, data: memo3, useGradientBackground: "nitro" === themeSelector, isNitroLocked: result };
  result = tmp14;
  const tmp6Result = tmp6(tmp4[57]);
  if ("nitro" === themeSelector) {
    result = isPreview;
  }
  if (result) {
    const tmp3Result16 = tmp3(tmp4[23]);
    result = tmp3Result16.isNitroGatedMobileTheme(mobileThemes[themeIndex]);
  }
  const tmp66Result = tmp66(tmp6Result, obj10);
  const items18 = [{ width: "100%", height: "100%" }, ];
  let bgBasePrimary = !tmp14;
  View = tmp6(tmp4[36]).View;
  if ("nitro" !== themeSelector) {
    bgBasePrimary = obj4.bgBasePrimary;
  }
  const obj11 = { style: items18, children: items19 };
  items18[1] = bgBasePrimary;
  let tmp66Result2 = null;
  if ("nitro" === themeSelector) {
    const obj12 = { themes: mobileThemes, themeIndex, isDimmed: true };
    tmp66Result2 = tmp66(tmp6(tmp4[58]), obj12);
  }
  items19 = [tmp66Result2, ];
  const items20 = [tmp.container, , ];
  let landscapeContainer = tmp2;
  const SafeAreaPaddingView = tmp3(tmp4[59]).SafeAreaPaddingView;
  if (tmp2) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj13 = { bottom: true, style: items20, children: items21 };
  items20[1] = landscapeContainer;
  items20[2] = { marginTop: headerHeight };
  items21 = [tmp66(tmp6(tmp4[60]), { animated: true, barStyle: tmp12 }), ];
  const obj14 = { children: null };
  const tmp75 = closure_19;
  if (tmp2) {
    const obj15 = { style: tmp.landscapePreview, children: tmp66Result };
    const items22 = [tmp66(headerTitle, obj15), ];
    const obj16 = { style: tmp.landscapeSelector, children: tmp65 };
    items22[1] = tmp66(headerTitle, obj16);
    obj14.children = items22;
    tmp76 = obj14;
  } else {
    const items23 = [tmp66Result, tmp65];
    obj14.children = items23;
    tmp76 = obj14;
  }
  items21[1] = first1(tmp75, tmp76);
  items19[1] = first1(SafeAreaPaddingView, obj13);
  return first1(View, obj11);
}
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx");

export default function ConnectedThemePicker(canGoBack) {
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
  let obj = mode(userPreset[22]);
  items = [memo1, ThemeStore, UnsyncedUserSettingsStore, SelectivelySyncedUserSettingsStore, memo2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { userPreset: memo1.gradientPreset, isPreview: memo1.isPreview, usingSystemTheme: useSystemTheme.useSystemTheme === constants2.ON, isSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), userTheme: theme.theme, hasCustomTheme: memo2.hasCustomTheme() };
    return obj;
  });
  ({ usingSystemTheme: c1, userPreset } = stateFromStoresObject);
  ({ userTheme: c3, hasCustomTheme: c4, isSynced, isPreview } = stateFromStoresObject);
  let obj2 = mode(userPreset[23]);
  const allMobileThemes = obj2.useAllMobileThemes(mode);
  const items1 = [userPreset, allMobileThemes];
  const memo = allMobileThemes.useMemo(() => {
    let id;
    if (userPreset != null) {
      id = userPreset.id;
    }
    let closure_0 = id === preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
    return allMobileThemes.filter((type) => {
      let tmp3 = type.type !== mode(userPreset[25]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      const tmp = mode;
      const tmp2 = userPreset;
      if (!tmp3) {
        tmp3 = type.id !== tmp(tmp2[24]).BackgroundGradientPresetId.EASTER_EGG;
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
            const obj2 = mode(userPreset[26]);
            isThemeDarkResult = obj2.isThemeDark(theme.theme);
          } else {
            const obj = mode(userPreset[26]);
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
    defaultIndex: require("react")(() => {
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
};
