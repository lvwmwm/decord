// Module ID: 8285
// Function ID: 65392
// Name: MediaModalSheetWrapper
// Dependencies: []
// Exports: default

// Module 8285 (MediaModalSheetWrapper)
let closure_2 = importAll(dependencyMap[0]);
const MEDIA_MODAL_KEY = arg1(dependencyMap[1]).MEDIA_MODAL_KEY;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/media_viewer/native/components/MediaModalSheetWrapper.tsx");

export default function MediaModalSheetWrapper(onCloseCallback) {
  const importDefault = onCloseCallback;
  let obj = Object.create(null);
  obj.onCloseCallback = 0;
  const merged = Object.assign(onCloseCallback, obj);
  const context = React.useContext(importDefault(dependencyMap[3]));
  const dependencyMap = context;
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
  const items1 = [onCloseCallback.onCloseCallback];
  const callback = React.useCallback(() => {
    if (null != onCloseCallback) {
      onCloseCallback();
    }
    onCloseCallback(context[4]).hideActionSheet(closure_3);
  }, items1);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onClose"] = callback;
  return jsx(importDefault(dependencyMap[5]), obj);
};
