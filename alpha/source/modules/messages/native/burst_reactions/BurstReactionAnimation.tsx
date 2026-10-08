// Module ID: 7940
// Function ID: 7941
// Name: BurstReactionAnimation
// Dependencies: [109, 19, 5079, 21, 5090, 558, 576, 7898, 504, 7941, 6110, 2]

// Module 7940 (BurstReactionAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 7898 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["channelId", "messageId", "emoji", "isFullscreen", "onComplete", "withFadeOut"];
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ content: { width: "100%" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BurstReactionAnimation(arg0) {
  let channelId;
  let emoji;
  let isFullscreen;
  let messageId;
  let onComplete;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let withFadeOut;
  const obj = react2;
  const cResult = obj.c(25);
  if (cResult[0] !== arg0) {
    ({ channelId, messageId, emoji, isFullscreen, onComplete, withFadeOut } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = channelId;
    cResult[2] = emoji;
    cResult[3] = isFullscreen;
    cResult[4] = messageId;
    cResult[5] = onComplete;
    cResult[6] = tmp13;
    cResult[7] = withFadeOut;
    tmp10 = withFadeOut;
    tmp9 = tmp13;
    tmp8 = onComplete;
    tmp7 = messageId;
    tmp6 = isFullscreen;
    tmp5 = emoji;
    tmp4 = channelId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  const tmp15 = closure_7();
  if (cResult[8] === tmp4) {
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp6) {
        let tmp16;
        if (cResult[11] === tmp7) {
          tmp16 = cResult[12];
        }
        const tmpResult = burst_reactions_BurstReactionEffectUtils;
        const burstReactionAnimationSource = tmpResult.useBurstReactionAnimationSource(tmp16);
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          class C {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          cResult[13] = items;
          cResult[14] = C;
        }
        get_initialized;
        if (null == burstReactionAnimationSource) {
          return null;
        } else {
          let obj4;
          const tmp25 = importDefault(undefined === tmp10 || tmp10 ? 7941 : 6110);
          if (cResult[15] === tmp8) {
            let tmp26;
            if (cResult[16] === (undefined === tmp10 || tmp10)) {
              tmp26 = cResult[17];
            }
            let num13 = 1.2;
            if (tmp23) {
              num13 = 0.5;
            }
            class C {
              constructor() {
                return closure_1_5.useReducedMotion;
              }
            }
            const merged = Object.assign(tmp9);
            const merged1 = Object.assign(tmp26);
            const tmp35 = <tmp25 style={tmp15.content} loop={false} speed={num13} source={burstReactionAnimationSource} />;
            cResult[18] = tmp25;
            cResult[19] = burstReactionAnimationSource;
            cResult[20] = tmp26;
            cResult[21] = tmp9;
            cResult[22] = tmp15.content;
            cResult[23] = num13;
            cResult[24] = tmp35;
          }
          if (undefined === tmp10 || tmp10) {
            obj4 = { onComplete: tmp8 };
            const obj3 = { onComplete: tmp8 };
          } else {
            obj4 = { onAnimationFinish: tmp8 };
          }
          class C {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          cResult[15] = tmp8;
          cResult[16] = undefined === tmp10 || tmp10;
          cResult[17] = obj4;
          tmp26 = obj4;
        }
      }
    }
  }
  const obj5 = { emoji: tmp5, messageId: tmp7, channelId: tmp4, isFullscreen: tmp6 };
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = tmp6;
  cResult[11] = tmp7;
  cResult[12] = obj5;
  tmp16 = obj5;
}) : (function BurstReactionAnimation(arg0) {
  let channelId;
  let emoji;
  let isFullscreen;
  let messageId;
  let num;
  let onComplete;
  let useReducedMotion;
  let withFadeOut;
  ({ onComplete, withFadeOut } = arg0);
  ({ channelId, messageId, emoji, isFullscreen } = arg0);
  if (withFadeOut === undefined) {
    withFadeOut = true;
  }
  const merged = Object.assign(arg0, Object.assign({ channelId: 0, messageId: 0, emoji: 0, isFullscreen: 0, onComplete: 0, withFadeOut: 0 }));
  const tmp2 = closure_7();
  const obj = burst_reactions_BurstReactionEffectUtils;
  const burstReactionAnimationSource = obj.useBurstReactionAnimationSource({ emoji, messageId, channelId, isFullscreen });
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == burstReactionAnimationSource) {
    return null;
  } else {
    let obj3;
    const tmp7 = importDefault(withFadeOut ? 7941 : 6110);
    if (withFadeOut) {
      obj3 = { onComplete };
      const obj2 = { onComplete };
    } else {
      obj3 = { onAnimationFinish: onComplete };
    }
    const obj4 = { style: tmp2.content, loop: false, speed: num, source: burstReactionAnimationSource };
    num = 1.2;
    const tmp8 = jsx;
    if (tmp6) {
      num = 0.5;
    }
    const merged1 = Object.assign(merged);
    const merged2 = Object.assign(obj3);
    return tmp8(tmp7, obj4);
  }
});
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimation.tsx");

export default tmp3;
