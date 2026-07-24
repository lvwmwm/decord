// Module ID: 13497
// Function ID: 103760
// Name: transformGuildMember
// Dependencies: [1828, 2]
// Exports: default

// Module 13497 (transformGuildMember)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  let avatarDecoration;
  let banner;
  let bio;
  let colorString;
  let pronouns;
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  obj.avatar_decoration_data = require(1828) /* parseAvatarDecorationData */.parseAvatarDecorationData(avatarDecoration);
  obj.banner = banner;
  obj.bio = bio;
  obj.pronouns = pronouns;
  obj.color_string = colorString;
  return obj;
};
