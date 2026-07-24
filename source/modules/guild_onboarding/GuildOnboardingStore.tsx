// Module ID: 5054
// Function ID: 43744
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 566, 686, 2]

// Module 5054 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import ME from "ME";

let closure_5;
let closure_6;
function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
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
({ ME: closure_5, FAVORITES: closure_6 } = ME);
let obj = { STARTED: "started", READY: "ready", COMPLETED: "completed", NOT_APPLICABLE: "not_applicable" };
let closure_8 = {};
let closure_9 = {};
let tmp3 = ((Store) => {
  class GuildOnboardingStore {
    constructor() {
      self = this;
      tmp = GuildOnboardingStore(this, GuildOnboardingStore);
      obj = outer1_3(GuildOnboardingStore);
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
  callback2(GuildOnboardingStore, Store);
  let obj = {
    key: "shouldShowOnboarding",
    value(arg0) {
      let tmp = arg0 !== outer1_5;
      if (tmp) {
        tmp = arg0 !== outer1_6;
      }
      if (tmp) {
        tmp = outer1_11(outer1_8[arg0]);
      }
      return tmp;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getOnboardingStatus",
    value(arg0) {
      return outer1_8[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "resetOnboardingStatus",
    value(arg0) {
      outer1_8[arg0] = outer1_7.STARTED;
      outer1_9[arg0] = "cover";
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCurrentOnboardingStep",
    value(arg0) {
      let str = "cover";
      if (null != outer1_9[arg0]) {
        str = tmp;
      }
      return str;
    }
  };
  return callback(GuildOnboardingStore, items);
})(require("initialize").Store);
tmp3.displayName = "GuildOnboardingStore";
obj = {
  LOGOUT: function handleReset() {
    let closure_8 = {};
    let closure_9 = {};
  },
  GUILD_DELETE: function handleDelete(guild) {
    guild = guild.guild;
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  GUILD_ONBOARDING_START: function handleOnboardingStart(guildId) {
    closure_8[guildId.guildId] = obj.STARTED;
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function handlePromptsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    if (table[guildId] !== obj.STARTED) {
      return false;
    } else {
      table[guildId] = tmp ? obj.READY : obj.NOT_APPLICABLE;
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
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingStore.tsx");

export default tmp3;
export const GuildOnboardingStatus = obj;
export { isOnboarding };
