// Module ID: 19049
// Function ID: 19050
// Name: useWaterwheelsCardEligibility
// Dependencies: [19, 7093, 13905, 504, 19050, 2]
// Exports: default

// Module 19049 (useWaterwheelsCardEligibility)
import WaterwheelsCard from "WaterwheelsCard" /* 19050 */;
import react from "react" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 7093 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13905 */;
import size from "module_2" /* 2 */;

let accounts;

const result = size.fileFinishedImporting("modules/waterwheels/cards/native/useWaterwheelsCardEligibility.tsx");

export default function useWaterwheelsCardEligibility() {
  let authorizationStatus;
  let memo;
  let stateFromStores;
  let stateFromStores1;
  let obj = stateFromStores(stateFromStores1[3]);
  const items = [PushNotificationPermissionStore];
  stateFromStores = obj.useStateFromStores(items, () => authorizationStatus.authorizationStatus);
  const items1 = [ConnectedAccountsStore];
  const obj2 = stateFromStores(stateFromStores1[3]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    accounts = accounts.getAccounts();
    const found = accounts.filter((revoked) => !revoked.revoked);
    const mapped = found.map((type) => type.type);
    return stringify(mapped.sort());
  });
  const items2 = [stateFromStores1];
  memo = memo.useMemo(() => JSON.parse(stateFromStores1), items2);
  const items3 = [stateFromStores, memo];
  return memo.useCallback((actions) => {
    const obj = WaterwheelsCard;
    return obj.getWaterwheelsCardEligible(actions, stateFromStores, memo);
  }, items3);
};
