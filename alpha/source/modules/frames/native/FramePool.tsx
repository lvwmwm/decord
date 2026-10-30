// Module ID: 19042
// Function ID: 19043
// Name: FramePool
// Dependencies: [32, 19, 17, 6840, 6841, 21, 5009, 1492, 504, 12070, 11784, 11761, 10903, 19043, 2]
// Exports: default

// Module 19042 (FramePool)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10903 */;
import makeIframeIdDefault from "makeIframeId" /* 11761 */;
import WebViewContext from "WebViewContext" /* 11784 */;
import FramePoolManagerDefault from "FramePoolManager" /* 12070 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6840 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let metroImportAll;
let metroImportDefault;
function PooledFrame(frame) {
  let closure_2;
  let iframeId;
  frame = frame.frame;
  iframeId = undefined;
  dependencyMap = undefined;
  const id = frame.id;
  [iframeId, dependencyMap] = react.useState(() => first(closure_2[11])());
  const items = [id, iframeId];
  const effect = react.useEffect(() => {
    let obj = FramePoolManagerDefault;
    obj.registerFrameEntry(id, first);
    const obj2 = FramesActionCreatorsDefault;
    obj2.attachFrameIframe(id, first);
    return () => {
      const obj = first(closure_2[12]);
      obj.detachFrameIframe(id, iframeId);
    };
  }, items);
  const items1 = [id];
  const effect1 = react.useEffect(() => () => {
    const obj = first(closure_2[9]);
    obj.removeFrameEntry(id);
  }, items1);
  const callback = react.useCallback(() => {
    closure_2(makeIframeIdDefault());
  }, []);
  let syncExternalStore = react.useSyncExternalStore(iframeId(12070).subscribe, () => {
    const obj = FramePoolManagerDefault;
    return obj.getWinningTargetState(id);
  });
  let obj = { frame, iframeId, onActivityCrash: callback, presentation: syncExternalStore };
  const tmp7 = jsx;
  const tmp8 = iframeId(19043);
  if (syncExternalStore == null) {
    let obj2 = { layoutMode: constants.FOCUSED };
    syncExternalStore = obj2;
  }
  return tmp7(tmp8, obj, iframeId);
}
const View = react_native.View;
({ FrameLayoutModes: metroImportDefault, isLaunched: metroImportAll } = FramesConstants);
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ pool: { position: "absolute", opacity: 0 } });
const result = size.fileFinishedImporting("modules/frames/native/FramePool.tsx");

export default function FramePool() {
  let allFrames;
  let height;
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
        tmp = <PooledFrame key={arg0.id} frame={arg0} />;
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
    require(num);
    const obj = FramePoolManagerDefault;
    obj.setPoolNodeTag(num);
  }, [])} style={items1} pointerEvents="none">{null}</View>;
};
