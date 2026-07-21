// Module ID: 13660
// Function ID: 103459
// Name: useOnNewPendingRequest
// Dependencies: []
// Exports: default

// Module 13660 (useOnNewPendingRequest)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default function useOnNewPendingRequest(arg0) {
  const arg1 = arg0;
  const pendingRequestCount = arg1(dependencyMap[2]).usePendingRequestCount();
  const importDefault = pendingRequestCount;
  const obj = arg1(dependencyMap[2]);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => authStore.getAreLinkedUsersProcessed());
  const dependencyMap = stateFromStores;
  importDefault(dependencyMap[4])(() => {
    if (!authStore.getAreLinkedUsersProcessed()) {
      const linkedUsers = pendingRequestCount(stateFromStores[5]).fetchLinkedUsers();
      linkedUsers.catch(() => {

      });
      const obj = pendingRequestCount(stateFromStores[5]);
    }
  });
  const React = React.useRef(arg0);
  const items1 = [arg0];
  const effect = React.useEffect(() => {
    closure_3.current = arg0;
  }, items1);
  closure_4 = React.useRef(null);
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
