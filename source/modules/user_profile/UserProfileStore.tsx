// Module ID: 6856
// Function ID: 54149
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1921, 1857, 1194, 1838, 1196, 4217, 4970, 653, 6857, 22, 6858, 6876, 4015, 1876, 1829, 6877, 1212, 6878, 4814, 1327, 2]

// Module 6856 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import items from "items";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import CollectiblesItemType from "CollectiblesItemType";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { MAX_TIMEOUT_MS } from "ME";
import tmp10 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

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
function createUserWidgetFromServer(data) {
  const type = data.data.type;
  if (require(6857) /* WidgetType */.WidgetType.CURRENT_GAMES !== type) {
    if (require(6857) /* WidgetType */.WidgetType.FAVORITE_GAMES !== type) {
      if (require(6857) /* WidgetType */.WidgetType.PLAYED_GAMES !== type) {
        if (require(6857) /* WidgetType */.WidgetType.WANT_TO_PLAY_GAMES !== type) {
          if (require(6857) /* WidgetType */.WidgetType.APPLICATION === type) {
            const ApplicationWidget = require(6876) /* ApplicationWidget */.ApplicationWidget;
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
  const obj2 = importDefault(22);
  obj = { id: data.id, type, games: importDefault(22).uniqBy(mapped, "applicationId") };
  const baseGameWidget = new require(6858) /* items */.BaseGameWidget(obj);
  return baseGameWidget;
}
function checkUserProfileCollectiblesExpiration(id, guild_id) {
  let closure_0 = id;
  let closure_1 = guild_id;
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
  let collectibles;
  if (tmp != value1) {
    collectibles = value1.collectibles;
  }
  if (tmp != collectibles) {
    const items = [];
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
          if (null == outer1_20[id]) {
            const obj = {};
            obj[outer1_15] = {};
            outer1_20[id] = obj;
          }
          if (null != outer1_20[id][null != closure_1 ? closure_1 : outer1_15]) {
            if (null != outer1_20[id][null != closure_1 ? closure_1 : outer1_15][expiresAt.skuId]) {
              const _Math = Math;
              outer1_20[id][null != closure_1 ? closure_1 : outer1_15][expiresAt.skuId].start(Math.min(outer1_14, diff), () => {
                outer2_33(outer1_0, outer1_1);
              });
              const obj2 = outer1_20[id][null != closure_1 ? closure_1 : outer1_15][expiresAt.skuId];
            } else {
              let skuId = outer1_20[id];
              skuId = expiresAt.skuId;
              const Timeout = id(value1[17]).Timeout;
              const prototype = Timeout.prototype;
              const timeout = new Timeout();
              skuId[null != closure_1 ? closure_1 : outer1_15][skuId] = timeout;
            }
          } else {
            outer1_20[id][null != closure_1 ? closure_1 : outer1_15] = {};
          }
        }
      }
    });
    if (0 !== items.length) {
      const collectibles2 = value1.collectibles;
      value1.collectibles = collectibles2.filter((arg0) => !items.includes(arg0));
      const item1 = items.forEach((type) => {
        if (type.type === id(value1[18]).CollectiblesItemType.PROFILE_EFFECT) {
          value1.profileEffect = undefined;
        } else if (type.type === id(value1[18]).CollectiblesItemType.PROFILE_FRAME) {
          value1.profileFrame = undefined;
        }
        if (null == outer1_20[id]) {
          if (!tmp8) {
            const skuId = type.skuId;
            delete tmp2[tmp];
          }
        } else {
          const tmp10 = tmp7[null != closure_1 ? closure_1 : outer1_15];
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
  let c26 = false;
}
function handleMutualFriendsFetchStart(userId) {
  set.add(userId.userId);
}
function handleMutualFriendsFetchFailure(userId) {
  set.delete(userId.userId);
}
function getMutualFriends(id) {
  const mapped = importDefault(22)(id).map((id) => {
    let obj = { key: id.id };
    obj = {};
    const merged = Object.assign(id);
    obj["collectibles"] = outer1_0(outer1_2[19]).parseServerUserCollectibles(id.collectibles);
    const obj3 = outer1_0(outer1_2[19]);
    obj.user = new outer1_9(obj);
    obj.status = outer1_12.getStatus(id.id);
    return obj;
  });
  const arr = importDefault(22)(id);
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
  let _require;
  let date;
  let date1;
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
    _require = {};
    const mutual_guilds = userProfile.mutual_guilds;
    const item = mutual_guilds.forEach((id) => {
      id = id.id;
      const guild = outer1_11.getGuild(id);
      if (null != guild) {
        const obj = { guild, nick: id.nick };
        closure_0[id] = obj;
      }
    });
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const found = flattenedGuildIds.filter((arg0) => null != dependencyMap[arg0]);
    const result = map5.set(userProfile.user.id, found.map((arg0) => ({ guild: dependencyMap[arg0].guild, nick: dependencyMap[arg0].nick })));
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
  date = null;
  if (null != userProfile.premium_since) {
    const _Date = Date;
    date = new Date(userProfile.premium_since);
  }
  date1 = null;
  if (null != userProfile.premium_guild_since) {
    const _Date2 = Date;
    date1 = new Date(userProfile.premium_guild_since);
  }
  const application = userProfile.application;
  if (null != userProfile.badges) {
    const badges = userProfile.badges;
    let mapped = badges.map((id) => {
      let obj = dependencyMap(date1[20]);
      const tieredTenureBadgeData = obj.getTieredTenureBadgeData(id.id);
      if ("premium" === id.id) {
        if (null != date) {
          const intl2 = dependencyMap(date1[21]).intl;
          obj = { date };
          let formatToPlainStringResult = intl2.formatToPlainString(dependencyMap(date1[21]).t["8zbGNR"], obj);
          if (null != tieredTenureBadgeData) {
            const intl3 = dependencyMap(date1[21]).intl;
            obj = { date };
            formatToPlainStringResult = intl3.formatToPlainString(dependencyMap(date1[21]).t.Hu4jfi, obj);
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
          const intl = dependencyMap(date1[21]).intl;
          const obj3 = { date: date1 };
          obj2["description"] = intl.formatToPlainString(dependencyMap(date1[21]).t.IWkAq7, obj3);
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
      _null = null;
    } else {
      mergePinnedBadges(mapped, _null);
    }
  }
  const timestamp = Date.now();
  let obj = {};
  let merged = Object.assign(date(date1[22])(userProfile.user_profile));
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
    found2 = mapped1.filter(_require(date1[24]).isNotNullish);
  }
  obj["widgets"] = found2;
  obj["wishlistSettings"] = userProfile.wishlist_settings;
  obj["private"] = userProfile.private;
  const result5 = map1.set(userProfile.user.id, obj);
  checkUserProfileCollectiblesExpiration(userProfile.user.id);
  if (null != userProfile.guild_member_profile) {
    let obj1 = {};
    let merged1 = Object.assign(date(date1[22])(userProfile.guild_member_profile));
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
      map = new Map();
      const result7 = map.set(userProfile.guild_member_profile.guild_id, obj1);
      const result8 = map2.set(userProfile.user.id, map);
    }
    userProfile = checkUserProfileCollectiblesExpiration(userProfile.user.id, userProfile.guild_member_profile.guild_id);
  }
}
function mergePinnedBadges(badges, c27) {
  if (null != badges) {
    const _Set = Set;
    const set = new Set(badges.map((id) => id.id));
    let found;
    if (null != c27) {
      badges = c27.badges;
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
    const obj = { connectedAccounts: [], applicationRoleConnections: [], premiumSince: null, premiumGuildSince: null, application: null, legacyUsername: null, userId, banner: null, accentColor: null, bio: "", pronouns: "", premiumType: null, fetchStartedAt: 0, fetchEndedAt: 0, fetchError: undefined };
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
  let c26 = true;
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
  let c26 = false;
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
          const merged1 = Object.assign(importDefault(6878)(obj));
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
      const merged3 = Object.assign(importDefault(6878)(obj2));
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
  let c26 = false;
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
    obj["widgets"] = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
    const result = map1.set(userId, obj);
  }
}
function handlePinBadgesToProfile(badges) {
  const userId = badges.userId;
  let obj = { userId, badges: badges.badges, expiresAtMs: Date.now() + 1000 * badges.ttlInSeconds };
  const value = map1.get(userId);
  if (null != value) {
    badges = value.badges;
    if (null == badges) {
      badges = [];
    }
    mergePinnedBadges(badges, obj);
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
  const items = [...map1.keys()];
  return items.reduce((arg0, arg1) => outer1_53(arg1) || arg0, false);
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
let closure_15 = Symbol("NO GUILD ID");
let map = new Map();
let set = new Set();
const map1 = new Map();
const map2 = new Map();
let closure_20 = {};
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
let closure_24 = [];
let closure_25 = [];
let c26 = false;
let c27 = null;
tmp10.displayName = "UserProfileStore";
tmp10.LATEST_SNAPSHOT_VERSION = 1;
tmp10 = new tmp10();
let closure_28 = tmp10;
let result = set.fileFinishedImporting("modules/user_profile/UserProfileStore.tsx");

export default tmp10;
