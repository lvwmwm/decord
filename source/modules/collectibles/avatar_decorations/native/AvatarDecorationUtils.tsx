// Module ID: 7832
// Function ID: 62429
// Name: getDecorationSizeForAvatarSize
// Dependencies: []
// Exports: getDecorationCutoutForAvatarCutout, getDecorationSizeForAvatarSize, openAvatarDecorationActionSheet

// Module 7832 (getDecorationSizeForAvatarSize)
let closure_3 = require(dependencyMap[0]).DECORATION_TO_AVATAR_RATIO;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx");

export const getDecorationSizeForAvatarSize = function getDecorationSizeForAvatarSize(closure_10) {
  if ("number" !== typeof closure_10) {
    let result = require(dependencyMap[1]).AVATAR_SIZE_MAP[closure_10] * closure_3;
  } else {
    result = closure_10 * closure_3;
  }
  return result;
};
export const getDecorationCutoutForAvatarCutout = function getDecorationCutoutForAvatarCutout(memo, arg1) {
  let inset;
  const require = arg1;
  let tmp = memo;
  if (null != memo) {
    const obj = {};
    ({ direction: obj.direction, radius: obj.radius, inset } = memo);
    let num = 0;
    if (null != inset) {
      num = inset;
    }
    obj.inset = num + arg1;
    let mapped;
    obj.imageType = require(dependencyMap[1]).CutoutType.RECTANGULAR;
    const nativeCutouts = memo.nativeCutouts;
    if (null != nativeCutouts) {
      mapped = nativeCutouts.map((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["x"] = arg0.x + arg1;
        obj["y"] = arg0.y + arg1;
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
  importDefault(dependencyMap[2]).hideActionSheet();
  const obj = importDefault(dependencyMap[2]);
  importDefault(dependencyMap[2]).openLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "Edit Avatar Decoration", { user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations });
};
