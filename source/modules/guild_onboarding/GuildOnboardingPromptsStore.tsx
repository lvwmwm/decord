// Module ID: 5058
// Function ID: 43779
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1909, 1348, 5054, 5059, 5060, 22, 664, 21, 566, 686, 2]

// Module 5058 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { GuildOnboardingStatus } from "_isNativeReflectConstruct";
import { GuildOnboardingMode } from "_createForOfIteratorHelperLoose";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function convertPromptsToTracked(prompts, onboardingPromptsSeen, onboardingResponsesSeen) {
  let closure_0 = onboardingPromptsSeen;
  let closure_1 = onboardingResponsesSeen;
  return prompts.map((options) => {
    const items = [];
    let num = 0;
    let flag = false;
    let flag2 = false;
    if (0 < options.options.length) {
      do {
        let tmp3 = options.options[num];
        let tmp4 = null == tmp2[tmp3.id];
        if (tmp4) {
          flag = true;
        }
        let obj = {};
        let tmp5 = obj;
        let tmp6 = tmp3;
        let merged = Object.assign(tmp3);
        obj["isUnseen"] = tmp4;
        let arr = items.push(obj);
        num = num + 1;
        flag2 = flag;
      } while (num < options.options.length);
    }
    obj = {};
    const merged1 = Object.assign(options);
    obj["options"] = items;
    obj["hasNewAnswers"] = flag2;
    obj["isNew"] = null == closure_0[options.id];
    return obj;
  });
}
function handleUpdate(arg0) {
  let guildId;
  let updates;
  ({ guildId, updates } = arg0);
  let prop = updates.onboardingPromptsSeen;
  if (null == prop) {
    let prop1;
    if (null != dependencyMap[guildId]) {
      prop1 = tmp2.onboardingPromptsSeen;
    }
    prop = prop1;
  }
  if (null == prop) {
    prop = {};
  }
  let prop2 = updates.onboardingResponsesSeen;
  if (null == prop2) {
    let prop3;
    if (null != dependencyMap[guildId]) {
      prop3 = tmp5.onboardingResponsesSeen;
    }
    prop2 = prop3;
  }
  if (null == prop2) {
    prop2 = {};
  }
  let prompts = updates.prompts;
  if (null == prompts) {
    let prompts1;
    if (null != dependencyMap[guildId]) {
      prompts1 = tmp9.prompts;
    }
    prompts = prompts1;
  }
  if (null == prompts) {
    prompts = [];
  }
  const obj = {};
  const merged = Object.assign(dependencyMap[guildId]);
  const merged1 = Object.assign(updates);
  obj["prompts"] = convertPromptsToTracked(prompts, prop, prop2);
  dependencyMap[guildId] = obj;
}
function mergePendingResponses(guildId, options) {
  let closure_0 = guildId;
  let closure_1 = options;
  if (null != dependencyMap2[guildId]) {
    let obj = {};
    const _Object = Object;
    const keys = Object.keys(dependencyMap2[guildId]);
    const item = keys.forEach((arg0) => {
      if (!options.includes(arg0)) {
        if (outer1_14[closure_0][arg0]) {
          obj[arg0] = true;
        }
      }
      let hasItem = options.includes(arg0);
      if (hasItem) {
        hasItem = false === outer1_14[closure_0][arg0];
      }
      if (hasItem) {
        obj[arg0] = false;
      }
    });
    dependencyMap2[guildId] = obj;
    const found = options.filter((arg0) => {
      let tmp = null == obj[arg0];
      if (!tmp) {
        tmp = true === obj[arg0];
      }
      return tmp;
    });
    const _Object2 = Object;
    const keys1 = Object.keys(obj);
    const item1 = keys1.forEach((arg0) => {
      let hasItem = true !== obj[arg0];
      if (!hasItem) {
        hasItem = options.includes(arg0);
      }
      if (!hasItem) {
        found.push(arg0);
      }
    });
    obj = {};
    const merged = Object.assign(dependencyMap[guildId]);
    obj["responses"] = found;
    dependencyMap[guildId] = obj;
  }
}
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let c16 = false;
let closure_17 = [];
let closure_18 = [];
let closure_19 = [];
let closure_20 = [];
let tmp2 = ((Store) => {
  class GuildOnboardingPromptsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildOnboardingPromptsStore);
      obj = outer1_6(GuildOnboardingPromptsStore);
      tmp2 = outer1_5;
      if (outer1_21()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildOnboardingPromptsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_8);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getOnboardingPromptsForOnboarding",
    value(arg0) {
      let onboardingPrompts;
      if (null != outer1_13[arg0]) {
        onboardingPrompts = tmp.onboardingPrompts;
      }
      if (null == onboardingPrompts) {
        onboardingPrompts = outer1_17;
      }
      return onboardingPrompts;
    }
  };
  items[1] = obj;
  obj = {
    key: "getOnboardingPrompts",
    value(arg0) {
      let prompts;
      if (null != outer1_13[arg0]) {
        prompts = tmp.prompts;
      }
      if (null == prompts) {
        prompts = outer1_17;
      }
      return prompts;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getOnboardingResponses",
    value(arg0) {
      if (outer1_8.isFullServerPreview(arg0)) {
        let onboardingResponses = outer1_8.getOnboardingResponses(arg0);
        if (null == onboardingResponses) {
          onboardingResponses = outer1_18;
        }
        let responses = Array.from(onboardingResponses);
      } else {
        responses = undefined;
        if (null != outer1_13[arg0]) {
          responses = tmp2.responses;
        }
        if (null == responses) {
          responses = outer1_18;
        }
      }
      return responses;
    }
  };
  items[4] = {
    key: "getSelectedOptions",
    value(arg0) {
      const onboardingResponses = this.getOnboardingResponses(arg0);
      const onboardingPrompts = this.getOnboardingPrompts(arg0);
      const mapped = onboardingPrompts.map((options) => options.options);
      return mapped.flat().filter((id) => closure_0.includes(id.id));
    }
  };
  items[5] = {
    key: "getOnboardingResponsesForPrompt",
    value(arg0, arg1) {
      const self = this;
      let closure_0 = arg1;
      if (null == outer1_13[arg0]) {
        return outer1_18;
      } else {
        const prompts = tmp.prompts;
        const found = prompts.find((id) => id.id === closure_0);
        if (null == found) {
          let intersectionResult = outer1_18;
        } else {
          const options = found.options;
          const mapped = options.map((id) => id.id);
          intersectionResult = outer1_1(outer1_2[10]).intersection(mapped, self.getOnboardingResponses(arg0));
          const obj = outer1_1(outer1_2[10]);
        }
        return intersectionResult;
      }
    }
  };
  items[6] = {
    key: "getEnabledOnboardingPrompts",
    value(arg0) {
      if (outer1_8.isFullServerPreview(arg0)) {
        let prompts;
        if (null != tmp) {
          prompts = tmp.prompts;
        }
        if (null == prompts) {
          prompts = outer1_17;
        }
        let tmp2 = prompts;
      } else {
        tmp2 = outer1_17;
      }
      return tmp2;
    }
  };
  items[7] = {
    key: "getDefaultChannelIds",
    value(arg0) {
      let defaultChannelIds;
      if (null != outer1_13[arg0]) {
        defaultChannelIds = tmp.defaultChannelIds;
      }
      if (null == defaultChannelIds) {
        defaultChannelIds = outer1_19;
      }
      return defaultChannelIds;
    }
  };
  items[8] = {
    key: "getEnabled",
    value(arg0) {
      if (outer1_8.isFullServerPreview(arg0)) {
        let tmp3 = null != tmp;
      } else {
        let enabled;
        if (null != tmp) {
          enabled = tmp.enabled;
        }
        tmp3 = null != enabled && enabled;
      }
      return tmp3;
    }
  };
  items[9] = {
    key: "getOnboardingPrompt",
    value(arg0) {
      let closure_0 = arg0;
      const values = Object.values(outer1_13);
      const mapped = values.map((prompts) => prompts.prompts);
      return mapped.flat().find((id) => id.id === closure_0);
    }
  };
  items[10] = {
    key: "isLoading",
    value() {
      return outer1_16;
    }
  };
  items[11] = {
    key: "shouldFetchPrompts",
    value(arg0) {
      let HOUR = arg1;
      if (arg1 === undefined) {
        HOUR = outer1_1(outer1_2[11]).Millis.HOUR;
      }
      if (outer1_16) {
        return false;
      } else {
        let tmp7 = null == tmp5;
        if (!tmp7) {
          const _Date = Date;
          tmp7 = Date.now() - tmp5 > HOUR;
        }
        return tmp7;
      }
    }
  };
  items[12] = {
    key: "getPendingResponseOptions",
    value(arg0) {
      return outer1_14[arg0];
    }
  };
  items[13] = {
    key: "ackIdForGuild",
    value(arg0) {
      const enabledOnboardingPrompts = this.getEnabledOnboardingPrompts(arg0);
      let c0 = "0";
      let item = enabledOnboardingPrompts.forEach((options) => {
        options = options.options;
        const item = options.forEach((id) => {
          if (obj.compare(id.id, id) > 0) {
            id = id.id;
          }
        });
        if (obj.compare(options.id, id) > 0) {
          id = options.id;
        }
      });
      return c0;
    }
  };
  items[14] = {
    key: "lastFetchedAt",
    value(arg0) {
      return outer1_15[arg0];
    }
  };
  items[15] = {
    key: "isAdvancedMode",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let mode;
        if (null != outer1_13[arg0]) {
          mode = tmp3.mode;
        }
        tmp = mode === outer1_12.ONBOARDING_ADVANCED;
      }
      return tmp;
    }
  };
  items[16] = {
    key: "getConnections",
    value(arg0) {
      let connections;
      if (null != outer1_13[arg0]) {
        connections = tmp.connections;
      }
      if (null == connections) {
        connections = outer1_20;
      }
      return connections;
    }
  };
  items[17] = {
    key: "getOnboardingConnections",
    value(arg0) {
      if (null == outer1_13[arg0]) {
        return outer1_20;
      } else {
        let prop = tmp.additionalConnections;
        if (null == prop) {
          prop = [];
        }
        if (0 === prop.length) {
          let connections = tmp.connections;
          if (null == connections) {
            connections = outer1_20;
          }
          let items = connections;
        } else {
          connections = tmp.connections;
          if (null == connections) {
            connections = [];
          }
          items = [];
          HermesBuiltin.arraySpread(prop, HermesBuiltin.arraySpread(connections, 0));
        }
        return items;
      }
    }
  };
  return callback(GuildOnboardingPromptsStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildOnboardingPromptsStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c16 = false;
    let closure_13 = {};
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete tmp4[tmp3];
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_START: function handleStart() {
    let c16 = true;
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function handleSuccess(guildId) {
    let additionalConnections;
    let belowRequirements;
    let connections;
    let defaultChannelIds;
    let enabled;
    let mode;
    let onboardingPromptsSeen;
    let onboardingResponsesSeen;
    let prompts;
    let responses;
    guildId = guildId.guildId;
    ({ defaultChannelIds, responses, onboardingPromptsSeen, onboardingResponsesSeen, connections, additionalConnections } = guildId);
    let c16 = false;
    ({ prompts, enabled, mode, belowRequirements } = guildId);
    const tmp = onboardingStatus.getOnboardingStatus(guildId) === GuildOnboardingStatus.READY;
    const arr = convertPromptsToTracked(prompts, onboardingPromptsSeen, onboardingResponsesSeen);
    const obj = { enabled, mode, belowRequirements, prompts: arr, onboardingPrompts: arr.filter((inOnboarding) => inOnboarding.inOnboarding), defaultChannelIds: defaultChannelIds.filter((id) => guildId(outer1_2[9]).canChannelBeDefault(guildId, id)) };
    let items = responses;
    if (tmp) {
      items = [];
    }
    obj.responses = items;
    obj.onboardingPromptsSeen = onboardingPromptsSeen;
    obj.onboardingResponsesSeen = onboardingResponsesSeen;
    if (null == connections) {
      connections = [];
    }
    obj.connections = connections;
    if (null == additionalConnections) {
      additionalConnections = [];
    }
    obj.additionalConnections = additionalConnections;
    closure_13[guildId] = obj;
    if (!tmp) {
      mergePendingResponses(guildId, responses);
    }
    closure_15[guildId] = Date.now();
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function handleFailure() {
    let c16 = false;
  },
  GUILD_ONBOARDING_SELECT_OPTION: function handleOptionSelect(guildId) {
    let optionId;
    let removedOptionIds;
    let selected;
    guildId = guildId.guildId;
    ({ optionId, selected, removedOptionIds } = guildId);
    const tmp = !fullServerPreview.isFullServerPreview(guildId);
    let tmp2 = !tmp;
    if (tmp) {
      let flag = null != dependencyMap[guildId];
      if (flag) {
        let tmp5 = null != removedOptionIds;
        if (tmp5) {
          tmp5 = removedOptionIds.length > 0;
        }
        if (tmp5) {
          let obj = importDefault(22);
          obj.pullAll(dependencyMap[guildId].responses, removedOptionIds);
        }
        if (selected) {
          const responses = dependencyMap[guildId].responses;
          responses.push(optionId);
        } else {
          importDefault(22).pull(dependencyMap[guildId].responses, optionId);
          const obj2 = importDefault(22);
        }
        if (null == dependencyMap2[guildId]) {
          dependencyMap2[guildId] = {};
        }
        dependencyMap2[guildId][optionId] = selected;
        if (null != removedOptionIds) {
          const item = removedOptionIds.forEach((arg0) => {
            outer1_14[guildId][arg0] = false;
            return false;
          });
        }
        obj = {};
        const merged = Object.assign(dependencyMap2[guildId]);
        dependencyMap2[guildId] = obj;
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function handleUpdateResponsesSuccess(options) {
    let guildId;
    let options_seen;
    let prompts_seen;
    ({ guildId, prompts_seen, options_seen } = options);
    mergePendingResponses(guildId, options.options);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const arr = convertPromptsToTracked(tmp2.prompts, prompts_seen, options_seen);
      const obj = {};
      const merged = Object.assign(tmp2);
      obj["prompts"] = arr;
      obj["onboardingPrompts"] = arr.filter((inOnboarding) => inOnboarding.inOnboarding);
      obj["onboardingPromptsSeen"] = prompts_seen;
      obj["onboardingResponsesSeen"] = options_seen;
      dependencyMap[guildId] = obj;
    }
  },
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: handleUpdate,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: handleUpdate,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function handleUpdateDefaultChannels(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(dependencyMap[guildId]);
    obj["defaultChannelIds"] = guildId.channelIds;
    dependencyMap[guildId] = obj;
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function handleUpdateConnections(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(dependencyMap[guildId]);
      obj["connections"] = tmp;
      dependencyMap[guildId] = obj;
    }
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function handleSetMode(mode) {
    if (null != dependencyMap[mode.guildId]) {
      tmp.mode = mode.mode;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsStore.tsx");

export default tmp2;
