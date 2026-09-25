// Module ID: 10720
// Function ID: 10721
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [19, 4518, 1074, 21, 10719, 5032, 7728, 7729, 2]
// Exports: default

// Module 10720 (AppStoreOverlayMediaModalWrapper)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4518 */;

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
    let tmp4Result = tmp4(tmp5(7728), obj2);
    const tmp5Result = tmp5(7728);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    obj.onClose = callback;
    tmp4Result = tmp4(tmp5(7729), obj);
    const tmp5Result2 = tmp5(7729);
  }
  return tmp4Result;
};
