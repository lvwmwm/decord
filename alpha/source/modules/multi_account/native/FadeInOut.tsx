// Module ID: 19154
// Function ID: 19155
// Name: FadeInOut
// Dependencies: [19, 21, 1655, 5548, 1708, 2]
// Exports: default

// Module 19154 (FadeInOut)
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let react = react_mod;
const jsx = Fragment.jsx;
let closure_5 = { code: "(function FadeInOutTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let closure_6 = { code: "(function FadeInOutTsx2(finished){let[scheduleOnRN,handleTransitionFinished]=this.__closure;if(finished){scheduleOnRN(handleTransitionFinished);}})" };
let result = size.fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default function FadeInOut(duration) {
  let children;
  let closure_3;
  let ref;
  let style;
  let tmp3;
  let tmp4;
  duration = duration.duration;
  let ref1;
  react = undefined;
  ({ children, style, ref } = duration);
  let tmp = ref1;
  let obj = duration(ref1[2]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = duration(ref1[2]);
  let items = [closure_5, sharedValue];
  let c0;
  [tmp3, tmp4] = items;
  class FadeInOutTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  let items1 = [tmp4];
  FadeInOutTsx1.__closure = items1;
  FadeInOutTsx1.__workletHash = 15661759270347;
  FadeInOutTsx1.__initData = tmp3;
  const animatedStyle = obj2.useAnimatedStyle(FadeInOutTsx1);
  ref1 = react.useRef(null);
  const items2 = [ref1];
  react = react.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current();
    }
  }, items2);
  const imperativeHandle = react.useImperativeHandle(ref, () => {
    let obj = {
      componentDidAppear() {
        set = sharedValue.set;
        const obj = duration(ref1[3]);
        const obj2 = { duration };
        const result = set(obj.withTiming(1, obj2));
      },
      componentDidEnter() {
        set = sharedValue.set;
        const obj = duration(ref1[3]);
        const obj2 = { duration };
        const result = set(obj.withTiming(1, obj2));
      },
      componentWillLeave(current) {
        let tmp3;
        let tmp4;
        let tmp5;
        closure_1_2.current = current;
        let tmp = sharedValue;
        set = sharedValue.set;
        const items = [, , ];
        const obj = { duration };
        items[0] = closure_2_6;
        const withTiming = duration(ref1[3]).withTiming;
        const tmp2 = duration(ref1[3]);
        items[1] = duration(ref1[4]).scheduleOnRN;
        items[2] = closure_1_3;
        let c0;
        let c1;
        [tmp3, tmp4, tmp5] = items;
        class FadeInOutTsx2 {
          constructor(arg0) {
            tmp = current;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              tmp4 = closure_0(closure_1);
            }
            return;
          }
        }
        const items1 = [tmp4, tmp5];
        FadeInOutTsx2.__closure = items1;
        FadeInOutTsx2.__workletHash = 4334797531387;
        FadeInOutTsx2.__initData = tmp3;
        const result = set(withTiming(0, obj, "respect-motion-settings", FadeInOutTsx2));
      }
    };
    return obj;
  });
  const items3 = [style, animatedStyle];
  return jsx(sharedValue(tmp[2]).View, { style: items3, children });
};
