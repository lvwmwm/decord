// Module ID: 10531
// Function ID: 82169
// Name: transformUser
// Dependencies: [1828, 2]
// Exports: default

// Module 10531 (transformUser)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/transformUser.tsx");

export default function transformUser(id) {
  let avatarDecoration;
  let bot;
  let flags;
  const premiumType = id.premiumType;
  const obj = { id: id.id, username: id.username, discriminator: id.discriminator, global_name: id.globalName, avatar: id.avatar };
  let num = 0;
  ({ avatarDecoration, bot, flags } = id);
  obj.avatar_decoration_data = require(1828) /* parseAvatarDecorationData */.parseAvatarDecorationData(avatarDecoration);
  obj.bot = bot;
  obj.flags = flags;
  if (null != premiumType) {
    num = premiumType;
  }
  obj.premium_type = num;
  return obj;
};
