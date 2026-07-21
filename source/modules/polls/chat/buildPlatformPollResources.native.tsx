// Module ID: 7897
// Function ID: 62876
// Name: buildPlatformPollResources
// Dependencies: []
// Exports: buildPlatformPollResources, getAvatarUrl

// Module 7897 (buildPlatformPollResources)
let closure_3 = importDefault(dependencyMap[0]).mapValues(arg1(dependencyMap[1]).pollStyleSets, (arg0) => {
  const arg1 = arg0;
  let closure_1 = arg1(dependencyMap[2]).createNativeStyleProperties((arg0) => {
    const tmp = arg0(callback(closure_2[3]), arg0);
    return callback(closure_2[0]).pickBy(tmp, (arg0) => {
      let tmp2 = "number" !== tmp;
      if (tmp2) {
        tmp2 = "boolean" !== tmp;
      }
      return tmp2;
    });
  });
  return (arg0, arg1) => {
    let obj = callback(closure_2[0]);
    const tmp = arg0(callback(closure_2[3]), arg1);
    obj = {};
    const merged = Object.assign(callback(arg0, arg1));
    const merged1 = Object.assign(obj.pickBy(arg0(callback(closure_2[3]), arg1), (arg0) => {
      let tmp2 = "number" === tmp;
      if (!tmp2) {
        tmp2 = "boolean" === tmp;
      }
      return tmp2;
    }));
    return obj;
  };
});
const importDefaultResult = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  layoutType = theme;
  const importDefault = layoutType;
  const obj = { styles: importDefault(dependencyMap[0]).mapValues(closure_3, (arg0) => arg0(arg0, arg1)) };
  const obj2 = importDefault(dependencyMap[0]);
  obj.selectedIcon = layoutType(dependencyMap[4]).getAssetUriForEmbed(importDefault(dependencyMap[5]));
  const obj3 = layoutType(dependencyMap[4]);
  obj.checkmarkIcon = layoutType(dependencyMap[4]).getAssetUriForEmbed(importDefault(dependencyMap[6]));
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return guildId(dependencyMap[7]).ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};
