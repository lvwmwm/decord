// Module ID: 6683
// Function ID: 51695
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6683 (_isNativeReflectConstruct)
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
  const basicChannel = basicChannel.getBasicChannel(channelId.channelId);
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
      let obj = arg1(dependencyMap[10]);
      const signalStrength = obj.getSignalStrength();
      obj = {};
      const merged = Object.assign(importDefault(dependencyMap[12])());
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
      importDefault(dependencyMap[11]).track(AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, obj);
      const obj2 = importDefault(dependencyMap[11]);
    }
  } else {
    const _HermesInternal = HermesInternal;
    importDefaultResult.warn("Ignoring a messageData for channel " + channelId.channelId + " because we can't find that channel.");
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const AnalyticEvents = arg1(dependencyMap[8]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("MessageRoundtripTrackerStore");
let tmp4 = (Store) => {
  class MessageRoundtripTrackerStoreClass {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, MessageRoundtripTrackerStoreClass);
      items1 = [...items];
      obj = closure_6(MessageRoundtripTrackerStoreClass);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      tmp2Result.pendingMessages = map;
      return tmp2Result;
    }
  }
  const arg1 = MessageRoundtripTrackerStoreClass;
  callback2(MessageRoundtripTrackerStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9, closure_10);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "recordMessageSendAttempt",
    value(channelId) {
      let obj = arg2;
      const MessageRoundtripTrackerStoreClass = this;
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
      obj = { <string:2596640197>: "Normal", <string:1364518597>: true, <string:2601487672>: "AbortSignal" };
      const sum = num + num2;
      obj.initialSendTimestamp = Date.now();
      obj.channelId = channelId;
      obj.attachmentCount = sum;
      const pendingMessages = this.pendingMessages;
      const result = pendingMessages.set(arg1, obj);
      const timerId = setTimeout(() => {
        const pendingMessages = self.pendingMessages;
        const value = pendingMessages.get(arg1);
        if (null != value) {
          callback(value);
          const pendingMessages2 = self.pendingMessages;
          pendingMessages2.delete(arg1);
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
        if (callback4(obj)) {
          callback5(obj);
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
        if (callback4(obj)) {
          callback5(obj);
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
}(importDefault(dependencyMap[13]).Store);
tmp4 = new tmp4(importDefault(dependencyMap[14]), {
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
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/messages/MessageRoundtripTrackerStore.tsx");

export default tmp4;
