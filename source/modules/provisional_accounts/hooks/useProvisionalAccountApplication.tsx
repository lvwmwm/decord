// Module ID: 11719
// Function ID: 11720
// Name: useProvisionalAccountApplication
// Dependencies: [5942, 589, 5521, 2]
// Exports: default

// Module 11719 (useProvisionalAccountApplication)
import recountRelationshipTypes from "recountRelationshipTypes";

const require = arg1;
const result = require("useGetOrFetchApplications").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  const _require = arg0;
  const items = [recountRelationshipTypes];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    const gameRelationshipsForUser = outer1_2.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = _require(589);
  return _require(5521).useGetOrFetchApplication(stateFromStores);
};
