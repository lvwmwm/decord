// Module ID: 4115
// Function ID: 34046
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 4116, 566, 686, 2]

// Module 4115 (_isNativeReflectConstruct)
import readSnowflake from "readSnowflake";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { InviteStates } from "ME";

const require = arg1;
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
  let obj = require(4116) /* readSnowflake */;
  const result = obj.parseExtraDataFromInviteKey(str);
  const value = map.get(str);
  if (null != value) {
    obj = { state: InviteStates.RESOLVING };
    const merged = Object.assign(value);
  } else {
    obj = { state: InviteStates.RESOLVING, code: result.baseCode };
  }
  arg1(obj);
  map = new Map(map);
  const result1 = map.set(str, obj);
  const guild = obj.guild;
  let id;
  if (null != guild) {
    id = guild.id;
  }
  if (null != id) {
    const obj1 = {};
    const merged1 = Object.assign(obj1);
    obj1[obj.guild.id] = str;
  }
}
function handleInviteResolveFailure(code) {
  let closure_0 = code;
  updateInvite(code.code, (arg0) => {
    if ("banned" in banned) {
      if (banned.banned) {
        let EXPIRED = outer1_7.BANNED;
      }
      arg0.state = EXPIRED;
    }
    EXPIRED = outer1_7.EXPIRED;
  });
}
let map = new Map();
const map1 = new Map();
let closure_10 = {};
const map2 = new Map();
let tmp5 = ((Store) => {
  class InviteStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, InviteStore);
      obj = outer1_5(InviteStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(InviteStore, Store);
  let obj = {
    key: "getInvite",
    value(arg0) {
      return outer1_8.get(arg0);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getInviteError",
    value(arg0) {
      return outer1_9.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getInvites",
    value() {
      return outer1_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getInviteKeyForGuildId",
    value(arg0) {
      return outer1_10[arg0];
    }
  };
  items[4] = {
    key: "getFriendMemberIds",
    value(arg0) {
      return outer1_11.get(arg0);
    }
  };
  return callback(InviteStore, items);
})(require("initialize").Store);
tmp5.displayName = "InviteStore";
tmp5 = new tmp5(require("dispatcher"), {
  INVITE_RESOLVE: function handleInviteResolve(code) {
    code = code.code;
    let obj = require(4116) /* readSnowflake */;
    const result = obj.parseExtraDataFromInviteKey(code);
    map = new Map(map);
    obj = { code: result.baseCode, state: InviteStates.RESOLVING };
    const result1 = map.set(code, obj);
  },
  INVITE_RESOLVE_SUCCESS: function handleInviteResolveSuccess(code) {
    let closure_0 = code;
    updateInvite(code.code, (arg0) => {
      arg0.state = outer1_7.RESOLVED;
      arg0.guild = code.invite.guild;
      arg0.channel = code.invite.channel;
      arg0.inviter = code.invite.inviter;
      const approximate_member_count = code.invite.approximate_member_count;
      let tmp = null;
      if (null != approximate_member_count) {
        tmp = approximate_member_count;
      }
      arg0.approximate_member_count = tmp;
      const approximate_presence_count = code.invite.approximate_presence_count;
      let tmp2 = null;
      if (null != approximate_presence_count) {
        tmp2 = approximate_presence_count;
      }
      arg0.approximate_presence_count = tmp2;
      arg0.target_type = code.invite.target_type;
      arg0.target_user = code.invite.target_user;
      arg0.target_application = code.invite.target_application;
      arg0.expires_at = code.invite.expires_at;
      arg0.friends_count = code.invite.friends_count;
      arg0.is_contact = code.invite.is_contact;
      arg0.guild_scheduled_event = code.invite.guild_scheduled_event;
      arg0.type = code.invite.type;
      arg0.flags = code.invite.flags;
      arg0.is_nickname_changeable = code.invite.is_nickname_changeable;
      arg0.profile = code.invite.profile;
      arg0.roles = code.invite.roles;
      arg0.target_channel_id = code.invite.target_channel_id;
      arg0.target_message_id = code.invite.target_message_id;
      arg0.liveliness = code.invite.liveliness;
    });
  },
  INVITE_RESOLVE_FAILURE: handleInviteResolveFailure,
  INSTANT_INVITE_REVOKE_SUCCESS: handleInviteResolveFailure,
  FRIEND_INVITE_CREATE_SUCCESS: function handleFriendInviteCreate(invite) {
    let closure_0 = invite;
    updateInvite(invite.invite.code, (arg0) => {
      arg0.state = outer1_7.RESOLVED;
      arg0.inviter = invite.invite.inviter;
    });
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function handleFriendInviteRevokeSuccess(invites) {
    invites = invites.invites;
    const item = invites.forEach((code) => {
      outer1_13(code.code, (arg0) => {
        arg0.state = outer2_7.EXPIRED;
      });
    });
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInstantInviteCreate(invite) {
    let closure_0 = invite;
    updateInvite(invite.invite.code, (arg0) => {
      arg0.state = outer1_7.RESOLVED;
      arg0.guild = invite.invite.guild;
      arg0.channel = invite.invite.channel;
      arg0.inviter = invite.invite.inviter;
      const approximate_member_count = invite.invite.approximate_member_count;
      let tmp = null;
      if (null != approximate_member_count) {
        tmp = approximate_member_count;
      }
      arg0.approximate_member_count = tmp;
      const approximate_presence_count = invite.invite.approximate_presence_count;
      let tmp2 = null;
      if (null != approximate_presence_count) {
        tmp2 = approximate_presence_count;
      }
      arg0.approximate_presence_count = tmp2;
      arg0.target_type = invite.invite.target_type;
      arg0.target_user = invite.invite.target_user;
      arg0.target_application = invite.invite.target_application;
      arg0.guild_scheduled_event = invite.invite.guild_scheduled_event;
      arg0.type = invite.invite.type;
      arg0.is_nickname_changeable = invite.invite.is_nickname_changeable;
      arg0.profile = invite.invite.profile;
      arg0.roles = invite.invite.roles;
    });
  },
  INVITE_ACCEPT: function handleAcceptInvite(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = outer1_7.ACCEPTING;
    });
  },
  INVITE_ACCEPT_SUCCESS: function handleAcceptInviteSuccess(code) {
    let closure_0 = code;
    updateInvite(code.code, (channel) => {
      channel.state = outer1_7.ACCEPTED;
      channel.guild = code.invite.guild;
      channel.new_member = code.invite.new_member;
      const merged = Object.assign(channel.channel);
      const merged1 = Object.assign(code.invite.channel);
      channel.channel = {};
    });
  },
  INVITE_ACCEPT_FAILURE: function handleAcceptInviteFailure(code) {
    const result = map1.set(code.code, code.error);
    updateInvite(code.code, (arg0) => {
      arg0.state = outer1_7.ERROR;
    });
  },
  INVITE_APP_OPENING: function handleInviteAppOpening(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = outer1_7.APP_OPENING;
    });
  },
  INVITE_APP_OPENED: function handleInviteAppOpened(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = outer1_7.APP_OPENED;
    });
  },
  INVITE_APP_NOT_OPENED: function handleInviteAppNotOpened(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = outer1_7.APP_NOT_OPENED;
    });
  },
  INVITE_FRIEND_MEMBERS_FETCH_SUCCESS: function handleInviteFriendMembersFetchSuccess(code) {
    map = new Map(map);
    const result = map.set(code.code, code.friendMemberIds);
  },
  INVITE_FRIEND_MEMBERS_FETCH_FAILURE: function handleInviteFriendMembersFetchFailure(code) {
    if (map.has(code.code)) {
      const _Map = Map;
      map = new Map(map);
      map.delete(code.code);
    } else {
      return false;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/InviteStore.tsx");

export default tmp5;
