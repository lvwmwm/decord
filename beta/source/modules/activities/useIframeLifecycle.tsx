// Module ID: 9760
// Function ID: 9761
// Name: useIframeLifecycle
// Dependencies: [19, 1078, 558, 568, 1114, 2]

// Module 9760 (useIframeLifecycle)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ComponentActions = fn(1078).ComponentActions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useIframeLifecycle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  _require = id;
  const cResult = require("c").c(10);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  onIframeMount = tmp2.onIframeMount;
  const onIframeUnmount = tmp2.onIframeUnmount;
  ({ isNewIframe, isIframeRetiring } = tmp2);
  let current = tmp3;
  const current2 = tmp4;
  onIframeUnmount.useRef(onIframeMount);
  closure_6 = onIframeUnmount.useRef(onIframeUnmount);
  onIframeUnmount.useRef(undefined === isNewIframe || isNewIframe);
  closure_8 = onIframeUnmount.useRef(tmp4);
  if (cResult[2] === (undefined === isIframeRetiring || isIframeRetiring)) {
    if (cResult[3] === tmp3) {
      if (cResult[4] === onIframeMount) {
        if (cResult[5] === onIframeUnmount) {
          let tmp5 = cResult[6];
        }
        const effect = obj3.useEffect(tmp5);
        if (cResult[7] !== id) {
          const fn2 = function p() {
            if (ref2.current) {
              let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
              let obj = { id };
              ComponentDispatch.dispatch(ComponentActions.IFRAME_MOUNT, obj);
              current = ref.current;
              if (current != null) {
                current(tmp4);
              }
              tmp4 = id;
            }
            return () => {
              if (ref2.current) {
                const ComponentDispatch = id(onIframeMount[4]).ComponentDispatch;
                const obj = { id };
                ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, obj);
                current = ref.current;
                if (current != null) {
                  current(tmp4);
                }
                tmp4 = id;
              }
            };
          };
          const items = [id];
          cResult[7] = id;
          cResult[8] = fn2;
          cResult[9] = items;
          let tmp8 = items;
          let tmp7 = fn2;
        } else {
          tmp7 = cResult[8];
          tmp8 = cResult[9];
        }
        const effect1 = obj3.useEffect(tmp7, tmp8);
      }
    }
  }
  const fn = function o() {
    closure_5.current = onIframeMount;
    closure_6.current = onIframeUnmount;
    closure_7.current = current;
    closure_8.current = current2;
  };
  cResult[2] = undefined === isIframeRetiring || isIframeRetiring;
  cResult[3] = undefined === isNewIframe || isNewIframe;
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
  onIframeUnmount.useRef(onIframeMount);
  closure_6 = onIframeUnmount.useRef(onIframeUnmount);
  onIframeUnmount.useRef(flag);
  closure_8 = onIframeUnmount.useRef(flag2);
  const effect = onIframeUnmount.useEffect(() => {
    closure_5.current = onIframeMount;
    closure_6.current = onIframeUnmount;
    closure_7.current = flag;
    closure_8.current = flag2;
  });
  const items = [id];
  const effect1 = onIframeUnmount.useEffect(() => {
    if (ref2.current) {
      let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      let obj = { id };
      ComponentDispatch.dispatch(ComponentActions.IFRAME_MOUNT, obj);
      let current = ref.current;
      if (current != null) {
        current(tmp4);
      }
      tmp4 = id;
    }
    return () => {
      if (ref2.current) {
        const ComponentDispatch = id(onIframeMount[4]).ComponentDispatch;
        const obj = { id };
        ComponentDispatch.dispatch(flag.IFRAME_UNMOUNT, obj);
        const current = ref.current;
        if (current != null) {
          current(tmp4);
        }
        tmp4 = id;
      }
    };
  }, items);
});
