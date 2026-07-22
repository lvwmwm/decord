// Module ID: 10615
// Function ID: 82828
// Name: useCurrentUserStageRoles
// Dependencies: []
// Exports: default

// Module 10615 (useCurrentUserStageRoles)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default function useCurrentUserStageRoles(arg0) {
  let flag = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  const items = [closure_3, closure_2];
  const items1 = [arg0, flag];
  return arg1(dependencyMap[2]).useStateFromStoresObject(items, () => permissionsForUser.getPermissionsForUser(id.getId(), arg0, flag), items1);
};
