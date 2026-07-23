// Module ID: 9088
// Function ID: 71226
// Name: getAvatarDecoration
// Dependencies: [57, 1917, 624, 2]
// Exports: useAvatarDecoration

// Module 9088 (getAvatarDecoration)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getAvatarDecoration(user, _slicedToArray) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [_isNativeReflectConstruct];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
  let member = null;
  if (null != _slicedToArray) {
    member = null;
    if (null != user) {
      member = first.getMember(_slicedToArray, user.id);
    }
  }
  let avatarDecoration;
  if (null != member) {
    avatarDecoration = member.avatarDecoration;
  }
  if (null == avatarDecoration) {
    let avatarDecoration1;
    if (null != user) {
      avatarDecoration1 = user.avatarDecoration;
    }
    avatarDecoration = avatarDecoration1;
  }
  return avatarDecoration;
}
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export const useAvatarDecoration = function useAvatarDecoration(user, guildId) {
  const _require = user;
  const dependencyMap = guildId;
  let items = [_isNativeReflectConstruct];
  return _require(624).useStateFromStores(items, () => {
    const items = [outer1_3];
    return outer1_4(closure_0, closure_1, items);
  });
};
export { getAvatarDecoration };
