// Module ID: 9075
// Function ID: 9076
// Name: MediaModalSheetWrapper
// Dependencies: [19, 676, 21, 5882, 4411, 9076, 2]
// Exports: default

// Module 9075 (MediaModalSheetWrapper)
import closure_2 from "noop" /* 19 */;
import { MEDIA_MODAL_KEY } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/MediaModalSheetWrapper.tsx");

export default function MediaModalSheetWrapper(onCloseCallback) {
  onCloseCallback = onCloseCallback.onCloseCallback;
  const merged = Object.assign(onCloseCallback, Object.create(null));
  let context;
  context = React.useContext(onCloseCallback(context[3]));
  const items = [context];
  const effect = React.useEffect(() => {
    let transitionState;
    if (context != null) {
      transitionState = obj.transitionState;
    }
    if ("exiting" === transitionState) {
      obj.onLeave();
    }
  }, items);
  const items1 = [onCloseCallback];
  const callback = React.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    onCloseCallback(context[4]).hideActionSheet(closure_1_3);
  }, items1);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onClose = callback;
  return jsx(onCloseCallback(context[5]), {});
};
