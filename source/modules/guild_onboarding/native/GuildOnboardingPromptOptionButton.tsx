// Module ID: 5414
// Function ID: 46436
// Name: PromptOptionButton
// Dependencies: []
// Exports: default

// Module 5414 (PromptOptionButton)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[5]).EMOJI_URL_BASE_SIZE;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { debugger: true, stringify: true, showVoiceSettingsActionSheet: true, maybeOpenAgeGateForVoiceChannel: true, borderRadius: importDefault(dependencyMap[8]).radii.md };
obj.container = obj;
obj.optionButton = { paddingHorizontal: "166185917b52ede00e3e20d3f1f7faeb", accessible: "CheckmarkSmallIcon", BILLING_SUBSCRIPTION: "png", GameDepthTier1SmallBadge: 24, UMWBZr: 24 };
obj.optionTextEmoji = { numberOfLines: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288229756056495, ellipsizeMode: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009532402967, accessible: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008487983168, accessibilityRole: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200995461696194 };
obj.optionImageEmoji = {};
obj.optionText = { flexShrink: 1 };
const tmp2 = arg1(dependencyMap[6]);
obj.checkIcon = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj.newBadgeWrapper = {};
obj.newBadge = { fontWeight: "bold" };
const obj2 = { "Bool(false)": "Bluesky", "Bool(false)": null, "Bool(false)": true, "Bool(false)": null, "Bool(false)": true, "Bool(false)": true, "Bool(false)": 10, "Bool(false)": "trigger", "Bool(false)": "boolean", "Bool(false)": "color", backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj.roleCount = obj2;
let closure_11 = obj.createStyles(obj);
let closure_12 = { code: "function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}" };
let closure_13 = { code: "function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};}" };
let closure_14 = { code: "function GuildOnboardingPromptOptionButtonTsx3(){const{useReducedMotion,Easing,withTiming,selected,selectedBorderColor,isNew,unselectedBrandBorderColor,unselectedBorderColor,selectedBackgroundColor}=this.__closure;const timing=useReducedMotion?{duration:0}:{duration:200,easing:Easing.out(Easing.ease)};return{borderColor:withTiming(selected?selectedBorderColor:isNew?unselectedBrandBorderColor:unselectedBorderColor,timing),backgroundColor:withTiming(selected?selectedBackgroundColor:'transparent',timing)};}" };
let closure_15 = { code: "function GuildOnboardingPromptOptionButtonTsx4(){const{useReducedMotion,scale}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};}" };
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx");

export default function PromptOptionButton(option) {
  let accessibilityRole;
  let accessibilityState;
  let canBeNew;
  option = option.option;
  const arg1 = option;
  const selected = option.selected;
  const importDefault = selected;
  ({ onSelect: closure_2, suppressMemberCount: closure_3, canBeNew } = option);
  let closure_6;
  let closure_7;
  let closure_8;
  let callback2;
  let closure_10;
  let callback3;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let token2;
  let token3;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
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
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => num.useReducedMotion);
  const React = stateFromStores1;
  let obj2 = arg1(dependencyMap[10]);
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
      if (!closure_4) {
        tmp3 = option;
        tmp4 = onSelect;
        obj5 = option(onSelect[10]);
        num3 = 12;
        obj6 = option(onSelect[12]);
        num4 = 1.2;
        withSpringResult = obj6.withSpring(1.2 * num2, {});
        obj7 = option(onSelect[12]);
        withSequenceResult = obj5.withSequence(withSpringResult, obj7.withSpring(num2, {}));
      }
      obj2.scale = withSequenceResult;
      items = [];
      items[0] = obj2;
      obj1.transform = items;
      return obj1;
    }
  }
  obj = { selected, withTiming: arg1(dependencyMap[11]).withTiming, Easing: arg1(dependencyMap[10]).Easing, useReducedMotion: stateFromStores1, withSequence: arg1(dependencyMap[10]).withSequence, withSpring: arg1(dependencyMap[12]).withSpring };
  D.__closure = obj;
  D.__workletHash = 8281627194581;
  D.__initData = closure_12;
  const animatedStyle = obj2.useAnimatedStyle(D);
  const tmp5 = importDefault(dependencyMap[13])(option.guildId);
  const View = tmp5;
  let num = 0;
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
  closure_6 = num;
  const tmp11 = callback(React.useState(false), 2);
  const first = tmp11[0];
  closure_7 = first;
  closure_8 = tmp11[1];
  callback2 = React.useRef(null);
  const items3 = [first];
  const effect = React.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      closure_9.current = setTimeout(() => {
        callback(false);
        closure_9.current = null;
      }, 3000);
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
      };
    }
  }, items3);
  closure_10 = React.useRef(false);
  const items4 = [first, num];
  const effect1 = React.useEffect(() => {
    if (first) {
      if (!ref.current) {
        if (0 > 0) {
          const AccessibilityAnnouncer = option(closure_2[14]).AccessibilityAnnouncer;
          const intl = option(closure_2[15]).intl;
          const obj = { memberCount: num };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(option(closure_2[15]).t.iyXfAn, obj), "polite");
          ref.current = true;
        }
      }
    }
    if (!first) {
      ref.current = false;
    }
  }, items4);
  let obj4 = arg1(dependencyMap[10]);
  class L {
    constructor() {
      num = 0;
      if (closure_7) {
        num = 1;
      }
      obj = option(onSelect[10]);
      num2 = 0;
      if (closure_7) {
        num2 = 400;
      }
      obj2 = option(onSelect[11]);
      obj = { duration: 150 };
      Easing = option(onSelect[10]).Easing;
      obj.easing = Easing.out(option(onSelect[10]).Easing.ease);
      num3 = 16;
      withDelayResult = obj.withDelay(num2, obj2.withTiming(num, obj));
      if (closure_7) {
        num3 = 0;
      }
      obj1 = { opacity: withDelayResult };
      obj2 = {};
      withDelayResult1 = num3;
      if (!closure_4) {
        tmp3 = option;
        tmp4 = onSelect;
        obj6 = option(onSelect[10]);
        tmp5 = closure_7;
        num4 = 0;
        if (closure_7) {
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
  obj = { showMemberCount: first, withDelay: arg1(dependencyMap[10]).withDelay, withTiming: arg1(dependencyMap[11]).withTiming, Easing: arg1(dependencyMap[10]).Easing, useReducedMotion: stateFromStores1 };
  L.__closure = obj;
  L.__workletHash = 9518487706997;
  L.__initData = closure_13;
  const animatedStyle1 = obj4.useAnimatedStyle(L);
  let obj6 = arg1(dependencyMap[10]);
  const sharedValue = obj6.useSharedValue(1);
  callback3 = sharedValue;
  let isUnseen = canBeNew;
  if (canBeNew) {
    isUnseen = option.isUnseen;
  }
  closure_12 = isUnseen;
  let id;
  if (null != option) {
    const emoji = option.emoji;
    if (null != emoji) {
      id = emoji.id;
    }
  }
  let tmp18 = null != id;
  if (!tmp18) {
    let name;
    if (null != option) {
      const emoji2 = option.emoji;
      if (null != emoji2) {
        name = emoji2.name;
      }
    }
    tmp18 = null != name;
  }
  closure_13 = tmp18;
  const items5 = [tmp18, , , ];
  const emoji3 = option.emoji;
  let name1;
  if (null != emoji3) {
    name1 = emoji3.name;
  }
  items5[1] = name1;
  ({ title: arr7[2], description: arr7[3] } = option);
  const memo = React.useMemo(() => {
    if (tmp18) {
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
          const intl3 = option(closure_2[15]).intl;
          let obj = { emojiName: replaced };
          ({ title: obj3.title, description: obj3.description } = option);
          let formatToPlainStringResult = intl3.formatToPlainString(option(closure_2[15]).t.nSzqkg, obj);
          const tmp18 = closure_2;
        }
        return formatToPlainStringResult;
      }
      const intl2 = option(closure_2[15]).intl;
      obj = { emojiName: replaced, title: option.title };
      formatToPlainStringResult = intl2.formatToPlainString(option(closure_2[15]).t.rBPpAN, obj);
    } else {
      if (null != tmp.description) {
        if (option.description.length > 0) {
          const intl = option(closure_2[15]).intl;
          obj = {};
          ({ title: obj.title, description: obj.description } = option);
          let title = intl.formatToPlainString(option(closure_2[15]).t.U4lDOC, obj);
        }
        return title;
      }
      title = option.title;
    }
  }, items5);
  let obj7 = arg1(dependencyMap[16]);
  const token = obj7.useToken(importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND);
  closure_14 = token;
  let obj8 = arg1(dependencyMap[16]);
  const token1 = obj8.useToken(importDefault(dependencyMap[8]).colors.BORDER_SUBTLE);
  closure_15 = token1;
  let obj9 = arg1(dependencyMap[16]);
  token2 = obj9.useToken(importDefault(dependencyMap[8]).colors.BORDER_STRONG);
  let obj10 = arg1(dependencyMap[16]);
  token3 = obj10.useToken(importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST);
  let obj11 = arg1(dependencyMap[10]);
  class X {
    constructor() {
      if (closure_4) {
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
        tmp4 = closure_16;
      } else {
        tmp3 = isUnseen;
        tmp4 = isUnseen ? closure_14 : closure_15;
      }
      obj1.borderColor = obj4.withTiming(tmp4, obj);
      obj5 = option(onSelect[11]);
      str = "transparent";
      if (selected) {
        str = closure_17;
      }
      obj1.backgroundColor = obj5.withTiming(str, obj);
      return obj1;
    }
  }
  obj1 = { useReducedMotion: stateFromStores1, Easing: arg1(dependencyMap[10]).Easing, withTiming: arg1(dependencyMap[11]).withTiming, selected, selectedBorderColor: token2, isNew: isUnseen, unselectedBrandBorderColor: token, unselectedBorderColor: token1, selectedBackgroundColor: token3 };
  X.__closure = obj1;
  X.__workletHash = 17180171486485;
  X.__initData = closure_14;
  const animatedStyle2 = obj11.useAnimatedStyle(X);
  let obj13 = arg1(dependencyMap[10]);
  class F {
    constructor() {
      if (closure_4) {
        obj = {};
      } else {
        obj = {};
        obj = {};
        tmp = closure_11;
        obj.scale = closure_11.get();
        items = [];
        items[0] = obj;
        obj.transform = items;
      }
      return obj;
    }
  }
  F.__closure = { useReducedMotion: stateFromStores1, scale: sharedValue };
  F.__workletHash = 319662489785;
  F.__initData = closure_15;
  const animatedStyle3 = obj13.useAnimatedStyle(F);
  let obj14 = arg1(dependencyMap[17]);
  const checkboxA11yNative = obj14.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj2 = { style: items6 };
  const items6 = [animatedStyle3, animatedStyle2, tmp.container];
  const obj3 = {
    activeOpacity: 0.6,
    style: items7,
    onPress() {
      callback(!selected);
      if (!closure_3) {
        callback2(!selected);
      }
    },
    onPressIn() {
      let obj = option(closure_2[10]);
      const obj2 = option(closure_2[11]);
      const withTimingResult = option(closure_2[11]).withTiming(1, { duration: 0 });
      obj = { duration: 200 };
      const Easing = option(closure_2[10]).Easing;
      obj.easing = Easing.out(option(closure_2[10]).Easing.ease);
      const result = sharedValue.set(obj.withSequence(withTimingResult, option(closure_2[11]).withTiming(1.02, obj)));
    },
    onPressOut() {
      let obj = option(closure_2[11]);
      obj = { duration: 100 };
      const Easing = option(closure_2[10]).Easing;
      obj.easing = Easing.out(option(closure_2[10]).Easing.ease);
      const result = sharedValue.set(obj.withTiming(1, obj));
    },
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: memo
  };
  const items7 = [tmp.optionButton];
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
    obj4 = { style: { <string:29557293>: true, <string:45941405>: true } };
    const obj5 = {};
    ({ optionTextEmoji: obj19.textEmojiStyle, optionImageEmoji: obj19.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      obj6 = {};
      ({ id: obj21.id, animated: obj21.animated } = stateFromStores);
      obj6.size = closure_8;
      emojiURL = importDefault(dependencyMap[20]).getEmojiURL(obj6);
      const obj20 = importDefault(dependencyMap[20]);
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
    obj4.children = callback2(importDefault(dependencyMap[19]), obj5);
    tmp34Result = tmp34(View, obj4);
    const tmp35 = View;
    const tmp38 = importDefault(dependencyMap[19]);
  }
  const items8 = [tmp34Result, ];
  obj7 = { style: tmp.optionText };
  obj8 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold", children: option.title };
  const items9 = [callback2(arg1(dependencyMap[21]).Text, obj8), ];
  let tmp46 = null != option.description && option.description.length > 0;
  if (tmp46) {
    obj9 = { hasMaxConnections: 1961492483, isBoostOnlySubscription: 1964048387, children: option.description };
    tmp46 = callback2(arg1(dependencyMap[21]).Text, obj9);
  }
  items9[1] = tmp46;
  obj7.children = items9;
  items8[1] = closure_10(View, obj7);
  obj3.children = items8;
  const items10 = [closure_10(arg1(dependencyMap[18]).PressableOpacity, obj3), , , ];
  let tmp50 = null;
  if (num > 0) {
    obj10 = {};
    const items11 = [tmp.roleCount, animatedStyle1];
    obj10.style = items11;
    obj11 = {};
    const intl = arg1(dependencyMap[15]).intl;
    const obj12 = { memberCount: num };
    obj11.children = intl.format(arg1(dependencyMap[15]).t.EgKsZA, obj12);
    obj10.children = callback2(arg1(dependencyMap[21]).Text, obj11);
    tmp50 = callback2(importDefault(dependencyMap[10]).View, obj10);
  }
  items10[1] = tmp50;
  obj13 = { style: items12 };
  const items12 = [tmp.checkIcon, animatedStyle];
  obj14 = { size: "xs", color: importDefault(dependencyMap[8]).colors.WHITE };
  obj13.children = callback2(arg1(dependencyMap[22]).CheckmarkSmallIcon, obj14);
  items10[2] = callback2(importDefault(dependencyMap[10]).View, obj13);
  if (canBeNew) {
    canBeNew = !selected;
  }
  if (canBeNew) {
    canBeNew = option.isUnseen;
  }
  if (canBeNew) {
    const obj15 = { color: arg1(dependencyMap[23]).BadgeColors.BRAND };
    const intl2 = arg1(dependencyMap[15]).intl;
    obj15.text = intl2.string(arg1(dependencyMap[15]).t.y2b7CA);
    ({ newBadgeWrapper: obj30.style, newBadge: obj30.textStyle } = tmp);
    canBeNew = callback2(arg1(dependencyMap[23]).TextBadge, obj15);
  }
  items10[3] = canBeNew;
  obj2.children = items10;
  return closure_10(importDefault(dependencyMap[10]).View, obj2);
};
