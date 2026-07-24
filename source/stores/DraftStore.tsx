// Module ID: 4468
// Function ID: 39452
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1194, 1348, 4469, 653, 22, 21, 1327, 566, 686, 2]

// Module 4468 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";

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
function getUserDrafts(id) {
  let tmp = table[id];
  if (null == tmp) {
    const obj = {};
    table[id] = obj;
    tmp = obj;
  }
  return tmp;
}
function handleChanged(type) {
  let channelId;
  let draft;
  let draftType;
  ({ channelId, draft, draftType } = type);
  const channel = store2.getChannel(channelId);
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
    const tmp8 = getUserDrafts(id)[channelId];
    if (null == tmp8) {
      return false;
    } else {
      delete tmp4[tmp3];
      if (obj.isEmpty(tmp8)) {
        delete tmp[tmp2];
      }
    }
  }
}
function pruneNonexistentChannels() {
  const id = store.getId();
  if (null != id) {
    if (obj.totalUnavailableGuilds <= 0) {
      const tmp6 = getUserDrafts(id);
      for (const key10012 in tmp6) {
        let tmp8 = key10012;
        let tmp9 = store2;
        if (null != store2.getChannel(key10012)) {
          continue;
        } else {
          delete tmp[tmp2];
          continue;
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
    delete tmp[tmp2];
  }
  return false;
}
let closure_12 = require("ME").MAX_MESSAGE_LENGTH_PREMIUM + 500;
let obj = { ChannelMessage: 0, [0]: "ChannelMessage", ThreadSettings: 1, [1]: "ThreadSettings", FirstThreadMessage: 2, [2]: "FirstThreadMessage", ApplicationLauncherCommand: 3, [3]: "ApplicationLauncherCommand", Poll: 4, [4]: "Poll", SlashCommand: 5, [5]: "SlashCommand", ForwardContextMessage: 6, [6]: "ForwardContextMessage", InteractionModal: 7, [7]: "InteractionModal" };
let closure_14 = {};
let tmp2 = ((PersistedStore) => {
  class DraftStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, DraftStore);
      obj = outer1_6(DraftStore);
      tmp2 = outer1_5;
      if (outer1_15()) {
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
      const outer1_14 = obj;
      const tmp = outer1_16(outer1_1(outer1_2[11]).entries(outer1_14));
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let tmp2 = outer1_8;
          let tmp3 = outer1_8(iter2.value, 2);
          let tmp6 = outer1_16;
          let tmp7 = outer1_1;
          let tmp8 = outer1_2;
          [tmp4, tmp5] = tmp3;
          let obj3 = outer1_1(outer1_2[11]);
          let tmp9 = outer1_16(obj3.entries(tmp5));
          let iter3 = tmp9();
          if (!iter3.done) {
            do {
              let tmp10 = outer1_8;
              let tmp11 = outer1_8(iter3.value, 2);
              let first = tmp11[0];
              let tmp13 = outer1_13;
              let tmp14 = tmp11[1][outer1_13.ChannelMessage];
              if (null != tmp14) {
                let tmp15 = "" !== tmp14.draft;
                if (tmp15) {
                  let str = tmp14.draft;
                  tmp15 = "" !== str.trim();
                }
                if (!tmp15) {
                  let tmp16 = outer1_19;
                  let tmp17 = outer1_13;
                  let tmp18 = outer1_19(first, outer1_13.ChannelMessage, tmp4);
                }
              }
              iter4 = tmp9();
              iter3 = iter4;
              let tmp19 = first;
              let tmp20 = tmp14;
            } while (!iter4.done);
          }
          iter5 = tmp();
          iter2 = iter5;
        } while (!iter5.done);
      }
      self.waitFor(outer1_9, outer1_10, outer1_11);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_14;
    }
  };
  items[1] = obj;
  obj = {
    key: "getThreadDraftWithParentMessageId",
    value(arg0) {
      let self = this;
      self = this;
      let closure_1 = arg0;
      const id = outer1_9.getId();
      if (null != id) {
        let threadSettings;
        const tmp4 = outer1_18(id);
        const keys = outer1_1(outer1_2[11]).keys(tmp4);
        const found = keys.find((arg0) => {
          const threadSettings = self.getThreadSettings(arg0);
          let parentMessageId;
          if (null != threadSettings) {
            parentMessageId = threadSettings.parentMessageId;
          }
          return parentMessageId === closure_1;
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
      let closure_0 = arg0;
      const id = outer1_9.getId();
      if (null == id) {
        return [];
      } else {
        const tmp3 = outer1_18(id);
        const obj = outer1_1(outer1_2[10])(outer1_18(id));
        const mapValuesResult = outer1_1(outer1_2[10])(outer1_18(id)).mapValues((arg0) => {
          let tmp;
          if (null != arg0) {
            tmp = arg0[closure_0];
          }
          return tmp;
        });
        const pickByResult = outer1_1(outer1_2[10])(outer1_18(id)).mapValues((arg0) => {
          let tmp;
          if (null != arg0) {
            tmp = arg0[closure_0];
          }
          return tmp;
        }).pickBy(DraftStore(outer1_2[12]).isNotNullish);
        const mapped = outer1_1(outer1_2[10])(outer1_18(id)).mapValues((arg0) => {
          let tmp;
          if (null != arg0) {
            tmp = arg0[closure_0];
          }
          return tmp;
        }).pickBy(DraftStore(outer1_2[12]).isNotNullish).toPairs().map((arg0) => {
          let tmp;
          [tmp, ] = arg0;
          return { channelId, timestamp, draft };
        });
        const toPairsResult = outer1_1(outer1_2[10])(outer1_18(id)).mapValues((arg0) => {
          let tmp;
          if (null != arg0) {
            tmp = arg0[closure_0];
          }
          return tmp;
        }).pickBy(DraftStore(outer1_2[12]).isNotNullish).toPairs();
        return mapped.sortBy((timestamp) => -timestamp.timestamp).value();
      }
    }
  };
  items[4] = {
    key: "getDraft",
    value(arg0, arg1) {
      const id = outer1_9.getId();
      if (null == id) {
        return "";
      } else {
        const tmp4 = outer1_18(id)[arg0];
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
      const id = outer1_9.getId();
      if (null == id) {
        return null;
      } else {
        const tmp4 = outer1_18(id)[arg0];
        let tmp5 = null;
        if (null != tmp4) {
          tmp5 = tmp4[outer1_13.ThreadSettings];
        }
        return tmp5;
      }
    }
  };
  return callback(DraftStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "DraftStore";
tmp2.persistKey = "DraftStore";
let items = [
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
          let tmp2 = obj;
          obj[obj.ChannelMessage] = arg0[key10005];
          arg0[key10005] = obj;
          continue;
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
          continue;
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
      delete tmp2[tmp];
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
        } else if (null == tmp11[obj.ThreadSettings]) {
          return false;
        } else {
          if (tmp13.parentMessageId !== obj3.castChannelIdAsMessageId(channel.id)) {
            return false;
          } else if (null == tmp10[channel.parent_id]) {
            return false;
          } else {
            let draft;
            if (null != tmp16[obj.FirstThreadMessage]) {
              draft = tmp18.draft;
            }
            let str2 = "";
            if (null != draft) {
              str2 = draft;
            }
            if ("" !== str2) {
              obj = {};
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
          obj3 = importDefault(21);
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
      const merged = Object.assign(tmp4[obj.ThreadSettings]);
      const merged1 = Object.assign(draft);
      obj["parentChannelId"] = channelId;
      tmp4[obj.ThreadSettings] = obj;
    }
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/DraftStore.tsx");

export default tmp2;
export const DraftType = obj;
