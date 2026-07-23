// Module ID: 9575
// Function ID: 74581
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 1317, 1212, 566, 686, 2]

// Module 9575 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import getSystemLocale from "getSystemLocale";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
      const IMAGE = require(1317) /* _callSuper */.GIFType.IMAGE;
    }
  }
  return require(1317) /* _callSuper */.GIFType.VIDEO;
}
require("ME").GIFPickerResultTypes;
let IMAGE = require("_callSuper").GIFType.IMAGE;
let c9 = null;
let c10 = "";
let c11 = "";
let closure_12 = [];
let closure_13 = [];
let closure_14 = [];
let closure_15 = [];
let tmp2 = ((Store) => {
  class GIFPickerViewStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GIFPickerViewStore);
      obj = outer1_5(GIFPickerViewStore);
      tmp2 = outer1_4;
      if (outer1_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GIFPickerViewStore, Store);
  let obj = {
    key: "getAnalyticsID",
    value() {
      return outer1_9;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getQuery",
    value() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "getResultQuery",
    value() {
      return outer1_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getResultItems",
    value() {
      return outer1_12;
    }
  };
  items[4] = {
    key: "getTrendingCategories",
    value() {
      return outer1_13;
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
      return outer1_14;
    }
  };
  items[7] = {
    key: "getTrendingSearchTerms",
    value() {
      return outer1_15;
    }
  };
  return callback(GIFPickerViewStore, items);
})(require("initialize").Store);
tmp2.displayName = "GIFPickerViewStore";
tmp2 = new tmp2(require("dispatcher"), {
  GIF_PICKER_INITIALIZE: function handleInitialize(analyticsID) {
    analyticsID = analyticsID.analyticsID;
  },
  GIF_PICKER_QUERY: function handleQuery(query) {
    query = query.query;
    if ("" === query) {
      let c11 = "";
      let closure_12 = [];
      let closure_14 = [];
    }
  },
  GIF_PICKER_QUERY_SUCCESS: function handleQuerySuccess(query) {
    if (null != query.query) {
      if (c10 === query) {
        return false;
      }
    }
    if (null != query.query) {
      query = query.query;
    }
    const items = query.items;
    let closure_12 = items.map((width) => ({ width: width.width, height: width.height, src: width.src, gifSrc: width.gif_src, url: width.url, id: width.id, format: outer1_8 }));
  },
  GIF_PICKER_QUERY_FAILURE: function handleQueryFailure(query) {
    query = query.query;
    if (null == query) {
      return false;
    } else {
      let closure_12 = [];
    }
  },
  GIF_PICKER_TRENDING_FETCH_SUCCESS: function handleTrendingFetchSuccess(trendingCategories) {
    trendingCategories = trendingCategories.trendingCategories;
    if (null != trendingCategories.trendingGIFPreview) {
      let obj = { type: GIFPickerResultTypes.TRENDING_GIFS };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.name = intl.string(require(1212) /* getSystemLocale */.t.H6zNFz);
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
        obj["type"] = outer1_7.TRENDING_CATEGORY;
        obj["format"] = outer1_17(src.src);
        return obj;
      })
    ];
  },
  GIF_PICKER_SUGGESTIONS_SUCCESS: function handleSuggestionsSuccess(items) {
    items = items.items;
  },
  GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function handleTrendingSearchSuccess(items) {
    items = items.items;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/views/GIFPickerViewStore.tsx");

export default tmp2;
