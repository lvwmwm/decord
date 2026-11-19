// Module ID: 8242
// Function ID: 8243
// Name: UserSearchUtils
// Dependencies: [8243, 4704, 4734, 1072, 2153, 4848, 2]
// Exports: cleanString, getNames, getRelationshipType

// Module 8242 (UserSearchUtils)
import Constants from "Constants" /* 1072 */;
import StringUtils from "StringUtils" /* 2153 */;
import UserUtilsDefault from "UserUtils" /* 4848 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 8243 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
import RelationshipStore from "RelationshipStore" /* 4734 */;
import size from "module_2" /* 2 */;

const RelationshipTypes = Constants.RelationshipTypes;
const result = size.fileFinishedImporting("modules/main_tabs_v2/UserSearchUtils.tsx");

export function cleanString(toLocaleLowerCase) {
  const obj = StringUtils;
  const str = obj.stripDiacritics(toLocaleLowerCase.toLocaleLowerCase());
  return str.trim();
}
export function getRelationshipType(id) {
  const relationshipType = RelationshipStore.getRelationshipType(id);
  let SUGGESTION = relationshipType;
  if (relationshipType === RelationshipTypes.NONE) {
    SUGGESTION = relationshipType;
    if (null != FriendSuggestionStore.getSuggestion(id)) {
      SUGGESTION = tmp2.SUGGESTION;
    }
  }
  return SUGGESTION;
}
export function getNames(user) {
  const names = {};
  const nick = RelationshipStore.getNickname(user.id);
  if (null != nick) {
    const tmp = names;
    const obj3 = names(2153);
    let str = obj3.stripDiacritics(nick.toLocaleLowerCase());
    let str2 = str.trim();
    names[nick] = str2.split(" ");
  }
  const obj4 = UserUtilsDefault;
  const globalName = obj4.getGlobalName(user);
  const tmp4 = null != globalName && null == names[globalName];
  if (tmp4) {
    const obj6 = names(2153);
    const str4 = obj6.stripDiacritics(globalName.toLocaleLowerCase());
    const str5 = str4.trim();
    names[globalName] = str5.split(" ");
  }
  const username2 = user.username;
  const username = user.username;
  const obj7 = names(2153);
  const str7 = obj7.stripDiacritics(username2.toLocaleLowerCase());
  const str8 = str7.trim();
  names[username] = str8.split(" ");
  const nicknames = GuildMemberStore.getNicknames(user.id);
  const item = nicknames.forEach((toLocaleLowerCase) => {
    if (null == names[toLocaleLowerCase]) {
      const obj = StringUtils;
      const str = obj.stripDiacritics(toLocaleLowerCase.toLocaleLowerCase());
      const str2 = str.trim();
      tmp[toLocaleLowerCase] = str2.split(" ");
    }
  });
  return { names, nick };
}
