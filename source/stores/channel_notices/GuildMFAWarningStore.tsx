// Module ID: 12927
// Function ID: 12928
// Name: handleUserStoreUpdates
// Dependencies: [1932, 1874, 676, 589, 709, 2]

// Module 12927 (handleUserStoreUpdates)
import comparator from "comparator";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MFALevels } from "ME";
import { Store } from "initialize";

function handleUserStoreUpdates() {
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.mfaEnabled !== mfaEnabled) {
      mfaEnabled = currentUser.mfaEnabled;
    }
  }
  return false;
}
let c3 = null;
class GuildMFAWarningStore extends Store {
}
const prototype = GuildMFAWarningStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(mergeGuildAvatar, comparator);
  const items = [mergeGuildAvatar, comparator];
  this.syncWith(items, handleUserStoreUpdates);
};
prototype["isVisible"] = function isVisible(mfaLevel) {
  let result = null != mfaLevel;
  if (result) {
    result = mfaLevel.mfaLevel === MFALevels.ELEVATED;
  }
  if (result) {
    result = false === c3;
  }
  if (result) {
    result = comparator.hasElevatedPermissions(mfaLevel.id);
  }
  return result;
};
GuildMFAWarningStore.displayName = "GuildMFAWarningStore";
const guildMFAWarningStore = new GuildMFAWarningStore(require("dispatcher"), {
  CONNECTION_OPEN: handleUserStoreUpdates,
  GUILD_UPDATE: function handleGuildPermissionsUpdate() {
    return true;
  }
});
let result = require("ME").fileFinishedImporting("stores/channel_notices/GuildMFAWarningStore.tsx");

export default guildMFAWarningStore;
