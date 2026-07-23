// Module ID: 7463
// Function ID: 59943
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 7464, 6979, 7465, 7467, 7468, 566, 686, 2]

// Module 7463 (_isNativeReflectConstruct)
import InviteSendStates from "InviteSendStates";
import head from "head";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { InviteTargetTypes } from "InviteSendStates";

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
    map = new Map(map);
    map.delete(tmp);
  } else {
    return false;
  }
}
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let c14 = false;
let c15 = false;
let c16 = false;
let map = new Map();
let tmp3 = ((Store) => {
  class InstantInviteStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, InstantInviteStore);
      obj = outer1_5(InstantInviteStore);
      tmp2 = outer1_4;
      if (outer1_18()) {
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
      if (targetType === outer1_8.STREAM) {
        if (null != targetUserId) {
          let tmp9;
          if (null != outer1_11[arg0]) {
            tmp9 = tmp8[targetUserId];
          }
          let tmp3 = tmp9;
        }
        return tmp3;
      }
      if (targetType === outer1_8.EMBEDDED_APPLICATION) {
        if (null != targetApplicationId) {
          let tmp6;
          if (null != outer1_12[arg0]) {
            tmp6 = tmp5[targetApplicationId];
          }
          tmp3 = tmp6;
        }
      }
      tmp3 = outer1_10[arg0];
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getFriendInvite",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getFriendInvitesFetching",
    value() {
      return outer1_14;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "canRevokeFriendInvite",
    value() {
      let tmp = null != outer1_9;
      if (tmp) {
        tmp = !outer1_15;
      }
      if (tmp) {
        tmp = !outer1_16;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getReceivedInstallationIdForInviteCode",
    value(arg0) {
      return outer1_17.get(outer1_19(arg0));
    }
  };
  return callback(InstantInviteStore, items);
})(require("initialize").Store);
tmp3.displayName = "InstantInviteStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_10 = {};
    let closure_11 = {};
    let closure_12 = {};
    let closure_13 = {};
    let c9 = null;
    let c15 = false;
    let c16 = false;
    let c14 = false;
  },
  CHANNEL_DELETE: function handleDeleteChannel(channel) {
    channel = channel.channel;
    delete tmp4[tmp3];
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  FRIEND_INVITE_CREATE_SUCCESS: function handleFriendInviteCreateSuccess(invite) {
    closure_13[invite.invite.code] = _isNativeReflectConstruct.createFromServer(invite.invite);
    const tmp = importDefault(7465);
    const tmp2 = importDefault(7467);
    const tmpResult = tmp(tmp2(importDefault(7468)(Object.values(closure_13), "createdAt")));
    let tmp5 = null;
    if (null != tmpResult) {
      tmp5 = tmpResult;
    }
    let closure_9 = tmp5;
    let c16 = false;
  },
  FRIEND_INVITE_CREATE_FAILURE: function handleFriendInviteCreateFailure() {
    let c16 = false;
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function handleFriendInviteRevokeSuccess(invites) {
    if (null != invites.invites) {
      invites = invites.invites;
      const item = invites.forEach((code) => {
        if (null != outer1_13[code.code]) {
          code = code.code;
          delete tmp2[tmp];
        }
      });
    }
    const tmp2 = importDefault(7465);
    const tmp3 = importDefault(7467);
    const tmp2Result = tmp2(tmp3(importDefault(7468)(Object.values(closure_13), "createdAt")));
    let tmp6 = null;
    if (null != tmp2Result) {
      tmp6 = tmp2Result;
    }
    let closure_9 = tmp6;
    let c15 = false;
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInstantInviteCreateSuccess(channelId) {
    channelId = channelId.channelId;
    const fromServer = _isNativeReflectConstruct.createFromServer(channelId.invite);
    if (fromServer.targetType === InviteTargetTypes.STREAM) {
      if (null != fromServer.targetUser) {
        if (null == dependencyMap[channelId]) {
          dependencyMap[channelId] = {};
        }
        const _String = String;
        dependencyMap[channelId][String(fromServer.targetUser.id)] = fromServer;
      }
    }
    if (fromServer.targetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != fromServer.targetApplication) {
        if (null == dependencyMap2[channelId]) {
          dependencyMap2[channelId] = {};
        }
        dependencyMap2[channelId][fromServer.targetApplication.id] = fromServer;
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
    let c15 = true;
  },
  FRIEND_INVITE_CREATE_REQUEST: function handleFriendInviteCreateRequest() {
    let c16 = true;
  },
  FRIEND_INVITES_FETCH_REQUEST: function handleFriendInviteFetchRequest() {
    let c14 = true;
  },
  FRIEND_INVITES_FETCH_RESPONSE: function handleFriendInviteFetchResponse(invites) {
    let closure_13 = {};
    invites = invites.invites;
    const item = invites.forEach((code) => {
      closure_13[code.code] = outer1_7.createFromServer(code);
    });
    const tmp2 = importDefault(7465);
    const tmp3 = importDefault(7467);
    const tmp2Result = tmp2(tmp3(importDefault(7468)(Object.values(closure_13), "createdAt")));
    let tmp6 = null;
    if (null != tmp2Result) {
      tmp6 = tmp2Result;
    }
    let closure_9 = tmp6;
    let c14 = false;
  },
  INSTANT_INVITE_CLEAR: function handleInstantInviteClear(arg0) {
    delete tmp2[tmp];
  },
  INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function handleReceivedInstallationIdSet(inviteCode) {
    map = new Map(map);
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
      map = new Map();
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/InstantInviteStore.tsx");

export default tmp3;
