// Module ID: 9568
// Function ID: 74551
// Name: trackSearchStart
// Dependencies: []
// Exports: addFavoriteGIF, fetchSuggestions, fetchTrending, fetchTrendingGIFs, fetchTrendingSearchTerms, initializeSearch, removeFavoriteGIF, search, trackSelectGIF

// Module 9568 (trackSearchStart)
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
  const obj3 = importDefault(dependencyMap[4]);
  obj.gif_provider = arg1(dependencyMap[5]).getProviderForAPIRequest();
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
  obj = { <string:520483923>: 180, <string:1688739144>: null, totalResults: arg0.length };
  let obj2 = type(dependencyMap[6]);
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
  const obj6 = importDefault(dependencyMap[4]);
  obj3["gif_provider"] = type(dependencyMap[5]).getProviderForAPIRequest();
  obj6.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj3);
}
function doSearchRequest(q, arg1, limit) {
  arg1 = q;
  const importDefault = arg1;
  const dependencyMap = limit;
  let closure_3 = Date.now();
  trackSearchStart(arg1);
  const HTTP = arg1(dependencyMap[7]).HTTP;
  let obj = { url: constants2.GIFS_SEARCH };
  obj = { q, media_format: store.getSelectedFormat(), provider: arg1(dependencyMap[5]).getProviderForAPIRequest(), locale: closure_3.locale, limit };
  obj.query = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  value.then((body) => {
    body = body.body;
    let obj = { startTime: closure_3, limit: arg2 };
    callback(body, arg1, obj);
    obj = { type: "GIF_PICKER_QUERY_SUCCESS", query: body, items: body };
    arg1(arg2[8]).dispatch(obj);
  }, () => {
    let obj = arg1(arg2[8]);
    obj = { type: "GIF_PICKER_QUERY_FAILURE", query: arg0 };
    return obj.dispatch(obj);
  });
}
function resetSearch() {
  importDefault(dependencyMap[8]).dispatch({ 9223372036854775807: "properties", 9223372036854775807: 72 });
}
function gifUrlKey(uri) {
  let str = uri;
  const toURLSafeResult = importDefault(dependencyMap[11]).toURLSafe(uri);
  let tmp3 = uri;
  if (null != toURLSafeResult) {
    if (obj2.isAttachmentUrl(toURLSafeResult)) {
      str = arg1(dependencyMap[12]).removeSignedUrlParameters(toURLSafeResult);
      str = str.toString();
      const obj3 = arg1(dependencyMap[12]);
    }
    tmp3 = str;
    const obj2 = arg1(dependencyMap[12]);
  }
  return tmp3;
}
function isProxiedAttachment(src) {
  const toURLSafeResult = importDefault(dependencyMap[11]).toURLSafe(src.src);
  let tmp2 = null != toURLSafeResult;
  if (tmp2) {
    let result = arg1(dependencyMap[12]).isExternalProxiedAttachmentUrl(toURLSafeResult);
    if (!result) {
      result = arg1(dependencyMap[12]).isAttachmentUrl(toURLSafeResult);
      const obj3 = arg1(dependencyMap[12]);
    }
    tmp2 = result;
    const obj2 = arg1(dependencyMap[12]);
  }
  return tmp2;
}
function isImageExtensionUrl(arg0) {
  return regex.test(arg0);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_5, Endpoints: closure_6, SearchTypes: closure_7, GIFPickerResultTypes: closure_8 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ MAX_FAVORITE_GIFS_SIZE: closure_9, UserSettingsDelay: closure_10 } = arg1(dependencyMap[3]));
let closure_11 = /-/g;
const tmp3 = arg1(dependencyMap[3]);
let closure_12 = importDefault(dependencyMap[9]).debounce(doSearchRequest, 250);
let closure_13 = /\.(webp|avif|gif)(\?|$)/i;
const importDefaultResult = importDefault(dependencyMap[9]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("actions/GIFPickerActionCreators.tsx");

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
    let obj = importDefault(dependencyMap[8]);
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
  const arg1 = resultQuery;
  let tmp = "" !== resultQuery;
  if (tmp) {
    tmp = null != resultQuery;
  }
  if (tmp) {
    const HTTP = arg1(dependencyMap[7]).HTTP;
    let obj = { url: constants2.GIFS_SUGGEST };
    obj = { q: resultQuery, provider: arg1(dependencyMap[5]).getProviderForAPIRequest(), limit: 5, locale: closure_3.locale };
    obj.query = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = true;
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = callback(closure_2[8]);
      obj = { type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: body, items: body.body };
      obj.dispatch(obj);
    });
    const obj3 = arg1(dependencyMap[5]);
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
  let obj = arg1(dependencyMap[6]);
  const result = obj.calculateAnalyticsMetadata(store.getAnalyticsID(), type, { offset, limit, results, totalResults });
  let obj1 = importDefault(dependencyMap[4]);
  obj = {};
  const merged = Object.assign(result);
  obj["index_num"] = index;
  obj["source_object"] = "GIF Picker";
  obj["query"] = query;
  obj1.trackWithMetadata(constants.SEARCH_RESULT_SELECTED, obj);
  if (null != gifId) {
    const providerForAPIRequest = arg1(dependencyMap[5]).getProviderForAPIRequest();
    const HTTP = arg1(dependencyMap[7]).HTTP;
    obj = { url: constants2.GIFS_SELECT };
    obj1 = { id: gifId, q: query, provider: providerForAPIRequest };
    obj.body = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = true;
    HTTP.post(obj);
    const obj4 = arg1(dependencyMap[5]);
  }
};
export const initializeSearch = function initializeSearch() {
  let obj = arg1(dependencyMap[10]);
  const replaced = obj.v4().replace(closure_11, "");
  const arg1 = replaced;
  const str = obj.v4();
  obj = { search_type: constants3.GIF, load_id: replaced };
  importDefault(dependencyMap[4]).trackWithMetadata(constants.SEARCH_OPENED, obj);
  const obj2 = importDefault(dependencyMap[4]);
  importDefault(dependencyMap[8]).wait(() => {
    let obj = callback(closure_2[8]);
    obj = { type: "GIF_PICKER_INITIALIZE", analyticsID: replaced };
    obj.dispatch(obj);
  });
};
export const fetchTrending = function fetchTrending() {
  const HTTP = arg1(dependencyMap[7]).HTTP;
  let obj = { url: constants2.GIFS_TRENDING };
  obj = { provider: arg1(dependencyMap[5]).getProviderForAPIRequest(), locale: closure_3.locale, media_format: store.getSelectedFormat() };
  obj.query = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  value.then((body) => {
    let categories;
    let gifs;
    ({ categories, gifs } = body.body);
    let obj = callback(closure_2[8]);
    obj = { type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: categories, trendingGIFPreview: gifs[0] };
    obj.dispatch(obj);
  });
};
export const fetchTrendingGIFs = function fetchTrendingGIFs(closure_10) {
  const arg1 = closure_10;
  let closure_1 = Date.now();
  trackSearchStart(constants4.TRENDING_GIFS);
  const HTTP = arg1(dependencyMap[7]).HTTP;
  let obj = { url: constants2.GIFS_TRENDING_GIFS };
  obj = { media_format: store.getSelectedFormat(), provider: arg1(dependencyMap[5]).getProviderForAPIRequest(), locale: closure_3.locale, limit: closure_10 };
  obj.query = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  value.then((body) => {
    body = body.body;
    callback2(body, constants.TRENDING_GIFS, { startTime: callback, limit: body });
    callback(closure_2[8]).dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: body });
  }, () => {
    callback(closure_2[8]).dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
  });
};
export { gifUrlKey };
export const addFavoriteGIF = function addFavoriteGIF(item) {
  const arg1 = item;
  const FrecencyUserSettingsActionCreators = arg1(dependencyMap[13]).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", (gifs) => {
    let obj = callback(closure_2[9]);
    const values = Object.values(gifs.gifs);
    const maxResult = obj.max(values.map((order) => order.order));
    let num = 0;
    if (null != maxResult) {
      num = maxResult;
    }
    let obj1 = /\.(mp4|webm)(\?|$)/i;
    if (obj1.test(gifs.src)) {
      if (null != tmp2.gifSrc) {
        if ("" !== tmp2.gifSrc) {
          let obj3 = src;
          if (callback3(tmp2)) {
            obj3 = src;
            if (callback4(src)) {
              const str2 = callback(closure_2[11]).toURLSafe(src);
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
                let src = str2.toString();
                const endsWithResult = formatted.endsWith(".webp");
                const str12 = str2.pathname;
              }
              obj3 = tmp7;
              const obj4 = callback(closure_2[11]);
            }
          }
          let combined = obj3;
          if (obj3.startsWith("//")) {
            const _HermesInternal = HermesInternal;
            combined = "https:" + obj3;
          }
          if (callback4(combined)) {
            let format = gifs(closure_2[14]).GIFType.IMAGE;
          } else {
            format = gifs.format;
          }
          obj = {};
          const merged = Object.assign(gifs);
          obj["src"] = combined;
          obj["format"] = format;
          obj["order"] = num + 1;
          gifs.gifs[callback2(gifs.url)] = obj;
          const FavoriteGIFs = gifs(closure_2[14]).FavoriteGIFs;
          if (FavoriteGIFs.toBinary(gifs).length > closure_9) {
            obj = {};
            const intl = gifs(closure_2[16]).intl;
            obj.title = intl.string(gifs(closure_2[16]).t.+XYXtZ);
            const intl2 = gifs(closure_2[16]).intl;
            obj.body = intl2.string(gifs(closure_2[16]).t.YSDH9n);
            callback(closure_2[15]).show(obj);
            return false;
          } else {
            const sizeResult = callback(closure_2[9]).size(gifs.gifs);
            if (sizeResult > 2) {
              gifs.hideTooltip = true;
            }
            const obj6 = callback(closure_2[9]);
            obj1 = { total_num_favorited: sizeResult };
            callback(closure_2[17]).track(constants.GIF_FAVORITED, obj1);
          }
          const tmp20 = callback2(gifs.url);
        }
        src = tmp2.gifSrc;
      }
    }
    src = tmp2.src;
  }, constants5.INFREQUENT_USER_ACTION);
};
export const removeFavoriteGIF = function removeFavoriteGIF(uri) {
  const arg1 = uri;
  const FrecencyUserSettingsActionCreators = arg1(dependencyMap[13]).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", (gifs) => {
    if (gifs in gifs.gifs) {
      delete r1[r0];
    } else {
      callback2(gifs);
      delete r1[r2];
    }
    let obj = callback(closure_2[17]);
    obj = { total_num_favorited: callback(closure_2[9]).size(gifs.gifs) };
    obj.track(constants.GIF_UNFAVORITED, obj);
  }, constants5.INFREQUENT_USER_ACTION);
};
export const fetchTrendingSearchTerms = function fetchTrendingSearchTerms() {
  const HTTP = arg1(dependencyMap[7]).HTTP;
  let obj = { url: constants2.GIFS_TRENDING_SEARCH };
  obj = { provider: arg1(dependencyMap[5]).getProviderForAPIRequest(), limit: 5, locale: closure_3.locale };
  obj.query = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = true;
  const value = HTTP.get(obj);
  value.then((items) => {
    callback(closure_2[8]).dispatch({ type: "GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS", items: items.body });
  });
};
