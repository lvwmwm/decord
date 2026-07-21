// Module ID: 1641
// Function ID: 18335
// Name: getEasingByName
// Dependencies: []

// Module 1641 (getEasingByName)
const obj = { linear: [], ease: ["<string:1304559617>", "<string:4110352386>", "<string:2018574337>", "<string:3339142040>"], quad: [], cubic: ["scrollViewOffset", "onGestureHandlerStateChange", "onGestureHandlerEvent", "GUILD_DELETE"], sin: ["<string:1204045508>", "\u010Dlov\u011Bk", "mra\u010Dit se", "mu\u017E"], circle: [false, false, false, false], exp: ["<string:4166975489>", "<string:927465474>", "<string:1113653251>", "onFocusedInputTextChanged"] };
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
