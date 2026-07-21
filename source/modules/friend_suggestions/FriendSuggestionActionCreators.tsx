// Module ID: 6901
// Function ID: 55001
// Dependencies: []

// Module 6901
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/friend_suggestions/FriendSuggestionActionCreators.tsx");

export default {
  fetch() {
    return callback(async () => {
      const HTTP = callback(closure_2[2]).HTTP;
      let obj = { url: constants.FRIEND_SUGGESTIONS, rejectWithError: true };
      const tmp = yield HTTP.get(obj);
      obj = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: tmp.body };
      callback2(closure_2[3]).dispatch(obj);
    })();
  },
  ignore(id) {
    const HTTP = arg1(dependencyMap[2]).HTTP;
    HTTP.del({ url: Endpoints.FRIEND_SUGGESTION(id), rejectWithError: true });
  }
};
