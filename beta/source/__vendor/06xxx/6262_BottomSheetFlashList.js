// Module ID: 6262
// Function ID: 6263
// Name: BottomSheetFlashList
// Dependencies: [109, 19, 21, 6263, 6260]

// Module 6262 (BottomSheetFlashList)
import Fragment from "Fragment" /* 21 */;
import _mod6263 from "module_6263" /* 6263 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;

let focusHook;

let memo;
let metroRequire;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment"];
let react = react_mod;
const forwardRef = react.forwardRef;
({ useMemo: metroRequire, memo } = react);
react = react_mod;
const jsx = Fragment.jsx;
try {
  let FlashList = _mod6263;
} catch (err) {
}
const memoResult = memo(forwardRef((focusHook, ref) => {
  focusHook = focusHook.focusHook;
  const scrollEventsHandlersHook = focusHook.scrollEventsHandlersHook;
  const enableFooterMarginAdjustment = focusHook.enableFooterMarginAdjustment;
  let tmp = _objectWithoutProperties(focusHook, enableFooterMarginAdjustment);
  const tmp2 = closure_6(() => {
    const tmp = FlashList;
    if (!tmp) {
      throw "You need to install FlashList first, `yarn install @shopify/flash-list`";
    }
  }, []);
  const items = [focusHook, scrollEventsHandlersHook, enableFooterMarginAdjustment];
  FlashList = FlashList.FlashList;
  let merged = Object.assign(tmp);
  return <FlashList ref={arg1} renderScrollComponent={closure_6(() => forwardRef((arg0, ref) => {
    const merged = Object.assign(arg0, Object.assign({ data: 0 }));
    focusHook(scrollEventsHandlersHook[4]);
    const merged1 = Object.assign(merged);
    return <tmp2 ref={arg1} focusHook={focusHook} scrollEventsHandlersHook={scrollEventsHandlersHook} enableFooterMarginAdjustment={enableFooterMarginAdjustment} />;
  }), items)} />;
}));

export default memoResult;
export const BottomSheetFlashList = memoResult;
