// Module ID: 19410
// Function ID: 19411
// Name: MultiAccountManagerNative
// Dependencies: [13781, 1084, 3, 1101, 6731, 19411, 2000, 5188, 1120, 19412, 15, 13784, 1111, 5193, 5187, 5701, 1125, 19413, 2]

// Module 19410 (MultiAccountManagerNative)
import LoggerDefault from "Logger" /* 3 */;
import fast_connect from "fast_connect" /* 15 */;
import DurationsDefault from "Durations" /* 1101 */;
import intl2 from "intl" /* 1125 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import RootNavigationRef from "RootNavigationRef" /* 5188 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import Constants2 from "Constants" /* 13781 */;
import ArrowsLeftRightIcon from "ArrowsLeftRightIcon" /* 19413 */;
import Constants from "Constants" /* 1084 */;
import MultiAccountManager from "MultiAccountManager" /* 19412 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let tmp;
const ComponentDispatchUtils = tmp(1120);
function push() {
  obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(19411, dependencyMap.paths), {}, c7);
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
        const tmp2Result = tmp2(5187);
        tmp2Result.setHomeDrawerState(false);
      }
    }
    const timerId = setTimeout(() => {
      let intl;
      let obj2;
      obj = { text: intl.formatToPlainString(intl2.t.wx7O3L, obj2), icon: ArrowsLeftRightIcon.ArrowsLeftRightIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      obj2 = { username: currentUser.username };
      open("SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS", obj);
    }, 100);
  }
  onSwitchError() {
    let intl;
    obj = { text: intl.string(intl2.t.pqvKWA), icon: ArrowsLeftRightIcon.ArrowsLeftRightIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open("SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR", obj);
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
