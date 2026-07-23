// Module ID: 5147
// Function ID: 44876
// Name: PromptOptionButton
// Dependencies: [57, 31, 27, 4122, 4991, 1852, 33, 4130, 689, 566, 3991, 4131, 4542, 5148, 3843, 1212, 3834, 3848, 4660, 5151, 1392, 4126, 5154, 1273, 2]
// Exports: default

// Module 5147 (PromptOptionButton)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 2, borderStyle: "solid", marginBottom: 8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.optionButton = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.optionTextEmoji = { fontSize: 24, lineHeight: 24, marginRight: 12, paddingTop: 5 };
_createForOfIteratorHelperLoose.optionImageEmoji = { height: 24, width: 24, marginRight: 12 };
_createForOfIteratorHelperLoose.optionText = { flexShrink: 1 };
let obj1 = { position: "absolute", top: -6, right: -6, width: 20, height: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.checkIcon = obj1;
_createForOfIteratorHelperLoose.newBadgeWrapper = { position: "absolute", top: -6, right: -6 };
_createForOfIteratorHelperLoose.newBadge = { fontWeight: "bold" };
let obj2 = { position: "absolute", top: -6, right: 24, paddingVertical: 2, paddingHorizontal: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.roleCount = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { code: "function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}" };
let closure_13 = { code: "function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};}" };
let closure_14 = { code: "function GuildOnboardingPromptOptionButtonTsx3(){const{useReducedMotion,Easing,withTiming,selected,selectedBorderColor,isNew,unselectedBrandBorderColor,unselectedBorderColor,selectedBackgroundColor}=this.__closure;const timing=useReducedMotion?{duration:0}:{duration:200,easing:Easing.out(Easing.ease)};return{borderColor:withTiming(selected?selectedBorderColor:isNew?unselectedBrandBorderColor:unselectedBorderColor,timing),backgroundColor:withTiming(selected?selectedBackgroundColor:'transparent',timing)};}" };
let closure_15 = { code: "function GuildOnboardingPromptOptionButtonTsx4(){const{useReducedMotion,scale}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx");

export default function PromptOptionButton(option) {
  let accessibilityRole;
  let accessibilityState;
  let canBeNew;
  let _slicedToArray;
  let dependencyMap;
  option = option.option;
  const selected = option.selected;
  ({ onSelect: dependencyMap, suppressMemberCount: _slicedToArray, canBeNew } = option);
  let num;
  let first;
  let closure_8;
  let callback2;
  let closure_10;
  let sharedValue;
  let isUnseen;
  let c13;
  let token;
  let token1;
  let token2;
  let token3;
  const tmp = sharedValue();
  let obj = option(566);
  let items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (null != option) {
      const emoji = option.emoji;
      if (null != emoji) {
        id = emoji.id;
      }
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      let id1;
      if (null != option) {
        const emoji2 = option.emoji;
        if (null != emoji2) {
          id1 = emoji2.id;
        }
      }
      usableCustomEmojiById = first.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  let obj1 = option(566);
  const items1 = [num];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => num.useReducedMotion);
  let obj2 = option(3991);
  class D {
    constructor() {
      num = 0;
      if (selected) {
        num = 1;
      }
      obj = option(onSelect[11]);
      obj = { duration: 150 };
      Easing = option(onSelect[10]).Easing;
      obj.easing = Easing.out(option(onSelect[10]).Easing.ease);
      num2 = 0.7;
      withTimingResult = obj.withTiming(num, obj);
      if (selected) {
        num2 = 1;
      }
      obj1 = { opacity: withTimingResult };
      obj2 = {};
      withSequenceResult = num2;
      if (!result) {
        tmp3 = option;
        tmp4 = onSelect;
        obj5 = option(onSelect[10]);
        num3 = 12;
        obj6 = option(onSelect[12]);
        num4 = 1.2;
        withSpringResult = obj6.withSpring(1.2 * num2, { stiffness: 80, damping: 6, mass: 0.3 });
        obj7 = option(onSelect[12]);
        withSequenceResult = obj5.withSequence(withSpringResult, obj7.withSpring(num2, { stiffness: 80, damping: 6, mass: 0.3 }));
      }
      obj2.scale = withSequenceResult;
      items = [];
      items[0] = obj2;
      obj1.transform = items;
      return obj1;
    }
  }
  obj = { selected, withTiming: option(4131).withTiming, Easing: option(3991).Easing, useReducedMotion: stateFromStores1, withSequence: option(3991).withSequence, withSpring: option(4542).withSpring };
  D.__closure = obj;
  D.__workletHash = 8281627194581;
  D.__initData = isUnseen;
  const animatedStyle = obj2.useAnimatedStyle(D);
  const tmp5 = selected(5148)(option.guildId);
  const View = tmp5;
  num = 0;
  if (null != tmp5) {
    num = 0;
    if (null != option.roleIds) {
      const _Math = Math;
      const roleIds = option.roleIds;
      const items2 = [];
      HermesBuiltin.arraySpread(roleIds.map((arg0) => tmp5[arg0]), 0);
      const _Math2 = Math;
      num = HermesBuiltin.apply(items2, Math);
    }
  }
  const tmp11 = callback(stateFromStores1.useState(false), 2);
  first = tmp11[0];
  closure_8 = tmp11[1];
  callback2 = stateFromStores1.useRef(null);
  const items3 = [first];
  const effect = stateFromStores1.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      closure_9.current = setTimeout(() => {
        outer1_8(false);
        outer1_9.current = null;
      }, 3000);
      return () => {
        if (null != outer1_9.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(outer1_9.current);
        }
      };
    }
  }, items3);
  closure_10 = stateFromStores1.useRef(false);
  const items4 = [first, num];
  const effect1 = stateFromStores1.useEffect(() => {
    if (first) {
      if (!ref.current) {
        if (0 > 0) {
          const AccessibilityAnnouncer = option(outer1_2[14]).AccessibilityAnnouncer;
          const intl = option(outer1_2[15]).intl;
          const obj = { memberCount: num };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(option(outer1_2[15]).t.iyXfAn, obj), "polite");
          ref.current = true;
        }
      }
    }
    if (!first) {
      ref.current = false;
    }
  }, items4);
  let obj4 = option(3991);
  class L {
    constructor() {
      num = 0;
      if (c7) {
        num = 1;
      }
      obj = option(onSelect[10]);
      num2 = 0;
      if (c7) {
        num2 = 400;
      }
      obj2 = option(onSelect[11]);
      obj = { duration: 150 };
      Easing = option(onSelect[10]).Easing;
      obj.easing = Easing.out(option(onSelect[10]).Easing.ease);
      num3 = 16;
      withDelayResult = obj.withDelay(num2, obj2.withTiming(num, obj));
      if (c7) {
        num3 = 0;
      }
      obj1 = { opacity: withDelayResult };
      obj2 = {};
      withDelayResult1 = num3;
      if (!result) {
        tmp3 = option;
        tmp4 = onSelect;
        obj6 = option(onSelect[10]);
        tmp5 = c7;
        num4 = 0;
        if (c7) {
          num4 = 400;
        }
        tmp6 = option;
        tmp7 = onSelect;
        obj7 = option(onSelect[11]);
        obj3 = {};
        num5 = 200;
        obj3.duration = 200;
        Easing2 = option(onSelect[10]).Easing;
        obj3.easing = Easing2.out(option(onSelect[10]).Easing.ease);
        withDelayResult1 = obj6.withDelay(num4, obj7.withTiming(num3, obj3));
      }
      obj2.translateX = withDelayResult1;
      items = [];
      items[0] = obj2;
      obj1.transform = items;
      return obj1;
    }
  }
  obj = { showMemberCount: first, withDelay: option(3991).withDelay, withTiming: option(4131).withTiming, Easing: option(3991).Easing, useReducedMotion: stateFromStores1 };
  L.__closure = obj;
  L.__workletHash = 9518487706997;
  L.__initData = c13;
  const animatedStyle1 = obj4.useAnimatedStyle(L);
  let obj6 = option(3991);
  sharedValue = obj6.useSharedValue(1);
  isUnseen = canBeNew;
  if (canBeNew) {
    isUnseen = option.isUnseen;
  }
  let id;
  if (null != option) {
    let emoji = option.emoji;
    if (null != emoji) {
      id = emoji.id;
    }
  }
  let tmp18 = null != id;
  if (!tmp18) {
    let name;
    if (null != option) {
      let emoji2 = option.emoji;
      if (null != emoji2) {
        name = emoji2.name;
      }
    }
    tmp18 = null != name;
  }
  c13 = tmp18;
  const items5 = [tmp18, , , ];
  const emoji3 = option.emoji;
  let name1;
  if (null != emoji3) {
    name1 = emoji3.name;
  }
  items5[1] = name1;
  ({ title: arr7[2], description: arr7[3] } = option);
  const memo = stateFromStores1.useMemo(() => {
    if (c13) {
      const emoji = tmp.emoji;
      let name;
      if (null != emoji) {
        name = emoji.name;
      }
      let str2 = "";
      if (null != name) {
        str2 = name;
      }
      const replaced = str2.replace(/^:|:$/g, "");
      if (null != option.description) {
        if (option.description.length > 0) {
          const intl3 = option(outer1_2[15]).intl;
          let obj = { emojiName: replaced };
          ({ title: obj3.title, description: obj3.description } = option);
          let formatToPlainStringResult = intl3.formatToPlainString(option(outer1_2[15]).t.nSzqkg, obj);
        }
        return formatToPlainStringResult;
      }
      const intl2 = option(outer1_2[15]).intl;
      obj = { emojiName: replaced, title: option.title };
      formatToPlainStringResult = intl2.formatToPlainString(option(outer1_2[15]).t.rBPpAN, obj);
    } else {
      if (null != tmp.description) {
        if (option.description.length > 0) {
          const intl = option(outer1_2[15]).intl;
          obj = {};
          ({ title: obj.title, description: obj.description } = option);
          let title = intl.formatToPlainString(option(outer1_2[15]).t.U4lDOC, obj);
        }
        return title;
      }
      title = option.title;
    }
  }, items5);
  let obj7 = option(3834);
  token = obj7.useToken(selected(689).colors.BACKGROUND_BRAND);
  let obj8 = option(3834);
  token1 = obj8.useToken(selected(689).colors.BORDER_SUBTLE);
  let obj9 = option(3834);
  token2 = obj9.useToken(selected(689).colors.BORDER_STRONG);
  let obj10 = option(3834);
  token3 = obj10.useToken(selected(689).colors.BACKGROUND_BASE_LOWEST);
  let obj11 = option(3991);
  class X {
    constructor() {
      if (result) {
        obj = {};
        num3 = 0;
        obj.duration = 0;
      } else {
        obj = {};
        num = 200;
        obj.duration = 200;
        tmp = option;
        tmp2 = onSelect;
        num2 = 10;
        Easing = option(onSelect[10]).Easing;
        obj.easing = Easing.out(option(onSelect[10]).Easing.ease);
      }
      obj1 = {};
      obj4 = option(onSelect[11]);
      if (selected) {
        tmp4 = c16;
      } else {
        tmp3 = isUnseen;
        tmp4 = isUnseen ? c14 : c15;
      }
      obj1.borderColor = obj4.withTiming(tmp4, obj);
      obj5 = option(onSelect[11]);
      str = "transparent";
      if (selected) {
        str = c17;
      }
      obj1.backgroundColor = obj5.withTiming(str, obj);
      return obj1;
    }
  }
  obj1 = { useReducedMotion: stateFromStores1, Easing: option(3991).Easing, withTiming: option(4131).withTiming, selected, selectedBorderColor: token2, isNew: isUnseen, unselectedBrandBorderColor: token, unselectedBorderColor: token1, selectedBackgroundColor: token3 };
  X.__closure = obj1;
  X.__workletHash = 17180171486485;
  X.__initData = token;
  const animatedStyle2 = obj11.useAnimatedStyle(X);
  let obj13 = option(3991);
  class F {
    constructor() {
      if (result) {
        obj = {};
      } else {
        obj = {};
        obj = {};
        tmp = c11;
        obj.scale = c11.get();
        items = [];
        items[0] = obj;
        obj.transform = items;
      }
      return obj;
    }
  }
  F.__closure = { useReducedMotion: stateFromStores1, scale: sharedValue };
  F.__workletHash = 319662489785;
  F.__initData = token1;
  const animatedStyle3 = obj13.useAnimatedStyle(F);
  let obj14 = option(3848);
  const checkboxA11yNative = obj14.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj2 = { style: items6 };
  items6 = [animatedStyle3, animatedStyle2, tmp.container];
  const obj3 = {
    activeOpacity: 0.6,
    style: items7,
    onPress() {
      callback(!selected);
      if (!_slicedToArray) {
        callback2(!selected);
      }
    },
    onPressIn() {
      let obj = option(outer1_2[10]);
      const obj2 = option(outer1_2[11]);
      const withTimingResult = option(outer1_2[11]).withTiming(1, { duration: 0 });
      obj = { duration: 200 };
      const Easing = option(outer1_2[10]).Easing;
      obj.easing = Easing.out(option(outer1_2[10]).Easing.ease);
      const result = sharedValue.set(obj.withSequence(withTimingResult, option(outer1_2[11]).withTiming(1.02, obj)));
    },
    onPressOut() {
      let obj = option(outer1_2[11]);
      obj = { duration: 100 };
      const Easing = option(outer1_2[10]).Easing;
      obj.easing = Easing.out(option(outer1_2[10]).Easing.ease);
      const result = sharedValue.set(obj.withTiming(1, obj));
    },
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: memo
  };
  items7 = [tmp.optionButton];
  let id1;
  if (null != option) {
    const emoji4 = option.emoji;
    if (null != emoji4) {
      id1 = emoji4.id;
    }
  }
  let tmp34Result = null != id1;
  if (!tmp34Result) {
    let name2;
    if (null != option) {
      const emoji5 = option.emoji;
      if (null != emoji5) {
        name2 = emoji5.name;
      }
    }
    tmp34Result = null != name2;
  }
  if (tmp34Result) {
    obj4 = { style: { display: "flex", alignItems: "center" } };
    let obj5 = {};
    ({ optionTextEmoji: obj19.textEmojiStyle, optionImageEmoji: obj19.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      obj6 = {};
      ({ id: obj21.id, animated: obj21.animated } = stateFromStores);
      obj6.size = closure_8;
      emojiURL = selected(1392).getEmojiURL(obj6);
      const obj20 = selected(1392);
    }
    obj5.src = emojiURL;
    let name3;
    if (null != option) {
      const emoji6 = option.emoji;
      if (null != emoji6) {
        name3 = emoji6.name;
      }
    }
    let str = "";
    if (null != name3) {
      str = name3;
    }
    obj5.name = str;
    obj4.children = callback2(selected(5151), obj5);
    tmp34Result = tmp34(View, obj4);
    const tmp35 = View;
    const tmp38 = selected(5151);
  }
  const items8 = [tmp34Result, ];
  obj7 = { style: tmp.optionText };
  obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: option.title };
  const items9 = [callback2(option(4126).Text, obj8), ];
  let tmp46 = null != option.description && option.description.length > 0;
  if (tmp46) {
    obj9 = { variant: "text-xs/medium", color: "text-default", children: option.description };
    tmp46 = callback2(option(4126).Text, obj9);
  }
  items9[1] = tmp46;
  obj7.children = items9;
  items8[1] = closure_10(View, obj7);
  obj3.children = items8;
  const items10 = [closure_10(option(4660).PressableOpacity, obj3), , , ];
  let tmp50 = null;
  if (num > 0) {
    obj10 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true };
    const items11 = [tmp.roleCount, animatedStyle1];
    obj10.style = items11;
    obj11 = { variant: "text-xs/semibold", color: "text-overlay-light" };
    let intl = option(1212).intl;
    const obj12 = { memberCount: num };
    obj11.children = intl.format(option(1212).t.EgKsZA, obj12);
    obj10.children = callback2(option(4126).Text, obj11);
    tmp50 = callback2(selected(3991).View, obj10);
  }
  items10[1] = tmp50;
  obj13 = { style: items12 };
  items12 = [tmp.checkIcon, animatedStyle];
  obj14 = { size: "xs", color: selected(689).colors.WHITE };
  obj13.children = callback2(option(5154).CheckmarkSmallIcon, obj14);
  items10[2] = callback2(selected(3991).View, obj13);
  if (canBeNew) {
    canBeNew = !selected;
  }
  if (canBeNew) {
    canBeNew = option.isUnseen;
  }
  if (canBeNew) {
    const obj15 = { color: option(1273).BadgeColors.BRAND };
    let intl2 = option(1212).intl;
    obj15.text = intl2.string(option(1212).t.y2b7CA);
    ({ newBadgeWrapper: obj30.style, newBadge: obj30.textStyle } = tmp);
    canBeNew = callback2(option(1273).TextBadge, obj15);
  }
  items10[3] = canBeNew;
  obj2.children = items10;
  return closure_10(selected(3991).View, obj2);
};
