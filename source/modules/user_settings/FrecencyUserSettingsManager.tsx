// Module ID: 16041
// Function ID: 124154
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 15, 17, 18, 7922, 7921, 4991, 4578, 5034, 5042, 1316, 662, 4156, 664, 1331, 1317, 1318, 5078, 22, 2]

// Module 16041 (_isNativeReflectConstruct)
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import set from "set";
import _callSuper from "_callSuper";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { MAX_NUM_SELECTED_ITEMS } from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { FREQUENCY_ITEM_LIMIT } from "ApplicationTypes";
import tmp5 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  let c22 = true;
  resetTimer(closure_19, true);
}
function handleAppStateUpdate(state) {
  let tmp = c22;
  if (c22) {
    tmp = "active" !== state.state;
  }
  if (tmp) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c21);
    c21 = null;
    saveProtos(false);
  }
}
function handleConnectionClosed() {
  if (c22) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c21);
    c21 = null;
    saveProtos(false);
  }
}
function saveProtos(arg0) {
  return _saveProtos(...arguments);
}
function _saveProtos() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function resetTimer(closure_19, arg1) {
  let closure_0 = arg1;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => outer1_27(closure_0), closure_19);
}
const random = Math.random();
let closure_19 = 10 + random * (10 * require("set").Millis.SECOND);
let result = 2 * require("set").Millis.HOUR;
const random1 = Math.random();
let closure_20 = result + Math.floor(random1 * (10 * require("set").Millis.MINUTE));
let c21 = null;
let c22 = false;
tmp5 = new tmp5();
const result1 = require("_defineProperties").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsManager.tsx");

export default tmp5;
