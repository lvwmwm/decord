// Module ID: 14
// Function ID: 184
// Name: _createForOfIteratorHelperLoose
// Dependencies: [15, 17, 18, 5, 6, 7, 20, 2, 21, 22, 2]

// Module 14 (_createForOfIteratorHelperLoose)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _defineProperties from "_defineProperties";
import AppStartPerformance from "AppStartPerformance";
import importDefaultResult from "set";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _serialize(arg0, arg1) {
  if (0 !== arg1) {
    if (null != arg1) {
      const diff = arg1 - arg0;
      let tmp4 = null;
      if (diff >= 0) {
        tmp4 = null;
        if (diff <= 1000000) {
          tmp4 = diff;
        }
      }
      return tmp4;
    }
  }
  return null;
}
function loggerCallback() {

}
global.__timingFunction = () => performance.now();
let closure_12 = null == global.__getTotalRequireTime ? (() => 0) : (() => global.__getTotalRequireTime());
let closure_13 = (() => {
  class TTITimer {
    constructor(arg0, arg1) {
      tmp = outer1_9(this, TTITimer);
      this.emoji = arg0;
      this.name = arg1;
      this.start_ = 0;
      this.startNumImports = 0;
      this.startImportTime = 0;
      this.end_ = 0;
      this.endNumImports = 0;
      this.endImportTime = 0;
      return;
    }
  }
  let obj = {
    key: "start",
    get() {
      return this.start_;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "end",
    get() {
      return this.end_;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasStart",
    value() {
      return this.start_ > 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasData",
    value() {
      return this.end_ > 0;
    }
  };
  items[4] = {
    key: "recordStart",
    value() {
      const self = this;
      if (0 === this.start_) {
        self.recordStart_();
      }
      TTITimer(outer1_4[6]).mark(self.emoji, "Start " + self.name);
      outer1_11();
    }
  };
  items[5] = {
    key: "recordStart_",
    value() {
      this.start_ = Date.now();
      this.startNumImports = outer1_3(outer1_4[7]).size();
      this.startImportTime = outer1_12();
    }
  };
  items[6] = {
    key: "recordEnd",
    value() {
      const self = this;
      if (0 === this.end_) {
        if (0 !== self.start_) {
          self.recordEnd_();
          const _HermesInternal = HermesInternal;
          TTITimer(outer1_4[6]).mark(self.emoji, "Finish " + self.name, self.end_ - self.start_);
          const obj2 = TTITimer(outer1_4[6]);
        }
        outer1_11();
      }
      TTITimer(outer1_4[6]).mark(self.emoji, "Finish " + self.name);
    }
  };
  items[7] = {
    key: "recordEnd_",
    value() {
      this.end_ = Date.now();
      this.endNumImports = outer1_3(outer1_4[7]).size();
      this.endImportTime = outer1_12();
    }
  };
  items[8] = {
    key: "set",
    value(start_) {
      const self = this;
      if (0 === this.start_) {
        self.start_ = start_;
        self.end_ = start_ + arg1;
        self.endNumImports = outer1_3(outer1_4[7]).size();
        self.endImportTime = outer1_12();
        const obj = outer1_3(outer1_4[7]);
      }
      TTITimer(outer1_4[6]).mark(self.emoji, self.name, arg1);
      outer1_11();
    }
  };
  items[9] = {
    key: "serializeStart",
    value(arg0) {
      return outer1_19(arg0, this.start_);
    }
  };
  items[10] = {
    key: "serializeEnd",
    value(arg0) {
      return outer1_19(arg0, this.end_);
    }
  };
  items[11] = {
    key: "measure",
    value(arg0) {
      const self = this;
      if (this.start_ > 0) {
        return TTITimer(outer1_4[6]).time(self.emoji, self.name, arg0);
      } else {
        self.recordStart_();
        const obj = TTITimer(outer1_4[6]);
        self.recordEnd_();
        outer1_11();
        return TTITimer(outer1_4[6]).time(self.emoji, self.name, arg0);
      }
    }
  };
  const obj10 = { key: "measureAsync" };
  let closure_1 = callback2(async function(arg0) {
    const self = this;
    if (self.start_ > 0) {
      return TTITimer(outer2_4[6]).timeAsync(self.emoji, self.name, arg0);
    } else {
      self.recordStart_();
      const obj = TTITimer(outer2_4[6]);
      self.recordEnd_();
      outer2_11();
      return yield TTITimer(outer2_4[6]).timeAsync(self.emoji, self.name, arg0);
    }
  });
  obj10.value = function measureAsync(arg0) {
    return callback2(...arguments);
  };
  items[12] = obj10;
  const obj11 = { key: "measureAsyncWithoutNesting" };
  let closure_0 = callback2(async function(arg0) {
    const self = this;
    if (self.start_ > 0) {
      return TTITimer(outer2_4[6]).timeAsync(self.emoji, self.name, arg0);
    } else {
      self.recordStart_();
      const _Date2 = Date;
      const timestamp = Date.now();
      const _HermesInternal2 = HermesInternal;
      TTITimer(outer2_4[6]).mark(self.emoji, "Start " + self.name);
      const obj3 = TTITimer(outer2_4[6]);
      const tmp16 = yield arg0();
      const _HermesInternal = HermesInternal;
      const _Date = Date;
      const combined = "Finish " + self.name;
      TTITimer(outer2_4[6]).mark(self.emoji, combined, Date.now() - timestamp);
      self.recordEnd_();
      outer2_11();
      return tmp16;
    }
  });
  obj11.value = function measureAsyncWithoutNesting(arg0) {
    return callback(...arguments);
  };
  items[13] = obj11;
  return importDefaultResult(TTITimer, items);
})();
let closure_14 = (() => {
  class TTIEvent {
    constructor(arg0, arg1) {
      flag = arg2;
      flag2 = arg3;
      self = this;
      if (arg2 === undefined) {
        flag = false;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      tmp = outer1_9(self, TTIEvent);
      self.emoji = arg0;
      self.name = arg1;
      self.onlyOnce = flag;
      self.alwaysRecord = flag2;
      self.time_ = 0;
      self.numImports = null;
      self.importTime = 0;
      return;
    }
  }
  let obj = {
    key: "time",
    get() {
      return this.time_;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "record",
    value() {
      let timestamp = arg0;
      const self = this;
      if (arg0 === undefined) {
        const _Date = Date;
        timestamp = Date.now();
      }
      if (0 === self.time_) {
        self.recordState_(timestamp);
      } else if (!self.onlyOnce) {
        if (self.alwaysRecord) {
          self.recordState_(timestamp);
          outer1_11();
        } else {
          outer1_2(outer1_4[6]).mark(self.emoji, self.name);
          const obj = outer1_2(outer1_4[6]);
        }
      }
      outer1_11();
    }
  };
  items[1] = obj;
  obj = {
    key: "recordState_",
    value(time_) {
      this.time_ = time_;
      this.numImports = outer1_3(outer1_4[7]).size();
      this.importTime = outer1_12();
      const obj = outer1_3(outer1_4[7]);
      outer1_2(outer1_4[6]).mark(this.emoji, this.name);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasData",
    value() {
      return this.time_ > 0;
    }
  };
  items[4] = {
    key: "serialize",
    value(arg0) {
      return outer1_19(arg0, this.time_);
    }
  };
  return importDefaultResult(TTIEvent, items);
})();
let closure_15 = (() => {
  class TTIImportEvent {
    constructor() {
      tmp = outer1_9(this, TTIImportEvent);
      this.time_ = 0;
      return;
    }
  }
  let obj = {
    key: "time",
    get() {
      return this.time_;
    }
  };
  const items = [obj, ];
  obj = {
    key: "record",
    value() {
      if (0 === this.time_) {
        tmp.time_ = outer1_12();
      }
    }
  };
  items[1] = obj;
  return importDefaultResult(TTIImportEvent, items);
})();
class TTITrackers {
  constructor() {
    tmp = c9(this, TTITrackers);
    tmp2 = new f196("\u2757", "Load index.tsx");
    this.loadIndex = tmp2;
    tmp3 = new f196("\u{1F4BE}", "Load fast_connect native module");
    this.loadFastConnectNativeModule = tmp3;
    tmp4 = new f196("\u{1F310}", "Fast Connect IDENTIFY");
    this.beginFastConnect = tmp4;
    tmp5 = new f196("\u{1F3C3}", "Load Imports");
    this.loadImports = tmp5;
    tmp6 = new f196("\u{1F3C3}", "Initial Initialization");
    this.init = tmp6;
    tmp7 = new f196("\u{1F4BE}", "Load Storage");
    this.loadStorage = tmp7;
    tmp8 = new f196("\u{1F4BE}", "Parse Storage");
    this.parseStorage = tmp8;
    tmp9 = new f196("\u{1F4BE}", "Load Mini Cache");
    this.loadMiniCache = tmp9;
    tmp10 = new f196("\u{1F4BE}", "Fetch Guild Cache");
    this.fetchGuildCache = tmp10;
    tmp11 = new f196("\u{1F4BE}", "Fetch Initial Guild Channels Cache");
    this.fetchGuildChannelsCache = tmp11;
    tmp12 = new f196("\u{1F4BE}", "Load Cached Messages");
    this.loadCachedMessages = tmp12;
    tmp13 = new f216("\u{1F3A8}", "First React Render");
    this.renderApp = tmp13;
    tmp14 = new f216("\u{1F3A8}", "First React Render useEffect");
    this.renderAppEffect = tmp14;
    tmp15 = new f216("\u{1F3A8}", "First Contentful Paint", false, true);
    this.firstContentfulPaint = tmp15;
    tmp16 = new f216("\u{1F3A8}", "React Render Messages", true);
    this.renderMessages = tmp16;
    tmp17 = new f216("\u{1F3A8}", "React Render Cached Messages", true);
    this.renderMessagesWithCache = tmp17;
    tmp18 = new f196("\u{1F3A8}", "RowGenerator.generate()");
    this.firstRowGenerator = tmp18;
    tmp19 = new f216("\u{1F5A5}\uFE0F", "Display Cached Messages", false, true);
    this.displayMessagesWithCache = tmp19;
    tmp20 = new f216("\u{1F3A8}", "First Render after Ready Payload", true);
    this.firstRenderAfterReadyPayload = tmp20;
    tmp21 = new f216("\u{1F3A8}", "React Render Latest Messages");
    this.renderLatestMessages = tmp21;
    tmp22 = new f216("\u{1F5A5}\uFE0F", "Display Latest Messages");
    this.displayLatestMessages = tmp22;
    tmp23 = new f196("\u{1F310}", "Initial Guild");
    this.initialGuild = tmp23;
    tmp24 = new f196("\u{1F4BE}", "Load Lazy Cache");
    this.loadLazyCache = tmp24;
    tmp25 = new f196("\u{1F4BE}", "Fetch Lazy Cache");
    this.fetchLazyCache = tmp25;
    tmp26 = new f196("\u{1F4BE}", "Parse Lazy Cache");
    this.parseLazyCache = tmp26;
    tmp27 = new f196("\u{1F4BE}", "Fetch Stale Channels");
    this.fetchStaleChannels = tmp27;
    tmp28 = new f196("\u{1F4BE}", "Deserialize Cache");
    this.deserializeCache = tmp28;
    tmp29 = new f196("\u{1F4BE}", "Dispatch Lazy Cache");
    this.dispatchLazyCache = tmp29;
    tmp30 = new f196("\u{1F310}", "Parse READY");
    this.parseReady = tmp30;
    tmp31 = new f196("\u{1F310}", "READY");
    this.ready = tmp31;
    tmp32 = new f196("\u{1F310}", "Hydrate READY");
    this.hydrateReady = tmp32;
    tmp33 = new f196("\u{1F310}", "Dispatch READY");
    this.dispatchReady = tmp33;
    tmp34 = new f196("\u{1F310}", "Parse READY Supplemental");
    this.parseReadySupplemental = tmp34;
    tmp35 = new f196("\u{1F310}", "READY Supplemental");
    this.readySupplemental = tmp35;
    tmp36 = new f196("\u{1F310}", "Hydrate READY Supplemental");
    this.hydrateReadySupplemental = tmp36;
    tmp37 = new f196("\u{1F310}", "Dispatch READY Supplemental");
    this.dispatchReadySupplemental = tmp37;
    tmp38 = new f196("\u{1F310}", "Fetch messages");
    this.fetchMessages = tmp38;
    tmp39 = new f196("\u{1F310}", "Dispatch messages");
    this.dispatchMessages = tmp39;
    obj = {};
    tmp40 = new f223();
    obj.polyfillsEnd = tmp40;
    tmp41 = new f223();
    obj.sentryEnd = tmp41;
    tmp42 = new f223();
    obj.appStateChangeStart = tmp42;
    tmp43 = new f223();
    obj.appStateChangeEnd = tmp43;
    tmp44 = new f223();
    obj.loadMiniCacheStart = tmp44;
    tmp45 = new f223();
    obj.loadStorageStart = tmp45;
    tmp46 = new f223();
    obj.loadStorageEnd = tmp46;
    this.imports = obj;
    return;
  }
}
let tmp3 = ((arg0) => {
  class TTITracker {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_9(this, TTITracker);
      items1 = [...items];
      obj = outer1_6(TTITracker);
      tmp2 = outer1_5;
      if (outer1_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.readyProperties = {};
      tmp2Result.didBackgroundApp = false;
      tmp2Result.wasEverActive = false;
      tmp2Result.wasAuthenticated = false;
      tmp2Result.interstitial = null;
      map = new Map();
      tmp2Result.cachedChannelCounts = map;
      tmp2Result.cachedChannelId = null;
      tmp2Result.cachedMessageIds = null;
      tmp2Result.messageCacheMissingReason = "never-loaded";
      tmp2Result.messageCacheAgeSeconds = null;
      tmp2Result.messageCacheCount = null;
      tmp2Result.messageCacheHavingCount = null;
      tmp2Result.messageCacheMissingCount = null;
      tmp2Result.messageRenderFullCount = null;
      tmp2Result.messageRenderCachedCount = null;
      tmp2Result.messageRenderHasMoreAfter = null;
      tmp2Result.firstAppActiveTime = null;
      tmp2Result.initialPage = null;
      tmp2Result.initialGuildId = null;
      tmp2Result.earlyCacheInfo = null;
      tmp2Result.lazyCacheInfo = null;
      tmp2Result.extraProperties = {};
      return tmp2Result;
    }
  }
  callback(TTITracker, arg0);
  let obj = {
    key: "setTTICallback",
    value(arg0) {
      let closure_0 = arg0;
      const outer1_11 = function loggerCallback() {
        if (true === callback()) {
          const outer2_11 = function loggerCallback() {
            return false;
          };
        }
      };
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "setInitialPage",
    value(initialPage) {
      this.initialPage = initialPage;
    }
  };
  items[1] = obj;
  obj = {
    key: "setInitialGuildId",
    value(initialGuildId) {
      this.initialGuildId = initialGuildId;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setEarlyCacheInfo",
    value(earlyCacheInfo) {
      this.earlyCacheInfo = earlyCacheInfo;
    }
  };
  items[4] = {
    key: "setLazyCacheInfo",
    value(lazyCacheInfo) {
      this.lazyCacheInfo = lazyCacheInfo;
    }
  };
  items[5] = {
    key: "setInterstitial",
    value(interstitial) {
      this.interstitial = interstitial;
      outer1_11();
    }
  };
  items[6] = {
    key: "addLocalMessages",
    value(arg0, arg1) {
      let size;
      const self = this;
      const cachedChannelCounts = this.cachedChannelCounts;
      const result = cachedChannelCounts.set(arg0, arg1);
      if (this.cachedChannelCounts.size > 100) {
        do {
          let cachedChannelCounts2 = self.cachedChannelCounts;
          let iter = cachedChannelCounts2.keys();
          let cachedChannelCounts3 = self.cachedChannelCounts;
          let deleteResult = cachedChannelCounts3.delete(iter.next().value);
          size = self.cachedChannelCounts.size;
        } while (size > 100);
      }
    }
  };
  items[7] = {
    key: "attachReadyPayloadProperties",
    value(readyProperties) {
      this.readyProperties = readyProperties;
    }
  };
  items[8] = {
    key: "appStateChanged",
    value(arg0) {
      const self = this;
      if ("active" === arg0) {
        if (null == self.firstAppActiveTime) {
          const _Date = Date;
          self.firstAppActiveTime = Date.now();
        }
        self.wasEverActive = true;
      }
      if (null == self.readyProperties.num_guilds) {
        self.didBackgroundApp = self.didBackgroundApp || "active" !== arg0;
      }
    }
  };
  items[9] = {
    key: "recordRender",
    value(arg0, arg1) {
      const self = this;
      const renderMessages = this.renderMessages;
      renderMessages.record();
      let tmp2 = arg1;
      if (!arg1) {
        tmp2 = arg0 > 0;
      }
      if (tmp2) {
        const renderMessagesWithCache = self.renderMessagesWithCache;
        renderMessagesWithCache.record();
      }
      if (arg1) {
        const renderLatestMessages = self.renderLatestMessages;
        renderLatestMessages.record();
      }
    }
  };
  items[10] = {
    key: "recordMessageRender",
    value(cachedChannelId, arr, arg2, messageRenderHasMoreAfter) {
      let self = this;
      self = this;
      const _default = outer1_1(outer1_4[8]).default;
      const renderLatestMessages = this.renderLatestMessages;
      if (!renderLatestMessages.hasData()) {
        const renderMessages = self.renderMessages;
        renderMessages.record();
        if (arr.length > 0) {
          const renderMessagesWithCache = self.renderMessagesWithCache;
          renderMessagesWithCache.record();
        }
        if (arg2) {
          const renderLatestMessages2 = self.renderLatestMessages;
          renderLatestMessages2.record();
          if (null == self.cachedChannelId) {
            self.messageCacheMissingReason = "no-cache";
          } else if (self.cachedChannelId !== cachedChannelId) {
            self.messageCacheMissingReason = "channel-changed";
          } else {
            if (null != self.cachedMessageIds) {
              if (0 !== self.cachedMessageIds.length) {
                if (0 === arr.length) {
                  self.messageCacheMissingReason = "channel-empty";
                } else if (cachedChannelId === self.cachedChannelId) {
                  let cachedMessageIds = self.cachedMessageIds;
                  const sorted = cachedMessageIds.sort(_default.compare);
                  const sorted1 = arr.sort(_default.compare);
                  const _Math = Math;
                  self.messageCacheAgeSeconds = Math.floor((_default.extractTimestamp(sorted1.reverse()[0]) - _default.extractTimestamp(sorted.reverse()[0])) / 1000);
                  const length = arr.filter((arg0) => {
                    const cachedMessageIds = self.cachedMessageIds;
                    let hasItem;
                    if (null != cachedMessageIds) {
                      hasItem = cachedMessageIds.includes(arg0);
                    }
                    return hasItem;
                  }).length;
                  const cachedChannelCounts = self.cachedChannelCounts;
                  const value = cachedChannelCounts.get(cachedChannelId);
                  let tmp8 = null;
                  if (null != value) {
                    tmp8 = value;
                  }
                  self.messageCacheCount = tmp8;
                  self.messageCacheHavingCount = length;
                  self.messageCacheMissingCount = arr.length - length;
                  self.messageRenderFullCount = arr.length;
                  self.messageRenderCachedCount = self.cachedMessageIds.length;
                  self.messageRenderHasMoreAfter = messageRenderHasMoreAfter;
                  const extractTimestampResult = _default.extractTimestamp(sorted1.reverse()[0]);
                }
              }
            }
            self.messageCacheMissingReason = "no-cache";
          }
        } else {
          if (!tmp5) {
            self.cachedChannelId = cachedChannelId;
            self.cachedMessageIds = arr;
            if (arr.length > 0) {
              self.messageCacheMissingReason = null;
            }
          }
          tmp5 = null != self.cachedChannelId && cachedChannelId !== self.cachedChannelId;
        }
      }
    }
  };
  items[11] = {
    key: "getStartTime",
    value(arg0) {
      let start = arg0;
      const self = this;
      if (this.extraProperties.headless_task_ran) {
        if (null != self.firstAppActiveTime) {
          start = self.firstAppActiveTime;
        }
        return start;
      }
      if (null == start) {
        start = self.loadIndex.start;
      }
    }
  };
  items[12] = {
    key: "processNativeLogs",
    value(arg0, arg1) {
      let iter2;
      const self = this;
      const startTime = this.getStartTime(arg1);
      const tmp2 = outer1_16(arg0);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          let label = value.label;
          if ("Finish MainApplication.initialize()" === label) {
            let tmp16 = outer1_19;
            self.extraProperties.time_main_application_initialize_end = outer1_19(startTime, value.timestamp);
          } else if ("GET_REACT_INSTANCE_MANAGER_START" === label) {
            let tmp15 = outer1_19;
            self.extraProperties.time_get_react_instance_manager_start = outer1_19(startTime, value.timestamp);
          } else if ("GET_REACT_INSTANCE_MANAGER_END" === label) {
            let tmp14 = outer1_19;
            self.extraProperties.time_get_react_instance_manager_end = outer1_19(startTime, value.timestamp);
          } else if ("PROCESS_PACKAGES_START" === label) {
            let tmp13 = outer1_19;
            self.extraProperties.time_process_packages_start = outer1_19(startTime, value.timestamp);
          } else if ("PROCESS_PACKAGES_END" === label) {
            let tmp12 = outer1_19;
            self.extraProperties.time_process_packages_end = outer1_19(startTime, value.timestamp);
          } else if ("CREATE_CATALYST_INSTANCE_START" === label) {
            let tmp11 = outer1_19;
            self.extraProperties.time_create_catalyst_instance_start = outer1_19(startTime, value.timestamp);
          } else if ("CREATE_CATALYST_INSTANCE_END" === label) {
            let tmp10 = outer1_19;
            self.extraProperties.time_create_catalyst_instance_end = outer1_19(startTime, value.timestamp);
          } else if ("CREATE_UI_MANAGER_MODULE_START" === label) {
            let tmp9 = outer1_19;
            self.extraProperties.time_create_ui_manager_module_start = outer1_19(startTime, value.timestamp);
          } else if ("CREATE_UI_MANAGER_MODULE_END" === label) {
            let tmp8 = outer1_19;
            self.extraProperties.time_create_ui_manager_module_end = outer1_19(startTime, value.timestamp);
          } else if ("REACT_BRIDGE_LOADING_START" === label) {
            let tmp7 = outer1_19;
            self.extraProperties.time_react_bridge_loading_start = outer1_19(startTime, value.timestamp);
          } else if ("REACT_BRIDGE_LOADING_END" === label) {
            let tmp6 = outer1_19;
            self.extraProperties.time_react_bridge_loading_end = outer1_19(startTime, value.timestamp);
          } else if ("CacheStorage Init Start" === label) {
            let tmp5 = outer1_19;
            self.extraProperties.time_init_native_storage_start = outer1_19(startTime, value.timestamp);
          } else if ("CacheStorage Init End" === label) {
            let tmp4 = outer1_19;
            self.extraProperties.time_init_native_storage_end = outer1_19(startTime, value.timestamp);
          } else if ("RUN_JS_BUNDLE_START" === label) {
            let tmp3 = outer1_19;
            self.extraProperties.time_before_js_bundle_start = outer1_19(startTime, value.timestamp);
          } else if ("ChatModule.updateRows() Start" === label) {
            if (null == self.extraProperties.time_first_native_message_render_start) {
              let tmp18 = outer1_19;
              self.extraProperties.time_first_native_message_render_start = outer1_19(startTime, value.timestamp);
            }
          } else if ("ChatModule.updateRows() Finish" === label) {
            if (null == self.extraProperties.time_first_native_message_render_end) {
              let tmp17 = outer1_19;
              self.extraProperties.time_first_native_message_render_end = outer1_19(startTime, value.timestamp);
            }
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[13] = {
    key: "serializeAppStartupMetrics",
    value() {
      return { ready_packing_algorithm: this.readyProperties.packing_algorithm, ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms };
    }
  };
  items[14] = {
    key: "serializeWebPerfStartupMetrics",
    value(arg0) {
      let firstRenderAfterReadyPayload;
      const obj = {};
      const merged = Object.assign(this.serializeAppStartupMetrics());
      ({ wasAuthenticated: obj["was_authenticated"], firstRenderAfterReadyPayload } = this);
      obj["time_first_render_after_ready_end"] = firstRenderAfterReadyPayload.serialize(arg0);
      return obj;
    }
  };
  items[15] = {
    key: "serializeTTITracker",
    value(arg0) {
      let loadIndex;
      const self = this;
      const startTime = this.getStartTime(arg0);
      const tmp2 = outer1_1(outer1_4[9]);
      const found = outer1_1(outer1_4[9])(outer1_2(outer1_4[6]).logGroups[0].logs).filter((log) => {
        log = log.log;
        return log.startsWith("Require ");
      });
      const mapped = found.map((delta) => {
        delta = delta.delta;
        let num = 0;
        if (null != delta) {
          num = delta;
        }
        return num;
      });
      const tmp2Result = outer1_1(outer1_4[9])(outer1_2(outer1_4[6]).logGroups[0].logs);
      const result = this.serializeAppStartupMetrics();
      const obj = {};
      const merged = Object.assign(this.extraProperties);
      const merged1 = Object.assign(result);
      obj["initial_page"] = this.initialPage;
      ({ initialGuildId: obj2["guild_id"], loadIndex } = this);
      obj["time_load_index_start"] = loadIndex.serializeStart(startTime);
      const loadIndex2 = this.loadIndex;
      obj["time_load_index_end"] = loadIndex2.serializeEnd(startTime);
      const beginFastConnect = this.beginFastConnect;
      obj["time_begin_fast_connect_start"] = beginFastConnect.serializeStart(startTime);
      const beginFastConnect2 = this.beginFastConnect;
      obj["time_begin_fast_connect_end"] = beginFastConnect2.serializeEnd(startTime);
      const loadImports = this.loadImports;
      obj["time_load_imports_start"] = loadImports.serializeStart(startTime);
      const loadImports2 = this.loadImports;
      obj["time_load_imports_end"] = loadImports2.serializeEnd(startTime);
      const init = this.init;
      obj["time_init_start"] = init.serializeStart(startTime);
      const init2 = this.init;
      obj["time_init_end"] = init2.serializeEnd(startTime);
      const loadStorage = this.loadStorage;
      obj["time_load_storage_start"] = loadStorage.serializeStart(startTime);
      const loadStorage2 = this.loadStorage;
      obj["time_load_storage_end"] = loadStorage2.serializeEnd(startTime);
      const parseStorage = this.parseStorage;
      obj["time_parse_storage_start"] = parseStorage.serializeStart(startTime);
      const parseStorage2 = this.parseStorage;
      obj["time_parse_storage_end"] = parseStorage2.serializeEnd(startTime);
      const loadMiniCache = this.loadMiniCache;
      obj["time_load_mini_cache_start"] = loadMiniCache.serializeStart(startTime);
      const loadMiniCache2 = this.loadMiniCache;
      obj["time_load_mini_cache_end"] = loadMiniCache2.serializeEnd(startTime);
      const fetchGuildCache = this.fetchGuildCache;
      obj["time_fetch_initial_guild_start"] = fetchGuildCache.serializeStart(startTime);
      const fetchGuildCache2 = this.fetchGuildCache;
      obj["time_fetch_initial_guild_end"] = fetchGuildCache2.serializeEnd(startTime);
      const loadCachedMessages = this.loadCachedMessages;
      obj["time_load_cached_messages_start"] = loadCachedMessages.serializeStart(startTime);
      const loadCachedMessages2 = this.loadCachedMessages;
      obj["time_load_cached_messages_end"] = loadCachedMessages2.serializeEnd(startTime);
      const renderApp = this.renderApp;
      obj["time_render_app_start"] = renderApp.serialize(startTime);
      const renderAppEffect = this.renderAppEffect;
      obj["time_render_app_effect_start"] = renderAppEffect.serialize(startTime);
      const firstContentfulPaint = this.firstContentfulPaint;
      obj["time_first_contentful_paint"] = firstContentfulPaint.serialize(startTime);
      const renderMessages = this.renderMessages;
      obj["time_render_messages_end"] = renderMessages.serialize(startTime);
      const renderMessagesWithCache = this.renderMessagesWithCache;
      obj["time_render_messages_with_cache_end"] = renderMessagesWithCache.serialize(startTime);
      const renderLatestMessages = this.renderLatestMessages;
      obj["time_render_latest_messages_end"] = renderLatestMessages.serialize(startTime);
      const displayMessagesWithCache = this.displayMessagesWithCache;
      obj["time_display_messages_with_cache_end"] = displayMessagesWithCache.serialize(startTime);
      const displayLatestMessages = this.displayLatestMessages;
      obj["time_display_latest_messages_end"] = displayLatestMessages.serialize(startTime);
      const firstRowGenerator = this.firstRowGenerator;
      obj["time_first_row_generator_start"] = firstRowGenerator.serializeStart(startTime);
      const firstRowGenerator2 = this.firstRowGenerator;
      obj["time_first_row_generator_end"] = firstRowGenerator2.serializeEnd(startTime);
      const initialGuild = this.initialGuild;
      obj["time_initial_guild_start"] = initialGuild.serializeStart(startTime);
      const initialGuild2 = this.initialGuild;
      obj["time_initial_guild_end"] = initialGuild2.serializeEnd(startTime);
      const loadLazyCache = this.loadLazyCache;
      obj["time_load_lazy_cache_start"] = loadLazyCache.serializeStart(startTime);
      const loadLazyCache2 = this.loadLazyCache;
      obj["time_load_lazy_cache_end"] = loadLazyCache2.serializeEnd(startTime);
      const fetchLazyCache = this.fetchLazyCache;
      obj["time_fetch_lazy_cache_start"] = fetchLazyCache.serializeStart(startTime);
      const fetchLazyCache2 = this.fetchLazyCache;
      obj["time_fetch_lazy_cache_end"] = fetchLazyCache2.serializeEnd(startTime);
      const parseLazyCache = this.parseLazyCache;
      obj["time_parse_lazy_cache_start"] = parseLazyCache.serializeStart(startTime);
      const parseLazyCache2 = this.parseLazyCache;
      obj["time_parse_lazy_cache_end"] = parseLazyCache2.serializeEnd(startTime);
      const fetchStaleChannels = this.fetchStaleChannels;
      obj["time_fetch_stale_channels_start"] = fetchStaleChannels.serializeStart(startTime);
      const fetchStaleChannels2 = this.fetchStaleChannels;
      obj["time_fetch_stale_channels_end"] = fetchStaleChannels2.serializeEnd(startTime);
      const deserializeCache = this.deserializeCache;
      obj["time_deserialize_cache_start"] = deserializeCache.serializeStart(startTime);
      const deserializeCache2 = this.deserializeCache;
      obj["time_deserialize_cache_end"] = deserializeCache2.serializeEnd(startTime);
      const dispatchLazyCache = this.dispatchLazyCache;
      obj["time_dispatch_lazy_cache_start"] = dispatchLazyCache.serializeStart(startTime);
      const dispatchLazyCache2 = this.dispatchLazyCache;
      obj["time_dispatch_lazy_cache_end"] = dispatchLazyCache2.serializeEnd(startTime);
      const parseReady = this.parseReady;
      obj["time_parse_ready_start"] = parseReady.serializeStart(startTime);
      const parseReady2 = this.parseReady;
      obj["time_parse_ready_end"] = parseReady2.serializeEnd(startTime);
      const ready = this.ready;
      obj["time_ready_start"] = ready.serializeStart(startTime);
      const ready2 = this.ready;
      obj["time_ready_end"] = ready2.serializeEnd(startTime);
      const hydrateReady = this.hydrateReady;
      obj["time_hydrate_ready_start"] = hydrateReady.serializeStart(startTime);
      const hydrateReady2 = this.hydrateReady;
      obj["time_hydrate_ready_end"] = hydrateReady2.serializeEnd(startTime);
      const dispatchReady = this.dispatchReady;
      obj["time_dispatch_ready_start"] = dispatchReady.serializeStart(startTime);
      const dispatchReady2 = this.dispatchReady;
      obj["time_dispatch_ready_end"] = dispatchReady2.serializeEnd(startTime);
      const parseReadySupplemental = this.parseReadySupplemental;
      obj["time_parse_ready_supplemental_start"] = parseReadySupplemental.serializeStart(startTime);
      const parseReadySupplemental2 = this.parseReadySupplemental;
      obj["time_parse_ready_supplemental_end"] = parseReadySupplemental2.serializeEnd(startTime);
      const readySupplemental = this.readySupplemental;
      obj["time_ready_supplemental_start"] = readySupplemental.serializeStart(startTime);
      const readySupplemental2 = this.readySupplemental;
      obj["time_ready_supplemental_end"] = readySupplemental2.serializeEnd(startTime);
      const hydrateReadySupplemental = this.hydrateReadySupplemental;
      obj["time_hydrate_ready_supplemental_start"] = hydrateReadySupplemental.serializeStart(startTime);
      const hydrateReadySupplemental2 = this.hydrateReadySupplemental;
      obj["time_hydrate_ready_supplemental_end"] = hydrateReadySupplemental2.serializeEnd(startTime);
      const dispatchReadySupplemental = this.dispatchReadySupplemental;
      obj["time_dispatch_ready_supplemental_start"] = dispatchReadySupplemental.serializeStart(startTime);
      const dispatchReadySupplemental2 = this.dispatchReadySupplemental;
      obj["time_dispatch_ready_supplemental_end"] = dispatchReadySupplemental2.serializeEnd(startTime);
      const fetchMessages = this.fetchMessages;
      obj["time_fetch_messages_start"] = fetchMessages.serializeStart(startTime);
      const fetchMessages2 = this.fetchMessages;
      obj["time_fetch_messages_end"] = fetchMessages2.serializeEnd(startTime);
      const dispatchMessages = this.dispatchMessages;
      obj["time_dispatch_messages_start"] = dispatchMessages.serializeStart(startTime);
      const dispatchMessages2 = this.dispatchMessages;
      obj["time_dispatch_messages_end"] = dispatchMessages2.serializeEnd(startTime);
      const loadFastConnectNativeModule = this.loadFastConnectNativeModule;
      obj["time_load_fast_connect_native_module_start"] = loadFastConnectNativeModule.serializeStart(startTime);
      const loadFastConnectNativeModule2 = this.loadFastConnectNativeModule;
      obj["time_load_fast_connect_native_module_end"] = loadFastConnectNativeModule2.serializeEnd(startTime);
      obj["identify_total_server_duration_ms"] = this.readyProperties.identify_total_server_duration_ms;
      obj["identify_api_duration_ms"] = this.readyProperties.identify_api_duration_ms;
      obj["identify_guilds_duration_ms"] = this.readyProperties.identify_guilds_duration_ms;
      obj["ready_compressed_byte_size"] = this.readyProperties.compressed_byte_size;
      obj["ready_uncompressed_byte_size"] = this.readyProperties.uncompressed_byte_size;
      obj["identify_compressed_byte_size"] = this.readyProperties.identify_compressed_byte_size;
      obj["identify_uncompressed_byte_size"] = this.readyProperties.identify_uncompressed_byte_size;
      obj["ready_compression_algorithm"] = this.readyProperties.compression_algorithm;
      obj["is_reconnect"] = this.readyProperties.is_reconnect;
      obj["is_fast_connect"] = this.readyProperties.is_fast_connect;
      obj["did_force_clear_guild_hashes"] = this.readyProperties.did_force_clear_guild_hashes;
      obj["num_guilds"] = this.readyProperties.num_guilds;
      obj["num_changed_guild_channels"] = this.readyProperties.num_guild_channels;
      obj["ready_presences_size"] = this.readyProperties.presences_size;
      obj["ready_users_size"] = this.readyProperties.users_size;
      obj["ready_read_states_size"] = this.readyProperties.read_states_size;
      obj["ready_private_channels_size"] = this.readyProperties.private_channels_size;
      obj["ready_user_guild_settings_size"] = this.readyProperties.user_guild_settings_size;
      obj["ready_relationships_size"] = this.readyProperties.relationships_size;
      obj["ready_experiments_size"] = this.readyProperties.experiments_size;
      obj["ready_user_settings_size"] = this.readyProperties.user_settings_size;
      obj["ready_remaining_data_size"] = this.readyProperties.remaining_data_size;
      obj["ready_guild_channels_size"] = this.readyProperties.guild_channels_size;
      obj["ready_guild_members_size"] = this.readyProperties.guild_members_size;
      obj["ready_guild_presences_size"] = this.readyProperties.guild_presences_size;
      obj["ready_guild_roles_size"] = this.readyProperties.guild_roles_size;
      obj["ready_guild_emojis_size"] = this.readyProperties.guild_emojis_size;
      obj["ready_guild_remaining_data_size"] = this.readyProperties.guild_remaining_data_size;
      obj["ready_guild_threads_size"] = this.readyProperties.guild_threads_size;
      obj["ready_guild_stickers_size"] = this.readyProperties.guild_stickers_size;
      obj["ready_guild_events_size"] = this.readyProperties.guild_events_size;
      obj["ready_guild_features_size"] = this.readyProperties.guild_features_size;
      obj["ready_size_metrics_duration_ms"] = this.readyProperties.size_metrics_duration_ms;
      obj["had_cache_at_startup"] = this.readyProperties.had_cache_at_startup;
      obj["used_cache_at_startup"] = this.readyProperties.used_cache_at_startup;
      obj["was_authenticated"] = this.wasAuthenticated;
      obj["did_background_app"] = this.didBackgroundApp;
      obj["interstitial"] = this.interstitial;
      obj["message_cache_missing_reason"] = this.messageCacheMissingReason;
      obj["message_cache_age_seconds"] = this.messageCacheAgeSeconds;
      obj["message_cache_count"] = this.messageCacheCount;
      obj["message_cache_having_count"] = this.messageCacheHavingCount;
      obj["message_cache_missing_count"] = this.messageCacheMissingCount;
      obj["message_render_full_count"] = this.messageRenderFullCount;
      obj["message_render_cached_count"] = this.messageRenderCachedCount;
      obj["message_render_has_more_after"] = this.messageRenderHasMoreAfter;
      obj["duration_major_js_imports"] = this.loadImports.end - this.loadIndex.start + mapped.sum();
      const earlyCacheInfo = this.earlyCacheInfo;
      let guilds;
      if (null != earlyCacheInfo) {
        guilds = earlyCacheInfo.guilds;
      }
      let num = 0;
      if (null != guilds) {
        num = guilds;
      }
      const lazyCacheInfo = self.lazyCacheInfo;
      let guilds1;
      if (null != lazyCacheInfo) {
        guilds1 = lazyCacheInfo.guilds;
      }
      let num2 = 0;
      if (null != guilds1) {
        num2 = guilds1;
      }
      obj["cache_num_guilds"] = Math.max(num, num2);
      const lazyCacheInfo2 = self.lazyCacheInfo;
      let privateChannels;
      if (null != lazyCacheInfo2) {
        privateChannels = lazyCacheInfo2.privateChannels;
      }
      obj["cache_num_private_channels"] = privateChannels;
      const lazyCacheInfo3 = self.lazyCacheInfo;
      let basicChannels;
      if (null != lazyCacheInfo3) {
        basicChannels = lazyCacheInfo3.basicChannels;
      }
      obj["cache_num_basic_channels"] = basicChannels;
      const lazyCacheInfo4 = self.lazyCacheInfo;
      let basicChannelsStale;
      if (null != lazyCacheInfo4) {
        basicChannelsStale = lazyCacheInfo4.basicChannelsStale;
      }
      obj["cache_num_basic_channels_stale"] = basicChannelsStale;
      const lazyCacheInfo5 = self.lazyCacheInfo;
      let fullChannels;
      if (null != lazyCacheInfo5) {
        fullChannels = lazyCacheInfo5.fullChannels;
      }
      obj["cache_num_full_channels"] = fullChannels;
      const lazyCacheInfo6 = self.lazyCacheInfo;
      let fullChannelGuilds;
      if (null != lazyCacheInfo6) {
        fullChannelGuilds = lazyCacheInfo6.fullChannelGuilds;
      }
      obj["cache_num_full_channel_guilds"] = fullChannelGuilds;
      obj["num_imports_at_load_index_end"] = self.loadIndex.endNumImports;
      obj["num_imports_at_init_end"] = self.init.endNumImports;
      obj["num_imports_at_load_mini_cache_end"] = self.loadMiniCache.endNumImports;
      obj["num_imports_at_render_app_start"] = self.renderApp.numImports;
      obj["num_imports_at_render_app_effect_start"] = self.renderAppEffect.numImports;
      obj["num_imports_at_render_messages_end"] = self.renderMessages.numImports;
      obj["num_imports_at_render_messages_with_cache_end"] = self.renderMessagesWithCache.numImports;
      obj["num_imports_at_render_latest_messages_end"] = self.renderLatestMessages.numImports;
      obj["num_imports_at_load_lazy_cache_start"] = self.loadLazyCache.startNumImports;
      obj["num_imports_at_load_lazy_cache_end"] = self.loadLazyCache.endNumImports;
      obj["num_imports_at_ready_start"] = self.ready.startNumImports;
      obj["num_imports_at_ready_end"] = self.ready.endNumImports;
      obj["num_imports_at_ready_supplemental_start"] = self.readySupplemental.startNumImports;
      obj["num_imports_at_ready_supplemental_end"] = self.readySupplemental.endNumImports;
      obj["duration_imports_at_load_index_start"] = Math.ceil(self.loadIndex.startImportTime);
      obj["duration_imports_at_load_index_end"] = Math.ceil(self.loadIndex.endImportTime);
      obj["duration_imports_at_init_end"] = Math.ceil(self.init.endImportTime);
      obj["duration_imports_at_load_mini_cache_end"] = Math.ceil(self.loadMiniCache.endImportTime);
      obj["duration_imports_at_render_app_start"] = Math.ceil(self.renderApp.importTime);
      obj["duration_imports_at_render_app_effect_start"] = Math.ceil(self.renderAppEffect.importTime);
      obj["duration_imports_at_render_messages_end"] = Math.ceil(self.renderMessages.importTime);
      obj["duration_imports_at_render_messages_with_cache_end"] = Math.ceil(self.renderMessagesWithCache.importTime);
      obj["duration_imports_at_render_latest_messages_end"] = Math.ceil(self.renderLatestMessages.importTime);
      obj["duration_imports_at_load_lazy_cache_start"] = Math.ceil(self.loadLazyCache.startImportTime);
      obj["duration_imports_at_load_lazy_cache_end"] = Math.ceil(self.loadLazyCache.endImportTime);
      obj["duration_imports_at_ready_start"] = Math.ceil(self.ready.startImportTime);
      obj["duration_imports_at_ready_end"] = Math.ceil(self.ready.endImportTime);
      obj["duration_imports_at_ready_supplemental_start"] = Math.ceil(self.readySupplemental.startImportTime);
      obj["duration_imports_at_ready_supplemental_end"] = Math.ceil(self.readySupplemental.endImportTime);
      obj["duration_imports_at_polyfills_end"] = Math.ceil(self.imports.polyfillsEnd.time);
      obj["duration_imports_at_sentry_end"] = Math.ceil(self.imports.sentryEnd.time);
      obj["duration_imports_at_fast_connect_start"] = Math.ceil(self.beginFastConnect.startImportTime);
      obj["duration_imports_at_fast_connect_end"] = Math.ceil(self.beginFastConnect.endImportTime);
      obj["duration_imports_at_app_state_change_start"] = Math.ceil(self.imports.appStateChangeStart.time);
      obj["duration_imports_at_app_state_change_end"] = Math.ceil(self.imports.appStateChangeEnd.time);
      obj["duration_imports_at_load_mini_cache_start"] = Math.ceil(self.imports.loadMiniCacheStart.time);
      obj["duration_imports_at_load_storage_start"] = Math.ceil(self.imports.loadStorageStart.time);
      obj["duration_imports_at_load_storage_end"] = Math.ceil(self.imports.loadStorageEnd.time);
      return obj;
    }
  };
  return importDefaultResult(TTITracker, items);
})(importDefaultResult(TTITrackers));
tmp3 = new tmp3();
let result = require("_inherits").fileFinishedImporting("modules/tti_analytics/TTITracker.tsx");

export default tmp3;
