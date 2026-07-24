// Module ID: 14821
// Function ID: 113000
// Name: useAuthWebsocket
// Dependencies: [5, 57, 31, 653, 3, 14820, 561, 8435, 12618, 14822, 1207, 507, 5588, 14824, 2]
// Exports: useAuthWebsocket

// Module 14821 (useAuthWebsocket)
import RemoteAuthStep from "RemoteAuthStep";
import _slicedToArray from "_slicedToArray";
import result from "result";
import ME from "ME";
import importDefaultResult from "ME";

let closure_6;
let closure_7;
const require = arg1;
({ ComponentActions: closure_6, Endpoints: closure_7 } = ME);
importDefaultResult = new importDefaultResult("useAuthWebsocket");
const result = require("result").fileFinishedImporting("modules/remote_auth/useAuthWebsocket.tsx");

export const useAuthWebsocket = function useAuthWebsocket(callback, arg1) {
  let flag = arg2;
  const _require = callback;
  const importDefault = arg1;
  if (arg2 === undefined) {
    flag = false;
  }
  let RemoteAuthStep;
  let first;
  let React;
  let state;
  let closure_7;
  let closure_8;
  let memo;
  let cancel;
  callback = undefined;
  let tmp = first(React.useState(0), 2);
  RemoteAuthStep = tmp[1];
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp4;
  const tmp5 = first(React.useState({ step: _require(flag[5]).RemoteAuthStep.INITIALIZING }), 2);
  state = tmp5[0];
  closure_7 = tmp5[1];
  closure_8 = React.useRef(null);
  memo = React.useMemo(() => {
    let tmp = callback2(flag[6]);
    tmp = new tmp(1500, 30000);
    return tmp;
  }, []);
  cancel = importDefault(flag[7])(() => {
    callback4({ step: callback(flag[5]).RemoteAuthStep.INITIALIZING });
    if (closure_1) {
      callback3((arg0) => arg0 + 1);
    } else {
      logger.info("document is not visible, will defer reconnection when document becomes visible.");
      _undefined(true);
    }
  });
  const items = [cancel, memo];
  callback = React.useCallback(() => {
    logger.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session.");
    callback4({ step: callback(flag[5]).RemoteAuthStep.INITIALIZING });
    if (!memo.pending) {
      memo.fail(cancel);
    }
  }, items);
  const items1 = [state, arg1, first, tmp2[1]];
  const effect = React.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = first;
    }
    if (tmp) {
      tmp = state.step === callback(flag[5]).RemoteAuthStep.INITIALIZING;
    }
    if (tmp) {
      logger.info("reconnecting, now that document is visible");
      _undefined(false);
      callback3((arg0) => arg0 + 1);
    }
  }, items1);
  const items2 = [cancel, callback, tmp[0], memo, callback, flag];
  const effect1 = React.useEffect(() => {
    function _fmt(arg0) {
      return "[" + Date.now() - closure_0 + "ms" + "] " + arg0;
    }
    function info(arg0) {
      return info.info(_fmt(arg0));
    }
    function getKeyPair() {
      if (null != c2) {
        return c2;
      } else {
        const _Error = Error;
        const error = new Error("No key pair set");
        throw error;
      }
    }
    function doHeartbeat() {
      if (c6) {
        c6 = false;
        const _JSON = JSON;
        const obj = { op: "heartbeat" };
        obj2.send(JSON.stringify(obj));
      } else {
        info("heartbeat timeout, reconnecting.");
        obj2.close();
        onmessage();
      }
    }
    function onmessage(arg0) {
      return _onmessage(...arguments);
    }
    function _onmessage() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _null(tmp);
      return obj(...arguments);
    }
    function onopen() {
      return _onopen(...arguments);
    }
    function _onopen() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _null(tmp);
      return obj(...arguments);
    }
    function onclose(code) {
      info("disconnected, code: " + code.code + " " + code.reason);
      onmessage();
    }
    function onerror(arg0) {
      info("disconnected, error: " + JSON.stringify(arg0));
      onmessage();
    }
    let closure_0 = Date.now();
    const combined = "" + window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT + "/?v=2";
    let combined1 = combined;
    if (combined.startsWith("//")) {
      const _HermesInternal = HermesInternal;
      combined1 = "wss:" + combined;
    }
    const obj2 = callback2(flag[8])(combined1);
    logger.info("[0ms] connecting to " + combined1);
    let c2 = null;
    let c3 = null;
    let c4 = null;
    let c5 = null;
    let c6 = true;
    const listener = obj2.addEventListener("open", onopen);
    const listener1 = obj2.addEventListener("message", onmessage);
    const listener2 = obj2.addEventListener("close", onclose);
    const listener3 = obj2.addEventListener("error", onerror);
    return () => {
      info("cleaning up");
      const removed = obj2.removeEventListener("open", onopen);
      const removed1 = obj2.removeEventListener("message", onmessage);
      const removed2 = obj2.removeEventListener("close", onclose);
      const removed3 = obj2.removeEventListener("error", onerror);
      obj2.close(1000);
      getKeyPair.cancel();
      obj2(flag[9]).release();
      if (null != c5) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c5);
      }
      if (null != c4) {
        const _clearInterval = clearInterval;
        clearInterval(c4);
      }
    };
  }, items2);
  return { state, cancel };
};
