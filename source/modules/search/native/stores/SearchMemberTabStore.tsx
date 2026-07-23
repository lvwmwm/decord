// Module ID: 11409
// Function ID: 88702
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 1348, 653, 7094, 3763, 5047, 566, 686, 2]

// Module 11409 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import ME from "ME";
import sortByMatchScore from "sortByMatchScore";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_11 = [];
let closure_12 = (() => {
  class GuildMemberSearchManager {
    constructor() {
      self = this;
      tmp = outer1_7(this, self);
      this.count = null;
      this.isFetching = false;
      this.searchQueryString = "";
      this.targetChannelId = null;
      this.results = [];
      this.onAutocompleterResultsChange = (arr) => {
        if (arg1 === items.searchQueryString) {
          items.isFetching = false;
          items = [];
          const channel = outer2_9.getChannel(items.targetChannelId);
          const item = arr.forEach((type) => {
            if (type.type === GuildMemberSearchManager(outer3_3[7]).AutocompleterResultTypes.USER) {
              if (null != closure_1) {
                let obj = outer3_2(outer3_3[8]);
                obj = { permission: outer3_10.VIEW_CHANNEL, user: type.record, context: closure_1 };
              }
              items.push(type);
            }
          });
          items.results = items;
          if (items.searchQueryString.length > 0) {
            items.count = items.length;
          } else {
            items.count = null;
          }
          items = outer2_14;
          outer2_14.emitChange();
        }
      };
      tmp2 = outer1_1(outer1_3[7]);
      items = [];
      items[0] = GuildMemberSearchManager(outer1_3[7]).AutocompleterResultTypes.USER;
      tmp2 = new tmp2(this.onAutocompleterResultsChange, items, 50);
      this.autocompleter = tmp2;
      autocompleter = this.autocompleter;
      searchContext = autocompleter.createSearchContext();
      return;
    }
  }
  let obj = {
    key: "setAutocompleteOptions",
    value(arg0) {
      const autocompleter = this.autocompleter;
      autocompleter.setOptions(arg0);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "teardown",
    value() {
      const autocompleter = this.autocompleter;
      autocompleter.clean();
    }
  };
  items[1] = obj;
  obj = {
    key: "search",
    value(arg0, targetChannelId, str) {
      this.targetChannelId = targetChannelId;
      this.isFetching = true;
      const trimmed = str.toLowerCase().trim();
      this.searchQueryString = trimmed;
      str = str.toLowerCase();
      const members = outer1_1(outer1_3[9]).requestMembers(arg0, trimmed, 50);
      const autocompleter = this.autocompleter;
      autocompleter.search(trimmed);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getResults",
    value() {
      return this.results;
    }
  };
  items[4] = {
    key: "getCount",
    value() {
      return this.count;
    }
  };
  items[5] = {
    key: "getIsFetching",
    value() {
      return this.isFetching;
    }
  };
  return callback2(GuildMemberSearchManager, items);
})();
const map = new Map();
let tmp3 = ((Store) => {
  class SearchGuildMemberTabStoreImpl {
    constructor() {
      self = this;
      tmp = outer1_7(this, SearchGuildMemberTabStoreImpl);
      obj = outer1_5(SearchGuildMemberTabStoreImpl);
      tmp2 = outer1_4;
      if (outer1_15()) {
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
  callback(SearchGuildMemberTabStoreImpl, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getResults",
    value(arg0) {
      const value = outer1_13.get(arg0);
      let results;
      if (null != value) {
        results = value.getResults();
      }
      if (null == results) {
        results = outer1_11;
      }
      return results;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCount",
    value(arg0) {
      const value = outer1_13.get(arg0);
      let count;
      if (null != value) {
        count = value.getCount();
      }
      let tmp2 = null;
      if (null != count) {
        tmp2 = count;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsFetching",
    value(arg0) {
      const value = outer1_13.get(arg0);
      let isFetching;
      if (null != value) {
        isFetching = value.getIsFetching();
      }
      return null != isFetching && isFetching;
    }
  };
  return callback2(SearchGuildMemberTabStoreImpl, items);
})(require("initialize").Store);
tmp3.displayName = "SearchGuildMemberTabStore";
tmp3 = new tmp3(require("dispatcher"), {
  SEARCH_GUILD_MEMBER_TAB_SEARCH: function handleSearchGuildMemberTabSearch(arg0) {
    let channelId;
    let guildId;
    let id;
    let searchQueryString;
    let threadId;
    ({ id, guildId, threadId } = arg0);
    ({ channelId, searchQueryString } = arg0);
    let value = map.get(id);
    if (null == value) {
      const prototype = ctor.prototype;
      value = new ctor();
    }
    const result = map.set(id, value);
    let obj = { frecencyBoosters: true, allowSnowflake: true };
    obj = { guild: guildId, strict: true };
    let tmp5;
    if (null != threadId) {
      tmp5 = threadId;
    }
    obj.thread = tmp5;
    obj.userFilters = obj;
    const result1 = value.setAutocompleteOptions(obj);
    value.search(guildId, channelId, searchQueryString);
  },
  SEARCH_GUILD_MEMBER_TAB_CLEANUP: function handleSearchGuildMemberTabCleanup(id) {
    id = id.id;
    const value = map.get(id);
    if (null != value) {
      value.teardown();
    }
    map.delete(id);
  }
});
let closure_14 = tmp3;
let result = require("_inherits").fileFinishedImporting("modules/search/native/stores/SearchMemberTabStore.tsx");

export default tmp3;
