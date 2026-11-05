// Module ID: 7435
// Function ID: 7436
// Name: GuildOnboardingPromptOptionButton
// Dependencies: [32, 19, 17, 5144, 6934, 1388, 21, 1652, 5143, 575, 504, 5380, 5773, 7436, 5152, 1113, 5734, 5210, 7124, 7439, 1411, 5763, 7442, 1187, 2]
// Exports: default

// Module 7435 (GuildOnboardingPromptOptionButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import _mod1652 from "module_1652" /* 1652 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5152 */;
import timing_timing from "timing/timing" /* 5380 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import EmojiStore from "EmojiStore" /* 6934 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let set;

let Easing;
let c10;
let c9;
let obj3;
let rect;
let size;
let react = react_mod;
let View = react_native.View;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { duration: 200, easing: Easing.out(_mod1652.Easing.ease) };
Easing = _mod1652.Easing;
let createStyles = createStyles_mod;
let obj2 = { container: obj3, optionButton: { paddingVertical: 12, paddingHorizontal: 16, display: "flex", flexDirection: "row", alignItems: "center" }, optionTextEmoji: { fontSize: 24, lineHeight: 24, marginRight: 12, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24, marginRight: 12 }, optionText: { flexShrink: 1 }, checkIcon: size, newBadgeWrapper: { position: "absolute", top: -6, right: -6 }, newBadge: { fontWeight: "bold" }, roleCount: rect };
obj3 = { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 8 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: -6, right: -6, width: 20, height: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
rect = { position: "absolute", top: -6, right: 24, paddingVertical: 2, paddingHorizontal: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles(obj2);
let closure_13 = { code: "(function GuildOnboardingPromptOptionButtonTsx1(){let[selected,withTiming,Easing,useReducedMotion,withSequence,withSpring]=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};})" };
let closure_14 = { code: "(function GuildOnboardingPromptOptionButtonTsx2(){let[showMemberCount,withDelay,withTiming,Easing,useReducedMotion]=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};})" };
let closure_15 = { code: "(function GuildOnboardingPromptOptionButtonTsx3(){let[withTiming,selected,SELECTION_TIMING]=this.__closure;return withTiming(selected?1:0,SELECTION_TIMING);})" };
let closure_16 = { code: "(function GuildOnboardingPromptOptionButtonTsx4(){let[withTiming,isNew,SELECTION_TIMING]=this.__closure;return withTiming(isNew?1:0,SELECTION_TIMING);})" };
let closure_17 = { code: "(function GuildOnboardingPromptOptionButtonTsx5(){let[interpolateColor,newProgress,unselectedBorderColor,newBorderColor,selectedProgress,selectedBorderColor,selectedBackgroundColor]=this.__closure;const currentUnselectedBorderColor=interpolateColor(newProgress.get(),[0,1],[unselectedBorderColor,newBorderColor]);return{borderColor:interpolateColor(selectedProgress.get(),[0,1],[currentUnselectedBorderColor,selectedBorderColor]),backgroundColor:interpolateColor(selectedProgress.get(),[0,1],['transparent',selectedBackgroundColor])};})" };
let closure_18 = { code: "(function GuildOnboardingPromptOptionButtonTsx6(){let[useReducedMotion,scale]=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx");

export default function PromptOptionButton(option) {
  let CheckmarkSmallIcon;
  let Text;
  let accessibilityRole;
  let accessibilityState;
  let canBeNew;
  let closure_4;
  let closure_7;
  let closure_8;
  let emojiURL;
  let first;
  let intl;
  let intl2;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let obj12;
  let obj14;
  let obj17;
  let obj6;
  let str;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16Result;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp8;
  let tmp9;
  option = option.option;
  const selected = option.selected;
  ({ onSelect: dependencyMap, suppressMemberCount: _slicedToArray, canBeNew } = option);
  react = undefined;
  let num;
  first = undefined;
  closure_7 = undefined;
  size = undefined;
  let ref;
  let sharedValue;
  let closure_11;
  const guildId = option.guildId;
  const tmp2 = closure_12();
  let tmp3 = option;
  let tmp4 = dependencyMap;
  obj = option(504);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (option != null) {
      const emoji = tmp.emoji;
      if (emoji != null) {
        id = emoji.id;
      }
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      let id1;
      const getUsableCustomEmojiById = EmojiStore.getUsableCustomEmojiById;
      if (option != null) {
        const emoji2 = tmp.emoji;
        if (emoji2 != null) {
          id1 = emoji2.id;
        }
      }
      usableCustomEmojiById = getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  let obj2 = option(504);
  let items1 = [first];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => first.useReducedMotion);
  let tmp7 = option(1652);
  let items2 = [closure_13, selected, , , , , ];
  const useAnimatedStyle = tmp7.useAnimatedStyle;
  items2[2] = option(5380).withTiming;
  items2[3] = option(1652).Easing;
  items2[4] = stateFromStores1;
  items2[5] = option(1652).withSequence;
  items2[6] = option(5773).withSpring;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class GuildOnboardingPromptOptionButtonTsx1 {
    constructor() {
      let items;
      num = 0;
      const tmp = c1;
      if (c0) {
        num = 1;
      }
      let num2 = 0.7;
      obj = { duration: 150, easing: _undefined.out(_undefined.ease) };
      const tmpResult = tmp(num, obj);
      if (c0) {
        num2 = 1;
      }
      let tmp4 = num2;
      const obj2 = { opacity: tmpResult, transform: items };
      if (!c3) {
        const tmp7 = _undefined3(1.2 * num2, { stiffness: 80, damping: 6, mass: 0.3 });
        tmp4 = _undefined2(tmp7, _undefined3(num2, { stiffness: 80, damping: 6, mass: 0.3 }));
      }
      items = [{ scale: tmp4 }];
      return obj2;
    }
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  GuildOnboardingPromptOptionButtonTsx1.__closure = items3;
  GuildOnboardingPromptOptionButtonTsx1.__workletHash = 7034596428204;
  GuildOnboardingPromptOptionButtonTsx1.__initData = tmp8;
  const animatedStyle = useAnimatedStyle(GuildOnboardingPromptOptionButtonTsx1);
  const tmp17 = selected(7436)(guildId);
  react = tmp17;
  num = 0;
  if (null != tmp17) {
    num = 0;
    if (null != option.roleIds) {
      const _Math = Math;
      const roleIds = option.roleIds;
      const items4 = [];
      let num2 = 0;
      HermesBuiltin.arraySpread(items4, roleIds.map((item) => closure_4[item]), 0);
      const _Math2 = Math;
      num = HermesBuiltin.apply(max, items4, Math);
    }
  }
  [first, closure_7] = react.useState(false);
  size = react.useRef(null);
  const items5 = [first];
  const effect = react.useEffect(() => {
    if (first) {
      const tmp = ref;
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_7(false);
        ref.current = null;
      }, 3000);
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.current);
        }
      };
    }
  }, items5);
  ref = react.useRef(false);
  const items6 = [first, num];
  const effect1 = react.useEffect(() => {
    if (first) {
      if (!ref.current) {
        if (0 > 0) {
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = intl4.intl;
          obj = { memberCount: tmp3 };
          announce(intl.formatToPlainString(intl4.t.iyXfAn, obj), "polite");
          tmp2.current = true;
        }
      }
    }
    if (!first) {
      ref.current = false;
    }
  }, items6);
  const items7 = [closure_14, first, , , , ];
  const useAnimatedStyle2 = tmp3(1652).useAnimatedStyle;
  tmp3(1652);
  items7[2] = tmp3(1652).withDelay;
  items7[3] = tmp3(5380).withTiming;
  items7[4] = tmp3(1652).Easing;
  items7[5] = stateFromStores1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items7;
  const tmp23 = react;
  class GuildOnboardingPromptOptionButtonTsx2 {
    constructor() {
      let items;
      num = 0;
      if (c0) {
        num = 400;
      }
      let num2 = 0;
      if (c0) {
        num2 = 1;
      }
      let num3 = 16;
      obj = { duration: 150, easing: _undefined.out(_undefined.ease) };
      const tmpResult = _undefined(num, _undefined2(num2, obj));
      if (c0) {
        num3 = 0;
      }
      let tmpResult2 = num3;
      const obj3 = { opacity: tmpResult, transform: items };
      if (!c4) {
        let num4 = 0;
        if (c0) {
          num4 = 400;
        }
        const obj4 = { duration: 200, easing: _undefined.out(_undefined.ease) };
        tmpResult2 = tmp(num4, tmp3(num3, obj4));
      }
      items = [{ translateX: tmpResult2 }];
      return obj3;
    }
  }
  const items8 = [tmp30, tmp31, tmp32, tmp33, tmp34];
  GuildOnboardingPromptOptionButtonTsx2.__closure = items8;
  GuildOnboardingPromptOptionButtonTsx2.__workletHash = 13064995616524;
  GuildOnboardingPromptOptionButtonTsx2.__initData = tmp29;
  const animatedStyle2 = useAnimatedStyle2(GuildOnboardingPromptOptionButtonTsx2);
  const tmp3Result11 = tmp3(1652);
  sharedValue = tmp3Result11.useSharedValue(1);
  let id;
  const tmp37 = canBeNew && option.isUnseen;
  if (option != null) {
    let emoji = option.emoji;
    if (emoji != null) {
      id = emoji.id;
    }
  }
  let tmp39 = null != id;
  if (!tmp39) {
    let name;
    if (option != null) {
      let emoji2 = option.emoji;
      if (emoji2 != null) {
        name = emoji2.name;
      }
    }
    tmp39 = null != name;
  }
  closure_11 = tmp39;
  const items9 = [tmp39, , , ];
  const emoji3 = option.emoji;
  let name1;
  const useMemo = tmp23.useMemo;
  if (emoji3 != null) {
    name1 = emoji3.name;
  }
  items9[1] = name1;
  ({ title: arr11[2], description: arr11[3] } = option);
  const memo = useMemo(() => {
    if (closure_11) {
      const emoji = tmp.emoji;
      let str;
      if (emoji != null) {
        str = emoji.name;
      }
      if (str == null) {
        str = "";
      }
      const replaced = str.replace(/^:|:$/g, "");
      if (null != option.description) {
        let formatToPlainStringResult;
        if (option.description.length > 0) {
          const intl3 = intl4.intl;
          const obj2 = { emojiName: replaced, title: null, description: null };
          ({ title: obj3.title, description: obj3.description } = option);
          formatToPlainStringResult = intl3.formatToPlainString(intl4.t.nSzqkg, obj2);
        }
        return formatToPlainStringResult;
      }
      const intl2 = intl4.intl;
      const obj5 = { emojiName: replaced, title: option.title };
      formatToPlainStringResult = intl2.formatToPlainString(intl4.t.rBPpAN, obj5);
    } else {
      if (null != option.description) {
        let title;
        if (option.description.length > 0) {
          const intl = intl4.intl;
          obj = { title: null, description: null };
          ({ title: obj.title, description: obj.description } = option);
          title = intl.formatToPlainString(intl4.t.U4lDOC, obj);
        }
        return title;
      }
      title = tmp.title;
    }
  }, items9);
  const tmp3Result12 = tmp3(5734);
  const token = tmp3Result12.useToken(tmp16(575).colors.BORDER_SUBTLE);
  const tmp3Result13 = tmp3(5734);
  const token1 = tmp3Result13.useToken(tmp16(575).colors.BACKGROUND_BRAND);
  const tmp3Result14 = tmp3(5734);
  const token2 = tmp3Result14.useToken(tmp16(575).colors.BORDER_STRONG);
  const tmp3Result15 = tmp3(5734);
  const token3 = tmp3Result15.useToken(tmp16(575).colors.BACKGROUND_BASE_LOWEST);
  const items10 = [closure_15, , , ];
  const useDerivedValue = tmp3(1652).useDerivedValue;
  tmp3(1652);
  items10[1] = tmp3(5380).withTiming;
  items10[2] = selected;
  items10[3] = closure_11;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp49, tmp50, tmp51, tmp52] = items10;
  class GuildOnboardingPromptOptionButtonTsx3 {
    constructor() {
      num = 0;
      const tmp = c0;
      if (c1) {
        num = 1;
      }
      return tmp(num, c2);
    }
  }
  const items11 = [tmp50, tmp51, tmp52];
  GuildOnboardingPromptOptionButtonTsx3.__closure = items11;
  GuildOnboardingPromptOptionButtonTsx3.__workletHash = 16230189294602;
  GuildOnboardingPromptOptionButtonTsx3.__initData = tmp49;
  const derivedValue = useDerivedValue(GuildOnboardingPromptOptionButtonTsx3);
  const items12 = [closure_16, , , ];
  const useDerivedValue2 = tmp3(1652).useDerivedValue;
  tmp3(1652);
  items12[1] = tmp3(5380).withTiming;
  items12[2] = tmp37;
  items12[3] = closure_11;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp55, tmp56, tmp57, tmp58] = items12;
  class GuildOnboardingPromptOptionButtonTsx4 {
    constructor() {
      num = 0;
      const tmp = c0;
      if (c1) {
        num = 1;
      }
      return tmp(num, c2);
    }
  }
  const items13 = [tmp56, tmp57, tmp58];
  GuildOnboardingPromptOptionButtonTsx4.__closure = items13;
  GuildOnboardingPromptOptionButtonTsx4.__workletHash = 4904550127725;
  GuildOnboardingPromptOptionButtonTsx4.__initData = tmp55;
  const derivedValue2 = useDerivedValue2(GuildOnboardingPromptOptionButtonTsx4);
  const items14 = [closure_17, , , , , , , ];
  const useAnimatedStyle3 = tmp3(1652).useAnimatedStyle;
  tmp3(1652);
  items14[1] = tmp3(1652).interpolateColor;
  items14[2] = derivedValue2;
  items14[3] = token;
  items14[4] = token1;
  items14[5] = derivedValue;
  items14[6] = token2;
  items14[7] = token3;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  let c6;
  [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68] = items14;
  class GuildOnboardingPromptOptionButtonTsx5 {
    constructor() {
      let items1;
      let items2;
      const items = [c2, c3];
      obj = { borderColor: _undefined(_undefined3.get(), [0, 1], items1), backgroundColor: _undefined(_undefined3.get(), [0, 1], items2) };
      items1 = [_undefined(_undefined2.get(), [0, 1], items), c5];
      _undefined(_undefined2.get(), [0, 1], items);
      items2 = ["transparent", c6];
      return obj;
    }
  }
  const items15 = [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68];
  GuildOnboardingPromptOptionButtonTsx5.__closure = items15;
  GuildOnboardingPromptOptionButtonTsx5.__workletHash = 8397718874501;
  GuildOnboardingPromptOptionButtonTsx5.__initData = tmp61;
  const animatedStyle3 = useAnimatedStyle3(GuildOnboardingPromptOptionButtonTsx5);
  const items16 = [closure_18, stateFromStores1, sharedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp70, tmp71, tmp72] = items16;
  const tmp3Result19 = tmp3(1652);
  class GuildOnboardingPromptOptionButtonTsx6 {
    constructor() {
      let items;
      const tmp = c0;
      if (tmp) {
        obj = {};
      } else {
        obj = { transform: items };
        items = [{ scale: _undefined.get() }];
        const obj2 = { scale: _undefined.get() };
      }
      return obj;
    }
  }
  const items17 = [tmp71, tmp72];
  GuildOnboardingPromptOptionButtonTsx6.__closure = items17;
  GuildOnboardingPromptOptionButtonTsx6.__workletHash = 14710088829666;
  GuildOnboardingPromptOptionButtonTsx6.__initData = tmp70;
  const animatedStyle1 = tmp3Result19.useAnimatedStyle(GuildOnboardingPromptOptionButtonTsx6);
  const tmp3Result20 = tmp3(5210);
  const checkboxA11yNative = tmp3Result20.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  let obj3 = { style: items18, children: items21 };
  items18 = [tmp2.container, animatedStyle1, animatedStyle3];
  View = tmp16(1652).View;
  let obj4 = {
    activeOpacity: 0.6,
    style: tmp2.optionButton,
    onPress: function handleOptionSelect() {
      dependencyMap(!selected);
      const tmp = selected;
      const tmp3 = _slicedToArray;
      if (!tmp3) {
        closure_7(!tmp);
      }
    },
    onPressIn() {
      let Easing;
      set = sharedValue.set;
      const withSequence = _mod1652.withSequence;
      _mod1652;
      obj = timing_timing;
      const withTimingResult = obj.withTiming(1, { duration: 0 });
      const obj2 = { duration: 200, easing: Easing.out(_mod1652.Easing.ease) };
      const withTiming = timing_timing.withTiming;
      timing_timing;
      Easing = _mod1652.Easing;
      const result = set(withSequence(withTimingResult, withTiming(1.02, obj2)));
    },
    onPressOut() {
      let Easing;
      set = sharedValue.set;
      obj = { duration: 100, easing: Easing.out(_mod1652.Easing.ease) };
      const withTiming = timing_timing.withTiming;
      timing_timing;
      Easing = _mod1652.Easing;
      const result = set(withTiming(1, obj));
    },
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: memo,
    children: items19
  };
  let id1;
  const PressableOpacity = tmp3(7124).PressableOpacity;
  if (option != null) {
    const emoji4 = option.emoji;
    if (emoji4 != null) {
      id1 = emoji4.id;
    }
  }
  let tmp79Result = null != id1;
  if (!tmp79Result) {
    let name2;
    if (option != null) {
      const emoji5 = option.emoji;
      if (emoji5 != null) {
        name2 = emoji5.name;
      }
    }
    tmp79Result = null != name2;
  }
  if (tmp79Result) {
    let obj5 = { style: { display: "flex", alignItems: "center" }, children: ref(tmp16Result, obj6) };
    obj6 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
    ({ optionTextEmoji: obj13.textEmojiStyle, optionImageEmoji: obj13.fastImageStyle } = tmp2);
    emojiURL = undefined;
    tmp16Result = selected(7439);
    const tmp80 = num;
    if (null != stateFromStores) {
      const obj7 = { id: null, animated: null, size };
      ({ id: obj15.id, animated: obj15.animated } = stateFromStores);
      const tmp16Result2 = selected(1411);
      emojiURL = tmp16Result2.getEmojiURL(obj7);
    }
    str = undefined;
    if (option != null) {
      const emoji6 = option.emoji;
      if (emoji6 != null) {
        str = emoji6.name;
      }
    }
    if (str == null) {
      str = "";
    }
    tmp79Result = tmp79(tmp80, obj5);
  }
  items19 = [tmp79Result, ];
  const obj8 = { style: tmp2.optionText, children: items20 };
  items20 = [, ];
  const obj9 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: option.title };
  items20[0] = ref(tmp3(5763).Text, obj9);
  let tmp85Result = null != option.description && option.description.length > 0;
  const tmp84 = num;
  if (tmp85Result) {
    const obj10 = { variant: "body-xs/medium", color: "text-default", children: option.description };
    tmp85Result = tmp85(tmp3(5763).Text, obj10);
  }
  items20[1] = tmp85Result;
  items19[1] = sharedValue(tmp84, obj8);
  items21 = [sharedValue(PressableOpacity, obj4), , , ];
  let tmp85Result2 = null;
  if (num > 0) {
    const obj11 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: items22, children: ref(Text, obj12) };
    items22 = [tmp2.roleCount, animatedStyle2];
    const View2 = tmp16(1652).View;
    obj12 = { variant: "body-xs/semibold", color: "text-overlay-light", children: intl.format(tmp3(1113).t.EgKsZA, obj14) };
    Text = tmp3(5763).Text;
    intl = tmp3(1113).intl;
    obj14 = { memberCount: num };
    tmp85Result2 = tmp85(View2, obj11);
  }
  items21[1] = tmp85Result2;
  const obj16 = { style: items23, children: ref(CheckmarkSmallIcon, obj17) };
  items23 = [tmp2.checkIcon, animatedStyle];
  const View3 = tmp16(1652).View;
  obj17 = { size: "xs", color: selected(575).colors.WHITE };
  CheckmarkSmallIcon = tmp3(7442).CheckmarkSmallIcon;
  items21[2] = ref(View3, obj16);
  if (canBeNew) {
    canBeNew = !selected;
  }
  if (canBeNew) {
    canBeNew = option.isUnseen;
  }
  if (canBeNew) {
    const obj18 = { color: tmp3(1187).BadgeColors.BRAND, text: intl2.string(tmp3(1113).t.y2b7CA), style: null, textStyle: null };
    const TextBadge = tmp3(1187).TextBadge;
    intl2 = tmp3(1113).intl;
    ({ newBadgeWrapper: obj24.style, newBadge: obj24.textStyle } = tmp2);
    canBeNew = tmp85(TextBadge, obj18);
  }
  items21[3] = canBeNew;
  return sharedValue(View, obj3);
};
