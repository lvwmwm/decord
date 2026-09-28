// Module ID: 14082
// Function ID: 14083
// Name: transformGuildMember
// Dependencies: [1966, 2]
// Exports: default

// Module 14082 (transformGuildMember)
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: AvatarDecorationUtils.parseAvatarDecorationData(avatarDecoration), banner, bio, pronouns, color_string: colorString };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  return obj;
};
