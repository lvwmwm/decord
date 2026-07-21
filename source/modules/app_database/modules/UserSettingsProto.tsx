// Module ID: 6716
// Function ID: 52186
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6716 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("UserSettingsProto");
let tmp4 = () => {
  class UserSettingsProto {
    constructor() {
      f52198 = this;
      tmp = closure_3(this, UserSettingsProto);
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
        const id = id.getId();
        const databaseResult = self(closure_1[6]).database(id);
        if (null != databaseResult) {
          databaseResult.transaction((arg0) => {
            const state = closure_5.computeState();
            let obj = callback(closure_1[7]);
            const result = obj.userSettingsTransaction(arg0);
            for (const key10015 in state) {
              let tmp4 = key10015;
              obj = {};
              let _Number = Number;
              obj.id = Number(key10015);
              obj.value = state[key10015];
              let putResult = result.put(obj);
            }
            const versions = closure_5.settings.versions;
            let dataVersion;
            if (null != versions) {
              dataVersion = versions.dataVersion;
            }
            let num = -1;
            if (null != dataVersion) {
              num = dataVersion;
            }
            const result1 = callback(closure_1[7]).nonGuildVersionsTransaction(arg0);
            obj = { id: "user_settings_version", version: num };
            result1.put(obj);
          }, "handleUserSettingsProtoChange");
        }
      };
      obj = f52198(UserSettingsProto[8]);
      this.throttledOnChange = obj.debounce(this.handleUserSettingsProtoChange, 0);
      return;
    }
  }
  const dependencyMap = UserSettingsProto;
  let obj = { key: "getAll" };
  let closure_0 = callback(async (arg0) => {
    let done;
    let obj = callback(closure_1[7]);
    const nowResult = performance.now();
    const arr = yield obj.userSettings(arg0).getMany();
    closure_7.verbose("loaded in " + performance.now() - nowResult + "ms (settings: " + arr.length + ")");
    obj = {};
    const tmp3 = callback2(arr);
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
}();
tmp4 = new tmp4();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_database/modules/UserSettingsProto.tsx");

export default tmp4;
