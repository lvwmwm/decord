// Module ID: 6900
// Function ID: 54992
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6900 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function transformSuggestion(suggestion) {
  if (null != suggestion.contact_names) {
    if (suggestion.contact_names.length >= 2) {
      const contact_names = suggestion.contact_names;
      const substr = contact_names.slice(0, 2);
    }
    const obj = { key: suggestion.suggested_user.id };
    let name;
    const firstResult = importDefault(dependencyMap[7]).first(suggestion.reasons);
    if (null != firstResult) {
      name = firstResult.name;
    }
    obj.name = name;
    const prototype = ctor.prototype;
    const tmp9 = new ctor(suggestion.suggested_user);
    obj.user = tmp9;
    obj.mutualFriendsCount = suggestion.mutual_friends_count;
    obj.contactNames = [];
    return obj;
  }
}
function transformFriendSuggestions(suggestions) {
  const obj = importDefault(dependencyMap[7]);
  const mapped = importDefault(dependencyMap[7]).chain(suggestions).map((arg0) => callback(arg0));
  const chainResult = importDefault(dependencyMap[7]).chain(suggestions);
  return mapped.keyBy((key) => key.key).value();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = {};
let closure_10 = 0;
let closure_11 = false;
let closure_12 = false;
let tmp2 = (Store) => {
  class FriendSuggestionStore {
    constructor() {
      self = this;
      tmp = closure_2(this, FriendSuggestionStore);
      obj = closure_5(FriendSuggestionStore);
      tmp2 = closure_4;
      if (closure_13()) {
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
  const importDefault = FriendSuggestionStore;
  callback2(FriendSuggestionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getSuggestionCount",
    value() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSuggestions",
    value() {
      const entries = Object.entries(closure_9);
      return entries.map((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp;
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSuggestion",
    value(arg0) {
      return closure_9[arg0];
    }
  };
  return callback(FriendSuggestionStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp2.displayName = "FriendSuggestionStore";
tmp2 = new tmp2(importDefault(dependencyMap[11]), {
  CONNECTION_OPEN: function handleConnectionOpen(friendSuggestionCount) {
    let closure_9 = {};
    friendSuggestionCount = friendSuggestionCount.friendSuggestionCount;
    let closure_10 = friendSuggestionCount;
    if (friendSuggestionCount > 0) {
      let closure_12 = true;
      let tmp5 = !closure_11;
      if (!closure_11) {
        tmp5 = closure_12;
      }
      if (tmp5) {
        closure_11 = true;
        closure_12 = false;
        const response = importDefault(dependencyMap[8]).fetch();
        const obj = importDefault(dependencyMap[8]);
      }
    } else {
      importDefault(dependencyMap[9])();
    }
  },
  FRIEND_SUGGESTION_CREATE: function handleFriendSuggestionCreate(suggestion) {
    const tmp = transformSuggestion(suggestion.suggestion);
    if (null != closure_9[tmp.key]) {
      return false;
    } else {
      closure_10 = closure_10 + 1;
      const obj = {};
      const merged = Object.assign(closure_9);
      obj[tmp.key] = tmp;
      closure_9 = obj;
    }
  },
  FRIEND_SUGGESTION_DELETE: function handleFriendSuggestionDelete(arg0) {
    const diff = closure_10 - 1;
    closure_10 = diff;
    closure_10 = Math.max(0, diff);
    delete r1[r0];
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function handleLoadFriendSuggestionsSuccess(suggestions) {
    let closure_11 = false;
    let closure_9 = transformFriendSuggestions(suggestions.suggestions);
    let closure_10 = importDefault(dependencyMap[7]).keys(closure_9).length;
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function handleLoadFriendSuggestionsFailure() {
    let closure_11 = false;
    let closure_9 = {};
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/friend_suggestions/FriendSuggestionStore.tsx");

export default tmp2;
export { transformFriendSuggestions };
