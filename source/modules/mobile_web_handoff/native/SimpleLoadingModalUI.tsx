// Module ID: 5694
// Function ID: 49024
// Name: SimpleLoadingModal
// Dependencies: [31, 27, 33, 4130, 5586, 2]
// Exports: default

// Module 5694 (SimpleLoadingModal)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ Modal: closure_3, View: closure_4 } = get_ActivityIndicator);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ modalBackground: { flex: 1, alignItems: "center", flexDirection: "column", justifyContent: "center" } });
let closure_7 = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
const result = require("jsxProd").fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

export default function SimpleLoadingModal(operation) {
  operation = operation.operation;
  const S = operation.onResolved;
  if (S === undefined) {
    class S {
      constructor() {
        return;
      }
    }
  }
  const dependencyMap = S;
  const I = operation.onRejected;
  if (I === undefined) {
    class I {
      constructor() {
        return;
      }
    }
  }
  const React = I;
  const cancelable = operation.cancelable;
  if (cancelable === undefined) {
    class I {
      constructor() {
        return;
      }
    }
  }
  const D = operation.onDismissed;
  if (D === undefined) {
    class D {
      constructor() {
        return;
      }
    }
  }
  let closure_4 = D;
  let jsx;
  let callback;
  let callback1;
  let callback2;
  jsx = React.useRef(callback1.OPENING);
  const items = [D];
  callback = React.useCallback(() => {
    if (ref.current === callback1.SHOWN) {
      D();
    }
    ref.current = callback1.DISMISSED;
  }, items);
  const items1 = [callback, S];
  callback1 = React.useCallback((arg0) => {
    S(arg0);
    callback();
  }, items1);
  const items2 = [callback, I];
  callback2 = React.useCallback((arg0) => {
    I(arg0);
    callback();
  }, items2);
  const items3 = [operation, callback1, callback2];
  const effect = React.useEffect(() => {
    const promise = operation();
    operation().then((arg0) => outer1_7(arg0)).catch((arg0) => outer1_8(arg0));
  }, items3);
  let obj = {
    transparent: true,
    animationType: "none",
    onShow() {
      if (ref.current === callback1.DISMISSED) {
        D();
      } else {
        ref.current = callback1.SHOWN;
      }
    },
    onRequestClose() {
      if (cancelable) {
        callback();
      }
    }
  };
  obj = { style: callback().modalBackground, children: jsx(operation(5586).ActivityIndicator, {}) };
  obj.children = <closure_4 style={callback().modalBackground}>{jsx(operation(5586).ActivityIndicator, {})}</closure_4>;
  return <cancelable style={callback().modalBackground}>{jsx(operation(5586).ActivityIndicator, {})}</cancelable>;
};
