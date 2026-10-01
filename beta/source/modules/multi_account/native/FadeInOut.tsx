// Module ID: 16015
// Function ID: 16016
// Name: FadeInOut
// Dependencies: [19, 21, 4566, 4837, 2]

// Module 16015 (FadeInOut)
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let duration, set;

let react = react_mod;
const jsx = Fragment.jsx;
const __initData = { code: "function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_6 = { code: "function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const forwardRefResult = react.forwardRef((duration, ref) => {
  let children;
  let closure_3;
  let style;
  duration = duration.duration;
  ref = undefined;
  react = undefined;
  ({ children, style } = duration);
  let obj = duration(ref[2]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = duration(ref[2]);
  let fn = function h() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8749472415282;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  ref = react.useRef(null);
  const items = [ref];
  react = react.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = react.useImperativeHandle(ref, () => {
    let handleTransitionFinished;
    let obj = {
      componentDidAppear() {
        set = sharedValue.set;
        const obj = duration(ref[3]);
        const obj2 = { duration };
        const result = set(obj.withTiming(1, obj2));
      },
      componentDidEnter() {
        set = sharedValue.set;
        const obj = duration(ref[3]);
        const obj2 = { duration };
        const result = set(obj.withTiming(1, obj2));
      },
      componentWillLeave(current) {
        closure_1_2.current = current;
        set = sharedValue.set;
        let obj = duration(ref[3]);
        const fn = function t(arg0) {
          const tmp = arg0;
          if (tmp) {
            const obj = duration(ref[2]);
            obj.runOnJS(handleTransitionFinished)();
          }
        };
        const obj2 = { duration };
        fn.__closure = { runOnJS: duration(ref[2]).runOnJS, handleTransitionFinished };
        fn.__workletHash = 7644958904451;
        fn.__initData = __initData;
        ({ runOnJS: duration(ref[2]).runOnJS, handleTransitionFinished });
        const result = set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
      }
    };
    return obj;
  });
  const items1 = [style, animatedStyle];
  return jsx(sharedValue(ref[2]).View, { style: items1, children });
});
let result = size.fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default forwardRefResult;
