// Module ID: 13027
// Function ID: 100752
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 5736, 566, 686, 2]

// Module 13027 (_isNativeReflectConstruct)
import _startLurking from "_startLurking";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_8 = { UNSET: "unset", FETCHING: "fetching", FAILED: "failed", SUCCEEDED: "succeeded" };
let closure_9 = { guilds: {} };
let tmp2 = ((Store) => {
  class GuildPopoutStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildPopoutStore);
      obj = outer1_5(GuildPopoutStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(GuildPopoutStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isFetchingGuild",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp.fetchState === outer1_8.FETCHING;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuild",
    value(arg0) {
      let guild = null;
      if (null != outer1_9.guilds[arg0]) {
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
        tmp2 = tmp.fetchState === outer1_8.FAILED;
      }
      return tmp2;
    }
  };
  return callback(GuildPopoutStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildPopoutStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_POPOUT_FETCH_START: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(closure_9.guilds[guildId]);
    obj["fetchState"] = constants.FETCHING;
    closure_9.guilds[guildId] = obj;
  },
  GUILD_POPOUT_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = require(5736) /* _startLurking */;
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_profile/GuildPopoutStore.tsx");

export default tmp2;
