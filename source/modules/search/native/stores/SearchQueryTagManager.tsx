// Module ID: 10081
// Function ID: 78054
// Name: isPrefix
// Dependencies: []

// Module 10081 (isPrefix)
function isPrefix(type) {
  return type.type === SearchQueryTagTypes.PREFIX;
}
function isComplete(type) {
  return type.type === SearchQueryTagTypes.COMPLETE;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const SearchQueryTagTypes = arg1(dependencyMap[2]).SearchQueryTagTypes;
const SearchFilterAddLocations = arg1(dependencyMap[3]).SearchFilterAddLocations;
const tmp2 = () => {
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
  let closure_0 = SearchQueryTagManager;
  let obj = {
    key: "markChanged",
    value() {
      const set = new Set();
      const SearchQueryTagManager = set;
      const set1 = new Set();
      const tags = this.tags;
      const item = tags.forEach((text) => {
        set.add(text.text);
        let tmp2 = callback(text);
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
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "mergeTag",
    value(location, channelId) {
      const SearchQueryTagManager = location;
      const tags = this.tags;
      const items = [
        ...tags.filter((arg0) => {
          let tmp = arg0 !== arg0;
          if (tmp) {
            tmp = arg0 !== arg1;
          }
          return tmp;
        }),
        { type: constants.COMPLETE, text: "" + location.text + " " + channelId.text, location: location.location, searchTokenType: location.searchTokenType, channelId: channelId.channelId, userId: channelId.userId }
      ];
      this.tags = items;
    }
  };
  items[1] = obj;
  obj = {
    key: "replaceTag",
    value(arg0, arg1) {
      const SearchQueryTagManager = arg0;
      const tags = this.tags;
      this.tags = tags.map((arg0) => {
        let tmp = arg0;
        if (arg0 === arg0) {
          tmp = arg1;
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
      const SearchQueryTagManager = arg0;
      const set = new Set();
      const tags = this.tags;
      const item = tags.forEach((userId) => {
        if (callback(userId)) {
          userId = userId.userId;
          let tmp2 = userId.searchTokenType === userId;
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
      const found = tags.filter(closure_5);
      return found.every((channelId) => null != channelId.channelId);
    }
  };
  items[7] = {
    key: "hasUserAddedTags",
    value() {
      const tags = this.tags;
      const found = tags.filter(closure_5);
      return found.some((location) => location.location !== constants.CLIENT_AUTO_ADD);
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
      const tmp = this.tags[this.tags.length - 1];
      if (null != tmp) {
        let tmp3;
        if (callback(tmp)) {
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
      const SearchQueryTagManager = flag;
      const tags = this.tags;
      const found = tags.filter((arg0) => {
        const tmp = callback(arg0);
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
        if (callback(type)) {
          if (null != tmp) {
            if (callback(tmp)) {
              self.replaceTag(tmp, type);
            }
            self.markChanged();
            self.mergeTag(tmp, type);
          }
        }
        let tmp9 = callback(type);
        if (!tmp9) {
          tmp9 = callback2(type);
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
      this.tags = tags.filter((arg0) => !callback(arg0));
      this.markChanged();
    }
  };
  items[15] = {
    key: "removeAtIndex",
    value(arg0) {
      let closure_0 = this.tags[arg0];
      const tags = this.tags;
      this.tags = tags.filter((arg0) => arg0 !== closure_0);
      this.markChanged();
    }
  };
  return callback(SearchQueryTagManager, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/search/native/stores/SearchQueryTagManager.tsx");

export default tmp2;
