// Module ID: 10122
// Function ID: 78312
// Name: isPrefix
// Dependencies: [6, 7, 9141, 9169, 2]

// Module 10122 (isPrefix)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { SearchQueryTagTypes } from "SearchAutocompleteSelectAnalyticsActions";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";

function isPrefix(type) {
  return type.type === SearchQueryTagTypes.PREFIX;
}
function isComplete(type) {
  return type.type === SearchQueryTagTypes.COMPLETE;
}
let tmp2 = (() => {
  class SearchQueryTagManager {
    constructor() {
      tmp = SearchQueryTagManager(this, SearchQueryTagManager);
      this.tags = [];
      set = new Set();
      this.ids = set;
      set1 = new Set();
      this.channelIds = set1;
      this.version = 0;
      return;
    }
  }
  let obj = {
    key: "markChanged",
    value() {
      const set = new Set();
      const set1 = new Set();
      const tags = this.tags;
      const item = tags.forEach((text) => {
        set.add(text.text);
        let tmp2 = outer2_5(text);
        if (tmp2) {
          tmp2 = null != text.channelId;
        }
        if (tmp2) {
          set1.add(text.channelId);
        }
      });
      this.ids = set;
      this.channelIds = set1;
      this.version = this.version + 1;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "mergeTag",
    value(location, channelId) {
      let _classCallCheck = location;
      let _defineProperties = channelId;
      const tags = this.tags;
      const items = [
        ...tags.filter((arg0) => {
          let tmp = arg0 !== _classCallCheck;
          if (tmp) {
            tmp = arg0 !== _defineProperties;
          }
          return tmp;
        }),
        { type: outer1_2.COMPLETE, text: "" + location.text + " " + channelId.text, location: location.location, searchTokenType: location.searchTokenType, channelId: channelId.channelId, userId: channelId.userId }
      ];
      this.tags = items;
    }
  };
  items[1] = obj;
  obj = {
    key: "replaceTag",
    value(arg0, arg1) {
      let _classCallCheck = arg0;
      let _defineProperties = arg1;
      const tags = this.tags;
      this.tags = tags.map((arg0) => {
        let tmp = arg0;
        if (arg0 === _classCallCheck) {
          tmp = _defineProperties;
        }
        return tmp;
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "exists",
    value(text) {
      const ids = this.ids;
      return ids.has(text.text);
    }
  };
  items[4] = {
    key: "getChannelIds",
    value() {
      return this.channelIds;
    }
  };
  items[5] = {
    key: "getUserIds",
    value(arg0) {
      let _classCallCheck = arg0;
      const set = new Set();
      const tags = this.tags;
      const item = tags.forEach((userId) => {
        if (outer2_5(userId)) {
          userId = userId.userId;
          let tmp2 = userId.searchTokenType === _classCallCheck;
          if (tmp2) {
            tmp2 = null != userId;
          }
          if (tmp2) {
            set.add(userId);
          }
        }
      });
      return set;
    }
  };
  items[6] = {
    key: "isChannelTagsOnly",
    value() {
      const tags = this.tags;
      const found = tags.filter(outer1_5);
      return found.every((channelId) => null != channelId.channelId);
    }
  };
  items[7] = {
    key: "hasUserAddedTags",
    value() {
      const tags = this.tags;
      const found = tags.filter(outer1_5);
      return found.some((location) => location.location !== outer2_3.CLIENT_AUTO_ADD);
    }
  };
  items[8] = {
    key: "isEmpty",
    value() {
      return 0 === this.tags.length;
    }
  };
  items[9] = {
    key: "getPrefixTag",
    value() {
      if (null != this.tags[this.tags.length - 1]) {
        let tmp3;
        if (outer1_4(tmp)) {
          tmp3 = tmp;
        }
        return tmp3;
      }
    }
  };
  items[10] = {
    key: "get",
    value() {
      return this.tags;
    }
  };
  items[11] = {
    key: "set",
    value(tags) {
      this.tags = tags;
      this.markChanged();
    }
  };
  items[12] = {
    key: "getQueryString",
    value() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const tags = this.tags;
      const found = tags.filter((arg0) => {
        const tmp = outer2_4(arg0);
        let tmp2 = !tmp;
        if (tmp) {
          tmp2 = flag;
        }
        return tmp2;
      });
      let str = "";
      if (0 !== found.length) {
        const mapped = found.map((text) => text.text);
        const _HermesInternal = HermesInternal;
        str = "" + mapped.join(" ");
      }
      return str;
    }
  };
  items[13] = {
    key: "add",
    value(type) {
      const self = this;
      if (!this.exists(type)) {
        if (outer1_4(type)) {
          if (null != tmp) {
            if (outer1_4(tmp)) {
              self.replaceTag(tmp, type);
            }
            self.markChanged();
            self.mergeTag(tmp, type);
          }
        }
        let tmp9 = outer1_4(type);
        if (!tmp9) {
          tmp9 = outer1_5(type);
        }
        if (tmp9) {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(self.tags, 0);
          items[arraySpreadResult] = type;
          const sum = arraySpreadResult + 1;
          self.tags = items;
        }
      }
    }
  };
  items[14] = {
    key: "removeAnyPrefixTags",
    value() {
      const tags = this.tags;
      this.tags = tags.filter((arg0) => !outer2_4(arg0));
      this.markChanged();
    }
  };
  items[15] = {
    key: "removeAtIndex",
    value(arg0) {
      let _classCallCheck = this.tags[arg0];
      const tags = this.tags;
      this.tags = tags.filter((arg0) => arg0 !== _classCallCheck);
      this.markChanged();
    }
  };
  return callback(SearchQueryTagManager, items);
})();
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/stores/SearchQueryTagManager.tsx");

export default tmp2;
