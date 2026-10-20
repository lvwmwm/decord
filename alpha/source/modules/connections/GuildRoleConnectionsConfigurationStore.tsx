// Module ID: 18842
// Function ID: 18843
// Name: GuildRoleConnectionsConfigurationStore
// Dependencies: [4822, 504, 584, 2]

// Module 18842 (GuildRoleConnectionsConfigurationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildStore from "GuildStore" /* 4822 */;
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
