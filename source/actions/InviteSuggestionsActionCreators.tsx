// Module ID: 10064
// Function ID: 77710
// Name: loadInviteSuggestions
// Dependencies: [10065, 8821, 686, 2]
// Exports: loadInviteSuggestions, searchInviteSuggestions

// Module 10064 (loadInviteSuggestions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("dispatcher").fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export const loadInviteSuggestions = function loadInviteSuggestions(arg0) {
  let closure_3;
  let closure_4;
  let dependencyMap;
  let importDefault;
  let require;
  ({ omitUserIds: require, guild: importDefault, channel: dependencyMap, applicationId: closure_3, inviteTargetType: closure_4 } = arg0);
  const userAffinitiesV2 = require(8821) /* fetchUserAffinitiesV2 */.fetchUserAffinitiesV2();
  return userAffinitiesV2.then(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "LOAD_INVITE_SUGGESTIONS" };
    if (null != closure_0) {
      let set = closure_0;
    } else {
      const _Set = Set;
      set = new Set();
    }
    obj.omitUserIds = set;
    obj.guild = closure_1;
    obj.channel = closure_2;
    obj.applicationId = closure_3;
    obj.inviteTargetType = closure_4;
    obj.dispatch(obj);
  });
};
export const searchInviteSuggestions = function searchInviteSuggestions(query) {
  let obj = importDefault(686);
  obj = { type: "INVITE_SUGGESTIONS_SEARCH", query };
  obj.dispatch(obj);
};
