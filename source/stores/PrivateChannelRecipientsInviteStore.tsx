// Module ID: 12565
// Function ID: 96615
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12565 (_isNativeReflectConstruct)
let Consents;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let closure_21 = "";
  let closure_22 = 0;
  let closure_23 = [];
  const set = new Set();
  let closure_20 = false;
  let closure_27 = null;
  let closure_25 = false;
}
function setLoading(arg0) {
  let flag = closure_25 !== arg0;
  if (flag) {
    closure_25 = arg0;
    flag = true;
  }
  return flag;
}
function setQuery(query) {
  let closure_21 = query;
  let closure_22 = 0;
  return performQuery();
}
function performQuery() {
  if (closure_20) {
    const channel = channel.getChannel(closure_27);
    if (0 === _var.trim().length) {
      if (null != closure_19) {
        closure_19.clearQuery();
      }
      let closure_23 = function getDefaultResults(channel) {
        const currentUser = closure_17.getCurrentUser();
        const frictionlessGDMsEnabled = channel(frictionlessGDMsEnabled[16]).getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
        const items = [...closure_16.getFriendIDs()];
        if (null != currentUser) {
          let arr = items;
          if (currentUser.isStaff()) {
            const found = closure_17.filter((isStaff) => {
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
          set1 = new Set(guildIds.getGuildIds());
          const userAffinities = userAffinities.getUserAffinities();
          const mapped1 = userAffinities.map((otherUserId) => otherUserId.otherUserId);
          const found1 = mapped1.filter((arg0) => {
            let id;
            if (null != currentUser) {
              id = currentUser.id;
            }
            return arg0 !== id;
          });
          const found2 = found1.filter((arg0) => !closure_16.isBlockedOrIgnored(arg0));
          const found3 = found2.filter((arg0) => !closure_16.isFriend(arg0));
          const _Array2 = Array;
          const _Set3 = Set;
          const items2 = [];
          HermesBuiltin.arraySpread(found3, HermesBuiltin.arraySpread(arr, 0));
          const set2 = new Set(items2);
          arr = Array.from(set2);
        }
        const obj2 = channel(frictionlessGDMsEnabled[16]);
        let found4 = arr;
        if (tmp34) {
          found4 = arr.filter((arg0) => {
            const recipients = arg0.recipients;
            return !recipients.includes(arg0);
          });
        }
        const reduced = found4.reduce((arr) => {
          const user = user.getUser(arg1);
          if (null != user) {
            if (!user.isProvisional) {
              const obj = { user, comparator: currentUser(frictionlessGDMsEnabled[19]).getName(user) };
              if (frictionlessGDMsEnabled) {
                if (null != set1) {
                  if (!closure_16.isFriend(user.id)) {
                    arr = callback(user.id, set1);
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
        return reduced.sort(closure_37);
      }(channel);
      setLoading(false);
      return true;
    } else {
      const currentUser = authStore.getCurrentUser();
      let isStaffResult;
      if (null != currentUser) {
        isStaffResult = currentUser.isStaff();
      }
      let obj = arg1(dependencyMap[16]);
      const frictionlessGDMsEnabled = obj.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      if (frictionlessGDMsEnabled) {
        const members = importDefault(dependencyMap[17]).requestMembers(null, _var);
        const obj2 = importDefault(dependencyMap[17]);
      }
      if (null != closure_19) {
        obj = { query: _var };
        let tmp18;
        if (!frictionlessGDMsEnabled) {
          obj = { staff: tmp6 };
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
  if (closure_20) {
    const tmp3 = friendCount.getFriendCount() > 0;
    let closure_24 = tmp3;
    return tmp3 !== closure_24;
  } else {
    return false;
  }
}
function sortUserList(user, user2) {
  const obj = user2(dependencyMap[18]);
  const name = importDefault(dependencyMap[19]).getName(user.user);
  const obj2 = importDefault(dependencyMap[19]);
  const stripDiacriticsResult = obj.stripDiacritics(name.toLocaleLowerCase());
  const obj5 = user2(dependencyMap[18]);
  const name1 = importDefault(dependencyMap[19]).getName(user2.user);
  return stripDiacriticsResult.localeCompare(obj5.stripDiacritics(name1.toLocaleLowerCase()));
}
function getMutualGuildsWithCurrentUser(arg0, arg1) {
  let iter3;
  const RestrictedGuildIds = arg1(dependencyMap[20]).RestrictedGuildIds;
  const setting = RestrictedGuildIds.getSetting();
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(arg1);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp3 = tmp2;
      if (!setting.includes(value)) {
        let tmp4 = closure_14;
        tmp3 = tmp2;
        if (closure_14.isMember(value, arg0)) {
          let tmp5 = closure_15;
          let guild = closure_15.getGuild(value);
          tmp3 = guild;
          if (null != guild) {
            let arr = items.push(guild);
            tmp3 = guild;
          }
        }
      }
      iter3 = tmp();
      let tmp2 = tmp3;
      iter2 = iter3;
    } while (!iter3.done);
  }
  return items;
}
function parseUserResults(arg0) {
  let iter3;
  if (closure_20) {
    if ("" !== closure_21) {
      const currentUser = authStore.getCurrentUser();
      const frictionlessGDMsEnabled = arg1(dependencyMap[16]).getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      let set = null;
      if (frictionlessGDMsEnabled) {
        const _Set = Set;
        set = new Set(guildIds.getGuildIds());
      }
      const items = [];
      const tmp9 = _createForOfIteratorHelperLoose(tmp);
      const iter = tmp9();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let id = iter2.value.id;
          if (null == currentUser) {
            let tmp15 = closure_17;
            let user = closure_17.getUser(id);
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
                        let tmp20 = closure_38;
                        let arr2 = closure_38(user.id, set);
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
          let tmp10 = tmp13;
          let tmp11 = tmp14;
          iter2 = iter3;
        } while (!iter3.done);
      }
      let closure_23 = items;
      tmp4.emitChange();
      const obj4 = arg1(dependencyMap[16]);
    }
  }
}
function getUserBoosterMap() {
  const frequentlyWithoutFetchingLatest = frequentlyWithoutFetchingLatest.getFrequentlyWithoutFetchingLatest();
  const found = frequentlyWithoutFetchingLatest.filter((isDM) => isDM instanceof closure_10 && isDM.isDM());
  const items = [...found.map((id) => store.getScoreWithoutFetchingLatest(id.id))];
  let closure_0 = Math.max.apply(items);
  const obj = {};
  const importDefault = obj;
  const item = found.forEach((id) => {
    const scoreWithoutFetchingLatest = store.getScoreWithoutFetchingLatest(id.id);
    const recipientId = id.getRecipientId();
    let num = 0;
    if (friend.isFriend(recipientId)) {
      num = 0.2;
    }
    let num2 = 0;
    if (null != dMFromUserId.getDMFromUserId(recipientId)) {
      num2 = 0.1;
    }
    obj[recipientId] = 1 + scoreWithoutFetchingLatest / closure_0 + num + num2;
  });
  return obj;
}
function createSearchContext() {
  if (null != closure_19) {
    closure_19.destroy();
    closure_19 = null;
  }
  return importDefault(dependencyMap[21]).getUserSearchContext(parseUserResults, 1000);
}
function handleModalActionSheetOpen(key) {
  if (key.key !== closure_18) {
    return false;
  } else {
    let closure_20 = true;
    updateHasFriends();
    let closure_19 = createSearchContext();
    let closure_27 = null;
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
  if (null != closure_19) {
    closure_19.destroy();
    closure_19 = null;
  }
  reset();
}
function performQueryOnAffinityChange() {
  let tmp = !closure_20;
  if (!tmp) {
    tmp = !arg1(dependencyMap[16]).getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
    const obj = arg1(dependencyMap[16]);
  }
  let tmp4 = !tmp;
  if (!tmp) {
    tmp4 = performQuery();
  }
  return tmp4;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const PrivateChannelRecord = arg1(dependencyMap[7]).PrivateChannelRecord;
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
({ NEW_GROUP_DM_POPOUT_ID: closure_18, Consents } = arg1(dependencyMap[15]));
let closure_20 = false;
let closure_21 = "";
let closure_22 = 0;
let closure_23 = [];
let closure_24 = false;
let closure_25 = false;
const set = new Set();
let closure_27 = null;
let tmp4 = (Store) => {
  class PrivateChannelRecipientsInviteStoreClass {
    constructor() {
      self = this;
      tmp = closure_3(this, PrivateChannelRecipientsInviteStoreClass);
      obj = closure_6(PrivateChannelRecipientsInviteStoreClass);
      tmp2 = closure_5;
      if (closure_29()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PrivateChannelRecipientsInviteStoreClass;
  callback2(PrivateChannelRecipientsInviteStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_11, closure_12, closure_8, closure_13, closure_14, closure_15, closure_16, closure_9, closure_17);
      const items = [closure_17, closure_11];
      this.syncWith(items, closure_35);
      const items1 = [closure_9];
      this.syncWith(items1, closure_43);
      const items2 = [closure_16];
      this.syncWith(items2, closure_36);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getResults",
    value() {
      return closure_23;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasFriends",
    value() {
      return closure_24;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSelectedUsers",
    value() {
      return closure_26;
    }
  };
  items[4] = {
    key: "getQuery",
    value() {
      return closure_21;
    }
  };
  items[5] = {
    key: "getState",
    value() {
      return { query: closure_21, selectedRow: closure_22, selectedUsers: closure_26, results: closure_23, hasFriends: closure_24, isLoading: closure_25 };
    }
  };
  return callback(PrivateChannelRecipientsInviteStoreClass, items);
}(importDefault(dependencyMap[22]).Store);
tmp4.displayName = "PrivateChannelRecipientsInviteStore";
tmp4 = new tmp4(importDefault(dependencyMap[23]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    reset();
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch() {
    let tmp = !closure_20;
    if (!tmp) {
      tmp = !arg1(dependencyMap[16]).getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      const obj = arg1(dependencyMap[16]);
    }
    let tmp4 = !tmp;
    if (!tmp) {
      tmp4 = setLoading(false);
    }
    return tmp4;
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(query) {
    let tmp = !closure_20;
    if (!tmp) {
      tmp = !arg1(dependencyMap[16]).getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      const obj = arg1(dependencyMap[16]);
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
      let closure_27 = tmp;
      return performQuery();
    }
  },
  MODAL_PUSH: handleModalActionSheetOpen,
  SHOW_ACTION_SHEET: handleModalActionSheetOpen,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function handleInviteOpen(channelId) {
    let closure_20 = true;
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
    const set = new Set(set);
  },
  PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function handleRemoveUser(userId) {
    set.delete(userId.userId);
    const set = new Set(set);
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    reset();
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch() {
    let tmp = !closure_20;
    if (!tmp) {
      tmp = !arg1(dependencyMap[16]).getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      const obj = arg1(dependencyMap[16]);
    }
    let tmp4 = !tmp;
    if (!tmp) {
      tmp4 = setLoading(false);
    }
    return tmp4;
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(query) {
    let tmp = !closure_20;
    if (!tmp) {
      tmp = !arg1(dependencyMap[16]).getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      const obj = arg1(dependencyMap[16]);
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
      let closure_27 = tmp;
      return performQuery();
    }
  },
  MODAL_PUSH: handleModalActionSheetOpen,
  SHOW_ACTION_SHEET: handleModalActionSheetOpen,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function handleInviteOpen(channelId) {
    let closure_20 = true;
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
    const set = new Set(set);
  },
  PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function handleRemoveUser(userId) {
    set.delete(userId.userId);
    const set = new Set(set);
  }
};
const tmp2 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("stores/PrivateChannelRecipientsInviteStore.tsx");

export default tmp4;
