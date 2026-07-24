// Module ID: 4469
// Function ID: 39485
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1838, 3, 566, 686, 2]

// Module 4469 (_isNativeReflectConstruct)
import timestamp from "timestamp";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "_getPrototypeOf";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let timestamp = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return timestamp;
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
importDefaultResult = new importDefaultResult("GuildAvailabilityStore");
let set = new Set();
let tmp5 = ((Store) => {
  class GuildAvailabilityStore {
    constructor() {
      self = this;
      tmp = GuildAvailabilityStore(this, GuildAvailabilityStore);
      obj = outer1_3(GuildAvailabilityStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
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
  callback2(GuildAvailabilityStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isUnavailable",
    value(arg0) {
      let hasItem = null != arg0;
      if (hasItem) {
        hasItem = outer1_7.has(arg0);
      }
      return hasItem;
    }
  };
  items[1] = obj;
  obj = {
    key: "totalGuilds",
    get() {
      return outer1_5.getGuildCount() + outer1_7.size;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "totalUnavailableGuilds",
    get() {
      return outer1_7.size;
    }
  };
  items[4] = {
    key: "unavailableGuilds",
    get() {
      return Array.from(outer1_7);
    }
  };
  return callback(GuildAvailabilityStore, items);
})(require("initialize").Store);
tmp5.displayName = "GuildAvailabilityStore";
tmp5 = new tmp5(require("dispatcher"), {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_UNAVAILABLE: function handleGuildUnavailable(guildId) {
    if (set.has(guildId.guildId)) {
      return false;
    } else {
      guild = guild.getGuild(guildId.guildId);
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
let result = set.fileFinishedImporting("stores/GuildAvailabilityStore.tsx");

export default tmp5;
