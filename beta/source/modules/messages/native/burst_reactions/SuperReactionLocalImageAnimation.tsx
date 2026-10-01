// Module ID: 10606
// Function ID: 10607
// Name: SuperReactionLocalImageAnimation
// Dependencies: [19, 21, 7203, 7246, 2]
// Exports: default

// Module 10606 (SuperReactionLocalImageAnimation)
import Fragment from "Fragment" /* 21 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 7203 */;
import FadeOutLottieAnimationDefault from "FadeOutLottieAnimation" /* 7246 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx");

export default function SuperReactionLocalImageAnimation(arg0) {
  let animationSource;
  let localImageSource;
  let tmp = null;
  ({ localImageSource, animationSource } = arg0);
  const merged = Object.assign(arg0, Object.assign({ localImageSource: 0, animationSource: 0 }));
  const obj = burst_reactions_BurstReactionEffectUtils;
  const superReactionAnimationSourceFromLocalImage = obj.useSuperReactionAnimationSourceFromLocalImage({ animationSource, localImageSource });
  if (null != superReactionAnimationSourceFromLocalImage) {
    FadeOutLottieAnimationDefault;
    const merged1 = Object.assign(merged);
    tmp = <tmp7 loop source={superReactionAnimationSourceFromLocalImage} />;
  }
  return tmp;
};
