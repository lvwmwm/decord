// Module ID: 25
// Function ID: 1097
// Name: prepareIdentify
// Dependencies: []
// Exports: closeFastConnectSocket, createFastConnectSocket, getLastFastConnectIdentifyUserId, identifyWebSocket

// Module 25 (prepareIdentify)
let AppState;
function prepareIdentify(json, json, parsed, arg3) {
  importDefaultResult.info("prepareIdentify: app state: ", AppState.currentState);
  let obj = require(dependencyMap[4]);
  if (obj.isAndroid()) {
    let obj1 = importDefault(dependencyMap[5]);
    const analyticsInstallation2 = obj1.getConstants().analyticsInstallation;
    let tmp5 = null;
    if (null != analyticsInstallation2) {
      tmp5 = analyticsInstallation2;
    }
    let analyticsInstallation = tmp5;
  } else {
    analyticsInstallation = closure_4.DCDFastConnectManager.analyticsInstallation;
  }
  obj = { token: parsed };
  obj = {};
  const merged = Object.assign(importAll(dependencyMap[6]).getSuperProperties());
  obj["client_app_state"] = AppState.currentState;
  obj["is_fast_connect"] = true;
  const obj5 = importAll(dependencyMap[6]);
  obj["gateway_connect_reasons"] = importAll(dependencyMap[7]).describeConnectionReasons();
  if (null != analyticsInstallation) {
    obj1 = { installation_id: analyticsInstallation };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged1 = Object.assign(obj2);
  obj.properties = obj;
  const obj6 = importAll(dependencyMap[7]);
  const obj3 = {};
  const obj9 = require(dependencyMap[8]);
  if (obj11.isAndroid()) {
    const useChannelObfuscation2 = importDefault(dependencyMap[5]).getConstants().useChannelObfuscation;
    let tmp9 = null != useChannelObfuscation2 && useChannelObfuscation2;
    const obj12 = importDefault(dependencyMap[5]);
    const tmp12 = null != useChannelObfuscation2 && useChannelObfuscation2;
  } else {
    const useChannelObfuscation = closure_4.DCDFastConnectManager.useChannelObfuscation;
    tmp9 = null != useChannelObfuscation && useChannelObfuscation;
  }
  obj3.useChannelObfuscation = tmp9;
  obj.capabilities = obj9.getClientCapabilities(obj3);
  obj.client_state = { guild_versions: {} };
  json = JSON.stringify({ op: 2, d: obj });
  const obj11 = require(dependencyMap[4]);
  if (obj13.isAndroid()) {
    let str;
    if (null != json) {
      str = json.toString();
    }
    let tmp25 = null;
    if (null != str) {
      tmp25 = str;
    }
    const obj15 = importDefault(dependencyMap[5]);
    const _parseFloat = parseFloat;
    parsed = parseFloat(json);
    let tmp30;
    if (obj16.isCacheEnabled()) {
      tmp30 = closure_6;
    }
    obj15.prepareIdentify(tmp25, json, parsed, tmp30);
    const obj16 = require(dependencyMap[9]);
  } else {
    const DCDFastConnectManager = closure_4.DCDFastConnectManager;
    let tmp17 = null;
    if (obj14.isCacheEnabled()) {
      tmp17 = closure_6;
    }
    DCDFastConnectManager.prepareIdentify(json, json, json, tmp17);
    const obj14 = require(dependencyMap[9]);
  }
  return obj.client_state;
}
function createFastConnectSocket() {
  if (null != window.WebSocket) {
    function newWebSocket() {
      let obj = callback(closure_3[4]);
      if (obj.isAndroid()) {
        let supportsZstd = obj(closure_3[10]).getConstants().supportsZstd;
        const obj2 = obj(closure_3[10]);
      } else {
        supportsZstd = closure_4.DCDCompressionManager.supportsZstd;
      }
      let str = "zlib-stream";
      if (supportsZstd) {
        str = "zstd-stream";
      }
      let GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ALT_ENDPOINT;
      if (!obj(closure_3[11])()) {
        const _window = window;
        GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
      }
      const combined = "" + GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str;
      closure_7.log(`[FAST CONNECT] ${tmp5}`);
      const callback = Date.now();
      const tmp7 = obj(closure_3[12])(combined);
      const parsed = parseFloat(tmp7._socketId);
      if (isNaN(parsed)) {
        closure_7.log("[FAST CONNECT] Unable to create socketId from NaN value ", tmp7._socketId);
      } else {
        const isAndroidResult = callback(closure_3[4]).isAndroid();
        if (supportsZstd) {
          if (isAndroidResult) {
            const result = obj(closure_3[10]).enableZstdStreamSupport(parsed);
            const obj5 = obj(closure_3[10]);
          } else {
            const DCDCompressionManager2 = closure_4.DCDCompressionManager;
            const result1 = DCDCompressionManager2.enableZstdStreamSupport(parsed, 0);
          }
        } else if (isAndroidResult) {
          const result2 = obj(closure_3[10]).enableZlibStreamSupport(parsed);
          const obj4 = obj(closure_3[10]);
        } else {
          const DCDCompressionManager = closure_4.DCDCompressionManager;
          const result3 = DCDCompressionManager.enableZlibStreamSupport(parsed);
        }
        obj = { "Null": "AbortSignal", "Null": null, "Null": "\u{1F9BB}\u{1F3FF}", "Null": true, "Null": null, "Null": 12, gateway: combined, messages: [] };
        tmp7.onopen = () => {
          const obj = obj(closure_3[13]);
          obj.mark("\u{1F310}", "Fastconnect socket opened");
          closure_7.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj.identify);
          obj.open = true;
        };
        const fn = () => {
          const obj = obj(closure_3[13]);
          obj.mark("\u{1F310}", "Fastconnect socket close");
          window._ws = null;
        };
        tmp7.onerror = fn;
        tmp7.onclose = fn;
        tmp7.onmessage = (arg0) => {
          const obj = obj(closure_3[13]);
          obj.mark("\u{1F310}", "Fastconnect socket message");
          const messages = obj.messages;
          messages.push(arg0);
        };
        const _window2 = window;
        obj = { ws: tmp7 };
        obj.state = obj;
        window._ws = obj;
        const obj3 = callback(closure_3[4]);
        obj(closure_3[13]).mark("\u{1F310}", "Fastconnect socket created");
        const obj8 = obj(closure_3[13]);
      }
    }();
  } else {
    importDefaultResult.log("Skipping fast_connect because `window.WebSocket` does not exist.");
  }
}
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
({ NativeModules: closure_4, AppState } = _module1);
let closure_6 = require(dependencyMap[2]).VERSION_TO_FORCE_RESYNCING_ALL_DATA;
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("FAST CONNECT");
importDefaultResult.info("initial app state (import time)", AppState.currentState);
let closure_8 = null;
const fastConnectSocket = createFastConnectSocket();
const _module2 = require(dependencyMap[15]);
const result = _module2.fileFinishedImporting("modules/gateway/native/fast_connect.tsx");

export { createFastConnectSocket };
export const closeFastConnectSocket = function closeFastConnectSocket() {
  if (null != window._ws) {
    const _window = window;
    ws.close();
    const _window2 = window;
    window._ws = null;
    let closure_8 = null;
  }
};
export function getLastFastConnectIdentifyUserId() {
  return closure_8;
}
export const identifyWebSocket = function identifyWebSocket() {
  if (null != window._ws) {
    const beginFastConnect = importDefault(dependencyMap[14]).beginFastConnect;
    beginFastConnect.measure(() => {
      const loadFastConnectNativeModule = callback2(closure_3[14]).loadFastConnectNativeModule;
      const measureResult = loadFastConnectNativeModule.measure(() => {
        const obj = callback(closure_3[4]);
        if (obj.isAndroid()) {
          const token2 = callback2(closure_3[5]).getConstants().token;
          let tmp4 = null;
          if (null != token2) {
            tmp4 = token2;
          }
          let token = tmp4;
          const obj2 = callback2(closure_3[5]);
        } else {
          token = obj.DCDFastConnectManager.token;
        }
        return token;
      });
      if (null != measureResult) {
        if ("" !== measureResult) {
          const _window = window;
          const state = _ws.state;
          const obj = callback(closure_3[4]);
          if (obj.isAndroid()) {
            let userId = callback2(closure_3[5]).getConstants().userId;
            const obj2 = callback2(closure_3[5]);
          } else {
            userId = obj.DCDFastConnectManager.userId;
          }
          let tmp9 = null;
          if (null != userId) {
            tmp9 = userId;
          }
          let tmp10 = null;
          if (null != userId) {
            tmp10 = userId;
          }
          state.userId = tmp10;
          let tmp12 = null;
          if (null != userId) {
            tmp12 = userId;
          }
          state.identify = true;
          state.clientState = closure_9(_ws.ws._socketId, tmp12, measureResult);
          const tmp11 = closure_9;
        }
      }
      closure_7.log("Skipping fast_connect because we could not find a token to connect with.");
    });
  } else {
    importDefaultResult.log("Skipping identifyWebSocket because socket is null");
  }
};
