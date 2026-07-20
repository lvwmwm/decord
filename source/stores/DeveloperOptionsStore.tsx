// Module ID: 683
// Function ID: 8403
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 683 (_isNativeReflectConstruct)
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
  const Storage = arg1(dependencyMap[11]).Storage;
  const result1 = Storage.set(closure_11, obj);
}
function setRoutingKeyTags(arg0) {
  let closure_15 = arg0;
  const Storage = arg1(dependencyMap[11]).Storage;
  const result = Storage.set(closure_14, closure_15);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const UserFlags = arg1(dependencyMap[5]).UserFlags;
let closure_10 = () => {
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
            let callback2 = setTimeout(closure_3, closure_2.fail());
          } else {
            closure_2.succeed();
            const _setTimeout = setTimeout;
            callback2 = setTimeout(closure_3, status.body.sourceMapCookieTTLSeconds * callback2(closure_3[7]).Millis.SECOND * 0.75);
          }
        }
      }
      callback2 = null;
      const result = callback(closure_3[10]).setDeveloperOptionSettings({ sourceMapsEnabled: false });
    }, () => {
      const timeout = setTimeout(closure_3, closure_2.fail());
    });
  }
  let closure_0 = "" + location.protocol + "//" + location.host + "/__development/source_maps";
  const importDefault = null;
  let tmp = importDefault(refreshSourceMapCookie[6]);
  const result = 5 * importDefault(refreshSourceMapCookie[7]).Millis.SECOND;
  tmp = new tmp(result, importDefault(refreshSourceMapCookie[7]).Millis.MINUTE, true);
  const importAll = tmp;
  return {
    set(arg0) {
      if (arg0 !== null != timeout) {
        if (arg0) {
          const _setTimeout = setTimeout;
          let timeout = setTimeout(refreshSourceMapCookie, 0);
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
}();
let closure_11 = "DeveloperOptionsStore";
let obj = {};
obj = {};
const merged = Object.assign(obj);
let closure_14 = "DeveloperOptionsRoutingKey";
let closure_15 = [];
let tmp3 = (Store) => {
  class DeveloperOptionsStore {
    constructor() {
      self = this;
      tmp = closure_4(this, DeveloperOptionsStore);
      obj = closure_7(DeveloperOptionsStore);
      tmp2 = closure_6;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = DeveloperOptionsStore;
  callback2(DeveloperOptionsStore, Store);
  let obj = {
    key: "initialize",
    value: function initialize() {
      const Storage = DeveloperOptionsStore(closure_3[11]).Storage;
      let value = Storage.get(closure_11);
      if (null != value) {
        const obj = {};
        const merged = Object.assign(closure_12);
        const merged1 = Object.assign(value);
      }
      const Storage2 = DeveloperOptionsStore(closure_3[11]).Storage;
      value = Storage2.get(closure_14);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isTracingRequests",
    get() {
      return closure_13.trace;
    }
  };
  items[1] = obj;
  obj = {
    key: "isForcedCanary",
    get() {
      return closure_13.canary;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isLoggingGatewayEvents",
    get() {
      return closure_13.logGatewayEvents;
    }
  };
  items[4] = {
    key: "isLoggingOverlayEvents",
    get() {
      return closure_13.logOverlayEvents;
    }
  };
  items[5] = {
    key: "isLoggingAnalyticsEvents",
    get() {
      return closure_13.logAnalyticsEvents;
    }
  };
  items[6] = {
    key: "isAxeEnabled",
    get() {
      return closure_13.axeEnabled;
    }
  };
  items[7] = {
    key: "cssDebuggingEnabled",
    get() {
      return closure_13.cssDebuggingEnabled;
    }
  };
  items[8] = {
    key: "layoutDebuggingEnabled",
    get() {
      return closure_13.layoutDebuggingEnabled;
    }
  };
  items[9] = {
    key: "sourceMapsEnabled",
    get() {
      return closure_13.sourceMapsEnabled;
    }
  };
  items[10] = {
    key: "isBugReporterEnabled",
    get() {
      return closure_13.bugReporterEnabled;
    }
  };
  items[11] = {
    key: "isIdleStatusIndicatorEnabled",
    get() {
      return closure_13.idleStatusIndicatorEnabled;
    }
  };
  items[12] = {
    key: "onlyShowPreviewAppCollections",
    get() {
      return closure_13.onlyShowPreviewAppCollections;
    }
  };
  items[13] = {
    key: "disableAppCollectionsCache",
    get() {
      return closure_13.disableAppCollectionsCache;
    }
  };
  items[14] = {
    key: "isStreamInfoOverlayEnabled",
    get() {
      return closure_13.isStreamInfoOverlayEnabled;
    }
  };
  items[15] = {
    key: "preventPopoutClose",
    get() {
      return closure_13.preventPopoutClose;
    }
  };
  items[16] = {
    key: "logKeyboardMismatches",
    get() {
      return closure_13.logKeyboardMismatches;
    }
  };
  items[17] = {
    key: "alertStartupMetrics",
    get() {
      return closure_13.alertStartupMetrics;
    }
  };
  items[18] = {
    key: "isLoggingQuestEvents",
    get() {
      return closure_13.logQuestEvents;
    }
  };
  items[19] = {
    key: "getDebugOptionsHeaderValue",
    value: function getDebugOptionsHeaderValue() {
      const keys = Object.keys(closure_13);
      const mapped = keys.map((arg0) => closure_13[arg0]);
      const keys1 = Object.keys(closure_13);
      const found = keys1.filter((arg0) => closure_13[arg0]);
      return found.join(",");
    }
  };
  items[20] = {
    key: "routingKeyTags",
    get() {
      return closure_15;
    }
  };
  items[21] = {
    key: "getRoutingKeyHeaderValue",
    value: function getRoutingKeyHeaderValue() {
      let joined = null;
      if (0 !== closure_15.length) {
        joined = closure_15.join(",");
      }
      return joined;
    }
  };
  return callback(DeveloperOptionsStore, items);
}(importDefault(dependencyMap[13]).Store);
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
    let obj = importDefault(dependencyMap[12]);
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
tmp3 = new tmp3(importDefault(dependencyMap[14]), obj);
const result = arg1(dependencyMap[15]).fileFinishedImporting("stores/DeveloperOptionsStore.tsx");

export default tmp3;
