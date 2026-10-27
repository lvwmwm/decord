// Module ID: 7449
// Function ID: 7450
// Name: GuildDiscoveryUtils
// Dependencies: [5, 4905, 5195, 4846, 1084, 1111, 7450, 7349, 6832, 1264, 1294, 1490, 2]
// Exports: fetchPublicDiscoveryGuild, getDiscoverableGuild, startLurking, trackDiscoveryExited, trackGuildDiscoveryGetFeaturedGuildsFailed, trackGuildDiscoverySearchStart, trackGuildJoinClicked, trackSearchClosed, trackSearchFailed, trackSearchResultsViewed, trackSearchStarted

// Module 7449 (GuildDiscoveryUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import _modDef1490 from "module_1490" /* 1490 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LurkingStore from "LurkingStore" /* 4905 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5195 */;
import GuildStore from "GuildStore" /* 4846 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let guild_ids, joinedAt, lurkLocation, openChannel, page;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj = function _startLurking() {
  obj = _asyncToGenerator(async (arg0, analyticsSource, arg2, sourceLocationStack) => {
    let closure_5;
    let closure_6;
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    const iter = (async (arg0, value) => {
      let channelId;
      let closure_9;
      let history;
      let obj4;
      let obj7;
      let obj8;
      let obj9;
      let onSuccess;
      let tmp16;
      let tmp79;
      if (1 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          return { value, done: true };
        } else {
          channelId = obj4.channelId;
          onSuccess = obj4.onSuccess;
          const joinSource = obj4.joinSource;
          const loadId = obj4.loadId;
          const shouldNavigate = obj4.shouldNavigate;
          closure_9 = undefined === shouldNavigate || shouldNavigate;
          openChannel = obj4.openChannel;
          const tmp31 = undefined !== openChannel && openChannel;
          openChannel = tmp31;
          const tmp27 = undefined === shouldNavigate || shouldNavigate;
          const obj6 = closure_134_0(closure_134_2[5]);
          history = obj6.getHistory();
          joinedAt = closure_134_6.getGuild(closure_0);
          obj7 = { sourceLocationStack, state: obj8 };
          obj8 = { analyticsSource };
          if (null != joinedAt) {
            if (null != joinedAt.joinedAt) {
              const tmp90 = closure_9;
              if (tmp90) {
                if (null == channelId) {
                  const obj10 = { openChannel };
                  const transitionToGuild = closure_134_0(closure_134_2[6]).transitionToGuild;
                  closure_134_0(closure_134_2[6]);
                  const merged = Object.assign(obj7);
                  transitionToGuild(closure_0, obj10);
                } else {
                  const obj11 = { navigationReplace: true, openChannel: true };
                  const tmp96 = closure_134_1(closure_134_2[7]);
                  const CHANNELResult = closure_134_10.CHANNEL(closure_0, channelId, obj4.messageId);
                  const merged1 = Object.assign(obj7);
                  tmp96(CHANNELResult, obj11);
                }
              }
            }
          }
          if (null != joinedAt) {
            if (closure_134_4.isLurking(closure_0)) {
              const tmp68 = closure_9;
              if (tmp68) {
                const transitionToGuildSync2 = closure_134_1(closure_134_2[8]).transitionToGuildSync;
                const obj12 = { welcomeModalChannelId: channelId, navigationReplace: null != channelId, openChannel: tmp79, search: history.location.search };
                closure_134_1(closure_134_2[8]);
                const merged2 = Object.assign(obj7);
                c7 = 2;
                c8 = 1;
                tmp79 = openChannel || null != channelId;
                const obj13 = { value: transitionToGuildSync2(closure_0, obj12, channelId, obj4.messageId), done: false };
                return obj13;
              }
            }
          }
          let tmp53;
          if (sourceLocationStack != null) {
            tmp53 = tmp52[sourceLocationStack.length - 1];
          }
          page = tmp53;
          if (tmp53 == null) {
            page = undefined;
            if (analyticsSource != null) {
              page = analyticsSource.page;
            }
          }
          lurkLocation = page;
          c7 = 3;
          c8 = 1;
          const obj14 = { lurker: true, source: joinSource, loadId, lurkLocation };
          const obj15 = { value: obj9.joinGuild(closure_0, obj14), done: false };
          obj9 = closure_134_1(closure_134_2[8]);
          return obj15;
        }
      } else if (2 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          return { value, done: true };
        }
      } else if (3 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          return { value, done: true };
        } else {
          const tmp127 = closure_9;
          if (tmp127) {
            const transitionToGuildSync = closure_134_1(closure_134_2[8]).transitionToGuildSync;
            const obj18 = { welcomeModalChannelId: channelId, navigationReplace: null != channelId, openChannel: tmp16, search: history.location.search };
            closure_134_1(closure_134_2[8]);
            const merged3 = Object.assign(obj7);
            c7 = 4;
            c8 = 1;
            tmp16 = openChannel || null != channelId;
            const obj19 = { value: transitionToGuildSync(closure_0, obj18, channelId, obj4.messageId), done: false };
            return obj19;
          }
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        return { value, done: true };
      }
      if (onSuccess != null) {
        tmp118();
      }
      await "IconComponent";
      obj4 = closure_2;
      if (closure_2 === undefined) {
        obj4 = {};
      }
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function makeDiscoverableGuild(body) {
  obj = { id: body.id, name: body.name, description: body.description, splash: body.splash, banner: body.banner, icon: body.icon, features: new Set(body.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: null, preferredLocale: null, discoverySplash: null, emojis: null, emojiCount: null, stickers: null, stickerCount: null, keywords: null };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, premium_subscription_count: obj.premiumSubscriptionCount, preferred_locale: obj.preferredLocale, discovery_splash: obj.discoverySplash, emojis: obj.emojis, emoji_count: obj.emojiCount, stickers: obj.stickers, sticker_count: obj.stickerCount, keywords: obj.keywords } = body);
  new Set(body.features);
  return obj;
}
obj = function _getDiscoverableGuild() {
  obj = _asyncToGenerator(async (guild_ids) => {
    let closure_1;
    let closure_2;
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let first;
      let obj4;
      let obj7;
      let tmp14;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: constants.GUILD_DISCOVERY, query: obj7.stringify(obj4), oldFormErrors: true, rejectWithError: true };
      const get = HTTP.get;
      obj4 = { guild_ids };
      obj7 = _modDef1490;
      guild_ids = await get(request);
      const body = guild_ids.body;
      if (body != null) {
        const guilds = body.guilds;
        if (guilds != null) {
          first = guilds[0];
        }
      }
      if (null == first) {
        tmp14 = first;
      } else {
        tmp14 = closure_130_12(first);
      }
      return tmp14;
    })();
  });
  return obj(...arguments);
};
obj = function _fetchPublicDiscoveryGuild() {
  obj = _asyncToGenerator(async function(arg0) {
    let c2;
    let guild;
    let closure_0 = arg0;
    let slug = tmp3;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: React4.GUILD_WEB_PAGE(closure_0), oldFormErrors: true, rejectWithError: true };
    const get = HTTP.get;
    await get(obj4);
    const body = arg1.body;
    if (body != null) {
      const data = body.data;
      if (data != null) {
        guild = data.guild;
      }
    }
    if (null != guild) {
      let canonical_url;
      if (body != null) {
        const seo = body.seo;
        if (seo != null) {
          canonical_url = seo.canonical_url;
        }
      }
      if (null != canonical_url) {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(body.seo.canonical_url);
        const pathname = uRL.pathname;
        slug = pathname.slice(9);
        const obj7 = { guild: body.data.guild, slug };
        let c3 = 0;
        let c4 = 3;
        obj = { value: obj7, done: true };
        return obj;
      }
    }
    return null;
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroImportDefault, SearchTypes: metroImportAll, Endpoints: c9, Routes: c10 } = Constants);
const result = size.fileFinishedImporting("utils/GuildDiscoveryUtils.tsx");

export const AnalyticsContexts = { SEARCH: "Search", RECOMMENDED: "Recommended", POPULAR: "Popular", RECOMMENDED_E3: "Recommended - E3", HEADER: "Header", GLOBAL_DISCOVERY: "Global Discovery", FORWARD_BREADCRUMB: "Forward Breadcrumb" };
export const IOS_MINIMUM_MEMBER_COUNT = ">1000";
export const MINIMUM_MEMBER_COUNT = ">200";
export const startLurking = function startLurking() {
  return obj(...arguments);
};
export { makeDiscoverableGuild };
export const trackDiscoveryExited = function trackDiscoveryExited(load_id, guild_ids_viewed) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  obj = AnalyticsUtilsDefault;
  const obj2 = { load_id, guild_ids_viewed, recommendations_source: tmp };
  obj.track(metroImportDefault.GUILD_DISCOVERY_EXITED, obj2);
};
export const trackSearchClosed = function trackSearchClosed(load_id) {
  obj = AnalyticsUtilsDefault;
  const obj2 = { load_id };
  obj.track(metroImportDefault.SEARCH_CLOSED, obj2);
};
export const trackSearchStarted = function trackSearchStarted(load_id, category_id) {
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { search_type: metroImportAll.GUILD_DISCOVERY, load_id, location: obj.location, category_id };
  obj2.track(metroImportDefault.SEARCH_STARTED, obj3);
};
export const trackGuildDiscoverySearchStart = function trackGuildDiscoverySearchStart(arg0) {
  let offset;
  let withCounts;
  ({ withCounts, offset } = arg0);
  obj = AnalyticsUtilsDefault;
  obj.track(metroImportDefault.GUILD_DISCOVERY_SEARCH_START, { with_counts: withCounts, offset });
};
export const trackSearchFailed = function trackSearchFailed(error) {
  let categoryId;
  let isRequestRetry;
  let willRequestRetry;
  error = error.error;
  ({ categoryId, willRequestRetry, isRequestRetry } = error);
  obj = AnalyticsUtilsDefault;
  const obj2 = { category_id: categoryId, request_status: error.status, request_error_code: error.code, will_request_retry: willRequestRetry, is_request_retry: isRequestRetry };
  obj.track(metroImportDefault.GUILD_DISCOVERY_SEARCH_FAILED, obj2);
};
export const trackGuildDiscoveryGetFeaturedGuildsFailed = function trackGuildDiscoveryGetFeaturedGuildsFailed(categoryId) {
  categoryId = categoryId.categoryId;
  obj = AnalyticsUtilsDefault;
  obj.track(metroImportDefault.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: categoryId });
};
export const trackSearchResultsViewed = function trackSearchResultsViewed(guildResults) {
  let analyticsContext;
  let categoryId;
  let isTagSearch;
  let length;
  let loadId;
  let mapped;
  let query;
  let searchId;
  ({ loadId, searchId, query, analyticsContext, categoryId, isTagSearch } = guildResults);
  obj = { search_type: isTagSearch ? metroImportAll.GUILD_DISCOVERY_TAG : metroImportAll.GUILD_DISCOVERY, load_id: loadId, search_id: searchId, total_results: length, guild_ids: mapped, query, location: analyticsContext.location, category_id: categoryId };
  length = null;
  const track = AnalyticsUtilsDefault.track;
  const SEARCH_RESULT_VIEWED = metroImportDefault.SEARCH_RESULT_VIEWED;
  AnalyticsUtilsDefault;
  if (undefined !== guildResults.guildResults) {
    length = guildResults.length;
  }
  mapped = null;
  if (undefined !== guildResults.guildResults) {
    mapped = guildResults.map((id) => id.id);
  }
  track(SEARCH_RESULT_VIEWED, obj);
};
export const trackGuildJoinClicked = function trackGuildJoinClicked(guildId) {
  const loadId = LurkingStore.getLoadId(guildId);
  obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id: guildId, load_id: loadId, guild_size: GuildMemberCountStore.getMemberCount(guildId) };
  obj.track(metroImportDefault.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, obj2);
};
export const getDiscoverableGuild = function getDiscoverableGuild() {
  return obj(...arguments);
};
export const fetchPublicDiscoveryGuild = function fetchPublicDiscoveryGuild() {
  return obj(...arguments);
};
