// Module ID: 6847
// Function ID: 6848
// Name: useAvatarDecoration
// Dependencies: [32, 4921, 563, 2]
// Exports: getAvatarDecoration, useAvatarDecoration

// Module 6847 (useAvatarDecoration)
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export function useAvatarDecoration(user, guildId) {
  _require = user;
  dependencyMap = guildId;
  let items = [GuildMemberStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    const items = [GuildMemberStore];
    const first = _slicedToArray(items, 1)[0];
    let member = null;
    const tmp2 = guildId;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = first.getMember(tmp2, tmp.id);
      }
    }
    let avatarDecoration;
    if (member != null) {
      avatarDecoration = member.avatarDecoration;
    }
    if (avatarDecoration == null) {
      let avatarDecoration1;
      if (user != null) {
        avatarDecoration1 = tmp.avatarDecoration;
      }
      avatarDecoration = avatarDecoration1;
    }
    return avatarDecoration;
  });
}
export function getAvatarDecoration(user, guildId) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [GuildMemberStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != user) {
      member = first.getMember(guildId, user.id);
    }
  }
  let avatarDecoration;
  if (member != null) {
    avatarDecoration = member.avatarDecoration;
  }
  if (avatarDecoration == null) {
    let avatarDecoration1;
    if (user != null) {
      avatarDecoration1 = user.avatarDecoration;
    }
    avatarDecoration = avatarDecoration1;
  }
  return avatarDecoration;
}
