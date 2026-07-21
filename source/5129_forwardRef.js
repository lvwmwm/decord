// Module ID: 5129
// Function ID: 43564
// Name: forwardRef
// Dependencies: []

// Module 5129 (forwardRef)
let memo;
let closure_2 = [null, null, null];
let closure_3 = ["a"];
let closure_5 = importDefault(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const forwardRef = tmp2.forwardRef;
({ useMemo: closure_7, memo } = tmp2);
importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]);
const memoResult = memo(forwardRef((focusHook, ref) => {
  focusHook = focusHook.focusHook;
  const importDefault = focusHook;
  const dependencyMap = scrollEventsHandlersHook;
  const enableFooterMarginAdjustment = focusHook.enableFooterMarginAdjustment;
  let closure_2 = enableFooterMarginAdjustment;
  callback2(() => {
    if (!closure_4) {
      throw "You need to install FlashList first, `yarn install @shopify/flash-list`";
    }
  }, []);
  const items = [focusHook, focusHook.scrollEventsHandlersHook, enableFooterMarginAdjustment];
  const tmp = callback(focusHook, closure_2);
  return <FlashList.FlashList {...Object.assign({
    ref: arg1,
    renderScrollComponent: callback2(() => callback((arg0, ref) => {
      let obj = { ref };
      obj = { focusHook: callback, scrollEventsHandlersHook: closure_1, enableFooterMarginAdjustment: closure_2 };
      const tmp = callback2(arg0, closure_3);
      return callback3(callback(closure_1[4]), Object.assign(obj, tmp, obj));
    }), items)
  }, tmp)} />;
}));

export default memoResult;
export const BottomSheetFlashList = memoResult;
