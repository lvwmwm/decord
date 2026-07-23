// Module ID: 6721
// Function ID: 52237
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 1316, 1194, 3, 1898, 1882, 22, 2]

// Module 6721 (_createForOfIteratorHelperLoose)
import timestamp from "timestamp";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
importDefaultResult = new importDefaultResult("UserSettingsProto");
let tmp4 = (() => {
  class UserSettingsProto {
    constructor() {
      self = this;
      tmp = outer1_3(this, UserSettingsProto);
      this.actions = {
        CONNECTION_OPEN() {
              return self.throttledOnChange();
            },
        USER_SETTINGS_PROTO_UPDATE() {
              return self.throttledOnChange();
            },
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE() {
              return self.throttledOnChange();
            },
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO() {
              return self.throttledOnChange();
            }
      };
      this.handleUserSettingsProtoChange = () => {
        const id = outer2_6.getId();
        const databaseResult = _self(UserSettingsProto[6]).database(id);
        if (null != databaseResult) {
          databaseResult.transaction((arg0) => {
            const state = outer3_5.computeState();
            let obj = callback(UserSettingsProto[7]);
            const result = obj.userSettingsTransaction(arg0);
            for (const key10015 in state) {
              let tmp4 = key10015;
              obj = {};
              let _Number = Number;
              obj.id = Number(key10015);
              obj.value = state[key10015];
              let putResult = result.put(obj);
              continue;
            }
            const versions = outer3_5.settings.versions;
            let dataVersion;
            if (null != versions) {
              dataVersion = versions.dataVersion;
            }
            let num = -1;
            if (null != dataVersion) {
              num = dataVersion;
            }
            const result1 = callback(UserSettingsProto[7]).nonGuildVersionsTransaction(arg0);
            obj = { id: "user_settings_version", version: num };
            result1.put(obj);
          }, "handleUserSettingsProtoChange");
        }
      };
      obj = f52249(UserSettingsProto[8]);
      this.throttledOnChange = obj.debounce(this.handleUserSettingsProtoChange, 0);
      return;
    }
  }
  let obj = { key: "getAll" };
  let closure_0 = callback(async (arg0) => {
    let done;
    let obj = callback(UserSettingsProto[7]);
    const nowResult = performance.now();
    const arr = yield obj.userSettings(arg0).getMany();
    outer2_7.verbose("loaded in " + performance.now() - nowResult + "ms (settings: " + arr.length + ")");
    obj = {};
    const tmp3 = outer2_8(arr);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let iter2 = iter.value;
        obj[iter2.id] = iter2.value;
        let iter3 = tmp3();
        iter = iter3;
        done = iter3.done;
      } while (!done);
    }
    return obj;
  });
  obj.value = function getAll() {
    return callback(...arguments);
  };
  const items = [obj, ];
  obj = {
    key: "resetInMemoryState",
    value() {

    }
  };
  items[1] = obj;
  return callback2(UserSettingsProto, items);
})();
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/UserSettingsProto.tsx");

export default tmp4;
