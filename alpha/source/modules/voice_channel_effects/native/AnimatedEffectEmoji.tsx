// Module ID: 10876
// Function ID: 10877
// Name: AnimatedEffectEmoji
// Dependencies: [19, 17, 5080, 21, 1102, 5091, 587, 558, 576, 6163, 1200, 504, 4811, 5092, 7054, 2]

// Module 10876 (AnimatedEffectEmoji)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1102 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import FastImageDefault from "FastImage" /* 6163 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let rect;
let tmp;
const native = tmp(1200);
let View = react_native.View;
const jsx = Fragment.jsx;
let c7 = -120;
let closure_8 = 6 * DurationsDefault.Millis.SECOND;
let closure_9 = 2 * DurationsDefault.Millis.SECOND;
let obj = { voiceChannelEffectEmojiContainer: rect, voiceChannelEffectEmojiContainerTileNotch: { right: "auto", left: 16 }, voiceChannelEffectEmoji: { padding: 12 }, textEmoji: { fontSize: 32, lineHeight: 38, alignContent: "center", justifyContent: "center", display: "flex", width: 32, height: 32 }, imageEmoji: { width: 32, height: 32 } };
rect = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, position: "absolute", right: 16, top: 16 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function Emoji(arg0) {
  let surrogates;
  let tmp7;
  let url;
  const obj = react2;
  const cResult = obj.c(5);
  ({ url, surrogates } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] === tmp4.imageEmoji) {
    if (cResult[1] === tmp4.textEmoji) {
      if (cResult[2] === surrogates) {
        let tmp5;
        if (cResult[3] === url) {
          tmp5 = cResult[4];
        }
        return tmp5;
      }
    }
  }
  if ("" !== url) {
    const obj3 = { uri: url };
    tmp7 = jsx(FastImageDefault, { resizeMode: "contain", style: tmp4.imageEmoji, source: obj3 });
  } else {
    tmp7 = jsx(native.LegacyText, { style: tmp4.textEmoji, allowFontScaling: false, children: surrogates });
  }
  cResult[0] = tmp4.imageEmoji;
  cResult[1] = tmp4.textEmoji;
  cResult[2] = surrogates;
  cResult[3] = url;
  cResult[4] = tmp7;
  tmp5 = tmp7;
}) : (function Emoji(url) {
  let tmp5;
  url = url.url;
  const surrogates = url.surrogates;
  const tmp = closure_10();
  if ("" !== url) {
    const obj3 = { uri: url };
    tmp5 = jsx(FastImageDefault, { resizeMode: "contain", style: tmp.imageEmoji, source: obj3 });
  } else {
    tmp5 = jsx(native.LegacyText, { style: tmp.textEmoji, allowFontScaling: false, children: surrogates });
  }
  return tmp5;
});
const __initData = { code: "function AnimatedEffectEmojiTsx1(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming(\"0deg\",{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}" };
const __initData2 = { code: "function AnimatedEffectEmojiTsx2(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming('0deg',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedEffectEmoji(arg0) {
  let emoji;
  let hasNotch;
  let onComplete;
  let sentAt;
  let stateFromStores;
  let tmp6;
  let tmp7;
  let tmpResult6;
  let useReducedMotion;
  let userId;
  let voiceChannelEffect;
  let tmp = onComplete;
  const tmp2 = stateFromStores;
  let obj = onComplete(stateFromStores[8]);
  const cResult = obj.c(14);
  ({ userId, voiceChannelEffect, hasNotch, onComplete } = arg0);
  const tmp5 = closure_10();
  ({ emoji, sentAt } = voiceChannelEffect);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function f() {
      return useReducedMotion.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(tmp2[11]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === onComplete) {
    let tmp10;
    if (cResult[3] === sentAt) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === onComplete) {
      if (cResult[6] === sentAt) {
        let tmp11;
        if (cResult[7] === userId) {
          tmp11 = cResult[8];
        }
        const effect = react.useEffect(tmp10, tmp11);
        let tmpResult4 = tmp(tmp2[12]);
        class M {
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
        let obj2 = { withSequence: tmp(tmp2[12]).withSequence, withTiming: tmp(tmp2[13]).withTiming, ANIMATION_ROTATION_DEG, withDelay: tmp(tmp2[12]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: tmp(tmp2[10]).STANDARD_EASING };
        const useAnimatedStyle = tmpResult4.useAnimatedStyle;
        M.__closure = obj2;
        M.__workletHash = 9499102126994;
        M.__initData = __initData;
        const animatedStyle = useAnimatedStyle(M);
        if (cResult[9] === animatedStyle) {
          if (cResult[10] === emoji) {
            if (cResult[11] === (undefined !== hasNotch && hasNotch)) {
              let tmp18;
              if (cResult[12] === tmp5) {
                tmp18 = cResult[13];
              }
              return tmp18;
            }
          }
        }
        let tmp20Result = null;
        if (null != emoji) {
          const items1 = [tmp5.voiceChannelEffectEmojiContainer, , , ];
          class M {
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
          const tmpResult5 = tmp(tmp2[10]);
          items1[1] = tmpResult5.generateBoxShadowStyle(tmp(tmp2[10]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
          items1[2] = animatedStyle;
          let obj3 = { style: items1, children: null };
          const tmp23 = undefined !== hasNotch && hasNotch && tmp5.voiceChannelEffectEmojiContainerTileNotch;
          items1[3] = tmp23;
          let obj4 = { style: tmp5.voiceChannelEffectEmoji, children: null };
          let obj5 = { url: tmpResult6.getEffectUrl(emoji), surrogates: emoji.name };
          tmpResult6 = tmp(tmp2[14]);
          tmp20Result = tmp20(tmp22, obj3);
        }
        cResult[9] = animatedStyle;
        cResult[10] = emoji;
        cResult[11] = undefined !== hasNotch && hasNotch;
        cResult[12] = tmp5;
        cResult[13] = tmp20Result;
        tmp18 = tmp20Result;
      }
    }
    const items2 = [sentAt, , onComplete];
    cResult[5] = onComplete;
    cResult[6] = sentAt;
    cResult[7] = userId;
    cResult[8] = items2;
    tmp11 = items2;
  }
  const fn2 = function v() {
    let closure_0;
    let timeout;
    if (Date.now() - sentAt >= closure_1_9) {
      if (timeout != null) {
        tmp2();
      }
    } else {
      const _setTimeout = setTimeout;
      const tmp = closure_1_8;
      timeout = setTimeout(() => {
        if (closure_0 != null) {
          tmp();
        }
      }, closure_1_8);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
    };
  };
  cResult[2] = onComplete;
  cResult[3] = sentAt;
  cResult[4] = fn2;
  tmp10 = fn2;
}) : (function AnimatedEffectEmoji(userId) {
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
  let tmp = closure_10();
  ({ emoji, sentAt } = voiceChannelEffect);
  const tmp2 = onComplete;
  const tmp3 = stateFromStores;
  let obj = onComplete(stateFromStores[11]);
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [sentAt, userId, onComplete];
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    if (Date.now() - sentAt >= closure_1_9) {
      if (timeout != null) {
        tmp2();
      }
    } else {
      const _setTimeout = setTimeout;
      const tmp = closure_1_8;
      timeout = setTimeout(() => {
        if (closure_0 != null) {
          tmp();
        }
      }, closure_1_8);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
    };
  }, items1);
  const tmp6 = onComplete(stateFromStores[12]);
  class R {
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
  let obj2 = { withSequence: onComplete(stateFromStores[12]).withSequence, withTiming: onComplete(stateFromStores[13]).withTiming, ANIMATION_ROTATION_DEG, withDelay: onComplete(stateFromStores[12]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: onComplete(stateFromStores[10]).STANDARD_EASING };
  R.__closure = obj2;
  R.__workletHash = 2535359157649;
  R.__initData = __initData2;
  let tmp9Result = null;
  if (null != emoji) {
    const items2 = [tmp.voiceChannelEffectEmojiContainer, , , ];
    View = sentAt(tmp3[12]).View;
    const tmp2Result = tmp2(tmp3[10]);
    items2[1] = tmp2Result.generateBoxShadowStyle(tmp2(tmp3[10]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
    items2[2] = tmp7;
    if (hasNotch) {
      hasNotch = tmp.voiceChannelEffectEmojiContainerTileNotch;
    }
    let obj3 = { style: items2, children: null };
    items2[3] = hasNotch;
    let obj4 = { style: tmp.voiceChannelEffectEmoji, children: null };
    let obj5 = { url: tmp2Result2.getEffectUrl(emoji), surrogates: emoji.name };
    tmp2Result2 = tmp2(tmp3[14]);
    tmp9Result = tmp9(View, obj3);
  }
  return tmp9Result;
});
const result = size.fileFinishedImporting("modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx");

export default tmp2;
