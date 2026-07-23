// Module ID: 10596
// Function ID: 82664
// Name: Emoji
// Dependencies: [31, 27, 4122, 33, 664, 4130, 689, 5085, 1273, 566, 3991, 4131, 5744, 2]
// Exports: default

// Module 10596 (Emoji)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function Emoji(url) {
  url = url.url;
  const tmp = _createForOfIteratorHelperLoose();
  if ("" !== url) {
    let obj = { resizeMode: "contain" };
    const items = [tmp.imageEmoji];
    obj.style = items;
    obj = { uri: url };
    obj.source = obj;
    let tmp5 = jsx(importDefault(5085), { uri: url });
  } else {
    obj = {};
    const items1 = [tmp.textEmoji];
    obj.style = items1;
    obj.allowFontScaling = false;
    obj.children = url.surrogates;
    tmp5 = jsx(require(1273) /* Button */.LegacyText, {});
  }
  return tmp5;
}
let closure_7 = 6 * require("set").Millis.SECOND;
let closure_8 = 2 * require("set").Millis.SECOND;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, position: "absolute", right: 16, top: 16 };
_createForOfIteratorHelperLoose.voiceChannelEffectEmojiContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.voiceChannelEffectEmojiContainerTileNotch = { right: "auto", left: 16 };
_createForOfIteratorHelperLoose.voiceChannelEffectEmoji = { padding: 12 };
_createForOfIteratorHelperLoose.textEmoji = { fontSize: 32, lineHeight: 38, alignContent: "center", justifyContent: "center", display: "flex", width: 32, height: 32 };
_createForOfIteratorHelperLoose.imageEmoji = { width: 32, height: 32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function AnimatedEffectEmojiTsx1(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming('0deg',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx");

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
  sentAt = undefined;
  let stateFromStores;
  const tmp = _createForOfIteratorHelperLoose();
  ({ emoji, sentAt } = voiceChannelEffect);
  let obj = onComplete(stateFromStores[9]);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  const items1 = [sentAt, onComplete.userId, onComplete];
  const effect = React.useEffect(() => {
    if (Date.now() - sentAt >= outer1_8) {
      if (null != onComplete) {
        onComplete();
      }
    } else {
      const _setTimeout = setTimeout;
      onComplete = setTimeout(() => {
        if (null != callback) {
          callback();
        }
      }, outer1_7);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_0);
      }
    };
  }, items1);
  onComplete(stateFromStores[10]);
  class N {
    constructor() {
      obj = onComplete(c2[10]);
      obj2 = onComplete(c2[11]);
      withTimingResult = obj2.withTiming("-120deg", { duration: 0 });
      obj3 = onComplete(c2[10]);
      obj4 = onComplete(c2[11]);
      obj = {};
      num = 300;
      num2 = 300;
      if (c2) {
        num2 = 0;
      }
      obj.duration = num2;
      obj.easing = onComplete(c2[8]).STANDARD_EASING;
      obj1 = {};
      obj2 = {};
      withSequenceResult = obj.withSequence(withTimingResult, obj3.withDelay(100, obj4.withTiming("0deg", obj)));
      obj8 = onComplete(c2[10]);
      obj9 = onComplete(c2[11]);
      withTimingResult1 = obj9.withTiming(0, { duration: 0 });
      obj10 = onComplete(c2[10]);
      obj11 = onComplete(c2[11]);
      obj3 = {};
      if (c2) {
        num = 0;
      }
      obj3.duration = num;
      obj3.easing = onComplete(c2[8]).STANDARD_EASING;
      obj2.scale = obj8.withSequence(withTimingResult1, obj10.withDelay(100, obj11.withTiming(1, obj3)));
      items = [, ];
      items[0] = obj2;
      items[1] = { rotate: withSequenceResult };
      obj1.transform = items;
      return obj1;
    }
  }
  obj = { withSequence: onComplete(stateFromStores[10]).withSequence, withTiming: onComplete(stateFromStores[11]).withTiming, ANIMATION_ROTATION_DEG: -120, withDelay: onComplete(stateFromStores[10]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: onComplete(stateFromStores[8]).STANDARD_EASING };
  N.__closure = obj;
  N.__workletHash = 75069010226;
  N.__initData = closure_10;
  let tmp7Result = null;
  if (null != emoji) {
    obj = {};
    const items2 = [tmp.voiceChannelEffectEmojiContainer, onComplete(stateFromStores[8]).generateBoxShadowStyle(onComplete(stateFromStores[8]).EIGHT_DP_ELEVATION_SHADOW_PARAMS), tmp5, ];
    if (hasNotch) {
      hasNotch = tmp.voiceChannelEffectEmojiContainerTileNotch;
    }
    items2[3] = hasNotch;
    obj.style = items2;
    let obj1 = { style: tmp.voiceChannelEffectEmoji };
    let obj2 = {};
    let obj4 = onComplete(stateFromStores[8]);
    const tmp7 = jsx;
    obj2.url = onComplete(stateFromStores[12]).getEffectUrl(emoji);
    obj2.surrogates = emoji.name;
    obj1.children = <Emoji />;
    obj.children = <View style={tmp.voiceChannelEffectEmoji} />;
    tmp7Result = tmp7(sentAt(stateFromStores[10]).View, obj);
    const obj7 = onComplete(stateFromStores[12]);
  }
  return tmp7Result;
};
