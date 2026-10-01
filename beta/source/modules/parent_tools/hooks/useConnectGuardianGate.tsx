// Module ID: 17224
// Function ID: 17225
// Name: useConnectGuardianGate
// Dependencies: [32, 19, 6957, 504, 6959, 5298, 2]
// Exports: useConnectGuardianGate

// Module 17224 (useConnectGuardianGate)
import get_initialized from "get initialized" /* 504 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useConnectGuardianGate.tsx");

export const useConnectGuardianGate = function useConnectGuardianGate() {
  let closure_1;
  let expiresAt;
  let first;
  let linkCode;
  let obj2;
  let ref;
  let tmp3;
  let obj = get_initialized;
  const items = [FamilyCenterStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { linkCode: FamilyCenterStore.getLinkCode(), expiresAt: FamilyCenterStore.getLinkCodeExpiresAt() };
    return obj;
  });
  ({ linkCode, expiresAt } = stateFromStoresObject);
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, require] = tmp2;
  [first, importDefault] = react.useState(() => {
    const linkCodeExpiresAt = FamilyCenterStore.getLinkCodeExpiresAt();
    let tmp2 = null != FamilyCenterStore.getLinkCode() && null != linkCodeExpiresAt;
    if (tmp2) {
      const _Date = Date;
      tmp2 = linkCodeExpiresAt > Date.now();
    }
    return tmp2;
  });
  dependencyMap = react.useRef(0);
  const callback = react.useCallback(() => {
    const sum = ref.current + 1;
    ref.current = sum;
    require = sum;
    require(false);
    const obj = require("FamilyCenterActionCreators");
    const linkCodeForCurrentUser = obj.getLinkCodeForCurrentUser();
    const nextPromise = linkCodeForCurrentUser.then(() => {
      if (closure_0 === ref.current) {
        require(false);
        closure_1(true);
      }
    });
    nextPromise.catch(() => {
      if (closure_0 === ref.current) {
        const linkCodeExpiresAt = FamilyCenterStore.getLinkCodeExpiresAt();
        if (null != FamilyCenterStore.getLinkCode()) {
          if (null != linkCodeExpiresAt) {
            const _Date = Date;
            if (linkCodeExpiresAt > Date.now()) {
              closure_1(true);
            }
          }
        }
        require(true);
      }
    });
  }, []);
  useMountEffectDefault(callback);
  if (tmp3) {
    obj2 = { state: "error" };
  } else if (first) {
    if (null != linkCode) {
      let obj4;
      if (null != expiresAt) {
        obj4 = { state: "gate", linkCode, expiresAt, refresh: callback };
        const obj3 = { state: "gate", linkCode, expiresAt, refresh: callback };
      }
      obj2 = obj4;
    }
    obj4 = { state: "error" };
  } else {
    obj2 = { state: "loading" };
  }
  return obj2;
};
