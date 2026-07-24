// Module ID: 6903
// Function ID: 55029
// Name: cleanString
// Dependencies: [6904, 1917, 3767, 653, 1832, 3969, 2]
// Exports: getNames, getRelationshipType

// Module 6903 (cleanString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";

const require = arg1;
function cleanString(globalName) {
  const obj = require(1832) /* isNullOrEmpty */;
  return require(1832) /* isNullOrEmpty */.stripDiacritics(globalName.toLocaleLowerCase()).trim();
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/UserSearchUtils.tsx");

export { cleanString };
export const getRelationshipType = function getRelationshipType(id) {
  const relationshipType = store.getRelationshipType(id);
  let SUGGESTION = relationshipType;
  if (relationshipType === RelationshipTypes.NONE) {
    SUGGESTION = relationshipType;
    if (null != suggestion.getSuggestion(id)) {
      SUGGESTION = RelationshipTypes.SUGGESTION;
    }
  }
  return SUGGESTION;
};
export const getNames = function getNames(user) {
  const names = {};
  const nick = store.getNickname(user.id);
  if (null != nick) {
    names[nick] = cleanString(nick).split(" ");
    let str = cleanString(nick);
  }
  const globalName = importDefault(3969).getGlobalName(user);
  if (tmp4) {
    names[globalName] = cleanString(globalName).split(" ");
    const str3 = cleanString(globalName);
  }
  const obj2 = importDefault(3969);
  tmp4 = null != globalName && null == names[globalName];
  names[user.username] = cleanString(user.username).split(" ");
  nicknames = nicknames.getNicknames(user.id);
  const item = nicknames.forEach((arg0) => {
    if (null == names[arg0]) {
      names[arg0] = outer1_7(arg0).split(" ");
      const str = outer1_7(arg0);
    }
  });
  return { names, nick };
};
