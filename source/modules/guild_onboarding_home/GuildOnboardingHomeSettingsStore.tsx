// Module ID: 4333
// Function ID: 38242
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 4333 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import closure_1 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function computeNewMemberActionsWithOnboarding(guildId) {
  let newMemberActions;
  if (null != dependencyMap[guildId]) {
    newMemberActions = tmp.newMemberActions;
  }
  let tmp3 = null;
  if (null != newMemberActions) {
    table[guildId] = newMemberActions;
    tmp3 = table[guildId];
  }
  return tmp3;
}
function handleSettingsLoadSuccess(arg0) {
  let guildId;
  let homeSettings;
  ({ homeSettings, guildId } = arg0);
  if (null != guildId) {
    if (null == homeSettings) {
      closure_7[guildId] = obj;
    }
    closure_7[guildId] = homeSettings;
    computeNewMemberActionsWithOnboarding(guildId);
    set.delete(guildId);
  }
}
let obj = { enabled: false };
let closure_6 = [];
let closure_7 = {};
let set = new Set();
let closure_9 = {};
let tmp3 = ((Store) => {
  class GuildOnboardingHomeSettingsStore {
    constructor() {
      self = this;
      tmp = GuildOnboardingHomeSettingsStore(this, GuildOnboardingHomeSettingsStore);
      obj = outer1_3(GuildOnboardingHomeSettingsStore);
      tmp2 = outer1_2;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildOnboardingHomeSettingsStore, Store);
  let obj = {
    key: "getSettings",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp3 = outer1_7[arg0];
        if (null == tmp3) {
          tmp3 = outer1_5;
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getNewMemberActions",
    value(guildId) {
      const self = this;
      let tmp = null;
      if (null != guildId) {
        const settings = self.getSettings(guildId);
        let newMemberActions;
        if (null != settings) {
          newMemberActions = settings.newMemberActions;
        }
        tmp = null;
        if (null != newMemberActions) {
          if (null == outer1_9[guildId]) {
            let tmp6 = outer1_11(guildId);
          } else {
            tmp6 = outer1_9[guildId];
          }
        }
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActionForChannel",
    value(guildId) {
      let dispatcher = arg1;
      const settings = this.getSettings(guildId);
      let found = null;
      if (null != settings) {
        let newMemberActions = settings.newMemberActions;
        if (null == newMemberActions) {
          newMemberActions = [];
        }
        found = newMemberActions.find((channelId) => channelId.channelId === dispatcher);
      }
      return found;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasMemberAction",
    value(arg0, arg1) {
      return null != this.getActionForChannel(arg0, arg1);
    }
  };
  items[4] = {
    key: "getResourceChannels",
    value(arg0) {
      let resourceChannels;
      if (null != outer1_7[arg0]) {
        resourceChannels = tmp.resourceChannels;
      }
      if (null == resourceChannels) {
        resourceChannels = outer1_6;
      }
      return resourceChannels;
    }
  };
  items[5] = {
    key: "getResourceForChannel",
    value(arg0, arg1) {
      const self = this;
      let dispatcher = arg1;
      if (null == arg0) {
        return null;
      } else {
        const resourceChannels = self.getResourceChannels(arg0);
        let found = null;
        if (resourceChannels !== outer1_6) {
          found = resourceChannels.find((channelId) => channelId.channelId === dispatcher);
        }
        return found;
      }
    }
  };
  items[6] = {
    key: "getIsLoading",
    value(arg0) {
      let hasItem = null != arg0;
      if (hasItem) {
        hasItem = outer1_8.has(arg0);
      }
      return hasItem;
    }
  };
  items[7] = {
    key: "getWelcomeMessage",
    value(arg0) {
      if (null != arg0) {
        let welcomeMessage;
        if (null != outer1_7[arg0]) {
          welcomeMessage = tmp2.welcomeMessage;
        }
        return welcomeMessage;
      }
    }
  };
  items[8] = {
    key: "hasSettings",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = null != outer1_7[arg0];
      }
      return tmp;
    }
  };
  items[9] = {
    key: "getEnabled",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let enabled;
        if (null != outer1_7[arg0]) {
          enabled = tmp3.enabled;
        }
        tmp = null != enabled && enabled;
        const tmp5 = null != enabled && enabled;
      }
      return tmp;
    }
  };
  items[10] = {
    key: "getNewMemberAction",
    value(arg0, arg1) {
      let dispatcher = arg1;
      let tmp = null;
      if (null != arg0) {
        tmp = null;
        if (null != arg1) {
          let found;
          if (null != outer1_7[arg0]) {
            const newMemberActions = tmp3.newMemberActions;
            if (null != newMemberActions) {
              found = newMemberActions.find((channelId) => channelId.channelId === dispatcher);
            }
          }
          let tmp5 = null;
          if (null != found) {
            tmp5 = found;
          }
          tmp = tmp5;
        }
      }
      return tmp;
    }
  };
  return callback(GuildOnboardingHomeSettingsStore, items);
})(require("initialize").Store);
tmp3.displayName = "GuildOnboardingHomeSettingsStore";
obj = {
  GUILD_HOME_SETTINGS_FETCH_START: function handleSettingsFetchStart(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: handleSettingsLoadSuccess,
  GUILD_HOME_SETTINGS_FETCH_FAIL: function handleSettingsFetchFail(guildId) {
    set.delete(guildId.guildId);
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: handleSettingsLoadSuccess,
  GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function handleSettingsToggleEnabled(arg0) {
    if (null == dependencyMap[arg0.guildId]) {
      return false;
    } else {
      tmp2.enabled = tmp;
    }
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function handleResourceChannelUpdate(resourceChannel) {
    resourceChannel = resourceChannel.resourceChannel;
    if (null == dependencyMap[resourceChannel.guildId]) {
      return false;
    } else {
      let resourceChannels = tmp.resourceChannels;
      if (null == resourceChannels) {
        resourceChannels = [];
      }
      tmp.resourceChannels = resourceChannels;
      resourceChannels = tmp.resourceChannels;
      const findIndexResult = resourceChannels.findIndex((channelId) => channelId.channelId === resourceChannel.channelId);
      let flag = -1 !== findIndexResult;
      if (flag) {
        const obj = {};
        const merged = Object.assign(resourceChannel);
        tmp.resourceChannels[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function handleNewMemberActionUpdate(action) {
    action = action.action;
    if (null == dependencyMap[action.guildId]) {
      return false;
    } else {
      let newMemberActions = tmp.newMemberActions;
      if (null == newMemberActions) {
        newMemberActions = [];
      }
      tmp.newMemberActions = newMemberActions;
      newMemberActions = tmp.newMemberActions;
      const findIndexResult = newMemberActions.findIndex((channelId) => channelId.channelId === action.channelId);
      let flag = -1 !== findIndexResult;
      if (flag) {
        const obj = {};
        const merged = Object.assign(action);
        tmp.newMemberActions[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == dependencyMap[guild.id]) {
      return false;
    } else {
      const id = guild.id;
      delete tmp4[tmp3];
      const id2 = guild.id;
      delete tmp2[tmp];
    }
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx");

export default tmp3;
export const NO_SETTINGS = obj;
