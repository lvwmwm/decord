// Module ID: 10697
// Function ID: 10698
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [109, 19, 4524, 1086, 21, 558, 576, 10696, 5040, 7740, 7741, 2]

// Module 10697 (AppStoreOverlayMediaModalWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1086 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import MediaModalSheetWrapperDefault from "MediaModalSheetWrapper" /* 7740 */;
import MediaModalDefault from "MediaModal" /* 7741 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4524 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onCloseCallback;

let closure_3 = ["onCloseCallback"];
const MEDIA_MODAL_KEY = Constants.MEDIA_MODAL_KEY;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onCloseCallback) => {
  let closure_0;
  let tmp11;
  let tmp12;
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
    const fn = function f() {
      return () => {
        const obj = closure_1_0(closure_1_2[7]);
        const result = obj.clearMediaModalFooterAction();
      };
    };
    const items = [];
    cResult[3] = fn;
    cResult[4] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[5] !== tmp3) {
    const fn2 = function v() {
      if (closure_0 != null) {
        tmp();
      }
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(MEDIA_MODAL_KEY);
    };
    cResult[5] = tmp3;
    cResult[6] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
  }
  if (ActionSheetStore.isOpen()) {
    if (cResult[7] === tmp3) {
      let tmp20;
      if (cResult[8] === tmp4) {
        tmp20 = cResult[9];
      }
      tmp12 = tmp20;
    }
    MediaModalSheetWrapperDefault;
    const merged = Object.assign(tmp4);
    const tmp27 = <tmp23 onCloseCallback={tmp3} />;
    cResult[7] = tmp3;
    cResult[8] = tmp4;
    cResult[9] = tmp27;
    tmp20 = tmp27;
  } else {
    if (cResult[10] === tmp11) {
      if (cResult[11] === tmp4) {
        tmp12 = cResult[12];
      }
    }
    MediaModalDefault;
    const merged1 = Object.assign(tmp4);
    const tmp19 = <tmp15 onClose={tmp11} />;
    cResult[10] = tmp11;
    cResult[11] = tmp4;
    cResult[12] = tmp19;
    tmp12 = tmp19;
  }
  return tmp12;
}) : ((onCloseCallback) => {
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
