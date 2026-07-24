// Module ID: 7991
// Function ID: 63247
// Name: buildPlatformPollResources
// Dependencies: [22, 7992, 4130, 689, 7724, 5181, 5504, 1395, 2]
// Exports: buildPlatformPollResources, getAvatarUrl

// Module 7991 (buildPlatformPollResources)
import importDefaultResult from "apply";

const require = arg1;
let closure_3 = require("apply").mapValues(require("normal").pollStyleSets, (arg0) => {
  const _require = arg0;
  let closure_1 = _require(4130).createNativeStyleProperties((arg0) => {
    const tmp = callback(callback2(outer1_2[3]), arg0);
    return callback2(outer1_2[0]).pickBy(tmp, (arg0) => {
      let tmp2 = "number" !== tmp;
      if (tmp2) {
        tmp2 = "boolean" !== tmp;
      }
      return tmp2;
    });
  });
  return (arg0, arg1) => {
    let obj = callback2(outer1_2[0]);
    const tmp = callback(callback2(outer1_2[3]), arg1);
    obj = {};
    const merged = Object.assign(callback2(arg0, arg1));
    const merged1 = Object.assign(obj.pickBy(callback(callback2(outer1_2[3]), arg1), (arg0) => {
      let tmp2 = "number" === tmp;
      if (!tmp2) {
        tmp2 = "boolean" === tmp;
      }
      return tmp2;
    }));
    return obj;
  };
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  const _require = theme;
  const importDefault = layoutType;
  const obj = { styles: importDefault(22).mapValues(closure_3, (arg0) => arg0(closure_0, closure_1)) };
  const obj2 = importDefault(22);
  obj.selectedIcon = _require(7724).getAssetUriForEmbed(importDefault(5181));
  const obj3 = _require(7724);
  obj.checkmarkIcon = _require(7724).getAssetUriForEmbed(importDefault(5504));
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return require(1395) /* ensureAvatarSource */.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};
