// Module ID: 9150
// Function ID: 71725
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]
// Exports: setInitialVerification

// Module 9150 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const map = new Map();
let tmp3 = ((Store) => {
  class InitialMemberVerificationStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, InitialMemberVerificationStore);
      obj = outer1_5(InitialMemberVerificationStore);
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
  callback2(InitialMemberVerificationStore, Store);
  const items = [
    {
      key: "getInitialVerificationState",
      value(arg0) {
        let tmp = null;
        if (null != arg0) {
          const value = outer1_7.get(arg0);
          let tmp4 = null;
          if (null != value) {
            tmp4 = value;
          }
          tmp = tmp4;
        }
        return tmp;
      }
    }
  ];
  return callback(InitialMemberVerificationStore, items);
})(require("initialize").Store);
tmp3.displayName = "InitialMemberVerificationStore";
tmp3 = new tmp3(require("dispatcher"), {
  SET_INITIAL_MEMBER_VERIFICATION: function handleSetInitialState(guildId) {
    guildId = guildId.guildId;
    if (!map.has(guildId)) {
      const result = map.set(guildId, guildId.state);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_member_verification/native/InitialMemberVerificationStore.tsx");

export default tmp3;
export const setInitialVerification = function setInitialVerification(guildId, state) {
  let obj = importDefault(686);
  obj = { type: "SET_INITIAL_MEMBER_VERIFICATION", guildId, state };
  obj.dispatch(obj);
};
