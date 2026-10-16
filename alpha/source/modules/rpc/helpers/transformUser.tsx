// Module ID: 11262
// Function ID: 11263
// Name: transformUser
// Dependencies: [11263, 2]
// Exports: default

// Module 11262 (transformUser)
import transformAvatarDecorationDefault from "transformAvatarDecoration" /* 11263 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformUser.tsx");

export default function transformUser(id) {
  let avatarDecoration;
  let bot;
  const publicFlags = id.publicFlags;
  const obj = { id: id.id, username: id.username, discriminator: id.discriminator, global_name: id.globalName, avatar: id.avatar, avatar_decoration_data: transformAvatarDecorationDefault(avatarDecoration), bot, flags: publicFlags, public_flags: publicFlags, premium_type: 0 };
  ({ avatarDecoration, bot } = id);
  return obj;
};
