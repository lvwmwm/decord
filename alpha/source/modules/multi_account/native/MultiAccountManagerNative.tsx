// Module ID: 20152
// Function ID: 20153
// Name: MultiAccountManagerNative
// Dependencies: [14717, 1072, 3, 1089, 6785, 20153, 2118, 5430, 1108, 20154, 15, 14720, 7168, 5435, 5429, 5952, 1113, 20155, 2]

// Module 20152 (MultiAccountManagerNative)
import LoggerDefault from "Logger" /* 3 */;
import fast_connect from "fast_connect" /* 15 */;
import DurationsDefault from "Durations" /* 1089 */;
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import RootNavigationRef from "RootNavigationRef" /* 5430 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import Constants2 from "Constants" /* 14717 */;
import ArrowsLeftRightIcon from "ArrowsLeftRightIcon" /* 20155 */;
import Constants from "Constants" /* 1072 */;
import MultiAccountManager from "MultiAccountManager" /* 20154 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let tmp;
const ComponentDispatchUtils = tmp(1108);
function push() {
  obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(20153, dependencyMap.paths), {}, c7);
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
({ ComponentActions: closure_4, ME: hasOwnProperty } = Constants);
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
      const self = this;
      if (!this.transitionToLastChannel(currentUser.id)) {
        obj = require("transitionToGuild");
        obj.transitionToGuild(closure_5);
      }
      const MobileHomeDrawerExperiment = require("HomeDrawerExperiment").MobileHomeDrawerExperiment;
      const tmp6 = _require;
      if (MobileHomeDrawerExperiment.getConfig({ location: "multi-account" }).enableHome) {
        const tmp6Result = tmp6(5429);
        tmp6Result.setHomeDrawerState(false);
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
