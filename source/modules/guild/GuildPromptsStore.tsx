// Module ID: 11664
// Function ID: 90516
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11664 (_isNativeReflectConstruct)
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
let closure_5 = {};
let tmp2 = (PersistedStore) => {
  class GuildPromptsStore {
    constructor() {
      self = this;
      tmp = GuildPromptsStore(this, GuildPromptsStore);
      obj = closure_3(GuildPromptsStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = GuildPromptsStore;
  callback2(GuildPromptsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(obj) {
      for (const key10004 in arg0) {
        let tmp = key10004;
        let tmp2 = closure_5;
        let _Set = Set;
        let tmp3 = new.target;
        let tmp4 = new.target;
        let set = new Set(arg0[key10004]);
        let tmp6 = set;
        closure_5[key10004] = set;
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
      return closure_5;
    }
  };
  items[2] = obj;
  return callback(GuildPromptsStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "GuildPromptsStore";
tmp2.persistKey = "GuildPromptsStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  GUILD_PROMPT_VIEWED: function handleGuildPromptViewed(arg0) {
    let _prompt;
    let guildId;
    ({ prompt: _prompt, guildId } = arg0);
    if (null == closure_5[guildId]) {
      const _Set = Set;
      const set = new Set();
      closure_5[guildId] = set;
      closure_5[guildId].add(_prompt);
      let flag = true;
      const obj2 = closure_5[guildId];
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
    let flag = null != closure_5[guild.id] && !guild.unavailable;
    if (flag) {
      const id = guild.id;
      delete r2[r1];
      flag = true;
    }
    return flag;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild/GuildPromptsStore.tsx");

export default tmp2;
