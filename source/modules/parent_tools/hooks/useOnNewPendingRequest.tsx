// Module ID: 13834
// Function ID: 105994
// Name: useOnNewPendingRequest
// Dependencies: [31, 6769, 7122, 566, 4559, 6771, 2]
// Exports: default

// Module 13834 (useOnNewPendingRequest)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useUserIdsForLinkStatus").fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default function useOnNewPendingRequest(arg0) {
  const _require = arg0;
  const pendingRequestCount = _require(stateFromStores[2]).usePendingRequestCount();
  let obj = _require(stateFromStores[2]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => authStore.getAreLinkedUsersProcessed());
  pendingRequestCount(stateFromStores[4])(() => {
    if (!authStore.getAreLinkedUsersProcessed()) {
      const linkedUsers = pendingRequestCount(stateFromStores[5]).fetchLinkedUsers();
      linkedUsers.catch(() => {

      });
      const obj = pendingRequestCount(stateFromStores[5]);
    }
  });
  React = React.useRef(arg0);
  const items1 = [arg0];
  const effect = React.useEffect(() => {
    result.current = closure_0;
  }, items1);
  _isNativeReflectConstruct = React.useRef(null);
  const items2 = [stateFromStores, pendingRequestCount];
  const effect1 = React.useEffect(() => {
    if (stateFromStores) {
      if (null != authStore.current) {
        authStore.current = pendingRequestCount;
        if (pendingRequestCount > authStore.current) {
          ref.current();
        }
      } else {
        authStore.current = pendingRequestCount;
      }
    }
  }, items2);
};
