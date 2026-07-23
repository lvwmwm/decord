// Module ID: 395
// Function ID: 5764
// Name: AnimatedScrollViewWithInvertedRefreshControl
// Dependencies: [57, 29, 31, 33, 396, 147, 397, 325, 340, 253, 380]
// Exports: default

// Module 395 (AnimatedScrollViewWithInvertedRefreshControl)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import result from "result";
import { jsx } from "jsxProd";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_6;
let closure_7;
let closure_2 = ["ref"];
let closure_3 = ["ref"];
({ cloneElement: closure_6, useMemo: closure_7 } = result);
function AnimatedScrollViewWithInvertedRefreshControl(ref) {
  let intermediatePropsForRefreshControl;
  let intermediatePropsForScrollView;
  let tmp = callback2(ref, closure_3);
  const importDefault = tmp;
  const items = [tmp];
  ({ intermediatePropsForRefreshControl, intermediatePropsForScrollView } = callback4(() => {
    tmp = tmp(outer1_1[4]);
    const tmpResult = tmp(tmp(outer1_1[5])(tmp.style));
    obj = { intermediatePropsForRefreshControl: obj, intermediatePropsForScrollView: Object.assign({}, tmp, obj) };
    obj = { style: tmpResult.outer };
    obj = { style: tmpResult.inner };
    return obj;
  }, items));
  const tmp3 = callback(importDefault(397)(intermediatePropsForRefreshControl), 2);
  const first = tmp3[0];
  let obj = { ref: tmp3[1] };
  const tmp2 = callback4(() => {
    tmp = tmp(outer1_1[4]);
    const tmpResult = tmp(tmp(outer1_1[5])(tmp.style));
    obj = { intermediatePropsForRefreshControl: obj, intermediatePropsForScrollView: Object.assign({}, tmp, obj) };
    obj = { style: tmpResult.outer };
    obj = { style: tmpResult.inner };
    return obj;
  }, items);
  const tmp6 = callback(importDefault(397)(intermediatePropsForScrollView), 2);
  const first1 = tmp6[0];
  const tmp5 = callback3(tmp.refreshControl, Object.assign({}, first, obj));
  obj = { ref: importDefault(325)(tmp6[1], ref.ref), refreshControl: tmp5 };
  const tmp8 = importDefault(325)(tmp6[1], ref.ref);
  const tmp9 = importDefault(340);
  obj.style = importDefault(253).compose(first1.style, first.style);
  return <tmp9 {...Object.assign({}, first1, obj)} />;
}

export default function AnimatedScrollViewWithOrWithoutInvertedRefreshControl(ref) {
  const tmp = callback2(ref, closure_2);
  if (null != tmp.refreshControl) {
    if (null != tmp.style) {
      const _Object = Object;
      let obj = { scrollEventThrottle: 0.0001 };
      obj = { ref, refreshControl: tmp.refreshControl };
      let tmp2 = <AnimatedScrollViewWithInvertedRefreshControl {...Object.assign(obj, tmp, obj)} />;
    }
    return tmp2;
  }
  tmp2 = <_isNativeReflectConstruct {...Object.assign({ scrollEventThrottle: 0.0001 }, tmp, { ref })} />;
};
