// Module ID: 4002
// Function ID: 33246
// Name: Portal
// Dependencies: [31, 4003, 1465]

// Module 4002 (Portal)
import result from "result";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
({ useCallback: closure_2, useEffect: closure_3, useMemo: closure_4, useRef: closure_5 } = result);
const memoResult = result.memo(function PortalComponent(name) {
  name = name.name;
  const handleOnMount = name.handleOnMount;
  const handleOnUnmount = name.handleOnUnmount;
  const handleOnUpdate = name.handleOnUpdate;
  const children = name.children;
  const portal = name(handleOnMount[1]).usePortal(name.hostName);
  const addPortal = portal.addPortal;
  const removePortal = portal.removePortal;
  const items = [name];
  let closure_7 = children(() => {
    let nanoidResult = name;
    if (!name) {
      nanoidResult = name(handleOnMount[2]).nanoid();
      const obj = name(handleOnMount[2]);
    }
    return nanoidResult;
  }, items);
  const tmp2 = addPortal();
  let closure_8 = tmp2;
  const tmp3 = addPortal();
  let closure_9 = tmp3;
  const tmp4 = addPortal();
  let closure_10 = tmp4;
  const items1 = [handleOnMount, addPortal];
  tmp2.current = handleOnUnmount(() => {
    if (handleOnMount) {
      handleOnMount(() => outer1_5(outer1_7, outer1_4));
    } else {
      addPortal(closure_7, children);
    }
  }, items1);
  const items2 = [handleOnUnmount, removePortal];
  tmp3.current = handleOnUnmount(() => {
    if (handleOnUnmount) {
      handleOnUnmount(() => outer1_6(outer1_7));
    } else {
      removePortal(closure_7);
    }
  }, items2);
  const items3 = [handleOnUpdate, addPortal, children];
  tmp4.current = handleOnUnmount(() => {
    if (handleOnUpdate) {
      handleOnUpdate(() => outer1_5(outer1_7, outer1_4));
    } else {
      addPortal(closure_7, children);
    }
  }, items3);
  handleOnUpdate(() => {
    if (null != tmp2.current) {
      tmp2.current();
    }
    return () => {
      if (null != outer1_9.current) {
        outer1_9.current();
      }
      outer1_8.current = undefined;
      outer1_9.current = undefined;
      outer1_10.current = undefined;
    };
  }, []);
  const items4 = [children];
  handleOnUpdate(() => {
    if (null != tmp4.current) {
      tmp4.current();
    }
  }, items4);
  return null;
});
memoResult.displayName = "Portal";

export const Portal = memoResult;
