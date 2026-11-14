// Module ID: 1823
// Function ID: 1824
// Name: ReanimatedFlatList
// Dependencies: [109, 19, 17, 21, 1824, 1885, 1884]
// Exports: ReanimatedFlatList

// Module 1823 (ReanimatedFlatList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import NativeEventsManager from "NativeEventsManager" /* 1824 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle", "ref"];
({ useMemo: closure_4, useRef: hasOwnProperty } = react);
const FlatList = react_native.FlatList;
const jsx = Fragment.jsx;
let closure_7 = NativeEventsManager.createAnimatedComponent(FlatList);

export function ReanimatedFlatList(arg0) {
  let CellRendererComponentStyle;
  let itemLayoutAnimation;
  let ref;
  let skipEnteringExitingAnimations;
  ({ itemLayoutAnimation, CellRendererComponentStyle } = arg0);
  ({ skipEnteringExitingAnimations, ref } = arg0);
  let tmp = _objectWithoutProperties(arg0, closure_2);
  if (!("scrollEventThrottle" in tmp)) {
    tmp.scrollEventThrottle = 1;
  }
  const tmp2 = closure_5(itemLayoutAnimation);
  _require = tmp2;
  tmp2.current = itemLayoutAnimation;
  const tmp3 = closure_5(CellRendererComponentStyle);
  dependencyMap = tmp3;
  tmp3.current = CellRendererComponentStyle;
  const tmp4 = closure_4(() => (onLayout) => {
    let current;
    let items;
    let current1;
    const AnimatedView = closure_2_0(closure_2_1[5]).AnimatedView;
    const tmp = closure_2_6;
    if (ref != null) {
      current1 = ref.current;
    }
    const obj = { layout: current1, onLayout: onLayout.onLayout, style: items, children: onLayout.children };
    items = [onLayout.style, ];
    let current2;
    if (closure_1 != null) {
      current2 = obj2.current;
    }
    if (typeof current2 === "function") {
      let currentResult;
      if (closure_1 != null) {
        const obj4 = { index: null, item: null };
        ({ index: obj3.index, item: obj3.item } = onLayout);
        currentResult = obj2.current(obj4);
      }
      current = currentResult;
    } else if (closure_1 != null) {
      current = obj2.current;
    }
    items[1] = current;
    return tmp(AnimatedView, obj);
  }, []);
  const merged = Object.assign(tmp);
  const tmp7 = <closure_7 ref={ref} CellRendererComponent={tmp4} />;
  let tmp5Result = tmp7;
  const tmp5 = jsx;
  if (undefined !== skipEnteringExitingAnimations) {
    const obj2 = { skipEntering: true, skipExiting: true, children: tmp7 };
    tmp5Result = tmp5(require("module_1884").LayoutAnimationConfig, obj2);
  }
  return tmp5Result;
}
