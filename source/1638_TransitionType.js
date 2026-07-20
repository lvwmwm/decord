// Module ID: 1638
// Function ID: 18325
// Name: TransitionType
// Dependencies: []

// Module 1638 (TransitionType)
const merged = Object.assign({}, require(dependencyMap[0]).FadeInData, require(dependencyMap[0]).FadeOutData, require(dependencyMap[1]).BounceInData, require(dependencyMap[1]).BounceOutData, require(dependencyMap[2]).FlipInData, require(dependencyMap[2]).FlipOutData, require(dependencyMap[3]).StretchInData, require(dependencyMap[3]).StretchOutData, require(dependencyMap[4]).ZoomInData, require(dependencyMap[4]).ZoomOutData, require(dependencyMap[5]).SlideInData, require(dependencyMap[5]).SlideOutData, require(dependencyMap[6]).LightSpeedInData, require(dependencyMap[6]).LightSpeedOutData, require(dependencyMap[7]).PinwheelData, require(dependencyMap[8]).RotateInData, require(dependencyMap[8]).RotateOutData, require(dependencyMap[9]).RollInData, require(dependencyMap[9]).RollOutData);

export const TransitionType = { LINEAR: 0, [0]: "LINEAR", SEQUENCED: 1, [1]: "SEQUENCED", FADING: 2, [2]: "FADING", JUMPING: 3, [3]: "JUMPING", CURVED: 4, [4]: "CURVED", ENTRY_EXIT: 5, [5]: "ENTRY_EXIT" };
export const AnimationsData = merged;
export const Animations = Object.assign({}, require(dependencyMap[0]).FadeIn, require(dependencyMap[0]).FadeOut, require(dependencyMap[1]).BounceIn, require(dependencyMap[1]).BounceOut, require(dependencyMap[2]).FlipIn, require(dependencyMap[2]).FlipOut, require(dependencyMap[3]).StretchIn, require(dependencyMap[3]).StretchOut, require(dependencyMap[4]).ZoomIn, require(dependencyMap[4]).ZoomOut, require(dependencyMap[5]).SlideIn, require(dependencyMap[5]).SlideOut, require(dependencyMap[6]).LightSpeedIn, require(dependencyMap[6]).LightSpeedOut, require(dependencyMap[7]).Pinwheel, require(dependencyMap[8]).RotateIn, require(dependencyMap[8]).RotateOut, require(dependencyMap[9]).RollIn, require(dependencyMap[9]).RollOut);
