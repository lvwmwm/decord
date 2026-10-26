// Module ID: 16692
// Function ID: 16693
// Name: DisplayNameStylesEditScreen
// Dependencies: [32, 19, 17, 4972, 1392, 1087, 1629, 21, 1411, 4971, 587, 1506, 9361, 1275, 16693, 504, 15878, 8655, 6367, 5205, 1412, 1409, 15864, 10664, 10665, 568, 5663, 1128, 16694, 16695, 16696, 15865, 1267, 5212, 8656, 8653, 5210, 16697, 2002, 16700, 16701, 16706, 16710, 15868, 5037, 6369, 16384, 2928, 5234, 1202, 7305, 1105, 15869, 5244, 9426, 9770, 558, 576, 1633, 5052, 5247, 2]
// Exports: default

// Module 16692 (DisplayNameStylesEditScreen)
import shallowEqual from "shallowEqual" /* 568 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1409 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1411 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1629 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import HapticUtils from "HapticUtils" /* 5212 */;
import spring from "spring" /* 5247 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8653 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8656 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_12;
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
({ View: hasOwnProperty, ScrollView: metroRequire, Pressable: metroImportDefault } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const MEDIA_PICKER_SEND_BUTTON_SPRING = MediaKeyboardConstants.MEDIA_PICKER_SEND_BUTTON_SPRING;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let items = [DisplayNameEffect.DisplayNameEffect.GRADIENT, DisplayNameEffect.DisplayNameEffect.GUMMY, DisplayNameEffect.DisplayNameEffect.PRISM];
let value = { overrideSettings: true };
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
let closure_16 = createStyles(obj);
const __initData = { code: "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?\"box-none\":\"none\"};}" };
const __initData2 = { code: "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:\"absolute\",bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:\"column\",justifyContent:\"flex-end\",transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
const __initData3 = { code: "function DisplayNameStylesEditScreenTsx3(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
const __initData4 = { code: "function DisplayNameStylesEditScreenTsx4(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function ApplyButton(onPress) {
  let stateFromStores;
  let tmp14;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  let obj = onPress(stateFromStores[57]);
  const cResult = obj.c(17);
  onPress = onPress.onPress;
  const visible = onPress.visible;
  const loading = onPress.loading;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [AccessibilityStore];
    const fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = onPress(stateFromStores[15]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const bottom = visible(tmp2[58])().bottom;
  const fn2 = function y() {
    let pointerEvents = "none";
    if (visible) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn2.__closure = { visible };
  fn2.__workletHash = 16971768742893;
  fn2.__initData = __initData;
  const tmpResult3 = onPress(stateFromStores[59]);
  const animatedProps = tmpResult3.useAnimatedProps(fn2);
  const fn3 = function _() {
    let withSpringResult2;
    let num = 0;
    if (visible) {
      num = 1;
    }
    let num2 = 60;
    if (visible) {
      num2 = 0;
    }
    let num3 = 0.9;
    if (visible) {
      num3 = 1;
    }
    const rect = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: items, opacity: withSpringResult2 };
    let withSpringResult = num2;
    if (!stateFromStores) {
      const obj2 = spring;
      withSpringResult = obj2.withSpring(num2, MEDIA_PICKER_SEND_BUTTON_SPRING);
    }
    items = [{ translateY: withSpringResult }, ];
    let withSpringResult1 = num3;
    if (!stateFromStores) {
      const obj3 = spring;
      withSpringResult1 = obj3.withSpring(num3, MEDIA_PICKER_SEND_BUTTON_SPRING);
    }
    items[1] = { scale: withSpringResult1 };
    withSpringResult2 = num;
    if (!stateFromStores) {
      const obj4 = spring;
      withSpringResult2 = obj4.withSpring(num, MEDIA_PICKER_SEND_BUTTON_SPRING);
    }
    return rect;
  };
  const tmpResult4 = onPress(stateFromStores[59]);
  let obj2 = { visible, tokens: visible(tmp2[10]), reducedMotion: stateFromStores, withSpring: tmp(tmp2[60]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
  fn3.__closure = obj2;
  fn3.__workletHash = 16394479325031;
  fn3.__initData = __initData2;
  const animatedStyle = tmpResult4.useAnimatedStyle(fn3);
  const tmp8 = visible;
  if (cResult[2] !== onPress) {
    class E {
      constructor() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onPress();
      }
    }
    let num3 = 2;
    cResult[2] = onPress;
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onPress();
      }
    }
  }
  if (cResult[4] !== bottom) {
    class E {
      constructor() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onPress();
      }
    }
    tmp13[0] = bottom;
    cResult[4] = bottom;
    cResult[5] = tmp13;
  } else {
    class E {
      constructor() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onPress();
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onPress();
      }
    }
    const stringResult = obj6.string(onPress(stateFromStores[27]).t["1Qm822"]);
    cResult[6] = stringResult;
    tmp14 = stringResult;
  } else {
    class E {
      constructor() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onPress();
      }
    }
  }
  if (cResult[7] === tmp11) {
    class E {
      constructor() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onPress();
      }
    }
    if (cResult[10] === animatedProps) {
      class E {
        constructor() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          onPress();
        }
      }
    }
    let obj3 = { style: tmp12, animatedProps, children: tmp16 };
    cResult[10] = animatedProps;
    cResult[11] = tmp12;
    cResult[12] = tmp16;
    cResult[13] = closure_12(tmp8(stateFromStores[59]).View, obj3);
    const tmp20 = closure_12(tmp8(stateFromStores[59]).View, obj3);
  }
  cResult[7] = tmp11;
  cResult[8] = loading;
  cResult[9] = closure_12(onPress(stateFromStores[53]).Button, { variant: "primary", onPress: tmp11, size: "lg", text: tmp14, loading });
  const tmp17 = closure_12(onPress(stateFromStores[53]).Button, { variant: "primary", onPress: tmp11, size: "lg", text: tmp14, loading });
}) : (function ApplyButton(onPress) {
  let Button;
  let View2;
  let intl;
  let obj6;
  let obj7;
  let useReducedMotion;
  onPress = onPress.onPress;
  const visible = onPress.visible;
  let stateFromStores;
  const loading = onPress.loading;
  let obj = onPress(stateFromStores[15]);
  items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const bottom = visible(stateFromStores[58])().bottom;
  let obj2 = onPress(stateFromStores[59]);
  const fn = function s() {
    let pointerEvents = "none";
    if (visible) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn.__closure = { visible };
  fn.__workletHash = 12831101080623;
  fn.__initData = __initData3;
  const animatedProps = obj2.useAnimatedProps(fn);
  let obj3 = onPress(stateFromStores[59]);
  const fn2 = function c() {
    let withSpringResult2;
    let num = 0;
    if (visible) {
      num = 1;
    }
    let num2 = 60;
    if (visible) {
      num2 = 0;
    }
    let num3 = 0.9;
    if (visible) {
      num3 = 1;
    }
    const rect = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: items, opacity: withSpringResult2 };
    let withSpringResult = num2;
    if (!stateFromStores) {
      const obj2 = spring;
      withSpringResult = obj2.withSpring(num2, MEDIA_PICKER_SEND_BUTTON_SPRING);
    }
    items = [{ translateY: withSpringResult }, ];
    let withSpringResult1 = num3;
    if (!stateFromStores) {
      const obj3 = spring;
      withSpringResult1 = obj3.withSpring(num3, MEDIA_PICKER_SEND_BUTTON_SPRING);
    }
    items[1] = { scale: withSpringResult1 };
    withSpringResult2 = num;
    if (!stateFromStores) {
      const obj4 = spring;
      withSpringResult2 = obj4.withSpring(num, MEDIA_PICKER_SEND_BUTTON_SPRING);
    }
    return rect;
  };
  let obj4 = { visible, tokens: visible(stateFromStores[10]), reducedMotion: stateFromStores, withSpring: onPress(stateFromStores[60]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
  fn2.__closure = obj4;
  fn2.__workletHash = 4139107659649;
  fn2.__initData = __initData4;
  const items1 = [onPress];
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  const obj5 = { style: animatedStyle, children: closure_12(View2, obj6) };
  const View = visible(stateFromStores[59]).View;
  obj6 = { style: { marginBottom: bottom }, animatedProps, children: closure_12(Button, obj7) };
  View2 = visible(stateFromStores[59]).View;
  obj7 = { variant: "primary", onPress: callback, size: "lg", text: intl.string(onPress(stateFromStores[27]).t["1Qm822"]), loading };
  Button = onPress(stateFromStores[53]).Button;
  intl = onPress(stateFromStores[27]).intl;
  return closure_12(View, obj5);
});
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let Provider;
  let combined;
  let combined1;
  let first4;
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
  let onSelectColor;
  let onSelectEffect;
  let pendingDisplayNameStyles;
  let tmp14;
  let tryItOutDisplayNameStyles;
  let tmp = first4();
  const tmp2 = navigation;
  const tmp3 = isTryItOut;
  let obj = navigation(isTryItOut[11]);
  const route = obj.useRoute();
  let obj2 = navigation(isTryItOut[11]);
  navigation = obj2.useNavigation();
  let params = route.params;
  if (params == null) {
    params = {};
  }
  const guildId = params.guildId;
  isTryItOut = params.isTryItOut;
  let obj3 = { type: tmp2(tmp3[13]).ImpressionTypes.POPOUT, name: tmp2(tmp3[13]).ImpressionNames.DISPLAY_NAME_STYLES_MODAL, properties: obj4 };
  const tmp7 = guildId(tmp3[12]);
  obj4 = { entry_point: tmp2(tmp3[14]).DisplayNameStylesEntryPoints.PROFILE_EDITOR };
  tmp7(obj3, { trackOnInitialLoad: true });
  let tmp2Result = tmp2(tmp3[15]);
  items = [onSelectEffect];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => onSelectEffect.getCurrentUser());
  const tmp2Result13 = tmp2(tmp3[16]);
  const displayNameStylesPendingName = tmp2Result13.useDisplayNameStylesPendingName(stateFromStores, guildId);
  const tmp2Result14 = tmp2(tmp3[17]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2Result14.useGuildMemberOrUserPendingDisplayNameStyles(stateFromStores, guildId);
  ({ pendingDisplayNameStyles, guildDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  let id;
  const tmp12 = guildId(tmp3[18]);
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
  const tmp16 = guildId(tmp3[19])();
  if (tmp12Result != null) {
    fontId = tmp12Result.fontId;
  }
  if (fontId == null) {
    fontId = tmp2(tmp3[20]).DisplayNameFont.DEFAULT;
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
    effectId = tmp2(tmp3[8]).DisplayNameEffect.SOLID;
  }
  const tmp18Result = stateFromStores(useState2(effectId), 2);
  const first1 = tmp18Result[0];
  onSelectEffect = tmp18Result[1];
  const tmp2Result15 = tmp2(tmp3[21]);
  const tmp24 = tmp2Result15.getEffectColorCount(first1) > 1;
  let closure_10 = tmp24;
  const tmp2Result16 = tmp2(tmp3[22]);
  const isDisplayNameStylesFlywheelSettersEnabled = tmp2Result16.useIsDisplayNameStylesFlywheelSettersEnabled("DisplayNameStylesEditScreen");
  const tmp2Result17 = tmp2(tmp3[23]);
  const displayNameStylesEffectConfig = tmp2Result17.useDisplayNameStylesEffectConfig(first1);
  let closure_12 = tmp6(tmp3[24])();
  let colors;
  if (tmp12Result != null) {
    colors = tmp12Result.colors;
  }
  if (colors == null) {
    colors = [];
  }
  if (colors.length > 0) {
    let first2;
    if (!tmp24) {
      first2 = colors[0];
    }
    const tmp18Result3 = stateFromStores(tmp27(first2), 2);
    const first3 = tmp18Result3[0];
    value = tmp18Result3[1];
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
    first4 = tmp18Result4[0];
    let closure_17 = tmp18Result4[1];
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
    const obj6 = {
      hasChanges: memo1,
      entryPoint: tmp2(tmp3[14]).DisplayNameStylesEntryPoints.PROFILE_EDITOR,
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
    const useDisplayNameStylesHandleApply = tmp2(tmp3[14]).useDisplayNameStylesHandleApply;
    tmp2(tmp3[14]);
    const displayNameStylesHandleApply = useDisplayNameStylesHandleApply(obj6);
    ({ handleApply, isApplying } = displayNameStylesHandleApply);
    const tmp2Result19 = tmp2(tmp3[28]);
    const visibleFontOrder = tmp2Result19.useVisibleFontOrder({ includeCampaignFonts: true });
    const tmp2Result20 = tmp2(tmp3[29]);
    const visibleEffectOrder = tmp2Result20.useVisibleEffectOrder();
    const tmp2Result21 = tmp2(tmp3[30]);
    const displayNameStylesNewFontsBadge = tmp2Result21.useDisplayNameStylesNewFontsBadge(visibleFontOrder);
    const showFontsBadge = displayNameStylesNewFontsBadge.showFontsBadge;
    const dismissFontsBadge = displayNameStylesNewFontsBadge.dismissFontsBadge;
    const tmp2Result22 = tmp2(tmp3[31]);
    const hexagonCampaignNewFontBadge = tmp2Result22.useHexagonCampaignNewFontBadge("DisplayNameStylesEditScreen");
    const showCampaignFontBadge = hexagonCampaignNewFontBadge.showCampaignFontBadge;
    const dismissCampaignFontBadge = hexagonCampaignNewFontBadge.dismissCampaignFontBadge;
    const tmp2Result23 = tmp2(tmp3[31]);
    const markHexagonCampaignDisplayNameStylesVisited = tmp2Result23.useMarkHexagonCampaignDisplayNameStylesVisited("DisplayNameStylesEditScreen");
    const tmp2Result24 = tmp2(tmp3[30]);
    const displayNameStylesNewEffectsBadge = tmp2Result24.useDisplayNameStylesNewEffectsBadge(visibleEffectOrder);
    const showEffectsBadge = displayNameStylesNewEffectsBadge.showEffectsBadge;
    const dismissEffectsBadge = displayNameStylesNewEffectsBadge.dismissEffectsBadge;
    const items3 = [callback, visibleFontOrder, visibleEffectOrder];
    const items4 = [navigation, isTryItOut];
    const callback2 = obj10.useCallback(() => {
      let effectId;
      const obj = DisplayNameStylesUtils;
      const randomDisplayNameStyles = obj.generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder);
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
      obj.openLazy(asyncRequire(16697, dependencyMap.paths), "DisplayNameStylesFontPickerSheet", obj2);
    }, items6);
    const useCallback = displayNameStylesPendingName.useCallback;
    if (stateFromStores != null) {
      id1 = stateFromStores.id;
    }
    items7[1] = id1;
    items7[2] = showEffectsBadge;
    items7[3] = dismissEffectsBadge;
    const items8 = [tmp24, memo, first3, first1, callback];
    const callback6 = useCallback(() => {
      const tmp = showEffectsBadge;
      if (tmp) {
        dismissEffectsBadge();
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let id;
      ActionSheetActionCreatorsDefault;
      const tmp5 = asyncRequire(16700, dependencyMap.paths);
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
              return callback(navigation(isTryItOut[8]).DisplayNameEffect.GUMMY, arg0);
            }
        };
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.openLazy(asyncRequire(16701, dependencyMap.paths), "DisplayNameStylesGummyColorPickerSheet", obj2);
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
          openLazy(tmp2Result(16706, dependencyMap.paths), "DisplayNameStylesGradientPickerSheet", obj4);
        } else {
          const obj = { selectedColor: first3, selectedEffectId: first1, onSelectColor };
          openLazy(tmp2Result(16710, dependencyMap.paths), "DisplayNameStylesColorPickerSheet", obj);
        }
      }
    }, items8);
    let intl = tmp2(tmp3[27]).intl;
    const stringResult = intl.string(guildId(tmp3[43])(selectedFontId));
    let tmp54Result5 = null;
    if (null != stateFromStores) {
      let tmp54Result3;
      let tmp56Result2;
      const obj7 = { theme: tmp16, children: closure_12(Provider, obj8) };
      const ThemeContextProvider = tmp2(tmp3[44]).ThemeContextProvider;
      obj8 = { value, children: colors(closure_5, obj9) };
      const obj11 = { paddingBottom: num };
      obj9 = { style: tmp.container, children: items23 };
      Provider = tmp2(tmp3[45]).DisplayNameStylesContext.Provider;
      let merged = Object.assign(tmp.contentContainer);
      num = 0;
      const tmp58 = selectedFontId;
      if (memo1) {
        num = 70;
      }
      const obj12 = { contentContainerStyle: obj11, children: items9 };
      const obj13 = { user: stateFromStores, displayName: displayNameStylesPendingName, guildId, selectedFontId, selectedEffectId: first1, selectedColors: memo, isTryItOut };
      items9 = [closure_12(tmp6(tmp3[46]), obj13), , ];
      const obj14 = { style: tmp.fieldButtonGroup, children: items13 };
      const obj15 = { onPress: callback5, style: tmp.fieldButton, accessibilityRole: "button", accessibilityLabel: combined, children: items11 };
      const intl2 = tmp2(tmp3[27]).intl;
      const stringResult1 = intl2.string(guildId(tmp3[47])["0JCuGm"]);
      if (showFontsBadge || showCampaignFontBadge) {
        const intl3 = tmp2(tmp3[27]).intl;
        const _HermesInternal2 = HermesInternal;
        combined = "" + stringResult1 + ", " + stringResult + ", " + intl3.string(tmp2(tmp3[27]).t.y2b7CA);
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult1 + ", " + stringResult;
      }
      const obj16 = { children: items10 };
      const obj17 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl4.string(guildId(tmp3[47])["0JCuGm"]) };
      const Text = tmp2(tmp3[48]).Text;
      intl4 = tmp2(tmp3[27]).intl;
      items10 = [closure_12(Text, obj17), ];
      const obj18 = { variant: "text-md/normal", color: "text-subtle", children: stringResult };
      items10[1] = closure_12(tmp2(tmp3[48]).Text, obj18);
      items11 = [colors(closure_5, obj16), ];
      if (showFontsBadge || showCampaignFontBadge) {
        const obj19 = { style: tmp.fieldButtonTrailing, children: items12 };
        items12 = [closure_12(tmp2(tmp3[49]).NewTag, {}), closure_12(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" })];
        tmp54Result3 = tmp56(tmp57, obj19);
      } else {
        tmp54Result3 = tmp54(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items11[1] = tmp54Result3;
      items13 = [colors(onSelectFont, obj15), , ];
      const obj20 = { onPress: callback6, style: items14, accessibilityRole: "button", accessibilityLabel: combined1, children: items16 };
      items14 = [, ];
      ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = tmp);
      const intl5 = tmp2(tmp3[27]).intl;
      const stringResult2 = intl5.string(guildId(tmp3[47]).RVtMxT);
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
      const obj22 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl7.string(guildId(tmp3[47]).RVtMxT) };
      const Text2 = tmp2(tmp3[48]).Text;
      intl7 = tmp2(tmp3[27]).intl;
      items15 = [closure_12(Text2, obj22), ];
      const obj23 = { variant: "text-md/normal", color: "text-subtle", children: displayNameStylesEffectConfig.name };
      items15[1] = closure_12(tmp2(tmp3[48]).Text, obj23);
      items16 = [colors(closure_5, obj21), ];
      if (showEffectsBadge) {
        const obj24 = { style: tmp.fieldButtonTrailing, children: items17 };
        items17 = [closure_12(tmp2(tmp3[49]).NewTag, {}), closure_12(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" })];
        tmp56Result2 = tmp56(tmp57, obj24);
      } else {
        tmp56Result2 = tmp54(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" });
      }
      items16[1] = tmp56Result2;
      items13[1] = colors(onSelectFont, obj20);
      const obj25 = { onPress: callback7, style: items18, accessibilityRole: "button", accessibilityLabel: intl8.string(guildId(tmp3[47])["6OxgN7"]), children: items20 };
      items18 = [, ];
      ({ fieldButton: arr21[0], fieldButtonBorder: arr21[1] } = tmp);
      intl8 = tmp2(tmp3[27]).intl;
      const obj26 = { style: tmp.fieldButtonLabel, children: items19 };
      const obj27 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl9.string(guildId(tmp3[47])["6OxgN7"]) };
      const Text3 = tmp2(tmp3[48]).Text;
      intl9 = tmp2(tmp3[27]).intl;
      items19 = [closure_12(Text3, obj27), ];
      let str13 = "text-md/normal";
      const Text4 = tmp2(tmp3[48]).Text;
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        str13 = "text-sm/normal";
      }
      const obj28 = { variant: str13, color: "text-subtle", lineClamp: 1, children: mapped.join(", ") };
      mapped = memo.map((item) => {
        const obj = navigation(isTryItOut[51]);
        return obj.int2hex(item);
      });
      items19[1] = closure_12(Text4, obj28);
      items20 = [colors(closure_5, obj26), ];
      const obj29 = { style: tmp.fieldButtonChevron, children: items21 };
      const obj30 = { colors: memo, effectId: first1 };
      items21 = [closure_12(tmp6(tmp3[52]), obj30), closure_12(tmp2(tmp3[50]).ChevronSmallRightIcon, { color: "icon-muted" })];
      items20[1] = colors(closure_5, obj29);
      items13[2] = colors(onSelectFont, obj25);
      items9[1] = colors(closure_5, obj14);
      const obj31 = { style: tmp.buttonContainer, children: items22 };
      const obj32 = { text: intl10.string(guildId(tmp3[47]).NOGFds), onPress: callback2, variant: "tertiary", size: "lg", grow: true, icon: closure_12(tmp2(tmp3[54]).DiceIcon, {}), iconPosition: "start" };
      const Button = tmp2(tmp3[53]).Button;
      intl10 = tmp2(tmp3[27]).intl;
      items22 = [closure_12(Button, obj32), , ];
      let tmp54Result = null == guildId && null != tmp12Result;
      if (tmp54Result) {
        const obj33 = { text: intl11.string(guildId(tmp3[47]).ymq8WQ), onPress: callback3, variant: "tertiary", size: "lg", grow: true, icon: closure_12(tmp2(tmp3[55]).DenyIcon, {}), iconPosition: "start" };
        const Button2 = tmp2(tmp3[53]).Button;
        intl11 = tmp2(tmp3[27]).intl;
        tmp54Result = tmp54(Button2, obj33);
      }
      items22[1] = tmp54Result;
      let tmp54Result4 = null != guildId;
      if (tmp54Result4) {
        tmp54Result4 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
      }
      if (tmp54Result4) {
        const obj34 = { text: intl12.string(guildId(tmp3[47])["j/KRxc"]), onPress: callback4, variant: "tertiary", size: "lg", grow: true, icon: closure_12(tmp2(tmp3[55]).DenyIcon, {}), iconPosition: "start" };
        const Button3 = tmp2(tmp3[53]).Button;
        intl12 = tmp2(tmp3[27]).intl;
        tmp54Result4 = tmp54(Button3, obj34);
      }
      items22[2] = tmp54Result4;
      items9[2] = colors(closure_5, obj31);
      items23 = [colors(tmp58, obj12), ];
      const obj35 = { onPress: handleApply, visible: memo1, loading: isApplying };
      items23[1] = closure_12(visibleEffectOrder, obj35);
      tmp54Result5 = tmp54(ThemeContextProvider, obj7);
    }
    return tmp54Result5;
  }
  first2 = displayNameStylesEffectConfig.defaultColors[0];
};
