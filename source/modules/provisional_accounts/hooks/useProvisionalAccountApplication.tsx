// Module ID: 12188
// Function ID: 12189
// Name: useProvisionalAccountApplication
// Dependencies: [7264, 589, 5840, 2]
// Exports: default

// Module 12188 (useProvisionalAccountApplication)
import closure_2 from "recountRelationshipTypes" /* 7264 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    const gameRelationshipsForUser = closure_1_2.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = _require(589);
  return _require(5840).useGetOrFetchApplication(stateFromStores);
};
