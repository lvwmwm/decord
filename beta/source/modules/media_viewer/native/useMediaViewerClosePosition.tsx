// Module ID: 12542
// Function ID: 12543
// Name: useMediaViewerClosePosition
// Dependencies: [32, 19, 1074, 12539, 6383, 4566, 2]
// Exports: default

// Module 12542 (useMediaViewerClosePosition)
import Constants from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import getMediaViewerStateForScreenDefault from "getMediaViewerStateForScreen" /* 12539 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_5;

let react = react_mod;
const NOOP = Constants.NOOP;
let closure_6 = { code: "function useMediaViewerClosePositionTsx1(){const{index}=this.__closure;return index.get();}" };
const __initData = { code: "function useMediaViewerClosePositionTsx2(index){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index);}" };
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerClosePosition.tsx");

export default function useMediaViewerClosePosition(index) {
  let callback;
  let closure_4;
  index = index.index;
  const sources = index.sources;
  let onClose = index.onClose;
  if (onClose === undefined) {
    onClose = closure_5;
  }
  const windowHeight = index.windowHeight;
  const windowWidth = index.windowWidth;
  let tmp = sources(windowHeight[4])(onClose);
  react = tmp;
  const tmp2 = windowWidth(react.useState(() => {
    let obj;
    const tmp3 = sources[index.get(index)];
    const tmp = windowWidth;
    if (null != tmp3) {
      obj = getMediaViewerStateForScreenDefault(tmp, tmp2, tmp3);
    } else {
      obj = { height: windowHeight };
    }
    return (windowHeight + obj.height) / 2;
  }), 2);
  closure_5 = tmp2[1];
  const items = [tmp, sources, windowHeight, windowWidth];
  const first = tmp2[0];
  const setClosePosition = react.useCallback((arg0) => {
    let obj;
    if (null == sources[arg0]) {
      closure_4();
    }
    const tmp4 = closure_5;
    if (null != sources[arg0]) {
      obj = getMediaViewerStateForScreenDefault(tmp5, tmp6, tmp);
    } else {
      obj = { height: windowHeight };
    }
    tmp4((windowHeight + obj.height) / 2);
  }, items);
  let obj = index(windowHeight[5]);
  const fn = function h() {
    return index.get();
  };
  fn.__closure = { index };
  fn.__workletHash = 5031282724746;
  fn.__initData = setClosePosition;
  const fn2 = function f(arg0) {
    const obj = ReanimatedRexport;
    obj.runOnJS(callback)(arg0);
  };
  fn2.__closure = { runOnJS: index(windowHeight[5]).runOnJS, setClosePosition };
  fn2.__workletHash = 2709880768438;
  fn2.__initData = __initData;
  ({ runOnJS: index(windowHeight[5]).runOnJS, setClosePosition });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items1 = [setClosePosition, index];
  const effect = react.useEffect(() => {
    callback(index.get());
  }, items1);
  return first;
};
