// Module ID: 19897
// Function ID: 19898
// Name: SharedSpacesWarningManager
// Dependencies: [4990, 5898, 5083, 15866, 15864, 19898, 1092, 15867, 7423, 2]

// Module 19897 (SharedSpacesWarningManager)
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import showVoiceChannelBlockedUserWarning2 from "showVoiceChannelBlockedUserWarning" /* 15867 */;
import showGdmBlockedUserModal from "showGdmBlockedUserModal" /* 19898 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 15866 */;
import VoiceChannelBlockedUserStore from "VoiceChannelBlockedUserStore" /* 15864 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (channel.isGroupDM()) {
        const recipients = channel.recipients;
        const found = recipients.filter((item) => RelationshipStore.isBlocked(item));
        const recipients1 = channel.recipients;
        const found1 = recipients1.filter((item) => RelationshipStore.isIgnored(item));
        const tmp = found.length > 0 || found1.length > 0;
        if (tmp) {
          const blockedUserWarningDismissed = channel.blockedUserWarningDismissed || metroImportDefault(channelId);
          if (!blockedUserWarningDismissed) {
            const obj2 = { channelId, blockedUserIds: found, ignoredUserIds: found1 };
            const obj = showGdmBlockedUserModal;
            const result = obj.showGdmBlockedUserModal(obj2);
          }
        }
      }
    }
  }
}
function handleAppStateChanged(state) {
  if (state.state === ConstantsIOS.AppStates.ACTIVE) {
    const channelId = RTCConnectionStore.getChannelId();
    if (null != channelId) {
      const blockedUsersForVoiceChannel = VoiceChannelBlockedUserStore.getBlockedUsersForVoiceChannel(channelId);
      const ignoredUsersForVoiceChannel = VoiceChannelBlockedUserStore.getIgnoredUsersForVoiceChannel(channelId);
      if (blockedUsersForVoiceChannel.size > 0) {
        if (hasOwnProperty()) {
          const _Set = Set;
          const items = [];
          HermesBuiltin.arraySpread(items, ignoredUsersForVoiceChannel, HermesBuiltin.arraySpread(items, blockedUsersForVoiceChannel, 0));
          const self = this;
          const self2 = this;
          set = new Set(items);
          if (!metroImportAll(set)) {
            const items1 = [];
            const showVoiceChannelBlockedUserWarning = tmp2(15867).showVoiceChannelBlockedUserWarning;
            showVoiceChannelBlockedUserWarning2;
            HermesBuiltin.arraySpread(items1, ignoredUsersForVoiceChannel, HermesBuiltin.arraySpread(items1, blockedUsersForVoiceChannel, 0));
            const result = showVoiceChannelBlockedUserWarning(channelId, items1[0]);
          }
        }
      }
      metroRequire();
    } else {
      metroRequire();
    }
  }
}
({ isBlockedWarningQueued: hasOwnProperty, dequeueBlockWarning: metroRequire, gdmBlockedWarningInCooldown: metroImportDefault, voiceBlockedWarningInCooldownForUsers: metroImportAll } = SharedSpacesWarningStore);
class SharedSpacesWarningManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { CHANNEL_SELECT: handleChannelSelect, APP_STATE_UPDATE: handleAppStateChanged };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const sharedSpacesWarningManager = new SharedSpacesWarningManager();
let result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningManager.tsx");

export default sharedSpacesWarningManager;
