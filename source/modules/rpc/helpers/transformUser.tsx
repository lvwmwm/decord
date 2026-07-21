// Module ID: 10491
// Function ID: 81903
// Name: transformUser
// Dependencies: []
// Exports: default

// Module 10491 (transformUser)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/transformUser.tsx");

export default function transformUser(id) {
  let avatarDecoration;
  let bot;
  let flags;
  const premiumType = id.premiumType;
  const obj = { id: id.id, username: id.username, discriminator: id.discriminator, global_name: id.globalName, avatar: id.avatar };
  let num = 0;
  ({ avatarDecoration, bot, flags } = id);
  obj.avatar_decoration_data = require(dependencyMap[0]).parseAvatarDecorationData(avatarDecoration);
  obj.bot = bot;
  obj.flags = flags;
  if (null != premiumType) {
    num = premiumType;
  }
  obj.premium_type = num;
  return obj;
};
