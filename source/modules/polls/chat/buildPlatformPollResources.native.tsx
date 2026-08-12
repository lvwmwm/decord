// Module ID: 8367
// Function ID: 8368
// Name: buildPlatformPollResources
// Dependencies: [12, 8368, 4344, 712, 8096, 5430, 5809, 1438, 2]
// Exports: buildPlatformPollResources, getAvatarUrl

// Module 8367 (buildPlatformPollResources)
import importDefaultResult from "apply";

const require = arg1;
let closure_3 = require("apply").mapValues(require("normal").pollStyleSets, (arg0) => {
  const _require = arg0;
  let closure_1 = _require(4344).createNativeStyleProperties((arg0) => {
    let tmp = callback(callback2(outer1_2[3]), arg0);
    return callback2(outer1_2[0]).pickBy(tmp, (num) => {
      let tmp = typeof num !== "number";
      if (typeof num !== "number") {
        tmp = typeof num !== "boolean";
      }
      return tmp;
    });
  });
  return (arg0, arg1) => {
    let obj = callback2(outer1_2[0]);
    let tmp = callback(callback2(outer1_2[3]), arg1);
    obj = {};
    const merged = Object.assign(callback2(arg0, arg1));
    const merged1 = Object.assign(obj.pickBy(callback(callback2(outer1_2[3]), arg1), (num) => {
      let tmp = typeof num === "number";
      if (typeof num !== "number") {
        tmp = typeof num === "boolean";
      }
      return tmp;
    }));
    return obj;
  };
});
const result = require("createCacheKey").fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  const _require = theme;
  const importDefault = layoutType;
  const obj = { styles: null, selectedIcon: null, checkmarkIcon: null };
  obj[0] = importDefault(12).mapValues(closure_3, (arg0) => arg0(closure_0, closure_1));
  const obj2 = importDefault(12);
  obj[1] = _require(8096).getAssetUriForEmbed(importDefault(5430));
  const obj3 = _require(8096);
  obj[2] = _require(8096).getAssetUriForEmbed(importDefault(5809));
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return require(1438) /* ensureAvatarSource */.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};
