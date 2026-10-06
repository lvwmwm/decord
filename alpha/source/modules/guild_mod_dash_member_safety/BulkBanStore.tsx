// Module ID: 5713
// Function ID: 5714
// Name: BulkBanStore
// Dependencies: [502, 504, 584, 2]

// Module 5713 (BulkBanStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const set = new Set();
const set1 = new Set();
const Store = get_initializedDefault.Store;
class BulkBanStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  hasPendingBulkBan(arg0) {
    return set.has(arg0);
  }
  consumeCompletedBeforeStarted(arg0, id) {
    return set1.delete("" + arg0 + ":" + id);
  }
}
const prototype = BulkBanStore.prototype;
BulkBanStore.displayName = "BulkBanStore";
let obj = {
  GUILD_BULK_BAN_STARTED: function handleBulkBanStarted(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_BULK_BAN_FAILED: function handleBulkBanFailed(guildId) {
    const obj = set;
    if (set.has(guildId.guildId)) {
      obj.delete(guildId.guildId);
    } else {
      return false;
    }
  },
  GUILD_BULK_BAN_UPDATE: function handleBulkBanUpdate(guildId) {
    const obj = set;
    if (set.has(guildId.guildId)) {
      obj.delete(guildId.guildId);
    } else {
      const _HermesInternal = HermesInternal;
      set1.add("" + guildId.guildId + ":" + AuthenticationStore.getId());
      return false;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    set1.clear();
  }
};
const bulkBanStore = new BulkBanStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkBanStore.tsx");

export default bulkBanStore;
