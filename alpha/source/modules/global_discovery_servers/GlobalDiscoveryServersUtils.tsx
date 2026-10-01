// Module ID: 17915
// Function ID: 17916
// Name: GlobalDiscoveryServersUtils
// Dependencies: [5, 2111, 9243, 1074, 1115, 1370, 6946, 1241, 1255, 2]
// Exports: fromDiscoverableGuildSearchResult, fromDiscoverableGuildServer, getCategoryIdFromServerTab, getGlobalDiscoveryServersBannerDescription, getGlobalDiscoveryServersBannerTitle, getGlobalDiscoveryServersTabSectionTitle, getGlobalDiscoveryServersTabTitle, getLanguageCodeFallback, isStaleFeaturedGuilds, makeAnalyticsID, navigateToGuild

// Module 17915 (GlobalDiscoveryServersUtils)
import util from "util" /* 1115 */;
import v1 from "v1" /* 1255 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocaleStore from "LocaleStore" /* 2111 */;

require = fn;
let closure_13 = async function _navigateToGuild(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ loadId: closure_129_0, guildId: closure_129_1, index: closure_129_2, categoryId: closure_129_3, analyticsLocation: closure_129_4, options: closure_129_5 } = closure_0);
          closure_129_6 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj6 = {};
          const merged = Object.assign(closure_129_5);
          obj6.loadId = closure_129_0;
          closure_129_6 = obj6;
          c3 = 2;
          c4 = 1;
          const obj7 = { value: closure_130_2(closure_130_3[6]).startLurking(closure_129_1, closure_129_4, closure_129_6), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        const obj9 = { guild_id: closure_129_1, load_id: closure_129_0, card_index: closure_129_2, category_id: closure_129_3, location: closure_129_4 };
        closure_130_1(closure_130_3[7]).track(closure_130_12.GUILD_DISCOVERY_GUILD_SELECTED, obj9);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp28) {
      c4 = tmp;
      throw tmp28;
    }
  }
};
const GlobalDiscoveryServersConstants = fn(9243);
({ GlobalDiscoveryServerTab: metroRequire, FEATURED_GUILDS_CACHE_DURATION: closure_7, CategoryId: closure_8, DISCOVERY_ALL_CATEGORIES_ID: closure_9, getLanguageOptions: c10, HUBS_CATEGORY_ID: closure_11 } = GlobalDiscoveryServersConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx");

export const getGlobalDiscoveryServersTabTitle = function getGlobalDiscoveryServersTabTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t["RU+DCe"]);
  } else if (tmp.GAMING === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t["CD/USA"]);
  } else if (tmp.MUSIC === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["nt9PL+"]);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.gSbmdt);
  } else if (tmp.TECH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["0A0By5"]);
  } else if (tmp.EDUCATION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.Gy9woq);
  } else if (tmp.HUBS === arg0) {
    const intl = util.intl;
    return intl.string(util.t["q469/Z"]);
  }
};
export const getGlobalDiscoveryServersBannerTitle = function getGlobalDiscoveryServersBannerTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t.OlDfzP);
  } else if (tmp.GAMING === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t["CD/USA"]);
  } else if (tmp.MUSIC === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["nt9PL+"]);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.gSbmdt);
  } else if (tmp.TECH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["0A0By5"]);
  } else if (tmp.EDUCATION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.Gy9woq);
  } else if (tmp.HUBS === arg0) {
    const intl = util.intl;
    return intl.string(util.t.X5xPlb);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersBannerDescription = function getGlobalDiscoveryServersBannerDescription(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t.SdMhrk);
  } else if (tmp.GAMING === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.AAJ5ov);
  } else if (tmp.MUSIC === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["SOio+D"]);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.R09vf0);
  } else if (tmp.TECH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.Ew4d56);
  } else if (tmp.EDUCATION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.sasIWU);
  } else if (tmp.HUBS === arg0) {
    const intl = util.intl;
    return intl.string(util.t["F/IQCI"]);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersTabSectionTitle = function getGlobalDiscoveryServersTabSectionTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.crt84X);
  } else if (tmp.GAMING === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t.fWbIpf);
  } else if (tmp.MUSIC === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.nfgDzz);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.k1CYxv);
  } else if (tmp.TECH === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["4dawps"]);
  } else if (tmp.EDUCATION === arg0) {
    const intl = util.intl;
    return intl.string(util.t.uexPgT);
  } else {
    return null;
  }
};
export const getCategoryIdFromServerTab = function getCategoryIdFromServerTab(arg0) {
  if (constants.FEATURED === arg0) {
    return React7;
  } else if (tmp.GAMING === arg0) {
    return React6.Activity;
  } else if (tmp.MUSIC === arg0) {
    return React6.Music;
  } else if (tmp.ENTERTAINMENT === arg0) {
    return React6.Television;
  } else if (tmp.TECH === arg0) {
    return React6.Science;
  } else if (tmp.EDUCATION === arg0) {
    return React6.Education;
  } else if (tmp.HUBS === arg0) {
    return closure_1_11;
  } else {
    GlobalUtils.assertNever(arg0);
  }
};
export const isStaleFeaturedGuilds = function isStaleFeaturedGuilds(arg0) {
  let tmp = null == arg0;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - arg0 > React5;
  }
  return tmp;
};
export const fromDiscoverableGuildServer = function fromDiscoverableGuildServer(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: null, preferredLocale: null, discoverySplash: null, emojis: null, emojiCount: null };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, premium_subscription_count: obj.premiumSubscriptionCount, preferred_locale: obj.preferredLocale, discovery_splash: obj.discoverySplash, emojis: obj.emojis, emoji_count: obj.emojiCount } = id);
  return obj;
};
export const fromDiscoverableGuildSearchResult = function fromDiscoverableGuildSearchResult(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: "r", preferredLocale: "isArray", discoverySplash: "scalar", emojis: 9 };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, discovery_splash: obj.discoverySplash } = id);
  obj.emojis = [];
  return obj;
};
export const getLanguageCodeFallback = function getLanguageCodeFallback() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [LocaleStore];
    tmp = items;
  }
  [tmp3] = tmp;
  const arr2 = closure_1_10();
  locale = tmp3.locale;
  let found = arr2.find((code) => code.code === locale);
  if (found == null) {
    found = arr2[0];
  }
  return found.code;
};
export const navigateToGuild = function navigateToGuild() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const makeAnalyticsID = function makeAnalyticsID() {
  return v1.v4().replace(/-/g, "");
};
