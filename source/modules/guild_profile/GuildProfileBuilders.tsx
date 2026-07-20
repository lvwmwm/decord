// Module ID: 5395
// Function ID: 45986
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: buildGuildProfileFromInvite, buildGuildProfileUpdateForServer, buildTopGamesFromServer

// Module 5395 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function getEmoji(guildId) {
  let emojiId;
  let emojiName;
  ({ emojiId, emojiName } = guildId);
  const value = EmojiDisambiguations.get(guildId.guildId);
  let byId = null;
  if (null == emojiId) {
    if (byId == emojiName) {
      return null;
    }
  }
  if (byId != emojiId) {
    byId = null;
    if (tmp6) {
      byId = value.getById(emojiId);
    }
    let byName = byId;
    const tmp6 = byId != value;
  } else {
    byName = null;
    if (byId != emojiName) {
      byName = importDefault(dependencyMap[1]).getByName(emojiName);
      const obj2 = importDefault(dependencyMap[1]);
    }
  }
}
function buildGuildProfileTraitsFromServer(guildId) {
  let iter3;
  let position;
  const array = new Array(require(dependencyMap[2]).MAX_TRAITS);
  const fillResult = array.fill(closure_4);
  const tmp2 = _createForOfIteratorHelperLoose(arg1);
  const iter = tmp2();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp3 = value.position < 0;
      if (!tmp3) {
        let tmp4 = closure_0;
        let tmp5 = closure_2;
        tmp3 = value.position >= closure_0(closure_2[2]).MAX_TRAITS;
      }
      if (!tmp3) {
        let obj = { label: value.label };
        let tmp6 = closure_7;
        obj = { guildId };
        ({ emoji_id: obj3.emojiId, emoji_name: obj3.emojiName, position } = value);
        let tmp7 = closure_7(obj);
        let tmp8;
        if (null != tmp7) {
          tmp8 = tmp7;
        }
        obj.emoji = tmp8;
        fillResult[position] = obj;
        let tmp9 = tmp7;
      }
      iter3 = tmp2();
      iter2 = iter3;
    } while (!iter3.done);
  }
  return fillResult;
}
function buildGuildProfileFromServer(profile) {
  let brand_color_primary;
  let features;
  let traits;
  let reduced = { id: profile.id, name: profile.name };
  const description = profile.description;
  let str = "";
  if (null != description) {
    str = description;
  }
  reduced.description = str;
  ({ icon_hash: obj.icon, custom_banner_hash: obj.customBanner, online_count: obj.onlineCount, member_count: obj.memberCount, brand_color_primary } = profile);
  let tmp = null;
  if (null != brand_color_primary) {
    tmp = null;
    if ("" !== brand_color_primary) {
      tmp = brand_color_primary;
    }
  }
  reduced.brandColorPrimary = tmp;
  ({ visibility: obj.visibility, traits } = profile);
  if (null == traits) {
    traits = [];
  }
  reduced.traits = buildGuildProfileTraitsFromServer(profile.id, traits);
  let game_application_ids = profile.game_application_ids;
  if (null == game_application_ids) {
    game_application_ids = [];
  }
  reduced.gameApplicationIds = game_application_ids;
  const game_activity = profile.game_activity;
  if (null == game_activity) {
    reduced = {};
  } else {
    const _Object = Object;
    const entries = Object.entries(game_activity);
    reduced = entries.reduce((arg0, arg1) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg1;
      arg0[tmp] = { level: tmp2.activity_level, score: tmp2.activity_score };
      return arg0;
    }, {});
  }
  reduced.gameActivity = reduced;
  ({ games: obj.games, features } = profile);
  if (null == features) {
    features = [];
  }
  reduced.features = features;
  ({ tag: obj.tag, badge: obj.badge, badge_color_primary: obj.badgeColorPrimary, badge_color_secondary: obj.badgeColorSecondary, badge_hash: obj.badgeHash, premium_subscription_count: obj.premiumSubscriberCount, premium_tier: obj.premiumTier } = profile);
  return reduced;
}
const EmojiDisambiguations = require(dependencyMap[0]).EmojiDisambiguations;
let closure_4 = { label: "" };
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/guild_profile/GuildProfileBuilders.tsx");

export { buildGuildProfileFromServer };
export const buildGuildProfileUpdateForServer = function buildGuildProfileUpdateForServer(name) {
  const obj = {};
  if (null != name.name) {
    obj.name = name.name;
  }
  if (null != name.description) {
    obj.description = name.description;
  }
  if (undefined !== name.icon) {
    obj.icon = name.icon;
  }
  if (undefined !== name.customBanner) {
    obj.custom_banner = name.customBanner;
  }
  if (null != name.visibility) {
    obj.visibility = name.visibility;
  }
  if (undefined !== name.brandColorPrimary) {
    obj.brand_color_primary = name.brandColorPrimary;
  }
  if (null != name.traits) {
    const traits = name.traits;
    const mapped = traits.map((label, position) => {
      label = undefined;
      if (null != label) {
        label = label.label;
      }
      let tmp2 = null;
      if (null != label) {
        tmp2 = null;
        if (label.label.length > 0) {
          const obj = { label: label.label, position };
          const emoji = label.emoji;
          let id;
          if (null != emoji) {
            id = emoji.id;
          }
          obj.emoji_id = id;
          const emoji2 = label.emoji;
          let name;
          if (null != emoji2) {
            name = emoji2.name;
          }
          obj.emoji_name = name;
          const emoji3 = label.emoji;
          let animated;
          if (null != emoji3) {
            animated = emoji3.animated;
          }
          obj.emoji_animated = animated;
          tmp2 = obj;
        }
      }
      return tmp2;
    });
    obj.traits = mapped.filter(require(dependencyMap[3]).isNotNullish);
  }
  if (null != name.gameApplicationIds) {
    obj.game_application_ids = name.gameApplicationIds;
  }
  if (undefined !== name.tag) {
    obj.tag = name.tag;
  }
  if (undefined !== name.badge) {
    obj.badge = name.badge;
  }
  if (undefined !== name.badgeColorPrimary) {
    obj.badge_color_primary = name.badgeColorPrimary;
  }
  if (undefined !== name.badgeColorSecondary) {
    obj.badge_color_secondary = name.badgeColorSecondary;
  }
  return obj;
};
export const buildTopGamesFromServer = function buildTopGamesFromServer(top_games) {
  return top_games.reduce((arg0, game_application_id) => {
    arg0[game_application_id.game_application_id] = { level: game_application_id.activity_level, score: game_application_id.activity_score };
    return arg0;
  }, {});
};
export const buildGuildProfileFromInvite = function buildGuildProfileFromInvite(approximate_presence_count) {
  let description;
  let guild;
  let profile;
  ({ guild, profile } = approximate_presence_count);
  let tmp = null;
  if (null != profile) {
    tmp = buildGuildProfileFromServer(profile);
  }
  if (null == tmp) {
    let tmp5 = null;
    if (null != guild) {
      const obj = {};
      ({ id: obj.id, name: obj.name, description } = guild);
      let str = "";
      if (null != description) {
        str = description;
      }
      obj.description = str;
      ({ icon: obj.icon, banner: obj.customBanner, approximate_presence_count } = guild);
      if (null == approximate_presence_count) {
        approximate_presence_count = approximate_presence_count.approximate_presence_count;
      }
      let num = 0;
      if (null != approximate_presence_count) {
        num = approximate_presence_count;
      }
      obj.onlineCount = num;
      let approximate_member_count = guild.approximate_member_count;
      if (null == approximate_member_count) {
        approximate_member_count = approximate_presence_count.approximate_member_count;
      }
      let num2 = 0;
      if (null != approximate_member_count) {
        num2 = approximate_member_count;
      }
      obj.memberCount = num2;
      obj.visibility = require(dependencyMap[4]).GuildProfileVisibility.NOT_SPECIFIED;
      obj.traits = [];
      obj.gameApplicationIds = [];
      obj.gameActivity = {};
      let features = guild.features;
      if (null == features) {
        features = [];
      }
      obj.features = features;
      obj.brandColorPrimary = null;
      obj.tag = null;
      obj.badge = null;
      obj.badgeHash = null;
      obj.badgeColorPrimary = null;
      obj.badgeColorSecondary = null;
      ({ premium_subscription_count: obj.premiumSubscriberCount, premium_tier: obj.premiumTier } = guild);
      tmp5 = obj;
    }
    tmp = tmp5;
  }
  return tmp;
};
