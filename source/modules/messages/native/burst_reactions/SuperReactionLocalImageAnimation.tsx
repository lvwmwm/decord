// Module ID: 9316
// Function ID: 72796
// Name: SuperReactionLocalImageAnimation
// Dependencies: []
// Exports: default

// Module 9316 (SuperReactionLocalImageAnimation)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx");

export default function SuperReactionLocalImageAnimation(arg0) {
  let animationSource;
  let localImageSource;
  let tmp = null;
  ({ localImageSource, animationSource } = arg0);
  let obj = Object.create(null);
  obj.localImageSource = 0;
  obj.animationSource = 0;
  const merged = Object.assign(arg0, obj);
  obj = arg1(dependencyMap[2]);
  const superReactionAnimationSourceFromLocalImage = obj.useSuperReactionAnimationSourceFromLocalImage({ animationSource, localImageSource });
  if (null != superReactionAnimationSourceFromLocalImage) {
    obj = { loop: true, source: superReactionAnimationSourceFromLocalImage };
    const merged1 = Object.assign(merged);
    tmp = jsx(importDefault(dependencyMap[3]), obj);
    const tmp8 = importDefault(dependencyMap[3]);
  }
  return tmp;
};
