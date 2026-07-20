// Module ID: 13206
// Function ID: 100189
// Name: getPluginOptions
// Dependencies: []

// Module 13206 (getPluginOptions)
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
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
let closure_3 = _interopRequireDefault(require(dependencyMap[2]));
const result = _interopRequireDefault(require(dependencyMap[3]));
const result1 = _interopRequireDefault(require(dependencyMap[4]));
const result2 = _interopRequireDefault(require(dependencyMap[5]));
const result3 = _interopRequireDefault(require(dependencyMap[6]));
const result4 = _interopRequireDefault(require(dependencyMap[7]));
const result5 = _interopRequireDefault(require(dependencyMap[8]));
const result6 = _interopRequireDefault(require(dependencyMap[9]));
const result7 = _interopRequireDefault(require(dependencyMap[10]));
const result8 = _interopRequireDefault(require(dependencyMap[11]));
const result9 = _interopRequireDefault(require(dependencyMap[12]));
const defaultResult = require(dependencyMap[13])();
const model = defaultResult.model;
const systemName = defaultResult.systemName;
const obj6 = {
  0: true,
  9223372036854775807: true,
  9223372036854775807: true,
  0: true,
  9223372036854775807: true,
  createSocket(url) {
    const webSocket = new WebSocket(url);
    return webSocket;
  }
};
({ osRelease, serverHost, forceTouch, interfaceIdiom, uiMode, serial } = defaultResult);
obj6.host = function getHost(localhost) {
  const scriptURL = mod.default.getConstants().scriptURL;
  if ("string" !== typeof scriptURL) {
    const _Error = Error;
    const error = new Error("Invalid non-string URL");
    throw error;
  } else {
    return require(dependencyMap[14]).getHostFromUrl(scriptURL);
  }
  const _default = mod.default;
}("localhost");
const obj7 = { verticalAlign: false, flexDirection: false, platform: _module1.Platform.OS, platformVersion: _module1.Platform.Version, osRelease, model, serverHost, forceTouch, interfaceIdiom, systemName, uiMode, serial, reactNativeVersion: result.default() };
const merged = Object.assign(obj7, result1.default());
obj6.client = merged;
// CreateGeneratorClosureLongIndex (0x67)
let closure_14 = _module(merged);
function getClientId() {
  return callback2(...arguments);
}
obj6.getClientId = getClientId;
// CreateGeneratorClosureLongIndex (0x67)
let closure_13 = _module(getClientId);
obj6.setClientId = function setClientId(payload) {
  return callback(...arguments);
};
obj6.proxyHack = true;
const items = [result2.default(), result5.default(), result9.default(), result4.default(), result3.default(), result6.default(), result7.default(), result8.default()];
const client = require(dependencyMap[15]).createClient(obj6);
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
