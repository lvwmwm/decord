// Module ID: 4323
// Function ID: 37868
// Dependencies: [653, 686, 675, 4324, 1207, 2]

// Module 4323
import ME from "ME";

let closure_3;
let closure_4;
let closure_5;
({ AppContext: closure_3, AnalyticEvents: closure_4, ComponentActions: closure_5 } = ME);
const result = require("expandLocation").fileFinishedImporting("actions/ChannelRTCActionCreators.tsx");

export default {
  rebuildRTCActiveChannels() {
    importDefault(686).dispatch({ type: "CHANNEL_RTC_ACTIVE_CHANNELS" });
  },
  selectParticipant(id, embeddedActivityParticipantId) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_RTC_SELECT_PARTICIPANT", channelId: id, id: embeddedActivityParticipantId };
    obj.dispatch(obj);
  },
  popoutParticipant(channelId, participantId) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_RTC_POPOUT_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj);
  },
  returnParticipant(channelId, participantId) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_RTC_RETURN_PARTICIPANT", channelId, participantId };
    obj.dispatch(obj);
  },
  updateLayout(channelId, layout) {
    let APP = arg2;
    if (arg2 === undefined) {
      APP = constants.APP;
    }
    let obj = importDefault(675);
    obj = { video_layout: layout };
    const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectVoiceAnalyticsMetadata(channelId));
    obj.track(constants2.VIDEO_LAYOUT_TOGGLED, obj);
    const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
    obj = { type: "CHANNEL_RTC_UPDATE_LAYOUT", channelId, layout, appContext: APP };
    importDefault(686).dispatch(obj);
  },
  toggleParticipants(channelId, participantsOpen) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN", channelId, participantsOpen };
    obj.dispatch(obj);
  },
  toggleVoiceParticipantsHidden(channelId, voiceParticipantsHidden) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN", channelId, voiceParticipantsHidden };
    obj.dispatch(obj);
  },
  updateStageStreamSize(channelId, large) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId, large };
    obj.dispatch(obj);
  },
  updateStageVideoLimitBoostUpsellDismissed(channelId, dismissed) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED", channelId, dismissed };
    obj.dispatch(obj);
  },
  updateChatOpen(channelId, chatOpen) {
    const _require = channelId;
    let obj = importDefault(686);
    obj = { type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId, chatOpen };
    obj.dispatch(obj);
    if (chatOpen) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const ComponentDispatch = channelId(outer1_2[4]).ComponentDispatch;
        ComponentDispatch.dispatch(outer1_5.FOCUS_CHANNEL_TEXT_AREA, { channelId });
      }, 0);
    } else {
      let ComponentDispatch = _require(1207).ComponentDispatch;
      ComponentDispatch.dispatch(constants3.FOCUS_CHAT_BUTTON);
    }
  },
  jumpToVoiceChannelMessage(voiceGuildId, voiceChannelId, voiceMessageId, jumpType) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE", guildId: voiceGuildId, channelId: voiceChannelId, messageId: voiceMessageId, jumpType };
    obj.dispatch(obj);
  }
};
