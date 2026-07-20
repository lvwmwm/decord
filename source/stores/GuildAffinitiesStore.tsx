// Module ID: 8304
// Function ID: 65740
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8304 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function setDefaultState() {
  let closure_8 = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = {};
setDefaultState();
let tmp3 = (PersistedStore) => {
  class GuildAffinitiesStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildAffinitiesStore);
      obj = closure_5(GuildAffinitiesStore);
      tmp2 = closure_4;
      if (closure_9()) {
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
  const arg1 = GuildAffinitiesStore;
  callback2(GuildAffinitiesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      self.waitFor(closure_7);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildAffinity",
    value(arg0) {
      return closure_8.guildAffinitiesByGuildId[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "affinities",
    get() {
      return closure_8.guildAffinities;
    }
  };
  items[4] = {
    key: "hasRequestResolved",
    get() {
      return 0 !== closure_8.lastFetched;
    }
  };
  return callback(GuildAffinitiesStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp3.displayName = "GuildAffinitiesStore";
tmp3.persistKey = "GuildAffinitiesStore";
tmp3 = new tmp3(importDefault(dependencyMap[8]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (Date.now() - lastFetched.lastFetched > 86400000) {
      const guildAffinities = arg1(dependencyMap[6]).fetchGuildAffinities();
      const obj = arg1(dependencyMap[6]);
    }
    return false;
  },
  LOAD_GUILD_AFFINITIES_SUCCESS: function handleLoadGuildAffinitiesSuccess(guildAffinities) {
    guildAffinities = guildAffinities.guildAffinities;
    closure_8.guildAffinities = [];
    closure_8.guildAffinitiesByGuildId = {};
    closure_8.lastFetched = Date.now();
    const item = guildAffinities.forEach((guild_id, index) => {
      guild_id = guild_id.guild_id;
      const obj = { score: guild_id.affinity, guildId: guild_id, index };
      closure_8.guildAffinitiesByGuildId[guild_id] = obj;
      const guildAffinities = closure_8.guildAffinities;
      guildAffinities.push(obj);
    });
  },
  LOGOUT: function handleLogout() {
    setDefaultState();
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/GuildAffinitiesStore.tsx");

export default tmp3;
