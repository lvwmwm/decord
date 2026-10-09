// Module ID: 15077
// Function ID: 15078
// Name: useOnNewPendingRequest
// Dependencies: [19, 7252, 558, 576, 7720, 504, 7254, 5393, 2]

// Module 15077 (useOnNewPendingRequest)
import react_mod from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7252 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnNewPendingRequest(cResult) {
  let fn3;
  let items2;
  let ref;
  let ref2;
  let stateFromStores;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp6;
  let tmp9;
  const _require = cResult;
  let tmp = _require;
  let obj = require("react");
  cResult = obj.c(10);
  const obj2 = require("useUserLinks");
  const pendingRequestCount = obj2.usePendingRequestCount();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ref2];
    const fn = function c() {
      return ref2.getAreLinkedUsersProcessed();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(stateFromStores[5]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      if (!ref2.getAreLinkedUsersProcessed()) {
        const obj = pendingRequestCount(stateFromStores[6]);
        const linkedUsers = obj.fetchLinkedUsers();
        linkedUsers.catch(() => {

        });
      }
    };
    cResult[2] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  pendingRequestCount(stateFromStores[7])(tmp9);
  react = react.useRef(cResult);
  if (cResult[3] !== cResult) {
    class P {
      constructor() {
        ref.current = current;
      }
    }
    const items1 = [cResult];
    cResult[3] = cResult;
    cResult[4] = P;
    cResult[5] = items1;
    tmp12 = items1;
    tmp11 = P;
  } else {
    class P {
      constructor() {
        ref.current = current;
      }
    }
    tmp12 = cResult[5];
  }
  const effect = obj4.useEffect(tmp11, tmp12);
  ref2 = obj4.useRef(null);
  if (cResult[6] === stateFromStores) {
    class P {
      constructor() {
        ref.current = current;
      }
    }
    const effect1 = obj4.useEffect(fn3, items2);
  }
  fn3 = function h() {
    const tmp = stateFromStores;
    if (tmp) {
      if (null != ref2.current) {
        ref2.current = pendingRequestCount;
        if (pendingRequestCount > ref2.current) {
          ref.current();
        }
      } else {
        ref2.current = pendingRequestCount;
      }
    }
  };
  items2 = [stateFromStores, pendingRequestCount];
  cResult[6] = stateFromStores;
  cResult[7] = pendingRequestCount;
  cResult[8] = fn3;
  cResult[9] = items2;
}) : (function useOnNewPendingRequest(cResult) {
  let ref;
  let ref2;
  let stateFromStores;
  const _require = cResult;
  let obj = require("useUserLinks");
  const pendingRequestCount = obj.usePendingRequestCount();
  const items = [ref2];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => ref2.getAreLinkedUsersProcessed());
  pendingRequestCount(stateFromStores[7])(() => {
    if (!ref2.getAreLinkedUsersProcessed()) {
      const obj = pendingRequestCount(stateFromStores[6]);
      const linkedUsers = obj.fetchLinkedUsers();
      linkedUsers.catch(() => {

      });
    }
  });
  react = react.useRef(cResult);
  const items1 = [cResult];
  const effect = react.useEffect(() => {
    ref.current = current;
  }, items1);
  ref2 = react.useRef(null);
  const items2 = [stateFromStores, pendingRequestCount];
  const effect1 = react.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      if (null != ref2.current) {
        ref2.current = pendingRequestCount;
        if (pendingRequestCount > ref2.current) {
          ref.current();
        }
      } else {
        ref2.current = pendingRequestCount;
      }
    }
  }, items2);
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default tmp2;
