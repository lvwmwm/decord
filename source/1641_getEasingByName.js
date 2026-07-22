// Module ID: 1641
// Function ID: 18335
// Name: getEasingByName
// Dependencies: []

// Module 1641 (getEasingByName)
const obj = { linear: [true, true, true, true], ease: [true, true, true, true], quad: [], cubic: [false, false, false, false], sin: ["AllowGameFriendDmsInDiscord", "otherKey", "adding", "setPartition"], circle: ["Radio", "MKTG_VIDEO_PLAYED", "NO_CLASSIFICATION", "useIdentityRegistrationStep"], exp: ["<string:760318817>", "<string:2169717220>", "<string:3881893892>", "<string:1805075793>"] };
arg5.WebEasings = obj;
arg5.getEasingByName = function getEasingByName(linear) {
  return "cubic-bezier(" + obj[linear].toString() + ")";
};
arg5.maybeGetBezierEasing = function maybeGetBezierEasing(easingV) {
  if ("factory" in easingV) {
    const factory = easingV.factory;
    if ("__closure" in factory) {
      const __closure = factory.__closure;
      let combined = null;
      if ("Bezier" in __closure) {
        const _HermesInternal = HermesInternal;
        combined = "cubic-bezier(" + __closure.x1 + ", " + __closure.y1 + ", " + __closure.x2 + ", " + __closure.y2 + ")";
      }
      return combined;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
