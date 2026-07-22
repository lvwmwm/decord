// Module ID: 14993
// Function ID: 112905
// Dependencies: []

// Module 14993
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = { code: "function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_6 = { code: "function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const forwardRefResult = importAllResult.forwardRef((duration) => {
  let children;
  let style;
  const arg1 = duration.duration;
  ({ children, style } = duration);
  const sharedValue = arg1(dependencyMap[2]).useSharedValue(0);
  const importDefault = sharedValue;
  const obj = arg1(dependencyMap[2]);
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8749472415282;
  fn.__initData = closure_5;
  const animatedStyle = arg1(dependencyMap[2]).useAnimatedStyle(fn);
  const ref = React.useRef(null);
  const dependencyMap = ref;
  const items = [ref];
  const React = React.useCallback(() => {
    if (null != ref.current) {
      ref.current();
    }
  }, items);
  const imperativeHandle = React.useImperativeHandle(arg1, () => ({
    componentDidAppear() {
      let obj = callback(closure_2[3]);
      obj = { duration: callback };
      const result = store.set(obj.withTiming(1, obj));
    },
    componentDidEnter() {
      let obj = callback(closure_2[3]);
      obj = { duration: callback };
      const result = store.set(obj.withTiming(1, obj));
    },
    componentWillLeave(current) {
      closure_2.current = current;
      let obj = callback(closure_2[3]);
      obj = { duration: callback };
      const fn = function t(arg0) {
        if (arg0) {
          callback(closure_2[2]).runOnJS(closure_3)();
          const obj = callback(closure_2[2]);
        }
      };
      obj = { runOnJS: callback(closure_2[2]).runOnJS, handleTransitionFinished: closure_3 };
      fn.__closure = obj;
      fn.__workletHash = 7644958904451;
      fn.__initData = closure_6;
      const result = store.set(obj.withTiming(0, obj, "respect-motion-settings", fn));
    }
  }));
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return jsx(importDefault(dependencyMap[2]).View, { style, children });
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default forwardRefResult;
