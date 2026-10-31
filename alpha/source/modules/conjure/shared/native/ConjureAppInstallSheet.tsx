// Module ID: 10904
// Function ID: 10905
// Name: ConjureAppInstallSheet
// Dependencies: [19, 21, 5591, 5258, 10905, 2]
// Exports: default

// Module 10904 (ConjureAppInstallSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureAppInstallSheet.tsx");

export default function ConjureAppInstallSheet(sheetKey) {
  let ref;
  sheetKey = sheetKey.sheetKey;
  const dismissOAuthModal = sheetKey.dismissOAuthModal;
  const merged = Object.assign(sheetKey, Object.assign({ sheetKey: 0, dismissOAuthModal: 0 }));
  let context;
  context = context.useContext(sheetKey(dismissOAuthModal[2]));
  jsx = context.useRef(false);
  const items = [dismissOAuthModal];
  const callback = context.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      if (dismissOAuthModal != null) {
        tmp2();
      }
    }
  }, items);
  const items1 = [context, callback];
  const effect = context.useEffect(() => {
    let transitionState;
    if (context != null) {
      transitionState = obj.transitionState;
    }
    if ("exiting" === transitionState) {
      callback();
      context.onLeave();
    }
  }, items1);
  const items2 = [callback];
  const effect1 = context.useEffect(() => callback, items2);
  const items3 = [callback, sheetKey];
  const callback1 = context.useCallback(() => {
    callback();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(sheetKey);
  }, items3);
  sheetKey(dismissOAuthModal[4]);
  const merged1 = Object.assign(merged);
  return <tmp7 dismissOAuthModal={callback1} />;
};
