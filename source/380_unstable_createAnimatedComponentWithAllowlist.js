// Module ID: 380
// Function ID: 5666
// Name: unstable_createAnimatedComponentWithAllowlist
// Dependencies: [57, 29, 31, 33, 381, 325, 255]
// Exports: default

// Module 380 (unstable_createAnimatedComponentWithAllowlist)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { useMemo } from "result";
import { jsx } from "jsxProd";

function unstable_createAnimatedComponentWithAllowlist(displayName, arg1) {
  const importDefault = displayName;
  const dependencyMap = importDefault(381)(arg1);
  class AnimatedComponent {
    constructor(arg0) {
      tmp = outer1_3(style(outer1_4(displayName, outer1_2)), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      style = undefined;
      tmp3 = closure_0(closure_1[5])(tmp[1], displayName.ref);
      if (null != passthroughAnimatedPropExplicitValues) {
        style = passthroughAnimatedPropExplicitValues.style;
      }
      items = [, ];
      items[0] = style;
      items[1] = style;
      obj = { style: outer1_5(() => style(style2[6])(style, style), items), ref: tmp3 };
      return outer1_6(style, Object.assign({}, first, passthroughAnimatedPropExplicitValues, obj));
    }
  }
  AnimatedComponent.displayName = "Animated(" + displayName.displayName || "Anonymous" + ")";
  return AnimatedComponent;
}
let closure_2 = ["ref"];

export default function createAnimatedComponent(displayName) {
  return unstable_createAnimatedComponentWithAllowlist(displayName, null);
};
export { unstable_createAnimatedComponentWithAllowlist };
