// Module ID: 4334
// Function ID: 38272
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 4334 (_isNativeReflectConstruct)
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
let obj = {};
let closure_6 = {};
let set = new Set();
let tmp3 = ((Store) => {
  class GuildOnboardingMemberActionStore {
    constructor() {
      self = this;
      tmp = GuildOnboardingMemberActionStore(this, GuildOnboardingMemberActionStore);
      obj = outer1_3(GuildOnboardingMemberActionStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
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
  callback2(GuildOnboardingMemberActionStore, Store);
  let obj = {
    key: "getCompletedActions",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = outer1_6[arg0];
      }
      return tmp;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "hasCompletedActionForChannel",
    value(arg0, arg1) {
      const completedActions = this.getCompletedActions(arg0);
      let tmp2 = null != completedActions;
      if (tmp2) {
        tmp2 = null != completedActions[arg1];
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value(arg0) {
      if (null == arg0) {
        let obj = {};
      } else {
        obj = { completedActions: outer1_6[arg0], loading: outer1_7.has(arg0) };
      }
      return obj;
    }
  };
  items[2] = obj;
  return callback(GuildOnboardingMemberActionStore, items);
})(require("initialize").Store);
tmp3.displayName = "GuildOnboardingMemberActionStore";
obj = {
  GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function handleMemberActionsFetchStart(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function handleMemberActionsFetchSuccess(arg0) {
    let guildId;
    let memberActions;
    ({ memberActions, guildId } = arg0);
    if (null != memberActions) {
      closure_6[guildId] = memberActions;
      set.delete(guildId);
    } else {
      closure_6[guildId] = obj;
    }
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function handleMemberActionsFetchFail(guildId) {
    set.delete(guildId.guildId);
  },
  GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function handleNewMemberActionsDelete(arg0) {
    if (null == dependencyMap[arg0.guildId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  COMPLETE_NEW_MEMBER_ACTION: function handleCompleteNewMemberAction(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj[guildId]);
    obj[guildId.channelId] = true;
    obj[guildId] = obj;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == dependencyMap[guild.id]) {
      return false;
    } else {
      const id = guild.id;
      delete tmp2[tmp];
    }
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingMemberActionStore.tsx");

export default tmp3;
export const NO_ACTIONS = obj;
