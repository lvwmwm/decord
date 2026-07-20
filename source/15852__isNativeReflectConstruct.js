// Module ID: 15852
// Function ID: 121335
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15852 (_isNativeReflectConstruct)
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
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
({ AnalyticEvents: closure_14, ActivityTypes: closure_15 } = arg1(dependencyMap[11]));
const MINUTE = importDefault(dependencyMap[12]).Millis.MINUTE;
let tmp3 = (arg0) => {
  class AppAnalyticsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, AppAnalyticsManager);
      items1 = [...items];
      obj = closure_6(AppAnalyticsManager);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      AppAnalyticsManager = tmp2Result;
      tmp2Result._currentUserSpeaking = false;
      tmp2Result._anyoneElseSpeaking = false;
      tmp2Result._handleRTCConnectionStoreChanged = () => {
        const channelId = channelId.getChannelId();
        if (tmp2Result._voiceChannelId !== channelId) {
          tmp2Result._voiceChannelId = channelId;
          if (null != channelId) {
            if (null == tmp2Result._reportInterval) {
              const Interval = tmp2Result(closure_2[13]).Interval;
              const prototype = Interval.prototype;
              const interval = new Interval();
              tmp2Result._reportInterval = interval;
              const _reportInterval = tmp2Result._reportInterval;
              _reportInterval.start(closure_16, () => {
                closure_0._trackStartSpeaking();
                closure_0._trackStartListening();
              });
            }
          } else {
            tmp2Result._reset();
          }
        }
      };
      tmp2Result._handleSpeakingStoreChanged = () => {
        const result = closure_12.isCurrentUserSpeaking();
        if (tmp2Result._currentUserSpeaking !== result) {
          tmp2Result._currentUserSpeaking = result;
          tmp2Result._trackStartSpeaking();
        }
        const isAnyoneElseSpeakingResult = closure_12.isAnyoneElseSpeaking();
        if (tmp2Result._anyoneElseSpeaking !== isAnyoneElseSpeakingResult) {
          tmp2Result._anyoneElseSpeaking = isAnyoneElseSpeakingResult;
          tmp2Result._trackStartListening();
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = AppAnalyticsManager;
  callback2(AppAnalyticsManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const AppAnalyticsManager = this;
      const result = new Map().set(closure_12, () => self._handleSpeakingStoreChanged());
      this.stores = result.set(closure_10, () => self._handleRTCConnectionStoreChanged());
      this._reset();
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "_reset",
    value() {
      const self = this;
      this._currentUserSpeaking = false;
      this._anyoneElseSpeaking = false;
      if (null != this._reportInterval) {
        const _reportInterval = self._reportInterval;
        _reportInterval.stop();
        self._reportInterval = null;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "_trackStartSpeaking",
    value() {
      const self = this;
      if (this._currentUserSpeaking) {
        const channelId = store.getChannelId();
        const guildId = store.getGuildId();
        let obj = AppAnalyticsManager(closure_2[14]);
        obj = { mode: closure_9.getMode(), priority: closure_12.isCurrentUserPrioritySpeaking(), channel: channelId, server: guildId, channel_id: channelId, guild_id: guildId, rtc_connection_id: store.getRTCConnectionId(), media_session_id: store.getMediaSessionId(), voice_state_count: closure_13.countVoiceStatesForChannel(self._voiceChannelId) };
        const merged = Object.assign(self.getGameMetadata());
        const merged1 = Object.assign(store.getPacketStats());
        obj.trackWithMetadata(constants.START_SPEAKING, obj);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_trackStartListening",
    value() {
      const self = this;
      if (!closure_9.isDeaf()) {
        if (self._anyoneElseSpeaking) {
          const channelId = store.getChannelId();
          const guildId = store.getGuildId();
          let obj = AppAnalyticsManager(closure_2[14]);
          obj = { mute: closure_9.isMute(), anyone_priority: closure_12.isAnyonePrioritySpeaking(), channel: channelId, server: guildId, channel_id: channelId, guild_id: guildId, rtc_connection_id: store.getRTCConnectionId(), media_session_id: store.getMediaSessionId(), voice_state_count: closure_13.countVoiceStatesForChannel(self._voiceChannelId) };
          const merged = Object.assign(self.getGameMetadata());
          obj.trackWithMetadata(constants.START_LISTENING, obj);
        }
      }
    }
  };
  items[4] = {
    key: "_terminate",
    value() {
      this._reset();
      closure_12.removeChangeListener(this._handleSpeakingStoreChanged);
      store.removeChangeListener(this._handleRTCConnectionStoreChanged);
    }
  };
  items[5] = {
    key: "getGameMetadata",
    value() {
      const findActivityResult = closure_11.findActivity((type) => type.type === constants.PLAYING);
      const currentGameForAnalytics = currentGameForAnalytics.getCurrentGameForAnalytics();
      const obj = { game_platform: callback(closure_2[15])(findActivityResult) };
      let name = null;
      if (null != findActivityResult) {
        name = findActivityResult.name;
      }
      obj.game_name = name;
      let exeName = null;
      if (null != currentGameForAnalytics) {
        exeName = currentGameForAnalytics.exeName;
      }
      obj.game_exe_name = exeName;
      let application_id = null;
      if (null != findActivityResult) {
        application_id = findActivityResult.application_id;
      }
      obj.game_id = application_id;
      let distributor = null;
      if (null != currentGameForAnalytics) {
        distributor = currentGameForAnalytics.distributor;
      }
      obj.game_distributor = distributor;
      let sku = null;
      if (null != currentGameForAnalytics) {
        sku = currentGameForAnalytics.sku;
      }
      obj.game_distributor_game_id = sku;
      let subgameMetadata = null;
      if (null != currentGameForAnalytics) {
        subgameMetadata = AppAnalyticsManager(closure_2[16]).getSubgameMetadata(currentGameForAnalytics);
        const obj2 = AppAnalyticsManager(closure_2[16]);
      }
      obj.game_metadata = subgameMetadata;
      return obj;
    }
  };
  return callback(AppAnalyticsManager, items);
}(importDefault(dependencyMap[17]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/app_analytics/AppAnalyticsManager.tsx");

export default tmp3;
