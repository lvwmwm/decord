// Module ID: 7067
// Function ID: 56519
// Name: BurstReactionAnimation
// Dependencies: [31, 4122, 33, 4130, 7025, 566, 7068, 5453, 2]
// Exports: default

// Module 7067 (BurstReactionAnimation)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ content: { width: "100%" } });
const result = require("jsxProd").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimation.tsx");

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
  let obj = { channelId: 0, messageId: 0, emoji: 0, isFullscreen: 0, onComplete: 0, withFadeOut: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback();
  const burstReactionAnimationSource = require(7025) /* _generateAnimationSource */.useBurstReactionAnimationSource({ emoji, messageId, channelId, isFullscreen });
  require(566) /* initialize */;
  [][0] = _isNativeReflectConstruct;
  if (null == burstReactionAnimationSource) {
    return null;
  } else {
    if (withFadeOut) {
      let tmp7 = 7068;
    } else {
      tmp7 = 5453;
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
    return jsx(importDefault(tmp7), { style: tmp3.content, loop: false });
  }
  const obj2 = require(7025) /* _generateAnimationSource */;
};
