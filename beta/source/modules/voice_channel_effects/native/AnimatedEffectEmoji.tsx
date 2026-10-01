// Module ID: 8910
// Function ID: 8911
// Name: AnimatedEffectEmoji
// Dependencies: [19, 17, 4825, 21, 1091, 4836, 576, 5899, 1177, 504, 4566, 4837, 6767, 2]
// Exports: default

// Module 8910 (AnimatedEffectEmoji)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1091 */;
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import FastImageDefault from "FastImage" /* 5899 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let rect;
function Emoji(url) {
  let tmp5;
  url = url.url;
  const surrogates = url.surrogates;
  const tmp = closure_9();
  if ("" !== url) {
    const items = [tmp.imageEmoji];
    const obj3 = { uri: url };
    tmp5 = jsx(FastImageDefault, { resizeMode: "contain", style: items, source: obj3 });
  } else {
    const items1 = [tmp.textEmoji];
    tmp5 = jsx(native.LegacyText, { style: items1, allowFontScaling: false, children: surrogates });
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
const __initData = { code: "function AnimatedEffectEmojiTsx1(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming('0deg',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}" };
const result = size.fileFinishedImporting("modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx");

export default function AnimatedEffectEmoji(userId) {
  let emoji;
  let hasNotch;
  let sentAt;
  let tmp2Result2;
  let useReducedMotion;
  let voiceChannelEffect;
  ({ voiceChannelEffect, hasNotch } = userId);
  userId = userId.userId;
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  const onComplete = userId.onComplete;
  sentAt = undefined;
  let stateFromStores;
  let tmp = closure_9();
  ({ emoji, sentAt } = voiceChannelEffect);
  const tmp2 = onComplete;
  const tmp3 = stateFromStores;
  let obj = onComplete(stateFromStores[9]);
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [sentAt, userId, onComplete];
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
  const tmp6 = onComplete(stateFromStores[10]);
  class N {
    constructor() {
      let items;
      let obj5;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj = timing;
      const withTimingResult = obj.withTiming("-120deg", { duration: 0 });
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      let num = 300;
      let num2 = 300;
      const withTiming = timing.withTiming;
      timing;
      if (stateFromStores) {
        num2 = 0;
      }
      const obj2 = { duration: num2, easing: native.STANDARD_EASING };
      const withSequenceResult = withSequence(withTimingResult, withDelay(100, withTiming("0deg", obj2)));
      const withSequence2 = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const tmpResult4 = timing;
      const withTimingResult1 = tmpResult4.withTiming(0, { duration: 0 });
      const withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const withTiming2 = timing.withTiming;
      timing;
      if (stateFromStores) {
        num = 0;
      }
      const obj3 = { transform: items };
      const obj4 = { scale: withSequence2(withTimingResult1, withDelay2(100, withTiming2(1, obj5))) };
      items = [obj4, { rotate: withSequenceResult }];
      obj5 = { duration: num, easing: native.STANDARD_EASING };
      return obj3;
    }
  }
  let obj2 = { withSequence: onComplete(stateFromStores[10]).withSequence, withTiming: onComplete(stateFromStores[11]).withTiming, ANIMATION_ROTATION_DEG: -120, withDelay: onComplete(stateFromStores[10]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: onComplete(stateFromStores[8]).STANDARD_EASING };
  N.__closure = obj2;
  N.__workletHash = 75069010226;
  N.__initData = __initData;
  let tmp9Result = null;
  if (null != emoji) {
    const items2 = [tmp.voiceChannelEffectEmojiContainer, , , ];
    View = sentAt(tmp3[10]).View;
    const tmp2Result = tmp2(tmp3[8]);
    items2[1] = tmp2Result.generateBoxShadowStyle(tmp2(tmp3[8]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
    items2[2] = tmp7;
    if (hasNotch) {
      hasNotch = tmp.voiceChannelEffectEmojiContainerTileNotch;
    }
    let obj3 = { style: items2, children: null };
    items2[3] = hasNotch;
    let obj4 = { style: tmp.voiceChannelEffectEmoji, children: null };
    let obj5 = { url: tmp2Result2.getEffectUrl(emoji), surrogates: emoji.name };
    tmp2Result2 = tmp2(tmp3[12]);
    tmp9Result = tmp9(View, obj3);
  }
  return tmp9Result;
};
