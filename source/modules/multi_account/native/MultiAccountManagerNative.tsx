// Module ID: 15978
// Function ID: 122617
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15978 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const SWITCH_ACCOUNTS_MODAL_KEY = arg1(dependencyMap[5]).SWITCH_ACCOUNTS_MODAL_KEY;
({ ComponentActions: closure_9, Routes: closure_10 } = arg1(dependencyMap[6]));
let importDefaultResult1 = importDefault(dependencyMap[7]);
importDefaultResult1 = new importDefaultResult1("MultiAccountManagerNative");
let closure_12 = 15 * importDefault(dependencyMap[8]).Millis.SECOND;
let closure_13 = null;
class MultiAccountModalManagerImpl {
  constructor() {
    arg1 = this;
    tmp = closure_7(this, MultiAccountModalManagerImpl);
    this.cancelled = false;
    this.push = () => {
      callback(paths[9]).pushLazy(self(paths[11])(paths[10], paths.paths), {}, "switch-accounts-spinner-modal");
      if (self.cancelled) {
        callback(paths[9]).popWithKey("switch-accounts-spinner-modal");
        const obj2 = callback(paths[9]);
      }
    };
    this.enqueue = () => {
      self.cancelled = false;
      const rootNavigationRef = self(closure_2[12]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          self.push();
        }
      }
      const ComponentDispatch = self(closure_2[13]).ComponentDispatch;
      ComponentDispatch.subscribeOnce(constants.NAVIGATOR_READY, () => {
        if (!arr.cancelled) {
          const arr = arr.push();
        }
      });
    };
    this.pop = () => {
      self.cancelled = true;
      callback(closure_2[9]).popWithKey("switch-accounts-spinner-modal");
    };
    return;
  }
}
const tmp3 = arg1(dependencyMap[6]);
const tmp2Result = new importDefaultResult(MultiAccountModalManagerImpl)();
let tmp8 = (arg0) => {
  class MultiAccountManagerNative {
    constructor() {
      self = this;
      tmp = closure_7(this, MultiAccountManagerNative);
      obj = closure_4(MultiAccountManagerNative);
      tmp2 = closure_3;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MultiAccountManagerNative;
  callback(MultiAccountManagerNative, arg0);
  let obj = {
    key: "onSwitchStart",
    value() {
      callback(closure_2[9]).popWithKey(closure_8);
      closure_11.info("Closing fast-connect socket because of account switch logout");
      const obj = callback(closure_2[9]);
      const result = MultiAccountManagerNative(closure_2[14]).closeFastConnectSocket();
      arr.enqueue();
      if (null !== timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        const arr = arr.pop();
        const result = callback(closure_2[15]).reportAccountSwitchTimeout();
      }, closure_12);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "onSwitchSuccess",
    value(arg0, arg1) {
      const MultiAccountManagerNative = arg0;
      if (arg1) {
        let obj = MultiAccountManagerNative(closure_2[16]);
        obj = { navigationReplace: true };
        obj.transitionTo(constants.ME, obj);
        const MobileHomeDrawerExperiment = MultiAccountManagerNative(closure_2[17]).MobileHomeDrawerExperiment;
        obj = { location: "multi-account" };
        if (MobileHomeDrawerExperiment.getConfig(obj).enableHome) {
          MultiAccountManagerNative(closure_2[18]).setHomeDrawerState(false);
          const obj4 = MultiAccountManagerNative(closure_2[18]);
        }
      }
      const timerId = setTimeout(() => {
        let obj = callback(closure_2[19]);
        obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS" };
        const intl = arg0(closure_2[20]).intl;
        obj = { username: arg0.username };
        obj.content = intl.formatToPlainString(arg0(closure_2[20]).t.wx7O3L, obj);
        obj.icon = callback(closure_2[21]);
        obj.open(obj);
      }, 100);
    }
  };
  items[1] = obj;
  obj = {
    key: "onSwitchError",
    value() {
      let obj = callback(closure_2[19]);
      obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR" };
      const intl = MultiAccountManagerNative(closure_2[20]).intl;
      obj.content = intl.string(MultiAccountManagerNative(closure_2[20]).t.pqvKWA);
      obj.icon = callback(closure_2[21]);
      obj.open(obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onSwitchComplete",
    value() {
      callback(closure_2[9]).popWithKey(closure_8);
      const obj = callback(closure_2[9]);
      if (null !== closure_13) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_13);
        closure_13 = null;
      }
    }
  };
  return importDefaultResult(MultiAccountManagerNative, items);
}(importDefault(dependencyMap[22]));
tmp8 = new tmp8();
const importDefaultResultResult = importDefaultResult(MultiAccountModalManagerImpl);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/multi_account/native/MultiAccountManagerNative.tsx");

export default tmp8;
