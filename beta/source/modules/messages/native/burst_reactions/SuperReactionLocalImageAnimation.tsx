// Module ID: 11440
// Function ID: 11441
// Name: SuperReactionLocalImageAnimation
// Dependencies: [19, 21, 8058, 8101, 2]
// Exports: default

// Module 11440 (SuperReactionLocalImageAnimation)
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 8058 */;
import FadeOutLottieAnimationDefault from "FadeOutLottieAnimation" /* 8101 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx");

export default function SuperReactionLocalImageAnimation(arg0) {
  let tmp = null;
  ({ localImageSource, animationSource } = arg0);
  const merged = Object.assign(arg0, Object.assign({ localImageSource: 0, animationSource: 0 }));
  const superReactionAnimationSourceFromLocalImage = burst_reactions_BurstReactionEffectUtils.useSuperReactionAnimationSourceFromLocalImage({ animationSource, localImageSource });
  if (null != superReactionAnimationSourceFromLocalImage) {
    const obj2 = { loop: true, source: superReactionAnimationSourceFromLocalImage };
    const merged1 = Object.assign(merged);
    tmp = jsx(FadeOutLottieAnimationDefault, { loop: true, source: superReactionAnimationSourceFromLocalImage });
  }
  return tmp;
};
