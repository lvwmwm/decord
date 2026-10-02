// Module ID: 8919
// Function ID: 8920
// Name: useIframeLifecycle
// Dependencies: [19, 1086, 558, 576, 1122, 2]

// Module 8919 (useIframeLifecycle)
import Constants from "Constants" /* 1086 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1122 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ComponentActions = Constants.ComponentActions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let isIframeRetiring;
  let isNewIframe;
  let onIframeMount;
  let tmp2;
  _require = id;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  onIframeMount = tmp2.onIframeMount;
  const onIframeUnmount = tmp2.onIframeUnmount;
  ({ isNewIframe, isIframeRetiring } = tmp2);
  const tmp3 = undefined === isNewIframe || isNewIframe;
  let current = tmp3;
  let tmp4 = undefined === isIframeRetiring || isIframeRetiring;
  const current2 = tmp4;
  const ref = onIframeUnmount.useRef(onIframeMount);
  let closure_6 = onIframeUnmount.useRef(onIframeUnmount);
  const ref2 = onIframeUnmount.useRef(tmp3);
  let closure_8 = onIframeUnmount.useRef(tmp4);
  if (cResult[2] === tmp4) {
    if (cResult[3] === tmp3) {
      if (cResult[4] === onIframeMount) {
        let tmp5;
        let tmp8;
        let tmp7;
        if (cResult[5] === onIframeUnmount) {
          tmp5 = cResult[6];
        }
        const effect = obj3.useEffect(tmp5);
        if (cResult[7] !== id) {
          const fn2 = function p() {
            if (ref2.current) {
              let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
              let obj = { id };
              let tmp4 = id;
              ComponentDispatch.dispatch(ComponentActions.IFRAME_MOUNT, obj);
              current = ref.current;
              if (current != null) {
                current(tmp4);
              }
            }
            return () => {
              if (ref2.current) {
                const ComponentDispatch = id(onIframeMount[4]).ComponentDispatch;
                const obj = { id };
                ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, obj);
                current = ref.current;
                const tmp4 = id;
                if (current != null) {
                  current(tmp4);
                }
              }
            };
          };
          const items = [id];
          cResult[7] = id;
          cResult[8] = fn2;
          cResult[9] = items;
          tmp8 = items;
          tmp7 = fn2;
        } else {
          tmp7 = cResult[8];
          tmp8 = cResult[9];
        }
        const effect1 = obj3.useEffect(tmp7, tmp8);
      }
    }
  }
  const fn = function o() {
    ref.current = onIframeMount;
    closure_6.current = onIframeUnmount;
    ref2.current = current;
    closure_8.current = current2;
  };
  cResult[2] = tmp4;
  cResult[3] = tmp3;
  cResult[4] = onIframeMount;
  cResult[5] = onIframeUnmount;
  cResult[6] = fn;
  tmp5 = fn;
}) : ((id) => {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const onIframeMount = obj.onIframeMount;
  const onIframeUnmount = obj.onIframeUnmount;
  let flag = obj.isNewIframe;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.isIframeRetiring;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const ref = onIframeUnmount.useRef(onIframeMount);
  let closure_6 = onIframeUnmount.useRef(onIframeUnmount);
  const ref2 = onIframeUnmount.useRef(flag);
  let closure_8 = onIframeUnmount.useRef(flag2);
  const effect = onIframeUnmount.useEffect(() => {
    ref.current = onIframeMount;
    closure_6.current = onIframeUnmount;
    ref2.current = flag;
    closure_8.current = flag2;
  });
  const items = [id];
  const effect1 = onIframeUnmount.useEffect(() => {
    if (ref2.current) {
      let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      let obj = { id };
      let tmp4 = id;
      ComponentDispatch.dispatch(ComponentActions.IFRAME_MOUNT, obj);
      let current = ref.current;
      if (current != null) {
        current(tmp4);
      }
    }
    return () => {
      if (ref2.current) {
        const ComponentDispatch = id(onIframeMount[4]).ComponentDispatch;
        const obj = { id };
        ComponentDispatch.dispatch(flag.IFRAME_UNMOUNT, obj);
        const current = ref.current;
        const tmp4 = id;
        if (current != null) {
          current(tmp4);
        }
      }
    };
  }, items);
});
const result = size.fileFinishedImporting("modules/activities/useIframeLifecycle.tsx");

export default tmp2;
