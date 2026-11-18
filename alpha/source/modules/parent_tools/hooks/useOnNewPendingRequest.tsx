// Module ID: 16104
// Function ID: 16105
// Name: useOnNewPendingRequest
// Dependencies: [19, 8247, 9042, 504, 5384, 8249, 2]
// Exports: default

// Module 16104 (useOnNewPendingRequest)
import react_mod from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8247 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default function useOnNewPendingRequest(map) {
  let current;
  let ref;
  let ref2;
  let stateFromStores;
  _require = map;
  let obj = require("useUserLinks");
  const pendingRequestCount = obj.usePendingRequestCount();
  const items = [ref2];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => ref2.getAreLinkedUsersProcessed());
  pendingRequestCount(stateFromStores[4])(() => {
    if (!ref2.getAreLinkedUsersProcessed()) {
      const obj = pendingRequestCount(stateFromStores[5]);
      const linkedUsers = obj.fetchLinkedUsers();
      linkedUsers.catch(() => {

      });
    }
  });
  react = react.useRef(map);
  const items1 = [map];
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
};
