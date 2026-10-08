// Module ID: 1688
// Function ID: 1689
// Name: ReanimatedFlatList
// Dependencies: [109, 19, 17, 21, 1689, 1795, 1793, 1794]

// Module 1688 (ReanimatedFlatList)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import module_1689 from "module_1689" /* 1689 */;
import module_1794 from "componentWithRef" /* 1794 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap, skipEnteringExitingAnimations;

let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle"];
const useRef = react2.useRef;
const FlatList = react_native.FlatList;
const jsx = Fragment.jsx;
let closure_7 = module_1689.createAnimatedComponent(FlatList);

export const ReanimatedFlatList = module_1794.componentWithRef((skipEnteringExitingAnimations, ref) => {
  let CellRendererComponentStyle;
  let itemLayoutAnimation;
  ({ itemLayoutAnimation, CellRendererComponentStyle } = skipEnteringExitingAnimations);
  skipEnteringExitingAnimations = skipEnteringExitingAnimations.skipEnteringExitingAnimations;
  let tmp = _objectWithoutProperties(skipEnteringExitingAnimations, closure_2);
  if (!("scrollEventThrottle" in tmp)) {
    tmp.scrollEventThrottle = 1;
  }
  const tmp2 = useRef(itemLayoutAnimation);
  _require = tmp2;
  tmp2.current = itemLayoutAnimation;
  const tmp3 = useRef(CellRendererComponentStyle);
  dependencyMap = tmp3;
  tmp3.current = CellRendererComponentStyle;
  const memo = react.useMemo(() => (onLayout) => {
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
  const tmp7 = <closure_7 ref={arg1} CellRendererComponent={memo} />;
  let tmp5Result = tmp7;
  const tmp5 = jsx;
  if (undefined !== skipEnteringExitingAnimations) {
    const obj2 = { skipEntering: true, skipExiting: true, children: tmp7 };
    tmp5Result = tmp5(require("module_1793").LayoutAnimationConfig, obj2);
  }
  return tmp5Result;
});
