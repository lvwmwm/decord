// Module ID: 15156
// Function ID: 115394
// Dependencies: [31, 33, 3991, 4131, 2]

// Module 15156
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = { code: "function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_6 = { code: "function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const forwardRefResult = importAllResult.forwardRef((duration) => {
  let children;
  let style;
  duration = duration.duration;
  ({ children, style } = duration);
  const sharedValue = duration(ref[2]).useSharedValue(0);
  let obj = duration(ref[2]);
  let fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8749472415282;
  fn.__initData = closure_5;
  const animatedStyle = duration(ref[2]).useAnimatedStyle(fn);
  ref = importAllResult.useRef(null);
  const items = [ref];
  importAllResult = importAllResult.useCallback(() => {
    if (null != ref.current) {
      ref.current();
    }
  }, items);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    componentDidAppear() {
      let obj = duration(ref[3]);
      obj = { duration: outer1_0 };
      const result = outer1_1.set(obj.withTiming(1, obj));
    },
    componentDidEnter() {
      let obj = duration(ref[3]);
      obj = { duration: outer1_0 };
      const result = outer1_1.set(obj.withTiming(1, obj));
    },
    componentWillLeave(current) {
      outer1_2.current = current;
      let obj = duration(ref[3]);
      obj = { duration: outer1_0 };
      const fn = function t(arg0) {
        if (arg0) {
          duration(ref[2]).runOnJS(outer2_3)();
          const obj = duration(ref[2]);
        }
      };
      obj = { runOnJS: duration(ref[2]).runOnJS, handleTransitionFinished: outer1_3 };
      fn.__closure = obj;
      fn.__workletHash = 7644958904451;
      fn.__initData = outer2_6;
      const result = outer1_1.set(obj.withTiming(0, obj, "respect-motion-settings", fn));
    }
  }));
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return jsx(sharedValue(ref[2]).View, { style, children });
});
let result = require("module_3991").fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default forwardRefResult;
