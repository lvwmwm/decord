// Module ID: 4330
// Function ID: 38223
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4330 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let obj = {};
let closure_6 = {};
const set = new Set();
let tmp3 = (Store) => {
  class GuildOnboardingMemberActionStore {
    constructor() {
      self = this;
      tmp = GuildOnboardingMemberActionStore(this, GuildOnboardingMemberActionStore);
      obj = closure_3(GuildOnboardingMemberActionStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GuildOnboardingMemberActionStore;
  callback2(GuildOnboardingMemberActionStore, Store);
  let obj = {
    key: "getCompletedActions",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = closure_6[arg0];
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
        obj = { completedActions: closure_6[arg0], loading: set.has(arg0) };
      }
      return obj;
    }
  };
  items[2] = obj;
  return callback(GuildOnboardingMemberActionStore, items);
}(importDefault(dependencyMap[5]).Store);
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
    if (null == closure_6[arg0.guildId]) {
      return false;
    } else {
      delete r0[r1];
    }
  },
  COMPLETE_NEW_MEMBER_ACTION: function handleCompleteNewMemberAction(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const merged = Object.assign(closure_6);
    obj = {};
    const merged1 = Object.assign(closure_6[guildId]);
    obj[guildId.channelId] = true;
    obj[guildId] = obj;
    closure_6 = obj;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == closure_6[guild.id]) {
      return false;
    } else {
      const id = guild.id;
      delete r1[r0];
    }
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingMemberActionStore.tsx");

export default tmp3;
export const NO_ACTIONS = obj;
