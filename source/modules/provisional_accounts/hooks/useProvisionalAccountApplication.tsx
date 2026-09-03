// Module ID: 12404
// Function ID: 12405
// Name: useProvisionalAccountApplication
// Dependencies: [7413, 586, 5968, 2]
// Exports: default

// Module 12404 (useProvisionalAccountApplication)
import closure_2 from "recountRelationshipTypes" /* 7413 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(586).useStateFromStores(items, () => {
    const gameRelationshipsForUser = closure_1_2.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = _require(586);
  return _require(5968).useGetOrFetchApplication(stateFromStores);
};
