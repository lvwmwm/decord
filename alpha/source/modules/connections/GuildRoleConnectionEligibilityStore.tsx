// Module ID: 13234
// Function ID: 13235
// Name: GuildRoleConnectionEligibilityStore
// Dependencies: [504, 572, 2]

// Module 13234 (GuildRoleConnectionEligibilityStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class GuildRoleConnectionEligibilityStore extends Store {
  getGuildRoleConnectionEligibility(roleId) {
    let value;
    if (null != roleId) {
      value = map.get(roleId);
    }
    return value;
  }
}
const prototype = GuildRoleConnectionEligibilityStore.prototype;
GuildRoleConnectionEligibilityStore.displayName = "GuildRoleConnectionEligibilityStore";
const obj = {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionEligibility);
  }
};
const guildRoleConnectionEligibilityStore = new GuildRoleConnectionEligibilityStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/connections/GuildRoleConnectionEligibilityStore.tsx");

export default guildRoleConnectionEligibilityStore;
