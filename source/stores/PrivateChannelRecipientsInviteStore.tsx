// Module ID: 12730
// Function ID: 99092
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4044, 6901, 1352, 1348, 5590, 5042, 1917, 1838, 3767, 1849, 653, 12731, 5047, 1832, 3969, 3803, 7097, 566, 686, 2]

// Module 12730 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_5 from "ME";
import requestMembersDebounced from "requestMembersDebounced";
import isNullOrEmpty from "isNullOrEmpty";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { PrivateChannelRecord } from "_callSuper";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "_possibleConstructorReturn";

let Consents;
let closure_18;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function reset() {
  let c21 = "";
  let c22 = 0;
  let closure_23 = [];
  const set = new Set();
  let c20 = false;
  let c27 = null;
  let c25 = false;
}
function setLoading(arg0) {
  let flag = closure_25 !== arg0;
  if (flag) {
    closure_25 = arg0;
    flag = true;
  }
  return flag;
}
function setQuery(closure_0) {
  let closure_21 = closure_0;
  let c22 = 0;
  return performQuery();
}
function performQuery() {
  if (c20) {
    channel = channel.getChannel(c27);
    if (0 === _var.trim().length) {
      if (null != closure_19) {
        closure_19.clearQuery();
      }
      let closure_23 = (function getDefaultResults(channel) {
        let closure_0 = channel;
        const currentUser = outer1_17.getCurrentUser();
        const frictionlessGDMsEnabled = outer1_0(outer1_2[16]).getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
        const items = [...outer1_16.getFriendIDs()];
        if (null != currentUser) {
          let arr = items;
          if (currentUser.isStaff()) {
            const found = outer1_17.filter((isStaff) => {
              let isStaffResult = isStaff.isStaff();
              if (isStaffResult) {
                isStaffResult = isStaff.id !== currentUser.id;
              }
              return isStaffResult;
            }, false);
            const mapped = found.map((id) => id.id);
            const _Array = Array;
            const _Set = Set;
            const items1 = [];
            HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(items, 0));
            const set = new Set(items1);
            arr = Array.from(set);
          }
        }
        let set1 = null;
        if (frictionlessGDMsEnabled) {
          const _Set2 = Set;
          set1 = new Set(outer1_15.getGuildIds());
          const userAffinities = outer1_9.getUserAffinities();
          const mapped1 = userAffinities.map((otherUserId) => otherUserId.otherUserId);
          const found1 = mapped1.filter((arg0) => {
            let id;
            if (null != currentUser) {
              id = currentUser.id;
            }
            return arg0 !== id;
          });
          const found2 = found1.filter((arg0) => !outer2_16.isBlockedOrIgnored(arg0));
          const found3 = found2.filter((arg0) => !outer2_16.isFriend(arg0));
          const _Array2 = Array;
          const _Set3 = Set;
          const items2 = [];
          HermesBuiltin.arraySpread(found3, HermesBuiltin.arraySpread(arr, 0));
          const set2 = new Set(items2);
          arr = Array.from(set2);
        }
        const obj2 = outer1_0(outer1_2[16]);
        let found4 = arr;
        if (tmp34) {
          found4 = arr.filter((arg0) => {
            recipients = recipients.recipients;
            return !recipients.includes(arg0);
          });
        }
        const reduced = found4.reduce((arr) => {
          const user = outer2_17.getUser(arg1);
          if (null != user) {
            if (!user.isProvisional) {
              const obj = { user, comparator: outer2_1(outer2_2[19]).getName(user) };
              if (frictionlessGDMsEnabled) {
                if (null != set1) {
                  if (!outer2_16.isFriend(user.id)) {
                    arr = outer2_38(user.id, set1);
                    if (0 === arr.length) {
                      return arr;
                    }
                    if (arr.length > 0) {
                      obj.mutualGuilds = arr;
                    }
                  }
                }
              }
              arr = arr.push(obj);
              return arr;
            }
          }
          return arr;
        }, []);
        return reduced.sort(outer1_37);
      })(channel);
      setLoading(false);
      return true;
    } else {
      let currentUser = authStore.getCurrentUser();
      let isStaffResult;
      if (null != currentUser) {
        isStaffResult = currentUser.isStaff();
      }
      let obj = require(12731) /* getFrictionlessGDMsEnabled */;
      let frictionlessGDMsEnabled = obj.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      if (frictionlessGDMsEnabled) {
        const members = importDefault(5047).requestMembers(null, _var);
        let obj2 = importDefault(5047);
      }
      if (null != closure_19) {
        obj = { query: _var };
        let tmp18;
        if (!frictionlessGDMsEnabled) {
          obj = { friends: true, staff: tmp6, provisional: false };
          tmp18 = obj;
        }
        obj.filters = tmp18;
        obj.blacklist = tmp14;
        obj.boosters = getUserBoosterMap();
        closure_19.setQuery(obj);
      }
      return false;
    }
  } else {
    return false;
  }
}
function updateHasFriends() {
  if (c20) {
    const tmp3 = closure_16.getFriendCount() > 0;
    let c24 = tmp3;
    return tmp3 !== c24;
  } else {
    return false;
  }
}
function sortUserList(user, user2) {
  const obj = require(1832) /* isNullOrEmpty */;
  const name = importDefault(3969).getName(user.user);
  const obj2 = importDefault(3969);
  const stripDiacriticsResult = obj.stripDiacritics(name.toLocaleLowerCase());
  const obj5 = require(1832) /* isNullOrEmpty */;
  const name1 = importDefault(3969).getName(user2.user);
  return stripDiacriticsResult.localeCompare(obj5.stripDiacritics(name1.toLocaleLowerCase()));
}
function getMutualGuildsWithCurrentUser(id, set) {
  let iter3;
  const RestrictedGuildIds = require(3803) /* explicitContentFromProto */.RestrictedGuildIds;
  const setting = RestrictedGuildIds.getSetting();
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(set);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp3 = tmp2;
      if (!setting.includes(value)) {
        let tmp4 = member;
        tmp3 = tmp2;
        if (member.isMember(value, id)) {
          let tmp5 = store;
          let guild = store.getGuild(value);
          tmp3 = guild;
          if (null != guild) {
            let arr = items.push(guild);
            tmp3 = guild;
          }
        }
      }
      iter3 = tmp();
      tmp2 = tmp3;
      iter2 = iter3;
    } while (!iter3.done);
  }
  return items;
}
function parseUserResults(arg0) {
  let iter3;
  if (c20) {
    if ("" !== c21) {
      const currentUser = authStore.getCurrentUser();
      const frictionlessGDMsEnabled = require(12731) /* getFrictionlessGDMsEnabled */.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      let set = null;
      if (frictionlessGDMsEnabled) {
        const _Set = Set;
        set = new Set(store.getGuildIds());
      }
      const items = [];
      const tmp9 = _createForOfIteratorHelperLoose(tmp);
      const iter = tmp9();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let id = iter2.value.id;
          if (null == currentUser) {
            let tmp15 = authStore;
            let user = authStore.getUser(id);
            let tmp16 = user;
            let tmp13 = tmp10;
            let tmp14 = tmp11;
            if (null != user) {
              let tmp33 = user;
              tmp13 = tmp10;
              tmp14 = tmp11;
              if (!user.isProvisional) {
                if (!user.bot) {
                  let obj = { user, comparator: tmp12 };
                  let tmp19 = tmp11;
                  if (frictionlessGDMsEnabled) {
                    tmp19 = tmp11;
                    if (null != set) {
                      let tmp35 = closure_16;
                      tmp19 = tmp11;
                      if (!closure_16.isFriend(user.id)) {
                        let tmp20 = getMutualGuildsWithCurrentUser;
                        let arr2 = getMutualGuildsWithCurrentUser(user.id, set);
                        if (0 !== arr2.length) {
                          tmp19 = arr2;
                          if (arr2.length > 0) {
                            obj.mutualGuilds = arr2;
                            tmp19 = arr2;
                          }
                        } else {
                          let tmp21 = user;
                          tmp13 = obj;
                          tmp14 = arr2;
                          if (user.isStaff()) {
                            let tmp22 = user;
                            tmp13 = obj;
                            tmp14 = arr2;
                            if (null != currentUser) {
                              let tmp23 = user;
                              tmp13 = obj;
                              tmp14 = arr2;
                            }
                          }
                        }
                      }
                    }
                  }
                  let arr = items.push(obj);
                  tmp14 = tmp19;
                  let tmp25 = user;
                  tmp13 = obj;
                } else {
                  let tmp17 = user;
                  tmp13 = tmp10;
                  tmp14 = tmp11;
                  if (user.isStaff()) {
                    let tmp18 = user;
                    tmp13 = tmp10;
                    tmp14 = tmp11;
                    if (null != currentUser) {
                      let tmp34 = user;
                      tmp13 = tmp10;
                      tmp14 = tmp11;
                    }
                  }
                }
              }
            }
          } else {
            tmp13 = tmp10;
            tmp14 = tmp11;
          }
          iter3 = tmp9();
          tmp10 = tmp13;
          tmp11 = tmp14;
          iter2 = iter3;
        } while (!iter3.done);
      }
      tmp4.emitChange();
      const obj4 = require(12731) /* getFrictionlessGDMsEnabled */;
    }
  }
}
function getUserBoosterMap() {
  frequentlyWithoutFetchingLatest = frequentlyWithoutFetchingLatest.getFrequentlyWithoutFetchingLatest();
  const found = frequentlyWithoutFetchingLatest.filter((isDM) => isDM instanceof outer1_10 && isDM.isDM());
  const items = [...found.map((id) => outer1_13.getScoreWithoutFetchingLatest(id.id))];
  let closure_0 = Math.max.apply(items);
  const obj = {};
  const item = found.forEach((id) => {
    const scoreWithoutFetchingLatest = outer1_13.getScoreWithoutFetchingLatest(id.id);
    const recipientId = id.getRecipientId();
    let num = 0;
    if (outer1_16.isFriend(recipientId)) {
      num = 0.2;
    }
    let num2 = 0;
    if (null != outer1_11.getDMFromUserId(recipientId)) {
      num2 = 0.1;
    }
    obj[recipientId] = 1 + scoreWithoutFetchingLatest / closure_0 + num + num2;
  });
  return obj;
}
function createSearchContext() {
  if (null != c19) {
    c19.destroy();
    c19 = null;
  }
  return importDefault(7097).getUserSearchContext(parseUserResults, 1000);
}
function handleModalActionSheetOpen(key) {
  if (key.key !== closure_18) {
    return false;
  } else {
    let c20 = true;
    updateHasFriends();
    let closure_19 = createSearchContext();
    let c27 = null;
    setQuery("");
  }
}
function handleActionSheetDismiss(key) {
  if (key.key !== closure_18) {
    return false;
  } else {
    handleClose();
  }
}
function handleClose() {
  if (null != c19) {
    c19.destroy();
    c19 = null;
  }
  reset();
}
function performQueryOnAffinityChange() {
  let tmp = !c20;
  if (!tmp) {
    tmp = !require(12731) /* getFrictionlessGDMsEnabled */.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
    const obj = require(12731) /* getFrictionlessGDMsEnabled */;
  }
  let tmp4 = !tmp;
  if (!tmp) {
    tmp4 = performQuery();
  }
  return tmp4;
}
({ NEW_GROUP_DM_POPOUT_ID: closure_18, Consents } = ME);
let c20 = false;
let c21 = "";
let c22 = 0;
let closure_23 = [];
let c24 = false;
let c25 = false;
let set = new Set();
let c27 = null;
let tmp4 = ((Store) => {
  class PrivateChannelRecipientsInviteStoreClass {
    constructor() {
      self = this;
      tmp = outer1_3(this, PrivateChannelRecipientsInviteStoreClass);
      obj = outer1_6(PrivateChannelRecipientsInviteStoreClass);
      tmp2 = outer1_5;
      if (outer1_29()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PrivateChannelRecipientsInviteStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11, outer1_12, outer1_8, outer1_13, outer1_14, outer1_15, outer1_16, outer1_9, outer1_17);
      const items = [outer1_17, outer1_11];
      this.syncWith(items, outer1_35);
      const items1 = [outer1_9];
      this.syncWith(items1, outer1_43);
      const items2 = [outer1_16];
      this.syncWith(items2, outer1_36);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getResults",
    value() {
      return outer1_23;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasFriends",
    value() {
      return outer1_24;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSelectedUsers",
    value() {
      return outer1_26;
    }
  };
  items[4] = {
    key: "getQuery",
    value() {
      return outer1_21;
    }
  };
  items[5] = {
    key: "getState",
    value() {
      return { query: outer1_21, selectedRow: outer1_22, selectedUsers: outer1_26, results: outer1_23, hasFriends: outer1_24, isLoading: outer1_25 };
    }
  };
  return callback(PrivateChannelRecipientsInviteStoreClass, items);
})(require("initialize").Store);
tmp4.displayName = "PrivateChannelRecipientsInviteStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    reset();
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch() {
    let tmp = !c20;
    if (!tmp) {
      tmp = !require(12731) /* getFrictionlessGDMsEnabled */.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      const obj = require(12731) /* getFrictionlessGDMsEnabled */;
    }
    let tmp4 = !tmp;
    if (!tmp) {
      tmp4 = setLoading(false);
    }
    return tmp4;
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(query) {
    let tmp = !c20;
    if (!tmp) {
      tmp = !require(12731) /* getFrictionlessGDMsEnabled */.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      const obj = require(12731) /* getFrictionlessGDMsEnabled */;
    }
    let tmp4 = !tmp;
    if (!tmp) {
      let tmp6 = query.query === _var.toLocaleLowerCase();
      if (tmp6) {
        tmp6 = setLoading(true);
      }
      tmp4 = tmp6;
    }
    return tmp4;
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    if (null != guildId.guildId) {
      return false;
    } else {
      reset();
      let c27 = tmp;
      return performQuery();
    }
  },
  MODAL_PUSH: handleModalActionSheetOpen,
  SHOW_ACTION_SHEET: handleModalActionSheetOpen,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function handleInviteOpen(channelId) {
    let c20 = true;
    updateHasFriends();
    let closure_19 = createSearchContext();
    channelId = channelId.channelId;
    setQuery("");
  },
  MODAL_POP: handleActionSheetDismiss,
  HIDE_ACTION_SHEET: handleActionSheetDismiss,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: handleClose,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function handleQuery(channelId) {
    channelId = channelId.channelId;
    setQuery(channelId.query);
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function handleSelect(row) {
    row = row.row;
  },
  PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function handleAddUser(userId) {
    set.add(userId.userId);
    set = new Set(set);
  },
  PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function handleRemoveUser(userId) {
    set.delete(userId.userId);
    set = new Set(set);
  }
});
let closure_28 = tmp4;
let result = set.fileFinishedImporting("stores/PrivateChannelRecipientsInviteStore.tsx");

export default tmp4;
