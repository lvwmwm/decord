// Module ID: 9324
// Function ID: 72850
// Name: SuperReactionLocalImageAnimation
// Dependencies: [31, 33, 7026, 7069, 2]
// Exports: default

// Module 9324 (SuperReactionLocalImageAnimation)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_generateAnimationSource").fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx");

export default function SuperReactionLocalImageAnimation(arg0) {
  let animationSource;
  let localImageSource;
  let tmp = null;
  ({ localImageSource, animationSource } = arg0);
  let obj = Object.create(null);
  obj.localImageSource = 0;
  obj.animationSource = 0;
  const merged = Object.assign(arg0, obj);
  obj = require(7026) /* _generateAnimationSource */;
  const superReactionAnimationSourceFromLocalImage = obj.useSuperReactionAnimationSourceFromLocalImage({ animationSource, localImageSource });
  if (null != superReactionAnimationSourceFromLocalImage) {
    obj = { loop: true, source: superReactionAnimationSourceFromLocalImage };
    const merged1 = Object.assign(merged);
    tmp = jsx(importDefault(7069), { loop: true, source: superReactionAnimationSourceFromLocalImage });
    const tmp8 = importDefault(7069);
  }
  return tmp;
};
