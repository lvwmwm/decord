// Module ID: 6547
// Function ID: 6548
// Name: GuildOnboardingPromptOptionButton
// Dependencies: [32, 19, 17, 4825, 5771, 1375, 21, 4566, 4836, 576, 504, 4837, 5280, 6548, 4541, 1115, 4531, 4548, 5435, 6551, 1397, 4832, 6554, 1177, 2]
// Exports: default

// Module 6547 (GuildOnboardingPromptOptionButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set;

let Easing;
let c10;
let c9;
let obj3;
let rect;
let size;
let View = react_native.View;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { duration: 200, easing: Easing.out(ReanimatedRexport.Easing.ease) };
Easing = ReanimatedRexport.Easing;
let createStyles = createStyles_mod;
let obj2 = { container: obj3, optionButton: { paddingVertical: 12, paddingHorizontal: 16, display: "flex", flexDirection: "row", alignItems: "center" }, optionTextEmoji: { fontSize: 24, lineHeight: 24, marginRight: 12, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24, marginRight: 12 }, optionText: { flexShrink: 1 }, checkIcon: size, newBadgeWrapper: { position: "absolute", top: -6, right: -6 }, newBadge: { fontWeight: "bold" }, roleCount: rect };
obj3 = { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 8 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: -6, right: -6, width: 20, height: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
rect = { position: "absolute", top: -6, right: 24, paddingVertical: 2, paddingHorizontal: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles(obj2);
let __initData = { code: "function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}" };
let closure_14 = { code: "function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};}" };
let closure_15 = { code: "function GuildOnboardingPromptOptionButtonTsx3(){const{withTiming,selected,SELECTION_TIMING}=this.__closure;return withTiming(selected?1:0,SELECTION_TIMING);}" };
let closure_16 = { code: "function GuildOnboardingPromptOptionButtonTsx4(){const{withTiming,isNew,SELECTION_TIMING}=this.__closure;return withTiming(isNew?1:0,SELECTION_TIMING);}" };
let closure_17 = { code: "function GuildOnboardingPromptOptionButtonTsx5(){const{interpolateColor,newProgress,unselectedBorderColor,newBorderColor,selectedProgress,selectedBorderColor,selectedBackgroundColor}=this.__closure;const currentUnselectedBorderColor=interpolateColor(newProgress.get(),[0,1],[unselectedBorderColor,newBorderColor]);return{borderColor:interpolateColor(selectedProgress.get(),[0,1],[currentUnselectedBorderColor,selectedBorderColor]),backgroundColor:interpolateColor(selectedProgress.get(),[0,1],['transparent',selectedBackgroundColor])};}" };
let closure_18 = { code: "function GuildOnboardingPromptOptionButtonTsx6(){const{useReducedMotion,scale}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx");

export default function PromptOptionButton(option) {
  let CheckmarkSmallIcon;
  let Text;
  let accessibilityRole;
  let accessibilityState;
  let canBeNew;
  let closure_13;
  let closure_8;
  let emojiURL;
  let intl;
  let intl2;
  let items10;
  let items11;
  let items12;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj18;
  let obj19;
  let obj21;
  let showMemberCount;
  let str;
  let tmp8Result;
  option = option.option;
  const selected = option.selected;
  ({ onSelect: dependencyMap, suppressMemberCount: _slicedToArray, canBeNew } = option);
  let closure_5;
  let num;
  showMemberCount = undefined;
  size = undefined;
  let closure_9;
  let ref;
  let sharedValue;
  closure_12 = undefined;
  __initData = undefined;
  let token;
  let token1;
  let token2;
  let token3;
  let derivedValue;
  let derivedValue1;
  const guildId = option.guildId;
  const tmp2 = closure_12();
  let tmp3 = option;
  obj = option(504);
  let items = [showMemberCount];
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
  let items1 = [num];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => num.useReducedMotion);
  let obj3 = option(4566);
  class R {
    constructor() {
      let Easing;
      let items;
      num = 0;
      if (selected) {
        num = 1;
      }
      obj = { duration: 150, easing: Easing.out(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      let num2 = 0.7;
      const withTimingResult = withTiming(num, obj);
      if (selected) {
        num2 = 1;
      }
      let withSequenceResult = num2;
      const obj2 = { opacity: withTimingResult, transform: items };
      if (!stateFromStores1) {
        const withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const tmp2Result3 = spring;
        const withSpringResult = tmp2Result3.withSpring(1.2 * num2, { stiffness: 80, damping: 6, mass: 0.3 });
        const tmp2Result4 = spring;
        withSequenceResult = withSequence(withSpringResult, tmp2Result4.withSpring(num2, { stiffness: 80, damping: 6, mass: 0.3 }));
      }
      items = [{ scale: withSequenceResult }];
      return obj2;
    }
  }
  let obj4 = { selected, withTiming: option(4837).withTiming, Easing: option(4566).Easing, useReducedMotion: stateFromStores1, withSequence: option(4566).withSequence, withSpring: option(5280).withSpring };
  R.__closure = obj4;
  R.__workletHash = 8281627194581;
  R.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(R);
  const tmp9 = selected(6548)(guildId);
  closure_5 = tmp9;
  num = 0;
  if (null != tmp9) {
    num = 0;
    if (null != option.roleIds) {
      const _Math = Math;
      const roleIds = option.roleIds;
      let items2 = [];
      let num2 = 0;
      HermesBuiltin.arraySpread(items2, roleIds.map((item) => closure_5[item]), 0);
      const _Math2 = Math;
      num = HermesBuiltin.apply(max, items2, Math);
    }
  }
  [showMemberCount, size] = stateFromStores1.useState(false);
  closure_9 = stateFromStores1.useRef(null);
  const items3 = [showMemberCount];
  const effect = stateFromStores1.useEffect(() => {
    if (first) {
      const tmp = ref;
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_8(false);
        ref.current = null;
      }, 3000);
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.current);
        }
      };
    }
  }, items3);
  ref = stateFromStores1.useRef(false);
  const items4 = [showMemberCount, num];
  const effect1 = stateFromStores1.useEffect(() => {
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
  }, items4);
  const tmp15 = stateFromStores1;
  const tmp3Result = tmp3(4566);
  class V {
    constructor() {
      let Easing;
      let Easing2;
      let items;
      num = 0;
      if (first) {
        num = 1;
      }
      let num2 = 0;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      if (first) {
        num2 = 400;
      }
      obj = { duration: 150, easing: Easing.out(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = tmp2(4566).Easing;
      let num3 = 16;
      const withDelayResult = withDelay(num2, withTiming(num, obj));
      if (first) {
        num3 = 0;
      }
      let withDelay2Result = num3;
      const obj2 = { opacity: withDelayResult, transform: items };
      if (!stateFromStores1) {
        let num4 = 0;
        const withDelay2 = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        if (first) {
          num4 = 400;
        }
        const obj3 = { duration: 200, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
        const withTiming2 = timing.withTiming;
        timing;
        Easing2 = tmp2(4566).Easing;
        withDelay2Result = withDelay2(num4, withTiming2(num3, obj3));
      }
      items = [{ translateX: withDelay2Result }];
      return obj2;
    }
  }
  let obj5 = { showMemberCount, withDelay: tmp3(4566).withDelay, withTiming: tmp3(4837).withTiming, Easing: tmp3(4566).Easing, useReducedMotion: stateFromStores1 };
  V.__closure = obj5;
  V.__workletHash = 9518487706997;
  V.__initData = token;
  const animatedStyle1 = tmp3Result.useAnimatedStyle(V);
  const tmp3Result11 = tmp3(4566);
  sharedValue = tmp3Result11.useSharedValue(1);
  closure_12 = tmp22;
  let id;
  if (option != null) {
    let emoji = option.emoji;
    if (emoji != null) {
      id = emoji.id;
    }
  }
  let tmp24 = null != id;
  if (!tmp24) {
    let name;
    if (option != null) {
      let emoji2 = option.emoji;
      if (emoji2 != null) {
        name = emoji2.name;
      }
    }
    tmp24 = null != name;
  }
  __initData = tmp24;
  const items5 = [tmp24, , , ];
  const emoji3 = option.emoji;
  let name1;
  const useMemo = tmp15.useMemo;
  if (emoji3 != null) {
    name1 = emoji3.name;
  }
  items5[1] = name1;
  ({ title: arr7[2], description: arr7[3] } = option);
  const memo = useMemo(() => {
    if (closure_13) {
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
  }, items5);
  const tmp3Result12 = tmp3(4531);
  token = tmp3Result12.useToken(tmp8(576).colors.BORDER_SUBTLE);
  const tmp3Result13 = tmp3(4531);
  token1 = tmp3Result13.useToken(tmp8(576).colors.BACKGROUND_BRAND);
  const tmp3Result14 = tmp3(4531);
  token2 = tmp3Result14.useToken(tmp8(576).colors.BORDER_STRONG);
  const tmp3Result15 = tmp3(4531);
  token3 = tmp3Result15.useToken(tmp8(576).colors.BACKGROUND_BASE_LOWEST);
  const fn = function q() {
    num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (selected) {
      num = 1;
    }
    return withTiming(num, obj);
  };
  const tmp3Result16 = tmp3(4566);
  fn.__closure = { withTiming: tmp3(4837).withTiming, selected, SELECTION_TIMING: sharedValue };
  fn.__workletHash = 11553377214675;
  fn.__initData = token1;
  ({ withTiming: tmp3(4837).withTiming, selected, SELECTION_TIMING: sharedValue });
  derivedValue = tmp3Result16.useDerivedValue(fn);
  const fn2 = function z() {
    num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (closure_12) {
      num = 1;
    }
    return withTiming(num, obj);
  };
  const tmp3Result17 = tmp3(4566);
  fn2.__closure = { withTiming: tmp3(4837).withTiming, isNew: canBeNew && option.isUnseen, SELECTION_TIMING: sharedValue };
  fn2.__workletHash = 9359578148244;
  fn2.__initData = token2;
  ({ withTiming: tmp3(4837).withTiming, isNew: canBeNew && option.isUnseen, SELECTION_TIMING: sharedValue });
  derivedValue1 = tmp3Result17.useDerivedValue(fn2);
  const tmp3Result18 = tmp3(4566);
  class W {
    constructor() {
      let items1;
      let items2;
      let obj3;
      let obj4;
      const items = [token, token1];
      const obj2 = { borderColor: obj3.interpolateColor(derivedValue.get(), [0, 1], items1), backgroundColor: obj4.interpolateColor(derivedValue.get(), [0, 1], items2) };
      obj = ReanimatedRexport;
      items1 = [obj.interpolateColor(derivedValue1.get(), [0, 1], items), token2];
      const interpolateColorResult = obj.interpolateColor(derivedValue1.get(), [0, 1], items);
      items2 = ["transparent", token3];
      obj3 = ReanimatedRexport;
      obj4 = ReanimatedRexport;
      return obj2;
    }
  }
  W.__closure = { interpolateColor: tmp3(4566).interpolateColor, newProgress: derivedValue1, unselectedBorderColor: token, newBorderColor: token1, selectedProgress: derivedValue, selectedBorderColor: token2, selectedBackgroundColor: token3 };
  W.__workletHash = 1340353593596;
  W.__initData = token3;
  ({ interpolateColor: tmp3(4566).interpolateColor, newProgress: derivedValue1, unselectedBorderColor: token, newBorderColor: token1, selectedProgress: derivedValue, selectedBorderColor: token2, selectedBackgroundColor: token3 });
  const animatedStyle2 = tmp3Result18.useAnimatedStyle(W);
  const tmp3Result19 = tmp3(4566);
  class K {
    constructor() {
      let items;
      const tmp = stateFromStores1;
      if (tmp) {
        obj = {};
      } else {
        obj = { transform: items };
        items = [{ scale: sharedValue.get() }];
        const obj2 = { scale: sharedValue.get() };
      }
      return obj;
    }
  }
  K.__closure = { useReducedMotion: stateFromStores1, scale: sharedValue };
  K.__workletHash = 11083046243451;
  K.__initData = derivedValue;
  const animatedStyle3 = tmp3Result19.useAnimatedStyle(K);
  const tmp3Result20 = tmp3(4548);
  const checkboxA11yNative = tmp3Result20.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj9 = { style: items6, children: items10 };
  items6 = [tmp2.container, animatedStyle3, animatedStyle2];
  View = tmp8(4566).View;
  const obj10 = {
    activeOpacity: 0.6,
    style: items7,
    onPress() {
      dependencyMap(!selected);
      const tmp = selected;
      const tmp3 = _slicedToArray;
      if (!tmp3) {
        closure_8(!tmp);
      }
    },
    onPressIn() {
      let Easing;
      set = sharedValue.set;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      obj = timing;
      const withTimingResult = obj.withTiming(1, { duration: 0 });
      const obj2 = { duration: 200, easing: Easing.out(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withSequence(withTimingResult, withTiming(1.02, obj2)));
    },
    onPressOut() {
      let Easing;
      set = sharedValue.set;
      obj = { duration: 100, easing: Easing.out(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withTiming(1, obj));
    },
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: memo,
    children: items8
  };
  items7 = [tmp2.optionButton];
  let id1;
  const PressableOpacity = tmp3(5435).PressableOpacity;
  if (option != null) {
    const emoji4 = option.emoji;
    if (emoji4 != null) {
      id1 = emoji4.id;
    }
  }
  let tmp41Result = null != id1;
  if (!tmp41Result) {
    let name2;
    if (option != null) {
      const emoji5 = option.emoji;
      if (emoji5 != null) {
        name2 = emoji5.name;
      }
    }
    tmp41Result = null != name2;
  }
  if (tmp41Result) {
    const obj11 = { style: { display: "flex", alignItems: "center" }, children: closure_9(tmp8Result, obj12) };
    obj12 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
    ({ optionTextEmoji: obj23.textEmojiStyle, optionImageEmoji: obj23.fastImageStyle } = tmp2);
    emojiURL = undefined;
    const tmp42 = closure_5;
    tmp8Result = selected(6551);
    if (null != stateFromStores) {
      const obj13 = { id: null, animated: null, size };
      ({ id: obj25.id, animated: obj25.animated } = stateFromStores);
      const tmp8Result2 = selected(1397);
      emojiURL = tmp8Result2.getEmojiURL(obj13);
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
    tmp41Result = tmp41(tmp42, obj11);
  }
  items8 = [tmp41Result, ];
  const obj14 = { style: tmp2.optionText, children: items9 };
  items9 = [, ];
  const obj15 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: option.title };
  items9[0] = closure_9(tmp3(4832).Text, obj15);
  let tmp47Result = null != option.description && option.description.length > 0;
  const tmp46 = closure_5;
  if (tmp47Result) {
    const obj16 = { variant: "text-xs/medium", color: "text-default", children: option.description };
    tmp47Result = tmp47(tmp3(4832).Text, obj16);
  }
  items9[1] = tmp47Result;
  items8[1] = ref(tmp46, obj14);
  items10 = [ref(PressableOpacity, obj10), , , ];
  let tmp47Result2 = null;
  if (num > 0) {
    const obj17 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: items11, children: closure_9(Text, obj18) };
    items11 = [tmp2.roleCount, animatedStyle1];
    const View2 = tmp8(4566).View;
    obj18 = { variant: "text-xs/semibold", color: "text-overlay-light", children: intl.format(tmp3(1115).t.EgKsZA, obj19) };
    Text = tmp3(4832).Text;
    intl = tmp3(1115).intl;
    obj19 = { memberCount: num };
    tmp47Result2 = tmp47(View2, obj17);
  }
  items10[1] = tmp47Result2;
  const obj20 = { style: items12, children: closure_9(CheckmarkSmallIcon, obj21) };
  items12 = [tmp2.checkIcon, animatedStyle];
  const View3 = tmp8(4566).View;
  obj21 = { size: "xs", color: selected(576).colors.WHITE };
  CheckmarkSmallIcon = tmp3(6554).CheckmarkSmallIcon;
  items10[2] = closure_9(View3, obj20);
  if (canBeNew) {
    canBeNew = !selected;
  }
  if (canBeNew) {
    canBeNew = option.isUnseen;
  }
  if (canBeNew) {
    const obj22 = { color: tmp3(1177).BadgeColors.BRAND, text: intl2.string(tmp3(1115).t.y2b7CA), style: null, textStyle: null };
    const TextBadge = tmp3(1177).TextBadge;
    intl2 = tmp3(1115).intl;
    ({ newBadgeWrapper: obj34.style, newBadge: obj34.textStyle } = tmp2);
    canBeNew = tmp47(TextBadge, obj22);
  }
  items10[3] = canBeNew;
  return ref(View, obj9);
};
