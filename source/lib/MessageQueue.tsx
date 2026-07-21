// Module ID: 7070
// Function ID: 56514
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: getFailedMessageId, isMessageDataCommand

// Module 7070 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isMessageDataSend(type) {
  let tmp = type.type === obj.SEND;
  if (!tmp) {
    tmp = type.type === obj.SEND_ANNOUNCEMENT;
  }
  return tmp;
}
function isMessageDataEdit(messageData) {
  return messageData.type === obj.EDIT;
}
let closure_3 = ["isDark", "GUILD_ROLE_CONNECTIONS_ELIGIBILITY"];
let closure_4 = ["isDark", "GUILD_ROLE_CONNECTIONS_ELIGIBILITY"];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
({ AbortCodes: closure_15, Endpoints: closure_16, AnalyticEvents: closure_17 } = arg1(dependencyMap[10]));
let closure_18 = arg1(dependencyMap[11]).MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS;
const obj = { SEND: 0, [0]: "SEND", EDIT: 1, [1]: "EDIT", COMMAND: 2, [2]: "COMMAND", SEND_ANNOUNCEMENT: 3, [3]: "SEND_ANNOUNCEMENT" };
const items = [importDefault(dependencyMap[12]).Millis.MINUTE, 5 * importDefault(dependencyMap[12]).Millis.MINUTE];
let tmp3 = (arg0) => {
  class MessageQueue {
    constructor() {
      num = arg0;
      self = this;
      if (arg0 === undefined) {
        num = 5;
      }
      MessageQueue = undefined;
      tmp = closure_6(self, MessageQueue);
      tmp2 = closure_1(closure_2[13]);
      tmp2 = new tmp2("MessageQueue");
      items = [];
      items[0] = tmp2;
      obj = closure_9(MessageQueue);
      tmp4 = closure_8;
      if (closure_21()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_9;
        constructResult = Reflect.construct(obj, items, closure_9(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp4Result = tmp4(self, constructResult);
      MessageQueue = tmp4Result;
      tmp4Result.maxSize = num;
      map = new Map();
      tmp4Result.requests = map;
      map1 = new Map();
      tmp4Result.analyticsTimeouts = map1;
      tmp4Result.handleEdit = (messageId) => {
        let channelId;
        let isCrossposted;
        messageId = messageId.messageId;
        let obj = { deeplinkSection: "spring", analytics: "linear", Ambient_Lightmode: "easeInEaseOut" };
        ({ channelId, isCrossposted } = messageId);
        Object.setPrototypeOf(null);
        const merged = Object.assign(messageId, obj);
        const abortController = new AbortController();
        obj = {
          url: closure_16.MESSAGE(channelId, messageId),
          body: merged,
          signal: abortController.signal,
          onRequestCreated() {
            const requests = messageId.requests;
            const result = requests.set(messageId, abortController);
          }
        };
        if (isCrossposted) {
          obj.failImmediatelyWhenRateLimited = true;
        }
        const HTTP = tmp4Result(closure_2[14]).HTTP;
        HTTP.patch(obj, messageId.createResponseHandler(messageId, arg1));
      };
      return tmp4Result;
    }
  }
  const arg1 = MessageQueue;
  callback2(MessageQueue, arg0);
  let obj = {
    key: "isFull",
    value() {
      return this.queue.length >= this.maxSize;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "drain",
    value(type) {
      const self = this;
      const logger = this.logger;
      logger.log("Draining Message Queue with: ", type.type);
      type = type.type;
      if (constants.SEND === type) {
        self.handleSend(type.message, arg1);
      } else if (constants.SEND_ANNOUNCEMENT === type) {
        const result = self.handleSendAnnouncement(type.message, arg1);
      } else if (constants.EDIT === type) {
        self.handleEdit(type.message, arg1);
      } else if (constants.COMMAND === type) {
        self.handleCommand(type.message, arg1);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "cancelRequest",
    value(arg0) {
      const self = this;
      const logger = this.logger;
      logger.log("Cancel message send: ", arg0);
      const requests = this.requests;
      const value = requests.get(arg0);
      if (null != value) {
        value.abort();
      }
      const requests2 = self.requests;
      requests2.delete(arg0);
      const result = self.cancelQueueMetricTimers(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "cancelPendingSendRequests",
    value(arg0) {
      const self = this;
      const items = [];
      const items1 = [];
      if (this.queue.length > 0) {
        while (true) {
          let queue = self.queue;
          let arr = queue.shift();
          let message = arr.message;
          let tmp2 = constants;
          if (message.type === constants.SEND) {
            if (message.message.channelId === arg0) {
              arr = items.push(message.message);
              if (self.queue.length <= 0) {
                break;
              }
            }
          }
          let arr1 = items1.push(arr);
        }
      }
      const queue1 = self.queue;
      const items2 = [...items1];
      queue1.push.apply(items2);
      const logger = self.logger;
      logger.log("Cancel pending send requests", items.length);
      return items;
    }
  };
  items[4] = {
    key: "clear",
    value() {
      const MessageQueue = this;
      let requests = this.requests;
      const item = requests.forEach((abort) => abort.abort());
      requests = this.requests;
      requests.clear();
      const analyticsTimeouts = this.analyticsTimeouts;
      const item1 = analyticsTimeouts.forEach((arg0, arg1) => self.cancelQueueMetricTimers(arg1));
      function _superPropGet(MessageQueue, clear, arg2, arg3) {
        const self = arg2;
        let prototype = MessageQueue;
        if (1) {
          prototype = MessageQueue.prototype;
        }
        const tmpResult = closure_10(closure_9(prototype), "clear", arg2);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(MessageQueue, "clear", this, 3)([]);
    }
  };
  items[5] = {
    key: "startQueueMetricTimers",
    value(arg0) {
      const analyticsTimeouts = this.analyticsTimeouts;
      const result = analyticsTimeouts.set(arg0, closure_20.map((arg0) => setTimeout(() => {
        let obj = arg0(closure_2[15]);
        obj = { queued_duration_ms: arg0 };
        obj.trackWithMetadata(constants.SEND_MESSAGE_QUEUED, obj);
      }, arg0)));
    }
  };
  items[6] = {
    key: "cancelQueueMetricTimers",
    value(arg0) {
      const analyticsTimeouts = this.analyticsTimeouts;
      const value = analyticsTimeouts.get(arg0);
      if (null != value) {
        const _clearTimeout = clearTimeout;
        const item = value.forEach(clearTimeout);
      }
      const analyticsTimeouts2 = this.analyticsTimeouts;
      analyticsTimeouts2.delete(arg0);
    }
  };
  items[7] = {
    key: "createResponseHandler",
    value(arg0, arg1) {
      const MessageQueue = this;
      return (hasErr) => {
        if (null != hasErr) {
          const requests = self.requests;
          requests.delete(hasErr);
          const result = self.cancelQueueMetricTimers(hasErr);
        }
        if (hasErr.hasErr) {
          return arg1(null, hasErr);
        } else if (null == hasErr.body) {
          if (429 === hasErr.status) {
            const _parseInt = parseInt;
            const parsed = parseInt(hasErr.headers.retry-after);
            const _isNaN = isNaN;
            if (isNaN(parsed)) {
              tmp13(null, hasErr);
            } else {
              const obj = { retryAfter: parsed * hasErr(arg1[12]).Millis.SECOND };
              tmp13(obj);
            }
          } else {
            arg1(null, hasErr);
          }
        } else {
          arg1(null, hasErr);
        }
      };
    }
  };
  items[8] = {
    key: "handleSend",
    value(analyticsLocation) {
      const self = this;
      const MessageQueue = this;
      analyticsLocation = analyticsLocation.analyticsLocation;
      const tmp2 = analyticsLocation(abortController[16])();
      if (null != tmp2) {
        analyticsLocation = tmp2;
      }
      if (null != analyticsLocation) {
        let obj = { location: analyticsLocation };
        const tmp3 = obj;
      }
      let obj1 = MessageQueue(abortController[17]);
      const signalStrength = obj1.getSignalStrength();
      obj = { mobile_network_type: store2.getType() };
      const merged = Object.assign(callback2(analyticsLocation, closure_3));
      let tmp6 = null != signalStrength;
      if (tmp6) {
        obj = { signal_strength: signalStrength };
        tmp6 = obj;
      }
      const merged1 = Object.assign(tmp6);
      if (store.get("send_fail_100")) {
        const logger = self.logger;
        logger.log("Skipping message send because send_fail_100 is enabled");
        obj1 = { "Bool(false)": "message", "Bool(false)": 2, "Bool(false)": "client_version", "Bool(false)": "message", "Bool(false)": "filter", "Bool(false)": null, headers: {} };
        arg1(null, obj1);
      } else {
        const _AbortController = AbortController;
        const abortController = new AbortController();
        const result = self.startQueueMetricTimers(analyticsLocation.nonce);
        const HTTP = MessageQueue(abortController[14]).HTTP;
        const obj2 = { url: closure_16.MESSAGES(analyticsLocation.channelId), body: obj, context: tmp3, oldFormErrors: true };
        const merged2 = Object.assign(closure_18);
        obj2["signal"] = abortController.signal;
        obj2["rejectWithError"] = true;
        obj2["onRequestCreated"] = function onRequestCreated() {
          if (null != arg0.nonce) {
            const requests = self.requests;
            const result = requests.set(arg0.nonce, abortController);
          }
        };
        HTTP.post(obj2, self.createResponseHandler(analyticsLocation.nonce, arg1));
      }
      const tmp = callback2(analyticsLocation, closure_3);
    }
  };
  items[9] = {
    key: "handleSendAnnouncement",
    value(analyticsLocation) {
      const self = this;
      const MessageQueue = this;
      analyticsLocation = analyticsLocation.analyticsLocation;
      const tmp2 = analyticsLocation(abortController[16])();
      if (null != tmp2) {
        analyticsLocation = tmp2;
      }
      if (null != analyticsLocation) {
        let obj = { location: analyticsLocation };
        const tmp3 = obj;
      }
      let obj1 = MessageQueue(abortController[17]);
      const signalStrength = obj1.getSignalStrength();
      obj = { mobile_network_type: store2.getType() };
      const merged = Object.assign(callback2(analyticsLocation, closure_4));
      let tmp6 = null != signalStrength;
      if (tmp6) {
        obj = { signal_strength: signalStrength };
        tmp6 = obj;
      }
      const merged1 = Object.assign(tmp6);
      if (store.get("send_fail_100")) {
        const logger = self.logger;
        logger.log("Skipping message send because send_fail_100 is enabled");
        obj1 = { "Bool(false)": "message", "Bool(false)": 2, "Bool(false)": "client_version", "Bool(false)": "message", "Bool(false)": "filter", "Bool(false)": null, headers: {} };
        arg1(null, obj1);
      } else {
        const _AbortController = AbortController;
        const abortController = new AbortController();
        const result = self.startQueueMetricTimers(analyticsLocation.nonce);
        const HTTP = MessageQueue(abortController[14]).HTTP;
        const obj2 = { url: closure_16.MESSAGES_ANNOUNCEMENT(analyticsLocation.channelId), body: obj, context: tmp3, oldFormErrors: true };
        const merged2 = Object.assign(closure_18);
        obj2["signal"] = abortController.signal;
        obj2["rejectWithError"] = true;
        obj2["onRequestCreated"] = function onRequestCreated() {
          if (null != arg0.nonce) {
            const requests = self.requests;
            const result = requests.set(arg0.nonce, abortController);
          }
        };
        HTTP.post(obj2, self.createResponseHandler(analyticsLocation.nonce, arg1));
      }
      const tmp = callback2(analyticsLocation, closure_4);
    }
  };
  items[10] = {
    key: "handleCommand",
    value(guildId) {
      let analytics_location;
      let applicationId;
      let attachments;
      let channelId;
      let data;
      let sectionName;
      let source;
      const self = this;
      const MessageQueue = this;
      guildId = guildId.guildId;
      const nonce = guildId.nonce;
      ({ attachments, maxSizeCallback: closure_3 } = guildId);
      let abortController;
      let obj = { type: MessageQueue(nonce[18]).InteractionTypes.APPLICATION_COMMAND, application_id: applicationId, guild_id: guildId, channel_id: channelId, session_id: sessionId.getSessionId(), data, nonce, analytics_location, section_name: sectionName, source };
      ({ applicationId, channelId, data, analytics_location, sectionName, source } = guildId);
      if (null != attachments) {
        obj.data.attachments = attachments.map((status) => {
          guildId(nonce[19])(status.status === self(nonce[20]).CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message");
          const tmp = guildId(nonce[19]);
          return self(nonce[21]).getAttachmentPayload(status, arg1);
        });
      }
      abortController = new AbortController();
      const HTTP = MessageQueue(nonce[14]).HTTP;
      obj = {
        url: closure_16.INTERACTIONS,
        body: obj,
        signal: abortController.signal,
        rejectWithError: true,
        onRequestCreated(on) {
          const requests = self.requests;
          const result = requests.set(nonce, abortController);
          on.on("progress", (total) => {
            total = total.total;
            const maxFileSizeResult = lib(closure_2[22]).maxFileSize(closure_1);
            if (tmp2) {
              lib.cancelRequest(closure_2);
              if (null != callback) {
                callback(maxFileSizeResult);
              }
            }
          });
        }
      };
      HTTP.post(obj, self.createResponseHandler(nonce, arg1));
    }
  };
  return callback(MessageQueue, items);
}(importDefault(dependencyMap[23]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("lib/MessageQueue.tsx");

export default tmp3;
export const MessageDataType = obj;
export { isMessageDataSend };
export { isMessageDataEdit };
export const isMessageDataCommand = function isMessageDataCommand(type) {
  return type.type === obj.COMMAND;
};
export const getFailedMessageId = function getFailedMessageId(messageData) {
  if (isMessageDataSend(messageData)) {
    let id = messageData.message.nonce;
  } else {
    const message = messageData.message;
    if (isMessageDataEdit(messageData)) {
      id = message.messageId;
    } else {
      id = message.data.id;
    }
  }
  return id;
};
