// Module ID: 4215
// Function ID: 36731
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4215 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const getSystemAnalyticsInfo = arg1(dependencyMap[7]).getSystemAnalyticsInfo;
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
({ AnalyticEvents: closure_19, MediaEngineHookTypes: closure_20, RTCConnectionStates: closure_21 } = arg1(dependencyMap[16]));
const MediaEngineContextTypes = arg1(dependencyMap[17]).MediaEngineContextTypes;
let closure_23 = 5 * importDefault(dependencyMap[18]).Millis.SECOND;
let closure_24 = { DETACHED: 0, [0]: "DETACHED", WAITING: 1, [1]: "WAITING", ATTACHED: 2, [2]: "ATTACHED", STARTED: 3, [3]: "STARTED", PLAYING: 4, [4]: "PLAYING", SILENCE: 5, [5]: "SILENCE" };
const tmp2 = arg1(dependencyMap[16]);
const tmp3 = () => {
  class StreamRTCAnalyticsContext {
    constructor(arg0) {
      ({ streamApplication, numViewers, analyticsLocations } = arg0);
      ({ streamRegion, streamSourceType, actionContext, goLiveModalDurationMs } = arg0);
      tmp = closure_7(this, StreamRTCAnalyticsContext);
      this.streamRegion = streamRegion;
      this.streamApplication = streamApplication;
      items = [];
      items[0] = streamApplication;
      this.streamApplicationHistory = items;
      this.streamSourceType = streamSourceType;
      this.actionContext = actionContext;
      this.maxViewers = numViewers;
      this.goLiveModalDurationMs = goLiveModalDurationMs;
      this.numViewers = numViewers;
      if (null == analyticsLocations) {
        analyticsLocations = [];
      }
      this.analyticsLocations = analyticsLocations;
      return;
    }
  }
  const arg1 = StreamRTCAnalyticsContext;
  let obj = {
    key: "setActionContext",
    value(actionContext) {
      this.actionContext = actionContext;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "updateStreamApplication",
    value(streamApplication) {
      this.streamApplication = streamApplication;
      const items = [...this.streamApplicationHistory, streamApplication];
      this.streamApplicationHistory = items;
    }
  };
  items[1] = obj;
  obj = {
    key: "setAnalyticsLocations",
    value(analyticsLocations) {
      this.analyticsLocations = analyticsLocations;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "trackViewerCount",
    value(numViewers) {
      this.maxViewers = Math.max(numViewers, this.maxViewers);
      this.numViewers = numViewers;
    }
  };
  items[4] = {
    key: "setNativePickerStyleUsed",
    value(nativePickerStyleUsed) {
      this.nativePickerStyleUsed = nativePickerStyleUsed;
    }
  };
  items[5] = {
    key: "trackStart",
    value() {
      this.startTime = performance.now();
    }
  };
  items[6] = {
    key: "trackEnd",
    value() {
      this.endTime = performance.now();
    }
  };
  items[7] = {
    key: "getStreamApplicationFromHistory",
    value(arg0) {
      return this.streamApplicationHistory[arg0];
    }
  };
  items[8] = {
    key: "getDuration",
    value() {
      const self = this;
      if (null == this.startTime) {
        return null;
      } else {
        const _performance = performance;
        let nowResult = performance.now();
        const endTime = self.endTime;
        if (null != endTime) {
          nowResult = endTime;
        }
        return nowResult - self.startTime;
      }
    }
  };
  return callback2(StreamRTCAnalyticsContext, items);
}();
const tmp4 = (arg0) => {
  class StreamRTCConnection {
    constructor(arg0) {
      self = this;
      ({ streamKey, initialLayout } = arg0);
      ({ sessionId, serverId, analyticsContext, parentMediaSessionId, channelId } = arg0);
      tmp = closure_7(this, StreamRTCConnection);
      tmp3 = closure_2;
      tmp2 = StreamRTCConnection;
      obj = StreamRTCConnection(closure_2[19]);
      decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
      obj = { userId: closure_12.getId(), sessionId, guildId, channelId: channelId2, context: closure_22.STREAM, streamServerId: serverId, streamChannelId: channelId, parentMediaSessionId, joinVoiceId: null };
      ({ guildId, channelId: channelId2 } = decodeStreamKeyResult);
      items = [];
      items[0] = obj;
      obj3 = closure_4(StreamRTCConnection);
      tmp5 = closure_3;
      if (closure_25()) {
        tmp7 = globalThis;
        _Reflect = Reflect;
        tmp8 = closure_4;
        constructResult = Reflect.construct(obj3, items, closure_4(self).constructor);
      } else {
        constructResult = obj3.apply(self, items);
      }
      tmp5Result = tmp5(self, constructResult);
      StreamRTCConnection = tmp5Result;
      tmp9 = closure_1(tmp3[20]);
      tmp9 = new tmp9();
      tmp5Result.soundshareStats = tmp9;
      tmp5Result._firstFrameDelivered = false;
      tmp5Result.screenshareFinishedCount = 0;
      tmp5Result.soundshareFailuresReported = {};
      timeout = new tmp2(tmp3[21]).Timeout();
      tmp5Result.errorTimer = timeout;
      tmp5Result.streamContext = decodeStreamKeyResult;
      tmp5Result.streamKey = streamKey;
      tmp12 = closure_1(tmp3[22]);
      tmp12 = new tmp12(initialLayout, tmp5Result.isOwner);
      tmp5Result.videoStreamStats = tmp12;
      tmp5Result.analyticsContext = analyticsContext;
      obj5 = closure_1(tmp3[23]);
      tmp5Result.updateVideoStreamId = obj5.debounce((streamId, rtcServerId) => {
        let channelId;
        let guildId;
        let ownerId;
        let obj = tmp5Result(closure_2[19]);
        ({ guildId, channelId, ownerId } = obj.decodeStreamKey(tmp5Result.streamKey));
        const decodeStreamKeyResult = obj.decodeStreamKey(tmp5Result.streamKey);
        obj = { type: "RTC_CONNECTION_VIDEO", guildId, channelId, userId: ownerId, streamId, rtcServerId, mediaEngineConnectionId: tmp5Result.getMediaEngineConnectionId(), context: constants.STREAM };
        callback(closure_2[24]).dispatch(obj);
      }, 200);
      videoStreamStats = tmp5Result.videoStreamStats;
      startResult = videoStreamStats.start();
      initializeEventsResult = tmp5Result.initializeEvents();
      return tmp5Result;
    }
  }
  const arg1 = StreamRTCConnection;
  callback(StreamRTCConnection, arg0);
  let obj = {
    key: "isOwner",
    get() {
      return store.getId() === this.streamContext.ownerId;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "destroy",
    value(arg0) {
      const videoStreamStats = this.videoStreamStats;
      videoStreamStats.stop();
      this.trackVideoEndStats(arg0);
      const updateVideoStreamId = this.updateVideoStreamId;
      updateVideoStreamId.cancel();
      this.updateVideoStreamId(null, null);
      const updateVideoStreamId2 = this.updateVideoStreamId;
      updateVideoStreamId2.flush();
      const errorTimer = this.errorTimer;
      errorTimer.stop();
      function _superPropGet(StreamRTCConnection, destroy, arg2, arg3) {
        let prototype = StreamRTCConnection;
        if (1) {
          prototype = StreamRTCConnection.prototype;
        }
        const tmpResult = closure_5(closure_4(prototype), "destroy", arg2);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(StreamRTCConnection, "destroy", this, 3)([]);
    }
  };
  items[1] = obj;
  obj = {
    key: "streamUpdate",
    value(arg0) {
      const _videoQuality = this._videoQuality;
      if (null != _videoQuality) {
        if (arg0) {
          _videoQuality.pause();
        } else {
          _videoQuality.resume();
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "layoutChange",
    value(arg0) {
      const videoStreamStats = this.videoStreamStats;
      videoStreamStats.layoutChange(arg0);
    }
  };
  items[4] = {
    key: "autoQualityChange",
    value() {
      const videoStreamStats = this.videoStreamStats;
      videoStreamStats.autoQualityChange();
    }
  };
  items[5] = {
    key: "getVideoStats",
    value() {
      const _videoQuality = this._videoQuality;
      if (null != _videoQuality) {
        if (this.isOwner) {
          let first = _videoQuality.getOutboundStats()[0];
          if (null == first) {
            first = {};
          }
          let inboundStats = first;
        } else {
          inboundStats = _videoQuality.getInboundStats(tmp);
          if (null == inboundStats) {
            inboundStats = {};
          }
        }
        ({ duration: obj3.duration, avg_bitrate: obj3.avg_bitrate, avg_fps: obj3.avg_fps, avg_resolution: obj3.avg_resolution, inbound_bitrate_estimate_percentile99: obj3.inbound_bitrate_estimate_percentile99 } = inboundStats);
        return {};
      } else {
        return null;
      }
    }
  };
  items[6] = {
    key: "getRegion",
    value() {
      return this.analyticsContext.streamRegion;
    }
  };
  items[7] = {
    key: "getMaxViewers",
    value() {
      return this.analyticsContext.maxViewers;
    }
  };
  items[8] = {
    key: "getVoiceParticipantType",
    value() {
      let str = "receiver";
      if (this.isOwner) {
        str = "streamer";
      }
      return str;
    }
  };
  items[9] = {
    key: "initializeEvents",
    value() {
      const StreamRTCConnection = this;
      let closure_1 = false;
      this.on(StreamRTCConnection(closure_2[25]).RTCConnectionEvent.State, (state) => {
        let obj = callback(closure_2[24]);
        obj = { type: "RTC_CONNECTION_STATE", state };
        const merged = Object.assign(arg1);
        const merged1 = Object.assign(arg2);
        obj["streamKey"] = self.streamKey;
        obj.dispatch(obj);
        if (state === constants.RTC_CONNECTED) {
          const _connection8 = self._connection;
          if (null != _connection8) {
            _connection8.on(self(closure_2[26]).BaseConnectionEvent.ScreenshareFinish, (self) => {
              const analyticsContext = self.analyticsContext;
              self.screenshareFinishedCount = self.screenshareFinishedCount + 1;
              const streamApplicationFromHistory = analyticsContext.getStreamApplicationFromHistory(self.screenshareFinishedCount);
              const runningGameAnalytics = self(arg2[27]).getRunningGameAnalytics(streamApplicationFromHistory);
              ({ gameName: closure_26, gameId: closure_27, exe: closure_28, distributor: closure_29 } = runningGameAnalytics);
              const mediaSessionId = self.getMediaSessionId();
              const rTCConnectionId = self.getRTCConnectionId();
              let num = 0;
              if (null != arg9) {
                num = arg9;
              }
              let num2 = 0;
              if (null != arg10) {
                num2 = arg10;
              }
              let num3 = 0;
              const sum = num + num2;
              if (null != arg11) {
                num3 = arg11;
              }
              let num4 = 0;
              const sum1 = sum + num3;
              if (null != arg12) {
                num4 = arg12;
              }
              let num5 = 0;
              const sum2 = sum1 + num4;
              if (null != arg13) {
                num5 = arg13;
              }
              let closure_32 = sum2 + num5;
              const obj = self(arg2[27]);
              arg10().then((self) => {
                let tmp = null;
                if (null != self) {
                  let obj = {};
                  ({ cpu_brand: obj.cpu_brand, cpu_vendor: obj.cpu_vendor, cpu_memory: obj.cpu_memory, gpu_brand: obj.gpu_brand, gpu_memory: obj.gpu_memory } = self);
                  tmp = obj;
                }
                let num = 0;
                if (null != self) {
                  num = self;
                }
                let num2 = 0;
                if (null != arg1) {
                  num2 = arg1;
                }
                let num3 = 0;
                const sum = num + num2;
                if (null != arg2) {
                  num3 = arg2;
                }
                let num4 = 0;
                const sum1 = sum + num3;
                if (null != arg3) {
                  num4 = arg3;
                }
                let num5 = 0;
                const sum2 = sum1 + num4;
                if (null != arg4) {
                  num5 = arg4;
                }
                let num6 = 0;
                const sum3 = sum2 + num5;
                if (null != arg5) {
                  num6 = arg5;
                }
                let num7 = 0;
                const sum4 = sum3 + num6;
                if (null != arg15) {
                  num7 = arg15;
                }
                let num8 = 0;
                const sum5 = sum4 + num7;
                if (null != arg19) {
                  num8 = arg19;
                }
                let num9 = 0;
                const sum6 = sum5 + num8;
                if (null != arg18) {
                  num9 = arg18;
                }
                let num10 = 0;
                const sum7 = sum6 + num9;
                if (null != arg24) {
                  num10 = arg24;
                }
                let num11 = 0;
                const sum8 = sum7 + num10;
                if (null != arg23) {
                  num11 = arg23;
                }
                const sum9 = sum8 + num11;
                obj = { screenshare_frames: self, videohook_frames: arg1, hybrid_dxgi_frames: arg2, hybrid_gdi_frames: arg3, hybrid_videohook_frames: arg4, hybrid_graphics_capture_frames: arg5, hybrid_capture_method_switches: arg6, hybrid_gdi_bitblt_frames: arg7, hybrid_gdi_printwindow_frames: arg8, hybrid_graphics_capture_frames_unique: arg9, hybrid_dxgi_frames_unique: arg10, hybrid_videohook_frames_unique: arg11, hybrid_gdi_bitblt_frames_unique: arg12, hybrid_gdi_printwindow_frames_unique: arg13, skip_history_json: arg14, quartz_frames: arg15, screencapturekit_frames: arg19, go_live_camera_frames: arg18, total_frames: sum9, total_frames_unique: closure_32, desktop_capturer_type: arg16, media_session_id: closure_30, rtc_connection_id: closure_31, context: arg22.STREAM, activity: arg17, soundshare_session: soundshareStats.getStats().soundshare_last_session };
                const soundshareStats = self.soundshareStats;
                let str = "internal";
                if (null != self.analyticsContext.nativePickerStyleUsed) {
                  str = "native";
                }
                obj.picker_type_used = str;
                const analyticsContext = self.analyticsContext;
                obj.duration = analyticsContext.getDuration();
                obj.share_game_name = closure_26;
                obj.share_game_id = closure_27;
                obj.share_game_exe = closure_28;
                obj.share_game_distributor = closure_29;
                obj.hdr_frames_capable = arg20;
                obj.hdr_frames = arg21;
                const obj2 = arg1(arg2[28]);
                obj.discord_is_elevated = arg1(arg2[29]).getDiscordIsElevated();
                obj.target_window_elevated = arg22;
                obj.pipewire_frames = arg23;
                obj.x11_frames = arg24;
                obj.videohook_backend = arg25;
                const merged = Object.assign(tmp);
                obj2.track(arg19.SCREENSHARE_FINISHED, obj);
              });
            });
          }
          const _connection = self._connection;
          if (null != _connection) {
            _connection.on(self(closure_2[26]).BaseConnectionEvent.SoundshareAttached, () => {
              const goLiveSource = store2.getGoLiveSource();
              let desktopSource;
              if (null != goLiveSource) {
                desktopSource = goLiveSource.desktopSource;
              }
              if (null != desktopSource) {
                let obj = callback(closure_2[28]);
                obj = {};
                let desktopSource1;
                if (null != goLiveSource) {
                  desktopSource1 = goLiveSource.desktopSource;
                }
                const merged = Object.assign(callback(closure_2[30])(desktopSource1));
                const merged1 = Object.assign(store.getSoundshareAnalyticsProperties());
                obj.track(constants.SOUNDSHARE_ATTACHED, obj);
                const tmp6 = callback(closure_2[30]);
              }
            });
          }
          const _connection2 = self._connection;
          if (null != _connection2) {
            _connection2.on(self(closure_2[26]).BaseConnectionEvent.SoundshareFailed, (arg0) => {
              let failureCode;
              let failureReason;
              let willRetry;
              ({ failureCode, failureReason, willRetry } = arg0);
              const goLiveSource = store2.getGoLiveSource();
              let desktopSource;
              if (null != goLiveSource) {
                desktopSource = goLiveSource.desktopSource;
              }
              const result = store.reportSoundshareFailure(desktopSource, failureCode, failureReason, willRetry);
            });
          }
          const _connection3 = self._connection;
          if (null != _connection3) {
            _connection3.on(self(closure_2[26]).BaseConnectionEvent.SoundshareSpeaking, () => {
              const goLiveSource = store2.getGoLiveSource();
              let desktopSource;
              if (null != goLiveSource) {
                desktopSource = goLiveSource.desktopSource;
              }
              if (null != desktopSource) {
                let obj = {};
                let desktopSource1;
                const obj3 = callback(closure_2[28]);
                if (null != goLiveSource) {
                  desktopSource1 = goLiveSource.desktopSource;
                }
                const merged = Object.assign(callback(closure_2[30])(desktopSource1));
                const merged1 = Object.assign(store.getSoundshareAnalyticsProperties());
                obj3.track(constants.SOUNDSHARE_TRANSMITTING, obj);
                if (null != hookError.getHookError(constants2.SOUND)) {
                  obj = callback(closure_2[24]);
                  obj = { type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" };
                  obj.dispatch(obj);
                }
                const tmp18 = callback(closure_2[30]);
              }
            });
          }
          const _connection4 = self._connection;
          if (null != _connection4) {
            _connection4.on(self(closure_2[26]).BaseConnectionEvent.SoundshareTrace, (type) => {
              let code;
              let reason;
              let retry;
              const goLiveSource = store2.getGoLiveSource();
              const soundshareStats = store.soundshareStats;
              let soundshareSession;
              if (null != goLiveSource) {
                let desktopSource = goLiveSource.desktopSource;
                if (null != desktopSource) {
                  soundshareSession = desktopSource.soundshareSession;
                }
              }
              soundshareStats.traceEvent(soundshareSession, type);
              type = type.type;
              if ("soundshare_attach_requested" === type) {
                const errorTimer2 = store.errorTimer;
                errorTimer2.start(closure_23, () => {
                  callback(closure_2[24]).dispatch({});
                });
              } else if ("soundshare_recv_failed" === type) {
                ({ reason, code, retry } = type);
                desktopSource = undefined;
                if (null != goLiveSource) {
                  desktopSource = goLiveSource.desktopSource;
                }
                if (null != desktopSource) {
                  let desktopSource1;
                  if (null != goLiveSource) {
                    desktopSource1 = goLiveSource.desktopSource;
                  }
                  const result = store.reportSoundshareFailure(desktopSource1, code, reason, retry);
                  if (!retry) {
                    const errorTimer = store.errorTimer;
                    errorTimer.stop();
                    let obj = callback(closure_2[24]);
                    obj = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: reason, errorCode: code };
                    obj.dispatch(obj);
                  }
                  const tmp26 = store;
                }
              } else if ("soundshare_state_transition" === type) {
                if (type.newState === constants3.PLAYING) {
                  const errorTimer3 = store.errorTimer;
                  errorTimer3.stop();
                  obj = { type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" };
                  callback(closure_2[24]).dispatch(obj);
                  const obj3 = callback(closure_2[24]);
                }
              }
            });
          }
          const _connection5 = self._connection;
          if (null != _connection5) {
            _connection5.on(self(closure_2[26]).BaseConnectionEvent.FirstFrameStats, (remoteVideoStreamCreatedTimestamp) => {
              if (!store._firstFrameDelivered) {
                store._firstFrameDelivered = true;
                const streamAnalyticsProperties = store.getStreamAnalyticsProperties();
                let obj = callback(closure_2[28]);
                obj = {};
                ({ guild_id: obj2.guild_id, channel_id: obj2.channel_id, rtc_connection_id: obj2.rtc_connection_id, media_session_id: obj2.media_session_id, parent_media_session_id: obj2.parent_media_session_id } = streamAnalyticsProperties);
                obj.num_viewers = store.analyticsContext.numViewers;
                obj.time_connected_to_first_frame_delivered = store.getDuration();
                const obj3 = store(closure_2[31]);
                obj.time_total_to_first_frame = store(closure_2[31]).now() - store.getCreatedTime();
                let NumberResult = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp) {
                  NumberResult = null;
                  if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                    const _Number = Number;
                    NumberResult = Number(remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
                  }
                }
                obj.time_remote_user_to_video_stream_created = NumberResult;
                let NumberResult1 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp) {
                  NumberResult1 = null;
                  if (undefined !== remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp) {
                    const _Number2 = Number;
                    NumberResult1 = Number(remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp - remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp);
                  }
                }
                obj.time_video_stream_created_to_video_data_received = NumberResult1;
                let NumberResult2 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.videoSourceDeliveredFrameTimestamp) {
                  NumberResult2 = null;
                  if (undefined !== remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp) {
                    const _Number3 = Number;
                    NumberResult2 = Number(remoteVideoStreamCreatedTimestamp.videoSourceDeliveredFrameTimestamp - remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp);
                  }
                }
                obj.time_video_data_received_to_video_source_delivered_frame = NumberResult2;
                let NumberResult3 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.updateMLSExternalSenderTimestamp) {
                  NumberResult3 = null;
                  if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                    const _Number4 = Number;
                    NumberResult3 = Number(remoteVideoStreamCreatedTimestamp.updateMLSExternalSenderTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
                  }
                }
                obj.time_remote_user_to_mls_external_sender_updated = NumberResult3;
                let NumberResult4 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.setRemoteSecureFrameKeyRatchetTimestamp) {
                  NumberResult4 = null;
                  if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                    const _Number5 = Number;
                    NumberResult4 = Number(remoteVideoStreamCreatedTimestamp.setRemoteSecureFrameKeyRatchetTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
                  }
                }
                obj.time_remote_user_to_secure_frame_remote_key_ratchet_set = NumberResult4;
                let NumberResult5 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.setLocalSecureFrameKeyRatchetTimestamp) {
                  NumberResult5 = null;
                  if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                    const _Number6 = Number;
                    NumberResult5 = Number(remoteVideoStreamCreatedTimestamp.setLocalSecureFrameKeyRatchetTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
                  }
                }
                obj.time_remote_user_to_secure_frame_local_key_ratchet_set = NumberResult5;
                let NumberResult6 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.firstFrameDecryptedTimestamp) {
                  NumberResult6 = null;
                  if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                    const _Number7 = Number;
                    NumberResult6 = Number(remoteVideoStreamCreatedTimestamp.firstFrameDecryptedTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
                  }
                }
                obj.time_remote_user_to_first_frame_decrypted = NumberResult6;
                obj.track(constants.RECEIVER_FIRST_FRAME_DELIVERED, obj);
                const nowResult = store(closure_2[31]).now();
              }
            });
          }
          const _connection6 = self._connection;
          if (null != _connection6) {
            _connection6.on(self(closure_2[26]).BaseConnectionEvent.FirstFrameEncryptedStats, (videoReceiversSetTimestamp) => {
              const streamAnalyticsProperties = store.getStreamAnalyticsProperties();
              let obj = callback(closure_2[28]);
              obj = { guild_id: streamAnalyticsProperties.guild_id, channel_id: streamAnalyticsProperties.channel_id, rtc_connection_id: streamAnalyticsProperties.rtc_connection_id, media_session_id: streamAnalyticsProperties.media_session_id, parent_media_session_id: streamAnalyticsProperties.parent_media_session_id };
              let NumberResult = null;
              if (undefined !== videoReceiversSetTimestamp.videoReceiversSetTimestamp) {
                NumberResult = null;
                if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                  const _Number = Number;
                  NumberResult = Number(videoReceiversSetTimestamp.videoReceiversSetTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
                }
              }
              obj.time_local_user_to_video_receivers_set = NumberResult;
              let NumberResult1 = null;
              if (undefined !== videoReceiversSetTimestamp.updateMLSExternalSenderTimestamp) {
                NumberResult1 = null;
                if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                  const _Number2 = Number;
                  NumberResult1 = Number(videoReceiversSetTimestamp.updateMLSExternalSenderTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
                }
              }
              obj.time_local_user_to_mls_external_sender_updated = NumberResult1;
              let NumberResult2 = null;
              if (undefined !== videoReceiversSetTimestamp.setRemoteSecureFrameKeyRatchetTimestamp) {
                NumberResult2 = null;
                if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                  const _Number3 = Number;
                  NumberResult2 = Number(videoReceiversSetTimestamp.setRemoteSecureFrameKeyRatchetTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
                }
              }
              obj.time_local_user_to_secure_frame_remote_key_ratchet_set = NumberResult2;
              let NumberResult3 = null;
              if (undefined !== videoReceiversSetTimestamp.setLocalSecureFrameKeyRatchetTimestamp) {
                NumberResult3 = null;
                if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                  const _Number4 = Number;
                  NumberResult3 = Number(videoReceiversSetTimestamp.setLocalSecureFrameKeyRatchetTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
                }
              }
              obj.time_local_user_to_secure_frame_local_key_ratchet_set = NumberResult3;
              let NumberResult4 = null;
              if (undefined !== videoReceiversSetTimestamp.firstFrameEncryptedTimestamp) {
                NumberResult4 = null;
                if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                  const _Number5 = Number;
                  NumberResult4 = Number(videoReceiversSetTimestamp.firstFrameEncryptedTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
                }
              }
              obj.time_local_user_to_first_frame_encrypted = NumberResult4;
              obj.track(constants.STREAMER_FIRST_FRAME_ENCRYPTED, obj);
            });
          }
          const _connection7 = self._connection;
          if (null != _connection7) {
            _connection7.on(self(closure_2[26]).BaseConnectionEvent.Destroy, () => {
              const errorTimer = store.errorTimer;
              errorTimer.stop();
            });
          }
        }
      });
      this.on(StreamRTCConnection(closure_2[25]).RTCConnectionEvent.Video, (arg0, arg1, arg2, arg3, arg4) => {
        const decodeStreamKeyResult = self(closure_2[19]).decodeStreamKey(self.streamKey);
        let tmp2 = decodeStreamKeyResult.guildId === arg0;
        if (tmp2) {
          tmp2 = decodeStreamKeyResult.channelId === arg1;
        }
        if (tmp2) {
          tmp2 = decodeStreamKeyResult.ownerId === arg2;
        }
        if (tmp2) {
          if (!tmp7) {
            self.trackVideoStartStats();
            let closure_1 = true;
          }
          self.updateVideoStreamId(arg3, arg4);
          const tmp7 = null == self.getMediaSessionId() || closure_1;
        }
      });
      this.on(StreamRTCConnection(closure_2[25]).RTCConnectionEvent.VideoSourceQualityChanged, (guildId, channelId, senderUserId, maxResolution, maxFrameRate, context) => {
        let obj = callback(closure_2[24]);
        obj = { type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", guildId, channelId, senderUserId, maxResolution, maxFrameRate, context };
        obj.dispatch(obj);
      });
      this.on(StreamRTCConnection(closure_2[25]).RTCConnectionEvent.SecureFramesUpdate, () => {
        callback(closure_2[24]).dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
      });
      this.on(StreamRTCConnection(closure_2[25]).RTCConnectionEvent.RosterMapUpdate, (userIds) => {
        let obj = callback(closure_2[24]);
        obj = { type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds };
        obj.dispatch(obj);
      });
    }
  };
  items[10] = {
    key: "reportSoundshareFailure",
    value(soundshareSession, soundshare_failure_code, soundshare_failure_reason, soundshare_failure_will_retry) {
      const self = this;
      soundshareSession = undefined;
      if (null != soundshareSession) {
        soundshareSession = soundshareSession.soundshareSession;
      }
      let str = "";
      if (null != soundshareSession) {
        str = soundshareSession;
      }
      if (null == self.soundshareFailuresReported[str]) {
        const _Set = Set;
        const set = new Set();
        self.soundshareFailuresReported[str] = set;
      }
      let tmp7 = null != soundshare_failure_code;
      if (tmp7) {
        let obj = self.soundshareFailuresReported[str];
        tmp7 = !obj.has(soundshare_failure_code);
      }
      if (tmp7) {
        self.soundshareFailuresReported[str].add(soundshare_failure_code);
        const obj2 = self.soundshareFailuresReported[str];
      }
      if (tmp9) {
        obj = { soundshare_failure_code, soundshare_failure_reason, soundshare_failure_will_retry };
        const merged = Object.assign(callback(closure_2[30])(soundshareSession));
        const merged1 = Object.assign(self.getSoundshareAnalyticsProperties());
        callback(closure_2[28]).track(constants.SOUNDSHARE_FAILED, obj);
        const obj3 = callback(closure_2[28]);
      }
    }
  };
  items[11] = {
    key: "getStreamAnalyticsProperties",
    value() {
      let actionContext;
      let analyticsContext;
      let distributor;
      let exe;
      let gameId;
      let gameMetadata;
      let gameName;
      let guildId;
      let ownerId;
      let sku;
      let streamApplication;
      let streamContext;
      let streamRegion;
      let streamSourceType;
      const self = this;
      ({ analyticsContext, streamContext } = this);
      ({ streamRegion, streamApplication, streamSourceType, actionContext } = analyticsContext);
      ({ ownerId, guildId } = streamContext);
      const region = region.getRegion(hostname.getHostname());
      let obj = StreamRTCConnection(closure_2[27]);
      const runningGameAnalytics = obj.getRunningGameAnalytics(streamApplication);
      obj = { channel_id: this.channelId, rtc_connection_id: this.getRTCConnectionId(), media_session_id: this.getMediaSessionId(), parent_media_session_id: this.parentMediaSessionId, sender_user_id: ownerId, context: constants2.STREAM, guild_id: guildId, stream_region: streamRegion, stream_source_type: streamSourceType, guild_region: region };
      ({ gameName, gameId, exe, distributor, sku, gameMetadata } = runningGameAnalytics);
      let str = "receiver";
      if (this.isOwner) {
        str = "streamer";
      }
      obj.participant_type = str;
      obj.share_application_name = gameName;
      obj.share_application_id = gameId;
      obj.share_application_executable = exe;
      obj.share_application_distributor = distributor;
      obj.share_application_distributor_game_id = sku;
      obj.share_application_game_metadata = gameMetadata;
      const videoStreamStats = self.videoStreamStats;
      obj.video_layout = videoStreamStats.getLayout();
      obj.client_event_source = actionContext;
      ({ voiceVersion: obj2.voice_backend_version, rtcWorkerVersion: obj2.rtc_worker_backend_version } = self);
      return obj;
    }
  };
  items[12] = {
    key: "getSoundshareAnalyticsProperties",
    value() {
      return { rtc_connection_id: this.getRTCConnectionId(), soundshare_experimental: experimentalSoundshare.getExperimentalSoundshare() };
    }
  };
  items[13] = {
    key: "trackVideoStartStats",
    value() {
      const self = this;
      let tmp = null;
      if (this.isOwner) {
        tmp = callback(closure_2[32])();
      }
      let obj = callback(closure_2[28]);
      obj = {};
      const merged = Object.assign(self.getStreamAnalyticsProperties());
      const merged1 = Object.assign(tmp);
      obj["connection_type"] = store2.getType();
      obj["effective_connection_speed"] = store2.getEffectiveConnectionSpeed();
      obj["service_provider"] = store2.getServiceProvider();
      obj["duration_go_live_modal"] = self.analyticsContext.goLiveModalDurationMs;
      obj["source_location_stack"] = self.analyticsContext.analyticsLocations;
      obj.track(constants.VIDEO_STREAM_STARTED, obj);
    }
  };
  items[14] = {
    key: "trackVideoEndStats",
    value(arg0) {
      const self = this;
      const StreamRTCConnection = this;
      const channel = channel.getChannel(this.channelId);
      let type = null;
      if (null != channel) {
        type = channel.type;
      }
      let _videoQuality = self._videoQuality;
      if (null != _videoQuality) {
        const networkStats = _videoQuality.getNetworkStats();
        const getCodecUsageStats = _videoQuality.getCodecUsageStats;
        if (self.isOwner) {
          let codecUsageStats = getCodecUsageStats("streamer", self.userId);
        } else {
          codecUsageStats = getCodecUsageStats("receiver", tmp3);
        }
        let obj = { stream_application_name: StreamRTCConnection(networkStats[33]).default.getApplicationNames() };
        if (self.isOwner) {
          obj = { clips_enabled: StreamRTCConnection(networkStats[34]).isClipsEnabled(), clips_buffer_length: tmp8.clipsLength };
          const obj4 = StreamRTCConnection(networkStats[34]);
        } else {
          obj = {};
        }
        if (self.isOwner) {
          const obj1 = { bandwidth_estimation_experiment: self.getBandwidthEstimationExperiment() };
          let obj2 = obj1;
        } else {
          obj2 = {};
        }
        const outboundStats = _videoQuality.getOutboundStats();
        const item = outboundStats.forEach((num_frames) => {
          num_frames = num_frames.num_frames;
          let num = 0;
          if (null != num_frames) {
            num = num_frames;
          }
          if (num > 0) {
            const obj2 = num_frames(closure_2[28]);
            let obj = {};
            const merged = Object.assign(codecUsageStats);
            const merged1 = Object.assign(closure_2);
            const merged2 = Object.assign(obj);
            const videoStreamStats = self.videoStreamStats;
            const merged3 = Object.assign(videoStreamStats.getStats());
            const merged4 = Object.assign(num_frames);
            const soundshareStats = self.soundshareStats;
            const merged5 = Object.assign(soundshareStats.getStats());
            const merged6 = Object.assign(self.getStreamAnalyticsProperties());
            const merged7 = Object.assign(obj);
            const merged8 = Object.assign(obj2);
            obj["app_hardware_acceleration_enabled"] = num_frames(closure_2[29]).getAppHardwareAccelerationEnabled();
            obj["channel_type"] = type;
            obj["reason"] = num_frames;
            obj["max_viewers"] = self.analyticsContext.maxViewers;
            obj["hostname"] = self.hostname;
            obj["hardware_enabled"] = store.getHardwareEncoding();
            let tmp3 = null;
            if (self.isOwner) {
              tmp3 = num_frames(closure_2[35])();
            }
            obj["device_performance_class"] = tmp3;
            obj["soundshare_experimental"] = store.getExperimentalSoundshare();
            obj["quality_preset"] = state.getState().preset;
            obj = num_frames(closure_2[29]);
            obj["discord_is_elevated"] = obj.getDiscordIsElevated();
            obj2.track(constants.VIDEO_STREAM_ENDED, obj);
            const obj4 = num_frames(closure_2[29]);
          }
        });
        _videoQuality = _videoQuality.getInboundParticipants();
        const item1 = _videoQuality.forEach((arg0) => {
          const inboundStats = _videoQuality.getInboundStats(arg0);
          let num_frames;
          if (null != inboundStats) {
            num_frames = inboundStats.num_frames;
          }
          let num = 0;
          if (null != num_frames) {
            num = num_frames;
          }
          if (num > 0) {
            let obj = arg0(closure_2[28]);
            obj = {};
            const merged = Object.assign(codecUsageStats);
            const merged1 = Object.assign(closure_2);
            const merged2 = Object.assign(obj);
            const videoStreamStats = self.videoStreamStats;
            const merged3 = Object.assign(videoStreamStats.getStats());
            const merged4 = Object.assign(inboundStats);
            const soundshareStats = self.soundshareStats;
            const merged5 = Object.assign(soundshareStats.getStats());
            const merged6 = Object.assign(self.getStreamAnalyticsProperties());
            const merged7 = Object.assign(obj);
            const merged8 = Object.assign(obj2);
            obj["app_hardware_acceleration_enabled"] = arg0(closure_2[29]).getAppHardwareAccelerationEnabled();
            obj["channel_type"] = type;
            obj["reason"] = arg0;
            obj["max_viewers"] = self.analyticsContext.maxViewers;
            obj["hostname"] = self.hostname;
            obj["hardware_enabled"] = store.getHardwareEncoding();
            let tmp5 = null;
            if (self.isOwner) {
              tmp5 = arg0(closure_2[35])();
            }
            obj["device_performance_class"] = tmp5;
            obj.track(constants.VIDEO_STREAM_ENDED, obj);
            const obj3 = arg0(closure_2[29]);
          }
        });
        const _default = StreamRTCConnection(networkStats[33]).default;
      }
    }
  };
  items[15] = {
    key: "getExtraConnectionOptions",
    value() {
      const obj = { streamUserId: StreamRTCConnection(closure_2[19]).decodeStreamKey(this.streamKey).ownerId };
      return obj;
    }
  };
  items[16] = {
    key: "getMediaStreamKey",
    value() {
      return this.streamKey;
    }
  };
  return callback2(StreamRTCConnection, items);
}(importDefault(dependencyMap[36]));
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/go_live/StreamRTCConnection.tsx");

export default tmp4;
export const StreamRTCAnalyticsContext = tmp3;
