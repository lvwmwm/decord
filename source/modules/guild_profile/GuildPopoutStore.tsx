// Module ID: 12861
// Function ID: 98273
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12861 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = { UNSET: "unset", FETCHING: "fetching", FAILED: "failed", SUCCEEDED: "succeeded" };
let closure_9 = { guilds: {} };
let tmp2 = (Store) => {
  class GuildPopoutStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildPopoutStore);
      obj = closure_5(GuildPopoutStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildPopoutStore;
  callback2(GuildPopoutStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isFetchingGuild",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp.fetchState === constants.FETCHING;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuild",
    value(arg0) {
      let guild = null;
      if (null != closure_9.guilds[arg0]) {
        guild = tmp.guild;
      }
      return guild;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasFetchFailed",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp.fetchState === constants.FAILED;
      }
      return tmp2;
    }
  };
  return callback(GuildPopoutStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "GuildPopoutStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  GUILD_POPOUT_FETCH_START: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(closure_9.guilds[guildId]);
    obj["fetchState"] = constants.FETCHING;
    closure_9.guilds[guildId] = obj;
  },
  GUILD_POPOUT_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = arg1(dependencyMap[6]);
    obj = {};
    const discoverableGuild = obj.makeDiscoverableGuild(guildId.guild);
    const merged = Object.assign(closure_9.guilds[guildId]);
    obj["guild"] = discoverableGuild;
    obj["fetchState"] = constants.SUCCEEDED;
    closure_9.guilds[guildId] = obj;
  },
  GUILD_POPOUT_FETCH_FAILURE: function handleFetchFailure(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(closure_9.guilds[guildId]);
    obj["fetchState"] = constants.FAILED;
    closure_9.guilds[guildId] = obj;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_profile/GuildPopoutStore.tsx");

export default tmp2;
