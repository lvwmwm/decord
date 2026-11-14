// Module ID: 17955
// Function ID: 17956
// Name: DisplayNameStylesEditScreen
// Dependencies: [32, 19, 17, 5307, 1388, 1397, 1072, 1626, 21, 1399, 5306, 575, 1503, 6338, 1264, 17956, 504, 17106, 8541, 6750, 5547, 1398, 1396, 10068, 10069, 558, 6015, 1113, 17957, 17958, 17093, 1256, 5554, 9399, 9398, 5552, 17959, 2121, 17963, 17964, 17974, 17976, 17096, 5377, 6752, 17637, 3125, 5929, 1187, 7963, 1090, 17097, 5936, 9437, 9157, 1630, 1655, 5939, 2]
// Exports: default

// Module 17955 (DisplayNameStylesEditScreen)
import shallowEqual from "shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1396 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1397 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1399 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1626 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 9398 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 9399 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function ApplyButton(onPress) {
  let Button;
  let View2;
  let intl;
  let obj4;
  let obj5;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp9;
  let useReducedMotion;
  onPress = onPress.onPress;
  const visible = onPress.visible;
  const loading = onPress.loading;
  let obj = onPress(504);
  items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const items1 = [closure_18, visible];
  let c0;
  [tmp5, tmp6] = items1;
  const obj2 = onPress(1655);
  class DisplayNameStylesEditScreenTsx1 {
    constructor() {
      let pointerEvents = "none";
      if (c0) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items2 = [tmp6];
  DisplayNameStylesEditScreenTsx1.__closure = items2;
  DisplayNameStylesEditScreenTsx1.__workletHash = 11149120055604;
  DisplayNameStylesEditScreenTsx1.__initData = tmp5;
  const animatedProps = obj2.useAnimatedProps(DisplayNameStylesEditScreenTsx1);
  const items3 = [closure_19, visible, , , , ];
  const useAnimatedStyle = tmp(1655).useAnimatedStyle;
  onPress(1655);
  items3[2] = nativeDefault;
  items3[3] = stateFromStores;
  items3[4] = onPress(5939).withSpring;
  items3[5] = closure_12;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items3;
  class DisplayNameStylesEditScreenTsx2 {
    constructor() {
      let tmp9;
      let num = 0;
      if (c0) {
        num = 1;
      }
      let num2 = 60;
      if (c0) {
        num2 = 0;
      }
      let num3 = 0.9;
      if (c0) {
        num3 = 1;
      }
      const rect = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: _undefined.space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: items, opacity: tmp9 };
      let tmp3 = num2;
      if (!c2) {
        tmp3 = _undefined2(num2, c4);
      }
      items = [{ translateY: tmp3 }, ];
      let tmp6 = num3;
      if (!c2) {
        tmp6 = _undefined2(num3, c4);
      }
      items[1] = { scale: tmp6 };
      tmp9 = num;
      if (!c2) {
        tmp9 = _undefined2(num, c4);
      }
      return rect;
    }
  }
  const items4 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  DisplayNameStylesEditScreenTsx2.__closure = items4;
  DisplayNameStylesEditScreenTsx2.__workletHash = 4978276148126;
  DisplayNameStylesEditScreenTsx2.__initData = tmp9;
  const items5 = [onPress];
  const animatedStyle = useAnimatedStyle(DisplayNameStylesEditScreenTsx2);
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items5);
  const obj3 = { style: animatedStyle, children: closure_13(View2, obj4) };
  const View = tmp4(1655).View;
  obj4 = { style: { marginBottom: bottom }, animatedProps, children: closure_13(Button, obj5) };
  View2 = tmp4(1655).View;
  obj5 = { variant: "primary", onPress: callback, size: "lg", text: intl.string(onPress(1113).t["1Qm822"]), loading };
  Button = tmp(5936).Button;
  intl = tmp(1113).intl;
  return closure_13(View, obj3);
}
({ View: hasOwnProperty, ScrollView: metroRequire, Pressable: metroImportDefault } = react_native);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_12 = MediaKeyboardConstants.MEDIA_PICKER_SEND_BUTTON_SPRING;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let items = [DisplayNameEffect.DisplayNameEffect.GRADIENT, DisplayNameEffect.DisplayNameEffect.GUMMY, DisplayNameEffect.DisplayNameEffect.PRISM];
let closure_16 = { overrideSettings: true };
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3, fieldButtonGroup: obj4, fieldButton: obj5, fieldButtonBorder: obj6, fieldButtonLabel: obj7, fieldButtonChevron: obj8, fieldButtonTrailing: obj9, buttonContainer: obj10 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md };
obj5 = { padding: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj6 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_8, flexShrink: 0 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj10 = { marginVertical: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, gap: nativeDefault.space.PX_16 };
let closure_17 = createStyles(obj);
let closure_18 = { code: "(function DisplayNameStylesEditScreenTsx1(){let[visible]=this.__closure;return{pointerEvents:visible?'box-none':'none'};})" };
let closure_19 = { code: "(function DisplayNameStylesEditScreenTsx2(){let[visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING]=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};})" };
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let Provider;
  let combined;
  let combined1;
  let first2;
  let guildDisplayNameStyles;
  let handleApply;
  let intl10;
  let intl11;
  let intl12;
  let intl4;
  let intl7;
  let intl8;
  let intl9;
  let isApplying;
  let isTryItOut;
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
  let items20;
  let items21;
  let items22;
  let items23;
  let items9;
  let mapped;
  let num;
  let obj4;
  let obj8;
  let obj9;
  let onSelectEffect;
  let pendingDisplayNameStyles;
  let tmp14;
  let tryItOutDisplayNameStyles;
  let tmp = closure_17();
  const tmp2 = navigation;
  const tmp3 = isTryItOut;
  let obj = navigation(isTryItOut[12]);
  const route = obj.useRoute();
  let obj2 = navigation(isTryItOut[12]);
  navigation = obj2.useNavigation();
  let params = route.params;
  if (params == null) {
    params = {};
  }
  const guildId = params.guildId;
  isTryItOut = params.isTryItOut;
  let obj3 = { type: tmp2(tmp3[14]).ImpressionTypes.POPOUT, name: tmp2(tmp3[14]).ImpressionNames.DISPLAY_NAME_STYLES_MODAL, properties: obj4 };
  const tmp7 = guildId(tmp3[13]);
  obj4 = { entry_point: tmp2(tmp3[15]).DisplayNameStylesEntryPoints.PROFILE_EDITOR };
  tmp7(obj3, { trackOnInitialLoad: true });
  let tmp2Result = tmp2(tmp3[16]);
  items = [onSelectEffect];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => onSelectEffect.getCurrentUser());
  const tmp2Result11 = tmp2(tmp3[17]);
  const displayNameStylesPendingName = tmp2Result11.useDisplayNameStylesPendingName(stateFromStores, guildId);
  const tmp2Result12 = tmp2(tmp3[18]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2Result12.useGuildMemberOrUserPendingDisplayNameStyles(stateFromStores, guildId);
  ({ pendingDisplayNameStyles, guildDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  let id;
  const tmp12 = guildId(tmp3[19]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const obj5 = { userId: id, guildId, pendingDisplayNameStyles: tmp14, ignoreDisabledStylesSetting: true };
  tmp14 = pendingDisplayNameStyles;
  if (isTryItOut) {
    tmp14 = tryItOutDisplayNameStyles;
  }
  const tmp12Result = tmp12(obj5);
  let closure_5 = tmp12Result;
  let fontId;
  const useState = displayNameStylesPendingName.useState;
  const tmp16 = guildId(tmp3[20])();
  if (tmp12Result != null) {
    fontId = tmp12Result.fontId;
  }
  if (fontId == null) {
    fontId = tmp2(tmp3[21]).DisplayNameFont.DEFAULT;
  }
  const tmp19 = stateFromStores(useState(fontId), 2);
  const selectedFontId = tmp19[0];
  const onSelectFont = tmp19[1];
  let effectId;
  const useState2 = obj10.useState;
  if (tmp12Result != null) {
    effectId = tmp12Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[9]).DisplayNameEffect.SOLID;
  }
  const tmp18Result = stateFromStores(useState2(effectId), 2);
  const first1 = tmp18Result[0];
  onSelectEffect = tmp18Result[1];
  const tmp2Result13 = tmp2(tmp3[22]);
  const tmp24 = tmp2Result13.getEffectColorCount(first1) > 1;
  let closure_10 = tmp24;
  const tmp2Result14 = tmp2(tmp3[23]);
  const displayNameStylesEffectConfig = tmp2Result14.useDisplayNameStylesEffectConfig(first1);
  closure_12 = tmp6(tmp3[24])();
  let colors;
  if (tmp12Result != null) {
    colors = tmp12Result.colors;
  }
  if (colors == null) {
    colors = [];
  }
  const useState3 = obj10.useState;
  const tmp26 = colors.length > 0 && !tmp24;
  if (tmp26) {
    first2 = colors[0];
  } else {
    first2 = displayNameStylesEffectConfig.defaultColors[0];
  }
  const tmp18Result3 = stateFromStores(useState3(first2), 2);
  const first3 = tmp18Result3[0];
  const onSelectColor = tmp30;
  const tmp18Result4 = stateFromStores(displayNameStylesPendingName.useState(() => {
    let length;
    return Object.fromEntries(items.map((item) => {
      items = [item, ];
      let tmp = length;
      if (length.length <= 0) {
        tmp = closure_1_12[item];
      }
      items[1] = tmp;
      return items;
    }));
  }), 2);
  const first4 = tmp18Result4[0];
  closure_17 = tmp18Result4[1];
  const callback = obj10.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_17((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[closure_0] = closure_1;
      return obj;
    });
  }, []);
  const items1 = [tmp24, first4, first1, displayNameStylesEffectConfig.defaultColors, first3];
  const memo = obj10.useMemo(() => {
    const tmp = closure_10;
    if (tmp) {
      let defaultColors = first4[first1];
      if (defaultColors == null) {
        defaultColors = displayNameStylesEffectConfig.defaultColors;
      }
      items = defaultColors;
    } else {
      items = [first3];
    }
    return items;
  }, items1);
  const items2 = [tmp12Result, selectedFontId, first1, memo];
  const memo1 = obj10.useMemo(() => {
    let fontId;
    const tmp = first;
    if (closure_5 != null) {
      fontId = tmp2.fontId;
    }
    let tmp4 = tmp !== fontId;
    if (!tmp4) {
      let effectId;
      const tmp5 = first1;
      if (closure_5 != null) {
        effectId = tmp2.effectId;
      }
      tmp4 = tmp5 !== effectId;
    }
    if (!tmp4) {
      colors = undefined;
      const areArraysShallowEqual = shallowEqual.areArraysShallowEqual;
      shallowEqual;
      const tmp10 = memo;
      if (closure_5 != null) {
        colors = tmp2.colors;
      }
      if (colors == null) {
        colors = [];
      }
      tmp4 = !areArraysShallowEqual(tmp10, colors);
    }
    return tmp4;
  }, items2);
  const callback1 = obj10.useCallback(() => {
    let intl;
    const obj = { text: intl.string(navigation(isTryItOut[27]).t.F8FvUy) };
    const open = guildId(isTryItOut[26]).open;
    guildId(isTryItOut[26]);
    intl = navigation(isTryItOut[27]).intl;
    open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj);
  }, []);
  const tmp2Result15 = tmp2(tmp3[15]);
  const obj6 = {
    hasChanges: memo1,
    entryPoint: tmp2(tmp3[15]).DisplayNameStylesEntryPoints.PROFILE_EDITOR,
    selectedFontId,
    selectedEffectId: first1,
    selectedColors: memo,
    defaultColor: displayNameStylesEffectConfig.defaultColors[0],
    guildId,
    isTryItOut,
    onClose() {
      const obj = navigation;
      if (navigation.isFocused()) {
        obj.goBack();
      }
    },
    onEnrollmentError: callback1
  };
  const displayNameStylesHandleApply = tmp2Result15.useDisplayNameStylesHandleApply(obj6);
  ({ handleApply, isApplying } = displayNameStylesHandleApply);
  const tmp2Result16 = tmp2(tmp3[28]);
  const visibleFontOrder = tmp2Result16.useVisibleFontOrder({ includeCampaignFonts: true });
  const tmp2Result17 = tmp2(tmp3[29]);
  const displayNameStylesNewFontsBadge = tmp2Result17.useDisplayNameStylesNewFontsBadge(visibleFontOrder);
  const showFontsBadge = displayNameStylesNewFontsBadge.showFontsBadge;
  const dismissFontsBadge = displayNameStylesNewFontsBadge.dismissFontsBadge;
  const tmp2Result18 = tmp2(tmp3[30]);
  const hexagonCampaignNewFontBadge = tmp2Result18.useHexagonCampaignNewFontBadge("DisplayNameStylesEditScreen");
  const showCampaignFontBadge = hexagonCampaignNewFontBadge.showCampaignFontBadge;
  const dismissCampaignFontBadge = hexagonCampaignNewFontBadge.dismissCampaignFontBadge;
  const tmp2Result19 = tmp2(tmp3[30]);
  const markHexagonCampaignDisplayNameStylesVisited = tmp2Result19.useMarkHexagonCampaignDisplayNameStylesVisited("DisplayNameStylesEditScreen");
  const tmp2Result20 = tmp2(tmp3[29]);
  const displayNameStylesNewEffectsBadge = tmp2Result20.useDisplayNameStylesNewEffectsBadge(closure_10);
  const showEffectsBadge = displayNameStylesNewEffectsBadge.showEffectsBadge;
  const dismissEffectsBadge = displayNameStylesNewEffectsBadge.dismissEffectsBadge;
  const items3 = [callback, tmp18Result3[1], visibleFontOrder];
  const items4 = [navigation, isTryItOut];
  const callback2 = obj10.useCallback(() => {
    let effectId;
    const obj = DisplayNameStylesUtils;
    const randomDisplayNameStyles = obj.generateRandomDisplayNameStyles(visibleFontOrder, EFFECT_ORDER);
    ({ effectId, colors } = randomDisplayNameStyles);
    onSelectFont(randomDisplayNameStyles.fontId);
    onSelectEffect(effectId);
    const obj2 = DisplayNameStylesUtils;
    if (obj2.getEffectColorCount(effectId) > 1) {
      callback(effectId, colors);
    } else {
      onSelectColor(colors[0]);
    }
    const obj3 = AnalyticsUtilsDefault;
    obj3.track(AnalyticEvents.DISPLAY_NAME_STYLES_SURPRISE_ME);
  }, items3);
  const items5 = [guildId, navigation];
  const callback3 = obj10.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const tmp4 = isTryItOut;
    if (tmp4) {
      const tmpResult = UserProfileActionCreators;
      const result1 = tmpResult.setTryItOutDisplayNameStyles(null);
    } else {
      const tmpResult2 = UserProfileSettingsActionCreators;
      tmpResult2.setPendingChanges({ displayNameStyles: null });
    }
    const obj4 = AnalyticsUtilsDefault;
    obj4.track(AnalyticEvents.DISPLAY_NAME_STYLES_REMOVED);
    navigation.goBack();
  }, items4);
  const items6 = [selectedFontId, displayNameStylesPendingName, isTryItOut, showFontsBadge, dismissFontsBadge, showCampaignFontBadge, dismissCampaignFontBadge];
  const callback4 = obj10.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj2 = UserProfileSettingsActionCreators;
    const obj3 = { guildId, displayNameStyles: null };
    obj2.setPendingChanges(obj3);
    navigation.goBack();
  }, items5);
  const items7 = [first1, , , ];
  let id1;
  const callback5 = obj10.useCallback(() => {
    const tmp = showFontsBadge;
    if (tmp) {
      dismissFontsBadge();
    }
    const tmp4 = showCampaignFontBadge;
    if (tmp4) {
      dismissCampaignFontBadge();
    }
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { selectedFontId, onSelectFont, displayName: displayNameStylesPendingName, isTryItOut };
    obj.openLazy(asyncRequire(17959, dependencyMap.paths), "DisplayNameStylesFontPickerSheet", obj2);
  }, items6);
  const useCallback = displayNameStylesPendingName.useCallback;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  items7[1] = id1;
  items7[2] = showEffectsBadge;
  items7[3] = dismissEffectsBadge;
  const items8 = [tmp24, memo, first3, first1, callback, tmp18Result3[1]];
  const callback6 = useCallback(() => {
    const tmp = showEffectsBadge;
    if (tmp) {
      dismissEffectsBadge();
    }
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let id;
    ActionSheetActionCreatorsDefault;
    const tmp5 = asyncRequire(17963, dependencyMap.paths);
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const obj = { userId: id, selectedEffectId: first1, onSelectEffect };
    openLazy(tmp5, "DisplayNameStylesEffectPickerSheet", obj);
  }, items7);
  const callback7 = obj10.useCallback(() => {
    if (first1 === DisplayNameEffect.DisplayNameEffect.GUMMY) {
      const obj2 = {
        selectedColors: memo,
        onSelectColors(arg0) {
            return callback(navigation(isTryItOut[9]).DisplayNameEffect.GUMMY, arg0);
          }
      };
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(17964, dependencyMap.paths), "DisplayNameStylesGummyColorPickerSheet", obj2);
    } else {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmp2Result = asyncRequire;
      if (closure_10) {
        const obj4 = {
          selectedColors: memo,
          selectedEffectId: first1,
          onSelectColors(arg0) {
                return callback(first1, arg0);
              }
        };
        openLazy(tmp2Result(17974, dependencyMap.paths), "DisplayNameStylesGradientPickerSheet", obj4);
      } else {
        const obj = { selectedColor: first3, selectedEffectId: first1, onSelectColor };
        openLazy(tmp2Result(17976, dependencyMap.paths), "DisplayNameStylesColorPickerSheet", obj);
      }
    }
  }, items8);
  let intl = tmp2(tmp3[27]).intl;
  const stringResult = intl.string(guildId(tmp3[42])(selectedFontId));
  let tmp52Result5 = null;
  if (null != stateFromStores) {
    let tmp52Result3;
    let tmp54Result2;
    const obj7 = { theme: tmp16, children: colors(Provider, obj8) };
    const ThemeContextProvider = tmp2(tmp3[43]).ThemeContextProvider;
    obj8 = { value: first4, children: first3(closure_5, obj9) };
    const obj11 = { paddingBottom: num };
    obj9 = { style: tmp.container, children: items23 };
    Provider = tmp2(tmp3[44]).DisplayNameStylesContext.Provider;
    let merged = Object.assign(tmp.contentContainer);
    num = 0;
    const tmp56 = selectedFontId;
    if (memo1) {
      num = 70;
    }
    const obj12 = { contentContainerStyle: obj11, children: items9 };
    const obj13 = { user: stateFromStores, displayName: displayNameStylesPendingName, guildId, selectedFontId, selectedEffectId: first1, selectedColors: memo, isTryItOut };
    items9 = [colors(tmp6(tmp3[45]), obj13), , ];
    const obj14 = { style: tmp.fieldButtonGroup, children: items13 };
    const obj15 = { onPress: callback5, style: tmp.fieldButton, accessibilityRole: "button", accessibilityLabel: combined, children: items11 };
    const intl2 = tmp2(tmp3[27]).intl;
    const stringResult1 = intl2.string(guildId(tmp3[46])["0JCuGm"]);
    if (showFontsBadge || showCampaignFontBadge) {
      const intl3 = tmp2(tmp3[27]).intl;
      const _HermesInternal2 = HermesInternal;
      combined = "" + stringResult1 + ", " + stringResult + ", " + intl3.string(tmp2(tmp3[27]).t.y2b7CA);
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stringResult1 + ", " + stringResult;
    }
    const obj16 = { children: items10 };
    const obj17 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: intl4.string(guildId(tmp3[46])["0JCuGm"]) };
    const Text = tmp2(tmp3[47]).Text;
    intl4 = tmp2(tmp3[27]).intl;
    items10 = [colors(Text, obj17), ];
    const obj18 = { variant: "body-md/normal", color: "text-subtle", children: stringResult };
    items10[1] = colors(tmp2(tmp3[47]).Text, obj18);
    items11 = [first3(closure_5, obj16), ];
    if (showFontsBadge || showCampaignFontBadge) {
      const obj19 = { style: tmp.fieldButtonTrailing, children: items12 };
      items12 = [colors(tmp2(tmp3[48]).NewTag, {}), colors(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" })];
      tmp52Result3 = tmp54(tmp55, obj19);
    } else {
      tmp52Result3 = tmp52(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" });
    }
    items11[1] = tmp52Result3;
    items13 = [first3(onSelectFont, obj15), , ];
    const obj20 = { onPress: callback6, style: items14, accessibilityRole: "button", accessibilityLabel: combined1, children: items16 };
    items14 = [, ];
    ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = tmp);
    const intl5 = tmp2(tmp3[27]).intl;
    const stringResult2 = intl5.string(guildId(tmp3[46]).RVtMxT);
    const name = displayNameStylesEffectConfig.name;
    if (showEffectsBadge) {
      const intl6 = tmp2(tmp3[27]).intl;
      const _HermesInternal4 = HermesInternal;
      combined1 = "" + stringResult2 + ", " + name + ", " + intl6.string(tmp2(tmp3[27]).t.y2b7CA);
    } else {
      const _HermesInternal3 = HermesInternal;
      combined1 = "" + stringResult2 + ", " + name;
    }
    const obj21 = { children: items15 };
    const obj22 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: intl7.string(guildId(tmp3[46]).RVtMxT) };
    const Text2 = tmp2(tmp3[47]).Text;
    intl7 = tmp2(tmp3[27]).intl;
    items15 = [colors(Text2, obj22), ];
    const obj23 = { variant: "body-md/normal", color: "text-subtle", children: displayNameStylesEffectConfig.name };
    items15[1] = colors(tmp2(tmp3[47]).Text, obj23);
    items16 = [first3(closure_5, obj21), ];
    if (showEffectsBadge) {
      const obj24 = { style: tmp.fieldButtonTrailing, children: items17 };
      items17 = [colors(tmp2(tmp3[48]).NewTag, {}), colors(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" })];
      tmp54Result2 = tmp54(tmp55, obj24);
    } else {
      tmp54Result2 = tmp52(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" });
    }
    items16[1] = tmp54Result2;
    items13[1] = first3(onSelectFont, obj20);
    const obj25 = { onPress: callback7, style: items18, accessibilityRole: "button", accessibilityLabel: intl8.string(guildId(tmp3[46])["6OxgN7"]), children: items20 };
    items18 = [, ];
    ({ fieldButton: arr21[0], fieldButtonBorder: arr21[1] } = tmp);
    intl8 = tmp2(tmp3[27]).intl;
    const obj26 = { style: tmp.fieldButtonLabel, children: items19 };
    const obj27 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: intl9.string(guildId(tmp3[46])["6OxgN7"]) };
    const Text3 = tmp2(tmp3[47]).Text;
    intl9 = tmp2(tmp3[27]).intl;
    items19 = [colors(Text3, obj27), ];
    const obj28 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 1, children: mapped.join(", ") };
    const Text4 = tmp2(tmp3[47]).Text;
    mapped = memo.map((item) => {
      const obj = navigation(isTryItOut[50]);
      return obj.int2hex(item);
    });
    items19[1] = colors(Text4, obj28);
    items20 = [first3(closure_5, obj26), ];
    const obj29 = { style: tmp.fieldButtonChevron, children: items21 };
    const obj30 = { colors: memo, effectId: first1 };
    items21 = [colors(tmp6(tmp3[51]), obj30), colors(tmp2(tmp3[49]).ChevronSmallRightIcon, { color: "icon-muted" })];
    items20[1] = first3(closure_5, obj29);
    items13[2] = first3(onSelectFont, obj25);
    items9[1] = first3(closure_5, obj14);
    const obj31 = { style: tmp.buttonContainer, children: items22 };
    const obj32 = { text: intl10.string(guildId(tmp3[46]).NOGFds), onPress: callback2, variant: "tertiary", size: "lg", grow: true, icon: colors(tmp2(tmp3[53]).DiceIcon, {}), iconPosition: "start" };
    const Button = tmp2(tmp3[52]).Button;
    intl10 = tmp2(tmp3[27]).intl;
    items22 = [colors(Button, obj32), , ];
    let tmp52Result = null == guildId && null != tmp12Result;
    if (tmp52Result) {
      const obj33 = { text: intl11.string(guildId(tmp3[46]).ymq8WQ), onPress: callback3, variant: "tertiary", size: "lg", grow: true, icon: colors(tmp2(tmp3[54]).DenyIcon, {}), iconPosition: "start" };
      const Button2 = tmp2(tmp3[52]).Button;
      intl11 = tmp2(tmp3[27]).intl;
      tmp52Result = tmp52(Button2, obj33);
    }
    items22[1] = tmp52Result;
    let tmp52Result4 = null != guildId;
    if (tmp52Result4) {
      tmp52Result4 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
    }
    if (tmp52Result4) {
      const obj34 = { text: intl12.string(guildId(tmp3[46])["j/KRxc"]), onPress: callback4, variant: "tertiary", size: "lg", grow: true, icon: colors(tmp2(tmp3[54]).DenyIcon, {}), iconPosition: "start" };
      const Button3 = tmp2(tmp3[52]).Button;
      intl12 = tmp2(tmp3[27]).intl;
      tmp52Result4 = tmp52(Button3, obj34);
    }
    items22[2] = tmp52Result4;
    items9[2] = first3(closure_5, obj31);
    items23 = [first3(tmp56, obj12), ];
    const obj35 = { onPress: handleApply, visible: memo1, loading: isApplying };
    items23[1] = colors(visibleFontOrder, obj35);
    tmp52Result5 = tmp52(ThemeContextProvider, obj7);
  }
  return tmp52Result5;
};
