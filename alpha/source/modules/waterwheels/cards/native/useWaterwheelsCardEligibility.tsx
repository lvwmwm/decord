// Module ID: 18830
// Function ID: 18831
// Name: useWaterwheelsCardEligibility
// Dependencies: [19, 14191, 504, 18831, 2]
// Exports: default

// Module 18830 (useWaterwheelsCardEligibility)
import WaterwheelsCard from "WaterwheelsCard" /* 18831 */;
import react from "react" /* 19 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14191 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/cards/native/useWaterwheelsCardEligibility.tsx");

export default function useWaterwheelsCardEligibility() {
  let authorizationStatus;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [PushNotificationPermissionStore];
  stateFromStores = obj.useStateFromStores(items, () => authorizationStatus.authorizationStatus);
  const items1 = [stateFromStores];
  return react.useCallback((clientEligibility) => {
    const obj = WaterwheelsCard;
    return obj.getWaterwheelsCardEligible(clientEligibility, stateFromStores);
  }, items1);
};
