// Module ID: 16019
// Function ID: 122906
// Name: useConnectGuardianGate
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: useConnectGuardianGate

// Module 16019 (useConnectGuardianGate)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/parent_tools/hooks/useConnectGuardianGate.tsx");

export const useConnectGuardianGate = function useConnectGuardianGate() {
  let expiresAt;
  let linkCode;
  let tmp3;
  let tmp5;
  let obj = arg1(closure_2[3]);
  const items = [closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ linkCode: store.getLinkCode(), expiresAt: store.getLinkCodeExpiresAt() }));
  ({ linkCode, expiresAt } = stateFromStoresObject);
  [tmp3, closure_0] = callback(React.useState(false), 2);
  const tmp2 = callback(React.useState(false), 2);
  [tmp5, closure_1] = callback(React.useState(() => {
    const linkCodeExpiresAt = store.getLinkCodeExpiresAt();
    let tmp2 = null != store.getLinkCode() && null != linkCodeExpiresAt;
    if (tmp2) {
      const _Date = Date;
      tmp2 = linkCodeExpiresAt > Date.now();
    }
    return tmp2;
  }), 2);
  closure_2 = React.useRef(0);
  const callback = React.useCallback(() => {
    const sum = ref.current + 1;
    ref.current = sum;
    sum(false);
    const linkCodeForCurrentUser = sum(ref[4]).getLinkCodeForCurrentUser();
    const obj = sum(ref[4]);
    linkCodeForCurrentUser.then(() => {
      if (sum === ref.current) {
        sum(false);
        callback(true);
      }
    }).catch(() => {
      if (sum === ref.current) {
        const linkCodeExpiresAt = store.getLinkCodeExpiresAt();
        if (null != store.getLinkCode()) {
          if (null != linkCodeExpiresAt) {
            const _Date = Date;
            if (linkCodeExpiresAt > Date.now()) {
              callback(true);
            }
          }
        }
        sum(true);
      }
    });
  }, []);
  importDefault(closure_2[5])(callback);
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
