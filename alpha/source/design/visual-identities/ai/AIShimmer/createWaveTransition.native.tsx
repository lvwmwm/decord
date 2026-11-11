// Module ID: 13671
// Function ID: 13672
// Name: createWaveTransition
// Dependencies: [13669, 5485, 1652, 1705, 2]
// Exports: createWaveTransition

// Module 13671 (createWaveTransition)
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import waveTransition from "waveTransition" /* 13669 */;
import size from "module_2" /* 2 */;

let c1, c7, closure_1, dependencyMap, set, set2;

let tmp2;
let items = [{ code: "(function incomingSlotForPass_createWaveTransitionNativeTsx1(passIndex){return passIndex%2===0?'B':'A';})" }];
[tmp2] = items;
function incomingSlotForPass(arg0) {
  let str = "A";
  if (arg0 % 2 === 0) {
    str = "B";
  }
  return str;
}
incomingSlotForPass.__workletHash = 6984958363480;
incomingSlotForPass.__initData = tmp2;
let closure_3 = { code: "(function createWaveTransitionNativeTsx2(finished){let[scheduleOnRN,finishPass,runId]=this.__closure;if(finished===true)scheduleOnRN(finishPass,runId);})" };
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/createWaveTransition.native.tsx");

export { incomingSlotForPass };
export function createWaveTransition(duration) {
  let obj;
  let random;
  let respectReducedMotion;
  let str2;
  function finishPass(arg0) {
    if (arg0 === closure_8) {
      c5 = false;
      const onComplete = obj.onComplete;
      if (onComplete != null) {
        onComplete();
      }
    }
  }
  let DEFAULT_PASS_DURATION = duration.duration;
  if (DEFAULT_PASS_DURATION == null) {
    let tmp = obj;
    DEFAULT_PASS_DURATION = obj(13669).DEFAULT_PASS_DURATION;
  }
  obj = { duration: DEFAULT_PASS_DURATION, random, reducedMotion: null, respectReducedMotion, animationProgress: null, crossFadeOpacity: null, glyphCount: null, onPass: null, onStart: null, onComplete: null };
  random = duration.rng;
  if (random == null) {
    const _Math = Math;
    random = Math.random;
  }
  ({ reducedMotion: obj.reducedMotion, respectReducedMotion } = duration);
  if (respectReducedMotion == null) {
    respectReducedMotion = true;
  }
  ({ animationProgress: obj.animationProgress, crossFadeOpacity: obj.crossFadeOpacity, glyphCount: obj.glyphCount, onPass: obj.onPass, onStart: obj.onStart, onComplete: obj.onComplete } = duration);
  dependencyMap = 0;
  let to = duration.from;
  if (to == null) {
    to = duration.to;
  }
  let to2 = duration.to;
  let c5 = false;
  let c6 = 0;
  let closure_7 = null;
  let closure_8 = 0;
  id = 1;
  let obj2 = { id, slotA: to, slotB: to2, band: str2 };
  let onPass = obj.onPass;
  let glyphCountResult = obj.glyphCount();
  let str = "";
  let num = 0;
  str2 = "";
  if (0 < glyphCountResult) {
    do {
      let tmp6 = obj;
      let str3 = obj(13669).GLYPH_PEAK;
      let charAt = str3.charAt;
      let tmp5Result = tmp5();
      str = `${charAt(tmp8 * obj(c1[0]).GLYPH_PEAK.length | 0)}`;
      num = num + 1;
      str2 = str;
    } while (num < glyphCountResult);
  }
  function stop() {
    if (null != closure_7) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7);
    }
    closure_7 = null;
    closure_8 = closure_8 + 1;
    c6 = 0;
    c5 = false;
    obj = _mod1652;
    obj.cancelAnimation(obj.animationProgress);
    if (c5) {
      const animationProgress = tmp4.animationProgress;
      const result = animationProgress.set(c1);
    }
    const crossFadeOpacity = tmp4.crossFadeOpacity;
    const result1 = crossFadeOpacity.set(1);
  }
  onPass(obj2);
  let obj3 = {
    play() {
      if (null != closure_7) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_7);
      }
      closure_7 = null;
      if ("" === to) {
        if ("" === to2) {
          const onComplete = obj.onComplete;
          if (onComplete != null) {
            onComplete();
          }
        }
      }
      c6 = id;
    },
    stop,
    setTransition(current, current2) {
      let str6;
      if (null != closure_7) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_7);
      }
      closure_7 = null;
      closure_8 = closure_8 + 1;
      c6 = 0;
      c5 = false;
      obj = _mod1652;
      obj.cancelAnimation(obj.animationProgress);
      if (c5) {
        const animationProgress = obj2.animationProgress;
        const result = animationProgress.set(c1);
      }
      const crossFadeOpacity = obj2.crossFadeOpacity;
      const result1 = crossFadeOpacity.set(1);
      if (typeof incomingSlotForPass === "function") {
        const result2 = tmp9 % 2;
        let str2 = "A";
        if (result2 === 0) {
          str2 = "B";
        }
        if (current !== ("A" === str2 ? to2 : to)) {
          if (typeof incomingSlotForPass === "function") {
            let str3 = "A";
            if (result2 === 0) {
              str3 = "B";
            }
            if ("A" === str3) {
              to2 = current;
            } else {
              to = current;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (typeof incomingSlotForPass === "function") {
          let str4 = "A";
          if (result2 === 0) {
            str4 = "B";
          }
          if ("A" === str4) {
            to = current2;
          } else {
            to2 = current2;
          }
          id = id + 1;
          const onPass = obj2.onPass;
          const obj3 = { id, slotA: to, slotB: to2, band: str6 };
          const glyphCountResult = obj.glyphCount();
          let str5 = "";
          let num2 = 0;
          str6 = "";
          if (0 < glyphCountResult) {
            do {
              let str7 = waveTransition.GLYPH_PEAK;
              let charAt = str7.charAt;
              let tmp18Result = tmp18();
              str5 = `${charAt(tmp21 * waveTransition.GLYPH_PEAK.length | 0)}`;
              num2 = num2 + 1;
              str6 = str5;
            } while (num2 < glyphCountResult);
          }
          onPass(obj3);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    setOptions(duration) {
      if (undefined !== duration.duration) {
        obj.duration = duration.duration;
      }
      if (undefined !== duration.reducedMotion) {
        obj.reducedMotion = duration.reducedMotion;
      }
    },
    startQueuedPass(id) {
      let tmp10;
      let tmp11;
      let tmp8;
      let tmp9;
      if (0 !== c6) {
        if (tmp === id) {
          c6 = 0;
          const obj3 = obj(c1[2]);
          obj3.cancelAnimation(obj.animationProgress);
          const sum = closure_8 + 1;
          closure_8 = sum;
          c5 = true;
          closure_1 = closure_1 + 1;
          const onStart = obj.onStart;
          if (onStart != null) {
            onStart();
          }
          if (obj.respectReducedMotion) {
            if (true === obj.reducedMotion) {
              obj = sum;
              let crossFadeOpacity = tmp23.crossFadeOpacity;
              set2 = crossFadeOpacity.set;
              const obj2 = { duration: obj(c1[0]).REDUCED_MOTION_FADE_MS };
              const withTiming2 = obj(c1[1]).withTiming;
              obj(c1[1]);
              set2(withTiming2(0, obj2, "animate-always"));
              let _setTimeout = setTimeout;
              let timeout = setTimeout(() => {
                let onComplete;
                if (sum === onComplete) {
                  const animationProgress = obj.animationProgress;
                  const result = animationProgress.set(c1);
                  const crossFadeOpacity = obj.crossFadeOpacity;
                  set = crossFadeOpacity.set;
                  obj = { duration: waveTransition.REDUCED_MOTION_FADE_MS };
                  const withTiming = timing_timing.withTiming;
                  timing_timing;
                  const result1 = set(withTiming(1, obj, "animate-always"));
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => {
                    c7 = null;
                    if (closure_1_0 === onComplete) {
                      c5 = false;
                      onComplete = onComplete.onComplete;
                      if (onComplete != null) {
                        onComplete();
                      }
                    }
                  }, waveTransition.REDUCED_MOTION_FADE_MS);
                }
              }, tmp21(tmp22[0]).REDUCED_MOTION_FADE_MS);
            }
          }
          let animationProgress = tmp23.animationProgress;
          set = animationProgress.set;
          const tmp21Result2 = obj(c1[1]);
          obj = { duration: obj.duration, easing: obj(c1[2]).Easing.linear };
          let withTiming = tmp21Result2.withTiming;
          const items = [to2, obj(c1[3]).scheduleOnRN, , ];
          items[2] = finishPass;
          items[3] = sum;
          let c0;
          c1 = undefined;
          let c2;
          [tmp8, tmp9, tmp10, tmp11] = items;
          function createWaveTransitionNativeTsx2(arg0) {
            if (true === arg0) {
              _undefined(c1, c2);
            }
          }
          const items1 = [tmp9, tmp10, tmp11];
          createWaveTransitionNativeTsx2.__closure = items1;
          createWaveTransitionNativeTsx2.__workletHash = 7015905915286;
          createWaveTransitionNativeTsx2.__initData = tmp8;
          let result = set(withTiming(closure_1, obj, "animate-always", createWaveTransitionNativeTsx2));
        }
      }
    },
    refreshBand() {
      let str2;
      const tmp = c5;
      if (!tmp) {
        id = id + 1;
        obj = { id, slotA: to, slotB: to2, band: str2 };
        const onPass = obj.onPass;
        const glyphCountResult = obj.glyphCount();
        let str = "";
        let num3 = 0;
        str2 = "";
        if (0 < glyphCountResult) {
          do {
            let str3 = waveTransition.GLYPH_PEAK;
            let charAt = str3.charAt;
            let tmp8Result = tmp8();
            str = `${charAt(tmp11 * waveTransition.GLYPH_PEAK.length | 0)}`;
            num3 = num3 + 1;
            str2 = str;
          } while (num3 < glyphCountResult);
        }
        onPass(obj);
        if (0 !== c6) {
          c6 = id;
        }
      }
    },
    destroy() {
      if (null != closure_7) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_7);
      }
      closure_7 = null;
      closure_8 = closure_8 + 1;
      c6 = 0;
      c5 = false;
      obj = _mod1652;
      obj.cancelAnimation(obj.animationProgress);
      const obj2 = _mod1652;
      obj2.cancelAnimation(obj.crossFadeOpacity);
    }
  };
  Object.defineProperty(obj3, "running", { get: () => c5, set: undefined });
  return obj3;
}
