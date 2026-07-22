// Module ID: 10751
// Function ID: 83533
// Name: useMyCurrentStageChannelRole
// Dependencies: []
// Exports: default

// Module 10751 (useMyCurrentStageChannelRole)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default function useMyCurrentStageChannelRole(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3, closure_4];
  const items1 = [arg0];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const id = id.getId();
    let permissionsForUser = null;
    if (voiceChannelId.getVoiceChannelId() === arg0) {
      permissionsForUser = permissionsForUser.getPermissionsForUser(id, arg0);
    }
    return permissionsForUser;
  }, items1);
};
