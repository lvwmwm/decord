// Module ID: 14648
// Function ID: 110440
// Name: useAuthWebsocket
// Dependencies: []
// Exports: useAuthWebsocket

// Module 14648 (useAuthWebsocket)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ ComponentActions: closure_6, Endpoints: closure_7 } = arg1(dependencyMap[3]));
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("useAuthWebsocket");
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/remote_auth/useAuthWebsocket.tsx");

export const useAuthWebsocket = function useAuthWebsocket(callback, arg1) {
  let flag = arg2;
  arg1 = callback;
  const importDefault = arg1;
  if (arg2 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let closure_3;
  callback = undefined;
  let React;
  let state;
  let closure_7;
  let closure_8;
  let memo;
  let cancel;
  callback = undefined;
  const tmp = callback(React.useState(0), 2);
  closure_3 = tmp[1];
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  callback = first;
  React = tmp4;
  const tmp5 = callback(React.useState({ step: arg1(dependencyMap[5]).RemoteAuthStep.INITIALIZING }), 2);
  state = tmp5[0];
  closure_7 = tmp5[1];
  closure_8 = React.useRef(null);
  memo = React.useMemo(() => {
    let tmp = arg1(flag[6]);
    tmp = new tmp(1500, 30000);
    return tmp;
  }, []);
  cancel = importDefault(dependencyMap[7])(() => {
    callback2({ step: arg0(flag[5]).RemoteAuthStep.INITIALIZING });
    if (arg1) {
      callback((arg0) => arg0 + 1);
    } else {
      closure_8.info("document is not visible, will defer reconnection when document becomes visible.");
      tmp4(true);
    }
  });
  const items = [cancel, memo];
  callback = React.useCallback(() => {
    closure_8.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session.");
    callback2({ step: arg0(flag[5]).RemoteAuthStep.INITIALIZING });
    if (!memo.pending) {
      memo.fail(cancel);
    }
  }, items);
  const items1 = [state, arg1, first, tmp2[1]];
  const effect = React.useEffect(() => {
    let tmp = arg1;
    if (arg1) {
      tmp = first;
    }
    if (tmp) {
      tmp = state.step === arg0(flag[5]).RemoteAuthStep.INITIALIZING;
    }
    if (tmp) {
      closure_8.info("reconnecting, now that document is visible");
      tmp4(false);
      callback((arg0) => arg0 + 1);
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
      if (null != closure_2) {
        return closure_2;
      } else {
        const _Error = Error;
        const error = new Error("No key pair set");
        throw error;
      }
    }
    function doHeartbeat() {
      if (closure_6) {
        closure_6 = false;
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
    const callback = onmessage;
    function _onmessage() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _null(tmp);
      const _onmessage = obj;
      return obj(...arguments);
    }
    function onopen() {
      return _onopen(...arguments);
    }
    function _onopen() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _null(tmp);
      const _onopen = obj;
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
    const obj2 = arg1(closure_2[8])(combined1);
    const arg1 = obj2;
    info.info("[0ms] connecting to " + combined1);
    closure_2 = null;
    let closure_3 = null;
    let closure_4 = null;
    let closure_5 = null;
    let closure_6 = true;
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
      obj2(closure_2[9]).release();
      if (null != closure_5) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_5);
      }
      if (null != closure_4) {
        const _clearInterval = clearInterval;
        clearInterval(closure_4);
      }
    };
  }, items2);
  return { state, cancel };
};
