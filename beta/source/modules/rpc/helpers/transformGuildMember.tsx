// Module ID: 14804
// Function ID: 14805
// Name: transformGuildMember
// Dependencies: [1969, 2]
// Exports: default

// Module 14804 (transformGuildMember)
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1969 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: AvatarDecorationUtils.parseAvatarDecorationData(avatarDecoration), banner, bio, pronouns, color_string: colorString };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  return obj;
};
