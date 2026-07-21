// Module ID: 4956
// Function ID: 42597
// Name: GuildMemberRequestState
// Dependencies: []

// Module 4956 (GuildMemberRequestState)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = () => {
  class GuildMemberRequestState {
    constructor(arg0, arg1) {
      GuildMemberRequestState = arg0;
      arg1 = arg1;
      tmp = closure_3(this, GuildMemberRequestState);
      set = new Set();
      this._pendingRequests = set;
      set1 = new Set();
      this._sentRequests = set1;
      set2 = new Set();
      this._unacknowledgedRequests = set2;
      this._guildId = arg0;
      this._guildMemberExists = (arg0) => arg1(arg0, arg0);
      return;
    }
  }
  const arg1 = GuildMemberRequestState;
  let obj = {
    key: "acknowledge",
    value(arg0) {
      const _unacknowledgedRequests = this._unacknowledgedRequests;
      _unacknowledgedRequests.delete(arg0);
      const _pendingRequests = this._pendingRequests;
      _pendingRequests.delete(arg0);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "flushRequests",
    value(arg0) {
      const self = this;
      const GuildMemberRequestState = this;
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
      const self = this;
      const GuildMemberRequestState = this;
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
}();
const tmp2 = () => {
  class GuildMemberRequester {
    constructor(arg0, arg1) {
      GuildMemberRequester = this;
      tmp = closure_3(this, GuildMemberRequester);
      this._guildStates = {};
      delayedCall = new GuildMemberRequester(closure_2[2]).DelayedCall(0, () => self.flushRequests());
      this._flush = delayedCall;
      this._guildMemberExists = arg0;
      this._onChange = arg1;
      return;
    }
  }
  const arg1 = GuildMemberRequester;
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
      const GuildMemberRequester = this;
      const item = callback(closure_2[3]).forEach(this._guildStates, (flushRequests) => flushRequests.flushRequests(self._onChange));
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
        const prototype = ctor.prototype;
        const tmp6 = new ctor(arg0, self._guildMemberExists);
        self._guildStates[arg0] = tmp6;
        tmp = tmp6;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getDebugState",
    value(arg0) {
      const GuildMemberRequester = arg0;
      const pendingRequestGuildIds = [];
      const unacknowledgedRequestGuildIds = [];
      const sentRequestGuildIds = [];
      const item = pendingRequestGuildIds(unacknowledgedRequestGuildIds[3]).forEach(this._guildStates, (_pendingRequests) => {
        _pendingRequests = _pendingRequests._pendingRequests;
        if (_pendingRequests.has(_pendingRequests)) {
          pendingRequestGuildIds.push(_pendingRequests._guildId);
        }
        const _unacknowledgedRequests = _pendingRequests._unacknowledgedRequests;
        if (_unacknowledgedRequests.has(_pendingRequests)) {
          unacknowledgedRequestGuildIds.push(_pendingRequests._guildId);
        }
        const _sentRequests = _pendingRequests._sentRequests;
        if (_sentRequests.has(_pendingRequests)) {
          sentRequestGuildIds.push(_pendingRequests._guildId);
        }
      });
      return { pendingRequestGuildIds, unacknowledgedRequestGuildIds, sentRequestGuildIds };
    }
  };
  return callback(GuildMemberRequester, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("lib/guild/GuildMemberRequester.tsx");

export default tmp2;
