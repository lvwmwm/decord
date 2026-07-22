// Module ID: 7252
// Function ID: 58400
// Name: ScopeClass
// Dependencies: []

// Module 7252 (ScopeClass)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
const tmp2 = () => {
  class ScopeClass {
    constructor() {
      tmp = closure_5(this, ScopeClass);
      this._notifyingListeners = false;
      this._scopeListeners = [];
      this._eventProcessors = [];
      this._breadcrumbs = [];
      this._attachments = [];
      this._user = {};
      this._tags = {};
      this._extra = {};
      this._contexts = {};
      this._sdkProcessingMetadata = {};
      obj = {};
      obj2 = ScopeClass(closure_1[5]);
      obj.traceId = obj2.generateTraceId();
      obj3 = ScopeClass(closure_1[5]);
      obj.spanId = obj3.generateSpanId();
      this._propagationContext = obj;
      return;
    }
  }
  const require = ScopeClass;
  let obj = {
    key: "clone",
    value: function clone() {
      const self = this;
      const tmp = new ScopeClass();
      tmp._breadcrumbs = callback3(this._breadcrumbs);
      tmp._tags = Object.assign({}, this._tags);
      tmp._extra = Object.assign({}, this._extra);
      tmp._contexts = Object.assign({}, this._contexts);
      if (this._contexts.flags) {
        const obj = { values: callback3(self._contexts.flags.values) };
        tmp._contexts.flags = obj;
      }
      ({ _user: tmp._user, _level: tmp._level, _session: tmp._session, _transactionName: tmp._transactionName, _fingerprint: tmp._fingerprint } = self);
      tmp._eventProcessors = callback3(self._eventProcessors);
      tmp._requestSession = self._requestSession;
      tmp._attachments = callback3(self._attachments);
      tmp._sdkProcessingMetadata = Object.assign({}, self._sdkProcessingMetadata);
      tmp._propagationContext = Object.assign({}, self._propagationContext);
      ({ _client: tmp._client, _lastEventId: tmp._lastEventId } = self);
      const obj2 = ScopeClass(closure_1[6]);
      obj2._setSpanForScope(tmp, ScopeClass(closure_1[6])._getSpanForScope(self));
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "setClient",
    value: function setClient(_client) {
      this._client = _client;
    }
  };
  items[1] = obj;
  obj = {
    key: "setLastEventId",
    value: function setLastEventId(_lastEventId) {
      this._lastEventId = _lastEventId;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getClient",
    value: function getClient() {
      return this._client;
    }
  };
  items[4] = {
    key: "lastEventId",
    value: function lastEventId() {
      return this._lastEventId;
    }
  };
  items[5] = {
    key: "addScopeListener",
    value: function addScopeListener(arg0) {
      const _scopeListeners = this._scopeListeners;
      _scopeListeners.push(arg0);
    }
  };
  items[6] = {
    key: "addEventProcessor",
    value: function addEventProcessor(arg0) {
      const _eventProcessors = this._eventProcessors;
      _eventProcessors.push(arg0);
      return this;
    }
  };
  items[7] = {
    key: "setUser",
    value: function setUser(user) {
      const self = this;
      let tmp = user;
      if (!user) {
        let obj = { email: undefined, id: undefined, ip_address: undefined, username: undefined };
        tmp = obj;
      }
      self._user = tmp;
      if (self._session) {
        obj = { user };
        ScopeClass(closure_1[7]).updateSession(self._session, obj);
        const obj2 = ScopeClass(closure_1[7]);
      }
      const result = self._notifyScopeListeners();
      return self;
    }
  };
  items[8] = {
    key: "getUser",
    value: function getUser() {
      return this._user;
    }
  };
  items[9] = {
    key: "getRequestSession",
    value: function getRequestSession() {
      return this._requestSession;
    }
  };
  items[10] = {
    key: "setRequestSession",
    value: function setRequestSession(_requestSession) {
      this._requestSession = _requestSession;
      return this;
    }
  };
  items[11] = {
    key: "setTags",
    value: function setTags(arg0) {
      this._tags = Object.assign({}, this._tags, arg0);
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[12] = {
    key: "setTag",
    value: function setTag(arg0, arg1) {
      this._tags = Object.assign({}, this._tags, callback2({}, arg0, arg1));
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[13] = {
    key: "setExtras",
    value: function setExtras(arg0) {
      this._extra = Object.assign({}, this._extra, arg0);
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[14] = {
    key: "setExtra",
    value: function setExtra(arg0, arg1) {
      this._extra = Object.assign({}, this._extra, callback2({}, arg0, arg1));
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[15] = {
    key: "setFingerprint",
    value: function setFingerprint(_fingerprint) {
      this._fingerprint = _fingerprint;
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[16] = {
    key: "setLevel",
    value: function setLevel(_level) {
      this._level = _level;
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[17] = {
    key: "setTransactionName",
    value: function setTransactionName(_transactionName) {
      this._transactionName = _transactionName;
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[18] = {
    key: "setContext",
    value: function setContext(arg0, arg1) {
      const self = this;
      if (null === arg1) {
        const _contexts = self._contexts;
        delete r1[r2];
      } else {
        self._contexts[arg0] = arg1;
      }
      const result = self._notifyScopeListeners();
      return self;
    }
  };
  items[19] = {
    key: "setSession",
    value: function setSession(_session) {
      const self = this;
      if (_session) {
        self._session = _session;
      } else {
        delete r0._session;
      }
      const result = self._notifyScopeListeners();
      return self;
    }
  };
  items[20] = {
    key: "getSession",
    value: function getSession() {
      return this._session;
    }
  };
  items[21] = {
    key: "update",
    value: function update(requestSession) {
      let contexts;
      let extra;
      let fingerprint;
      let level;
      let tags;
      let user;
      const self = this;
      if (requestSession) {
        let obj = requestSession;
        if ("function" === typeof requestSession) {
          obj = requestSession(self);
        }
        if (obj instanceof closure_7) {
          const items = [obj.getScopeData(), obj.getRequestSession()];
          let items2 = items;
        } else {
          if (obj2.isPlainObject(obj)) {
            const items1 = [requestSession, requestSession.requestSession];
            items2 = items1;
          } else {
            items2 = [];
          }
          const obj2 = ScopeClass(closure_1[8]);
        }
        const tmp5 = callback(items2, 2);
        let first = tmp5[0];
        if (!first) {
          first = {};
        }
        ({ user, level, fingerprint, tags, extra, contexts } = first);
        if (undefined === fingerprint) {
          fingerprint = [];
        }
        const propagationContext = first.propagationContext;
        const _Object = Object;
        self._tags = Object.assign({}, self._tags, tags);
        const _Object2 = Object;
        self._extra = Object.assign({}, self._extra, extra);
        const _Object3 = Object;
        self._contexts = Object.assign({}, self._contexts, contexts);
        let length = user;
        if (user) {
          const _Object4 = Object;
          length = Object.keys(user).length;
        }
        if (length) {
          self._user = user;
        }
        if (level) {
          self._level = level;
        }
        if (fingerprint.length) {
          self._fingerprint = fingerprint;
        }
        if (propagationContext) {
          self._propagationContext = propagationContext;
        }
        if (tmp5[1]) {
          self._requestSession = tmp6;
        }
        return self;
      } else {
        return self;
      }
    }
  };
  items[22] = {
    key: "clear",
    value: function clear() {
      this._breadcrumbs = [];
      this._tags = {};
      this._extra = {};
      this._user = {};
      this._contexts = {};
      this._level = undefined;
      this._transactionName = undefined;
      this._fingerprint = undefined;
      this._requestSession = undefined;
      this._session = undefined;
      let obj = ScopeClass(closure_1[6]);
      obj._setSpanForScope(this, undefined);
      this._attachments = [];
      obj = { traceId: ScopeClass(closure_1[5]).generateTraceId() };
      const result = this.setPropagationContext(obj);
      const result1 = this._notifyScopeListeners();
      return this;
    }
  };
  items[23] = {
    key: "addBreadcrumb",
    value: function addBreadcrumb(arg0, arg1) {
      const self = this;
      let num = 100;
      if ("number" === typeof arg1) {
        num = arg1;
      }
      if (num <= 0) {
        return self;
      } else {
        const _Object = Object;
        const obj = { timestamp: ScopeClass(closure_1[9]).dateTimestampInSeconds() };
        const _breadcrumbs = self._breadcrumbs;
        _breadcrumbs.push(Object.assign(obj, arg0));
        if (self._breadcrumbs.length > num) {
          const _breadcrumbs1 = self._breadcrumbs;
          self._breadcrumbs = _breadcrumbs1.slice(-num);
          if (self._client) {
            const _client = self._client;
            _client.recordDroppedEvent("buffer_overflow", "log_item");
          }
        }
        const result = self._notifyScopeListeners();
        return self;
      }
    }
  };
  items[24] = {
    key: "getLastBreadcrumb",
    value: function getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
  };
  items[25] = {
    key: "clearBreadcrumbs",
    value: function clearBreadcrumbs() {
      this._breadcrumbs = [];
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[26] = {
    key: "addAttachment",
    value: function addAttachment(arg0) {
      const _attachments = this._attachments;
      _attachments.push(arg0);
      return this;
    }
  };
  items[27] = {
    key: "clearAttachments",
    value: function clearAttachments() {
      this._attachments = [];
      return this;
    }
  };
  items[28] = {
    key: "getScopeData",
    value: function getScopeData() {
      const self = this;
      const obj = { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: tmp, eventProcessors: self._eventProcessors, propagationContext: self._propagationContext, sdkProcessingMetadata: self._sdkProcessingMetadata, transactionName: self._transactionName, span: ScopeClass(closure_1[6])._getSpanForScope(self) };
      return obj;
    }
  };
  items[29] = {
    key: "setSDKProcessingMetadata",
    value: function setSDKProcessingMetadata(arg0) {
      this._sdkProcessingMetadata = ScopeClass(closure_1[10]).merge(this._sdkProcessingMetadata, arg0, 2);
      return this;
    }
  };
  items[30] = {
    key: "setPropagationContext",
    value: function setPropagationContext(arg0) {
      const obj = { spanId: ScopeClass(closure_1[5]).generateSpanId() };
      this._propagationContext = Object.assign(obj, arg0);
      return this;
    }
  };
  items[31] = {
    key: "getPropagationContext",
    value: function getPropagationContext() {
      return this._propagationContext;
    }
  };
  items[32] = {
    key: "captureException",
    value: function captureException(originalException, event_id) {
      const self = this;
      if (event_id) {
        if (event_id.event_id) {
          event_id = event_id.event_id;
        }
        if (self._client) {
          const _Error = Error;
          const error = new Error("Sentry syntheticException");
          const _client = self._client;
          const _Object = Object;
          let obj = { originalException, syntheticException: error };
          obj = { event_id };
          _client.captureException(originalException, Object.assign(obj, event_id, obj), self);
          return event_id;
        } else {
          const logger = ScopeClass(closure_1[12]).logger;
          logger.warn("No client configured on scope - will not capture exception!");
          return event_id;
        }
      }
      obj = ScopeClass(closure_1[11]);
      event_id = obj.uuid4();
    }
  };
  items[33] = {
    key: "captureMessage",
    value: function captureMessage(originalException, arg1, event_id) {
      const self = this;
      if (event_id) {
        if (event_id.event_id) {
          event_id = event_id.event_id;
        }
        if (self._client) {
          const _Error = Error;
          const error = new Error(originalException);
          const _client = self._client;
          const _Object = Object;
          let obj = { originalException, syntheticException: error };
          obj = { event_id };
          _client.captureMessage(originalException, arg1, Object.assign(obj, event_id, obj), self);
          return event_id;
        } else {
          const logger = ScopeClass(closure_1[12]).logger;
          logger.warn("No client configured on scope - will not capture message!");
          return event_id;
        }
      }
      obj = ScopeClass(closure_1[11]);
      event_id = obj.uuid4();
    }
  };
  items[34] = {
    key: "captureEvent",
    value: function captureEvent(arg0, event_id) {
      const self = this;
      if (event_id) {
        if (event_id.event_id) {
          event_id = event_id.event_id;
        }
        if (self._client) {
          const _client = self._client;
          const _Object = Object;
          let obj = { event_id };
          _client.captureEvent(arg0, Object.assign({}, event_id, obj), self);
        } else {
          const logger = ScopeClass(closure_1[12]).logger;
          logger.warn("No client configured on scope - will not capture event!");
        }
        return event_id;
      }
      obj = ScopeClass(closure_1[11]);
      event_id = obj.uuid4();
    }
  };
  items[35] = {
    key: "_notifyScopeListeners",
    value: function _notifyScopeListeners() {
      const self = this;
      const ScopeClass = this;
      if (!this._notifyingListeners) {
        self._notifyingListeners = true;
        const _scopeListeners = self._scopeListeners;
        const item = _scopeListeners.forEach((arg0) => {
          arg0(self);
        });
        self._notifyingListeners = false;
      }
    }
  };
  return callback(ScopeClass, items);
}();

export const Scope = tmp2;
