// Module ID: 16358
// Function ID: 126250
// Name: useInviteApplicationBypassInfo
// Dependencies: [555352064, 488505344, 250937344, 131072]
// Exports: useInviteApplicationBypassInfo

// Module 16358 (useInviteApplicationBypassInfo)
let closure_2 = importDefault(dependencyMap[0]);
({ GuildFeatures: closure_3, Permissions: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/instant_invite/useInviteApplicationBypassInfo.tsx");

export const useInviteApplicationBypassInfo = function useInviteApplicationBypassInfo(guild) {
  const arg1 = guild;
  let obj = arg1(dependencyMap[2]);
  const items = [closure_2];
  const items1 = [guild];
  let tmp2 = null == guild;
  const stateFromStores = obj.useStateFromStores(items, () => closure_2.can(constants.KICK_MEMBERS, arg0), items1);
  if (!tmp2) {
    const features = guild.features;
    tmp2 = !features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (!tmp2) {
    tmp2 = null == guild;
  }
  if (!tmp2) {
    const features2 = guild.features;
    tmp2 = !features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  obj = {};
  let tmp6 = tmp5;
  if (!tmp2) {
    tmp6 = stateFromStores;
  }
  obj.canCreateApplicationBypassInvites = tmp6;
  obj.isManualApprovalGuild = !tmp2;
  return obj;
};
