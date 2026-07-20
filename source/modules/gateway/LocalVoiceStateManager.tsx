// Module ID: 12478
// Function ID: 95351
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12478 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
({ ApplicationStreamStates: closure_12, ChannelTypes: closure_13, VoiceFlags: closure_14 } = arg1(dependencyMap[10]));
const tmp2 = arg1(dependencyMap[10]);
const tmp3 = (arg0) => {
  class LocalVoiceStateManager {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, LocalVoiceStateManager);
      obj = closure_5(LocalVoiceStateManager);
      tmp2 = closure_4;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.socket = arg0;
      return tmp2Result;
    }
  }
  const arg1 = LocalVoiceStateManager;
  callback2(LocalVoiceStateManager, arg0);
  let obj = {
    key: "guildId",
    get() {
      return this.getState().guildId;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "channelId",
    get() {
      return this.getState().channelId;
    }
  };
  items[1] = obj;
  obj = {
    key: "computeVoiceFlags",
    value() {
      const ClipsAllowVoiceRecording = LocalVoiceStateManager(closure_1[11]).ClipsAllowVoiceRecording;
      const setting = ClipsAllowVoiceRecording.getSetting();
      const obj = LocalVoiceStateManager(closure_1[12]);
      const setFlagResult = LocalVoiceStateManager(closure_1[12]).setFlag(0, constants3.ALLOW_VOICE_RECORDING, setting);
      let isClipsEnabledResult = LocalVoiceStateManager(closure_1[13]).isClipsEnabled();
      if (isClipsEnabledResult) {
        const currentUserActiveStream = authStore.getCurrentUserActiveStream();
        let state;
        if (null != currentUserActiveStream) {
          state = currentUserActiveStream.state;
        }
        let tmp9 = state === constants.ACTIVE;
        if (!tmp9) {
          const currentUserActiveStream1 = authStore.getCurrentUserActiveStream();
          let state1;
          if (null != currentUserActiveStream1) {
            state1 = currentUserActiveStream1.state;
          }
          tmp9 = state1 === constants.PAUSED;
        }
        isClipsEnabledResult = tmp9;
      }
      const obj2 = LocalVoiceStateManager(closure_1[13]);
      let result = LocalVoiceStateManager(closure_1[13]).isDecoupledClipsEnabled();
      if (result) {
        const visibleGame = visibleGame.getVisibleGame();
        let windowHandle;
        if (null != visibleGame) {
          windowHandle = visibleGame.windowHandle;
        }
        result = null != windowHandle;
      }
      const obj3 = LocalVoiceStateManager(closure_1[13]);
      if (!isClipsEnabledResult) {
        isClipsEnabledResult = result;
      }
      return LocalVoiceStateManager(closure_1[12]).setFlag(setFlagResult, constants3.CLIPS_ENABLED, isClipsEnabledResult);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getInitialState",
    value() {
      const obj = { spatialBlend: false, distance: false, roomSize: false, spread: false, arcAngle: false, gridColumns: false, gridSpacing: false, buckets: false, listenerHeight: false, selfMute: closure_10.isSelfMute(), selfDeaf: closure_10.isSelfDeaf(), selfVideo: closure_10.isVideoEnabled() };
      return obj;
    }
  };
  items[4] = {
    key: "getNextState",
    value(guildId) {
      return { guildId: guildId.guildId, channelId: guildId.channelId, selfMute: closure_10.isSelfMute(), selfDeaf: closure_10.isSelfDeaf(), selfVideo: closure_10.isVideoEnabled(), preferredRegion: store.getPreferredRegion(), preferredRegions: store.getPreferredRegions(), videoStreamParameters: closure_10.getVideoStreamParameters(), flags: this.computeVoiceFlags() };
    }
  };
  items[5] = {
    key: "shouldCommit",
    value() {
      const socket = this.socket;
      return socket.isSessionEstablished();
    }
  };
  items[6] = {
    key: "didCommit",
    value(videoStreamParameters) {
      let channelId;
      let flags;
      let guildId;
      let preferredRegion;
      let preferredRegions;
      let selfDeaf;
      let selfMute;
      let selfVideo;
      const self = this;
      ({ guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, flags } = videoStreamParameters);
      if (flags === undefined) {
        flags = 0;
      }
      if (selfVideo) {
        const channel = channel.getChannel(channelId);
        let type;
        if (null != channel) {
          type = channel.type;
        }
        if (type === constants2.GUILD_STAGE_VOICE) {
          const socket2 = self.socket;
          let obj = { guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, videoStreamParameters: videoStreamParameters.videoStreamParameters, flags };
          socket2.voiceStateUpdate(obj);
        }
      }
      const socket = self.socket;
      obj = { guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, flags };
      socket.voiceStateUpdate(obj);
    }
  };
  return callback(LocalVoiceStateManager, items);
}(importDefault(dependencyMap[14]));
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/gateway/LocalVoiceStateManager.tsx");

export default tmp3;
