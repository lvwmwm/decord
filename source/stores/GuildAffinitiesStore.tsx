// Module ID: 8316
// Function ID: 65814
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1838, 8317, 566, 686, 2]

// Module 8316 (_isNativeReflectConstruct)
import fetchGuildAffinities from "fetchGuildAffinities";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
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
let closure_8 = {};
setDefaultState();
let tmp3 = ((PersistedStore) => {
  class GuildAffinitiesStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildAffinitiesStore);
      obj = outer1_5(GuildAffinitiesStore);
      tmp2 = outer1_4;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildAffinitiesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        const outer1_8 = arg0;
      }
      self.waitFor(outer1_7);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildAffinity",
    value(arg0) {
      return outer1_8.guildAffinitiesByGuildId[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "affinities",
    get() {
      return outer1_8.guildAffinities;
    }
  };
  items[4] = {
    key: "hasRequestResolved",
    get() {
      return 0 !== outer1_8.lastFetched;
    }
  };
  return callback(GuildAffinitiesStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "GuildAffinitiesStore";
tmp3.persistKey = "GuildAffinitiesStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (Date.now() - lastFetched.lastFetched > 86400000) {
      const guildAffinities = require(8317) /* fetchGuildAffinities */.fetchGuildAffinities();
      const obj = require(8317) /* fetchGuildAffinities */;
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
      outer1_8.guildAffinitiesByGuildId[guild_id] = obj;
      const guildAffinities = outer1_8.guildAffinities;
      guildAffinities.push(obj);
    });
  },
  LOGOUT: function handleLogout() {
    setDefaultState();
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GuildAffinitiesStore.tsx");

export default tmp3;
