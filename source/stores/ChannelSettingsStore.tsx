// Module ID: 7686
// Function ID: 61096
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1352, 7544, 1857, 1348, 653, 1211, 3769, 3771, 1357, 1358, 507, 686, 22, 1387, 3712, 566, 2]

// Module 7686 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import apply from "apply";
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields";
import { createChannelRecordFromInvite as closure_8 } from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { DEFAULT_AUTO_ARCHIVE_DURATION as closure_16 } from "AbortCodes";
import importDefaultResult from "apply";

let FormStates;
let closure_12;
let closure_13;
let closure_14;
let require = arg1;
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
      LATEST_ACTIVITY = require(1357) /* set */.ThreadSortOrder.LATEST_ACTIVITY;
    }
    return LATEST_ACTIVITY;
  } else if ("defaultForumLayout" === arg0) {
    if (arg2 === constants2.GUILD_MEDIA) {
      return require(1358) /* set */.ForumLayout.GRID;
    } else {
      if (null == emojiId) {
        let LIST = require(1358) /* set */.ForumLayout.LIST;
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
            let obj = require(3769) /* getReactionEmojiName */;
            if (obj.isCustomReactionEmojiId(emojiId.emojiId)) {
              obj = { emojiId: emojiId.emojiId };
              tmp2 = obj;
            } else {
              const emojiName = emojiId.emojiName;
              let tmp5 = null;
              if (null != emojiName) {
                tmp5 = null;
                if ("" !== emojiName) {
                  obj = { emojiName: importDefault(3771).translateInlineEmojiToSurrogates(emojiName) };
                  tmp5 = obj;
                  const obj3 = importDefault(3771);
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
  let closure_17;
  let closure_18;
  ({ section: closure_17, subsection: closure_18 } = arg0);
  let tmp = null != store2;
  if (tmp) {
    tmp = closure_17 === constants.INSTANT_INVITES;
  }
  if (tmp) {
    let c26 = true;
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: closure_14.INSTANT_INVITES(store2.id), oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((body) => {
      let c26 = false;
      let obj = outer1_1(outer1_2[16]);
      obj = { type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: body.body };
      obj.dispatch(obj);
    }, () => {
      let c26 = false;
      return false;
    });
  }
}
function handleSettingsClose() {
  let c27 = false;
  const CLOSED = FormStates.CLOSED;
  let c17 = null;
  let c19 = null;
  let c20 = null;
  let c21 = null;
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
    fromInviteGuildResult = require(1387) /* fromGuildPropertiesWithAdditionalFields */.fromInviteGuild(code.guild);
    const obj2 = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
  }
  obj.guild = fromInviteGuildResult;
  ({ uses: obj.uses, max_uses: obj.maxUses, max_age: obj.maxAge } = code);
  obj.createdAt = importDefault(3712)(code.created_at);
  ({ type: obj.type, roles: obj.roles } = code);
  tmp = new tmp(obj);
  return tmp;
}
function _syncChannelUpdate(id) {
  let flag = false;
  if (null != channel1) {
    flag = false;
    if (channel1.id === id) {
      if (channel1 === store2) {
        const channel = store.getChannel(id);
        flag = false;
        if (null != channel) {
          channel1 = channel;
          store2 = channel;
          let channel2 = store.getChannel(store2.parent_id);
          flag = true;
        }
      } else {
        channel1 = store.getChannel(id);
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
      tmp15 = null == store2.permissionOverwrites[guildId];
    }
    flag2 = true;
    if (tmp15) {
      guildId = store2.getGuildId();
      flag2 = true;
    }
  }
  return flag2;
}
function handleOverwriteUpdate(channelId) {
  return _syncChannelUpdate(channelId.channelId);
}
({ ChannelSettingsSections: closure_12, ChannelTypes: closure_13, Endpoints: closure_14, FormStates } = ME);
let CLOSED = FormStates.CLOSED;
let closure_24 = {};
let closure_25 = {};
let c26 = false;
let c27 = false;
let c28 = null;
let closure_29 = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "defaultTagSetting", "iconEmoji", "themeColor"];
let closure_30 = require("apply").debounce(() => {
  if (null != store2) {
    if (null != closure_19) {
      const toJSResult = store2.toJS();
      const require = toJSResult;
      let closure_1 = closure_19.toJS();
      const type = toJSResult.type;
      let everyResult = closure_29.every((arg0) => {
        const tmp = outer1_35(arg0, toJSResult[arg0], type);
        const tmp2 = outer1_35(arg0, dependencyMap[arg0], type);
        return dependencyMap(type[17]).isEqual(tmp, tmp2);
      });
      if (everyResult) {
        everyResult = store2 !== closure_19;
      }
      if (everyResult) {
        store2 = closure_19;
        tmp3.emitChange();
      }
    }
  }
  return false;
}, 500);
let tmp3 = ((Store) => {
  class ChannelSettingsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ChannelSettingsStore);
      obj = outer1_6(ChannelSettingsStore);
      tmp2 = outer1_5;
      if (outer1_32()) {
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
  callback2(ChannelSettingsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "hasChanges",
    value() {
      return outer1_20 !== outer1_19;
    }
  };
  items[1] = obj;
  obj = {
    key: "isOpen",
    value() {
      return outer1_27;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSection",
    value() {
      return outer1_17;
    }
  };
  items[4] = {
    key: "getInvites",
    value() {
      return { invites: outer1_25, loading: outer1_26 };
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
      return outer1_20;
    }
  };
  items[7] = {
    key: "getFormState",
    value() {
      return outer1_23;
    }
  };
  items[8] = {
    key: "getCategory",
    value() {
      return outer1_21;
    }
  };
  items[9] = {
    key: "getProps",
    value() {
      return { submitting: outer1_23 === outer1_15.SUBMITTING, errors: outer1_24, channel: outer1_20, section: outer1_17, subsection: outer1_18, invites: outer1_25, selectedOverwriteId: outer1_22, hasChanges: this.hasChanges(), analyticsLocation: outer1_28 };
    }
  };
  return callback(ChannelSettingsStore, items);
})(require("initialize").Store);
tmp3.displayName = "ChannelSettingsStore";
tmp3 = new tmp3(require("dispatcher"), {
  CHANNEL_SETTINGS_INIT: function handleSettingsInit(channelId) {
    const channel = store.getChannel(channelId.channelId);
    if (null == channel) {
      handleSettingsClose();
    } else {
      const OPEN = FormStates.OPEN;
      let store2 = channel;
      let _location = null;
      if ("location" in channelId) {
        _location = null;
        if (null != channelId.location) {
          _location = channelId.location;
        }
      }
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
    const SUBMITTING = FormStates.SUBMITTING;
    let closure_24 = {};
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function handleSettingsSubmitSuccess() {
    let closure_19 = closure_20;
    const OPEN = FormStates.OPEN;
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function handleSettingsSubmitFailure(errors) {
    let closure_0 = errors;
    const OPEN = FormStates.OPEN;
    errors = errors.errors;
    if (null == errors) {
      errors = {};
    }
    const keys = Object.keys(errors);
    let closure_24 = keys.reduce((arg0, arg1) => {
      if (obj2.isArray(errors.errors[arg1])) {
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
        store2 = store2.set("name", name);
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
      closure_25[code.code] = outer1_38(code);
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
          let tmp4 = _syncChannelUpdate;
          let tmp5 = _syncChannelUpdate(iter2.value.id) || flag;
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
    const obj = {};
    const merged = Object.assign(obj);
    delete tmp2[tmp];
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInviteCreateSuccess(invite) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[invite.invite.code] = _createInvite(invite.invite);
  }
});
let closure_31 = tmp3;
let obj = {
  CHANNEL_SETTINGS_INIT: function handleSettingsInit(channelId) {
    const channel = store.getChannel(channelId.channelId);
    if (null == channel) {
      handleSettingsClose();
    } else {
      const OPEN = FormStates.OPEN;
      let store2 = channel;
      let _location = null;
      if ("location" in channelId) {
        _location = null;
        if (null != channelId.location) {
          _location = channelId.location;
        }
      }
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
    const SUBMITTING = FormStates.SUBMITTING;
    let closure_24 = {};
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function handleSettingsSubmitSuccess() {
    let closure_19 = closure_20;
    const OPEN = FormStates.OPEN;
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function handleSettingsSubmitFailure(errors) {
    let closure_0 = errors;
    const OPEN = FormStates.OPEN;
    errors = errors.errors;
    if (null == errors) {
      errors = {};
    }
    const keys = Object.keys(errors);
    let closure_24 = keys.reduce((arg0, arg1) => {
      if (obj2.isArray(errors.errors[arg1])) {
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
        store2 = store2.set("name", name);
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
      closure_25[code.code] = outer1_38(code);
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
          let tmp4 = _syncChannelUpdate;
          let tmp5 = _syncChannelUpdate(iter2.value.id) || flag;
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
    const obj = {};
    const merged = Object.assign(obj);
    delete tmp2[tmp];
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInviteCreateSuccess(invite) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[invite.invite.code] = _createInvite(invite.invite);
  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ChannelSettingsStore.tsx");

export default tmp3;
