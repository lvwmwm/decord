// Module ID: 14462
// Function ID: 14463
// Name: avatar_decorations/AvatarDecorationUtils
// Dependencies: [1414, 1186, 5257, 14463, 2120, 2]
// Exports: getDecorationCutoutForAvatarCutout, getDecorationSizeForAvatarSize, openAvatarDecorationActionSheet

// Module 14462 (avatar_decorations/AvatarDecorationUtils)
import native from "native" /* 1186 */;
import AvatarDecorationConstants from "AvatarDecorationConstants" /* 1414 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

let closure_3 = AvatarDecorationConstants.DECORATION_TO_AVATAR_RATIO;
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx");

export function getDecorationSizeForAvatarSize(NORMAL) {
  let result;
  if (typeof NORMAL !== "number") {
    result = native.AVATAR_SIZE_MAP[NORMAL] * closure_3;
  } else {
    result = NORMAL * closure_3;
  }
  return result;
}
export function getDecorationCutoutForAvatarCutout(cutout, arg1) {
  let inset;
  let mapped;
  let closure_0 = arg1;
  let tmp = cutout;
  if (null != cutout) {
    let obj = { direction: null, radius: null, inset: inset + arg1, imageType: native.CutoutType.RECTANGULAR, nativeCutouts: mapped };
    ({ direction: obj.direction, radius: obj.radius, inset } = cutout);
    if (inset == null) {
      inset = 0;
    }
    const nativeCutouts = cutout.nativeCutouts;
    mapped = undefined;
    if (nativeCutouts != null) {
      mapped = nativeCutouts.map((item) => {
        const obj = { x: item.x + closure_0, y: item.y + closure_0 };
        const merged = Object.assign(item);
        return obj;
      });
    }
    tmp = obj;
  }
  return tmp;
}
export function openAvatarDecorationActionSheet(arg0) {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let isTryItOut;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14463, dependencyMap.paths), "Edit Avatar Decoration", { user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations });
}
