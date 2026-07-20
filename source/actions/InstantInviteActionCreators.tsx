// Module ID: 7450
// Function ID: 59791
// Name: generateAcceptInviteOptions
// Dependencies: []
// Exports: trackInviteEmbedActioned, trackInviteServerClicked, transitionToGuildFromEventInvite

// Module 7450 (generateAcceptInviteOptions)
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
  obj.isGuestInvite = arg1(dependencyMap[21]).hasFlag(num, arg1(dependencyMap[22]).GuildInviteFlags.IS_GUEST_INVITE);
  const obj2 = arg1(dependencyMap[21]);
  const flags2 = target_type.flags;
  let num2 = 0;
  if (null != flags2) {
    num2 = flags2;
  }
  obj.isApplicationBypassInvite = arg1(dependencyMap[21]).hasFlag(num2, arg1(dependencyMap[22]).GuildInviteFlags.IS_APPLICATION_BYPASS);
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
  let guildScheduledEvent;
  let welcomeModalChannelId;
  let obj = options;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let closure_0;
  let importDefault;
  if (null == obj) {
    obj = {};
  }
  ({ transitionTo: closure_0, welcomeModalChannelId, guildScheduledEvent } = obj);
  obj = { source: importDefault(dependencyMap[24]).INVITE_ACCEPT, navigationReplace: true };
  importDefault = obj;
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
      const obj = _undefined(closure_3[25]);
      transitionToResult = obj.transitionTo(CHANNELResult, obj);
    }
    return transitionToResult;
  };
}
function transitionToInviteChannel(guildId) {
  let targetType;
  guildId = guildId.guildId;
  const arg1 = guildId;
  let channel = guildId.channel;
  const importDefault = channel;
  const options = guildId.options;
  const importAll = options;
  let analyticsLocations = guildId.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  const dependencyMap = analyticsLocations;
  let closure_4;
  let addPostConnectionCallback;
  let closure_6;
  let closure_7;
  let GUILD_HOME;
  let callback3;
  let CHANNELResult;
  function runDeepLinkJump() {
    return callback(channel, options, true)(CHANNELResult);
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
  ({ targetUserId: closure_4, targetType } = obj);
  addPostConnectionCallback = targetType;
  const targetApplicationId = obj.targetApplicationId;
  closure_6 = targetApplicationId;
  const isGuestInvite = obj.isGuestInvite;
  closure_7 = isGuestInvite;
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
    CHANNELResult = closure_26.CHANNEL(guildId, GUILD_HOME, tmp24);
    if (GUILD_HOME === channel.id) {
      if (callback3(type)) {
        let autoJoin;
        if (null != options) {
          autoJoin = options.autoJoin;
        }
        if (false !== autoJoin) {
          addPostConnectionCallback(() => {
            guildId(analyticsLocations[27])(analyticsLocations[26], analyticsLocations.paths).then((guildId) => {
              const callback = guildId.default;
              function connect() {
                if (closure_9) {
                  if (callback instanceof closure_11) {
                    let tmp52 = callback;
                  } else {
                    tmp52 = callback2(callback);
                  }
                  lib(closure_3[28]).connectAndOpen(tmp52);
                  const obj6 = lib(closure_3[28]);
                  lib(closure_3[25]).transitionTo(callback2);
                } else {
                  let muteOnJoinVoiceChannel = null != lib2;
                  if (muteOnJoinVoiceChannel) {
                    muteOnJoinVoiceChannel = lib2.muteOnJoinVoiceChannel;
                  }
                  if (muteOnJoinVoiceChannel) {
                    let obj = callback(closure_3[29]);
                    obj.setSelfMute(lib(closure_3[30]).MediaEngineContextTypes.DEFAULT, true);
                  }
                  const voiceChannel = lib.selectVoiceChannel(closure_8);
                  let tmp13 = closure_5 === constants2.STREAM;
                  if (tmp13) {
                    tmp13 = null != closure_4;
                  }
                  if (tmp13) {
                    obj = { streamType: constants.GUILD, ownerId: closure_4, guildId: lib, channelId: closure_8 };
                    const result = lib2(closure_3[31]).watchStreamAndTransitionToStream(obj);
                    const obj2 = lib2(closure_3[31]);
                  }
                  let tmp24 = closure_5 === constants2.EMBEDDED_APPLICATION;
                  if (tmp24) {
                    tmp24 = null != closure_6;
                  }
                  if (tmp24) {
                    lib(closure_3[25]).transitionTo(closure_26.CHANNEL(null != lib ? lib : closure_27, closure_8));
                    obj = { channelId: closure_8, applicationId: closure_6 };
                    let intent;
                    const obj4 = lib(closure_3[25]);
                    if (null != lib2) {
                      intent = lib2.intent;
                    }
                    obj.intent = intent;
                    let inviterUserId;
                    if (null != lib2) {
                      inviterUserId = lib2.inviterUserId;
                    }
                    obj.inviterUserId = inviterUserId;
                    obj.analyticsLocations = closure_3;
                    obj.commandOrigin = lib(closure_3[33]).CommandOrigin.CHAT;
                    callback(closure_3[32])(obj);
                    const tmp33 = callback(closure_3[32]);
                  }
                }
              }
              if (!closure_7) {
                const items = [closure_17, closure_23, closure_16];
                if (obj.shouldShowMembershipVerificationGate(callback, items)) {
                  const result = callback(closure_3[35]).openMemberVerificationModal(callback, connect);
                  const obj2 = callback(closure_3[35]);
                }
              }
              connect();
            });
          });
        }
        if (tmp23) {
          if (guildId !== closure_27) {
            const promise = arg1(dependencyMap[27])(dependencyMap[37], dependencyMap.paths);
            arg1(dependencyMap[27])(dependencyMap[37], dependencyMap.paths).then((arg0) => arg0.default({ guildId })).then(runDeepLinkJump, runDeepLinkJump);
            const nextPromise = arg1(dependencyMap[27])(dependencyMap[37], dependencyMap.paths).then((arg0) => arg0.default({ guildId }));
          }
        }
        getTransition(channel, options, tmp23)(CHANNELResult);
      }
    }
    let result = arg1(dependencyMap[36]).isActivityInTextSupportedForChannel(channel);
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
      arg1(dependencyMap[25]).transitionTo(closure_26.CHANNEL(tmp37, GUILD_HOME));
      obj = { channelId: GUILD_HOME, applicationId: targetApplicationId };
      let intent;
      const obj4 = arg1(dependencyMap[25]);
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
      obj.commandOrigin = arg1(dependencyMap[33]).CommandOrigin.CHAT;
      importDefault(dependencyMap[32])(obj);
      const tmp41 = importDefault(dependencyMap[32]);
    }
    const obj3 = arg1(dependencyMap[36]);
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
      const obj2 = arg1(dependencyMap[23]);
    }
  }
  const channel2 = authStore.getChannel(channel.id);
  if (closure_20.can(callback4(channel.type), channel2)) {
    let id = channel.id;
  } else {
    const defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants6.CREATE_INSTANT_INVITE);
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
  arg1 = dMFromUserId;
  const importDefault = arg1;
  if (arg2 === undefined) {
    items = [];
  }
  const importAll = items;
  const result = authStore.addConditionalChangeListener(() => {
    const channel = channel.getChannel(arg0);
    const currentUser = currentUser.getCurrentUser();
    if (null == channel || null == currentUser) {
      return tmp2;
    } else {
      let tmp3 = channel.nsfw && !currentUser.nsfwAllowed;
      if (!tmp3) {
        let isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult) {
          isGuildVocalOrThreadResult = arg0(closure_3[41]).maybeOpenAgeGateForVoiceChannel(arg0);
          const obj2 = arg0(closure_3[41]);
        }
        tmp3 = isGuildVocalOrThreadResult;
      }
      if (!tmp3) {
        let isGuildVocalOrThreadResult1 = channel.isGuildVocalOrThread();
        if (isGuildVocalOrThreadResult1) {
          isGuildVocalOrThreadResult1 = arg0(closure_3[42]).maybeOpenSpoilerGateForVoiceChannel(arg0);
          const obj3 = arg0(closure_3[42]);
        }
        tmp3 = isGuildVocalOrThreadResult1;
      }
      let flag = !tmp3;
      if (flag) {
        let guildScheduledEvent;
        if (null != arg1) {
          guildScheduledEvent = arg1.guildScheduledEvent;
        }
        if (null == guildScheduledEvent) {
          const obj = {};
          let guildId = channel.getGuildId();
          if (null == guildId) {
            guildId = closure_27;
          }
          obj.guildId = guildId;
          obj.channel = channel;
          obj.options = arg1;
          obj.analyticsLocations = items;
          closure_42(obj);
          flag = false;
          const tmp14 = closure_42;
        }
      }
      function transitionToInviteEvent(guildScheduledEvent) {
        guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
        const welcomeModalChannelId = guildScheduledEvent.welcomeModalChannelId;
        if (null != guildScheduledEvent) {
          callback(() => {
            const obj = { guildScheduledEventId: guildScheduledEvent.id };
            if (null != welcomeModalChannelId) {
              obj.welcomeModalChannelId = welcomeModalChannelId;
            }
            const result = guildScheduledEvent(closure_3[38]).transitionToEventDetailsFromInvite(guildScheduledEvent, obj);
          });
        }
      }(arg1);
      flag = false;
    }
  });
}
async function _transitionToGuildFromEventInvite(channel_id, arg1) {
  channel_id = channel_id.channel_id;
  if (callback2(channel_id)) {
    if (null != channel_id) {
      callback3(channel_id);
    }
  }
  return yield callback(closure_3[43]).transitionToGuildSync(channel_id.guild_id);
}
function trackInviteServerClicked(id5, action, items2) {
  let obj = importDefault(dependencyMap[44]);
  obj = { guild_id: id5, action };
  let tmp = null;
  if (null != items2) {
    tmp = items2;
  }
  obj.location_stack = tmp;
  obj.track(constants4.INVITE_SERVER_CLICKED, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
arg1(dependencyMap[1]).addPostConnectionCallback;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[2]).isGuildScheduledEventActive;
({ isGuildTextChannelType: closure_8, isGuildVocalChannelOrVocalThreadType: closure_9, createChannelRecord: closure_10, ChannelRecordBase: closure_11, getAccessPermissions: closure_12 } = arg1(dependencyMap[3]));
let closure_13 = importDefault(dependencyMap[4]);
let closure_14 = importDefault(dependencyMap[5]);
let closure_15 = importDefault(dependencyMap[6]);
let closure_16 = importDefault(dependencyMap[7]);
let closure_17 = importDefault(dependencyMap[8]);
let closure_18 = importDefault(dependencyMap[9]);
let closure_19 = importDefault(dependencyMap[10]);
let closure_20 = importDefault(dependencyMap[11]);
let closure_21 = importDefault(dependencyMap[12]);
let closure_22 = importDefault(dependencyMap[13]);
let closure_23 = importDefault(dependencyMap[14]);
const tmp2 = arg1(dependencyMap[3]);
({ Endpoints: closure_24, ChannelTypes: closure_25, Routes: closure_26, ME: closure_27, RPCCommands: closure_28, GuildFeatures: closure_29, AnalyticEvents: closure_30, UserFlags: closure_31, Permissions: closure_32, AbortCodes: closure_33 } = arg1(dependencyMap[15]));
const AgeGateSource = arg1(dependencyMap[16]).AgeGateSource;
const StaticChannelRoute = arg1(dependencyMap[17]).StaticChannelRoute;
const StreamTypes = arg1(dependencyMap[18]).StreamTypes;
const InviteTargetTypes = arg1(dependencyMap[19]).InviteTargetTypes;
const STAGE_INVITE_STATE_KEY = arg1(dependencyMap[20]).STAGE_INVITE_STATE_KEY;
let closure_39 = null;
function resolveInvite(code) {
  const arg1 = code;
  const importDefault = arg1;
  const importAll = arg2;
  let obj = importDefault(dependencyMap[39]);
  if (obj.isDispatching()) {
    const resolved = Promise.resolve();
    let nextPromise = resolved.then(() => callback(arg0, arg1, arg2));
  } else {
    obj = { type: "INVITE_RESOLVE", code };
    importDefault(dependencyMap[39]).dispatch(obj);
    const obj2 = importDefault(dependencyMap[39]);
    nextPromise = importDefault(dependencyMap[40])(code, arg1, arg2).then((arg0) => {
      let code;
      let invite;
      ({ invite, code } = arg0);
      if (null != invite) {
        let obj = { type: "INVITE_RESOLVE_SUCCESS", invite, code };
        arg1(closure_3[39]).dispatch(obj);
        const obj3 = arg1(closure_3[39]);
      } else {
        obj = arg1(closure_3[39]);
        obj = { type: "INVITE_RESOLVE_FAILURE", code, banned: tmp };
        obj.dispatch(obj);
      }
      return { invite, code };
    });
    const promise = importDefault(dependencyMap[40])(code, arg1, arg2);
  }
  return nextPromise;
}
const obj = {
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
    const arg1 = arg0;
    if (arg1 === undefined) {
      obj = {};
    }
    const importDefault = obj;
    const importAll = arg2;
    return callback(async () => {
      let obj = {};
      const merged = Object.assign(callback2);
      const role_ids = obj.role_ids;
      let length;
      if (null != role_ids) {
        length = role_ids.length;
      }
      if (0 === length) {
        delete r1.role_ids;
      }
      const HTTP = callback(closure_3[45]).HTTP;
      obj = { url: closure_24.INSTANT_INVITES(callback), body: obj, context: obj, rejectWithError: true };
      obj = { location: closure_2 };
      const body = yield HTTP.post(obj).body;
      callback2(closure_3[39]).dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: callback, invite: body });
      return body;
    })();
  },
  mobileCreateInvite(arg0, GROUP_DM) {
    GROUP_DM = arg0;
    const importDefault = GROUP_DM;
    const importAll = this;
    return callback(async () => {
      const invite = invite.getInvite(user.id);
      if (null != invite) {
        if (!invite.isExpired()) {
          return invite.code;
        }
      }
      const invite1 = closure_2.createInvite(user.id, { max_age: callback(closure_3[47]).Seconds.DAY }, callback);
      const tmp = yield invite1.catch(() => callback(closure_3[39]).dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }));
      let code;
      if (null != tmp) {
        code = tmp.code;
      }
      return code;
    })();
  },
  getAllFriendInvites(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      yield new Promise((arg0) => callback(closure_3[39]).wait(() => arg0(null)));
      if (friendInvitesFetching.getFriendInvitesFetching()) {
        if (null != promise) {
          let nextPromise = promise.then((body) => body.body);
        } else {
          const _Error = Error;
          const error = new Error("Invalid friend invite fetch request");
          nextPromise = Promise.reject(error);
        }
        return nextPromise;
      } else {
        const HTTP = callback(closure_3[45]).HTTP;
        let obj = { url: constants.FRIEND_INVITES };
        obj = { location: callback };
        obj.context = obj;
        obj.rejectWithError = callback(closure_3[45]).rejectWithMigratedError();
        let promise = HTTP.get(obj);
        const obj3 = callback(closure_3[45]);
        obj = { type: "FRIEND_INVITES_FETCH_REQUEST" };
        const _Date = Date;
        const date = new Date();
        obj.requestedAt = date;
        callback2(closure_3[39]).dispatch(obj);
        const body = yield closure_39.body;
        promise = null;
        const obj4 = callback2(closure_3[39]);
        const obj1 = { type: "FRIEND_INVITES_FETCH_RESPONSE" };
        const _Date2 = Date;
        const date1 = new Date();
        obj1.receivedAt = date1;
        obj1.invites = body;
        callback2(closure_3[39]).dispatch(obj1);
        return body;
      }
    })();
  },
  createFriendInvite(sendMessageOptionsForReply, location) {
    let obj = sendMessageOptionsForReply;
    importDefault(dependencyMap[39]).dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" });
    const HTTP = location(dependencyMap[45]).HTTP;
    obj = { url: closure_24.FRIEND_INVITES };
    if (null == sendMessageOptionsForReply) {
      obj = {};
    }
    obj.body = obj;
    obj = { location };
    obj.context = obj;
    const obj2 = importDefault(dependencyMap[39]);
    obj.rejectWithError = location(dependencyMap[45]).rejectWithMigratedError();
    const obj5 = location(dependencyMap[45]);
    return HTTP.post(obj).then((body) => {
      body = body.body;
      callback(closure_3[39]).dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: body });
      return body;
    }, (error) => {
      let obj = callback(closure_3[39]);
      obj = { type: "FRIEND_INVITE_CREATE_FAILURE", error };
      obj.dispatch(obj);
      throw error;
    });
  },
  revokeFriendInvites() {
    let obj = importDefault(dependencyMap[39]);
    obj.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" });
    const HTTP = arg1(dependencyMap[45]).HTTP;
    obj = { url: closure_24.FRIEND_INVITES, context: obj };
    obj = { location: location, rejectWithError: arg1(dependencyMap[45]).rejectWithMigratedError() };
    const obj4 = arg1(dependencyMap[45]);
    return HTTP.del(obj).then((invites) => {
      callback(closure_3[39]).dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: invites.body });
    });
  },
  revokeFriendInvite(arg0) {
    const HTTP = arg1(dependencyMap[45]).HTTP;
    const obj = { url: closure_24.INVITE(arg0), rejectWithError: arg1(dependencyMap[45]).rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  fetchFriendMembers(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      let obj = callback2(closure_3[48]);
      obj = { url: closure_24.INVITE_FRIEND_MEMBERS(callback) };
      obj = {
        event: callback(closure_3[49]).NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
        properties(body) {
          let obj = callback(closure_3[50]);
          obj = { code: callback };
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
      const obj4 = callback2(closure_3[39]);
      obj4.dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS", code: callback, friendMemberIds: yield obj.get(obj).body.friend_member_ids });
    })();
  },
  clearInviteFromStore(channelId) {
    let obj = importDefault(dependencyMap[39]);
    obj = { type: "INSTANT_INVITE_CLEAR", channelId };
    obj.dispatch(obj);
  },
  revokeInvite(code) {
    code = code.code;
    const arg1 = code;
    const importDefault = code.channel;
    let obj = importDefault(dependencyMap[48]);
    obj = { url: closure_24.INVITE(code), oldFormErrors: true };
    obj = { event: arg1(dependencyMap[49]).NetworkActionNames.INVITE_REVOKE, properties: obj1 };
    obj.trackedActionData = obj;
    obj.rejectWithError = arg1(dependencyMap[45]).rejectWithMigratedError();
    const obj1 = { uses: code.uses, max_uses: code.maxUses, max_age: code.maxAge, invite_type: code.type };
    const obj5 = arg1(dependencyMap[45]);
    return obj.delete(obj).then(() => {
      let obj = channel(closure_3[39]);
      obj = { type: "INSTANT_INVITE_REVOKE_SUCCESS", code, channelId: channel.id };
      obj.dispatch(obj);
    });
  },
  acceptInvite(inviteKey) {
    let context;
    inviteKey = inviteKey.inviteKey;
    const arg1 = inviteKey;
    ({ context, callback: closure_1, skipOnboarding: closure_2 } = inviteKey);
    let dependencyMap;
    let closure_4;
    let closure_6;
    let closure_7 = this;
    let obj = arg1(dependencyMap[51]);
    const result = obj.parseInviteCodeFromInviteKey(inviteKey);
    const sessionId = store.getSessionId();
    const receivedInstallationIdForInviteCode = receivedInstallationIdForInviteCode.getReceivedInstallationIdForInviteCode(result);
    const invite = invite.getInvite(inviteKey);
    if (null != invite) {
      const guild_scheduled_event = invite.guild_scheduled_event;
      dependencyMap = guild_scheduled_event;
      let id;
      if (null != guild_scheduled_event) {
        id = guild_scheduled_event.id;
      }
      closure_6 = id;
      const target_channel_id = invite.target_channel_id;
      let tmp10;
      if (null != target_channel_id) {
        tmp10 = target_channel_id;
      }
      closure_4 = tmp10;
      const target_message_id = invite.target_message_id;
      let tmp11;
      if (null != target_message_id) {
        tmp11 = target_message_id;
      }
      const tmp8 = id;
    } else {
      let obj1 = arg1(dependencyMap[51]);
      const result1 = obj1.parseExtraDataFromInviteKey(inviteKey);
      closure_6 = result1.guildScheduledEventId;
      ({ targetChannelId: closure_4, targetMessageId: closure_5 } = result1);
    }
    obj = {};
    const merged = Object.assign(context);
    obj["invite_guild_scheduled_event_id"] = tmp8;
    const currentUser = currentUser.getCurrentUser();
    let hasFlagResult;
    if (null != currentUser) {
      hasFlagResult = currentUser.hasFlag(constants5.QUARANTINED);
    }
    if (null != hasFlagResult) {
      if (hasFlagResult) {
        importDefault(dependencyMap[52])();
        let nextPromise = new Promise((arg0, arg1) => {
          const error = new Error();
          return arg1(error);
        });
      }
      return nextPromise;
    }
    importDefault(dependencyMap[39]).dispatch({ type: "INVITE_ACCEPT", code: inviteKey });
    const HTTP = arg1(dependencyMap[45]).HTTP;
    obj = { url: closure_24.INVITE(result), context: obj, oldFormErrors: true, body: obj1 };
    obj1 = { session_id: sessionId, invite_instance_id: context.invite_instance_id, received_installation_id: receivedInstallationIdForInviteCode };
    const obj5 = importDefault(dependencyMap[39]);
    obj.rejectWithError = arg1(dependencyMap[45]).rejectWithMigratedError();
    const obj8 = arg1(dependencyMap[45]);
    nextPromise = HTTP.post(obj).then(() => {
      let closure_0 = tmp10(async (arg0) => {
        if (null != closure_9) {
          const result = closure_7.clearReceivedInstallationIdForInviteCode(closure_8);
        }
        let obj = callback2(closure_3[39]);
        obj = { type: "INVITE_ACCEPT_SUCCESS", invite: arg0.body, code: callback };
        obj.dispatch(obj);
        if (null != closure_3) {
          let guildScheduledEvent = closure_3;
        } else {
          guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guildScheduledEvent);
        }
        obj = {};
        const merged = Object.assign(arg0.body);
        obj["guild_scheduled_event"] = guildScheduledEvent;
        let target_channel_id = arg0.body.target_channel_id;
        if (null == target_channel_id) {
          target_channel_id = closure_4;
        }
        obj["target_channel_id"] = target_channel_id;
        let target_message_id = arg0.body.target_message_id;
        if (null == target_message_id) {
          target_message_id = closure_5;
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
        if (!closure_2) {
          if (!obj4.hasFlag(num, callback(closure_3[22]).GuildInviteFlags.IS_GUEST_INVITE)) {
            if (null != guild_id) {
              if (obj.new_member) {
                if (!obj.show_verification_form) {
                  const obj1 = { guildId: guild_id };
                  return yield yield closure_0(closure_3[27])(closure_3[37], closure_3.paths).default(obj1);
                }
              }
            }
          }
        }
        if (null != callback2) {
          callback2(obj);
        }
        return arg0.body;
      });
      return function() {
        return callback(...arguments);
      };
    }(), (body) => {
      body = body.body;
      let code;
      if (null != body) {
        code = body.code;
      }
      if (code === constants.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED) {
        let obj = inviteKey(guild_scheduled_event[53]);
        obj.openAgeGateModal(constants2.JOIN_LARGE_GUILD_UNDERAGE);
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
      callback(guild_scheduled_event[39]).dispatch(obj);
      let tmp9 = callback(guild_scheduled_event[54]);
      tmp9 = new tmp9(body);
      throw tmp9;
    });
  },
  acceptInviteAndTransitionToInviteChannel(inviteKey) {
    ({ analyticsLocations: closure_0, callback: closure_1, autoJoin: closure_2 } = inviteKey);
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
          const merged = Object.assign(callback2(channel));
          obj["autoJoin"] = closure_2;
          callback3(channel.channel.id, obj, null != closure_0 ? closure_0 : []);
        }
      }
    });
  },
  transitionToInvite(invite, arg1) {
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
    ({ channel, guild, inviter } = invite);
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
          importDefault(dependencyMap[55]).onOpenHubInvite(invite);
          const obj6 = importDefault(dependencyMap[55]);
        }
      }
    }
    const flags = invite.flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    let hasFlagResult = arg1(dependencyMap[21]).hasFlag(num, arg1(dependencyMap[22]).GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = arg1(dependencyMap[21]).hasFlag(num, arg1(dependencyMap[22]).GuildInviteFlags.IS_APPLICATION_BYPASS);
      const obj3 = arg1(dependencyMap[21]);
    }
    if (null != guild) {
      if (!hasFlagResult) {
        if (invite.new_member) {
          if (obj4.inviteGuildHasPendingMemberDisabledVerification(guild)) {
            const result = arg1(dependencyMap[56]).openVerificationModalOrTransitionToApplication(guild.id);
            const obj5 = arg1(dependencyMap[56]);
          }
          const obj4 = arg1(dependencyMap[56]);
        }
      }
    }
    if (null != channel) {
      const tmp14 = generateAcceptInviteOptions(invite);
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
    let obj = arg1(dependencyMap[51]);
    const result = obj.parseExtraDataFromInviteKey(inviteKey);
    obj = { installationId: store.getInstallationForTracking(), targetChannelId: result.targetChannelId, targetMessageId: result.targetMessageId, guildScheduledEventId: result.guildScheduledEventId };
    importDefault(dependencyMap[57]).openNativeAppModal(result.baseCode, constants2.INVITE_BROWSER, obj);
  },
  transitionToInviteOnboarding(baseCode, source) {
    let obj = source;
    if (source === undefined) {
      obj = {};
    }
    let transitionTo = obj.transitionTo;
    if (undefined === transitionTo) {
      transitionTo = source(dependencyMap[25]).transitionTo;
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
    const inviteKeyFromExtraData = source(dependencyMap[51]).generateInviteKeyFromExtraData(obj);
    obj = {};
    const result = closure_26.APP_WITH_INVITE_AND_GUILD_ONBOARDING(baseCode.code);
    const obj2 = source(dependencyMap[51]);
    obj.search = source(dependencyMap[51]).getInviteKeySearchSuffix(inviteKeyFromExtraData);
    transitionTo(result, obj);
  },
  openApp(code, arg1, fingerprint, username) {
    arg1 = code;
    let result = null;
    if (null != code) {
      let obj = arg1(dependencyMap[51]);
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
    let obj1 = importDefault(dependencyMap[39]);
    obj = { type: "INVITE_APP_OPENING", code };
    obj1.dispatch(obj);
    if (null != importDefault(dependencyMap[58]).ua) {
      const formatted = importDefault(dependencyMap[58]).ua.toLowerCase();
      if (formatted.indexOf("googlebot") > -1) {
        obj = { type: "INVITE_APP_NOT_OPENED", code };
        importDefault(dependencyMap[39]).dispatch(obj);
        const obj12 = importDefault(dependencyMap[39]);
      }
    }
    const os = importDefault(dependencyMap[58]).os;
    let family;
    if (null != os) {
      family = os.family;
    }
    if ("Android" !== family) {
      const os2 = importDefault(dependencyMap[58]).os;
      let family1;
      if (null != os2) {
        family1 = os2.family;
      }
      if ("iOS" !== family1) {
        if (!arg1(dependencyMap[59]).isTablet) {
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
        importDefault(dependencyMap[63]).launch(combined, (arg0) => {
          let obj = callback(closure_3[39]);
          obj = {};
          if (arg0) {
            obj.type = "INVITE_APP_OPENED";
            obj.code = arg0;
            let tmp2 = obj;
          } else {
            obj.type = "INVITE_APP_NOT_OPENED";
            obj.code = arg0;
            tmp2 = obj;
          }
          obj.dispatch(tmp2);
        });
        const obj11 = importDefault(dependencyMap[63]);
      }
    }
    if (null != baseCode) {
      let inviteDynamicLinkTemplate = arg1(dependencyMap[60]).getInviteDynamicLinkTemplate(baseCode);
      const obj5 = arg1(dependencyMap[60]);
    } else {
      inviteDynamicLinkTemplate = arg1(dependencyMap[60]).getDefaultDynamicLinkTemplate();
      const obj4 = arg1(dependencyMap[60]);
    }
    const attemptId = arg1(dependencyMap[61]).generateAttemptId();
    obj1 = {};
    let str7 = "friend_invite";
    const obj6 = arg1(dependencyMap[61]);
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
    combined = importDefault(dependencyMap[61])(inviteDynamicLinkTemplate, obj1);
    const tmp23 = importDefault(dependencyMap[61]);
    const obj2 = {};
    const obj8 = importDefault(dependencyMap[44]);
    obj2.fingerprint = arg1(dependencyMap[62]).maybeExtractId(fingerprint);
    obj2.attempt_id = attemptId;
    obj2.source = "invite";
    obj2.invite_code = baseCode;
    obj8.track(constants4.DEEP_LINK_CLICKED, obj2);
  },
  setReceivedInstallationIdForInviteCode(result, installationId) {
    let obj = importDefault(dependencyMap[39]);
    obj = { type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode: result, receivedInstallationId: installationId };
    obj.dispatch(obj);
  },
  clearReceivedInstallationIdForInviteCode(closure_8) {
    let obj = importDefault(dependencyMap[39]);
    obj = { type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode: closure_8 };
    obj.dispatch(obj);
  },
  trackInviteServerClicked
};
const tmp3 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[64]).fileFinishedImporting("actions/InstantInviteActionCreators.tsx");

export default obj;
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
  let obj = importDefault(dependencyMap[44]);
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
