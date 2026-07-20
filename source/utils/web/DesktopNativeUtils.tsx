// Module ID: 5408
// Function ID: 46112
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 5408 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function sanitizeFilename(arg0) {
  const str = decodeURIComponent(arg0);
  const str2 = decodeURIComponent(arg0).replace(closure_19, "$1");
  return decodeURIComponent(arg0).replace(closure_19, "$1").replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2").replace(closure_18, "_");
}
function getFileData() {
  return _getFileData(...arguments);
}
async function _getFileData(arg0, arg1) {
  const request = new Request(arg0, {});
  const obj = yield fetch(request);
  callback(closure_2[3])(200 === obj.status, "Data fetch unsuccessful");
  const tmp3 = yield obj.arrayBuffer();
  callback(closure_2[3])(null != tmp3, "Data is null");
  return tmp3;
}
function getImageData(arg0, arg1, width, height) {
  return getFileData(arg0);
}
function normalizeRunningGame(id) {
  let name2;
  let pidPath;
  let sandboxed;
  let windowHandle;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_12;
  }
  const obj = {};
  id = id.id;
  let str = "";
  let str2 = "";
  if (null != id) {
    str2 = id;
  }
  obj.id = tmp[str2];
  const id2 = id.id;
  let tmp2 = str;
  if (null != id2) {
    tmp2 = id2;
  }
  obj.nativeProcessObserverId = parseInt(tmp2, 10);
  let name = id.gameName;
  if (null == name) {
    name = id.name;
  }
  obj.name = name;
  ({ origGameName: obj.origGameName, name: name2 } = id);
  if (null != name2) {
    str = name2;
  }
  obj.processName = str;
  ({ hidden: obj.hidden, elevated: obj.elevated, sandboxed } = id);
  obj.sandboxed = null != sandboxed && sandboxed;
  ({ lastFocused: obj.lastFocused, exePath: obj.exePath, exeName: obj.exeName, cmdLine: obj.cmdLine, distributor: obj.distributor, sku: obj.sku, pid: obj.pid, pidPath } = id);
  if (null == pidPath) {
    pidPath = [];
  }
  obj.pidPath = pidPath;
  ({ gameMetadata: obj.gameMetadata, windowHandle } = id);
  let tmp3 = null;
  if (null != windowHandle) {
    tmp3 = windowHandle;
  }
  obj.windowHandle = tmp3;
  let UNKNOWN = id.fullscreenType;
  if (null == UNKNOWN) {
    UNKNOWN = arg1(dependencyMap[4]).RunningProcessFullscreenType.UNKNOWN;
  }
  obj.fullscreenType = UNKNOWN;
  const isLauncher = id.isLauncher;
  obj.isLauncher = null != isLauncher && isLauncher;
  obj.executableFingerprint = id.executableFingerprint;
  return obj;
}
function decideFileExtension(closure_0, str) {
  if (null != str) {
    if (str.startsWith("image/")) {
      const str3 = str.split("/")[1];
      let formatted;
      if (null != str3) {
        formatted = str3.toLowerCase();
      }
      if ("jpeg" === formatted) {
        return "jpg";
      } else if (null != formatted) {
        return formatted;
      }
    }
  }
  const toURLSafeResult = importDefault(dependencyMap[5]).toURLSafe(closure_0);
  if (null != toURLSafeResult) {
    let formatted1;
    if (null != toURLSafeResult.pathname) {
      const parts = str5.split(".");
      if (null != parts) {
        const str7 = parts.pop();
        if (null != str7) {
          formatted1 = str7.toLowerCase();
        }
      }
    }
    let tmp4;
    if (null != formatted1) {
      if (formatted1.length <= 5) {
        tmp4 = formatted1;
      }
    }
    return tmp4;
  }
  const obj = importDefault(dependencyMap[5]);
}
function backwardCompatSend(APP_ASYNC_INDEX_TSX_LOADED) {
  const obj = arg1(dependencyMap[6]);
  if (obj.isDesktop()) {
    obj.sendIPC(APP_ASYNC_INDEX_TSX_LOADED);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const NativeFeatures = arg1(dependencyMap[2]).NativeFeatures;
const set = new Set([]);
const set1 = new Set([]);
let closure_9 = null;
let buildNumber = null;
let moduleVersions = null;
let closure_12 = {};
let closure_13 = false;
let closure_14 = {};
if (null != DiscordNative) {
  const app = DiscordNative.app;
  const parts = app.getVersion().split(".");
  closure_9 = parts.map((replaced) => parseInt(replaced));
  const app2 = DiscordNative.app;
  moduleVersions = app2.getModuleVersions();
  const app3 = DiscordNative.app;
  buildNumber = app3.getBuildNumber();
  const str = app.getVersion();
}
new Set([]);
let closure_15 = false;
let closure_16 = null;
let closure_17 = "lastImageSaveDirectory";
let closure_18 = /[<>:"/\\|?*@]/g;
let closure_19 = /(\.[a-zA-Z0-9]+):[^.]*$/;
let closure_20 = /(\.[a-zA-Z0-9]+)%3A.+$/;
let closure_21 = /[^a-zA-Z0-9]/g;
let closure_22 = /\.[^.]*$/;
let obj = { SAVED: "saved", CANCELED: "canceled", ERRORED: "errored" };
obj = {
  requireModule(arg0) {
    if (closure_13) {
      if (closure_14.hasOwnProperty(arg0)) {
        if (null != closure_14[arg0]) {
          return closure_14[arg0];
        }
      }
    }
    const nativeModules = DiscordNative.nativeModules;
    const requireModuleResult = nativeModules.requireModule(arg0);
    if (closure_13) {
      closure_14[arg0] = requireModuleResult;
    }
    return requireModuleResult;
  },
  ensureModule(discord_voice) {
    if (arg1(dependencyMap[6]).isPlatformEmbedded) {
      const nativeModules = DiscordNative.nativeModules;
      let ensureModuleResult = nativeModules.ensureModule(discord_voice);
    } else {
      const _Error = Error;
      const error = new Error("not embedded");
      ensureModuleResult = Promise.reject(error);
    }
    return ensureModuleResult;
  }
};
Object.defineProperty(obj, "canBootstrapNewUpdater", { get: () => DiscordNative.nativeModules.canBootstrapNewUpdater || false, set: undefined });
obj.getCrashReporterMetadata = function getCrashReporterMetadata() {
  const crashReporter = DiscordNative.crashReporter;
  return crashReporter.getMetadata();
};
obj.getSetting = function getSetting(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  return callback3(async () => {
    const settings = settings.settings;
    return yield settings.get(closure_0, closure_1);
  })();
};
obj.beforeUnload = function beforeUnload() {
  const self = this;
  const requireModuleResult = this.requireModule("discord_overlay2");
  while (true) {
    let tmp = requireModuleResult;
    let reset = requireModuleResult;
    if (!requireModuleResult) {
      break;
    } else {
      let tmp2 = requireModuleResult;
      reset = requireModuleResult.reset;
      // break
    }
    if (reset) {
      let tmp3 = requireModuleResult;
      let resetResult = requireModuleResult.reset();
    }
    let tmp5 = requireModuleResult;
    let disconnectAllProcesses = requireModuleResult;
    if (requireModuleResult) {
      let tmp6 = requireModuleResult;
      disconnectAllProcesses = requireModuleResult.disconnectAllProcesses;
    }
    let destroyHostProcess = disconnectAllProcesses;
    if (disconnectAllProcesses) {
      let tmp7 = requireModuleResult;
      destroyHostProcess = requireModuleResult.destroyHostProcess;
    }
    if (destroyHostProcess) {
      let tmp8 = requireModuleResult;
      let result = requireModuleResult.disconnectAllProcesses();
      let destroyHostProcessResult = requireModuleResult.destroyHostProcess();
    }
    let tmp11 = DiscordNative;
    let powerMonitor = DiscordNative.powerMonitor;
    let removeAllListenersResult = powerMonitor.removeAllListeners();
    let tmp13 = globalThis;
    let _window = window;
    let _window2 = window;
    let tmp14 = window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
    let tmp15 = tmp14;
    if (tmp14) {
      let tmp16 = arg1;
      let tmp17 = dependencyMap;
      let num = 7;
      let Storage = arg1(dependencyMap[7]).Storage;
      let num2 = 8;
      let flag = true;
      tmp15 = true !== Storage.get(arg1(dependencyMap[8]).DOMAIN_MIGRATION_SUCCESS_KEY);
    }
    let supportsFeatureResult = tmp15;
    if (tmp15) {
      let tmp19 = NativeFeatures;
      supportsFeatureResult = self.supportsFeature(NativeFeatures.USER_DATA_CACHE);
    }
    if (supportsFeatureResult) {
      let tmp20 = DiscordNative;
      let userDataCache = DiscordNative.userDataCache;
      let tmp21 = arg1;
      let tmp22 = dependencyMap;
      let num3 = 7;
      let Storage2 = arg1(dependencyMap[7]).Storage;
      let cacheUserDataResult = userDataCache.cacheUserData(Storage2.stringify());
    }
  }
};
obj.inputEventRegister = function inputEventRegister(parsed, arr, arg2, arg3) {
  const discordUtils = this.getDiscordUtils();
  parsed = parseInt("" + parsed);
  discordUtils.inputEventRegister(parsed, arr.map((arg0) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = arg0;
    if ("string" === typeof tmp3) {
      const items = [tmp, tmp2, tmp3];
      let items1 = items;
    } else {
      items1 = [tmp, tmp2];
    }
    return items1;
  }), arg2, arg3);
};
obj.inputEventUnregister = function inputEventUnregister(replaced) {
  const discordUtils = this.getDiscordUtils();
  discordUtils.inputEventUnregister(parseInt(replaced));
};
obj.setOnInputEventCallback = function setOnInputEventCallback(arg0) {
  const self = this;
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const discordUtils = self.getDiscordUtils();
    discordUtils.inputWatchAll(arg0);
  }
};
obj.setFocused = function setFocused(arg0) {
  const discordUtils = this.getDiscordUtils();
  discordUtils.inputSetFocused(arg0);
};
obj.setObservedGamesCallback = function setObservedGamesCallback(mapped, normalizeCallback) {
  normalizeCallback = arg2;
  normalizeCallback = function normalizeCallback(arr) {
    return arg2(arr.map((arg0) => callback(arg0, closure_2)));
  };
  let closure_12 = {};
  let closure_1 = 0;
  const discordUtils = this.getDiscordUtils();
  mapped = mapped.map((id) => {
    const sum = closure_1 + 1;
    closure_1 = sum;
    if (null != id.id) {
      closure_12[sum] = id.id;
    }
    const obj = {};
    const merged = Object.assign(id);
    obj["cmdline"] = id.cmdLine;
    obj["id"] = sum;
    return obj;
  });
  let closure_2 = closure_12;
  let tmp3 = tmp2;
  if (null != arg3) {
    tmp3 = null != discordUtils.setProcessObserverUserId;
  }
  if (tmp3) {
    const result = discordUtils.setProcessObserverUserId(arg3);
  }
  if (normalizeCallback) {
    if (null != discordUtils.setObservedGamesCallback2) {
      const result1 = discordUtils.setObservedGamesCallback2(mapped, normalizeCallback);
    }
  }
  const result2 = discordUtils.setObservedGamesCallback(mapped, normalizeCallback);
};
obj.setProcessObserverCollectExecutableFingerprint = function setProcessObserverCollectExecutableFingerprint(arg0) {
  const discordUtils = this.getDiscordUtils();
  const setProcessObserverCollectExecutableFingerprint = discordUtils.setProcessObserverCollectExecutableFingerprint;
  if (null != setProcessObserverCollectExecutableFingerprint) {
    setProcessObserverCollectExecutableFingerprint.call(discordUtils, arg0);
  }
};
obj.getExecutableFingerprintForProcess = function getExecutableFingerprintForProcess(arg0) {
  const arg1 = this;
  const importDefault = arg0;
  return new Promise((arg0) => {
    const self = arg0;
    const discordUtils = self.getDiscordUtils();
    let prop;
    if (null != discordUtils) {
      prop = discordUtils.getExecutableFingerprintForProcess;
    }
    if (null != prop) {
      prop(arg0, (arg0) => {
        let tmp2 = null;
        if (null != arg0) {
          tmp2 = null;
          if ("" !== arg0) {
            tmp2 = arg0;
          }
        }
        return arg0(tmp2);
      });
    } else {
      arg0(null);
    }
  });
};
obj.setGameDetectionCallback = function setGameDetectionCallback(arg0) {
  const arg1 = arg0;
  const discordUtils = this.getDiscordUtils();
  if (null != discordUtils.setGameDetectionCallback) {
    setGameDetectionCallback.call(discordUtils, (arr, arr2) => {
      const mapped = arr.map((arg0) => callback(arg0));
      return arr(mapped, arr2.map((arg0) => callback(arg0)));
    });
  }
};
obj.setGameDetectionErrorCallback = function setGameDetectionErrorCallback(arg0) {
  const discordUtils = this.getDiscordUtils();
  if (null != discordUtils.setGameDetectionErrorCallback) {
    setGameDetectionErrorCallback.call(discordUtils, arg0);
  }
};
obj.setRobloxSubgameDetectionConfig = function setRobloxSubgameDetectionConfig(arg0, arg1) {
  const discordUtils = this.getDiscordUtils();
  const setRobloxSubgameDetectionConfig = discordUtils.setRobloxSubgameDetectionConfig;
  if (null != setRobloxSubgameDetectionConfig) {
    setRobloxSubgameDetectionConfig.call(discordUtils, arg0, arg1);
  }
};
obj.checkForRobloxSubgameUpdate = function checkForRobloxSubgameUpdate() {
  const discordUtils = this.getDiscordUtils();
  const checkForRobloxSubgameUpdate = discordUtils.checkForRobloxSubgameUpdate;
  if (null != checkForRobloxSubgameUpdate) {
    checkForRobloxSubgameUpdate.call(discordUtils);
  }
};
obj.setCandidateGamesCallback = function setCandidateGamesCallback(arg0) {
  const arg1 = arg0;
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setCandidateGamesCallback((arr) => {
    arr(arr.map((arg0) => callback(arg0)));
  });
};
obj.clearCandidateGamesCallback = function clearCandidateGamesCallback() {
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.clearCandidateGamesCallback();
};
obj.setGameCandidateOverrides = function setGameCandidateOverrides(arr) {
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setGameCandidateOverrides(arr.map((id) => {
    const obj = {};
    const merged = Object.assign(id);
    obj["gameId"] = id.id;
    obj["gameName"] = id.name;
    return obj;
  }));
};
obj.setObserverDebugCallback = function setObserverDebugCallback(arg0, NONE, arg2) {
  NONE = arg0;
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setObserverDebugCallback((arg0) => arg0(arg0), NONE, arg2);
};
obj.clearObserverDebugCallback = function clearObserverDebugCallback() {
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setObserverDebugCallback(null, arg1(dependencyMap[9]).GameDetectionDebugLevel.NONE, 0);
};
obj.shouldDisplayNotifications = function shouldDisplayNotifications() {
  const discordUtils = this.getDiscordUtils();
  return discordUtils.shouldDisplayNotifications();
};
obj.getVoiceEngine = function getVoiceEngine() {
  const requireModuleResult = this.requireModule("discord_voice");
  const arg1 = requireModuleResult;
  if (!closure_15) {
    arg1(dependencyMap[10]).setNativeLogFn((arg0, arg1, arg2) => {
      requireModuleResult.consoleLog(arg1, "[" + arg0 + "] " + arg2);
    });
    const obj = arg1(dependencyMap[10]);
  }
  closure_15 = true;
  return requireModuleResult;
};
obj.getDiscordUtils = function getDiscordUtils() {
  const self = this;
  if (!closure_15) {
    const voiceEngine = self.getVoiceEngine();
  }
  self.requireModule("discord_utils");
};
obj.isSystemDarkMode = function isSystemDarkMode() {
  const self = this;
  const tmp = !arg1(dependencyMap[6]).isWindows();
  let tmp2 = !tmp;
  if (!tmp) {
    const discordUtils = self.getDiscordUtils();
    const isSystemDarkMode = discordUtils.isSystemDarkMode;
    let callResult;
    if (null != isSystemDarkMode) {
      callResult = isSystemDarkMode.call(discordUtils);
    }
    tmp2 = null == callResult || callResult;
    const tmp6 = null == callResult || callResult;
  }
  return tmp2;
};
obj.getDiscordIsElevated = function getDiscordIsElevated() {
  const self = this;
  let tmp = null;
  if (obj.isWindows()) {
    tmp = null;
    if (null != self.getDiscordUtils().getDiscordIsElevated) {
      if (null === discordIsElevated) {
        const discordUtils = self.getDiscordUtils();
        const discordIsElevated = discordUtils.getDiscordIsElevated();
      }
      tmp = discordIsElevated;
    }
  }
  return tmp;
};
obj.getGameUtils = function getGameUtils() {
  return this.requireModule("discord_game_utils");
};
obj.getCloudSync = function getCloudSync() {
  return this.requireModule("discord_cloudsync");
};
obj.getDispatch = function getDispatch() {
  return this.requireModule("discord_dispatch");
};
obj.setBadge = function setBadge(arg0) {
  const self = this;
  if ("darwin" === obj.getPlatformName()) {
    let str2 = "\u2022";
    if (-1 !== arg0) {
      str2 = "";
      if (arg0 > 0) {
        const _HermesInternal = HermesInternal;
        str2 = "" + arg0;
      }
    }
    const dock = DiscordNative.app.dock;
    dock.setBadge(str2);
  } else {
    if ("win32" === obj3.getPlatformName()) {
      self.sendIPC(arg1(dependencyMap[11]).IPCEvents.APP_BADGE_SET, arg0);
    } else {
      if ("linux" === obj2.getPlatformName()) {
        const app = DiscordNative.app;
        let num = 0;
        if (arg0 >= 0) {
          num = arg0;
        }
        app.setBadgeCount(num);
      }
      const obj2 = arg1(dependencyMap[6]);
    }
    const obj3 = arg1(dependencyMap[6]);
  }
};
obj.setSystemTrayIcon = function setSystemTrayIcon(arg0) {
  const self = this;
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    self.sendIPC(arg1(dependencyMap[11]).IPCEvents.SYSTEM_TRAY_SET_ICON, arg0);
  }
};
obj.setThumbarButtons = function setThumbarButtons(arg0, self) {
  self = this;
  if (self(dependencyMap[6]).isPlatformEmbedded) {
    const thumbar = DiscordNative.thumbar;
    if (!tmp3) {
      thumbar.setThumbarButtons(arg0, self.isSystemDarkMode());
    }
    const tmp3 = null == thumbar || null == thumbar.setThumbarButtons;
  }
};
obj.bounceDock = function bounceDock(arg0) {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const app = DiscordNative.app;
    const arg1 = app;
    if (null != app.dock) {
      const dock = app.dock;
      let closure_1 = dock.bounce(arg0);
      return callback3(async () => {
        const dock = dock.dock;
        dock.cancelBounce(yield closure_1);
      });
    }
  }
};
obj.setSystemTrayApplications = function setSystemTrayApplications(arg0) {
  const self = this;
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    self.sendIPC(arg1(dependencyMap[11]).IPCEvents.SYSTEM_TRAY_SET_APPLICATIONS, arg0);
  }
};
Object.defineProperty(obj, "architecture", {
  get: () => {
    let str = "";
    if (arg1(dependencyMap[6]).isPlatformEmbedded) {
      str = DiscordNative.process.arch;
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(obj, "releaseChannel", {
  get: () => {
    let str = "";
    if (arg1(dependencyMap[6]).isPlatformEmbedded) {
      const app = DiscordNative.app;
      str = app.getReleaseChannel();
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(obj, "version", { get: () => closure_9, set: undefined });
Object.defineProperty(obj, "buildNumber", { get: () => closure_10, set: undefined });
Object.defineProperty(obj, "moduleVersions", { get: () => closure_11, set: undefined });
Object.defineProperty(obj, "parsedOSRelease", {
  get: () => {
    if (arg1(dependencyMap[6]).isPlatformEmbedded) {
      const parts = DiscordNative.os.release.split(".");
      let mapped = parts.map((replaced) => parseInt(replaced, 10));
      const str = DiscordNative.os.release;
    } else {
      mapped = [];
    }
    return mapped;
  },
  set: undefined
});
obj.copy = function copy(arg0) {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    clipboard.copy(arg0);
  }
};
obj.copyImage = function copyImage(arg0, closure_1) {
  closure_1 = arg0;
  const importDefault = closure_1;
  return callback3(async () => {
    callback2(closure_2[3])(callback(closure_2[6]).isPlatformEmbedded, "Copy image method called outside native app");
    callback2(closure_2[3])("function" === typeof closure_6.clipboard.copyImage, "Copy image not supported");
    const tmp = callback2(closure_2[3]);
    const tmp5 = callback3(callback, callback2);
    if (null != tmp5) {
      if (set.has(tmp5)) {
        const _HermesInternal = HermesInternal;
        let combined = "image." + tmp5;
      }
      const clipboard = closure_6.clipboard;
      const _Buffer = Buffer;
      clipboard.copyImage(Buffer.from(tmp4), combined);
    }
    combined = callback;
  })();
};
obj.copyImageBlob = function copyImageBlob(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  return callback3(async () => {
    const clipboard = clipboard.clipboard;
    clipboard.copyImage(Buffer.from(yield closure_0.arrayBuffer()), closure_1);
  })();
};
obj.canSaveImage = function canSaveImage(arg0, arg1) {
  if (null != arg0) {
    if (arg1(dependencyMap[6]).isPlatformEmbedded) {
      const tmp5 = decideFileExtension(arg0, arg1);
      let hasItem = null == tmp5;
      if (!hasItem) {
        hasItem = set1.has(tmp5);
      }
      return hasItem;
    }
  }
  return false;
};
obj.saveImage = function saveImage(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  return callback3(async () => {
    callback2(closure_2[3])(callback(closure_2[6]).isPlatformEmbedded, "Save image method called outside native app");
    const tmp = callback2(closure_2[3]);
    const toURLSafeResult = callback2(closure_2[5]).toURLSafe(callback);
    if (null == toURLSafeResult) {
      return constants.ERRORED;
    } else {
      const parts = toURLSafeResult.pathname.split("/");
      const arr = parts.pop();
      let str = "unknown";
      if (null != arr) {
        str = arr;
      }
      let str2 = callback3(str);
      const searchParams = toURLSafeResult.searchParams;
      const str4 = searchParams.get("format");
      if (null != str4) {
        const formatted = str4.replace(closure_21, "").toLowerCase();
        if (formatted.length > 0) {
          const _HermesInternal2 = HermesInternal;
          str2 = "" + str2.replace(closure_22, "") + "." + formatted;
        }
        const str9 = str4.replace(closure_21, "");
      } else if (!str2.includes(".")) {
        let tmp11 = callback4(callback, callback2);
        if (null == tmp11) {
          tmp11 = closure_2;
        }
        let str6 = "png";
        if (null != tmp11) {
          str6 = tmp11;
        }
        const _HermesInternal = HermesInternal;
        str2 = "" + str2 + "." + str6;
      }
      const _Buffer = Buffer;
      const fromResult = Buffer.from(yield closure_30(closure_0));
      const Storage = callback(closure_2[7]).Storage;
      const value = Storage.get(closure_17);
      if ("function" === typeof closure_6.fileManager.saveWithDialog2) {
        const fileManager2 = closure_6.fileManager;
        if (null != tmp25) {
          const tmp36 = tmp25;
        }
        const tmp37 = yield fileManager2.saveWithDialog2(fromResult, str2, tmp36);
        if (null == tmp37) {
          return constants.ERRORED;
        } else if (tmp37.canceledByUser) {
          return constants.CANCELED;
        } else {
          let directory = tmp37.directory;
        }
      } else {
        const fileManager = closure_6.fileManager;
        if (null != tmp25) {
          const tmp31 = tmp25;
        }
        directory = yield fileManager.saveWithDialog(fromResult, str2, tmp31);
      }
      if (null != directory) {
        if ("" !== directory) {
          const Storage2 = callback(closure_2[7]).Storage;
          const result = Storage2.set(closure_17, directory);
          let ERRORED = constants.SAVED;
        }
        return ERRORED;
      }
      ERRORED = constants.ERRORED;
      const str14 = toURLSafeResult.pathname;
    }
  })();
};
obj.saveFile = function saveFile(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  return callback3(async () => {
    callback2(closure_2[3])(callback(closure_2[6]).isPlatformEmbedded, "Save file method called outside native app");
    const tmp = callback2(closure_2[3]);
    const toURLSafeResult = callback2(closure_2[5]).toURLSafe(callback);
    if (null == toURLSafeResult) {
      return null;
    } else {
      if (null != callback2) {
        let arr = callback2;
      } else {
        const parts = toURLSafeResult.pathname.split("/");
        arr = parts.pop();
        const str = toURLSafeResult.pathname;
      }
      let str3 = "unknown";
      if (null != arr) {
        str3 = arr;
      }
      let tmp6 = str3;
      if (null == callback2) {
        tmp6 = callback3(str3);
      }
      const _Buffer = Buffer;
      const fileManager = fileManager.fileManager;
      const tmp12 = yield fileManager.saveWithDialog(Buffer.from(yield closure_28(closure_0)), tmp6, undefined);
      let tmp13 = null;
      if (null != tmp12) {
        tmp13 = tmp12;
      }
      return tmp13;
    }
    const obj = callback2(closure_2[5]);
  })();
};
obj.downloadMLModelFile = function downloadMLModelFile(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  return callback3(async () => {
    callback2(closure_2[3])(callback(closure_2[6]).isPlatformEmbedded, "Download ML model file method called outside native app");
    const tmp = callback2(closure_2[3]);
    const obj = callback2(closure_2[5]);
    callback2(closure_2[3])(callback2(closure_2[5]).toURLSafe(callback), "Could not download ML model, fileSrc was not a valid path");
    const fileManager = fileManager.fileManager;
    return yield fileManager.maybeDownloadMLModelFile(closure_0, closure_1, closure_2);
  })();
};
obj.stopMLModelDownloads = function stopMLModelDownloads() {
  const fileManager = DiscordNative.fileManager;
  fileManager.stopMLModelDownloads();
};
obj.canCheckMLModelFilesExist = function canCheckMLModelFilesExist() {
  return "function" === typeof DiscordNative.fileManager.checkMLModelFilesExist;
};
obj.checkMLModelFilesExist = function checkMLModelFilesExist(arg0) {
  const arg1 = arg0;
  return callback3(async () => {
    const fileManager = fileManager.fileManager;
    return yield fileManager.checkMLModelFilesExist(closure_0);
  })();
};
obj.cleanupUnusedMLModelFiles = function cleanupUnusedMLModelFiles(arg0) {
  const arg1 = arg0;
  return callback3(async () => {
    const fileManager = fileManager.fileManager;
    return yield fileManager.cleanupUnusedMLModelFiles(closure_0);
  })();
};
obj.downloadClipsFile = function downloadClipsFile(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  return callback3(async () => {
    callback2(closure_2[3])(callback(closure_2[6]).isPlatformEmbedded, "Download clips file method called outside native app");
    const tmp = callback2(closure_2[3]);
    const obj = callback2(closure_2[5]);
    callback2(closure_2[3])(callback2(closure_2[5]).toURLSafe(callback), "Could not download clips file, fileSrc was not a valid path");
    const fileManager = fileManager.fileManager;
    return yield fileManager.maybeDownloadClipsFile(closure_0, closure_1, closure_2);
  })();
};
obj.canCheckClipsFilesExist = function canCheckClipsFilesExist() {
  return "function" === typeof DiscordNative.fileManager.checkClipsFilesExist;
};
obj.checkClipsFilesExist = function checkClipsFilesExist(arg0) {
  const arg1 = arg0;
  return callback3(async () => {
    const fileManager = fileManager.fileManager;
    return yield fileManager.checkClipsFilesExist(closure_0);
  })();
};
obj.cleanupUnusedClipsFiles = function cleanupUnusedClipsFiles(arg0) {
  const arg1 = arg0;
  return callback3(async () => {
    const fileManager = fileManager.fileManager;
    return yield fileManager.cleanupUnusedClipsFiles(closure_0);
  })();
};
obj.getClipsDataDirSync = function getClipsDataDirSync() {
  const fileManager = DiscordNative.fileManager;
  return fileManager.getClipsDataDirSync();
};
obj.getClipsSentryDirSync = function getClipsSentryDirSync() {
  if (null != DiscordNative.fileManager.getClipsSentryDirSync) {
    const fileManager = DiscordNative.fileManager;
    return fileManager.getClipsSentryDirSync();
  }
};
obj.downloadOpenH264 = function downloadOpenH264(arg0, arg1, arg2, arg3) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  let closure_3 = arg3;
  return callback3(async () => {
    callback2(closure_2[3])(callback(closure_2[6]).isPlatformEmbedded, "Download OpenH264 file method called outside native app");
    const tmp = callback2(closure_2[3]);
    const obj = callback2(closure_2[5]);
    callback2(closure_2[3])(callback2(closure_2[5]).toURLSafe(callback), "Could not download OpenH264, fileSrc was not a valid path");
    const fileManager = fileManager.fileManager;
    return yield fileManager.maybeDownloadOpenH264(closure_0, closure_1, closure_2, closure_3);
  })();
};
obj.cleanupUnusedOpenH264Files = function cleanupUnusedOpenH264Files(items) {
  const arg1 = items;
  return callback3(async () => {
    const fileManager = fileManager.fileManager;
    return yield fileManager.cleanupUnusedOpenH264Files(closure_0);
  })();
};
obj.getOpenH264LibraryPath = function getOpenH264LibraryPath() {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    let openH264LibraryPathSync;
    if (null != DiscordNative.fileManager.getOpenH264LibraryPathSync) {
      const fileManager = DiscordNative.fileManager;
      openH264LibraryPathSync = fileManager.getOpenH264LibraryPathSync();
    }
    return openH264LibraryPathSync;
  }
};
obj.canCopyImage = function canCopyImage() {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    if ("function" !== typeof DiscordNative.clipboard.copyImage) {
      return false;
    } else {
      if (null != tmp) {
        const tmp5 = decideFileExtension(tmp, undefined);
        if (null != tmp5) {
          if (!set.has(tmp5)) {
            return false;
          }
        }
      }
      return true;
    }
  } else {
    return false;
  }
};
obj.cut = function cut() {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    clipboard.cut();
  }
};
obj.paste = function paste() {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    clipboard.paste();
  }
};
obj.readClipboard = function readClipboard() {
  let str = "";
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    str = clipboard.read();
  }
  return str;
};
obj.clipboardHasMixedContent = function clipboardHasMixedContent() {
  const tmp = !arg1(dependencyMap[6]).isPlatformEmbedded;
  let tmp2 = !tmp;
  if (!tmp) {
    let hasMixedContentResult;
    if (null != DiscordNative.clipboard.hasMixedContent) {
      const clipboard = DiscordNative.clipboard;
      hasMixedContentResult = clipboard.hasMixedContent();
    }
    tmp2 = null != hasMixedContentResult && hasMixedContentResult;
    const tmp7 = null != hasMixedContentResult && hasMixedContentResult;
  }
  return tmp2;
};
obj.on = function on(arg0, arg1) {
  const ipc = DiscordNative.ipc;
  ipc.on(arg0, arg1);
};
obj.onIPC = function onIPC(arg0, arg1) {
  const ipc = DiscordNative.ipc;
  ipc.on(arg0, arg1);
};
obj.invoke = function invoke(arg0, arg1) {
  const ipc = DiscordNative.ipc;
  const items = [arg0, ...HermesBuiltin.copyRestArgs()];
  return ipc.invoke.apply(items);
};
obj.invokeIPC = function invokeIPC(arg0, arg1) {
  const ipc = DiscordNative.ipc;
  const items = [arg0, ...HermesBuiltin.copyRestArgs()];
  return ipc.invoke.apply(items);
};
obj.send = function send(arg0, arg1) {
  const ipc = DiscordNative.ipc;
  const items = [arg0, ...HermesBuiltin.copyRestArgs()];
  ipc.send.apply(items);
};
obj.sendIPC = function sendIPC(APP_BADGE_SET, arg1) {
  const ipc = DiscordNative.ipc;
  const items = [APP_BADGE_SET, ...HermesBuiltin.copyRestArgs()];
  ipc.send.apply(items);
};
obj.isIPCReady = function isIPCReady() {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    let ipc;
    if (null != DiscordNative) {
      ipc = DiscordNative.ipc;
    }
    let tmp6 = tmp5;
    if (null != ipc) {
      tmp6 = "function" === typeof DiscordNative.ipc.send;
    }
    return tmp6;
  } else {
    return true;
  }
};
obj.waitForIPCReady = function waitForIPCReady() {
  let num = arg0;
  let _window = arg1;
  if (arg0 === undefined) {
    num = 5000;
  }
  const arg1 = num;
  if (_window === undefined) {
    _window = window;
  }
  const importDefault = _window;
  const dependencyMap = this;
  return callback3(async () => {
    const timestamp = Date.now();
    if (Date.now() - timestamp < closure_0) {
      while (!iPCReady.isIPCReady()) {
        let _Promise = Promise;
        let tmp3 = new.target;
        let tmp4 = new.target;
        let tmp5 = yield new Promise((loop) => closure_1.requestAnimationFrame(loop));
        let _Date = Date;
        let tmp6 = closure_0;
      }
      return true;
    }
    return false;
  })();
};
obj.flashFrame = function flashFrame(arg0) {
  const _window = DiscordNative.window;
  _window.flashFrame(arg0);
};
obj.webAuthnRegister = function webAuthnRegister(arg0) {
  const arg1 = arg0;
  return callback3(async () => {
    const nativeModules = closure_6.nativeModules;
    yield nativeModules.ensureModule("discord_webauthn");
    const webAuthn = closure_6.webAuthn;
    return yield webAuthn.webAuthnRegister(closure_0);
  })();
};
obj.webAuthnAuthenticate = function webAuthnAuthenticate(arg0) {
  const arg1 = arg0;
  return callback3(async () => {
    const nativeModules = closure_6.nativeModules;
    yield nativeModules.ensureModule("discord_webauthn");
    const webAuthn = closure_6.webAuthn;
    return yield webAuthn.webAuthnAuthenticate(closure_0);
  })();
};
obj.minimize = function minimize(arg0) {
  const _window = DiscordNative.window;
  _window.minimize(arg0);
};
obj.restore = function restore(arg0) {
  const _window = DiscordNative.window;
  _window.restore(arg0);
};
obj.maximize = function maximize(arg0) {
  const _window = DiscordNative.window;
  _window.maximize(arg0);
};
obj.focus = function focus(arg0) {
  let flag = arg1;
  const self = this;
  if (arg1 === undefined) {
    flag = false;
  }
  let isWindowsResult = flag;
  if (flag) {
    isWindowsResult = arg1(dependencyMap[6]).isWindows();
    const obj = arg1(dependencyMap[6]);
  }
  if (isWindowsResult) {
    self.minimize(null);
  }
  const _window = DiscordNative.window;
  _window.focus(flag, arg0);
};
obj.blur = function blur() {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    if (null != DiscordNative.window.blur) {
      const _window = DiscordNative.window;
      _window.blur();
    }
  }
  window.blur();
};
obj.fullscreen = function fullscreen(arg0) {
  const _window = DiscordNative.window;
  _window.fullscreen(arg0);
};
obj.close = function close(arg0) {
  const _window = DiscordNative.window;
  _window.close(arg0);
};
obj.clearNavigationHistory = function clearNavigationHistory() {
  backwardCompatSend(arg1(dependencyMap[11]).IPCEvents.NAVIGATION_HISTORY_CLEAR);
};
obj.setAlwaysOnTop = function setAlwaysOnTop(arg0, arg1) {
  if ("function" === typeof DiscordNative.window.setAlwaysOnTop) {
    const _window = DiscordNative.window;
    _window.setAlwaysOnTop(arg0, arg1);
  }
};
obj.isAlwaysOnTop = function isAlwaysOnTop(arg0) {
  const arg1 = arg0;
  return callback3(async () => {
    let flag = false;
    if ("function" === typeof closure_6.window.isAlwaysOnTop) {
      const _window = closure_6.window;
      flag = yield _window.isAlwaysOnTop(closure_0);
    }
    return flag;
  })();
};
obj.showInactive = function showInactive(arg0) {
  let showInactive;
  if (null != DiscordNative) {
    const _window = DiscordNative.window;
    if (null != _window) {
      showInactive = _window.showInactive;
    }
  }
  if ("function" === typeof showInactive) {
    const _window2 = DiscordNative.window;
    _window2.showInactive(arg0);
  }
};
obj.setMinimumSize = function setMinimumSize(arg0, arg1) {
  let tmp = null == DiscordNative;
  if (!tmp) {
    const _window = DiscordNative.window;
    tmp = null == _window;
  }
  if (!tmp) {
    tmp = null == obj.setMinimumSize;
  }
  if (!tmp) {
    obj.setMinimumSize(arg0, arg1);
  }
};
obj.setTrafficLightPosition = function setTrafficLightPosition(arg0) {
  const self = this;
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    if ("darwin" === obj.getPlatformName()) {
      self.sendIPC(arg1(dependencyMap[11]).IPCEvents.WINDOW_SET_TRAFFIC_LIGHT_POSITION, arg0);
    }
    const obj = arg1(dependencyMap[6]);
  }
};
obj.purgeMemory = function purgeMemory() {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const processUtils = DiscordNative.processUtils;
    processUtils.purgeMemory();
  }
};
obj.updateCrashReporter = function updateCrashReporter(arg0) {
  const crashReporter = DiscordNative.crashReporter;
  crashReporter.updateCrashReporter(arg0);
};
obj.triggerJSException = function triggerJSException(arg0) {
  const crashReporter = DiscordNative.crashReporter;
  crashReporter.triggerJSException(arg0);
};
obj.flushDNSCache = function flushDNSCache() {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const processUtils = DiscordNative.processUtils;
    processUtils.flushDNSCache();
  }
};
obj.supportsFeature = function supportsFeature(VIDEO) {
  const features = DiscordNative.features;
  return features.supports(VIDEO);
};
obj.getEnableHardwareAcceleration = function getEnableHardwareAcceleration() {
  let enableHardwareAcceleration = !arg1(dependencyMap[6]).isPlatformEmbedded;
  if (!enableHardwareAcceleration) {
    const gpuSettings = DiscordNative.gpuSettings;
    enableHardwareAcceleration = gpuSettings.getEnableHardwareAcceleration();
  }
  return enableHardwareAcceleration;
};
obj.setEnableHardwareAcceleration = function setEnableHardwareAcceleration(arg0) {
  const gpuSettings = DiscordNative.gpuSettings;
  const result = gpuSettings.setEnableHardwareAcceleration(arg0);
};
obj.setOpenH264Enabled = function setOpenH264Enabled(arg0) {
  let tmp = null == DiscordNative;
  if (!tmp) {
    const settings = DiscordNative.settings;
    tmp = null == settings;
  }
  if (!tmp) {
    tmp = null == obj.set;
  }
  if (!tmp) {
    const result = obj.set("openH264Enabled", arg0);
  }
};
obj.setChromiumSwitches = function setChromiumSwitches(arg0) {
  const gpuSettings = DiscordNative.gpuSettings;
  gpuSettings.setChromiumSwitches(arg0);
};
obj.getOpenOnStart = function getOpenOnStart() {
  return callback3(async () => {
    if (null != closure_6.app.getOpenOnStart) {
      const app = closure_6.app;
      const openOnStart = app.getOpenOnStart();
    }
    const tmp3 = yield openOnStart;
    if (null != tmp3) {
      return tmp3;
    } else {
      const settings = closure_6.settings;
      const tmp5 = yield settings.get("OPEN_ON_STARTUP", true);
      return tmp5;
    }
  })();
};
obj.getGPUDriverVersions = function getGPUDriverVersions() {
  const self = this;
  if (obj.isWindows()) {
    if (null != self.getDiscordUtils().getGPUDriverVersions) {
      const discordUtils = self.getDiscordUtils();
      let gPUDriverVersions = discordUtils.getGPUDriverVersions();
    }
    return gPUDriverVersions;
  }
  gPUDriverVersions = Promise.resolve(Object.freeze({}));
};
obj.setZoomFactor = function setZoomFactor(arg0) {
  const tmp = !arg1(dependencyMap[6]).isPlatformEmbedded;
  let flag = !tmp;
  if (!tmp) {
    const _window = DiscordNative.window;
    _window.setZoomFactor(arg0);
    flag = true;
  }
  return flag;
};
obj.setBackgroundThrottling = function setBackgroundThrottling(arg0) {
  if (null != DiscordNative.window.setBackgroundThrottling) {
    const _window = DiscordNative.window;
    const result = _window.setBackgroundThrottling(arg0);
  } else {
    const webContents = DiscordNative.window.webContents;
    const result1 = webContents.setBackgroundThrottling(arg0);
  }
};
obj.setFocusable = function setFocusable(arg0, arg1) {
  if ("function" === typeof DiscordNative.window.setFocusable) {
    const _window = DiscordNative.window;
    _window.setFocusable(arg0, arg1);
  }
};
obj.pauseFrameEvictor = function pauseFrameEvictor() {
  if (null != DiscordNative.app.pauseFrameEvictor) {
    const app = DiscordNative.app;
    app.pauseFrameEvictor();
  }
};
obj.unpauseFrameEvictor = function unpauseFrameEvictor() {
  if (null != DiscordNative.app.unpauseFrameEvictor) {
    const app = DiscordNative.app;
    app.unpauseFrameEvictor();
  }
};
obj.getPreferredSystemLanguages = function getPreferredSystemLanguages() {
  let preferredSystemLanguages;
  if (null != DiscordNative.app.getPreferredSystemLanguages) {
    const app = DiscordNative.app;
    preferredSystemLanguages = app.getPreferredSystemLanguages();
  }
  return preferredSystemLanguages;
};
obj.getPidFromDesktopSource = function getPidFromDesktopSource(str) {
  const self = this;
  if (obj.isDesktop()) {
    if (null != self.getDiscordUtils().getPidFromWindowHandle) {
      let parts;
      if (null != str) {
        parts = str.split(":");
      }
      let first;
      if (null != parts) {
        first = parts[0];
      }
      if ("window" === first) {
        let tmp5;
        if (null != parts) {
          tmp5 = parts[1];
        }
        let str5 = "";
        if (null != tmp5) {
          str5 = tmp5;
        }
        const discordUtils = self.getDiscordUtils();
        const pidFromWindowHandle = discordUtils.getPidFromWindowHandle(str5);
        let tmp7 = null;
        if (null != pidFromWindowHandle) {
          tmp7 = null;
          if (0 !== pidFromWindowHandle) {
            tmp7 = pidFromWindowHandle;
          }
        }
        return tmp7;
      } else {
        if (first.startsWith("screen")) {
          let tmp4 = 1;
        } else {
          tmp4 = null;
        }
        return tmp4;
      }
    }
  }
  return null;
};
obj.getDesktopSourceFromPid = function getDesktopSourceFromPid(arg0) {
  const self = this;
  if (obj.isWindows()) {
    if (null != self.getDiscordUtils().getWindowHandleFromPid) {
      if (null != arg0) {
        const discordUtils = self.getDiscordUtils();
        const windowHandleFromPid = discordUtils.getWindowHandleFromPid(arg0);
        let joined = null;
        if (null != windowHandleFromPid) {
          joined = null;
          if (0 !== windowHandleFromPid.length) {
            const items = ["<string:2433569280>", windowHandleFromPid, "0"];
            joined = items.join(":");
          }
        }
        return joined;
      }
    }
  }
  return null;
};
obj.generateSessionFromPid = function generateSessionFromPid(arg0) {
  const discordUtils = this.getDiscordUtils();
  return discordUtils.generateSessionFromPid(arg0);
};
obj.getAudioPid = function getAudioPid(arg0) {
  const self = this;
  let audioPid = arg0;
  if (null != this.getDiscordUtils().getAudioPid) {
    audioPid = arg0;
    if (null != arg0) {
      const discordUtils = self.getDiscordUtils();
      audioPid = discordUtils.getAudioPid(arg0);
    }
  }
  return audioPid;
};
obj.setForegroundProcess = function setForegroundProcess(arg0) {
  const setForegroundProcess = this.getDiscordUtils().setForegroundProcess;
  let setForegroundProcessResult = tmp;
  if (null != setForegroundProcess) {
    setForegroundProcessResult = setForegroundProcess(arg0);
  }
  return setForegroundProcessResult;
};
obj.getDiscordMemoryUsage = function getDiscordMemoryUsage() {
  const getDiscordMemoryUsage = this.getDiscordUtils().getDiscordMemoryUsage;
  let discordMemoryUsage = null;
  if (null != getDiscordMemoryUsage) {
    discordMemoryUsage = getDiscordMemoryUsage();
  }
  return discordMemoryUsage;
};
obj.getDiscordMemoryUsageElectronRenderer = function getDiscordMemoryUsageElectronRenderer() {
  const getDiscordMemoryUsageElectronRenderer = this.getDiscordUtils().getDiscordMemoryUsageElectronRenderer;
  let discordMemoryUsageElectronRenderer;
  if (null != getDiscordMemoryUsageElectronRenderer) {
    discordMemoryUsageElectronRenderer = getDiscordMemoryUsageElectronRenderer();
  }
  return discordMemoryUsageElectronRenderer;
};
obj.getDiscordMemoryPrivateUsageElectronRenderer = function getDiscordMemoryPrivateUsageElectronRenderer() {
  const getDiscordMemoryPrivUsageElectronRenderer = this.getDiscordUtils().getDiscordMemoryPrivUsageElectronRenderer;
  let discordMemoryPrivUsageElectronRenderer;
  if (null != getDiscordMemoryPrivUsageElectronRenderer) {
    discordMemoryPrivUsageElectronRenderer = getDiscordMemoryPrivUsageElectronRenderer();
  }
  return discordMemoryPrivUsageElectronRenderer;
};
obj.getDiscordMemoryUsageElectronProcessTypeDetails = function getDiscordMemoryUsageElectronProcessTypeDetails() {
  const getDiscordMemoryUsageElectronProcessTypeDetails = this.getDiscordUtils().getDiscordMemoryUsageElectronProcessTypeDetails;
  let discordMemoryUsageElectronProcessTypeDetails;
  if (null != getDiscordMemoryUsageElectronProcessTypeDetails) {
    discordMemoryUsageElectronProcessTypeDetails = getDiscordMemoryUsageElectronProcessTypeDetails();
  }
  return discordMemoryUsageElectronProcessTypeDetails;
};
obj.enablePerfMemoryHooks = function enablePerfMemoryHooks(arg0) {
  const enablePerfMemoryHooks = this.getDiscordUtils().enablePerfMemoryHooks;
  let result;
  if (null != enablePerfMemoryHooks) {
    result = enablePerfMemoryHooks(arg0);
  }
  return result;
};
obj.disablePerfMemoryHooks = function disablePerfMemoryHooks() {
  const disablePerfMemoryHooks = this.getDiscordUtils().disablePerfMemoryHooks;
  let result;
  if (null != disablePerfMemoryHooks) {
    result = disablePerfMemoryHooks();
  }
  return result;
};
obj.getPerfAttributedMemory = function getPerfAttributedMemory() {
  const getPerfAttributedMemory = this.getDiscordUtils().getPerfAttributedMemory;
  let perfAttributedMemory;
  if (null != getPerfAttributedMemory) {
    perfAttributedMemory = getPerfAttributedMemory();
  }
  return perfAttributedMemory;
};
obj.getPerfAttributedMemoryCallstacks = function getPerfAttributedMemoryCallstacks(arg0) {
  const getPerfAttributedMemoryCallstacks = this.getDiscordUtils().getPerfAttributedMemoryCallstacks;
  let perfAttributedMemoryCallstacks;
  if (null != getPerfAttributedMemoryCallstacks) {
    perfAttributedMemoryCallstacks = getPerfAttributedMemoryCallstacks(arg0);
  }
  return perfAttributedMemoryCallstacks;
};
obj.getPerfAttributedMemoryStats = function getPerfAttributedMemoryStats() {
  const getPerfAttributedMemoryStats = this.getDiscordUtils().getPerfAttributedMemoryStats;
  let perfAttributedMemoryStats;
  if (null != getPerfAttributedMemoryStats) {
    perfAttributedMemoryStats = getPerfAttributedMemoryStats();
  }
  return perfAttributedMemoryStats;
};
obj.startCPUProfiling = function startCPUProfiling(arg0) {
  const startCPUProfiling = this.getDiscordUtils().startCPUProfiling;
  let startCPUProfilingResult;
  if (null != startCPUProfiling) {
    startCPUProfilingResult = startCPUProfiling(arg0);
  }
  return startCPUProfilingResult;
};
obj.stopCPUProfiling = function stopCPUProfiling() {
  const arg1 = this;
  return callback3(async () => {
    const stopCPUProfiling = discordUtils.getDiscordUtils().stopCPUProfiling;
    if (null != stopCPUProfiling) {
      const stopCPUProfilingResult = stopCPUProfiling();
    }
    const tmp2 = yield stopCPUProfilingResult;
    if (null == tmp2) {
      const _Error = Error;
      const error = new Error("Failed to stop CPU profiling");
      let rejectResult = Promise.reject(error);
    } else {
      const _JSON = JSON;
      rejectResult = JSON.parse(tmp2);
    }
    return rejectResult;
  })();
};
obj.gzipAndBase64Encode = function gzipAndBase64Encode(arg0) {
  const gzipAndBase64Encode = this.getDiscordUtils().gzipAndBase64Encode;
  let gzipAndBase64EncodeResult;
  if (null != gzipAndBase64Encode) {
    gzipAndBase64EncodeResult = gzipAndBase64Encode(arg0);
  }
  if (null == gzipAndBase64EncodeResult) {
    gzipAndBase64EncodeResult = Promise.resolve(null);
  }
  return gzipAndBase64EncodeResult;
};
obj.showOpenDialog = function showOpenDialog(properties) {
  const fileManager = DiscordNative.fileManager;
  return fileManager.showOpenDialog({ properties });
};
obj.flushStorageData = function flushStorageData(arg0) {
  let _Promise = Promise;
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const prototype = _Promise.prototype;
    _Promise = new _Promise((arg0, arg1) => {
      if (null != closure_6.processUtils.flushStorageData) {
        const processUtils = closure_6.processUtils;
        processUtils.flushStorageData((arg0) => {
          if (null != arg0) {
            const _Error = Error;
            const error = new Error(arg0);
            let tmp2 = arg1(error);
          } else {
            tmp2 = arg0();
          }
          return tmp2;
        });
      } else {
        arg0();
      }
    });
  } else {
    _Promise = _Promise.resolve();
  }
  return _Promise;
};
obj.flushCookies = function flushCookies() {
  let _Promise = Promise;
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const prototype = _Promise.prototype;
    _Promise = new _Promise((arg0, arg1) => {
      if (null != closure_6.processUtils.flushCookies) {
        const processUtils = closure_6.processUtils;
        processUtils.flushCookies((arg0) => {
          if (null != arg0) {
            const _Error = Error;
            const error = new Error(arg0);
            let tmp2 = arg1(error);
          } else {
            tmp2 = arg0();
          }
          return tmp2;
        });
      } else {
        arg0();
      }
    });
  } else {
    _Promise = _Promise.resolve();
  }
  return _Promise;
};
obj.setCrashInformation = function setCrashInformation(arg0, arg1) {
  let isPlatformEmbedded = arg1(dependencyMap[6]).isPlatformEmbedded;
  if (isPlatformEmbedded) {
    let setCrashInformation;
    if (null != DiscordNative) {
      const processUtils = DiscordNative.processUtils;
      if (null != processUtils) {
        setCrashInformation = processUtils.setCrashInformation;
      }
    }
    isPlatformEmbedded = null != setCrashInformation;
  }
  if (isPlatformEmbedded) {
    const processUtils2 = DiscordNative.processUtils;
    processUtils2.setCrashInformation(arg0, arg1);
  }
};
obj.blockDisplaySleep = function blockDisplaySleep() {
  let blockDisplaySleepResult = null;
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    blockDisplaySleepResult = null;
    if (null != DiscordNative.powerSaveBlocker) {
      const powerSaveBlocker = DiscordNative.powerSaveBlocker;
      blockDisplaySleepResult = powerSaveBlocker.blockDisplaySleep();
    }
  }
  return blockDisplaySleepResult;
};
obj.unblockDisplaySleep = function unblockDisplaySleep(arg0) {
  let isPlatformEmbedded = arg1(dependencyMap[6]).isPlatformEmbedded;
  if (isPlatformEmbedded) {
    isPlatformEmbedded = null != DiscordNative.powerSaveBlocker;
  }
  if (isPlatformEmbedded) {
    const powerSaveBlocker = DiscordNative.powerSaveBlocker;
    powerSaveBlocker.unblockDisplaySleep(arg0);
  }
};
obj.cleanupDisplaySleep = function cleanupDisplaySleep() {
  let isPlatformEmbedded = arg1(dependencyMap[6]).isPlatformEmbedded;
  if (isPlatformEmbedded) {
    isPlatformEmbedded = null != DiscordNative.powerSaveBlocker;
  }
  if (isPlatformEmbedded) {
    const powerSaveBlocker = DiscordNative.powerSaveBlocker;
    powerSaveBlocker.cleanupDisplaySleep();
  }
};
obj.relaunch = function relaunch() {
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    const app = DiscordNative.app;
    app.relaunch();
  }
};
obj.makeChunkedRequest = function makeChunkedRequest(closure_0, array, arg2, arg3) {
  let chunkInterval;
  let obj = callback(dependencyMap[12]);
  const callback = "" + obj.getAPIBaseURL() + closure_0;
  if (callback(dependencyMap[6]).isPlatformEmbedded) {
    if (null == DiscordNative.http) {
      const _Error2 = Error;
      const error = new Error("HTTP module not available");
      return Promise.reject(error);
    } else {
      obj = {};
      const merged = Object.assign(arg2);
      ({ method: closure_1, token: closure_2, chunkInterval } = obj);
      let closure_3 = chunkInterval;
      const contentType = obj.contentType;
      let closure_4 = contentType;
      let json = array;
      if ("application/json" === contentType) {
        const _JSON = JSON;
        json = JSON.stringify(array);
      }
      const result = obj.maxBps * (chunkInterval / 1000);
      const _Math = Math;
      const rounded = Math.ceil(json.length / result);
      const _Array = Array;
      array = new Array(rounded);
      const NativeFeatures = array;
      for (let num2 = 0; num2 < rounded; num2 = num2 + 1) {
        let result1 = num2 * result;
        array[num2] = json.substring(result1, result1 + result);
      }
      const promise = new Promise((closure_0) => {
        if (null != closure_6.http) {
          const http = closure_6.http;
          const obj = { method: arg1, chunkInterval, contentType, token: closure_2 };
          const chunkedRequest = http.makeChunkedRequest(closure_0, array, obj, (arg0, status) => {
            if (null != arg0) {
              let tmp3 = status(arg0);
            } else if (status.status >= 400) {
              const _Error = Error;
              const error = new Error(status.body);
              tmp3 = status(error);
            } else {
              arg0(status);
            }
            return tmp3;
          });
        }
      });
      return promise;
    }
  } else {
    const _Error = Error;
    const error1 = new Error("Not embedded!");
    return Promise.reject(error1);
  }
};
obj.submitLiveCrashReport = function submitLiveCrashReport(arg0) {
  const self = this;
  let obj = arg1(dependencyMap[6]);
  if (obj.isWindows()) {
    if (null != self.getDiscordUtils().submitLiveCrashReport) {
      const crashReporterMetadata = self.getCrashReporterMetadata();
      const app = DiscordNative.app;
      let sentry;
      const releaseChannel = app.getReleaseChannel();
      if (null != crashReporterMetadata) {
        sentry = crashReporterMetadata.sentry;
      }
      const discordUtils = self.getDiscordUtils();
      obj = {};
      const merged = Object.assign(sentry);
      const merged1 = Object.assign(arg0);
      return discordUtils.submitLiveCrashReport(releaseChannel, obj);
    }
  }
  return Promise.resolve();
};
obj.crash = function crash(arg0) {
  const crash = this.getDiscordUtils().crash;
  let flag = null != crash;
  if (flag) {
    crash(arg0);
    flag = true;
  }
  return flag;
};
obj.setApplicationBackgroundColor = function setApplicationBackgroundColor(arg0) {
  this.sendIPC(arg1(dependencyMap[11]).IPCEvents.SETTINGS_UPDATE_BACKGROUND_COLOR, arg0);
};
obj.initializeExitHook = function initializeExitHook() {
  const initializeExitHook = this.getDiscordUtils().initializeExitHook;
  if (null != initializeExitHook) {
    initializeExitHook();
  }
};
obj.initializeWERHandler = function initializeWERHandler() {
  const initializeWERHandler = this.getDiscordUtils().initializeWERHandler;
  if (null != initializeWERHandler) {
    initializeWERHandler();
  }
};
obj.pollQueueMetrics = function pollQueueMetrics(arg0) {
  const pollQueueMetrics = this.getDiscordUtils().pollQueueMetrics;
  if (null != pollQueueMetrics) {
    pollQueueMetrics(arg0);
  }
};
obj.asyncify = function asyncify(arg0) {
  const arg1 = arg0;
  return new Promise((arg0) => {
    arg0(arg0);
  });
};
obj.IsGameDisplayModeUpdateSupported = function IsGameDisplayModeUpdateSupported() {
  return null != this.getDiscordUtils().gameDisplayModeUpdate;
};
obj.GameDisplayModeUpdate = function GameDisplayModeUpdate(arg0) {
  const gameDisplayModeUpdate = this.getDiscordUtils().gameDisplayModeUpdate;
  let result = null != gameDisplayModeUpdate && null != arg0;
  if (result) {
    result = gameDisplayModeUpdate(arg0);
  }
  return result;
};
obj.GameDisplayModeIsGameSupported = function GameDisplayModeIsGameSupported(arg0) {
  const gameDisplayModeIsSupported = this.getDiscordUtils().gameDisplayModeIsSupported;
  let result = null != gameDisplayModeIsSupported && null != arg0;
  if (result) {
    result = gameDisplayModeIsSupported(arg0);
  }
  return result;
};
obj.GetWindowFullscreenTypeByPid = function GetWindowFullscreenTypeByPid(arg0, arg1, arg2) {
  let UNKNOWN = arg2;
  const getWindowFullscreenTypeByPid = this.getDiscordUtils().getWindowFullscreenTypeByPid;
  let windowFullscreenTypeByPid = null;
  if (0 !== arg0) {
    windowFullscreenTypeByPid = null;
    if (null != getWindowFullscreenTypeByPid) {
      windowFullscreenTypeByPid = null;
      if (null != arg1) {
        windowFullscreenTypeByPid = getWindowFullscreenTypeByPid(arg0, arg1);
      }
    }
  }
  if (-1 === windowFullscreenTypeByPid) {
    windowFullscreenTypeByPid = null;
  }
  if (null != windowFullscreenTypeByPid) {
    UNKNOWN = windowFullscreenTypeByPid;
  }
  if (null == UNKNOWN) {
    UNKNOWN = arg1(dependencyMap[4]).RunningProcessFullscreenType.UNKNOWN;
  }
  return UNKNOWN;
};
obj.GetWindowFullscreenTypeExtraByPid = function GetWindowFullscreenTypeExtraByPid(arg0, arg1) {
  const getWindowFullscreenTypeExtraByPid = this.getDiscordUtils().getWindowFullscreenTypeExtraByPid;
  if (null != getWindowFullscreenTypeExtraByPid) {
    if (null != arg1) {
      let windowFullscreenTypeExtraByPid = getWindowFullscreenTypeExtraByPid(arg0, arg1);
    }
    return windowFullscreenTypeExtraByPid;
  }
  windowFullscreenTypeExtraByPid = { quns: arg1(dependencyMap[4]).QueryUserNotificationState.QUNS_UNKNOWN };
};
obj.SetGPUBoostEnabledByPid = function SetGPUBoostEnabledByPid(arg0, arg1) {
  const setGPUBoostEnabledByPid = this.getDiscordUtils().setGPUBoostEnabledByPid;
  let result = null != setGPUBoostEnabledByPid;
  if (result) {
    result = setGPUBoostEnabledByPid(arg0, arg1);
  }
  return result;
};
obj.SetSystemServicePerformanceMonitorEnabled = function SetSystemServicePerformanceMonitorEnabled(arg0, arg1) {
  const setSystemServicePerformanceMonitorEnabled = this.getDiscordUtils().setSystemServicePerformanceMonitorEnabled;
  let result = null != setSystemServicePerformanceMonitorEnabled;
  if (result) {
    result = setSystemServicePerformanceMonitorEnabled(arg0, arg1);
  }
  return result;
};
obj.GetSystemServicePerformanceMonitorSnapshot = function GetSystemServicePerformanceMonitorSnapshot(arg0) {
  const arg1 = arg0;
  const getSystemServicePerformanceMonitorSnapshot = this.getDiscordUtils().getSystemServicePerformanceMonitorSnapshot;
  const dependencyMap = getSystemServicePerformanceMonitorSnapshot;
  if (null == getSystemServicePerformanceMonitorSnapshot) {
    const SystemServiceNotAvailableError = arg1(dependencyMap[13]).SystemServiceNotAvailableError;
    const prototype3 = SystemServiceNotAvailableError.prototype;
    const systemServiceNotAvailableError = new SystemServiceNotAvailableError();
    return Promise.reject(systemServiceNotAvailableError);
  } else {
    let promise = new Promise((arg0, arg1) => {
      arg0 = arg1;
      const timeout = setTimeout(() => {
        const error = new Error("Timed out waiting for performance snapshot");
        return arg1(error);
      }, 1000);
    });
    promise = new Promise((arg0, arg1) => {
      getSystemServicePerformanceMonitorSnapshot(arg0, (arg0) => {
        if ("null" !== arg0) {
          const _JSON = JSON;
          arg0(JSON.parse(arg0));
        } else {
          const _Error = Error;
          const error = new Error("Performance snapshot not available");
          arg1(error);
        }
      });
    });
    const items = [promise, promise];
    return Promise.race(items).finally(() => clearTimeout(closure_1));
  }
};
obj.IsHardwareAcceleratedGPUSchedulingEnabled = function IsHardwareAcceleratedGPUSchedulingEnabled() {
  const isHardwareAcceleratedGPUSchedulingEnabled = this.getDiscordUtils().isHardwareAcceleratedGPUSchedulingEnabled;
  let result = null != isHardwareAcceleratedGPUSchedulingEnabled;
  if (result) {
    result = isHardwareAcceleratedGPUSchedulingEnabled();
  }
  return result;
};
obj.AcquireGlobalLock = function AcquireGlobalLock(arg0) {
  const acquireGlobalLock = this.getDiscordUtils().acquireGlobalLock;
  if (null != acquireGlobalLock) {
    return acquireGlobalLock(arg0);
  }
};
obj.SetServiceChannel = function SetServiceChannel(arg0) {
  const setServiceChannel = this.getDiscordUtils().setServiceChannel;
  if (null != setServiceChannel) {
    setServiceChannel(arg0);
  }
};
obj.IsSystemServiceInstalled = function IsSystemServiceInstalled() {
  const isSystemServiceInstalled = this.getDiscordUtils().isSystemServiceInstalled;
  return null != isSystemServiceInstalled ? isSystemServiceInstalled() : undefined;
};
obj.CanSystemServiceBeInstalled = function CanSystemServiceBeInstalled() {
  const canSystemServiceBeInstalled = this.getDiscordUtils().canSystemServiceBeInstalled;
  return null != canSystemServiceBeInstalled ? canSystemServiceBeInstalled() : undefined;
};
obj.InstallSystemService = function InstallSystemService() {
  const installSystemService = this.getDiscordUtils().installSystemService;
  if (null != installSystemService) {
    let installSystemServiceResult = installSystemService();
  } else {
    const _Error = Error;
    const error = new Error("System service native not available");
    installSystemServiceResult = Promise.reject(error);
  }
  return installSystemServiceResult;
};
obj.DoesSystemServiceHaveUpdate = function DoesSystemServiceHaveUpdate() {
  const doesSystemServiceHaveUpdate = this.getDiscordUtils().doesSystemServiceHaveUpdate;
  if (null != doesSystemServiceHaveUpdate) {
    let result = doesSystemServiceHaveUpdate();
  } else {
    const _Error = Error;
    const error = new Error("System service native not available");
    result = Promise.reject(error);
  }
  return result;
};
obj.UpdateSystemService = function UpdateSystemService() {
  const updateSystemService = this.getDiscordUtils().updateSystemService;
  if (null != updateSystemService) {
    let updateSystemServiceResult = updateSystemService();
  } else {
    const _Error = Error;
    const error = new Error("System service native not available");
    updateSystemServiceResult = Promise.reject(error);
  }
  return updateSystemServiceResult;
};
obj.UninstallSystemService = function UninstallSystemService() {
  const uninstallSystemService = this.getDiscordUtils().uninstallSystemService;
  if (null != uninstallSystemService) {
    let result = uninstallSystemService();
  } else {
    const _Error = Error;
    const error = new Error("System service native not available");
    result = Promise.reject(error);
  }
  return result;
};
obj.InputEventServiceSetStatusCallback = function InputEventServiceSetStatusCallback(arg0) {
  const inputEventServiceSetStatusCallback = this.getDiscordUtils().inputEventServiceSetStatusCallback;
  if (null != inputEventServiceSetStatusCallback) {
    const result = inputEventServiceSetStatusCallback(arg0);
  }
};
obj.InputEventServiceSetAllowed = function InputEventServiceSetAllowed(arg0) {
  const inputEventServiceSetAllowed = this.getDiscordUtils().inputEventServiceSetAllowed;
  if (null != inputEventServiceSetAllowed) {
    return inputEventServiceSetAllowed(arg0);
  }
};
obj.ToolServiceSetStatusCallback = function ToolServiceSetStatusCallback(arg0) {
  const toolServiceSetStatusCallback = this.getDiscordUtils().toolServiceSetStatusCallback;
  if (null != toolServiceSetStatusCallback) {
    const result = toolServiceSetStatusCallback(arg0);
  }
};
obj.ToolServiceSetAllowed = function ToolServiceSetAllowed(arg0) {
  const toolServiceSetAllowed = this.getDiscordUtils().toolServiceSetAllowed;
  if (null != toolServiceSetAllowed) {
    return toolServiceSetAllowed(arg0);
  }
};
obj.isModuleVersionAtLeast = function isModuleVersionAtLeast(arg0, stable) {
  let tmp8;
  let tmp9;
  const self = this;
  const items = [...null != closure_9 ? closure_9 : [true, true, true]];
  const moduleVersions = self.moduleVersions;
  let tmp2;
  if (null != moduleVersions) {
    tmp2 = moduleVersions[arg0];
  }
  let num = 0;
  if (null != tmp2) {
    num = tmp2;
  }
  items.push(num);
  stable = stable[self.releaseChannel];
  if (null == stable) {
    stable = stable.stable;
  }
  const tmp5 = _createForOfIteratorHelperLoose(items.entries());
  let iter = tmp5();
  if (!iter.done) {
    [tmp8, tmp9] = callback2(iter.value, 2);
    while (tmp9 <= stable[tmp8]) {
      if (tmp9 < stable[tmp8]) {
        let flag = false;
        return false;
      } else {
        let iter2 = tmp5();
        iter = iter2;
      }
    }
    return true;
  }
  return true;
};
obj.fetchRiotGamesLiveClientData = function fetchRiotGamesLiveClientData(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (arg1(dependencyMap[6]).isPlatformEmbedded) {
    if (null == DiscordNative.riotGames) {
      const _Error2 = Error;
      const error = new Error("Riot Games module not available");
      let rejectResult = Promise.reject(error);
    } else {
      const riotGames = DiscordNative.riotGames;
      rejectResult = riotGames.fetchLiveClientData(arg0, obj);
    }
  } else {
    const _Error = Error;
    const error1 = new Error("Not embedded!");
    return Promise.reject(error1);
  }
};
obj.appViewed = function appViewed() {
  const self = this;
  if (obj.isDesktop()) {
    const _performance = performance;
    performance.mark("app_viewed");
    self.sendIPC(arg1(dependencyMap[11]).IPCEvents.APP_VIEWED);
  }
};
obj.appFirstRenderAfterReadyPayload = function appFirstRenderAfterReadyPayload(arg0) {
  const self = this;
  if (obj.isDesktop()) {
    const _performance = performance;
    performance.mark("app_first_render_after_ready_payload");
    self.sendIPC(arg1(dependencyMap[11]).IPCEvents.APP_FIRST_RENDER_AFTER_READY_PAYLOAD, arg0);
  }
};
obj.appLoaded = function appLoaded() {
  backwardCompatSend(arg1(dependencyMap[11]).IPCEvents.APP_LOADED);
};
obj.indexLoadedAsync = function indexLoadedAsync() {
  backwardCompatSend(arg1(dependencyMap[11]).IPCEvents.APP_ASYNC_INDEX_TSX_LOADED);
};
obj.setUseRequireModuleCache = function setUseRequireModuleCache(arg0) {
  let closure_13 = arg0;
};
obj.GetSystemGpuStats = function GetSystemGpuStats(arg0) {
  const arg1 = arg0;
  const importDefault = this;
  return callback3(async () => {
    if (callback(closure_2[6]).isPlatformEmbedded) {
      yield closure_1.ensureModule("discord_media");
      const requireModuleResult = closure_1.requireModule("discord_media");
      let getGpuStats;
      if (null != requireModuleResult) {
        getGpuStats = requireModuleResult.getGpuStats;
      }
      if (null == getGpuStats) {
        let items = [];
      } else {
        const gpuStats = requireModuleResult.getGpuStats(callback);
        items = gpuStats.catch(() => []);
      }
      return items;
    } else {
      return [];
    }
  })();
};
const result = arg1(dependencyMap[14]).fileFinishedImporting("utils/web/DesktopNativeUtils.tsx");

export default obj;
export const SaveImageResult = obj;
export { sanitizeFilename };
export { getFileData };
export { getImageData };
export const NativePermissionRequestType = { Camera: 0, [0]: "Camera", Microphone: 1, [1]: "Microphone", Photo: 2, [2]: "Photo", InputMonitoring: 3, [3]: "InputMonitoring", ScreenRecording: 4, [4]: "ScreenRecording" };
export { decideFileExtension };
