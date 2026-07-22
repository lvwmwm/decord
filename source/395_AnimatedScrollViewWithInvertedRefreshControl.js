// Module ID: 395
// Function ID: 5764
// Name: AnimatedScrollViewWithInvertedRefreshControl
// Dependencies: []
// Exports: default

// Module 395 (AnimatedScrollViewWithInvertedRefreshControl)
let closure_2 = [];
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
({ cloneElement: closure_6, useMemo: closure_7 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
function AnimatedScrollViewWithInvertedRefreshControl(ref) {
  let intermediatePropsForRefreshControl;
  let intermediatePropsForScrollView;
  const tmp = callback2(ref, closure_3);
  const importDefault = tmp;
  const items = [tmp];
  ({ intermediatePropsForRefreshControl, intermediatePropsForScrollView } = callback4(() => {
    const tmp = tmp(closure_1[4]);
    const tmpResult = tmp(tmp(closure_1[5])(tmp.style));
    let obj = { intermediatePropsForRefreshControl: obj, intermediatePropsForScrollView: Object.assign({}, tmp, obj) };
    obj = { style: tmpResult.outer };
    obj = { style: tmpResult.inner };
    return obj;
  }, items));
  const tmp3 = callback(importDefault(dependencyMap[6])(intermediatePropsForRefreshControl), 2);
  const first = tmp3[0];
  let obj = { ref: tmp3[1] };
  const tmp2 = callback4(() => {
    const tmp = tmp(closure_1[4]);
    const tmpResult = tmp(tmp(closure_1[5])(tmp.style));
    let obj = { intermediatePropsForRefreshControl: obj, intermediatePropsForScrollView: Object.assign({}, tmp, obj) };
    obj = { style: tmpResult.outer };
    obj = { style: tmpResult.inner };
    return obj;
  }, items);
  const tmp6 = callback(importDefault(dependencyMap[6])(intermediatePropsForScrollView), 2);
  const first1 = tmp6[0];
  const tmp5 = callback3(tmp.refreshControl, Object.assign({}, first, obj));
  obj = { ref: importDefault(dependencyMap[7])(tmp6[1], ref.ref), refreshControl: tmp5 };
  const tmp8 = importDefault(dependencyMap[7])(tmp6[1], ref.ref);
  const tmp9 = importDefault(dependencyMap[8]);
  obj.style = importDefault(dependencyMap[9]).compose(first1.style, first.style);
  return <tmp9 {...Object.assign({}, first1, obj)} />;
}
const tmp3 = arg1(dependencyMap[2]);
let closure_10 = importDefault(dependencyMap[10])(importDefault(dependencyMap[8]));

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
  tmp2 = <closure_10 {...Object.assign({ scrollEventThrottle: 0.0001 }, tmp, { ref })} />;
};
