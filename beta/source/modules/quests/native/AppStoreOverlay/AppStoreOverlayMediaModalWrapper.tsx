// Module ID: 11634
// Function ID: 11635
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [109, 19, 4451, 1078, 21, 558, 568, 11633, 4961, 8564, 8565, 2]

// Module 11634 (AppStoreOverlayMediaModalWrapper)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import MediaModalSheetWrapperDefault from "MediaModalSheetWrapper" /* 8564 */;
import MediaModalDefault from "MediaModal" /* 8565 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4451 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["onCloseCallback"];
const MEDIA_MODAL_KEY = fn(1078).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onCloseCallback) => {
  let tmp = dependencyMap;
  const cResult = require("c").c(13);
  if (cResult[0] !== onCloseCallback) {
    _require = onCloseCallback;
    const tmp7 = _objectWithoutProperties(onCloseCallback, closure_3);
    cResult[0] = onCloseCallback;
    cResult[1] = onCloseCallback.onCloseCallback;
    cResult[2] = tmp7;
    let tmp4 = tmp7;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f() {
      return () => {
        const result = closure_1_0(closure_1_2[7]).clearMediaModalFooterAction();
      };
    };
    const items = [];
    cResult[3] = fn;
    cResult[4] = items;
    let tmp9 = items;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  if (cResult[5] !== tmp3) {
    const fn2 = function v() {
      if (closure_0 != null) {
        tmp();
      }
      ModalActionCreatorsDefault.popWithKey(MEDIA_MODAL_KEY);
    };
    cResult[5] = tmp3;
    cResult[6] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
  }
  if (ActionSheetStore.isOpen()) {
    if (cResult[7] === tmp3) {
    }
    const obj2 = {};
    const merged = Object.assign(tmp4);
    obj2.onCloseCallback = tmp3;
    tmp = jsx(MediaModalSheetWrapperDefault, {});
    cResult[7] = tmp3;
    cResult[8] = tmp4;
    cResult[9] = tmp;
  } else {
    if (cResult[10] === tmp11) {
      if (cResult[11] === tmp4) {
        let tmp12 = cResult[12];
      }
      return tmp12;
    }
    const obj3 = {};
    const merged1 = Object.assign(tmp4);
    obj3.onClose = tmp11;
    const tmp19 = jsx(MediaModalDefault, {});
    cResult[10] = tmp11;
    cResult[11] = tmp4;
    cResult[12] = tmp19;
    tmp12 = tmp19;
  }
}) : ((onCloseCallback) => {
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  const effect = noop.useEffect(() => () => {
    const result = onCloseCallback(closure_1_2[7]).clearMediaModalFooterAction();
  }, []);
  const items = [onCloseCallback];
  const callback = noop.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    ModalActionCreatorsDefault.popWithKey(MEDIA_MODAL_KEY);
  }, items);
  if (ActionSheetStore.isOpen()) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.onCloseCallback = onCloseCallback;
    let tmp4Result = tmp4(tmp5(8564), obj2);
    const tmp5Result = tmp5(8564);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    obj.onClose = callback;
    tmp4Result = tmp4(tmp5(8565), obj);
    const tmp5Result2 = tmp5(8565);
  }
  return tmp4Result;
});
