// Module ID: 9567
// Function ID: 74516
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9567 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getFormatFromUrl(src) {
  const uRL = new URL(src);
  const formatted = uRL.pathname.toLowerCase();
  if (!formatted.endsWith(".mp4")) {
    if (!formatted.endsWith(".webm")) {
      const IMAGE = arg1(dependencyMap[6]).GIFType.IMAGE;
    }
  }
  return arg1(dependencyMap[6]).GIFType.VIDEO;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
arg1(dependencyMap[5]).GIFPickerResultTypes;
const IMAGE = arg1(dependencyMap[6]).GIFType.IMAGE;
let closure_9 = null;
let closure_10 = "";
let closure_11 = "";
let closure_12 = [];
let closure_13 = [];
let closure_14 = [];
let closure_15 = [];
let tmp2 = (Store) => {
  class GIFPickerViewStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GIFPickerViewStore);
      obj = closure_5(GIFPickerViewStore);
      tmp2 = closure_4;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GIFPickerViewStore;
  callback2(GIFPickerViewStore, Store);
  let obj = {
    key: "getAnalyticsID",
    value() {
      return closure_9;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getQuery",
    value() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "getResultQuery",
    value() {
      return closure_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getResultItems",
    value() {
      return closure_12;
    }
  };
  items[4] = {
    key: "getTrendingCategories",
    value() {
      return closure_13;
    }
  };
  items[5] = {
    key: "getSelectedFormat",
    value() {
      return "tinywebp";
    }
  };
  items[6] = {
    key: "getSuggestions",
    value() {
      return closure_14;
    }
  };
  items[7] = {
    key: "getTrendingSearchTerms",
    value() {
      return closure_15;
    }
  };
  return callback(GIFPickerViewStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp2.displayName = "GIFPickerViewStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  GIF_PICKER_INITIALIZE: function handleInitialize(analyticsID) {
    analyticsID = analyticsID.analyticsID;
  },
  GIF_PICKER_QUERY: function handleQuery(query) {
    query = query.query;
    let closure_10 = query;
    if ("" === query) {
      let closure_11 = "";
      let closure_12 = [];
      let closure_14 = [];
    }
  },
  GIF_PICKER_QUERY_SUCCESS: function handleQuerySuccess(query) {
    if (null != query.query) {
      if (closure_10 === query) {
        return false;
      }
    }
    if (null != query.query) {
      query = query.query;
    }
    const items = query.items;
    let closure_12 = items.map((width) => ({ width: width.width, height: width.height, src: width.src, gifSrc: width.gif_src, url: width.url, id: width.id, format: closure_8 }));
  },
  GIF_PICKER_QUERY_FAILURE: function handleQueryFailure(query) {
    query = query.query;
    if (null == query) {
      return false;
    } else {
      let closure_11 = query;
      let closure_12 = [];
    }
  },
  GIF_PICKER_TRENDING_FETCH_SUCCESS: function handleTrendingFetchSuccess(trendingCategories) {
    trendingCategories = trendingCategories.trendingCategories;
    if (null != trendingCategories.trendingGIFPreview) {
      const obj = { type: GIFPickerResultTypes.TRENDING_GIFS };
      const intl = arg1(dependencyMap[7]).intl;
      obj.name = intl.string(arg1(dependencyMap[7]).t.H6zNFz);
      obj.src = trendingCategories.trendingGIFPreview.src;
      obj.format = getFormatFromUrl(trendingCategories.trendingGIFPreview.src);
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    const items2 = [
      ...items1,
      ...trendingCategories.map((src) => {
        const obj = {};
        const merged = Object.assign(src);
        obj["src"] = src.src;
        obj["type"] = constants.TRENDING_CATEGORY;
        obj["format"] = callback(src.src);
        return obj;
      })
    ];
    let closure_13 = items2;
  },
  GIF_PICKER_SUGGESTIONS_SUCCESS: function handleSuggestionsSuccess(items) {
    items = items.items;
  },
  GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function handleTrendingSearchSuccess(items) {
    items = items.items;
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("stores/views/GIFPickerViewStore.tsx");

export default tmp2;
