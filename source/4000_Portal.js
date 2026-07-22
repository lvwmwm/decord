// Module ID: 4000
// Function ID: 33240
// Name: Portal
// Dependencies: []

// Module 4000 (Portal)
const _module = require(dependencyMap[0]);
({ useCallback: closure_2, useEffect: closure_3, useMemo: closure_4, useRef: closure_5 } = _module);
const memoResult = _module.memo(function PortalComponent(name) {
  name = name.name;
  const require = name;
  const handleOnMount = name.handleOnMount;
  const dependencyMap = handleOnMount;
  const handleOnUnmount = name.handleOnUnmount;
  const handleOnUpdate = name.handleOnUpdate;
  const children = name.children;
  const portal = require(dependencyMap[1]).usePortal(name.hostName);
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
  const tmp3 = addPortal();
  const tmp4 = addPortal();
  const items1 = [handleOnMount, addPortal];
  tmp2.current = handleOnUnmount(() => {
    if (handleOnMount) {
      handleOnMount(() => callback(closure_7, closure_4));
    } else {
      addPortal(closure_7, children);
    }
  }, items1);
  const items2 = [handleOnUnmount, removePortal];
  tmp3.current = handleOnUnmount(() => {
    if (handleOnUnmount) {
      handleOnUnmount(() => callback(closure_7));
    } else {
      removePortal(closure_7);
    }
  }, items2);
  const items3 = [handleOnUpdate, addPortal, children];
  tmp4.current = handleOnUnmount(() => {
    if (handleOnUpdate) {
      handleOnUpdate(() => callback(closure_7, closure_4));
    } else {
      addPortal(closure_7, children);
    }
  }, items3);
  handleOnUpdate(() => {
    if (null != tmp2.current) {
      tmp2.current();
    }
    return () => {
      if (null != ref.current) {
        ref.current();
      }
      closure_8.current = undefined;
      ref.current = undefined;
      closure_10.current = undefined;
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
