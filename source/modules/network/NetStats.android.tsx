// Module ID: 6690
// Function ID: 51777
// Name: receiveNetworkInfoformation
// Dependencies: []
// Exports: getSignalStrength, isSlowNetwork

// Module 6690 (receiveNetworkInfoformation)
function receiveNetworkInfoformation(arg0) {
  if (null == closure_15) {
    closure_15 = arg0;
  }
  updateNetworkUsage();
}
function updateNetworkUsage() {
  if (null != NativeModules.SystemResourceManager.getNetworkUsage) {
    const SystemResourceManager = NativeModules.SystemResourceManager;
    const networkUsage = SystemResourceManager.getNetworkUsage((arg0) => {
      const obj = { state: closure_14, nativeStats: arg0, rtc: callback(closure_2[11]).getRTCTotalBytes() };
      closure_11.fileOnly("Updating Network Info", obj);
    });
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
const NativeModules = tmp2.NativeModules;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const AnalyticEvents = arg1(dependencyMap[7]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[8]);
importDefaultResult = new importDefaultResult("NetStats");
let closure_12 = {};
let closure_13 = null;
const obj = { "Bool(true)": "mn", "Bool(true)": "description", "Bool(true)": "Array", type: arg1(dependencyMap[9]).NetInfoStateType.unknown };
let closure_15 = null;
let closure_16 = "active" === tmp2.AppState.currentState;
let closure_17 = 0;
let closure_18 = 0;
let closure_19 = 0;
let closure_20 = 0;
importDefault(dependencyMap[10]).addChangeCallback(receiveNetworkInfoformation);
const importDefaultResult1 = importDefault(dependencyMap[10]);
const networkInformation = importDefault(dependencyMap[10]).getNetworkInformation();
networkInformation.then(receiveNetworkInfoformation);
let tmp7 = () => {
  class EventTracker {
    constructor() {
      self = this;
      f51799 = this;
      tmp = closure_4(this, EventTracker);
      num = 0;
      if (closure_16) {
        tmp2 = globalThis;
        _setTimeout = setTimeout;
        tmp3 = f51794;
        tmp4 = f51791;
        num2 = 12;
        num3 = 1;
        num = setTimeout(() => self.track(), f51794(f51791[12]).Millis.MINUTE);
      }
      self.trackTimeout = num;
      num4 = 0;
      if (closure_16) {
        tmp5 = globalThis;
        _setInterval = setInterval;
        tmp6 = f51794;
        tmp7 = f51791;
        num5 = 12;
        num6 = 5;
        num4 = setInterval(() => self.writeExistingEventStorage(), 5 * f51794(f51791[12]).Millis.SECOND);
      }
      self.flushStorageInterval = num4;
      self.didEverTrack = false;
      Storage = f51799(f51791[13]).Storage;
      value = Storage.get("previousNetStatsEvents");
      if (null == value) {
        value = [];
      }
      self.existingEvents = value;
      self.trackExistingEvents = () => {
        if (self.existingEvents.length > 0) {
          const result = closure_8.submitEventsImmediately(self.existingEvents);
          result.then(() => {
            closure_11.fileOnly("Successfully logged existing network usage events", closure_0.existingEvents);
            closure_0.existingEvents = [];
            const result = closure_0.writeExistingEventStorage();
          }).catch((status) => {
            if (tmp) {
              closure_11.error("Failed to log log existing network usage events", closure_0.existingEvents, status);
            }
          });
          const nextPromise = result.then(() => {
            closure_11.fileOnly("Successfully logged existing network usage events", closure_0.existingEvents);
            closure_0.existingEvents = [];
            const result = closure_0.writeExistingEventStorage();
          });
        }
      };
      if (closure_7.isConnected()) {
        trackExistingEventsResult = self.trackExistingEvents();
      } else {
        tmp8 = f51794;
        tmp9 = f51791;
        num7 = 14;
        obj = f51794(f51791[14]);
        str = "CONNECTION_OPEN";
        subscription = obj.subscribe("CONNECTION_OPEN", self.trackExistingEvents);
      }
      return;
    }
  }
  const callback = EventTracker;
  let obj = {
    key: "handleAppStateChange",
    value(arg0) {
      const self = this;
      let closure_0 = this;
      if (!this.didEverTrack) {
        if (arg0) {
          if (!tmp) {
            let closure_16 = true;
            const _setTimeout = setTimeout;
            self.trackTimeout = setTimeout(() => closure_21.track(), callback2(closure_2[12]).Millis.MINUTE);
            const _setInterval = setInterval;
            self.flushStorageInterval = setInterval(() => self.writeExistingEventStorage(), 5000);
          }
        } else if (tmp) {
          self.track();
        }
      }
    }
  };
  const items = [obj, , , ];
  obj = { key: "writeExistingEventStorage" };
  let closure_2 = callback(async function() {
    const self = this;
    if (!self.didEverTrack) {
      if (closure_16) {
        let items = [yield self.getQueuedEvent()];
      }
      const existingEvents = self.existingEvents;
      const combined = existingEvents.concat(items);
      if (0 === combined.length) {
        const Storage2 = callback(closure_2[13]).Storage;
        Storage2.remove("previousNetStatsEvents");
      } else {
        const Storage = callback(closure_2[13]).Storage;
        const result = Storage.set("previousNetStatsEvents", combined);
      }
    }
    items = [];
  });
  obj.value = function writeExistingEventStorage() {
    return callback3(...arguments);
  };
  items[1] = obj;
  obj = { key: "track" };
  let closure_1 = callback(async function() {
    const self = this;
    let items;
    if (!self.didEverTrack) {
      self.didEverTrack = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(self.trackTimeout);
      const _clearInterval = clearInterval;
      clearInterval(self.flushStorageInterval);
      items = [yield self.getQueuedEvent()];
      const result = closure_8.submitEventsImmediately(items);
      result.then(() => {
        closure_11.fileOnly("Successfully tracked latest network usage", items);
        const result = self.writeExistingEventStorage();
      }).catch((status) => {
        if (429 !== status.status) {
          closure_11.error("Failed to track latest network usage", items, status);
        }
        const existingEvents = self.existingEvents;
        existingEvents.push(items[0]);
        const result = self.writeExistingEventStorage();
      });
      const nextPromise = result.then(() => {
        closure_11.fileOnly("Successfully tracked latest network usage", items);
        const result = self.writeExistingEventStorage();
      });
    }
  });
  obj.value = function track() {
    return callback2(...arguments);
  };
  items[2] = obj;
  const obj1 = { key: "getQueuedEvent" };
  let closure_0 = callback(async () => {
    callback3();
    let obj = callback2(closure_2[15]);
    const tmp2 = yield obj.getAppFirstVisibleTimestamp();
    const tmp3 = yield callback(closure_2[16]).getSession();
    obj = { type: constants.APP_NETWORK_USAGE };
    obj = {};
    const obj2 = callback(closure_2[16]);
    const merged = Object.assign(callback(closure_2[17]).getDeviceMetadata());
    obj["client_track_timestamp"] = Date.now();
    let uuid;
    if (null != tmp3) {
      uuid = tmp3.uuid;
    }
    obj["client_heartbeat_session_id"] = uuid;
    const obj5 = callback(closure_2[17]);
    obj["load_id"] = callback(closure_2[17]).currentLoadId();
    obj["num_guilds"] = guildCount.getGuildCount();
    obj["was_authenticated"] = callback2(closure_2[18]).wasAuthenticated;
    obj["did_background_app"] = callback2(closure_2[18]).didBackgroundApp;
    obj["headless_task_ran"] = callback2(closure_2[18]).extraProperties.headless_task_ran;
    const ready = callback2(closure_2[18]).ready;
    obj["ready_payload_duration_ms"] = ready.serializeEnd(tmp2);
    let signalStrengthLevel;
    if (null != signalStrengthLevel) {
      signalStrengthLevel = signalStrengthLevel.signalStrengthLevel;
    }
    let tmp7;
    if (null != signalStrengthLevel) {
      tmp7 = signalStrengthLevel;
    }
    obj["initial_signal_strength_level"] = tmp7;
    signalStrengthLevel = closure_12.signalStrengthLevel;
    let tmp8;
    if (null != signalStrengthLevel) {
      tmp8 = signalStrengthLevel;
    }
    obj["final_signal_strength_level"] = tmp8;
    let type;
    if (null != closure_15) {
      type = closure_15.type;
    }
    let tmp10;
    if (null != type) {
      tmp10 = type;
    }
    obj["initial_network_type"] = tmp10;
    obj["final_network_type"] = closure_14.type;
    let effectiveSpeed;
    if (null != closure_15) {
      effectiveSpeed = closure_15.effectiveSpeed;
    }
    let tmp12;
    if (null != effectiveSpeed) {
      tmp12 = effectiveSpeed;
    }
    obj["initial_cellular_generation"] = tmp12;
    obj["final_cellular_generation"] = closure_14.effectiveSpeed;
    obj["is_network_roaming"] = closure_12.isNetworkRoaming;
    obj["cellular_receive_bytes"] = closure_12.cellularReceiveBytes;
    obj["cellular_send_bytes"] = closure_12.cellularSendBytes;
    obj["total_receive_bytes"] = closure_12.totalReceiveBytes;
    obj["total_send_bytes"] = closure_12.totalSendBytes;
    obj["uid_receive_bytes"] = closure_12.uidReceiveBytes;
    obj["uid_send_bytes"] = closure_12.uidSendBytes;
    obj["socket_bytes_received"] = closure_12.socketBytesReceived;
    obj["ota_bytes_received"] = closure_12.otaBytesReceived;
    obj["ota_num_requests"] = closure_12.otaNumRequests;
    obj["xhr_bytes_received"] = closure_12.xhrBytesReceived;
    obj["xhr_num_requests"] = closure_12.xhrNumRequests;
    obj["fresco_bytes_received"] = closure_12.frescoBytesReceived;
    obj["fresco_num_requests"] = closure_12.frescoNumRequests;
    obj["download_bytes_received"] = closure_12.downloadBytesReceived;
    obj["download_num_requests"] = closure_12.downloadNumRequests;
    obj["media_player_bytes_received"] = closure_12.mediaPlayerBytesReceived;
    const obj6 = callback(closure_2[17]);
    obj["rtc_bytes"] = callback(closure_2[11]).getRTCTotalBytes();
    obj["num_message_sends"] = closure_17;
    let tmp13;
    if (0 !== closure_17) {
      tmp13 = closure_18;
    }
    obj["max_message_send_duration"] = tmp13;
    let tmp14;
    if (0 !== closure_17) {
      tmp14 = closure_19;
    }
    obj["max_message_queue_length"] = tmp14;
    obj["num_message_send_fails"] = closure_20;
    obj["num_identifies"] = socket.getSocket().identifyCount;
    const renderLatestMessages = callback2(closure_2[18]).renderLatestMessages;
    obj["render_latest_messages_duration_ms"] = renderLatestMessages.serialize(tmp2);
    obj.properties = obj;
    return obj;
  });
  obj1.value = function getQueuedEvent() {
    return callback(...arguments);
  };
  items[3] = obj1;
  return callback2(EventTracker, items);
}();
tmp7 = new tmp7();
const importDefaultResult2 = importDefault(dependencyMap[10]);
const subscription = importDefault(dependencyMap[14]).subscribe("APP_STATE_UPDATE", (state) => {
  tmp7.handleAppStateChange("active" === state.state);
});
const importDefaultResult3 = importDefault(dependencyMap[14]);
const subscription1 = importDefault(dependencyMap[14]).subscribe("MESSAGE_CREATE", (sendMessageOptions) => {
  sendMessageOptions = sendMessageOptions.sendMessageOptions;
  let sendAnalytics;
  if (null != sendMessageOptions) {
    sendAnalytics = sendMessageOptions.sendAnalytics;
  }
  if (null != sendAnalytics) {
    closure_17 = closure_17 + 1;
    const _Math = Math;
    closure_18 = Math.max(closure_18, sendMessageOptions.sendMessageOptions.sendAnalytics.duration);
    const _Math2 = Math;
    closure_19 = Math.max(closure_19, sendMessageOptions.sendMessageOptions.sendAnalytics.queueSize);
  }
});
const importDefaultResult4 = importDefault(dependencyMap[14]);
const subscription2 = importDefault(dependencyMap[14]).subscribe("MESSAGE_SEND_FAILED", () => {
  closure_20 = closure_20 + 1;
});
const importDefaultResult5 = importDefault(dependencyMap[14]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/network/NetStats.android.tsx");

export const isSlowNetwork = function isSlowNetwork() {
  let tmp = obj.type === arg1(dependencyMap[9]).NetInfoStateType.cellular;
  if (tmp) {
    let isNetworkRoaming = null != closure_12.signalStrengthLevel;
    if (isNetworkRoaming) {
      isNetworkRoaming = closure_12.signalStrengthLevel <= 2;
    }
    if (!isNetworkRoaming) {
      isNetworkRoaming = "2g" === obj.effectiveSpeed;
    }
    if (!isNetworkRoaming) {
      isNetworkRoaming = closure_12.isNetworkRoaming;
    }
    tmp = isNetworkRoaming;
  }
  return tmp;
};
export const getSignalStrength = function getSignalStrength() {
  return closure_12.signalStrengthLevel;
};
