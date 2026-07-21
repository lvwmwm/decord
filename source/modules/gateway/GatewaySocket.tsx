// Module ID: 12443
// Function ID: 94934
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: setAccountSwitchUserId

// Module 12443 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function noop() {

}
function withGatewayCompressionHandler(dataReady) {
  const arg1 = dataReady;
  const importDefault = arg1;
  const importAll = arg2;
  let closure_3 = 0;
  dataReady.dataReady((arg0) => {
    let closure_3 = 0;
    return arg2(arg0, closure_3);
  });
  let closure_4 = false;
  return (data) => {
    data = data.data;
    if (null != data.raw_length) {
      closure_3 = closure_3 + data.raw_length;
    } else {
      closure_3 = closure_3 + callback(data);
    }
    data.feed(data);
  };
}
function byteSize(byteLength) {
  if (null == byteLength) {
    return 0;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
({ AnalyticEvents: closure_12, Endpoints: closure_13 } = arg1(dependencyMap[8]));
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("GatewaySocket");
let importDefaultResult1 = importDefault(dependencyMap[10]);
importDefaultResult1 = new importDefaultResult1();
let closure_16 = null;
let closure_17 = 30 * importDefault(dependencyMap[12]).Millis.SECOND;
let closure_18 = 3 * importDefault(dependencyMap[12]).Millis.MINUTE;
const MINUTE = importDefault(dependencyMap[12]).Millis.MINUTE;
const tmp2 = arg1(dependencyMap[8]);
const tmp7 = (arg0) => {
  class GatewaySocket {
    constructor() {
      self = this;
      tmp = closure_6(this, GatewaySocket);
      obj = closure_9(GatewaySocket);
      tmp2 = closure_8;
      if (closure_21()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_9;
        constructResult = Reflect.construct(obj, [], closure_9(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp7 = GatewaySocket(closure_3[13]);
      tmp7 = new tmp7(1000, closure_19);
      tmp2Result.dispatchExceptionBackoff = tmp7;
      tmp2Result.dispatchSuccessTimer = 0;
      tmp2Result.didForceClearGuildHashes = false;
      tmp2Result.identifyUncompressedByteSize = 0;
      tmp2Result.identifyCompressedByteSize = 0;
      tmp2Result.analytics = {};
      tmp2Result.identifyCount = 0;
      tmp2Result.resumeUrl = null;
      tmp2Result.iosGoingAwayEventCount = 0;
      tmp9 = GatewaySocket(closure_3[14]);
      tmp9 = new tmp9();
      tmp2Result.altGateway = tmp9;
      tmp2Result.failedConnectAttempts = 0;
      tmp2Result.receivedHelloThisAttempt = false;
      tmp2Result.heartbeatQOSState = { id: "o", x: "o" };
      tmp2Result.send = (op, d) => {
        if (obj.isLoggingGatewayEvents) {
          closure_14.verboseDangerously("~>", op, tmp2Result(closure_3[15]).Opcode[op], d);
        }
        const obj = { op, d };
        if (arg2) {
          if (!tmp2Result.isSessionEstablished()) {
            const _HermesInternal = HermesInternal;
            closure_14.warn("Attempted to send while not being in a connected state opcode: " + op);
          }
        }
        if (null != tmp2Result.webSocket) {
          const webSocket = tmp2Result.webSocket;
          webSocket.send(packResult);
        }
      };
      tmp11 = GatewaySocket(closure_3[16]);
      tmp11 = new tmp11(tmp2Result);
      tmp2Result.dispatcher = tmp11;
      tmp13 = GatewaySocket(closure_3[13]);
      tmp13 = new tmp13(1000, 60000);
      tmp2Result.gatewayBackoff = tmp13;
      tmp2Result.connectionState_ = GatewaySocket(closure_3[17]).CLOSED;
      tmp2Result.webSocket = null;
      tmp2Result.seq = 0;
      tmp2Result.sessionId = null;
      tmp2Result.token = null;
      tmp2Result.initialHeartbeatTimeout = null;
      tmp2Result.expeditedHeartbeatTimeout = null;
      tmp2Result.lastHeartbeatTime = null;
      tmp2Result.lastHeartbeatAckTime = null;
      tmp2Result.helloTimeout = null;
      tmp2Result.heartbeatInterval = null;
      tmp2Result.heartbeater = null;
      tmp2Result.heartbeatAck = true;
      tmp2Result.connectionStartTime = 0;
      tmp2Result.identifyStartTime = 0;
      tmp2Result.nextReconnectIsImmediate = false;
      obj2 = apply(closure_3[18]);
      tmp2Result.compressionHandler = obj2.getCompressionHandler(closure_15);
      tmp2Result.hasConnectedOnce = false;
      tmp2Result.isFastConnect = false;
      tmp2Result.identifyCount = 0;
      tmp2Result.iosGoingAwayEventCount = 0;
      tmp2Result.failedConnectAttempts = 0;
      tmp2Result.receivedHelloThisAttempt = false;
      return tmp2Result;
    }
  }
  const importDefault = GatewaySocket;
  callback3(GatewaySocket, arg0);
  let obj = {
    key: "connectionState",
    get() {
      return this.connectionState_;
    },
    set(connectionState_) {
      closure_14.verbose("Setting connection state to " + connectionState_);
      this.connectionState_ = connectionState_;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "addAnalytics",
    value(arg0) {
      const merged = Object.assign(this.analytics);
      const merged1 = Object.assign(arg0);
      this.analytics = {};
    }
  };
  items[1] = obj;
  obj = {
    key: "setResumeUrl",
    value(str) {
      let endsWithResult = null != str;
      if (endsWithResult) {
        endsWithResult = str.endsWith("/");
      }
      let substr = str;
      if (endsWithResult) {
        substr = str.substring(0, str.length - 1);
      }
      if (null !== substr) {
        const _HermesInternal = HermesInternal;
        closure_14.verbose("Updating resume url to " + substr);
      }
      this.resumeUrl = substr;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleActiveStateChange",
    value(currentPayload) {
      const self = this;
      currentPayload = this.heartbeatQOSState.currentPayload;
      let isSessionEstablishedResult = !(null != currentPayload && currentPayload.active);
      if (null == self.heartbeatQOSState.currentPayload) {
        self.heartbeatQOSState.currentPayload = currentPayload;
      }
      const currentPayload2 = self.heartbeatQOSState.currentPayload;
      if (currentPayload.active) {
        currentPayload2.active = true;
        const _Set = Set;
        const items = [];
        HermesBuiltin.arraySpread(currentPayload.reasons, HermesBuiltin.arraySpread(currentPayload2.reasons, 0));
        const set = new Set(items);
        const items1 = [];
        HermesBuiltin.arraySpread(set, 0);
        currentPayload2.reasons = items1.sort();
        if (isSessionEstablishedResult) {
          isSessionEstablishedResult = self.isSessionEstablished();
        }
        if (isSessionEstablishedResult) {
          self._sendHeartbeat();
        }
      }
      self.heartbeatQOSState.upcomingState = currentPayload;
    }
  };
  items[4] = {
    key: "handleUpdateTimeSpentSessionId",
    value(initialization_timestamp, session_id, client_launch_id) {
      const self = this;
      if (this.connectionState_ === GatewaySocket(closure_3[17]).SESSION_ESTABLISHED) {
        const obj = { initialization_timestamp, session_id, client_launch_id };
        self.send(callback(closure_3[15]).Opcode.UPDATE_TIME_SPENT_SESSION_ID, obj);
        self._sendHeartbeat();
      }
    }
  };
  items[5] = {
    key: "_connect",
    value() {
      let _handleClose;
      let compressionHandler2;
      const self = this;
      let closure_0 = this;
      if (this.willReconnect()) {
        let obj = callback2(closure_3[19]);
        if (obj.getIsPaused()) {
          closure_14.info("Skipping _connect because socket is paused");
        } else {
          self.connectionState = GatewaySocket(closure_3[17]).CONNECTING;
          self.nextReconnectIsImmediate = false;
          const algorithm = self.compressionHandler.getAlgorithm();
          const name = name.getName();
          const _getGatewayUrlResult = self._getGatewayUrl();
          const _window = window;
          self.receivedHelloThisAttempt = false;
          GatewaySocket(closure_3[20]).mark("\u{1F310}", "Socket._connect");
          let str5 = "none";
          if (null != algorithm) {
            str5 = algorithm;
          }
          const _HermesInternal = HermesInternal;
          closure_14.info("[CONNECT] " + _getGatewayUrlResult + ", encoding: " + name + ", version: " + window.GLOBAL_ENV.API_VERSION + ", compression: " + str5);
          if (null !== self.webSocket) {
            closure_14.error("_connect called with already existing websocket");
            self._cleanup((close) => close.close(4000));
          }
          const _Date = Date;
          self.connectionStartTime = Date.now();
          const _setTimeout = setTimeout;
          self.helloTimeout = setTimeout(() => {
            self._handleClose(false, 0, "The connection timed out after " + Date.now() - self.connectionStartTime + " ms - did not receive OP_HELLO in time.");
            self.setResumeUrl(null);
          }, closure_17);
          const _URL = URL;
          const str11 = new URL(_getGatewayUrlResult);
          const GatewaySocket = str11;
          const searchParams = str11.searchParams;
          searchParams.append("encoding", name);
          const searchParams2 = str11.searchParams;
          searchParams2.append("v", window.GLOBAL_ENV.API_VERSION.toString());
          if (null != algorithm) {
            const searchParams3 = str11.searchParams;
            searchParams3.append("compress", algorithm);
          }
          obj = {
            gatewayURL: str11.toString(),
            newCallback(webSocket) {
                  self.webSocket = webSocket;
                  self.compressionHandler.bindWebSocket(webSocket);
                },
            onOpen(isFastConnect) {
                  str11(closure_3[20]).mark("\u{1F310}", "GatewaySocket.onOpen " + isFastConnect);
                  const diff = Date.now() - self.connectionStartTime;
                  closure_14.info("[CONNECTED] " + str11.toString() + " in " + diff + " ms");
                  self.isFastConnect = isFastConnect;
                  if (isFastConnect) {
                    const result = obj2._doFastConnectIdentify();
                  } else {
                    obj2._doResumeOrIdentify();
                  }
                }
          };
          ({ _handleClose, compressionHandler: compressionHandler2 } = self);
          obj.onMessage = callback6(compressionHandler2, _handleClose.bind(self), (items, compressed_byte_size) => {
            let d;
            let op;
            let s;
            let t;
            const timestamp = Date.now();
            ({ op, s, t, d } = closure_15.unpack(items));
            if (op !== self(closure_3[15]).Opcode.DISPATCH) {
              let obj = str11(closure_3[20]);
              const _HermesInternal = HermesInternal;
              obj.mark("\u{1F310}", "GatewaySocket.onMessage " + op + " " + self(closure_3[15]).Opcode[op]);
            }
            if (obj.isLoggingGatewayEvents) {
              items = [op];
              if (op === self(closure_3[15]).Opcode.DISPATCH) {
                items.push(t);
              }
              items.push(d);
              const verboseDangerously = closure_14.verboseDangerously;
              const items1 = [];
              HermesBuiltin.arraySpread(items, 1);
              HermesBuiltin.apply(items1, closure_14);
            }
            const diff = Date.now() - timestamp;
            if ("READY" === t) {
              const parseReady = str11(closure_3[21]).parseReady;
              const result = parseReady.set(timestamp, diff);
            } else if ("READY_SUPPLEMENTAL" === t) {
              const parseReadySupplemental = str11(closure_3[21]).parseReadySupplemental;
              const result1 = parseReadySupplemental.set(timestamp, diff);
            } else if (diff > 10) {
              str11(closure_3[20]).mark("\u{1F310}", `Parse ${t}`, diff);
              const obj3 = str11(closure_3[20]);
            }
            if (null != s) {
              self.seq = s;
            }
            if (self(closure_3[15]).Opcode.HELLO === op) {
              self._clearHelloTimeout();
              self._handleHello(d);
            } else if (self(closure_3[15]).Opcode.RECONNECT === op) {
              self._handleReconnect();
            } else if (self(closure_3[15]).Opcode.INVALID_SESSION === op) {
              const result2 = self._handleInvalidSession(d);
            } else if (self(closure_3[15]).Opcode.HEARTBEAT === op) {
              const result3 = self._handleHeartbeatReceive();
            } else if (self(closure_3[15]).Opcode.HEARTBEAT_ACK === op) {
              self._handleHeartbeatAck(d);
            } else if (self(closure_3[15]).Opcode.DISPATCH === op) {
              let tmp31 = null;
              if (tmp20) {
                obj = { compressed_byte_size, uncompressed_byte_size: callback(items), compression_algorithm: self.compressionHandler.getAlgorithm(), packing_algorithm: closure_15.getName(), unpack_duration_ms: diff };
                tmp31 = obj;
                const compressionHandler = self.compressionHandler;
              }
              self._handleDispatch(d, t, tmp31);
            } else {
              const _HermesInternal2 = HermesInternal;
              closure_14.info("Unhandled op " + op);
            }
            self._sendHeartbeatIfDue();
          });
          obj.onError = function onError() {
            self.setResumeUrl(null);
            str11(closure_3[22]).flushDNSCache();
            self._handleClose(false, 0, "An error with the websocket occurred");
          };
          obj.onClose = function onClose(wasClean) {
            return self._handleClose(wasClean.wasClean, wasClean.code, wasClean.reason);
          };
          function newOrTakeoverWebSocket(onMessage) {
            let gatewayURL;
            let newCallback;
            let onClose;
            let onError;
            let onOpen;
            ({ gatewayURL, onOpen } = onMessage);
            const self = onOpen;
            onMessage = onMessage.onMessage;
            ({ newCallback, onError, onClose } = onMessage);
            closure_14.enableNativeLogger(true);
            let str11 = false;
            let clientState = null;
            window._ws = null;
            let tmp2;
            let flag = false;
            let flag2 = false;
            let messages2 = null;
            let tmp4 = null;
            if (null != _ws) {
              const ws = _ws.ws;
              const userId = _ws.state.userId;
              let tmp5 = null != userId;
              if (tmp5) {
                tmp5 = null != closure_16;
              }
              if (tmp5) {
                tmp5 = userId !== closure_16;
              }
              if (_ws.state.gateway !== gatewayURL) {
                const _HermesInternal2 = HermesInternal;
                closure_14.verbose("[FAST CONNECT] gatewayURL mismatch: " + _ws.state.gateway + " !== " + gatewayURL);
                ws.close(1000);
                tmp2 = null;
                flag = false;
                flag2 = false;
                messages2 = null;
                tmp4 = null;
              } else if (tmp5) {
                const _HermesInternal = HermesInternal;
                closure_14.log("[FAST CONNECT] refusing to adopt socket: identified user " + userId + " does not match switch target " + closure_16);
                ws.close(1000);
                tmp2 = null;
                flag = false;
                flag2 = false;
                messages2 = null;
                tmp4 = null;
              } else {
                let obj = {};
                const merged = Object.assign(_ws.state);
                if (null != obj.messages) {
                  const messages = obj.messages;
                  obj.messages = messages.map((data) => {
                    let tmp = data;
                    if (null != data.data) {
                      tmp = data;
                      if ("string" === typeof data.data) {
                        const obj = {};
                        const merged = Object.assign(data);
                        obj["data"] = data.data.substring(0, 100);
                        tmp = obj;
                        const str2 = data.data;
                      }
                    }
                    return tmp;
                  });
                }
                obj = {};
                const merged1 = Object.assign(obj);
                const messages1 = obj.messages;
                let length;
                if (null != messages1) {
                  length = messages1.length;
                }
                obj["messages"] = length;
                closure_14.log("[FAST CONNECT] successfully took over websocket, state:", obj);
                flag = _ws.state.open;
                const identify = _ws.state.identify;
                str11 = identify;
                messages2 = _ws.state.messages;
                clientState = _ws.state.clientState;
                tmp2 = ws;
                flag2 = identify;
                tmp4 = clientState;
              }
            }
            if (null == tmp2) {
              const tmp25 = str11(closure_3[11])(gatewayURL);
              tmp25.binaryType = "arraybuffer";
              tmp2 = tmp25;
            }
            newCallback(tmp2);
            if (flag) {
              onOpen(flag2, tmp4);
            }
            if (null != messages2) {
              const item = messages2.forEach(onMessage);
            }
            tmp2.onopen = () => onOpen(identify, clientState);
            tmp2.onmessage = onMessage;
            tmp2.onclose = onClose;
            tmp2.onerror = onError;
          }(obj);
          const compressionHandler = self.compressionHandler;
          const obj2 = GatewaySocket(closure_3[20]);
        }
      } else {
        closure_14.verbose("Skipping _connect because willReconnect is false");
      }
    }
  };
  items[6] = {
    key: "_handleHello",
    value(heartbeat_interval) {
      heartbeat_interval = heartbeat_interval.heartbeat_interval;
      this.heartbeatInterval = heartbeat_interval;
      const diff = Date.now() - this.connectionStartTime;
      closure_14.verbose("[HELLO] via " + callback(closure_3[23]).getConnectionPath(heartbeat_interval) + ", heartbeat interval: " + heartbeat_interval + ", took " + diff + " ms");
      const obj = callback(closure_3[23]);
      callback(closure_3[23]).logGatewayConnected(this, this.altGateway, this._getGatewayUrl());
      this.receivedHelloThisAttempt = true;
      this.failedConnectAttempts = 0;
      this._startHeartbeater();
    }
  };
  items[7] = {
    key: "_handleReconnect",
    value() {
      closure_14.verbose("[RECONNECT] gateway requested I reconnect.");
      this._cleanup((close) => close.close(4000));
      this.connectionState = GatewaySocket(closure_3[17]).WILL_RECONNECT;
      this._connect();
    }
  };
  items[8] = {
    key: "_handleInvalidSession",
    value(arg0) {
      const self = this;
      let str = "";
      if (arg0) {
        str = " can resume)";
      }
      closure_14.info(`[INVALID_SESSION]${str}`);
      if (arg0) {
        self._doResumeOrIdentify();
      } else {
        self._doIdentify();
      }
    }
  };
  items[9] = {
    key: "_handleDispatch",
    value(session_id) {
      const self = this;
      const diff = Date.now() - this.connectionStartTime;
      if ("READY" === arg1) {
        session_id = session_id.session_id;
        self.sessionId = session_id;
        const connectionPath = callback(closure_3[23]).getConnectionPath(session_id);
        const obj = callback(closure_3[23]);
        GatewaySocket(closure_3[20]).setServerTrace(connectionPath);
        const _HermesInternal2 = HermesInternal;
        closure_14.info("[READY] took " + diff + "ms, as " + session_id);
        const _HermesInternal3 = HermesInternal;
        closure_14.verbose("" + connectionPath);
        self.connectionState = GatewaySocket(closure_3[17]).SESSION_ESTABLISHED;
        const gatewayBackoff2 = self.gatewayBackoff;
        gatewayBackoff2.succeed();
        self.iosGoingAwayEventCount = 0;
        const altGateway2 = self.altGateway;
        altGateway2.recordSuccess();
        self.setResumeUrl(session_id.resume_gateway_url);
        const obj2 = GatewaySocket(closure_3[20]);
      } else if ("READY_SUPPLEMENTAL" === arg1) {
        const _HermesInternal = HermesInternal;
        closure_14.info("[READY_SUPPLEMENTAL] took " + diff + "ms");
        self.connectionState = GatewaySocket(closure_3[17]).SESSION_ESTABLISHED;
        const gatewayBackoff = self.gatewayBackoff;
        gatewayBackoff.succeed();
        self.iosGoingAwayEventCount = 0;
        const altGateway = self.altGateway;
        altGateway.recordSuccess();
      } else if ("RESUMED" === arg1) {
        closure_14.verbose(callback(closure_3[23]).getConnectionPath(session_id));
        self.connectionState = GatewaySocket(closure_3[17]).SESSION_ESTABLISHED;
        const gatewayBackoff3 = self.gatewayBackoff;
        gatewayBackoff3.succeed();
        self.iosGoingAwayEventCount = 0;
        const altGateway3 = self.altGateway;
        altGateway3.recordSuccess();
        const obj3 = callback(closure_3[23]);
      }
      const dispatcher = self.dispatcher;
      dispatcher.receiveDispatch(session_id, arg1, arg2);
    }
  };
  items[10] = {
    key: "handleResumeDispatched",
    value() {
      closure_14.info("[RESUMED] took " + Date.now() - this.connectionStartTime + "ms, replayed " + this.dispatcher.resumeAnalytics.numEvents + " events, new seq: " + this.seq);
    }
  };
  items[11] = {
    key: "handleReadyDispatched",
    value() {
      this.didForceClearGuildHashes = false;
      this.hasConnectedOnce = true;
    }
  };
  items[12] = {
    key: "_getGatewayUrl",
    value() {
      const self = this;
      if (null != this.resumeUrl) {
        let resumeUrl = self.resumeUrl;
      } else {
        const altGateway = self.altGateway;
        resumeUrl = altGateway.getAltGatewayUrl();
        if (null == resumeUrl) {
          resumeUrl = closure_20;
        }
      }
      return resumeUrl;
    }
  };
  items[13] = {
    key: "_maybeFallBackFromAltGateway",
    value() {
      const self = this;
      const altGateway = this.altGateway;
      if (altGateway.shouldUseAltGateway()) {
        const altGateway2 = self.altGateway;
        altGateway2.recordFailure();
        const altGateway3 = self.altGateway;
        if (!altGateway3.shouldUseAltGateway()) {
          const gatewayBackoff = self.gatewayBackoff;
          gatewayBackoff.succeed();
          self.setResumeUrl(null);
          closure_14.warn("[ALT GATEWAY] 3 consecutive failures, falling back to default URL for this session.");
        }
      }
    }
  };
  items[14] = {
    key: "_handleHeartbeatReceive",
    value() {
      const self = this;
      this._sendHeartbeat();
      if (tmp2) {
        const _clearInterval = clearInterval;
        clearInterval(self.heartbeater);
        const _setInterval = setInterval;
        const _doHeartbeatInterval = self._doHeartbeatInterval;
        self.heartbeater = setInterval(_doHeartbeatInterval.bind(self), self.heartbeatInterval);
      }
    }
  };
  items[15] = {
    key: "_handleHeartbeatAck",
    value() {
      const self = this;
      this.lastHeartbeatAckTime = Date.now();
      this.heartbeatAck = true;
      if (null !== this.expeditedHeartbeatTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.expeditedHeartbeatTimeout);
        self.expeditedHeartbeatTimeout = null;
        closure_14.verbose("Expedited heartbeat succeeded");
      }
    }
  };
  items[16] = {
    key: "_handleHeartbeatTimeout",
    value() {
      let closure_0 = this;
      this._cleanup((close) => close.close(4000));
      this.connectionState = GatewaySocket(closure_3[17]).WILL_RECONNECT;
      const result = this._maybeFallBackFromAltGateway();
      const gatewayBackoff = this.gatewayBackoff;
      const result1 = gatewayBackoff.fail(() => self._connect()) / 1000;
      closure_14.warn("[ACK TIMEOUT] reconnecting in " + result1.toFixed(2) + " seconds.");
    }
  };
  items[17] = {
    key: "_handleClose",
    value(arg0, code, reason) {
      let flag = arg0;
      const self = this;
      let closure_0 = this;
      if (!arg0) {
        flag = false;
      }
      self._cleanup();
      self.emit("close", { code, reason });
      if (code === 4004) {
        self.connectionState = GatewaySocket(closure_3[17]).CLOSED;
        closure_14.warn("[WS CLOSED] because of authentication failure, marking as closed.");
        return self._reset(flag, code, reason);
      } else {
        const result = self._tryDetectInvalidIOSToken(code, reason, flag);
        self.connectionState = GatewaySocket(closure_3[17]).WILL_RECONNECT;
        if (!self.receivedHelloThisAttempt) {
          self.failedConnectAttempts = self.failedConnectAttempts + 1;
        }
        const result1 = self._maybeFallBackFromAltGateway();
        if (self.nextReconnectIsImmediate) {
          const _HermesInternal2 = HermesInternal;
          closure_14.info("[WS CLOSED] (" + flag.toString() + ", " + code + ", " + reason + ") retrying immediately.");
          self._connect();
        } else {
          const gatewayBackoff = self.gatewayBackoff;
          let str = flag.toString();
          const result2 = gatewayBackoff.fail(() => self._connect()) / 1000;
          const _HermesInternal = HermesInternal;
          str = "[WS CLOSED] (";
          closure_14.info("[WS CLOSED] (" + str + ", " + code + ", " + reason + ") retrying in " + result2.toFixed(2) + " seconds.");
          if (self.gatewayBackoff.fails > 4) {
            self._reset(flag, code, reason);
          }
          const failResult = gatewayBackoff.fail(() => self._connect());
        }
      }
      const obj = { code, reason };
    }
  };
  items[18] = {
    key: "_tryDetectInvalidIOSToken",
    value(arg0, arg1, arg2) {
      const self = this;
      const callback = this;
      const GatewaySocket = arg2;
      let obj = callback(closure_3[24]);
      let isIOSResult = obj.isIOS();
      if (isIOSResult) {
        isIOSResult = null != self.token;
      }
      if (isIOSResult) {
        isIOSResult = 1001 === arg0;
      }
      if (isIOSResult) {
        isIOSResult = "Stream end encountered" === arg1;
      }
      if (isIOSResult) {
        self.iosGoingAwayEventCount = self.iosGoingAwayEventCount + 1;
        if (3 === self.iosGoingAwayEventCount) {
          const HTTP = callback(closure_3[25]).HTTP;
          obj = { url: constants2.ME };
          obj = { authorization: self.token };
          obj.headers = obj;
          obj.rejectWithError = false;
          const value = HTTP.get(obj);
          value.then((api_status_code) => {
            arg2(closure_3[26]).track(constants.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: api_status_code.status });
          }, (status) => {
            status = status.status;
            if (401 === status) {
              self.connectionState = arg2(closure_3[17]).CLOSED;
              closure_14.warn("[WS CLOSED] because of manual authentication failure, marking as closed.");
              self._reset(arg2, 4004, "invalid token manually detected");
            }
            arg2(closure_3[26]).track(constants.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: status });
          });
        }
      }
    }
  };
  items[19] = {
    key: "_reset",
    value(wasClean, code, reason) {
      this.sessionId = null;
      this.seq = 0;
      closure_14.warn("[RESET] (" + wasClean.toString() + ", " + code + ", " + reason + ")");
      this.emit("disconnect", { wasClean, code, reason });
    }
  };
  items[20] = {
    key: "_sendHeartbeatIfDue",
    value() {
      const self = this;
      if (null != this.heartbeatInterval) {
        if (null != self.heartbeater) {
          const lastHeartbeatTime = self.lastHeartbeatTime;
          let tmp = null != lastHeartbeatTime;
          if (tmp) {
            const _Date = Date;
            tmp = Date.now() - lastHeartbeatTime > self.heartbeatInterval + 5000;
          }
          if (tmp) {
            self._sendHeartbeat();
          }
        }
      }
    }
  };
  items[21] = {
    key: "_doHeartbeatInterval",
    value() {
      const self = this;
      if (this.heartbeatAck) {
        self.heartbeatAck = false;
        self._sendHeartbeat();
      } else if (null === self.expeditedHeartbeatTimeout) {
        const result = self._handleHeartbeatTimeout();
      }
    }
  };
  items[22] = {
    key: "_startHeartbeater",
    value() {
      const self = this;
      let closure_0 = this;
      const heartbeatInterval = this.heartbeatInterval;
      const GatewaySocket = heartbeatInterval;
      GatewaySocket(closure_3[27])(null != heartbeatInterval, "GatewaySocket: Heartbeat interval should never null here.");
      if (null !== this.initialHeartbeatTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.initialHeartbeatTimeout);
      }
      if (null !== self.heartbeater) {
        const _clearInterval = clearInterval;
        clearInterval(self.heartbeater);
        self.heartbeater = null;
      }
      self.initialHeartbeatTimeout = setTimeout(() => {
        self.initialHeartbeatTimeout = null;
        self.heartbeatAck = true;
        const _doHeartbeatInterval = self._doHeartbeatInterval;
        self.heartbeater = setInterval(_doHeartbeatInterval.bind(self), heartbeatInterval);
        self._doHeartbeatInterval();
      }, Math.floor(Math.random() * heartbeatInterval));
    }
  };
  items[23] = {
    key: "_stopHeartbeater",
    value() {
      const self = this;
      if (null !== this.heartbeater) {
        const _clearInterval = clearInterval;
        clearInterval(self.heartbeater);
        self.heartbeater = null;
      }
      if (null !== self.initialHeartbeatTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.initialHeartbeatTimeout);
        self.initialHeartbeatTimeout = null;
      }
      if (null !== self.expeditedHeartbeatTimeout) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(self.expeditedHeartbeatTimeout);
        self.expeditedHeartbeatTimeout = null;
      }
    }
  };
  items[24] = {
    key: "_clearHelloTimeout",
    value() {
      const self = this;
      if (null != this.helloTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.helloTimeout);
        self.helloTimeout = null;
      }
    }
  };
  items[25] = {
    key: "_cleanup",
    value(arg0) {
      const self = this;
      const Emitter = GatewaySocket(closure_3[28]).Emitter;
      Emitter.resume();
      this._stopHeartbeater();
      this._clearHelloTimeout();
      const webSocket = this.webSocket;
      this.webSocket = null;
      if (null != webSocket) {
        webSocket.onopen = closure_22;
        webSocket.onmessage = closure_22;
        webSocket.onerror = closure_22;
        webSocket.onclose = closure_22;
        if (null != arg0) {
          arg0(webSocket);
        }
      }
      const gatewayBackoff = self.gatewayBackoff;
      gatewayBackoff.cancel();
      self.compressionHandler.close();
      self.compressionHandler = callback(closure_3[18]).getCompressionHandler(closure_15);
    }
  };
  items[26] = {
    key: "_doResume",
    value() {
      const self = this;
      this.connectionState = GatewaySocket(closure_3[17]).RESUMING;
      let obj = callback(closure_3[23]);
      this.dispatcher.resumeAnalytics = obj.createResumeAnalytics(Date.now() - this.connectionStartTime);
      const sessionId = this.sessionId;
      let str = "";
      if (null != sessionId) {
        str = sessionId;
      }
      closure_14.info("[RESUME] resuming session " + str + ", seq: " + self.seq);
      obj = { token: self.token, session_id: self.sessionId, seq: self.seq };
      self.send(callback(closure_3[15]).Opcode.RESUME, obj, false);
    }
  };
  const obj25 = { key: "_doIdentify" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj25.value = function _doIdentify() {
    return callback(...arguments);
  };
  items[27] = obj25;
  items[28] = {
    key: "_doFastConnectIdentify",
    value() {
      const self = this;
      this.seq = 0;
      this.sessionId = null;
      const handleIdentifyResult = this.handleIdentify();
      if (null !== handleIdentifyResult) {
        self.token = handleIdentifyResult.token;
        self.connectionState = GatewaySocket(closure_3[17]).IDENTIFYING;
        const _Date = Date;
        self.identifyStartTime = Date.now();
        self.identifyCount = self.identifyCount + 1;
        closure_14.verbose("[IDENTIFY, fast-connect]");
        const result = self._updateLastHeartbeatAckTime();
      } else {
        self._handleClose(true, 4004, "No connection info provided");
      }
    }
  };
  items[29] = {
    key: "_doResumeOrIdentify",
    value() {
      const self = this;
      if (null === this.sessionId) {
        self._doIdentify();
      } else {
        self._doResume();
      }
      const result = self._updateLastHeartbeatAckTime();
    }
  };
  items[30] = {
    key: "_updateLastHeartbeatAckTime",
    value() {
      this.lastHeartbeatAckTime = Date.now();
    }
  };
  items[31] = {
    key: "_consumeQOSPayload",
    value() {
      const self = this;
      let currentPayload = this.heartbeatQOSState.upcomingState;
      if (null == currentPayload) {
        currentPayload = self.heartbeatQOSState.currentPayload;
      }
      this.heartbeatQOSState.currentPayload = currentPayload;
      self.heartbeatQOSState.upcomingState = null;
      return this.heartbeatQOSState.currentPayload;
    }
  };
  items[32] = {
    key: "_sendHeartbeat",
    value() {
      const _consumeQOSPayloadResult = this._consumeQOSPayload();
      this.send(callback(closure_3[15]).Opcode.QOS_HEARTBEAT, { seq: this.seq, qos: this._consumeQOSPayload() }, false);
      this.lastHeartbeatTime = Date.now();
    }
  };
  items[33] = {
    key: "getLogger",
    value() {
      return closure_14;
    }
  };
  items[34] = {
    key: "willReconnect",
    value() {
      return this.connectionState === GatewaySocket(closure_3[17]).WILL_RECONNECT;
    }
  };
  items[35] = {
    key: "isClosed",
    value() {
      return this.connectionState === GatewaySocket(closure_3[17]).CLOSED;
    }
  };
  items[36] = {
    key: "isSessionEstablished",
    value() {
      let tmp = this.connectionState === GatewaySocket(closure_3[17]).SESSION_ESTABLISHED;
      if (!tmp) {
        tmp = this.connectionState === GatewaySocket(closure_3[17]).RESUMING;
      }
      return tmp;
    }
  };
  items[37] = {
    key: "isConnected",
    value() {
      const self = this;
      let tmp = this.connectionState === GatewaySocket(closure_3[17]).IDENTIFYING;
      if (!tmp) {
        tmp = self.connectionState === GatewaySocket(closure_3[17]).RESUMING;
      }
      if (!tmp) {
        tmp = self.connectionState === GatewaySocket(closure_3[17]).SESSION_ESTABLISHED;
      }
      return tmp;
    }
  };
  items[38] = {
    key: "connect",
    value() {
      const self = this;
      if (this.isClosed()) {
        const altGateway = self.altGateway;
        altGateway.reset();
        closure_14.verbose(".connect() called, new state is WILL_RECONNECT");
        self.connectionState = GatewaySocket(closure_3[17]).WILL_RECONNECT;
        self._connect();
        let flag = true;
      } else {
        closure_14.error("Cannot start a new connection, connection state is not closed");
        flag = false;
      }
      return flag;
    }
  };
  items[39] = {
    key: "resetSocketAndClearCacheOnError",
    value(sentry) {
      let action;
      let error;
      let metricAction;
      const self = this;
      const callback = this;
      ({ action, error, metricAction } = sentry);
      closure_14.error("resetSocketAndClearCacheOnError during " + action + ": " + error.message, error.stack);
      let obj = callback(closure_3[36]);
      const usesClientModsResult = obj.usesClientMods();
      let obj1 = GatewaySocket(closure_3[37]);
      obj = { name: callback(closure_3[38]).MetricEvents.SOCKET_CRASHED };
      let tmp3 = action;
      if (null != metricAction) {
        tmp3 = metricAction;
      }
      const items = ["action:" + tmp3, "modded_client:" + usesClientModsResult];
      obj.tags = items;
      obj1.increment(obj, true);
      if (false !== sentry.sentry) {
        let obj3 = GatewaySocket(closure_3[39]);
        obj = {};
        obj1 = { socketCrashedAction: action };
        obj.tags = obj1;
        obj3.captureException(error, obj);
      }
      GatewaySocket(closure_3[26]).track(constants.GATEWAY_SOCKET_RESET, { error_message: error.message, error_stack: error.stack, has_client_mods: usesClientModsResult, action });
      self._cleanup((close) => close.close());
      self._reset(true, 1000, "Resetting socket due to error.");
      const dispatcher = self.dispatcher;
      dispatcher.clear();
      self.connectionState = GatewaySocket(closure_3[17]).WILL_RECONNECT;
      const dispatchExceptionBackoff = self.dispatchExceptionBackoff;
      dispatchExceptionBackoff.cancel();
      if (0 === self.dispatchExceptionBackoff._fails) {
        closure_14.verbose("Triggering fast reconnect");
        const dispatchExceptionBackoff3 = self.dispatchExceptionBackoff;
        dispatchExceptionBackoff3.fail(() => {

        });
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => self._connect(), 0);
      } else {
        const dispatchExceptionBackoff2 = self.dispatchExceptionBackoff;
        dispatchExceptionBackoff2.fail(() => self._connect());
      }
      self.didForceClearGuildHashes = true;
      const obj2 = { error_message: error.message, error_stack: error.stack, has_client_mods: usesClientModsResult, action };
      const obj7 = GatewaySocket(closure_3[26]);
      obj3 = { type: "CLEAR_CACHES", reason: "Socket reset during " + action };
      GatewaySocket(closure_3[40]).dispatch(obj3);
      const obj9 = GatewaySocket(closure_3[40]);
      GatewaySocket(closure_3[40]).dispatch({ type: "LIBDISCORE_RESET" });
      clearTimeout(self.dispatchSuccessTimer);
      self.dispatchSuccessTimer = setTimeout(() => {
        const dispatchExceptionBackoff = self.dispatchExceptionBackoff;
        return dispatchExceptionBackoff.succeed();
      }, 2 * closure_19);
    }
  };
  items[40] = {
    key: "resetSocketOnDispatchError",
    value(error) {
      const self = this;
      let tmp = null != error.error.message;
      if (tmp) {
        const message = error.error.message;
        tmp = message.indexOf("Guild data was missing from store") >= 0;
      }
      const obj = {};
      const merged = Object.assign(error);
      obj["sentry"] = !tmp;
      const result = self.resetSocketAndClearCacheOnError(obj);
    }
  };
  items[41] = {
    key: "close",
    value() {
      let flag = arg0;
      const self = this;
      let closure_0 = this;
      if (arg0 === undefined) {
        flag = false;
      }
      let GatewaySocket;
      if (self.isClosed()) {
        obj.verbose("close() called, but socket is already closed.");
        if (!flag) {
          self.sessionId = null;
          self.token = null;
        }
      } else {
        const _HermesInternal = HermesInternal;
        obj.info("Closing connection, current state is " + self.connectionState);
        let num;
        if (flag) {
          num = 4000;
        }
        GatewaySocket = num;
        self._cleanup((close) => close.close(num));
        self.connectionState = GatewaySocket(closure_3[17]).CLOSED;
        if (!flag) {
          self.sessionId = null;
          self.token = null;
          const _setImmediate = setImmediate;
          setImmediate(() => {
            self._reset(true, 1000, "Disconnect requested by user");
          });
        }
      }
    }
  };
  items[42] = {
    key: "networkStateChange",
    value(arg0, arg1) {
      let flag = arg2;
      const self = this;
      if (arg2 === undefined) {
        flag = true;
      }
      self.expeditedHeartbeat(arg0, arg1, flag, false);
    }
  };
  items[43] = {
    key: "expeditedHeartbeat",
    value(arg0) {
      let str = arg1;
      let flag = arg2;
      let flag2 = arg3;
      const self = this;
      let closure_0 = this;
      if (arg1 === undefined) {
        str = "";
      }
      if (flag === undefined) {
        flag = true;
      }
      if (flag2 === undefined) {
        flag2 = true;
      }
      if (!self.isClosed()) {
        if (self.isConnected()) {
          let str8 = "";
          if (null != str) {
            str8 = "";
            if ("" !== str) {
              str8 = `reason: ${str}`;
            }
          }
          closure_14.verbose(`Performing an expedited heartbeat ${str8}`);
          self.heartbeatAck = false;
          self._sendHeartbeat();
          if (null !== self.expeditedHeartbeatTimeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(self.expeditedHeartbeatTimeout);
          }
          const _setTimeout = setTimeout;
          self.expeditedHeartbeatTimeout = setTimeout(() => {
            self.expeditedHeartbeatTimeout = null;
            if (false === self.heartbeatAck) {
              const result = self._handleHeartbeatTimeout();
            }
          }, arg0);
        } else if (flag) {
          self.resetBackoff(str, flag2);
        } else {
          let str3 = "";
          if (null != str) {
            str3 = "";
            if ("" !== str) {
              str3 = `reason: ${str}`;
            }
          }
          const _HermesInternal = HermesInternal;
          closure_14.verbose("Expedited heartbeat requested, but, connection state is " + self.connectionState + " and reconnectImmediately was not requested " + str3);
        }
        return tmp6;
      }
    }
  };
  items[44] = {
    key: "resetBackoff",
    value() {
      let str = arg0;
      let flag = arg1;
      const self = this;
      if (arg0 === undefined) {
        str = "";
      }
      if (flag === undefined) {
        flag = true;
      }
      let str2 = "";
      if (null != str) {
        str2 = "";
        if ("" !== str) {
          str2 = ` for reason: ${str}`;
        }
      }
      closure_14.verbose(`Connection has reset backoff${str2}`);
      const gatewayBackoff = self.gatewayBackoff;
      gatewayBackoff.succeed();
      self.iosGoingAwayEventCount = 0;
      self.nextReconnectIsImmediate = true;
      if (self.willReconnect()) {
        self._connect();
      } else {
        if (flag) {
          flag = self.connectionState !== GatewaySocket(closure_3[17]).SESSION_ESTABLISHED;
        }
        if (flag) {
          self._handleClose(true, 0, str);
        }
      }
    }
  };
  return callback2(GatewaySocket, items);
}(importDefault(dependencyMap[15]));
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/gateway/GatewaySocket.tsx");

export default tmp7;
export function setAccountSwitchUserId(targetUserId) {
  let closure_16 = targetUserId;
}
