// Module ID: 13551
// Function ID: 102780
// Name: _isNativeReflectConstruct
// Dependencies: [31, 27, 7656, 653, 33, 4126, 689, 7530, 1920, 4124]

// Module 13551 (_isNativeReflectConstruct)
import module_31 from "module_31";
import getActivityIndicator from "get ActivityIndicator";
import MobileSetting from "MobileSetting";
import ME from "ME";
import module_33 from "module_33";
import importDefaultResult from "_createForOfIteratorHelperLoose";
import Text from "Text";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { guildInfoIcon: null, responsive: null, webhook_id: null, error: undefined };
obj = { 1386241122: null, 39563001: null, 1677985361: null };
importDefaultResult = new importDefaultResult({});
obj.validations = importDefaultResult;
obj = { "Bool(false)": "HTTP", "Bool(false)": "Date", "Bool(false)": "HTTP", suggestion: { username: undefined } };
obj.suggestions = { migration: obj, registration: { suggestion: { username: undefined }, source: undefined, fetched: false } };
let tmp4 = (Store) => {
  class UniqueUsernamesStore {
    constructor() {
      self = this;
      tmp = module_31(this, UniqueUsernamesStore);
      obj = ME(UniqueUsernamesStore);
      tmp2 = MobileSetting;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = ME;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, ME(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = UniqueUsernamesStore;
  callback2(UniqueUsernamesStore, Store);
  let obj = {
    key: "isRateLimited",
    value() {
      let tmp = null != closure_8.retryAfterTime;
      if (tmp) {
        const _Date = Date;
        tmp = Date.now() < closure_8.retryAfterTime;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "validate",
    value(arg0) {
      const self = this;
      const validations = closure_8.validations;
      const value = validations.get(arg0);
      if (!this.isRateLimited()) {
        let tmp4 = value;
      } else {
        tmp4 = closure_7;
      }
      return tmp4;
    }
  };
  items[1] = obj;
  obj = {
    key: "registrationUsernameSuggestion",
    value() {
      return closure_8.suggestions.registration.suggestion.username;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "usernameSuggestion",
    value() {
      return closure_8.suggestions.migration.suggestion.username;
    }
  };
  items[4] = {
    key: "usernameSuggestionLoading",
    value() {
      return closure_8.suggestions.migration.usernameSuggestionLoading;
    }
  };
  items[5] = {
    key: "isCurrentUsernameInvalid",
    value() {
      return closure_8.currentUsernameInvalid;
    }
  };
  items[6] = {
    key: "wasRegistrationSuggestionFetched",
    value(arg0) {
      let fetched = closure_8.suggestions.registration.source === arg0;
      if (fetched) {
        fetched = closure_8.suggestions.registration.fetched;
      }
      return fetched;
    }
  };
  items[7] = {
    key: "wasSuggestionsFetched",
    value() {
      return closure_8.suggestions.migration.fetched;
    }
  };
  return callback(UniqueUsernamesStore, items);
}(require("openIncodeAgeVerificationModal").Store);
tmp4.displayName = "UniqueUsernamesStore";
tmp4 = new tmp4(require("wrapURL"), {
  UNIQUE_USERNAME_ATTEMPT_SUCCESS: function handleUniqueUsernameAttemptSuccess(taken) {
    const validations = obj.validations;
    const obj = { taken: taken.taken };
    const result = validations.set(taken.username, obj);
  },
  UNIQUE_USERNAME_ATTEMPT_FAILURE: function handleUniqueUsernameAttemptFailure(statusCode) {
    let error;
    let retryAfter;
    let username;
    ({ username, error, retryAfter } = statusCode);
    if (429 === statusCode.statusCode) {
      let validations = obj.validations;
      let obj = { guildInfoIcon: null, responsive: null, webhook_id: null, error };
      let num = 7;
      if (null != retryAfter) {
        num = retryAfter;
      }
      const result = validations.set(username, obj, num * importDefault(dependencyMap[6]).Millis.SECOND);
    } else {
      validations = obj.validations;
      obj = { taken: null, error };
      const result1 = validations.set(username, obj);
    }
    if (null != retryAfter) {
      const _Date = Date;
      const timestamp = Date.now();
      obj.retryAfterTime = timestamp + retryAfter * importDefault(dependencyMap[6]).Millis.SECOND;
    }
  },
  UNIQUE_USERNAME_SUGGESTIONS_RESET: function handleUniqueUsernameSuggestionsReset() {
    const obj = { "Bool(false)": "HTTP", "Bool(false)": "Date", "Bool(false)": "HTTP", suggestion: { username: undefined } };
    obj.suggestions.migration = obj;
    obj.suggestions.registration = { suggestion: { username: undefined }, source: undefined, fetched: false };
  },
  UNIQUE_USERNAME_SUGGESTIONS_SUCCESS: function handleUniqueUsernameSuggestionsSuccess(suggestion) {
    suggestion = suggestion.suggestion;
    const obj = { "Bool(false)": 1567300603, "Bool(false)": 221342020, "Bool(false)": 822948183, suggestion };
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
const result = Text.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesStore.tsx");

export default tmp4;
