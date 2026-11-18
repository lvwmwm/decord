// Module ID: 13468
// Function ID: 13469
// Name: useProvisionalAccountApplication
// Dependencies: [8272, 504, 6773, 2]
// Exports: default

// Module 13468 (useProvisionalAccountApplication)
import GameRelationshipStore from "GameRelationshipStore" /* 8272 */;
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
