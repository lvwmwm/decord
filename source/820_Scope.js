// Module ID: 820
// Function ID: 9164
// Name: Scope
// Dependencies: [77, 65, 6, 7, 806, 808, 821, 822, 804, 815, 809, 823, 807, 800, 801]

// Module 820 (Scope)
import _defineProperty from "_defineProperty";
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "_getSpanForScope";
import _defineProperties from "updateSession";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const Scope = (() => {
  class Scope {
    constructor() {
      tmp = outer1_4(this, Scope);
      this._notifyingListeners = false;
      this._scopeListeners = [];
      this._eventProcessors = [];
      this._breadcrumbs = [];
      this._attachments = [];
      this._user = {};
      this._tags = {};
      this._attributes = {};
      this._extra = {};
      this._contexts = {};
      this._sdkProcessingMetadata = {};
      obj = {};
      obj2 = Scope(outer1_1[4]);
      obj.traceId = obj2.generateTraceId();
      obj3 = Scope(outer1_1[5]);
      obj.sampleRand = obj3.safeMathRandom();
      this._propagationContext = obj;
      return;
    }
  }
  let obj = {
    key: "clone",
    value: function clone() {
      const self = this;
      const tmp = new Scope();
      tmp._breadcrumbs = outer1_3(this._breadcrumbs);
      tmp._tags = Object.assign({}, this._tags);
      tmp._attributes = Object.assign({}, this._attributes);
      tmp._extra = Object.assign({}, this._extra);
      tmp._contexts = Object.assign({}, this._contexts);
      if (this._contexts.flags) {
        const obj = { values: outer1_3(self._contexts.flags.values) };
        tmp._contexts.flags = obj;
      }
      ({ _user: tmp._user, _level: tmp._level, _session: tmp._session, _transactionName: tmp._transactionName, _fingerprint: tmp._fingerprint } = self);
      tmp._eventProcessors = outer1_3(self._eventProcessors);
      tmp._attachments = outer1_3(self._attachments);
      tmp._sdkProcessingMetadata = Object.assign({}, self._sdkProcessingMetadata);
      tmp._propagationContext = Object.assign({}, self._propagationContext);
      ({ _client: tmp._client, _lastEventId: tmp._lastEventId } = self);
      const obj2 = Scope(outer1_1[6]);
      obj2._setSpanForScope(tmp, Scope(outer1_1[6])._getSpanForScope(self));
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
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
        Scope(outer1_1[7]).updateSession(self._session, obj);
        const obj2 = Scope(outer1_1[7]);
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
    key: "setTags",
    value: function setTags(arg0) {
      this._tags = Object.assign({}, this._tags, arg0);
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[10] = {
    key: "setTag",
    value: function setTag(arg0, arg1) {
      return this.setTags(outer1_2({}, arg0, arg1));
    }
  };
  items[11] = {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      this._attributes = Object.assign({}, this._attributes, arg0);
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[12] = {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      return this.setAttributes(outer1_2({}, arg0, arg1));
    }
  };
  items[13] = {
    key: "removeAttribute",
    value: function removeAttribute(crossorigin) {
      const self = this;
      if (crossorigin in this._attributes) {
        const _attributes = self._attributes;
        delete tmp[tmp2];
        const result = self._notifyScopeListeners();
      }
      return self;
    }
  };
  items[14] = {
    key: "setExtras",
    value: function setExtras(arg0) {
      this._extra = Object.assign({}, this._extra, arg0);
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[15] = {
    key: "setExtra",
    value: function setExtra(arg0, arg1) {
      this._extra = Object.assign({}, this._extra, outer1_2({}, arg0, arg1));
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[16] = {
    key: "setFingerprint",
    value: function setFingerprint(_fingerprint) {
      this._fingerprint = _fingerprint;
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[17] = {
    key: "setLevel",
    value: function setLevel(_level) {
      this._level = _level;
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[18] = {
    key: "setTransactionName",
    value: function setTransactionName(_transactionName) {
      this._transactionName = _transactionName;
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[19] = {
    key: "setContext",
    value: function setContext(arg0, arg1) {
      const self = this;
      if (null === arg1) {
        const _contexts = self._contexts;
        delete tmp[tmp2];
      } else {
        self._contexts[arg0] = arg1;
      }
      const result = self._notifyScopeListeners();
      return self;
    }
  };
  items[20] = {
    key: "setSession",
    value: function setSession(_session) {
      const self = this;
      if (_session) {
        self._session = _session;
      } else {
        delete tmp._session;
      }
      const result = self._notifyScopeListeners();
      return self;
    }
  };
  items[21] = {
    key: "getSession",
    value: function getSession() {
      return this._session;
    }
  };
  items[22] = {
    key: "update",
    value: function update(arg0) {
      let attributes;
      let contexts;
      let extra;
      let fingerprint;
      let level;
      let tags;
      let user;
      const self = this;
      if (arg0) {
        let obj = arg0;
        if ("function" === typeof arg0) {
          obj = arg0(self);
        }
        if (obj instanceof Scope) {
          let scopeData = obj.getScopeData();
        } else {
          if (obj3.isPlainObject(obj)) {
            scopeData = arg0;
          }
          obj3 = Scope(outer1_1[8]);
        }
        if (!scopeData) {
          scopeData = {};
        }
        ({ user, level, fingerprint } = scopeData);
        ({ tags, attributes, extra, contexts } = scopeData);
        if (undefined === fingerprint) {
          fingerprint = [];
        }
        const propagationContext = scopeData.propagationContext;
        const _Object = Object;
        self._tags = Object.assign({}, self._tags, tags);
        const _Object2 = Object;
        self._attributes = Object.assign({}, self._attributes, attributes);
        const _Object3 = Object;
        self._extra = Object.assign({}, self._extra, extra);
        const _Object4 = Object;
        self._contexts = Object.assign({}, self._contexts, contexts);
        let length = user;
        if (user) {
          const _Object5 = Object;
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
        return self;
      } else {
        return self;
      }
    }
  };
  items[23] = {
    key: "clear",
    value: function clear() {
      this._breadcrumbs = [];
      this._tags = {};
      this._attributes = {};
      this._extra = {};
      this._user = {};
      this._contexts = {};
      this._level = undefined;
      this._transactionName = undefined;
      this._fingerprint = undefined;
      this._session = undefined;
      let obj = Scope(outer1_1[6]);
      obj._setSpanForScope(this, undefined);
      this._attachments = [];
      obj = { traceId: Scope(outer1_1[4]).generateTraceId() };
      const obj3 = Scope(outer1_1[4]);
      obj.sampleRand = Scope(outer1_1[5]).safeMathRandom();
      const result = this.setPropagationContext(obj);
      const result1 = this._notifyScopeListeners();
      return this;
    }
  };
  items[24] = {
    key: "addBreadcrumb",
    value: function addBreadcrumb(message) {
      const self = this;
      let num = 100;
      if ("number" === typeof arg1) {
        num = arg1;
      }
      if (num <= 0) {
        return self;
      } else {
        let obj = { timestamp: Scope(outer1_1[9]).dateTimestampInSeconds() };
        obj = {};
        if (message.message) {
          obj = Scope(outer1_1[10]);
          message = obj.truncate(message.message, 2048);
        } else {
          message = message.message;
        }
        obj.message = message;
        const _breadcrumbs = self._breadcrumbs;
        _breadcrumbs.push(Object.assign(obj, message, obj));
        if (self._breadcrumbs.length > num) {
          const _breadcrumbs1 = self._breadcrumbs;
          self._breadcrumbs = _breadcrumbs1.slice(-num);
          const _client = self._client;
          if (null != _client) {
            _client.recordDroppedEvent("buffer_overflow", "log_item");
          }
        }
        const result = self._notifyScopeListeners();
        return self;
      }
    }
  };
  items[25] = {
    key: "getLastBreadcrumb",
    value: function getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
  };
  items[26] = {
    key: "clearBreadcrumbs",
    value: function clearBreadcrumbs() {
      this._breadcrumbs = [];
      const result = this._notifyScopeListeners();
      return this;
    }
  };
  items[27] = {
    key: "addAttachment",
    value: function addAttachment(arg0) {
      const _attachments = this._attachments;
      _attachments.push(arg0);
      return this;
    }
  };
  items[28] = {
    key: "clearAttachments",
    value: function clearAttachments() {
      this._attachments = [];
      return this;
    }
  };
  items[29] = {
    key: "getScopeData",
    value: function getScopeData() {
      const self = this;
      const obj = { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, attributes: this._attributes, extra: this._extra, user: this._user, level: this._level, fingerprint: tmp, eventProcessors: self._eventProcessors, propagationContext: self._propagationContext, sdkProcessingMetadata: self._sdkProcessingMetadata, transactionName: self._transactionName, span: Scope(outer1_1[6])._getSpanForScope(self) };
      return obj;
    }
  };
  items[30] = {
    key: "setSDKProcessingMetadata",
    value: function setSDKProcessingMetadata(arg0) {
      this._sdkProcessingMetadata = Scope(outer1_1[11]).merge(this._sdkProcessingMetadata, arg0, 2);
      return this;
    }
  };
  items[31] = {
    key: "setPropagationContext",
    value: function setPropagationContext(_propagationContext) {
      this._propagationContext = _propagationContext;
      return this;
    }
  };
  items[32] = {
    key: "getPropagationContext",
    value: function getPropagationContext() {
      return this._propagationContext;
    }
  };
  items[33] = {
    key: "captureException",
    value: function captureException(originalException, event_id) {
      const self = this;
      event_id = undefined;
      if (null != event_id) {
        event_id = event_id.event_id;
      }
      if (!event_id) {
        let obj = Scope(outer1_1[12]);
        event_id = obj.uuid4();
      }
      if (self._client) {
        const _Error = Error;
        const error = new Error("Sentry syntheticException");
        const _client = self._client;
        const _Object = Object;
        obj = { originalException, syntheticException: error };
        obj = { event_id };
        _client.captureException(originalException, Object.assign(obj, event_id, obj), self);
        return event_id;
      } else {
        if (Scope(outer1_1[13]).DEBUG_BUILD) {
          const debug = Scope(outer1_1[14]).debug;
          debug.warn("No client configured on scope - will not capture exception!");
        }
        return event_id;
      }
    }
  };
  items[34] = {
    key: "captureMessage",
    value: function captureMessage(originalException, arg1, event_id) {
      const self = this;
      event_id = undefined;
      if (null != event_id) {
        event_id = event_id.event_id;
      }
      if (!event_id) {
        let obj = Scope(outer1_1[12]);
        event_id = obj.uuid4();
      }
      if (self._client) {
        let syntheticException;
        if (null != event_id) {
          syntheticException = event_id.syntheticException;
        }
        if (null == syntheticException) {
          const _Error = Error;
          syntheticException = new Error(originalException);
        }
        const _client = self._client;
        const _Object = Object;
        obj = { originalException, syntheticException };
        obj = { event_id };
        _client.captureMessage(originalException, arg1, Object.assign(obj, event_id, obj), self);
        return event_id;
      } else {
        if (Scope(outer1_1[13]).DEBUG_BUILD) {
          const debug = Scope(outer1_1[14]).debug;
          debug.warn("No client configured on scope - will not capture message!");
        }
        return event_id;
      }
    }
  };
  items[35] = {
    key: "captureEvent",
    value: function captureEvent(arg0, event_id) {
      const self = this;
      event_id = undefined;
      if (null != event_id) {
        event_id = event_id.event_id;
      }
      if (!event_id) {
        let obj = Scope(outer1_1[12]);
        event_id = obj.uuid4();
      }
      if (self._client) {
        const _client = self._client;
        const _Object = Object;
        obj = { event_id };
        _client.captureEvent(arg0, Object.assign({}, event_id, obj), self);
      } else if (Scope(outer1_1[13]).DEBUG_BUILD) {
        const debug = Scope(outer1_1[14]).debug;
        debug.warn("No client configured on scope - will not capture event!");
      }
      return event_id;
    }
  };
  items[36] = {
    key: "_notifyScopeListeners",
    value: function _notifyScopeListeners() {
      let self = this;
      self = this;
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
  return _defineProperties(Scope, items);
})();
