// Module ID: 9080
// Function ID: 71161
// Name: getAvatarDecoration
// Dependencies: []
// Exports: useAvatarDecoration

// Module 9080 (getAvatarDecoration)
function getAvatarDecoration(user, guildId) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_3];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != user) {
      member = first.getMember(guildId, user.id);
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export const useAvatarDecoration = function useAvatarDecoration(user, guildId) {
  guildId = user;
  const dependencyMap = guildId;
  const items = [closure_3];
  return guildId(dependencyMap[2]).useStateFromStores(items, () => {
    const items = [closure_3];
    return callback(arg0, arg1, items);
  });
};
export { getAvatarDecoration };
