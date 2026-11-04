// Module ID: 19082
// Function ID: 19083
// Name: AutoAnalytics
// Dependencies: [19, 6978, 6703, 6990, 4995, 4990, 5053, 5012, 2135, 6036, 5898, 5044, 5172, 6705, 6910, 1385, 1072, 4997, 21, 8477, 8481, 5894, 19083, 19084, 5015, 19085, 1252, 1380, 19086, 504, 5896, 19087, 19088, 2]
// Exports: default

// Module 19082 (AutoAnalytics)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import ChannelConstants from "ChannelConstants" /* 4997 */;
import FavoritesUtils from "FavoritesUtils" /* 5015 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5894 */;
import getChannelOpenedMetadata from "getChannelOpenedMetadata" /* 8477 */;
import trackChannelOpenedClickstreamDefault from "trackChannelOpenedClickstream" /* 8481 */;
import GuildThemeAnalyticsUtils from "GuildThemeAnalyticsUtils" /* 19083 */;
import trackGuildViewedClickstreamDefault from "trackGuildViewedClickstream" /* 19084 */;
import getChannelOpenedRouteTrackingProps from "getChannelOpenedRouteTrackingProps" /* 19086 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6703 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6990 */;
import StageInstanceStore from "StageInstanceStore" /* 4995 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
import GuildStore from "GuildStore" /* 5012 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import NetworkStore from "NetworkStore" /* 6036 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6705 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6910 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_18;
let closure_19;
({ AnalyticEvents: closure_18, GuildFeatures: closure_19 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const jsx = Fragment.jsx;
const PureComponent = react.PureComponent;
class AutoAnalytics extends PureComponent {
  componentDidMount() {
    let hasPreviewEnabled;
    let isMemberPending;
    let postableChannelCount;
    let selectedChannelId;
    let selectedGuildId;
    const self = this;
    const props = this.props;
    ({ selectedChannelId, selectedGuildId, isMemberPending } = props);
    ({ hasPreviewEnabled, postableChannelCount } = props);
    if (null != selectedChannelId) {
      const _trackWithMetadata2 = self._trackWithMetadata;
      const CHANNEL_OPENED = constants.CHANNEL_OPENED;
      const obj = { selected_guild_id: selectedGuildId };
      const obj10 = getChannelOpenedMetadata;
      const merged = Object.assign(obj10.getChannelOpenedMetadata(selectedChannelId));
      _trackWithMetadata2(CHANNEL_OPENED, obj);
      const obj2 = { channelId: selectedChannelId };
      trackChannelOpenedClickstreamDefault(obj2);
      const tmp17 = constants;
      const tmp18 = require;
      if (tmp) {
        const obj3 = { channel_is_nsfw: tmp2 };
        const tmp18Result = tmp18(5894);
        tmp18Result.trackWithMetadata(tmp17.TEXT_IN_VOICE_OPENED, obj3);
      }
    }
    if (null != selectedGuildId) {
      let obj5;
      if (isMemberPending) {
        obj5 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
        const obj4 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
      } else {
        obj5 = {};
      }
      const _trackWithMetadata = self._trackWithMetadata;
      const GUILD_VIEWED = constants.GUILD_VIEWED;
      const obj7 = { postable_channels: postableChannelCount, viewing_all_channels: !UserGuildSettingsStore.isOptInEnabled(selectedGuildId) };
      const merged1 = Object.assign(obj5);
      const obj6 = GuildThemeAnalyticsUtils;
      const merged2 = Object.assign(obj6.collectGuildThemeAnalyticsMetadata(selectedGuildId));
      _trackWithMetadata(GUILD_VIEWED, obj7);
      const obj9 = { guildId: selectedGuildId };
      trackGuildViewedClickstreamDefault(obj9);
      const obj8 = FavoritesUtils;
      const tmp14 = importDefault;
      if (obj8.isFavoritesGuildId(selectedGuildId)) {
        tmp14(19085)();
      }
    }
  }
  componentDidUpdate(voiceChannelId) {
    let duration;
    let hasPreviewEnabled;
    let id;
    let id1;
    let id2;
    let id3;
    let isMemberPending;
    let isNSFWChannel;
    let isScreenSharing;
    let isTextInVoice;
    let mediaSessionId;
    let postableChannelCount;
    let rtcConnectionId;
    let selectedChannelId;
    let selectedGuildId;
    let videoEnabled;
    let voiceChannelBitrate;
    let voiceChannelGuildId;
    let voiceChannelType;
    const self = this;
    ({ voiceChannelId, voiceChannelGuildId, voiceChannelType, videoEnabled, selectedChannelId, selectedGuildId, isNSFWChannel, isMemberPending, isScreenSharing, isTextInVoice, voiceChannelBitrate, hasPreviewEnabled, postableChannelCount } = this.props);
    if (voiceChannelId.voiceChannelId !== voiceChannelId) {
      if (null != voiceChannelId.voiceChannelId) {
        const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(voiceChannelId.voiceChannelId);
        const activeEventByChannel = GuildScheduledEventStore.getActiveEventByChannel(voiceChannelId.voiceChannelId);
        const lastRTCConnectionState = RTCConnectionStore.getLastRTCConnectionState();
        let channelId;
        if (lastRTCConnectionState != null) {
          channelId = lastRTCConnectionState.channelId;
        }
        let tmp2 = lastRTCConnectionState;
        if (channelId !== voiceChannelId.voiceChannelId) {
          tmp2 = null;
        }
        const obj = { channel_id: null, channel_type: null, channel_bitrate: null, guild_id: null, rtc_connection_id: rtcConnectionId, duration, media_session_id: mediaSessionId, stage_instance_id: id, guild_scheduled_event_id: id1 };
        ({ voiceChannelId: obj.channel_id, voiceChannelType: obj.channel_type, voiceChannelBitrate: obj.channel_bitrate, voiceChannelGuildId: obj.guild_id } = voiceChannelId);
        rtcConnectionId = undefined;
        const track = AnalyticsUtilsDefault.track;
        const LEAVE_VOICE_CHANNEL = constants.LEAVE_VOICE_CHANNEL;
        AnalyticsUtilsDefault;
        if (tmp2 != null) {
          rtcConnectionId = tmp2.rtcConnectionId;
        }
        duration = undefined;
        if (tmp2 != null) {
          duration = tmp2.duration;
        }
        mediaSessionId = undefined;
        if (tmp2 != null) {
          mediaSessionId = tmp2.mediaSessionId;
        }
        id = undefined;
        if (stageInstanceByChannel != null) {
          id = stageInstanceByChannel.id;
        }
        id1 = undefined;
        if (activeEventByChannel != null) {
          id1 = activeEventByChannel.id;
        }
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.getVoiceStateMetadata(voiceChannelId.voiceChannelGuildId, voiceChannelId.voiceChannelId, voiceChannelId.videoEnabled));
        const merged1 = Object.assign(self.getGameMetadata());
        let stats;
        if (tmp2 != null) {
          const voiceStateAnalytics = tmp2.voiceStateAnalytics;
          if (voiceStateAnalytics != null) {
            stats = voiceStateAnalytics.getStats();
          }
        }
        const merged2 = Object.assign(stats);
        track(LEAVE_VOICE_CHANNEL, obj);
      }
    }
    if (voiceChannelId.voiceChannelId !== voiceChannelId) {
      if (null != voiceChannelId) {
        const stageInstanceByChannel1 = StageInstanceStore.getStageInstanceByChannel(voiceChannelId);
        const activeEventByChannel1 = GuildScheduledEventStore.getActiveEventByChannel(voiceChannelId);
        const obj4 = { channel_id: voiceChannelId, channel_type: voiceChannelType, channel_bitrate: voiceChannelBitrate, guild_id: voiceChannelGuildId, connection_type: NetworkStore.getType(), effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), service_provider: NetworkStore.getServiceProvider(), stage_instance_id: id2, guild_scheduled_event_id: id3, join_voice_id: RTCConnectionStore.getJoinVoiceId() };
        const track3 = AnalyticsUtilsDefault.track;
        const JOIN_VOICE_CHANNEL = constants.JOIN_VOICE_CHANNEL;
        AnalyticsUtilsDefault;
        id2 = undefined;
        if (stageInstanceByChannel1 != null) {
          id2 = stageInstanceByChannel1.id;
        }
        id3 = undefined;
        if (activeEventByChannel1 != null) {
          id3 = activeEventByChannel1.id;
        }
        const obj3 = AppAnalyticsUtils;
        const merged3 = Object.assign(obj3.getVoiceStateMetadata(voiceChannelGuildId, voiceChannelId, videoEnabled));
        const merged4 = Object.assign(self.getGameMetadata());
        track3(JOIN_VOICE_CHANNEL, obj4);
      }
    }
    if (voiceChannelId.videoEnabled !== videoEnabled) {
      if (null != voiceChannelId) {
        let str = null;
        if (isScreenSharing) {
          str = "screen";
        }
        const items = [str, ];
        let str2 = null;
        if (videoEnabled) {
          str2 = "camera";
        }
        items[1] = str2;
        let str3 = "screen";
        const found = items.filter(GlobalUtils.isNotNullish);
        const tmp32 = require;
        if (!isScreenSharing) {
          str3 = "none";
          if (videoEnabled) {
            str3 = "camera";
          }
        }
        const obj5 = { video_input_type: str3, enabled_inputs: found, channel_id: voiceChannelId, channel_type: voiceChannelType, guild_id: voiceChannelGuildId };
        const track2 = AnalyticsUtilsDefault.track;
        const VIDEO_INPUT_TOGGLED = constants.VIDEO_INPUT_TOGGLED;
        AnalyticsUtilsDefault;
        const merged5 = Object.assign(self.getGameMetadata());
        const tmp32Result = tmp32(5894);
        const merged6 = Object.assign(tmp32Result.collectVoiceAnalyticsMetadata(voiceChannelId));
        track2(VIDEO_INPUT_TOGGLED, obj5);
      }
    }
    let tmp43 = null == selectedChannelId;
    if (!tmp43) {
      tmp43 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
    }
    if (!tmp43) {
      const _trackWithMetadata = self._trackWithMetadata;
      const CHANNEL_OPENED = constants.CHANNEL_OPENED;
      const obj6 = { selected_guild_id: selectedGuildId };
      const obj7 = getChannelOpenedRouteTrackingProps;
      const merged7 = Object.assign(obj7.getChannelOpenedRouteTrackingProps(selectedChannelId));
      const obj8 = getChannelOpenedMetadata;
      const merged8 = Object.assign(obj8.getChannelOpenedMetadata(selectedChannelId));
      _trackWithMetadata(CHANNEL_OPENED, obj6);
      const obj9 = { channelId: selectedChannelId };
      trackChannelOpenedClickstreamDefault(obj9);
      const tmp45 = constants;
      const tmp46 = require;
      if (isTextInVoice) {
        const obj10 = { channel_is_nsfw: isNSFWChannel };
        const tmp46Result = tmp46(5894);
        tmp46Result.trackWithMetadata(tmp45.TEXT_IN_VOICE_OPENED, obj10);
      }
    }
    if (isTextInVoice) {
      isTextInVoice = !voiceChannelId.isTextInVoice;
    }
    if (isTextInVoice) {
      const obj11 = { channel_is_nsfw: isNSFWChannel };
      const obj12 = AppAnalyticsUtils;
      obj12.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj11);
    }
    if (null != selectedGuildId) {
      if (voiceChannelId.selectedGuildId !== selectedGuildId) {
        let obj14;
        if (isMemberPending) {
          obj14 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
          const obj13 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
        } else {
          obj14 = {};
        }
        const _trackWithMetadata2 = self._trackWithMetadata;
        const GUILD_VIEWED = constants.GUILD_VIEWED;
        const obj15 = { postable_channels: postableChannelCount, viewing_all_channels: !UserGuildSettingsStore.isOptInEnabled(selectedGuildId) };
        const merged9 = Object.assign(obj14);
        const obj17 = GuildThemeAnalyticsUtils;
        const merged10 = Object.assign(obj17.collectGuildThemeAnalyticsMetadata(selectedGuildId));
        _trackWithMetadata2(GUILD_VIEWED, obj15);
        const obj16 = { guildId: selectedGuildId };
        trackGuildViewedClickstreamDefault(obj16);
        const obj19 = FavoritesUtils;
        const tmp70 = importDefault;
        if (obj19.isFavoritesGuildId(selectedGuildId)) {
          tmp70(19085)();
        }
      }
    }
  }
  getGameMetadata() {
    const props = this.props;
    return { game_platform: props.gamePlatform, game_name: props.gameName, game_id: props.gameId };
  }
  _trackWithMetadata(CHANNEL_OPENED, fileSizeLimitEventProperties) {
    let obj = fileSizeLimitEventProperties;
    if (fileSizeLimitEventProperties === undefined) {
      obj = {};
    }
    const self = this;
    if (this.props.connected) {
      const obj5 = AppAnalyticsUtils;
      obj5.trackWithMetadata(CHANNEL_OPENED, obj);
    } else {
      const obj2 = AnalyticsUtilsDefault;
      const tmp3 = importDefault;
      if (!obj2.isThrottled(CHANNEL_OPENED)) {
        const obj3 = {};
        const merged = Object.assign(obj);
        const merged1 = Object.assign(self.collectDefaultAnalyticsMetadata(tmp, tmp2));
        const tmp3Result = tmp3(1252);
        tmp3Result.track(CHANNEL_OPENED, obj3);
      }
    }
  }
  collectDefaultAnalyticsMetadata(guild_id, channel_static_route) {
    const obj = { guild_id };
    if (null == channel_static_route) {
      return obj;
    } else if (isStaticChannelRoute(channel_static_route)) {
      obj.channel_static_route = channel_static_route;
      return obj;
    } else {
      const channel = ChannelStore.getChannel(channel_static_route);
      obj.channel_id = channel_static_route;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type == null) {
        type = null;
      }
      obj.channel_type = type;
      return obj;
    }
  }
  render() {
    return null;
  }
}
const prototype = AutoAnalytics.prototype;
const result = size.fileFinishedImporting("components_native/AutoAnalytics.tsx");

export default function ConnectedAutoAnalytics() {
  let application_id;
  let bitrate;
  let connected;
  let currentUser;
  let guildId;
  let hasItem;
  let name;
  let stateFromStores;
  let stateFromStores6;
  let stateFromStores8;
  let type;
  let tmp = stateFromStores;
  let tmp2 = stateFromStores6;
  const items = [SelectedChannelStore];
  const obj = stateFromStores(stateFromStores6[29]);
  stateFromStores = obj.useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId(), []);
  const items1 = [ChannelStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(stateFromStores6[29]);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores), items2);
  const items3 = [SelectedChannelStore];
  const obj4 = stateFromStores(stateFromStores6[29]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => SelectedChannelStore.getChannelId(undefined, false));
  const items4 = [ChannelStore];
  const items5 = [stateFromStores2];
  const obj5 = stateFromStores(stateFromStores6[29]);
  const stateFromStores3 = obj5.useStateFromStores(items4, () => ChannelStore.getChannel(stateFromStores2), items5);
  let nsfw;
  if (stateFromStores3 != null) {
    nsfw = stateFromStores3.nsfw;
  }
  const items6 = [stateFromStores8];
  const items7 = [stateFromStores2];
  const tmpResult = tmp(tmp2[29]);
  const stateFromStores4 = tmpResult.useStateFromStores(items6, () => {
    const chatOpen = null != stateFromStores2 && ChannelRTCStore.getChatOpen(tmp);
    return chatOpen;
  }, items7);
  const items8 = [SelfPresenceStore];
  const tmpResult9 = tmp(tmp2[29]);
  const stateFromStores5 = tmpResult9.useStateFromStores(items8, () => SelfPresenceStore.findActivity((type) => type.type === stateFromStores(stateFromStores6[30]).ActivityTypes.PLAYING), []);
  const items9 = [SelectedGuildStore];
  const tmpResult10 = tmp(tmp2[29]);
  stateFromStores6 = tmpResult10.useStateFromStores(items9, () => guildId.getGuildId(), []);
  const items10 = [GuildStore];
  const items11 = [stateFromStores6];
  const tmpResult11 = tmp(tmp2[29]);
  const stateFromStores7 = tmpResult11.useStateFromStores(items10, () => GuildStore.getGuild(stateFromStores6), items11);
  const items12 = [UserStore];
  const tmpResult12 = tmp(tmp2[29]);
  stateFromStores8 = tmpResult12.useStateFromStores(items12, () => currentUser.getCurrentUser(), []);
  const items13 = [GuildMemberStore];
  const items14 = [stateFromStores8, stateFromStores6];
  const tmpResult13 = tmp(tmp2[29]);
  const stateFromStores9 = tmpResult13.useStateFromStores(items13, () => {
    let tmp2 = null != stateFromStores8;
    const tmp = stateFromStores8;
    if (tmp2) {
      tmp2 = null != stateFromStores6;
    }
    if (tmp2) {
      const member = GuildMemberStore.getMember(stateFromStores6, tmp.id);
      let flag;
      if (member != null) {
        flag = member.isPending;
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items14);
  const items15 = [MediaEngineStore];
  const tmpResult14 = tmp(tmp2[29]);
  const stateFromStores10 = tmpResult14.useStateFromStores(items15, () => MediaEngineStore.isVideoEnabled(), []);
  const items16 = [MediaEngineStore];
  const tmpResult15 = tmp(tmp2[29]);
  const stateFromStores11 = tmpResult15.useStateFromStores(items16, () => MediaEngineStore.isScreenSharing(), []);
  const items17 = [GatewayConnectionStore];
  const tmpResult16 = tmp(tmp2[29]);
  const stateFromStores12 = tmpResult16.useStateFromStores(items17, () => connected.isConnected(), []);
  let id;
  const tmp16 = stateFromStores2;
  const tmp17 = stateFromStores2(tmp2[31])(stateFromStores6);
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj3 = { voiceChannelId: id, voiceChannelGuildId: guildId, voiceChannelType: type, voiceChannelBitrate: bitrate, videoEnabled: stateFromStores10, isScreenSharing: stateFromStores11, gamePlatform: tmp16(tmp2[32])(stateFromStores5), gameName: name, gameId: application_id, selectedChannelId: stateFromStores2, selectedGuildId: stateFromStores6, connected: stateFromStores12, isNSFWChannel: nsfw, hasPreviewEnabled: hasItem, isMemberPending: stateFromStores9, postableChannelCount: tmp17, isTextInVoice: stateFromStores4 };
  guildId = undefined;
  if (stateFromStores1 != null) {
    guildId = stateFromStores1.getGuildId();
  }
  type = undefined;
  if (stateFromStores1 != null) {
    type = stateFromStores1.type;
  }
  bitrate = undefined;
  if (stateFromStores1 != null) {
    bitrate = stateFromStores1.bitrate;
  }
  name = null;
  if (null != stateFromStores5) {
    name = stateFromStores5.name;
  }
  application_id = null;
  if (null != stateFromStores5) {
    application_id = stateFromStores5.application_id;
  }
  hasItem = undefined;
  if (stateFromStores7 != null) {
    const features = stateFromStores7.features;
    hasItem = features.has(constants2.PREVIEW_ENABLED);
  }
  const merged = Object.assign(obj3);
  return <AutoAnalytics />;
};
