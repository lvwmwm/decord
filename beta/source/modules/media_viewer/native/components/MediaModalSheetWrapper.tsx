// Module ID: 7736
// Function ID: 7737
// Name: MediaModalSheetWrapper
// Dependencies: [19, 1074, 21, 6573, 4800, 7737, 2]
// Exports: default

// Module 7736 (MediaModalSheetWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MEDIA_MODAL_KEY = Constants.MEDIA_MODAL_KEY;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSheetWrapper.tsx");

export default function MediaModalSheetWrapper(onCloseCallback) {
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  let context;
  context = react.useContext(onCloseCallback(context[3]));
  const items = [context];
  const effect = react.useEffect(() => {
    let transitionState;
    if (context != null) {
      transitionState = obj.transitionState;
    }
    if ("exiting" === transitionState) {
      context.onLeave();
    }
  }, items);
  const items1 = [onCloseCallback];
  const callback = react.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(MEDIA_MODAL_KEY);
  }, items1);
  onCloseCallback(context[5]);
  const merged1 = Object.assign(merged);
  return <tmp5 onClose={callback} />;
};
