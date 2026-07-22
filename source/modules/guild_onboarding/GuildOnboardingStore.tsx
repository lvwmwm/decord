// Module ID: 5051
// Function ID: 43721
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5051 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isOnboarding(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [obj.STARTED, obj.READY];
    hasItem = items.includes(arg0);
  }
  return hasItem;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
({ ME: closure_5, FAVORITES: closure_6 } = arg1(dependencyMap[5]));
let obj = { STARTED: "started", READY: "ready", COMPLETED: "completed", NOT_APPLICABLE: "not_applicable" };
let closure_8 = {};
let closure_9 = {};
let tmp3 = (Store) => {
  class GuildOnboardingStore {
    constructor() {
      self = this;
      tmp = GuildOnboardingStore(this, GuildOnboardingStore);
      obj = closure_3(GuildOnboardingStore);
      tmp2 = closure_2;
      if (closure_10()) {
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
  let closure_0 = GuildOnboardingStore;
  callback2(GuildOnboardingStore, Store);
  let obj = {
    key: "shouldShowOnboarding",
    value(arg0) {
      let tmp = arg0 !== closure_5;
      if (tmp) {
        tmp = arg0 !== closure_6;
      }
      if (tmp) {
        tmp = callback3(closure_8[arg0]);
      }
      return tmp;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getOnboardingStatus",
    value(arg0) {
      return closure_8[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "resetOnboardingStatus",
    value(arg0) {
      closure_8[arg0] = constants.STARTED;
      closure_9[arg0] = "cover";
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCurrentOnboardingStep",
    value(arg0) {
      let str = "cover";
      if (null != closure_9[arg0]) {
        str = tmp;
      }
      return str;
    }
  };
  return callback(GuildOnboardingStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp3.displayName = "GuildOnboardingStore";
obj = {
  LOGOUT: function handleReset() {
    let closure_8 = {};
    let closure_9 = {};
  },
  GUILD_DELETE: function handleDelete(guild) {
    guild = guild.guild;
    delete r3[r2];
    delete r1[r0];
  },
  GUILD_ONBOARDING_START: function handleOnboardingStart(guildId) {
    closure_8[guildId.guildId] = obj.STARTED;
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function handlePromptsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    if (closure_8[guildId] !== obj.STARTED) {
      return false;
    } else {
      closure_8[guildId] = tmp ? obj.READY : obj.NOT_APPLICABLE;
    }
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function handlePromptsFetchFailure(guildId) {
    closure_8[guildId.guildId] = obj.NOT_APPLICABLE;
  },
  GUILD_ONBOARDING_COMPLETE: function handleCompleteOnboarding(guildId) {
    closure_8[guildId.guildId] = obj.COMPLETED;
  },
  GUILD_ONBOARDING_SET_STEP: function handleOnboardingStep(guildId) {
    closure_9[guildId.guildId] = guildId.step;
  },
  CONNECTION_OPEN: function handleResetOnboardingStep() {
    let closure_9 = {};
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[7]), obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_onboarding/GuildOnboardingStore.tsx");

export default tmp3;
export const GuildOnboardingStatus = obj;
export { isOnboarding };
