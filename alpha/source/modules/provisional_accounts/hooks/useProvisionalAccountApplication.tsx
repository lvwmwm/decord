// Module ID: 14153
// Function ID: 14154
// Name: useProvisionalAccountApplication
// Dependencies: [7793, 504, 7324, 2]
// Exports: default

// Module 14153 (useProvisionalAccountApplication)
import GameRelationshipStore from "GameRelationshipStore" /* 7793 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GameRelationshipStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj2 = require("useGetOrFetchApplications");
  return obj2.useGetOrFetchApplication(stateFromStores);
};
