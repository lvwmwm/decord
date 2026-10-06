// Module ID: 6628
// Function ID: 6629
// Name: UserProfileRoleUtils
// Dependencies: [2109, 2]
// Exports: sortRolesByVerification

// Module 6628 (UserProfileRoleUtils)
import GuildRoleUtils from "GuildRoleUtils" /* 2109 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/UserProfileRoleUtils.tsx");

export const sortRolesByVerification = function sortRolesByVerification(tags, tags2) {
  let num;
  tags = tags.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  tags2 = tags2.tags;
  let guild_connections1;
  if (tags2 != null) {
    guild_connections1 = tags2.guild_connections;
  }
  if (undefined === guild_connections) {
    let num2;
    if (undefined !== guild_connections) {
      const obj = GuildRoleUtils;
      num2 = obj.compareGuildRoles(tags, tags2);
    } else {
      num2 = -1;
    }
    num = num2;
  } else {
    num = 1;
  }
  return num;
};
