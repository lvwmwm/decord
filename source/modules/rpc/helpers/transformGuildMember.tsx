// Module ID: 13321
// Function ID: 101222
// Name: transformGuildMember
// Dependencies: []
// Exports: default

// Module 13321 (transformGuildMember)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  let avatarDecoration;
  let banner;
  let bio;
  let colorString;
  let pronouns;
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  obj.avatar_decoration_data = require(dependencyMap[0]).parseAvatarDecorationData(avatarDecoration);
  obj.banner = banner;
  obj.bio = bio;
  obj.pronouns = pronouns;
  obj.color_string = colorString;
  return obj;
};
