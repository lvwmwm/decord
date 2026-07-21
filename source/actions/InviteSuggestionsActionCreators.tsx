// Module ID: 10055
// Function ID: 77657
// Name: loadInviteSuggestions
// Dependencies: []
// Exports: loadInviteSuggestions, searchInviteSuggestions

// Module 10055 (loadInviteSuggestions)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export const loadInviteSuggestions = function loadInviteSuggestions(arg0) {
  ({ omitUserIds: closure_0, guild: closure_1, channel: closure_2, applicationId: closure_3, inviteTargetType: closure_4 } = arg0);
  const userAffinitiesV2 = require(dependencyMap[1]).fetchUserAffinitiesV2();
  return userAffinitiesV2.then(() => {
    let obj = callback(closure_2[2]);
    obj = { type: "LOAD_INVITE_SUGGESTIONS" };
    if (null != closure_0) {
      let set = closure_0;
    } else {
      const _Set = Set;
      set = new Set();
    }
    obj.omitUserIds = set;
    obj.guild = callback;
    obj.channel = closure_2;
    obj.applicationId = closure_3;
    obj.inviteTargetType = closure_4;
    obj.dispatch(obj);
  });
};
export const searchInviteSuggestions = function searchInviteSuggestions(query) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "INVITE_SUGGESTIONS_SEARCH", query };
  obj.dispatch(obj);
};
