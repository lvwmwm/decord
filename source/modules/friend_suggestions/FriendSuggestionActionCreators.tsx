// Module ID: 6905
// Function ID: 55054
// Dependencies: [5, 653, 507, 686, 2]

// Module 6905
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/friend_suggestions/FriendSuggestionActionCreators.tsx");

export default {
  fetch() {
    return callback(async () => {
      const HTTP = outer2_0(outer2_2[2]).HTTP;
      let obj = { url: outer2_4.FRIEND_SUGGESTIONS, rejectWithError: true };
      const tmp = yield HTTP.get(obj);
      obj = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: tmp.body };
      outer2_1(outer2_2[3]).dispatch(obj);
    })();
  },
  ignore(id) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    HTTP.del({ url: Endpoints.FRIEND_SUGGESTION(id), rejectWithError: true });
  }
};
