// Module ID: 7029
// Function ID: 7030
// Name: SimpleLoadingModalUI
// Dependencies: [19, 17, 21, 5091, 558, 576, 6160, 2]

// Module 7029 (SimpleLoadingModalUI)
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let catchPromise, dependencyMap;

let c3;
let closure_4;
let react = react_mod;
({ Modal: c3, View: closure_4 } = react_native);
let jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ modalBackground: { flex: 1, alignItems: "center", flexDirection: "column", justifyContent: "center" } });
let constants = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SimpleLoadingModal(operation) {
  let cancelable;
  let closure_1;
  let closure_2;
  let onDismissed;
  let onRejected;
  let onResolved;
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp7;
  const obj = operation(576);
  const cResult = obj.c(31);
  operation = operation.operation;
  ({ onResolved, onRejected, cancelable, onDismissed } = operation);
  if (cResult[0] !== onResolved) {
    let fn = onResolved;
    if (undefined === onResolved) {
      fn = () => {

      };
    }
    cResult[0] = onResolved;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  dependencyMap = tmp2;
  if (cResult[2] !== onRejected) {
    let fn2 = onRejected;
    if (undefined === onRejected) {
      fn2 = () => {

      };
    }
    cResult[2] = onRejected;
    cResult[3] = fn2;
    tmp3 = fn2;
  } else {
    tmp3 = cResult[3];
  }
  react = tmp3;
  let closure_3 = tmp4;
  if (cResult[4] !== onDismissed) {
    let fn3 = onDismissed;
    if (undefined === onDismissed) {
      fn3 = () => {

      };
    }
    cResult[4] = onDismissed;
    cResult[5] = fn3;
    tmp5 = fn3;
  } else {
    tmp5 = cResult[5];
  }
  let closure_4 = tmp5;
  closure_6();
  const ref = react.useRef(constants.OPENING);
  const obj2 = react;
  if (cResult[6] !== tmp5) {
    const fn4 = function y() {
      const tmp = ref;
      const tmp2 = constants;
      if (ref.current === constants.SHOWN) {
        closure_4();
      }
      tmp.current = tmp2.DISMISSED;
    };
    cResult[6] = tmp5;
    cResult[7] = fn4;
    tmp7 = fn4;
  } else {
    tmp7 = cResult[7];
  }
  closure_6 = tmp7;
  if (cResult[8] === tmp7) {
    let tmp8;
    if (cResult[9] === tmp2) {
      tmp8 = cResult[10];
    }
    constants = tmp8;
    if (cResult[11] === tmp7) {
      let tmp9;
      if (cResult[12] === tmp3) {
        tmp9 = cResult[13];
      }
      let closure_8 = tmp9;
      if (cResult[14] === operation) {
        if (cResult[15] === tmp9) {
          let tmp10;
          let tmp11;
          if (cResult[16] === tmp8) {
            tmp10 = cResult[17];
            tmp11 = cResult[18];
          }
          const effect = obj2.useEffect(tmp10, tmp11);
          if (cResult[19] !== tmp5) {
            const fn5 = function w() {
              if (ref.current === constants.DISMISSED) {
                closure_4();
              } else {
                tmp.current = tmp2.SHOWN;
              }
            };
            cResult[19] = tmp5;
            class B {
              constructor() {
                promise = operation();
                nextPromise = promise.then((result) => constants(result));
                catchPromise = nextPromise.catch((error) => closure_1_8(error));
                return;
              }
            }
            cResult[20] = fn5;
          }
          class B {
            constructor() {
              promise = operation();
              nextPromise = promise.then((result) => constants(result));
              catchPromise = nextPromise.catch((error) => closure_1_8(error));
              return;
            }
          }
          const fn6 = function x() {
            const tmp = closure_3;
            if (tmp) {
              closure_6();
            }
          };
          cResult[21] = undefined !== cancelable && cancelable;
          cResult[22] = tmp7;
          cResult[23] = fn6;
        }
      }
      class B {
        constructor() {
          promise = operation();
          nextPromise = promise.then((result) => constants(result));
          catchPromise = nextPromise.catch((error) => closure_1_8(error));
          return;
        }
      }
      const items = [operation, tmp8, tmp9];
      cResult[14] = operation;
      cResult[15] = tmp9;
      cResult[16] = tmp8;
      cResult[17] = B;
      cResult[18] = items;
      tmp11 = items;
      tmp10 = B;
    }
    class W {
      constructor(arg0) {
        closure_2(arg0);
        closure_6();
      }
    }
    cResult[11] = tmp7;
    cResult[12] = tmp3;
    cResult[13] = W;
    tmp9 = W;
  }
  class C {
    constructor(arg0) {
      closure_1(arg0);
      closure_6();
    }
  }
  cResult[8] = tmp7;
  cResult[9] = tmp2;
  cResult[10] = C;
  tmp8 = C;
}) : (function SimpleLoadingModal(operation) {
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
  const onDismissed = operation.onDismissed;
  if (onDismissed === undefined) {
    class I {
      constructor() {

      }
    }
  }
  let callback;
  let callback1;
  let tmp = callback();
  jsx = I.useRef(callback1.OPENING);
  const items = [onDismissed];
  callback = I.useCallback(() => {
    const tmp = ref;
    const tmp2 = callback1;
    if (ref.current === callback1.SHOWN) {
      onDismissed();
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
  ({ style: tmp.modalBackground, children: jsx(operation(S[6]).ActivityIndicator, {}) });
  return <cancelable transparent animationType="none" onShow={function onShow() {
    if (ref.current === callback1.DISMISSED) {
      onDismissed();
    } else {
      tmp.current = tmp2.SHOWN;
    }
  }} onRequestClose={function onRequestClose() {
    const tmp = cancelable;
    if (tmp) {
      callback();
    }
  }}>{null}</cancelable>;
});
const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

export default tmp3;
