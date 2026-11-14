// Module ID: 14300
// Function ID: 14301
// Name: CheckpointFadeLayer
// Dependencies: [32, 19, 5307, 21, 1655, 504, 6836, 7790, 14266, 5548, 2]
// Exports: default

// Module 14300 (CheckpointFadeLayer)
import Fragment from "Fragment" /* 21 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import size from "module_2" /* 2 */;

let set, set2, tmp5, tmp6;

const jsx = Fragment.jsx;
const Easing = _mod1655.Easing;
let closure_7 = Easing.inOut(_mod1655.Easing.quad);
let closure_8 = { code: "(function CheckpointFadeLayerTsx1(finished){let[visible,runOnJS,handleEnterComplete,handleExitComplete]=this.__closure;if(finished!==true)return;if(visible)runOnJS(handleEnterComplete)();else runOnJS(handleExitComplete)();})" };
let closure_9 = { code: "(function CheckpointFadeLayerTsx2(){let[opacity,hiddenScale,scale]=this.__closure;return{opacity:opacity.get(),transform:hiddenScale===1?undefined:[{scale:scale.get()}]};})" };
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointFadeLayer.tsx");

export default function CheckpointFadeLayer(visible) {
  let Provider;
  let children;
  let easing;
  let items6;
  let keepMounted;
  let obj4;
  let str;
  let str2;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp29Result;
  visible = visible.visible;
  const enter = visible.enter;
  ({ exit: dependencyMap, keepMounted } = visible);
  if (keepMounted === undefined) {
    keepMounted = false;
  }
  let flag = visible.mountAfterDelay;
  if (flag === undefined) {
    flag = false;
  }
  let num = visible.hiddenScale;
  if (num === undefined) {
    num = 1;
  }
  ({ onExitComplete: AccessibilityStore, children } = visible);
  let sharedValue;
  let sharedValue2;
  let first;
  let closure_10;
  let first1;
  let closure_12;
  let closure_13;
  let closure_14;
  let context;
  let first2;
  let closure_17;
  let closure_18;
  flag = undefined;
  let ref;
  let tmp = visible;
  let tmp2 = dependencyMap;
  const style = visible.style;
  let obj = visible(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const tmp4 = visible(1655);
  let num2 = 0;
  const useSharedValue = tmp4.useSharedValue;
  if (visible) {
    num2 = 1;
  }
  sharedValue = useSharedValue(num2);
  let num3 = 1;
  const useSharedValue2 = tmp(1655).useSharedValue;
  const tmpResult = tmp(1655);
  if (!visible) {
    num3 = num;
  }
  sharedValue2 = useSharedValue2(num3);
  let obj2 = num;
  const tmp8 = keepMounted(num.useState(visible), 2);
  first = tmp8[0];
  closure_10 = tmp8[1];
  const tmp10 = keepMounted(num.useState(visible), 2);
  first1 = tmp10[0];
  closure_12 = tmp10[1];
  const tmpResult3 = tmp(6836);
  let currentWhen = tmpResult3.useCurrentWhen({ value: children, shouldUpdate: visible });
  let tmp13 = enter;
  closure_13 = enter(7790)(() => {
    closure_10(false);
    if (AccessibilityStore != null) {
      AccessibilityStore();
    }
  });
  closure_14 = num.useCallback(() => closure_12(true), []);
  context = num.useContext(enter(14266));
  const tmp15 = keepMounted(num.useState(null), 2);
  first2 = tmp15[0];
  closure_17 = tmp15[1];
  let items1 = [first1, first2, context];
  const callback = num.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = closure_17(arg0);
    return () => closure_17((arg0) => {
      let tmp = null;
      if (arg0 !== closure_1_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const effect = num.useEffect(() => {
    const tmp = first1;
    if (tmp) {
      if (null != first2) {
        if (null != context) {
          let closure_0 = tmp4(tmp2);
          return () => {
            if (typeof closure_0 === "function") {
              tmp();
            } else {
              context(null);
            }
          };
        }
      }
    }
  }, items1);
  const tmp19 = visible && !first && !keepMounted;
  closure_18 = tmp19;
  if (flag) {
    flag = !stateFromStores;
  }
  const items2 = [tmp19, flag, enter.delay];
  const effect1 = obj2.useEffect(() => {
    let closure_0;
    const tmp = closure_18;
    if (tmp) {
      const tmp2 = flag;
      if (tmp2) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => closure_1_10(true), enter.delay);
        return () => clearTimeout(closure_0);
      } else {
        closure_10(true);
      }
    }
  }, items2);
  ref = obj2.useRef(visible);
  const items3 = [visible, first];
  const effect2 = obj2.useEffect(() => {
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    const tmp = closure_18;
    if (!tmp) {
      if (ref.current !== visible) {
        ref.current = visible;
        if (visible) {
          closure_10(true);
        } else {
          closure_12(false);
        }
        const tmp11 = visible ? enter : dependencyMap;
        num = 0;
        if (!stateFromStores) {
          if (visible) {
            const tmp13 = keepMounted;
            if (!tmp13) {
              num = 0;
            }
          }
          num = tmp11.delay;
        }
        const obj = { duration: tmp11.duration, easing };
        set = sharedValue.set;
        const withDelay = _mod1655.withDelay;
        _mod1655;
        let num2 = 0;
        const withTiming = timing_timing.withTiming;
        if (visible) {
          num2 = 1;
        }
        const items = [closure_8, tmp2, _mod1655.runOnJS, closure_14, closure_13];
        let c0;
        let c1;
        let c2;
        let c3;
        [tmp25, tmp26, tmp27, tmp28, tmp29] = items;
        class CheckpointFadeLayerTsx1 {
          constructor(arg0) {
            if (true === arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              if (closure_0) {
                tmp5 = closure_2;
                tmp6 = tmp2(closure_2)();
              } else {
                tmp3 = closure_3;
                tmp4 = tmp2(closure_3)();
              }
            }
            return;
          }
        }
        const items1 = [tmp26, tmp27, tmp28, tmp29];
        CheckpointFadeLayerTsx1.__closure = items1;
        CheckpointFadeLayerTsx1.__workletHash = 11865216228706;
        CheckpointFadeLayerTsx1.__initData = tmp25;
        const result = set(withDelay(num, withTiming(num2, obj, "respect-motion-settings", CheckpointFadeLayerTsx1)));
        let num4 = 1;
        if (1 !== num) {
          set2 = sharedValue2.set;
          const withDelay2 = _mod1655.withDelay;
          _mod1655;
          const withTiming2 = timing_timing.withTiming;
          timing_timing;
          if (!visible) {
            num4 = tmp35;
          }
          set2(withDelay2(num, withTiming2(num4, obj)));
        }
      } else {
        let tmp3 = tmp2;
        if (!tmp3) {
          tmp3 = !first;
        }
        if (!tmp3) {
          tmp3 = keepMounted;
        }
        if (!tmp3) {
          closure_10(false);
        }
      }
    }
  }, items3);
  tmp(1655);
  const items4 = [first, sharedValue, num, sharedValue2];
  let c0;
  let c1;
  let c2;
  [tmp23, tmp24, tmp25, tmp26] = items4;
  class CheckpointFadeLayerTsx2 {
    constructor() {
      let tmp;
      const obj = { opacity: _undefined.get(), transform: tmp };
      tmp = undefined;
      if (1 !== c1) {
        const items = [{ scale: _undefined2.get() }];
        tmp = items;
        const obj2 = { scale: _undefined2.get() };
      }
      return obj;
    }
  }
  const items5 = [tmp24, tmp25, tmp26];
  CheckpointFadeLayerTsx2.__closure = items5;
  CheckpointFadeLayerTsx2.__workletHash = 17126880187642;
  CheckpointFadeLayerTsx2.__initData = tmp23;
  if (first) {
    const tmp29 = stateFromStores;
    const obj3 = { style: items6, pointerEvents: str, accessibilityElementsHidden: !visible, importantForAccessibility: str2, children: tmp29(Provider, obj4) };
    items6 = [style, tmp27];
    str = "none";
    const View = tmp13(1655).View;
    if (visible) {
      str = "auto";
    }
    str2 = "no-hide-descendants";
    if (visible) {
      str2 = "auto";
    }
    obj4 = { value: callback, children: currentWhen };
    Provider = tmp13(14266).Provider;
    if (visible) {
      currentWhen = children;
    }
    tmp29Result = tmp29(View, obj3);
  } else {
    tmp29Result = null;
  }
  return tmp29Result;
};
