// Module ID: 10113
// Function ID: 78201
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4351, 566, 686, 2]

// Module 10113 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
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
function handleReset() {
  const map = new Map();
}
let map = new Map();
let closure_8 = [];
let tmp3 = ((Store) => {
  class SearchRecentMessageStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, SearchRecentMessageStore);
      obj = outer1_5(SearchRecentMessageStore);
      tmp2 = outer1_4;
      if (outer1_9()) {
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
  callback2(SearchRecentMessageStore, Store);
  const items = [
    {
      key: "getRecentMessageAuthorIds",
      value(arg0) {
        let value = outer1_7.get(arg0);
        if (null == value) {
          value = outer1_8;
        }
        return value;
      }
    }
  ];
  return callback(SearchRecentMessageStore, items);
})(require("initialize").Store);
tmp3.displayName = "SearchRecentMessageStore";
tmp3 = new tmp3(require("dispatcher"), {
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(arg0) {
    let data;
    let guildId;
    ({ guildId, data } = arg0);
    let c0;
    let items;
    let set;
    if (null == guildId) {
      return false;
    } else {
      c0 = false;
      items = map.get(guildId);
      if (null == items) {
        items = [];
      }
      items = [];
      HermesBuiltin.arraySpread(items, 0);
      const _Set = Set;
      set = new Set(items);
      let item = data.forEach((messages) => {
        messages = messages.messages;
        const item = messages.forEach((arg0) => {
          let tmp;
          [tmp] = arg0;
          const messageRecord = callback(items[5]).createMessageRecord(tmp);
          let tmp3 = !outer1_2.has(messageRecord.author.id);
          if (tmp3) {
            tmp3 = outer1_2.size < 15;
          }
          if (tmp3) {
            outer1_2.add(messageRecord.author.id);
            outer1_1.push(messageRecord.author.id);
            const outer1_0 = true;
          }
        });
      });
      if (c0) {
        const result = map.set(guildId, items);
      }
      return c0;
    }
  },
  SEARCH_RECENT_MESSAGES_CLEAR: handleReset,
  CONNECTION_OPEN: handleReset
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/search/SearchRecentMessageStore.tsx");

export default tmp3;
