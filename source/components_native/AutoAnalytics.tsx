// Module ID: 15300
// Function ID: 116374
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15300 (_isNativeReflectConstruct)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import closure_7 from "result";
import closure_8 from "result";
import closure_9 from "result";
import closure_10 from "result";
import closure_12 from "result";
import closure_13 from "result";
import closure_14 from "result";
import closure_15 from "result";
import closure_16 from "result";
import closure_17 from "result";
import closure_18 from "result";
import closure_19 from "result";
import closure_20 from "result";
import closure_21 from "result";
import closure_22 from "result";
import closure_23 from "result";
import result from "result";
import { isStaticChannelRoute } from "result";
import { PremiumTypes } from "result";
import { jsx } from "result";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_11 = importDefault(dependencyMap[9]);
({ AnalyticEvents: closure_24, ActivityTypes: closure_25, GuildFeatures: closure_26 } = result);
let closure_30 = (PureComponent) => {
  class AutoAnalytics {
    constructor() {
      self = this;
      tmp = closure_3(this, AutoAnalytics);
      obj = closure_6(AutoAnalytics);
      tmp2 = closure_5;
      if (closure_31()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = AutoAnalytics;
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
        const merged = Object.assign(AutoAnalytics(closure_2[26]).getChannelOpenedMetadata(selectedChannelId));
        obj["selected_guild_id"] = selectedGuildId;
        self._trackWithMetadata(constants.CHANNEL_OPENED, obj);
        obj = { channelId: selectedChannelId };
        callback(closure_2[27])(obj);
        if (tmp) {
          obj = AutoAnalytics(closure_2[26]);
          const obj1 = { channel_is_nsfw: tmp2 };
          obj.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj1);
        }
        const obj11 = AutoAnalytics(closure_2[26]);
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
        obj4["viewing_all_channels"] = !closure_22.isOptInEnabled(selectedGuildId);
        let obj5 = AutoAnalytics(closure_2[28]);
        const merged2 = Object.assign(obj5.collectGuildThemeAnalyticsMetadata(selectedGuildId));
        self._trackWithMetadata(constants.GUILD_VIEWED, obj4);
        obj5 = { guild_id: selectedGuildId };
        AutoAnalytics(closure_2[29]).trackClickstream(constants.GUILD_VIEWED_CLICKSTREAM, obj5);
        const obj7 = AutoAnalytics(closure_2[29]);
        if (obj9.isFavoritesGuildId(selectedGuildId)) {
          const result = self.trackFavoritesGuildViewed();
        }
        const obj9 = AutoAnalytics(closure_2[30]);
      }
    }
  };
  const items = [obj, , , , , , ];
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
          const stageInstanceByChannel = store2.getStageInstanceByChannel(voiceChannelId.voiceChannelId);
          const activeEventByChannel = store.getActiveEventByChannel(voiceChannelId.voiceChannelId);
          const lastRTCConnectionState = store4.getLastRTCConnectionState();
          let channelId;
          if (null != lastRTCConnectionState) {
            channelId = lastRTCConnectionState.channelId;
          }
          let tmp2 = lastRTCConnectionState;
          if (channelId !== voiceChannelId.voiceChannelId) {
            tmp2 = null;
          }
          let obj = callback(closure_2[31]);
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
          let obj2 = AutoAnalytics(closure_2[26]);
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
          obj.track(constants.LEAVE_VOICE_CHANNEL, obj);
        }
      }
      if (voiceChannelId.voiceChannelId !== voiceChannelId) {
        if (null != voiceChannelId) {
          const stageInstanceByChannel1 = store2.getStageInstanceByChannel(voiceChannelId);
          const activeEventByChannel1 = store.getActiveEventByChannel(voiceChannelId);
          obj = { channel_id: voiceChannelId, channel_type: voiceChannelType, channel_bitrate: voiceChannelBitrate, guild_id: voiceChannelGuildId, connection_type: store3.getType(), effective_connection_speed: store3.getEffectiveConnectionSpeed(), service_provider: store3.getServiceProvider() };
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
          obj.join_voice_id = store4.getJoinVoiceId();
          let obj3 = AutoAnalytics(closure_2[26]);
          const merged3 = Object.assign(obj3.getVoiceStateMetadata(voiceChannelGuildId, voiceChannelId, videoEnabled));
          const merged4 = Object.assign(self.getGameMetadata());
          callback(closure_2[31]).track(constants.JOIN_VOICE_CHANNEL, obj);
          const obj23 = callback(closure_2[31]);
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
          const found = items.filter(AutoAnalytics(closure_2[32]).isNotNullish);
          if (!isScreenSharing) {
            str3 = "none";
            if (videoEnabled) {
              str3 = "camera";
            }
          }
          let obj4 = callback(closure_2[31]);
          const obj1 = { video_input_type: str3, enabled_inputs: found, channel_id: voiceChannelId, channel_type: voiceChannelType, guild_id: voiceChannelGuildId };
          const merged5 = Object.assign(self.getGameMetadata());
          let obj6 = AutoAnalytics(closure_2[26]);
          const merged6 = Object.assign(obj6.collectVoiceAnalyticsMetadata(voiceChannelId));
          obj4.track(constants.VIDEO_INPUT_TOGGLED, obj1);
        }
      }
      let tmp45 = null == selectedChannelId;
      if (!tmp45) {
        tmp45 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
        const tmp46 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
      }
      if (!tmp45) {
        obj2 = {};
        let obj8 = AutoAnalytics(closure_2[33]);
        const merged7 = Object.assign(obj8.getChannelOpenedRouteTrackingProps(selectedChannelId));
        let obj9 = AutoAnalytics(closure_2[26]);
        const merged8 = Object.assign(obj9.getChannelOpenedMetadata(selectedChannelId));
        obj2["selected_guild_id"] = selectedGuildId;
        self._trackWithMetadata(constants.CHANNEL_OPENED, obj2);
        obj3 = { channelId: selectedChannelId };
        callback(closure_2[27])(obj3);
        if (isTextInVoice) {
          obj4 = { channel_is_nsfw: isNSFWChannel };
          AutoAnalytics(closure_2[26]).trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj4);
          const obj12 = AutoAnalytics(closure_2[26]);
        }
      }
      if (isTextInVoice) {
        isTextInVoice = !voiceChannelId.isTextInVoice;
      }
      if (isTextInVoice) {
        const obj5 = { channel_is_nsfw: isNSFWChannel };
        AutoAnalytics(closure_2[26]).trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj5);
        const obj14 = AutoAnalytics(closure_2[26]);
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
          obj8["viewing_all_channels"] = !closure_22.isOptInEnabled(selectedGuildId);
          const merged10 = Object.assign(AutoAnalytics(closure_2[28]).collectGuildThemeAnalyticsMetadata(selectedGuildId));
          self._trackWithMetadata(constants.GUILD_VIEWED, obj8);
          const obj19 = AutoAnalytics(closure_2[28]);
          obj9 = { guild_id: selectedGuildId };
          AutoAnalytics(closure_2[29]).trackClickstream(constants.GUILD_VIEWED_CLICKSTREAM, obj9);
          const obj20 = AutoAnalytics(closure_2[29]);
          if (obj22.isFavoritesGuildId(selectedGuildId)) {
            const result = self.trackFavoritesGuildViewed();
          }
          const obj22 = AutoAnalytics(closure_2[30]);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "trackFavoritesGuildViewed",
    value() {
      const FavoritesGuildExperiment = AutoAnalytics(closure_2[34]).FavoritesGuildExperiment;
      const obj = callback(closure_2[35]);
      const isPremiumExactlyResult = callback(closure_2[35]).isPremiumExactly(currentUser.getCurrentUser(), TIER_2.TIER_2);
      const result = AutoAnalytics(closure_2[36]).trackFavoritesGuildViewed("manual_browsing", favoritesCount.getFavoritesCount(), FavoritesGuildExperiment.getConfig({ location: "AutoAnalytics" }).enabled, isPremiumExactlyResult);
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
    value(TEXT_AREA_CTA_CLICKED, trackWithMetadataResult) {
      let obj = trackWithMetadataResult;
      const self = this;
      if (trackWithMetadataResult === undefined) {
        obj = {};
      }
      if (self.props.connected) {
        AutoAnalytics(closure_2[26]).trackWithMetadata(TEXT_AREA_CTA_CLICKED, obj);
        const obj5 = AutoAnalytics(closure_2[26]);
      } else {
        if (!obj2.isThrottled(TEXT_AREA_CTA_CLICKED)) {
          obj = {};
          const merged = Object.assign(obj);
          const merged1 = Object.assign(self.collectDefaultAnalyticsMetadata(tmp, tmp2));
          callback(closure_2[31]).track(TEXT_AREA_CTA_CLICKED, obj);
          const obj4 = callback(closure_2[31]);
        }
        const obj2 = callback(closure_2[31]);
      }
    }
  };
  items[5] = {
    key: "collectDefaultAnalyticsMetadata",
    value(guild_id, channel_static_route) {
      const obj = { guild_id };
      if (null == channel_static_route) {
        return obj;
      } else if (callback4(channel_static_route)) {
        obj.channel_static_route = channel_static_route;
        return obj;
      } else {
        const channel = channel.getChannel(channel_static_route);
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
}(require("result").PureComponent);
result = result.fileFinishedImporting("components_native/AutoAnalytics.tsx");

export default function ConnectedAutoAnalytics() {
  let obj = arg1(dependencyMap[37]);
  const items = [closure_19];
  const stateFromStores = obj.useStateFromStores(items, () => store2.getVoiceChannelId(), []);
  const arg1 = stateFromStores;
  const items1 = [closure_13];
  const items2 = [stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[37]).useStateFromStores(items1, () => store.getChannel(stateFromStores), items2);
  const obj2 = arg1(dependencyMap[37]);
  const items3 = [closure_19];
  const stateFromStores2 = arg1(dependencyMap[37]).useStateFromStores(items3, () => store2.getChannelId(undefined, false));
  const importDefault = stateFromStores2;
  const obj4 = arg1(dependencyMap[37]);
  const items4 = [closure_13];
  const items5 = [stateFromStores2];
  const stateFromStores3 = arg1(dependencyMap[37]).useStateFromStores(items4, () => store.getChannel(stateFromStores2), items5);
  let nsfw;
  if (null != stateFromStores3) {
    nsfw = stateFromStores3.nsfw;
  }
  const obj5 = arg1(dependencyMap[37]);
  const items6 = [closure_8];
  const items7 = [stateFromStores2];
  const stateFromStores4 = arg1(dependencyMap[37]).useStateFromStores(items6, () => {
    let chatOpen = null != stateFromStores2;
    if (chatOpen) {
      chatOpen = chatOpen.getChatOpen(stateFromStores2);
    }
    return chatOpen;
  }, items7);
  const obj6 = arg1(dependencyMap[37]);
  const items8 = [closure_21];
  const stateFromStores5 = arg1(dependencyMap[37]).useStateFromStores(items8, () => closure_21.findActivity((type) => type.type === constants.PLAYING), []);
  const obj7 = arg1(dependencyMap[37]);
  const items9 = [closure_20];
  const stateFromStores6 = arg1(dependencyMap[37]).useStateFromStores(items9, () => guildId.getGuildId(), []);
  const dependencyMap = stateFromStores6;
  const obj8 = arg1(dependencyMap[37]);
  const items10 = [closure_15];
  const items11 = [stateFromStores6];
  const stateFromStores7 = arg1(dependencyMap[37]).useStateFromStores(items10, () => guild.getGuild(stateFromStores6), items11);
  const obj9 = arg1(dependencyMap[37]);
  const items12 = [closure_23];
  const stateFromStores8 = arg1(dependencyMap[37]).useStateFromStores(items12, () => currentUser.getCurrentUser(), []);
  let closure_3 = stateFromStores8;
  const obj10 = arg1(dependencyMap[37]);
  const items13 = [closure_14];
  const items14 = [stateFromStores8, stateFromStores6];
  const stateFromStores9 = arg1(dependencyMap[37]).useStateFromStores(items13, () => {
    let tmp = null != stateFromStores8;
    if (tmp) {
      tmp = null != stateFromStores6;
    }
    if (tmp) {
      const member = member.getMember(stateFromStores6, stateFromStores8.id);
      let isPending;
      if (null != member) {
        isPending = member.isPending;
      }
      tmp = null != isPending && isPending;
      const tmp8 = null != isPending && isPending;
    }
    return tmp;
  }, items14);
  const obj11 = arg1(dependencyMap[37]);
  const items15 = [closure_16];
  const stateFromStores10 = arg1(dependencyMap[37]).useStateFromStores(items15, () => closure_16.isVideoEnabled(), []);
  const obj12 = arg1(dependencyMap[37]);
  const items16 = [closure_16];
  const stateFromStores11 = arg1(dependencyMap[37]).useStateFromStores(items16, () => closure_16.isScreenSharing(), []);
  const obj13 = arg1(dependencyMap[37]);
  const items17 = [closure_10];
  const stateFromStores12 = arg1(dependencyMap[37]).useStateFromStores(items17, () => connected.isConnected(), []);
  obj = {};
  let id;
  const obj14 = arg1(dependencyMap[37]);
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
  obj.gamePlatform = importDefault(dependencyMap[39])(stateFromStores5);
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
  obj.postableChannelCount = importDefault(dependencyMap[38])(stateFromStores6);
  obj.isTextInVoice = stateFromStores4;
  obj = {};
  const merged = Object.assign(obj);
  return <closure_30 {...obj} />;
};
