// Module ID: 11652
// Function ID: 90389
// Name: useProvisionalAccountApplication
// Dependencies: []
// Exports: default

// Module 11652 (useProvisionalAccountApplication)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[1]).useStateFromStores(items, () => {
    const gameRelationshipsForUser = gameRelationshipsForUser.getGameRelationshipsForUser(arg0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = arg1(dependencyMap[1]);
  return arg1(dependencyMap[2]).useGetOrFetchApplication(stateFromStores);
};
