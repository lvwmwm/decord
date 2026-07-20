// Module ID: 3946
// Function ID: 32580
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3946 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function joinRequestFromServer(request) {
  return { joinRequestId: request.join_request_id, guildId: request.guild_id, userId: request.user_id, user: request.user, createdAt: request.created_at, formResponses: request.form_responses, rejectionReason: request.rejection_reason, applicationStatus: request.application_status, actionedAt: request.actioned_at, actionedByUser: request.actioned_by_user, lastSeen: request.last_seen, interviewChannelId: request.interview_channel_id };
}
function deleteJoinRequest(guildId) {
  delete r0[r2];
  if (closure_8 === guildId) {
    closure_8 = null;
  }
}
function handleGatewayJoinRequestUpdate(arg0) {
  let guildId;
  let request;
  ({ guildId, request } = arg0);
  if (null != request) {
    const tmp2 = joinRequestFromServer(request);
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (tmp2.userId !== currentUser.id) {
        return false;
      }
    }
    if (obj.isApprovedAndAcked(tmp2)) {
      deleteJoinRequest(guildId);
    } else {
      closure_9[guildId] = tmp2;
    }
    const obj = arg1(dependencyMap[6]);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = null;
let closure_9 = {};
let closure_10 = false;
let closure_11 = {};
let tmp2 = (Store) => {
  class UserGuildJoinRequestStore {
    constructor() {
      self = this;
      tmp = closure_2(this, UserGuildJoinRequestStore);
      obj = closure_5(UserGuildJoinRequestStore);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = UserGuildJoinRequestStore;
  callback2(UserGuildJoinRequestStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getRequest",
    value(arg0) {
      return closure_9[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "computeGuildIds",
    value() {
      const values = Object.values(closure_9);
      const mapped = values.map((guildId) => {
        guildId = undefined;
        if (null != guildId) {
          guildId = guildId.guildId;
        }
        return guildId;
      });
      return mapped.filter((arg0) => null != arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getJoinRequestGuild",
    value(arg0) {
      let fromGuildBasicResult = null;
      if (null != closure_11[arg0]) {
        fromGuildBasicResult = UserGuildJoinRequestStore(closure_1[7]).fromGuildBasic(closure_11[arg0]);
        const obj = UserGuildJoinRequestStore(closure_1[7]);
      }
      return fromGuildBasicResult;
    }
  };
  items[4] = {
    key: "hasFetchedRequestToJoinGuilds",
    get() {
      return closure_10;
    }
  };
  items[5] = {
    key: "hasJoinRequestCoackmark",
    value() {
      return null != closure_8;
    }
  };
  return callback(UserGuildJoinRequestStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp2.displayName = "UserGuildJoinRequestStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: function handleConnectionOpen(guildJoinRequests) {
    guildJoinRequests = guildJoinRequests.guildJoinRequests;
    let closure_10 = false;
    let closure_11 = {};
    let closure_9 = {};
    const item = guildJoinRequests.forEach((guild_id) => {
      guild_id = guild_id.guild_id;
      if (null != guild_id) {
        closure_9[guild_id] = callback(guild_id);
      }
    });
  },
  GUILD_JOIN_REQUEST_UPDATE: handleGatewayJoinRequestUpdate,
  GUILD_JOIN_REQUEST_CREATE: handleGatewayJoinRequestUpdate,
  GUILD_JOIN_REQUEST_DELETE: function handleRemoveJoinRequest(guildId) {
    deleteJoinRequest(guildId.guildId);
  },
  USER_GUILD_JOIN_REQUEST_UPDATE: function handleJoinRequestUpdate(arg0) {
    let guildId;
    let request;
    ({ request, guildId } = arg0);
    if (null != request) {
      const tmp4 = joinRequestFromServer(request);
      if (obj.isApprovedAndAcked(tmp4)) {
        deleteJoinRequest(guildId);
      } else {
        closure_9[guildId] = tmp4;
      }
      const obj = arg1(dependencyMap[6]);
    } else {
      deleteJoinRequest(guildId);
    }
  },
  GUILD_DELETE: function handleGuildLeave(guild) {
    deleteJoinRequest(guild.guild.id);
  },
  USER_JOIN_REQUEST_GUILDS_FETCH: function handleJoinRequestGuildsFetch(guilds) {
    guilds = guilds.guilds;
    let closure_10 = true;
    const item = guilds.forEach((id) => {
      id = id.id;
      closure_11[id] = { id, name: id.name, features: id.features, icon: id.icon, splash: id.splash };
    });
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function handleVerificationFormUpdate(form) {
    let splash;
    form = form.form;
    let guild;
    if (null != form) {
      guild = form.guild;
    }
    if (null != guild) {
      guild = form.guild;
      let features = guild.features;
      const obj = {};
      ({ id: obj.id, name: obj.name, icon: obj.icon, splash } = guild);
      if (null == features) {
        features = [];
      }
      obj.features = features;
      obj.splash = splash;
      closure_11[form.guildId] = obj;
      const tmp2 = closure_11;
    }
  },
  INVITE_ACCEPT_SUCCESS: function handleInviteSuccess(invite) {
    let features;
    let guild;
    let id;
    let join_request;
    let splash;
    ({ guild, join_request } = invite.invite);
    if (null != guild) {
      if (null != join_request) {
        closure_9[join_request.guild_id] = joinRequestFromServer(join_request);
        ({ id, features } = guild);
        const obj = { id };
        ({ name: obj.name, icon: obj.icon, splash } = guild);
        if (null == features) {
          features = [];
        }
        obj.features = features;
        obj.splash = splash;
        closure_11[id] = obj;
        const tmp3 = closure_11;
      }
    }
  },
  ACK_APPROVED_GUILD_JOIN_REQUEST: function handleAckApprovedGuildJoinRequest(guildId) {
    deleteJoinRequest(guildId.guildId);
  },
  USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: function handleShowCoachmark(guildId) {
    guildId = guildId.guildId;
  },
  USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: function handleClearCoachmark() {
    let closure_8 = null;
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_member_verification/UserGuildJoinRequestStore.tsx");

export default tmp2;
export { joinRequestFromServer };
