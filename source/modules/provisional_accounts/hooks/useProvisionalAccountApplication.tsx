// Module ID: 11690
// Function ID: 90689
// Name: useProvisionalAccountApplication
// Dependencies: [6900, 566, 5468, 2]
// Exports: default

// Module 11690 (useProvisionalAccountApplication)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useGetOrFetchApplications").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    const gameRelationshipsForUser = outer1_2.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = _require(566);
  return _require(5468).useGetOrFetchApplication(stateFromStores);
};
