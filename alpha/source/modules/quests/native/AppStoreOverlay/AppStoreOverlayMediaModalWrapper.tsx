// Module ID: 10596
// Function ID: 10597
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [109, 19, 4759, 1085, 21, 558, 576, 10595, 5940, 8390, 8391, 2]

// Module 10596 (AppStoreOverlayMediaModalWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import MediaModalSheetWrapperDefault from "MediaModalSheetWrapper" /* 8390 */;
import MediaModalDefault from "MediaModal" /* 8391 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4759 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = ["onCloseCallback"];
const MEDIA_MODAL_KEY = Constants.MEDIA_MODAL_KEY;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppStoreOverlayMediaModalWrapper(onCloseCallback) {
  let closure_0;
  let tmp13;
  let tmp4;
  let tmp8;
  let tmp9;
  const tmp = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] !== onCloseCallback) {
    _require = onCloseCallback;
    const tmp7 = _objectWithoutProperties(onCloseCallback, closure_3);
    cResult[0] = onCloseCallback;
    cResult[1] = onCloseCallback.onCloseCallback;
    cResult[2] = tmp7;
    tmp4 = tmp7;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        return () => { /* body not rendered: F141968 */ };
      }
    }
    const items = [];
    cResult[3] = M;
    cResult[4] = items;
    tmp9 = items;
    tmp8 = M;
  } else {
    class M {
      constructor() {
        return () => { /* body not rendered: F141968 */ };
      }
    }
    tmp9 = cResult[4];
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[5] !== tmp3) {
    class M {
      constructor() {
        return () => { /* body not rendered: F141968 */ };
      }
    }
    cResult[5] = tmp3;
    cResult[6] = tmp12;
  } else {
    class M {
      constructor() {
        return () => { /* body not rendered: F141968 */ };
      }
    }
  }
  if (ActionSheetStore.isOpen()) {
    class M {
      constructor() {
        return () => { /* body not rendered: F141968 */ };
      }
    }
    MediaModalSheetWrapperDefault;
    const merged = Object.assign(tmp4);
    const tmp28 = <tmp24 onCloseCallback={tmp3} />;
    cResult[7] = tmp3;
    cResult[8] = tmp4;
    cResult[9] = tmp28;
  } else {
    class M {
      constructor() {
        return () => { /* body not rendered: F141968 */ };
      }
    }
    MediaModalDefault;
    const merged1 = Object.assign(tmp4);
    const tmp20 = <tmp16 onClose={tmp11} />;
    cResult[10] = tmp11;
    cResult[11] = tmp4;
    cResult[12] = tmp20;
    tmp13 = tmp20;
  }
  return tmp13;
}) : (function AppStoreOverlayMediaModalWrapper(onCloseCallback) {
  let tmp4Result;
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  const effect = react.useEffect(() => () => {
    const obj = onCloseCallback(closure_1_2[7]);
    const result = obj.clearMediaModalFooterAction();
  }, []);
  const items = [onCloseCallback];
  const callback = react.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(MEDIA_MODAL_KEY);
  }, items);
  if (ActionSheetStore.isOpen()) {
    const obj2 = { onCloseCallback };
    const tmp5Result = MediaModalSheetWrapperDefault;
    const merged1 = Object.assign(merged);
    tmp4Result = tmp4(tmp5Result, obj2);
  } else {
    let obj = { onClose: callback };
    const tmp5Result2 = MediaModalDefault;
    const merged2 = Object.assign(merged);
    tmp4Result = tmp4(tmp5Result2, obj);
  }
  return tmp4Result;
});
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default tmp2;
