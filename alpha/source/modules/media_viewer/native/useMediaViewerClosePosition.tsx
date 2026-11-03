// Module ID: 14937
// Function ID: 14938
// Name: useMediaViewerClosePosition
// Dependencies: [32, 19, 1072, 14933, 7257, 1652, 1705, 2]
// Exports: default

// Module 14937 (useMediaViewerClosePosition)
import Constants from "Constants" /* 1072 */;
import getMediaViewerStateForScreenDefault from "getMediaViewerStateForScreen" /* 14933 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_5;

let react = react_mod;
const NOOP = Constants.NOOP;
let closure_6 = { code: "(function useMediaViewerClosePositionTsx1(){let[index]=this.__closure;return index.get();})" };
let closure_7 = { code: "(function useMediaViewerClosePositionTsx2(index){let[scheduleOnRN,setClosePosition]=this.__closure;scheduleOnRN(setClosePosition,index);})" };
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerClosePosition.tsx");

export default function useMediaViewerClosePosition(index) {
  let closure_4;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp8;
  let tmp9;
  index = index.index;
  const sources = index.sources;
  let onClose = index.onClose;
  if (onClose === undefined) {
    onClose = closure_5;
  }
  const windowHeight = index.windowHeight;
  const windowWidth = index.windowWidth;
  let tmp = windowHeight;
  const tmp2 = sources(windowHeight[4])(onClose);
  react = tmp2;
  let obj = react;
  let tmp3 = windowWidth(react.useState(() => {
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
  closure_5 = tmp3[1];
  const items = [tmp2, sources, windowHeight, windowWidth];
  const first = tmp3[0];
  const callback = react.useCallback((arg0) => {
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
  const tmp6 = index;
  const items1 = [callback, index];
  [tmp8, tmp9] = items1;
  function useMediaViewerClosePositionTsx1() {
    return _undefined.get();
  }
  const items2 = [tmp9];
  useMediaViewerClosePositionTsx1.__closure = items2;
  useMediaViewerClosePositionTsx1.__workletHash = 7521936949267;
  useMediaViewerClosePositionTsx1.__initData = tmp8;
  const items3 = [closure_7, , ];
  const useAnimatedReaction = index(windowHeight[5]).useAnimatedReaction;
  const tmp7 = index(windowHeight[5]);
  items3[1] = tmp6(tmp[6]).scheduleOnRN;
  items3[2] = callback;
  let c0;
  let c1;
  [tmp10, tmp11, tmp12] = items3;
  function useMediaViewerClosePositionTsx2(arg0) {
    _undefined(c1, arg0);
  }
  const items4 = [tmp11, tmp12];
  useMediaViewerClosePositionTsx2.__closure = items4;
  useMediaViewerClosePositionTsx2.__workletHash = 6277806213986;
  useMediaViewerClosePositionTsx2.__initData = tmp10;
  const animatedReaction = useAnimatedReaction(useMediaViewerClosePositionTsx1, useMediaViewerClosePositionTsx2);
  const items5 = [callback, index];
  const effect = obj.useEffect(() => {
    callback(index.get());
  }, items5);
  return first;
};
