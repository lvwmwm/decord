// Module ID: 13509
// Function ID: 102518
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13509 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
function handleInit() {
  let closure_5 = [];
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = [];
let tmp2 = (Store) => {
  class AuthSessionsStore {
    constructor() {
      self = this;
      tmp = AuthSessionsStore(this, AuthSessionsStore);
      obj = closure_3(AuthSessionsStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = AuthSessionsStore;
  callback2(AuthSessionsStore, Store);
  const items = [
    {
      key: "getSessions",
      value() {
        return closure_5;
      }
    }
  ];
  return callback(AuthSessionsStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "AuthSessionsStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  LOGOUT: handleInit,
  LOGIN_SUCCESS: handleInit,
  FETCH_AUTH_SESSIONS_SUCCESS: function handleFetchAuthSessionsSuccess(sessions) {
    sessions = sessions.sessions;
    let closure_5 = sessions.map((approx_last_used_time) => {
      const obj = {};
      const merged = Object.assign(approx_last_used_time);
      obj["approx_last_used_time"] = new Date(approx_last_used_time.approx_last_used_time);
      return obj;
    });
  },
  LOGOUT_AUTH_SESSIONS_SUCCESS: function handleLogoutAuthSessionsSuccess(sessionIdHashes) {
    let done;
    const items = [...closure_5];
    let closure_0 = items;
    let closure_1 = false;
    function _loop(value) {
      const items = value;
      const findIndexResult = items.findIndex((id_hash) => id_hash.id_hash === id_hash);
      if (findIndexResult >= 0) {
        items.splice(findIndexResult, 1);
        let closure_1 = true;
      }
    }
    const tmp = _createForOfIteratorHelperLoose(sessionIdHashes.sessionIdHashes);
    let iter = tmp();
    if (!iter.done) {
      do {
        let _loopResult = _loop(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (closure_1) {
      let closure_5 = items;
    } else {
      return false;
    }
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/auth_sessions/AuthSessionsStore.tsx");

export default tmp2;
