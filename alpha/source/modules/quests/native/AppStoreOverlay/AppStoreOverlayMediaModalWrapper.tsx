// Module ID: 14900
// Function ID: 14901
// Name: AppStoreOverlayMediaModalWrapper
// Dependencies: [19, 5385, 1072, 21, 14899, 6882, 9008, 9009, 2]
// Exports: default

// Module 14900 (AppStoreOverlayMediaModalWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import MediaModalSheetWrapperDefault from "MediaModalSheetWrapper" /* 9008 */;
import MediaModalDefault from "MediaModal" /* 9009 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5385 */;
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
