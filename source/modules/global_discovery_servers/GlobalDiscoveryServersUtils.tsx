// Module ID: 16397
// Function ID: 126693
// Name: _navigateToGuild
// Dependencies: []
// Exports: fromDiscoverableGuildSearchResult, fromDiscoverableGuildServer, getCategoryIdFromServerTab, getGlobalDiscoveryServersBannerDescription, getGlobalDiscoveryServersBannerTitle, getGlobalDiscoveryServersTabSectionTitle, getGlobalDiscoveryServersTabTitle, getLanguageCodeFallback, handleTabPressPrefetch, isStaleFeaturedGuilds, makeAnalyticsID, navigateToGuild

// Module 16397 (_navigateToGuild)
function _navigateToGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _navigateToGuild = obj;
  return obj(...arguments);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ GlobalDiscoveryServerTab: closure_7, FEATURED_GUILDS_CACHE_DURATION: closure_8, FEATURED_GUILDS_SEARCH_OPTIONS: closure_9, CategoryId: closure_10, DISCOVERY_ALL_CATEGORIES_ID: closure_11, getLanguageOptions: closure_12, HUBS_CATEGORY_ID: closure_13 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx");

export const getGlobalDiscoveryServersTabTitle = function getGlobalDiscoveryServersTabTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = arg1(dependencyMap[5]).intl;
    return intl7.string(arg1(dependencyMap[5]).t.RU+DCe);
  } else if (constants.GAMING === arg0) {
    const intl6 = arg1(dependencyMap[5]).intl;
    return intl6.string(arg1(dependencyMap[5]).t.CD/USA);
  } else if (constants.MUSIC === arg0) {
    const intl5 = arg1(dependencyMap[5]).intl;
    return intl5.string(arg1(dependencyMap[5]).t.nt9PL+);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = arg1(dependencyMap[5]).intl;
    return intl4.string(arg1(dependencyMap[5]).t.gSbmdt);
  } else if (constants.TECH === arg0) {
    const intl3 = arg1(dependencyMap[5]).intl;
    return intl3.string(arg1(dependencyMap[5]).t.0A0By5);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = arg1(dependencyMap[5]).intl;
    return intl2.string(arg1(dependencyMap[5]).t.Gy9woq);
  } else if (constants.HUBS === arg0) {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.q469/Z);
  }
};
export const getGlobalDiscoveryServersBannerTitle = function getGlobalDiscoveryServersBannerTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = arg1(dependencyMap[5]).intl;
    return intl7.string(arg1(dependencyMap[5]).t.OlDfzP);
  } else if (constants.GAMING === arg0) {
    const intl6 = arg1(dependencyMap[5]).intl;
    return intl6.string(arg1(dependencyMap[5]).t.CD/USA);
  } else if (constants.MUSIC === arg0) {
    const intl5 = arg1(dependencyMap[5]).intl;
    return intl5.string(arg1(dependencyMap[5]).t.nt9PL+);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = arg1(dependencyMap[5]).intl;
    return intl4.string(arg1(dependencyMap[5]).t.gSbmdt);
  } else if (constants.TECH === arg0) {
    const intl3 = arg1(dependencyMap[5]).intl;
    return intl3.string(arg1(dependencyMap[5]).t.0A0By5);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = arg1(dependencyMap[5]).intl;
    return intl2.string(arg1(dependencyMap[5]).t.Gy9woq);
  } else if (constants.HUBS === arg0) {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.X5xPlb);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersBannerDescription = function getGlobalDiscoveryServersBannerDescription(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = arg1(dependencyMap[5]).intl;
    return intl7.string(arg1(dependencyMap[5]).t.SdMhrk);
  } else if (constants.GAMING === arg0) {
    const intl6 = arg1(dependencyMap[5]).intl;
    return intl6.string(arg1(dependencyMap[5]).t.AAJ5ov);
  } else if (constants.MUSIC === arg0) {
    const intl5 = arg1(dependencyMap[5]).intl;
    return intl5.string(arg1(dependencyMap[5]).t.SOio+D);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = arg1(dependencyMap[5]).intl;
    return intl4.string(arg1(dependencyMap[5]).t.R09vf0);
  } else if (constants.TECH === arg0) {
    const intl3 = arg1(dependencyMap[5]).intl;
    return intl3.string(arg1(dependencyMap[5]).t.Ew4d56);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = arg1(dependencyMap[5]).intl;
    return intl2.string(arg1(dependencyMap[5]).t.sasIWU);
  } else if (constants.HUBS === arg0) {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.F/IQCI);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersTabSectionTitle = function getGlobalDiscoveryServersTabSectionTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl6 = arg1(dependencyMap[5]).intl;
    return intl6.string(arg1(dependencyMap[5]).t.crt84X);
  } else if (constants.GAMING === arg0) {
    const intl5 = arg1(dependencyMap[5]).intl;
    return intl5.string(arg1(dependencyMap[5]).t.fWbIpf);
  } else if (constants.MUSIC === arg0) {
    const intl4 = arg1(dependencyMap[5]).intl;
    return intl4.string(arg1(dependencyMap[5]).t.nfgDzz);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl3 = arg1(dependencyMap[5]).intl;
    return intl3.string(arg1(dependencyMap[5]).t.k1CYxv);
  } else if (constants.TECH === arg0) {
    const intl2 = arg1(dependencyMap[5]).intl;
    return intl2.string(arg1(dependencyMap[5]).t.4dawps);
  } else if (constants.EDUCATION === arg0) {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.uexPgT);
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
    arg1(dependencyMap[6]).assertNever(arg0);
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
    const items = [closure_5];
    tmp = items;
  }
  [tmp3] = tmp;
  let arg1;
  const arr2 = callback2();
  arg1 = tmp3.locale;
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
      let obj = importDefault(dependencyMap[9]);
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
    const featuredGuilds1 = importDefault(dependencyMap[9]).fetchFeaturedGuilds(obj);
    const obj2 = importDefault(dependencyMap[9]);
  }
};
export const makeAnalyticsID = function makeAnalyticsID() {
  const obj = arg1(dependencyMap[10]);
  return arg1(dependencyMap[10]).v4().replace(/-/g, "");
};
