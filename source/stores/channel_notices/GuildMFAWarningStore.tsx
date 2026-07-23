// Module ID: 12683
// Function ID: 98859
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1907, 1849, 653, 566, 686, 2]

// Module 12683 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { MFALevels } from "ME";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function handleUserStoreUpdates() {
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.mfaEnabled !== mfaEnabled) {
      mfaEnabled = currentUser.mfaEnabled;
    }
  }
  return false;
}
let c8 = null;
let tmp2 = ((Store) => {
  class GuildMFAWarningStore {
    constructor() {
      self = this;
      tmp = GuildMFAWarningStore(this, GuildMFAWarningStore);
      obj = outer1_3(GuildMFAWarningStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
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
  callback2(GuildMFAWarningStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_6, outer1_5);
      const items = [outer1_6, outer1_5];
      this.syncWith(items, outer1_10);
    }
  };
  let items = [obj, ];
  obj = {
    key: "isVisible",
    value(mfaLevel) {
      let result = null != mfaLevel;
      if (result) {
        result = mfaLevel.mfaLevel === outer1_7.ELEVATED;
      }
      if (result) {
        result = false === outer1_8;
      }
      if (result) {
        result = outer1_5.hasElevatedPermissions(mfaLevel.id);
      }
      return result;
    }
  };
  items[1] = obj;
  return callback(GuildMFAWarningStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildMFAWarningStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: handleUserStoreUpdates,
  GUILD_UPDATE: function handleGuildPermissionsUpdate() {
    return true;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/channel_notices/GuildMFAWarningStore.tsx");

export default tmp2;
