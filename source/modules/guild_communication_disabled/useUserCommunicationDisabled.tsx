// Module ID: 7664
// Function ID: 61279
// Name: getUserGuildMember
// Dependencies: [1917, 1849, 566, 3747, 2]
// Exports: useCurrentUserCommunicationDisabled, userCommunicationDisabled

// Module 7664 (getUserGuildMember)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
function getUserGuildMember(id, guildId, _isNativeReflectConstruct) {
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = _isNativeReflectConstruct.getMember(guildId, id);
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
  const items = [tmp2, require(3747) /* isCommunicationDisabled */.isMemberCommunicationDisabled(communicationDisabledUntil)];
  return items;
}
function useUserCommunicationDisabled(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg1, arg0];
  return isCommunicationDisabled(_require(566).useStateFromStores(items, () => outer1_4(closure_0, closure_1, outer1_2), items1));
}
const result = require("initialize").fileFinishedImporting("modules/guild_communication_disabled/useUserCommunicationDisabled.tsx");

export default useUserCommunicationDisabled;
export const useCurrentUserCommunicationDisabled = function useCurrentUserCommunicationDisabled(guild_id) {
  const items = [closure_3];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getCurrentUser());
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  return useUserCommunicationDisabled(id, guild_id);
};
export const userCommunicationDisabled = function userCommunicationDisabled(id, guildId) {
  return isCommunicationDisabled(getUserGuildMember(id, guildId, _isNativeReflectConstruct));
};
