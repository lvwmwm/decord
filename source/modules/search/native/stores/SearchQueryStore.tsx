// Module ID: 10109
// Function ID: 77986
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 7, 6, 1348, 3767, 1849, 9141, 9169, 653, 4320, 1212, 10110, 10122, 1916, 566, 686, 2]

// Module 10109 (_isNativeReflectConstruct)
import closure_3 from "areArraysShallowlyEqual";
import dispatcher from "dispatcher";
import set from "set";
import importDefaultResult from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import ME from "ME";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";

let closure_11;
let closure_12;
let closure_14;
let closure_15;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getState(searchContext) {
  let value = map.get(require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(searchContext));
  if (null == value) {
    value = callback3(searchContext);
  }
  return value;
}
({ EMPTY_SEARCH_QUERY_STRING: closure_11, SearchQueryTagTypes: closure_12 } = SearchAutocompleteSelectAnalyticsActions);
({ SearchTokenTypes: closure_14, SearchTypes: closure_15 } = ME);
class SearchQueryStateManager {
  constructor(arg0) {
    self = this;
    self = this;
    tmp = c7(this, SearchQueryStateManager);
    this.isExplicitSearchSubmitted = false;
    this.getQueryString = () => {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const tagsManager = self.tagsManager;
      const queryString = tagsManager.getQueryString(flag);
      if (0 !== queryString.length) {
        const _HermesInternal = HermesInternal;
        let textInputValue = "" + queryString + " " + self.textInputValue;
      } else {
        textInputValue = self.textInputValue;
      }
      return textInputValue;
    };
    this.isQueryStringEmpty = () => 0 === self.getQueryString().trim().length;
    this.getTextInputValue = () => self.textInputValue;
    this.setTextInputValue = (textInputValue) => {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      self.textInputValue = textInputValue;
      self.textInputChangedFromInput = flag;
      const result = self.resetExplicitSearchSubmitted();
    };
    this.isInitialSearchQuery = () => {
      let tmp = !self.isExplicitSearchSubmitted;
      if (tmp) {
        let tmp3 = 0 === self.textInputValue.trim().length;
        if (tmp3) {
          const tagsManager = self.tagsManager;
          tmp3 = !tagsManager.hasUserAddedTags();
        }
        tmp = tmp3;
        const str = self.textInputValue;
      }
      return tmp;
    };
    this.markExplicitSearchSubmitted = () => {
      self.isExplicitSearchSubmitted = true;
    };
    this.resetExplicitSearchSubmitted = () => {
      self.isExplicitSearchSubmitted = false;
    };
    this.getSearchResultsQuery = () => self.searchResultsQuery;
    this.setSearchResultsQuery = (searchResultsQuery) => {
      self.searchResultsQuery = searchResultsQuery;
    };
    this.isTextInputValueEmpty = () => 0 === self.textInputValue.trim().length;
    this.getTextValueChangedFromInput = () => self.textInputChangedFromInput;
    this.hasUserAddedTags = () => {
      const tagsManager = self.tagsManager;
      return tagsManager.hasUserAddedTags();
    };
    this.getTags = () => {
      const tagsManager = self.tagsManager;
      return tagsManager.get();
    };
    this.getPrefixTag = () => {
      const tagsManager = self.tagsManager;
      return tagsManager.getPrefixTag();
    };
    this.isAutocompleteVisible = () => null != self.getPrefixTag();
    this.setTags = (arg0) => {
      const tagsManager = self.tagsManager;
      const result = tagsManager.set(arg0);
      const result1 = self.resetExplicitSearchSubmitted();
    };
    this.addTag = (arg0) => {
      const tagsManager = self.tagsManager;
      tagsManager.add(arg0);
      const result = self.resetExplicitSearchSubmitted();
    };
    this.removeTag = (arg0) => {
      const tagsManager = self.tagsManager;
      tagsManager.removeAtIndex(arg0);
      const result = self.resetExplicitSearchSubmitted();
    };
    this.removePrefixTags = () => {
      const tagsManager = self.tagsManager;
      tagsManager.removeAnyPrefixTags();
      const result = self.resetExplicitSearchSubmitted();
    };
    this.getChannelIds = () => {
      const tagsManager = self.tagsManager;
      return tagsManager.getChannelIds();
    };
    this.getUserIds = (arg0) => {
      const tagsManager = self.tagsManager;
      return tagsManager.getUserIds(arg0);
    };
    this.isTagsEmpty = () => {
      const tagsManager = self.tagsManager;
      return tagsManager.isEmpty();
    };
    this.saveDraftTextInputValue = () => {
      let result = null != self.draftTextInputValue;
      if (!result) {
        result = self.isTextInputValueEmpty();
      }
      if (!result) {
        self.draftTextInputValue = self.textInputValue;
      }
    };
    this.restoreDraftTextInputValue = () => {
      if (null != self.draftTextInputValue) {
        self.textInputValue = self.draftTextInputValue;
        self.textInputChangedFromInput = false;
        self.draftTextInputValue = null;
      }
    };
    this.reset = () => {
      self.textInputValue = outer1_11;
      self.textInputChangedFromInput = false;
      self.searchResultsQuery = outer1_11;
      self.draftTextInputValue = null;
      self.isExplicitSearchSubmitted = false;
      const tagsManager = self.tagsManager;
      const result = tagsManager.set(self.initialTagsSnapshot);
    };
    this.textInputValue = EMPTY_SEARCH_QUERY_STRING;
    this.textInputChangedFromInput = false;
    this.searchResultsQuery = EMPTY_SEARCH_QUERY_STRING;
    type = global.type;
    if (SearchTypes.THREAD !== type) {
      tmp2 = SearchTypes;
      if (SearchTypes.GUILD_CHANNEL !== type) {
        items = [];
      }
      self.initialTagsSnapshot = items;
      tmp8 = closure_1;
      tmp9 = closure_2;
      num2 = 14;
      tmp10 = require("isPrefix");
      prototype = tmp10.prototype;
      tmp11 = new.target;
      tmp12 = new.target;
      tmp10 = new tmp10();
      tmp14 = tmp10;
      self.tagsManager = tmp10;
      tagsManager = self.tagsManager;
      result = tagsManager.set(self.initialTagsSnapshot);
      tmp16 = null;
      self.draftTextInputValue = null;
      return;
    }
    channel = c8.getChannel(global.channelId);
    if (null != channel) {
      if (channel.isObfuscated()) {
        items = [];
      }
    }
    channelName = undefined;
    if (null != channel) {
      tmp4 = self;
      tmp5 = closure_2;
      num = 11;
      obj2 = require("computeDefaultGroupDmNameFromUserIds");
      tmp6 = c10;
      tmp7 = c9;
      channelName = obj2.computeChannelName(channel, c10, c9);
    }
    if (null == channelName) {
      items1 = [];
    } else {
      obj = {};
      tmp17 = SearchQueryTagTypes;
      obj.type = SearchQueryTagTypes.COMPLETE;
      tmp18 = SearchTokenTypes;
      obj.searchTokenType = SearchTokenTypes.FILTER_IN;
      tmp19 = self;
      tmp20 = closure_2;
      num3 = 12;
      intl = require("getSystemLocale").intl;
      num4 = 13;
      stringResult = intl.string(require("getSystemLocale").t.WNpFHa);
      obj4 = require("_createForOfIteratorHelperLoose");
      tmp22 = globalThis;
      _HermesInternal = HermesInternal;
      str = "";
      str2 = ": ";
      obj.text = "" + stringResult + ": " + obj4.quoteChannelName(channelName);
      obj.channelId = global.channelId;
      tmp23 = SearchFilterAddLocations;
      obj.location = SearchFilterAddLocations.CLIENT_AUTO_ADD;
      items1 = [];
      items1[0] = obj;
    }
    items = items1;
    return;
  }
}
const importDefaultResultResult = importDefaultResult(SearchQueryStateManager);
const map = new Map();
let closure_18 = areArraysShallowlyEqual.cachedFunction((arg0) => new closure_16(arg0));
let tmp7 = ((Store) => {
  class NativeSearchQueryStore {
    constructor() {
      self = this;
      tmp = outer1_7(this, NativeSearchQueryStore);
      obj = outer1_4(NativeSearchQueryStore);
      tmp2 = outer1_3;
      if (outer1_19()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(NativeSearchQueryStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_10, outer1_9);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "getManager",
    value(arg0) {
      return outer1_20(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getQueryString",
    value(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      return outer1_20(arg0).getQueryString(flag);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isQueryStringEmpty",
    value(arg0) {
      return outer1_20(arg0).isQueryStringEmpty();
    }
  };
  items[4] = {
    key: "getTextInputValue",
    value(arg0) {
      return outer1_20(arg0).getTextInputValue();
    }
  };
  items[5] = {
    key: "isInitialSearchQuery",
    value(arg0) {
      return outer1_20(arg0).isInitialSearchQuery();
    }
  };
  items[6] = {
    key: "getSearchResultsQuery",
    value(arg0) {
      return outer1_20(arg0).getSearchResultsQuery();
    }
  };
  items[7] = {
    key: "isTextInputValueEmpty",
    value(arg0) {
      return outer1_20(arg0).isTextInputValueEmpty();
    }
  };
  items[8] = {
    key: "getTextValueChangedFromInput",
    value(arg0) {
      return outer1_20(arg0).getTextValueChangedFromInput();
    }
  };
  items[9] = {
    key: "hasUserAddedTags",
    value(arg0) {
      return outer1_20(arg0).hasUserAddedTags();
    }
  };
  items[10] = {
    key: "getTags",
    value(arg0) {
      return outer1_20(arg0).getTags();
    }
  };
  items[11] = {
    key: "getPrefixTag",
    value(arg0) {
      return outer1_20(arg0).getPrefixTag();
    }
  };
  items[12] = {
    key: "isAutocompleteVisible",
    value(arg0) {
      return outer1_20(arg0).isAutocompleteVisible();
    }
  };
  items[13] = {
    key: "getChannelIds",
    value(arg0) {
      return outer1_20(arg0).getChannelIds();
    }
  };
  items[14] = {
    key: "getUserIds",
    value(arg0, arg1) {
      return outer1_20(arg0).getUserIds(arg1);
    }
  };
  items[15] = {
    key: "isTagsEmpty",
    value(arg0) {
      return outer1_20(arg0).isTagsEmpty();
    }
  };
  return importDefaultResult(NativeSearchQueryStore, items);
})(require("initialize").Store);
tmp7.displayName = "NativeSearchQueryStore";
areArraysShallowlyEqual = {
  SEARCH_QUERY_NATIVE_UPDATE: function handleSearchQueryNativeUpdate(searchContext) {
    searchContext = searchContext.searchContext;
    const searchContextId = require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(searchContext);
    let value = map.get(searchContextId);
    if (null == value) {
      const prototype = importDefaultResultResult.prototype;
      const tmp7 = new importDefaultResultResult(searchContext);
      const result = map.set(searchContextId, tmp7);
      value = tmp7;
    }
    searchContext.updater(value);
  },
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    map.delete(id.id);
  }
};
tmp7 = new tmp7(require("dispatcher"), areArraysShallowlyEqual);
let result = require("_inherits").fileFinishedImporting("modules/search/native/stores/SearchQueryStore.tsx");

export default tmp7;
export const SearchQueryStateManager = importDefaultResultResult;
