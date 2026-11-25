// Module ID: 11924
// Function ID: 11925
// Name: UserProfileEmbedUsers
// Dependencies: [32, 5734, 11925, 2]
// Exports: areUserProfileEmbedUsersEqual, collectUserProfileEmbedUserIds, getUserProfileEmbedUsers

// Module 11924 (UserProfileEmbedUsers)
import CodedLink from "CodedLink" /* 5734 */;
import UserProfileEmbedCard from "UserProfileEmbedCard" /* 11925 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let set;

const items = [];
let map = new Map();
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEmbedUsers.tsx");

export const NO_USER_PROFILE_EMBED_USER_IDS = items;
export const NO_USER_PROFILE_EMBED_USERS = map;
export function collectUserProfileEmbedUserIds(arr) {
  set = new Set();
  const item = arr.forEach((getContentMessage) => {
    const codedLinks = getContentMessage.getContentMessage().codedLinks;
    for (const item10009 of codedLinks) {
      let code = item10009.code;
      if (item10009.type === CodedLink.CodedLinkType.USER_PROFILE) {
        let addResult = set.add(code);
      }
      continue;
    }
  });
  if (0 === set.size) {
    arr = items;
  } else {
    const _Array = Array;
    arr = Array.from(set);
  }
  return arr;
}
export function getUserProfileEmbedUsers(arg0, guild_id, id) {
  if (0 === arg0.length) {
    return map;
  } else {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      set = map.set;
      let obj = UserProfileEmbedCard;
      let result = set(nextResult, obj.userProfileEmbedCardKey(nextResult, guild_id, id));
      continue;
    }
    return map;
  }
}
export function areUserProfileEmbedUsersEqual(size, size2) {
  if (size === size2) {
    return true;
  } else if (size.size !== size2.size) {
    return false;
  } else {
    const obj = size[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp6 = _slicedToArray(tmp3, 2);
      if (size2.get(tmp6[0]) !== tmp6[1]) {
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
