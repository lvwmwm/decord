// Module ID: 6728
// Function ID: 52431
// Name: getGuildMemberSecondaryIndexes
// Dependencies: [6, 7, 1849, 3754, 6729, 6730, 6732, 6733, 6739, 4276, 2]

// Module 6728 (getGuildMemberSecondaryIndexes)
import getSortValueForMember from "getSortValueForMember";
import getMemberSupplementalByGuildId from "getMemberSupplementalByGuildId";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getGuildMemberSecondaryIndexes(isCurrentGuildMemberByTimestamp) {
  const items = [isCurrentGuildMemberByTimestamp.isCurrentGuildMemberByTimestamp ? obj.CURRENT_GUILD_MEMBER : obj.NEW_GUILD_MEMBER];
  if (isCurrentGuildMemberByTimestamp.isIncludedInSearchResults) {
    items.push(obj.INCLUDED_IN_SEARCH_RESULTS);
  }
  return items;
}
function getGuildMemberSecondarySortBy(arg0) {
  return arg0.sort;
}
function createMembersMap() {
  const secondaryIndexMap = new require(3754) /* sortedInsert */.SecondaryIndexMap(getGuildMemberSecondaryIndexes, getGuildMemberSecondarySortBy);
  return secondaryIndexMap;
}
function hasUnusualDmActivity(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const _Date = Date;
    const date = new Date(arg0);
    const time = date.getTime();
    tmp = time >= closure_6 - require(6729) /* result */.UNUSUAL_DM_COMPARISON_DELTA;
  }
  return tmp;
}
let closure_6 = Date.now();
let obj = { NEW_GUILD_MEMBER: "NEW_GUILD_MEMBER", CURRENT_GUILD_MEMBER: "CURRENT_GUILD_MEMBER", INCLUDED_IN_SEARCH_RESULTS: "INCLUDED_IN_SEARCH_RESULTS" };
let tmp2 = (() => {
  class GuildMemberSafetyMembers {
    constructor(arg0) {
      tmp = outer1_3(this, GuildMemberSafetyMembers);
      this.newMemberTimestamp = Date.now();
      this.guildId = arg0;
      this._membersMap = outer1_10();
      return;
    }
  }
  let obj = {
    key: "reset",
    value() {
      const _membersMap = this._membersMap;
      _membersMap.clear();
      this._membersMap = outer1_10();
      const result = this.resetNewMemberTimestamp();
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "resetNewMemberTimestamp",
    value() {
      this.newMemberTimestamp = Date.now();
    }
  };
  items[1] = obj;
  obj = {
    key: "enhanceNewMember",
    value(joinedAt, selectedSort) {
      let hasUnusualAccountActivity;
      let hasUnusualDmActivity;
      let integrationType;
      let inviterId;
      let joinSourceApplicationId;
      let joinSourceChannelId;
      let joinSourceType;
      let sourceInviteCode;
      let obj = arg2;
      const self = this;
      if (arg2 === undefined) {
        obj = {};
      }
      const joinedAtTimestamp = GuildMemberSafetyMembers(outer1_2[5]).getJoinedAtTimestamp(joinedAt.joinedAt);
      const result = self._computeMemberSupplementals(joinedAt.userId, joinedAt.unusualDMActivityUntil);
      ({ hasUnusualDmActivity, hasUnusualAccountActivity, sourceInviteCode, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId } = result);
      obj = { hasUnusualDmActivity, hasUnusualAccountActivity, sourceInviteCode, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId };
      const user = outer1_5.getUser(joinedAt.userId);
      const merged = Object.assign(joinedAt);
      obj["isCurrentGuildMemberByTimestamp"] = joinedAtTimestamp <= self.newMemberTimestamp;
      obj["isIncludedInSearchResults"] = false;
      obj["user"] = user;
      const obj2 = GuildMemberSafetyMembers(outer1_2[5]);
      let ORDER_BY_UNSPECIFIED = selectedSort.selectedSort;
      if (null == ORDER_BY_UNSPECIFIED) {
        ORDER_BY_UNSPECIFIED = GuildMemberSafetyMembers(outer1_2[4]).OrderBy.ORDER_BY_UNSPECIFIED;
      }
      obj["sort"] = GuildMemberSafetyMembers(outer1_2[6]).getSortValueForMember(joinedAt, ORDER_BY_UNSPECIFIED);
      obj["joinedAtTimestamp"] = joinedAtTimestamp;
      const merged1 = Object.assign(obj);
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_computeMemberSupplementals",
    value(id) {
      let integrationType;
      let inviterId;
      let joinSourceApplicationId;
      let joinSourceChannelId;
      let joinSourceType;
      let sourceInviteCode;
      let obj = GuildMemberSafetyMembers(outer1_2[7]);
      obj = obj.getMemberSupplementalByGuildId(this.guildId)[id];
      if (null == obj) {
        obj = {};
      }
      ({ sourceInviteCode, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId } = obj);
      obj = {};
      let tmp = null;
      if (null != sourceInviteCode) {
        tmp = sourceInviteCode;
      }
      obj.sourceInviteCode = tmp;
      let tmp2 = null;
      if (null != joinSourceType) {
        tmp2 = joinSourceType;
      }
      obj.joinSourceType = tmp2;
      let tmp3 = null;
      if (null != inviterId) {
        tmp3 = inviterId;
      }
      obj.inviterId = tmp3;
      let tmp4 = null;
      if (null != integrationType) {
        tmp4 = integrationType;
      }
      obj.integrationType = tmp4;
      let tmp5 = null;
      if (null != joinSourceApplicationId) {
        tmp5 = joinSourceApplicationId;
      }
      obj.joinSourceApplicationId = tmp5;
      let tmp6 = null;
      if (null != joinSourceChannelId) {
        tmp6 = joinSourceChannelId;
      }
      obj.joinSourceChannelId = tmp6;
      obj.hasUnusualDmActivity = outer1_11(arg1);
      obj.hasUnusualAccountActivity = GuildMemberSafetyMembers(outer1_2[8]).isSpammer(id);
      return obj;
    }
  };
  items[4] = {
    key: "createMember",
    value(userId) {
      const _membersMap = this._membersMap;
      return _membersMap.set(userId.userId, userId);
    }
  };
  items[5] = {
    key: "updateMember",
    value(userId) {
      let hasUnusualAccountActivity;
      let hasUnusualDmActivity;
      let integrationType;
      let inviterId;
      let joinSourceApplicationId;
      let joinSourceChannelId;
      let joinSourceType;
      let sourceInviteCode;
      const self = this;
      if (null == arg1) {
        const _membersMap2 = self._membersMap;
        return _membersMap2.set(userId.userId, userId);
      } else {
        let obj = {};
        const merged = Object.assign(userId);
        obj = {};
        const merged1 = Object.assign(arg1);
        let unusualDMActivityUntil = obj.unusualDMActivityUntil;
        if (null == unusualDMActivityUntil) {
          unusualDMActivityUntil = obj.unusualDMActivityUntil;
        }
        const result = self._computeMemberSupplementals(obj.userId, unusualDMActivityUntil);
        ({ sourceInviteCode, hasUnusualDmActivity, hasUnusualAccountActivity, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId } = result);
        if (obj.sourceInviteCode !== sourceInviteCode) {
          obj.sourceInviteCode = sourceInviteCode;
        }
        if (obj.hasUnusualDmActivity !== hasUnusualDmActivity) {
          obj.hasUnusualDmActivity = hasUnusualDmActivity;
        }
        if (obj.hasUnusualAccountActivity !== hasUnusualAccountActivity) {
          obj.hasUnusualAccountActivity = hasUnusualAccountActivity;
        }
        if (obj.joinSourceType !== joinSourceType) {
          obj.joinSourceType = joinSourceType;
        }
        if (obj.joinSourceApplicationId !== joinSourceApplicationId) {
          obj.joinSourceApplicationId = joinSourceApplicationId;
        }
        if (obj.joinSourceChannelId !== joinSourceChannelId) {
          obj.joinSourceChannelId = joinSourceChannelId;
        }
        if (obj.inviterId !== inviterId) {
          obj.inviterId = inviterId;
        }
        if (obj.integrationType !== integrationType) {
          obj.integrationType = integrationType;
        }
        let flag = false;
        let flag2 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag2 = flag;
          while (keys[tmp] !== undefined) {
            let tmp13 = tmp5;
            let tmp14 = obj[tmp5];
            let tmp15 = outer1_1;
            let tmp16 = outer1_2;
            if (outer1_1(outer1_2[9])(tmp14, obj[tmp5])) {
              continue;
            } else {
              obj[tmp5] = tmp14;
              flag = true;
              continue;
            }
            continue;
          }
        }
        const _membersMap = self._membersMap;
        return _membersMap.set(obj.userId, obj) || flag2;
      }
    }
  };
  items[6] = {
    key: "removeMember",
    value(arg0) {
      const _membersMap = this._membersMap;
      return _membersMap.delete(arg0);
    }
  };
  items[7] = {
    key: "getMemberByUserId",
    value(arg0) {
      const _membersMap = this._membersMap;
      return _membersMap.get(arg0);
    }
  };
  items[8] = {
    key: "values",
    value(arg0) {
      const _membersMap = this._membersMap;
      return _membersMap.values(arg0, true);
    }
  };
  items[9] = {
    key: "count",
    value(arg0) {
      const _membersMap = this._membersMap;
      return _membersMap.size(arg0);
    }
  };
  items[10] = {
    key: "version",
    get() {
      return this._membersMap.version;
    }
  };
  return callback(GuildMemberSafetyMembers, items);
})();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx");

export const MemberSafetySecondaryIndex = obj;
export { hasUnusualDmActivity };
export const GuildMemberSafetyMembers = tmp2;
