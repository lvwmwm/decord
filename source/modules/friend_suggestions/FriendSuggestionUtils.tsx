// Module ID: 14958
// Function ID: 113986
// Name: getSuggestedContactNameForSuggestion
// Dependencies: [2]
// Exports: getSuggestedContactNameForSuggestion

// Module 14958 (getSuggestedContactNameForSuggestion)
const result = require("set").fileFinishedImporting("modules/friend_suggestions/FriendSuggestionUtils.tsx");

export const getSuggestedContactNameForSuggestion = function getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend) {
  let contactNames;
  if (null != suggestedFriend) {
    contactNames = suggestedFriend.contactNames;
  }
  let tmp2;
  if (null != contactNames) {
    let length;
    if (null != suggestedFriend) {
      length = suggestedFriend.contactNames.length;
    }
    if (length >= 2) {
      let trimmed;
      if (null != suggestedFriend) {
        const contactNames1 = suggestedFriend.contactNames;
        const substr = contactNames1.slice(0, 2);
        trimmed = substr.join(" ").trim();
        const str2 = substr.join(" ");
      }
      tmp2 = trimmed;
    }
  }
  if (null != tmp2) {
    if (null == friendSuggestionName) {
      if (null != tmp2) {
        return tmp2;
      }
    }
    if (null != friendSuggestionName) {
      if (friendSuggestionName !== tmp2) {
        if (friendSuggestionName.split(" ")[0] !== tmp2.split(" ")[0]) {
          return tmp2;
        }
      }
    }
  }
};
