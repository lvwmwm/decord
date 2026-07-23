// Module ID: 683
// Function ID: 8407
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 561, 664, 507, 684, 685, 587, 1184, 566, 686, 2]

// Module 683 (_isNativeReflectConstruct)
import Backoff from "Backoff";
import set from "set";
import closure_6 from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { UserFlags } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function setOptions(arg0) {
  const obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(obj);
  const merged2 = Object.assign(arg0);
  const result = store.set(obj.sourceMapsEnabled);
  const Storage = require(587) /* Storage */.Storage;
  const result1 = Storage.set(DeveloperOptionsStore, obj);
}
function setRoutingKeyTags(arg0) {
  let closure_15 = arg0;
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set(DeveloperOptionsRoutingKey, closure_15);
}
let closure_10 = (() => {
  function refreshSourceMapCookie() {
    const HTTP = callback(refreshSourceMapCookie[8]).HTTP;
    let obj = { url: callback };
    obj = { Authorization: tmp(refreshSourceMapCookie[9]).getToken() };
    obj.headers = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = true;
    const obj3 = tmp(refreshSourceMapCookie[9]);
    HTTP.put(obj).then((status) => {
      if (401 !== status.status) {
        if (403 !== status.status) {
          if (200 !== status.status) {
            const _setTimeout2 = setTimeout;
            let outer1_1 = setTimeout(outer1_3, outer1_2.fail());
          } else {
            outer1_2.succeed();
            const _setTimeout = setTimeout;
            outer1_1 = setTimeout(outer1_3, status.body.sourceMapCookieTTLSeconds * callback2(refreshSourceMapCookie[7]).Millis.SECOND * 0.75);
          }
        }
      }
      outer1_1 = null;
      const result = callback(refreshSourceMapCookie[10]).setDeveloperOptionSettings({ sourceMapsEnabled: false });
    }, () => {
      const outer1_1 = setTimeout(outer1_3, outer1_2.fail());
    });
  }
  let closure_0 = "" + location.protocol + "//" + location.host + "/__development/source_maps";
  const importDefault = null;
  let tmp = importDefault(refreshSourceMapCookie[6]);
  let result = 5 * importDefault(refreshSourceMapCookie[7]).Millis.SECOND;
  tmp = new tmp(result, importDefault(refreshSourceMapCookie[7]).Millis.MINUTE, true);
  const importAll = tmp;
  return {
    set(arg0) {
      if (arg0 !== null != timeout) {
        if (arg0) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(refreshSourceMapCookie, 0);
        } else {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          timeout = null;
          const HTTP = callback(refreshSourceMapCookie[8]).HTTP;
          let obj = { url: callback };
          obj = { Authorization: timeout(refreshSourceMapCookie[9]).getToken() };
          obj.headers = obj;
          obj.oldFormErrors = true;
          obj.rejectWithError = true;
          HTTP.del(obj);
          const obj3 = timeout(refreshSourceMapCookie[9]);
        }
      }
    }
  };
})();
const DeveloperOptionsStore = "DeveloperOptionsStore";
let obj = { trace: false, canary: false, logGatewayEvents: false, logOverlayEvents: false, logAnalyticsEvents: false, sourceMapsEnabled: false, axeEnabled: false, cssDebuggingEnabled: false, layoutDebuggingEnabled: false, bugReporterEnabled: true, idleStatusIndicatorEnabled: false, onlyShowPreviewAppCollections: false, disableAppCollectionsCache: false, isStreamInfoOverlayEnabled: false, preventPopoutClose: false, logKeyboardMismatches: false, alertStartupMetrics: false, logQuestEvents: false };
obj = {};
let merged = Object.assign(obj);
const DeveloperOptionsRoutingKey = "DeveloperOptionsRoutingKey";
let closure_15 = [];
let tmp3 = ((Store) => {
  class DeveloperOptionsStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, DeveloperOptionsStore);
      obj = outer1_7(DeveloperOptionsStore);
      tmp2 = outer1_6;
      if (outer1_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(DeveloperOptionsStore, Store);
  let obj = {
    key: "initialize",
    value: function initialize() {
      const Storage = DeveloperOptionsStore(outer1_3[11]).Storage;
      let value = Storage.get(outer1_11);
      if (null != value) {
        const obj = {};
        const merged = Object.assign(outer1_12);
        const merged1 = Object.assign(value);
        const outer1_13 = obj;
      }
      const Storage2 = DeveloperOptionsStore(outer1_3[11]).Storage;
      value = Storage2.get(outer1_14);
      if (null != value) {
        const outer1_15 = value;
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isTracingRequests",
    get() {
      return outer1_13.trace;
    }
  };
  items[1] = obj;
  obj = {
    key: "isForcedCanary",
    get() {
      return outer1_13.canary;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isLoggingGatewayEvents",
    get() {
      return outer1_13.logGatewayEvents;
    }
  };
  items[4] = {
    key: "isLoggingOverlayEvents",
    get() {
      return outer1_13.logOverlayEvents;
    }
  };
  items[5] = {
    key: "isLoggingAnalyticsEvents",
    get() {
      return outer1_13.logAnalyticsEvents;
    }
  };
  items[6] = {
    key: "isAxeEnabled",
    get() {
      return outer1_13.axeEnabled;
    }
  };
  items[7] = {
    key: "cssDebuggingEnabled",
    get() {
      return outer1_13.cssDebuggingEnabled;
    }
  };
  items[8] = {
    key: "layoutDebuggingEnabled",
    get() {
      return outer1_13.layoutDebuggingEnabled;
    }
  };
  items[9] = {
    key: "sourceMapsEnabled",
    get() {
      return outer1_13.sourceMapsEnabled;
    }
  };
  items[10] = {
    key: "isBugReporterEnabled",
    get() {
      return outer1_13.bugReporterEnabled;
    }
  };
  items[11] = {
    key: "isIdleStatusIndicatorEnabled",
    get() {
      return outer1_13.idleStatusIndicatorEnabled;
    }
  };
  items[12] = {
    key: "onlyShowPreviewAppCollections",
    get() {
      return outer1_13.onlyShowPreviewAppCollections;
    }
  };
  items[13] = {
    key: "disableAppCollectionsCache",
    get() {
      return outer1_13.disableAppCollectionsCache;
    }
  };
  items[14] = {
    key: "isStreamInfoOverlayEnabled",
    get() {
      return outer1_13.isStreamInfoOverlayEnabled;
    }
  };
  items[15] = {
    key: "preventPopoutClose",
    get() {
      return outer1_13.preventPopoutClose;
    }
  };
  items[16] = {
    key: "logKeyboardMismatches",
    get() {
      return outer1_13.logKeyboardMismatches;
    }
  };
  items[17] = {
    key: "alertStartupMetrics",
    get() {
      return outer1_13.alertStartupMetrics;
    }
  };
  items[18] = {
    key: "isLoggingQuestEvents",
    get() {
      return outer1_13.logQuestEvents;
    }
  };
  items[19] = {
    key: "getDebugOptionsHeaderValue",
    value: function getDebugOptionsHeaderValue() {
      const keys = Object.keys(outer1_13);
      const mapped = keys.map((arg0) => outer2_13[arg0]);
      const keys1 = Object.keys(outer1_13);
      const found = keys1.filter((arg0) => outer2_13[arg0]);
      return found.join(",");
    }
  };
  items[20] = {
    key: "routingKeyTags",
    get() {
      return outer1_15;
    }
  };
  items[21] = {
    key: "getRoutingKeyHeaderValue",
    value: function getRoutingKeyHeaderValue() {
      let joined = null;
      if (0 !== outer1_15.length) {
        joined = outer1_15.join(",");
      }
      return joined;
    }
  };
  return callback(DeveloperOptionsStore, items);
})(require("initialize").Store);
tmp3.displayName = "DeveloperOptionsStore";
obj = {
  LOGOUT: function handleLogout(arg0) {
    setOptions(obj);
    setRoutingKeyTags([]);
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    const flags = user.user.flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    let str = tmp;
    if ((num & UserFlags.STAFF) !== UserFlags.STAFF) {
      str = null != user.user.personal_connection_id;
    }
    if ((num & UserFlags.STAFF) === UserFlags.STAFF) {
      const result = store.set(obj.sourceMapsEnabled);
    }
    obj = importDefault(1184);
    obj = { isStaff: str.toString() };
    obj.setTags(obj);
  },
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: function handleUpdateSettings(settings) {
    setOptions(settings.settings);
  },
  DEVELOPER_OPTIONS_SET_ROUTING_KEY: function handleSetRoutingKey(tags) {
    setRoutingKeyTags(tags.tags);
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/DeveloperOptionsStore.tsx");

export default tmp3;
