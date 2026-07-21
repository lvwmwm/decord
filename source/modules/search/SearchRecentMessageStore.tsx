// Module ID: 10072
// Function ID: 77943
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10072 (_isNativeReflectConstruct)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const map = new Map();
let closure_8 = [];
let tmp3 = (Store) => {
  class SearchRecentMessageStore {
    constructor() {
      self = this;
      tmp = closure_2(this, SearchRecentMessageStore);
      obj = closure_5(SearchRecentMessageStore);
      tmp2 = closure_4;
      if (closure_9()) {
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
  const arg1 = SearchRecentMessageStore;
  callback2(SearchRecentMessageStore, Store);
  const items = [
    {
      key: "getRecentMessageAuthorIds",
      value(arg0) {
        let value = closure_7.get(arg0);
        if (null == value) {
          value = closure_8;
        }
        return value;
      }
    }
  ];
  return callback(SearchRecentMessageStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp3.displayName = "SearchRecentMessageStore";
tmp3 = new tmp3(importDefault(dependencyMap[7]), {
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(arg0) {
    let data;
    let guildId;
    ({ guildId, data } = arg0);
    let closure_0;
    let dependencyMap;
    let closure_2;
    if (null == guildId) {
      return false;
    } else {
      closure_0 = false;
      let items = map.get(guildId);
      if (null == items) {
        items = [];
      }
      items = [];
      HermesBuiltin.arraySpread(items, 0);
      dependencyMap = items;
      const _Set = Set;
      const set = new Set(items);
      closure_2 = set;
      const item = data.forEach((messages) => {
        messages = messages.messages;
        const item = messages.forEach((arg0) => {
          let tmp;
          [tmp] = arg0;
          const messageRecord = callback(arr[5]).createMessageRecord(tmp);
          let tmp3 = !set.has(messageRecord.author.id);
          if (tmp3) {
            tmp3 = set.size < 15;
          }
          if (tmp3) {
            set.add(messageRecord.author.id);
            const arr = arr.push(messageRecord.author.id);
            const callback = true;
          }
        });
      });
      if (closure_0) {
        const result = map.set(guildId, items);
      }
      return closure_0;
    }
  },
  SEARCH_RECENT_MESSAGES_CLEAR: handleReset,
  CONNECTION_OPEN: handleReset
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/search/SearchRecentMessageStore.tsx");

export default tmp3;
