// Module ID: 13080
// Function ID: 13081
// Name: useMediaViewerClosePosition
// Dependencies: [32, 19, 1085, 13077, 558, 576, 6645, 4850, 2]

// Module 13080 (useMediaViewerClosePosition)
import Constants from "Constants" /* 1085 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import getMediaViewerStateForScreenDefault from "getMediaViewerStateForScreen" /* 13077 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_5;

let react = react_mod;
const NOOP = Constants.NOOP;
let __initData = { code: "function useMediaViewerClosePositionTsx1(){const{index}=this.__closure;return index.get();}" };
const __initData2 = { code: "function useMediaViewerClosePositionTsx2(index_1){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index_1);}" };
const __initData3 = { code: "function useMediaViewerClosePositionTsx3(){const{index}=this.__closure;return index.get();}" };
const __initData4 = { code: "function useMediaViewerClosePositionTsx4(index_1){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index_1);}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaViewerClosePosition(index) {
  let closure_4;
  let closure_6;
  let onClose;
  let windowHeight;
  let tmp = index;
  const tmp2 = windowHeight;
  let obj = index(windowHeight[5]);
  const cResult = obj.c(14);
  index = index.index;
  const sources = index.sources;
  ({ onClose, windowHeight } = index);
  const windowWidth = index.windowWidth;
  if (undefined === onClose) {
    onClose = closure_5;
  }
  let tmp4 = sources(tmp2[6])(onClose);
  react = tmp4;
  if (cResult[0] === index) {
    if (cResult[1] === sources) {
      if (cResult[2] === windowHeight) {
        let tmp5;
        if (cResult[3] === windowWidth) {
          tmp5 = cResult[4];
        }
        const tmp6 = windowWidth;
        closure_5 = windowWidth(react.useState(tmp5), 2)[1];
        const obj2 = react;
        const tmp7 = windowWidth(react.useState(tmp5), 2);
        if (cResult[5] === tmp4) {
          if (cResult[6] === sources) {
            if (cResult[7] === windowHeight) {
              let tmp9;
              if (cResult[8] === windowWidth) {
                tmp9 = cResult[9];
              }
              __initData = tmp9;
              const tmpResult = tmp(tmp2[7]);
              class H {
                constructor() {
                  return index.get();
                }
              }
              const obj3 = { index };
              H.__closure = obj3;
              H.__workletHash = 5031282724746;
              H.__initData = __initData;
              class V {
                constructor(arg0) {
                  const obj = ReanimatedRexport;
                  obj.runOnJS(closure_6)(arg0);
                }
              }
              const useAnimatedReaction = tmpResult.useAnimatedReaction;
              V.__closure = { runOnJS: tmp(tmp2[7]).runOnJS, setClosePosition: tmp9 };
              V.__workletHash = 10222005330358;
              V.__initData = __initData2;
              const obj4 = { runOnJS: tmp(tmp2[7]).runOnJS, setClosePosition: tmp9 };
              const animatedReaction = useAnimatedReaction(H, V);
              if (cResult[10] === index) {
                let tmp14;
                let tmp15;
                if (cResult[11] === tmp9) {
                  tmp14 = cResult[12];
                  tmp15 = cResult[13];
                }
                const effect = obj2.useEffect(tmp14, tmp15);
                return tmp8;
              }
              const fn3 = function b() {
                closure_6(index.get());
              };
              const items = [tmp9, index];
              cResult[10] = index;
              cResult[11] = tmp9;
              cResult[12] = fn3;
              cResult[13] = items;
              tmp15 = items;
              tmp14 = fn3;
            }
          }
        }
        const fn2 = function v(arg0) {
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
        };
        cResult[5] = tmp4;
        cResult[7] = windowHeight;
        cResult[8] = windowWidth;
        cResult[9] = fn2;
        tmp9 = fn2;
      }
    }
  }
  const fn = function c() {
    let obj;
    const tmp3 = sources[index.get(index)];
    const tmp = windowWidth;
    if (null != tmp3) {
      obj = getMediaViewerStateForScreenDefault(tmp, tmp2, tmp3);
    } else {
      obj = { height: windowHeight };
    }
    return (windowHeight + obj.height) / 2;
  };
  cResult[0] = index;
  cResult[1] = sources;
  cResult[2] = windowHeight;
  cResult[3] = windowWidth;
  cResult[4] = fn;
  tmp5 = fn;
}) : (function useMediaViewerClosePosition(index) {
  let closure_4;
  index = index.index;
  const sources = index.sources;
  let onClose = index.onClose;
  if (onClose === undefined) {
    onClose = closure_5;
  }
  const windowHeight = index.windowHeight;
  const windowWidth = index.windowWidth;
  let tmp = sources(windowHeight[6])(onClose);
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
  let obj = index(windowHeight[7]);
  class P {
    constructor() {
      return index.get();
    }
  }
  P.__closure = { index };
  P.__workletHash = 3888496641736;
  P.__initData = __initData3;
  const fn = function w(arg0) {
    const obj = ReanimatedRexport;
    obj.runOnJS(callback)(arg0);
  };
  fn.__closure = { runOnJS: index(windowHeight[7]).runOnJS, setClosePosition };
  fn.__workletHash = 9607289589872;
  fn.__initData = __initData4;
  ({ runOnJS: index(windowHeight[7]).runOnJS, setClosePosition });
  const animatedReaction = obj.useAnimatedReaction(P, fn);
  const items1 = [setClosePosition, index];
  const effect = react.useEffect(() => {
    callback(index.get());
  }, items1);
  return first;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerClosePosition.tsx");

export default tmp2;
