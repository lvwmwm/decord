// Module ID: 6737
// Function ID: 6738
// Name: SimpleLoadingModalUI
// Dependencies: [19, 17, 21, 4836, 5889, 2]
// Exports: default

// Module 6737 (SimpleLoadingModalUI)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ Modal: c3, View: closure_4 } = react_native);
let jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ modalBackground: { flex: 1, alignItems: "center", flexDirection: "column", justifyContent: "center" } });
let closure_7 = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

export default function SimpleLoadingModal(operation) {
  let ref;
  operation = operation.operation;
  const S = operation.onResolved;
  if (S === undefined) {
    class S {
      constructor() {

      }
    }
  }
  const I = operation.onRejected;
  if (I === undefined) {
    class I {
      constructor() {

      }
    }
  }
  const cancelable = operation.cancelable;
  if (cancelable === undefined) {
    class I {
      constructor() {

      }
    }
  }
  const D = operation.onDismissed;
  if (D === undefined) {
    class D {
      constructor() {

      }
    }
  }
  let callback;
  let callback1;
  let tmp = callback();
  jsx = I.useRef(callback1.OPENING);
  const items = [D];
  callback = I.useCallback(() => {
    const tmp = ref;
    const tmp2 = callback1;
    if (ref.current === callback1.SHOWN) {
      D();
    }
    tmp.current = tmp2.DISMISSED;
  }, items);
  const items1 = [callback, S];
  callback1 = I.useCallback((arg0) => {
    S(arg0);
    callback();
  }, items1);
  const items2 = [callback, I];
  const callback2 = I.useCallback((arg0) => {
    I(arg0);
    callback();
  }, items2);
  const items3 = [operation, callback1, callback2];
  const effect = I.useEffect(() => {
    const promise = operation();
    const nextPromise = promise.then((result) => callback1(result));
    nextPromise.catch((error) => callback2(error));
  }, items3);
  ({ style: tmp.modalBackground, children: jsx(operation(S[4]).ActivityIndicator, {}) });
  return <cancelable transparent animationType="none" onShow={function onShow() {
    if (ref.current === callback1.DISMISSED) {
      D();
    } else {
      tmp.current = tmp2.SHOWN;
    }
  }} onRequestClose={function onRequestClose() {
    const tmp = cancelable;
    if (tmp) {
      callback();
    }
  }}>{null}</cancelable>;
};
