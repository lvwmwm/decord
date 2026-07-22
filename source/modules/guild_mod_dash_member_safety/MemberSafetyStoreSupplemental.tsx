// Module ID: 6728
// Function ID: 52409
// Name: getMemberSupplementalByGuildId
// Dependencies: []
// Exports: hasMemberSupplemental, syncMemberSupplemental

// Module 6728 (getMemberSupplementalByGuildId)
function getMemberSupplementalByGuildId(guildId) {
  if (null == closure_2[guildId]) {
    closure_2[guildId] = {};
  }
  return closure_2[guildId];
}
let closure_2 = {};
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx");

export const hasMemberSupplemental = function hasMemberSupplemental(arg0, arg1) {
  let tmp = null != closure_2[arg0];
  if (tmp) {
    tmp = null != closure_2[arg0][arg1];
  }
  return tmp;
};
export { getMemberSupplementalByGuildId };
export const syncMemberSupplemental = function syncMemberSupplemental(guildId, memberSupplementals) {
  if (0 === memberSupplementals.length) {
    return false;
  } else {
    let closure_0 = getMemberSupplementalByGuildId(guildId);
    const item = memberSupplementals.forEach((joinSourceType) => {
      joinSourceType = joinSourceType.joinSourceType;
      if (null == joinSourceType) {
        joinSourceType = undefined;
        if (null != tmp) {
          joinSourceType = tmp.joinSourceType;
        }
      }
      let INVITE = null;
      if (null != joinSourceType) {
        INVITE = joinSourceType;
      }
      let tmp4 = null != INVITE;
      if (tmp4) {
        tmp4 = INVITE !== callback(closure_1[0]).JoinSourceType.UNSPECIFIED;
      }
      if (!tmp4) {
        tmp4 = null == joinSourceType.sourceInviteCode;
      }
      if (!tmp4) {
        INVITE = callback(closure_1[0]).JoinSourceType.INVITE;
      }
      const obj = { userId: joinSourceType.userId };
      let sourceInviteCode = joinSourceType.sourceInviteCode;
      if (null == sourceInviteCode) {
        sourceInviteCode = undefined;
        if (null != tmp) {
          sourceInviteCode = tmp.sourceInviteCode;
        }
      }
      let tmp11 = null;
      if (null != sourceInviteCode) {
        tmp11 = sourceInviteCode;
      }
      obj.sourceInviteCode = tmp11;
      obj.joinSourceType = INVITE;
      let inviterId = joinSourceType.inviterId;
      if (null == inviterId) {
        inviterId = undefined;
        if (null != tmp) {
          inviterId = tmp.inviterId;
        }
      }
      let tmp13 = null;
      if (null != inviterId) {
        tmp13 = inviterId;
      }
      obj.inviterId = tmp13;
      let integrationType = joinSourceType.integrationType;
      if (null == integrationType) {
        integrationType = undefined;
        if (null != tmp) {
          integrationType = tmp.integrationType;
        }
      }
      let tmp15 = null;
      if (null != integrationType) {
        tmp15 = integrationType;
      }
      obj.integrationType = tmp15;
      let joinSourceApplicationId = joinSourceType.joinSourceApplicationId;
      if (null == joinSourceApplicationId) {
        let prop;
        if (null != tmp) {
          prop = tmp.joinSourceApplicationId;
        }
        joinSourceApplicationId = prop;
      }
      let tmp17 = null;
      if (null != joinSourceApplicationId) {
        tmp17 = joinSourceApplicationId;
      }
      obj.joinSourceApplicationId = tmp17;
      let joinSourceChannelId = joinSourceType.joinSourceChannelId;
      if (null == joinSourceChannelId) {
        joinSourceChannelId = undefined;
        if (null != tmp) {
          joinSourceChannelId = tmp.joinSourceChannelId;
        }
      }
      let tmp19 = null;
      if (null != joinSourceChannelId) {
        tmp19 = joinSourceChannelId;
      }
      obj.joinSourceChannelId = tmp19;
      callback[joinSourceType.userId] = obj;
    });
    return true;
  }
};
