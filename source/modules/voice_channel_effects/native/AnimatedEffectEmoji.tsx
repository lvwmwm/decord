// Module ID: 10586
// Function ID: 82614
// Name: Emoji
// Dependencies: [0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 0, 0]
// Exports: default

// Module 10586 (Emoji)
import __exportStarResult1 from "__exportStarResult1";
import { View } from "__exportStarResult1";

function Emoji(url) {
  url = url.url;
  const tmp = callback();
  if ("" !== url) {
    let obj = { resizeMode: "contain" };
    const items = [tmp.imageEmoji];
    obj.style = items;
    obj = { uri: url };
    obj.source = obj;
    let tmp5 = jsx(importDefault(dependencyMap[7]), obj);
  } else {
    obj = {};
    const items1 = [tmp.textEmoji];
    obj.style = items1;
    obj.allowFontScaling = false;
    obj.children = url.surrogates;
    tmp5 = jsx(arg1(dependencyMap[8]).LegacyText, obj);
  }
  return tmp5;
}
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = 6 * importDefault(dependencyMap[4]).Millis.SECOND;
let closure_8 = 2 * importDefault(dependencyMap[4]).Millis.SECOND;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("__exportStarResult1").radii.round };
obj.voiceChannelEffectEmojiContainer = obj;
obj.voiceChannelEffectEmojiContainerTileNotch = { -1201573634: "soundboard_picker_collapsed_sections", -1890493343: "scalar" };
obj.voiceChannelEffectEmoji = { padding: 12 };
obj.textEmoji = {};
obj.imageEmoji = { "Null": true, "Null": true };
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function AnimatedEffectEmojiTsx1(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming('0deg',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}" };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx");

export default function AnimatedEffectEmoji(onComplete) {
  let emoji;
  let hasNotch;
  let sentAt;
  let voiceChannelEffect;
  ({ voiceChannelEffect, hasNotch } = onComplete);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  onComplete = onComplete.onComplete;
  const arg1 = onComplete;
  let importDefault;
  let dependencyMap;
  const tmp = callback();
  ({ emoji, sentAt } = voiceChannelEffect);
  importDefault = sentAt;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  dependencyMap = stateFromStores;
  const items1 = [sentAt, onComplete.userId, onComplete];
  const effect = React.useEffect(() => {
    if (Date.now() - sentAt >= closure_8) {
      if (null != onComplete) {
        onComplete();
      }
    } else {
      const _setTimeout = setTimeout;
      const onComplete = setTimeout(() => {
        if (null != callback) {
          callback();
        }
      }, closure_7);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_0);
      }
    };
  }, items1);
  arg1(dependencyMap[10]);
  class N {
    constructor() {
      obj = onComplete(closure_2[10]);
      obj2 = onComplete(closure_2[11]);
      withTimingResult = obj2.withTiming("-120deg", { duration: 0 });
      obj3 = onComplete(closure_2[10]);
      obj4 = onComplete(closure_2[11]);
      obj = {};
      num = 300;
      num2 = 300;
      if (closure_2) {
        num2 = 0;
      }
      obj.duration = num2;
      obj.easing = onComplete(closure_2[8]).STANDARD_EASING;
      obj1 = {};
      obj2 = {};
      withSequenceResult = obj.withSequence(withTimingResult, obj3.withDelay(100, obj4.withTiming("0deg", obj)));
      obj8 = onComplete(closure_2[10]);
      obj9 = onComplete(closure_2[11]);
      withTimingResult1 = obj9.withTiming(0, { duration: 0 });
      obj10 = onComplete(closure_2[10]);
      obj11 = onComplete(closure_2[11]);
      obj3 = {};
      if (closure_2) {
        num = 0;
      }
      obj3.duration = num;
      obj3.easing = onComplete(closure_2[8]).STANDARD_EASING;
      obj2.scale = obj8.withSequence(withTimingResult1, obj10.withDelay(100, obj11.withTiming(1, obj3)));
      items = [, ];
      items[0] = obj2;
      items[1] = { rotate: withSequenceResult };
      obj1.transform = items;
      return obj1;
    }
  }
  obj = { withSequence: arg1(dependencyMap[10]).withSequence, withTiming: arg1(dependencyMap[11]).withTiming, ANIMATION_ROTATION_DEG: -120, withDelay: arg1(dependencyMap[10]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: arg1(dependencyMap[8]).STANDARD_EASING };
  N.__closure = obj;
  N.__workletHash = 75069010226;
  N.__initData = closure_10;
  let tmp7Result = null;
  if (null != emoji) {
    obj = {};
    const items2 = [tmp.voiceChannelEffectEmojiContainer, arg1(dependencyMap[8]).generateBoxShadowStyle(arg1(dependencyMap[8]).EIGHT_DP_ELEVATION_SHADOW_PARAMS), tmp5, ];
    if (hasNotch) {
      hasNotch = tmp.voiceChannelEffectEmojiContainerTileNotch;
    }
    items2[3] = hasNotch;
    obj.style = items2;
    const obj1 = { style: tmp.voiceChannelEffectEmoji };
    const obj2 = {};
    const obj4 = arg1(dependencyMap[8]);
    const tmp7 = jsx;
    obj2.url = arg1(dependencyMap[12]).getEffectUrl(emoji);
    obj2.surrogates = emoji.name;
    obj1.children = <Emoji {...obj2} />;
    obj.children = <View {...obj1} />;
    tmp7Result = tmp7(importDefault(dependencyMap[10]).View, obj);
    const obj7 = arg1(dependencyMap[12]);
  }
  return tmp7Result;
};
