// Module ID: 10648
// Function ID: 83141
// Name: useRequestToSpeakPermission
// Dependencies: []
// Exports: useRequestToSpeakPermission

// Module 10648 (useRequestToSpeakPermission)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = function useRequestToSpeakPermission(id) {
  const arg1 = id;
  const items = [closure_5];
  const items1 = [id];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => channel.getChannel(arg0), items1);
  const importAll = stateFromStores;
  const obj = arg1(dependencyMap[4]);
  const canEveryoneRoleResult = importAll(dependencyMap[5]).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  const tmp3 = callback(React.useState(canEveryoneRoleResult), 2);
  const first = tmp3[0];
  const dependencyMap = tmp5;
  if (canEveryoneRoleResult !== first) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    first,
    (arg0) => {
      if (null != stateFromStores) {
        tmp5(arg0);
        const result = arg0(tmp5[6]).setEveryoneRolePermissionAllowed(stateFromStores, constants.REQUEST_TO_SPEAK, arg0);
        const obj = arg0(tmp5[6]);
      }
    }
  ];
  return items2;
};
