// Module ID: 6694
// Function ID: 51795
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 4051, 4222, 653, 3, 6695, 675, 6919, 566, 686, 2]

// Module 6694 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import importDefaultResult from "_getPrototypeOf";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isCompleted(apiResponseTimestamp) {
  return null != apiResponseTimestamp.apiResponseTimestamp && null != apiResponseTimestamp.gatewaySeenTimestamp;
}
function trackRoundtrip(channelId) {
  basicChannel = basicChannel.getBasicChannel(channelId.channelId);
  if (null != basicChannel) {
    const _Math = Math;
    if (Math.random() <= 0.1) {
      let diff = null;
      if (null != channelId.apiResponseTimestamp) {
        diff = channelId.apiResponseTimestamp - channelId.initialSendTimestamp;
      }
      let diff1 = null;
      if (null != channelId.gatewaySeenTimestamp) {
        diff1 = channelId.gatewaySeenTimestamp - channelId.initialSendTimestamp;
      }
      let obj = require(6695) /* receiveNetworkInfoformation */;
      const signalStrength = obj.getSignalStrength();
      obj = {};
      const merged = Object.assign(importDefault(6919)());
      obj["api_latency_ms"] = diff;
      obj["gateway_latency_ms"] = diff1;
      obj["channel_id"] = basicChannel.id;
      obj["channel_type"] = basicChannel.type;
      obj["guild_id"] = basicChannel.guild_id;
      obj["guild_size"] = memberCount.getMemberCount(basicChannel.guild_id);
      obj["mobile_network_type"] = type.getType();
      obj["num_attachments"] = channelId.attachmentCount;
      let tmp17 = null != signalStrength;
      if (tmp17) {
        obj = { mobile_signal_strength_level: signalStrength };
        tmp17 = obj;
      }
      const merged1 = Object.assign(tmp17);
      importDefault(675).track(AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, obj);
      const obj2 = importDefault(675);
    }
  } else {
    const _HermesInternal = HermesInternal;
    importDefaultResult.warn("Ignoring a messageData for channel " + channelId.channelId + " because we can't find that channel.");
  }
}
importDefaultResult = new importDefaultResult("MessageRoundtripTrackerStore");
let tmp4 = ((Store) => {
  class MessageRoundtripTrackerStoreClass {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, MessageRoundtripTrackerStoreClass);
      items1 = [...items];
      obj = outer1_6(MessageRoundtripTrackerStoreClass);
      tmp2 = outer1_5;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      tmp2Result.pendingMessages = map;
      return tmp2Result;
    }
  }
  callback2(MessageRoundtripTrackerStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9, outer1_10);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "recordMessageSendAttempt",
    value(channelId) {
      let obj = arg2;
      const self = this;
      let closure_1 = arg1;
      if (arg2 === undefined) {
        obj = {};
      }
      const attachments = obj.attachments;
      let length;
      if (null != attachments) {
        length = attachments.length;
      }
      let num = 0;
      if (null != length) {
        num = length;
      }
      const attachmentsToUpload = obj.attachmentsToUpload;
      let length1;
      if (null != attachmentsToUpload) {
        length1 = attachmentsToUpload.length;
      }
      let num2 = 0;
      if (null != length1) {
        num2 = length1;
      }
      obj = { initialSendTimestamp: null, apiResponseTimestamp: null, gatewaySeenTimestamp: null };
      const sum = num + num2;
      obj.initialSendTimestamp = Date.now();
      obj.channelId = channelId;
      obj.attachmentCount = sum;
      let pendingMessages = this.pendingMessages;
      const result = pendingMessages.set(arg1, obj);
      const timerId = setTimeout(() => {
        const pendingMessages = self.pendingMessages;
        const value = pendingMessages.get(closure_1);
        if (null != value) {
          outer2_16(value);
          const pendingMessages2 = self.pendingMessages;
          pendingMessages2.delete(closure_1);
        }
      }, 30000);
    }
  };
  items[1] = obj;
  obj = {
    key: "recordMessageSendApiResponse",
    value(arg0) {
      const self = this;
      const pendingMessages = this.pendingMessages;
      const value = pendingMessages.get(arg0);
      if (null != value) {
        const obj = {};
        const merged = Object.assign(value);
        const _Date = Date;
        obj["apiResponseTimestamp"] = Date.now();
        if (outer1_15(obj)) {
          outer1_16(obj);
          const pendingMessages3 = self.pendingMessages;
          pendingMessages3.delete(arg0);
        } else {
          const pendingMessages2 = self.pendingMessages;
          const result = pendingMessages2.set(arg0, obj);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "recordGatewayResponse",
    value(arg0) {
      const self = this;
      const pendingMessages = this.pendingMessages;
      const value = pendingMessages.get(arg0);
      if (null != value) {
        const obj = {};
        const merged = Object.assign(value);
        const _Date = Date;
        obj["gatewaySeenTimestamp"] = Date.now();
        if (outer1_15(obj)) {
          outer1_16(obj);
          const pendingMessages3 = self.pendingMessages;
          pendingMessages3.delete(arg0);
        } else {
          const pendingMessages2 = self.pendingMessages;
          const result = pendingMessages2.set(arg0, obj);
        }
      }
    }
  };
  return callback(MessageRoundtripTrackerStoreClass, items);
})(require("initialize").Store);
tmp4 = new tmp4(require("dispatcher"), {
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    optimistic = optimistic.optimistic;
    const nonce = optimistic.message.nonce;
    if (!optimistic) {
      optimistic = null == nonce;
    }
    if (!optimistic) {
      const result = tmp4.recordGatewayResponse(nonce);
    }
  }
});
let closure_13 = tmp4;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/messages/MessageRoundtripTrackerStore.tsx");

export default tmp4;
