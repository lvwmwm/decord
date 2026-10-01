// Module ID: 17195
// Function ID: 17196
// Name: MultiAccountManagerNative
// Dependencies: [11907, 1074, 3, 1091, 5039, 17196, 1981, 4693, 1110, 17197, 15, 11910, 1101, 4698, 4692, 4528, 1115, 17198, 2]

// Module 17195 (MultiAccountManagerNative)
import LoggerDefault from "Logger" /* 3 */;
import fast_connect from "fast_connect" /* 15 */;
import DurationsDefault from "Durations" /* 1091 */;
import intl2 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import Constants2 from "Constants" /* 11907 */;
import AssetRegistryDefault from "AssetRegistry" /* 17198 */;
import Constants from "Constants" /* 1074 */;
import MultiAccountManager from "MultiAccountManager" /* 17197 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let tmp;
const ComponentDispatchUtils = tmp(1110);
function push() {
  obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(17196, dependencyMap.paths), {}, c7);
  const tmp3 = c7;
  if (obj.cancelled) {
    const tmpResult = ModalActionCreatorsDefault;
    tmpResult.popWithKey(tmp3);
  }
}
function enqueue() {
  let cancelled;
  let arr = obj;
  obj.cancelled = false;
  obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      arr.push();
    }
  }
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.subscribeOnce(constants.NAVIGATOR_READY, () => {
    const arr = cancelled;
    if (!cancelled.cancelled) {
      arr.push();
    }
  });
}
function pop() {
  obj.cancelled = true;
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(c7);
}
const SWITCH_ACCOUNTS_MODAL_KEY = Constants2.SWITCH_ACCOUNTS_MODAL_KEY;
({ ComponentActions: closure_4, Routes: hasOwnProperty } = Constants);
let tmp3 = new LoggerDefault("MultiAccountManagerNative");
const metroRequire = tmp3;
let c7 = "switch-accounts-spinner-modal";
let closure_8 = 15 * DurationsDefault.Millis.SECOND;
let c9 = null;
let obj = Object.create((function MultiAccountModalManagerImpl() {
  obj = Object.create(new.target.prototype);
  obj.cancelled = false;
  obj.push = push;
  obj.enqueue = enqueue;
  obj.pop = pop;
  return obj;
}).prototype);
obj.cancelled = false;
obj.push = push;
obj.enqueue = enqueue;
obj.pop = pop;
class MultiAccountManagerNative extends MultiAccountManager {
  onSwitchStart() {
    let timeout;
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(SWITCH_ACCOUNTS_MODAL_KEY);
    logger.info("Closing fast-connect socket because of account switch logout");
    const obj2 = fast_connect;
    let result = obj2.closeFastConnectSocket();
    obj.enqueue();
    if (null !== timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      closure_1_10.pop();
      obj = require("MultiAccountActionCreators");
      const result = obj.reportAccountSwitchTimeout();
    }, closure_8);
  }
  onSwitchSuccess(currentUser, navigateHome) {
    _require = currentUser;
    const tmp = navigateHome;
    if (tmp) {
      obj = require("router_utils");
      obj.transitionTo(constants2.ME, { navigationReplace: true });
      const MobileHomeDrawerExperiment = require("HomeDrawerExperiment").MobileHomeDrawerExperiment;
      const tmp2 = _require;
      if (MobileHomeDrawerExperiment.getConfig({ location: "multi-account" }).enableHome) {
        const tmp2Result = tmp2(4692);
        tmp2Result.setHomeDrawerState(false);
      }
    }
    const timerId = setTimeout(() => {
      let intl;
      let obj2;
      obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS", content: intl.formatToPlainString(intl2.t.wx7O3L, obj2), icon: AssetRegistryDefault };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      obj2 = { username: currentUser.username };
      open(obj);
    }, 100);
  }
  onSwitchError() {
    let intl;
    obj = { key: "SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR", content: intl.string(intl2.t.pqvKWA), icon: AssetRegistryDefault };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open(obj);
  }
  onSwitchComplete() {
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(SWITCH_ACCOUNTS_MODAL_KEY);
    obj.pop();
    if (null !== c9) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c9);
      c9 = null;
    }
  }
}
const prototype = MultiAccountManagerNative.prototype;
const multiAccountManagerNative = new MultiAccountManagerNative();
let result = size.fileFinishedImporting("modules/multi_account/native/MultiAccountManagerNative.tsx");

export default multiAccountManagerNative;
