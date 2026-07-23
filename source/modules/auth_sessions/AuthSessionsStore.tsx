// Module ID: 13639
// Function ID: 104752
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 13639 (_isNativeReflectConstruct)
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
function _createForOfIteratorHelperLoose(iterable) {
  let dispatcher = iterable;
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
      dispatcher = tmp;
    }
    let c1 = 0;
    return () => {
      if (set >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        set = tmp3 + 1;
        obj.value = length[+set];
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
let closure_5 = [];
let tmp2 = ((Store) => {
  class AuthSessionsStore {
    constructor() {
      self = this;
      tmp = AuthSessionsStore(this, AuthSessionsStore);
      obj = outer1_3(AuthSessionsStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(AuthSessionsStore, Store);
  const items = [
    {
      key: "getSessions",
      value() {
        return outer1_5;
      }
    }
  ];
  return callback(AuthSessionsStore, items);
})(require("initialize").Store);
tmp2.displayName = "AuthSessionsStore";
tmp2 = new tmp2(require("dispatcher"), {
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
    items = [...items];
    let c1 = false;
    function _loop(value) {
      const items = value;
      const findIndexResult = items.findIndex((id_hash) => id_hash.id_hash === dispatcher);
      if (findIndexResult >= 0) {
        items.splice(findIndexResult, 1);
        let c1 = true;
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
    if (!c1) {
      return false;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/auth_sessions/AuthSessionsStore.tsx");

export default tmp2;
