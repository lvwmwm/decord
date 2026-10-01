// Module ID: 7661
// Function ID: 7662
// Name: useAvatarDecoration
// Dependencies: [32, 2108, 563, 2]
// Exports: getAvatarDecoration, useAvatarDecoration

// Module 7661 (useAvatarDecoration)
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export const useAvatarDecoration = function useAvatarDecoration(user, guildId) {
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
};
export const getAvatarDecoration = function getAvatarDecoration(user, guildId) {
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
};
