// Module ID: 8635
// Function ID: 8636
// Name: SuperReactionLocalImageAnimation
// Dependencies: [19, 21, 7243, 7286, 2]
// Exports: default

// Module 8635 (SuperReactionLocalImageAnimation)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_generateAnimationSource").fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx");

export default function SuperReactionLocalImageAnimation(arg0) {
  let animationSource;
  let localImageSource;
  let tmp = null;
  ({ localImageSource, animationSource } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = require(7243) /* _generateAnimationSource */;
  const superReactionAnimationSourceFromLocalImage = obj.useSuperReactionAnimationSourceFromLocalImage({ animationSource, localImageSource });
  if (null != superReactionAnimationSourceFromLocalImage) {
    obj = { loop: true, source: null };
    obj[1] = superReactionAnimationSourceFromLocalImage;
    const merged1 = Object.assign(merged);
    tmp = jsx(importDefault(7286), { loop: true, source: null });
    const tmp7 = importDefault(7286);
  }
  return tmp;
};
