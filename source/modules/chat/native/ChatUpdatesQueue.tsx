// Module ID: 10488
// Function ID: 80915
// Name: ChatUpdatesQueue
// Dependencies: [6, 7, 27, 2]

// Module 10488 (ChatUpdatesQueue)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import get_ActivityIndicator from "get ActivityIndicator";

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const DCDChatBlockerManager = get_ActivityIndicator.NativeModules.DCDChatBlockerManager;
let tmp3 = (() => {
  class ChatUpdatesQueue {
    constructor(arg0, arg1) {
      self = this;
      tmp = ChatUpdatesQueue(this, self);
      set = new Set();
      this.blockers = set;
      this.queue = [];
      this.queueStartTimestamp = null;
      this.setOnFlushItem = (onFlushItem) => {
        self.onFlushItem = onFlushItem;
      };
      this.getReactTag = arg0;
      this.onFlushItem = arg1;
      tmp3 = new outer1_2(outer1_3);
      this.eventEmitter = tmp3;
      eventEmitter = this.eventEmitter;
      this.addBlockerSubscription = eventEmitter.addListener("AddBlocker", (reactTag) => {
        reactTag = reactTag.reactTag;
        if (tmp) {
          self.addBlocker(reactTag.blockerId);
        }
      });
      eventEmitter2 = this.eventEmitter;
      this.removeBlockerSubscription = eventEmitter2.addListener("RemoveBlocker", (reactTag) => {
        reactTag = reactTag.reactTag;
        if (tmp) {
          self.removeBlocker(reactTag.blockerId);
        }
      });
      return;
    }
  }
  let obj = {
    key: "hasUpdates",
    value() {
      return this.queue.length > 0;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "isBlocking",
    get() {
      let hasUpdatesResult = this.hasUpdates();
      if (!hasUpdatesResult) {
        hasUpdatesResult = this.blockers.size > 0;
      }
      return hasUpdatesResult;
    }
  };
  items[1] = obj;
  obj = {
    key: "addBlocker",
    value(arg0) {
      if (null != arg0) {
        const self = this;
        const blockers = this.blockers;
        blockers.add(arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "removeBlocker",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        const blockers = self.blockers;
        blockers.delete(arg0);
        if (0 === self.blockers.size) {
          self.flush();
        }
      }
    }
  };
  items[4] = {
    key: "add",
    value(arg0) {
      const self = this;
      if (null == this.queueStartTimestamp) {
        const _Date = Date;
        self.queueStartTimestamp = Date.now();
      }
      const queue = self.queue;
      queue.push(arg0);
      let tmp3 = self.queue.length > 100;
      let tmp4 = null != self.queueStartTimestamp;
      if (tmp4) {
        const _Date2 = Date;
        tmp4 = Date.now() - self.queueStartTimestamp > 30000;
      }
      if (!tmp3) {
        tmp3 = tmp4;
      }
      if (tmp3) {
        const blockers = self.blockers;
        blockers.clear();
        self.flush();
      }
    }
  };
  items[5] = {
    key: "tryFlush",
    value() {
      const self = this;
      if (0 === this.blockers.size) {
        self.flush();
      }
    }
  };
  items[6] = {
    key: "clear",
    value() {
      this.queue = [];
      this.queueStartTimestamp = null;
    }
  };
  items[7] = {
    key: "flush",
    value() {
      const self = this;
      this.queueStartTimestamp = null;
      const queue = this.queue;
      const item = queue.forEach((arg0) => {
        if (null != arg0) {
          const onFlushItem = self.onFlushItem;
          if (null != onFlushItem) {
            onFlushItem.call(self, arg0);
          }
        }
      });
      this.queue = [];
    }
  };
  items[8] = {
    key: "cleanup",
    value() {
      const addBlockerSubscription = this.addBlockerSubscription;
      addBlockerSubscription.remove();
      const removeBlockerSubscription = this.removeBlockerSubscription;
      removeBlockerSubscription.remove();
    }
  };
  return callback(ChatUpdatesQueue, items);
})();
const result = require("get ActivityIndicator").fileFinishedImporting("modules/chat/native/ChatUpdatesQueue.tsx");

export default tmp3;
