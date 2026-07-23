// Module ID: 11682
// Function ID: 90613
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 11682 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = {};
let tmp2 = ((PersistedStore) => {
  class GuildPromptsStore {
    constructor() {
      self = this;
      tmp = GuildPromptsStore(this, GuildPromptsStore);
      obj = outer1_3(GuildPromptsStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(GuildPromptsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(obj) {
      for (const key10004 in arg0) {
        let tmp = key10004;
        let tmp2 = outer1_5;
        let _Set = Set;
        let tmp3 = new.target;
        let tmp4 = new.target;
        let set = new Set(arg0[key10004]);
        let tmp6 = set;
        outer1_5[key10004] = set;
        continue;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "hasViewedPrompt",
    value(arg0, arg1) {
      let hasItem = null != obj;
      if (hasItem) {
        hasItem = obj.has(arg0);
      }
      return hasItem;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return outer1_5;
    }
  };
  items[2] = obj;
  return callback(GuildPromptsStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "GuildPromptsStore";
tmp2.persistKey = "GuildPromptsStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_PROMPT_VIEWED: function handleGuildPromptViewed(arg0) {
    let _prompt;
    let guildId;
    ({ prompt: _prompt, guildId } = arg0);
    if (null == dependencyMap[guildId]) {
      const _Set = Set;
      const set = new Set();
      dependencyMap[guildId] = set;
      dependencyMap[guildId].add(_prompt);
      let flag = true;
      const obj2 = dependencyMap[guildId];
    } else {
      flag = !obj.has(_prompt);
      if (flag) {
        obj.add(_prompt);
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    let flag = null != dependencyMap[guild.id] && !guild.unavailable;
    if (flag) {
      const id = guild.id;
      delete tmp2[tmp];
      flag = true;
    }
    return flag;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild/GuildPromptsStore.tsx");

export default tmp2;
