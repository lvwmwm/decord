// Module ID: 7838
// Function ID: 62466
// Name: getDecorationSizeForAvatarSize
// Dependencies: [1393, 1273, 4098, 7839, 1934, 2]
// Exports: getDecorationCutoutForAvatarCutout, getDecorationSizeForAvatarSize, openAvatarDecorationActionSheet

// Module 7838 (getDecorationSizeForAvatarSize)
import { DECORATION_TO_AVATAR_RATIO as closure_3 } from "DECORATION_TO_AVATAR_RATIO";

let result = require("showActionSheet").fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx");

export const getDecorationSizeForAvatarSize = function getDecorationSizeForAvatarSize(closure_10) {
  if ("number" !== typeof closure_10) {
    let result = require(1273) /* Button */.AVATAR_SIZE_MAP[closure_10] * closure_3;
  } else {
    result = closure_10 * closure_3;
  }
  return result;
};
export const getDecorationCutoutForAvatarCutout = function getDecorationCutoutForAvatarCutout(memo, arg1) {
  let inset;
  const _require = arg1;
  let tmp = memo;
  if (null != memo) {
    let obj = {};
    ({ direction: obj.direction, radius: obj.radius, inset } = memo);
    let num = 0;
    if (null != inset) {
      num = inset;
    }
    obj.inset = num + arg1;
    let mapped;
    obj.imageType = _require(1273).CutoutType.RECTANGULAR;
    const nativeCutouts = memo.nativeCutouts;
    if (null != nativeCutouts) {
      mapped = nativeCutouts.map((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["x"] = arg0.x + closure_0;
        obj["y"] = arg0.y + closure_0;
        return obj;
      });
    }
    obj.nativeCutouts = mapped;
    tmp = obj;
  }
  return tmp;
};
export const openAvatarDecorationActionSheet = function openAvatarDecorationActionSheet(arg0) {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let isTryItOut;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  importDefault(4098).hideActionSheet();
  const obj = importDefault(4098);
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(7839, dependencyMap.paths), "Edit Avatar Decoration", { user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations });
};
