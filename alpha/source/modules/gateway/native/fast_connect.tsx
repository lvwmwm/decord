// Module ID: 15
// Function ID: 16
// Name: fast_connect
// Dependencies: [16, 17, 499, 3, 500, 1272, 10167, 15478, 15939, 7779, 15460, 15447, 10, 9, 2]
// Exports: closeFastConnectSocket, createFastConnectSocket, getLastFastConnectIdentifyUserId, identifyWebSocket

// Module 15 (fast_connect)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import react_native from "react-native" /* 17 */;
import KvCacheVersionConstants from "KvCacheVersionConstants" /* 499 */;
import QosToken from "QosToken" /* 500 */;
import discord_common_AnalyticsUtilsAll from "discord_common/AnalyticsUtils" /* 1272 */;
import isCacheEnabled from "isCacheEnabled" /* 7779 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 10167 */;
import GatewayCapabilities from "GatewayCapabilities" /* 15478 */;
import react_nativeDefault from "react-native" /* 15939 */;
import checkEnv from "checkEnv" /* 16 */;
import size from "module_2" /* 2 */;

let constants;

function createFastConnectSocket() {
  let obj;
  let obj3;
  if (null != window.WebSocket) {
    obj = obj3(15460);
    constants = obj.getConstants();
    let flag;
    if (constants != null) {
      flag = constants.supportsZstd;
    }
    if (flag == null) {
      flag = false;
    }
    let str2 = "zlib-stream";
    if (flag) {
      str2 = "zstd-stream";
    }
    const _window = window;
    const _window2 = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + window.GLOBAL_ENV.GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str2;
    obj.log(`[FAST CONNECT] ${tmp7}`);
    const _Date = Date;
    let closure_0 = Date.now();
    const tmp9 = obj3(15447)(combined);
    const _parseFloat = parseFloat;
    const parsed = parseFloat(tmp9._socketId);
    const _isNaN = isNaN;
    const obj2 = obj;
    if (isNaN(parsed)) {
      obj2.log("[FAST CONNECT] Unable to create socketId from NaN value ", tmp9._socketId);
    } else {
      const tmp3Result = obj3(15460);
      if (flag) {
        const result = tmp3Result.enableZstdStreamSupport(parsed);
      } else {
        const result1 = tmp3Result.enableZlibStreamSupport(parsed);
      }
      obj3 = { open: false, gateway: combined, identify: false, messages: [], clientState: null, userId: null };
      tmp9.onopen = () => {
        const obj = AppStartPerformanceDefault;
        obj.mark("\u{1F310}", "Fastconnect socket opened");
        obj.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj3.identify);
        obj3.open = true;
      };
      const fn = () => {
        const obj = obj3(dependencyMap[12]);
        obj.mark("\u{1F310}", "Fastconnect socket close");
        window._ws = null;
      };
      tmp9.onerror = fn;
      tmp9.onclose = fn;
      tmp9.onmessage = (arg0) => {
        const obj = AppStartPerformanceDefault;
        obj.mark("\u{1F310}", "Fastconnect socket message");
        const messages = obj3.messages;
        messages.push(arg0);
      };
      const _window3 = window;
      const obj4 = { ws: tmp9, state: obj3 };
      window._ws = obj4;
      const tmp3Result2 = obj3(10);
      tmp3Result2.mark("\u{1F310}", "Fastconnect socket created");
    }
  } else {
    obj.log("Skipping fast_connect because `window.WebSocket` does not exist.");
  }
}
const AppState = react_native.AppState;
let closure_5 = KvCacheVersionConstants.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
let d = new LoggerDefault("FAST CONNECT");
d.info("initial app state (import time)", AppState.currentState);
let c7 = null;
const fastConnectSocket = createFastConnectSocket();
let result = size.fileFinishedImporting("modules/gateway/native/fast_connect.tsx");

export { createFastConnectSocket };
export function closeFastConnectSocket() {
  if (null != window._ws) {
    const _window = window;
    ws.close();
    const _window2 = window;
    window._ws = null;
    c7 = null;
  }
}
export function getLastFastConnectIdentifyUserId() {
  return c7;
}
export function identifyWebSocket() {
  let logger;
  let obj;
  if (null != window._ws) {
    const beginFastConnect = TTITrackerDefault.beginFastConnect;
    let measureResult = beginFastConnect.measure(() => {
      let obj3;
      let obj6;
      let obj8;
      let obj9;
      let tmp11Result;
      const loadFastConnectNativeModule = TTITrackerDefault.loadFastConnectNativeModule;
      const measureResult = loadFastConnectNativeModule.measure(() => {
        const obj = closure_1_1(closure_1_3[8]);
        return obj.getConstants();
      });
      let token = measureResult.token;
      if (token == null) {
        token = null;
      }
      if (null != token) {
        if ("" !== token) {
          let obj7;
          const _window = window;
          const state = _ws.state;
          let tmp7 = str2;
          const _socketId = _ws.ws._socketId;
          if (measureResult.userId == null) {
            tmp7 = null;
          }
          c7 = tmp7;
          let tmp8 = str2;
          if (measureResult.userId == null) {
            tmp8 = null;
          }
          state.userId = tmp8;
          let derivedQosData = null;
          if (null != measureResult.userId) {
            const tmpResult = react_nativeDefault;
            derivedQosData = tmpResult.getDerivedQosData(str2);
          }
          let prop = measureResult.analyticsInstallation;
          if (prop == null) {
            prop = null;
          }
          let flag = measureResult.useChannelObfuscation;
          if (flag == null) {
            flag = false;
          }
          const obj2 = QosToken;
          const qosTokenFromDerivedData = obj2.buildQosTokenFromDerivedData(derivedQosData, true);
          logger.info("prepareIdentify: app state: ", AppState.currentState, "qosTokenPresent: ", qosTokenFromDerivedData.length > 0);
          const d = { token, properties: obj3, capabilities: tmp11Result.getClientCapabilities(obj8), client_state: obj9, qos_token: qosTokenFromDerivedData };
          obj3 = { client_app_state: AppState.currentState, is_fast_connect: true, gateway_connect_reasons: obj6.describeConnectionReasons() };
          const obj5 = discord_common_AnalyticsUtilsAll;
          const merged = Object.assign(obj5.getSuperProperties());
          obj6 = RequestGatewaySocketAll;
          if (null != prop) {
            obj7 = { installation_id: prop };
            const obj4 = { installation_id: prop };
          } else {
            obj7 = {};
          }
          const merged1 = Object.assign(obj7);
          obj8 = { useChannelObfuscation: flag };
          const _JSON = JSON;
          const obj10 = { op: 2, d };
          obj9 = { guild_versions: {} };
          tmp11Result = GatewayCapabilities;
          const json = JSON.stringify(obj10);
          let str1;
          const prepareIdentify = react_nativeDefault.prepareIdentify;
          const tmpResult2 = react_nativeDefault;
          if (measureResult.userId != null) {
            str1 = str2.toString();
          }
          if (str1 == null) {
            str1 = null;
          }
          const _parseFloat = parseFloat;
          const parsed = parseFloat(_socketId);
          let tmp26;
          const tmp11Result2 = isCacheEnabled;
          if (tmp11Result2.isCacheEnabled()) {
            tmp26 = closure_1_5;
          }
          prepareIdentify(str1, json, parsed, tmp26);
          state.identify = true;
          state.clientState = d.client_state;
        }
      }
      logger.log("Skipping fast_connect because we could not find a token to connect with.");
    });
  } else {
    obj.log("Skipping identifyWebSocket because socket is null");
  }
}
