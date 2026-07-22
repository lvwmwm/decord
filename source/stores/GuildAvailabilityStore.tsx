// Module ID: 4465
// Function ID: 39452
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4465 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen(unavailableGuilds) {
  const set = new Set(unavailableGuilds.unavailableGuilds);
  if (unavailableGuilds.unavailableGuilds.length > 0) {
    const _HermesInternal = HermesInternal;
    importDefaultResult.warn("" + unavailableGuilds.unavailableGuilds.length + " guilds are unavailable on connection open: " + unavailableGuilds.unavailableGuilds);
  }
}
function handleGuild(guild) {
  if (set.has(guild.guild.id)) {
    set.delete(guild.guild.id);
    const _HermesInternal = HermesInternal;
    importDefaultResult.info("Guild has become available: " + guild.guild.id);
  } else {
    return false;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("GuildAvailabilityStore");
const set = new Set();
let tmp5 = (Store) => {
  class GuildAvailabilityStore {
    constructor() {
      self = this;
      tmp = GuildAvailabilityStore(this, GuildAvailabilityStore);
      obj = closure_3(GuildAvailabilityStore);
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
  let closure_0 = GuildAvailabilityStore;
  callback2(GuildAvailabilityStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isUnavailable",
    value(arg0) {
      let hasItem = null != arg0;
      if (hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    }
  };
  items[1] = obj;
  obj = {
    key: "totalGuilds",
    get() {
      return guildCount.getGuildCount() + set.size;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "totalUnavailableGuilds",
    get() {
      return set.size;
    }
  };
  items[4] = {
    key: "unavailableGuilds",
    get() {
      return Array.from(closure_7);
    }
  };
  return callback(GuildAvailabilityStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp5.displayName = "GuildAvailabilityStore";
tmp5 = new tmp5(importDefault(dependencyMap[8]), {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_UNAVAILABLE: function handleGuildUnavailable(guildId) {
    if (set.has(guildId.guildId)) {
      return false;
    } else {
      const guild = guild.getGuild(guildId.guildId);
      let str = "???";
      if (tmp4) {
        str = guild.name;
      }
      const _HermesInternal = HermesInternal;
      importDefaultResult.warn("Guild has gone unavailable: " + guildId.guildId + " (" + str + ")");
      set.add(guildId.guildId);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (true !== guild.guild.unavailable) {
      set.delete(guild.guild.id);
    }
  },
  GUILD_CREATE: handleGuild,
  GUILD_UPDATE: handleGuild,
  GUILD_GEO_RESTRICTED: function handleGuildGeoRestrict(guildId) {
    if (set.has(guildId.guildId)) {
      set.delete(guildId.guildId);
    } else {
      return false;
    }
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/GuildAvailabilityStore.tsx");

export default tmp5;
