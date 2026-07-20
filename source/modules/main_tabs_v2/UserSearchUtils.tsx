// Module ID: 6894
// Function ID: 54954
// Name: cleanString
// Dependencies: []
// Exports: getNames, getRelationshipType

// Module 6894 (cleanString)
function cleanString(globalName) {
  const obj = arg1(dependencyMap[4]);
  return arg1(dependencyMap[4]).stripDiacritics(globalName.toLocaleLowerCase()).trim();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const RelationshipTypes = arg1(dependencyMap[3]).RelationshipTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/UserSearchUtils.tsx");

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
  const arg1 = names;
  const nick = store.getNickname(user.id);
  if (null != nick) {
    names[nick] = cleanString(nick).split(" ");
    const str = cleanString(nick);
  }
  const globalName = importDefault(dependencyMap[5]).getGlobalName(user);
  if (tmp4) {
    names[globalName] = cleanString(globalName).split(" ");
    const str3 = cleanString(globalName);
  }
  const obj2 = importDefault(dependencyMap[5]);
  const tmp4 = null != globalName && null == names[globalName];
  names[user.username] = cleanString(user.username).split(" ");
  const nicknames = nicknames.getNicknames(user.id);
  const item = nicknames.forEach((arg0) => {
    if (null == names[arg0]) {
      names[arg0] = callback(arg0).split(" ");
      const str = callback(arg0);
    }
  });
  return { names, nick };
};
