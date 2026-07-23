// Module ID: 6905
// Function ID: 55026
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1857, 1849, 22, 6906, 6907, 566, 686, 2]

// Module 6905 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import apply from "apply";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";

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
    const firstResult = importDefault(22).first(suggestion.reasons);
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
  const obj = importDefault(22);
  const mapped = importDefault(22).chain(suggestions).map((arg0) => outer1_14(arg0));
  const chainResult = importDefault(22).chain(suggestions);
  return mapped.keyBy((key) => key.key).value();
}
let closure_9 = {};
let c10 = 0;
let c11 = false;
let c12 = false;
let tmp2 = ((Store) => {
  class FriendSuggestionStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, FriendSuggestionStore);
      obj = outer1_5(FriendSuggestionStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
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
  callback2(FriendSuggestionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getSuggestionCount",
    value() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSuggestions",
    value() {
      const entries = Object.entries(outer1_9);
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
      return outer1_9[arg0];
    }
  };
  return callback(FriendSuggestionStore, items);
})(require("initialize").Store);
tmp2.displayName = "FriendSuggestionStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(friendSuggestionCount) {
    let closure_9 = {};
    friendSuggestionCount = friendSuggestionCount.friendSuggestionCount;
    if (friendSuggestionCount > 0) {
      let c12 = true;
      let tmp5 = !c11;
      if (!c11) {
        tmp5 = c12;
      }
      if (tmp5) {
        c11 = true;
        c12 = false;
        const response = importDefault(6906).fetch();
        const obj = importDefault(6906);
      }
    } else {
      importDefault(6907)();
    }
  },
  FRIEND_SUGGESTION_CREATE: function handleFriendSuggestionCreate(suggestion) {
    const tmp = transformSuggestion(suggestion.suggestion);
    if (null != obj[tmp.key]) {
      return false;
    } else {
      closure_10 = closure_10 + 1;
      obj = {};
      const merged = Object.assign(obj);
      obj[tmp.key] = tmp;
    }
  },
  FRIEND_SUGGESTION_DELETE: function handleFriendSuggestionDelete(arg0) {
    const diff = closure_10 - 1;
    closure_10 = diff;
    closure_10 = Math.max(0, diff);
    delete tmp2[tmp];
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function handleLoadFriendSuggestionsSuccess(suggestions) {
    let c11 = false;
    let closure_9 = transformFriendSuggestions(suggestions.suggestions);
    importDefault(22).keys(closure_9).length;
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function handleLoadFriendSuggestionsFailure() {
    let c11 = false;
    let closure_9 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/friend_suggestions/FriendSuggestionStore.tsx");

export default tmp2;
export { transformFriendSuggestions };
