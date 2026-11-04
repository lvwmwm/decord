// Module ID: 11982
// Function ID: 11983
// Name: AnimatedEffectEmoji
// Dependencies: [19, 17, 5142, 21, 1089, 5141, 575, 5851, 1187, 504, 1652, 5378, 7670, 2]
// Exports: default

// Module 11982 (AnimatedEffectEmoji)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import DurationsDefault from "Durations" /* 1089 */;
import native from "native" /* 1187 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let rect;
function Emoji(url) {
  let tmp5;
  url = url.url;
  const surrogates = url.surrogates;
  const tmp = closure_9();
  if ("" !== url) {
    const obj3 = { uri: url };
    tmp5 = jsx(FastImageDefault, { resizeMode: "contain", style: tmp.imageEmoji, source: obj3 });
  } else {
    tmp5 = jsx(native.LegacyText, { style: tmp.textEmoji, allowFontScaling: false, children: surrogates });
  }
  return tmp5;
}
let View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = 6 * DurationsDefault.Millis.SECOND;
let closure_8 = 2 * DurationsDefault.Millis.SECOND;
let obj = { voiceChannelEffectEmojiContainer: rect, voiceChannelEffectEmojiContainerTileNotch: { right: "auto", left: 16 }, voiceChannelEffectEmoji: { padding: 12 }, textEmoji: { fontSize: 32, lineHeight: 38, alignContent: "center", justifyContent: "center", display: "flex", width: 32, height: 32 }, imageEmoji: { width: 32, height: 32 } };
rect = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, position: "absolute", right: 16, top: 16 };
let closure_9 = createStyles.createStyles(obj);
let closure_11 = { code: "(function AnimatedEffectEmojiTsx1(){let[withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING]=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming('0deg',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};})" };
const result = size.fileFinishedImporting("modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx");

export default function AnimatedEffectEmoji(userId) {
  let emoji;
  let hasNotch;
  let sentAt;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp2Result2;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let voiceChannelEffect;
  ({ voiceChannelEffect, hasNotch } = userId);
  userId = userId.userId;
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  const onComplete = userId.onComplete;
  sentAt = undefined;
  let tmp = closure_9();
  ({ emoji, sentAt } = voiceChannelEffect);
  const tmp2 = onComplete;
  let tmp3 = dependencyMap;
  let obj = onComplete(504);
  let items = [AccessibilityStore];
  const items1 = [sentAt, userId, onComplete];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    if (Date.now() - sentAt >= closure_1_8) {
      if (timeout != null) {
        tmp2();
      }
    } else {
      const _setTimeout = setTimeout;
      const tmp = closure_1_7;
      timeout = setTimeout(() => {
        if (closure_0 != null) {
          tmp();
        }
      }, closure_1_7);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
    };
  }, items1);
  const tmp6 = onComplete(1652);
  const items2 = [closure_11, onComplete(1652).withSequence, onComplete(5378).withTiming, -120, onComplete(1652).withDelay, stateFromStores, onComplete(1187).STANDARD_EASING];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items2;
  class AnimatedEffectEmojiTsx1 {
    constructor() {
      let items;
      let num = 300;
      let num2 = 300;
      const tmp3 = _undefined("" + c2 + "deg", { duration: 0 });
      if (c4) {
        num2 = 0;
      }
      const obj = { duration: num2, easing };
      const tmpResult = _undefined(tmp3, _undefined2(100, _undefined("0deg", obj)));
      const tmp2Result = _undefined(0, { duration: 0 });
      if (c4) {
        num = 0;
      }
      const obj2 = { transform: items };
      items = [{ scale: _undefined(tmp2Result, _undefined2(100, _undefined(1, { duration: num, easing: tmp6 }))) }, { rotate: tmpResult }];
      ({ scale: _undefined(tmp2Result, _undefined2(100, _undefined(1, { duration: num, easing }))) });
      return obj2;
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  AnimatedEffectEmojiTsx1.__closure = items3;
  AnimatedEffectEmojiTsx1.__workletHash = 13165317266923;
  AnimatedEffectEmojiTsx1.__initData = tmp7;
  let tmp16Result = null;
  if (null != emoji) {
    const items4 = [tmp.voiceChannelEffectEmojiContainer, , , ];
    View = sentAt(1652).View;
    let tmp2Result = tmp2(1187);
    items4[1] = tmp2Result.generateBoxShadowStyle(tmp2(1187).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
    items4[2] = tmp14;
    if (hasNotch) {
      hasNotch = tmp.voiceChannelEffectEmojiContainerTileNotch;
    }
    let obj2 = { style: items4, children: null };
    items4[3] = hasNotch;
    const obj3 = { style: tmp.voiceChannelEffectEmoji, children: null };
    ({ url: tmp2Result2.getEffectUrl(emoji), surrogates: emoji.name });
    tmp2Result2 = tmp2(7670);
    tmp16Result = tmp16(View, obj2);
  }
  return tmp16Result;
};
