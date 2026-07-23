// Module ID: 7462
// Function ID: 59932
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 7462 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let c5 = null;
let tmp2 = ((PersistedStore) => {
  class NewUserStore {
    constructor() {
      self = this;
      tmp = NewUserStore(this, NewUserStore);
      obj = outer1_3(NewUserStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(NewUserStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(type) {
      type = undefined;
      if (null != type) {
        type = type.type;
      }
      let tmp2 = null;
      if (null != type) {
        tmp2 = type;
      }
      const outer1_5 = tmp2;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getType",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { type: outer1_5 };
    }
  };
  items[2] = obj;
  return callback(NewUserStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "NewUserStore";
tmp2.persistKey = "nuf";
tmp2 = new tmp2(require("dispatcher"), {
  NUF_NEW_USER: function handleNewUser(newUserType) {
    newUserType = newUserType.newUserType;
    tmp2.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    let c5 = null;
    tmp2.persist();
  }
});
let closure_6 = tmp2;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/nuf/NewUserStore.tsx");

export default tmp2;
