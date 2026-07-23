// Module ID: 1638
// Function ID: 18331
// Name: TransitionType
// Dependencies: [1639, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650]

// Module 1638 (TransitionType)
const merged = Object.assign({}, require("FadeInData").FadeInData, require("FadeInData").FadeOutData, require("BounceInData").BounceInData, require("BounceInData").BounceOutData, require("FlipInData").FlipInData, require("FlipInData").FlipOutData, require("StretchInData").StretchInData, require("StretchInData").StretchOutData, require("ZoomInData").ZoomInData, require("ZoomInData").ZoomOutData, require("SlideInData").SlideInData, require("SlideInData").SlideOutData, require("LightSpeedInData").LightSpeedInData, require("LightSpeedInData").LightSpeedOutData, require("PinwheelData").PinwheelData, require("RotateInData").RotateInData, require("RotateInData").RotateOutData, require("RollInData").RollInData, require("RollInData").RollOutData);

export const TransitionType = { LINEAR: 0, [0]: "LINEAR", SEQUENCED: 1, [1]: "SEQUENCED", FADING: 2, [2]: "FADING", JUMPING: 3, [3]: "JUMPING", CURVED: 4, [4]: "CURVED", ENTRY_EXIT: 5, [5]: "ENTRY_EXIT" };
export const AnimationsData = merged;
export const Animations = Object.assign({}, require("FadeInData").FadeIn, require("FadeInData").FadeOut, require("BounceInData").BounceIn, require("BounceInData").BounceOut, require("FlipInData").FlipIn, require("FlipInData").FlipOut, require("StretchInData").StretchIn, require("StretchInData").StretchOut, require("ZoomInData").ZoomIn, require("ZoomInData").ZoomOut, require("SlideInData").SlideIn, require("SlideInData").SlideOut, require("LightSpeedInData").LightSpeedIn, require("LightSpeedInData").LightSpeedOut, require("PinwheelData").Pinwheel, require("RotateInData").RotateIn, require("RotateInData").RotateOut, require("RollInData").RollIn, require("RollInData").RollOut);
