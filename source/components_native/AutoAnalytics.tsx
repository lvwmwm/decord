// Module ID: 15472
// Function ID: 118913
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 4143, 1351, 4808, 6758, 1353, 1348, 1917, 1838, 4177, 4222, 4202, 1906, 3947, 4810, 4325, 1849, 653, 1355, 1851, 33, 4324, 7016, 15473, 6700, 5077, 675, 1327, 15474, 10223, 1872, 10224, 566, 15475, 15476, 2]
// Exports: default

// Module 15472 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import ME from "ME";
import { isStaticChannelRoute } from "set";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "getChannelOpenedRouteTrackingProps";
import importAllResult from "expandLocation";

let closure_24;
let closure_25;
let closure_26;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ AnalyticEvents: closure_24, ActivityTypes: closure_25, GuildFeatures: closure_26 } = ME);
let closure_30 = ((PureComponent) => {
  class AutoAnalytics {
    constructor() {
      self = this;
      tmp = outer1_3(this, AutoAnalytics);
      obj = outer1_6(AutoAnalytics);
      tmp2 = outer1_5;
      if (outer1_31()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AutoAnalytics, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
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
        let obj = {};
        const merged = Object.assign(AutoAnalytics(outer1_2[26]).getChannelOpenedMetadata(selectedChannelId));
        obj["selected_guild_id"] = selectedGuildId;
        self._trackWithMetadata(outer1_24.CHANNEL_OPENED, obj);
        obj = { channelId: selectedChannelId };
        outer1_1(outer1_2[27])(obj);
        if (tmp) {
          obj = AutoAnalytics(outer1_2[26]);
          const obj1 = { channel_is_nsfw: tmp2 };
          obj.trackWithMetadata(outer1_24.TEXT_IN_VOICE_OPENED, obj1);
        }
        const obj11 = AutoAnalytics(outer1_2[26]);
      }
      if (null != selectedGuildId) {
        if (isMemberPending) {
          const obj2 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
          let obj3 = obj2;
        } else {
          obj3 = {};
        }
        const obj4 = {};
        const merged1 = Object.assign(obj3);
        obj4["postable_channels"] = postableChannelCount;
        obj4["viewing_all_channels"] = !outer1_22.isOptInEnabled(selectedGuildId);
        let obj5 = AutoAnalytics(outer1_2[28]);
        const merged2 = Object.assign(obj5.collectGuildThemeAnalyticsMetadata(selectedGuildId));
        self._trackWithMetadata(outer1_24.GUILD_VIEWED, obj4);
        obj5 = { guild_id: selectedGuildId };
        AutoAnalytics(outer1_2[29]).trackClickstream(outer1_24.GUILD_VIEWED_CLICKSTREAM, obj5);
        const obj7 = AutoAnalytics(outer1_2[29]);
        if (obj9.isFavoritesGuildId(selectedGuildId)) {
          const result = self.trackFavoritesGuildViewed();
        }
        obj9 = AutoAnalytics(outer1_2[30]);
      }
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "componentDidUpdate",
    value(voiceChannelId) {
      let hasPreviewEnabled;
      let isMemberPending;
      let isNSFWChannel;
      let isScreenSharing;
      let isTextInVoice;
      let postableChannelCount;
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
          const stageInstanceByChannel = outer1_12.getStageInstanceByChannel(voiceChannelId.voiceChannelId);
          const activeEventByChannel = outer1_11.getActiveEventByChannel(voiceChannelId.voiceChannelId);
          const lastRTCConnectionState = outer1_18.getLastRTCConnectionState();
          let channelId;
          if (null != lastRTCConnectionState) {
            channelId = lastRTCConnectionState.channelId;
          }
          let tmp2 = lastRTCConnectionState;
          if (channelId !== voiceChannelId.voiceChannelId) {
            tmp2 = null;
          }
          let obj = outer1_1(outer1_2[31]);
          obj = {};
          ({ voiceChannelId: obj2.channel_id, voiceChannelType: obj2.channel_type, voiceChannelBitrate: obj2.channel_bitrate, voiceChannelGuildId: obj2.guild_id } = voiceChannelId);
          let rtcConnectionId;
          if (null != tmp2) {
            rtcConnectionId = tmp2.rtcConnectionId;
          }
          obj.rtc_connection_id = rtcConnectionId;
          let duration;
          if (null != tmp2) {
            duration = tmp2.duration;
          }
          obj.duration = duration;
          let mediaSessionId;
          if (null != tmp2) {
            mediaSessionId = tmp2.mediaSessionId;
          }
          obj.media_session_id = mediaSessionId;
          let id;
          if (null != stageInstanceByChannel) {
            id = stageInstanceByChannel.id;
          }
          obj.stage_instance_id = id;
          let id1;
          if (null != activeEventByChannel) {
            id1 = activeEventByChannel.id;
          }
          obj.guild_scheduled_event_id = id1;
          let obj2 = AutoAnalytics(outer1_2[26]);
          const merged = Object.assign(obj2.getVoiceStateMetadata(voiceChannelId.voiceChannelGuildId, voiceChannelId.voiceChannelId, voiceChannelId.videoEnabled));
          const merged1 = Object.assign(self.getGameMetadata());
          let stats;
          if (null != tmp2) {
            const voiceStateAnalytics = tmp2.voiceStateAnalytics;
            if (null != voiceStateAnalytics) {
              stats = voiceStateAnalytics.getStats();
            }
          }
          const merged2 = Object.assign(stats);
          obj.track(outer1_24.LEAVE_VOICE_CHANNEL, obj);
        }
      }
      if (voiceChannelId.voiceChannelId !== voiceChannelId) {
        if (null != voiceChannelId) {
          const stageInstanceByChannel1 = outer1_12.getStageInstanceByChannel(voiceChannelId);
          const activeEventByChannel1 = outer1_11.getActiveEventByChannel(voiceChannelId);
          obj = { channel_id: voiceChannelId, channel_type: voiceChannelType, channel_bitrate: voiceChannelBitrate, guild_id: voiceChannelGuildId, connection_type: outer1_17.getType(), effective_connection_speed: outer1_17.getEffectiveConnectionSpeed(), service_provider: outer1_17.getServiceProvider() };
          let id2;
          if (null != stageInstanceByChannel1) {
            id2 = stageInstanceByChannel1.id;
          }
          obj.stage_instance_id = id2;
          let id3;
          if (null != activeEventByChannel1) {
            id3 = activeEventByChannel1.id;
          }
          obj.guild_scheduled_event_id = id3;
          obj.join_voice_id = outer1_18.getJoinVoiceId();
          let obj3 = AutoAnalytics(outer1_2[26]);
          const merged3 = Object.assign(obj3.getVoiceStateMetadata(voiceChannelGuildId, voiceChannelId, videoEnabled));
          const merged4 = Object.assign(self.getGameMetadata());
          outer1_1(outer1_2[31]).track(outer1_24.JOIN_VOICE_CHANNEL, obj);
          const obj23 = outer1_1(outer1_2[31]);
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
          const found = items.filter(AutoAnalytics(outer1_2[32]).isNotNullish);
          if (!isScreenSharing) {
            str3 = "none";
            if (videoEnabled) {
              str3 = "camera";
            }
          }
          let obj4 = outer1_1(outer1_2[31]);
          const obj1 = { video_input_type: str3, enabled_inputs: found, channel_id: voiceChannelId, channel_type: voiceChannelType, guild_id: voiceChannelGuildId };
          const merged5 = Object.assign(self.getGameMetadata());
          let obj6 = AutoAnalytics(outer1_2[26]);
          const merged6 = Object.assign(obj6.collectVoiceAnalyticsMetadata(voiceChannelId));
          obj4.track(outer1_24.VIDEO_INPUT_TOGGLED, obj1);
        }
      }
      let tmp45 = null == selectedChannelId;
      if (!tmp45) {
        tmp45 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
        const tmp46 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
      }
      if (!tmp45) {
        obj2 = {};
        let obj8 = AutoAnalytics(outer1_2[33]);
        const merged7 = Object.assign(obj8.getChannelOpenedRouteTrackingProps(selectedChannelId));
        let obj9 = AutoAnalytics(outer1_2[26]);
        const merged8 = Object.assign(obj9.getChannelOpenedMetadata(selectedChannelId));
        obj2["selected_guild_id"] = selectedGuildId;
        self._trackWithMetadata(outer1_24.CHANNEL_OPENED, obj2);
        obj3 = { channelId: selectedChannelId };
        outer1_1(outer1_2[27])(obj3);
        if (isTextInVoice) {
          obj4 = { channel_is_nsfw: isNSFWChannel };
          AutoAnalytics(outer1_2[26]).trackWithMetadata(outer1_24.TEXT_IN_VOICE_OPENED, obj4);
          const obj12 = AutoAnalytics(outer1_2[26]);
        }
      }
      if (isTextInVoice) {
        isTextInVoice = !voiceChannelId.isTextInVoice;
      }
      if (isTextInVoice) {
        const obj5 = { channel_is_nsfw: isNSFWChannel };
        AutoAnalytics(outer1_2[26]).trackWithMetadata(outer1_24.TEXT_IN_VOICE_OPENED, obj5);
        const obj14 = AutoAnalytics(outer1_2[26]);
      }
      if (null != selectedGuildId) {
        if (voiceChannelId.selectedGuildId !== selectedGuildId) {
          if (isMemberPending) {
            obj6 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
            let obj7 = obj6;
          } else {
            obj7 = {};
          }
          obj8 = {};
          const merged9 = Object.assign(obj7);
          obj8["postable_channels"] = postableChannelCount;
          obj8["viewing_all_channels"] = !outer1_22.isOptInEnabled(selectedGuildId);
          const merged10 = Object.assign(AutoAnalytics(outer1_2[28]).collectGuildThemeAnalyticsMetadata(selectedGuildId));
          self._trackWithMetadata(outer1_24.GUILD_VIEWED, obj8);
          const obj19 = AutoAnalytics(outer1_2[28]);
          obj9 = { guild_id: selectedGuildId };
          AutoAnalytics(outer1_2[29]).trackClickstream(outer1_24.GUILD_VIEWED_CLICKSTREAM, obj9);
          const obj20 = AutoAnalytics(outer1_2[29]);
          if (obj22.isFavoritesGuildId(selectedGuildId)) {
            const result = self.trackFavoritesGuildViewed();
          }
          obj22 = AutoAnalytics(outer1_2[30]);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "trackFavoritesGuildViewed",
    value() {
      const FavoritesGuildExperiment = AutoAnalytics(outer1_2[34]).FavoritesGuildExperiment;
      const obj = outer1_1(outer1_2[35]);
      const isPremiumExactlyResult = outer1_1(outer1_2[35]).isPremiumExactly(outer1_23.getCurrentUser(), outer1_28.TIER_2);
      const result = AutoAnalytics(outer1_2[36]).trackFavoritesGuildViewed("manual_browsing", outer1_9.getFavoritesCount(), FavoritesGuildExperiment.getConfig({ location: "AutoAnalytics" }).enabled, isPremiumExactlyResult);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGameMetadata",
    value() {
      const props = this.props;
      return { game_platform: props.gamePlatform, game_name: props.gameName, game_id: props.gameId };
    }
  };
  items[4] = {
    key: "_trackWithMetadata",
    value(name, trackWithMetadataResult) {
      let obj = trackWithMetadataResult;
      const self = this;
      if (trackWithMetadataResult === undefined) {
        obj = {};
      }
      if (self.props.connected) {
        AutoAnalytics(outer1_2[26]).trackWithMetadata(name, obj);
        const obj5 = AutoAnalytics(outer1_2[26]);
      } else {
        if (!obj2.isThrottled(name)) {
          obj = {};
          const merged = Object.assign(obj);
          const merged1 = Object.assign(self.collectDefaultAnalyticsMetadata(tmp, tmp2));
          outer1_1(outer1_2[31]).track(name, obj);
          const obj4 = outer1_1(outer1_2[31]);
        }
        obj2 = outer1_1(outer1_2[31]);
      }
    }
  };
  items[5] = {
    key: "collectDefaultAnalyticsMetadata",
    value(guild_id, channel_static_route) {
      const obj = { guild_id };
      if (null == channel_static_route) {
        return obj;
      } else if (outer1_27(channel_static_route)) {
        obj.channel_static_route = channel_static_route;
        return obj;
      } else {
        const channel = outer1_13.getChannel(channel_static_route);
        obj.channel_id = channel_static_route;
        let type;
        if (null != channel) {
          type = channel.type;
        }
        let tmp5 = null;
        if (null != type) {
          tmp5 = type;
        }
        obj.channel_type = tmp5;
        return obj;
      }
    }
  };
  items[6] = {
    key: "render",
    value() {
      return null;
    }
  };
  return callback(AutoAnalytics, items);
})(require("expandLocation").PureComponent);
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/AutoAnalytics.tsx");

export default function ConnectedAutoAnalytics() {
  let obj = stateFromStores(stateFromStores6[37]);
  const items = [closure_19];
  stateFromStores = obj.useStateFromStores(items, () => outer1_19.getVoiceChannelId(), []);
  const items1 = [closure_13];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(stateFromStores6[37]).useStateFromStores(items1, () => outer1_13.getChannel(stateFromStores), items2);
  const obj2 = stateFromStores(stateFromStores6[37]);
  const items3 = [closure_19];
  const stateFromStores2 = stateFromStores(stateFromStores6[37]).useStateFromStores(items3, () => outer1_19.getChannelId(undefined, false));
  const obj4 = stateFromStores(stateFromStores6[37]);
  const items4 = [closure_13];
  const items5 = [stateFromStores2];
  const stateFromStores3 = stateFromStores(stateFromStores6[37]).useStateFromStores(items4, () => outer1_13.getChannel(stateFromStores2), items5);
  let nsfw;
  if (null != stateFromStores3) {
    nsfw = stateFromStores3.nsfw;
  }
  const obj5 = stateFromStores(stateFromStores6[37]);
  const items6 = [closure_8];
  const items7 = [stateFromStores2];
  const stateFromStores4 = stateFromStores(stateFromStores6[37]).useStateFromStores(items6, () => {
    let chatOpen = null != stateFromStores2;
    if (chatOpen) {
      chatOpen = outer1_8.getChatOpen(stateFromStores2);
    }
    return chatOpen;
  }, items7);
  const obj6 = stateFromStores(stateFromStores6[37]);
  const items8 = [closure_21];
  const stateFromStores5 = stateFromStores(stateFromStores6[37]).useStateFromStores(items8, () => outer1_21.findActivity((type) => type.type === outer2_25.PLAYING), []);
  const obj7 = stateFromStores(stateFromStores6[37]);
  const items9 = [closure_20];
  stateFromStores6 = stateFromStores(stateFromStores6[37]).useStateFromStores(items9, () => outer1_20.getGuildId(), []);
  const obj8 = stateFromStores(stateFromStores6[37]);
  const items10 = [_createForOfIteratorHelperLoose];
  const items11 = [stateFromStores6];
  const stateFromStores7 = stateFromStores(stateFromStores6[37]).useStateFromStores(items10, () => outer1_15.getGuild(stateFromStores6), items11);
  const obj9 = stateFromStores(stateFromStores6[37]);
  const items12 = [closure_23];
  const stateFromStores8 = stateFromStores(stateFromStores6[37]).useStateFromStores(items12, () => outer1_23.getCurrentUser(), []);
  const obj10 = stateFromStores(stateFromStores6[37]);
  const items13 = [closure_14];
  const items14 = [stateFromStores8, stateFromStores6];
  const stateFromStores9 = stateFromStores(stateFromStores6[37]).useStateFromStores(items13, () => {
    let tmp = null != stateFromStores8;
    if (tmp) {
      tmp = null != stateFromStores6;
    }
    if (tmp) {
      const member = outer1_14.getMember(stateFromStores6, stateFromStores8.id);
      let isPending;
      if (null != member) {
        isPending = member.isPending;
      }
      tmp = null != isPending && isPending;
      const tmp8 = null != isPending && isPending;
    }
    return tmp;
  }, items14);
  const obj11 = stateFromStores(stateFromStores6[37]);
  const items15 = [closure_16];
  const stateFromStores10 = stateFromStores(stateFromStores6[37]).useStateFromStores(items15, () => outer1_16.isVideoEnabled(), []);
  const obj12 = stateFromStores(stateFromStores6[37]);
  const items16 = [closure_16];
  const stateFromStores11 = stateFromStores(stateFromStores6[37]).useStateFromStores(items16, () => outer1_16.isScreenSharing(), []);
  const obj13 = stateFromStores(stateFromStores6[37]);
  const items17 = [closure_10];
  const stateFromStores12 = stateFromStores(stateFromStores6[37]).useStateFromStores(items17, () => outer1_10.isConnected(), []);
  obj = {};
  let id;
  const obj14 = stateFromStores(stateFromStores6[37]);
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  obj.voiceChannelId = id;
  let guildId;
  if (null != stateFromStores1) {
    guildId = stateFromStores1.getGuildId();
  }
  obj.voiceChannelGuildId = guildId;
  let type;
  if (null != stateFromStores1) {
    type = stateFromStores1.type;
  }
  obj.voiceChannelType = type;
  let bitrate;
  if (null != stateFromStores1) {
    bitrate = stateFromStores1.bitrate;
  }
  obj.voiceChannelBitrate = bitrate;
  obj.videoEnabled = stateFromStores10;
  obj.isScreenSharing = stateFromStores11;
  obj.gamePlatform = stateFromStores2(stateFromStores6[39])(stateFromStores5);
  let name = null;
  if (null != stateFromStores5) {
    name = stateFromStores5.name;
  }
  obj.gameName = name;
  let application_id = null;
  if (null != stateFromStores5) {
    application_id = stateFromStores5.application_id;
  }
  obj.gameId = application_id;
  obj.selectedChannelId = stateFromStores2;
  obj.selectedGuildId = stateFromStores6;
  obj.connected = stateFromStores12;
  obj.isNSFWChannel = nsfw;
  let hasItem;
  if (null != stateFromStores7) {
    const features = stateFromStores7.features;
    hasItem = features.has(constants.PREVIEW_ENABLED);
  }
  obj.hasPreviewEnabled = hasItem;
  obj.isMemberPending = stateFromStores9;
  obj.postableChannelCount = stateFromStores2(stateFromStores6[38])(stateFromStores6);
  obj.isTextInVoice = stateFromStores4;
  obj = {};
  const merged = Object.assign(obj);
  return <closure_30 />;
};
