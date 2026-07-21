// Module ID: 5658
// Function ID: 48567
// Name: validateGuildId
// Dependencies: []

// Module 5658 (validateGuildId)
function validateGuildId(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = "null" !== arg0;
  }
  if (tmp) {
    tmp = arg0 !== closure_6;
  }
  if (tmp) {
    tmp = "undefined" !== arg0;
  }
  if (tmp) {
    tmp = arg0 !== closure_5;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ FAVORITES: closure_5, ME: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const tmp3 = () => {
  class GuildSubscriptions {
    constructor(arg0) {
      GuildSubscriptions = this;
      tmp = closure_3(this, GuildSubscriptions);
      tmp2 = closure_1(closure_2[3]);
      tmp2 = new tmp2((arg0, members) => self._enqueue(arg0, { members }));
      this._members = tmp2;
      tmp4 = closure_1(closure_2[4]);
      tmp4 = new tmp4((arg0, channels) => self._enqueue(arg0, { channels }));
      this._channels = tmp4;
      tmp6 = closure_1(closure_2[5]);
      tmp6 = new tmp6((arg0, thread_member_lists) => self._enqueue(arg0, { thread_member_lists }));
      this._threadMemberLists = tmp6;
      set = new Set();
      this._typing = set;
      set1 = new Set();
      this._threads = set1;
      set2 = new Set();
      this._activities = set2;
      set3 = new Set();
      this._memberUpdates = set3;
      set4 = new Set();
      this._subscribed = set4;
      this._pending = {};
      delayedCall = new GuildSubscriptions(closure_2[6]).DelayedCall(0, () => self.flush());
      this._flush = delayedCall;
      this._onChange = arg0;
      return;
    }
  }
  const arg1 = GuildSubscriptions;
  let obj = {
    key: "_enqueue",
    value(arg0, arg1) {
      const merged = Object.assign(this._pending[arg0]);
      const merged1 = Object.assign(arg1);
      this._pending[arg0] = {};
      const _flush = this._flush;
      _flush.delay();
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "reset",
    value() {
      const _subscribed = this._subscribed;
      _subscribed.clear();
      this._pending = {};
      const _members = this._members;
      _members.reset();
      const _memberUpdates = this._memberUpdates;
      _memberUpdates.clear();
      const _channels = this._channels;
      _channels.reset();
      const _threadMemberLists = this._threadMemberLists;
      _threadMemberLists.reset();
      const _typing = this._typing;
      _typing.clear();
      const _threads = this._threads;
      _threads.clear();
      const _activities = this._activities;
      _activities.clear();
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0) {
      let _activities;
      let _channels;
      let _memberUpdates;
      let _members;
      let _threadMemberLists;
      let _threads;
      let _typing;
      ({ _typing, _threads, _activities, _members, _memberUpdates, _channels, _threadMemberLists } = this);
      return { typing: _typing.has(arg0), threads: _threads.has(arg0), activities: _activities.has(arg0), members: _members.get(arg0), member_updates: _memberUpdates.has(arg0), channels: _channels.get(arg0), thread_member_lists: _threadMemberLists.get(arg0) };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSubscribedThreadIds",
    value() {
      const _threadMemberLists = this._threadMemberLists;
      return _threadMemberLists.getSubscribedThreadIds();
    }
  };
  items[4] = {
    key: "isSubscribedToThreads",
    value(arg0) {
      const _threads = this._threads;
      return _threads.has(arg0);
    }
  };
  items[5] = {
    key: "isSubscribedToAnyMember",
    value(arg0) {
      const _members = this._members;
      const result = _members.isSubscribedToAnyMember(arg0);
      return null != result && result;
    }
  };
  items[6] = {
    key: "isSubscribedToMemberUpdates",
    value(arg0) {
      const member_updates = this.get(arg0).member_updates;
      return null != member_updates && member_updates;
    }
  };
  items[7] = {
    key: "forEach",
    value(arg0) {
      const _subscribed = this._subscribed;
      const item = _subscribed.forEach(arg0);
    }
  };
  items[8] = {
    key: "clearWithoutFlushing",
    value(arg0, arg1) {
      const self = this;
      let hasItem = !arg1;
      if (hasItem) {
        const _threads = self._threads;
        hasItem = _threads.has(arg0);
      }
      if (!hasItem) {
        const _subscribed = self._subscribed;
        _subscribed.delete(arg0);
      }
      delete r3[r2];
      const _members = self._members;
      _members.clear(arg0);
      const _channels = self._channels;
      _channels.clear(arg0);
      const _threadMemberLists = self._threadMemberLists;
      _threadMemberLists.clear(arg0);
      const _typing = self._typing;
      _typing.delete(arg0);
      const _memberUpdates = self._memberUpdates;
      _memberUpdates.delete(arg0);
      if (arg1) {
        const _threads2 = self._threads;
        _threads2.delete(arg0);
      }
      const _activities = self._activities;
      _activities.delete(arg0);
    }
  };
  items[9] = {
    key: "flush",
    value() {
      const GuildSubscriptions = this;
      const item = callback(closure_2[7]).forEach(this._pending, (arg0, arg1) => {
        const _subscribed = self._subscribed;
        _subscribed.add(arg1);
      });
      this._onChange(this._pending);
      this._pending = {};
    }
  };
  items[10] = {
    key: "subscribeUser",
    value(arg0, arg1) {
      if (callback3(arg0)) {
        const self = this;
        const _members = this._members;
        const subscription = _members.subscribe(arg0, arg1);
      }
    }
  };
  items[11] = {
    key: "unsubscribeUser",
    value(arg0, arg1) {
      if (callback3(arg0)) {
        const self = this;
        const _members = this._members;
        _members.unsubscribe(arg0, arg1);
      }
    }
  };
  items[12] = {
    key: "subscribeChannel",
    value(arg0, arg1, arg2) {
      const tmp = callback3(arg0);
      let subscription = tmp;
      if (tmp) {
        const self = this;
        const _channels = this._channels;
        subscription = _channels.subscribe(arg0, arg1, arg2);
      }
      return subscription;
    }
  };
  items[13] = {
    key: "subscribeToMemberUpdates",
    value(arg0) {
      const self = this;
      if (callback3(arg0)) {
        const obj = { member_updates: true };
        self._enqueue(arg0, obj);
        const _memberUpdates = self._memberUpdates;
        _memberUpdates.add(arg0);
      } else {
        return false;
      }
    }
  };
  items[14] = {
    key: "unsubscribeFromMemberUpdates",
    value(arg0) {
      const self = this;
      if (callback3(arg0)) {
        const obj = { member_updates: false };
        self._enqueue(arg0, obj);
      } else {
        return false;
      }
    }
  };
  items[15] = {
    key: "subscribeThreadMemberList",
    value(arg0, arg1, arg2) {
      const tmp = callback3(arg0);
      let subscription = tmp;
      if (tmp) {
        const self = this;
        const _threadMemberLists = this._threadMemberLists;
        subscription = _threadMemberLists.subscribe(arg0, arg1, arg2);
      }
      return subscription;
    }
  };
  items[16] = {
    key: "unsubscribeThreadMemberList",
    value(arg0, arg1) {
      const tmp = callback3(arg0);
      let unsubscribeResult = tmp;
      if (tmp) {
        const self = this;
        const _threadMemberLists = this._threadMemberLists;
        unsubscribeResult = _threadMemberLists.unsubscribe(arg0, arg1);
      }
      return unsubscribeResult;
    }
  };
  items[17] = {
    key: "subscribeToGuild",
    value(arg0) {
      this._subscribeToFeature(arg0, this._typing, { typing: true });
      this._subscribeToFeature(arg0, this._activities, { activities: true });
      this._subscribeToFeature(arg0, this._threads, { threads: true });
    }
  };
  items[18] = {
    key: "_subscribeToFeature",
    value(arg0, has) {
      const self = this;
      if (callback3(arg0)) {
        if (!has.has(arg0)) {
          has.add(arg0);
          self._enqueue(arg0, arg2);
        }
      }
    }
  };
  return callback(GuildSubscriptions, items);
}();
const result = arg1(dependencyMap[8]).fileFinishedImporting("lib/guild/GuildSubscriptions.tsx");

export default tmp3;
export const MINIMUM_RANGE = arg1(dependencyMap[4]).MINIMUM_RANGE;
export const DEFAULT_RANGES = arg1(dependencyMap[4]).DEFAULT_RANGES;
