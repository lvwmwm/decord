// Module ID: 7591
// Function ID: 60763
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7591 (_isNativeReflectConstruct)
let FormStates;
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
function normalizeChannelPropertyForCompare(arg0, emojiId) {
  if ("topic_" === arg0) {
    let str2 = "";
    if (null != emojiId) {
      str2 = emojiId;
    }
    return str2;
  } else if ("defaultAutoArchiveDuration" === arg0) {
    let tmp22 = emojiId;
    if (null == emojiId) {
      tmp22 = closure_16;
    }
    return tmp22;
  } else if ("defaultSortOrder" === arg0) {
    let LATEST_ACTIVITY = emojiId;
    if (null == emojiId) {
      LATEST_ACTIVITY = emojiId(dependencyMap[13]).ThreadSortOrder.LATEST_ACTIVITY;
    }
    return LATEST_ACTIVITY;
  } else if ("defaultForumLayout" === arg0) {
    if (arg2 === constants2.GUILD_MEDIA) {
      return emojiId(dependencyMap[14]).ForumLayout.GRID;
    } else {
      if (null == emojiId) {
        let LIST = emojiId(dependencyMap[14]).ForumLayout.LIST;
      } else {
        LIST = emojiId;
      }
      return LIST;
    }
  } else {
    if ("rateLimitPerUser_" !== arg0) {
      if ("defaultThreadRateLimitPerUser" !== arg0) {
        if ("defaultReactionEmoji" === arg0) {
          let tmp2 = null;
          if (null != emojiId) {
            let obj = emojiId(dependencyMap[11]);
            if (obj.isCustomReactionEmojiId(emojiId.emojiId)) {
              obj = { emojiId: emojiId.emojiId };
              tmp2 = obj;
            } else {
              const emojiName = emojiId.emojiName;
              let tmp5 = null;
              if (null != emojiName) {
                tmp5 = null;
                if ("" !== emojiName) {
                  obj = { emojiName: importDefault(dependencyMap[12]).translateInlineEmojiToSurrogates(emojiName) };
                  tmp5 = obj;
                  const obj3 = importDefault(dependencyMap[12]);
                }
              }
              tmp2 = tmp5;
            }
          }
          return tmp2;
        } else {
          return emojiId;
        }
      }
    }
    let num3 = 0;
    if (null != emojiId) {
      num3 = emojiId;
    }
    return num3;
  }
}
function handleSetSection(arg0) {
  ({ section: closure_17, subsection: closure_18 } = arg0);
  let tmp = null != store2;
  if (tmp) {
    tmp = closure_17 === constants.INSTANT_INVITES;
  }
  if (tmp) {
    let closure_26 = true;
    const HTTP = arg1(dependencyMap[15]).HTTP;
    const obj = { disabled: null, accessibilityHint: null, legacyCompat_selected: null, url: closure_14.INSTANT_INVITES(store2.id) };
    const value = HTTP.get(obj);
    value.then((body) => {
      let closure_26 = false;
      let obj = callback(closure_2[16]);
      obj = { type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: body.body };
      obj.dispatch(obj);
    }, () => {
      let closure_26 = false;
      return false;
    });
  }
}
function handleSettingsClose() {
  let closure_27 = false;
  const CLOSED = FormStates.CLOSED;
  let closure_17 = null;
  let closure_19 = null;
  let closure_20 = null;
  let closure_21 = null;
  let closure_25 = {};
}
function _createInvite(code) {
  let tmp = closure_9;
  const obj = { code: code.code, temporary: code.temporary, revoked: code.revoked };
  let tmp2 = null;
  if (null != code.inviter) {
    const prototype = ctor.prototype;
    tmp2 = new ctor(code.inviter);
  }
  obj.inviter = tmp2;
  obj.channel = callback3(code.channel);
  let fromInviteGuildResult = null;
  if (null != code.guild) {
    fromInviteGuildResult = arg1(dependencyMap[18]).fromInviteGuild(code.guild);
    const obj2 = arg1(dependencyMap[18]);
  }
  obj.guild = fromInviteGuildResult;
  ({ uses: obj.uses, max_uses: obj.maxUses, max_age: obj.maxAge } = code);
  obj.createdAt = importDefault(dependencyMap[19])(code.created_at);
  ({ type: obj.type, roles: obj.roles } = code);
  tmp = new tmp(obj);
  return tmp;
}
function _syncChannelUpdate(channelId) {
  let flag = false;
  if (null != channel1) {
    flag = false;
    if (channel1.id === channelId) {
      if (channel1 === store2) {
        const channel = store.getChannel(channelId);
        flag = false;
        if (null != channel) {
          let channel1 = channel;
          let store2 = channel;
          let channel2 = store.getChannel(store2.parent_id);
          flag = true;
        }
      } else {
        channel1 = store.getChannel(channelId);
        flag = false;
        if (null != channel1) {
          flag = true;
          if (null != store2) {
            const result = store2.set("permissionOverwrites", channel1.permissionOverwrites);
            store2 = result.set("availableTags", channel1.availableTags);
            channel2 = store.getChannel(store2.parent_id);
            flag = true;
          }
        }
      }
    }
  }
  let tmp12 = !flag;
  if (flag) {
    tmp12 = null == store2;
  }
  let flag2 = !tmp12;
  if (!tmp12) {
    let tmp15 = null != guildId;
    if (tmp15) {
      tmp15 = null == store2.permissionOverwrites[closure_22];
    }
    flag2 = true;
    if (tmp15) {
      const guildId = store2.getGuildId();
      flag2 = true;
    }
  }
  return flag2;
}
function handleOverwriteUpdate(channelId) {
  return _syncChannelUpdate(channelId.channelId);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).createChannelRecordFromInvite;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
({ ChannelSettingsSections: closure_12, ChannelTypes: closure_13, Endpoints: closure_14, FormStates } = arg1(dependencyMap[9]));
let closure_16 = arg1(dependencyMap[10]).DEFAULT_AUTO_ARCHIVE_DURATION;
const CLOSED = FormStates.CLOSED;
let closure_24 = {};
let closure_25 = {};
let closure_26 = false;
let closure_27 = false;
let closure_28 = null;
let closure_29 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
const tmp2 = arg1(dependencyMap[9]);
let closure_30 = importDefault(dependencyMap[17]).debounce(() => {
  if (null != store2) {
    if (null != closure_19) {
      const toJSResult = store2.toJS();
      const arg1 = toJSResult;
      let closure_1 = closure_19.toJS();
      const dependencyMap = toJSResult.type;
      let everyResult = closure_29.every((arg0) => {
        const tmp = callback2(arg0, toJSResult[arg0], type);
        const tmp2 = callback2(arg0, callback[arg0], type);
        return callback(type[17]).isEqual(tmp, tmp2);
      });
      if (everyResult) {
        everyResult = store2 !== closure_19;
      }
      if (everyResult) {
        const store2 = closure_19;
        tmp3.emitChange();
      }
    }
  }
  return false;
}, 500);
let tmp3 = (Store) => {
  class ChannelSettingsStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ChannelSettingsStore);
      obj = closure_6(ChannelSettingsStore);
      tmp2 = closure_5;
      if (closure_32()) {
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
  const arg1 = ChannelSettingsStore;
  callback2(ChannelSettingsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_11);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "hasChanges",
    value() {
      return closure_20 !== closure_19;
    }
  };
  items[1] = obj;
  obj = {
    key: "isOpen",
    value() {
      return closure_27;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSection",
    value() {
      return closure_17;
    }
  };
  items[4] = {
    key: "getInvites",
    value() {
      return { invites: closure_25, loading: closure_26 };
    }
  };
  items[5] = {
    key: "showNotice",
    value() {
      return this.hasChanges();
    }
  };
  items[6] = {
    key: "getChannel",
    value() {
      return closure_20;
    }
  };
  items[7] = {
    key: "getFormState",
    value() {
      return closure_23;
    }
  };
  items[8] = {
    key: "getCategory",
    value() {
      return closure_21;
    }
  };
  items[9] = {
    key: "getProps",
    value() {
      return { submitting: closure_23 === constants.SUBMITTING, errors: closure_24, channel: closure_20, section: closure_17, subsection: closure_18, invites: closure_25, selectedOverwriteId: closure_22, hasChanges: this.hasChanges(), analyticsLocation: closure_28 };
    }
  };
  return callback(ChannelSettingsStore, items);
}(importDefault(dependencyMap[20]).Store);
tmp3.displayName = "ChannelSettingsStore";
tmp3 = new tmp3(importDefault(dependencyMap[16]), {
  CHANNEL_SETTINGS_INIT: function handleSettingsInit(channelId) {
    const channel = store.getChannel(channelId.channelId);
    if (null == channel) {
      handleSettingsClose();
    } else {
      const CLOSED = FormStates.OPEN;
      let store2 = channel;
      let _location = null;
      if ("location" in channelId) {
        _location = null;
        if (null != channelId.location) {
          _location = channelId.location;
        }
      }
      let closure_28 = _location;
      let subsection = null;
      if ("subsection" in channelId) {
        subsection = channelId.subsection;
      }
      if (null != store2) {
        store2 = store2.set("nsfw", store2.isNSFW());
      }
      const channel2 = store.getChannel(store2.parent_id);
      const guildId = store2.getGuildId();
      let tmp12 = store2.isModeratorReportChannel() ? tmp11.PERMISSIONS : tmp11.OVERVIEW;
      let closure_24 = {};
      const obj = { type: "CHANNEL_SETTINGS_SET_SECTION" };
      if (null != closure_17) {
        tmp12 = closure_17;
      }
      obj.section = tmp12;
      obj.subsection = subsection;
      handleSetSection(obj);
      return true;
    }
  },
  CHANNEL_SETTINGS_SUBMIT: function handleSettingsSubmit() {
    const CLOSED = FormStates.SUBMITTING;
    let closure_24 = {};
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function handleSettingsSubmitSuccess() {
    let closure_19 = closure_20;
    const CLOSED = FormStates.OPEN;
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function handleSettingsSubmitFailure(errors) {
    const arg1 = errors;
    const CLOSED = FormStates.OPEN;
    errors = errors.errors;
    if (null == errors) {
      errors = {};
    }
    const keys = Object.keys(errors);
    let closure_24 = keys.reduce((arg0, arg1) => {
      if (obj2.isArray(arg0.errors[arg1])) {
        arg0[arg1] = obj.join("\n");
      } else {
        arg0[arg1] = obj;
      }
      return arg0;
    }, {});
  },
  CHANNEL_SETTINGS_CLOSE: handleSettingsClose,
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: handleOverwriteUpdate,
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: handleOverwriteUpdate,
  CHANNEL_SETTINGS_OVERWRITE_SELECT: function handlePermissionOverwriteSelect(overwriteId) {
    overwriteId = overwriteId.overwriteId;
  },
  CHANNEL_SETTINGS_UPDATE: function handleSettingsUpdate(arg0) {
    let autoArchiveDuration;
    let availableTags;
    let bitrate;
    let channelType;
    let defaultAutoArchiveDuration;
    let defaultForumLayout;
    let defaultReactionEmoji;
    let defaultSortOrder;
    let defaultTagSetting;
    let defaultThreadRateLimitPerUser;
    let flags;
    let iconEmoji;
    let invitable;
    let locked;
    let name;
    let nsfw;
    let rateLimitPerUser;
    let rtcRegion;
    let template;
    let themeColor;
    let topic;
    let userLimit;
    let videoQualityMode;
    ({ name, channelType, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, autoArchiveDuration, locked, invitable, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor } = arg0);
    if (null == store2) {
      return false;
    } else {
      if (null != name) {
        let store2 = store2.set("name", name);
      }
      if (null != topic) {
        store2 = store2.set("topic", topic);
      }
      if (null != bitrate) {
        store2 = store2.set("bitrate", bitrate);
      }
      if (null != userLimit) {
        store2 = store2.set("userLimit", userLimit);
      }
      if (null != nsfw) {
        store2 = store2.set("nsfw", nsfw);
      }
      if (null != flags) {
        store2 = store2.set("flags", flags);
      }
      if (null != rateLimitPerUser) {
        store2 = store2.set("rateLimitPerUser", rateLimitPerUser);
      }
      if (null != defaultThreadRateLimitPerUser) {
        store2 = store2.set("defaultThreadRateLimitPerUser", defaultThreadRateLimitPerUser);
      }
      if (null != autoArchiveDuration) {
        let obj = {};
        const merged = Object.assign(store2.threadMetadata);
        obj["autoArchiveDuration"] = autoArchiveDuration;
        store2 = store2.set("threadMetadata", obj);
      }
      if (null != locked) {
        obj = {};
        const merged1 = Object.assign(store2.threadMetadata);
        obj["locked"] = locked;
        store2 = store2.set("threadMetadata", obj);
      }
      if (null != invitable) {
        obj = {};
        const merged2 = Object.assign(store2.threadMetadata);
        obj["invitable"] = invitable;
        store2 = store2.set("threadMetadata", obj);
      }
      if (null != defaultAutoArchiveDuration) {
        store2 = store2.set("defaultAutoArchiveDuration", defaultAutoArchiveDuration);
      }
      if (null != template) {
        store2 = store2.set("template", template);
      }
      if (null != channelType) {
        store2 = store2.set("type", channelType);
      }
      if (undefined !== rtcRegion) {
        store2 = store2.set("rtcRegion", rtcRegion);
      }
      if (null != videoQualityMode) {
        store2 = store2.set("videoQualityMode", videoQualityMode);
      }
      if (undefined !== defaultReactionEmoji) {
        store2 = store2.set("defaultReactionEmoji", defaultReactionEmoji);
      }
      if (null != availableTags) {
        store2 = store2.set("availableTags", availableTags);
      }
      if (null != defaultSortOrder) {
        store2 = store2.set("defaultSortOrder", defaultSortOrder);
      }
      if (null != defaultTagSetting) {
        store2 = store2.set("defaultTagSetting", defaultTagSetting);
      }
      if (null != defaultForumLayout) {
        store2 = store2.set("defaultForumLayout", defaultForumLayout);
      }
      if (undefined !== iconEmoji) {
        store2 = store2.set("iconEmoji", iconEmoji);
      }
      if (null != themeColor) {
        store2 = store2.set("themeColor", themeColor);
      }
      callback4();
    }
  },
  CHANNEL_SETTINGS_SET_SECTION: handleSetSection,
  CHANNEL_SETTINGS_LOADED_INVITES: function handleLoadedInvites(invites) {
    let closure_25 = {};
    invites = invites.invites;
    const item = invites.forEach((code) => {
      closure_25[code.code] = callback(code);
    });
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let iter3;
    if (null == closure_20) {
      return false;
    } else {
      const tmp3 = _createForOfIteratorHelperLoose(tmp);
      const iter = tmp3();
      let iter2 = iter;
      let flag = false;
      let flag2 = false;
      if (!iter.done) {
        do {
          let tmp4 = closure_39;
          let tmp5 = closure_39(iter2.value.id) || flag;
          iter3 = tmp3();
          flag = tmp5;
          iter2 = iter3;
          flag2 = tmp5;
        } while (!iter3.done);
      }
      return flag2;
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(arg0) {
    let tmp2 = null != closure_20;
    if (tmp2) {
      tmp2 = _syncChannelUpdate(tmp.id);
    }
    return tmp2;
  },
  CHANNEL_DELETE: function handleChannelDelete(arg0) {
    let tmp2 = null != store2;
    if (tmp2) {
      if (store2.id === tmp) {
        const CLOSED = FormStates.CLOSED;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function handleInviteRevoke(arg0) {
    const merged = Object.assign(closure_25);
    closure_25 = {};
    delete r1[r0];
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInviteCreateSuccess(invite) {
    const obj = {};
    const merged = Object.assign(closure_25);
    obj[invite.invite.code] = _createInvite(invite.invite);
    closure_25 = obj;
  }
});
const importDefaultResult = importDefault(dependencyMap[17]);
const obj = {
  CHANNEL_SETTINGS_INIT: function handleSettingsInit(channelId) {
    const channel = store.getChannel(channelId.channelId);
    if (null == channel) {
      handleSettingsClose();
    } else {
      const CLOSED = FormStates.OPEN;
      let store2 = channel;
      let _location = null;
      if ("location" in channelId) {
        _location = null;
        if (null != channelId.location) {
          _location = channelId.location;
        }
      }
      let closure_28 = _location;
      let subsection = null;
      if ("subsection" in channelId) {
        subsection = channelId.subsection;
      }
      if (null != store2) {
        store2 = store2.set("nsfw", store2.isNSFW());
      }
      const channel2 = store.getChannel(store2.parent_id);
      const guildId = store2.getGuildId();
      let tmp12 = store2.isModeratorReportChannel() ? tmp11.PERMISSIONS : tmp11.OVERVIEW;
      let closure_24 = {};
      const obj = { type: "CHANNEL_SETTINGS_SET_SECTION" };
      if (null != closure_17) {
        tmp12 = closure_17;
      }
      obj.section = tmp12;
      obj.subsection = subsection;
      handleSetSection(obj);
      return true;
    }
  },
  CHANNEL_SETTINGS_SUBMIT: function handleSettingsSubmit() {
    const CLOSED = FormStates.SUBMITTING;
    let closure_24 = {};
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function handleSettingsSubmitSuccess() {
    let closure_19 = closure_20;
    const CLOSED = FormStates.OPEN;
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function handleSettingsSubmitFailure(errors) {
    const arg1 = errors;
    const CLOSED = FormStates.OPEN;
    errors = errors.errors;
    if (null == errors) {
      errors = {};
    }
    const keys = Object.keys(errors);
    let closure_24 = keys.reduce((arg0, arg1) => {
      if (obj2.isArray(arg0.errors[arg1])) {
        arg0[arg1] = obj.join("\n");
      } else {
        arg0[arg1] = obj;
      }
      return arg0;
    }, {});
  },
  CHANNEL_SETTINGS_CLOSE: handleSettingsClose,
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: handleOverwriteUpdate,
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: handleOverwriteUpdate,
  CHANNEL_SETTINGS_OVERWRITE_SELECT: function handlePermissionOverwriteSelect(overwriteId) {
    overwriteId = overwriteId.overwriteId;
  },
  CHANNEL_SETTINGS_UPDATE: function handleSettingsUpdate(arg0) {
    let autoArchiveDuration;
    let availableTags;
    let bitrate;
    let channelType;
    let defaultAutoArchiveDuration;
    let defaultForumLayout;
    let defaultReactionEmoji;
    let defaultSortOrder;
    let defaultTagSetting;
    let defaultThreadRateLimitPerUser;
    let flags;
    let iconEmoji;
    let invitable;
    let locked;
    let name;
    let nsfw;
    let rateLimitPerUser;
    let rtcRegion;
    let template;
    let themeColor;
    let topic;
    let userLimit;
    let videoQualityMode;
    ({ name, channelType, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, autoArchiveDuration, locked, invitable, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor } = arg0);
    if (null == store2) {
      return false;
    } else {
      if (null != name) {
        let store2 = store2.set("name", name);
      }
      if (null != topic) {
        store2 = store2.set("topic", topic);
      }
      if (null != bitrate) {
        store2 = store2.set("bitrate", bitrate);
      }
      if (null != userLimit) {
        store2 = store2.set("userLimit", userLimit);
      }
      if (null != nsfw) {
        store2 = store2.set("nsfw", nsfw);
      }
      if (null != flags) {
        store2 = store2.set("flags", flags);
      }
      if (null != rateLimitPerUser) {
        store2 = store2.set("rateLimitPerUser", rateLimitPerUser);
      }
      if (null != defaultThreadRateLimitPerUser) {
        store2 = store2.set("defaultThreadRateLimitPerUser", defaultThreadRateLimitPerUser);
      }
      if (null != autoArchiveDuration) {
        let obj = {};
        const merged = Object.assign(store2.threadMetadata);
        obj["autoArchiveDuration"] = autoArchiveDuration;
        store2 = store2.set("threadMetadata", obj);
      }
      if (null != locked) {
        obj = {};
        const merged1 = Object.assign(store2.threadMetadata);
        obj["locked"] = locked;
        store2 = store2.set("threadMetadata", obj);
      }
      if (null != invitable) {
        obj = {};
        const merged2 = Object.assign(store2.threadMetadata);
        obj["invitable"] = invitable;
        store2 = store2.set("threadMetadata", obj);
      }
      if (null != defaultAutoArchiveDuration) {
        store2 = store2.set("defaultAutoArchiveDuration", defaultAutoArchiveDuration);
      }
      if (null != template) {
        store2 = store2.set("template", template);
      }
      if (null != channelType) {
        store2 = store2.set("type", channelType);
      }
      if (undefined !== rtcRegion) {
        store2 = store2.set("rtcRegion", rtcRegion);
      }
      if (null != videoQualityMode) {
        store2 = store2.set("videoQualityMode", videoQualityMode);
      }
      if (undefined !== defaultReactionEmoji) {
        store2 = store2.set("defaultReactionEmoji", defaultReactionEmoji);
      }
      if (null != availableTags) {
        store2 = store2.set("availableTags", availableTags);
      }
      if (null != defaultSortOrder) {
        store2 = store2.set("defaultSortOrder", defaultSortOrder);
      }
      if (null != defaultTagSetting) {
        store2 = store2.set("defaultTagSetting", defaultTagSetting);
      }
      if (null != defaultForumLayout) {
        store2 = store2.set("defaultForumLayout", defaultForumLayout);
      }
      if (undefined !== iconEmoji) {
        store2 = store2.set("iconEmoji", iconEmoji);
      }
      if (null != themeColor) {
        store2 = store2.set("themeColor", themeColor);
      }
      callback4();
    }
  },
  CHANNEL_SETTINGS_SET_SECTION: handleSetSection,
  CHANNEL_SETTINGS_LOADED_INVITES: function handleLoadedInvites(invites) {
    let closure_25 = {};
    invites = invites.invites;
    const item = invites.forEach((code) => {
      closure_25[code.code] = callback(code);
    });
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let iter3;
    if (null == closure_20) {
      return false;
    } else {
      const tmp3 = _createForOfIteratorHelperLoose(tmp);
      const iter = tmp3();
      let iter2 = iter;
      let flag = false;
      let flag2 = false;
      if (!iter.done) {
        do {
          let tmp4 = closure_39;
          let tmp5 = closure_39(iter2.value.id) || flag;
          iter3 = tmp3();
          flag = tmp5;
          iter2 = iter3;
          flag2 = tmp5;
        } while (!iter3.done);
      }
      return flag2;
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(arg0) {
    let tmp2 = null != closure_20;
    if (tmp2) {
      tmp2 = _syncChannelUpdate(tmp.id);
    }
    return tmp2;
  },
  CHANNEL_DELETE: function handleChannelDelete(arg0) {
    let tmp2 = null != store2;
    if (tmp2) {
      if (store2.id === tmp) {
        const CLOSED = FormStates.CLOSED;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function handleInviteRevoke(arg0) {
    const merged = Object.assign(closure_25);
    closure_25 = {};
    delete r1[r0];
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInviteCreateSuccess(invite) {
    const obj = {};
    const merged = Object.assign(closure_25);
    obj[invite.invite.code] = _createInvite(invite.invite);
    closure_25 = obj;
  }
};
const result = arg1(dependencyMap[21]).fileFinishedImporting("stores/ChannelSettingsStore.tsx");

export default tmp3;
