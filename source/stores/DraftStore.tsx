// Module ID: 4460
// Function ID: 39355
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4460 (_isNativeReflectConstruct)
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
function getUserDrafts(id) {
  let tmp = closure_14[id];
  if (null == tmp) {
    const obj = {};
    closure_14[id] = obj;
    tmp = obj;
  }
  return tmp;
}
function handleChanged(type) {
  let channelId;
  let draft;
  let draftType;
  ({ channelId, draft, draftType } = type);
  const channel = channel.getChannel(channelId);
  let template;
  if (null != channel) {
    template = channel.template;
  }
  if (draft === template) {
    draft = "";
  }
  const id = store.getId();
  if (null != id) {
    if (null != draft) {
      if ("" !== draft) {
        const tmp6 = getUserDrafts(id);
        let tmp7 = tmp6[channelId];
        if (null == tmp7) {
          let obj = {};
          tmp6[channelId] = obj;
          tmp7 = obj;
        }
        let substr = draft;
        if (draft.length > closure_12) {
          substr = draft.substr(0, closure_12);
        }
        draft = undefined;
        if (null != tmp7[draftType]) {
          draft = tmp11.draft;
        }
        if (substr !== draft) {
          obj = {};
          const _Date = Date;
          obj.timestamp = Date.now();
          obj.draft = substr;
          tmp7[draftType] = obj;
        }
      }
      return "DRAFT_SAVE" === type.type;
    }
  }
  deleteDraft(channelId, draftType);
}
function deleteDraft(channelId, draftType, id) {
  if (id === undefined) {
    id = store.getId();
  }
  if (null == id) {
    return false;
  } else {
    const tmp4 = getUserDrafts(id)[channelId];
    if (null == tmp4) {
      return false;
    } else {
      delete r5[r4];
      if (obj.isEmpty(tmp4)) {
        delete r1[r2];
      }
    }
  }
}
function pruneNonexistentChannels() {
  const id = store.getId();
  if (null != id) {
    if (obj.totalUnavailableGuilds <= 0) {
      const tmp4 = getUserDrafts(id);
      for (const key10012 in tmp4) {
        let tmp6 = key10012;
        let tmp7 = closure_10;
        if (null != closure_10.getChannel(key10012)) {
          continue;
        } else {
          delete r5[r8];
          // continue
        }
        continue;
      }
    }
  }
}
function handleChannelDelete(arg0) {
  const id = store.getId();
  if (null != id) {
    getUserDrafts(id);
    delete r0[r1];
  }
  return false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = arg1(dependencyMap[9]).MAX_MESSAGE_LENGTH_PREMIUM + 500;
let obj = { ChannelMessage: 0, [0]: "ChannelMessage", ThreadSettings: 1, [1]: "ThreadSettings", FirstThreadMessage: 2, [2]: "FirstThreadMessage", ApplicationLauncherCommand: 3, [3]: "ApplicationLauncherCommand", Poll: 4, [4]: "Poll", SlashCommand: 5, [5]: "SlashCommand", ForwardContextMessage: 6, [6]: "ForwardContextMessage", InteractionModal: 7, [7]: "InteractionModal" };
let closure_14 = {};
let tmp2 = (PersistedStore) => {
  class DraftStore {
    constructor() {
      self = this;
      tmp = closure_3(this, DraftStore);
      obj = closure_6(DraftStore);
      tmp2 = closure_5;
      if (closure_15()) {
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
  const arg1 = DraftStore;
  callback2(DraftStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let iter5;
      let tmp4;
      let tmp5;
      let obj = arg0;
      const self = this;
      if (null == arg0) {
        obj = {};
      }
      const tmp = callback5(callback(closure_2[11]).entries(obj));
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let tmp2 = closure_8;
          let tmp3 = closure_8(iter2.value, 2);
          let tmp6 = closure_16;
          let tmp7 = closure_1;
          let tmp8 = closure_2;
          [tmp4, tmp5] = tmp3;
          let obj3 = closure_1(closure_2[11]);
          let tmp9 = closure_16(obj3.entries(tmp5));
          let iter3 = tmp9();
          if (!iter3.done) {
            do {
              let tmp10 = closure_8;
              let tmp11 = closure_8(iter3.value, 2);
              let first = tmp11[0];
              let tmp13 = closure_13;
              let tmp14 = tmp11[1][closure_13.ChannelMessage];
              if (null != tmp14) {
                let tmp15 = "" !== tmp14.draft;
                if (tmp15) {
                  let str = tmp14.draft;
                  tmp15 = "" !== str.trim();
                }
                if (!tmp15) {
                  let tmp16 = closure_19;
                  let tmp17 = closure_13;
                  let tmp18 = closure_19(first, closure_13.ChannelMessage, tmp4);
                }
              }
              let iter4 = tmp9();
              iter3 = iter4;
              let tmp19 = first;
              let tmp20 = tmp14;
            } while (!iter4.done);
          }
          iter5 = tmp();
          iter2 = iter5;
        } while (!iter5.done);
      }
      self.waitFor(closure_9, closure_10, closure_11);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_14;
    }
  };
  items[1] = obj;
  obj = {
    key: "getThreadDraftWithParentMessageId",
    value(arg0) {
      const self = this;
      const DraftStore = this;
      const id = store.getId();
      if (null != id) {
        let threadSettings;
        const tmp4 = callback6(id);
        const keys = arg0(closure_2[11]).keys(tmp4);
        const found = keys.find((arg0) => {
          const threadSettings = self.getThreadSettings(arg0);
          let parentMessageId;
          if (null != threadSettings) {
            parentMessageId = threadSettings.parentMessageId;
          }
          return parentMessageId === arg0;
        });
        if (null != found) {
          threadSettings = self.getThreadSettings(found);
        }
        return threadSettings;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRecentlyEditedDrafts",
    value(arg0) {
      const DraftStore = arg0;
      const id = store.getId();
      if (null == id) {
        return [];
      } else {
        const tmp3 = callback6(id);
        const obj = callback(closure_2[10])(callback6(id));
        const mapValuesResult = callback(closure_2[10])(callback6(id)).mapValues((arg0) => {
          let tmp;
          if (null != arg0) {
            tmp = arg0[closure_0];
          }
          return tmp;
        });
        const pickByResult = callback(closure_2[10])(callback6(id)).mapValues((arg0) => {
          let tmp;
          if (null != arg0) {
            tmp = arg0[closure_0];
          }
          return tmp;
        }).pickBy(DraftStore(closure_2[12]).isNotNullish);
        const mapped = callback(closure_2[10])(callback6(id)).mapValues((arg0) => {
          let tmp;
          if (null != arg0) {
            tmp = arg0[closure_0];
          }
          return tmp;
        }).pickBy(DraftStore(closure_2[12]).isNotNullish).toPairs().map((arg0) => {
          let tmp;
          [tmp, ] = arg0;
          return { channelId, timestamp, draft };
        });
        const toPairsResult = callback(closure_2[10])(callback6(id)).mapValues((arg0) => {
          let tmp;
          if (null != arg0) {
            tmp = arg0[closure_0];
          }
          return tmp;
        }).pickBy(DraftStore(closure_2[12]).isNotNullish).toPairs();
        return mapped.sortBy((timestamp) => -timestamp.timestamp).value();
      }
    }
  };
  items[4] = {
    key: "getDraft",
    value(arg0, arg1) {
      const id = store.getId();
      if (null == id) {
        return "";
      } else {
        const tmp4 = callback6(id)[arg0];
        if (null != tmp4) {
          if (null != tmp4[arg1]) {
            return tmp6.draft;
          }
        }
        return "";
      }
    }
  };
  items[5] = {
    key: "getThreadSettings",
    value(arg0) {
      const id = store.getId();
      if (null == id) {
        return null;
      } else {
        const tmp4 = callback6(id)[arg0];
        let tmp5 = null;
        if (null != tmp4) {
          tmp5 = tmp4[closure_13.ThreadSettings];
        }
        return tmp5;
      }
    }
  };
  return callback(DraftStore, items);
}(importDefault(dependencyMap[13]).PersistedStore);
tmp2.displayName = "DraftStore";
tmp2.persistKey = "DraftStore";
const items = [
  (obj) => {
    if (null == obj) {
      return {};
    } else {
      for (const key10005 in arg0) {
        let tmp3 = key10005;
        if (!("timestamp" in arg0[key10005])) {
          continue;
        } else {
          obj = {};
          let tmp2 = closure_13;
          obj[closure_13.ChannelMessage] = arg0[key10005];
          arg0[key10005] = obj;
          // continue
        }
        continue;
      }
      return obj;
    }
  },
  (obj) => {
    const id = store.getId();
    if (null != obj) {
      if (null != id) {
        obj = {};
        obj = {};
        obj[id] = obj;
        for (const key10009 in arg0) {
          let tmp3 = key10009;
          obj[key10009] = arg0[key10009];
        }
        return obj;
      }
    }
    return {};
  }
];
tmp2.migrations = items;
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const id = store.getId();
    if (!(id in closure_14)) {
      closure_14[id] = {};
    }
    pruneNonexistentChannels();
    return false;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      let closure_14 = {};
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleMultiAccountRemove(userId) {
    if (userId.userId in closure_14) {
      userId = userId.userId;
      delete r1[r0];
    }
  },
  GUILD_DELETE: function handleGuildDelete() {
    pruneNonexistentChannels();
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    const id = store.getId();
    if (null != id) {
      if (channel.ownerId !== id) {
        const tmp10 = getUserDrafts(id);
        if (null == tmp10[channel.parent_id]) {
          return false;
        } else if (null == tmp11[closure_13.ThreadSettings]) {
          return false;
        } else {
          if (tmp13.parentMessageId !== obj3.castChannelIdAsMessageId(channel.id)) {
            return false;
          } else if (null == tmp10[channel.parent_id]) {
            return false;
          } else {
            let draft;
            if (null != tmp16[closure_13.FirstThreadMessage]) {
              draft = tmp18.draft;
            }
            let str2 = "";
            if (null != draft) {
              str2 = draft;
            }
            if ("" !== str2) {
              let obj = {};
              obj = {};
              const _Date = Date;
              obj.timestamp = Date.now();
              obj.draft = str2;
              obj[obj.ChannelMessage] = obj;
              tmp10[channel.id] = obj;
            }
            deleteDraft(channel.parent_id, obj.ThreadSettings);
            deleteDraft(channel.parent_id, obj.FirstThreadMessage);
          }
          const obj3 = importDefault(dependencyMap[11]);
        }
      }
    }
    return false;
  },
  DRAFT_SAVE: handleChanged,
  DRAFT_CHANGE: handleChanged,
  DRAFT_CLEAR: function handleDraftClear(channelId) {
    return deleteDraft(channelId.channelId, channelId.draftType);
  },
  THREAD_SETTINGS_DRAFT_CHANGE: function handleThreadSettingsDraftChanged(arg0) {
    let channelId;
    let draft;
    ({ channelId, draft } = arg0);
    const id = store.getId();
    if (null != id) {
      const tmp3 = getUserDrafts(id);
      let tmp4 = tmp3[channelId];
      if (null == tmp4) {
        let obj = {};
        tmp3[channelId] = obj;
        tmp4 = obj;
      }
      obj = {};
      const _Date = Date;
      obj.timestamp = Date.now();
      const merged = Object.assign(tmp4[closure_13.ThreadSettings]);
      const merged1 = Object.assign(draft);
      obj["parentChannelId"] = channelId;
      tmp4[obj.ThreadSettings] = obj;
    }
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[14]), obj);
const result = arg1(dependencyMap[15]).fileFinishedImporting("stores/DraftStore.tsx");

export default tmp2;
export const DraftType = obj;
