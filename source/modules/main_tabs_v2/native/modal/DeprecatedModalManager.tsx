// Module ID: 16076
// Function ID: 123485
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16076 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function handlePushedModal(key) {
  let obj = arg1(dependencyMap[11]);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    obj = { name: "modal", key: key.key };
    obj = { modal: key };
    obj.params = obj;
    rootNavigationRef.navigate(obj);
  }
}
function handlePoppedModal() {
  arg1(dependencyMap[12]).popModal();
}
function pushFirstOpenModal(arg0, arg1) {
  let value;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    while (true) {
      value = iter.value;
      let isOpenResult;
      if (null != value) {
        if (null != value.isOpen) {
          let tmp3 = APP;
          isOpenResult = value.isOpen(APP, arg1);
        }
      }
      if (null == isOpenResult) {
        break;
      } else if (isOpenResult) {
        break;
      } else {
        let iter2 = tmp();
        iter = iter2;
      }
    }
    const store = value.store;
    let getProps;
    const component = value.getComponent();
    if (null != store) {
      getProps = store.getProps;
    }
    if ("function" === typeof getProps) {
      const store2 = value.store;
      let props = store2.getProps();
    } else {
      props = {};
    }
    const obj = { key: value.key };
    handlePushedModal(importDefault(dependencyMap[13])(component, obj, props));
  }
}
function createPushModalHandler(arg0) {
  let closure_0 = [...arguments];
  return () => {
    callback(closure_0);
  };
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const importDefaultResult = importDefault(dependencyMap[9]);
const tmp3 = arg1(dependencyMap[10]);
const UserRequiredActions = tmp3.UserRequiredActions;
const APP = tmp3.AppContext.APP;
const obj = {
  "Bool(false)": "SET_AUDIO_DEVICE_BY_ID",
  "Bool(false)": "invalidColor",
  "Bool(false)": "mi",
  "Bool(false)": "isArrayBuffer",
  store: importDefaultResult,
  isOpen(arg0, action) {
    if (null == action) {
      action = importDefaultResult.getAction();
    }
    let obj = importDefault(dependencyMap[14]);
    let result = obj.isFullScreenVerification(action);
    if (result) {
      result = null != token.getToken();
    }
    if (result) {
      obj = { location: "modal-manager-verification" };
      result = !action(dependencyMap[15]).isEligibleForSafetyFlowsExperiment(obj);
      const obj2 = action(dependencyMap[15]);
    }
    return result;
  },
  getComponent() {
    return arg1(dependencyMap[16]).default;
  }
};
let closure_16 = {
  store: importDefaultResult,
  isOpen(arg0, arg1) {
    let action = arg1;
    if (null == arg1) {
      action = importDefaultResult.getAction();
    }
    return action === UserRequiredActions.AGREEMENTS;
  },
  getComponent() {
    return arg1(dependencyMap[17]).default;
  }
};
let tmp4 = (arg0) => {
  class DeprecatedModalManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, DeprecatedModalManager);
      items1 = [...items];
      obj = closure_6(DeprecatedModalManager);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = {
        CONNECTION_OPEN_SUPPLEMENTAL: closure_23(closure_16, closure_15),
        EMAIL_VERIFICATION_MODAL_OPEN: closure_23(closure_15),
        USER_REQUIRED_ACTION_UPDATE(requiredAction) {
              if (null == requiredAction.requiredAction) {
                if (obj.isModalOpen("USER_REQUIRED_ACTION_UPDATE")) {
                  callback(closure_2[12]).popModal("USER_REQUIRED_ACTION_UPDATE");
                  const obj2 = callback(closure_2[12]);
                }
                const obj = callback(closure_2[12]);
                if (obj3.isModalOpen("EMAIL_VERIFICATION_MODAL_OPEN")) {
                  callback(closure_2[12]).popModal("EMAIL_VERIFICATION_MODAL_OPEN");
                  const obj4 = callback(closure_2[12]);
                }
                const obj3 = callback(closure_2[12]);
              } else {
                const items = [closure_16, closure_15];
                callback2(items, requiredAction.requiredAction);
              }
            },
        GUILD_SETTINGS_OPEN: closure_23(obj1),
        NOTIFICATION_SETTINGS_MODAL_OPEN: closure_23(obj2),
        CREATE_INVITE_MODAL_OPEN: closure_23(obj3),
        GUILD_SETTINGS_CLOSE: closure_21,
        NOTIFICATION_SETTINGS_MODAL_CLOSE: closure_21,
        PREMIUM_PAYMENT_MODAL_CLOSE: closure_21,
        EMAIL_VERIFICATION_MODAL_CLOSE: closure_21,
        CREATE_INVITE_MODAL_CLOSE: closure_21,
        QUICKSWITCHER_HIDE: closure_21,
        IFE_EXPERIMENT_SEARCH_MODAL_CLOSE: closure_21
      };
      obj1 = {
        store: closure_8,
        getComponent() {
              return callback(closure_2[18]).default;
            }
      };
      obj2 = { second_place: "png", flexGrow: true, paddingLeft: "/assets/modules/guild_role_subscriptions/native/images" };
      obj2.store = closure_11;
      obj2.getComponent = function getComponent() {
        return callback(closure_2[19]).default;
      };
      obj3 = { second_place: null, flexGrow: null, paddingLeft: null };
      obj3.store = closure_10;
      obj3.getComponent = function getComponent() {
        return callback(closure_2[20]).default;
      };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = DeprecatedModalManager;
  callback2(DeprecatedModalManager, arg0);
  return callback(DeprecatedModalManager);
}(importDefault(dependencyMap[21]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx");

export default tmp4;
