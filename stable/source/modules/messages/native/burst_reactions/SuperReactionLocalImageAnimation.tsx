// Module ID: 9937
// Function ID: 9938
// Name: SuperReactionLocalImageAnimation
// Dependencies: [19, 21, 4972, 5617, 2]
// Exports: default

// Module 9937 (SuperReactionLocalImageAnimation)
import Fragment from "Fragment" /* 21 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 4972 */;
import FadeOutLottieAnimationDefault from "FadeOutLottieAnimation" /* 5617 */;
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
