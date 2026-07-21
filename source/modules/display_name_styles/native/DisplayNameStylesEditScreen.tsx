// Module ID: 14100
// Function ID: 107048
// Name: ApplyButton
// Dependencies: []
// Exports: default

// Module 14100 (ApplyButton)
function ApplyButton(onPress) {
  onPress = onPress.onPress;
  const arg1 = onPress;
  const visible = onPress.visible;
  const importDefault = visible;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[53]);
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
  let obj2 = arg1(dependencyMap[53]);
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
    let obj = { marginHorizontal: visible(stateFromStores[10]).space.PX_16 };
    obj = {};
    let withSpringResult = num2;
    if (!stateFromStores) {
      withSpringResult = onPress(stateFromStores[54]).withSpring(num2, closure_11);
      const obj3 = onPress(stateFromStores[54]);
    }
    obj.translateY = withSpringResult;
    const items = [obj, ];
    obj = {};
    let withSpringResult1 = num3;
    if (!stateFromStores) {
      withSpringResult1 = onPress(stateFromStores[54]).withSpring(num3, closure_11);
      const obj5 = onPress(stateFromStores[54]);
    }
    obj.scale = withSpringResult1;
    items[1] = obj;
    obj.transform = items;
    let withSpringResult2 = num;
    if (!stateFromStores) {
      withSpringResult2 = onPress(stateFromStores[54]).withSpring(num, closure_11);
      const obj6 = onPress(stateFromStores[54]);
    }
    obj.opacity = withSpringResult2;
    return obj;
  };
  obj = { visible, tokens: importDefault(dependencyMap[10]), reducedMotion: stateFromStores, withSpring: arg1(dependencyMap[54]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: closure_11 };
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
  obj1 = { style: { marginBottom: importDefault(dependencyMap[52])().bottom }, animatedProps };
  obj2 = { "Bool(false)": "displayName", "Bool(false)": "r", "Bool(false)": "isArray", onPress: callback };
  const intl = arg1(dependencyMap[38]).intl;
  obj2.text = intl.string(arg1(dependencyMap[38]).t.1Qm822);
  obj1.children = callback2(arg1(dependencyMap[49]).Button, obj2);
  obj.children = callback2(importDefault(dependencyMap[53]).View, obj1);
  return callback2(importDefault(dependencyMap[53]).View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6, Pressable: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
let closure_11 = arg1(dependencyMap[6]).MEDIA_PICKER_SEND_BUTTON_SPRING;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
const items = [arg1(dependencyMap[8]).DisplayNameEffect.GRADIENT, arg1(dependencyMap[8]).DisplayNameEffect.GUMMY, arg1(dependencyMap[8]).DisplayNameEffect.PRISM];
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[7]);
obj.contentContainer = { padding: importDefault(dependencyMap[10]).space.PX_16 };
const obj1 = { padding: importDefault(dependencyMap[10]).space.PX_16 };
obj.fieldButtonGroup = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[10]).radii.md };
const obj3 = { 1655329890: -1661796349, -1135455284: -1371340797, 1702608251: -1275067531, -1437140064: -1258290315, padding: importDefault(dependencyMap[10]).space.PX_12 };
obj.fieldButton = obj3;
const obj2 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[10]).radii.md };
obj.fieldButtonBorder = { borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE };
const obj4 = { borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE };
obj.fieldButtonLabel = { flex: 1, marginRight: importDefault(dependencyMap[10]).space.PX_12 };
const obj6 = { "Bool(true)": null, "Bool(true)": 4, "Bool(true)": "end_time", gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.fieldButtonChevron = obj6;
const obj7 = { "Null": 7, "Null": 370, gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.fieldButtonTrailing = obj7;
const obj5 = { flex: 1, marginRight: importDefault(dependencyMap[10]).space.PX_12 };
obj.buttonContainer = { marginVertical: importDefault(dependencyMap[10]).space.PX_16, paddingVertical: importDefault(dependencyMap[10]).space.PX_16, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[10]).colors.BORDER_MUTED, gap: importDefault(dependencyMap[10]).space.PX_16 };
let closure_15 = obj.createStyles(obj);
let closure_16 = { code: "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
let closure_17 = { code: "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
const obj8 = { marginVertical: importDefault(dependencyMap[10]).space.PX_16, paddingVertical: importDefault(dependencyMap[10]).space.PX_16, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[10]).colors.BORDER_MUTED, gap: importDefault(dependencyMap[10]).space.PX_16 };
const result = arg1(dependencyMap[55]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx");

export default function DisplayNameStylesEditScreen() {
  let guildDisplayNameStyles;
  let tryItOutDisplayNameStyles;
  let stringResult2 = callback3();
  let obj = arg1(dependencyMap[11]);
  const route = obj.useRoute();
  let obj1 = arg1(dependencyMap[11]);
  const navigation = obj1.useNavigation();
  const arg1 = navigation;
  let params = route.params;
  if (null == params) {
    params = {};
  }
  const guildId = params.guildId;
  const importDefault = guildId;
  const isTryItOut = params.isTryItOut;
  const dependencyMap = isTryItOut;
  let obj3 = arg1(dependencyMap[12]);
  let items = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let callback = stateFromStores;
  let obj4 = arg1(dependencyMap[13]);
  const displayNameStylesPendingName = obj4.useDisplayNameStylesPendingName(stateFromStores, guildId);
  const React = displayNameStylesPendingName;
  let obj5 = arg1(dependencyMap[14]);
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
  const tmp7Result = importDefault(dependencyMap[15])(obj);
  let fontId;
  const tmp7 = importDefault(dependencyMap[15]);
  if (null != tmp7Result) {
    fontId = tmp7Result.fontId;
  }
  if (null == fontId) {
    fontId = arg1(dependencyMap[17]).DisplayNameFont.DEFAULT;
  }
  const tmp16 = callback(React.useState(fontId), 2);
  const first = tmp16[0];
  let closure_7 = tmp16[1];
  let effectId;
  if (null != tmp7Result) {
    effectId = tmp7Result.effectId;
  }
  if (null == effectId) {
    effectId = arg1(dependencyMap[8]).DisplayNameEffect.SOLID;
  }
  const tmp22 = callback(React.useState(effectId), 2);
  const first1 = tmp22[0];
  let closure_8 = first1;
  closure_9 = tmp22[1];
  let obj7 = arg1(dependencyMap[18]);
  const tmp24 = obj7.getEffectColorCount(first1) > 1;
  const AnalyticEvents = tmp24;
  let obj8 = arg1(dependencyMap[19]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj8.useIsDisplayNameStylesFlywheelSettersEnabled("DisplayNameStylesEditScreen");
  let obj9 = arg1(dependencyMap[20]);
  const displayNameStylesEffectConfig = obj9.useDisplayNameStylesEffectConfig(first1);
  let closure_11 = displayNameStylesEffectConfig;
  let callback2 = importDefault(dependencyMap[21])();
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
    const tmp31 = callback(tmp28(first2), 2);
    const first3 = tmp31[0];
    items = first3;
    let callback3 = tmp31[1];
    const tmp34 = callback(React.useState(() => Object.fromEntries(first3.map((arg0) => {
      const items = [arg0, ];
      if (length.length > 0) {
        if (closure_8 === arg0) {
          let tmp2 = length;
        }
        items[1] = tmp2;
        return items;
      }
      tmp2 = closure_12[arg0];
    }))), 2);
    const first4 = tmp34[0];
    let closure_16 = first4;
    let closure_17 = tmp34[1];
    callback = React.useCallback((arg0, arg1) => {
      const navigation = arg0;
      const guildId = arg1;
      callback3((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[arg0] = arg1;
        return obj;
      });
    }, []);
    const ApplyButton = callback;
    const items1 = [tmp24, first4, first1, displayNameStylesEffectConfig.defaultColors, first3];
    const memo = React.useMemo(() => {
      if (tmp24) {
        let defaultColors = first4[closure_8];
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
    const memo1 = React.useMemo(() => {
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
    let obj10 = arg1(dependencyMap[23]);
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
    let obj12 = arg1(dependencyMap[24]);
    const visibleFontOrder = obj12.useVisibleFontOrder();
    let obj13 = arg1(dependencyMap[25]);
    const visibleEffectOrder = obj13.useVisibleEffectOrder();
    let obj14 = arg1(dependencyMap[26]);
    const displayNameStylesNewFontsBadge = obj14.useDisplayNameStylesNewFontsBadge(visibleFontOrder);
    const showFontsBadge = displayNameStylesNewFontsBadge.showFontsBadge;
    const dismissFontsBadge = displayNameStylesNewFontsBadge.dismissFontsBadge;
    let obj15 = arg1(dependencyMap[26]);
    const displayNameStylesNewEffectsBadge = obj15.useDisplayNameStylesNewEffectsBadge(visibleEffectOrder);
    const showEffectsBadge = displayNameStylesNewEffectsBadge.showEffectsBadge;
    const dismissEffectsBadge = displayNameStylesNewEffectsBadge.dismissEffectsBadge;
    const items3 = [callback, visibleFontOrder, visibleEffectOrder];
    const items4 = [navigation, isTryItOut];
    const callback1 = React.useCallback(() => {
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
      const obj2 = navigation(isTryItOut[18]);
      guildId(isTryItOut[27]).track(tmp24.DISPLAY_NAME_STYLES_SURPRISE_ME);
    }, items3);
    const items5 = [guildId, navigation];
    callback2 = React.useCallback(() => {
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
    callback3 = React.useCallback(() => {
      let obj = navigation(isTryItOut[28]);
      const result = obj.triggerHapticFeedback(navigation(isTryItOut[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
      obj = { guildId, displayNameStyles: null };
      navigation(isTryItOut[30]).setPendingChanges(obj);
      navigation.goBack();
    }, items5);
    const items7 = [first1, , , ];
    let id1;
    const callback4 = React.useCallback(() => {
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
    const callback5 = React.useCallback(() => {
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
    const callback6 = React.useCallback(() => {
      if (first1 === navigation(isTryItOut[8]).DisplayNameEffect.GUMMY) {
        let obj = {
          selectedColors: memo,
          onSelectColors(arg0) {
              return callback2(callback(closure_2[8]).DisplayNameEffect.GUMMY, arg0);
            }
        };
        guildId(isTryItOut[31]).openLazy(navigation(isTryItOut[33])(isTryItOut[35], isTryItOut.paths), "DisplayNameStylesGummyColorPickerSheet", obj);
        const obj3 = guildId(isTryItOut[31]);
      } else {
        const openLazy = guildId(isTryItOut[31]).openLazy;
        const tmp18 = navigation(isTryItOut[33]);
        if (tmp24) {
          obj = {
            selectedColors: memo,
            selectedEffectId: first1,
            onSelectColors(arg0) {
                  return callback2(closure_8, arg0);
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
    const intl = arg1(dependencyMap[38]).intl;
    const stringResult = intl.string(importDefault(dependencyMap[39])(first));
    let tmp66Result = null;
    if (null != stateFromStores) {
      obj1 = { theme: tmp11 };
      const obj2 = {};
      obj3 = { overrideSettings: true };
      obj2.value = obj3;
      obj4 = { style: stringResult2.container };
      obj5 = {};
      const obj6 = {};
      const merged = Object.assign(stringResult2.contentContainer);
      let num11 = 0;
      if (memo1) {
        num11 = 70;
      }
      obj6["paddingBottom"] = num11;
      obj5.contentContainerStyle = obj6;
      obj7 = { user: stateFromStores, displayName: displayNameStylesPendingName, guildId, selectedFontId: first, selectedEffectId: first1, selectedColors: memo };
      const items9 = [callback2(importDefault(dependencyMap[42]), obj7), , ];
      obj8 = { style: stringResult2.fieldButtonGroup };
      obj9 = { onPress: callback4, style: stringResult2.fieldButton, accessibilityRole: "button" };
      const intl2 = arg1(dependencyMap[38]).intl;
      const stringResult1 = intl2.string(importDefault(dependencyMap[43]).0JCuGm);
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
      const obj11 = { hasMaxConnections: -0.00000000003092285168288388, isBoostOnlySubscription: -1020848100503384400000000000000000000000 };
      const intl4 = arg1(dependencyMap[38]).intl;
      obj11.children = intl4.string(importDefault(dependencyMap[43]).0JCuGm);
      const items10 = [callback2(arg1(dependencyMap[44]).Text, obj11), ];
      obj12 = {};
      let str9 = "text-md/normal";
      obj12.children = stringResult;
      items10[1] = callback2(arg1(dependencyMap[44]).Text, obj12);
      obj10.children = items10;
      const items11 = [colors(tmp7Result, obj10), ];
      if (showFontsBadge) {
        stringResult2 = colors;
        stringResult2 = tmp7Result;
        obj13 = { style: stringResult2.fieldButtonTrailing };
        stringResult2 = callback2;
        stringResult2 = arg1;
        stringResult2 = dependencyMap;
        const items12 = [callback2(arg1(dependencyMap[45]).NewTag, {}), ];
        stringResult2 = callback2;
        obj14 = { color: "icon-muted" };
        items12[1] = callback2(arg1(dependencyMap[46]).ChevronSmallRightIcon, obj14);
        obj13.children = items12;
        stringResult2 = colors(tmp7Result, obj13);
      } else {
        obj15 = { color: "icon-muted" };
        stringResult2 = callback2(arg1(dependencyMap[46]).ChevronSmallRightIcon, obj15);
      }
      items11[1] = stringResult2;
      obj9.children = items11;
      const items13 = [colors(closure_7, obj9), , ];
      const obj16 = { onPress: callback5 };
      const items14 = [, ];
      ({ fieldButton: arr17[0], fieldButtonBorder: arr17[1] } = stringResult2);
      obj16.style = items14;
      obj16.accessibilityRole = "button";
      stringResult2 = arg1;
      stringResult2 = dependencyMap;
      stringResult2 = colors;
      stringResult2 = closure_7;
      const intl5 = arg1(dependencyMap[38]).intl;
      stringResult2 = importDefault;
      stringResult2 = intl5.string(importDefault(dependencyMap[43]).RVtMxT);
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
      stringResult2 = tmp7Result;
      const obj17 = {};
      stringResult2 = callback2;
      stringResult2 = arg1;
      stringResult2 = dependencyMap;
      const obj18 = { hasMaxConnections: -0.00000000003092285168288388, isBoostOnlySubscription: -1020848100503384400000000000000000000000 };
      const intl7 = arg1(dependencyMap[38]).intl;
      stringResult2 = importDefault;
      obj18.children = intl7.string(importDefault(dependencyMap[43]).RVtMxT);
      const items15 = [callback2(arg1(dependencyMap[44]).Text, obj18), ];
      stringResult2 = callback2;
      const obj19 = { children: displayNameStylesEffectConfig.name };
      items15[1] = callback2(arg1(dependencyMap[44]).Text, obj19);
      obj17.children = items15;
      const items16 = [colors(tmp7Result, obj17), ];
      if (showEffectsBadge) {
        stringResult2 = colors;
        stringResult2 = tmp7Result;
        const obj20 = { style: stringResult2.fieldButtonTrailing };
        stringResult2 = callback2;
        stringResult2 = arg1;
        stringResult2 = dependencyMap;
        const items17 = [callback2(arg1(dependencyMap[45]).NewTag, {}), ];
        stringResult2 = callback2;
        const obj21 = { color: "icon-muted" };
        items17[1] = callback2(arg1(dependencyMap[46]).ChevronSmallRightIcon, obj21);
        obj20.children = items17;
        stringResult2 = colors(tmp7Result, obj20);
      } else {
        stringResult2 = callback2;
        stringResult2 = arg1;
        stringResult2 = dependencyMap;
        const obj22 = { color: "icon-muted" };
        stringResult2 = callback2(arg1(dependencyMap[46]).ChevronSmallRightIcon, obj22);
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
      stringResult2 = arg1;
      stringResult2 = dependencyMap;
      stringResult2 = closure_7;
      const intl8 = arg1(dependencyMap[38]).intl;
      stringResult2 = importDefault;
      obj23.accessibilityLabel = intl8.string(importDefault(dependencyMap[43]).6OxgN7);
      const obj24 = { style: stringResult2.fieldButtonLabel };
      stringResult2 = callback2;
      stringResult2 = tmp7Result;
      const obj25 = { hasMaxConnections: -0.00000000003092285168288388, isBoostOnlySubscription: -1020848100503384400000000000000000000000 };
      const intl9 = arg1(dependencyMap[38]).intl;
      obj25.children = intl9.string(importDefault(dependencyMap[43]).6OxgN7);
      const items19 = [callback2(arg1(dependencyMap[44]).Text, obj25), ];
      stringResult2 = callback2;
      const obj26 = {};
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        str9 = "text-sm/normal";
      }
      obj26.variant = str9;
      const mapped = memo.map((color) => navigation(isTryItOut[47]).int2hex(color));
      obj26.children = mapped.join(", ");
      items19[1] = stringResult2(arg1(dependencyMap[44]).Text, obj26);
      obj24.children = items19;
      const items20 = [stringResult2(stringResult2, obj24), ];
      const obj27 = { style: stringResult2.fieldButtonChevron };
      stringResult2 = callback2;
      stringResult2 = importDefault;
      stringResult2 = dependencyMap;
      stringResult2 = colors;
      stringResult2 = tmp7Result;
      const obj28 = { colors: memo, effectId: first1 };
      const items21 = [callback2(importDefault(dependencyMap[48]), obj28), ];
      stringResult2 = callback2;
      stringResult2 = arg1;
      const obj29 = { color: "icon-muted" };
      items21[1] = callback2(arg1(dependencyMap[46]).ChevronSmallRightIcon, obj29);
      obj27.children = items21;
      items20[1] = colors(tmp7Result, obj27);
      obj23.children = items20;
      items13[2] = stringResult2(stringResult2, obj23);
      obj8.children = items13;
      items9[1] = colors(tmp7Result, obj8);
      const obj30 = { style: stringResult2.buttonContainer };
      stringResult2 = callback2;
      const obj31 = {};
      const intl10 = arg1(dependencyMap[38]).intl;
      obj31.text = intl10.string(importDefault(dependencyMap[43]).NOGFds);
      obj31.onPress = callback1;
      stringResult2 = callback2;
      obj31.icon = callback2(arg1(dependencyMap[50]).DiceIcon, {});
      const items22 = [callback2(arg1(dependencyMap[49]).Button, obj31), , ];
      stringResult2 = null == guildId && null != tmp7Result;
      if (stringResult2) {
        stringResult2 = callback2;
        stringResult2 = arg1;
        stringResult2 = dependencyMap;
        const obj32 = {};
        const intl11 = arg1(dependencyMap[38]).intl;
        stringResult2 = importDefault;
        obj32.text = intl11.string(importDefault(dependencyMap[43]).ymq8WQ);
        obj32.onPress = callback2;
        stringResult2 = callback2;
        obj32.icon = callback2(arg1(dependencyMap[51]).DenyIcon, {});
        stringResult2 = callback2(arg1(dependencyMap[49]).Button, obj32);
      }
      items22[1] = stringResult2;
      stringResult2 = null != guildId;
      if (stringResult2) {
        stringResult2 = null != guildDisplayNameStyles || null != pendingDisplayNameStyles;
      }
      if (stringResult2) {
        stringResult2 = callback2;
        stringResult2 = arg1;
        stringResult2 = dependencyMap;
        const obj33 = {};
        const intl12 = arg1(dependencyMap[38]).intl;
        stringResult2 = importDefault;
        obj33.text = intl12.string(importDefault(dependencyMap[43]).j/KRxc);
        obj33.onPress = callback3;
        stringResult2 = callback2;
        obj33.icon = callback2(arg1(dependencyMap[51]).DenyIcon, {});
        stringResult2 = callback2(arg1(dependencyMap[49]).Button, obj33);
      }
      items22[2] = stringResult2;
      obj30.children = items22;
      items9[2] = stringResult2(stringResult2, obj30);
      obj5.children = items9;
      const items23 = [colors(first, obj5), ];
      stringResult2 = callback2;
      stringResult2 = ApplyButton;
      const obj34 = { onPress: displayNameStylesHandleApply, visible: memo1 };
      items23[1] = callback2(ApplyButton, obj34);
      obj4.children = items23;
      obj2.children = colors(tmp7Result, obj4);
      obj1.children = callback2(arg1(dependencyMap[41]).DisplayNameStylesContext.Provider, obj2);
      tmp66Result = callback2(arg1(dependencyMap[40]).ThemeContextProvider, obj1);
      const tmp66 = callback2;
      const tmp69 = callback2;
      const tmp71 = tmp7Result;
      const tmp72 = first;
      const tmp79 = tmp7Result;
      const tmp80 = closure_7;
    }
    return tmp66Result;
  }
  first2 = displayNameStylesEffectConfig.defaultColors[0];
};
