// Module ID: 1670
// Function ID: 1671
// Name: ReanimatedFlatList
// Dependencies: [109, 19, 17, 21, 1671, 1777, 1775, 1776]

// Module 1670 (ReanimatedFlatList)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle"];
const useRef = fn(19).useRef;
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1671);
let closure_7 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).FlatList);
const module_1776 = fn(1776);

export const ReanimatedFlatList = module_1776.componentWithRef((skipEnteringExitingAnimations, ref) => {
  ({ itemLayoutAnimation, CellRendererComponentStyle } = skipEnteringExitingAnimations);
  const tmp = _objectWithoutProperties(skipEnteringExitingAnimations, closure_2);
  if (!("scrollEventThrottle" in tmp)) {
    tmp.scrollEventThrottle = 1;
  }
  const tmp2 = useRef(itemLayoutAnimation);
  _require = tmp2;
  tmp2.current = itemLayoutAnimation;
  const tmp3 = useRef(CellRendererComponentStyle);
  dependencyMap = tmp3;
  tmp3.current = CellRendererComponentStyle;
  let obj = { ref };
  const memo = noop.useMemo(() => (onLayout) => {
    let current1;
    if (ref != null) {
      current1 = ref.current;
    }
    const obj = { layout: current1, onLayout: onLayout.onLayout, style: null, children: null };
    const items = [onLayout.style, ];
    let current2;
    if (closure_1 != null) {
      current2 = obj2.current;
    }
    if (typeof current2 === "function") {
      let currentResult;
      if (obj2 != null) {
        ({ index: obj3.index, item: obj3.item } = onLayout);
        currentResult = obj2.current({ index: null, item: null });
        const obj4 = { index: null, item: null };
      }
      let current = currentResult;
    } else if (obj2 != null) {
      current = obj2.current;
    }
    items[1] = current;
    obj.style = items;
    obj.children = onLayout.children;
    return jsx(ref(closure_1[5]).AnimatedView, { layout: current1, onLayout: onLayout.onLayout, style: null, children: null });
  }, []);
  const merged = Object.assign(tmp);
  obj.CellRendererComponent = memo;
  const tmp7 = <closure_7 ref={arg1} />;
  let tmp5Result = tmp7;
  if (undefined !== skipEnteringExitingAnimations.skipEnteringExitingAnimations) {
    const obj2 = { skipEntering: true, skipExiting: true, children: tmp7 };
    tmp5Result = jsx(require("module_1775").LayoutAnimationConfig, { skipEntering: true, skipExiting: true, children: tmp7 });
  }
  return tmp5Result;
});
