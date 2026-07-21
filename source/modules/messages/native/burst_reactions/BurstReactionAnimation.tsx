// Module ID: 7062
// Function ID: 56453
// Name: BurstReactionAnimation
// Dependencies: []
// Exports: default

// Module 7062 (BurstReactionAnimation)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles({ content: { width: "100%" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimation.tsx");

export default function BurstReactionAnimation(arg0) {
  let channelId;
  let emoji;
  let isFullscreen;
  let messageId;
  let onComplete;
  let withFadeOut;
  ({ onComplete, withFadeOut } = arg0);
  ({ channelId, messageId, emoji, isFullscreen } = arg0);
  if (withFadeOut === undefined) {
    withFadeOut = true;
  }
  let obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback();
  const burstReactionAnimationSource = arg1(dependencyMap[4]).useBurstReactionAnimationSource({ emoji, messageId, channelId, isFullscreen });
  arg1(dependencyMap[5]);
  [][0] = closure_3;
  if (null == burstReactionAnimationSource) {
    return null;
  } else {
    if (withFadeOut) {
      let tmp7 = tmp18[6];
    } else {
      tmp7 = tmp18[7];
    }
    obj = {};
    if (withFadeOut) {
      obj.onComplete = onComplete;
      let tmp9 = obj;
    } else {
      obj.onAnimationFinish = onComplete;
      tmp9 = obj;
    }
    obj = { style: tmp3.content, loop: false };
    let num3 = 1.2;
    if (tmp6) {
      num3 = 0.5;
    }
    obj.speed = num3;
    const merged1 = Object.assign(merged);
    const merged2 = Object.assign(tmp9);
    obj["source"] = burstReactionAnimationSource;
    return jsx(importDefault(tmp7), obj);
  }
  const obj2 = arg1(dependencyMap[4]);
};
