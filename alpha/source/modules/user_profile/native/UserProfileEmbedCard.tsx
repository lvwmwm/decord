// Module ID: 11826
// Function ID: 11827
// Name: UserProfileEmbedCard
// Dependencies: [1386, 6037, 6036, 6681, 8680, 2]
// Exports: userProfileEmbedCardKey

// Module 11826 (UserProfileEmbedCard)
import useDisplayProfile from "useDisplayProfile" /* 6036 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6681 */;
import UserStore from "UserStore" /* 1386 */;
import UserProfileStore from "UserProfileStore" /* 6037 */;
import size from "module_2" /* 2 */;

function readUserProfileEmbedCard(code, guild_id, id) {
  let obj3;
  let str;
  let tmp6Result;
  const user = UserStore.getUser(code);
  if (null == user) {
    const isFetchingProfileResult = UserProfileStore.isFetchingProfile(code, guild_id);
    const tmp5 = !isFetchingProfileResult && null != UserProfileStore.getUserProfile(code);
    return tmp5 ? closure_6 : closure_5;
  } else {
    const obj6 = useDisplayProfile;
    const displayProfile = obj6.getDisplayProfile(code, guild_id);
    let guildId = guild_id;
    const tmp6 = require;
    if (null != displayProfile) {
      guildId = displayProfile.guildId;
    }
    const obj = { type: "card", title: obj3.getName(guildId, id, user), username: user.username, pronouns: str, avatarUri: tmp6Result.getAssetUriForEmbed(user.getAvatarSource(guildId)) };
    str = undefined;
    obj3 = NicknameUtilsDefault;
    if (displayProfile != null) {
      str = displayProfile.pronouns;
    }
    if (str == null) {
      str = "";
    }
    tmp6Result = tmp6(8680);
    return obj;
  }
}
let closure_5 = { type: "loading" };
let closure_6 = { type: "hidden" };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEmbedCard.tsx");

export { readUserProfileEmbedCard };
export function userProfileEmbedCardKey(nextResult, guild_id, id) {
  let type;
  const tmp = readUserProfileEmbedCard(nextResult, guild_id, id);
  if ("card" !== tmp.type) {
    type = tmp.type;
  } else {
    const items = [, , , , ];
    ({ type: arr[0], title: arr[1], username: arr[2], pronouns: arr[3], avatarUri: arr[4] } = tmp);
    type = items.join("\0");
  }
  return type;
}
