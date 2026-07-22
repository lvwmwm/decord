// Module ID: 10445
// Function ID: 80622
// Dependencies: [44957696, 509739008, 93650944, 37093376, 131072, 1005584384, 5, 57, 31, 1921, 1348]

// Module 10445
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ Endpoints: closure_5, ActivityTypes: closure_6, AnalyticEvents: closure_7, LoggingInviteTypes: closure_8 } = arg1(dependencyMap[2]));
const MessageSendLocation = arg1(dependencyMap[3]).MessageSendLocation;
const result = _isNativeReflectConstruct.fileFinishedImporting("actions/ActivitiesActionCreators.tsx");

export default {
  updateActivity(applicationId) {
    applicationId = applicationId.applicationId;
    const arg1 = applicationId;
    const distributor = applicationId.distributor;
    const importDefault = distributor;
    let token = applicationId.token;
    if (token === undefined) {
      token = null;
    }
    let num = applicationId.duration;
    if (num === undefined) {
      num = 0;
    }
    const dependencyMap = num;
    let flag = applicationId.closed;
    if (flag === undefined) {
      flag = false;
    }
    let exePath = applicationId.exePath;
    if (exePath === undefined) {
      exePath = null;
    }
    let voiceChannelId = applicationId.voiceChannelId;
    if (voiceChannelId === undefined) {
      voiceChannelId = null;
    }
    let sessionId = applicationId.sessionId;
    if (sessionId === undefined) {
      sessionId = null;
    }
    let mediaSessionId = applicationId.mediaSessionId;
    if (mediaSessionId === undefined) {
      mediaSessionId = null;
    }
    let obj = importDefault(dependencyMap[4]);
    obj.wait(() => {
      let obj = distributor(num[4]);
      obj = { type: "ACTIVITY_UPDATE_START", applicationId, duration: num, distributor };
      return obj.dispatch(obj);
    });
    const HTTP = arg1(dependencyMap[5]).HTTP;
    obj = { textVariant: true, emojiOnlyEmojiSize: "/assets/images/native/wumpus", textMinWidth: 84, statusBubblePaddingHorizontal: 66, statusBubblePaddingVertical: null, url: constants.ACTIVITIES };
    obj = { application_id: applicationId, token, duration: num, share_activity: applicationId.shareActivity, distributor, closed: flag, exePath, voice_channel_id: voiceChannelId, session_id: sessionId, media_session_id: mediaSessionId };
    obj.body = obj;
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      let obj = distributor(num[4]);
      obj = { type: "ACTIVITY_UPDATE_SUCCESS", applicationId, token: body.body.token, duration: num, distributor };
      obj.dispatch(obj);
    }).catch(() => {
      let obj = distributor(num[4]);
      obj = { type: "ACTIVITY_UPDATE_FAIL", applicationId };
      obj.dispatch(obj);
    });
  },
  sendActivityInvite(activity) {
    let content;
    let targetUserId;
    let type;
    activity = activity.activity;
    const arg1 = activity;
    ({ content, location: closure_1 } = activity);
    ({ type, targetUserId } = activity);
    const channel = channel.getChannel(activity.channelId);
    const dependencyMap = channel;
    if (null == channel) {
      return Promise.resolve(null);
    } else {
      let str = "";
      if (null != content) {
        str = content;
      }
      const parsed = importDefault(dependencyMap[6]).parse(channel, str);
      let obj = importDefault(dependencyMap[7]);
      obj = {};
      obj = { type, activity, targetUserId };
      obj.activityAction = obj;
      obj.location = MessageSendLocation.ACTIVITY_SHARE;
      const obj4 = importDefault(dependencyMap[6]);
      return obj.sendMessage(channel.id, parsed, false, obj).then((body) => {
        let obj = callback(channel[8]);
        obj = { location: callback };
        if (activity.type === constants.LISTENING) {
          let APPLICATION = constants3.SPOTIFY;
        } else {
          APPLICATION = constants3.APPLICATION;
        }
        obj.invite_type = APPLICATION;
        obj.application_id = activity.application_id;
        obj.guild_id = channel.getGuildId();
        obj.channel_id = channel.id;
        let id = null;
        if (null != body) {
          id = body.body.id;
        }
        obj.message_id = id;
        obj.trackWithMetadata(constants2.INVITE_SENT, obj);
        return Promise.resolve(channel);
      }, (arg0) => Promise.reject(arg0));
    }
  },
  sendActivityInviteUser(userId) {
    const arg1 = this;
    ({ type: closure_1, activity: closure_2, content: closure_3, location: closure_4 } = userId);
    const obj = importDefault(dependencyMap[9]);
    return importDefault(dependencyMap[9]).ensurePrivateChannel(userId.userId).then((channelId) => self.sendActivityInvite({ channelId, type: closure_1, activity: closure_2, content: closure_3, location: closure_4 }));
  },
  getJoinSecret(arg0, arg1, arg2, arg3, arg4) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    const callback = arg3;
    let closure_4 = arg4;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  subscribeActivities(items) {
    const arg1 = items;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
