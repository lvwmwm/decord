// Module ID: 7902
// Function ID: 7903
// Name: UserSearchUtils
// Dependencies: [7903, 2109, 4409, 1078, 2013, 4603, 2]
// Exports: cleanString, getNames, getRelationshipType

// Module 7902 (UserSearchUtils)
import StringUtils from "StringUtils" /* 2013 */;
import UserUtilsDefault from "UserUtils" /* 4603 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7903 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;

require = fn;
const RelationshipTypes = fn(1078).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/UserSearchUtils.tsx");

export const cleanString = function cleanString(toLocaleLowerCase) {
  return StringUtils.stripDiacritics(toLocaleLowerCase.toLocaleLowerCase()).trim();
};
export const getRelationshipType = function getRelationshipType(id) {
  const relationshipType = RelationshipStore.getRelationshipType(id);
  let SUGGESTION = relationshipType;
  if (relationshipType === RelationshipTypes.NONE) {
    SUGGESTION = relationshipType;
    if (null != FriendSuggestionStore.getSuggestion(id)) {
      SUGGESTION = tmp2.SUGGESTION;
    }
  }
  return SUGGESTION;
};
export const getNames = function getNames(user) {
  const names = {};
  const nick = RelationshipStore.getNickname(user.id);
  if (null != nick) {
    const obj3 = names(2013);
    let str = names(2013).stripDiacritics(nick.toLocaleLowerCase());
    names[nick] = names(2013).stripDiacritics(nick.toLocaleLowerCase()).trim().split(" ");
    let str2 = names(2013).stripDiacritics(nick.toLocaleLowerCase()).trim();
  }
  const globalName = UserUtilsDefault.getGlobalName(user);
  if (tmp4) {
    const obj6 = names(2013);
    const str4 = names(2013).stripDiacritics(globalName.toLocaleLowerCase());
    names[globalName] = names(2013).stripDiacritics(globalName.toLocaleLowerCase()).trim().split(" ");
    const str5 = names(2013).stripDiacritics(globalName.toLocaleLowerCase()).trim();
  }
  const username = user.username;
  tmp4 = null != globalName && null == names[globalName];
  const obj7 = names(2013);
  const str7 = names(2013).stripDiacritics(username.toLocaleLowerCase());
  names[user.username] = names(2013).stripDiacritics(username.toLocaleLowerCase()).trim().split(" ");
  const nicknames = GuildMemberStore.getNicknames(user.id);
  const item = nicknames.forEach((toLocaleLowerCase) => {
    if (null == names[toLocaleLowerCase]) {
      const str = StringUtils.stripDiacritics(toLocaleLowerCase.toLocaleLowerCase());
      tmp[toLocaleLowerCase] = StringUtils.stripDiacritics(toLocaleLowerCase.toLocaleLowerCase()).trim().split(" ");
      const str2 = StringUtils.stripDiacritics(toLocaleLowerCase.toLocaleLowerCase()).trim();
    }
  });
  return { names, nick };
};
