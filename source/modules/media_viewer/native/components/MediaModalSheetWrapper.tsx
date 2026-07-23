// Module ID: 8291
// Function ID: 65429
// Name: MediaModalSheetWrapper
// Dependencies: [31, 653, 33, 5444, 4098, 8292, 2]
// Exports: default

// Module 8291 (MediaModalSheetWrapper)
import result from "result";
import { MEDIA_MODAL_KEY } from "ME";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/MediaModalSheetWrapper.tsx");

export default function MediaModalSheetWrapper(onCloseCallback) {
  onCloseCallback = onCloseCallback.onCloseCallback;
  let obj = Object.create(null);
  obj.onCloseCallback = 0;
  const merged = Object.assign(onCloseCallback, obj);
  context = React.useContext(onCloseCallback(context[3]));
  const items = [context];
  const effect = React.useEffect(() => {
    let transitionState;
    if (null != context) {
      transitionState = context.transitionState;
    }
    if ("exiting" === transitionState) {
      context.onLeave();
    }
  }, items);
  const items1 = [onCloseCallback];
  const callback = React.useCallback(() => {
    if (null != onCloseCallback) {
      onCloseCallback();
    }
    onCloseCallback(context[4]).hideActionSheet(outer1_3);
  }, items1);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onClose"] = callback;
  return jsx(onCloseCallback(context[5]), {});
};
