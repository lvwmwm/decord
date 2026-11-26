// Module ID: 11973
// Function ID: 11974
// Name: UserProfileEmbedCard
// Dependencies: [4985, 1387, 6163, 4868, 6162, 6807, 8821, 2]
// Exports: userProfileEmbedCardKey

// Module 11973 (UserProfileEmbedCard)
import useDisplayProfile from "useDisplayProfile" /* 6162 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6807 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8821 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;
import UserProfileStore from "UserProfileStore" /* 6163 */;
import size from "module_2" /* 2 */;

function readUserProfileEmbedCard(code, guild_id, id) {
  let _private;
  let str2;
  const user = UserStore.getUser(code);
  if (null == user) {
    const isFetchingProfileResult = UserProfileStore.isFetchingProfile(code, guild_id);
    const tmp11 = !isFetchingProfileResult && null != UserProfileStore.getUserProfile(code);
    return tmp11 ? closure_7 : closure_6;
  } else {
    let tmp8;
    let obj3;
    const obj7 = useDisplayProfile;
    const displayProfile = obj7.getDisplayProfile(code, guild_id);
    let guildId = guild_id;
    if (null != displayProfile) {
      guildId = displayProfile.guildId;
    }
    const obj2 = NicknameUtilsDefault;
    const name = obj2.getName(guildId, id, user);
    const tmp12Result = renderer_EmbedUtils;
    const assetUriForEmbed = tmp12Result.getAssetUriForEmbed(user.getAvatarSource(guildId));
    const isBlockedResult = RelationshipStore.isBlocked(code);
    const isIgnoredResult = RelationshipStore.isIgnored(code);
    if (isBlockedResult) {
      if (!isIgnoredResult) {
        let str = "ignore";
        if (isBlockedResult) {
          str = "block";
        }
        tmp8 = str;
      } else {
        const IgnoreProfileSpeedbumpDisabled = tmp12(4868).IgnoreProfileSpeedbumpDisabled;
        tmp8 = null;
      }
    } else {
      tmp8 = null;
    }
    if (null != tmp8) {
      obj3 = { type: "restricted", speedBumpType: tmp8, displayName: name, avatarUri: assetUriForEmbed };
      const obj = { type: "restricted", speedBumpType: tmp8, displayName: name, avatarUri: assetUriForEmbed };
    } else {
      obj3 = { type: "card", title: name, username: user.username, pronouns: str2, avatarUri: assetUriForEmbed, isPrivate: true === _private };
      str2 = undefined;
      if (displayProfile != null) {
        str2 = displayProfile.pronouns;
      }
      if (str2 == null) {
        str2 = "";
      }
      _private = undefined;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
    }
    return obj3;
  }
}
let closure_6 = { type: "loading" };
let closure_7 = { type: "hidden" };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEmbedCard.tsx");

export { readUserProfileEmbedCard };
export function userProfileEmbedCardKey(nextResult, guild_id, id) {
  let type;
  const tmp = readUserProfileEmbedCard(nextResult, guild_id, id);
  if ("restricted" === tmp.type) {
    const items = [, , , ];
    ({ type: arr2[0], speedBumpType: arr2[1], displayName: arr2[2], avatarUri: arr2[3] } = tmp);
    type = items.join("\0");
  } else if ("card" !== tmp.type) {
    type = tmp.type;
  } else {
    const items1 = [, , , , , ];
    ({ type: arr[0], title: arr[1], username: arr[2], pronouns: arr[3], avatarUri: arr[4] } = tmp);
    const _String = String;
    items1[5] = String(tmp.isPrivate);
    type = items1.join("\0");
  }
  return type;
}
