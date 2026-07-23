// Module ID: 5736
// Function ID: 49303
// Name: _startLurking
// Dependencies: [5, 3759, 4051, 1838, 653, 1198, 5737, 5628, 5048, 5698, 5700, 675, 507, 1440, 2]
// Exports: fetchPublicDiscoveryGuild, getDiscoverableGuild, startLurking, trackDiscoveryExited, trackGuildDiscoveryGetFeaturedGuildsFailed, trackGuildDiscoverySearchStart, trackGuildJoinClicked, trackSearchClosed, trackSearchFailed, trackSearchResultsViewed, trackSearchStarted

// Module 5736 (_startLurking)
import shouldNavigate from "shouldNavigate";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
async function _startLurking(arg0, arg1, arg2) {
  let iter = (function*(guildId, analyticsSource, arg2, sourceLocationStack) {
    let channelId;
    let joinSource;
    let onSuccess;
    let shouldNavigate;
    let obj = arg2;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    ({ channelId, onSuccess, joinSource, shouldNavigate } = obj);
    let tmp2 = undefined === shouldNavigate;
    if (!tmp2) {
      tmp2 = shouldNavigate;
    }
    let obj1 = outer2_0(outer2_2[5]);
    const history = obj1.getHistory();
    const guild = outer2_6.getGuild(guildId);
    obj = { sourceLocationStack, state: obj };
    obj = { analyticsSource };
    if (null != guild) {
      if (null != guild.joinedAt) {
        if (tmp2) {
          if (null == channelId) {
            outer2_0(outer2_2[6]).transitionToGuild(guildId, obj);
            const obj14 = outer2_0(outer2_2[6]);
          } else {
            obj1 = {};
            const tmp32 = outer2_1(outer2_2[7]);
            const merged = Object.assign(obj);
            obj1["navigationReplace"] = true;
            obj1["openChannel"] = true;
            tmp32(outer2_10.CHANNEL(guildId, channelId, obj.messageId), obj1);
            const CHANNELResult = outer2_10.CHANNEL(guildId, channelId, obj.messageId);
          }
        }
      }
      if (null != onSuccess) {
        onSuccess();
      }
    }
    if (null != guild) {
      if (outer2_4.isLurking(guildId)) {
        if (tmp2) {
          const obj11 = outer2_1(outer2_2[8]);
          const obj2 = {};
          const merged1 = Object.assign(obj);
          obj2["welcomeModalChannelId"] = channelId;
          obj2["navigationReplace"] = null != channelId;
          obj2["openChannel"] = null != channelId;
          obj2["search"] = history.location.search;
          return yield obj11.transitionToGuildSync(guildId, obj2, channelId, obj.messageId);
        }
      }
    }
    let tmp6;
    if (null != sourceLocationStack) {
      tmp6 = sourceLocationStack[sourceLocationStack.length - 1];
    }
    if (null == tmp6) {
      let page;
      if (null != analyticsSource) {
        page = analyticsSource.page;
      }
      tmp6 = page;
    }
    let obj4 = outer2_0(outer2_2[9]);
    if (obj4.getMobileLurkerServerPreview("startLurking").enabled) {
      outer2_0(outer2_2[10]).trackLurkStarted(guildId, joinSource, tmp6);
      const obj6 = outer2_0(outer2_2[10]);
    }
    const obj3 = { lurker: true, source: joinSource, loadId: obj.loadId, lurkLocation: tmp6 };
    yield outer2_1(outer2_2[8]).joinGuild(guildId, obj3);
    if (tmp2) {
      const obj9 = outer2_1(outer2_2[8]);
      obj4 = {};
      const merged2 = Object.assign(obj);
      obj4["welcomeModalChannelId"] = channelId;
      obj4["navigationReplace"] = null != channelId;
      obj4["openChannel"] = null != channelId;
      obj4["search"] = history.location.search;
      return yield obj9.transitionToGuildSync(guildId, obj4, channelId, obj.messageId);
    }
  })();
  iter.next();
  return iter;
}
function makeDiscoverableGuild(body) {
  const obj = { id: body.id, name: body.name, description: body.description, splash: body.splash, banner: body.banner, icon: body.icon, features: new Set(body.features) };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, premium_subscription_count: obj.premiumSubscriptionCount, preferred_locale: obj.preferredLocale, discovery_splash: obj.discoverySplash, emojis: obj.emojis, emoji_count: obj.emojiCount, stickers: obj.stickers, sticker_count: obj.stickerCount, keywords: obj.keywords } = body);
  return obj;
}
async function _getDiscoverableGuild(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[12]).HTTP;
  let obj = { url: outer2_9.GUILD_DISCOVERY };
  obj = { guild_ids: arg0 };
  obj.query = outer2_1(outer2_2[13]).stringify(obj);
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const body = yield HTTP.get(obj).body;
  let first;
  if (null != body) {
    const guilds = tmp.guilds;
    if (null != guilds) {
      first = tmp4[0];
    }
  }
  if (null == first) {
    let tmp9 = first;
  } else {
    tmp9 = outer2_12(tmp6);
  }
  return tmp9;
}
async function _fetchPublicDiscoveryGuild(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[12]).HTTP;
  let obj = { url: outer2_9.GUILD_DISCOVERY_SLUG(String(arg0)), oldFormErrors: true, rejectWithError: true };
  const body = yield HTTP.get(obj).body;
  let guild;
  if (null != body) {
    guild = tmp.guild;
  }
  let tmp4 = null;
  if (null != guild) {
    let slug;
    if (null != tmp) {
      slug = tmp.slug;
    }
    tmp4 = null;
    if (null != slug) {
      obj = {};
      ({ guild: obj2.guild, slug: obj2.slug } = body);
      tmp4 = obj;
    }
  }
  return tmp4;
}
({ AnalyticEvents: closure_7, SearchTypes: closure_8, Endpoints: closure_9, Routes: closure_10 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/GuildDiscoveryUtils.tsx");

export const AnalyticsContexts = { SEARCH: "Search", RECOMMENDED: "Recommended", POPULAR: "Popular", RECOMMENDED_E3: "Recommended - E3", HEADER: "Header", GLOBAL_DISCOVERY: "Global Discovery", FORWARD_BREADCRUMB: "Forward Breadcrumb" };
export const IOS_MINIMUM_MEMBER_COUNT = ">1000";
export const MINIMUM_MEMBER_COUNT = ">200";
export const startLurking = function startLurking(guildId, analyticsLocation, arg2, analyticsLocationStack) {
  return _startLurking(...arguments);
};
export { makeDiscoverableGuild };
export const trackDiscoveryExited = function trackDiscoveryExited(load_id, guild_ids_viewed) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  let obj = importDefault(675);
  obj = { load_id, guild_ids_viewed, recommendations_source: tmp };
  obj.track(constants.GUILD_DISCOVERY_EXITED, obj);
};
export const trackSearchClosed = function trackSearchClosed(load_id) {
  let obj = importDefault(675);
  obj = { load_id };
  obj.track(constants.SEARCH_CLOSED, obj);
};
export const trackSearchStarted = function trackSearchStarted(load_id, category_id) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  obj = { search_type: constants2.GUILD_DISCOVERY, load_id };
  obj.location = obj.location;
  obj.category_id = category_id;
  importDefault(675).track(constants.SEARCH_STARTED, obj);
};
export const trackGuildDiscoverySearchStart = function trackGuildDiscoverySearchStart(arg0) {
  let offset;
  let withCounts;
  ({ withCounts, offset } = arg0);
  importDefault(675).track(constants.GUILD_DISCOVERY_SEARCH_START, { with_counts: withCounts, offset });
};
export const trackSearchFailed = function trackSearchFailed(error) {
  let categoryId;
  let isRequestRetry;
  let willRequestRetry;
  error = error.error;
  ({ categoryId, willRequestRetry, isRequestRetry } = error);
  let obj = importDefault(675);
  obj = { category_id: categoryId, request_status: error.status, request_error_code: error.code, will_request_retry: willRequestRetry, is_request_retry: isRequestRetry };
  obj.track(constants.GUILD_DISCOVERY_SEARCH_FAILED, obj);
};
export const trackGuildDiscoveryGetFeaturedGuildsFailed = function trackGuildDiscoveryGetFeaturedGuildsFailed(category_id) {
  importDefault(675).track(constants.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: category_id.categoryId });
};
export const trackSearchResultsViewed = function trackSearchResultsViewed(guildResults) {
  let analyticsContext;
  let categoryId;
  let isTagSearch;
  let loadId;
  let query;
  let searchId;
  ({ loadId, searchId, query, analyticsContext, categoryId, isTagSearch } = guildResults);
  let obj = importDefault(675);
  obj = { search_type: isTagSearch ? tmp.GUILD_DISCOVERY_TAG : tmp.GUILD_DISCOVERY, load_id: loadId, search_id: searchId };
  let length = null;
  if (undefined !== guildResults.guildResults) {
    length = guildResults.length;
  }
  obj.total_results = length;
  let mapped = null;
  if (undefined !== guildResults.guildResults) {
    mapped = guildResults.map((id) => id.id);
  }
  obj.guild_ids = mapped;
  obj.query = query;
  obj.location = analyticsContext.location;
  obj.category_id = categoryId;
  obj.track(constants.SEARCH_RESULT_VIEWED, obj);
};
export const trackGuildJoinClicked = function trackGuildJoinClicked(guildId) {
  loadId = loadId.getLoadId(guildId);
  let obj = importDefault(675);
  obj = { guild_id: guildId, load_id: loadId, guild_size: memberCount.getMemberCount(guildId) };
  obj.track(constants.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, obj);
};
export const getDiscoverableGuild = function getDiscoverableGuild() {
  return _getDiscoverableGuild(...arguments);
};
export const fetchPublicDiscoveryGuild = function fetchPublicDiscoveryGuild() {
  return _fetchPublicDiscoveryGuild(...arguments);
};
