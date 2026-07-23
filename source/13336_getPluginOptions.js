// Module ID: 13336
// Function ID: 102423
// Name: getPluginOptions
// Dependencies: [5, 27, 91, 13337, 13339, 13341, 13342, 13345, 13346, 13359, 13361, 13363, 13364, 13365, 13366, 13347]

// Module 13336 (getPluginOptions)
import asyncGeneratorStep from "result2";
import get_ActivityIndicator from "get ActivityIndicator";
import getConstants from "getConstants";
import result from "result";
import result1 from "result1";
import result2 from "result2";
import result3 from "result3";
import result4 from "result4";
import result5 from "result5";
import result6 from "result6";
import result7 from "result7";
import result8 from "result8";
import result9 from "result9";

let forceTouch;
let interfaceIdiom;
let osRelease;
let serial;
let serverHost;
let uiMode;
function getPluginOptions(asyncStorage) {
  let tmp = null;
  if ("object" === typeof asyncStorage) {
    tmp = asyncStorage;
  }
  return tmp;
}
const defaultResult = require("getReactNativePlatformConstants")();
const model = defaultResult.model;
const systemName = defaultResult.systemName;
const obj6 = {
  createSocket(url) {
    const webSocket = new WebSocket(url);
    return webSocket;
  },
  host: null,
  port: 9090,
  name: "React Native App",
  environment: "production"
};
({ osRelease, serverHost, forceTouch, interfaceIdiom, uiMode, serial } = defaultResult);
obj6.host = (function getHost(localhost) {
  const scriptURL = getConstants.default.getConstants().scriptURL;
  if ("string" !== typeof scriptURL) {
    const _Error = Error;
    const error = new Error("Invalid non-string URL");
    throw error;
  } else {
    return require(13366) /* getHostFromUrl */.getHostFromUrl(scriptURL);
  }
  const _default = getConstants.default;
})("localhost");
const obj7 = { reactotronLibraryName: "reactotron-react-native", reactotronLibraryVersion: "REACTOTRON_REACT_NATIVE_VERSION", platform: get_ActivityIndicator.Platform.OS, platformVersion: get_ActivityIndicator.Platform.Version, osRelease, model, serverHost, forceTouch, interfaceIdiom, systemName, uiMode, serial, reactNativeVersion: result.default() };
const merged = Object.assign(obj7, result1.default());
obj6.client = merged;
// CreateGeneratorClosureLongIndex (0x67)
let closure_14 = asyncGeneratorStep(merged);
function getClientId() {
  return callback2(...arguments);
}
obj6.getClientId = getClientId;
// CreateGeneratorClosureLongIndex (0x67)
let closure_13 = asyncGeneratorStep(getClientId);
obj6.setClientId = function setClientId(payload) {
  return callback(...arguments);
};
obj6.proxyHack = true;
const items = [result2.default(), result5.default(), result9.default(), result4.default(), result3.default(), result6.default(), result7.default(), result8.default()];
const client = require("keys").createClient(obj6);
client.useReactNative = () => {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    if (false !== first.errors) {
      client.use(result5.default(getPluginOptions(first.errors)));
    }
    if (false !== first.log) {
      client.use(result9.default());
    }
    if (false !== first.editor) {
      client.use(result4.default(getPluginOptions(first.editor)));
    }
    if (false !== first.overlay) {
      client.use(result3.default());
    }
    if (false !== first.asyncStorage) {
      client.use(result2.default(getPluginOptions(first.asyncStorage)));
    }
    if (false !== first.networking) {
      client.use(result6.default(getPluginOptions(first.networking)));
    }
    if (false !== first.storybook) {
      client.use(result7.default());
    }
    if (false !== first.devTools) {
      client.use(result8.default());
    }
    return client;
  }
  first = {};
};
client.setAsyncStorageHandler = (asyncStorageHandler) => {
  client.asyncStorageHandler = asyncStorageHandler;
  return client;
};

export const asyncStorage = result6.default;
export const devTools = result6.default;
export const networking = result6.default;
export const openInEditor = result4.default;
export const overlay = result3.default;
export const storybook = result7.default;
export const trackGlobalErrors = result5.default;
export const trackGlobalLogs = result9.default;
export const reactNativeCorePlugins = items;
export default client;
