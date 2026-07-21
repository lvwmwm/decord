// Module ID: 8410
// Function ID: 66987
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8410 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUpdateStart(guildId) {
  guildId = guildId.guildId;
  const value = map.get(guildId);
  if (null == value) {
    let obj = {};
    const merged = Object.assign(obj);
    obj["isUpdating"] = true;
    const result = map.set(guildId, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(value);
    obj["isUpdating"] = true;
    const result1 = map.set(guildId, obj);
  }
}
function handleUpdateFailure(arg0) {
  let error;
  let guildId;
  ({ guildId, error } = arg0);
  const value = map.get(guildId);
  if (null == value) {
    let obj = {};
    const merged = Object.assign(obj);
    obj["error"] = error;
    const result = map.set(guildId, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(value);
    obj["error"] = error;
    obj["isUpdating"] = false;
    const result1 = map.set(guildId, obj);
  }
}
function handleInviteResolveOrCreate(invite) {
  const profile = invite.invite.profile;
  if (null != profile) {
    const value = map.get(profile.id);
    const guildProfileFromServer = arg1(dependencyMap[7]).buildGuildProfileFromServer(profile);
    if (null == value) {
      let obj = {};
      const merged = Object.assign(obj);
      obj["profile"] = guildProfileFromServer;
      const _Date2 = Date;
      obj["lastSyncTimestamp"] = Date.now();
      obj["fetchStatus"] = obj.FETCHED;
      const result = map.set(profile.id, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj["profile"] = guildProfileFromServer;
      const _Date = Date;
      obj["lastSyncTimestamp"] = Date.now();
      obj["fetchStatus"] = obj.FETCHED;
      const result1 = map.set(profile.id, obj);
    }
    const obj3 = arg1(dependencyMap[7]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const ChannelTypes = arg1(dependencyMap[5]).ChannelTypes;
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
const map = new Map();
const map1 = new Map();
obj = { flex: "<string:3611820033>", op: "<string:3338666764>", String: "<string:3321889412>", then: "<string:1342177789>", mn: "<string:2046820995>", bottom: "<string:3607102032>" };
obj.fetchStatus = obj.NOT_FETCHED;
let tmp4 = (Store) => {
  class GuildProfileStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildProfileStore);
      obj = closure_6(GuildProfileStore);
      tmp2 = closure_5;
      if (closure_13()) {
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
  const arg1 = GuildProfileStore;
  callback2(GuildProfileStore, Store);
  let obj = {
    key: "getProfile",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        const value = store.get(arg0);
        let profile;
        if (null != value) {
          profile = value.profile;
        }
        let tmp5 = null;
        if (null != profile) {
          tmp5 = profile;
        }
        tmp = tmp5;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getFetchStatus",
    value(arg0) {
      if (null == arg0) {
        let NOT_FETCHED = constants.NOT_FETCHED;
      } else {
        const value = store.get(arg0);
        NOT_FETCHED = undefined;
        if (null != value) {
          NOT_FETCHED = value.fetchStatus;
        }
        if (null == NOT_FETCHED) {
          NOT_FETCHED = constants.NOT_FETCHED;
        }
      }
      return NOT_FETCHED;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastSyncTimestamp",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        const value = store.get(arg0);
        let lastSyncTimestamp;
        if (null != value) {
          lastSyncTimestamp = value.lastSyncTimestamp;
        }
        let tmp5 = null;
        if (null != lastSyncTimestamp) {
          tmp5 = lastSyncTimestamp;
        }
        tmp = tmp5;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNextFetchAllowedAt",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        const value = store.get(arg0);
        let nextFetchAllowedAt;
        if (null != value) {
          nextFetchAllowedAt = value.nextFetchAllowedAt;
        }
        let tmp5 = null;
        if (null != nextFetchAllowedAt) {
          tmp5 = nextFetchAllowedAt;
        }
        tmp = tmp5;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getIsUpdating",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        const value = store.get(arg0);
        let isUpdating;
        if (null != value) {
          isUpdating = value.isUpdating;
        }
        tmp = null != isUpdating && isUpdating;
        const tmp5 = null != isUpdating && isUpdating;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getErrorCode",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        const value = store.get(arg0);
        let code;
        if (null != value) {
          const error = value.error;
          if (null != error) {
            code = error.code;
          }
        }
        let tmp5 = null;
        if (null != code) {
          tmp5 = code;
        }
        tmp = tmp5;
      }
      return tmp;
    }
  };
  return callback(GuildProfileStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp4.displayName = "GuildProfileStore";
obj = {
  GUILD_PROFILE_FETCH: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    const value = map.get(guildId);
    if (null == value) {
      let obj = {};
      const merged = Object.assign(obj);
      obj["fetchStatus"] = obj.FETCHING;
      const result = map.set(guildId, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj["fetchStatus"] = obj.FETCHING;
      const result1 = map.set(guildId, obj);
    }
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let guildId;
    let profile;
    ({ guildId, profile } = arg0);
    let value = map1.get(guildId);
    if (null != value) {
      value.succeed();
    }
    map1.delete(guildId);
    value = map.get(guildId);
    if (null == value) {
      let obj = {};
      const merged = Object.assign(obj);
      obj["profile"] = profile;
      const _Date2 = Date;
      obj["lastSyncTimestamp"] = Date.now();
      obj["fetchStatus"] = obj.FETCHED;
      const result = map.set(guildId, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj["profile"] = profile;
      const _Date = Date;
      obj["lastSyncTimestamp"] = Date.now();
      obj["fetchStatus"] = obj.FETCHED;
      obj["error"] = null;
      obj["nextFetchAllowedAt"] = null;
      const result1 = map.set(guildId, obj);
    }
  },
  GUILD_PROFILE_FETCH_FAILURE: function handleFetchFailure(arg0) {
    let error;
    let guildId;
    ({ guildId, error } = arg0);
    let value = map1.get(guildId);
    if (null == value) {
      let tmp3 = importDefault(dependencyMap[6]);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(5000, 300000);
      const result = map1.set(guildId, tmp3);
      value = tmp3;
    }
    const sum = Date.now() + value.fail();
    value = map.get(guildId);
    if (null == value) {
      let obj = {};
      const merged = Object.assign(obj);
      obj["error"] = error;
      obj["fetchStatus"] = obj.FETCHED;
      obj["nextFetchAllowedAt"] = sum;
      const result1 = map.set(guildId, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj["error"] = error;
      obj["fetchStatus"] = obj.FETCHED;
      obj["nextFetchAllowedAt"] = sum;
      const result2 = map.set(guildId, obj);
    }
  },
  GUILD_PROFILE_UPDATE: handleUpdateStart,
  GUILD_PROFILE_UPDATE_SUCCESS: function handleUpdateSuccess(arg0) {
    let guildId;
    let profile;
    ({ guildId, profile } = arg0);
    const value = map.get(guildId);
    if (null == value) {
      let obj = {};
      const merged = Object.assign(obj);
      obj["profile"] = profile;
      const result = map.set(guildId, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj["profile"] = profile;
      obj["isUpdating"] = false;
      const result1 = map.set(guildId, obj);
    }
  },
  GUILD_PROFILE_UPDATE_FAILURE: handleUpdateFailure,
  MEMBER_VERIFICATION_FORM_UPDATE: function handleMemberVerificationFormFetch(arg0) {
    let form;
    let guildId;
    ({ form, guildId } = arg0);
    let profile;
    if (null != form) {
      profile = form.profile;
    }
    if (null != profile) {
      const value = map.get(guildId);
      if (null == value) {
        let obj = {};
        const merged = Object.assign(obj);
        obj["profile"] = profile;
        const _Date2 = Date;
        obj["lastSyncTimestamp"] = Date.now();
        obj["fetchStatus"] = obj.FETCHED;
        const result = map.set(guildId, obj);
      } else {
        obj = {};
        const merged1 = Object.assign(value);
        obj["profile"] = profile;
        const _Date = Date;
        obj["lastSyncTimestamp"] = Date.now();
        obj["fetchStatus"] = obj.FETCHED;
        const result1 = map.set(guildId, obj);
      }
    }
  },
  INVITE_RESOLVE_SUCCESS: handleInviteResolveOrCreate,
  INSTANT_INVITE_CREATE_SUCCESS: handleInviteResolveOrCreate,
  CHANNEL_CREATE: function handleCreateChannel(channel) {
    channel = channel.channel;
    let tmp = channel.type === ChannelTypes.GUILD_ANNOUNCEMENT;
    if (tmp) {
      tmp = null != channel.guild_id;
    }
    if (tmp) {
      map.delete(channel.guild_id);
      map1.delete(channel.guild_id);
    }
  },
  GUILD_SETTINGS_SET_WIDGET: function handleSetWidget(guildId) {
    guildId = guildId.guildId;
    if (tmp) {
      map.delete(guildId);
      map1.delete(guildId);
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    let icon;
    guild = guild.guild;
    const value = map.get(guild.id);
    if (null != value) {
      if (null != value.profile) {
        let obj = {};
        const merged = Object.assign(value.profile);
        ({ name: obj2["name"], icon } = guild);
        let tmp2 = null;
        if (null != icon) {
          tmp2 = icon;
        }
        obj["icon"] = tmp2;
        const description = guild.description;
        let str2 = "";
        if (null != description) {
          str2 = description;
        }
        obj["description"] = str2;
        const discovery_splash = guild.discovery_splash;
        let tmp3 = null;
        if (null != discovery_splash) {
          tmp3 = discovery_splash;
        }
        obj["customBanner"] = tmp3;
        obj = {};
        const merged1 = Object.assign(value);
        obj["profile"] = obj;
        const result = map.set(guild.id, obj);
      }
    }
    return false;
  },
  GUILD_PROFILE_UPDATE_VISIBILITY: handleUpdateStart,
  GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function handleUpdateVisibilitySuccess(guildId) {
    guildId = guildId.guildId;
    const value = map.get(guildId);
    let profile;
    if (null != value) {
      profile = value.profile;
    }
    if (tmp3) {
      let obj = {};
      const merged = Object.assign(value);
      obj["isUpdating"] = false;
      obj = {};
      const merged1 = Object.assign(profile);
      obj["visibility"] = guildId.visibility;
      obj["profile"] = obj;
      const result = map.set(guildId, obj);
    }
  },
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: handleUpdateFailure
};
tmp4 = new tmp4(importDefault(dependencyMap[9]), obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_profile/GuildProfileStore.tsx");

export default tmp4;
export const GuildProfileFetchStatus = obj;
