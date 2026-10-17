// Module ID: 15550
// Function ID: 15551
// Name: transformGuildMember
// Dependencies: [9168, 2]
// Exports: default

// Module 15550 (transformGuildMember)
import transformAvatarDecorationDefault from "transformAvatarDecoration" /* 9168 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  let avatarDecoration;
  let banner;
  let bio;
  let colorString;
  let pronouns;
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: transformAvatarDecorationDefault(avatarDecoration), banner, bio, pronouns, color_string: colorString };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  return obj;
};
