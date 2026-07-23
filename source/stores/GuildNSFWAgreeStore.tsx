// Module ID: 4346
// Function ID: 38407
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 587, 4345, 566, 686, 2]

// Module 4346 (_isNativeReflectConstruct)
import shouldAgeVerifyForAgeGate from "shouldAgeVerifyForAgeGate";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = {};
let tmp2 = ((Store) => {
  class GuildNSFWAgreeStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildNSFWAgreeStore);
      obj = outer1_5(GuildNSFWAgreeStore);
      tmp2 = outer1_4;
      if (outer1_8()) {
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
  callback2(GuildNSFWAgreeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const Storage = GuildNSFWAgreeStore(outer1_1[5]).Storage;
      let value = Storage.get("GuildNSFWAgreeStore");
      if (null == value) {
        value = outer1_7;
      }
      outer1_7 = value;
    }
  };
  const items = [obj, ];
  obj = {
    key: "didAgree",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let tmp4 = !GuildNSFWAgreeStore(outer1_1[6]).shouldAgeVerifyForAgeGate();
        if (tmp4) {
          tmp4 = outer1_7[arg0] || false;
          const tmp6 = outer1_7[arg0] || false;
        }
        tmp = tmp4;
        const obj = GuildNSFWAgreeStore(outer1_1[6]);
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(GuildNSFWAgreeStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildNSFWAgreeStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_NSFW_AGREE: function handleGuildNSFWAgree(guildId) {
    closure_7[guildId.guildId] = true;
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set("GuildNSFWAgreeStore", closure_7);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GuildNSFWAgreeStore.tsx");

export default tmp2;
