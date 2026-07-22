// Module ID: 4233
// Function ID: 37108
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4243, 772, 4243, 601, 4253, 4254, 4255, 4256, 4257, 765, 4253, 608, 609, 4259]

// Module 4233 (_createForOfIteratorHelperLoose)
import copyObject from "copyObject";
import getOwnPropertySymbols from "getOwnPropertySymbols";
import closure_5 from "copyObject";
import keys from "keys";
import cloneArrayBuffer from "cloneArrayBuffer";
import cloneDataView from "cloneDataView";
import cloneTypedArray from "cloneTypedArray";
import cloneRegExp from "cloneRegExp";
import valueOf from "valueOf";

function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeRTXSSRC(arg0) {
  let num = 0;
  if (null != arg0) {
    num = 0;
    if (0 !== arg0) {
      num = arg0 + 1;
    }
  }
  return num;
}
({ StatsFilter: closure_10, ExperimentFlags: closure_11, DESKTOP_BITRATE_ENHANCED: closure_12, DESKTOP_BITRATE: closure_13, MEDIA_SINK_WANTS_PROPERTIES: closure_14, MediaTypes: closure_15, SIMULCAST_HQ_QUALITY: closure_16 } = cloneRegExp);
({ NATIVE_MODE_VALUES: closure_17, InputModes: closure_18, ConnectionStates: closure_19, Codecs: closure_20, MediaEngineContextTypes: closure_21, SpeakingFlags: closure_22, ResolutionTypes: closure_23, NativeFeatures: closure_24, NoiseCancellerError: closure_25, DEFAULT_VOLUME: closure_26, DEFAULT_STREAM_VOLUME: closure_27, DEFAULT_SOUNDSHARE_VOICE_BITRATE: closure_28, DEFAULT_CALL_BITRATE: closure_29, DEFAULT_CALL_MIN_BITRATE: closure_30, DEFAULT_CALL_MAX_BITRATE: closure_31, DEFAULT_PRIORITY_SPEAKER_DUCKING: closure_32, PING_INTERVAL: closure_33 } = valueOf);
let closure_34 = 0;
const tmp4 = (arg0) => {
  class Connection {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = getOwnPropertySymbols(this, Connection);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = cloneArrayBuffer(Connection);
      tmp2 = keys;
      if (closure_37()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = cloneArrayBuffer;
        constructResult = Reflect.construct(obj, items, cloneArrayBuffer(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      Connection = tmp2Result;
      tmp7 = +closure_34;
      closure_34 = tmp7 + 1;
      tmp2Result.mediaEngineConnectionId = `Native-${tmp7}`;
      tmp2Result.selfVideo = false;
      tmp2Result.codecs = [];
      tmp2Result.initialCodecs = [];
      tmp2Result.videoEncoderFallbackPending = false;
      set = new Set();
      tmp2Result.videoDecoderFallbackSent = set;
      tmp2Result.lastOverrideCodecDenylist = "";
      tmp2Result.lastOverrideEncoderDenylist = "";
      tmp2Result.lastCaptureOverrides = "";
      tmp2Result.overrideCodecResetAt = 0;
      obj2 = Connection(closure_2[9]);
      tmp2Result.desktopDegradationPreference = obj2.getVoiceEngine().DegradationPreference.MAINTAIN_FRAMERATE;
      obj3 = Connection(closure_2[9]);
      tmp2Result.sourceDesktopDegradationPreference = obj3.getVoiceEngine().DegradationPreference.DISABLED;
      obj4 = Connection(closure_2[9]);
      tmp2Result.videoDegradationPreference = obj4.getVoiceEngine().DegradationPreference.BALANCED;
      tmp2Result.localPans = {};
      tmp2Result.remoteAudioSSRCs = {};
      tmp2Result.remoteVideoSSRCs = {};
      tmp2Result.inputMode = closure_18.VOICE_ACTIVITY;
      tmp2Result.vadThreshold = -40;
      tmp2Result.vadAutoThreshold = true;
      tmp2Result.vadKrispActivationThreshold = 0.5;
      tmp2Result.vadUseKrisp = true;
      tmp2Result.vadLeading = 5;
      tmp2Result.vadTrailing = 25;
      tmp2Result.vadDuringPreProcess = false;
      tmp2Result.pttReleaseDelay = 20;
      tmp2Result.soundshareActive = false;
      tmp2Result.soundshareId = null;
      tmp2Result.soundshareSentSpeakingEvent = false;
      tmp2Result.echoCancellation = true;
      tmp2Result.noiseSuppression = true;
      tmp2Result.automaticGainControl = { enabled: true };
      tmp2Result.noiseCancellation = false;
      tmp2Result.noiseCancellationDuringProcessing = false;
      tmp2Result.echoReferenceMode = "mix";
      tmp2Result.attenuationFactor = 0.5;
      tmp2Result.attenuateWhileSpeakingSelf = false;
      tmp2Result.attenuateWhileSpeakingOthers = true;
      tmp2Result.qos = true;
      tmp2Result.minimumJitterBufferLevel = 0;
      tmp2Result.postponeDecodeLevel = 100;
      tmp2Result.reconnectInterval = 60000;
      tmp2Result.keyframeInterval = 0;
      tmp2Result.clipsKeyFrameInterval = 0;
      tmp2Result.videoQualityMeasurement = "";
      tmp2Result.videoEncoderExperiments = "";
      tmp2Result.numFastUdpReconnects = 0;
      tmp2Result.lastPreparedTransitionId = -1;
      tmp2Result.lastExecutedTransitionId = -1;
      tmp2Result.currentVideoCodec = null;
      tmp2Result.lastDesktopEncodingOptions = null;
      tmp2Result.handleSpeakingNative = (arg0, arg1, arg2) => {
        if ("boolean" !== typeof arg1) {
          tmp2Result.handleSpeakingFlags(arg0, arg1, arg2);
        }
      };
      tmp2Result.handleNativeMuteChanged = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.NativeMuteChanged, arg0);
      };
      tmp2Result.handleSpeakingFlags = (arg0, arg1, arg2) => {
        let NONE = tmp2Result.localSpeakingFlags[arg0];
        if (null == NONE) {
          NONE = constants4.NONE;
        }
        const experimentFlags = tmp2Result.experimentFlags;
        if (!experimentFlags.has(constants.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS)) {
          tmp2Result.localSpeakingFlags[arg0] = arg1;
          if (arg0 === tmp2Result.userId) {
            let audioSSRC = tmp2Result.audioSSRC;
          } else {
            audioSSRC = tmp2Result.remoteAudioSSRCs[arg0];
          }
          tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.Speaking, arg0, arg1, audioSSRC, arg2);
          let tmp15 = arg1 & constants4.SOUNDSHARE;
          if (tmp15) {
            tmp15 = false === tmp2Result.soundshareSentSpeakingEvent;
          }
          if (tmp15) {
            tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.SoundshareSpeaking);
            tmp2Result.soundshareSentSpeakingEvent = true;
          }
        }
      };
      tmp2Result.handleSpeakingWhileMuted = () => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.SpeakingWhileMuted);
      };
      tmp2Result.handlePing = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.Ping, arg0);
      };
      tmp2Result.handlePingTimeout = (arg0, arg1, arg2, arg3) => {
        let num = 4000;
        if (arg3 > 0) {
          num = arg3;
        }
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.PingTimeout, arg2, num);
      };
      tmp2Result.handleVideoEncoderFallback = (arg0) => {
        if (!arg0.videoEncoderFallbackPending) {
          if (tmp2Result.overrideCodecResetAt > 0) {
            const _performance = performance;
            if (performance.now() - tmp2Result.overrideCodecResetAt < 1000) {
              const logger2 = tmp2Result.logger;
              const _HermesInternal2 = HermesInternal;
              logger2.info("Suppressing encoder fallback for " + arg0 + " (override codec reset in progress)");
            }
          }
          const logger = tmp2Result.logger;
          const _HermesInternal = HermesInternal;
          logger.info("Falling back from current video encoder: " + arg0);
          const codecs = tmp2Result.codecs;
          const mapped = codecs.map((name) => {
            let tmp = name === name.name;
            if (!tmp) {
              let tmp2 = "AV1" === name.name;
              if (tmp2) {
                tmp2 = "AV1X" === name;
              }
              tmp = tmp2;
            }
            if (tmp) {
              name.encode = false;
            }
            return name;
          });
          tmp2Result.codecs = mapped.filter((type) => {
            let tmp = "video" === type.type;
            if (tmp) {
              tmp = false === type.encode;
            }
            if (tmp) {
              tmp = false === type.decode;
            }
            return !tmp;
          });
          tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.VideoEncoderFallback, tmp2Result.codecs);
          tmp2Result.videoEncoderFallbackPending = true;
        }
      };
      tmp2Result.handleVideoDecoderFallback = (arg0) => {
        const videoDecoderFallbackSent = tmp2Result.videoDecoderFallbackSent;
        if (!videoDecoderFallbackSent.has(arg0)) {
          const videoDecoderFallbackSent2 = tmp2Result.videoDecoderFallbackSent;
          videoDecoderFallbackSent2.add(arg0);
          const logger = tmp2Result.logger;
          const _HermesInternal = HermesInternal;
          logger.info("Falling back from current video decoder: " + arg0);
          const codecs = tmp2Result.codecs;
          const mapped = codecs.map((name) => {
            let tmp = name === name.name;
            if (!tmp) {
              let tmp2 = "AV1" === name.name;
              if (tmp2) {
                tmp2 = "AV1X" === name;
              }
              tmp = tmp2;
            }
            if (tmp) {
              name.decode = false;
            }
            return name;
          });
          tmp2Result.codecs = mapped.filter((type) => {
            let tmp = "video" === type.type;
            if (tmp) {
              tmp = false === type.encode;
            }
            if (tmp) {
              tmp = false === type.decode;
            }
            return !tmp;
          });
          tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.VideoDecoderFallback, tmp2Result.codecs);
        }
      };
      tmp2Result.handleVideoCodecError = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.VideoCodecError, arg0);
      };
      tmp2Result.handleVideo = (arg0, ssrc, arg2, arr) => {
        const tmp = callback(closure_2[11])(tmp2Result.videoStreamParameters);
        if (arg0 === tmp.userId) {
          if (null != arr) {
            const _Array = Array;
            if (Array.isArray(arr)) {
              if (arr.length > 0) {
                const item = arr.forEach((arg0) => {
                  const item = arg0.forEach((rid) => {
                    if (rid.rid === rid.rid) {
                      const obj = {};
                      const merged = Object.assign(rid);
                      obj["ssrc"] = rid.ssrc;
                      obj["rtxSsrc"] = rid.rtxSsrc;
                      obj["active"] = rid.active;
                      rid[arg1] = obj;
                    }
                  });
                });
              }
            }
          }
          if (ssrc > 0) {
            tmp[0].active = true;
            tmp[0].ssrc = ssrc;
            tmp[0].rtxSsrc = callback2(ssrc);
          } else {
            tmp[0].active = false;
          }
        } else if (ssrc > 0) {
          if (undefined !== tmp2Result.remoteVideoSSRCs[arg0]) {
            if (!obj.includes(ssrc)) {
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(tmp2Result.remoteVideoSSRCs[arg0], 0);
              items[arraySpreadResult] = ssrc;
              const sum = arraySpreadResult + 1;
              tmp2Result.remoteVideoSSRCs[arg0] = items;
            }
            const obj = tmp2Result.remoteVideoSSRCs[arg0];
          } else {
            const items1 = [ssrc];
            tmp2Result.remoteVideoSSRCs[arg0] = items1;
          }
        }
        tmp.videoStreamParameters = tmp;
        let tmp13 = null;
        if (null != arg2) {
          tmp13 = null;
          if ("" !== arg2) {
            tmp13 = arg2;
          }
        }
        if (arg0 === tmp.userId) {
          let audioSSRC = tmp2Result.audioSSRC;
        } else {
          audioSSRC = tmp2Result.remoteAudioSSRCs[arg0];
        }
        tmp.emit(tmp(closure_2[10]).BaseConnectionEvent.Video, arg0, tmp13, audioSSRC, ssrc, callback2(ssrc), tmp.videoStreamParameters);
      };
      tmp2Result.handleFirstFrame = (arg0, arg1, arg2) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.FirstFrame, arg0, arg1, arg2);
      };
      tmp2Result.handleFirstFrameStats = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.FirstFrameStats, arg0);
      };
      tmp2Result.handleFirstFrameEncryptedStats = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.FirstFrameEncryptedStats, arg0);
      };
      tmp2Result.handleNoInput = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.Silence, !arg0);
      };
      tmp2Result.handleDesktopSourceEnded = (arg0, arg1) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.DesktopSourceEnd, arg0, arg1);
      };
      tmp2Result.handleSoundshare = (arg0) => {
        if (arg0) {
          tmp2Result.soundshareActive = true;
          const conn = tmp2Result.conn;
          const obj = {};
          const _Math = Math;
          obj.encodingVoiceBitRate = Math.max(closure_28, tmp2Result.voiceBitrate);
          conn.setTransportOptions(obj);
          tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.SoundshareAttached);
        }
      };
      tmp2Result.handleSoundshareFailed = (failureCode, failureReason, willRetry) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.SoundshareFailed, { failureCode, failureReason, willRetry });
      };
      tmp2Result.handleSoundshareEnded = () => {
        tmp2Result.soundshareActive = false;
        if (!tmp2Result.destroyed) {
          const conn = tmp2Result.conn;
          const obj = { encodingVoiceBitRate: tmp2Result.voiceBitrate };
          conn.setTransportOptions(obj);
        }
      };
      tmp2Result.handleNewListenerNative = (arg0) => {
        if (arg0 === tmp2Result(closure_2[10]).BaseConnectionEvent.ConnectionStateChange) {
          tmp2Result.emit(arg0, tmp2Result.connectionState);
        }
      };
      tmp2Result.handleStats = (rtp) => {
        if (tmp2Result.connectionState !== constants3.DISCONNECTED) {
          if (null != rtp) {
            if (null != tmp2Result.stats) {
              const tmp40 = callback(closure_2[12])(rtp.rtp.outbound, (lost, packetsLost) => {
                packetsLost = packetsLost.packetsLost;
                let num = 0;
                if (null != packetsLost) {
                  num = packetsLost;
                }
                lost.lost = lost.lost + num;
                const packetsSent = packetsLost.packetsSent;
                let num2 = 0;
                if (null != packetsSent) {
                  num2 = packetsSent;
                }
                lost.sent = lost.sent + num2;
                return lost;
              }, { copy: "%FunctionPrototype%", captcha_session_id: "paddingStart" });
              const tmp42 = callback(closure_2[12])(tmp2Result.stats.rtp.outbound, (lost, packetsLost) => {
                packetsLost = packetsLost.packetsLost;
                let num = 0;
                if (null != packetsLost) {
                  num = packetsLost;
                }
                lost.lost = lost.lost + num;
                const packetsSent = packetsLost.packetsSent;
                let num2 = 0;
                if (null != packetsSent) {
                  num2 = packetsSent;
                }
                lost.sent = lost.sent + num2;
                return lost;
              }, { copy: "%FunctionPrototype%", captcha_session_id: "paddingStart" });
              const diff = tmp40.sent - tmp42.sent;
              const diff1 = tmp40.lost - tmp42.lost;
              if (0 === diff) {
                tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.OutboundLossRate, 0);
              } else if (diff > 0) {
                if (diff1 >= 0) {
                  tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.OutboundLossRate, 100 * callback(closure_2[13])(diff1 / (diff + diff1), 0, 1));
                  const tmp47 = callback(closure_2[13])(diff1 / (diff + diff1), 0, 1);
                }
              }
              const outbound = rtp.rtp.outbound;
              const first = outbound.filter((type) => "audio" === type.type)[0];
              const outbound1 = tmp2Result.stats.rtp.outbound;
              const first1 = outbound1.filter((type) => "audio" === type.type)[0];
              if (null != first) {
                if (null != first1) {
                  if (null != first.framesCaptured) {
                    if (null != first1.framesCaptured) {
                      const diff2 = first.framesCaptured - first1.framesCaptured;
                      let tmp13 = diff2;
                      if (null != first.noiseCancellerFrames) {
                        let num3 = 0;
                        if (null != first1.noiseCancellerFrames) {
                          num3 = first.noiseCancellerFrames - first1.noiseCancellerFrames;
                        }
                        tmp13 = num3;
                      }
                      if (!obj.supportsFeature(constants5.KRISP_NATIVE_ERROR)) {
                        if (tmp2Result.noiseCancellation) {
                          if (tmp13 > 50) {
                            if (null != first.noiseCancellerProcessTime) {
                              if (null != first1.noiseCancellerProcessTime) {
                                const diff3 = first.noiseCancellerProcessTime - first1.noiseCancellerProcessTime;
                                if (diff3 / tmp13 > 8) {
                                  tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.NoiseCancellationError, constants6.KRISP_CPU_OVERUSE);
                                } else if (0 === diff3) {
                                  tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.NoiseCancellationError, constants6.KRISP_FAILED);
                                }
                              }
                            }
                          }
                        }
                        if (tmp2Result.inputMode === constants2.VOICE_ACTIVITY) {
                          if (tmp2Result.vadAutoThreshold) {
                            if (tmp2Result.vadUseKrisp) {
                              if (diff2 > 50) {
                                if (null != first.voiceActivityDetectorProcessTime) {
                                  if (null != first1.voiceActivityDetectorProcessTime) {
                                    if ((first.voiceActivityDetectorProcessTime - first1.voiceActivityDetectorProcessTime) / diff2 > 4) {
                                      tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.VoiceActivityDetectorError, constants6.KRISP_VAD_CPU_OVERUSE);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj = tmp2Result(closure_2[9]);
                    }
                  }
                }
              }
            }
            tmp2Result.stats = rtp;
          }
        } else {
          tmp2Result.off(tmp2Result(closure_2[10]).BaseConnectionEvent.Stats, tmp2Result.handleStats);
        }
      };
      tmp2Result.handleMLSFailure = (arg0, arg1) => {
        tmp2Result.emit(tmp2Result(closure_2[10]).BaseConnectionEvent.MLSFailure, arg0, arg1);
      };
      tmp2Result.videoSupported = arg2;
      logger = new Connection(closure_2[14]).Logger("Connection(" + arg0 + ")");
      tmp2Result.logger = logger;
      logger = tmp2Result.logger;
      enableNativeLoggerResult = logger.enableNativeLogger(true);
      return tmp2Result;
    }
  }
  const arg1 = Connection;
  callback2(Connection, arg0);
  let obj = {
    key: "initialize",
    value(address) {
      const self = this;
      const Connection = this;
      const logger = this.logger;
      logger.info("Creating connection to " + address.address + ":" + address.port + " with audio ssrc: " + address.ssrc);
      this.beginInitializeAt = performance.now();
      ({ ssrc: this.audioSSRC, streamUserId: this.streamUserId } = address);
      const result = this.initializeStreamParameters(address.streamParameters);
      const items = [{ type: constants.AUDIO, ssrc: this.audioSSRC, rid: "", maxBitrate: 64000, soundshare: this.context === constants4.STREAM }, ...this.videoStreamParameters];
      address.streamParameters = items;
      address.context = this.context;
      const voiceEngine = Connection(fnResult[9]).getVoiceEngine();
      if (null != voiceEngine.createOwnStreamConnectionWithOptions) {
        if (self.context !== constants4.STREAM) {
          const createVoiceConnectionWithOptions = voiceEngine.createVoiceConnectionWithOptions;
        }
        const createOwnStreamConnectionWithOptions = voiceEngine.createOwnStreamConnectionWithOptions;
      } else {
        if (null != voiceEngine.createOwnStreamConnection) {
          if (self.context === constants4.STREAM) {
            if (self.streamUserId === self.userId) {
              let createVoiceConnection = voiceEngine.createOwnStreamConnection;
            }
            let fn = function n(arg0, ssrc) {
              return createVoiceConnection(ssrc.ssrc, self.userId, ssrc.address, ssrc.port, arg2, ssrc.experiments, ssrc.streamParameters);
            };
          }
          createVoiceConnection = voiceEngine.createVoiceConnection;
        } else {
          fn = function n(userId, ssrc, arg2) {
            const voiceConnection = new voiceEngine.VoiceConnection(ssrc.ssrc, userId, ssrc.address, ssrc.port, arg2, ssrc.experiments, ssrc.streamParameters);
            return voiceConnection;
          };
        }
        const fnResult = fn(self.userId, address, (arg0, transportInfo) => {
          if (!self.destroyed) {
            if (null != arg0) {
              if ("" !== arg0) {
                self.setConnectionState(constants.NO_ROUTE);
                self.emit(self(fnResult[10]).BaseConnectionEvent.Error, arg0);
              }
            }
            if (null == transportInfo) {
              const _Error = Error;
              const error = new Error("Invalid transport info");
              throw error;
            } else {
              self.transportInfo = transportInfo;
              const protocol = transportInfo.protocol;
              const self = protocol;
              const address = transportInfo.address;
              arg0 = address;
              const port = transportInfo.port;
              const logger = self.logger;
              const _HermesInternal = HermesInternal;
              logger.info("Connected with local address " + address + ":" + port + " and protocol: " + protocol);
              const _performance = performance;
              self.onConnectCallbackAt = performance.now();
              const codecCapabilities = voiceEngine.getCodecCapabilities((arg0) => {
                let codecs;
                let codecs2;
                let logger3;
                let logger4;
                protocol.onVideoCodecsCallbackAt = performance.now();
                const logger = protocol.logger;
                logger.info("Available engine codecs: " + JSON.stringify(arg0));
                let obj = protocol(port[15]);
                const experimentCodecs = obj.getExperimentCodecs(protocol.experimentFlags);
                const logger2 = protocol.logger;
                logger2.info("Experimental codecs: " + JSON.stringify(experimentCodecs));
                const parseNativeCodecsResult = protocol(port[15]).parseNativeCodecs(arg0);
                obj = { name: constants.OPUS, url: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001629692767967816, accessibilityRole: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000335974904401433, source: -1637694678900018700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
                const items = [obj];
                const obj2 = protocol(port[15]);
                const tmp4 = protocol.lastOverrideCodecDenylist.length > 0;
                const result = protocol(port[15]).filterParsedVideoCodecs(parseNativeCodecsResult, experimentCodecs, tmp4);
                HermesBuiltin.arraySpread(result.map((name) => {
                  const sum = 101 + 2 * arg1;
                  return { type: "video", name: name.name, priority: arg1 + 1, payloadType: sum, rtxPayloadType: sum + 1, encode: name.encode, decode: name.decode };
                }), 1);
                protocol.codecs = items;
                const obj4 = protocol(port[15]);
                const protocol = new Map(parseNativeCodecsResult.map((arg0) => {
                  const items = [, ];
                  ({ name: arr[0], encode: arr[1] } = arg0);
                  return items;
                }));
                codecs = protocol.codecs;
                protocol.initialCodecs = codecs.map((type) => {
                  const obj = {};
                  const merged = Object.assign(type);
                  if ("video" !== type.type) {
                    let encode = type.encode;
                  } else {
                    encode = map.get(type.name);
                  }
                  obj["encode"] = encode;
                  return obj;
                });
                ({ logger: logger3, codecs } = protocol);
                const found = codecs.filter((type) => "audio" === type.type);
                logger3.info("Audio codecs: " + found.map((name) => name.name));
                ({ logger: logger4, codecs: codecs2 } = protocol);
                const found1 = codecs2.filter((type) => "video" === type.type);
                logger4.info("Video codecs: " + found1.map((name) => name.name + "[encode: " + name.encode + ", decode: " + name.decode + "]"));
                const encryptionModes = port.getEncryptionModes((arg0) => {
                  map.onEncryptionModesCallbackAt = performance.now();
                  const logger = map.logger;
                  logger.info("Encryption modes: " + arg0);
                  store.setTransportOptions(map.getConnectionTransportOptions());
                  let selfMute = map.selfMute;
                  if (!selfMute) {
                    selfMute = map.context === constants2.STREAM;
                  }
                  store.setSelfMute(selfMute);
                  store.setSelfDeafen(map.selfDeaf);
                  const result = store.setOnSpeakingCallback(map.handleSpeakingNative);
                  if (null != store.setOnNativeMuteChangedCallback) {
                    const result1 = store.setOnNativeMuteChangedCallback(map.handleNativeMuteChanged);
                  }
                  if (null != store.setOnSpeakingWhileMutedCallback) {
                    const result2 = store.setOnSpeakingWhileMutedCallback(map.handleSpeakingWhileMuted);
                  }
                  if (null != store.setPingInterval) {
                    store.setPingInterval(closure_33);
                  }
                  store.setPingCallback(map.handlePing);
                  if (null != store.setPingTimeoutCallback) {
                    const result3 = store.setPingTimeoutCallback(map.handlePingTimeout);
                  }
                  if (null != store.setOnVideoEncoderFallbackCallback) {
                    const result4 = store.setOnVideoEncoderFallbackCallback(map.handleVideoEncoderFallback);
                  }
                  if (null != store.setOnVideoDecoderFallbackCallback) {
                    const result5 = store.setOnVideoDecoderFallbackCallback(map.handleVideoDecoderFallback);
                  }
                  if (null != store.setVideoCodecErrorCallback) {
                    const result6 = store.setVideoCodecErrorCallback(map.handleVideoCodecError);
                  }
                  let obj = { builtInEchoCancellation: true, echoCancellation: map.echoCancellation, noiseSuppression: map.noiseSuppression, automaticGainControl: map.automaticGainControl.enabled, automaticGainControlConfig: map.automaticGainControl, noiseCancellation: map.noiseCancellation, noiseCancellationDuringProcessing: map.noiseCancellationDuringProcessing };
                  store2.setTransportOptions(obj);
                  store2.setNoInputThreshold(-100);
                  store2.setNoInputCallback(map.handleNoInput);
                  if (map.videoSupported) {
                    store.setOnVideoCallback(map.handleVideo);
                    if (null != store.setOnFirstFrameCallback) {
                      const result7 = store.setOnFirstFrameCallback(map.handleFirstFrame);
                    }
                    if (null != store.setOnFirstFrameDeliveredStatsCallback) {
                      const result8 = store.setOnFirstFrameDeliveredStatsCallback(map.handleFirstFrameStats);
                    }
                    if (null != store.setOnFirstFrameEncryptedStatsCallback) {
                      const result9 = store.setOnFirstFrameEncryptedStatsCallback(map.handleFirstFrameEncryptedStats);
                    }
                    if (null != store.setOnDesktopSourceEnded) {
                      const result10 = store.setOnDesktopSourceEnded(map.handleDesktopSourceEnded);
                    }
                    if (null != store.setOnSoundshare) {
                      store.setOnSoundshare(map.handleSoundshare);
                    }
                    if (null != store.setOnSoundshareEnded) {
                      store.setOnSoundshareEnded(map.handleSoundshareEnded);
                    }
                    if (null != store.setOnSoundshareFailed) {
                      const result11 = store.setOnSoundshareFailed(map.handleSoundshareFailed);
                    }
                  }
                  if (null != store.setOnMLSFailureCallback) {
                    const result12 = store.setOnMLSFailureCallback(map.handleMLSFailure);
                  }
                  map.setConnectionState(constants.CONNECTED);
                  obj = { address: modes, port: store, mode: map.chooseEncryptionMode(modes.modes, arg0), codecs: map.codecs };
                  map.emit(map(store[10]).BaseConnectionEvent.Connected, map, obj);
                  map.on(map(store[10]).BaseConnectionEvent.Stats, map.handleStats);
                  const userOptions = map.getUserOptions();
                  const item = userOptions.forEach(() => { ... });
                  map.mergeUsers(userOptions);
                  map.emit(map(store[10]).BaseConnectionEvent.RemoteStreamsReady, userOptions.length);
                  const keys = Object.keys(map.localSpeakingFlags);
                  for (let num = 0; num < keys.length; num = num + 1) {
                    let tmp74 = keys[num];
                    let tmp75 = map;
                    if (tmp74 !== map.userId) {
                      let tmp76 = map;
                      let setSpeakingFlagsResult = map.setSpeakingFlags(tmp74, map.localSpeakingFlags[tmp74]);
                    }
                  }
                });
              });
            }
          }
        });
        self.conn = fnResult;
        if (null != fnResult.setSecureFramesStateUpdateCallback) {
          const result1 = fnResult.setSecureFramesStateUpdateCallback((arg0) => {
            const logger = self.logger;
            logger.info("DAVE protocol state update: " + JSON.stringify(arg0));
            self.emit(self(fnResult[10]).BaseConnectionEvent.SecureFramesUpdate, arg0);
          });
        }
        if (null != fnResult.setDesktopSourceStatusCallback) {
          const result2 = fnResult.setDesktopSourceStatusCallback((type) => {
            let desktopCapturerType;
            let hybridCaptureMethodSwitches;
            let hybridDxgiFrames;
            let hybridDxgiFramesUnique;
            let hybridGdiBitBltFrames;
            let hybridGdiBitBltFramesUnique;
            let hybridGdiFrames;
            let hybridGdiPrintWindowFrames;
            let hybridGdiPrintWindowFramesUnique;
            let hybridGraphicsCaptureFrames;
            let hybridGraphicsCaptureFramesUnique;
            let hybridVideohookFrames;
            let hybridVideohookFramesUnique;
            let quartzFrames;
            let screenshareFrames;
            let skipHistoryJson;
            let videohookFrames;
            if ("videohook_start" === type.type) {
              self.emit(self(fnResult[10]).BaseConnectionEvent.VideoHookStart);
            } else if ("videohook_stop" === type.type) {
              self.emit(self(fnResult[10]).BaseConnectionEvent.VideoHookStop);
            } else if ("videohook_initialize" === type.type) {
              self.emit(self(fnResult[10]).BaseConnectionEvent.VideoHookInitialize, type.backend, type.format, type.framebufferFormat, type.sampleCount, type.success, type.reinitialization);
            } else if ("screenshare_finish" === type.type) {
              const ScreenshareFinish = self(fnResult[10]).BaseConnectionEvent.ScreenshareFinish;
              ({ screenshareFrames, videohookFrames, hybridDxgiFrames, hybridGdiFrames, hybridVideohookFrames, hybridGraphicsCaptureFrames, hybridCaptureMethodSwitches, hybridGdiBitBltFrames, hybridGdiPrintWindowFrames, hybridGraphicsCaptureFramesUnique, hybridDxgiFramesUnique, hybridVideohookFramesUnique, hybridGdiBitBltFramesUnique, hybridGdiPrintWindowFramesUnique, skipHistoryJson, quartzFrames, desktopCapturerType } = type);
              if (null == desktopCapturerType) {
                desktopCapturerType = type.desktop_capturer_type;
              }
              self.emit(ScreenshareFinish, screenshareFrames, videohookFrames, hybridDxgiFrames, hybridGdiFrames, hybridVideohookFrames, hybridGraphicsCaptureFrames, hybridCaptureMethodSwitches, hybridGdiBitBltFrames, hybridGdiPrintWindowFrames, hybridGraphicsCaptureFramesUnique, hybridDxgiFramesUnique, hybridVideohookFramesUnique, hybridGdiBitBltFramesUnique, hybridGdiPrintWindowFramesUnique, skipHistoryJson, quartzFrames, desktopCapturerType, type.activity, type.goLiveCameraFrames, type.screenCaptureKitFrames, type.hdrFramesCapable, type.hdrFrames, type.targetWindowElevated, type.pipewireFrames, type.x11Frames, type.videohookBackend);
              const tmp9 = self;
            } else if ("video_state" === type.type) {
              self.emit(self(fnResult[10]).BaseConnectionEvent.VideoState, type.state);
            } else {
              type = type.type;
              if (type.startsWith("soundshare_")) {
                self.emit(self(fnResult[10]).BaseConnectionEvent.SoundshareTrace, type);
              }
            }
          });
        }
        self.on("newListener", self.handleNewListenerNative);
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "destroy",
    value() {
      let flag = arg0;
      const self = this;
      const Connection = this;
      if (arg0 === undefined) {
        flag = false;
      }
      const conn = self.conn;
      conn.destroy(flag);
      const keys = Object.keys(self.localSpeakingFlags);
      const found = keys.filter((arg0) => arg0 !== self.userId);
      const item = found.forEach((arg0) => self.emit(self(closure_2[10]).BaseConnectionEvent.Speaking, arg0, constants.NONE, self.remoteAudioSSRCs[arg0]));
      self.setConnectionState(constants3.DISCONNECTED);
      function _superPropGet(Connection, destroy, self, arg3) {
        let prototype = Connection;
        if (1) {
          prototype = Connection.prototype;
        }
        const tmpResult = cloneDataView(cloneArrayBuffer(prototype), "destroy", self);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(Connection, "destroy", self, 3)([]);
    }
  };
  items[1] = obj;
  obj = {
    key: "setCodecs",
    value(arg0, currentVideoCodec) {
      const self = this;
      this.currentVideoCodec = currentVideoCodec;
      if (this.currentVideoCodec !== currentVideoCodec) {
        if (null != self.lastDesktopEncodingOptions) {
          const lastDesktopEncodingOptions = self.lastDesktopEncodingOptions;
          const result = self.setDesktopEncodingOptions(lastDesktopEncodingOptions.width, lastDesktopEncodingOptions.height, lastDesktopEncodingOptions.framerate);
        }
      }
      const conn = self.conn;
      conn.setTransportOptions(self.getCodecOptions(arg0, currentVideoCodec, arg2));
      if (self.videoEncoderFallbackPending) {
        self.videoEncoderFallbackPending = false;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStats",
    value() {
      const Connection = this;
      if (this.connectionState === constants3.DISCONNECTED) {
        let resolved = Promise.resolve(null);
      } else {
        const promise = new Promise((arg0) => {
          const self = arg0;
          if (null != self.conn.getFilteredStats) {
            const conn2 = self.conn;
            const filteredStats = conn2.getFilteredStats(constants.ALL, (self) => self(callback(closure_2[17])(self.mediaEngineConnectionId, self, self.remoteVideoSinkWants, self.localVideoSinkWants)));
          } else if (null != self.conn.getStats) {
            const conn = self.conn;
            const stats = conn.getStats((self) => self(callback(closure_2[17])(self.mediaEngineConnectionId, self, self.remoteVideoSinkWants, self.localVideoSinkWants)));
          } else {
            const voiceEngine = self(closure_2[9]).getVoiceEngine();
            const stats1 = voiceEngine.getStats((self) => self(callback(closure_2[17])(self.mediaEngineConnectionId, self, self.remoteVideoSinkWants, self.localVideoSinkWants)));
            const obj = self(closure_2[9]);
          }
        });
        const obj = Connection(closure_2[16]);
        resolved = Connection(closure_2[16]).timeout(promise, Connection(closure_2[18]).STATS_INTERVAL).catch((arg0) => {
          if (!(arg0 instanceof self(closure_2[16]).TimeoutError)) {
            throw arg0;
          }
        });
        const timeoutResult = Connection(closure_2[16]).timeout(promise, Connection(closure_2[18]).STATS_INTERVAL);
      }
      return resolved;
    }
  };
  items[4] = {
    key: "createUser",
    value(id, ssrc) {
      const self = this;
      const tmp = this.remoteAudioSSRCs[id];
      const tmp2 = this.remoteVideoSSRCs[id];
      if (null != tmp) {
        if (0 === ssrc) {
          const logger = self.logger;
          const _HermesInternal = HermesInternal;
          logger.info("Ignoring attempt to recreate user " + id + " with 0 audio SSRC");
        }
      }
      if (undefined !== tmp2) {
        const items = [];
        HermesBuiltin.arraySpread(tmp2, 0);
        let sorted = items.sort();
      } else {
        sorted = [];
      }
      if (undefined === arg2) {
        let items1 = sorted;
        if (null == sorted) {
          items1 = [];
        }
        let sorted1 = items1;
      } else {
        const items2 = [];
        HermesBuiltin.arraySpread(arg2, 0);
        sorted1 = items2.sort();
      }
      self.remoteAudioSSRCs[id] = ssrc;
      let items3 = sorted1;
      if (null == sorted1) {
        items3 = [];
      }
      self.remoteVideoSSRCs[id] = items3;
      if (self.userId !== id) {
        if (tmp !== ssrc) {
          let num5 = 0;
          if (undefined !== sorted1) {
            num5 = 0;
            if (sorted1.length > 0) {
              num5 = sorted1[0];
            }
          }
          const obj = { id, ssrc, videoSsrc: num5, videoSsrcs: sorted1, rtxSsrc: callback7(num5), mute: self.getLocalMute(id), volume: self.getLocalVolume(id) };
          if (self.connectionState === constants3.CONNECTED) {
            const logger2 = self.logger;
            let joined;
            if (null != sorted1) {
              joined = sorted1.join(",");
            }
            let num6 = 0;
            if (null != joined) {
              num6 = joined;
            }
            const _HermesInternal2 = HermesInternal;
            logger2.info("Creating user: " + id + " with audio SSRC: " + ssrc + " and video SSRCs: " + num6);
            const items4 = [obj];
            self.mergeUsers(items4);
          }
          const rect = self.localPans[id];
          if (null != rect) {
            self.setLocalPan(id, rect.left, rect.right);
          }
          let tmp23 = null != tmp22;
          if (tmp23) {
            tmp23 = tmp22 !== constants5.NONE;
          }
          if (tmp23) {
            self.setSpeakingFlags(id, tmp22);
          }
        }
      }
    }
  };
  items[5] = {
    key: "destroyUser",
    value(arg0) {
      const self = this;
      if (null != this.remoteAudioSSRCs[arg0]) {
        const conn = self.conn;
        conn.destroyUser(arg0);
        const remoteAudioSSRCs = self.remoteAudioSSRCs;
        delete r2[r1];
        const remoteVideoSSRCs = self.remoteVideoSSRCs;
        delete r0[r1];
      }
    }
  };
  items[6] = {
    key: "setSelfMute",
    value(selfMute) {
      this.selfMute = selfMute;
      const conn = this.conn;
      conn.setSelfMute(selfMute);
      this.emit(Connection(closure_2[10]).BaseConnectionEvent.Mute, selfMute);
    }
  };
  items[7] = {
    key: "getSelfMute",
    value() {
      return this.selfMute;
    }
  };
  items[8] = {
    key: "getSelfDeaf",
    value() {
      return this.selfDeaf;
    }
  };
  items[9] = {
    key: "setSelfDeaf",
    value(selfDeaf) {
      this.selfDeaf = selfDeaf;
      const conn = this.conn;
      conn.setSelfDeafen(selfDeaf);
      this.emit(Connection(closure_2[10]).BaseConnectionEvent.Deafen, selfDeaf);
    }
  };
  items[10] = {
    key: "setSoundshareSource",
    value(arg0, soundshareLoopback) {
      let num = arg0;
      const self = this;
      if (this.soundshareId !== arg0) {
        if (self.context === constants4.STREAM) {
          self.soundshareId = num;
          self.soundshareSentSpeakingEvent = false;
          if (null === num) {
            num = 0;
          }
          const conn = self.conn;
          const obj = { soundsharePid: num, soundshareEventDriven: true, soundshareLoopback };
          conn.setTransportOptions(obj);
        }
      }
    }
  };
  items[11] = {
    key: "setLocalMute",
    value(arg0, arg1) {
      this.localMutes[arg0] = arg1;
      const conn = this.conn;
      conn.setLocalMute(arg0, arg1);
      this.emit(Connection(closure_2[10]).BaseConnectionEvent.LocalMute, arg0, arg1);
    }
  };
  items[12] = {
    key: "setUserPosition",
    value(arg0, arg1) {
      const conn = this.conn;
      const setUserPosition = conn.setUserPosition;
      if (null != setUserPosition) {
        setUserPosition.call(conn, arg0, arg1);
      }
    }
  };
  items[13] = {
    key: "fastUdpReconnect",
    value() {
      const self = this;
      if (null != this.conn.fastUdpReconnect) {
        self.numFastUdpReconnects = self.numFastUdpReconnects + 1;
        const conn = self.conn;
        conn.fastUdpReconnect();
      }
    }
  };
  items[14] = {
    key: "getNumFastUdpReconnects",
    value() {
      let numFastUdpReconnects = null;
      if (null != this.conn.fastUdpReconnect) {
        numFastUdpReconnects = this.numFastUdpReconnects;
      }
      return numFastUdpReconnects;
    }
  };
  items[15] = {
    key: "wasRemoteDisconnected",
    value() {
      const conn = this.conn;
      const wasRemoteDisconnected = conn.wasRemoteDisconnected;
      if (null != wasRemoteDisconnected) {
        wasRemoteDisconnected.call(conn);
      }
    }
  };
  items[16] = {
    key: "setLocalVideoDisabled",
    value(arg0, arg1) {
      this.disabledLocalVideos[arg0] = arg1;
      this.emit(Connection(closure_2[10]).BaseConnectionEvent.LocalVideoDisabled, arg0, arg1);
    }
  };
  items[17] = {
    key: "setMinimumJitterBufferLevel",
    value(minimumJitterBufferLevel) {
      this.minimumJitterBufferLevel = minimumJitterBufferLevel;
    }
  };
  items[18] = {
    key: "setPostponeDecodeLevel",
    value(postponeDecodeLevel) {
      this.postponeDecodeLevel = postponeDecodeLevel;
    }
  };
  items[19] = {
    key: "setClipRecordUser",
    value(arg0, arg1, arg2) {
      const self = this;
      if (!this.destroyed) {
        let str = "soundboardAudio";
        if ("soundboard" !== arg1) {
          let str3 = "user";
          if (self.context === constants4.STREAM) {
            str3 = "application";
          }
          let str4 = "Video";
          if ("audio" === arg1) {
            str4 = "Audio";
          }
          str = str3.concat(str4);
        }
        const conn = self.conn;
        const setClipRecordUser = conn.setClipRecordUser;
        if (null != setClipRecordUser) {
          setClipRecordUser.call(conn, arg0, str, arg2);
        }
      }
    }
  };
  items[20] = {
    key: "setClipsKeyFrameInterval",
    value(clipsKeyFrameInterval) {
      const self = this;
      if (this.context === constants4.STREAM) {
        self.clipsKeyFrameInterval = clipsKeyFrameInterval;
        const conn = self.conn;
        const obj = { keyframeInterval: self.getKeyFrameInterval(), alwaysSendVideo: self.keyframeInterval > 0 };
        conn.setTransportOptions(obj);
      }
    }
  };
  items[21] = {
    key: "setViewerSideClip",
    value(enableViewerSideClip) {
      if (this.context === constants4.STREAM) {
        const conn = this.conn;
        const obj = { enableViewerSideClip };
        conn.setTransportOptions(obj);
      }
    }
  };
  items[22] = {
    key: "setRemoteAudioHistory",
    value(remoteAudioHistoryMs) {
      const conn = this.conn;
      conn.setTransportOptions({ remoteAudioHistoryMs });
    }
  };
  items[23] = {
    key: "setQualityDecoupling",
    value(enableQualityDecoupling) {
      if (this.context === constants4.STREAM) {
        const conn = this.conn;
        const obj = { enableQualityDecoupling };
        conn.setTransportOptions(obj);
      }
    }
  };
  items[24] = {
    key: "getLocalVolume",
    value(arg0) {
      let tmp2 = this.localVolumes[arg0];
      if (null != tmp2) {
        if (null == tmp2) {
          tmp2 = closure_26;
        }
        return tmp2 / closure_26;
      }
    }
  };
  items[25] = {
    key: "setLocalVolume",
    value(ownerId) {
      this.localVolumes[ownerId] = arg1;
      const conn = this.conn;
      conn.setLocalVolume(ownerId, this.getLocalVolume(ownerId));
    }
  };
  items[26] = {
    key: "setLocalPan",
    value(result2, left, right) {
      this.localPans[result2] = { left, right };
      const conn = this.conn;
      conn.setLocalPan(result2, left, right);
    }
  };
  items[27] = {
    key: "isAttenuating",
    value() {
      return this.attenuationFactor < 1;
    }
  };
  items[28] = {
    key: "setAttenuation",
    value(arg0, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers) {
      this.attenuationFactor = (100 - arg0) / 100;
      this.attenuateWhileSpeakingSelf = attenuateWhileSpeakingSelf;
      this.attenuateWhileSpeakingOthers = attenuateWhileSpeakingOthers;
      const conn = this.conn;
      conn.setTransportOptions(this.getAttenuationOptions());
    }
  };
  items[29] = {
    key: "setCanHavePriority",
    value(arg0, arg1) {
      const conn = this.conn;
      const setRemoteUserCanHavePriority = conn.setRemoteUserCanHavePriority;
      if (null != setRemoteUserCanHavePriority) {
        setRemoteUserCanHavePriority.call(conn, arg0, arg1);
      }
    }
  };
  items[30] = {
    key: "setBitRate",
    value(arg0) {
      this.setVoiceBitRate(arg0);
    }
  };
  items[31] = {
    key: "setVoiceBitRate",
    value(voiceBitrate) {
      const self = this;
      if (this.voiceBitrate !== voiceBitrate) {
        self.voiceBitrate = voiceBitrate;
        voiceBitrate = self.voiceBitrate;
        let bound = voiceBitrate;
        if (self.soundshareActive) {
          const _Math = Math;
          bound = Math.max(closure_28, voiceBitrate);
        }
        const conn = self.conn;
        const obj = { encodingVoiceBitRate: bound };
        conn.setTransportOptions(obj);
      }
    }
  };
  items[32] = {
    key: "setCameraBitRate",
    value(encodingVideoBitRate, encodingVideoMaxBitRate, encodingVideoMinBitRate) {
      const self = this;
      if (null == encodingVideoMinBitRate) {
        if (null == encodingVideoMaxBitRate) {
          const videoQualityManager = self.videoQualityManager;
          videoQualityManager.setQualityOverwrite({});
        }
        if (!self.hasDesktopSource()) {
          const conn = self.conn;
          let obj = { encodingVideoBitRate, encodingVideoMinBitRate, encodingVideoMaxBitRate };
          conn.setTransportOptions(obj);
        }
      }
      const videoQualityManager2 = self.videoQualityManager;
      obj = {};
      let tmp2 = encodingVideoMaxBitRate;
      if (null != encodingVideoMinBitRate) {
        tmp2 = encodingVideoMaxBitRate;
        if (encodingVideoMinBitRate > 0) {
          tmp2 = encodingVideoMinBitRate;
        }
      }
      obj.bitrateMin = tmp2;
      obj.bitrateMax = encodingVideoMaxBitRate;
      videoQualityManager2.setQualityOverwrite(obj);
    }
  };
  items[33] = {
    key: "setEchoCancellation",
    value(echoCancellation) {
      this.echoCancellation = echoCancellation;
      let obj = Connection(closure_2[9]);
      const voiceEngine = obj.getVoiceEngine();
      obj = { echoCancellation: this.echoCancellation };
      voiceEngine.setTransportOptions(obj);
    }
  };
  items[34] = {
    key: "setNoiseSuppression",
    value(noiseSuppression) {
      this.noiseSuppression = noiseSuppression;
      let obj = Connection(closure_2[9]);
      const voiceEngine = obj.getVoiceEngine();
      obj = { noiseSuppression: this.noiseSuppression };
      voiceEngine.setTransportOptions(obj);
    }
  };
  items[35] = {
    key: "setAutomaticGainControl",
    value(automaticGainControl) {
      this.automaticGainControl = automaticGainControl;
      let obj = Connection(closure_2[9]);
      const voiceEngine = obj.getVoiceEngine();
      obj = { automaticGainControl: this.automaticGainControl.enabled, automaticGainControlConfig: this.automaticGainControl };
      voiceEngine.setTransportOptions(obj);
    }
  };
  items[36] = {
    key: "setNoiseCancellation",
    value(noiseCancellation) {
      this.noiseCancellation = noiseCancellation;
      let obj = Connection(closure_2[9]);
      const voiceEngine = obj.getVoiceEngine();
      obj = { noiseCancellation: this.noiseCancellation };
      voiceEngine.setTransportOptions(obj);
    }
  };
  items[37] = {
    key: "setNoiseCancellationDuringProcessing",
    value(noiseCancellationDuringProcessing) {
      this.noiseCancellationDuringProcessing = noiseCancellationDuringProcessing;
      let obj = Connection(closure_2[9]);
      const voiceEngine = obj.getVoiceEngine();
      obj = { noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing };
      voiceEngine.setTransportOptions(obj);
    }
  };
  items[38] = {
    key: "setEchoReferenceMode",
    value(echoReferenceMode) {
      this.echoReferenceMode = echoReferenceMode;
      let obj = Connection(closure_2[9]);
      const voiceEngine = obj.getVoiceEngine();
      obj = { echoReferenceMode: this.echoReferenceMode };
      voiceEngine.setTransportOptions(obj);
    }
  };
  items[39] = {
    key: "getNoiseCancellation",
    value() {
      return this.noiseCancellation;
    }
  };
  items[40] = {
    key: "setQoS",
    value(qos) {
      this.qos = qos;
      const conn = this.conn;
      conn.setTransportOptions({ qos: this.qos });
    }
  };
  items[41] = {
    key: "setSoundshareDiscardRearChannels",
    value(soundshareDiscardRearChannels) {
      const conn = this.conn;
      conn.setTransportOptions({ soundshareDiscardRearChannels });
    }
  };
  items[42] = {
    key: "setInputMode",
    value(inputMode, pttReleaseDelay) {
      const self = this;
      this.inputMode = inputMode;
      if (constants2.PUSH_TO_TALK === inputMode) {
        self.pttReleaseDelay = pttReleaseDelay.pttReleaseDelay;
      } else if (constants2.VOICE_ACTIVITY === inputMode) {
        ({ vadThreshold: self.vadThreshold, vadAutoThreshold: self.vadAutoThreshold, vadUseKrisp: self.vadUseKrisp, vadLeading: self.vadLeading, vadTrailing: self.vadTrailing, vadKrispActivationThreshold: self.vadKrispActivationThreshold, vadDuringPreProcess: self.vadDuringPreProcess } = pttReleaseDelay);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unknown Input Mode: " + inputMode);
        throw error;
      }
      const conn = self.conn;
      conn.setTransportOptions({ inputMode: closure_17[self.inputMode], inputModeOptions: self.createInputModeOptions() });
    }
  };
  items[43] = {
    key: "setSilenceThreshold",
    value(arg0) {
      const voiceEngine = Connection(closure_2[9]).getVoiceEngine();
      voiceEngine.setNoInputThreshold(arg0);
    }
  };
  items[44] = {
    key: "setForceAudioInput",
    value(arg0) {
      let flag = arg1;
      let flag2 = arg2;
      if (arg1 === undefined) {
        flag = false;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      const conn = this.conn;
      conn.setPTTActive(arg0, flag, flag2);
    }
  };
  items[45] = {
    key: "setSpeakingFlags",
    value(arg0, arg1) {
      const self = this;
      if (null != this.conn.setRemoteUserSpeakingStatus) {
        const conn2 = self.conn;
        const result = conn2.setRemoteUserSpeakingStatus(arg0, arg1);
      } else if (null != self.conn.setRemoteUserSpeaking) {
        const conn = self.conn;
        const result1 = conn.setRemoteUserSpeaking(arg0, (arg1 & constants5.VOICE) === constants5.VOICE);
      }
      self.handleSpeakingFlags(arg0, arg1);
    }
  };
  items[46] = {
    key: "clearAllSpeaking",
    value() {

    }
  };
  items[47] = {
    key: "setEncryption",
    value(mode, secretKey) {
      const logger = this.logger;
      logger.info("Selected encryption mode: " + mode);
      const conn = this.conn;
      conn.setTransportOptions({ encryptionSettings: { mode, secretKey } });
    }
  };
  items[48] = {
    key: "setReconnectInterval",
    value(reconnectInterval) {
      this.reconnectInterval = reconnectInterval;
      const conn = this.conn;
      conn.setTransportOptions({ reconnectInterval: this.reconnectInterval });
    }
  };
  items[49] = {
    key: "setKeyframeInterval",
    value(keyframeInterval) {
      this.keyframeInterval = keyframeInterval;
      const conn = this.conn;
      conn.setTransportOptions({ keyframeInterval: this.getKeyFrameInterval(), alwaysSendVideo: this.keyframeInterval > 0 });
    }
  };
  items[50] = {
    key: "setVideoQualityMeasurement",
    value(videoQualityMeasurement) {
      this.videoQualityMeasurement = videoQualityMeasurement;
      const conn = this.conn;
      conn.setTransportOptions({ videoQualityMeasurement: this.videoQualityMeasurement });
    }
  };
  items[51] = {
    key: "setVideoEncoderExperiments",
    value(videoEncoderExperiments) {
      this.videoEncoderExperiments = videoEncoderExperiments;
      const conn = this.conn;
      conn.setTransportOptions({ videoEncoderExperiments: this.videoEncoderExperiments });
    }
  };
  items[52] = {
    key: "setAudioVideoOverridesTransport",
    value(overrideDeniedVideoCodecs) {
      const self = this;
      let someResult = null != overrideDeniedVideoCodecs.overrideDeniedVideoCodecs && overrideDeniedVideoCodecs.overrideDeniedVideoCodecs !== self.lastOverrideCodecDenylist;
      const obj = {};
      if (someResult) {
        obj.overrideDeniedVideoCodecs = overrideDeniedVideoCodecs.overrideDeniedVideoCodecs;
      }
      if (null != overrideDeniedVideoCodecs.overrideDeniedVideoEncoders && overrideDeniedVideoCodecs.overrideDeniedVideoEncoders !== self.lastOverrideEncoderDenylist) {
        obj.overrideDeniedVideoEncoders = overrideDeniedVideoCodecs.overrideDeniedVideoEncoders;
      }
      if (null != overrideDeniedVideoCodecs.captureOverrides && overrideDeniedVideoCodecs.captureOverrides !== self.lastCaptureOverrides) {
        obj.captureOverrides = overrideDeniedVideoCodecs.captureOverrides;
      }
      let tmp4 = someResult;
      if (!someResult) {
        tmp4 = tmp2;
      }
      if (!tmp4) {
        tmp4 = tmp3;
      }
      if (tmp4) {
        const conn = self.conn;
        conn.setTransportOptions(obj);
      }
      if (someResult) {
        self.lastOverrideCodecDenylist = overrideDeniedVideoCodecs.overrideDeniedVideoCodecs;
      }
      if (null != overrideDeniedVideoCodecs.overrideDeniedVideoEncoders && overrideDeniedVideoCodecs.overrideDeniedVideoEncoders !== self.lastOverrideEncoderDenylist) {
        self.lastOverrideEncoderDenylist = overrideDeniedVideoCodecs.overrideDeniedVideoEncoders;
      }
      if (null != overrideDeniedVideoCodecs.captureOverrides && overrideDeniedVideoCodecs.captureOverrides !== self.lastCaptureOverrides) {
        self.lastCaptureOverrides = overrideDeniedVideoCodecs.captureOverrides;
      }
      let tmp6 = someResult;
      if (!someResult) {
        tmp6 = tmp2;
      }
      if (tmp6) {
        self.videoEncoderFallbackPending = false;
        const videoDecoderFallbackSent = self.videoDecoderFallbackSent;
        videoDecoderFallbackSent.clear();
      }
      if (someResult) {
        if (self.initialCodecs.length > 0) {
          let set = null;
          if (self.lastOverrideCodecDenylist.length > 0) {
            const _Set = Set;
            const parts = self.lastOverrideCodecDenylist.split(",");
            set = new Set(parts.map((str) => str.trim().toUpperCase()));
            const str = self.lastOverrideCodecDenylist;
          }
          const Connection = set;
          const initialCodecs = self.initialCodecs;
          const mapped = initialCodecs.map((arg0) => {
            const merged = Object.assign(arg0);
            return {};
          });
          const found = mapped.filter((type) => {
            let tmp = "video" !== type.type;
            if (!tmp) {
              tmp = null == set;
            }
            if (!tmp) {
              tmp = "VP8" === type.name;
            }
            if (!tmp) {
              tmp = "VP9" === type.name;
            }
            if (!tmp) {
              tmp = !set.has(type.name);
            }
            return tmp;
          });
          const _Set2 = Set;
          const codecs = self.codecs;
          const found1 = codecs.filter((type) => "video" === type.type && type.encode);
          const set1 = new Set(found1.map((name) => name.name));
          const _Set3 = Set;
          const found2 = found.filter((type) => "video" === type.type && type.encode);
          const set2 = new Set(found2.map((name) => name.name));
          const items = [];
          HermesBuiltin.arraySpread(set1, 0);
          self.codecs = found;
          if (someResult) {
            someResult = items.some((arg0) => !set2.has(arg0));
          }
          if (someResult) {
            const _performance = performance;
            self.overrideCodecResetAt = performance.now();
          }
          self.emit(Connection(closure_2[10]).BaseConnectionEvent.VideoEncoderFallback, self.codecs);
        }
      }
    }
  };
  items[53] = {
    key: "setVideoBroadcast",
    value(selfVideo) {
      const self = this;
      if (this.selfVideo !== selfVideo) {
        self.selfVideo = selfVideo;
        const result = self.applyVideoTransportOptions();
      }
    }
  };
  items[54] = {
    key: "setGoLiveSource",
    value(quality) {
      let allowScreenCaptureKit;
      let enableGlobalFramePoolLock;
      let frameRate;
      let graphicsCaptureStaleFrameTimeoutMs;
      let hdrCaptureMode;
      let id;
      let minCaptureHeight;
      let minCaptureWidth;
      let resolution;
      let useCaptureDeviceForEncode;
      let useGraphicsCapture;
      let useGraphicsCaptureApiLevel;
      let useGraphicsCaptureDirtyRegions;
      let useHookFramePacer;
      let useQuartzCapturer;
      let useVideoHook;
      let videoHookAllowDx12;
      let videoHookStaleFrameTimeoutMs;
      let result3 = quality;
      const self = this;
      ({ resolution, frameRate } = quality.quality);
      if (resolution <= 480) {
        let result = resolution / 3 * 4;
      } else {
        result = resolution / 9 * 16;
      }
      let conn = null;
      if (null != result3.desktopDescription) {
        id = result3.desktopDescription.id;
      } else {
        id = null;
        if (conn != result3.cameraDescription) {
          const _HermesInternal = HermesInternal;
          let str = "";
          let str2 = ":";
          id = "" + result3.cameraDescription.videoDeviceGuid + ":" + result3.cameraDescription.audioDeviceGuid;
        }
      }
      if (self.goLiveSourceIdentifier !== id) {
        self.goLiveSourceIdentifier = id;
        if (conn != self.conn.setDesktopSource) {
          if (conn != result3.desktopDescription) {
            const desktopDescription = result3.desktopDescription;
            ({ id, useVideoHook, useGraphicsCaptureApiLevel, useCaptureDeviceForEncode, useGraphicsCapture, useHookFramePacer, useQuartzCapturer, allowScreenCaptureKit, videoHookStaleFrameTimeoutMs, graphicsCaptureStaleFrameTimeoutMs, hdrCaptureMode, enableGlobalFramePoolLock, useGraphicsCaptureDirtyRegions, videoHookAllowDx12, minCaptureWidth, minCaptureHeight } = desktopDescription);
            self.setSoundshareSource(desktopDescription.soundshareId, desktopDescription.useLoopback);
            if (conn != id) {
              let str3 = ":";
              let parts = id.split(":");
            } else {
              parts = [];
            }
            const tmp9 = callback2(parts, 2);
            const first = tmp9[0];
            if (conn != id) {
              const logger2 = self.logger;
              str = useVideoHook.toString();
              let str1;
              if (conn != useGraphicsCapture) {
                str1 = useGraphicsCapture.toString();
              }
              str2 = undefined;
              if (conn != useGraphicsCaptureApiLevel) {
                str2 = useGraphicsCaptureApiLevel.toString();
              }
              str3 = undefined;
              if (conn != useCaptureDeviceForEncode) {
                str3 = useCaptureDeviceForEncode.toString();
              }
              const _HermesInternal2 = HermesInternal;
              logger2.info("capturing desktop (type: " + first + ", handle: " + tmp11 + ", use-video-hook: " + str + ", use-graphics-capture: " + str1 + ", use-graphics-capture-api-level: " + str2 + ", use-capture-device-for-encode: " + str3 + ").");
            } else {
              const logger = self.logger;
              logger.info("capturing desktop (type: <stop>).");
            }
            if (conn != self.conn.setDesktopSourceWithOptions) {
              if (conn != id) {
                const result1 = self.setDesktopEncodingOptions(result, resolution, frameRate);
                const conn2 = self.conn;
                let obj = { type: first, sourceId: tmp11, useVideoHook, useHookFramePacer, useGraphicsCapture, useGraphicsCaptureApiLevel, useCaptureDeviceForEncode, useQuartzCapturer, allowScreenCaptureKit, videoHookStaleFrameTimeoutMs, graphicsCaptureStaleFrameTimeoutMs, hdrCaptureMode, enableGlobalFramePoolLock, useGraphicsCaptureDirtyRegions, videoHookAllowDx12, minCaptureWidth, minCaptureHeight };
                const result2 = conn2.setDesktopSourceWithOptions(obj);
              } else {
                conn = self.conn;
                conn.clearDesktopSource();
              }
            } else {
              conn = self.conn;
              const _HermesInternal3 = HermesInternal;
              conn.setDesktopSource("wumpus-" + tmp11, useVideoHook, first);
            }
          } else if (conn != result3.cameraDescription) {
            const conn3 = self.conn;
            obj = {};
            ({ videoDeviceGuid: obj2.videoInputDeviceId, audioDeviceGuid: obj2.audioInputDeviceId } = result3.cameraDescription);
            conn3.setGoLiveDevices(obj);
          }
          result3 = self.setDesktopEncodingOptions(result, resolution, frameRate);
        }
      } else {
        const result4 = self.setDesktopEncodingOptions(result, resolution, frameRate);
        if (conn != result3.desktopDescription) {
          const soundshareId = result3.desktopDescription.soundshareId;
          if (self.soundshareId !== soundshareId) {
            self.setSoundshareSource(soundshareId, tmp30);
          }
        }
      }
    }
  };
  items[55] = {
    key: "clearGoLiveDevices",
    value() {
      if (null != this.conn.clearGoLiveDevices) {
        const conn = this.conn;
        conn.clearGoLiveDevices();
      }
    }
  };
  items[56] = {
    key: "clearDesktopSource",
    value() {
      const self = this;
      this.goLiveSourceIdentifier = null;
      if (null != this.conn.clearDesktopSource) {
        const conn2 = self.conn;
        conn2.clearDesktopSource();
      } else {
        const conn = self.conn;
        conn.setDesktopSource("", false, "");
      }
    }
  };
  items[57] = {
    key: "setDesktopSourceStatusCallback",
    value(arg0) {
      const conn = this.conn;
      if (null != conn.setDesktopSourceStatusCallback) {
        setDesktopSourceStatusCallback.call(conn, arg0);
      }
    }
  };
  items[58] = {
    key: "hasDesktopSource",
    value() {
      return null != this.goLiveSourceIdentifier;
    }
  };
  items[59] = {
    key: "setDesktopEncodingOptions",
    value(width, height, framerate) {
      let audioSSRC;
      let userId;
      const self = this;
      if (!this.destroyed) {
        let obj = { width, height, framerate };
        self.lastDesktopEncodingOptions = obj;
        obj = { width, height, framerate, videoCodec: self.currentVideoCodec };
        const calcMaxBitrateFuncResult = self.calcMaxBitrateFunc(obj);
        if (null != calcMaxBitrateFuncResult) {
          obj = { width, height, framerate };
          const videoQualityManager = self.videoQualityManager;
          const quality = videoQualityManager.getQuality();
          const VideoQuality = Connection(closure_2[20]).VideoQuality;
          const videoStreamParameters = self.videoStreamParameters;
          let num6 = videoStreamParameters.findIndex((quality) => quality.quality === closure_16);
          if (-1 === num6) {
            num6 = 0;
          }
          if (tmp8) {
            const videoQualityManager2 = self.videoQualityManager;
            const obj1 = { capture: obj, encode: obj, bitrateMax: calcMaxBitrateFuncResult };
            videoQualityManager2.setGoliveQuality(obj1);
            if (self.videoStreamParameters.length <= num6) {
              const Video = Connection(closure_2[10]).BaseConnectionEvent.Video;
              ({ userId, audioSSRC } = self);
              self.emit(Video, userId, null, audioSSRC, self.videoStreamParameters[num6].ssrc, callback7(self.videoStreamParameters[num6].ssrc), self.videoStreamParameters);
              const conn = self.conn;
              conn.setTransportOptions(self.applyQualityConstraints().constraints);
            } else {
              let obj2 = {};
              if (0 !== width) {
                obj2.type = constants6.FIXED;
                obj2.width = width;
                obj2.height = height;
                tmp10.maxResolution = obj2;
                self.videoStreamParameters[num6].maxFrameRate = framerate;
                obj2 = self.videoStreamParameters[num6];
                obj2.maxBitrate = calcMaxBitrateFuncResult;
              }
              const SOURCE = constants6.SOURCE;
            }
          }
          const tmp8 = !VideoQuality.equals(obj, quality.capture) || quality.bitrateMax !== calcMaxBitrateFuncResult;
        } else {
          if (0 !== height) {
            if (height <= 720) {
              if (framerate <= 30) {
                let tmp3 = closure_13;
              }
            }
          }
          tmp3 = closure_12;
        }
      }
    }
  };
  items[60] = {
    key: "setSDP",
    value() {

    }
  };
  items[61] = {
    key: "setRemoteVideoSinkWants",
    value(remoteVideoSinkWants) {
      this.remoteVideoSinkWants = remoteVideoSinkWants;
      this.updateVideoQuality(closure_14);
    }
  };
  items[62] = {
    key: "setLocalVideoSinkWants",
    value(localVideoSinkWants) {
      const self = this;
      localVideoSinkWants = this.localVideoSinkWants;
      const entries = Object.entries(this.remoteVideoSSRCs);
      let num = 0;
      if (0 < entries.length) {
        do {
          let tmp5 = copyObject;
          let tmp6 = copyObject(entries[num], 2);
          let first = tmp6[0];
          let tmp8 = closure_35;
          let tmp9 = closure_35(tmp6[1]);
          let iter = tmp9();
          let iter2 = iter;
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          let num5 = 0;
          if (!iter.done) {
            do {
              let value = iter2.value;
              let tmp10;
              if (null != localVideoSinkWants) {
                tmp10 = localVideoSinkWants[value];
              }
              let sum = num2 + tmp10;
              let tmp12;
              if (null != localVideoSinkWants) {
                tmp12 = localVideoSinkWants[value];
              }
              num3 = num3 + tmp12;
              let iter3 = tmp9();
              iter2 = iter3;
              num2 = sum;
              num4 = sum;
              num5 = num3;
              let tmp13 = value;
            } while (!iter3.done);
          }
          let tmp14 = tmp;
          let tmp15 = tmp2;
          if (0 === num4) {
            tmp14 = tmp;
            tmp15 = tmp2;
            if (0 !== num5) {
              let conn = self.conn;
              let setDisableLocalVideo = conn.setDisableLocalVideo;
              tmp15 = conn;
              tmp14 = setDisableLocalVideo;
              if (null != setDisableLocalVideo) {
                let callResult = setDisableLocalVideo.call(conn, first, false);
                tmp14 = setDisableLocalVideo;
                tmp15 = conn;
              }
            }
          }
          let tmp17 = tmp3;
          let tmp18 = tmp4;
          if (0 !== num4) {
            tmp17 = tmp3;
            tmp18 = tmp4;
            if (0 === num5) {
              let conn2 = self.conn;
              let setDisableLocalVideo2 = conn2.setDisableLocalVideo;
              tmp18 = conn2;
              tmp17 = setDisableLocalVideo2;
              if (null != setDisableLocalVideo2) {
                let callResult1 = setDisableLocalVideo2.call(conn2, first, true);
                tmp17 = setDisableLocalVideo2;
                tmp18 = conn2;
              }
            }
          }
          num = num + 1;
          let tmp3 = tmp17;
          let tmp4 = tmp18;
          let tmp = tmp14;
          let tmp2 = tmp15;
        } while (num < entries.length);
      }
      self.localVideoSinkWants = localVideoSinkWants;
    }
  };
  items[63] = {
    key: "startSamplesLocalPlayback",
    value(arg0, numberOfChannels, volume) {
      const self = this;
      if (numberOfChannels.numberOfChannels > 2) {
        arg3(2, "Too many channels");
      } else if (null != self.conn.startSamplesLocalPlayback) {
        const items = [];
        let num2 = 0;
        if (0 < numberOfChannels.numberOfChannels) {
          do {
            let arr = items.push(numberOfChannels.getChannelData(num2));
            num2 = num2 + 1;
            numberOfChannels = numberOfChannels.numberOfChannels;
          } while (num2 < numberOfChannels);
        }
        const conn = self.conn;
        const obj = { sampleRate: numberOfChannels.sampleRate, volume };
        const result = conn.startSamplesLocalPlayback(arg0, obj, items, arg3);
      } else {
        arg3(3, "Not supported");
      }
    }
  };
  items[64] = {
    key: "stopAllSamplesLocalPlayback",
    value() {
      const conn = this.conn;
      const result = conn.stopAllSamplesLocalPlayback();
    }
  };
  items[65] = {
    key: "stopSamplesLocalPlayback",
    value(arg0) {
      const conn = this.conn;
      const stopSamplesLocalPlayback = conn.stopSamplesLocalPlayback;
      if (null != stopSamplesLocalPlayback) {
        stopSamplesLocalPlayback.call(conn, arg0);
      }
    }
  };
  items[66] = {
    key: "setBandwidthEstimationExperiments",
    value(bandwidthEstimationExperiments) {
      const conn = this.conn;
      conn.setTransportOptions({ bandwidthEstimationExperiments });
    }
  };
  items[67] = {
    key: "updateVideoQualityCore",
    value(arg0) {
      const self = this;
      if (this.videoSupported) {
        if (!self.destroyed) {
          const conn = self.conn;
          conn.setTransportOptions(arg0);
        }
      }
    }
  };
  items[68] = {
    key: "setStreamParameters",
    value(arg0) {
      const Connection = this;
      const self = this;
      return new Promise((arg0, arg1) => {
        const self = arg1;
        function _loop(value) {
          const arg1 = value;
          const findIndexResult = lib.findIndex((rid) => rid.rid === rid.rid);
          if (-1 === findIndexResult) {
            const _Error = Error;
            const error = new Error("Invalid rid");
            arg1(error);
            let obj = { v: undefined };
            return obj;
          } else {
            const items = [];
            if (!lib(closure_2[19])(closure_2.videoStreamParameters[findIndexResult], lib[findIndexResult])) {
              obj = {};
              const merged = Object.assign(lib[findIndexResult]);
              closure_2.videoStreamParameters[findIndexResult] = obj;
              obj = {};
              const merged1 = Object.assign(lib[findIndexResult]);
              items.push(obj);
            }
            const conn = closure_2.conn;
            const obj1 = { streamParameters: items };
            conn.setTransportOptions(obj1);
          }
        }
        const tmp = callback(self.videoStreamParameters);
        const iter = tmp();
        let iter2 = iter;
        if (!iter.done) {
          const _loopResult = _loop(iter2.value);
          while (!_loopResult) {
            let iter3 = tmp();
            iter2 = iter3;
          }
          return _loopResult.v;
        }
        arg0();
      });
    }
  };
  items[69] = {
    key: "applyVideoTransportOptions",
    value() {
      let self = this;
      if (this.videoSupported) {
        let flag = false;
        if (self.hasDesktopSource()) {
          flag = false;
          if (self.videoStreamParameters.length > 0) {
            const maxResolution = self.videoStreamParameters[0].maxResolution;
            let type;
            if (null != maxResolution) {
              type = maxResolution.type;
            }
            flag = type === constants6.SOURCE;
          }
        }
        const conn = self.conn;
        const obj = {};
        if (!self.hasDesktopSource()) {
          obj.encodingVideoDegradationPreference = self.videoDegradationPreference;
          conn.setTransportOptions(self.applyQualityConstraints(obj).constraints);
          const conn2 = self.conn;
          self = conn2.setVideoBroadcast(self.selfVideo);
        }
      }
    }
  };
  items[70] = {
    key: "chooseEncryptionMode",
    value(arg0, arg1) {
      const tmp = callback5(arg1);
      let iter = tmp();
      if (!iter.done) {
        while (true) {
          let value = iter.value;
          let tmp2 = callback5;
          let tmp3 = callback5(arg0);
          let iter2 = tmp3();
          if (!iter2.done) {
            while (value !== iter2.value) {
              let iter3 = tmp3();
              iter2 = iter3;
              continue;
            }
            return value;
          }
          let iter4 = tmp();
          iter = iter4;
        }
      }
      return "xsalsa20_poly1305";
    }
  };
  items[71] = {
    key: "getUserOptions",
    value() {
      const Connection = this;
      const keys = Object.keys(this.remoteAudioSSRCs);
      return keys.map((id) => {
        let num = 0;
        if (undefined !== self.remoteVideoSSRCs[id]) {
          num = 0;
          if (self.remoteVideoSSRCs[id].length > 0) {
            num = self.remoteVideoSSRCs[id][0];
          }
        }
        const obj = { id, ssrc: self.remoteAudioSSRCs[id], videoSsrc: num, videoSsrcs: self.remoteVideoSSRCs[id], rtxSsrc: callback(num), mute: self.getLocalMute(id), volume: self.getLocalVolume(id) };
        return obj;
      });
    }
  };
  items[72] = {
    key: "createInputModeOptions",
    value() {
      const self = this;
      const inputMode = this.inputMode;
      if (constants2.VOICE_ACTIVITY === inputMode) {
        let obj = { vadThreshold: self.vadThreshold };
        const VADAggressiveness = Connection(closure_2[21]).VADAggressiveness;
        obj.vadAutoThreshold = self.vadAutoThreshold ? VADAggressiveness.VERY_AGGRESSIVE : VADAggressiveness.DISABLED;
        ({ vadUseKrisp: obj2.vadUseKrisp, vadLeading: obj2.vadLeading, vadTrailing: obj2.vadTrailing, vadKrispActivationThreshold: obj2.vadKrispActivationThreshold, vadDuringPreProcess: obj2.vadDuringPreProcess } = self);
        return obj;
      } else if (constants2.PUSH_TO_TALK === inputMode) {
        obj = { pttReleaseDelay: self.pttReleaseDelay };
        return obj;
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unknown Input Mode: " + self.inputMode);
        throw error;
      }
    }
  };
  items[73] = {
    key: "getAttenuationOptions",
    value() {
      return { attenuation: this.isAttenuating(), attenuationFactor: this.attenuationFactor, attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers };
    }
  };
  items[74] = {
    key: "getCodecParams",
    value(arg0, arg1) {
      if (arg0 !== H264.H264) {
        let obj = {};
      } else if (arg1) {
        obj = { <string:3265237211>: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015477536680499737, <string:3286877673>: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009856391782343336, <string:4125721065>: 1332802452015095000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      } else {
        obj = { 760052231: "window", -1617896628: "jsxs" };
        let str = "4d0033";
        if ("android" === obj2.getVoiceEngine().platform) {
          str = "42e01f";
        }
        obj.profile-level-id = str;
        const obj2 = Connection(closure_2[9]);
      }
      return obj;
    }
  };
  items[75] = {
    key: "getCodecOptions",
    value(name) {
      let iter3;
      const self = this;
      const Connection = name;
      const codecs = this.codecs;
      const found = codecs.find((name) => name.name === name);
      let obj = {};
      let payloadType;
      if (null != found) {
        payloadType = found.payloadType;
      }
      let num = 0;
      if (null != payloadType) {
        num = payloadType;
      }
      obj.type = num;
      obj.name = name;
      const codecs1 = self.codecs;
      const found1 = codecs1.filter((type) => "audio" === type.type);
      const mapped = found1.map((payloadType) => {
        const obj = {};
        payloadType = undefined;
        if (null != payloadType) {
          payloadType = payloadType.payloadType;
        }
        let num = 0;
        if (null != payloadType) {
          num = payloadType;
        }
        obj.type = num;
        obj.name = payloadType.name;
        obj.freq = 48000;
        obj.channels = 2;
        obj.params = { stereo: "1" };
        return obj;
      });
      if (arg2 === constants4.STREAM) {
        obj.channels = 2;
      }
      const items = [];
      obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, params: {} };
      const tmp4 = callback5(self.codecs);
      const iter = tmp4();
      let iter2 = iter;
      let tmp5 = obj;
      let tmp7 = obj;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp8 = tmp5;
          let tmp9 = tmp6;
          if (value.name !== name) {
            obj = {};
            let tmp39 = closure_0;
            let tmp40 = closure_2;
            let obj6 = closure_0(closure_2[15]);
            obj.name = obj6.codecNameToPayloadName(value.name);
            let payloadType1;
            if (null != value) {
              payloadType1 = value.payloadType;
            }
            let num3 = 0;
            if (null != payloadType1) {
              num3 = payloadType1;
            }
            obj.type = num3;
            let rtxPayloadType;
            if (null != value) {
              rtxPayloadType = value.rtxPayloadType;
            }
            let num4 = 0;
            if (null != rtxPayloadType) {
              num4 = rtxPayloadType;
            }
            obj.rtxType = num4;
            obj.params = self.getCodecParams(value.name, true);
            let experimentFlags = self.experimentFlags;
            let tmp12 = closure_11;
            if (experimentFlags.has(closure_11.RESET_DECODER_ON_ERRORS)) {
              obj.params.reset-on-errors = "1";
            }
            let experimentFlags2 = self.experimentFlags;
            let tmp13 = closure_11;
            if (experimentFlags2.has(closure_11.SOFTWARE_FALLBACK_ON_ERRORS)) {
              obj.params.fallback-after-errors = "3";
            }
            let experimentFlags3 = self.experimentFlags;
            let tmp14 = closure_11;
            if (experimentFlags3.has(closure_11.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS)) {
              obj.params.fallback-on-consecutive-errors = "1";
            }
            let experimentFlags4 = self.experimentFlags;
            let tmp15 = closure_11;
            if (experimentFlags4.has(closure_11.SIGNAL_AV1_HARDWARE_DECODE)) {
              obj.params.hardware-av1-decode = "1";
            }
            name = obj.name;
            obj.params.hardware-h264 = "1";
            let experimentFlags5 = self.experimentFlags;
            let tmp16 = closure_11;
            if (experimentFlags5.has(closure_11.USE_LIBOPENH264_DECODER)) {
              let tmp17 = closure_0;
              let tmp18 = closure_2;
              let obj2 = closure_0(closure_2[9]);
              let openH264LibraryPath = obj2.getOpenH264LibraryPath();
              let tmp6 = openH264LibraryPath;
              if (null != openH264LibraryPath) {
                obj.params.libopenh264 = "1";
                obj.params.libopenh264-path = openH264LibraryPath;
                tmp6 = openH264LibraryPath;
              }
            }
            let arr = items.push(obj);
            tmp8 = tmp5;
            let tmp21 = payloadType1;
            let tmp22 = value;
            let tmp23 = rtxPayloadType;
            let tmp24 = value;
            let tmp25 = obj;
            tmp9 = tmp6;
            if (value.name === arg1) {
              let obj1 = {};
              let tmp41 = obj1;
              let tmp42 = obj;
              let merged = Object.assign(obj);
              obj1["params"] = self.getCodecParams(value.name, false);
              let experimentFlags9 = self.experimentFlags;
              let tmp44 = closure_11;
              if (experimentFlags9.has(closure_11.VIDEOTOOLBOX_RATE_CONTROL)) {
                obj1.params.fixed-rate-presentation-timestamps = "1";
              }
              let experimentFlags6 = self.experimentFlags;
              let tmp26 = closure_11;
              if (experimentFlags6.has(closure_11.LOW_LATENCY_RATE_CONTROL)) {
                obj1.params.low-latency-rate-control = "1";
              }
              let experimentFlags7 = self.experimentFlags;
              let tmp27 = closure_11;
              if (experimentFlags7.has(closure_11.WMF_GPU_ENCODE)) {
                obj1.params.wmf-gpu = "1";
              }
              let experimentFlags8 = self.experimentFlags;
              let tmp28 = closure_11;
              tmp8 = obj1;
              let tmp29 = payloadType1;
              let tmp30 = value;
              let tmp31 = rtxPayloadType;
              let tmp32 = value;
              let tmp33 = obj;
              tmp9 = tmp6;
              if (experimentFlags8.has(closure_11.INTEL_GPU_DISABLE)) {
                obj1.params.intel-gpu = "0";
                tmp8 = obj1;
                let tmp34 = payloadType1;
                let tmp35 = value;
                let tmp36 = rtxPayloadType;
                let tmp37 = value;
                let tmp38 = obj;
                tmp9 = tmp6;
              }
            }
          }
          iter3 = tmp4();
          tmp5 = tmp8;
          tmp6 = tmp9;
          iter2 = iter3;
          tmp7 = tmp8;
        } while (!iter3.done);
      }
      obj2 = { videoEncoder: tmp7, videoDecoders: items, audioEncoder: obj, audioDecoders: mapped };
      return obj2;
    }
  };
  items[76] = {
    key: "getKeyFrameInterval",
    value() {
      const self = this;
      if (this.keyframeInterval > 0) {
        if (self.clipsKeyFrameInterval > 0) {
          const _Math = Math;
          let bound = Math.min(self.keyframeInterval, self.clipsKeyFrameInterval);
        }
        return bound;
      }
      bound = Math.max(self.keyframeInterval, self.clipsKeyFrameInterval);
    }
  };
  items[77] = {
    key: "getConnectionTransportOptions",
    value() {
      const obj = { selfMute: this.selfMute, inputMode: closure_17[this.inputMode], inputModeOptions: this.createInputModeOptions(), minimumJitterBufferLevel: this.minimumJitterBufferLevel, postponeDecodeLevel: this.postponeDecodeLevel };
      const merged = Object.assign(this.getAttenuationOptions());
      obj["fec"] = true;
      obj["packetLossRate"] = 0.3;
      obj["qos"] = this.qos;
      obj["prioritySpeakerDucking"] = closure_32;
      obj["encodingVoiceBitRate"] = this.voiceBitrate;
      obj["callBitRate"] = closure_29;
      obj["callMinBitRate"] = closure_30;
      obj["callMaxBitRate"] = closure_31;
      obj["encodingVideoDegradationPreference"] = this.videoDegradationPreference;
      obj["reconnectInterval"] = this.reconnectInterval;
      let supportsFeatureResult = Connection(closure_2[9]).supportsFeature(constants7.VIDEO_EFFECTS);
      if (supportsFeatureResult) {
        supportsFeatureResult = this.context === constants4.STREAM;
      }
      if (supportsFeatureResult) {
        obj.enableVideoEffects = true;
      }
      return obj;
    }
  };
  items[78] = {
    key: "setStream",
    value() {
      const error = new Error("Method not implemented.");
      throw error;
    }
  };
  items[79] = {
    key: "getUserIdBySsrc",
    value() {

    }
  };
  items[80] = {
    key: "prepareSecureFramesTransition",
    value(lastPreparedTransitionId) {
      const self = this;
      if (0 === lastPreparedTransitionId) {
        self.lastExecutedTransitionId = -1;
        self.lastPreparedTransitionId = -1;
      }
      self.lastPreparedTransitionId = lastPreparedTransitionId;
      const conn = self.conn;
      const prepareSecureFramesTransition = conn.prepareSecureFramesTransition;
      if (null != prepareSecureFramesTransition) {
        prepareSecureFramesTransition.call(conn, lastPreparedTransitionId, arg1, arg2);
      }
    }
  };
  items[81] = {
    key: "prepareSecureFramesEpoch",
    value(arg0, arg1, arg2) {
      const conn = this.conn;
      const prepareSecureFramesEpoch = conn.prepareSecureFramesEpoch;
      if (null != prepareSecureFramesEpoch) {
        prepareSecureFramesEpoch.call(conn, arg0, arg1, arg2);
      }
    }
  };
  items[82] = {
    key: "executeSecureFramesTransition",
    value(lastExecutedTransitionId) {
      const self = this;
      if (-1 !== this.lastExecutedTransitionId) {
        if (-1 !== self.lastPreparedTransitionId) {
          if (self.lastPreparedTransitionId >= self.lastExecutedTransitionId) {
            let tmp = lastExecutedTransitionId > self.lastExecutedTransitionId && lastExecutedTransitionId <= self.lastPreparedTransitionId;
            const tmp2 = lastExecutedTransitionId > self.lastExecutedTransitionId && lastExecutedTransitionId <= self.lastPreparedTransitionId;
          } else {
            tmp = lastExecutedTransitionId > self.lastExecutedTransitionId || lastExecutedTransitionId <= self.lastPreparedTransitionId;
          }
          if (!tmp) {
            const _HermesInternal = HermesInternal;
            const combined = "Skipping invalid transition " + lastExecutedTransitionId + " outside of range (" + self.lastExecutedTransitionId + "-" + self.lastPreparedTransitionId + "]";
            const logger = self.logger;
            logger.warn(combined);
            const _Error = Error;
            const error = new Error(combined);
            throw error;
          }
        }
      }
      self.lastExecutedTransitionId = lastExecutedTransitionId;
      const conn = self.conn;
      const executeSecureFramesTransition = conn.executeSecureFramesTransition;
      if (null != executeSecureFramesTransition) {
        executeSecureFramesTransition.call(conn, lastExecutedTransitionId);
      }
    }
  };
  items[83] = {
    key: "getMLSKeyPackage",
    value(arg0) {
      const conn = this.conn;
      const getMLSKeyPackage = conn.getMLSKeyPackage;
      if (null != getMLSKeyPackage) {
        getMLSKeyPackage.call(conn, arg0);
      }
    }
  };
  items[84] = {
    key: "updateMLSExternalSender",
    value(arg0) {
      const conn = this.conn;
      const updateMLSExternalSender = conn.updateMLSExternalSender;
      if (null != updateMLSExternalSender) {
        updateMLSExternalSender.call(conn, arg0);
      }
    }
  };
  items[85] = {
    key: "processMLSProposals",
    value(arg0, arg1) {
      const conn = this.conn;
      const processMLSProposals = conn.processMLSProposals;
      if (null != processMLSProposals) {
        processMLSProposals.call(conn, arg0, arg1);
      }
    }
  };
  items[86] = {
    key: "prepareMLSCommitTransition",
    value(lastPreparedTransitionId) {
      this.lastPreparedTransitionId = lastPreparedTransitionId;
      const conn = this.conn;
      const prepareMLSCommitTransition = conn.prepareMLSCommitTransition;
      if (null != prepareMLSCommitTransition) {
        prepareMLSCommitTransition.call(conn, lastPreparedTransitionId, arg1, arg2);
      }
    }
  };
  items[87] = {
    key: "processMLSWelcome",
    value(lastPreparedTransitionId) {
      this.lastPreparedTransitionId = lastPreparedTransitionId;
      const conn = this.conn;
      const processMLSWelcome = conn.processMLSWelcome;
      if (null != processMLSWelcome) {
        processMLSWelcome.call(conn, lastPreparedTransitionId, arg1, arg2);
      }
    }
  };
  items[88] = {
    key: "getMLSPairwiseFingerprint",
    value(arg0, arg1, arg2) {
      const conn = this.conn;
      const getMLSPairwiseFingerprint = conn.getMLSPairwiseFingerprint;
      if (null != getMLSPairwiseFingerprint) {
        getMLSPairwiseFingerprint.call(conn, arg0, arg1, arg2);
      }
    }
  };
  items[89] = {
    key: "presentDesktopSourcePicker",
    value(arg0) {
      const conn = this.conn;
      const presentDesktopSourcePicker = conn.presentDesktopSourcePicker;
      if (null != presentDesktopSourcePicker) {
        presentDesktopSourcePicker.call(conn, arg0);
      }
    }
  };
  items[90] = {
    key: "mergeUsers",
    value(arg0) {
      const conn = this.conn;
      conn.mergeUsers(arg0);
      this.emit(Connection(closure_2[10]).BaseConnectionEvent.UsersMerged, arg0);
    }
  };
  const items1 = [
    {
      key: "create",
      value(arg0, 0) {
        const obj = new Connection(arg0, _0, true);
        obj.initialize(arg2);
        return obj;
      }
    },
    {
      key: "createReplay",
      value(arg0, arg1) {
        const Connection = arg0;
        let obj = new Connection(arg0, "0", true);
        const voiceEngine = Connection(voiceEngine[9]).getVoiceEngine();
        obj = { type: constants.VIDEO };
        const items = [obj];
        const result = obj.initializeStreamParameters(items);
        const replayConnection = voiceEngine.createReplayConnection("default", () => {
          obj.on(arg0(voiceEngine[10]).BaseConnectionEvent.Stats, obj.handleStats);
          const conn = obj.conn;
          conn.setOnVideoCallback(obj.handleVideo);
          const codecCapabilities = voiceEngine.getCodecCapabilities((arg0) => {
            let obj = callback(closure_2[15]);
            obj = { name: closure_20.OPUS, url: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001629692767967816, accessibilityRole: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000335974904401433, source: -1637694678900018700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
            const items = [obj];
            const experimentCodecs = obj.getExperimentCodecs(codecs.experimentFlags);
            const obj3 = callback(closure_2[15]);
            HermesBuiltin.arraySpread(callback(closure_2[15]).filterVideoCodecs(arg0, experimentCodecs).map((name) => {
              const sum = 101 + 2 * arg1;
              return { type: "video", name: name.name, priority: arg1 + 1, payloadType: sum, rtxPayloadType: sum + 1, encode: name.encode, decode: name.decode };
            }), 1);
            codecs.codecs = items;
            codecs.setCodecs(closure_20.OPUS, closure_20.H264, callback);
            const conn = codecs.conn;
            conn.startReplay();
          });
        }, arg1);
        let tmp3 = null;
        if (null != replayConnection) {
          obj.conn = replayConnection;
          tmp3 = obj;
        }
        return tmp3;
      }
    }
  ];
  return callback(Connection, items, items1);
}(importDefault(dependencyMap[22]));
const result = arg1(dependencyMap[23]).fileFinishedImporting("../discord_common/js/packages/media-engine/native/Connection.tsx");

export default tmp4;
