// Module ID: 12609
// Function ID: 96949
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12609 (_isNativeReflectConstruct)
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
function convertCodecs(arr) {
  return arr.map((name) => ({ name: name.name, type: name.type, priority: 1000 * name.priority, payload_type: name.payloadType, rtx_payload_type: name.rtxPayloadType, encode: name.encode, decode: name.decode }));
}
function convertStreamParametersToWire(arr) {
  let mapped;
  if (null != arr) {
    mapped = arr.map((type) => {
      let obj = { type: type.type, rid: type.rid, ssrc: type.ssrc, active: type.active, quality: type.quality, rtx_ssrc: type.rtxSsrc, max_bitrate: type.maxBitrate, max_framerate: type.maxFrameRate };
      let tmp;
      if (null != type.maxResolution) {
        obj = { type: type.maxResolution.type, width: type.maxResolution.width, height: type.maxResolution.height };
        tmp = obj;
      }
      obj.max_resolution = tmp;
      return obj;
    });
  }
  return mapped;
}
function convertStreamParametersFromWire(arr) {
  let mapped;
  if (null != arr) {
    mapped = arr.map((type) => {
      let obj = {};
      type = type.type;
      if ("audio" === type) {
        let VIDEO = constants.AUDIO;
      } else if ("test" === type) {
        VIDEO = constants.TEST;
      } else if ("screen" === type) {
        VIDEO = constants.SCREEN;
      } else {
        VIDEO = constants.VIDEO;
      }
      obj.type = VIDEO;
      ({ rid: obj.rid, ssrc: obj.ssrc, rtx_ssrc: obj.rtxSsrc, active: obj.active, quality: obj.quality, max_bitrate: obj.maxBitrate, max_framerate: obj.maxFrameRate } = type);
      let tmp5;
      if (null != type.max_resolution) {
        obj = { type: type.max_resolution.type, width: type.max_resolution.width, height: type.max_resolution.height };
        tmp5 = obj;
      }
      obj.maxResolution = tmp5;
      return obj;
    });
  }
  if (null == mapped) {
    mapped = [];
  }
  return mapped;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ MediaEngineContextTypes: closure_9, MediaTypes: closure_10, SpeakingFlags: closure_11 } = arg1(dependencyMap[6]));
let obj = { IDENTIFY: 0, [0]: "IDENTIFY", SELECT_PROTOCOL: 1, [1]: "SELECT_PROTOCOL", READY: 2, [2]: "READY", HEARTBEAT: 3, [3]: "HEARTBEAT", SELECT_PROTOCOL_ACK: 4, [4]: "SELECT_PROTOCOL_ACK", SPEAKING: 5, [5]: "SPEAKING", HEARTBEAT_ACK: 6, [6]: "HEARTBEAT_ACK", RESUME: 7, [7]: "RESUME", HELLO: 8, [8]: "HELLO", RESUMED: 9, [9]: "RESUMED", CLIENT_CONNECT: 11, [11]: "CLIENT_CONNECT", VIDEO: 12, [12]: "VIDEO", CLIENT_DISCONNECT: 13, [13]: "CLIENT_DISCONNECT", SESSION_UPDATE: 14, [14]: "SESSION_UPDATE", MEDIA_SINK_WANTS: 15, [15]: "MEDIA_SINK_WANTS", VOICE_BACKEND_VERSION: 16, [16]: "VOICE_BACKEND_VERSION", CHANNEL_OPTIONS_UPDATE: 17, [17]: "CHANNEL_OPTIONS_UPDATE", FLAGS: 18, [18]: "FLAGS", PLATFORM: 20, [20]: "PLATFORM", DAVE_PROTOCOL_PREPARE_TRANSITION: 21, [21]: "DAVE_PROTOCOL_PREPARE_TRANSITION", DAVE_PROTOCOL_EXECUTE_TRANSITION: 22, [22]: "DAVE_PROTOCOL_EXECUTE_TRANSITION", DAVE_PROTOCOL_READY_FOR_TRANSITION: 23, [23]: "DAVE_PROTOCOL_READY_FOR_TRANSITION", DAVE_PROTOCOL_PREPARE_EPOCH: 24, [24]: "DAVE_PROTOCOL_PREPARE_EPOCH", MLS_EXTERNAL_SENDER_PACKAGE: 25, [25]: "MLS_EXTERNAL_SENDER_PACKAGE", MLS_KEY_PACKAGE: 26, [26]: "MLS_KEY_PACKAGE", MLS_PROPOSALS: 27, [27]: "MLS_PROPOSALS", MLS_COMMIT_WELCOME: 28, [28]: "MLS_COMMIT_WELCOME", MLS_PREPARE_COMMIT_TRANSITION: 29, [29]: "MLS_PREPARE_COMMIT_TRANSITION", MLS_WELCOME: 30, [30]: "MLS_WELCOME", MLS_INVALID_COMMIT_WELCOME: 31, [31]: "MLS_INVALID_COMMIT_WELCOME", CLIENT_CANNOT_REACH_RTC_SERVER: 32, [32]: "CLIENT_CANNOT_REACH_RTC_SERVER" };
let closure_13 = { AUTHENTICATION_FAILED: 4004, [4004]: "AUTHENTICATION_FAILED", INVALID_SESSION: 4006, [4006]: "INVALID_SESSION", SERVER_NOT_FOUND: 4011, [4011]: "SERVER_NOT_FOUND", SERVER_CRASH: 4015, [4015]: "SERVER_CRASH", CANCELED: 4016, [4016]: "CANCELED", HEARTBEAT_TIMEOUT: 4800, [4800]: "HEARTBEAT_TIMEOUT", UNRESUMABLE: 4801, [4801]: "UNRESUMABLE", RESET_BACKOFF: 4802, [4802]: "RESET_BACKOFF" };
let closure_14 = { DISCONNECTED: 0, [0]: "DISCONNECTED", CONNECTING: 1, [1]: "CONNECTING", IDENTIFYING: 2, [2]: "IDENTIFYING", RESUMING: 3, [3]: "RESUMING", CONNECTED: 4, [4]: "CONNECTED", RECONNECTING: 5, [5]: "RECONNECTING" };
let closure_15 = 20 * importDefault(dependencyMap[7]).Millis.SECOND;
const MINUTE = importDefault(dependencyMap[7]).Millis.MINUTE;
let closure_17 = 5 * importDefault(dependencyMap[7]).Millis.SECOND;
obj = { Connecting: "connecting", Connect: "connect", Disconnect: "disconnect", Resuming: "resuming", Ready: "ready", Speaking: "speaking", Video: "video", Ping: "ping", ClientConnect: "client-connect", ClientDisconnect: "client-disconnect", Codecs: "codecs", MediaSessionId: "media-session-id", MediaSinkWants: "media-sink-wants", VoiceBackendVersion: "voice-backend-version", KeyframeInterval: "keyframe-interval", ChannelOptionsUpdateSecureFramesProtocol: "update-secure-frames-protocol", Flags: "flags", Platform: "platform", SDP: "sdp", Encryption: "encryption", BandwidthEstimationExperiment: "bandwidth-estimation-experiment", SecureFramesInit: "secure-frames-init", SecureFramesPrepareTransition: "secure-frames-prepare-transition", SecureFramesExecuteTransition: "secure-frames-execute-transition", SecureFramesPrepareEpoch: "secure-frames-prepare-epoch", MLSExternalSenderPackage: "mls-external-sender-package", MLSProposals: "mls-proposals", MLSPrepareCommitTransition: "mls-prepare-commit-transition", MLSWelcome: "mls-welcome", ReceiveMessage: "receive-message", SendMessage: "send-message" };
const tmp2 = arg1(dependencyMap[6]);
const tmp3 = (arg0) => {
  class RTCControlSocket {
    constructor(arg0) {
      DEFAULT = arg1;
      self = this;
      if (arg1 === undefined) {
        tmp = closure_9;
        DEFAULT = closure_9.DEFAULT;
      }
      tmp2 = closure_3(self, RTCControlSocket);
      obj = closure_6(RTCControlSocket);
      tmp3 = closure_5;
      if (closure_19()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp8 = closure_1(closure_2[8]);
      tmp8 = new tmp8(1000, 5000);
      tmp3Result.backoff = tmp8;
      tmp3Result.serverVersion = 0;
      tmp3Result.url = arg0;
      tmp10 = closure_1(closure_2[9]);
      tmp10 = new tmp10("RTCControlSocket(" + DEFAULT + ")");
      tmp3Result.logger = tmp10;
      logger = tmp3Result.logger;
      enableNativeLoggerResult = logger.enableNativeLogger(true);
      tmp3Result.webSocket = null;
      tmp3Result.connectionState = closure_14.DISCONNECTED;
      tmp3Result.helloTimeout = null;
      tmp3Result.lastHeartbeatAckTime = null;
      tmp3Result.heartbeatInterval = null;
      tmp3Result.heartbeater = null;
      tmp3Result.heartbeatAck = true;
      tmp3Result.expeditedHeartbeatTimeout = null;
      tmp3Result.heartbeatIntervalModifier = 1;
      tmp3Result.connectionStartTime = 0;
      tmp3Result.lastRecvSeqNum = null;
      tmp3Result.sessionId = null;
      tmp3Result.serverId = null;
      tmp3Result.channelId = null;
      tmp3Result.token = null;
      tmp3Result.resumable = false;
      return tmp3Result;
    }
  }
  const arg1 = RTCControlSocket;
  callback2(RTCControlSocket, arg0);
  let obj = {
    key: "createWebSocket",
    value() {
      const self = this;
      const RTCControlSocket = this;
      const logger = this.logger;
      logger.info("[CONNECT] " + this.url);
      if (null !== this.webSocket) {
        const logger2 = self.logger;
        logger2.error("Connect called with already existing websocket");
        self.cleanupWebSocket((close) => close.close(4000));
      }
      self.connectionStartTime = RTCControlSocket(closure_2[10]).now();
      self.helloTimeout = setTimeout(() => {
        self.handleClose(false, 0, "The connection timed out after " + self(closure_2[10]).now() - self.connectionStartTime + " ms - did not receive OP_HELLO in time.");
      }, closure_15);
      const webSocket = new WebSocket("" + self.url + "?v=9");
      self.webSocket = webSocket;
      webSocket.binaryType = "arraybuffer";
      webSocket.onopen = () => {
        if (self.connectionState === constants2.CONNECTING) {
          self.emit(Platform.Connect);
        } else if (self.connectionState === constants2.RECONNECTING) {
          self.doResumeOrClose();
        }
        self.connectionState = constants2.CONNECTED;
        const diff = self(closure_2[10]).now() - self.connectionStartTime;
        const logger = self.logger;
        logger.info("[CONNECTED] " + self.url + " in " + diff + " ms");
        self.emit(Platform.Ping, Math.round(diff / 2));
      };
      webSocket.onmessage = (arg0) => {
        let audio_ssrc;
        let d;
        let op;
        let seq;
        let user_id;
        let video_ssrc;
        let result = self.parseWebSocketMessage(arg0);
        ({ op, seq, d } = result);
        self.emit(Platform.ReceiveMessage, op, d);
        if (seq) {
          self.lastRecvSeqNum = seq;
        }
        if (obj.isLoggingGatewayEvents) {
          const _Uint8Array = Uint8Array;
          if (d instanceof Uint8Array) {
            const items = [];
            HermesBuiltin.arraySpread(d, 0);
            const mapped = items.map((arg0) => arg0.toString(16).padStart(2, "0"));
            const logger2 = self.logger;
            const _HermesInternal2 = HermesInternal;
            logger2.info("~> " + op + ": 0x" + mapped.join(""));
          } else {
            const logger = self.logger;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            logger.info("~> " + op + ": " + JSON.stringify(d));
          }
        }
        if (constants.HELLO === op) {
          result = self;
          result = self.clearHelloTimeout();
          result = self.handleHello(d);
        } else {
          result = constants;
          if (constants.READY === op) {
            result = self;
            result = self.handleReady(d);
          } else {
            result = constants;
            if (constants.RESUMED === op) {
              result = self;
              result = self.handleResumed(d);
            } else {
              result = constants;
              if (constants.SELECT_PROTOCOL_ACK === op) {
                if (d.bandwidth_estimation_experiment) {
                  result = self;
                  result = Platform;
                  result = self.emit(Platform.BandwidthEstimationExperiment, d.bandwidth_estimation_experiment);
                }
                result = self;
                result = Platform;
                result = self.emit(Platform.Codecs, d.audio_codec, d.video_codec);
                if (d.media_session_id) {
                  result = self;
                  result = Platform;
                  result = self.emit(Platform.MediaSessionId, d.media_session_id);
                }
                if (d.sdp) {
                  result = self;
                  result = Platform;
                  result = self.emit(Platform.SDP, d.sdp);
                } else if (d.mode) {
                  result = self;
                  result = Platform;
                  result = self.emit(Platform.Encryption, d.mode, d.secret_key);
                }
                if (d.keyframe_interval) {
                  result = self;
                  result = Platform;
                  result = self.emit(Platform.KeyframeInterval, d.keyframe_interval);
                }
                result = Platform;
                let num8 = d.dave_protocol_version;
                result = self;
                if (!num8) {
                  num8 = 0;
                }
                result = self.emit(Platform.SecureFramesInit, num8);
                result = self;
                self.resumable = true;
              } else {
                result = constants;
                if (constants.SPEAKING === op) {
                  const speaking = d.speaking;
                  if ("boolean" !== typeof speaking) {
                    result = self.emit(Platform.Speaking, d.user_id, d.ssrc, tmp93);
                  }
                } else {
                  result = constants;
                  if (constants.HEARTBEAT === op) {
                    self.sendHeartbeat();
                  } else {
                    result = constants;
                    if (constants.HEARTBEAT_ACK === op) {
                      self.handleHeartbeatAck(d);
                    } else {
                      result = constants;
                      if (constants.VIDEO === op) {
                        const Video = Platform.Video;
                        ({ user_id, audio_ssrc, video_ssrc } = d);
                        self.emit(Video, user_id, audio_ssrc, video_ssrc, callback(d.streams));
                      } else {
                        result = constants;
                        if (constants.CLIENT_CONNECT === op) {
                          self.emit(Platform.ClientConnect, d.user_ids);
                        } else {
                          result = constants;
                          if (constants.CLIENT_DISCONNECT === op) {
                            self.emit(Platform.ClientDisconnect, d.user_id);
                          } else {
                            result = constants;
                            if (constants.SESSION_UPDATE === op) {
                              if (!tmp67) {
                                self.emit(Platform.Codecs, d.audio_codec, d.video_codec);
                              }
                              if (null != d.media_session_id) {
                                self.emit(Platform.MediaSessionId, d.media_session_id);
                              }
                              if (d.keyframe_interval) {
                                self.emit(Platform.KeyframeInterval, d.keyframe_interval);
                              }
                              const tmp67 = null == d.audio_codec && null == d.video_codec;
                            } else {
                              result = constants;
                              if (constants.MEDIA_SINK_WANTS === op) {
                                self.emit(Platform.MediaSinkWants, d);
                              } else {
                                result = constants;
                                if (constants.VOICE_BACKEND_VERSION === op) {
                                  if (tmp59) {
                                    self.emit(Platform.VoiceBackendVersion, d.voice, d.rtc_worker);
                                  }
                                  const tmp59 = null != d.voice && null != d.rtc_worker;
                                } else {
                                  result = constants;
                                  if (constants.FLAGS === op) {
                                    if (tmp54) {
                                      self.emit(Platform.Flags, d.user_id, d.flags);
                                    }
                                    const tmp54 = null != d.flags && null != d.user_id;
                                  } else {
                                    result = constants;
                                    if (constants.PLATFORM === op) {
                                      if (tmp49) {
                                        self.emit(Platform.Platform, d.user_id, d.platform);
                                      }
                                      const tmp49 = null != d.platform && null != d.user_id;
                                    } else {
                                      result = constants;
                                      if (constants.DAVE_PROTOCOL_PREPARE_TRANSITION === op) {
                                        if (tmp44) {
                                          self.emit(Platform.SecureFramesPrepareTransition, d.transition_id, d.protocol_version);
                                        }
                                        const tmp44 = null != d.transition_id && null != d.protocol_version;
                                      } else {
                                        result = constants;
                                        if (constants.DAVE_PROTOCOL_EXECUTE_TRANSITION === op) {
                                          if (null != d.transition_id) {
                                            result = self;
                                            result = Platform;
                                            result = self.emit(Platform.SecureFramesExecuteTransition, d.transition_id);
                                          }
                                        } else {
                                          result = constants;
                                          if (constants.DAVE_PROTOCOL_PREPARE_EPOCH === op) {
                                            if (tmp38) {
                                              self.emit(Platform.SecureFramesPrepareEpoch, d.epoch, d.protocol_version);
                                            }
                                            const tmp38 = null != d.epoch && null != d.protocol_version;
                                          } else {
                                            result = constants;
                                            if (constants.MLS_EXTERNAL_SENDER_PACKAGE === op) {
                                              self.emit(Platform.MLSExternalSenderPackage, d);
                                            } else {
                                              result = constants;
                                              if (constants.MLS_PROPOSALS === op) {
                                                self.emit(Platform.MLSProposals, d);
                                              } else {
                                                result = constants;
                                                if (constants.MLS_PREPARE_COMMIT_TRANSITION === op) {
                                                  const _DataView2 = DataView;
                                                  const dataView = new DataView(d.buffer, d.byteOffset, 2);
                                                  const uint16 = dataView.getUint16(0, false);
                                                  self.emit(Platform.MLSPrepareCommitTransition, uint16, d.slice(2));
                                                } else {
                                                  result = constants;
                                                  if (constants.MLS_WELCOME === op) {
                                                    const _DataView = DataView;
                                                    const dataView1 = new DataView(d.buffer, d.byteOffset, 2);
                                                    const uint161 = dataView1.getUint16(0, false);
                                                    self.emit(Platform.MLSWelcome, uint161, d.slice(2));
                                                  } else {
                                                    const logger3 = self.logger;
                                                    const _HermesInternal3 = HermesInternal;
                                                    logger3.info("Unhandled op " + op);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
      webSocket.onerror = () => self.handleClose(false, 0, "An error with the websocket occurred");
      webSocket.onclose = (wasClean) => self.handleClose(wasClean.wasClean, wasClean.code, wasClean.reason);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "send",
    value(op) {
      let tmp = arg1;
      const self = this;
      if (arg1 === undefined) {
        tmp = null;
      }
      const webSocket = self.webSocket;
      let obj = webSocket;
      if (null != webSocket) {
        const _WebSocket = WebSocket;
        if (obj.readyState === WebSocket.OPEN) {
          const _JSON = JSON;
          obj = { op, d: tmp2 };
          const json = JSON.stringify(obj);
          if (obj.isLoggingGatewayEvents) {
            const logger = self.logger;
            const _HermesInternal = HermesInternal;
            logger.info("<~ " + json);
          }
          self.emit(closure_18.SendMessage, op, tmp);
          obj.send(json);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "sendBinary",
    value(arg0, byteLength) {
      const webSocket = this.webSocket;
      if (null != webSocket) {
        const _WebSocket = WebSocket;
        if (obj.readyState === WebSocket.OPEN) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(byteLength.byteLength + 1);
          uint8Array[0] = arg0;
          const result = uint8Array.set(byteLength, 1);
          obj.send(uint8Array.buffer);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "doResumeOrClose",
    value() {
      const self = this;
      const nowResult = RTCControlSocket(closure_2[10]).now();
      if (null !== this.serverId) {
        if (null !== self.channelId) {
          if (null !== self.token) {
            if (null !== self.sessionId) {
              if (self.resumable) {
                self.doResume();
                self.lastHeartbeatAckTime = nowResult;
              }
            }
          }
        }
      }
      self.disconnect(false, constants3.UNRESUMABLE, "Cannot resume connection.");
    }
  };
  items[4] = {
    key: "doResume",
    value() {
      let logger;
      let serverId;
      const self = this;
      const lastRecvSeqNum = this.lastRecvSeqNum;
      let num = -1;
      if (null != lastRecvSeqNum) {
        num = lastRecvSeqNum;
      }
      ({ logger, serverId } = self);
      let str = "";
      let str2 = "";
      if (null != serverId) {
        str2 = serverId;
      }
      const channelId = self.channelId;
      let tmp = str;
      if (null != channelId) {
        tmp = channelId;
      }
      const sessionId = self.sessionId;
      if (null != sessionId) {
        str = sessionId;
      }
      logger.info("[RESUME] resuming session. serverId=" + str2 + " channelId=" + tmp + " sessionId=" + str + " seqAck=" + num);
      self.emit(closure_18.Resuming);
      self.connectionState = constants4.RESUMING;
      const obj = { token: self.token, session_id: self.sessionId, server_id: self.serverId, channel_id: self.channelId, seq_ack: num };
      self.send(constants2.RESUME, obj);
    }
  };
  items[5] = {
    key: "handleHello",
    value(v) {
      let heartbeatInterval;
      let logger;
      const self = this;
      v = v.v;
      let num = 3;
      if (null != v) {
        num = v;
      }
      self.serverVersion = num;
      if (self.serverVersion <= 3) {
        let num4 = 0.1;
        if (RTCControlSocket(closure_2[11]).isPlatformEmbedded) {
          num4 = 0.25;
        }
        self.heartbeatInterval = v.heartbeat_interval * num4;
      } else {
        self.heartbeatInterval = v.heartbeat_interval * self.heartbeatIntervalModifier;
        if (!RTCControlSocket(closure_2[11]).isPlatformEmbedded) {
          let _NaN = self.heartbeatInterval;
          if (null == _NaN) {
            _NaN = NaN;
          }
          self.heartbeatInterval = Math.min(closure_17, _NaN);
          const tmp4 = closure_17;
        }
      }
      const diff = RTCControlSocket(closure_2[10]).now() - self.connectionStartTime;
      ({ logger, heartbeatInterval } = self);
      let str = "??";
      if (null != heartbeatInterval) {
        str = heartbeatInterval;
      }
      logger.info("[HELLO] heartbeat interval: " + str + ", version: " + self.serverVersion + ", took " + diff + " ms");
      self.startHeartbeater();
    }
  };
  items[6] = {
    key: "handleReady",
    value(streams) {
      let ip;
      let modes;
      let port;
      let ssrc;
      const self = this;
      const backoff = this.backoff;
      backoff.succeed();
      const logger = this.logger;
      logger.info("[READY] took " + RTCControlSocket(closure_2[10]).now() - this.connectionStartTime + " ms");
      if (this.serverVersion >= 6) {
        self.send(constants2.VOICE_BACKEND_VERSION, {});
      }
      ({ ip, port, modes, ssrc } = streams);
      self.emit(closure_18.Ready, ip, port, modes, ssrc, callback7(streams.streams), streams.experiments);
    }
  };
  items[7] = {
    key: "handleResumed",
    value() {
      const backoff = this.backoff;
      backoff.succeed();
    }
  };
  items[8] = {
    key: "handleClose",
    value(arg0, arg1, arg2) {
      let backoff;
      let logger2;
      let flag = arg0;
      const self = this;
      const RTCControlSocket = this;
      flag = arg0;
      this.connectionState = constants4.DISCONNECTED;
      if (!arg0) {
        flag = false;
      }
      self.cleanupWebSocket();
      if (arg1 !== constants3.AUTHENTICATION_FAILED) {
        if (arg1 !== constants3.SERVER_CRASH) {
          if (arg1 !== constants3.SERVER_NOT_FOUND) {
            if (arg1 !== constants3.INVALID_SESSION) {
              if (self.backoff.fails > 3) {
                const logger = self.logger;
                let str = "[WS CLOSED] Backoff exceed. Resetting.";
                logger.warn("[WS CLOSED] Backoff exceed. Resetting.");
                self.disconnect(flag, arg1, arg2);
              } else {
                ({ backoff, logger: logger2 } = self);
                str = flag.toString();
                const result = backoff.fail(() => self.reconnect(flag, arg1, arg2)) / 1000;
                const _HermesInternal = HermesInternal;
                logger2.warn("[WS CLOSED] (clean: " + str + ", code: " + arg1 + ", reason: " + arg2 + ") retrying in " + result.toFixed(2) + " seconds.");
                const failResult = backoff.fail(() => self.reconnect(flag, arg1, arg2));
              }
            }
          }
        }
      }
      return self.disconnect(flag, arg1, arg2);
    }
  };
  items[9] = {
    key: "disconnect",
    value(arg0, arg1, arg2) {
      const logger = this.logger;
      logger.warn("[DISCONNECT] (" + arg0.toString() + ", " + arg1 + ", " + arg2 + ")");
      this.cleanupWebSocket();
      this.cleanupState();
      this.connectionState = constants4.DISCONNECTED;
      this.emit(closure_18.Disconnect, arg0, arg1, arg2);
    }
  };
  items[10] = {
    key: "reconnect",
    value(arg0, arg1, arg2) {
      const logger = this.logger;
      logger.info("[RECONNECT] wasClean=" + arg0.toString() + " code=" + arg1 + " reason=" + arg2);
      this.cleanupWebSocket((close) => close.close(4000));
      this.connectionState = constants4.RECONNECTING;
      const webSocket = this.createWebSocket();
    }
  };
  items[11] = {
    key: "cleanupWebSocket",
    value(arg0) {
      this.stopHeartbeater();
      this.clearHelloTimeout();
      const webSocket = this.webSocket;
      this.webSocket = null;
      if (null != webSocket) {
        webSocket.onopen = closure_20;
        webSocket.onmessage = closure_20;
        webSocket.onerror = closure_20;
        webSocket.onclose = closure_20;
        if (null != arg0) {
          arg0(webSocket);
        }
      }
      const backoff = this.backoff;
      backoff.cancel();
    }
  };
  items[12] = {
    key: "cleanupState",
    value() {
      this.serverId = null;
      this.channelId = null;
      this.sessionId = null;
      this.token = null;
      this.resumable = false;
      this.lastRecvSeqNum = null;
    }
  };
  items[13] = {
    key: "parseWebSocketMessage",
    value(data) {
      const self = this;
      if (data.data instanceof ArrayBuffer) {
        const _Uint8Array = Uint8Array;
        const uint8Array = new Uint8Array(data.data);
        let uint16 = null;
        if (self.serverVersion >= 8) {
          const _DataView = DataView;
          const dataView = new DataView(uint8Array.buffer);
          uint16 = dataView.getUint16(0, false);
        }
        let num3 = 0;
        if (self.serverVersion >= 8) {
          num3 = 2;
        }
        const obj = { op: uint8Array[num3], seq: uint16, d: uint8Array.subarray(num3 + 1) };
        return obj;
      } else {
        const _JSON = JSON;
        return JSON.parse(data.data);
      }
    }
  };
  items[14] = {
    key: "clearHelloTimeout",
    value() {
      const self = this;
      if (null != this.helloTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.helloTimeout);
        self.helloTimeout = null;
      }
    }
  };
  items[15] = {
    key: "handleHeartbeatAck",
    value(arg0) {
      const self = this;
      const logger = this.logger;
      logger.info("Heartbeat ACK received");
      let t = arg0;
      if (this.serverVersion >= 8) {
        t = arg0.t;
      }
      self.emit(closure_18.Ping, RTCControlSocket(closure_2[10]).now() - t);
      const obj = RTCControlSocket(closure_2[10]);
      self.lastHeartbeatAckTime = RTCControlSocket(closure_2[10]).now();
      self.heartbeatAck = true;
      if (null !== self.expeditedHeartbeatTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.expeditedHeartbeatTimeout);
        self.expeditedHeartbeatTimeout = null;
        const logger2 = self.logger;
        logger2.info("Expedited heartbeat succeeded");
      }
    }
  };
  items[16] = {
    key: "handleHeartbeatTimeout",
    value() {
      let backoff;
      let logger;
      const RTCControlSocket = this;
      this.cleanupWebSocket((close) => close.close(4000));
      ({ backoff, logger } = this);
      const result = backoff.fail(() => self.reconnect(false, constants.HEARTBEAT_TIMEOUT, "Heartbeat timeout.")) / 1000;
      logger.warn("[HEARTBEAT ACK TIMEOUT] reconnecting in " + result.toFixed(2) + " seconds.");
    }
  };
  items[17] = {
    key: "startHeartbeater",
    value() {
      const self = this;
      const RTCControlSocket = this;
      callback(closure_2[12])(null != this.heartbeatInterval, "RTCControlSocket: Heartbeat interval should never null here.");
      const logger = this.logger;
      logger.info("Starting heartbeat with interval: " + this.heartbeatInterval);
      if (null !== this.heartbeater) {
        const _clearInterval = clearInterval;
        clearInterval(self.heartbeater);
      }
      self.heartbeatAck = true;
      self.heartbeater = setInterval(() => {
        if (self.heartbeatAck) {
          obj.heartbeatAck = false;
          obj.sendHeartbeat();
        } else if (null === obj.expeditedHeartbeatTimeout) {
          const result = self.handleHeartbeatTimeout();
        }
      }, self.heartbeatInterval);
    }
  };
  items[18] = {
    key: "sendHeartbeat",
    value() {
      const self = this;
      if (this.serverVersion >= 8) {
        const lastRecvSeqNum = self.lastRecvSeqNum;
        let num2 = -1;
        if (null != lastRecvSeqNum) {
          num2 = lastRecvSeqNum;
        }
        const logger2 = self.logger;
        const _HermesInternal = HermesInternal;
        logger2.info("Sending heartbeat with last received sequence number: " + num2);
        let obj = { t: RTCControlSocket(closure_2[10]).now(), seq_ack: num2 };
        self.send(constants2.HEARTBEAT, obj);
        const obj3 = RTCControlSocket(closure_2[10]);
      } else {
        const logger = self.logger;
        logger.info("Sending heartbeat");
        obj = RTCControlSocket(closure_2[10]);
        self.send(constants2.HEARTBEAT, obj.now());
      }
    }
  };
  items[19] = {
    key: "stopHeartbeater",
    value() {
      const self = this;
      if (null !== this.heartbeater) {
        const _clearInterval = clearInterval;
        clearInterval(self.heartbeater);
        self.heartbeater = null;
      }
      if (null !== self.expeditedHeartbeatTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.expeditedHeartbeatTimeout);
        self.expeditedHeartbeatTimeout = null;
      }
    }
  };
  items[20] = {
    key: "connect",
    value() {
      const self = this;
      if (this.connectionState !== constants4.DISCONNECTED) {
        const logger = self.logger;
        logger.error("Cannot start a new connection, connection state is not disconnected");
        let flag = false;
      } else {
        self.connectionState = constants4.CONNECTING;
        const webSocket = self.createWebSocket();
        self.emit(closure_18.Connecting);
        flag = true;
      }
      return flag;
    }
  };
  items[21] = {
    key: "identify",
    value(streamParameters) {
      let channelId;
      let maxDaveProtocolVersion;
      let serverId;
      let sessionId;
      let token;
      let userId;
      let video;
      const self = this;
      ({ serverId, channelId, sessionId, token, video } = streamParameters);
      ({ userId, maxDaveProtocolVersion } = streamParameters);
      if (video === undefined) {
        video = false;
      }
      self.serverId = serverId;
      self.channelId = channelId;
      self.sessionId = sessionId;
      self.token = token;
      self.connectionState = constants4.IDENTIFYING;
      const obj = { server_id: serverId, channel_id: channelId, user_id: userId, session_id: sessionId, token, max_dave_protocol_version: maxDaveProtocolVersion, video, streams: callback6(streamParameters.streamParameters) };
      self.send(constants2.IDENTIFY, obj);
    }
  };
  items[22] = {
    key: "expeditedHeartbeat",
    value(arg0) {
      let str = arg1;
      let flag = arg2;
      const self = this;
      const RTCControlSocket = this;
      if (arg1 === undefined) {
        str = "";
      }
      if (flag === undefined) {
        flag = true;
      }
      if (null != self.webSocket) {
        const logger2 = self.logger;
        let str5 = "";
        if ("" !== str) {
          str5 = `reason: ${str}`;
        }
        logger2.info(`Performing an expedited heartbeat ${str5}`);
        self.heartbeatAck = false;
        self.sendHeartbeat();
        if (null !== self.expeditedHeartbeatTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self.expeditedHeartbeatTimeout);
        }
        const _setTimeout = setTimeout;
        self.expeditedHeartbeatTimeout = setTimeout(() => {
          self.expeditedHeartbeatTimeout = null;
          if (false === self.heartbeatAck) {
            const result = self.handleHeartbeatTimeout();
          }
        }, arg0);
      } else if (flag) {
        return self.resetBackoff(str);
      } else {
        const logger = self.logger;
        let str2 = "";
        if ("" !== str) {
          str2 = `reason: ${str}`;
        }
        logger.info(`Expedited heartbeat requested, but is disconnected and a reset was not requested ${str2}`);
      }
      return false;
    }
  };
  items[23] = {
    key: "resetBackoff",
    value() {
      let str = arg0;
      const self = this;
      if (arg0 === undefined) {
        str = "";
      }
      let flag = self.backoff.fails > 0;
      if (flag) {
        flag = null == self.webSocket;
      }
      if (flag) {
        const logger = self.logger;
        let str2 = "";
        if ("" !== str) {
          str2 = `for reason: ${str}`;
        }
        logger.info(`Connection backoff reset ${str2}`);
        const backoff = self.backoff;
        backoff.succeed();
        self.reconnect(false, constants3.RESET_BACKOFF, "Reset backoff.");
        flag = true;
      }
      return flag;
    }
  };
  items[24] = {
    key: "close",
    value() {
      const logger = this.logger;
      logger.info("CLOSE");
      this.cleanupWebSocket((close) => close.close(4000));
      this.cleanupState();
      this.connectionState = constants4.DISCONNECTED;
      this.emit(closure_18.Disconnect, true, 1000, "Force Close");
    }
  };
  items[25] = {
    key: "destroy",
    value() {
      this.close();
    }
  };
  items[26] = {
    key: "selectProtocol",
    value(protocol, arg1, sdp) {
      const self = this;
      let obj = {};
      sdp = null;
      let tmp2 = obj;
      if (null != sdp) {
        if ("sdp" in sdp) {
          if (null != sdp.sdp) {
            if ("" !== sdp.sdp) {
              sdp = sdp.sdp;
              obj = {};
              const merged = Object.assign(sdp);
              obj["codecs"] = callback5(sdp.codecs);
              obj["rtc_connection_id"] = arg1;
              tmp2 = obj;
            }
          }
        }
        let BooleanResult = "address" in sdp && null != sdp.address;
        if (BooleanResult) {
          BooleanResult = "" !== sdp.address;
        }
        if (BooleanResult) {
          const _Boolean = Boolean;
          BooleanResult = Boolean(sdp.port);
        }
        if (BooleanResult) {
          BooleanResult = null != sdp.mode;
        }
        if (BooleanResult) {
          BooleanResult = "" !== sdp.mode;
        }
        tmp2 = obj;
        if (BooleanResult) {
          obj = {};
          ({ address: obj2.address, port: obj2.port, mode: obj2.mode } = sdp);
          const obj1 = {};
          const merged1 = Object.assign(sdp);
          obj1["codecs"] = callback5(sdp.codecs);
          obj1["rtc_connection_id"] = arg1;
          obj1["experiments"] = arg3;
          sdp = obj;
          tmp2 = obj1;
        }
      }
      const obj2 = { protocol, data: sdp };
      const merged2 = Object.assign(tmp2);
      self.send(constants2.SELECT_PROTOCOL, obj2);
    }
  };
  items[27] = {
    key: "updateSession",
    value(codecs) {
      this.send(constants2.SESSION_UPDATE, { codecs: callback5(codecs.codecs) });
    }
  };
  items[28] = {
    key: "speaking",
    value(arg0) {
      let num = arg1;
      let num2 = arg2;
      const self = this;
      if (arg1 === undefined) {
        num = 0;
      }
      if (num2 === undefined) {
        num2 = 0;
      }
      const obj = {};
      let BooleanResult = arg0;
      if (self.serverVersion <= 3) {
        const _Boolean = Boolean;
        BooleanResult = Boolean(arg0);
      }
      obj.speaking = BooleanResult;
      obj.delay = num;
      obj.ssrc = num2;
      self.send(constants2.SPEAKING, obj);
    }
  };
  items[29] = {
    key: "video",
    value(audio_ssrc, video_ssrc, rtx_ssrc) {
      this.send(constants2.VIDEO, { audio_ssrc, video_ssrc, rtx_ssrc, streams: callback6(arg3) });
    }
  };
  items[30] = {
    key: "mediaSinkWants",
    value(arg0) {
      const self = this;
      if (this.serverVersion >= 5) {
        self.send(constants2.MEDIA_SINK_WANTS, arg0);
      }
    }
  };
  items[31] = {
    key: "secureFramesReadyForTransition",
    value(transition_id) {
      this.send(constants2.DAVE_PROTOCOL_READY_FOR_TRANSITION, { transition_id });
    }
  };
  items[32] = {
    key: "sendMLSKeyPackage",
    value(arg0) {
      const logger = this.logger;
      logger.info("Sending MLS key package");
      const uint8Array = new Uint8Array(arg0);
      this.sendBinary(constants2.MLS_KEY_PACKAGE, uint8Array);
    }
  };
  items[33] = {
    key: "sendMLSCommitWelcome",
    value(arg0) {
      const logger = this.logger;
      logger.info("Sending MLS commit + welcome message");
      const uint8Array = new Uint8Array(arg0);
      this.sendBinary(constants2.MLS_COMMIT_WELCOME, uint8Array);
    }
  };
  items[34] = {
    key: "flagMLSInvalidCommitWelcome",
    value(transition_id) {
      this.send(constants2.MLS_INVALID_COMMIT_WELCOME, { transition_id });
    }
  };
  items[35] = {
    key: "noRoute",
    value() {
      this.send(constants2.CLIENT_CANNOT_REACH_RTC_SERVER, {});
    }
  };
  items[36] = {
    key: "setHeartbeatIntervalModifier",
    value(heartbeatIntervalModifier) {
      this.heartbeatIntervalModifier = heartbeatIntervalModifier;
    }
  };
  return callback(RTCControlSocket, items);
}(importDefault(dependencyMap[13]));
const result = arg1(dependencyMap[14]).fileFinishedImporting("lib/RTCControlSocket.tsx");

export default tmp3;
export const RTCSocketOpcode = obj;
export const SocketEvent = obj;
