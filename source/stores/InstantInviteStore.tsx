// Module ID: 7457
// Function ID: 59886
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7457 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function normalizeInviteCodeForInstallationId(inviteCode) {
  return inviteCode.toLowerCase();
}
function handleReceivedInstallationIdClear(inviteCode) {
  const tmp = normalizeInviteCodeForInstallationId(inviteCode.inviteCode);
  if (map.has(tmp)) {
    const _Map = Map;
    const map = new Map(map);
    map.delete(tmp);
  } else {
    return false;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const InviteTargetTypes = arg1(dependencyMap[6]).InviteTargetTypes;
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = false;
let closure_15 = false;
let closure_16 = false;
const map = new Map();
let tmp3 = (Store) => {
  class InstantInviteStore {
    constructor() {
      self = this;
      tmp = closure_2(this, InstantInviteStore);
      obj = closure_5(InstantInviteStore);
      tmp2 = closure_4;
      if (closure_18()) {
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
  const importDefault = InstantInviteStore;
  callback2(InstantInviteStore, Store);
  let obj = {
    key: "getInvite",
    value(arg0) {
      let targetApplicationId;
      let targetType;
      let targetUserId;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      ({ targetType, targetUserId, targetApplicationId } = obj);
      if (targetType === constants.STREAM) {
        if (null != targetUserId) {
          let tmp9;
          if (null != closure_11[arg0]) {
            tmp9 = tmp8[targetUserId];
          }
          let tmp3 = tmp9;
        }
        return tmp3;
      }
      if (targetType === constants.EMBEDDED_APPLICATION) {
        if (null != targetApplicationId) {
          let tmp6;
          if (null != closure_12[arg0]) {
            tmp6 = tmp5[targetApplicationId];
          }
          tmp3 = tmp6;
        }
      }
      tmp3 = closure_10[arg0];
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getFriendInvite",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getFriendInvitesFetching",
    value() {
      return closure_14;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "canRevokeFriendInvite",
    value() {
      let tmp = null != closure_9;
      if (tmp) {
        tmp = !closure_15;
      }
      if (tmp) {
        tmp = !closure_16;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getReceivedInstallationIdForInviteCode",
    value(arg0) {
      return closure_17.get(callback4(arg0));
    }
  };
  return callback(InstantInviteStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp3.displayName = "InstantInviteStore";
tmp3 = new tmp3(importDefault(dependencyMap[11]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_10 = {};
    let closure_11 = {};
    let closure_12 = {};
    let closure_13 = {};
    let closure_9 = null;
    let closure_15 = false;
    let closure_16 = false;
    let closure_14 = false;
  },
  CHANNEL_DELETE: function handleDeleteChannel(channel) {
    channel = channel.channel;
    delete r3[r2];
    delete r3[r2];
    delete r1[r0];
  },
  FRIEND_INVITE_CREATE_SUCCESS: function handleFriendInviteCreateSuccess(invite) {
    closure_13[invite.invite.code] = closure_7.createFromServer(invite.invite);
    const tmp = importDefault(dependencyMap[7]);
    const tmp2 = importDefault(dependencyMap[8]);
    const tmpResult = tmp(tmp2(importDefault(dependencyMap[9])(Object.values(closure_13), "createdAt")));
    let tmp5 = null;
    if (null != tmpResult) {
      tmp5 = tmpResult;
    }
    let closure_16 = false;
  },
  FRIEND_INVITE_CREATE_FAILURE: function handleFriendInviteCreateFailure() {
    let closure_16 = false;
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function handleFriendInviteRevokeSuccess(invites) {
    if (null != invites.invites) {
      invites = invites.invites;
      const item = invites.forEach((code) => {
        if (null != closure_13[code.code]) {
          code = code.code;
          delete r1[r0];
        }
      });
    }
    const tmp2 = importDefault(dependencyMap[7]);
    const tmp3 = importDefault(dependencyMap[8]);
    const tmp2Result = tmp2(tmp3(importDefault(dependencyMap[9])(Object.values(closure_13), "createdAt")));
    let tmp6 = null;
    if (null != tmp2Result) {
      tmp6 = tmp2Result;
    }
    let closure_15 = false;
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInstantInviteCreateSuccess(channelId) {
    channelId = channelId.channelId;
    const fromServer = closure_7.createFromServer(channelId.invite);
    if (fromServer.targetType === InviteTargetTypes.STREAM) {
      if (null != fromServer.targetUser) {
        if (null == closure_11[channelId]) {
          closure_11[channelId] = {};
        }
        const _String = String;
        closure_11[channelId][String(fromServer.targetUser.id)] = fromServer;
      }
    }
    if (fromServer.targetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != fromServer.targetApplication) {
        if (null == closure_12[channelId]) {
          closure_12[channelId] = {};
        }
        closure_12[channelId][fromServer.targetApplication.id] = fromServer;
      }
    }
    closure_10[channelId] = fromServer;
  },
  INSTANT_INVITE_CREATE_FAILURE: function handleInstantInviteCreateFailure(channelId) {
    closure_10[channelId.channelId] = null;
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function handleInstantInviteRevokeSuccess(channelId) {
    closure_10[channelId.channelId] = null;
  },
  FRIEND_INVITE_REVOKE_REQUEST: function handleFriendInviteRevokeRequest() {
    let closure_15 = true;
  },
  FRIEND_INVITE_CREATE_REQUEST: function handleFriendInviteCreateRequest() {
    let closure_16 = true;
  },
  FRIEND_INVITES_FETCH_REQUEST: function handleFriendInviteFetchRequest() {
    let closure_14 = true;
  },
  FRIEND_INVITES_FETCH_RESPONSE: function handleFriendInviteFetchResponse(invites) {
    let closure_13 = {};
    invites = invites.invites;
    const item = invites.forEach((code) => {
      closure_13[code.code] = closure_7.createFromServer(code);
    });
    const tmp2 = importDefault(dependencyMap[7]);
    const tmp3 = importDefault(dependencyMap[8]);
    const tmp2Result = tmp2(tmp3(importDefault(dependencyMap[9])(Object.values(closure_13), "createdAt")));
    let tmp6 = null;
    if (null != tmp2Result) {
      tmp6 = tmp2Result;
    }
    let closure_14 = false;
  },
  INSTANT_INVITE_CLEAR: function handleInstantInviteClear(arg0) {
    delete r1[r0];
  },
  INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function handleReceivedInstallationIdSet(inviteCode) {
    const map = new Map(map);
    const result = map.set(normalizeInviteCodeForInstallationId(inviteCode.inviteCode), inviteCode.receivedInstallationId);
  },
  INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: handleReceivedInstallationIdClear,
  INVITE_MODAL_CLOSE: function handleInviteModalClose(inviteCode) {
    inviteCode = inviteCode.inviteCode;
    let tmp = null != inviteCode;
    if (tmp) {
      const obj = { inviteCode };
      tmp = handleReceivedInstallationIdClear(obj);
    }
    return tmp;
  },
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      return false;
    } else {
      const _Map = Map;
      const map = new Map();
    }
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("stores/InstantInviteStore.tsx");

export default tmp3;
