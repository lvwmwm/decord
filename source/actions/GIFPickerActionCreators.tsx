// Module ID: 9612
// Function ID: 74816
// Name: trackSearchStart
// Dependencies: [1921, 9611, 653, 662, 4324, 9613, 9616, 507, 686, 22, 491, 1443, 9617, 1331, 1317, 4470, 1212, 675, 2]
// Exports: addFavoriteGIF, fetchSuggestions, fetchTrending, fetchTrendingGIFs, fetchTrendingSearchTerms, initializeSearch, removeFavoriteGIF, search, trackSelectGIF

// Module 9612 (trackSearchStart)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";
import importDefaultResult from "apply";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function trackSearchStart(arg0) {
  if (null != arg0) {
    let obj = {};
    obj[arg0] = 1;
  } else {
    obj = {};
  }
  obj = { search_type: constants3.GIF, load_id: store.getAnalyticsID() };
  obj.num_modifiers = Object.keys(obj).length;
  obj.modifiers = obj;
  const obj3 = importDefault(4324);
  obj.gif_provider = require(9613) /* getGifProviderConfig */.getProviderForAPIRequest();
  obj3.trackWithMetadata(constants.SEARCH_STARTED, obj);
}
function trackSearchResultViewed(arg0, type) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const startTime = obj.startTime;
  obj = Object.create(null);
  obj.startTime = 0;
  const merged = Object.assign(obj, obj);
  obj = { offset: 0, limit: null, totalResults: arg0.length };
  let obj2 = require(9616) /* isKlipyProvider */;
  const obj1 = {};
  const analyticsID = store.getAnalyticsID();
  const merged1 = Object.assign(obj);
  const merged2 = Object.assign(merged);
  obj1["results"] = arg0.length;
  const result = obj2.calculateAnalyticsMetadata(analyticsID, type, obj1);
  if (null == startTime) {
    obj2 = {};
  } else {
    obj2 = {};
    const _Date = Date;
    obj2.load_duration_ms = Date.now() - startTime;
  }
  const obj3 = {};
  const merged3 = Object.assign(result);
  const merged4 = Object.assign(obj2);
  const obj6 = importDefault(4324);
  obj3["gif_provider"] = require(9613) /* getGifProviderConfig */.getProviderForAPIRequest();
  obj6.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj3);
}
function doSearchRequest(q, arg1, limit) {
  const _require = q;
  let closure_1 = arg1;
  const dependencyMap = limit;
  let _isNativeReflectConstruct = Date.now();
  trackSearchStart(arg1);
  const HTTP = _require(507).HTTP;
  let obj = { url: constants2.GIFS_SEARCH };
  obj = { q, media_format: store.getSelectedFormat(), provider: _require(9613).getProviderForAPIRequest(), locale: _isNativeReflectConstruct.locale, limit };
  obj.query = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  value.then((body) => {
    body = body.body;
    let obj = { startTime: _isNativeReflectConstruct, limit };
    outer1_15(body, callback, obj);
    obj = { type: "GIF_PICKER_QUERY_SUCCESS", query: closure_0, items: body };
    callback(limit[8]).dispatch(obj);
  }, () => {
    let obj = callback(limit[8]);
    obj = { type: "GIF_PICKER_QUERY_FAILURE", query: closure_0 };
    return obj.dispatch(obj);
  });
}
function resetSearch() {
  importDefault(686).dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function gifUrlKey(uri) {
  let str = uri;
  const toURLSafeResult = importDefault(1443).toURLSafe(uri);
  let tmp3 = uri;
  if (null != toURLSafeResult) {
    if (obj2.isAttachmentUrl(toURLSafeResult)) {
      str = require(9617) /* isAttachmentUrl */.removeSignedUrlParameters(toURLSafeResult);
      str = str.toString();
      const obj3 = require(9617) /* isAttachmentUrl */;
    }
    tmp3 = str;
    obj2 = require(9617) /* isAttachmentUrl */;
  }
  return tmp3;
}
function isProxiedAttachment(src) {
  const toURLSafeResult = importDefault(1443).toURLSafe(src.src);
  let tmp2 = null != toURLSafeResult;
  if (tmp2) {
    let result = require(9617) /* isAttachmentUrl */.isExternalProxiedAttachmentUrl(toURLSafeResult);
    if (!result) {
      result = require(9617) /* isAttachmentUrl */.isAttachmentUrl(toURLSafeResult);
      const obj3 = require(9617) /* isAttachmentUrl */;
    }
    tmp2 = result;
    const obj2 = require(9617) /* isAttachmentUrl */;
  }
  return tmp2;
}
function isImageExtensionUrl(arg0) {
  return regex.test(arg0);
}
({ AnalyticEvents: closure_5, Endpoints: closure_6, SearchTypes: closure_7, GIFPickerResultTypes: closure_8 } = ME);
({ MAX_FAVORITE_GIFS_SIZE: closure_9, UserSettingsDelay: closure_10 } = MAX_FAVORITES);
const re11 = /-/g;
let closure_12 = require("apply").debounce(doSearchRequest, 250);
const re13 = /\.(webp|avif|gif)(\?|$)/i;
let result = require("ME").fileFinishedImporting("actions/GIFPickerActionCreators.tsx");

export { trackSearchStart };
export { trackSearchResultViewed };
export const search = function search(query, arg1, arg2, limit) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if ("" === query) {
    resetSearch();
  } else {
    let obj = importDefault(686);
    obj = { type: "GIF_PICKER_QUERY", query };
    obj.dispatch(obj);
    if (flag) {
      doSearchRequest(query, arg1, limit);
    } else {
      callback(query, arg1, limit);
    }
  }
};
export const fetchSuggestions = function fetchSuggestions(resultQuery) {
  const _require = resultQuery;
  let tmp = "" !== resultQuery;
  if (tmp) {
    tmp = null != resultQuery;
  }
  if (tmp) {
    const HTTP = _require(507).HTTP;
    let obj = { url: constants2.GIFS_SUGGEST };
    obj = { q: resultQuery, provider: _require(9613).getProviderForAPIRequest(), limit: 5, locale: _isNativeReflectConstruct.locale };
    obj.query = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = true;
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = outer1_1(outer1_2[8]);
      obj = { type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: closure_0, items: body.body };
      obj.dispatch(obj);
    });
    const obj3 = _require(9613);
  }
};
export { resetSearch };
export const trackSelectGIF = function trackSelectGIF(arg0) {
  let gifId;
  let index;
  let limit;
  let offset;
  let query;
  let results;
  let totalResults;
  let type;
  ({ query, gifId } = arg0);
  ({ type, index, offset, limit, results, totalResults } = arg0);
  let obj = require(9616) /* isKlipyProvider */;
  const result = obj.calculateAnalyticsMetadata(store.getAnalyticsID(), type, { offset, limit, results, totalResults });
  let obj1 = importDefault(4324);
  obj = {};
  const merged = Object.assign(result);
  obj["index_num"] = index;
  obj["source_object"] = "GIF Picker";
  obj["query"] = query;
  obj1.trackWithMetadata(constants.SEARCH_RESULT_SELECTED, obj);
  if (null != gifId) {
    const providerForAPIRequest = require(9613) /* getGifProviderConfig */.getProviderForAPIRequest();
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: constants2.GIFS_SELECT };
    obj1 = { id: gifId, q: query, provider: providerForAPIRequest };
    obj.body = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = true;
    HTTP.post(obj);
    const obj4 = require(9613) /* getGifProviderConfig */;
  }
};
export const initializeSearch = function initializeSearch() {
  let obj = replaced(491);
  replaced = obj.v4().replace(closure_11, "");
  const str = obj.v4();
  obj = { search_type: constants3.GIF, load_id: replaced };
  importDefault(4324).trackWithMetadata(constants.SEARCH_OPENED, obj);
  const obj2 = importDefault(4324);
  importDefault(686).wait(() => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "GIF_PICKER_INITIALIZE", analyticsID: replaced };
    obj.dispatch(obj);
  });
};
export const fetchTrending = function fetchTrending() {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: constants2.GIFS_TRENDING };
  obj = { provider: require(9613) /* getGifProviderConfig */.getProviderForAPIRequest(), locale: _isNativeReflectConstruct.locale, media_format: store.getSelectedFormat() };
  obj.query = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  value.then((body) => {
    let categories;
    let gifs;
    ({ categories, gifs } = body.body);
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: categories, trendingGIFPreview: gifs[0] };
    obj.dispatch(obj);
  });
};
export const fetchTrendingGIFs = function fetchTrendingGIFs(closure_10) {
  const _require = closure_10;
  let closure_1 = Date.now();
  trackSearchStart(constants4.TRENDING_GIFS);
  const HTTP = _require(507).HTTP;
  let obj = { url: constants2.GIFS_TRENDING_GIFS };
  obj = { media_format: store.getSelectedFormat(), provider: _require(9613).getProviderForAPIRequest(), locale: _isNativeReflectConstruct.locale, limit: closure_10 };
  obj.query = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  value.then((body) => {
    body = body.body;
    outer1_15(body, outer1_8.TRENDING_GIFS, { startTime: callback, limit: closure_0 });
    callback(outer1_2[8]).dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: body });
  }, () => {
    callback(outer1_2[8]).dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
  });
};
export { gifUrlKey };
export const addFavoriteGIF = function addFavoriteGIF(item) {
  const _require = item;
  const FrecencyUserSettingsActionCreators = _require(1331).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", (gifs) => {
    let obj = outer1_1(outer1_2[9]);
    const values = Object.values(gifs.gifs);
    const maxResult = obj.max(values.map((order) => order.order));
    let num = 0;
    if (null != maxResult) {
      num = maxResult;
    }
    let obj1 = /\.(mp4|webm)(\?|$)/i;
    if (obj1.test(item.src)) {
      if (null != tmp2.gifSrc) {
        if ("" !== tmp2.gifSrc) {
          let obj3 = src;
          if (outer1_19(tmp2)) {
            obj3 = src;
            if (outer1_20(src)) {
              const str2 = outer1_1(outer1_2[11]).toURLSafe(src);
              let tmp7 = src;
              if (null != str2) {
                const formatted = str2.pathname.toLowerCase();
                let endsWithResult1 = formatted.endsWith(".avif");
                const endsWithResult2 = formatted.endsWith(".gif");
                if (!endsWithResult) {
                  tmp7 = src;
                }
                if (!endsWithResult1) {
                  endsWithResult1 = endsWithResult2;
                }
                if (endsWithResult1) {
                  const searchParams = str2.searchParams;
                  const result = searchParams.set("format", "webp");
                }
                const searchParams2 = str2.searchParams;
                const result1 = searchParams2.set("animated", "true");
                src = str2.toString();
                endsWithResult = formatted.endsWith(".webp");
                const str12 = str2.pathname;
              }
              obj3 = tmp7;
              const obj4 = outer1_1(outer1_2[11]);
            }
          }
          let combined = obj3;
          if (obj3.startsWith("//")) {
            const _HermesInternal = HermesInternal;
            combined = "https:" + obj3;
          }
          if (outer1_20(combined)) {
            let format = item(outer1_2[14]).GIFType.IMAGE;
          } else {
            format = item.format;
          }
          obj = {};
          const merged = Object.assign(item);
          obj["src"] = combined;
          obj["format"] = format;
          obj["order"] = num + 1;
          gifs.gifs[outer1_18(item.url)] = obj;
          const FavoriteGIFs = item(outer1_2[14]).FavoriteGIFs;
          if (FavoriteGIFs.toBinary(gifs).length > outer1_9) {
            obj = {};
            const intl = item(outer1_2[16]).intl;
            obj.title = intl.string(item(outer1_2[16]).t["+XYXtZ"]);
            const intl2 = item(outer1_2[16]).intl;
            obj.body = intl2.string(item(outer1_2[16]).t.YSDH9n);
            outer1_1(outer1_2[15]).show(obj);
            return false;
          } else {
            const sizeResult = outer1_1(outer1_2[9]).size(gifs.gifs);
            if (sizeResult > 2) {
              gifs.hideTooltip = true;
            }
            const obj6 = outer1_1(outer1_2[9]);
            obj1 = { total_num_favorited: sizeResult };
            outer1_1(outer1_2[17]).track(outer1_5.GIF_FAVORITED, obj1);
          }
          const tmp20 = outer1_18(item.url);
        }
        src = tmp2.gifSrc;
      }
    }
    src = tmp2.src;
  }, constants5.INFREQUENT_USER_ACTION);
};
export const removeFavoriteGIF = function removeFavoriteGIF(uri) {
  const _require = uri;
  const FrecencyUserSettingsActionCreators = _require(1331).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", (gifs) => {
    if (closure_0 in gifs.gifs) {
      delete tmp2[tmp];
    } else {
      outer1_18(closure_0);
      delete tmp2[tmp3];
    }
    let obj = outer1_1(outer1_2[17]);
    obj = { total_num_favorited: outer1_1(outer1_2[9]).size(gifs.gifs) };
    obj.track(outer1_5.GIF_UNFAVORITED, obj);
  }, constants5.INFREQUENT_USER_ACTION);
};
export const fetchTrendingSearchTerms = function fetchTrendingSearchTerms() {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: constants2.GIFS_TRENDING_SEARCH };
  obj = { provider: require(9613) /* getGifProviderConfig */.getProviderForAPIRequest(), limit: 5, locale: _isNativeReflectConstruct.locale };
  obj.query = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  value.then((items) => {
    outer1_1(outer1_2[8]).dispatch({ type: "GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS", items: items.body });
  });
};
