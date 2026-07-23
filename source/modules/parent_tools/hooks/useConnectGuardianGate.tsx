// Module ID: 16136
// Function ID: 125079
// Name: useConnectGuardianGate
// Dependencies: [57, 31, 6769, 566, 6771, 4559, 2]
// Exports: useConnectGuardianGate

// Module 16136 (useConnectGuardianGate)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/hooks/useConnectGuardianGate.tsx");

export const useConnectGuardianGate = function useConnectGuardianGate() {
  let expiresAt;
  let importDefault;
  let linkCode;
  let require;
  let tmp3;
  let tmp5;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ linkCode: outer1_5.getLinkCode(), expiresAt: outer1_5.getLinkCodeExpiresAt() }));
  ({ linkCode, expiresAt } = stateFromStoresObject);
  [tmp3, require] = callback(React.useState(false), 2);
  let tmp2 = callback(React.useState(false), 2);
  [tmp5, importDefault] = callback(React.useState(() => {
    const linkCodeExpiresAt = outer1_5.getLinkCodeExpiresAt();
    let tmp2 = null != outer1_5.getLinkCode() && null != linkCodeExpiresAt;
    if (tmp2) {
      const _Date = Date;
      tmp2 = linkCodeExpiresAt > Date.now();
    }
    return tmp2;
  }), 2);
  const dependencyMap = React.useRef(0);
  callback = React.useCallback(() => {
    const sum = ref.current + 1;
    ref.current = sum;
    const callback = sum;
    callback(false);
    const linkCodeForCurrentUser = outer1_0(ref[4]).getLinkCodeForCurrentUser();
    const obj = outer1_0(ref[4]);
    linkCodeForCurrentUser.then(() => {
      if (closure_0 === outer1_2.current) {
        sum(false);
        outer1_1(true);
      }
    }).catch(() => {
      if (closure_0 === outer1_2.current) {
        const linkCodeExpiresAt = outer2_5.getLinkCodeExpiresAt();
        if (null != outer2_5.getLinkCode()) {
          if (null != linkCodeExpiresAt) {
            const _Date = Date;
            if (linkCodeExpiresAt > Date.now()) {
              outer1_1(true);
            }
          }
        }
        sum(true);
      }
    });
  }, []);
  importDefault(4559)(callback);
  if (tmp3) {
    obj = { state: "error" };
    let obj2 = obj;
  } else if (tmp5) {
    if (null == linkCode) {
      obj = { state: "error" };
    }
    const obj1 = { state: "gate", linkCode, expiresAt, refresh: callback };
    obj = obj1;
  } else {
    obj2 = { state: "loading" };
  }
  return obj2;
};
