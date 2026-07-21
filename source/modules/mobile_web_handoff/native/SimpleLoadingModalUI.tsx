// Module ID: 5690
// Function ID: 48989
// Name: SimpleLoadingModal
// Dependencies: []
// Exports: default

// Module 5690 (SimpleLoadingModal)
let closure_2 = importAll(dependencyMap[0]);
({ Modal: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ modalBackground: { "Null": null, "Null": null, "Null": null, "Null": null } });
let closure_7 = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

export default function SimpleLoadingModal(operation) {
  operation = operation.operation;
  const arg1 = operation;
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
  let jsx;
  let callback;
  let constants;
  let callback2;
  jsx = React.useRef(constants.OPENING);
  const items = [D];
  callback = React.useCallback(() => {
    if (ref.current === callback1.SHOWN) {
      D();
    }
    ref.current = callback1.DISMISSED;
  }, items);
  const items1 = [callback, S];
  const callback1 = React.useCallback((arg0) => {
    S(arg0);
    callback();
  }, items1);
  constants = callback1;
  const items2 = [callback, I];
  callback2 = React.useCallback((arg0) => {
    I(arg0);
    callback();
  }, items2);
  const items3 = [operation, callback1, callback2];
  const effect = React.useEffect(() => {
    const promise = operation();
    operation().then((arg0) => callback(arg0)).catch((arg0) => callback2(arg0));
  }, items3);
  let obj = {
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
  obj = { style: callback().modalBackground, children: jsx(arg1(dependencyMap[4]).ActivityIndicator, {}) };
  obj.children = <D {...obj} />;
  return <cancelable {...obj} />;
};
