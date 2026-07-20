// Module ID: 7088
// Function ID: 56916
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 7088 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getTransformedUser(author) {
  if (null != author) {
    if (!closure_13.isBlockedOrIgnored(author.id)) {
      const obj = { id: author.id };
      if ("0" !== author.discriminator) {
        const _HermesInternal = HermesInternal;
        let username = "" + author.username + "#" + author.discriminator;
      } else {
        username = author.username;
      }
      obj.username = username;
      obj.nicknames = {};
      if (null != obj2.getGlobalName(author)) {
        obj.globalName = author.globalName;
      }
      if (author.bot) {
        obj.isBot = true;
      }
      if (author instanceof closure_10) {
        obj.isProvisional = author.isProvisional;
      } else if ("flags" in author) {
        const flags = author.flags;
        let num3 = 0;
        if (null != flags) {
          num3 = flags;
        }
        obj.isProvisional = importAll(dependencyMap[13]).hasFlag(num3, UserFlags.PROVISIONAL_ACCOUNT);
        const obj3 = importAll(dependencyMap[13]);
      } else {
        obj.isProvisional = false;
      }
      if (closure_13.isFriend(author.id)) {
        obj.isFriend = true;
        obj.friendNickname = closure_13.getNickname(author.id);
      }
      if (author instanceof closure_10) {
        obj.isStaff = author.isStaff();
      } else if ("flags" in author) {
        const flags2 = author.flags;
        let num5 = 0;
        if (null != flags2) {
          num5 = flags2;
        }
        obj.isStaff = importAll(dependencyMap[13]).hasFlag(num5, UserFlags.STAFF);
        const obj4 = importAll(dependencyMap[13]);
      } else {
        obj.isStaff = false;
      }
      return obj;
    }
  }
  return null;
}
function setNick(nicknames, nicknameContextId) {
  if (null != nicknames) {
    let tmp = null;
    if (null != arg2) {
      tmp = null;
      if ("" !== arg2) {
        tmp = arg2;
      }
    }
    nicknames.nicknames[nicknameContextId] = tmp;
  }
}
function getDMUpdates(type) {
  const arg1 = type;
  const items = [];
  const importDefault = items;
  if (null != type) {
    if (isPrivate(type.type)) {
      let recipients = type.recipients;
      if (undefined === recipients) {
        recipients = [];
      }
      const item = recipients.forEach((arg0) => {
        const tmp = callback(user.getUser(arg0));
        if (null != arg0) {
          callback2(tmp, arg0.id);
        }
        items.push(tmp);
      });
      return items;
    }
  }
  return items;
}
function updateMembersList(arr) {
  const items = [];
  const importDefault = items;
  const item = arr.forEach((user) => {
    const tmp = callback(user.user);
    if (null != tmp) {
      callback2(tmp, arg1, user.nick);
      items.push(tmp);
    }
  });
  return items;
}
function getUsersFromMessage(arg0) {
  let message;
  let nicknameContextId;
  ({ message, nicknameContextId } = arg0);
  let arg1;
  let importDefault;
  const channel = channel.getChannel(message.channel_id);
  if (null != nicknameContextId) {
    arg1 = nicknameContextId;
    const items = [];
    importDefault = items;
    if (null != message.author) {
      const tmp6 = getTransformedUser(message.author);
      if (null != tmp6) {
        items.push(tmp6);
        if (null != nicknameContextId) {
          setNick(tmp6, nicknameContextId);
        }
      }
    }
    const mentions = message.mentions;
    if (null != mentions) {
      const item = mentions.forEach((arg0) => {
        const tmp = callback(arg0);
        if (null != tmp) {
          items.push(tmp);
          if (null != nicknameContextId) {
            callback2(tmp, nicknameContextId);
          }
        }
      });
    }
    return items;
  } else {
    let isPrivateResult;
    if (null != channel) {
      isPrivateResult = channel.isPrivate();
    }
    if (true === isPrivateResult) {
      let id;
      if (null != channel) {
        id = channel.id;
      }
      let guildId = id;
    } else if (null != channel) {
      guildId = channel.getGuildId();
    }
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const isPrivate = arg1(dependencyMap[5]).isPrivate;
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
const UserFlags = arg1(dependencyMap[11]).UserFlags;
let closure_16 = { UPDATE_USERS: "UPDATE_USERS", USER_RESULTS: "USER_RESULTS", QUERY_SET: "QUERY_SET", QUERY_CLEAR: "QUERY_CLEAR", REQUEST_DEBUG_STATE: "REQUEST_DEBUG_STATE", DEBUG_STATE: "DEBUG_STATE" };
const tmp2 = () => {
  class UserSearchContext {
    constructor(arg0, arg1) {
      num = arg2;
      self = this;
      UserSearchContext = this;
      if (arg2 === undefined) {
        num = 10;
      }
      tmp = closure_7(self, UserSearchContext);
      self.handleMessages = (data) => {
        data = data.data;
        let tmp = null != data;
        if (tmp) {
          tmp = data.type === constants.USER_RESULTS;
        }
        if (tmp) {
          tmp = data.uuid === self._uuid;
        }
        if (tmp) {
          if (false !== self._currentQuery) {
            self._callback(data.payload);
          }
          if (null != self._currentQuery) {
            self._currentQuery = null;
          }
          self._setNextQuery();
        }
      };
      self._worker = arg0;
      obj = UserSearchContext(closure_3[14]);
      self._uuid = obj.v4();
      self._callback = arg1;
      self._limit = num;
      self._currentQuery = null;
      self._nextQuery = null;
      self._subscribed = false;
      subscription = self.subscribe();
      return;
    }
  }
  const arg1 = UserSearchContext;
  let obj = {
    key: "setLimit",
    value(_limit) {
      this._limit = _limit;
      if (null != this._nextQuery) {
        this._nextQuery.limit = _limit;
      }
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "subscribe",
    value() {
      const self = this;
      if (!tmp) {
        const _worker = self._worker;
        const listener = _worker.addEventListener("message", self.handleMessages, false);
        self._subscribed = true;
        self._setNextQuery();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "unsubscribe",
    value() {
      const self = this;
      if (tmp) {
        const _worker = self._worker;
        const removed = _worker.removeEventListener("message", self.handleMessages, false);
        self._subscribed = false;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "destroy",
    value() {
      this.clearQuery();
      this.unsubscribe();
    }
  };
  items[4] = {
    key: "clearQuery",
    value() {
      const self = this;
      this._currentQuery = false;
      this._nextQuery = null;
      if (tmp) {
        const _worker = self._worker;
        const obj = { uuid: self._uuid, type: constants.QUERY_CLEAR };
        _worker.postMessage(obj);
      }
    }
  };
  items[5] = {
    key: "setQuery",
    value(query) {
      let boosterFallback;
      let boosters;
      const self = this;
      ({ boosters, boosterFallback } = query);
      const obj = { query: query.query, filters: query.filters, blacklist: query.blacklist };
      if (null == boosters) {
        boosters = {};
      }
      obj.boosters = boosters;
      let num = 1;
      if (null != boosterFallback) {
        num = boosterFallback;
      }
      obj.boosterFallback = num;
      obj.limit = self._limit;
      self._nextQuery = obj;
      self._setNextQuery();
    }
  };
  items[6] = {
    key: "_setNextQuery",
    value() {
      const self = this;
      let tmp = null != this._currentQuery;
      if (tmp) {
        tmp = false !== self._currentQuery;
      }
      if (!tmp) {
        tmp = null == self._nextQuery;
      }
      if (!tmp) {
        if (null != self._worker) {
          if (self._subscribed) {
            self._currentQuery = self._nextQuery;
            self._nextQuery = null;
            const _worker = self._worker;
            const obj = { uuid: self._uuid, type: constants.QUERY_SET, payload: self._currentQuery };
            _worker.postMessage(obj);
          }
        }
        if (!self._subscribed) {
          const subscription = self.subscribe();
        }
      }
    }
  };
  return callback2(UserSearchContext, items);
}();
let tmp3 = (arg0) => {
  class UserSearchManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_7(this, UserSearchManager);
      items1 = [...items];
      obj = closure_5(UserSearchManager);
      tmp2 = closure_4;
      if (closure_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      UserSearchManager = tmp2Result;
      tmp2Result.actions = {
        LOGOUT() {
              return tmp2Result._handleLogout();
            },
        POST_CONNECTION_OPEN() {
              return tmp2Result._handleConnectionOpen();
            },
        CONNECTION_OPEN_SUPPLEMENTAL(arg0) {
              return tmp2Result._handleConnectionOpenSupplemental(arg0);
            },
        OVERLAY_INITIALIZE(arg0) {
              return tmp2Result._handleOverlayInitialize(arg0);
            },
        CURRENT_USER_UPDATE(arg0) {
              return tmp2Result._handleCurrentUserUpdate(arg0);
            },
        GUILD_CREATE(arg0) {
              return tmp2Result._handleGuildCreate(arg0);
            },
        GUILD_MEMBERS_CHUNK_BATCH(arg0) {
              return tmp2Result._handleGuildMembersChunkBatch(arg0);
            },
        GUILD_MEMBER_ADD(arg0) {
              return tmp2Result._handleGuildMemberUpdate(arg0);
            },
        GUILD_MEMBER_UPDATE(arg0) {
              return tmp2Result._handleGuildMemberUpdate(arg0);
            },
        RELATIONSHIP_ADD(arg0) {
              return tmp2Result._handleRelationshipAdd(arg0);
            },
        RELATIONSHIP_UPDATE(arg0) {
              return tmp2Result._handleRelationshipUpdate(arg0);
            },
        RELATIONSHIP_REMOVE(arg0) {
              return tmp2Result._handleRelationshipRemove(arg0);
            },
        CHANNEL_CREATE(arg0) {
              return tmp2Result._handleDMCreate(arg0);
            },
        CHANNEL_UPDATES(arg0) {
              return tmp2Result._handleDMUpdates(arg0);
            },
        CHANNEL_RECIPIENT_ADD(arg0) {
              return tmp2Result._handleRecipientChanges(arg0);
            },
        PASSIVE_UPDATE_V2(arg0) {
              return tmp2Result._handlePassiveUpdateV2(arg0);
            },
        THREAD_LIST_SYNC(arg0) {
              return tmp2Result._handleThreadListSync(arg0);
            },
        LOAD_FORUM_POSTS(arg0) {
              return tmp2Result._handleLoadForumPosts(arg0);
            },
        LOAD_MESSAGES_SUCCESS(arg0) {
              return tmp2Result._handleLoadMessagesSuccess(arg0);
            },
        SEARCH_MESSAGES_SUCCESS(arg0) {
              return tmp2Result._handleSearchMessagesSuccess(arg0);
            },
        LOAD_THREADS_SUCCESS(arg0) {
              return tmp2Result._handleLoadThreadsSuccess(arg0);
            },
        LOAD_ARCHIVED_THREADS_SUCCESS(arg0) {
              return tmp2Result._handleLoadThreadsSuccess(arg0);
            },
        LOAD_PINNED_MESSAGES_SUCCESS(arg0) {
              return tmp2Result._handleLoadPinnedMessagesSuccess(arg0);
            },
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS(arg0) {
              return tmp2Result._handleGuildScheduledEventUsersFetchSuccess(arg0);
            },
        MESSAGE_CREATE(arg0) {
              return tmp2Result._handleMessageCreateOrUpdate(arg0);
            },
        MESSAGE_UPDATE(arg0) {
              return tmp2Result._handleMessageCreateOrUpdate(arg0);
            }
      };
      tmp2Result._handleLogout = () => {
        tmp2Result.rebootWebworker();
      };
      tmp2Result._handleConnectionOpen = () => {
        const timerId = setTimeout(() => {
          const currentUser = authStore.getCurrentUser();
          if (null != currentUser) {
            const tmp27 = callback2(currentUser);
            let obj = {};
            obj[tmp27.id] = tmp27;
            const _Object2 = Object;
            const values = Object.values(authStore.getUsers());
            const item = values.forEach((id) => {
              obj[id.id] = callback(id);
            });
            const mutableAllGuildsAndMembers = mutableAllGuildsAndMembers.getMutableAllGuildsAndMembers();
            const keys = Object.keys();
            if (keys !== undefined) {
              while (keys[tmp2] !== undefined) {
                let tmp35 = tmp8;
                let tmp18 = tmp9;
                let tmp19 = tmp10;
                let tmp20 = tmp11;
                let tmp21 = tmp12;
                let keys1 = Object.keys();
                if (keys1 === undefined) {
                  continue;
                } else {
                  let tmp9 = tmp18;
                  let tmp10 = tmp19;
                  let tmp11 = tmp20;
                  let tmp12 = tmp21;
                  let tmp13 = keys1[tmp];
                  while (tmp13 !== undefined) {
                    let tmp37 = tmp13;
                    let tmp38 = obj[tmp13];
                    let tmp39 = mutableAllGuildsAndMembers[tmp8][tmp13];
                    let nick;
                    if (null != tmp39) {
                      nick = tmp39.nick;
                    }
                    let globalName = nick;
                    if (null == nick) {
                      let tmp16 = callback;
                      let tmp17 = closure_3;
                      obj = callback(closure_3[12]);
                      globalName = obj.getGlobalName(tmp38);
                    }
                    tmp18 = nick;
                    tmp19 = tmp39;
                    tmp20 = tmp38;
                    tmp21 = globalName;
                    if (null == tmp38) {
                      continue;
                    } else {
                      let tmp22 = callback3;
                      let tmp23 = callback3(tmp38, tmp8, globalName);
                      tmp18 = nick;
                      tmp19 = tmp39;
                      tmp20 = tmp38;
                      tmp21 = globalName;
                      // continue
                    }
                    continue;
                  }
                }
                continue;
              }
            }
            const _Object = Object;
            obj.updateUsers(Object.values(obj), "connection_open");
          }
        }, 3000);
      };
      tmp2Result._handleConnectionOpenSupplemental = (guilds) => {
        const timerId = setTimeout(() => {
          callback(closure_3[15]).flatMap(guilds, (members) => callback(members.members, members.id));
          const obj = callback(closure_3[15]);
          const obj2 = callback(closure_3[15]);
          const items = [
            ...callback(closure_3[15]).flatMap(guilds, (activity_instances) => {
              const items = [];
              activity_instances = activity_instances.activity_instances;
              if (null != activity_instances) {
                const item = activity_instances.forEach((participants) => {
                  participants = participants.participants;
                  const item = participants.forEach(() => { ... });
                });
              }
              return items;
            })
          ];
          guilds.updateUsers(items, "connection_open_supplemental");
        }, 3000);
      };
      tmp2Result._handleOverlayInitialize = (guildMembers) => {
        let done;
        let iter7;
        guildMembers = guildMembers.guildMembers;
        const map = new Map();
        const tmp = callback2(guildMembers.users);
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp2 = closure_21;
            let result = map.set(value.id, closure_21(value));
            let iter2 = tmp();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        const tmp4 = callback2(callback(closure_3[16]).keys(guildMembers));
        const iter3 = tmp4();
        let iter4 = iter3;
        if (!iter3.done) {
          do {
            value = iter4.value;
            let tmp8 = guildMembers[value];
            let tmp9 = tmp5;
            let tmp10 = tmp6;
            let tmp11 = tmp7;
            if (null != tmp8) {
              let tmp22 = closure_18;
              let tmp23 = closure_1;
              let tmp24 = closure_3;
              let obj3 = closure_1(closure_3[16]);
              let tmp25 = closure_18(obj3.keys(tmp8));
              let iter8 = tmp25();
              let iter6 = iter8;
              let tmp26 = iter8;
              let tmp27 = tmp25;
              tmp9 = tmp5;
              tmp10 = tmp6;
              tmp11 = tmp7;
              if (!iter8.done) {
                do {
                  value = iter6.value;
                  let value1 = map.get(value);
                  let tmp13 = tmp8[value];
                  let tmp14 = null != value1 && null != tmp13 && null != tmp13.nick;
                  if (tmp14) {
                    let tmp15 = closure_22;
                    let tmp16 = closure_22(value1, value, tmp13.nick);
                    let result1 = map.set(value, value1);
                  }
                  let iter5 = tmp25();
                  iter6 = iter5;
                  let tmp18 = iter5;
                  let tmp19 = tmp25;
                  tmp9 = value;
                  tmp10 = value1;
                  tmp11 = tmp13;
                } while (!iter5.done);
              }
            }
            iter7 = tmp4();
            let tmp5 = tmp9;
            let tmp6 = tmp10;
            let tmp7 = tmp11;
            iter4 = iter7;
          } while (!iter7.done);
        }
        tmp2Result.updateUsers(Array.from(map.values()), "overlay_initialize");
        map.clear();
      };
      tmp2Result._handleCurrentUserUpdate = (user) => {
        const tmp = callback3(user.user);
        if (null != tmp) {
          const items = [tmp];
          tmp2Result.updateUsers(items, "current_user_update");
        }
      };
      tmp2Result._handleGuildCreate = (guild) => {
        guild = guild.guild;
        tmp2Result.updateUsers(callback6(guild.members, guild.id), "guild_create");
      };
      tmp2Result._handleGuildMembersChunkBatch = (chunks) => {
        let done;
        const items = [];
        const tmp = callback2(chunks.chunks);
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let push = items.push;
            let tmp2 = closure_24;
            let items1 = [];
            let tmp3 = items1;
            let num = 0;
            let arraySpreadResult = HermesBuiltin.arraySpread(closure_24(value.members, value.guildId), 0);
            let tmp5 = push;
            let tmp6 = items1;
            let tmp7 = items;
            let applyResult = HermesBuiltin.apply(items1, items);
            let iter2 = tmp();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        tmp2Result.updateUsers(items, "guild_members_chunk_batch");
      };
      tmp2Result._handleGuildMemberUpdate = (user) => {
        let guildId;
        let nick;
        ({ guildId, nick } = user);
        const tmp = callback3(user.user);
        if (null != tmp) {
          callback4(tmp, guildId, nick);
          const items = [tmp];
          tmp2Result.updateUsers(items, "guild_member_update");
        }
      };
      tmp2Result._handlePassiveUpdateV2 = (members) => {
        tmp2Result.updateUsers(callback6(members.members, members.guildId), "passive_update_v2");
      };
      tmp2Result._handleRelationshipAdd = (relationship) => {
        const items = [callback3(relationship.relationship.user)];
        tmp2Result.updateUsers(items, "relationship_add");
      };
      tmp2Result._handleRelationshipUpdate = (relationship) => {
        const items = [callback3(authStore.getUser(relationship.relationship.id))];
        tmp2Result.updateUsers(items, "relationship_update");
      };
      tmp2Result._handleRelationshipRemove = (relationship) => {
        const items = [callback3(authStore.getUser(relationship.relationship.id))];
        tmp2Result.updateUsers(items, "relationship_remove");
      };
      tmp2Result._handleDMCreate = (channel) => {
        const id = channel.channel.id;
        let arr = callback5(channel.getChannel(id));
        if (0 !== arr.length) {
          const tmp3 = callback3(authStore.getCurrentUser());
          callback4(tmp3, id);
          arr = arr.push(tmp3);
          tmp2Result.updateUsers(arr, "dm_create");
        }
      };
      tmp2Result._handleDMUpdates = (channels) => {
        let iter2;
        const tmp = callback2(channels.channels);
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp2 = closure_23;
            let tmp3 = closure_11;
            let arr = closure_23(closure_11.getChannel(value.id));
            if (0 !== arr.length) {
              let tmp4 = closure_21;
              let tmp5 = closure_14;
              let tmp6 = closure_21(closure_14.getCurrentUser());
              let tmp7 = closure_22;
              let tmp8 = closure_22(tmp6, value.id);
              arr = arr.push(tmp6);
              let tmp10 = closure_0;
              let updateUsersResult = closure_0.updateUsers(arr, "dm_updates");
            }
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
      };
      tmp2Result._handleRecipientChanges = (isMember) => {
        if (isMember.isMember) {
          const tmp4 = callback3(tmp2);
          callback4(tmp4, tmp);
          const items = [tmp4];
          tmp2Result.updateUsers(items, "recipient_changes");
        }
      };
      tmp2Result._handleThreadListSync = (arg0) => {
        let mostRecentMessages;
        ({ guildId: closure_0, mostRecentMessages } = arg0);
        let items;
        if (null != mostRecentMessages) {
          items = [];
          const item = mostRecentMessages.forEach((message) => {
            const item = callback({ message, nicknameContextId: closure_0 }).forEach((arg0) => arr.push(arg0));
          });
          tmp2Result.updateUsers(items, "thread_list_sync");
        }
      };
      tmp2Result._handleLoadForumPosts = (guildId) => {
        const items = [];
        const values = Object.values(guildId.threads);
        const item = values.forEach((arg0) => {
          let first_message;
          let most_recent_message;
          let owner;
          ({ first_message, most_recent_message, owner } = arg0);
          if (null != first_message) {
            let obj = { message: first_message, nicknameContextId: guildId };
            const item = callback2(obj).forEach((arg0) => arr.push(arg0));
            const arr = callback2(obj);
          }
          if (null != most_recent_message) {
            obj = { message: most_recent_message, nicknameContextId: guildId };
            const item1 = callback2(obj).forEach((arg0) => arr.push(arg0));
            const arr2 = callback2(obj);
          }
          if (null != owner) {
            const items = [owner];
            const item2 = callback(items, guildId).forEach((arg0) => arr.push(arg0));
            const arr4 = callback(items, guildId);
          }
        });
        guildId.guildId.updateUsers(items, "load_forum_posts");
      };
      tmp2Result._handleLoadMessagesSuccess = (messages) => {
        messages = messages.messages;
        tmp2Result.updateUsers(messages.flatMap((message) => callback({ message })), "load_messages_success");
      };
      tmp2Result._handleLoadPinnedMessagesSuccess = (pins) => {
        pins = pins.pins;
        const items = [];
        const item = pins.forEach((message) => {
          const item = callback({ message: message.message }).forEach((arg0) => arr.push(arg0));
        });
        items.updateUsers(items, "load_pinned_messages_success");
      };
      tmp2Result._handleSearchMessagesSuccess = (data) => {
        data = data.data;
        const items = [];
        const item = data.forEach((messages) => {
          messages = messages.messages;
          const item = messages.forEach((arr) => {
            const item = arr.forEach((message) => {
              const item = callback({ message }).forEach(() => { ... });
            });
          });
        });
        items.updateUsers(items, "search_messages_success");
      };
      tmp2Result._handleLoadThreadsSuccess = (guildId) => {
        let firstMessages;
        let mostRecentMessages;
        let owners;
        guildId = guildId.guildId;
        ({ firstMessages, mostRecentMessages, owners } = guildId);
        const items = [];
        if (null != firstMessages) {
          const item = firstMessages.forEach((message) => {
            const item = callback({ message, nicknameContextId: guildId }).forEach((arg0) => arr.push(arg0));
          });
        }
        if (null != mostRecentMessages) {
          const item1 = mostRecentMessages.forEach((message) => {
            const item = callback({ message, nicknameContextId: guildId }).forEach((arg0) => arr.push(arg0));
          });
        }
        if (null != owners) {
          const item2 = callback6(owners, guildId).forEach((arg0) => items.push(arg0));
          const arr2 = callback6(owners, guildId);
        }
        guildId.updateUsers(items, "load_threads_success");
      };
      tmp2Result._handleMessageCreateOrUpdate = (message) => {
        tmp2Result.updateUsers(callback7({ message: message.message }), "message_create_or_update");
      };
      tmp2Result._handleGuildScheduledEventUsersFetchSuccess = (arg0) => {
        let guildScheduledEventUsers;
        ({ guildId: closure_0, guildScheduledEventUsers } = arg0);
        const items = [];
        const item = guildScheduledEventUsers.forEach((member) => {
          member = member.member;
          const tmp = callback(member.user);
          if (null != tmp) {
            let nick;
            if (null != member) {
              nick = member.nick;
            }
            closure_22(tmp, closure_0, nick);
            items.push(tmp);
            const tmp2 = closure_22;
            const tmp3 = closure_0;
          }
        });
        tmp2Result.updateUsers(items, "guild_scheduled_event_users_fetch_success");
      };
      return tmp2Result;
    }
  }
  const arg1 = UserSearchManager;
  callback(UserSearchManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      this.rebootWebworker();
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      if (null != this._worker) {
        const _worker = self._worker;
        _worker.terminate();
        self._worker = null;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "rebootWebworker",
    value() {
      const self = this;
      if (null != this._worker) {
        const _worker = self._worker;
        _worker.terminate();
        self._worker = null;
      }
      self._worker = UserSearchManager(closure_3[17]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updateUsers",
    value(arr, action) {
      let iter;
      const _worker = this._worker;
      if (null != _worker) {
        const found = arr.filter(UserSearchManager(closure_3[18]).isNotNullish);
        const tmp13 = callback3(found);
        let iter2 = tmp13();
        if (!iter2.done) {
          do {
            let value = iter2.value;
            let id;
            if (null != value) {
              id = value.id;
            }
            if (null == id) {
              let tmp14 = closure_1;
              let tmp15 = closure_3;
              let obj1 = closure_1(closure_3[19]);
              let obj = { <string:944832516>: null, backShouldLeaveGuild: null };
              obj = { action };
              obj1 = { userIsNull: null == value, idIsNull: true };
              let username;
              if (null != value) {
                username = value.username;
              }
              obj1.usernameIsNull = null == username;
              let isBot;
              if (null != value) {
                isBot = value.isBot;
              }
              obj1.isBot = isBot;
              let isFriend;
              if (null != value) {
                isFriend = value.isFriend;
              }
              obj1.isFriend = isFriend;
              let isProvisional;
              if (null != value) {
                isProvisional = value.isProvisional;
              }
              obj1.isProvisional = isProvisional;
              let globalName;
              if (null != value) {
                globalName = value.globalName;
              }
              obj1.globalNameIsNull = null == globalName;
              obj1.usersArrayLength = found.length;
              obj.userFields = obj1;
              obj.data = obj;
              let addBreadcrumbResult = obj1.addBreadcrumb(obj);
            }
            iter = tmp13();
            iter2 = iter;
          } while (!iter.done);
        }
        obj = { type: constants.UPDATE_USERS, payload: found };
        _worker.postMessage(obj);
      }
    }
  };
  items[4] = {
    key: "getUserSearchContext",
    value(arg0) {
      let num = arg1;
      const self = this;
      if (arg1 === undefined) {
        num = 10;
      }
      self.initialize();
      const _worker = self._worker;
      if (null == _worker) {
        const _Error = Error;
        const error = new Error("SearchContextManager: No webworker initialized");
        throw error;
      } else {
        const prototype = ctor.prototype;
        const tmp8 = new ctor(_worker, arg0, num);
        return tmp8;
      }
    }
  };
  items[5] = {
    key: "requestDebugState",
    value() {
      return Promise.resolve(null);
    }
  };
  return callback2(UserSearchManager, items);
}(importDefault(dependencyMap[20]));
tmp3 = new tmp3();
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/autocompleter/UserSearchManager.tsx");

export default tmp3;
export const UserSearchContext = tmp2;
