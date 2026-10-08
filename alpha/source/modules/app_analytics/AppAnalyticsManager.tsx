// Module ID: 17763
// Function ID: 17764
// Name: AppAnalyticsManager
// Dependencies: [2018, 2011, 5108, 5755, 5952, 5114, 1085, 1102, 6797, 2058, 5105, 17230, 7430, 2]

// Module 17763 (AppAnalyticsManager)
import DurationsDefault from "Durations" /* 1102 */;
import Timers from "Timers" /* 2058 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 7430 */;
import getGamePlatformDefault from "getGamePlatform" /* 17230 */;
import RunningGameStore from "RunningGameStore" /* 2018 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5755 */;
import SpeakingStore from "SpeakingStore" /* 5952 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5114 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

let map;

let c10;
let c9;
({ AnalyticEvents: c9, ActivityTypes: c10 } = Constants);
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
      const START_SPEAKING = constants.START_SPEAKING;
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
        const START_LISTENING = constants.START_LISTENING;
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
    const findActivityResult = SelfPresenceStore.findActivity((type) => type.type === constants.PLAYING);
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
