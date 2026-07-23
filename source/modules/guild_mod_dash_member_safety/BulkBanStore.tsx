// Module ID: 5049
// Function ID: 43699
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 566, 686, 2]

// Module 5049 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let set = new Set();
const set1 = new Set();
let tmp4 = ((Store) => {
  class BulkBanStore {
    constructor() {
      self = this;
      tmp = BulkBanStore(this, BulkBanStore);
      obj = outer1_3(BulkBanStore);
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
  callback2(BulkBanStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "hasPendingBulkBan",
    value(arg0) {
      return outer1_6.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "consumeCompletedBeforeStarted",
    value(arg0, arg1) {
      return outer1_7.delete("" + arg0 + ":" + arg1);
    }
  };
  items[2] = obj;
  return callback(BulkBanStore, items);
})(require("initialize").Store);
tmp4.displayName = "BulkBanStore";
tmp4 = new tmp4(require("dispatcher"), {
  GUILD_BULK_BAN_STARTED: function handleBulkBanStarted(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_BULK_BAN_FAILED: function handleBulkBanFailed(guildId) {
    if (set.has(guildId.guildId)) {
      set.delete(guildId.guildId);
    } else {
      return false;
    }
  },
  GUILD_BULK_BAN_UPDATE: function handleBulkBanUpdate(guildId) {
    if (set.has(guildId.guildId)) {
      set.delete(guildId.guildId);
    } else {
      const _HermesInternal = HermesInternal;
      set1.add("" + guildId.guildId + ":" + id.getId());
      return false;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    set1.clear();
  }
});
let result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkBanStore.tsx");

export default tmp4;
