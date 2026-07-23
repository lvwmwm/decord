// Module ID: 7460
// Function ID: 59859
// Name: generateAcceptInviteOptions
// Dependencies: [5, 7461, 6758, 1352, 1194, 1348, 1907, 1917, 1838, 7463, 4115, 3758, 3767, 3947, 1849, 653, 1197, 1355, 4195, 6979, 4947, 1360, 7476, 5607, 1210, 1198, 4944, 1934, 7477, 8843, 4227, 4309, 12352, 6755, 4619, 9145, 7918, 5053, 8353, 686, 8651, 4345, 12353, 5048, 675, 507, 4030, 664, 4942, 480, 1361, 4116, 5050, 5589, 3799, 12355, 12356, 8196, 4450, 4368, 12357, 12358, 490, 12360, 2]
// Exports: trackInviteEmbedActioned, trackInviteServerClicked, transitionToGuildFromEventInvite

// Module 7460 (generateAcceptInviteOptions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { isGuildScheduledEventActive as closure_7 } from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import ME from "ME";
import { AgeGateSource } from "result";
import { StaticChannelRoute } from "set";
import { StreamTypes } from "StreamIssueReportReasons";
import { InviteTargetTypes } from "InviteSendStates";
import { STAGE_INVITE_STATE_KEY } from "MAX_STAGE_TOPIC_LENGTH";

let closure_10;
let closure_11;
let closure_12;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_8;
let closure_9;
const require = arg1;
function generateAcceptInviteOptions(target_type) {
  let target_application;
  let target_user;
  const obj = {};
  target_type = target_type.target_type;
  if (InviteTargetTypes.STREAM === target_type) {
    ({ target_type: obj.targetType, target_user } = target_type);
    let id;
    if (null != target_user) {
      id = target_user.id;
    }
    obj.targetUserId = id;
  } else if (InviteTargetTypes.EMBEDDED_APPLICATION === target_type) {
    ({ target_type: obj.targetType, target_application } = target_type);
    let id1;
    if (null != target_application) {
      id1 = target_application.id;
    }
    obj.targetApplicationId = id1;
  } else if (InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE === target_type) {
    obj.targetType = target_type.target_type;
  }
  const guild = target_type.guild;
  let id2;
  if (null != guild) {
    id2 = guild.id;
  }
  const tmp9 = null != store2.getGuild(id2);
  let new_member = !tmp9;
  if (tmp9) {
    new_member = target_type.new_member;
  }
  let tmp10 = new_member;
  if (new_member) {
    tmp10 = null != target_type.channel;
  }
  if (tmp10) {
    tmp10 = callback2(target_type.channel.type);
  }
  if (tmp10) {
    obj.welcomeModalChannelId = target_type.channel.id;
  }
  if (null != target_type.guild_scheduled_event) {
    obj.guildScheduledEvent = target_type.guild_scheduled_event;
  }
  const flags = target_type.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  obj.isGuestInvite = require(1360) /* hasFlag */.hasFlag(num, require(7476) /* set */.GuildInviteFlags.IS_GUEST_INVITE);
  const obj2 = require(1360) /* hasFlag */;
  const flags2 = target_type.flags;
  let num2 = 0;
  if (null != flags2) {
    num2 = flags2;
  }
  obj.isApplicationBypassInvite = require(1360) /* hasFlag */.hasFlag(num2, require(7476) /* set */.GuildInviteFlags.IS_APPLICATION_BYPASS);
  const inviter = target_type.inviter;
  let id3;
  if (null != inviter) {
    id3 = inviter.id;
  }
  obj.inviterUserId = id3;
  if (!new_member) {
    obj.forceTransition = true;
  }
  if (null != target_type.target_channel_id) {
    obj.targetChannelId = target_type.target_channel_id;
    if (null != target_type.target_message_id) {
      obj.targetMessageId = target_type.target_message_id;
    }
  }
  return obj;
}
function getTransition(channel, options, arg2) {
  let c0;
  let guildScheduledEvent;
  let welcomeModalChannelId;
  let obj = options;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  c0 = undefined;
  obj = undefined;
  if (null == obj) {
    obj = {};
  }
  ({ transitionTo: c0, welcomeModalChannelId, guildScheduledEvent } = obj);
  obj = { source: obj(1210).INVITE_ACCEPT, navigationReplace: true };
  if (flag) {
    obj.openChannel = true;
  }
  if (null != welcomeModalChannelId) {
    obj.welcomeModalChannelId = welcomeModalChannelId;
  }
  if (channel.type === constants.GUILD_STAGE_VOICE) {
    obj = { stageInviteKey: STAGE_INVITE_STATE_KEY };
    obj.state = obj;
  }
  if (null != guildScheduledEvent) {
    obj.guildScheduledEventId = guildScheduledEvent.id;
  }
  return (CHANNELResult) => {
    if (null != _undefined) {
      let transitionToResult = _undefined(CHANNELResult, obj);
    } else {
      obj = _undefined(outer1_3[25]);
      transitionToResult = obj.transitionTo(CHANNELResult, obj);
    }
    return transitionToResult;
  };
}
function transitionToInviteChannel(guildId) {
  let c4;
  let targetType;
  guildId = guildId.guildId;
  let channel = guildId.channel;
  const options = guildId.options;
  let analyticsLocations = guildId.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  c4 = undefined;
  targetType = undefined;
  let targetApplicationId;
  let isGuestInvite;
  let GUILD_HOME;
  let callback3;
  let c10;
  function runDeepLinkJump() {
    return outer1_41(channel, options, true)(c10);
  }
  const guild = store2.getGuild(guildId);
  if (null != guild) {
    const features = guild.features;
    const hasItem = features.has(constants3.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  let obj = options;
  if (null == options) {
    obj = {};
  }
  ({ targetUserId: c4, targetType } = obj);
  targetApplicationId = obj.targetApplicationId;
  isGuestInvite = obj.isGuestInvite;
  const type = channel.type;
  let targetChannelId;
  channel = authStore.getChannel(channel.id);
  if (null != options) {
    targetChannelId = options.targetChannelId;
  }
  if (null != targetChannelId) {
    const channel1 = authStore.getChannel(targetChannelId);
    if (null != channel1) {
      GUILD_HOME = targetChannelId;
    }
    callback3 = type === constants.GUILD_STAGE_VOICE;
    let targetChannelId1;
    if (null != options) {
      targetChannelId1 = options.targetChannelId;
    }
    let tmp24;
    if (null != targetChannelId1 && GUILD_HOME === options.targetChannelId) {
      let targetMessageId;
      if (null != options) {
        targetMessageId = options.targetMessageId;
      }
      tmp24 = targetMessageId;
    }
    const CHANNELResult = closure_26.CHANNEL(guildId, GUILD_HOME, tmp24);
    c10 = CHANNELResult;
    if (GUILD_HOME === channel.id) {
      if (callback3(type)) {
        let autoJoin;
        if (null != options) {
          autoJoin = options.autoJoin;
        }
        if (false !== autoJoin) {
          targetType(() => {
            guildId(analyticsLocations[27])(analyticsLocations[26], analyticsLocations.paths).then((arg0) => {
              let closure_0 = arg0.default;
              function connect() {
                if (outer2_9) {
                  if (outer2_1 instanceof outer3_11) {
                    let tmp52 = outer2_1;
                  } else {
                    tmp52 = callback(outer2_1);
                  }
                  guildId(analyticsLocations[28]).connectAndOpen(tmp52);
                  const obj6 = guildId(analyticsLocations[28]);
                  guildId(analyticsLocations[25]).transitionTo(outer2_10);
                } else {
                  let muteOnJoinVoiceChannel = null != outer2_2;
                  if (muteOnJoinVoiceChannel) {
                    muteOnJoinVoiceChannel = outer2_2.muteOnJoinVoiceChannel;
                  }
                  if (muteOnJoinVoiceChannel) {
                    let obj = channel(analyticsLocations[29]);
                    obj.setSelfMute(guildId(analyticsLocations[30]).MediaEngineContextTypes.DEFAULT, true);
                  }
                  const voiceChannel = closure_0.selectVoiceChannel(outer2_8);
                  let tmp13 = outer2_5 === outer3_37.STREAM;
                  if (tmp13) {
                    tmp13 = null != outer2_4;
                  }
                  if (tmp13) {
                    obj = { streamType: outer3_36.GUILD, ownerId: outer2_4, guildId: outer2_0, channelId: outer2_8 };
                    const result = options(analyticsLocations[31]).watchStreamAndTransitionToStream(obj);
                    const obj2 = options(analyticsLocations[31]);
                  }
                  let tmp24 = outer2_5 === outer3_37.EMBEDDED_APPLICATION;
                  if (tmp24) {
                    tmp24 = null != outer2_6;
                  }
                  if (tmp24) {
                    guildId(analyticsLocations[25]).transitionTo(outer3_26.CHANNEL(null != outer2_0 ? outer2_0 : outer3_27, outer2_8));
                    obj = { channelId: outer2_8, applicationId: outer2_6 };
                    let intent;
                    const obj4 = guildId(analyticsLocations[25]);
                    if (null != outer2_2) {
                      intent = outer2_2.intent;
                    }
                    obj.intent = intent;
                    let inviterUserId;
                    if (null != outer2_2) {
                      inviterUserId = outer2_2.inviterUserId;
                    }
                    obj.inviterUserId = inviterUserId;
                    obj.analyticsLocations = outer2_3;
                    obj.commandOrigin = guildId(analyticsLocations[33]).CommandOrigin.CHAT;
                    channel(analyticsLocations[32])(obj);
                    const tmp33 = channel(analyticsLocations[32]);
                  }
                }
              }
              if (!outer1_7) {
                const items = [outer2_17, outer2_23, outer2_16];
                if (obj.shouldShowMembershipVerificationGate(outer1_0, items)) {
                  let result = guildId(analyticsLocations[35]).openMemberVerificationModal(outer1_0, connect);
                  let obj2 = guildId(analyticsLocations[35]);
                }
              }
              connect();
            });
          });
        }
        if (tmp23) {
          if (guildId !== closure_27) {
            const promise = guildId(analyticsLocations[27])(analyticsLocations[37], analyticsLocations.paths);
            guildId(analyticsLocations[27])(analyticsLocations[37], analyticsLocations.paths).then((arg0) => arg0.default({ guildId })).then(runDeepLinkJump, runDeepLinkJump);
            const nextPromise = guildId(analyticsLocations[27])(analyticsLocations[37], analyticsLocations.paths).then((arg0) => arg0.default({ guildId }));
          }
        }
        getTransition(channel, options, tmp23)(CHANNELResult);
      }
    }
    let result = guildId(analyticsLocations[36]).isActivityInTextSupportedForChannel(channel);
    if (result) {
      result = targetType === InviteTargetTypes.EMBEDDED_APPLICATION;
    }
    if (result) {
      result = null != targetApplicationId;
    }
    if (result) {
      let tmp37 = guildId;
      if (null == guildId) {
        tmp37 = closure_27;
      }
      guildId(analyticsLocations[25]).transitionTo(closure_26.CHANNEL(tmp37, GUILD_HOME));
      obj = { channelId: GUILD_HOME, applicationId: targetApplicationId };
      let intent;
      let obj4 = guildId(analyticsLocations[25]);
      if (null != options) {
        intent = options.intent;
      }
      obj.intent = intent;
      let inviterUserId;
      if (null != options) {
        inviterUserId = options.inviterUserId;
      }
      obj.inviterUserId = inviterUserId;
      obj.analyticsLocations = analyticsLocations;
      obj.commandOrigin = guildId(analyticsLocations[33]).CommandOrigin.CHAT;
      channel(analyticsLocations[32])(obj);
      const tmp41 = channel(analyticsLocations[32]);
    }
    const obj3 = guildId(analyticsLocations[36]);
  }
  targetType = undefined;
  if (null != options) {
    targetType = options.targetType;
  }
  if (null == targetType) {
    if (!callback3(channel.type)) {
      if (obj2.canSeeOnboardingHome(guildId)) {
        GUILD_HOME = StaticChannelRoute.GUILD_HOME;
      }
      obj2 = guildId(analyticsLocations[23]);
    }
  }
  const channel2 = authStore.getChannel(channel.id);
  if (closure_20.can(callback4(channel.type), channel2)) {
    let id = channel.id;
  } else {
    defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants6.CREATE_INSTANT_INVITE);
    id = undefined;
    if (null != defaultChannel) {
      id = defaultChannel.id;
    }
    if (null == id) {
      id = channel.id;
    }
  }
}
function transitionToInviteChannelSync(dMFromUserId, arg1) {
  let items = arg2;
  let closure_0 = dMFromUserId;
  let closure_1 = arg1;
  if (arg2 === undefined) {
    items = [];
  }
  let result = authStore.addConditionalChangeListener(() => {
    const channel = outer1_14.getChannel(dMFromUserId);
    const currentUser = outer1_23.getCurrentUser();
    if (null == channel || null == currentUser) {
      return tmp2;
    } else {
      let tmp3 = channel.nsfw && !currentUser.nsfwAllowed;
      if (!tmp3) {
        let isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult) {
          isGuildVocalOrThreadResult = dMFromUserId(outer1_3[41]).maybeOpenAgeGateForVoiceChannel(dMFromUserId);
          const obj2 = dMFromUserId(outer1_3[41]);
        }
        tmp3 = isGuildVocalOrThreadResult;
      }
      if (!tmp3) {
        let isGuildVocalOrThreadResult1 = channel.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult1) {
          isGuildVocalOrThreadResult1 = dMFromUserId(outer1_3[42]).maybeOpenSpoilerGateForVoiceChannel(dMFromUserId);
          const obj3 = dMFromUserId(outer1_3[42]);
        }
        tmp3 = isGuildVocalOrThreadResult1;
      }
      let flag = !tmp3;
      if (flag) {
        let guildScheduledEvent;
        if (null != guildScheduledEvent) {
          guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
        }
        if (null == guildScheduledEvent) {
          let obj = {};
          let guildId = channel.getGuildId();
          if (null == guildId) {
            guildId = outer1_27;
          }
          obj.guildId = guildId;
          obj.channel = channel;
          obj.options = guildScheduledEvent;
          obj.analyticsLocations = items;
          outer1_42(obj);
          flag = false;
          const tmp14 = outer1_42;
        }
      }
      (function transitionToInviteEvent(closure_1) {
        const guildScheduledEvent = closure_1.guildScheduledEvent;
        const welcomeModalChannelId = closure_1.welcomeModalChannelId;
        if (null != guildScheduledEvent) {
          outer2_5(() => {
            const obj = { guildScheduledEventId: guildScheduledEvent.id };
            if (null != welcomeModalChannelId) {
              obj.welcomeModalChannelId = welcomeModalChannelId;
            }
            const result = guildScheduledEvent(outer3_3[38]).transitionToEventDetailsFromInvite(guildScheduledEvent, obj);
          });
        }
      })(guildScheduledEvent);
      flag = false;
    }
  });
}
async function _transitionToGuildFromEventInvite(arg0, arg1) {
  const channel_id = arg0.channel_id;
  if (outer2_7(arg0)) {
    if (null != channel_id) {
      outer2_43(channel_id);
    }
  }
  return yield outer2_1(outer2_3[43]).transitionToGuildSync(arg0.guild_id);
}
function trackInviteServerClicked(id5, action, items2) {
  let obj = importDefault(675);
  obj = { guild_id: id5, action };
  let tmp = null;
  if (null != items2) {
    tmp = items2;
  }
  obj.location_stack = tmp;
  obj.track(constants4.INVITE_SERVER_CLICKED, obj);
}
require("shouldWaitForBlockingModals").addPostConnectionCallback;
({ isGuildTextChannelType: closure_8, isGuildVocalChannelOrVocalThreadType: closure_9, createChannelRecord: closure_10, ChannelRecordBase: closure_11, getAccessPermissions: closure_12 } = _callSuper);
({ Endpoints: closure_24, ChannelTypes: closure_25, Routes: closure_26, ME: closure_27, RPCCommands: closure_28, GuildFeatures: closure_29, AnalyticEvents: closure_30, UserFlags: closure_31, Permissions: closure_32, AbortCodes: closure_33 } = ME);
let c39 = null;
function resolveInvite(code) {
  let closure_0 = code;
  const importDefault = arg1;
  let closure_2 = arg2;
  let obj = importDefault(686);
  if (obj.isDispatching()) {
    const resolved = Promise.resolve();
    let nextPromise = resolved.then(() => outer1_45(closure_0, closure_1, closure_2));
  } else {
    obj = { type: "INVITE_RESOLVE", code };
    importDefault(686).dispatch(obj);
    const obj2 = importDefault(686);
    nextPromise = importDefault(8651)(code, arg1, arg2).then((arg0) => {
      let code;
      let invite;
      ({ invite, code } = arg0);
      if (null != invite) {
        let obj = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
        callback(outer1_3[39]).dispatch(obj);
        const obj3 = callback(outer1_3[39]);
      } else {
        obj = callback(outer1_3[39]);
        obj = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
        obj.dispatch(obj);
      }
      return { invite, code };
    });
    const promise = importDefault(8651)(code, arg1, arg2);
  }
  return nextPromise;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/InstantInviteActionCreators.tsx");

export default {
  resolveInvite,
  getInviteContext(location, guild) {
    const obj = { location };
    guild = undefined;
    if (null != guild) {
      guild = guild.guild;
    }
    let id;
    if (null != guild) {
      id = guild.guild.id;
    }
    obj.location_guild_id = id;
    let channel;
    if (null != guild) {
      channel = guild.channel;
    }
    let id1;
    if (null != channel) {
      id1 = guild.channel.id;
    }
    obj.location_channel_id = id1;
    let channel1;
    if (null != guild) {
      channel1 = guild.channel;
    }
    let type;
    if (null != channel1) {
      type = guild.channel.type;
    }
    obj.location_channel_type = type;
    return obj;
  },
  createInvite(arg0) {
    let obj = arg1;
    let closure_0 = arg0;
    if (arg1 === undefined) {
      obj = {};
    }
    let closure_2 = arg2;
    return callback(async () => {
      let obj = {};
      const merged = Object.assign(outer1_1);
      const role_ids = obj.role_ids;
      let length;
      if (null != role_ids) {
        length = role_ids.length;
      }
      if (0 === length) {
        delete tmp.role_ids;
      }
      const HTTP = callback(outer2_3[45]).HTTP;
      obj = { url: outer2_24.INSTANT_INVITES(outer1_0), body: obj, context: obj, rejectWithError: true };
      obj = { location: outer1_2 };
      const body = yield HTTP.post(obj).body;
      obj(outer2_3[39]).dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: outer1_0, invite: body });
      return body;
    })();
  },
  mobileCreateInvite(arg0, GROUP_DM) {
    let closure_0 = arg0;
    let closure_1 = GROUP_DM;
    const self = this;
    return callback(async () => {
      const invite = outer2_18.getInvite(outer1_0.id);
      if (null != invite) {
        if (!invite.isExpired()) {
          return invite.code;
        }
      }
      const invite1 = outer1_2.createInvite(outer1_0.id, { max_age: callback(outer2_3[47]).Seconds.DAY }, outer1_1);
      const tmp = yield invite1.catch(() => callback(outer3_3[39]).dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }));
      let code;
      if (null != tmp) {
        code = tmp.code;
      }
      return code;
    })();
  },
  getAllFriendInvites(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      yield new Promise((arg0) => {
        let closure_0 = arg0;
        return outer3_1(outer3_3[39]).wait(() => callback(null));
      });
      if (outer2_18.getFriendInvitesFetching()) {
        if (null != outer2_39) {
          let nextPromise = outer2_39.then((body) => body.body);
        } else {
          const _Error = Error;
          const error = new Error("Invalid friend invite fetch request");
          nextPromise = Promise.reject(error);
        }
        return nextPromise;
      } else {
        const HTTP = callback(outer2_3[45]).HTTP;
        let obj = { url: outer2_24.FRIEND_INVITES };
        obj = { location: outer1_0 };
        obj.context = obj;
        obj.rejectWithError = callback(outer2_3[45]).rejectWithMigratedError();
        outer2_39 = HTTP.get(obj);
        const obj3 = callback(outer2_3[45]);
        obj = { type: "FRIEND_INVITES_FETCH_REQUEST" };
        const _Date = Date;
        const date = new Date();
        obj.requestedAt = date;
        outer2_1(outer2_3[39]).dispatch(obj);
        const body = yield outer2_39.body;
        outer2_39 = null;
        const obj4 = outer2_1(outer2_3[39]);
        const obj1 = { type: "FRIEND_INVITES_FETCH_RESPONSE" };
        const _Date2 = Date;
        const date1 = new Date();
        obj1.receivedAt = date1;
        obj1.invites = body;
        outer2_1(outer2_3[39]).dispatch(obj1);
        return body;
      }
    })();
  },
  createFriendInvite(sendMessageOptionsForReply, location) {
    let obj = sendMessageOptionsForReply;
    importDefault(686).dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" });
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_24.FRIEND_INVITES };
    if (null == sendMessageOptionsForReply) {
      obj = {};
    }
    obj.body = obj;
    obj = { location };
    obj.context = obj;
    const obj2 = importDefault(686);
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    const obj5 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.post(obj).then((body) => {
      body = body.body;
      outer1_1(outer1_3[39]).dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: body });
      return body;
    }, (error) => {
      let obj = outer1_1(outer1_3[39]);
      obj = { type: "FRIEND_INVITE_CREATE_FAILURE", error };
      obj.dispatch(obj);
      throw error;
    });
  },
  revokeFriendInvites() {
    let obj = importDefault(686);
    obj.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" });
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_24.FRIEND_INVITES, context: obj };
    obj = { location: location, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj4 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.del(obj).then((invites) => {
      outer1_1(outer1_3[39]).dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: invites.body });
    });
  },
  revokeFriendInvite(arg0) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_24.INVITE(arg0), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  fetchFriendMembers(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      let obj = outer2_1(outer2_3[48]);
      obj = { url: outer2_24.INVITE_FRIEND_MEMBERS(outer1_0) };
      obj = {
        event: callback(outer2_3[49]).NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
        properties(body) {
          let obj = callback(outer3_3[50]);
          obj = { code: outer2_0 };
          let length;
          if (null != body) {
            body = body.body;
            if (null != body) {
              const friend_member_ids = body.friend_member_ids;
              if (null != friend_member_ids) {
                length = friend_member_ids.length;
              }
            }
          }
          let num = 0;
          if (null != length) {
            num = length;
          }
          obj.friend_count = num;
          return obj.exact(obj);
        }
      };
      obj.trackedActionData = obj;
      obj.rejectWithError = true;
      const obj4 = outer2_1(outer2_3[39]);
      obj4.dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS", code: outer1_0, friendMemberIds: yield obj.get(obj).body.friend_member_ids });
    })();
  },
  clearInviteFromStore(channelId) {
    let obj = importDefault(686);
    obj = { type: "INSTANT_INVITE_CLEAR", channelId };
    obj.dispatch(obj);
  },
  revokeInvite(code) {
    code = code.code;
    const channel = code.channel;
    let obj = channel(4942);
    obj = { url: closure_24.INVITE(code), oldFormErrors: true };
    obj = { event: code(480).NetworkActionNames.INVITE_REVOKE, properties: obj1 };
    obj.trackedActionData = obj;
    obj.rejectWithError = code(507).rejectWithMigratedError();
    obj1 = { uses: code.uses, max_uses: code.maxUses, max_age: code.maxAge, invite_type: code.type };
    const obj5 = code(507);
    return obj.delete(obj).then(() => {
      let obj = channel(outer1_3[39]);
      obj = { type: "INSTANT_INVITE_REVOKE_SUCCESS", code, channelId: channel.id };
      obj.dispatch(obj);
    });
  },
  acceptInvite(inviteKey) {
    let c4;
    let c5;
    let context;
    let importAll;
    let importDefault;
    inviteKey = inviteKey.inviteKey;
    ({ context, callback: importDefault, skipOnboarding: importAll } = inviteKey);
    let guild_scheduled_event;
    c4 = undefined;
    c5 = undefined;
    let guildScheduledEventId;
    const self = this;
    let obj = inviteKey(guild_scheduled_event[51]);
    let result = obj.parseInviteCodeFromInviteKey(inviteKey);
    const sessionId = store.getSessionId();
    receivedInstallationIdForInviteCode = receivedInstallationIdForInviteCode.getReceivedInstallationIdForInviteCode(result);
    invite = invite.getInvite(inviteKey);
    if (null != invite) {
      guild_scheduled_event = invite.guild_scheduled_event;
      let id;
      if (null != guild_scheduled_event) {
        id = guild_scheduled_event.id;
      }
      guildScheduledEventId = id;
      let target_channel_id = invite.target_channel_id;
      let tmp10;
      if (null != target_channel_id) {
        tmp10 = target_channel_id;
      }
      c4 = tmp10;
      let target_message_id = invite.target_message_id;
      let tmp11;
      if (null != target_message_id) {
        tmp11 = target_message_id;
      }
      c5 = tmp11;
      const tmp8 = id;
    } else {
      let obj1 = inviteKey(guild_scheduled_event[51]);
      const result1 = obj1.parseExtraDataFromInviteKey(inviteKey);
      guildScheduledEventId = result1.guildScheduledEventId;
      ({ targetChannelId: c4, targetMessageId: c5 } = result1);
    }
    obj = {};
    let merged = Object.assign(context);
    obj["invite_guild_scheduled_event_id"] = tmp8;
    currentUser = currentUser.getCurrentUser();
    let hasFlagResult;
    if (null != currentUser) {
      hasFlagResult = currentUser.hasFlag(constants5.QUARANTINED);
    }
    if (null != hasFlagResult) {
      if (hasFlagResult) {
        importDefault(guild_scheduled_event[52])();
        let nextPromise = new Promise((arg0, arg1) => {
          const error = new Error();
          return arg1(error);
        });
      }
      return nextPromise;
    }
    importDefault(guild_scheduled_event[39]).dispatch({ type: "INVITE_ACCEPT", code: inviteKey });
    const HTTP = inviteKey(guild_scheduled_event[45]).HTTP;
    obj = { url: closure_24.INVITE(result), context: obj, oldFormErrors: true, body: obj1 };
    obj1 = { session_id: sessionId, invite_instance_id: context.invite_instance_id, received_installation_id: receivedInstallationIdForInviteCode };
    const obj5 = importDefault(guild_scheduled_event[39]);
    obj.rejectWithError = inviteKey(guild_scheduled_event[45]).rejectWithMigratedError();
    const obj8 = inviteKey(guild_scheduled_event[45]);
    nextPromise = HTTP.post(obj).then((() => {
      let closure_0 = _undefined(async (arg0) => {
        if (null != outer2_9) {
          const result = outer2_7.clearReceivedInstallationIdForInviteCode(outer2_8);
        }
        let obj = outer3_1(guild_scheduled_event[39]);
        obj = { type: "INVITE_ACCEPT_SUCCESS", invite: arg0.body, code: closure_0 };
        obj.dispatch(obj);
        if (null != outer2_3) {
          let guildScheduledEvent = outer2_3;
        } else {
          guildScheduledEvent = guildScheduledEventId.getGuildScheduledEvent(outer2_6);
        }
        obj = {};
        const merged = Object.assign(arg0.body);
        obj["guild_scheduled_event"] = guildScheduledEvent;
        let target_channel_id = arg0.body.target_channel_id;
        if (null == target_channel_id) {
          target_channel_id = outer2_4;
        }
        obj["target_channel_id"] = target_channel_id;
        let target_message_id = arg0.body.target_message_id;
        if (null == target_message_id) {
          target_message_id = outer2_5;
        }
        obj["target_message_id"] = target_message_id;
        let guild_id;
        if (null != obj) {
          guild_id = obj.guild_id;
        }
        if (null == guild_id) {
          let id;
          if (null != obj) {
            const guild = obj.guild;
            if (null != guild) {
              id = guild.id;
            }
          }
          guild_id = id;
        }
        const flags = obj.flags;
        let num = 0;
        if (null != flags) {
          num = flags;
        }
        if (!outer2_2) {
          if (!obj4.hasFlag(num, inviteKey(guild_scheduled_event[22]).GuildInviteFlags.IS_GUEST_INVITE)) {
            if (null != guild_id) {
              if (obj.new_member) {
                if (!obj.show_verification_form) {
                  const obj1 = { guildId: guild_id };
                  return yield yield inviteKey(guild_scheduled_event[27])(guild_scheduled_event[37], guild_scheduled_event.paths).default(obj1);
                }
              }
            }
          }
        }
        if (null != outer2_1) {
          outer2_1(obj);
        }
        return arg0.body;
      });
      return function() {
        return callback(...arguments);
      };
    })(), (body) => {
      body = body.body;
      let code;
      if (null != body) {
        code = body.code;
      }
      if (code === outer1_33.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED) {
        let obj = inviteKey(guild_scheduled_event[53]);
        obj.openAgeGateModal(outer1_34.JOIN_LARGE_GUILD_UNDERAGE);
      }
      obj = { type: "INVITE_ACCEPT_FAILURE", code: inviteKey };
      obj = {};
      const body2 = body.body;
      let message;
      if (null != body2) {
        message = body2.message;
      }
      obj.message = message;
      const body3 = body.body;
      let code1;
      if (null != body3) {
        code1 = body3.code;
      }
      obj.code = code1;
      obj.error = obj;
      outer1_1(guild_scheduled_event[39]).dispatch(obj);
      let tmp9 = outer1_1(guild_scheduled_event[54]);
      tmp9 = new tmp9(body);
      throw tmp9;
    });
  },
  acceptInviteAndTransitionToInviteChannel(inviteKey) {
    let importAll;
    let importDefault;
    let require;
    ({ analyticsLocations: require, callback: importDefault, autoJoin: importAll } = inviteKey);
    return this.acceptInvite({
      inviteKey: inviteKey.inviteKey,
      context: inviteKey.context,
      skipOnboarding: inviteKey.skipOnboarding,
      callback(channel) {
        if (null == channel.channel) {
          if (null != callback) {
            callback(channel);
          }
        } else {
          const obj = {};
          const merged = Object.assign(outer1_40(channel));
          obj["autoJoin"] = closure_2;
          outer1_43(channel.channel.id, obj, null != closure_0 ? closure_0 : []);
        }
      }
    });
  },
  transitionToInvite(closure_0, arg1) {
    let channel;
    let forceTransition;
    let guild;
    let intent;
    let inviter;
    let muteOnJoinVoiceChannel;
    let transitionTo;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ transitionTo, muteOnJoinVoiceChannel, intent, forceTransition } = obj);
    ({ channel, guild, inviter } = closure_0);
    if (null == channel) {
      if (null == guild) {
        if (null != inviter) {
          let dMFromUserId = null;
          if (friend.isFriend(inviter.id)) {
            dMFromUserId = authStore.getDMFromUserId(inviter.id);
          }
          if (null != dMFromUserId) {
            transitionToInviteChannelSync(dMFromUserId, obj);
          }
        }
      }
    }
    if (null != guild) {
      const features = guild.features;
      if (null != features) {
        if (features.includes(constants3.HUB)) {
          importDefault(12355).onOpenHubInvite(closure_0);
          const obj6 = importDefault(12355);
        }
      }
    }
    const flags = closure_0.flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    let hasFlagResult = require(1360) /* hasFlag */.hasFlag(num, require(7476) /* set */.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = require(1360) /* hasFlag */.hasFlag(num, require(7476) /* set */.GuildInviteFlags.IS_APPLICATION_BYPASS);
      const obj3 = require(1360) /* hasFlag */;
    }
    if (null != guild) {
      if (!hasFlagResult) {
        if (closure_0.new_member) {
          if (obj4.inviteGuildHasPendingMemberDisabledVerification(guild)) {
            const result = require(12356) /* inviteGuildHasPendingMemberDisabledVerification */.openVerificationModalOrTransitionToApplication(guild.id);
            const obj5 = require(12356) /* inviteGuildHasPendingMemberDisabledVerification */;
          }
          obj4 = require(12356) /* inviteGuildHasPendingMemberDisabledVerification */;
        }
      }
    }
    if (null != channel) {
      const tmp14 = generateAcceptInviteOptions(closure_0);
      if (null != transitionTo) {
        tmp14.transitionTo = transitionTo;
      }
      if (null != intent) {
        tmp14.intent = intent;
      }
      if (null != muteOnJoinVoiceChannel) {
        tmp14.muteOnJoinVoiceChannel = muteOnJoinVoiceChannel;
      }
      if (null != forceTransition) {
        tmp14.forceTransition = forceTransition;
      }
      transitionToInviteChannelSync(channel.id, tmp14);
    }
  },
  openNativeAppModal(inviteKey) {
    let obj = require(4116) /* readSnowflake */;
    const result = obj.parseExtraDataFromInviteKey(inviteKey);
    obj = { installationId: store.getInstallationForTracking(), targetChannelId: result.targetChannelId, targetMessageId: result.targetMessageId, guildScheduledEventId: result.guildScheduledEventId };
    importDefault(8196).openNativeAppModal(result.baseCode, constants2.INVITE_BROWSER, obj);
  },
  transitionToInviteOnboarding(baseCode, source) {
    let obj = source;
    if (source === undefined) {
      obj = {};
    }
    let transitionTo = obj.transitionTo;
    if (undefined === transitionTo) {
      transitionTo = require(1198) /* shouldNavigate */.transitionTo;
    }
    obj = { baseCode: baseCode.code };
    const target_channel_id = baseCode.target_channel_id;
    let tmp3;
    if (null != target_channel_id) {
      tmp3 = target_channel_id;
    }
    obj.targetChannelId = tmp3;
    const target_message_id = baseCode.target_message_id;
    let tmp4;
    if (null != target_message_id) {
      tmp4 = target_message_id;
    }
    obj.targetMessageId = tmp4;
    const guild_scheduled_event = baseCode.guild_scheduled_event;
    let id;
    if (null != guild_scheduled_event) {
      id = guild_scheduled_event.id;
    }
    obj.guildScheduledEventId = id;
    const inviteKeyFromExtraData = require(4116) /* readSnowflake */.generateInviteKeyFromExtraData(obj);
    obj = {};
    const result = closure_26.APP_WITH_INVITE_AND_GUILD_ONBOARDING(baseCode.code);
    const obj2 = require(4116) /* readSnowflake */;
    obj.search = require(4116) /* readSnowflake */.getInviteKeySearchSuffix(inviteKeyFromExtraData);
    transitionTo(result, obj);
  },
  openApp(code, arg1, fingerprint, username) {
    const _require = code;
    let result = null;
    if (null != code) {
      let obj = _require(4116);
      result = obj.parseExtraDataFromInviteKey(code);
    }
    let baseCode;
    if (null != result) {
      baseCode = result.baseCode;
    }
    let targetMessageId;
    if (null != result) {
      targetMessageId = result.targetMessageId;
    }
    let targetChannelId;
    if (null != result) {
      targetChannelId = result.targetChannelId;
    }
    let obj1 = importDefault(686);
    obj = { type: "INVITE_APP_OPENING", code };
    obj1.dispatch(obj);
    if (null != importDefault(4450).ua) {
      const formatted = importDefault(4450).ua.toLowerCase();
      if (formatted.indexOf("googlebot") > -1) {
        obj = { type: "INVITE_APP_NOT_OPENED", code };
        importDefault(686).dispatch(obj);
        const obj12 = importDefault(686);
      }
    }
    const os = importDefault(4450).os;
    let family;
    if (null != os) {
      family = os.family;
    }
    if ("Android" !== family) {
      const os2 = importDefault(4450).os;
      let family1;
      if (null != os2) {
        family1 = os2.family;
      }
      if ("iOS" !== family1) {
        if (!_require(4368).isTablet) {
          let tmp12 = targetChannelId;
          if (null != arg1) {
            tmp12 = arg1;
          }
          let str4 = "";
          if (null != tmp12) {
            str4 = closure_26.INVITE_PROXY(tmp12, targetMessageId);
          }
          let substr = str4;
          if ("#" === str4[0]) {
            substr = str4.slice(1);
          }
          const _HermesInternal = HermesInternal;
          let combined = "discord://" + substr;
        }
        importDefault(12360).launch(combined, (arg0) => {
          let obj = outer1_1(outer1_3[39]);
          obj = {};
          if (arg0) {
            obj.type = "INVITE_APP_OPENED";
            obj.code = closure_0;
            let tmp2 = obj;
          } else {
            obj.type = "INVITE_APP_NOT_OPENED";
            obj.code = closure_0;
            tmp2 = obj;
          }
          obj.dispatch(tmp2);
        });
        const obj11 = importDefault(12360);
      }
    }
    if (null != baseCode) {
      let inviteDynamicLinkTemplate = _require(12357).getInviteDynamicLinkTemplate(baseCode);
      const obj5 = _require(12357);
    } else {
      inviteDynamicLinkTemplate = _require(12357).getDefaultDynamicLinkTemplate();
      const obj4 = _require(12357);
    }
    const attemptId = _require(12358).generateAttemptId();
    obj1 = {};
    let str7 = "friend_invite";
    const obj6 = _require(12358);
    if (2 !== arg4) {
      str7 = "invite";
    }
    obj1.utmSource = str7;
    obj1.fingerprint = fingerprint;
    obj1.installationId = store.getInstallationForTracking();
    obj1.username = username;
    obj1.attemptId = attemptId;
    let prop;
    if (null != result) {
      prop = result.guildScheduledEventId;
    }
    obj1.event = prop;
    obj1.channel = targetChannelId;
    obj1.message = targetMessageId;
    obj1.iosFallbackLink = "https://discord.com/api/download/mobile?invite_code=" + baseCode;
    combined = importDefault(12358)(inviteDynamicLinkTemplate, obj1);
    const tmp23 = importDefault(12358);
    const obj2 = {};
    const obj8 = importDefault(675);
    obj2.fingerprint = _require(490).maybeExtractId(fingerprint);
    obj2.attempt_id = attemptId;
    obj2.source = "invite";
    obj2.invite_code = baseCode;
    obj8.track(constants4.DEEP_LINK_CLICKED, obj2);
  },
  setReceivedInstallationIdForInviteCode(result, installationId) {
    let obj = importDefault(686);
    obj = { type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode: result, receivedInstallationId: installationId };
    obj.dispatch(obj);
  },
  clearReceivedInstallationIdForInviteCode(outer2_8) {
    let obj = importDefault(686);
    obj = { type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode: outer2_8 };
    obj.dispatch(obj);
  },
  trackInviteServerClicked
};
export const transitionToGuildFromEventInvite = function transitionToGuildFromEventInvite(channel_id) {
  return _transitionToGuildFromEventInvite(...arguments);
};
export const trackInviteEmbedActioned = function trackInviteEmbedActioned(action, items1) {
  let application_id;
  let invite;
  let invite_instance_id;
  let invite_message_id;
  let inviter_id;
  let number_of_users_in_channel;
  let stream_key;
  ({ invite, inviter_id, invite_message_id, invite_instance_id, application_id, stream_key, number_of_users_in_channel } = action);
  let obj = importDefault(675);
  obj = { action: action.action, invite_code: invite.code };
  let str = invite.type;
  str = undefined;
  if (null != str) {
    str = str.toString();
  }
  obj.invite_type = str;
  let tmp2 = null;
  if (null != inviter_id) {
    tmp2 = inviter_id;
  }
  obj.inviter_id = tmp2;
  let tmp3 = null;
  if (null != invite_message_id) {
    tmp3 = invite_message_id;
  }
  obj.invite_message_id = tmp3;
  let tmp4 = null;
  if (null != invite_instance_id) {
    tmp4 = invite_instance_id;
  }
  obj.invite_instance_id = tmp4;
  let tmp5 = null;
  if (null != application_id) {
    tmp5 = application_id;
  }
  obj.application_id = tmp5;
  let tmp6 = null;
  if (null != stream_key) {
    tmp6 = stream_key;
  }
  obj.stream_key = tmp6;
  let tmp7 = null;
  if (null != number_of_users_in_channel) {
    tmp7 = number_of_users_in_channel;
  }
  obj.number_of_users_in_channel = tmp7;
  let tmp8 = null;
  if (null != items1) {
    tmp8 = items1;
  }
  obj.location_stack = tmp8;
  obj.track(constants4.INVITE_EMBED_ACTIONED, obj);
};
export { trackInviteServerClicked };
