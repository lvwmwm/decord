// Module ID: 14877
// Function ID: 14878
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [19, 5405, 1072, 21, 14876, 6824, 8954, 8955, 2]
// Exports: default

// Module 14877 (AppStoreOverlayMediaModalWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import MediaModalSheetWrapperDefault from "MediaModalSheetWrapper" /* 8954 */;
import MediaModalDefault from "MediaModal" /* 8955 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5405 */;
import size from "module_2" /* 2 */;

const MEDIA_MODAL_KEY = Constants.MEDIA_MODAL_KEY;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default function AppStoreOverlayMediaModalWrapper(onCloseCallback) {
  let tmp4Result;
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  const effect = react.useEffect(() => () => {
    const obj = onCloseCallback(closure_1_2[4]);
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
};
