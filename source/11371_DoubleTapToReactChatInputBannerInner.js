// Module ID: 11371
// Function ID: 88442
// Name: DoubleTapToReactChatInputBannerInner
// Dependencies: []
// Exports: DoubleTapToReactChatInputBanner

// Module 11371 (DoubleTapToReactChatInputBannerInner)
function DoubleTapToReactChatInputBannerInner(emoji) {
  emoji = emoji.emoji;
  const tmp = callback4();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  obj = { style: tmp.container };
  obj = { style: tmp.emojiContainer };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj1 = { style: tmp.emoji, fastImageStyle: tmp.emoji, textEmojiStyle: tmp.textEmoji };
  let str = "";
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1.name = str;
  if (null != emoji.id) {
    let obj4 = importDefault(dependencyMap[12]);
    const obj2 = { id: emoji.id };
    let animated = !stateFromStores;
    if (animated) {
      animated = emoji.animated;
    }
    obj2.animated = animated;
    obj2.size = EMOJI_URL_BASE_SIZE;
    let url = obj4.getEmojiURL(obj2);
  } else {
    url = emoji.url;
  }
  obj1.src = url;
  const items1 = [callback2(importDefault(dependencyMap[11]), obj1), callback2(arg1(dependencyMap[13]).Text, {})];
  obj.children = items1;
  const items2 = [callback3(View, obj), , ];
  const obj3 = { style: tmp.text };
  obj4 = { style: tmp.header };
  const obj5 = { INTEGRATION_CREATE: 131072.00119209292, ConstraintReasonCode: -293983030121430100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
  const intl = arg1(dependencyMap[14]).intl;
  obj5.children = intl.string(arg1(dependencyMap[14]).t.6RUX7d);
  const items3 = [callback2(arg1(dependencyMap[13]).Text, obj5), callback2(arg1(dependencyMap[15]).NewBadge, {})];
  obj4.children = items3;
  const items4 = [callback3(View, obj4), ];
  const obj6 = {};
  const intl2 = arg1(dependencyMap[14]).intl;
  obj6.children = intl2.format(arg1(dependencyMap[14]).t.5/l2rR, {
    emojiName: emoji.name,
    emojiNameHook(children) {
      const obj = { INTEGRATION_CREATE: "png", ConstraintReasonCode: true, children };
      return callback2(callback(closure_2[13]).Text, obj, arg1);
    },
    tapHereHook(children) {
      const obj = { INTEGRATION_CREATE: 24, ConstraintReasonCode: 24, children };
      return callback2(callback(closure_2[13]).Text, obj, arg1);
    }
  });
  items4[1] = callback2(arg1(dependencyMap[13]).Text, obj6);
  obj3.children = items4;
  items2[1] = callback3(View, obj3);
  const obj8 = { "Null": 8, "Null": "absolute" };
  const intl3 = arg1(dependencyMap[14]).intl;
  obj8.accessibilityLabel = intl3.string(arg1(dependencyMap[14]).t.cpT0Cq);
  obj8.onPress = emoji.handleDismissBanner;
  obj8.style = tmp.closeButton;
  obj8.children = callback2(arg1(dependencyMap[17]).XSmallIcon, { flexDirection: 43429566791737600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, alignItems: 13340564516523250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 });
  items2[2] = callback2(arg1(dependencyMap[16]).PressableOpacity, obj8);
  obj.children = items2;
  return callback3(View, obj);
}
function DoubleTapToReactChatInputBannerAnimationContainer(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const emoji = channel.emoji;
  const importDefault = emoji;
  const markAsDismissed = channel.markAsDismissed;
  const dependencyMap = markAsDismissed;
  const tmp = callback4();
  const tmp2 = callback(React.useState(82), 2);
  const first = tmp2[0];
  let callback = first;
  const React = tmp2[1];
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => first1.useReducedMotion);
  const View = stateFromStores;
  const tmp5 = callback(React.useState(false), 2);
  const first1 = tmp5[0];
  closure_6 = first1;
  let closure_7 = tmp5[1];
  obj = { type: arg1(dependencyMap[19]).ImpressionTypes.VIEW, name: arg1(dependencyMap[19]).ImpressionNames.DOUBLE_TAP_REACT_UPSELL };
  importDefault(dependencyMap[18])(obj);
  let obj2 = arg1(dependencyMap[20]);
  const sharedValue = obj2.useSharedValue(0);
  const EMOJI_URL_BASE_SIZE = sharedValue;
  const items1 = [sharedValue, first, first1];
  const effect = React.useEffect(() => {
    if (first1) {
      const result = set(0);
    } else {
      const result1 = set(first);
    }
  }, items1);
  let obj3 = arg1(dependencyMap[20]);
  const fn = function v() {
    let obj = {};
    if (stateFromStores) {
      obj.height = sharedValue.get();
      let tmp5 = obj;
    } else {
      const obj2 = channel(markAsDismissed[20]);
      obj = { duration: 300 };
      const value = sharedValue.get();
      obj.easing = channel(markAsDismissed[22]).DECELERATED_EASING;
      obj.height = obj2.withDelay(200, channel(markAsDismissed[21]).withTiming(value, obj));
      tmp5 = obj;
      const obj3 = channel(markAsDismissed[21]);
    }
    return tmp5;
  };
  obj = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: arg1(dependencyMap[20]).withDelay, withTiming: arg1(dependencyMap[21]).withTiming, DECELERATED_EASING: arg1(dependencyMap[22]).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 14971794499123;
  fn.__initData = closure_14;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items2 = [emoji, markAsDismissed];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items3 = [markAsDismissed];
  const callback1 = React.useCallback(() => {
    let obj = emoji(markAsDismissed[23]);
    obj = { emoji };
    obj.openLazy(channel(markAsDismissed[25])(markAsDismissed[24], markAsDismissed.paths), "DoubleTapToReactActionSheet", obj);
    markAsDismissed(lib.TAKE_ACTION);
  }, items2);
  const callback2 = React.useCallback(() => {
    lib(true);
    const timerId = setTimeout(() => {
      callback(constants.USER_DISMISS);
    }, 500);
  }, items3);
  const tmp15 = importDefault(dependencyMap[26])(channel.id);
  const items4 = [tmp15, channel.id, markAsDismissed];
  const effect1 = React.useEffect(() => {
    let tmp = null != tmp15;
    if (tmp) {
      tmp = tmp15 !== channel.id;
    }
    if (tmp) {
      markAsDismissed(lib.AUTO_DISMISS);
    }
  }, items4);
  const tmp7 = importDefault(dependencyMap[18]);
  const unmountEffect = arg1(dependencyMap[27]).useUnmountEffect(() => {
    markAsDismissed(lib.AUTO_DISMISS);
  });
  const obj1 = {};
  obj2 = { style: tmp.measurement, onLayout: callback, children: tmp15(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  const items5 = [tmp15(View, obj2), ];
  obj3 = { style: items6 };
  const items6 = [animatedStyle, tmp.animatedContainer];
  const obj4 = { onPress: callback1, style: tmp.highlight, androidRippleConfig: closure_12, children: tmp15(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  obj3.children = tmp15(arg1(dependencyMap[28]).AnimatedPressableHighlight, obj4);
  items5[1] = tmp15(importDefault(dependencyMap[20]).View, obj3);
  obj1.children = items5;
  return callback3(closure_11, obj1);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[5]).EMOJI_URL_BASE_SIZE;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[6]));
let closure_12 = { cornerRadius: 0 };
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { borderColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.animatedContainer = obj;
obj.measurement = { 9223372036854775807: "<string:1137377281>", 0: "<string:1498480641>" };
obj.container = { 0: false, 0: false, 9223372036854775807: false, 35395124084360812: false };
const tmp2 = arg1(dependencyMap[6]);
obj.highlight = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.text = { textAlign: null, marginTop: 0 };
const obj2 = { <string:287701542>: "<string:3202613249>", <string:673606438>: "<string:2102460418>", <string:3728969510>: "<string:2990608740>", <string:3678617129>: "<string:1912602892>", <string:1181248291>: "resolve", <string:1947966756>: "resolve", <string:3478224221>: "<string:1287340289>", <string:3826784095>: "<string:2287075330>", <string:945890148>: "<string:23362956>", borderColor: importDefault(dependencyMap[8]).colors.BORDER_STRONG, backgroundColor: importDefault(dependencyMap[8]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.md };
obj.emojiContainer = obj2;
obj.emoji = { aze: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240315037966, azj: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004778309841467123 };
const obj3 = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
let num = 22;
if (obj7.isIOS()) {
  num = 28;
}
obj3.fontSize = num;
obj3.textAlign = "center";
const obj7 = arg1(dependencyMap[9]);
let num2;
if (obj8.isIOS()) {
  num2 = 32;
}
obj3.lineHeight = num2;
obj3.color = importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT;
obj.textEmoji = obj3;
obj.header = {};
obj.closeButton = { alignSelf: "flex-start" };
let closure_13 = obj.createStyles(obj);
let closure_14 = { code: "function DoubleTapToReactChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};}" };
const obj8 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx");

export const DoubleTapToReactChatInputBanner = function DoubleTapToReactChatInputBanner(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const DoubleTapReactionEmoji = arg1(dependencyMap[29]).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  const importDefault = setting;
  const items = [channel, setting];
  const memo = React.useMemo(() => {
    let emojiId;
    let emojiName;
    ({ emojiId, emojiName } = setting);
    let tmp = true !== setting.disableDoubleTap;
    if (tmp) {
      let tmp3 = null != emojiId;
      if (tmp3) {
        tmp3 = "0" !== emojiId;
      }
      if (!tmp3) {
        let tmp4 = null != emojiName;
        if (tmp4) {
          tmp4 = "" !== emojiName;
        }
        tmp3 = tmp4;
      }
      let tmp5 = !tmp3;
      if (!tmp3) {
        let tmp7 = null != channel.lastMessageId;
        if (tmp7) {
          tmp7 = setting(memo1[30])(channel);
        }
        tmp5 = tmp7;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items);
  const memo1 = React.useMemo(() => channel(memo1[31]).getFallbackDoubleTapDisambiguatedEmoji(), []);
  const dependencyMap = memo1;
  let tmp4 = null;
  if (null != memo1) {
    let tmp5 = null;
    if (memo) {
      const obj = {};
      const items1 = [arg1(dependencyMap[33]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL];
      obj.contentTypes = items1;
      obj.bypassAutoDismiss = true;
      obj.children = function children(arg0) {
        let markAsDismissed;
        let visibleContent;
        ({ visibleContent, markAsDismissed } = arg0);
        let tmp = null;
        if (visibleContent === channel(memo1[33]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
          const obj = { channel, emoji: memo1, markAsDismissed };
          tmp = callback(closure_16, obj);
        }
        return tmp;
      };
      tmp5 = callback2(importDefault(dependencyMap[32]), obj);
      const tmp9 = importDefault(dependencyMap[32]);
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
