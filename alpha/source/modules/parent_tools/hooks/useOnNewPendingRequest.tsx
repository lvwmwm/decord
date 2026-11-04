// Module ID: 17019
// Function ID: 17020
// Name: useOnNewPendingRequest
// Dependencies: [19, 7855, 8510, 504, 5729, 7857, 2]
// Exports: default

// Module 17019 (useOnNewPendingRequest)
import react_mod from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default function useOnNewPendingRequest(set) {
  let current;
  let ref;
  let ref2;
  let stateFromStores;
  _require = set;
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
  react = react.useRef(set);
  const items1 = [set];
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
