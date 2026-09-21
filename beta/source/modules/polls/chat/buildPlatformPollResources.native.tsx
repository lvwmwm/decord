// Module ID: 11844
// Function ID: 11845
// Name: buildPlatformPollResources
// Dependencies: [12, 11845, 4758, 580, 8209, 7392, 5821, 1404, 2]
// Exports: buildPlatformPollResources, getAvatarUrl

// Module 11844 (buildPlatformPollResources)
import nativeDefault from "native" /* 580 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1404 */;
import _modDef5821 from "module_5821" /* 5821 */;
import _modDef7392 from "module_7392" /* 7392 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8209 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_3 = apply.mapValues(fn(11845).pollStyleSets, (arg0) => {
  _require = arg0;
  closure_1 = require("createStyles").createNativeStyleProperties((arg0) => {
    let tmp = closure_0(nativeDefault, arg0);
    return apply.pickBy(tmp, (num) => {
      let tmp = typeof num !== "number";
      if (typeof num !== "number") {
        tmp = typeof num !== "boolean";
      }
      return tmp;
    });
  });
  return (arg0, arg1) => {
    let tmp = closure_0(nativeDefault, arg1);
    const merged = Object.assign(closure_1(arg0, arg1));
    const merged1 = Object.assign(apply.pickBy(tmp, (num) => {
      let tmp = typeof num === "number";
      if (typeof num !== "number") {
        tmp = typeof num === "boolean";
      }
      return tmp;
    }));
    return {};
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  closure_0 = theme;
  closure_1 = layoutType;
  const obj = { styles: apply.mapValues(closure_3, (fn) => fn(closure_0, closure_1)), selectedIcon: null, checkmarkIcon: null };
  obj.selectedIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7392);
  obj.checkmarkIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef5821);
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return utils_AvatarUtils.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};
