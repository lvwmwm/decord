// Module ID: 5328
// Function ID: 45346
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5328 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function convertPromptsToTracked(prompts, onboardingPromptsSeen, onboardingResponsesSeen) {
  const importDefault = onboardingResponsesSeen;
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
    obj["isNew"] = null == arg1[options.id];
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
    if (null != closure_13[guildId]) {
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
    if (null != closure_13[guildId]) {
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
    if (null != closure_13[guildId]) {
      prompts1 = tmp9.prompts;
    }
    prompts = prompts1;
  }
  if (null == prompts) {
    prompts = [];
  }
  const obj = {};
  const merged = Object.assign(closure_13[guildId]);
  const merged1 = Object.assign(updates);
  obj["prompts"] = convertPromptsToTracked(prompts, prop, prop2);
  closure_13[guildId] = obj;
}
function mergePendingResponses(guildId, options) {
  options = guildId;
  const importDefault = options;
  if (null != closure_14[guildId]) {
    let obj = {};
    const dependencyMap = obj;
    const _Object = Object;
    const keys = Object.keys(closure_14[guildId]);
    const item = keys.forEach((arg0) => {
      if (!arg1.includes(arg0)) {
        if (closure_14[closure_0][arg0]) {
          obj[arg0] = true;
        }
      }
      let hasItem = arg1.includes(arg0);
      if (hasItem) {
        hasItem = false === closure_14[closure_0][arg0];
      }
      if (hasItem) {
        obj[arg0] = false;
      }
    });
    closure_14[guildId] = obj;
    const found = options.filter((arg0) => {
      let tmp = null == obj[arg0];
      if (!tmp) {
        tmp = true === obj[arg0];
      }
      return tmp;
    });
    let closure_3 = found;
    const _Object2 = Object;
    const keys1 = Object.keys(obj);
    const item1 = keys1.forEach((arg0) => {
      let hasItem = true !== obj[arg0];
      if (!hasItem) {
        hasItem = arg1.includes(arg0);
      }
      if (!hasItem) {
        found.push(arg0);
      }
    });
    obj = {};
    const merged = Object.assign(closure_13[guildId]);
    obj["responses"] = found;
    closure_13[guildId] = obj;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const GuildOnboardingStatus = arg1(dependencyMap[7]).GuildOnboardingStatus;
const GuildOnboardingMode = arg1(dependencyMap[8]).GuildOnboardingMode;
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let closure_16 = false;
let closure_17 = [];
let closure_18 = [];
let closure_19 = [];
let closure_20 = [];
let tmp2 = (Store) => {
  class GuildOnboardingPromptsStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildOnboardingPromptsStore);
      obj = closure_6(GuildOnboardingPromptsStore);
      tmp2 = closure_5;
      if (closure_21()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildOnboardingPromptsStore;
  callback2(GuildOnboardingPromptsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_8);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getOnboardingPromptsForOnboarding",
    value(arg0) {
      let onboardingPrompts;
      if (null != closure_13[arg0]) {
        onboardingPrompts = tmp.onboardingPrompts;
      }
      if (null == onboardingPrompts) {
        onboardingPrompts = closure_17;
      }
      return onboardingPrompts;
    }
  };
  items[1] = obj;
  obj = {
    key: "getOnboardingPrompts",
    value(arg0) {
      let prompts;
      if (null != closure_13[arg0]) {
        prompts = tmp.prompts;
      }
      if (null == prompts) {
        prompts = closure_17;
      }
      return prompts;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getOnboardingResponses",
    value(arg0) {
      if (closure_8.isFullServerPreview(arg0)) {
        let onboardingResponses = closure_8.getOnboardingResponses(arg0);
        if (null == onboardingResponses) {
          onboardingResponses = closure_18;
        }
        let responses = Array.from(onboardingResponses);
      } else {
        responses = undefined;
        if (null != closure_13[arg0]) {
          responses = tmp2.responses;
        }
        if (null == responses) {
          responses = closure_18;
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
      const GuildOnboardingPromptsStore = arg1;
      if (null == closure_13[arg0]) {
        return closure_18;
      } else {
        const prompts = tmp.prompts;
        const found = prompts.find((id) => id.id === arg1);
        if (null == found) {
          let intersectionResult = closure_18;
        } else {
          const options = found.options;
          const mapped = options.map((id) => id.id);
          intersectionResult = callback(closure_2[10]).intersection(mapped, self.getOnboardingResponses(arg0));
          const obj = callback(closure_2[10]);
        }
        return intersectionResult;
      }
    }
  };
  items[6] = {
    key: "getEnabledOnboardingPrompts",
    value(arg0) {
      if (closure_8.isFullServerPreview(arg0)) {
        let prompts;
        if (null != tmp) {
          prompts = tmp.prompts;
        }
        if (null == prompts) {
          prompts = closure_17;
        }
        let tmp2 = prompts;
      } else {
        tmp2 = closure_17;
      }
      return tmp2;
    }
  };
  items[7] = {
    key: "getDefaultChannelIds",
    value(arg0) {
      let defaultChannelIds;
      if (null != closure_13[arg0]) {
        defaultChannelIds = tmp.defaultChannelIds;
      }
      if (null == defaultChannelIds) {
        defaultChannelIds = closure_19;
      }
      return defaultChannelIds;
    }
  };
  items[8] = {
    key: "getEnabled",
    value(arg0) {
      if (closure_8.isFullServerPreview(arg0)) {
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
      const GuildOnboardingPromptsStore = arg0;
      const values = Object.values(closure_13);
      const mapped = values.map((prompts) => prompts.prompts);
      return mapped.flat().find((id) => id.id === id);
    }
  };
  items[10] = {
    key: "isLoading",
    value() {
      return closure_16;
    }
  };
  items[11] = {
    key: "shouldFetchPrompts",
    value(arg0) {
      let HOUR = arg1;
      if (arg1 === undefined) {
        HOUR = callback(closure_2[11]).Millis.HOUR;
      }
      if (closure_16) {
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
      return closure_14[arg0];
    }
  };
  items[13] = {
    key: "ackIdForGuild",
    value(arg0) {
      const enabledOnboardingPrompts = this.getEnabledOnboardingPrompts(arg0);
      let closure_0 = "0";
      const item = enabledOnboardingPrompts.forEach((options) => {
        options = options.options;
        const item = options.forEach((id) => {
          if (obj.compare(id.id, id) > 0) {
            id = id.id;
          }
        });
        if (obj.compare(options.id, id) > 0) {
          const id = options.id;
        }
      });
      return closure_0;
    }
  };
  items[14] = {
    key: "lastFetchedAt",
    value(arg0) {
      return closure_15[arg0];
    }
  };
  items[15] = {
    key: "isAdvancedMode",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let mode;
        if (null != closure_13[arg0]) {
          mode = tmp3.mode;
        }
        tmp = mode === constants.ONBOARDING_ADVANCED;
      }
      return tmp;
    }
  };
  items[16] = {
    key: "getConnections",
    value(arg0) {
      let connections;
      if (null != closure_13[arg0]) {
        connections = tmp.connections;
      }
      if (null == connections) {
        connections = closure_20;
      }
      return connections;
    }
  };
  items[17] = {
    key: "getOnboardingConnections",
    value(arg0) {
      if (null == closure_13[arg0]) {
        return closure_20;
      } else {
        let prop = tmp.additionalConnections;
        if (null == prop) {
          prop = [];
        }
        if (0 === prop.length) {
          let connections = tmp.connections;
          if (null == connections) {
            connections = closure_20;
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
}(importDefault(dependencyMap[13]).Store);
tmp2.displayName = "GuildOnboardingPromptsStore";
tmp2 = new tmp2(importDefault(dependencyMap[14]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_16 = false;
    let closure_13 = {};
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete r3[r2];
    delete r3[r2];
    delete r1[r0];
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_START: function handleStart() {
    let closure_16 = true;
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
    const arg1 = guildId;
    ({ defaultChannelIds, responses, onboardingPromptsSeen, onboardingResponsesSeen, connections, additionalConnections } = guildId);
    let closure_16 = false;
    ({ prompts, enabled, mode, belowRequirements } = guildId);
    const tmp = onboardingStatus.getOnboardingStatus(guildId) === GuildOnboardingStatus.READY;
    const arr = convertPromptsToTracked(prompts, onboardingPromptsSeen, onboardingResponsesSeen);
    const obj = { enabled, mode, belowRequirements, prompts: arr, onboardingPrompts: arr.filter((inOnboarding) => inOnboarding.inOnboarding), defaultChannelIds: defaultChannelIds.filter((id) => guildId(closure_2[9]).canChannelBeDefault(guildId, id)) };
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
    let closure_16 = false;
  },
  GUILD_ONBOARDING_SELECT_OPTION: function handleOptionSelect(guildId) {
    let optionId;
    let removedOptionIds;
    let selected;
    guildId = guildId.guildId;
    const arg1 = guildId;
    ({ optionId, selected, removedOptionIds } = guildId);
    const tmp = !fullServerPreview.isFullServerPreview(guildId);
    let tmp2 = !tmp;
    if (tmp) {
      let flag = null != closure_13[guildId];
      if (flag) {
        let tmp5 = null != removedOptionIds;
        if (tmp5) {
          tmp5 = removedOptionIds.length > 0;
        }
        if (tmp5) {
          let obj = importDefault(dependencyMap[10]);
          obj.pullAll(closure_13[guildId].responses, removedOptionIds);
        }
        if (selected) {
          const responses = closure_13[guildId].responses;
          responses.push(optionId);
        } else {
          importDefault(dependencyMap[10]).pull(closure_13[guildId].responses, optionId);
          const obj2 = importDefault(dependencyMap[10]);
        }
        if (null == closure_14[guildId]) {
          closure_14[guildId] = {};
        }
        closure_14[guildId][optionId] = selected;
        if (null != removedOptionIds) {
          const item = removedOptionIds.forEach((arg0) => {
            closure_14[closure_0][arg0] = false;
            return false;
          });
        }
        obj = {};
        const merged = Object.assign(closure_14[guildId]);
        closure_14[guildId] = obj;
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
    if (null == closure_13[guildId]) {
      return false;
    } else {
      const arr = convertPromptsToTracked(tmp2.prompts, prompts_seen, options_seen);
      const obj = {};
      const merged = Object.assign(tmp2);
      obj["prompts"] = arr;
      obj["onboardingPrompts"] = arr.filter((inOnboarding) => inOnboarding.inOnboarding);
      obj["onboardingPromptsSeen"] = prompts_seen;
      obj["onboardingResponsesSeen"] = options_seen;
      closure_13[guildId] = obj;
    }
  },
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: handleUpdate,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: handleUpdate,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function handleUpdateDefaultChannels(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(closure_13[guildId]);
    obj["defaultChannelIds"] = guildId.channelIds;
    closure_13[guildId] = obj;
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function handleUpdateConnections(guildId) {
    guildId = guildId.guildId;
    if (null == closure_13[guildId]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(closure_13[guildId]);
      obj["connections"] = tmp;
      closure_13[guildId] = obj;
    }
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function handleSetMode(mode) {
    if (null != closure_13[mode.guildId]) {
      tmp.mode = mode.mode;
    }
  }
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsStore.tsx");

export default tmp2;
