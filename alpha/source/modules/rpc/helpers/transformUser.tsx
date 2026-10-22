// Module ID: 9231
// Function ID: 9232
// Name: transformUser
// Dependencies: [9232, 2]
// Exports: default

// Module 9231 (transformUser)
import transformAvatarDecorationDefault from "transformAvatarDecoration" /* 9232 */;
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
