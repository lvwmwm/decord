// Module ID: 7658
// Function ID: 61225
// Name: getUserGuildMember
// Dependencies: []
// Exports: useCurrentUserCommunicationDisabled, userCommunicationDisabled

// Module 7658 (getUserGuildMember)
function getUserGuildMember(id, guildId, closure_2) {
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = closure_2.getMember(guildId, id);
    }
  }
  return member;
}
function isCommunicationDisabled(communicationDisabledUntil) {
  let prop;
  if (null != communicationDisabledUntil) {
    prop = communicationDisabledUntil.communicationDisabledUntil;
  }
  let tmp2 = null;
  if (null != prop) {
    tmp2 = prop;
  }
  const items = [tmp2, arg1(dependencyMap[3]).isMemberCommunicationDisabled(communicationDisabledUntil)];
  return items;
}
function useUserCommunicationDisabled(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg1, arg0];
  return isCommunicationDisabled(arg1(dependencyMap[2]).useStateFromStores(items, () => callback(arg0, arg1, closure_2), items1));
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_communication_disabled/useUserCommunicationDisabled.tsx");

export default useUserCommunicationDisabled;
export const useCurrentUserCommunicationDisabled = function useCurrentUserCommunicationDisabled(guild_id) {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  return useUserCommunicationDisabled(id, guild_id);
};
export const userCommunicationDisabled = function userCommunicationDisabled(id, guildId) {
  return isCommunicationDisabled(getUserGuildMember(id, guildId, closure_2));
};
