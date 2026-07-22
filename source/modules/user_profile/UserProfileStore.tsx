// Module ID: 6851
// Function ID: 54117
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6851 (_isNativeReflectConstruct)
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
function createUserWidgetFromServer(data) {
  const type = data.data.type;
  if (arg1(dependencyMap[13]).WidgetType.CURRENT_GAMES !== type) {
    if (arg1(dependencyMap[13]).WidgetType.FAVORITE_GAMES !== type) {
      if (arg1(dependencyMap[13]).WidgetType.PLAYED_GAMES !== type) {
        if (arg1(dependencyMap[13]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
          if (arg1(dependencyMap[13]).WidgetType.APPLICATION === type) {
            const ApplicationWidget = arg1(dependencyMap[16]).ApplicationWidget;
            let obj = { id: data.id, applicationId: data.data.application_id };
            const prototype = ApplicationWidget.prototype;
            const applicationWidget = new ApplicationWidget(obj);
            return applicationWidget;
          }
        }
      }
    }
  }
  const games = data.data.games;
  const mapped = games.map((applicationId) => ({ applicationId: applicationId.game_id, comment: applicationId.comment, tags: applicationId.tags }));
  const obj2 = importDefault(dependencyMap[14]);
  obj = { id: data.id, type, games: importDefault(dependencyMap[14]).uniqBy(mapped, "applicationId") };
  const baseGameWidget = new arg1(dependencyMap[15]).BaseGameWidget(obj);
  return baseGameWidget;
}
function checkUserProfileCollectiblesExpiration(id, guild_id) {
  guild_id = id;
  const importDefault = guild_id;
  let tmp = null;
  if (null != guild_id) {
    let value = map2.get(id);
    value = undefined;
    if (tmp != value) {
      value = value.get(guild_id);
    }
    let value1 = value;
  } else {
    value1 = map1.get(id);
  }
  const dependencyMap = value1;
  let collectibles;
  if (tmp != value1) {
    collectibles = value1.collectibles;
  }
  if (tmp != collectibles) {
    const items = [];
    let closure_3 = items;
    const collectibles1 = value1.collectibles;
    const item = collectibles1.forEach((expiresAt) => {
      if (null != expiresAt.expiresAt) {
        expiresAt = expiresAt.expiresAt;
        const _Date = Date;
        const time = expiresAt.getTime();
        const diff = time - Date.now();
        if (diff <= 0) {
          items.push(expiresAt);
        } else {
          if (null == closure_20[closure_0]) {
            const obj = {};
            obj[closure_15] = {};
            closure_20[expiresAt] = obj;
          }
          if (null != closure_20[closure_0][null != closure_1 ? closure_1 : closure_15]) {
            if (null != closure_20[closure_0][null != closure_1 ? closure_1 : closure_15][expiresAt.skuId]) {
              const _Math = Math;
              closure_20[closure_0][null != closure_1 ? closure_1 : closure_15][expiresAt.skuId].start(Math.min(closure_14, diff), () => {
                callback(closure_0, closure_1);
              });
              const obj2 = closure_20[closure_0][null != closure_1 ? closure_1 : closure_15][expiresAt.skuId];
            } else {
              let skuId = closure_20[closure_0];
              skuId = expiresAt.skuId;
              const Timeout = expiresAt(value1[17]).Timeout;
              const prototype = Timeout.prototype;
              const timeout = new Timeout();
              skuId[null != closure_1 ? closure_1 : closure_15][skuId] = timeout;
            }
          } else {
            closure_20[closure_0][null != arg1 ? arg1 : closure_15] = {};
          }
        }
      }
    });
    if (0 !== items.length) {
      const collectibles2 = value1.collectibles;
      value1.collectibles = collectibles2.filter((arg0) => !items.includes(arg0));
      const item1 = items.forEach((type) => {
        if (type.type === type(value1[18]).CollectiblesItemType.PROFILE_EFFECT) {
          value1.profileEffect = undefined;
        } else if (type.type === type(value1[18]).CollectiblesItemType.PROFILE_FRAME) {
          value1.profileFrame = undefined;
        }
        if (null == closure_20[closure_0]) {
          if (!tmp6) {
            const skuId = type.skuId;
            delete r2[r1];
          }
        }
      });
      if ("guildId" in value1) {
        const value2 = map2.get(id);
        if (tmp != value2) {
          const result = value2.set(value1.guildId, value1);
        }
      } else {
        const result1 = map1.set(id, value1);
      }
      tmp = tmp10;
      tmp10.emitChange();
    }
  }
}
function handleLogout() {
  map.clear();
  set.clear();
  map1.clear();
  map2.clear();
  map3.clear();
  map4.clear();
  map5.clear();
  let closure_26 = false;
}
function handleMutualFriendsFetchStart(userId) {
  set.add(userId.userId);
}
function handleMutualFriendsFetchFailure(userId) {
  set.delete(userId.userId);
}
function getMutualFriends(id) {
  const mapped = importDefault(dependencyMap[14])(id).map((id) => {
    let obj = { key: id.id };
    obj = {};
    const merged = Object.assign(id);
    obj["collectibles"] = callback(closure_2[19]).parseServerUserCollectibles(id.collectibles);
    const obj3 = callback(closure_2[19]);
    obj.user = new closure_9(obj);
    obj.status = status.getStatus(id.id);
    return obj;
  });
  const arr = importDefault(dependencyMap[14])(id);
  return mapped.sortBy((user) => user.user.username.toLowerCase()).value();
}
function handleMutualFriendsFetchSuccess(userId) {
  set.delete(userId.userId);
  const result = map3.set(userId.userId, getMutualFriends(userId.mutualFriends));
  const result1 = map4.set(userId.userId, userId.mutualFriends.length);
}
function handleProfileFetch(arg0) {
  let fetchStartedAt;
  let guildId;
  let userProfile;
  ({ userProfile, fetchStartedAt, guildId } = arg0);
  let callback;
  let importDefault;
  let dependencyMap;
  if (null == guildId) {
    const guild_member_profile = userProfile.guild_member_profile;
    let guild_id;
    if (null != guild_member_profile) {
      guild_id = guild_member_profile.guild_id;
    }
    guildId = guild_id;
  }
  if (null == guildId) {
    guildId = closure_15;
  }
  let value = map.get(userProfile.user.id);
  if (null != value) {
    value.delete(guildId);
  }
  set.delete(userProfile.user.id);
  if (null != userProfile.mutual_guilds) {
    callback = {};
    const mutual_guilds = userProfile.mutual_guilds;
    const item = mutual_guilds.forEach((id) => {
      id = id.id;
      const guild = guild.getGuild(id);
      if (null != guild) {
        const obj = { guild, nick: id.nick };
        closure_0[id] = obj;
      }
    });
    const flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const found = flattenedGuildIds.filter((arg0) => null != closure_0[arg0]);
    const result = map5.set(userProfile.user.id, found.map((arg0) => ({ guild: closure_0[arg0].guild, nick: closure_0[arg0].nick })));
  }
  if (null != userProfile.mutual_friends_count) {
    const mutual_friends_count = userProfile.mutual_friends_count;
    const result1 = map4.set(userProfile.user.id, mutual_friends_count);
    if (0 === mutual_friends_count) {
      const result2 = map3.set(userProfile.user.id, closure_24);
    }
  }
  if (null != userProfile.mutual_friends) {
    const result3 = map3.set(userProfile.user.id, getMutualFriends(userProfile.mutual_friends));
    const result4 = map4.set(userProfile.user.id, userProfile.mutual_friends.length);
  }
  let date = null;
  if (null != userProfile.premium_since) {
    const _Date = Date;
    date = new Date(userProfile.premium_since);
  }
  importDefault = date;
  let date1 = null;
  if (null != userProfile.premium_guild_since) {
    const _Date2 = Date;
    date1 = new Date(userProfile.premium_guild_since);
  }
  dependencyMap = date1;
  const application = userProfile.application;
  if (null != userProfile.badges) {
    const badges = userProfile.badges;
    let mapped = badges.map((id) => {
      let obj = callback(date1[20]);
      const tieredTenureBadgeData = obj.getTieredTenureBadgeData(id.id);
      if ("premium" === id.id) {
        if (null != date) {
          const intl2 = callback(date1[21]).intl;
          obj = { date };
          let formatToPlainStringResult = intl2.formatToPlainString(callback(date1[21]).t.8zbGNR, obj);
          if (null != tieredTenureBadgeData) {
            const intl3 = callback(date1[21]).intl;
            obj = { date };
            formatToPlainStringResult = intl3.formatToPlainString(callback(date1[21]).t.Hu4jfi, obj);
          }
          const obj1 = {};
          const merged = Object.assign(id);
          obj1["description"] = formatToPlainStringResult;
          return obj1;
        }
      }
      id = id.id;
      let tmp5 = id;
      if (id.startsWith("guild_booster_lvl")) {
        tmp5 = id;
        if (null != date1) {
          const obj2 = {};
          const merged1 = Object.assign(id);
          const intl = callback(date1[21]).intl;
          const obj3 = { date: date1 };
          obj2["description"] = intl.formatToPlainString(callback(date1[21]).t.IWkAq7, obj3);
          tmp5 = obj2;
        }
      }
      return tmp5;
    });
  } else {
    mapped = [];
  }
  let tmp26 = null != _null;
  if (tmp26) {
    tmp26 = _null.userId === userProfile.user.id;
  }
  if (tmp26) {
    const _Date3 = Date;
    if (Date.now() > _null.expiresAtMs) {
      const _null = null;
    } else {
      mergePinnedBadges(mapped, _null);
    }
  }
  const timestamp = Date.now();
  let obj = {};
  const merged = Object.assign(importDefault(dependencyMap[22])(userProfile.user_profile));
  obj["userId"] = userProfile.user.id;
  const user_profile = userProfile.user_profile;
  let banner;
  if (null != user_profile) {
    banner = user_profile.banner;
  }
  obj["banner"] = banner;
  const user_profile2 = userProfile.user_profile;
  let accent_color;
  if (null != user_profile2) {
    accent_color = user_profile2.accent_color;
  }
  obj["accentColor"] = accent_color;
  const user_profile3 = userProfile.user_profile;
  let theme_colors;
  if (null != user_profile3) {
    theme_colors = user_profile3.theme_colors;
  }
  obj["themeColors"] = theme_colors;
  const user_profile4 = userProfile.user_profile;
  let prop;
  if (null != user_profile4) {
    prop = user_profile4.popout_animation_particle_type;
  }
  obj["popoutAnimationParticleType"] = prop;
  const user_profile5 = userProfile.user_profile;
  let bio;
  if (null != user_profile5) {
    bio = user_profile5.bio;
  }
  let str = "";
  let str2 = "";
  if (null != bio) {
    str2 = bio;
  }
  obj["bio"] = str2;
  const user_profile6 = userProfile.user_profile;
  let pronouns;
  if (null != user_profile6) {
    pronouns = user_profile6.pronouns;
  }
  if (null != pronouns) {
    str = pronouns;
  }
  obj["pronouns"] = str;
  const connected_accounts = userProfile.connected_accounts;
  let found1 = connected_accounts.filter((type) => date(date1[23]).isSupported(type.type));
  if (null == found1) {
    found1 = [];
  }
  obj["connectedAccounts"] = found1;
  let prop1 = userProfile.application_role_connections;
  if (null == prop1) {
    prop1 = [];
  }
  obj["applicationRoleConnections"] = prop1;
  obj["premiumSince"] = date;
  obj["premiumType"] = userProfile.premium_type;
  obj["premiumGuildSince"] = date1;
  obj["fetchStartedAt"] = fetchStartedAt;
  obj["fetchEndedAt"] = timestamp;
  obj["legacyUsername"] = userProfile.legacy_username;
  let tmp42 = null;
  if (null != application) {
    obj = {};
    ({ id: obj3.id, primary_sku_id: obj3.primarySkuId, custom_install_url: obj3.customInstallUrl, install_params: obj3.installParams, integration_types_config: obj3.integrationTypesConfig, flags: obj3.flags, popular_application_command_ids: obj3.popularApplicationCommandIds, storefront_available: obj3.storefront_available, name: obj3.name, terms_of_service_url: obj3.termsOfServiceUrl, privacy_policy_url: obj3.privacyPolicyUrl } = application);
    tmp42 = obj;
  }
  obj["application"] = tmp42;
  obj["badges"] = mapped;
  const widgets = userProfile.widgets;
  let found2;
  if (null != widgets) {
    const mapped1 = widgets.map(createUserWidgetFromServer);
    found2 = mapped1.filter(callback(dependencyMap[24]).isNotNullish);
  }
  obj["widgets"] = found2;
  obj["wishlistSettings"] = userProfile.wishlist_settings;
  obj["private"] = userProfile.private;
  const result5 = map1.set(userProfile.user.id, obj);
  checkUserProfileCollectiblesExpiration(userProfile.user.id);
  if (null != userProfile.guild_member_profile) {
    const obj1 = {};
    const merged1 = Object.assign(importDefault(dependencyMap[22])(userProfile.guild_member_profile));
    obj1["userId"] = userProfile.user.id;
    obj1["guildId"] = userProfile.guild_member_profile.guild_id;
    obj1["banner"] = userProfile.guild_member_profile.banner;
    obj1["accentColor"] = userProfile.guild_member_profile.accent_color;
    const guild_member_profile3 = userProfile.guild_member_profile;
    let theme_colors1;
    if (null != guild_member_profile3) {
      theme_colors1 = guild_member_profile3.theme_colors;
    }
    obj1["themeColors"] = theme_colors1;
    const guild_member_profile2 = userProfile.guild_member_profile;
    let prop2;
    if (null != guild_member_profile2) {
      prop2 = guild_member_profile2.popout_animation_particle_type;
    }
    obj1["popoutAnimationParticleType"] = prop2;
    obj1["bio"] = userProfile.guild_member_profile.bio;
    obj1["pronouns"] = userProfile.guild_member_profile.pronouns;
    obj1["badges"] = userProfile.guild_badges;
    obj1["fetchStartedAt"] = fetchStartedAt;
    obj1["fetchEndedAt"] = timestamp;
    value = map2.get(userProfile.user.id);
    if (null != value) {
      const result6 = value.set(userProfile.guild_member_profile.guild_id, obj1);
    } else {
      const _Map = Map;
      const map = new Map();
      const result7 = map.set(userProfile.guild_member_profile.guild_id, obj1);
      const result8 = map2.set(userProfile.user.id, map);
    }
    userProfile = checkUserProfileCollectiblesExpiration(userProfile.user.id, userProfile.guild_member_profile.guild_id);
  }
}
function mergePinnedBadges(badges, closure_27) {
  if (null != badges) {
    const _Set = Set;
    const set = new Set(badges.map((id) => id.id));
    closure_27 = set;
    let found;
    if (null != closure_27) {
      badges = closure_27.badges;
      found = badges.filter((id) => !set.has(id.id));
    }
    if (found.length > 0) {
      const push = badges.push;
      const items = [];
      HermesBuiltin.arraySpread(found, 0);
      HermesBuiltin.apply(items, badges);
    }
    return badges;
  }
}
function handleProfileFetchStart(withMutualFriends) {
  let guildId;
  let userId;
  ({ userId, guildId } = withMutualFriends);
  if (null == guildId) {
    guildId = closure_15;
  }
  const value = map.get(userId);
  if (null != value) {
    value.add(guildId);
  } else {
    const _Set = Set;
    const set = new Set();
    set.add(guildId);
    const result = map.set(userId, set);
  }
  if (withMutualFriends.withMutualFriends) {
    set.add(userId);
  }
}
function handleProfileFetchFailure(arg0) {
  let apiError;
  let fetchStartedAt;
  let guildId;
  let userId;
  ({ userId, guildId, apiError, fetchStartedAt } = arg0);
  let value = map.get(userId);
  if (null != value) {
    let tmp = guildId;
    if (null == guildId) {
      tmp = closure_15;
    }
    value.delete(tmp);
  }
  set.delete(userId);
  value = map1.get(userId);
  if (null == value) {
    const obj = { connectedAccounts: [], applicationRoleConnections: [], userId, fetchError: undefined };
    value = obj;
  }
  const timestamp = Date.now();
  value.fetchStartedAt = fetchStartedAt;
  value.fetchEndedAt = timestamp;
  value.fetchError = apiError;
  const result = map1.set(userId, value);
  if (null != guildId) {
    const value1 = map2.get(userId);
    let value2;
    if (null != value1) {
      value2 = value1.get(guildId);
    }
    if (null != value2) {
      value2.fetchStartedAt = fetchStartedAt;
      value2.fetchEndedAt = timestamp;
      value2.fetchError = apiError;
    }
  }
  let status;
  if (null != apiError) {
    status = apiError.status;
  }
  if (404 === status) {
    const result1 = map4.set(userId, 0);
    const result2 = map3.set(userId, closure_24);
    const result3 = map5.set(userId, closure_25);
  }
}
function handleProfileUpdateStart() {
  let closure_26 = true;
}
function handleProfileUpdateSuccess(guild_id) {
  let accent_color;
  let accent_color2;
  let banner;
  let banner2;
  let bio;
  let bio2;
  let collectibles;
  let collectibles2;
  let popout_animation_particle_type;
  let popout_animation_particle_type2;
  let pronouns;
  let pronouns2;
  let theme_colors;
  let theme_colors2;
  let userId;
  let closure_26 = false;
  if (null != guild_id.guild_id) {
    ({ userId, guild_id } = guild_id);
    ({ accent_color, banner, bio, pronouns, popout_animation_particle_type, theme_colors, collectibles } = guild_id);
    let value = map2.get(userId);
    if (null != guild_id) {
      if (null != value) {
        value = value.get(guild_id);
        if (null != value) {
          let obj = {};
          const merged = Object.assign(value);
          obj = { collectibles };
          const merged1 = Object.assign(importDefault(dependencyMap[22])(obj));
          obj["accentColor"] = accent_color;
          obj["banner"] = banner;
          obj["bio"] = bio;
          obj["pronouns"] = pronouns;
          obj["popoutAnimationParticleType"] = popout_animation_particle_type;
          obj["themeColors"] = theme_colors;
          const result = value.set(guild_id, obj);
          checkUserProfileCollectiblesExpiration(userId, guild_id);
        }
      }
    }
  } else {
    const userId2 = guild_id.userId;
    ({ accent_color: accent_color2, banner: banner2, bio: bio2, pronouns: pronouns2, popout_animation_particle_type: popout_animation_particle_type2, theme_colors: theme_colors2, collectibles: collectibles2 } = guild_id);
    const value1 = map1.get(userId2);
    if (null != value1) {
      const obj1 = {};
      const merged2 = Object.assign(value1);
      const obj2 = { collectibles: collectibles2 };
      const merged3 = Object.assign(importDefault(dependencyMap[22])(obj2));
      obj1["accentColor"] = accent_color2;
      obj1["banner"] = banner2;
      obj1["bio"] = bio2;
      obj1["pronouns"] = pronouns2;
      obj1["popoutAnimationParticleType"] = popout_animation_particle_type2;
      obj1["themeColors"] = theme_colors2;
      const result1 = map1.set(userId2, obj1);
      checkUserProfileCollectiblesExpiration(userId2);
    }
  }
}
function handleProfileUpdateFailure() {
  let closure_26 = false;
}
function handleWidgetsUpdateSuccess(arg0) {
  let userId;
  let widgets;
  ({ userId, widgets } = arg0);
  const value = map1.get(userId);
  if (null == value) {
    return false;
  } else {
    const obj = {};
    const merged = Object.assign(value);
    const mapped = widgets.map(createUserWidgetFromServer);
    obj["widgets"] = mapped.filter(arg1(dependencyMap[24]).isNotNullish);
    const result = map1.set(userId, obj);
  }
}
function handlePinBadgesToProfile(badges) {
  const userId = badges.userId;
  let obj = { userId, badges: badges.badges, expiresAtMs: Date.now() + 1000 * badges.ttlInSeconds };
  let closure_27 = obj;
  const value = map1.get(userId);
  if (null != value) {
    badges = value.badges;
    if (null == badges) {
      badges = [];
    }
    mergePinnedBadges(badges, closure_27);
    obj = {};
    const merged = Object.assign(value);
    obj["badges"] = badges;
    const result = map1.set(userId, obj);
  }
}
function handleUserUpdate(user) {
  const id = user.user.id;
  const value = map.get(id);
  let size;
  if (null != value) {
    size = value.size;
  }
  let num = 0;
  if (null != size) {
    num = size;
  }
  let tmp4 = !tmp3;
  if (num <= 0) {
    tmp4 = resetProfileFetch(id);
  }
  return tmp4;
}
function handleGuildStatusChange() {
  const items = [...closure_18.keys()];
  return items.reduce((arg0, arg1) => callback(arg1) || arg0, false);
}
function handleGuildMemberStatusChange(user) {
  return resetProfileFetch(user.user.id);
}
function handleRelationshipStatusChange(relationship) {
  return resetProfileFetch(relationship.relationship.id);
}
function handleLocaleStoreChange() {
  map.clear();
  set.clear();
  map1.clear();
  map2.clear();
}
function resetProfileFetch(id) {
  let done;
  if (null == id) {
    return false;
  } else {
    let value = map1.get(id);
    if (null == value) {
      return false;
    } else {
      value.fetchStartedAt = 0;
      value.fetchEndedAt = 0;
      value.fetchError = undefined;
      value = map2.get(id);
      if (null != value) {
        const tmp3 = _createForOfIteratorHelperLoose(value.values());
        let iter = tmp3();
        if (!iter.done) {
          do {
            value = iter.value;
            value.fetchStartedAt = 0;
            value.fetchEndedAt = 0;
            value.fetchError = undefined;
            let iter2 = tmp3();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      }
    }
  }
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
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
const MAX_TIMEOUT_MS = arg1(dependencyMap[12]).MAX_TIMEOUT_MS;
let closure_15 = Symbol("NO GUILD ID");
const map = new Map();
const set = new Set();
const map1 = new Map();
const map2 = new Map();
let closure_20 = {};
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
let closure_24 = [];
let closure_25 = [];
let closure_26 = false;
let closure_27 = null;
let tmp10 = (importDefaultResult) => {
  class UserProfileStore {
    constructor() {
      self = this;
      tmp = closure_3(this, UserProfileStore);
      obj = {
        CACHE_LOADED_LAZY() {
              return tmp2Result.loadCache();
            },
        USER_PROFILE_FETCH_START: closure_41,
        USER_PROFILE_FETCH_FAILURE: closure_42,
        USER_PROFILE_FETCH_SUCCESS: closure_39,
        USER_PROFILE_UPDATE_START: closure_43,
        USER_PROFILE_UPDATE_SUCCESS: closure_44,
        USER_PROFILE_UPDATE_FAILURE: closure_45,
        WIDGET_PENDING_SAVE_SUCCESS: closure_46,
        USER_PROFILE_PIN_BADGES_ON_CLIENT: closure_47,
        MUTUAL_FRIENDS_FETCH_START: closure_35,
        MUTUAL_FRIENDS_FETCH_SUCCESS: closure_38,
        MUTUAL_FRIENDS_FETCH_FAILURE: closure_36,
        USER_UPDATE: closure_48,
        GUILD_MEMBER_UPDATE: closure_48,
        GUILD_JOIN: closure_49,
        GUILD_DELETE: closure_49,
        INVITE_ACCEPT_SUCCESS: closure_49,
        GUILD_MEMBER_ADD: closure_50,
        GUILD_MEMBER_REMOVE: closure_50,
        RELATIONSHIP_ADD: closure_51,
        RELATIONSHIP_REMOVE: closure_51,
        RELATIONSHIP_UPDATE: closure_51,
        LOGOUT: closure_34
      };
      items = [];
      items[0] = obj;
      obj2 = closure_6(UserProfileStore);
      tmp2 = closure_5;
      if (closure_29()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, items, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      UserProfileStore = tmp2Result;
      tmp2Result.loadCache = () => {
        const snapshot = tmp2Result.readSnapshot(tmp2Result.LATEST_SNAPSHOT_VERSION);
        if (null != snapshot) {
          const item = snapshot.forEach((arg0) => {
            let profile;
            let userId;
            ({ userId, profile } = arg0);
            if (null != userId) {
              if (null != profile) {
                const result = map.set(userId, profile);
              } else {
                map.delete(userId);
              }
            }
          });
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = UserProfileStore;
  callback3(UserProfileStore, importDefaultResult);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_13);
      const items = [closure_8];
      this.syncWith(items, closure_52);
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "isFetchingProfile",
    value(arg0, arg1) {
      let tmp = arg1;
      const value = closure_16.get(arg0);
      let hasItem = null != value;
      if (hasItem) {
        if (null == tmp) {
          tmp = closure_15;
        }
        hasItem = value.has(tmp);
      }
      return hasItem;
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetchingFriends",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSubmitting",
    get() {
      return closure_26;
    }
  };
  items[4] = {
    key: "getUserProfile",
    value(arg0) {
      return store.get(arg0);
    }
  };
  items[5] = {
    key: "getGuildMemberProfile",
    value(arg0, arg1) {
      let tmp = null;
      if (null != arg1) {
        let value = closure_19.get(arg0);
        value = undefined;
        if (null != value) {
          value = value.get(arg1);
        }
        let tmp5 = null;
        if (null != value) {
          tmp5 = value;
        }
        tmp = tmp5;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getMutualFriends",
    value(arg0) {
      return closure_21.get(arg0);
    }
  };
  items[7] = {
    key: "getMutualFriendsCount",
    value(arg0) {
      return closure_22.get(arg0);
    }
  };
  items[8] = {
    key: "getMutualGuilds",
    value(arg0) {
      return closure_23.get(arg0);
    }
  };
  items[9] = {
    key: "getWidgets",
    value(arg0) {
      const value = store.get(arg0);
      let widgets;
      if (null != value) {
        widgets = value.widgets;
      }
      return widgets;
    }
  };
  items[10] = {
    key: "getWishlistIds",
    value(arg0) {
      const value = store.get(arg0);
      let wishlistSettings;
      if (null != value) {
        wishlistSettings = value.wishlistSettings;
      }
      if (null != wishlistSettings) {
        const _Object = Object;
        let keys = Object.keys(value.wishlistSettings);
      } else {
        keys = [];
      }
      return keys;
    }
  };
  items[11] = {
    key: "getFirstWishlistId",
    value(arg0) {
      const self = this;
      if (null == arg0) {
        return null;
      } else {
        const wishlistIds = self.getWishlistIds(arg0);
        let first = null;
        if (wishlistIds.length > 0) {
          first = wishlistIds[0];
        }
        return first;
      }
    }
  };
  items[12] = {
    key: "getWishlistSettings",
    value(arg0, arg1) {
      const value = store.get(arg0);
      let tmp2;
      if (null != value) {
        const wishlistSettings = value.wishlistSettings;
        if (null != wishlistSettings) {
          tmp2 = wishlistSettings[arg1];
        }
      }
      let tmp4 = null;
      if (null != tmp2) {
        tmp4 = tmp2;
      }
      return tmp4;
    }
  };
  items[13] = {
    key: "takeSnapshot",
    value() {
      const id = id.getId();
      const value = store.get(id);
      if (null != value) {
        let obj = { version: UserProfileStore.LATEST_SNAPSHOT_VERSION };
        obj = { userId: id, profile: value };
        const items = [obj];
        obj.data = items;
      } else {
        obj = { version: UserProfileStore.LATEST_SNAPSHOT_VERSION, data: [] };
      }
      return obj;
    }
  };
  return callback2(UserProfileStore, items);
}(importDefault(dependencyMap[9]));
tmp10.displayName = "UserProfileStore";
tmp10.LATEST_SNAPSHOT_VERSION = 1;
tmp10 = new tmp10();
const importDefaultResult = importDefault(dependencyMap[9]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/user_profile/UserProfileStore.tsx");

export default tmp10;
