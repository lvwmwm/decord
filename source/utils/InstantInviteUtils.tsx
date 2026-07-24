// Module ID: 8528
// Function ID: 67916
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1347, 1348, 1917, 4142, 3767, 1849, 5601, 653, 6978, 4974, 8529, 1212, 2]
// Exports: generateRowsForQuery, getMostRecentDMedUser, getUsersAlreadyJoined, groupInviteSuggestions, maxAgeString, urgentShareMessageString

// Module 8528 (_createForOfIteratorHelperLoose)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";
import { InviteTargetTypes } from "InviteSendStates";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function isGuildMember(omitGuildId, id) {
  let isMemberResult = null != omitGuildId;
  if (isMemberResult) {
    isMemberResult = member.isMember(omitGuildId, id);
  }
  return isMemberResult;
}
function addDmUsers(arg0) {
  let counts;
  let includeGroupDms;
  let limit;
  let maxRowsWithoutQuery;
  let omitGuildId;
  let omitUserIds;
  let rows;
  let shownUserIds;
  ({ omitUserIds, maxRowsWithoutQuery, shownUserIds, rows, counts, limit } = arg0);
  ({ omitGuildId, includeGroupDms } = arg0);
  const tmp = _createForOfIteratorHelperLoose(store2.getPrivateChannelIds());
  const iter = tmp();
  let iter2 = iter;
  let num = 0;
  if (!iter.done) {
    while (true) {
      if (null != maxRowsWithoutQuery) {
        if (maxRowsWithoutQuery > 0) {
          if (rows.length >= maxRowsWithoutQuery) {
            break;
          }
        }
        break;
      }
      if (null == limit) {
        let tmp4 = store;
        let channel = store.getChannel(iter2.value);
        let sum = num;
        let tmp6 = tmp2;
        let tmp7 = tmp3;
        if (null != channel) {
          sum = num;
          tmp6 = tmp2;
          tmp7 = tmp3;
          if (channel.isPrivate()) {
            if (includeGroupDms) {
              let tmp8 = ChannelTypes;
              if (channel.type === ChannelTypes.GROUP_DM) {
                let obj = {};
                let tmp16 = obj;
                obj.type = obj.GROUP_DM;
                obj.item = channel;
                obj.isSuggested = false;
                let arr = rows.push(obj);
                counts.numGroupDms = counts.numGroupDms + 1;
                sum = num + 1;
                tmp6 = tmp2;
                tmp7 = tmp3;
              }
            }
            let tmp9 = closure_6;
            sum = num;
            tmp6 = tmp2;
            tmp7 = tmp3;
            if (null != closure_6.lastMessageId(channel.id)) {
              let recipientId = channel.getRecipientId();
              sum = num;
              tmp6 = recipientId;
              tmp7 = tmp3;
              if (null != recipientId) {
                sum = num;
                tmp6 = recipientId;
                tmp7 = tmp3;
                if (!omitUserIds.has(recipientId)) {
                  sum = num;
                  tmp6 = recipientId;
                  tmp7 = tmp3;
                  if (!shownUserIds.has(recipientId)) {
                    let tmp10 = authStore;
                    let user = authStore.getUser(recipientId);
                    sum = num;
                    tmp6 = recipientId;
                    tmp7 = user;
                    if (null != user) {
                      sum = num;
                      tmp6 = recipientId;
                      tmp7 = user;
                      if (!user.bot) {
                        let tmp12 = isGuildMember;
                        sum = num;
                        tmp6 = recipientId;
                        tmp7 = user;
                        if (!isGuildMember(omitGuildId, user.id)) {
                          let addResult = shownUserIds.add(user.id);
                          obj = {};
                          let tmp14 = obj;
                          obj.type = obj.DM;
                          obj.item = user;
                          obj.isSuggested = false;
                          arr = rows.push(obj);
                          counts.numDms = counts.numDms + 1;
                          sum = num + 1;
                          tmp6 = recipientId;
                          tmp7 = user;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let iter3 = tmp();
        num = sum;
        tmp2 = tmp6;
        tmp3 = tmp7;
        iter2 = iter3;
        if (iter3.done) {
          break;
        }
      } else if (num >= limit) {
        break;
      }
      break;
    }
  }
}
let obj = { GROUP_DM: "GROUP_DM", DM: "DM", FRIEND: "FRIEND", CHANNEL: "CHANNEL" };
let closure_13 = { [arg1(8529).INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: "minutes" }, [arg1(8529).INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: "hours" }, [arg1(8529).INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: "hours" }, [arg1(8529).INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: "hours" }, [arg1(8529).INVITE_OPTIONS_1_DAY.value]: { value: 1, type: "days" }, [arg1(8529).INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: "days" }, [arg1(8529).INVITE_OPTIONS_14_DAYS.value]: { value: 14, type: "days" }, [arg1(8529).INVITE_OPTIONS_30_DAYS.value]: { value: 30, type: "days" }, [arg1(8529).INVITE_OPTIONS_60_DAYS.value]: { value: 60, type: "days" }, [arg1(8529).INVITE_OPTIONS_FOREVER.value]: { value: 0, type: "never" } };
let items = [require("makeOption").INVITE_OPTIONS_14_DAYS, require("makeOption").INVITE_OPTIONS_30_DAYS, require("makeOption").INVITE_OPTIONS_60_DAYS];
obj = {
  getMaxAgeOptionByValue(maxAge) {
    let closure_0 = maxAge;
    items = [...items];
    return items.find((value) => value.value === closure_0) || null;
  },
  getMaxAgeOptions(arg0) {
    const _require = arg0;
    const MAX_AGE_OPTIONS = _require(8529).MAX_AGE_OPTIONS;
    return MAX_AGE_OPTIONS.filter((value) => {
      let tmp = !outer1_14.includes(value);
      if (!tmp) {
        let hasItem;
        if (null != obj) {
          const includeExperimentalValues = obj.includeExperimentalValues;
          if (null != includeExperimentalValues) {
            if (null != includeExperimentalValues.includes) {
              hasItem = includeExperimentalValues.includes(value.value);
            }
          }
        }
        tmp = hasItem;
      }
      return tmp;
    });
  },
  getMaxUsesOptions: require("makeOption").MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: require("makeOption").INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: require("makeOption").INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: require("makeOption").INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_14_DAYS: require("makeOption").INVITE_OPTIONS_14_DAYS,
  INVITE_OPTIONS_30_DAYS: require("makeOption").INVITE_OPTIONS_30_DAYS,
  INVITE_OPTIONS_60_DAYS: require("makeOption").INVITE_OPTIONS_60_DAYS,
  INVITE_OPTIONS_12_HOURS: require("makeOption").INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: require("makeOption").INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_8_HOURS: require("makeOption").INVITE_OPTIONS_8_HOURS,
  INVITE_OPTIONS_1_HOUR: require("makeOption").INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: require("makeOption").INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: require("makeOption").INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: require("makeOption").INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: require("makeOption").INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: require("makeOption").INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: require("makeOption").INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: require("makeOption").INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: require("makeOption").INVITE_OPTIONS_100_TIMES
};
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/InstantInviteUtils.tsx");

export default obj;
export const RowTypes = obj;
export const generateRowsForQuery = function generateRowsForQuery(arg0) {
  let counts;
  let counts2;
  let counts3;
  let inviteTargetType;
  let maxRowsWithoutQuery;
  let maxRowsWithoutQuery2;
  let maxRowsWithoutQuery3;
  let maxRowsWithoutQuery4;
  let omitGuildId;
  let omitUserIds;
  let omitUserIds2;
  let omitUserIds3;
  let query;
  let rows;
  let rows2;
  let rows3;
  let shownUserIds;
  let shownUserIds2;
  let suggestedChannelIds;
  let suggestedChannelIds2;
  let suggestedUserIds;
  let suggestedUserIds2;
  ({ query, inviteTargetType, omitUserIds, suggestedUserIds } = arg0);
  ({ suggestedChannelIds, maxRowsWithoutQuery, omitGuildId } = arg0);
  const set = new Set();
  rows = [];
  counts = { numFriends: 0, numDms: 0, numGroupDms: 0, numGuildMembers: 0, numChannels: 0 };
  if ("" === query) {
    let obj = { omitUserIds, maxRowsWithoutQuery, omitGuildId, shownUserIds: set, rows, counts };
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      obj = {};
      const merged = Object.assign(obj);
      obj["includeGroupDms"] = false;
      obj["limit"] = 1;
      addDmUsers(obj);
      const obj1 = {};
      const merged1 = Object.assign(obj);
      obj1["suggestedChannelIds"] = suggestedChannelIds;
      ({ suggestedChannelIds: suggestedChannelIds2, maxRowsWithoutQuery: maxRowsWithoutQuery4, rows: rows3, counts: counts3 } = obj1);
      if (null != suggestedChannelIds2) {
        const tmp66 = _createForOfIteratorHelperLoose(suggestedChannelIds2);
        let iter2 = tmp66();
        if (!iter2.done) {
          while (true) {
            if (null != maxRowsWithoutQuery4) {
              if (maxRowsWithoutQuery4 > 0) {
                if (rows3.length >= maxRowsWithoutQuery4) {
                  break;
                }
              }
              break;
            }
            let tmp20 = store;
            let channel = store.getChannel(iter2.value);
            if (null != channel) {
              let obj2 = {};
              let tmp22 = obj;
              obj2.type = obj.CHANNEL;
              obj2.item = channel;
              obj2.isSuggested = true;
              let arr = rows3.push(obj2);
              counts3.numChannels = counts3.numChannels + 1;
            }
            let iter = tmp66();
            iter2 = iter;
            if (iter.done) {
              break;
            }
          }
        }
      }
    }
    const obj3 = {};
    const merged2 = Object.assign(obj);
    obj3["suggestedUserIds"] = suggestedUserIds;
    ({ omitUserIds: omitUserIds2, suggestedUserIds: suggestedUserIds2, maxRowsWithoutQuery: maxRowsWithoutQuery2, shownUserIds, rows, counts } = obj3);
    if (null != suggestedUserIds2) {
      const tmp68 = _createForOfIteratorHelperLoose(suggestedUserIds2);
      const iter8 = tmp68();
      let iter4 = iter8;
      if (!iter8.done) {
        while (true) {
          let value = iter4.value;
          if (null != maxRowsWithoutQuery2) {
            if (maxRowsWithoutQuery2 > 0) {
              if (rows.length >= maxRowsWithoutQuery2) {
                break;
              }
            }
            break;
          }
          let tmp29 = tmp37;
          if (!omitUserIds2.has(value)) {
            tmp29 = tmp37;
            if (!shownUserIds.has(value)) {
              let tmp30 = authStore;
              let user = authStore.getUser(value);
              let tmp32 = null == user;
              if (!tmp32) {
                let tmp33 = isGuildMember;
                tmp32 = isGuildMember(tmp27, user.id);
              }
              tmp29 = user;
              if (!tmp32) {
                let addResult = shownUserIds.add(user.id);
                let obj4 = {};
                let tmp35 = obj;
                obj4.type = obj.FRIEND;
                obj4.item = user;
                obj4.isSuggested = true;
                arr = rows.push(obj4);
                counts.numFriends = counts.numFriends + 1;
                tmp29 = user;
              }
            }
          }
          let iter3 = tmp68();
          tmp37 = tmp29;
          iter4 = iter3;
          if (iter3.done) {
            break;
          }
        }
      }
    }
    const obj5 = {};
    const merged3 = Object.assign(obj);
    obj5["includeGroupDms"] = true;
    addDmUsers(obj5);
    ({ omitUserIds: omitUserIds3, maxRowsWithoutQuery: maxRowsWithoutQuery3, shownUserIds: shownUserIds2, rows: rows2, counts: counts2 } = obj);
    const tmp46 = _createForOfIteratorHelperLoose(friendIDs.getFriendIDs());
    const iter5 = tmp46();
    let iter6 = iter5;
    if (!iter5.done) {
      while (true) {
        value = iter6.value;
        if (null != maxRowsWithoutQuery3) {
          if (maxRowsWithoutQuery3 > 0) {
            if (rows2.length >= maxRowsWithoutQuery3) {
              break;
            }
          }
          break;
        }
        let tmp48 = tmp47;
        if (!omitUserIds3.has(value)) {
          tmp48 = tmp47;
          if (!shownUserIds2.has(value)) {
            let tmp49 = authStore;
            let user1 = authStore.getUser(value);
            let tmp51 = null == user1;
            if (!tmp51) {
              let tmp52 = isGuildMember;
              tmp51 = isGuildMember(tmp43, user1.id);
            }
            tmp48 = user1;
            if (!tmp51) {
              let obj6 = {};
              let tmp53 = obj;
              obj6.type = obj.FRIEND;
              obj6.item = user1;
              obj6.isSuggested = false;
              let arr1 = rows2.push(obj6);
              counts2.numFriends = counts2.numFriends + 1;
              tmp48 = user1;
            }
          }
        }
        let iter7 = tmp46();
        tmp47 = tmp48;
        iter6 = iter7;
        if (iter7.done) {
          break;
        }
      }
    }
  } else {
    const obj7 = { query, rows, counts };
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      const obj8 = {};
      const merged4 = Object.assign(obj7);
      obj8["inviteTargetType"] = inviteTargetType;
      (function addQueriedChannels(inviteTargetType) {
        let closure_0;
        let closure_1;
        ({ rows: closure_0, counts: closure_1 } = inviteTargetType);
        if (inviteTargetType.inviteTargetType === outer1_11.EMBEDDED_APPLICATION) {
          let obj = outer1_1(outer1_2[9]);
          obj = { query: tmp, limit: 3, guildId: undefined };
          const item = obj.queryChannels(obj).forEach((item) => {
            numChannels.numChannels = numChannels.numChannels + 1;
          });
          const queryChannelsResult = obj.queryChannels(obj);
        }
      })(obj8);
    }
    const obj9 = {};
    const merged5 = Object.assign(obj7);
    obj9["omitUserIds"] = omitUserIds;
    obj9["shownUserIds"] = set;
    obj9["suggestedUserIds"] = suggestedUserIds;
    (function addQueriedSuggestedUsers(suggestedUserIds) {
      let closure_0;
      let closure_1;
      let iter;
      let omitUserIds;
      let shownUserIds;
      ({ rows: closure_0, counts: closure_1, omitUserIds, shownUserIds } = suggestedUserIds);
      suggestedUserIds = suggestedUserIds.suggestedUserIds;
      if (null != suggestedUserIds) {
        const items = [];
        const tmp11 = outer1_15(suggestedUserIds);
        const iter3 = tmp11();
        let iter2 = iter3;
        if (!iter3.done) {
          do {
            let value = iter2.value;
            let tmp2 = tmp6;
            if (!omitUserIds.has(value)) {
              tmp2 = tmp6;
              if (!shownUserIds.has(value)) {
                let tmp3 = outer1_8;
                let user = outer1_8.getUser(value);
                tmp2 = user;
                if (null != user) {
                  let arr = items.push(user);
                  tmp2 = user;
                }
              }
            }
            iter = tmp11();
            tmp6 = tmp2;
            iter2 = iter;
          } while (!iter.done);
        }
        let obj = outer1_1(outer1_2[9]);
        obj = { query: tmp, members: items, limit: 10 };
        const item = obj.queryMemberList(obj).forEach((record) => {
          record = record.record;
          shownUserIds.add(record.id);
          numFriends.numFriends = numFriends.numFriends + 1;
        });
        const queryMemberListResult = obj.queryMemberList(obj);
      }
    })(obj9);
    const obj10 = {};
    const merged6 = Object.assign(obj7);
    obj10["omitUserIds"] = omitUserIds;
    obj10["shownUserIds"] = set;
    (function addQueriedDmUsers(query) {
      let closure_0;
      let closure_1;
      let closure_2;
      let _createForOfIteratorHelperLoose;
      ({ omitUserIds: closure_0, shownUserIds: closure_1, rows: closure_2, counts: _createForOfIteratorHelperLoose } = query);
      let obj = outer1_1(outer1_2[9]);
      const item = outer1_1(outer1_2[9]).queryDMUsers({ query: query.query, limit: 50 }).forEach((record) => {
        record = record.record;
        if (!set.has(record.id)) {
          if (!set2.has(record.id)) {
            const dMFromUserId = outer2_4.getDMFromUserId(record.id);
            let tmp5 = null != dMFromUserId;
            if (tmp5) {
              tmp5 = null != outer2_6.lastMessageId(dMFromUserId);
            }
            if (tmp5) {
              set2.add(record.id);
              const obj = { type: outer2_12.DM, item: record, isSuggested: false, score: record.score };
              arr = arr.push(obj);
              numDms.numDms = numDms.numDms + 1;
            }
          }
        }
      });
    })(obj10);
    (function addQueriedGroupDms(query) {
      let closure_0;
      let closure_1;
      ({ rows: closure_0, counts: closure_1 } = query);
      let obj = outer1_1(outer1_2[9]);
      obj = { query: query.query, limit: 50, fuzzy: false };
      const item = obj.queryGroupDMs(obj).forEach((item) => {
        numGroupDms.numGroupDms = numGroupDms.numGroupDms + 1;
      });
    })(obj7);
    const obj11 = {};
    const merged7 = Object.assign(obj7);
    obj11["omitUserIds"] = omitUserIds;
    obj11["shownUserIds"] = set;
    (function addQueriedFriends(query) {
      let closure_0;
      let closure_1;
      let closure_2;
      let _createForOfIteratorHelperLoose;
      ({ rows: closure_0, counts: closure_1, omitUserIds: closure_2, shownUserIds: _createForOfIteratorHelperLoose } = query);
      let obj = outer1_1(outer1_2[9]);
      obj = { query: query.query, limit: 500, _fuzzy: false };
      const item = obj.queryFriends(obj).forEach((record) => {
        record = record.record;
        let hasItem = set.has(record.id);
        if (!hasItem) {
          hasItem = set2.has(record.id);
        }
        if (!hasItem) {
          set2.add(record.id);
          const obj = { type: outer2_12.FRIEND, item: record, isSuggested: false, score: record.score };
          arr = arr.push(obj);
          numFriends.numFriends = numFriends.numFriends + 1;
        }
      });
    })(obj11);
  }
  return { rows, counts };
};
export const groupInviteSuggestions = function groupInviteSuggestions(arg0, omitGuildId) {
  const items = [];
  const items1 = [];
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    while (true) {
      let value = iter.value;
      let type = value.type;
      let tmp2 = obj;
      if (obj.FRIEND !== type) {
        let tmp3 = obj;
        if (obj.DM !== type) {
          let tmp4 = obj;
          if (obj.CHANNEL === type) {
            let arr = items1.push(value);
          } else {
            let tmp5 = obj;
          }
        }
        let iter2 = tmp();
        iter = iter2;
        if (iter2.done) {
          break;
        }
      }
      let tmp7 = isGuildMember;
      if (isGuildMember(omitGuildId, value.item.id)) {
        arr = items.push(value);
      } else {
        let arr1 = items1.push(value);
      }
    }
  }
  const items2 = [items, items1];
  return items2;
};
export const getMostRecentDMedUser = function getMostRecentDMedUser(set, id) {
  let user;
  const tmp = _createForOfIteratorHelperLoose(store2.getPrivateChannelIds());
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      let tmp4 = store;
      let channel = store.getChannel(iter2.value);
      let tmp5 = tmp2;
      let tmp6 = tmp3;
      if (null != channel) {
        tmp5 = tmp2;
        tmp6 = tmp3;
        if (channel.isDM()) {
          let tmp7 = closure_6;
          tmp5 = tmp2;
          tmp6 = tmp3;
          if (null != closure_6.lastMessageId(channel.id)) {
            let recipientId = channel.getRecipientId();
            tmp6 = tmp3;
            tmp5 = recipientId;
            if (null != recipientId) {
              tmp5 = recipientId;
              tmp6 = tmp3;
              if (!set.has(recipientId)) {
                let tmp9 = authStore;
                user = authStore.getUser(recipientId);
                tmp5 = recipientId;
                tmp6 = user;
                if (null != user) {
                  tmp5 = recipientId;
                  tmp6 = user;
                  if (!user.bot) {
                    let tmp11 = isGuildMember;
                    tmp5 = recipientId;
                    tmp6 = user;
                    if (!isGuildMember(id, user.id)) {
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
      let iter3 = tmp();
      tmp2 = tmp5;
      tmp3 = tmp6;
      iter2 = iter3;
    }
    return user;
  }
  return null;
};
export const getUsersAlreadyJoined = function getUsersAlreadyJoined(channel) {
  channel = channel.channel;
  if (channel.inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != channel) {
      const tmp5 = _createForOfIteratorHelperLoose(embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(channel.id));
      const iter = tmp5();
      let iter2 = iter;
      if (!iter.done) {
        const value = iter2.value;
        while (value.applicationId !== tmp) {
          let iter3 = tmp5();
          iter2 = iter3;
        }
        const _Set = Set;
        const set = new Set(value.userIds);
        return set;
      }
    }
  }
  return new Set();
};
export const maxAgeString = function maxAgeString(maxAge, maxUses) {
  const parsed = parseInt(maxUses, 10);
  const value = dependencyMap[maxAge].value;
  const type = dependencyMap[maxAge].type;
  if ("minutes" === type) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    if (tmp2) {
      let stringResult = intl4.string(tmp12(1212).t["/WbTXD"]);
    } else {
      let obj = { numUses: parsed };
      stringResult = intl4.formatToPlainString(tmp12(1212).t.eDRWJK, obj);
    }
    return stringResult;
  } else if ("hours" === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = require(1212) /* getSystemLocale */.t;
    if (tmp2) {
      obj = { numHours: value };
      let formatToPlainString2Result = formatToPlainString2(t2.ZVdJMy, obj);
    } else {
      const obj1 = { numHours: value, numUses: parsed };
      formatToPlainString2Result = formatToPlainString2(t2.NgZgAB, obj1);
    }
    return formatToPlainString2Result;
  } else if ("days" === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = require(1212) /* getSystemLocale */.t;
    if (tmp2) {
      const obj2 = { numDays: value };
      let formatToPlainStringResult = formatToPlainString(t.T96qss, obj2);
    } else {
      const obj3 = { numDays: value, numUses: parsed };
      formatToPlainStringResult = formatToPlainString(t.TfuB9B, obj3);
    }
    return formatToPlainStringResult;
  } else if ("never" === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    if (tmp2) {
      let stringResult1 = intl.string(tmp3(1212).t.QrHBnC);
    } else {
      obj = { numUses: parsed };
      stringResult1 = intl.formatToPlainString(tmp3(1212).t.yJnTxI, obj);
    }
    return stringResult1;
  } else {
    return "";
  }
};
export const urgentShareMessageString = function urgentShareMessageString(arg0, link) {
  if (null == arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    let obj = { link };
    return intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.RHbY6K, obj);
  } else {
    const value = dependencyMap[arg0].value;
    const type = dependencyMap[arg0].type;
    if ("minutes" === type) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj = { numMinutes: value, link };
      return intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.N3VHkw, obj);
    } else if ("hours" === type) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const obj1 = { numHours: value, link };
      return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["3d9BlG"], obj1);
    } else if ("days" === type) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj2 = { numDays: value, link };
      return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.gLIlkb, obj2);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { link };
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.RHbY6K, obj);
    }
  }
};
export const EXPERIMENTAL_MAX_AGE_OPTIONS = items;
