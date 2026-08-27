// Module ID: 11307
// Function ID: 11308
// Name: map
// Dependencies: [589, 709, 2]

// Module 11307 (map)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const map = new Map();
const Store = initializeDefault.Store;
class GuildRoleConnectionEligibilityStore extends Store {
}
GuildRoleConnectionEligibilityStore.prototype["getGuildRoleConnectionEligibility"] = function getGuildRoleConnectionEligibility(roleId) {
  let value;
  if (null != roleId) {
    value = map.get(roleId);
  }
  return value;
};
GuildRoleConnectionEligibilityStore.displayName = "GuildRoleConnectionEligibilityStore";
const guildRoleConnectionEligibilityStore = new GuildRoleConnectionEligibilityStore(dispatcherDefault, {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionEligibility);
  }
});
let result = require("set").fileFinishedImporting("modules/connections/GuildRoleConnectionEligibilityStore.tsx");

export default guildRoleConnectionEligibilityStore;
