// Module ID: 13997
// Function ID: 106470
// Name: useSubscriptionRole
// Dependencies: []
// Exports: default

// Module 13997 (useSubscriptionRole)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  editStateId = arg0;
  closure_1 = editStateId(closure_1[1]).useSubscriptionListing(editStateId);
  const obj = editStateId(closure_1[1]);
  const items = [closure_2];
  return editStateId(closure_1[2]).useStateFromStores(items, () => {
    let role;
    if (null != arg0) {
      if (null != role_id) {
        role = role.getRole(arg0, role_id.role_id);
      }
    }
    return role;
  });
};
