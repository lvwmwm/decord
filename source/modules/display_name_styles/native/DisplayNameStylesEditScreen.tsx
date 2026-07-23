// Module ID: 14222
// Function ID: 109247
// Name: ApplyButton
// Dependencies: [57, 31, 27, 4122, 1849, 653, 1552, 33, 1862, 4130, 689, 1457, 566, 14223, 7846, 4361, 4066, 1863, 1860, 8515, 8518, 8519, 620, 14224, 14225, 14226, 14227, 675, 4099, 7847, 7844, 4098, 14230, 1934, 14231, 14232, 14236, 14239, 1212, 13586, 3842, 4363, 14240, 2556, 4126, 1273, 5514, 665, 13587, 4543, 8705, 10424, 1557, 3991, 4542, 2]
// Exports: default

// Module 14222 (ApplyButton)
import _slicedToArray from "_slicedToArray";
import showActionSheet from "showActionSheet";
import get_ActivityIndicator from "expandLocation";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { MEDIA_PICKER_SEND_BUTTON_SPRING as closure_11 } from "DRAG_HANDLE";
import jsxProd from "maybeLoadBundle";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function ApplyButton(onPress) {
  onPress = onPress.onPress;
  const visible = onPress.visible;
  let obj = onPress(stateFromStores[12]);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_8.useReducedMotion);
  let obj1 = onPress(stateFromStores[53]);
  const fn = function o() {
    const obj = {};
    let str = "none";
    if (visible) {
      str = "box-none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  fn.__closure = { visible };
  fn.__workletHash = 2349569076845;
  fn.__initData = closure_16;
  const animatedProps = obj1.useAnimatedProps(fn);
  let obj2 = onPress(stateFromStores[53]);
  const fn2 = function s() {
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
    let obj = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: visible(stateFromStores[10]).space.PX_16, flexDirection: "column", justifyContent: "flex-end" };
    obj = {};
    let withSpringResult = num2;
    if (!stateFromStores) {
      withSpringResult = onPress(stateFromStores[54]).withSpring(num2, outer1_11);
      const obj3 = onPress(stateFromStores[54]);
    }
    obj.translateY = withSpringResult;
    const items = [obj, ];
    obj = {};
    let withSpringResult1 = num3;
    if (!stateFromStores) {
      withSpringResult1 = onPress(stateFromStores[54]).withSpring(num3, outer1_11);
      const obj5 = onPress(stateFromStores[54]);
    }
    obj.scale = withSpringResult1;
    items[1] = obj;
    obj.transform = items;
    let withSpringResult2 = num;
    if (!stateFromStores) {
      withSpringResult2 = onPress(stateFromStores[54]).withSpring(num, outer1_11);
      const obj6 = onPress(stateFromStores[54]);
    }
    obj.opacity = withSpringResult2;
    return obj;
  };
  obj = { visible, tokens: visible(stateFromStores[10]), reducedMotion: stateFromStores, withSpring: onPress(stateFromStores[54]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: closure_11 };
  fn2.__closure = obj;
  fn2.__workletHash = 16786362025671;
  fn2.__initData = closure_17;
  const items1 = [onPress];
  const animatedStyle = obj2.useAnimatedStyle(fn2);
  const callback = React.useCallback(() => {
    const result = onPress(stateFromStores[28]).triggerHapticFeedback(onPress(stateFromStores[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  obj = { style: animatedStyle };
  obj1 = { style: { marginBottom: visible(stateFromStores[52])().bottom }, animatedProps };
  obj2 = { variant: "primary", onPress: callback, size: "lg" };
  const intl = onPress(stateFromStores[38]).intl;
  obj2.text = intl.string(onPress(stateFromStores[38]).t["1Qm822"]);
  obj1.children = callback(onPress(stateFromStores[49]).Button, obj2);
  obj.children = callback(visible(stateFromStores[53]).View, obj1);
  return callback(visible(stateFromStores[53]).View, obj);
}
({ View: closure_5, ScrollView: closure_6, Pressable: closure_7 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let items = [require("DisplayNameEffect").DisplayNameEffect.GRADIENT, require("DisplayNameEffect").DisplayNameEffect.GUMMY, require("DisplayNameEffect").DisplayNameEffect.PRISM];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.fieldButtonGroup = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
let obj3 = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.fieldButton = obj3;
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.fieldButtonBorder = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let obj4 = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.fieldButtonLabel = { flex: 1, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj6 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, flexShrink: 0 };
_createForOfIteratorHelperLoose.fieldButtonChevron = obj6;
let obj7 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.fieldButtonTrailing = obj7;
let obj5 = { flex: 1, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.buttonContainer = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_16 = { code: "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
let closure_17 = { code: "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
let obj8 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let guildDisplayNameStyles;
  let tryItOutDisplayNameStyles;
  let stringResult2 = _createForOfIteratorHelperLoose();
  let obj = navigation(isTryItOut[11]);
  const route = obj.useRoute();
  let obj1 = navigation(isTryItOut[11]);
  navigation = obj1.useNavigation();
  let params = route.params;
  if (null == params) {
    params = {};
  }
  const guildId = params.guildId;
  isTryItOut = params.isTryItOut;
  let obj3 = navigation(isTryItOut[12]);
  let items = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = navigation(isTryItOut[13]);
  const displayNameStylesPendingName = obj4.useDisplayNameStylesPendingName(stateFromStores, guildId);
  let obj5 = navigation(isTryItOut[14]);
  const guildMemberOrUserPendingDisplayNameStyles = obj5.useGuildMemberOrUserPendingDisplayNameStyles(stateFromStores, guildId);
  const pendingDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  ({ guildDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  obj = {};
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  obj.userId = id;
  obj.guildId = guildId;
  let tmp9 = pendingDisplayNameStyles;
  if (isTryItOut) {
    tmp9 = tryItOutDisplayNameStyles;
  }
  obj.pendingDisplayNameStyles = tmp9;
  obj.ignoreDisabledStylesSetting = true;
  const tmp7Result = guildId(isTryItOut[15])(obj);
  let closure_5 = tmp7Result;
  let fontId;
  const tmp7 = guildId(isTryItOut[15]);
  if (null != tmp7Result) {
    fontId = tmp7Result.fontId;
  }
  if (null == fontId) {
    fontId = navigation(isTryItOut[17]).DisplayNameFont.DEFAULT;
  }
  let tmp16 = stateFromStores(displayNameStylesPendingName.useState(fontId), 2);
  const first = tmp16[0];
  let closure_7 = tmp16[1];
  let effectId;
  if (null != tmp7Result) {
    effectId = tmp7Result.effectId;
  }
  if (null == effectId) {
    effectId = navigation(isTryItOut[8]).DisplayNameEffect.SOLID;
  }
  const tmp22 = stateFromStores(displayNameStylesPendingName.useState(effectId), 2);
  const first1 = tmp22[0];
  closure_9 = tmp22[1];
  let obj7 = navigation(isTryItOut[18]);
  const tmp24 = obj7.getEffectColorCount(first1) > 1;
  const AnalyticEvents = tmp24;
  let obj8 = navigation(isTryItOut[19]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj8.useIsDisplayNameStylesFlywheelSettersEnabled("DisplayNameStylesEditScreen");
  let obj9 = navigation(isTryItOut[20]);
  const displayNameStylesEffectConfig = obj9.useDisplayNameStylesEffectConfig(first1);
  let callback = guildId(isTryItOut[21])();
  let colors;
  if (null != tmp7Result) {
    colors = tmp7Result.colors;
  }
  if (null == colors) {
    colors = [];
  }
  if (colors.length > 0) {
    if (!tmp24) {
      let first2 = colors[0];
    }
    const tmp31 = stateFromStores(tmp28(first2), 2);
    const first3 = tmp31[0];
    _createForOfIteratorHelperLoose = tmp31[1];
    const tmp34 = stateFromStores(displayNameStylesPendingName.useState(() => Object.fromEntries(first3.map((arg0) => {
      const items = [arg0, ];
      if (outer1_13.length > 0) {
        if (outer1_8 === arg0) {
          let tmp2 = outer1_13;
        }
        items[1] = tmp2;
        return items;
      }
      tmp2 = outer1_12[arg0];
    }))), 2);
    const first4 = tmp34[0];
    let closure_17 = tmp34[1];
    callback = displayNameStylesPendingName.useCallback((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      callback3((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[closure_0] = closure_1;
        return obj;
      });
    }, []);
    const items1 = [tmp24, first4, first1, displayNameStylesEffectConfig.defaultColors, first3];
    const memo = displayNameStylesPendingName.useMemo(() => {
      if (closure_10) {
        let defaultColors = first4[first1];
        if (null == defaultColors) {
          defaultColors = displayNameStylesEffectConfig.defaultColors;
        }
        let items = defaultColors;
      } else {
        items = [first3];
      }
      return items;
    }, items1);
    const items2 = [tmp7Result, first, first1, memo];
    const memo1 = displayNameStylesPendingName.useMemo(() => {
      let fontId;
      if (null != tmp7Result) {
        fontId = tmp7Result.fontId;
      }
      let tmp4 = first !== fontId;
      if (!tmp4) {
        let effectId;
        if (null != tmp7Result) {
          effectId = tmp7Result.effectId;
        }
        tmp4 = first1 !== effectId;
        const tmp5 = first1;
      }
      if (!tmp4) {
        let colors;
        if (null != tmp7Result) {
          colors = tmp7Result.colors;
        }
        if (null == colors) {
          colors = [];
        }
        tmp4 = !navigation(isTryItOut[22]).areArraysShallowEqual(memo, colors);
        const obj = navigation(isTryItOut[22]);
        const tmp11 = memo;
      }
      return tmp4;
    }, items2);
    let obj10 = navigation(isTryItOut[23]);
    obj = {
      hasChanges: memo1,
      selectedFontId: first,
      selectedEffectId: first1,
      selectedColors: memo,
      defaultColor: displayNameStylesEffectConfig.defaultColors[0],
      guildId,
      isTryItOut,
      onClose() {
          return navigation.goBack();
        }
    };
    const displayNameStylesHandleApply = obj10.useDisplayNameStylesHandleApply(obj);
    let obj12 = navigation(isTryItOut[24]);
    const visibleFontOrder = obj12.useVisibleFontOrder();
    let obj13 = navigation(isTryItOut[25]);
    const visibleEffectOrder = obj13.useVisibleEffectOrder();
    let obj14 = navigation(isTryItOut[26]);
    const displayNameStylesNewFontsBadge = obj14.useDisplayNameStylesNewFontsBadge(visibleFontOrder);
    const showFontsBadge = displayNameStylesNewFontsBadge.showFontsBadge;
    const dismissFontsBadge = displayNameStylesNewFontsBadge.dismissFontsBadge;
    let obj15 = navigation(isTryItOut[26]);
    const displayNameStylesNewEffectsBadge = obj15.useDisplayNameStylesNewEffectsBadge(visibleEffectOrder);
    const showEffectsBadge = displayNameStylesNewEffectsBadge.showEffectsBadge;
    const dismissEffectsBadge = displayNameStylesNewEffectsBadge.dismissEffectsBadge;
    const items3 = [callback, visibleFontOrder, visibleEffectOrder];
    const items4 = [navigation, isTryItOut];
    const callback1 = displayNameStylesPendingName.useCallback(() => {
      let colors;
      let effectId;
      const randomDisplayNameStyles = navigation(isTryItOut[18]).generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder);
      ({ effectId, colors } = randomDisplayNameStyles);
      callback(randomDisplayNameStyles.fontId);
      currentUser(effectId);
      const obj = navigation(isTryItOut[18]);
      if (obj2.getEffectColorCount(effectId) > 1) {
        callback(effectId, colors);
      } else {
        callback2(colors[0]);
      }
      obj2 = navigation(isTryItOut[18]);
      guildId(isTryItOut[27]).track(tmp24.DISPLAY_NAME_STYLES_SURPRISE_ME);
    }, items3);
    const items5 = [guildId, navigation];
    const callback2 = displayNameStylesPendingName.useCallback(() => {
      let obj = navigation(isTryItOut[28]);
      const result = obj.triggerHapticFeedback(navigation(isTryItOut[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
      if (isTryItOut) {
        let tmp2Result = tmp2(tmp3[29]);
        const result1 = tmp2Result.setTryItOutDisplayNameStyles(null);
      } else {
        tmp2Result = tmp2(tmp3[30]);
        obj = { displayNameStyles: null };
        tmp2Result.setPendingChanges(obj);
      }
      guildId(isTryItOut[27]).track(tmp24.DISPLAY_NAME_STYLES_REMOVED);
      navigation.goBack();
    }, items4);
    const items6 = [first, displayNameStylesPendingName, showFontsBadge, dismissFontsBadge];
    const callback3 = displayNameStylesPendingName.useCallback(() => {
      let obj = navigation(isTryItOut[28]);
      const result = obj.triggerHapticFeedback(navigation(isTryItOut[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
      obj = { guildId, displayNameStyles: null };
      navigation(isTryItOut[30]).setPendingChanges(obj);
      navigation.goBack();
    }, items5);
    const items7 = [first1, , , ];
    let id1;
    const callback4 = displayNameStylesPendingName.useCallback(() => {
      if (showFontsBadge) {
        dismissFontsBadge();
      }
      let obj = guildId(isTryItOut[31]);
      obj = { selectedFontId: first, onSelectFont: closure_7, displayName: displayNameStylesPendingName };
      obj.openLazy(navigation(isTryItOut[33])(isTryItOut[32], isTryItOut.paths), "DisplayNameStylesFontPickerSheet", obj);
    }, items6);
    if (null != stateFromStores) {
      id1 = stateFromStores.id;
    }
    items7[1] = id1;
    items7[2] = showEffectsBadge;
    items7[3] = dismissEffectsBadge;
    const items8 = [tmp24, memo, first3, first1, callback];
    const callback5 = displayNameStylesPendingName.useCallback(() => {
      if (showEffectsBadge) {
        dismissEffectsBadge();
      }
      let obj = guildId(isTryItOut[31]);
      obj = {};
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      obj.userId = id;
      obj.selectedEffectId = first1;
      obj.onSelectEffect = closure_9;
      obj.openLazy(navigation(isTryItOut[33])(isTryItOut[34], isTryItOut.paths), "DisplayNameStylesEffectPickerSheet", obj);
    }, items7);
    const callback6 = displayNameStylesPendingName.useCallback(() => {
      if (first1 === navigation(isTryItOut[8]).DisplayNameEffect.GUMMY) {
        let obj = {
          selectedColors: memo,
          onSelectColors(arg0) {
              return outer1_18(navigation(isTryItOut[8]).DisplayNameEffect.GUMMY, arg0);
            }
        };
        guildId(isTryItOut[31]).openLazy(navigation(isTryItOut[33])(isTryItOut[35], isTryItOut.paths), "DisplayNameStylesGummyColorPickerSheet", obj);
        const obj3 = guildId(isTryItOut[31]);
      } else {
        const openLazy = guildId(isTryItOut[31]).openLazy;
        const tmp18 = navigation(isTryItOut[33]);
        if (closure_10) {
          obj = {
            selectedColors: memo,
            selectedEffectId: first1,
            onSelectColors(arg0) {
                  return outer1_18(outer1_8, arg0);
                }
          };
          openLazy(tmp18(tmp15[36], tmp15.paths), "DisplayNameStylesGradientPickerSheet", obj);
        } else {
          obj = { selectedColor: first3, selectedEffectId: first1, onSelectColor: closure_15 };
          openLazy(tmp18(tmp15[37], tmp15.paths), "DisplayNameStylesColorPickerSheet", obj);
        }
        const tmp16 = guildId(isTryItOut[31]);
      }
    }, items8);
    const intl = navigation(isTryItOut[38]).intl;
    const stringResult = intl.string(guildId(isTryItOut[39])(first));
    let tmp66Result = null;
    if (null != stateFromStores) {
      obj1 = { theme: tmp11 };
      let obj2 = {};
      obj3 = { overrideSettings: true };
      obj2.value = obj3;
      obj4 = { style: stringResult2.container };
      obj5 = {};
      const obj6 = {};
      let merged = Object.assign(stringResult2.contentContainer);
      let num11 = 0;
      if (memo1) {
        num11 = 70;
      }
      obj6["paddingBottom"] = num11;
      obj5.contentContainerStyle = obj6;
      obj7 = { user: stateFromStores, displayName: displayNameStylesPendingName, guildId, selectedFontId: first, selectedEffectId: first1, selectedColors: memo };
      const items9 = [callback(guildId(isTryItOut[42]), obj7), , ];
      obj8 = { style: stringResult2.fieldButtonGroup };
      obj9 = { onPress: callback4, style: stringResult2.fieldButton, accessibilityRole: "button" };
      const intl2 = navigation(isTryItOut[38]).intl;
      const stringResult1 = intl2.string(guildId(isTryItOut[43])["0JCuGm"]);
      if (showFontsBadge) {
        const intl3 = tmp81(tmp82[38]).intl;
        const _HermesInternal2 = HermesInternal;
        let combined = "" + stringResult1 + ", " + stringResult + ", " + intl3.string(tmp81(tmp82[38]).t.y2b7CA);
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult1 + ", " + stringResult;
      }
      obj9.accessibilityLabel = combined;
      obj10 = {};
      const obj11 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
      const intl4 = navigation(isTryItOut[38]).intl;
      obj11.children = intl4.string(guildId(isTryItOut[43])["0JCuGm"]);
      const items10 = [callback(navigation(isTryItOut[44]).Text, obj11), ];
      obj12 = { variant: "text-md/normal", color: "text-subtle" };
      let str9 = "text-md/normal";
      obj12.children = stringResult;
      items10[1] = callback(navigation(isTryItOut[44]).Text, obj12);
      obj10.children = items10;
      const items11 = [colors(closure_5, obj10), ];
      if (showFontsBadge) {
        stringResult2 = colors;
        stringResult2 = closure_5;
        obj13 = { style: stringResult2.fieldButtonTrailing };
        stringResult2 = callback;
        stringResult2 = navigation;
        stringResult2 = isTryItOut;
        const items12 = [callback(navigation(isTryItOut[45]).NewTag, {}), ];
        stringResult2 = callback;
        obj14 = { color: "icon-muted" };
        items12[1] = callback(navigation(isTryItOut[46]).ChevronSmallRightIcon, obj14);
        obj13.children = items12;
        stringResult2 = colors(closure_5, obj13);
      } else {
        obj15 = { color: "icon-muted" };
        stringResult2 = callback(navigation(isTryItOut[46]).ChevronSmallRightIcon, obj15);
      }
      items11[1] = stringResult2;
      obj9.children = items11;
      const items13 = [colors(closure_7, obj9), , ];
      const obj16 = { onPress: callback5 };
      const items14 = [, ];
      ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = stringResult2);
      obj16.style = items14;
      obj16.accessibilityRole = "button";
      stringResult2 = navigation;
      stringResult2 = isTryItOut;
      stringResult2 = colors;
      stringResult2 = closure_7;
      const intl5 = navigation(isTryItOut[38]).intl;
      stringResult2 = guildId;
      stringResult2 = intl5.string(guildId(isTryItOut[43]).RVtMxT);
      const name = displayNameStylesEffectConfig.name;
      if (showEffectsBadge) {
        const intl6 = stringResult2(stringResult2[38]).intl;
        stringResult2 = globalThis;
        const _HermesInternal4 = HermesInternal;
        stringResult2 = name;
        stringResult2 = "" + stringResult2 + ", " + name + ", " + intl6.string(stringResult2(stringResult2[38]).t.y2b7CA);
      } else {
        stringResult2 = globalThis;
        const _HermesInternal3 = HermesInternal;
        stringResult2 = "" + stringResult2 + ", " + name;
      }
      obj16.accessibilityLabel = stringResult2;
      stringResult2 = colors;
      stringResult2 = closure_5;
      const obj17 = {};
      stringResult2 = callback;
      stringResult2 = navigation;
      stringResult2 = isTryItOut;
      const obj18 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
      const intl7 = navigation(isTryItOut[38]).intl;
      stringResult2 = guildId;
      obj18.children = intl7.string(guildId(isTryItOut[43]).RVtMxT);
      const items15 = [callback(navigation(isTryItOut[44]).Text, obj18), ];
      stringResult2 = callback;
      const obj19 = { variant: "text-md/normal", color: "text-subtle", children: displayNameStylesEffectConfig.name };
      items15[1] = callback(navigation(isTryItOut[44]).Text, obj19);
      obj17.children = items15;
      const items16 = [colors(closure_5, obj17), ];
      if (showEffectsBadge) {
        stringResult2 = colors;
        stringResult2 = closure_5;
        const obj20 = { style: stringResult2.fieldButtonTrailing };
        stringResult2 = callback;
        stringResult2 = navigation;
        stringResult2 = isTryItOut;
        const items17 = [callback(navigation(isTryItOut[45]).NewTag, {}), ];
        stringResult2 = callback;
        const obj21 = { color: "icon-muted" };
        items17[1] = callback(navigation(isTryItOut[46]).ChevronSmallRightIcon, obj21);
        obj20.children = items17;
        stringResult2 = colors(closure_5, obj20);
      } else {
        stringResult2 = callback;
        stringResult2 = navigation;
        stringResult2 = isTryItOut;
        const obj22 = { color: "icon-muted" };
        stringResult2 = callback(navigation(isTryItOut[46]).ChevronSmallRightIcon, obj22);
      }
      items16[1] = stringResult2;
      obj16.children = items16;
      items13[1] = stringResult2(stringResult2, obj16);
      stringResult2 = colors;
      const obj23 = { onPress: callback6 };
      const items18 = [, ];
      ({ fieldButton: arr21[0], fieldButtonBorder: arr21[1] } = stringResult2);
      obj23.style = items18;
      obj23.accessibilityRole = "button";
      stringResult2 = navigation;
      stringResult2 = isTryItOut;
      stringResult2 = closure_7;
      const intl8 = navigation(isTryItOut[38]).intl;
      stringResult2 = guildId;
      obj23.accessibilityLabel = intl8.string(guildId(isTryItOut[43])["6OxgN7"]);
      const obj24 = { style: stringResult2.fieldButtonLabel };
      stringResult2 = callback;
      stringResult2 = closure_5;
      const obj25 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
      const intl9 = navigation(isTryItOut[38]).intl;
      obj25.children = intl9.string(guildId(isTryItOut[43])["6OxgN7"]);
      const items19 = [callback(navigation(isTryItOut[44]).Text, obj25), ];
      stringResult2 = callback;
      const obj26 = { variant: null, color: "text-subtle", lineClamp: 1 };
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        str9 = "text-sm/normal";
      }
      obj26.variant = str9;
      const mapped = memo.map((color) => navigation(isTryItOut[47]).int2hex(color));
      obj26.children = mapped.join(", ");
      items19[1] = stringResult2(navigation(isTryItOut[44]).Text, obj26);
      obj24.children = items19;
      const items20 = [stringResult2(stringResult2, obj24), ];
      const obj27 = { style: stringResult2.fieldButtonChevron };
      stringResult2 = callback;
      stringResult2 = guildId;
      stringResult2 = isTryItOut;
      stringResult2 = colors;
      stringResult2 = closure_5;
      const obj28 = { colors: memo, effectId: first1 };
      const items21 = [callback(guildId(isTryItOut[48]), obj28), ];
      stringResult2 = callback;
      stringResult2 = navigation;
      const obj29 = { color: "icon-muted" };
      items21[1] = callback(navigation(isTryItOut[46]).ChevronSmallRightIcon, obj29);
      obj27.children = items21;
      items20[1] = colors(closure_5, obj27);
      obj23.children = items20;
      items13[2] = stringResult2(stringResult2, obj23);
      obj8.children = items13;
      items9[1] = colors(closure_5, obj8);
      const obj30 = { style: stringResult2.buttonContainer };
      stringResult2 = callback;
      const obj31 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
      const intl10 = navigation(isTryItOut[38]).intl;
      obj31.text = intl10.string(guildId(isTryItOut[43]).NOGFds);
      obj31.onPress = callback1;
      stringResult2 = callback;
      obj31.icon = callback(navigation(isTryItOut[50]).DiceIcon, {});
      const items22 = [callback(navigation(isTryItOut[49]).Button, obj31), , ];
      stringResult2 = null == guildId && null != tmp7Result;
      if (stringResult2) {
        stringResult2 = callback;
        stringResult2 = navigation;
        stringResult2 = isTryItOut;
        const obj32 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
        const intl11 = navigation(isTryItOut[38]).intl;
        stringResult2 = guildId;
        obj32.text = intl11.string(guildId(isTryItOut[43]).ymq8WQ);
        obj32.onPress = callback2;
        stringResult2 = callback;
        obj32.icon = callback(navigation(isTryItOut[51]).DenyIcon, {});
        stringResult2 = callback(navigation(isTryItOut[49]).Button, obj32);
      }
      items22[1] = stringResult2;
      stringResult2 = null != guildId;
      if (stringResult2) {
        stringResult2 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
      }
      if (stringResult2) {
        stringResult2 = callback;
        stringResult2 = navigation;
        stringResult2 = isTryItOut;
        const obj33 = { text: null, onPress: null, variant: "tertiary", size: "lg", grow: true, icon: null, iconPosition: "start" };
        const intl12 = navigation(isTryItOut[38]).intl;
        stringResult2 = guildId;
        obj33.text = intl12.string(guildId(isTryItOut[43])["j/KRxc"]);
        obj33.onPress = callback3;
        stringResult2 = callback;
        obj33.icon = callback(navigation(isTryItOut[51]).DenyIcon, {});
        stringResult2 = callback(navigation(isTryItOut[49]).Button, obj33);
      }
      items22[2] = stringResult2;
      obj30.children = items22;
      items9[2] = stringResult2(stringResult2, obj30);
      obj5.children = items9;
      const items23 = [colors(first, obj5), ];
      stringResult2 = callback;
      stringResult2 = callback;
      const obj34 = { onPress: displayNameStylesHandleApply, visible: memo1 };
      items23[1] = callback(callback, obj34);
      obj4.children = items23;
      obj2.children = colors(closure_5, obj4);
      obj1.children = callback(navigation(isTryItOut[41]).DisplayNameStylesContext.Provider, obj2);
      tmp66Result = callback(navigation(isTryItOut[40]).ThemeContextProvider, obj1);
      const tmp66 = callback;
      const tmp69 = callback;
      const tmp71 = closure_5;
      const tmp72 = first;
      const tmp79 = closure_5;
      const tmp80 = closure_7;
    }
    return tmp66Result;
  }
  first2 = displayNameStylesEffectConfig.defaultColors[0];
};
