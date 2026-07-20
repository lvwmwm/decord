// Module ID: 380
// Function ID: 5666
// Name: unstable_createAnimatedComponentWithAllowlist
// Dependencies: []
// Exports: default

// Module 380 (unstable_createAnimatedComponentWithAllowlist)
function unstable_createAnimatedComponentWithAllowlist(displayName, arg1) {
  const importDefault = displayName;
  closure_1 = importDefault(closure_1[4])(arg1);
  class AnimatedComponent {
    constructor(arg0) {
      tmp = closure_3(arg1(closure_4(displayName, closure_2)), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      displayName = style;
      style = undefined;
      tmp3 = displayName(arg1[5])(tmp[1], displayName.ref);
      if (null != passthroughAnimatedPropExplicitValues) {
        style = passthroughAnimatedPropExplicitValues.style;
      }
      arg1 = style;
      items = [, ];
      items[0] = style;
      items[1] = style;
      obj = { style: closure_5(() => style(style[6])(style, style), items), ref: tmp3 };
      return closure_6(displayName, Object.assign({}, first, passthroughAnimatedPropExplicitValues, obj));
    }
  }
  AnimatedComponent.displayName = "Animated(" + displayName.displayName || "Anonymous" + ")";
  return AnimatedComponent;
}
let closure_2 = ["ellipsizeMode"];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
const useMemo = arg1(dependencyMap[2]).useMemo;
const jsx = arg1(dependencyMap[3]).jsx;

export default function createAnimatedComponent(displayName) {
  return unstable_createAnimatedComponentWithAllowlist(displayName, null);
};
export { unstable_createAnimatedComponentWithAllowlist };
