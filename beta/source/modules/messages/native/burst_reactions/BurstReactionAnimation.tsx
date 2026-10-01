// Module ID: 7245
// Function ID: 7246
// Name: BurstReactionAnimation
// Dependencies: [19, 4825, 21, 4836, 7203, 504, 7246, 5841, 2]
// Exports: default

// Module 7245 (BurstReactionAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 7203 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ content: { width: "100%" } });
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimation.tsx");

export default function BurstReactionAnimation(arg0) {
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
  const tmp2 = closure_5();
  const obj = burst_reactions_BurstReactionEffectUtils;
  const burstReactionAnimationSource = obj.useBurstReactionAnimationSource({ emoji, messageId, channelId, isFullscreen });
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == burstReactionAnimationSource) {
    return null;
  } else {
    let obj3;
    const tmp7 = importDefault(withFadeOut ? 7246 : 5841);
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
};
