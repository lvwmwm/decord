// Module ID: 4959
// Function ID: 42624
// Name: GuildMemberRequestState
// Dependencies: [6, 7, 4015, 22, 2]

// Module 4959 (GuildMemberRequestState)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
let closure_5 = (() => {
  class GuildMemberRequestState {
    constructor(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      tmp = outer1_3(this, closure_0);
      set = new Set();
      this._pendingRequests = set;
      set1 = new Set();
      this._sentRequests = set1;
      set2 = new Set();
      this._unacknowledgedRequests = set2;
      this._guildId = arg0;
      this._guildMemberExists = (arg0) => callback(closure_0, arg0);
      return;
    }
  }
  let obj = {
    key: "acknowledge",
    value(arg0) {
      const _unacknowledgedRequests = this._unacknowledgedRequests;
      _unacknowledgedRequests.delete(arg0);
      const _pendingRequests = this._pendingRequests;
      _pendingRequests.delete(arg0);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "flushRequests",
    value(arg0) {
      let self = this;
      self = this;
      if (0 !== this._pendingRequests.size) {
        const items = [];
        let _pendingRequests = self._pendingRequests;
        const item = _pendingRequests.forEach((arg0) => {
          if (!self._guildMemberExists(arg0)) {
            const _unacknowledgedRequests = self._unacknowledgedRequests;
            _unacknowledgedRequests.add(arg0);
            const _sentRequests = self._sentRequests;
            _sentRequests.add(arg0);
            items.push(arg0);
          }
        });
        if (items.length > 0) {
          arg0(self._guildId, items);
        }
        _pendingRequests = self._pendingRequests;
        _pendingRequests.clear();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "requestUnacknowledged",
    value() {
      let self = this;
      self = this;
      let tmp = 0 !== this._unacknowledgedRequests.size;
      if (tmp) {
        const prop = self._unacknowledgedRequests;
        const item = prop.forEach((arg0) => {
          if (self._guildMemberExists(arg0)) {
            const _unacknowledgedRequests = tmp._unacknowledgedRequests;
            _unacknowledgedRequests.delete(arg0);
          } else {
            const _pendingRequests = tmp._pendingRequests;
            _pendingRequests.add(arg0);
          }
        });
        tmp = 0 !== self._pendingRequests.size && undefined;
        const tmp3 = 0 !== self._pendingRequests.size && undefined;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "request",
    value(arg0) {
      const self = this;
      if (!this._guildMemberExists(arg0)) {
        const _sentRequests = self._sentRequests;
        if (!_sentRequests.has(arg0)) {
          const _pendingRequests = self._pendingRequests;
          if (!_pendingRequests.has(arg0)) {
            const _pendingRequests2 = self._pendingRequests;
            _pendingRequests2.add(arg0);
          }
        }
      }
      return false;
    }
  };
  return callback(GuildMemberRequestState, items);
})();
const tmp2 = (() => {
  class GuildMemberRequester {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_3(this, self);
      this._guildStates = {};
      delayedCall = new GuildMemberRequester(outer1_2[2]).DelayedCall(0, () => self.flushRequests());
      this._flush = delayedCall;
      this._guildMemberExists = arg0;
      this._onChange = arg1;
      return;
    }
  }
  let obj = {
    key: "reset",
    value() {
      this._guildStates = {};
      const _flush = this._flush;
      _flush.cancel();
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "request",
    value(arg0, arg1) {
      if (false !== _getGuildStateResult.request(arg1)) {
        const _flush = this._flush;
        _flush.delay(false);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "acknowledge",
    value(arg0, arg1) {
      this._getGuildState(arg0).acknowledge(arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "flushRequests",
    value() {
      const self = this;
      const item = outer1_1(outer1_2[3]).forEach(this._guildStates, (flushRequests) => flushRequests.flushRequests(self._onChange));
    }
  };
  items[4] = {
    key: "requestUnacknowledged",
    value() {
      if (arr.reduce(this._guildStates, (arg0, requestUnacknowledged) => false !== requestUnacknowledged.requestUnacknowledged() || arg0, false)) {
        const _flush = this._flush;
        _flush.delay();
      }
    }
  };
  items[5] = {
    key: "_getGuildState",
    value(arg0) {
      const self = this;
      let tmp = this._guildStates[arg0];
      if (null == tmp) {
        const prototype = outer1_5.prototype;
        const tmp6 = new outer1_5(arg0, self._guildMemberExists);
        self._guildStates[arg0] = tmp6;
        tmp = tmp6;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getDebugState",
    value(arg0) {
      let closure_0 = arg0;
      const pendingRequestGuildIds = [];
      const unacknowledgedRequestGuildIds = [];
      const sentRequestGuildIds = [];
      const item = outer1_1(outer1_2[3]).forEach(this._guildStates, (_pendingRequests) => {
        _pendingRequests = _pendingRequests._pendingRequests;
        if (_pendingRequests.has(closure_0)) {
          pendingRequestGuildIds.push(_pendingRequests._guildId);
        }
        const _unacknowledgedRequests = _pendingRequests._unacknowledgedRequests;
        if (_unacknowledgedRequests.has(closure_0)) {
          unacknowledgedRequestGuildIds.push(_pendingRequests._guildId);
        }
        const _sentRequests = _pendingRequests._sentRequests;
        if (_sentRequests.has(closure_0)) {
          sentRequestGuildIds.push(_pendingRequests._guildId);
        }
      });
      return { pendingRequestGuildIds, unacknowledgedRequestGuildIds, sentRequestGuildIds };
    }
  };
  return callback(GuildMemberRequester, items);
})();
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("lib/guild/GuildMemberRequester.tsx");

export default tmp2;
