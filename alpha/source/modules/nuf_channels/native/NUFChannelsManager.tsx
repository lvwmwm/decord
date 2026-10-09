// Module ID: 13511
// Function ID: 13512
// Name: NUFChannelsManager
// Dependencies: [2124, 2086, 4900, 1390, 1085, 4695, 510, 4923, 6804, 4938, 4937, 1403, 5055, 13512, 2000, 2]

// Module 13511 (NUFChannelsManager)
import Storage3 from "Storage" /* 510 */;
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4695 */;
import UserUtils from "UserUtils" /* 4923 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4937 */;
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import UserStore from "UserStore" /* 1390 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let c9 = "2020_02_nuf_channels";
let c10 = "2020_02_nuf_voice_channels";
class NUFChannelsManager extends AutomaticLifecycleManager {
  constructor() {
    let currentUser;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOGOUT() {
        return require.clear();
      }
    };
    applyArgumentsResult.handleNavigationStateChanged = function handleNavigationStateChanged() {
      const obj = NavigationRouteUtils;
      const tmp2 = dependencyMap;
      if ("guilds" === obj.getCurrentNavigationRouteName()) {
        const guildId = SelectedGuildStore.getGuildId();
        const guild = GuildStore.getGuild(guildId);
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
          const hasFlag = FlagUtils.hasFlag;
          FlagUtils;
          if (selfMember != null) {
            num = selfMember.flags;
          }
          if (num == null) {
            num = 0;
          }
          hasItem1 = hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
        }
        if (hasItem1) {
          let num2;
          const hasFlag2 = FlagUtils.hasFlag;
          FlagUtils;
          if (selfMember != null) {
            num2 = selfMember.flags;
          }
          if (num2 == null) {
            num2 = 0;
          }
          hasItem1 = !hasFlag2(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
        }
        if (tmp5) {
          tmp5 = !hasItem1;
        }
        if (tmp5) {
          const Storage = tmp(510).Storage;
          const value = Storage.get(c9);
          let isNewUserResult = !value;
          const tmp14 = c9;
          if (isNewUserResult) {
            const tmpResult4 = UserUtils;
            isNewUserResult = tmpResult4.isNewUser(UserStore.getCurrentUser());
          }
          if (isNewUserResult) {
            const obj3 = ActionSheetActionCreatorsDefault;
            obj3.openLazy(asyncRequire(13512, tmp2.paths), "NUFChannelsActionSheet");
            const Storage2 = tmp(510).Storage;
            const result = Storage2.set(tmp14, true);
          }
          require.terminate();
        }
      }
    };
    applyArgumentsResult.requiresVoiceChannelsOnboard = function requiresVoiceChannelsOnboard() {
      const Storage = Storage3.Storage;
      const value = Storage.get(closure_1_10);
      let isNewUserResult = !value;
      const tmp = require;
      const tmp2 = dependencyMap;
      if (isNewUserResult) {
        const tmpResult = tmp(tmp2[7]);
        isNewUserResult = tmpResult.isNewUser(currentUser.getCurrentUser());
      }
      return isNewUserResult;
    };
    applyArgumentsResult.handleVoiceChannelsOnboard = function handleVoiceChannelsOnboard() {
      const Storage = Storage3.Storage;
      const result = Storage.set(closure_1_10, true);
    };
    applyArgumentsResult.clear = function clear() {
      const Storage = Storage3.Storage;
      Storage.remove(closure_1_9);
      const Storage2 = Storage3.Storage;
      Storage2.remove(closure_1_10);
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const Storage = Storage3.Storage;
    const value = Storage.get(c9);
    let isNewUserResult = !value;
    if (isNewUserResult) {
      const tmpResult = UserUtils;
      isNewUserResult = tmpResult.isNewUser(UserStore.getCurrentUser());
    }
    if (isNewUserResult) {
      const tmpResult2 = RootNavigationRef;
      const rootNavigationRef = tmpResult2.getRootNavigationRef();
      if (rootNavigationRef != null) {
        const self = this;
        rootNavigationRef.addListener("state", this.handleNavigationStateChanged);
      }
    }
  }
  _terminate() {
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const self = this;
      rootNavigationRef.removeListener("state", this.handleNavigationStateChanged);
    }
  }
}
const prototype = NUFChannelsManager.prototype;
const nUFChannelsManager = new NUFChannelsManager();
let result = size.fileFinishedImporting("modules/nuf_channels/native/NUFChannelsManager.tsx");

export default nUFChannelsManager;
