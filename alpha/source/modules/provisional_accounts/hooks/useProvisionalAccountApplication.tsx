// Module ID: 12969
// Function ID: 12970
// Name: useProvisionalAccountApplication
// Dependencies: [7979, 504, 7499, 2]
// Exports: default

// Module 12969 (useProvisionalAccountApplication)
import GameRelationshipStore from "GameRelationshipStore" /* 7979 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  _require = arg0;
  const items = [GameRelationshipStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = require("initialize");
  return require("useGetOrFetchApplications").useGetOrFetchApplication(stateFromStores);
};
