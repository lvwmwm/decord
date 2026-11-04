// Module ID: 19662
// Function ID: 19663
// Name: AppAnalyticsManager
// Dependencies: [2142, 2135, 5898, 6705, 6891, 5901, 1072, 1089, 7423, 4985, 5894, 5896, 19088, 8032, 2]

// Module 19662 (AppAnalyticsManager)
import Constants from "Constants" /* 1072 */;
import DurationsDefault from "Durations" /* 1089 */;
import Timers from "Timers" /* 4985 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5894 */;
import ActivityTypes from "ActivityTypes" /* 5896 */;
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 8032 */;
import getGamePlatformDefault from "getGamePlatform" /* 19088 */;
import RunningGameStore from "RunningGameStore" /* 2142 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6705 */;
import SpeakingStore from "SpeakingStore" /* 6891 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5901 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;
import size from "module_2" /* 2 */;

let map;

const AnalyticEvents = Constants.AnalyticEvents;
const MINUTE = DurationsDefault.Millis.MINUTE;
class AppAnalyticsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._currentUserSpeaking = false;
    applyArgumentsResult._anyoneElseSpeaking = false;
    applyArgumentsResult._handleRTCConnectionStoreChanged = function _handleRTCConnectionStoreChanged() {
      const channelId = RTCConnectionStore.getChannelId();
      if (require._voiceChannelId !== channelId) {
        require._voiceChannelId = channelId;
        if (null != channelId) {
          if (null == require._reportInterval) {
            const self = this;
            const self2 = this;
            const interval = new Timers.Interval();
            require._reportInterval = interval;
            const _reportInterval = obj._reportInterval;
            _reportInterval.start(MINUTE, () => {
              closure_1_0._trackStartSpeaking();
              closure_1_0._trackStartListening();
            });
          }
        } else {
          require._reset();
        }
      }
    };
    applyArgumentsResult._handleSpeakingStoreChanged = function _handleSpeakingStoreChanged() {
      const result = SpeakingStore.isCurrentUserSpeaking();
      const obj = SpeakingStore;
      if (require._currentUserSpeaking !== result) {
        require._currentUserSpeaking = result;
        require._trackStartSpeaking();
      }
      const isAnyoneElseSpeakingResult = obj.isAnyoneElseSpeaking();
      if (require._anyoneElseSpeaking !== isAnyoneElseSpeakingResult) {
        require._anyoneElseSpeaking = isAnyoneElseSpeakingResult;
        require._trackStartListening();
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const self = this;
    map = new Map();
    const result = map.set(SpeakingStore, () => self._handleSpeakingStoreChanged());
    this.stores = result.set(RTCConnectionStore, () => self._handleRTCConnectionStoreChanged());
    this._reset();
  }
  _reset() {
    const self = this;
    this._currentUserSpeaking = false;
    this._anyoneElseSpeaking = false;
    if (null != this._reportInterval) {
      const _reportInterval = self._reportInterval;
      _reportInterval.stop();
      self._reportInterval = null;
    }
  }
  _trackStartSpeaking() {
    const self = this;
    if (this._currentUserSpeaking) {
      const channelId = RTCConnectionStore.getChannelId();
      const guildId = RTCConnectionStore.getGuildId();
      const obj = { mode: MediaEngineStore.getMode(), priority: SpeakingStore.isCurrentUserPrioritySpeaking(), channel: channelId, server: guildId, channel_id: channelId, guild_id: guildId, rtc_connection_id: RTCConnectionStore.getRTCConnectionId(), media_session_id: RTCConnectionStore.getMediaSessionId(), voice_state_count: SortedVoiceStateStore.countVoiceStatesForChannel(self._voiceChannelId) };
      const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
      const START_SPEAKING = AnalyticEvents.START_SPEAKING;
      AppAnalyticsUtils;
      const merged = Object.assign(self.getGameMetadata());
      const merged1 = Object.assign(RTCConnectionStore.getPacketStats());
      trackWithMetadata(START_SPEAKING, obj);
    }
  }
  _trackStartListening() {
    const obj = MediaEngineStore;
    if (!MediaEngineStore.isDeaf()) {
      const self = this;
      if (this._anyoneElseSpeaking) {
        const channelId = RTCConnectionStore.getChannelId();
        const guildId = RTCConnectionStore.getGuildId();
        const obj2 = { mute: obj.isMute(), anyone_priority: SpeakingStore.isAnyonePrioritySpeaking(), channel: channelId, server: guildId, channel_id: channelId, guild_id: guildId, rtc_connection_id: RTCConnectionStore.getRTCConnectionId(), media_session_id: RTCConnectionStore.getMediaSessionId(), voice_state_count: SortedVoiceStateStore.countVoiceStatesForChannel(self._voiceChannelId) };
        const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
        const START_LISTENING = AnalyticEvents.START_LISTENING;
        AppAnalyticsUtils;
        const merged = Object.assign(self.getGameMetadata());
        trackWithMetadata(START_LISTENING, obj2);
      }
    }
  }
  _terminate() {
    this._reset();
    SpeakingStore.removeChangeListener(this._handleSpeakingStoreChanged);
    RTCConnectionStore.removeChangeListener(this._handleRTCConnectionStoreChanged);
  }
  getGameMetadata() {
    let application_id;
    let distributor;
    let exeName;
    let name;
    let sku;
    let subgameMetadata;
    const findActivityResult = SelfPresenceStore.findActivity((type) => type.type === ActivityTypes.ActivityTypes.PLAYING);
    const currentGameForAnalytics = RunningGameStore.getCurrentGameForAnalytics();
    const obj = { game_platform: getGamePlatformDefault(findActivityResult), game_name: name, game_exe_name: exeName, game_id: application_id, game_distributor: distributor, game_distributor_game_id: sku, game_metadata: subgameMetadata };
    name = null;
    if (null != findActivityResult) {
      name = findActivityResult.name;
    }
    exeName = null;
    if (null != currentGameForAnalytics) {
      exeName = currentGameForAnalytics.exeName;
    }
    application_id = null;
    if (null != findActivityResult) {
      application_id = findActivityResult.application_id;
    }
    distributor = null;
    if (null != currentGameForAnalytics) {
      distributor = currentGameForAnalytics.distributor;
    }
    sku = null;
    if (null != currentGameForAnalytics) {
      sku = currentGameForAnalytics.sku;
    }
    subgameMetadata = null;
    if (null != currentGameForAnalytics) {
      const obj2 = RobloxSubgameUtils;
      subgameMetadata = obj2.getSubgameMetadata(currentGameForAnalytics);
    }
    return obj;
  }
}
const prototype = AppAnalyticsManager.prototype;
const appAnalyticsManager = new AppAnalyticsManager();
let result = size.fileFinishedImporting("modules/app_analytics/AppAnalyticsManager.tsx");

export default appAnalyticsManager;
