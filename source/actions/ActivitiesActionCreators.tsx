// Module ID: 10484
// Function ID: 80864
// Dependencies: [5, 1348, 653, 4123, 686, 507, 6923, 6691, 4324, 4140, 2]

// Module 10484
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ Endpoints: closure_5, ActivityTypes: closure_6, AnalyticEvents: closure_7, LoggingInviteTypes: closure_8 } = ME);
const result = require("ME").fileFinishedImporting("actions/ActivitiesActionCreators.tsx");

export default {
  updateActivity(applicationId) {
    applicationId = applicationId.applicationId;
    const distributor = applicationId.distributor;
    let token = applicationId.token;
    if (token === undefined) {
      token = null;
    }
    let num = applicationId.duration;
    if (num === undefined) {
      num = 0;
    }
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
    let obj = distributor(num[4]);
    obj.wait(() => {
      let obj = distributor(num[4]);
      obj = { type: "ACTIVITY_UPDATE_START", applicationId, duration: num, distributor };
      return obj.dispatch(obj);
    });
    const HTTP = applicationId(num[5]).HTTP;
    obj = { url: constants.ACTIVITIES, body: null, retries: 1, oldFormErrors: true, rejectWithError: true };
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
    let importDefault;
    let targetUserId;
    let type;
    activity = activity.activity;
    ({ content, location: importDefault } = activity);
    ({ type, targetUserId } = activity);
    channel = channel.getChannel(activity.channelId);
    if (null == channel) {
      return Promise.resolve(null);
    } else {
      let str = "";
      if (null != content) {
        str = content;
      }
      const parsed = importDefault(channel[6]).parse(channel, str);
      let obj = importDefault(channel[7]);
      obj = {};
      obj = { type, activity, targetUserId };
      obj.activityAction = obj;
      obj.location = MessageSendLocation.ACTIVITY_SHARE;
      const obj4 = importDefault(channel[6]);
      return obj.sendMessage(channel.id, parsed, false, obj).then((body) => {
        let obj = outer1_1(channel[8]);
        obj = { location: closure_1 };
        if (activity.type === outer1_6.LISTENING) {
          let APPLICATION = outer1_8.SPOTIFY;
        } else {
          APPLICATION = outer1_8.APPLICATION;
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
        obj.trackWithMetadata(outer1_7.INVITE_SENT, obj);
        return Promise.resolve(channel);
      }, (arg0) => Promise.reject(arg0));
    }
  },
  sendActivityInviteUser(userId) {
    let _isNativeReflectConstruct;
    let closure_4;
    let dependencyMap;
    let importDefault;
    const self = this;
    ({ type: importDefault, activity: dependencyMap, content: _isNativeReflectConstruct, location: closure_4 } = userId);
    const obj = importDefault(4140);
    return importDefault(4140).ensurePrivateChannel(userId.userId).then((channelId) => self.sendActivityInvite({ channelId, type: closure_1, activity: closure_2, content: _isNativeReflectConstruct, location: closure_4 }));
  },
  getJoinSecret(arg0, arg1, arg2, arg3, arg4) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    const callback = arg3;
    let closure_4 = arg4;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  subscribeActivities(items) {
    let closure_0 = items;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
