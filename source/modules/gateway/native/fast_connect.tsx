// Module ID: 25
// Function ID: 1097
// Name: prepareIdentify
// Dependencies: [26, 27, 476, 3, 477, 479, 480, 652, 12651, 6891, 12633, 12620, 12618, 20, 14, 2]
// Exports: closeFastConnectSocket, createFastConnectSocket, getLastFastConnectIdentifyUserId, identifyWebSocket

// Module 25 (prepareIdentify)
import module_26 from "module_26";
import get_ActivityIndicator from "get ActivityIndicator";
import { VERSION_TO_FORCE_RESYNCING_ALL_DATA as closure_6 } from "HELLO_KEY";
import importDefaultResult from "timestamp";

let AppState;
let closure_4;
function prepareIdentify(json, json, parsed, arg3) {
  importDefaultResult.info("prepareIdentify: app state: ", AppState.currentState);
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    let obj1 = importDefault(479);
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
  const merged = Object.assign(importAll(480).getSuperProperties());
  obj["client_app_state"] = AppState.currentState;
  obj["is_fast_connect"] = true;
  const obj5 = importAll(480);
  obj["gateway_connect_reasons"] = importAll(652).describeConnectionReasons();
  if (null != analyticsInstallation) {
    obj1 = { installation_id: analyticsInstallation };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged1 = Object.assign(obj2);
  obj.properties = obj;
  const obj6 = importAll(652);
  const obj3 = {};
  const obj9 = require(12651) /* getClientCapabilities */;
  if (obj11.isAndroid()) {
    const useChannelObfuscation2 = importDefault(479).getConstants().useChannelObfuscation;
    let tmp9 = null != useChannelObfuscation2 && useChannelObfuscation2;
    const obj12 = importDefault(479);
    const tmp12 = null != useChannelObfuscation2 && useChannelObfuscation2;
  } else {
    const useChannelObfuscation = closure_4.DCDFastConnectManager.useChannelObfuscation;
    tmp9 = null != useChannelObfuscation && useChannelObfuscation;
  }
  obj3.useChannelObfuscation = tmp9;
  obj.capabilities = obj9.getClientCapabilities(obj3);
  obj.client_state = { guild_versions: {} };
  json = JSON.stringify({ op: 2, d: obj });
  obj11 = require(477) /* set */;
  if (obj13.isAndroid()) {
    let str;
    if (null != json) {
      str = json.toString();
    }
    let tmp25 = null;
    if (null != str) {
      tmp25 = str;
    }
    const obj15 = importDefault(479);
    const _parseFloat = parseFloat;
    parsed = parseFloat(json);
    let tmp30;
    if (obj16.isCacheEnabled()) {
      tmp30 = closure_6;
    }
    obj15.prepareIdentify(tmp25, json, parsed, tmp30);
    obj16 = require(6891) /* isCacheEnabled */;
  } else {
    const DCDFastConnectManager = closure_4.DCDFastConnectManager;
    let tmp17 = null;
    if (obj14.isCacheEnabled()) {
      tmp17 = closure_6;
    }
    DCDFastConnectManager.prepareIdentify(json, json, json, tmp17);
    obj14 = require(6891) /* isCacheEnabled */;
  }
  return obj.client_state;
}
function createFastConnectSocket() {
  if (null != window.WebSocket) {
    (function newWebSocket() {
      let obj = outer1_0(outer1_3[4]);
      if (obj.isAndroid()) {
        let supportsZstd = outer1_1(outer1_3[10]).getConstants().supportsZstd;
        const obj2 = outer1_1(outer1_3[10]);
      } else {
        supportsZstd = outer1_4.DCDCompressionManager.supportsZstd;
      }
      let str = "zlib-stream";
      if (supportsZstd) {
        str = "zstd-stream";
      }
      let GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ALT_ENDPOINT;
      if (!outer1_1(outer1_3[11])()) {
        const _window = window;
        GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
      }
      const combined = "" + GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str;
      outer1_7.log(`[FAST CONNECT] ${tmp5}`);
      let closure_0 = Date.now();
      const tmp7 = outer1_1(outer1_3[12])(combined);
      const parsed = parseFloat(tmp7._socketId);
      if (isNaN(parsed)) {
        outer1_7.log("[FAST CONNECT] Unable to create socketId from NaN value ", tmp7._socketId);
      } else {
        const isAndroidResult = outer1_0(outer1_3[4]).isAndroid();
        if (supportsZstd) {
          if (isAndroidResult) {
            const result = outer1_1(outer1_3[10]).enableZstdStreamSupport(parsed);
            const obj5 = outer1_1(outer1_3[10]);
          } else {
            const DCDCompressionManager2 = outer1_4.DCDCompressionManager;
            const result1 = DCDCompressionManager2.enableZstdStreamSupport(parsed, 0);
          }
        } else if (isAndroidResult) {
          const result2 = outer1_1(outer1_3[10]).enableZlibStreamSupport(parsed);
          const obj4 = outer1_1(outer1_3[10]);
        } else {
          const DCDCompressionManager = outer1_4.DCDCompressionManager;
          const result3 = DCDCompressionManager.enableZlibStreamSupport(parsed);
        }
        obj = { open: false, gateway: combined, identify: false, messages: [], clientState: null, userId: null };
        tmp7.onopen = () => {
          const obj = outer2_1(outer2_3[13]);
          obj.mark("\u{1F310}", "Fastconnect socket opened");
          outer2_7.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj.identify);
          obj.open = true;
        };
        const fn = () => {
          outer2_1(outer2_3[13]).mark("\u{1F310}", "Fastconnect socket close");
          window._ws = null;
        };
        tmp7.onerror = fn;
        tmp7.onclose = fn;
        tmp7.onmessage = (arg0) => {
          const obj = outer2_1(outer2_3[13]);
          obj.mark("\u{1F310}", "Fastconnect socket message");
          const messages = obj.messages;
          messages.push(arg0);
        };
        const _window2 = window;
        obj = { ws: tmp7 };
        obj.state = obj;
        window._ws = obj;
        const obj3 = outer1_0(outer1_3[4]);
        outer1_1(outer1_3[13]).mark("\u{1F310}", "Fastconnect socket created");
        const obj8 = outer1_1(outer1_3[13]);
      }
    })();
  } else {
    importDefaultResult.log("Skipping fast_connect because `window.WebSocket` does not exist.");
  }
}
({ NativeModules: closure_4, AppState } = get_ActivityIndicator);
importDefaultResult = new importDefaultResult("FAST CONNECT");
importDefaultResult.info("initial app state (import time)", AppState.currentState);
let c8 = null;
const fastConnectSocket = createFastConnectSocket();
let result = require("HELLO_KEY").fileFinishedImporting("modules/gateway/native/fast_connect.tsx");

export { createFastConnectSocket };
export const closeFastConnectSocket = function closeFastConnectSocket() {
  if (null != window._ws) {
    const _window = window;
    ws.close();
    const _window2 = window;
    window._ws = null;
    let c8 = null;
  }
};
export function getLastFastConnectIdentifyUserId() {
  return c8;
}
export const identifyWebSocket = function identifyWebSocket() {
  if (null != window._ws) {
    const beginFastConnect = importDefault(14).beginFastConnect;
    beginFastConnect.measure(() => {
      const loadFastConnectNativeModule = outer1_1(outer1_3[14]).loadFastConnectNativeModule;
      const measureResult = loadFastConnectNativeModule.measure(() => {
        if (obj.isAndroid()) {
          const token2 = outer2_1(outer2_3[5]).getConstants().token;
          let tmp4 = null;
          if (null != token2) {
            tmp4 = token2;
          }
          let token = tmp4;
          const obj2 = outer2_1(outer2_3[5]);
        } else {
          token = outer2_4.DCDFastConnectManager.token;
        }
        return token;
      });
      if (null != measureResult) {
        if ("" !== measureResult) {
          const _window = window;
          const state = _ws.state;
          if (obj.isAndroid()) {
            let userId = outer1_1(outer1_3[5]).getConstants().userId;
            let obj2 = outer1_1(outer1_3[5]);
          } else {
            userId = outer1_4.DCDFastConnectManager.userId;
          }
          let tmp9 = null;
          if (null != userId) {
            tmp9 = userId;
          }
          const outer1_8 = tmp9;
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
          state.clientState = outer1_9(_ws.ws._socketId, tmp12, measureResult);
          obj = outer1_0(outer1_3[4]);
          const tmp11 = outer1_9;
        }
      }
      outer1_7.log("Skipping fast_connect because we could not find a token to connect with.");
    });
  } else {
    importDefaultResult.log("Skipping identifyWebSocket because socket is null");
  }
};
