// Module ID: 4113
// Function ID: 34030
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4113 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateInvite(code, arg1) {
  let str = "";
  if (null != code) {
    str = code;
  }
  let obj = arg1(dependencyMap[6]);
  const result = obj.parseExtraDataFromInviteKey(str);
  const value = map.get(str);
  if (null != value) {
    obj = { state: InviteStates.RESOLVING };
    const merged = Object.assign(value);
  } else {
    obj = { state: InviteStates.RESOLVING, code: result.baseCode };
  }
  arg1(obj);
  const map = new Map(map);
  const result1 = map.set(str, obj);
  const guild = obj.guild;
  let id;
  if (null != guild) {
    id = guild.id;
  }
  if (null != id) {
    const obj1 = {};
    const merged1 = Object.assign(closure_10);
    obj1[obj.guild.id] = str;
    closure_10 = obj1;
  }
}
function handleInviteResolveFailure(code) {
  const arg1 = code;
  updateInvite(code.code, (arg0) => {
    if ("banned" in arg0) {
      if (arg0.banned) {
        let EXPIRED = constants.BANNED;
      }
      arg0.state = EXPIRED;
    }
    EXPIRED = constants.EXPIRED;
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const InviteStates = arg1(dependencyMap[5]).InviteStates;
const map = new Map();
const map1 = new Map();
let closure_10 = {};
const map2 = new Map();
let tmp5 = (Store) => {
  class InviteStore {
    constructor() {
      self = this;
      tmp = closure_2(this, InviteStore);
      obj = closure_5(InviteStore);
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
  const arg1 = InviteStore;
  callback2(InviteStore, Store);
  let obj = {
    key: "getInvite",
    value(arg0) {
      return closure_8.get(arg0);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getInviteError",
    value(arg0) {
      return closure_9.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getInvites",
    value() {
      return closure_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getInviteKeyForGuildId",
    value(arg0) {
      return closure_10[arg0];
    }
  };
  items[4] = {
    key: "getFriendMemberIds",
    value(arg0) {
      return closure_11.get(arg0);
    }
  };
  return callback(InviteStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp5.displayName = "InviteStore";
tmp5 = new tmp5(importDefault(dependencyMap[8]), {
  INVITE_RESOLVE: function handleInviteResolve(code) {
    code = code.code;
    let obj = arg1(dependencyMap[6]);
    const result = obj.parseExtraDataFromInviteKey(code);
    const map = new Map(map);
    obj = { code: result.baseCode, state: InviteStates.RESOLVING };
    const result1 = map.set(code, obj);
  },
  INVITE_RESOLVE_SUCCESS: function handleInviteResolveSuccess(code) {
    const arg1 = code;
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.RESOLVED;
      arg0.guild = arg0.invite.guild;
      arg0.channel = arg0.invite.channel;
      arg0.inviter = arg0.invite.inviter;
      const approximate_member_count = arg0.invite.approximate_member_count;
      let tmp = null;
      if (null != approximate_member_count) {
        tmp = approximate_member_count;
      }
      arg0.approximate_member_count = tmp;
      const approximate_presence_count = arg0.invite.approximate_presence_count;
      let tmp2 = null;
      if (null != approximate_presence_count) {
        tmp2 = approximate_presence_count;
      }
      arg0.approximate_presence_count = tmp2;
      arg0.target_type = arg0.invite.target_type;
      arg0.target_user = arg0.invite.target_user;
      arg0.target_application = arg0.invite.target_application;
      arg0.expires_at = arg0.invite.expires_at;
      arg0.friends_count = arg0.invite.friends_count;
      arg0.is_contact = arg0.invite.is_contact;
      arg0.guild_scheduled_event = arg0.invite.guild_scheduled_event;
      arg0.type = arg0.invite.type;
      arg0.flags = arg0.invite.flags;
      arg0.is_nickname_changeable = arg0.invite.is_nickname_changeable;
      arg0.profile = arg0.invite.profile;
      arg0.roles = arg0.invite.roles;
      arg0.target_channel_id = arg0.invite.target_channel_id;
      arg0.target_message_id = arg0.invite.target_message_id;
      arg0.liveliness = arg0.invite.liveliness;
    });
  },
  INVITE_RESOLVE_FAILURE: handleInviteResolveFailure,
  INSTANT_INVITE_REVOKE_SUCCESS: handleInviteResolveFailure,
  FRIEND_INVITE_CREATE_SUCCESS: function handleFriendInviteCreate(invite) {
    const arg1 = invite;
    updateInvite(invite.invite.code, (arg0) => {
      arg0.state = constants.RESOLVED;
      arg0.inviter = arg0.invite.inviter;
    });
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function handleFriendInviteRevokeSuccess(invites) {
    invites = invites.invites;
    const item = invites.forEach((code) => {
      callback(code.code, (arg0) => {
        arg0.state = constants.EXPIRED;
      });
    });
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInstantInviteCreate(invite) {
    const arg1 = invite;
    updateInvite(invite.invite.code, (arg0) => {
      arg0.state = constants.RESOLVED;
      arg0.guild = arg0.invite.guild;
      arg0.channel = arg0.invite.channel;
      arg0.inviter = arg0.invite.inviter;
      const approximate_member_count = arg0.invite.approximate_member_count;
      let tmp = null;
      if (null != approximate_member_count) {
        tmp = approximate_member_count;
      }
      arg0.approximate_member_count = tmp;
      const approximate_presence_count = arg0.invite.approximate_presence_count;
      let tmp2 = null;
      if (null != approximate_presence_count) {
        tmp2 = approximate_presence_count;
      }
      arg0.approximate_presence_count = tmp2;
      arg0.target_type = arg0.invite.target_type;
      arg0.target_user = arg0.invite.target_user;
      arg0.target_application = arg0.invite.target_application;
      arg0.guild_scheduled_event = arg0.invite.guild_scheduled_event;
      arg0.type = arg0.invite.type;
      arg0.is_nickname_changeable = arg0.invite.is_nickname_changeable;
      arg0.profile = arg0.invite.profile;
      arg0.roles = arg0.invite.roles;
    });
  },
  INVITE_ACCEPT: function handleAcceptInvite(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.ACCEPTING;
    });
  },
  INVITE_ACCEPT_SUCCESS: function handleAcceptInviteSuccess(code) {
    const arg1 = code;
    updateInvite(code.code, (channel) => {
      channel.state = constants.ACCEPTED;
      channel.guild = channel.invite.guild;
      channel.new_member = channel.invite.new_member;
      const merged = Object.assign(channel.channel);
      const merged1 = Object.assign(channel.invite.channel);
      channel.channel = {};
    });
  },
  INVITE_ACCEPT_FAILURE: function handleAcceptInviteFailure(code) {
    const result = map1.set(code.code, code.error);
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.ERROR;
    });
  },
  INVITE_APP_OPENING: function handleInviteAppOpening(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.APP_OPENING;
    });
  },
  INVITE_APP_OPENED: function handleInviteAppOpened(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.APP_OPENED;
    });
  },
  INVITE_APP_NOT_OPENED: function handleInviteAppNotOpened(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.APP_NOT_OPENED;
    });
  },
  INVITE_FRIEND_MEMBERS_FETCH_SUCCESS: function handleInviteFriendMembersFetchSuccess(code) {
    const map = new Map(map);
    const result = map.set(code.code, code.friendMemberIds);
  },
  INVITE_FRIEND_MEMBERS_FETCH_FAILURE: function handleInviteFriendMembersFetchFailure(code) {
    if (map2.has(code.code)) {
      const _Map = Map;
      const map = new Map(map2);
      map.delete(code.code);
    } else {
      return false;
    }
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/InviteStore.tsx");

export default tmp5;
