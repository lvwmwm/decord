// Module ID: 7286
// Function ID: 58725
// Name: isErrorEvent
// Dependencies: []

// Module 7286 (isErrorEvent)
function isErrorEvent(type) {
  return undefined === type.type;
}
function isTransactionEvent(type) {
  return "transaction" === type.type;
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);

export const BaseClient = () => {
  class BaseClient {
    constructor(arg0) {
      self = this;
      BaseClient = arg0;
      tmp = closure_3(this, BaseClient);
      this._options = arg0;
      this._integrations = {};
      this._numProcessing = 0;
      this._outcomes = {};
      this._hooks = {};
      this._eventProcessors = [];
      tmp2 = BaseClient;
      tmp3 = f58730;
      if (arg0.dsn) {
        num3 = 3;
        tmp2Result = tmp2(tmp3[3]);
        self._dsn = tmp2Result.makeDsn(arg0.dsn);
      } else {
        num = 4;
        if (tmp2(tmp3[4]).DEBUG_BUILD) {
          tmp4 = BaseClient;
          tmp5 = f58730;
          num2 = 5;
          logger = BaseClient(f58730[5]).logger;
          str = "No DSN provided, client will not send events.";
          warnResult = logger.warn("No DSN provided, client will not send events.");
        }
      }
      if (self._dsn) {
        tmp7 = BaseClient;
        tmp8 = f58730;
        num4 = 6;
        obj2 = BaseClient(f58730[6]);
        sdk = undefined;
        if (arg0._metadata) {
          sdk = arg0._metadata.sdk;
        }
        tmp11 = globalThis;
        _Object = Object;
        obj = {};
        obj.tunnel = self._options.tunnel;
        recordDroppedEvent = self.recordDroppedEvent;
        envelopeEndpointWithUrlEncodedAuth = obj2.getEnvelopeEndpointWithUrlEncodedAuth(self._dsn, arg0.tunnel, sdk);
        obj.recordDroppedEvent = recordDroppedEvent.bind(self);
        obj1 = {};
        obj1.url = envelopeEndpointWithUrlEncodedAuth;
        self._transport = arg0.transport(Object.assign(obj, arg0.transportOptions, obj1));
      }
      items = [true, true, true];
      found = items.find((arg0) => {
        let tmp = arg0 in arg0;
        if (tmp) {
          tmp = null == arg0[arg0];
        }
        return tmp;
      });
      f58730 = found;
      if (found) {
        tmp13 = BaseClient;
        tmp14 = f58730;
        num5 = 5;
        obj5 = BaseClient(f58730[5]);
        consoleSandboxResult = obj5.consoleSandbox(() => {
          console.warn("[Sentry] Deprecation warning: `" + found + "` is set to undefined, which leads to tracing being enabled. In v9, a value of `undefined` will result in tracing being disabled.");
        });
      }
      return;
    }
  }
  const require = BaseClient;
  let obj = {
    key: "captureException",
    value: function captureException(arg0, arg1, arg2) {
      let self = this;
      const BaseClient = arg2;
      self = this;
      let obj = BaseClient(self[7]);
      const uuid4Result = obj.uuid4();
      if (obj2.checkOrSetAlreadyCaught(arg0)) {
        if (BaseClient(self[4]).DEBUG_BUILD) {
          const logger = BaseClient(self[5]).logger;
          logger.log("Not capturing exception because it's already been captured.");
        }
        return uuid4Result;
      } else {
        const _Object = Object;
        obj = { event_id: uuid4Result };
        const merged = Object.assign(obj, arg1);
        self._process(self.eventFromException(arg0, merged).then((arg0) => self._captureEvent(arg0, merged, arg2)));
        return merged.event_id;
      }
      const obj2 = BaseClient(self[7]);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "captureMessage",
    value: function captureMessage(arg0, arg1, arg2, arg3) {
      let self = this;
      const BaseClient = arg3;
      self = this;
      const obj = { event_id: BaseClient(self[7]).uuid4() };
      const merged = Object.assign(obj, arg2);
      const obj2 = BaseClient(self[7]);
      let StringResult = arg0;
      if (!obj3.isParameterizedString(arg0)) {
        const _String = String;
        StringResult = String(arg0);
      }
      const obj3 = BaseClient(self[8]);
      if (obj4.isPrimitive(arg0)) {
        let eventFromMessageResult = self.eventFromMessage(StringResult, arg1, merged);
      } else {
        eventFromMessageResult = self.eventFromException(arg0, merged);
      }
      self._process(eventFromMessageResult.then((arg0) => self._captureEvent(arg0, merged, arg3)));
      return merged.event_id;
    }
  };
  items[1] = obj;
  obj = {
    key: "captureEvent",
    value: function captureEvent(sdkProcessingMetadata, originalException) {
      let _captureEvent;
      let _process;
      const self = this;
      const uuid4Result = BaseClient(closure_1[7]).uuid4();
      if (originalException) {
        if (originalException.originalException) {
          if (obj2.checkOrSetAlreadyCaught(originalException.originalException)) {
            if (BaseClient(closure_1[4]).DEBUG_BUILD) {
              const logger = BaseClient(closure_1[5]).logger;
              logger.log("Not capturing exception because it's already been captured.");
            }
            return uuid4Result;
          }
          const obj2 = BaseClient(closure_1[7]);
        }
      }
      const merged = Object.assign({ event_id: uuid4Result }, originalException);
      let capturedSpanScope = sdkProcessingMetadata.sdkProcessingMetadata || {}.capturedSpanScope;
      ({ _process, _captureEvent } = self);
      if (!capturedSpanScope) {
        capturedSpanScope = arg2;
      }
      _process(_captureEvent(sdkProcessingMetadata, merged, capturedSpanScope));
      return merged.event_id;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "captureSession",
    value: function captureSession(release) {
      const self = this;
      if ("string" !== typeof release.release) {
        if (BaseClient(closure_1[4]).DEBUG_BUILD) {
          const logger = BaseClient(closure_1[5]).logger;
          logger.warn("Discarded session because of missing or non-string release");
        }
      } else {
        self.sendSession(release);
        let obj = BaseClient(closure_1[9]);
        obj = { init: false };
        obj.updateSession(release, obj);
      }
    }
  };
  items[4] = {
    key: "getDsn",
    value: function getDsn() {
      return this._dsn;
    }
  };
  items[5] = {
    key: "getOptions",
    value: function getOptions() {
      return this._options;
    }
  };
  items[6] = {
    key: "getSdkMetadata",
    value: function getSdkMetadata() {
      return this._options._metadata;
    }
  };
  items[7] = {
    key: "getTransport",
    value: function getTransport() {
      return this._transport;
    }
  };
  items[8] = {
    key: "flush",
    value: function flush(arg0) {
      const self = this;
      const BaseClient = arg0;
      const _transport = this._transport;
      if (_transport) {
        self.emit("flush");
        const result = self._isClientDoneProcessing(arg0);
        let nextPromise = result.then((arg0) => _transport.flush(arg0).then((arg0) => {
          let tmp = arg0;
          if (arg0) {
            tmp = arg0;
          }
          return tmp;
        }));
      } else {
        nextPromise = BaseClient(_transport[10]).resolvedSyncPromise(true);
        const obj = BaseClient(_transport[10]);
      }
      return nextPromise;
    }
  };
  items[9] = {
    key: "close",
    value: function close(arg0) {
      const BaseClient = this;
      return this.flush(arg0).then((arg0) => {
        self.getOptions().enabled = false;
        self.emit("close");
        return arg0;
      });
    }
  };
  items[10] = {
    key: "getEventProcessors",
    value: function getEventProcessors() {
      return this._eventProcessors;
    }
  };
  items[11] = {
    key: "addEventProcessor",
    value: function addEventProcessor(arg0) {
      const _eventProcessors = this._eventProcessors;
      _eventProcessors.push(arg0);
    }
  };
  items[12] = {
    key: "init",
    value: function init() {
      const self = this;
      let _isEnabledResult = this._isEnabled();
      if (!_isEnabledResult) {
        const integrations = self._options.integrations;
        _isEnabledResult = integrations.some((name) => {
          name = name.name;
          return name.startsWith("Spotlight");
        });
      }
      if (_isEnabledResult) {
        self._setupIntegrations();
      }
    }
  };
  items[13] = {
    key: "getIntegrationByName",
    value: function getIntegrationByName(arg0) {
      return this._integrations[arg0];
    }
  };
  items[14] = {
    key: "addIntegration",
    value: function addIntegration(arg0) {
      BaseClient(closure_1[11]).setupIntegration(this, arg0, this._integrations);
      if (!this._integrations[arg0.name]) {
        const items = [arg0];
        const result = BaseClient(closure_1[11]).afterSetupIntegrations(this, items);
        const obj2 = BaseClient(closure_1[11]);
      }
    }
  };
  items[15] = {
    key: "sendEvent",
    value: function sendEvent(arg0) {
      let self = this;
      const BaseClient = arg0;
      self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let obj = arguments[1];
        }
        self.emit("beforeSendEvent", arg0, obj);
        const obj2 = BaseClient(self[12]);
        let eventEnvelope = obj2.createEventEnvelope(arg0, self._dsn, self._options._metadata, self._options.tunnel);
        const tmp7 = obj.attachments || [];
        const tmp9 = tmp7[Symbol.iterator]();
        while (tmp9 !== undefined) {
          let tmp12 = BaseClient;
          let tmp13 = self;
          let obj3 = BaseClient(self[13]);
          let tmp14 = eventEnvelope;
          let obj4 = BaseClient(self[13]);
          eventEnvelope = obj3.addItemToEnvelope(eventEnvelope, obj4.createAttachmentEnvelopeItem(tmp10));
          // continue
        }
        const sendEnvelopeResult = self.sendEnvelope(eventEnvelope);
        if (sendEnvelopeResult) {
          sendEnvelopeResult.then((arg0) => self.emit("afterSendEvent", arg0, arg0), null);
        }
      }
      obj = {};
    }
  };
  items[16] = {
    key: "sendSession",
    value: function sendSession(arg0) {
      this.sendEnvelope(BaseClient(closure_1[12]).createSessionEnvelope(arg0, this._dsn, this._options._metadata, this._options.tunnel));
    }
  };
  items[17] = {
    key: "recordDroppedEvent",
    value: function recordDroppedEvent(arg0, arg1, arg2) {
      const self = this;
      if (this._options.sendClientReports) {
        let num2 = 1;
        if ("number" === typeof arg2) {
          num2 = arg2;
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + arg0 + ":" + arg1;
        if (BaseClient(closure_1[4]).DEBUG_BUILD) {
          const logger = BaseClient(closure_1[5]).logger;
          let str4 = "";
          if (num2 > 1) {
            const _HermesInternal2 = HermesInternal;
            str4 = " (" + num2 + " times)";
          }
          const _HermesInternal3 = HermesInternal;
          logger.log("Recording outcome: \"" + combined + "\"" + str4);
        }
        let num5 = self._outcomes[combined];
        if (!num5) {
          num5 = 0;
        }
        self._outcomes[combined] = num5 + num2;
      }
    }
  };
  items[18] = {
    key: "on",
    value: function on(arg0, arg1) {
      const BaseClient = arg1;
      let items = this._hooks[arg0];
      if (!items) {
        items = [];
      }
      this._hooks[arg0] = items;
      items.push(arg1);
      return () => {
        const index = items.indexOf(arg1);
        if (index > -1) {
          items.splice(index, 1);
        }
      };
    }
  };
  items[19] = {
    key: "emit",
    value: function emit(arg0) {
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const array = new Array(num);
      const BaseClient = array;
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        array[num2 - 1] = arguments[num2];
      }
      const arr = this._hooks[arg0];
      if (arr) {
        const item = arr.forEach((apply) => apply.apply(undefined, array));
      }
    }
  };
  items[20] = {
    key: "sendEnvelope",
    value: function sendEnvelope(arg0) {
      const self = this;
      this.emit("beforeEnvelope", arg0);
      if (this._isEnabled()) {
        if (self._transport) {
          const _transport = self._transport;
          let nextPromise = _transport.send(arg0).then(null, (arg0) => {
            if (callback(closure_1[4]).DEBUG_BUILD) {
              const logger = callback(closure_1[5]).logger;
              logger.error("Error while sending envelope:", arg0);
            }
            return arg0;
          });
          const sendResult = _transport.send(arg0);
        }
        return nextPromise;
      }
      if (BaseClient(closure_1[4]).DEBUG_BUILD) {
        const logger = BaseClient(closure_1[5]).logger;
        logger.error("Transport disabled");
      }
      nextPromise = BaseClient(closure_1[10]).resolvedSyncPromise({});
    }
  };
  items[21] = {
    key: "_setupIntegrations",
    value: function _setupIntegrations() {
      const integrations = this._options.integrations;
      this._integrations = BaseClient(closure_1[11]).setupIntegrations(this, integrations);
      const obj = BaseClient(closure_1[11]);
      const result = BaseClient(closure_1[11]).afterSetupIntegrations(this, integrations);
    }
  };
  items[22] = {
    key: "_updateSessionFromEvent",
    value: function _updateSessionFromEvent(status, level) {
      const self = this;
      let flag = "fatal" === level.level;
      let flag2 = false;
      if (level.exception && level.exception.values) {
        const iter = tmp[Symbol.iterator]();
        flag2 = true;
        while (iter !== undefined) {
          let mechanism = iter.next().mechanism;
          if (mechanism) {
            let tmp5 = mechanism;
            if (false === tmp4.handled) {
              flag = true;
              iter.return();
              flag2 = true;
              // break
            }
            break;
          }
          // continue
        }
      }
      let tmp6 = "ok" === status.status;
      let tmp7 = tmp6;
      if (tmp6) {
        tmp7 = 0 === status.errors;
      }
      if (!tmp7) {
        if (tmp6) {
          tmp6 = flag;
        }
        tmp7 = tmp6;
      }
      if (tmp7) {
        let obj = BaseClient(closure_1[9]);
        let tmp11 = flag;
        if (flag) {
          obj = { status: "crashed" };
          tmp11 = obj;
        }
        obj = {};
        let errors = status.errors;
        if (!errors) {
          if (!flag2) {
            flag2 = flag;
          }
          errors = Number(flag2);
        }
        obj.errors = errors;
        obj.updateSession(status, Object.assign({}, tmp11, obj));
        self.captureSession(status);
      }
    }
  };
  items[23] = {
    key: "_isClientDoneProcessing",
    value: function _isClientDoneProcessing(arg0) {
      const BaseClient = arg0;
      const self = this;
      return new BaseClient(self[10]).SyncPromise((arg0) => {
        let closure_1 = 0;
        const interval = setInterval(() => {
          if (0 == _numProcessing._numProcessing) {
            const _clearInterval2 = clearInterval;
            clearInterval(closure_2);
            arg0(true);
          } else {
            const _numProcessing = _numProcessing + 1;
            let tmp2 = arg0;
            if (arg0) {
              tmp2 = _numProcessing >= arg0;
            }
            if (tmp2) {
              const _clearInterval = clearInterval;
              clearInterval(closure_2);
              arg0(false);
            }
          }
        }, 1);
      });
    }
  };
  items[24] = {
    key: "_isEnabled",
    value: function _isEnabled() {
      let tmp = false !== this.getOptions().enabled;
      if (tmp) {
        tmp = undefined !== this._transport;
      }
      return tmp;
    }
  };
  items[25] = {
    key: "_prepareEvent",
    value: function _prepareEvent(type, integrations) {
      const self = this;
      const BaseClient = this;
      if (arguments.length > 2) {
        if (undefined !== arguments[2]) {
          let currentScope = arguments[2];
        }
        if (arguments.length > 3) {
          if (undefined !== arguments[3]) {
            let isolationScope = arguments[3];
          }
          const options = self.getOptions();
          const _Object = Object;
          const keys = Object.keys(self._integrations);
          let tmp6 = !integrations.integrations;
          if (tmp6) {
            tmp6 = keys.length > 0;
          }
          if (tmp6) {
            integrations.integrations = keys;
          }
          self.emit("preprocessEvent", type, integrations);
          if (!type.type) {
            let event_id = type.event_id;
            if (!event_id) {
              event_id = integrations.event_id;
            }
            isolationScope.setLastEventId(event_id);
          }
          const obj4 = BaseClient(currentScope[15]);
          return obj4.prepareEvent(options, type, integrations, currentScope, self, isolationScope).then((contexts) => {
            if (null === contexts) {
              return contexts;
            } else {
              const _Object = Object;
              let obj = { trace: self(currentScope[14]).getTraceContextFromScope(currentScope) };
              contexts.contexts = Object.assign(obj, contexts.contexts);
              const obj2 = self(currentScope[14]);
              const _Object2 = Object;
              obj = { dynamicSamplingContext: self(currentScope[16]).getDynamicSamplingContextFromScope(self, currentScope) };
              contexts.sdkProcessingMetadata = Object.assign(obj, contexts.sdkProcessingMetadata);
              return contexts;
            }
          });
        }
        isolationScope = BaseClient(currentScope[14]).getIsolationScope();
        const obj2 = BaseClient(currentScope[14]);
      }
      currentScope = BaseClient(currentScope[14]).getCurrentScope();
    }
  };
  items[26] = {
    key: "_captureEvent",
    value: function _captureEvent(arg0) {
      const self = this;
      if (arguments.length > 1) {
        let tmp2;
        if (arguments.length > 2) {
          tmp2 = arguments[2];
        }
        return self._processEvent(arg0, {}, tmp2).then((event_id) => event_id.event_id, (logLevel) => {
          if (callback(closure_1[4]).DEBUG_BUILD) {
            if (logLevel instanceof callback(closure_1[17]).SentryError) {
              if ("log" === logLevel.logLevel) {
                const logger2 = callback(closure_1[5]).logger;
                logger2.log(logLevel.message);
              }
            }
            const logger = callback(closure_1[5]).logger;
            logger.warn(logLevel);
          }
        });
      }
    }
  };
  items[27] = {
    key: "_processEvent",
    value: function _processEvent(type) {
      let self = this;
      const BaseClient = type;
      self = this;
      const options = this.getOptions();
      const sampleRate = options.sampleRate;
      const callback2 = callback3(type);
      let str = type.type;
      if (!str) {
        str = "error";
      }
      const callback3 = "before send for type `" + str + "`";
      if (undefined !== sampleRate) {
        const parseSampleRateResult = BaseClient(arg1[18]).parseSampleRate(sampleRate);
        const obj = BaseClient(arg1[18]);
      }
      if (tmp2) {
        if ("number" === typeof parseSampleRateResult) {
          const _Math = Math;
          if (Math.random() > parseSampleRateResult) {
            self.recordDroppedEvent("sample_rate", "error", type);
            const SentryError = BaseClient(arg1[17]).SentryError;
            const _HermesInternal = HermesInternal;
            const prototype = SentryError.prototype;
            const sentryError = new SentryError("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")", "log");
            return BaseClient(arg1[10]).rejectedSyncPromise(sentryError);
          }
        }
      }
      let str3 = "replay";
      if ("replay_event" !== str) {
        str3 = str;
      }
      const tmp2 = callback2(type);
      const tmp6 = type.sdkProcessingMetadata || {};
      const _prepareEventResult = self._prepareEvent(type, arg1, arg2, type.sdkProcessingMetadata || {}.capturedSpanIsolationScope);
      const nextPromise = self._prepareEvent(type, arg1, arg2, type.sdkProcessingMetadata || {}.capturedSpanIsolationScope).then((spans) => {
        let beforeSend;
        let beforeSendSpan;
        let beforeSendTransaction;
        if (null === spans) {
          self.recordDroppedEvent("event_processor", "event_processor", spans);
          const SentryError = spans(arg1[17]).SentryError;
          const prototype = SentryError.prototype;
          const sentryError = new SentryError("An event processor returned `null`, will not send event.", "log");
          throw sentryError;
        } else {
          if (arg1.data) {
            if (true === arg1.data.__sentry__) {
              return spans;
            }
          }
          let obj = self;
          ({ beforeSend, beforeSendTransaction, beforeSendSpan } = options);
          if (callback(spans)) {
            if (beforeSend) {
              let beforeSendResult = beforeSend(spans, tmp4);
            }
            return function _validateBeforeSendResult(beforeSendResult, closure_6) {
              const combined = "" + closure_6 + " must return `null` or a valid event.";
              if (obj.isThenable(beforeSendResult)) {
                return beforeSendResult.then((arg0) => {
                  if (!obj.isPlainObject(arg0)) {
                    if (null !== arg0) {
                      const SentryError = arg1(combined[17]).SentryError;
                      const prototype = SentryError.prototype;
                      const sentryError = new SentryError(combined);
                      throw sentryError;
                    }
                  }
                  return arg0;
                }, (arg0) => {
                  const sentryError = new arg1(combined[17]).SentryError("" + arg1 + " rejected with " + arg0);
                  throw sentryError;
                });
              } else {
                if (!obj2.isPlainObject(beforeSendResult)) {
                  if (null !== beforeSendResult) {
                    const SentryError = closure_6(combined[17]).SentryError;
                    const prototype = SentryError.prototype;
                    const sentryError = new SentryError(combined);
                    throw sentryError;
                  }
                }
                return beforeSendResult;
              }
              const obj = closure_6(combined[8]);
            }(beforeSendResult, callback2);
          }
          beforeSendResult = spans;
          if (callback2(spans)) {
            if (spans.spans) {
              if (beforeSendSpan) {
                const items = [];
                spans = spans.spans;
                const tmp10 = spans[Symbol.iterator]();
                while (tmp10 !== undefined) {
                  let tmp13 = beforeSendSpan;
                  let beforeSendSpanResult = beforeSendSpan(tmp11);
                  if (beforeSendSpanResult) {
                    let tmp21 = items;
                    let tmp22 = beforeSendSpanResult;
                    let arr = items.push(tmp15);
                  } else {
                    let tmp16 = spans;
                    let tmp17 = arg1;
                    let obj2 = spans(arg1[20]);
                    let showSpanDropWarningResult = obj2.showSpanDropWarning();
                    let tmp19 = tmp2;
                    let recordDroppedEventResult1 = obj.recordDroppedEvent("before_send", "span");
                  }
                  // continue
                }
                spans.spans = items;
              }
            }
            beforeSendResult = spans;
            if (beforeSendTransaction) {
              if (spans.spans) {
                const _Object = Object;
                obj = { spanCountBeforeProcessing: spans.spans.length };
                spans.sdkProcessingMetadata = Object.assign({}, spans.sdkProcessingMetadata, obj);
              }
              beforeSendResult = beforeSendTransaction(spans, tmp4);
            }
          }
          const tmp2 = self;
        }
      });
      return self._prepareEvent(type, arg1, arg2, type.sdkProcessingMetadata || {}.capturedSpanIsolationScope).then((spans) => {
        let beforeSend;
        let beforeSendSpan;
        let beforeSendTransaction;
        if (null === spans) {
          self.recordDroppedEvent("event_processor", "event_processor", spans);
          const SentryError = spans(arg1[17]).SentryError;
          const prototype = SentryError.prototype;
          const sentryError = new SentryError("An event processor returned `null`, will not send event.", "log");
          throw sentryError;
        } else {
          if (arg1.data) {
            if (true === arg1.data.__sentry__) {
              return spans;
            }
          }
          let obj = self;
          ({ beforeSend, beforeSendTransaction, beforeSendSpan } = options);
          if (callback(spans)) {
            if (beforeSend) {
              let beforeSendResult = beforeSend(spans, tmp4);
            }
            return function _validateBeforeSendResult(beforeSendResult, closure_6) {
              const combined = "" + closure_6 + " must return `null` or a valid event.";
              if (obj.isThenable(beforeSendResult)) {
                return beforeSendResult.then((arg0) => {
                  if (!obj.isPlainObject(arg0)) {
                    if (null !== arg0) {
                      const SentryError = arg1(combined[17]).SentryError;
                      const prototype = SentryError.prototype;
                      const sentryError = new SentryError(combined);
                      throw sentryError;
                    }
                  }
                  return arg0;
                }, (arg0) => {
                  const sentryError = new arg1(combined[17]).SentryError("" + arg1 + " rejected with " + arg0);
                  throw sentryError;
                });
              } else {
                if (!obj2.isPlainObject(beforeSendResult)) {
                  if (null !== beforeSendResult) {
                    const SentryError = closure_6(combined[17]).SentryError;
                    const prototype = SentryError.prototype;
                    const sentryError = new SentryError(combined);
                    throw sentryError;
                  }
                }
                return beforeSendResult;
              }
              const obj = closure_6(combined[8]);
            }(beforeSendResult, callback2);
          }
          beforeSendResult = spans;
          if (callback2(spans)) {
            if (spans.spans) {
              if (beforeSendSpan) {
                const items = [];
                spans = spans.spans;
                const tmp10 = spans[Symbol.iterator]();
                while (tmp10 !== undefined) {
                  let tmp13 = beforeSendSpan;
                  let beforeSendSpanResult = beforeSendSpan(tmp11);
                  if (beforeSendSpanResult) {
                    let tmp21 = items;
                    let tmp22 = beforeSendSpanResult;
                    let arr = items.push(tmp15);
                  } else {
                    let tmp16 = spans;
                    let tmp17 = arg1;
                    let obj2 = spans(arg1[20]);
                    let showSpanDropWarningResult = obj2.showSpanDropWarning();
                    let tmp19 = tmp2;
                    let recordDroppedEventResult1 = obj.recordDroppedEvent("before_send", "span");
                  }
                  // continue
                }
                spans.spans = items;
              }
            }
            beforeSendResult = spans;
            if (beforeSendTransaction) {
              if (spans.spans) {
                const _Object = Object;
                obj = { spanCountBeforeProcessing: spans.spans.length };
                spans.sdkProcessingMetadata = Object.assign({}, spans.sdkProcessingMetadata, obj);
              }
              beforeSendResult = beforeSendTransaction(spans, tmp4);
            }
          }
          const tmp2 = self;
        }
      }).then((sdkProcessingMetadata) => {
        if (null === sdkProcessingMetadata) {
          self.recordDroppedEvent("before_send", str3, sdkProcessingMetadata);
          if (closure_5) {
            self.recordDroppedEvent("before_send", "span", 1 + sdkProcessingMetadata.spans || [].length);
            const arr = sdkProcessingMetadata.spans || [];
          }
          const SentryError = sdkProcessingMetadata(arg1[17]).SentryError;
          const _HermesInternal = HermesInternal;
          const prototype = SentryError.prototype;
          const sentryError = new SentryError("" + closure_6 + " returned `null`, will not send event.", "log");
          throw sentryError;
        } else {
          let session = arg2;
          if (arg2) {
            session = arg2.getSession();
          }
          let tmp4 = !closure_5;
          if (!closure_5) {
            tmp4 = session;
          }
          if (tmp4) {
            const result = self._updateSessionFromEvent(session, sdkProcessingMetadata);
          }
          if (closure_5) {
            let num2 = 0;
            if (sdkProcessingMetadata.spans) {
              num2 = sdkProcessingMetadata.spans.length;
            }
            const diff = (sdkProcessingMetadata.sdkProcessingMetadata && sdkProcessingMetadata.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - num2;
            if (diff > 0) {
              self.recordDroppedEvent("before_send", "span", diff);
            }
            const tmp8 = sdkProcessingMetadata.sdkProcessingMetadata && sdkProcessingMetadata.sdkProcessingMetadata.spanCountBeforeProcessing || 0;
          }
          const transaction_info = sdkProcessingMetadata.transaction_info;
          if (closure_5) {
            if (transaction_info) {
              if (sdkProcessingMetadata.transaction !== sdkProcessingMetadata.transaction) {
                const _Object = Object;
                const obj = { source: "custom" };
                sdkProcessingMetadata.transaction_info = Object.assign({}, transaction_info, obj);
              }
            }
          }
          self.sendEvent(sdkProcessingMetadata, arg1);
          return sdkProcessingMetadata;
        }
      }).then(null, (originalException) => {
        if (originalException instanceof originalException(arg1[17]).SentryError) {
          throw originalException;
        } else {
          let obj = {};
          obj = { __sentry__: true };
          obj.data = obj;
          obj.originalException = originalException;
          self.captureException(originalException, obj);
          const SentryError = originalException(arg1[17]).SentryError;
          const _HermesInternal = HermesInternal;
          const prototype = SentryError.prototype;
          const sentryError = new SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + originalException);
          throw sentryError;
        }
      });
    }
  };
  items[28] = {
    key: "_process",
    value: function _process(promise) {
      const BaseClient = this;
      this._numProcessing = this._numProcessing + 1;
      promise.then((arg0) => {
        self._numProcessing = self._numProcessing - 1;
        return arg0;
      }, (arg0) => {
        self._numProcessing = self._numProcessing - 1;
        return arg0;
      });
    }
  };
  items[29] = {
    key: "_clearOutcomes",
    value: function _clearOutcomes() {
      this._outcomes = {};
      const entries = Object.entries(this._outcomes);
      return entries.map((arg0) => {
        const tmp = callback(arg0, 2);
        const tmp2 = callback(tmp[0].split(":"), 2);
        return { reason: tmp2[0], category: tmp2[1], quantity: tmp[1] };
      });
    }
  };
  items[30] = {
    key: "_flushOutcomes",
    value: function _flushOutcomes() {
      const self = this;
      if (BaseClient(closure_1[4]).DEBUG_BUILD) {
        const logger = BaseClient(closure_1[5]).logger;
        logger.log("Flushing outcomes...");
      }
      const _clearOutcomesResult = self._clearOutcomes();
      if (0 !== _clearOutcomesResult.length) {
        const DEBUG_BUILD = BaseClient(closure_1[4]).DEBUG_BUILD;
        if (self._dsn) {
          if (DEBUG_BUILD) {
            const logger4 = BaseClient(closure_1[5]).logger;
            logger4.log("Sending outcomes:", _clearOutcomesResult);
          }
          let tunnel = self._options.tunnel;
          if (tunnel) {
            tunnel = BaseClient(closure_1[3]).dsnToString(self._dsn);
            const obj2 = BaseClient(closure_1[3]);
          }
          self.sendEnvelope(BaseClient(closure_1[19]).createClientReportEnvelope(_clearOutcomesResult, tunnel));
          const obj = BaseClient(closure_1[19]);
        } else if (DEBUG_BUILD) {
          const logger3 = BaseClient(closure_1[5]).logger;
          logger3.log("No dsn provided, will not send outcomes");
        }
      } else if (BaseClient(closure_1[4]).DEBUG_BUILD) {
        const logger2 = BaseClient(closure_1[5]).logger;
        logger2.log("No outcomes to send");
      }
    }
  };
  return callback(BaseClient, items);
}();
