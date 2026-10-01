// Module ID: 8924
// Function ID: 8925
// Name: useIframeLifecycle
// Dependencies: [19, 1074, 1110, 2]
// Exports: default

// Module 8924 (useIframeLifecycle)
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/activities/useIframeLifecycle.tsx");

export default function useIframeLifecycle(id) {
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
        const ComponentDispatch = id(onIframeMount[2]).ComponentDispatch;
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
};
