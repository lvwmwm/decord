// Module ID: 5663
// Function ID: 48648
// Name: GuildMemberSubscriptions
// Dependencies: [6, 7, 664, 4015, 21, 3, 22, 2]

// Module 5663 (GuildMemberSubscriptions)
import apply from "apply";
import set from "set";

const require = arg1;
const MINUTE = require("set").Millis.MINUTE;
let tmp2 = (() => {
  class GuildMemberSubscriptions {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, self);
      this._subscriptions = {};
      this._unsubscriptions = {};
      delayedCall = new GuildMemberSubscriptions(outer1_2[3]).DelayedCall(outer1_5, () => self.flushUnsubscriptions());
      this._unsubscribe = delayedCall;
      this._onChange = arg0;
      return;
    }
  }
  let obj = {
    key: "reset",
    value() {
      this._subscriptions = {};
      this._unsubscriptions = {};
      const _unsubscribe = this._unsubscribe;
      _unsubscribe.cancel();
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "get",
    value(arg0) {
      let obj = this._subscriptions[arg0];
      if (null == obj) {
        obj = {};
      }
      return outer1_1(outer1_2[4]).keys(obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "clear",
    value(arg0) {
      delete tmp3[tmp2];
      delete tmp[tmp2];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "subscribe",
    value(_pending) {
      const self = this;
      let obj = this._subscriptions[_pending];
      if (null == obj) {
        obj = {};
      }
      let num = 0;
      if (null != obj[arg1]) {
        num = tmp;
      }
      obj[arg1] = num + 1;
      self._subscriptions[_pending] = obj;
      if (1 === obj[arg1]) {
        self._onChange(_pending, self.get(_pending));
      }
      self.checkForLeaks(_pending, arg1);
    }
  };
  items[4] = {
    key: "isSubscribed",
    value(arg0, arg1) {
      let tmp = null != this._subscriptions[arg0];
      if (tmp) {
        tmp = null != this._subscriptions[arg0][arg1];
      }
      return tmp;
    }
  };
  items[5] = {
    key: "isSubscribedToAnyMember",
    value(arg0) {
      return this.get(arg0).length > 0;
    }
  };
  items[6] = {
    key: "unsubscribe",
    value(arg0, arg1) {
      const self = this;
      if (this.isSubscribed(arg0, arg1)) {
        let obj = self._unsubscriptions[arg0];
        if (null == obj) {
          obj = {};
        }
        let num = 0;
        if (null != obj[arg1]) {
          num = tmp2;
        }
        obj[arg1] = num + 1;
        self._unsubscriptions[arg0] = obj;
        if (1 === obj[arg1]) {
          const _unsubscribe = self._unsubscribe;
          _unsubscribe.delay(false);
        }
      }
    }
  };
  items[7] = {
    key: "checkForLeaks",
    value(arg0, arg1) {
      let tmp2;
      if (null != this._subscriptions[arg0]) {
        tmp2 = tmp[arg1];
      }
      let num = 0;
      if (null != tmp2) {
        num = tmp2;
      }
      let tmp4;
      if (null != this._unsubscriptions[arg0]) {
        tmp4 = tmp3[arg1];
      }
      let num2 = 0;
      if (null != tmp4) {
        num2 = tmp4;
      }
      const diff = num - num2;
      if (diff > 5) {
        let tmp8 = outer1_1(outer1_2[5]);
        const prototype = tmp8.prototype;
        tmp8 = new tmp8("GuildMemberSubscriptions");
        const _HermesInternal = HermesInternal;
        tmp8.warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (" + diff + " subscriptions)");
      }
    }
  };
  items[8] = {
    key: "flushUnsubscriptions",
    value() {
      let self = this;
      self = this;
      if (!obj.isEmpty(this._unsubscriptions)) {
        let item = outer1_1(outer1_2[6]).forEach(self._unsubscriptions, (arg0, _pending) => {
          const self = tmp3;
          const item = outer2_1(outer2_2[6]).forEach(arg0, (arg0, arg1) => {
            let num = 0;
            if (null != tmp3[arg1]) {
              num = tmp4;
            }
            tmp3[arg1] = num - arg0;
            if (tmp3[arg1] <= 0) {
              delete tmp[tmp2];
            }
          });
          const arr = outer2_1(outer2_2[6]);
          if (obj.isEmpty(self._subscriptions[_pending])) {
            const _subscriptions = self._subscriptions;
            delete tmp[tmp2];
          }
          self._onChange(_pending, self.get(_pending));
        });
        self._unsubscriptions = {};
        let arr = outer1_1(outer1_2[6]);
      }
    }
  };
  return callback(GuildMemberSubscriptions, items);
})();
const result = require("set").fileFinishedImporting("lib/guild/GuildMemberSubscriptions.tsx");

export default tmp2;
