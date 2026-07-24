// Module ID: 16569
// Function ID: 129233
// Name: _navigateToGuild
// Dependencies: [5, 1921, 12681, 8484, 653, 1212, 1327, 5736, 675, 16568, 491, 2]
// Exports: fromDiscoverableGuildSearchResult, fromDiscoverableGuildServer, getCategoryIdFromServerTab, getGlobalDiscoveryServersBannerDescription, getGlobalDiscoveryServersBannerTitle, getGlobalDiscoveryServersTabSectionTitle, getGlobalDiscoveryServersTabTitle, getLanguageCodeFallback, handleTabPressPrefetch, isStaleFeaturedGuilds, makeAnalyticsID, navigateToGuild

// Module 16569 (_navigateToGuild)
import getSystemLocale from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import DEFAULT_DISCOVERY_CATEGORY_ID from "DEFAULT_DISCOVERY_CATEGORY_ID";
import { AnalyticEvents } from "ME";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _navigateToGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ GlobalDiscoveryServerTab: closure_7, FEATURED_GUILDS_CACHE_DURATION: closure_8, FEATURED_GUILDS_SEARCH_OPTIONS: closure_9, CategoryId: closure_10, DISCOVERY_ALL_CATEGORIES_ID: closure_11, getLanguageOptions: closure_12, HUBS_CATEGORY_ID: closure_13 } = DEFAULT_DISCOVERY_CATEGORY_ID);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx");

export const getGlobalDiscoveryServersTabTitle = function getGlobalDiscoveryServersTabTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t["RU+DCe"]);
  } else if (constants.GAMING === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t["CD/USA"]);
  } else if (constants.MUSIC === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["nt9PL+"]);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.gSbmdt);
  } else if (constants.TECH === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["0A0By5"]);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.Gy9woq);
  } else if (constants.HUBS === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["q469/Z"]);
  }
};
export const getGlobalDiscoveryServersBannerTitle = function getGlobalDiscoveryServersBannerTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.OlDfzP);
  } else if (constants.GAMING === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t["CD/USA"]);
  } else if (constants.MUSIC === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["nt9PL+"]);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.gSbmdt);
  } else if (constants.TECH === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["0A0By5"]);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.Gy9woq);
  } else if (constants.HUBS === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.X5xPlb);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersBannerDescription = function getGlobalDiscoveryServersBannerDescription(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.SdMhrk);
  } else if (constants.GAMING === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.AAJ5ov);
  } else if (constants.MUSIC === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["SOio+D"]);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.R09vf0);
  } else if (constants.TECH === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.Ew4d56);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.sasIWU);
  } else if (constants.HUBS === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["F/IQCI"]);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersTabSectionTitle = function getGlobalDiscoveryServersTabSectionTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.crt84X);
  } else if (constants.GAMING === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.fWbIpf);
  } else if (constants.MUSIC === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.nfgDzz);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.k1CYxv);
  } else if (constants.TECH === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["4dawps"]);
  } else if (constants.EDUCATION === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.uexPgT);
  } else {
    return null;
  }
};
export const getCategoryIdFromServerTab = function getCategoryIdFromServerTab(arg0) {
  if (constants.FEATURED === arg0) {
    return closure_11;
  } else if (constants.GAMING === arg0) {
    return closure_10.Activity;
  } else if (constants.MUSIC === arg0) {
    return closure_10.Music;
  } else if (constants.ENTERTAINMENT === arg0) {
    return closure_10.Television;
  } else if (constants.TECH === arg0) {
    return closure_10.Science;
  } else if (constants.EDUCATION === arg0) {
    return closure_10.Education;
  } else if (constants.HUBS === arg0) {
    return closure_13;
  } else {
    require(1327) /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
};
export const isStaleFeaturedGuilds = function isStaleFeaturedGuilds(arg0) {
  let tmp = null == arg0;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - arg0 > closure_8;
  }
  return tmp;
};
export const fromDiscoverableGuildServer = function fromDiscoverableGuildServer(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features) };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, premium_subscription_count: obj.premiumSubscriptionCount, preferred_locale: obj.preferredLocale, discovery_splash: obj.discoverySplash, emojis: obj.emojis, emoji_count: obj.emojiCount } = id);
  return obj;
};
export const fromDiscoverableGuildSearchResult = function fromDiscoverableGuildSearchResult(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features) };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount } = id);
  obj.premiumSubscriptionCount = undefined;
  obj.preferredLocale = undefined;
  obj.discoverySplash = id.discovery_splash;
  obj.emojis = [];
  return obj;
};
export const getLanguageCodeFallback = function getLanguageCodeFallback() {
  let tmp3;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [_isNativeReflectConstruct];
    tmp = items;
  }
  [tmp3] = tmp;
  let locale;
  const arr2 = callback2();
  locale = tmp3.locale;
  let found = arr2.find((code) => code.code === locale);
  if (null == found) {
    found = arr2[0];
  }
  return found.code;
};
export const navigateToGuild = function navigateToGuild() {
  return _navigateToGuild(...arguments);
};
export const handleTabPressPrefetch = function handleTabPressPrefetch() {
  const error = store.getError(closure_9);
  const isFetching = store.getIsFetching(closure_9);
  let isInitialFetchComplete = store.getIsInitialFetchComplete(closure_9);
  if (!isInitialFetchComplete) {
    if (!isFetching) {
      let obj = importDefault(16568);
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
    obj = { forceRefresh: true };
    const featuredGuilds1 = importDefault(16568).fetchFeaturedGuilds(obj);
    const obj2 = importDefault(16568);
  }
};
export const makeAnalyticsID = function makeAnalyticsID() {
  const obj = require(491) /* v1 */;
  return require(491) /* v1 */.v4().replace(/-/g, "");
};
