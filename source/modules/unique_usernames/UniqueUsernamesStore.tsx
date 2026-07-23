// Module ID: 13665
// Function ID: 104936
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1362, 664, 566, 686, 2]

// Module 13665 (_isNativeReflectConstruct)
import set from "set";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "priv";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { taken: null, error: undefined, rateLimited: true };
obj = { validations: null, currentUsernameInvalid: false, retryAfterTime: null };
importDefaultResult = new importDefaultResult({ max: 100, maxAge: 60000 });
obj.validations = importDefaultResult;
obj = { suggestion: { username: undefined }, fetched: false, usernameSuggestionLoading: false };
obj.suggestions = { migration: obj, registration: { suggestion: { username: undefined }, source: undefined, fetched: false } };
let tmp4 = ((Store) => {
  class UniqueUsernamesStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, UniqueUsernamesStore);
      obj = outer1_5(UniqueUsernamesStore);
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
  callback2(UniqueUsernamesStore, Store);
  let obj = {
    key: "isRateLimited",
    value() {
      let tmp = null != outer1_8.retryAfterTime;
      if (tmp) {
        const _Date = Date;
        tmp = Date.now() < outer1_8.retryAfterTime;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "validate",
    value(arg0) {
      const self = this;
      const validations = outer1_8.validations;
      const value = validations.get(arg0);
      if (!this.isRateLimited()) {
        let tmp4 = value;
      } else {
        tmp4 = outer1_7;
      }
      return tmp4;
    }
  };
  items[1] = obj;
  obj = {
    key: "registrationUsernameSuggestion",
    value() {
      return outer1_8.suggestions.registration.suggestion.username;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "usernameSuggestion",
    value() {
      return outer1_8.suggestions.migration.suggestion.username;
    }
  };
  items[4] = {
    key: "usernameSuggestionLoading",
    value() {
      return outer1_8.suggestions.migration.usernameSuggestionLoading;
    }
  };
  items[5] = {
    key: "isCurrentUsernameInvalid",
    value() {
      return outer1_8.currentUsernameInvalid;
    }
  };
  items[6] = {
    key: "wasRegistrationSuggestionFetched",
    value(arg0) {
      let fetched = outer1_8.suggestions.registration.source === arg0;
      if (fetched) {
        fetched = outer1_8.suggestions.registration.fetched;
      }
      return fetched;
    }
  };
  items[7] = {
    key: "wasSuggestionsFetched",
    value() {
      return outer1_8.suggestions.migration.fetched;
    }
  };
  return callback(UniqueUsernamesStore, items);
})(require("initialize").Store);
tmp4.displayName = "UniqueUsernamesStore";
tmp4 = new tmp4(require("dispatcher"), {
  UNIQUE_USERNAME_ATTEMPT_SUCCESS: function handleUniqueUsernameAttemptSuccess(taken) {
    const validations = obj.validations;
    obj = { taken: taken.taken };
    const result = validations.set(taken.username, obj);
  },
  UNIQUE_USERNAME_ATTEMPT_FAILURE: function handleUniqueUsernameAttemptFailure(statusCode) {
    let error;
    let retryAfter;
    let username;
    ({ username, error, retryAfter } = statusCode);
    if (429 === statusCode.statusCode) {
      let validations = obj.validations;
      obj = { taken: null, error, rateLimited: true };
      let num = 7;
      if (null != retryAfter) {
        num = retryAfter;
      }
      const result = validations.set(username, obj, num * importDefault(664).Millis.SECOND);
    } else {
      validations = obj.validations;
      obj = { taken: null, error };
      const result1 = validations.set(username, obj);
    }
    if (null != retryAfter) {
      const _Date = Date;
      const timestamp = Date.now();
      obj.retryAfterTime = timestamp + retryAfter * importDefault(664).Millis.SECOND;
    }
  },
  UNIQUE_USERNAME_SUGGESTIONS_RESET: function handleUniqueUsernameSuggestionsReset() {
    const obj = { suggestion: { username: undefined }, fetched: false, usernameSuggestionLoading: false };
    obj.suggestions.migration = obj;
    obj.suggestions.registration = { suggestion: { username: undefined }, source: undefined, fetched: false };
  },
  UNIQUE_USERNAME_SUGGESTIONS_SUCCESS: function handleUniqueUsernameSuggestionsSuccess(suggestion) {
    suggestion = suggestion.suggestion;
    const obj = { suggestion, fetched: true, usernameSuggestionLoading: false };
    obj.suggestions.migration = obj;
    let prop;
    if (null != suggestion) {
      prop = suggestion.invalid_current_username;
    }
    if (true === prop) {
      obj.currentUsernameInvalid = true;
    }
  },
  UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS: function handleUniqueUsernameRegistrationSuggestionsSuccess(source) {
    const suggestion = source.suggestion;
    let obj = { suggestion, source: source.source, fetched: true };
    obj.suggestions.registration = obj;
    let username;
    if (null != suggestion) {
      username = suggestion.username;
    }
    if (null != username) {
      const validations = obj.validations;
      obj = { taken: false };
      const result = validations.set(suggestion.username, obj);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/unique_usernames/UniqueUsernamesStore.tsx");

export default tmp4;
