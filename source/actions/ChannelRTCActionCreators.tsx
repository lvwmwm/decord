// Module ID: 4319
// Function ID: 37836
// Dependencies: []

// Module 4319
const _module = require(dependencyMap[0]);
({ AppContext: closure_3, AnalyticEvents: closure_4, ComponentActions: closure_5 } = _module);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("actions/ChannelRTCActionCreators.tsx");

export default {
  rebuildRTCActiveChannels() {
    importDefault(dependencyMap[1]).dispatch({ type: "CHANNEL_RTC_ACTIVE_CHANNELS" });
  },
  selectParticipant(id, embeddedActivityParticipantId) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_RTC_SELECT_PARTICIPANT", channelId: id, id: embeddedActivityParticipantId };
    obj.dispatch(obj);
  },
  popoutParticipant(channelId, participantId) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_RTC_POPOUT_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj);
  },
  returnParticipant(channelId, participantId) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_RTC_RETURN_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj);
  },
  updateLayout(channelId, layout) {
    let APP = arg2;
    if (arg2 === undefined) {
      APP = constants.APP;
    }
    let obj = importDefault(dependencyMap[2]);
    obj = { video_layout: layout };
    const merged = Object.assign(require(dependencyMap[3]).collectVoiceAnalyticsMetadata(channelId));
    obj.track(constants2.VIDEO_LAYOUT_TOGGLED, obj);
    const obj3 = require(dependencyMap[3]);
    obj = { type: "CHANNEL_RTC_UPDATE_LAYOUT", channelId, layout, appContext: APP };
    importDefault(dependencyMap[1]).dispatch(obj);
  },
  toggleParticipants(channelId, participantsOpen) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN", channelId, participantsOpen };
    obj.dispatch(obj);
  },
  toggleVoiceParticipantsHidden(channelId, voiceParticipantsHidden) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN", channelId, voiceParticipantsHidden };
    obj.dispatch(obj);
  },
  updateStageStreamSize(channelId, large) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId, large };
    obj.dispatch(obj);
  },
  updateStageVideoLimitBoostUpsellDismissed(channelId, dismissed) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED", channelId, dismissed };
    obj.dispatch(obj);
  },
  updateChatOpen(channelId, chatOpen) {
    const require = channelId;
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId, chatOpen };
    obj.dispatch(obj);
    if (chatOpen) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const ComponentDispatch = arg0(closure_2[4]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.FOCUS_CHANNEL_TEXT_AREA, { channelId: arg0 });
      }, 0);
    } else {
      const ComponentDispatch = require(dependencyMap[4]).ComponentDispatch;
      ComponentDispatch.dispatch(constants3.FOCUS_CHAT_BUTTON);
    }
  },
  jumpToVoiceChannelMessage(voiceGuildId, voiceChannelId, voiceMessageId, jumpType) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE", guildId: voiceGuildId, channelId: voiceChannelId, messageId: voiceMessageId, jumpType };
    obj.dispatch(obj);
  }
};
