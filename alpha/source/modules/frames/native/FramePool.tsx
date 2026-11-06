// Module ID: 19397
// Function ID: 19398
// Name: FramePool
// Dependencies: [32, 19, 17, 6926, 6927, 21, 5170, 1493, 504, 12426, 11995, 11971, 11076, 19398, 2]
// Exports: default

// Module 19397 (FramePool)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11076 */;
import makeIframeIdDefault from "makeIframeId" /* 11971 */;
import WebViewContext from "WebViewContext" /* 11995 */;
import FramePoolManagerDefault from "FramePoolManager" /* 12426 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6926 */;
import FramesConstants from "FramesConstants" /* 6927 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let metroImportAll;
let metroImportDefault;
function PooledFrame(frame) {
  let _undefined;
  let tmp2;
  let tmp3;
  const f117942 = () => {
    const obj = { iframeId: makeIframeIdDefault(), proxyTicket };
    return obj;
  };
  frame = frame.frame;
  let iframeId;
  const id = frame.id;
  const proxyTicket = frame.data.proxyTicket;
  let obj = react;
  [tmp2, tmp3] = iframeId(react.useState(f117942), 2);
  dependencyMap = tmp3;
  const tmp = iframeId(react.useState(f117942), 2);
  if (tmp2.proxyTicket !== proxyTicket) {
    let obj2 = { iframeId: proxyTicket(11971)(), proxyTicket };
    tmp3(obj2);
  }
  iframeId = tmp2.iframeId;
  const items = [id, iframeId];
  const effect = obj.useEffect(() => {
    let obj = FramePoolManagerDefault;
    obj.registerFrameEntry(id, iframeId);
    const obj2 = FramesActionCreatorsDefault;
    obj2.attachFrameIframe(id, iframeId);
    return () => {
      const obj = proxyTicket(c2[12]);
      obj.detachFrameIframe(id, iframeId);
    };
  }, items);
  const items1 = [id];
  const effect1 = obj.useEffect(() => () => {
    const obj = proxyTicket(c2[9]);
    obj.removeFrameEntry(id);
  }, items1);
  const callback = obj.useCallback(() => {
    _undefined((arg0) => {
      const obj = { iframeId: proxyTicket(_undefined[11])() };
      const merged = Object.assign(arg0);
      return obj;
    });
  }, []);
  let syncExternalStore = obj.useSyncExternalStore(proxyTicket(12426).subscribe, () => {
    const obj = FramePoolManagerDefault;
    return obj.getWinningTargetState(id);
  });
  const obj3 = { frame, iframeId, onActivityCrash: callback, presentation: syncExternalStore };
  const tmp11 = jsx;
  const tmp12 = proxyTicket(19398);
  if (syncExternalStore == null) {
    syncExternalStore = { layoutMode: constants.FOCUSED };
    const obj4 = { layoutMode: constants.FOCUSED };
  }
  return tmp11(tmp12, obj3, iframeId);
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
