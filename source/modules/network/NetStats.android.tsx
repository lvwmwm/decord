// Module ID: 6695
// Function ID: 51809
// Name: receiveNetworkInfoformation
// Dependencies: [5, 6, 7, 27, 4808, 6696, 1838, 653, 3, 1432, 1431, 6706, 664, 587, 686, 3988, 6697, 6707, 14, 2]
// Exports: getSignalStrength, isSlowNetwork

// Module 6695 (receiveNetworkInfoformation)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "result";
import closure_9 from "_createForOfIteratorHelperLoose";
import { AnalyticEvents } from "ME";
import importDefaultResult from "get ActivityIndicator";
import importDefaultResult1 from "ensureChangeListenerCreated";
import importDefaultResult2 from "ensureChangeListenerCreated";
import importDefaultResult3 from "dispatcher";
import importDefaultResult4 from "dispatcher";
import importDefaultResult5 from "dispatcher";

const require = arg1;
function receiveNetworkInfoformation(arg0) {
  let closure_14 = arg0;
  if (null == closure_15) {
    closure_15 = arg0;
  }
  updateNetworkUsage();
}
function updateNetworkUsage() {
  if (null != NativeModules.SystemResourceManager.getNetworkUsage) {
    const SystemResourceManager = NativeModules.SystemResourceManager;
    const networkUsage = SystemResourceManager.getNetworkUsage((arg0) => {
      const outer1_12 = arg0;
      if (null == outer1_13) {
        outer1_13 = arg0;
      }
      const obj = { state: outer1_14, nativeStats: outer1_12, rtc: outer1_0(outer1_2[11]).getRTCTotalBytes() };
      outer1_11.fileOnly("Updating Network Info", obj);
    });
  }
}
const NativeModules = get_ActivityIndicator.NativeModules;
importDefaultResult = new importDefaultResult("NetStats");
let closure_12 = { signalStrengthLevel: null, isNetworkRoaming: false, cellularReceiveBytes: 0, cellularSendBytes: 0, totalReceiveBytes: 0, totalSendBytes: 0, uidReceiveBytes: 0, uidSendBytes: 0, socketBytesReceived: 0, otaBytesReceived: 0, otaNumRequests: 0, xhrBytesReceived: 0, xhrNumRequests: 0, frescoBytesReceived: 0, frescoNumRequests: 0, downloadBytesReceived: 0, downloadNumRequests: 0, mediaPlayerBytesReceived: 0 };
let c13 = null;
let obj = { type: require("configure").NetInfoStateType.unknown, effectiveSpeed: null, serviceProvider: null };
let c15 = null;
let closure_16 = "active" === get_ActivityIndicator.AppState.currentState;
let c17 = 0;
let c18 = 0;
let c19 = 0;
let c20 = 0;
require("ensureChangeListenerCreated").addChangeCallback(receiveNetworkInfoformation);
const networkInformation = require("ensureChangeListenerCreated").getNetworkInformation();
networkInformation.then(receiveNetworkInfoformation);
let tmp7 = (() => {
  class EventTracker {
    constructor() {
      self = this;
      self = this;
      tmp = outer1_4(this, EventTracker);
      num = 0;
      if (outer1_16) {
        tmp2 = globalThis;
        _setTimeout = setTimeout;
        tmp3 = f51826;
        tmp4 = f51823;
        num2 = 12;
        num3 = 1;
        num = setTimeout(() => self.track(), f51826(f51823[12]).Millis.MINUTE);
      }
      self.trackTimeout = num;
      num4 = 0;
      if (outer1_16) {
        tmp5 = globalThis;
        _setInterval = setInterval;
        tmp6 = f51826;
        tmp7 = f51823;
        num5 = 12;
        num6 = 5;
        num4 = setInterval(() => self.writeExistingEventStorage(), 5 * f51826(f51823[12]).Millis.SECOND);
      }
      self.flushStorageInterval = num4;
      self.didEverTrack = false;
      Storage = f51831(f51823[13]).Storage;
      value = Storage.get("previousNetStatsEvents");
      if (null == value) {
        value = [];
      }
      self.existingEvents = value;
      self.trackExistingEvents = () => {
        if (self.existingEvents.length > 0) {
          let result = outer2_8.submitEventsImmediately(self.existingEvents);
          result.then(() => {
            outer3_11.fileOnly("Successfully logged existing network usage events", outer1_0.existingEvents);
            outer1_0.existingEvents = [];
            const result = outer1_0.writeExistingEventStorage();
          }).catch((status) => {
            if (tmp) {
              outer3_11.error("Failed to log log existing network usage events", outer1_0.existingEvents, status);
            }
          });
          const nextPromise = result.then(() => {
            outer3_11.fileOnly("Successfully logged existing network usage events", outer1_0.existingEvents);
            outer1_0.existingEvents = [];
            const result = outer1_0.writeExistingEventStorage();
          });
        }
      };
      if (outer1_7.isConnected()) {
        trackExistingEventsResult = self.trackExistingEvents();
      } else {
        tmp8 = f51826;
        tmp9 = f51823;
        num7 = 14;
        obj = f51826(f51823[14]);
        str = "CONNECTION_OPEN";
        subscription = obj.subscribe("CONNECTION_OPEN", self.trackExistingEvents);
      }
      return;
    }
  }
  let obj = {
    key: "handleAppStateChange",
    value(arg0) {
      let self = this;
      self = this;
      if (!this.didEverTrack) {
        if (arg0) {
          if (!tmp) {
            const outer1_16 = true;
            const _setTimeout = setTimeout;
            self.trackTimeout = setTimeout(() => outer2_21.track(), callback2(664).Millis.MINUTE);
            const _setInterval = setInterval;
            self.flushStorageInterval = setInterval(() => self.writeExistingEventStorage(), 5000);
          }
        } else if (tmp) {
          self.track();
        }
      }
    }
  };
  let items = [obj, , , ];
  obj = { key: "writeExistingEventStorage" };
  let closure_2 = EventTracker(async function() {
    const self = this;
    if (!self.didEverTrack) {
      if (outer2_16) {
        let items = [yield self.getQueuedEvent()];
      }
      const existingEvents = self.existingEvents;
      const combined = existingEvents.concat(items);
      if (0 === combined.length) {
        const Storage2 = callback(587).Storage;
        Storage2.remove("previousNetStatsEvents");
      } else {
        const Storage = callback(587).Storage;
        const result = Storage.set("previousNetStatsEvents", combined);
      }
    }
    items = [];
  });
  obj.value = function writeExistingEventStorage() {
    return dependencyMap(...arguments);
  };
  items[1] = obj;
  obj = { key: "track" };
  let closure_1 = EventTracker(async function() {
    const self = this;
    let items;
    if (!self.didEverTrack) {
      self.didEverTrack = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(self.trackTimeout);
      const _clearInterval = clearInterval;
      clearInterval(self.flushStorageInterval);
      items = [yield self.getQueuedEvent()];
      let result = outer2_8.submitEventsImmediately(items);
      result.then(() => {
        outer3_11.fileOnly("Successfully tracked latest network usage", items);
        const result = self.writeExistingEventStorage();
      }).catch((status) => {
        if (429 !== status.status) {
          outer3_11.error("Failed to track latest network usage", items, status);
        }
        const existingEvents = self.existingEvents;
        existingEvents.push(items[0]);
        const result = self.writeExistingEventStorage();
      });
      const nextPromise = result.then(() => {
        outer3_11.fileOnly("Successfully tracked latest network usage", items);
        const result = self.writeExistingEventStorage();
      });
    }
  });
  obj.value = function track() {
    return callback2(...arguments);
  };
  items[2] = obj;
  const obj1 = { key: "getQueuedEvent" };
  let closure_0 = EventTracker(async () => {
    outer2_22();
    let obj = callback2(3988);
    const tmp2 = yield obj.getAppFirstVisibleTimestamp();
    const tmp3 = yield callback(6697).getSession();
    obj = { type: outer2_10.APP_NETWORK_USAGE };
    obj = {};
    const obj2 = callback(6697);
    const merged = Object.assign(callback(6707).getDeviceMetadata());
    obj["client_track_timestamp"] = Date.now();
    let uuid;
    if (null != tmp3) {
      uuid = tmp3.uuid;
    }
    obj["client_heartbeat_session_id"] = uuid;
    const obj5 = callback(6707);
    obj["load_id"] = callback(6707).currentLoadId();
    obj["num_guilds"] = outer2_9.getGuildCount();
    obj["was_authenticated"] = callback2(14).wasAuthenticated;
    obj["did_background_app"] = callback2(14).didBackgroundApp;
    obj["headless_task_ran"] = callback2(14).extraProperties.headless_task_ran;
    const ready = callback2(14).ready;
    obj["ready_payload_duration_ms"] = ready.serializeEnd(tmp2);
    let signalStrengthLevel;
    if (null != outer2_13) {
      signalStrengthLevel = outer2_13.signalStrengthLevel;
    }
    let tmp7;
    if (null != signalStrengthLevel) {
      tmp7 = signalStrengthLevel;
    }
    obj["initial_signal_strength_level"] = tmp7;
    signalStrengthLevel = outer2_12.signalStrengthLevel;
    let tmp8;
    if (null != signalStrengthLevel) {
      tmp8 = signalStrengthLevel;
    }
    obj["final_signal_strength_level"] = tmp8;
    let type;
    if (null != outer2_15) {
      type = outer2_15.type;
    }
    let tmp10;
    if (null != type) {
      tmp10 = type;
    }
    obj["initial_network_type"] = tmp10;
    obj["final_network_type"] = outer2_14.type;
    let effectiveSpeed;
    if (null != outer2_15) {
      effectiveSpeed = outer2_15.effectiveSpeed;
    }
    let tmp12;
    if (null != effectiveSpeed) {
      tmp12 = effectiveSpeed;
    }
    obj["initial_cellular_generation"] = tmp12;
    obj["final_cellular_generation"] = outer2_14.effectiveSpeed;
    obj["is_network_roaming"] = outer2_12.isNetworkRoaming;
    obj["cellular_receive_bytes"] = outer2_12.cellularReceiveBytes;
    obj["cellular_send_bytes"] = outer2_12.cellularSendBytes;
    obj["total_receive_bytes"] = outer2_12.totalReceiveBytes;
    obj["total_send_bytes"] = outer2_12.totalSendBytes;
    obj["uid_receive_bytes"] = outer2_12.uidReceiveBytes;
    obj["uid_send_bytes"] = outer2_12.uidSendBytes;
    obj["socket_bytes_received"] = outer2_12.socketBytesReceived;
    obj["ota_bytes_received"] = outer2_12.otaBytesReceived;
    obj["ota_num_requests"] = outer2_12.otaNumRequests;
    obj["xhr_bytes_received"] = outer2_12.xhrBytesReceived;
    obj["xhr_num_requests"] = outer2_12.xhrNumRequests;
    obj["fresco_bytes_received"] = outer2_12.frescoBytesReceived;
    obj["fresco_num_requests"] = outer2_12.frescoNumRequests;
    obj["download_bytes_received"] = outer2_12.downloadBytesReceived;
    obj["download_num_requests"] = outer2_12.downloadNumRequests;
    obj["media_player_bytes_received"] = outer2_12.mediaPlayerBytesReceived;
    const obj6 = callback(6707);
    obj["rtc_bytes"] = callback(6706).getRTCTotalBytes();
    obj["num_message_sends"] = outer2_17;
    let tmp13;
    if (0 !== outer2_17) {
      tmp13 = outer2_18;
    }
    obj["max_message_send_duration"] = tmp13;
    let tmp14;
    if (0 !== outer2_17) {
      tmp14 = outer2_19;
    }
    obj["max_message_queue_length"] = tmp14;
    obj["num_message_send_fails"] = outer2_20;
    obj["num_identifies"] = outer2_7.getSocket().identifyCount;
    const renderLatestMessages = callback2(14).renderLatestMessages;
    obj["render_latest_messages_duration_ms"] = renderLatestMessages.serialize(tmp2);
    obj.properties = obj;
    return obj;
  });
  obj1.value = function getQueuedEvent() {
    return callback(...arguments);
  };
  items[3] = obj1;
  return callback(EventTracker, items);
})();
tmp7 = new tmp7();
let closure_21 = tmp7;
let subscription = require("dispatcher").subscribe("APP_STATE_UPDATE", (state) => {
  tmp7.handleAppStateChange("active" === state.state);
});
const subscription1 = require("dispatcher").subscribe("MESSAGE_CREATE", (sendMessageOptions) => {
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
const subscription2 = require("dispatcher").subscribe("MESSAGE_SEND_FAILED", () => {
  closure_20 = closure_20 + 1;
});
let result = require("_defineProperties").fileFinishedImporting("modules/network/NetStats.android.tsx");

export const isSlowNetwork = function isSlowNetwork() {
  let tmp = obj.type === require(1432) /* configure */.NetInfoStateType.cellular;
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
