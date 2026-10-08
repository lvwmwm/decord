// Module ID: 13877
// Function ID: 13878
// Name: GuildMFAWarningStore
// Dependencies: [4705, 1389, 1085, 504, 584, 2]

// Module 13877 (GuildMFAWarningStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

function handleUserStoreUpdates() {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.mfaEnabled !== mfaEnabled) {
      mfaEnabled = currentUser.mfaEnabled;
    }
  }
  return false;
}
const MFALevels = Constants.MFALevels;
let mfaEnabled = null;
const Store = get_initializedDefault.Store;
class GuildMFAWarningStore extends Store {
  initialize() {
    this.waitFor(UserStore, GuildChannelStore);
    const items = [UserStore, GuildChannelStore];
    this.syncWith(items, handleUserStoreUpdates);
  }
  isVisible(mfaLevel) {
    const result = null != mfaLevel && mfaLevel.mfaLevel === MFALevels.ELEVATED && false === mfaEnabled && GuildChannelStore.hasElevatedPermissions(mfaLevel.id);
    return result;
  }
}
const prototype = GuildMFAWarningStore.prototype;
GuildMFAWarningStore.displayName = "GuildMFAWarningStore";
const obj = {
  CONNECTION_OPEN: handleUserStoreUpdates,
  GUILD_UPDATE: function handleGuildPermissionsUpdate() {
    return true;
  }
};
const guildMFAWarningStore = new GuildMFAWarningStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/channel_notices/GuildMFAWarningStore.tsx");

export default guildMFAWarningStore;
