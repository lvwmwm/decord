// Module ID: 1870
// Function ID: 1871
// Name: maybeBuild
// Dependencies: [1665]
// Exports: checkStyleOverwriting, maybeBuild

// Module 1870 (maybeBuild)
import _mod1665 from "module_1665" /* 1665 */;

let closure_2 = { targetOriginX: 0, targetOriginY: 0, targetWidth: 0, targetHeight: 0, targetGlobalOriginX: 0, targetGlobalOriginY: 0, targetBorderRadius: 0, windowWidth: 0, windowHeight: 0, currentOriginX: 0, currentOriginY: 0, currentWidth: 0, currentHeight: 0, currentGlobalOriginX: 0, currentGlobalOriginY: 0, currentBorderRadius: 0 };

export function checkStyleOverwriting(build, arr, arg2, fn) {
  const tmp = "build" in build && typeof build.build === "function";
  if (tmp) {
    let flatResult;
    let closure_0;
    const _Array = Array;
    const animations = build.build()(closure_2).animations;
    if (Array.isArray(arr)) {
      flatResult = arr.flat();
    } else {
      flatResult = [arr];
    }
    const _Boolean = Boolean;
    const found = flatResult.filter(Boolean);
    const mapped = found.map((initial) => {
      let value = initial;
      if ("initial" in initial) {
        value = initial.initial.value;
      }
      return value;
    });
    closure_0 = mapped.flatMap((item) => Object.keys(item));
    const _Object = Object;
    const keys = Object.keys(animations);
    const found1 = keys.filter((item) => closure_0.includes(item));
    if (found1.length > 0) {
      const logger = _mod1665.logger;
      let str = "Properties";
      const warn = logger.warn;
      if (1 === found1.length) {
        str = "Property";
      }
      const _HermesInternal = HermesInternal;
      warn("" + str + " \"" + found1.join(", ") + "\" of " + arg2 + " may be overwritten by a layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.");
      fn();
    }
  }
}
export function maybeBuild(_sharedTransition) {
  let buildResult = _sharedTransition;
  const tmp = "build" in _sharedTransition && typeof _sharedTransition.build === "function";
  if (tmp) {
    buildResult = _sharedTransition.build();
  }
  return buildResult;
}
