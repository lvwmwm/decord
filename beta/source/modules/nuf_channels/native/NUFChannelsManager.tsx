// Module ID: 14075
// Function ID: 14076
// Name: NUFChannelsManager
// Dependencies: [2109, 2067, 4612, 1376, 1078, 4418, 510, 4635, 7397, 4649, 4648, 1389, 4757, 14076, 1984, 2]

// Module 14075 (NUFChannelsManager)
import Storage3 from "Storage" /* 510 */;
import RootNavigationRef from "RootNavigationRef" /* 4649 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4612 */;
import UserStore from "UserStore" /* 1376 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

require = fn;
const GuildFeatures = fn(1078).GuildFeatures;
const GuildMemberFlags = fn(4418).GuildMemberFlags;
let c9 = "2020_02_nuf_channels";
let c10 = "2020_02_nuf_voice_channels";
class NUFChannelsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOGOUT() {
            return applyArgumentsResult.clear();
          }
    };
    applyArgumentsResult.handleNavigationStateChanged = function handleNavigationStateChanged() {
      if ("guilds" === obj.getCurrentNavigationRouteName()) {
        const guildId = SelectedGuildStore.getGuildId();
        guild = GuildStore.getGuild(guildId);
        let tmp5 = null != guildId;
        if (tmp5) {
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.HUB);
          }
          tmp5 = !hasItem;
        }
        let selfMember = null;
        if (null != guild) {
          selfMember = GuildMemberStore.getSelfMember(guild.id);
        }
        let hasItem1 = null != guild;
        if (hasItem1) {
          const features2 = guild.features;
          hasItem1 = features2.has(GuildFeatures.GUILD_ONBOARDING);
        }
        if (hasItem1) {
          let num;
          if (selfMember != null) {
            num = selfMember.flags;
          }
          if (num == null) {
            num = 0;
          }
          hasItem1 = tmp(1389).hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
          const tmpResult = tmp(1389);
        }
        if (hasItem1) {
          let num2;
          if (selfMember != null) {
            num2 = selfMember.flags;
          }
          if (num2 == null) {
            num2 = 0;
          }
          hasItem1 = !tmp(1389).hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
          const tmpResult3 = tmp(1389);
        }
        if (tmp5) {
          tmp5 = !hasItem1;
        }
        if (tmp5) {
          const Storage = tmp(510).Storage;
          value = Storage.get(c9);
          let isNewUserResult = !value;
          if (!value) {
            isNewUserResult = tmp(4635).isNewUser(UserStore.getCurrentUser());
            const tmpResult4 = tmp(4635);
          }
          if (isNewUserResult) {
            ActionSheetActionCreatorsDefault.openLazy(tmp(1984)(14076, dependencyMap.paths), "NUFChannelsActionSheet");
            const Storage2 = tmp(510).Storage;
            const result = Storage2.set(tmp12, true);
          }
          applyArgumentsResult.terminate();
          tmp12 = c9;
        }
      }
    };
    applyArgumentsResult.requiresVoiceChannelsOnboard = function requiresVoiceChannelsOnboard() {
      const Storage = applyArgumentsResult(510).Storage;
      value = Storage.get(closure_1_10);
      let isNewUserResult = !value;
      if (!value) {
        isNewUserResult = applyArgumentsResult(4635).isNewUser(currentUser.getCurrentUser());
        const tmpResult = applyArgumentsResult(4635);
      }
      return isNewUserResult;
    };
    applyArgumentsResult.handleVoiceChannelsOnboard = function handleVoiceChannelsOnboard() {
      const Storage = applyArgumentsResult(510).Storage;
      const result = Storage.set(closure_1_10, true);
    };
    applyArgumentsResult.clear = function clear() {
      const Storage = applyArgumentsResult(510).Storage;
      Storage.remove(closure_1_9);
      const Storage2 = applyArgumentsResult(510).Storage;
      Storage2.remove(closure_1_10);
    };
    return applyArgumentsResult;
  }
}
const prototype = NUFChannelsManager.prototype;
prototype["_initialize"] = function _initialize() {
  const Storage = Storage3.Storage;
  value = Storage.get(c9);
  let isNewUserResult = !value;
  if (!value) {
    isNewUserResult = tmp(4635).isNewUser(UserStore.getCurrentUser());
    const tmpResult = tmp(4635);
  }
  if (isNewUserResult) {
    const rootNavigationRef = tmp(4649).getRootNavigationRef();
    if (rootNavigationRef != null) {
      const self = this;
      rootNavigationRef.addListener("state", this.handleNavigationStateChanged);
    }
    const tmpResult2 = tmp(4649);
  }
};
prototype["_terminate"] = function _terminate() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    const self = this;
    rootNavigationRef.removeListener("state", this.handleNavigationStateChanged);
  }
};
const nUFChannelsManager = new NUFChannelsManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/NUFChannelsManager.tsx");

export default nUFChannelsManager;
