// Module ID: 19711
// Function ID: 19712
// Name: GuildRoleConnectionsConfigurationStore
// Dependencies: [4665, 504, 572, 2]

// Module 19711 (GuildRoleConnectionsConfigurationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import GuildStore from "GuildStore" /* 4665 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class GuildRoleConnectionsConfigurationStore extends Store {
  initialize() {
    this.waitFor(GuildStore);
  }
  getGuildRoleConnectionsConfiguration(arg0) {
    return map.get(arg0);
  }
}
const prototype = GuildRoleConnectionsConfigurationStore.prototype;
GuildRoleConnectionsConfigurationStore.displayName = "GuildRoleConnectionsConfigurationStore";
const obj = {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionConfigurations);
  }
};
const guildRoleConnectionsConfigurationStore = new GuildRoleConnectionsConfigurationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/connections/GuildRoleConnectionsConfigurationStore.tsx");

export default guildRoleConnectionsConfigurationStore;
