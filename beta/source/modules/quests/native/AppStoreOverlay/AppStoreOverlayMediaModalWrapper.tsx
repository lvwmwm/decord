// Module ID: 11765
// Function ID: 11766
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [19, 4447, 1074, 21, 11764, 4959, 8559, 8560, 2]
// Exports: default

// Module 11765 (AppStoreOverlayMediaModalWrapper)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4447 */;

const require = fn;
const MEDIA_MODAL_KEY = fn(1074).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default function AppStoreOverlayMediaModalWrapper(onCloseCallback) {
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  const effect = noop.useEffect(() => () => {
    const result = onCloseCallback(closure_1_2[4]).clearMediaModalFooterAction();
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
    let tmp4Result = tmp4(tmp5(8559), obj2);
    const tmp5Result = tmp5(8559);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    obj.onClose = callback;
    tmp4Result = tmp4(tmp5(8560), obj);
    const tmp5Result2 = tmp5(8560);
  }
  return tmp4Result;
};
