// Module ID: 5659
// Function ID: 48595
// Name: GuildMemberSubscriptions
// Dependencies: []

// Module 5659 (GuildMemberSubscriptions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const MINUTE = importDefault(dependencyMap[2]).Millis.MINUTE;
const tmp2 = () => {
  class GuildMemberSubscriptions {
    constructor(arg0) {
      GuildMemberSubscriptions = this;
      tmp = closure_3(this, GuildMemberSubscriptions);
      this._subscriptions = {};
      this._unsubscriptions = {};
      delayedCall = new GuildMemberSubscriptions(closure_2[3]).DelayedCall(closure_5, () => self.flushUnsubscriptions());
      this._unsubscribe = delayedCall;
      this._onChange = arg0;
      return;
    }
  }
  const arg1 = GuildMemberSubscriptions;
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
      return callback(closure_2[4]).keys(obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "clear",
    value(arg0) {
      delete r2[r1];
      delete r0[r1];
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
      const tmp = this._subscriptions[arg0];
      let tmp2;
      if (null != tmp) {
        tmp2 = tmp[arg1];
      }
      let num = 0;
      if (null != tmp2) {
        num = tmp2;
      }
      const tmp3 = this._unsubscriptions[arg0];
      let tmp4;
      if (null != tmp3) {
        tmp4 = tmp3[arg1];
      }
      let num2 = 0;
      if (null != tmp4) {
        num2 = tmp4;
      }
      const diff = num - num2;
      if (diff > 5) {
        let tmp8 = callback(closure_2[5]);
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
      const self = this;
      const GuildMemberSubscriptions = this;
      if (!obj.isEmpty(this._unsubscriptions)) {
        const item = callback(closure_2[6]).forEach(self._unsubscriptions, (arg0, _pending) => {
          const self = tmp;
          const item = callback(closure_2[6]).forEach(arg0, (arg0, arg1) => {
            let num = 0;
            if (null != tmp[arg1]) {
              num = tmp2;
            }
            tmp[arg1] = num - arg0;
            if (tmp[arg1] <= 0) {
              delete r0[r1];
            }
          });
          const arr = callback(closure_2[6]);
          if (obj.isEmpty(self._subscriptions[_pending])) {
            const _subscriptions = self._subscriptions;
            delete r2[r4];
          }
          self._onChange(_pending, self.get(_pending));
        });
        self._unsubscriptions = {};
        const arr = callback(closure_2[6]);
      }
    }
  };
  return callback(GuildMemberSubscriptions, items);
}();
const result = arg1(dependencyMap[7]).fileFinishedImporting("lib/guild/GuildMemberSubscriptions.tsx");

export default tmp2;
