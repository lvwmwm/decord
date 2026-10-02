// Module ID: 17658
// Function ID: 17659
// Name: GlobalDiscoveryServersUtils
// Dependencies: [5, 2115, 13251, 9027, 1086, 1127, 1376, 6760, 1253, 17657, 1267, 2]
// Exports: fromDiscoverableGuildSearchResult, fromDiscoverableGuildServer, getCategoryIdFromServerTab, getGlobalDiscoveryServersBannerDescription, getGlobalDiscoveryServersBannerTitle, getGlobalDiscoveryServersTabSectionTitle, getGlobalDiscoveryServersTabTitle, getLanguageCodeFallback, handleTabPressPrefetch, isStaleFeaturedGuilds, makeAnalyticsID, navigateToGuild

// Module 17658 (GlobalDiscoveryServersUtils)
import Constants from "Constants" /* 1086 */;
import intl8 from "intl" /* 1127 */;
import v1 from "v1" /* 1267 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import GlobalDiscoveryServersFeaturedSearchManagerDefault from "GlobalDiscoveryServersFeaturedSearchManager" /* 17657 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LocaleStore from "LocaleStore" /* 2115 */;
import GlobalDiscoveryServersSearchResultsStore from "GlobalDiscoveryServersSearchResultsStore" /* 13251 */;
import GlobalDiscoveryServersConstants from "GlobalDiscoveryServersConstants" /* 9027 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
let obj = function _navigateToGuild() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let _location;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let category_id;
    let obj5;
    let closure_0 = arg0;
    if (_location === 2) {
      _location = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let load_id;
        let guild_id;
        let card_index;
        let obj6;
        _location = 2;
        if (0 === category_id) {
          if (arg0 === 1) {
            _location = 3;
            throw value;
          } else if (arg0 === 2) {
            _location = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            load_id = undefined;
            guild_id = undefined;
            card_index = undefined;
            c5 = undefined;
            ({ loadId: c0, guildId: c1, index: c2, categoryId: c3, analyticsLocation: c4, options: c5 } = closure_0);
            obj6 = undefined;
            category_id = 1;
            _location = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === category_id) {
          if (arg0 === 1) {
            _location = 3;
            throw value;
          } else if (arg0 === 2) {
            _location = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            obj6 = { loadId: load_id };
            const merged = Object.assign(c5);
            category_id = 2;
            _location = 1;
            const obj7 = { value: obj5.startLurking(guild_id, _location, obj6), done: false };
            obj5 = closure_130_2(closure_130_3[7]);
            return obj7;
          }
        } else if (arg0 === 1) {
          _location = 3;
          throw value;
        } else if (arg0 === 2) {
          _location = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          const obj9 = { guild_id, load_id, card_index, category_id, location: _location };
          obj = closure_130_1(closure_130_3[8]);
          obj.track(closure_130_14.GUILD_DISCOVERY_GUILD_SELECTED, obj9);
          _location = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp27) {
        _location = 3;
        throw tmp27;
      }
    }
  });
  return obj(...arguments);
};
({ GlobalDiscoveryServerTab: metroImportDefault, FEATURED_GUILDS_CACHE_DURATION: metroImportAll, FEATURED_GUILDS_SEARCH_OPTIONS: c9, CategoryId: c10, DISCOVERY_ALL_CATEGORIES_ID: unpackModuleId, getLanguageOptions: closure_12, HUBS_CATEGORY_ID: map1 } = GlobalDiscoveryServersConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx");

export const getGlobalDiscoveryServersTabTitle = function getGlobalDiscoveryServersTabTitle(arg0) {
  if (metroImportDefault.FEATURED === arg0) {
    const intl7 = intl8.intl;
    return intl7.string(intl8.t["RU+DCe"]);
  } else if (metroImportDefault.GAMING === arg0) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t["CD/USA"]);
  } else if (metroImportDefault.MUSIC === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t["nt9PL+"]);
  } else if (metroImportDefault.ENTERTAINMENT === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.gSbmdt);
  } else if (metroImportDefault.TECH === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t["0A0By5"]);
  } else if (metroImportDefault.EDUCATION === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t.Gy9woq);
  } else if (metroImportDefault.HUBS === arg0) {
    const intl = intl8.intl;
    return intl.string(intl8.t["q469/Z"]);
  }
};
export const getGlobalDiscoveryServersBannerTitle = function getGlobalDiscoveryServersBannerTitle(arg0) {
  if (metroImportDefault.FEATURED === arg0) {
    const intl7 = intl8.intl;
    return intl7.string(intl8.t.OlDfzP);
  } else if (metroImportDefault.GAMING === arg0) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t["CD/USA"]);
  } else if (metroImportDefault.MUSIC === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t["nt9PL+"]);
  } else if (metroImportDefault.ENTERTAINMENT === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.gSbmdt);
  } else if (metroImportDefault.TECH === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t["0A0By5"]);
  } else if (metroImportDefault.EDUCATION === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t.Gy9woq);
  } else if (metroImportDefault.HUBS === arg0) {
    const intl = intl8.intl;
    return intl.string(intl8.t.X5xPlb);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersBannerDescription = function getGlobalDiscoveryServersBannerDescription(arg0) {
  if (metroImportDefault.FEATURED === arg0) {
    const intl7 = intl8.intl;
    return intl7.string(intl8.t.SdMhrk);
  } else if (metroImportDefault.GAMING === arg0) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t.AAJ5ov);
  } else if (metroImportDefault.MUSIC === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t["SOio+D"]);
  } else if (metroImportDefault.ENTERTAINMENT === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.R09vf0);
  } else if (metroImportDefault.TECH === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t.Ew4d56);
  } else if (metroImportDefault.EDUCATION === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t.sasIWU);
  } else if (metroImportDefault.HUBS === arg0) {
    const intl = intl8.intl;
    return intl.string(intl8.t["F/IQCI"]);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersTabSectionTitle = function getGlobalDiscoveryServersTabSectionTitle(arg0) {
  if (metroImportDefault.FEATURED === arg0) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t.crt84X);
  } else if (metroImportDefault.GAMING === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t.fWbIpf);
  } else if (metroImportDefault.MUSIC === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.nfgDzz);
  } else if (metroImportDefault.ENTERTAINMENT === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t.k1CYxv);
  } else if (metroImportDefault.TECH === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t["4dawps"]);
  } else if (metroImportDefault.EDUCATION === arg0) {
    const intl = intl8.intl;
    return intl.string(intl8.t.uexPgT);
  } else {
    return null;
  }
};
export const getCategoryIdFromServerTab = function getCategoryIdFromServerTab(arg0) {
  if (metroImportDefault.FEATURED === arg0) {
    return unpackModuleId;
  } else if (metroImportDefault.GAMING === arg0) {
    return authStore.Activity;
  } else if (metroImportDefault.MUSIC === arg0) {
    return authStore.Music;
  } else if (metroImportDefault.ENTERTAINMENT === arg0) {
    return authStore.Television;
  } else if (metroImportDefault.TECH === arg0) {
    return authStore.Science;
  } else if (metroImportDefault.EDUCATION === arg0) {
    return authStore.Education;
  } else if (metroImportDefault.HUBS === arg0) {
    return map1;
  } else {
    obj = GlobalUtils;
    obj.assertNever(arg0);
  }
};
export const isStaleFeaturedGuilds = function isStaleFeaturedGuilds(arg0) {
  let tmp = null == arg0;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - arg0 > metroImportAll;
  }
  return tmp;
};
export const fromDiscoverableGuildServer = function fromDiscoverableGuildServer(id) {
  obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: null, preferredLocale: null, discoverySplash: null, emojis: null, emojiCount: null };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, premium_subscription_count: obj.premiumSubscriptionCount, preferred_locale: obj.preferredLocale, discovery_splash: obj.discoverySplash, emojis: obj.emojis, emoji_count: obj.emojiCount } = id);
  new Set(id.features);
  return obj;
};
export const fromDiscoverableGuildSearchResult = function fromDiscoverableGuildSearchResult(id) {
  obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: "r", preferredLocale: "duration", discoverySplash: "center", emojis: [] };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, discovery_splash: obj.discoverySplash } = id);
  new Set(id.features);
  return obj;
};
export const getLanguageCodeFallback = function getLanguageCodeFallback() {
  let tmp3;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [LocaleStore];
    tmp = items;
  }
  [tmp3] = tmp;
  const arr2 = closure_12();
  const locale = tmp3.locale;
  let found = arr2.find((code) => code.code === locale);
  if (found == null) {
    found = arr2[0];
  }
  return found.code;
};
export const navigateToGuild = function navigateToGuild() {
  return obj(...arguments);
};
export const handleTabPressPrefetch = function handleTabPressPrefetch() {
  const error = GlobalDiscoveryServersSearchResultsStore.getError(React4);
  const isFetching = GlobalDiscoveryServersSearchResultsStore.getIsFetching(React4);
  let isInitialFetchComplete = GlobalDiscoveryServersSearchResultsStore.getIsInitialFetchComplete(React4);
  if (!isInitialFetchComplete) {
    if (!isFetching) {
      obj = GlobalDiscoveryServersFeaturedSearchManagerDefault;
      const featuredGuilds = obj.fetchFeaturedGuilds();
    }
  }
  if (isInitialFetchComplete) {
    isInitialFetchComplete = !isFetching;
  }
  if (isInitialFetchComplete) {
    isInitialFetchComplete = null != error;
  }
  if (isInitialFetchComplete) {
    const obj2 = GlobalDiscoveryServersFeaturedSearchManagerDefault;
    const featuredGuilds1 = obj2.fetchFeaturedGuilds({ forceRefresh: true });
  }
};
export const makeAnalyticsID = function makeAnalyticsID() {
  obj = v1;
  const str = obj.v4();
  return str.replace(/-/g, "");
};
