// Module ID: 17608
// Function ID: 17609
// Name: FramePool
// Dependencies: [32, 19, 17, 10772, 10767, 21, 5091, 558, 576, 1497, 504, 17024, 10913, 10889, 10769, 17609, 2]

// Module 17608 (FramePool)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10769 */;
import makeIframeIdDefault from "makeIframeId" /* 10889 */;
import FramePoolManagerDefault from "FramePoolManager" /* 17024 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 10772 */;
import FramesConstants from "FramesConstants" /* 10767 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let tmp;
const get_initialized = tmp(504);
const WebViewContext = tmp(10913);
const View = react_native.View;
({ FrameLayoutModes: metroImportDefault, isLaunched: metroImportAll } = FramesConstants);
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ pool: { position: "absolute", opacity: 0 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FramePool() {
  let allFrames;
  let height;
  let require;
  let tmp10;
  let tmp11;
  let tmp20;
  let tmp6;
  let tmp7;
  let width;
  let tmp = require;
  let obj = react2;
  const cResult = obj.c(18);
  const tmp4 = closure_10();
  ({ width, height } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function c() {
      return allFrames.getAllFrames();
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7);
  [tmp10, require] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(_nativeTag) {
        let num = 0;
        if (null != _nativeTag) {
          let num2 = _nativeTag._nativeTag;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        _require(num);
        const obj = FramePoolManagerDefault;
        obj.setPoolNodeTag(num);
      }
    }
    cResult[2] = E;
    tmp11 = E;
  } else {
    class E {
      constructor(_nativeTag) {
        let num = 0;
        if (null != _nativeTag) {
          let num2 = _nativeTag._nativeTag;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        _require(num);
        const obj = FramePoolManagerDefault;
        obj.setPoolNodeTag(num);
      }
    }
  }
  if (cResult[3] === height) {
    class E {
      constructor(_nativeTag) {
        let num = 0;
        if (null != _nativeTag) {
          let num2 = _nativeTag._nativeTag;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        _require(num);
        const obj = FramePoolManagerDefault;
        obj.setPoolNodeTag(num);
      }
    }
    if (cResult[6] === tmp4.pool) {
      class E {
        constructor(_nativeTag) {
          let num = 0;
          if (null != _nativeTag) {
            let num2 = _nativeTag._nativeTag;
            if (num2 == null) {
              num2 = 0;
            }
            num = num2;
          }
          _require(num);
          const obj = FramePoolManagerDefault;
          obj.setPoolNodeTag(num);
        }
      }
      if (cResult[9] !== stateFromStoresArray) {
        let tmp15;
        class E {
          constructor(_nativeTag) {
            let num = 0;
            if (null != _nativeTag) {
              let num2 = _nativeTag._nativeTag;
              if (num2 == null) {
                num2 = 0;
              }
              num = num2;
            }
            _require(num);
            const obj = FramePoolManagerDefault;
            obj.setPoolNodeTag(num);
          }
        }
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(frame) {
              let tmp = null;
              if (closure_1_8(frame)) {
                tmp = <closure_1_11 key={arg0.id} frame={arg0} />;
              }
              return tmp;
            }
          }
          cResult[11] = M;
          tmp15 = M;
        } else {
          class M {
            constructor(frame) {
              let tmp = null;
              if (closure_1_8(frame)) {
                tmp = <closure_1_11 key={arg0.id} frame={arg0} />;
              }
              return tmp;
            }
          }
        }
        const mapped = stateFromStoresArray.map(tmp15);
        cResult[9] = stateFromStoresArray;
        cResult[10] = mapped;
      } else {
        class M {
          constructor(frame) {
            let tmp = null;
            if (closure_1_8(frame)) {
              tmp = <closure_1_11 key={arg0.id} frame={arg0} />;
            }
            return tmp;
          }
        }
      }
      if (cResult[12] === tmp10) {
        class M {
          constructor(frame) {
            let tmp = null;
            if (closure_1_8(frame)) {
              tmp = <closure_1_11 key={arg0.id} frame={arg0} />;
            }
            return tmp;
          }
        }
        if (cResult[15] === tmp13) {
          class M {
            constructor(frame) {
              let tmp = null;
              if (closure_1_8(frame)) {
                tmp = <closure_1_11 key={arg0.id} frame={arg0} />;
              }
              return tmp;
            }
          }
          return tmp20;
        }
        const tmp23 = <View ref={tmp11} style={tmp13} pointerEvents="none">{tmp17}</View>;
        cResult[15] = tmp13;
        cResult[16] = tmp17;
        cResult[17] = tmp23;
        tmp20 = tmp23;
      }
      cResult[12] = tmp10;
      cResult[13] = tmp14;
      cResult[14] = jsx(WebViewContext.WebViewContext.Provider, { value: tmp10, children: tmp14 });
      const tmp19 = jsx(WebViewContext.WebViewContext.Provider, { value: tmp10, children: tmp14 });
    }
    const items1 = [tmp4.pool, tmp12];
    cResult[6] = tmp4.pool;
    cResult[7] = tmp12;
    cResult[8] = items1;
  }
  size = { width, height };
  cResult[3] = height;
  cResult[4] = width;
  cResult[5] = size;
}) : (function FramePool() {
  let allFrames;
  let height;
  let require;
  let tmp4;
  let width;
  let tmp = closure_10();
  ({ width, height } = useWindowDimensionsDefault());
  const tmp2 = useWindowDimensionsDefault();
  let obj = get_initialized;
  const items = [FramesStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => allFrames.getAllFrames());
  [tmp4, require] = _slicedToArray(react.useState(0), 2);
  const items1 = [tmp.pool, { width, height }];
  const tmp3 = _slicedToArray(react.useState(0), 2);
  ({
    value: tmp4,
    children: stateFromStoresArray.map((frame) => {
      let tmp = null;
      if (closure_1_8(frame)) {
        tmp = <closure_1_11 key={arg0.id} frame={arg0} />;
      }
      return tmp;
    })
  });
  const Provider = WebViewContext.WebViewContext.Provider;
  return <View ref={react.useCallback((_nativeTag) => {
    let num = 0;
    if (null != _nativeTag) {
      let num2 = _nativeTag._nativeTag;
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    _require(num);
    const obj = FramePoolManagerDefault;
    obj.setPoolNodeTag(num);
  }, [])} style={items1} pointerEvents="none">{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function PooledFrame(frame) {
  let closure_2;
  let first;
  let first1;
  let id;
  let obj = id(576);
  const cResult = obj.c(17);
  frame = frame.frame;
  id = frame.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return first1(closure_2[13])();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let obj2 = react;
  [first1, dependencyMap] = react.useState(first);
  if (cResult[1] === id) {
    let tmp6;
    let tmp7;
    let tmp10;
    let tmp9;
    let tmp12;
    let tmp14;
    if (cResult[2] === first1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const effect = obj2.useEffect(tmp6, tmp7);
    if (cResult[5] !== id) {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
      const items = [id];
      cResult[5] = id;
      cResult[6] = S;
      cResult[7] = items;
      tmp10 = items;
      tmp9 = S;
    } else {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
      tmp10 = cResult[7];
    }
    const effect1 = obj2.useEffect(tmp9, tmp10);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
      cResult[8] = tmp13;
      tmp12 = tmp13;
    } else {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
    }
    if (cResult[9] !== id) {
      class P {
        constructor() {
          const obj = FramePoolManagerDefault;
          return obj.getWinningTargetState(id);
        }
      }
      cResult[9] = id;
      cResult[10] = P;
      tmp14 = P;
    } else {
      class P {
        constructor() {
          const obj = FramePoolManagerDefault;
          return obj.getWinningTargetState(id);
        }
      }
    }
    const syncExternalStore = obj2.useSyncExternalStore(first1(17024).subscribe, tmp14);
    const tmp15 = first1;
    if (cResult[11] !== syncExternalStore) {
      class P {
        constructor() {
          const obj = FramePoolManagerDefault;
          return obj.getWinningTargetState(id);
        }
      }
      let tmp18 = syncExternalStore;
      if (syncExternalStore == null) {
        class P {
          constructor() {
            const obj = FramePoolManagerDefault;
            return obj.getWinningTargetState(id);
          }
        }
        tmp19[0] = constants.FOCUSED;
        tmp18 = tmp19;
      }
      cResult[11] = syncExternalStore;
      cResult[12] = tmp18;
    } else {
      class P {
        constructor() {
          const obj = FramePoolManagerDefault;
          return obj.getWinningTargetState(id);
        }
      }
    }
    if (cResult[13] === frame) {
      class P {
        constructor() {
          const obj = FramePoolManagerDefault;
          return obj.getWinningTargetState(id);
        }
      }
    }
    cResult[13] = frame;
    cResult[14] = first1;
    cResult[15] = tmp17;
    cResult[16] = jsx(tmp15(17609), { frame, iframeId: first1, onActivityCrash: tmp12, presentation: tmp17 }, first1);
    const tmp23 = jsx(tmp15(17609), { frame, iframeId: first1, onActivityCrash: tmp12, presentation: tmp17 }, first1);
  }
  const fn2 = function v() {
    let obj = FramePoolManagerDefault;
    obj.registerFrameEntry(id, first1);
    const obj2 = FramesActionCreatorsDefault;
    obj2.attachFrameIframe(id, first1);
    return () => {
      const obj = first1(closure_2[14]);
      obj.detachFrameIframe(id, closure_1_1);
    };
  };
  const items1 = [id, first1];
  cResult[1] = id;
  cResult[2] = first1;
  cResult[3] = fn2;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn2;
}) : (function PooledFrame(frame) {
  let closure_2;
  let iframeId;
  frame = frame.frame;
  iframeId = undefined;
  dependencyMap = undefined;
  const id = frame.id;
  [iframeId, dependencyMap] = react.useState(() => first(closure_2[13])());
  const items = [id, iframeId];
  const effect = react.useEffect(() => {
    let obj = FramePoolManagerDefault;
    obj.registerFrameEntry(id, first);
    const obj2 = FramesActionCreatorsDefault;
    obj2.attachFrameIframe(id, first);
    return () => {
      const obj = first(closure_2[14]);
      obj.detachFrameIframe(id, iframeId);
    };
  }, items);
  const items1 = [id];
  const effect1 = react.useEffect(() => () => {
    const obj = first(closure_2[11]);
    obj.removeFrameEntry(id);
  }, items1);
  const callback = react.useCallback(() => {
    closure_2(makeIframeIdDefault());
  }, []);
  let syncExternalStore = react.useSyncExternalStore(iframeId(17024).subscribe, () => {
    const obj = FramePoolManagerDefault;
    return obj.getWinningTargetState(id);
  });
  let obj = { frame, iframeId, onActivityCrash: callback, presentation: syncExternalStore };
  const tmp7 = jsx;
  const tmp8 = iframeId(17609);
  if (syncExternalStore == null) {
    let obj2 = { layoutMode: constants.FOCUSED };
    syncExternalStore = obj2;
  }
  return tmp7(tmp8, obj, iframeId);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/frames/native/FramePool.tsx");

export default tmp3;
