// Module ID: 15496
// Function ID: 118241
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: claimIncentivizedAccountLinkingReward

// Module 15496 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _claimIncentivizedAccountLinkingReward() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _claimIncentivizedAccountLinkingReward = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
({ AppStates: closure_11, Endpoints: closure_12 } = arg1(dependencyMap[9]));
let closure_13 = 20 * importDefault(dependencyMap[10]).Millis.MINUTE;
let tmp3 = (arg0) => {
  class AccountLinkManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, AccountLinkManager);
      items1 = [...items];
      obj = closure_6(AccountLinkManager);
      tmp2 = closure_5;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      AccountLinkManager = tmp2Result;
      tmp2Result.actions = {
        OAUTH2_TOKEN_CREATE(arg0) {
              return tmp2Result.handleOAuth2TokenCreate(arg0);
            },
        USER_AUTHORIZED_APPS_UPDATE() {
              return tmp2Result.handleAuthorizedAppsUpdate();
            },
        APP_STATE_UPDATE(arg0) {
              return tmp2Result.handleAppStateUpdate(arg0);
            },
        ACCOUNT_LINK_AUTHORIZATION_COMPLETED(arg0) {
              return tmp2Result.handleAccountLinkAuthorizationCompleted(arg0);
            }
      };
      return tmp2Result;
    }
  }
  const arg1 = AccountLinkManager;
  callback2(AccountLinkManager, arg0);
  let obj = {
    key: "evaluatePending",
    value() {
      let iter;
      let tmp4;
      let tmp5;
      const pendingAuthorizations = authStore.getPendingAuthorizations();
      if (0 !== pendingAuthorizations.size) {
        const _Date = Date;
        const timestamp = Date.now();
        const tmp23 = callback3(pendingAuthorizations);
        const iter3 = tmp23();
        let iter2 = iter3;
        if (!iter3.done) {
          do {
            let tmp2 = closure_2;
            let tmp3 = closure_2(iter2.value, 2);
            [tmp4, tmp5] = tmp3;
            let tmp6 = closure_13;
            if (timestamp - tmp5.startedAt > closure_13) {
              let tmp14 = closure_10;
              let result = closure_10.deletePendingAuthorization(tmp4);
              let accountLinkCallbacks = tmp5.accountLinkCallbacks;
              let tmp16 = null == accountLinkCallbacks || null == accountLinkCallbacks.onError;
              let tmp8 = tmp18;
              let tmp9 = accountLinkCallbacks;
              if (!tmp16) {
                let onErrorResult = accountLinkCallbacks.onError("Account link authorization timed out");
                tmp8 = tmp18;
                tmp9 = accountLinkCallbacks;
              }
            } else {
              let tmp7 = closure_9;
              tmp8 = tmp18;
              tmp9 = tmp19;
              if (null != closure_9.getNewestTokenForApplication(tmp4)) {
                let accountLinkCallbacks2 = tmp5.accountLinkCallbacks;
                let tmp10 = null == accountLinkCallbacks2 || null == accountLinkCallbacks2.onSuccess;
                if (!tmp10) {
                  let onSuccessResult = accountLinkCallbacks2.onSuccess();
                }
                let tmp12 = closure_10;
                let result1 = closure_10.deletePendingAuthorization(tmp4);
                tmp8 = accountLinkCallbacks2;
                tmp9 = tmp19;
              }
            }
            iter = tmp23();
            let tmp18 = tmp8;
            let tmp19 = tmp9;
            iter2 = iter;
          } while (!iter.done);
        }
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "handleOAuth2TokenCreate",
    value(application) {
      const self = this;
      const pendingAuthorizations = authStore.getPendingAuthorizations();
      if (pendingAuthorizations.has(application.application.id)) {
        self.evaluatePending();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleAuthorizedAppsUpdate",
    value() {
      this.evaluatePending();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleAccountLinkAuthorizationCompleted",
    value(applicationId) {
      const self = this;
      const pendingAuthorizations = authStore.getPendingAuthorizations();
      if (pendingAuthorizations.has(applicationId.applicationId)) {
        self.evaluatePending();
      }
    }
  };
  items[4] = {
    key: "handleAppStateUpdate",
    value(state) {
      const self = this;
      if (state.state === constants.ACTIVE) {
        self.evaluatePending();
      }
    }
  };
  return callback(AccountLinkManager, items);
}(importDefault(dependencyMap[12]));
tmp3.displayName = "AccountLinkManager";
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/application_account_linking/AccountLinkManager.tsx");

export default tmp3;
export const claimIncentivizedAccountLinkingReward = function claimIncentivizedAccountLinkingReward(arg0) {
  return _claimIncentivizedAccountLinkingReward(...arguments);
};
export const AccountLinkManager = tmp3;
