// Module ID: 5508
// Function ID: 46943
// Name: sortRolesByVerification
// Dependencies: [1912, 2]
// Exports: sortRolesByVerification

// Module 5508 (sortRolesByVerification)
const result = require("set").fileFinishedImporting("modules/user_profile/UserProfileRoleUtils.tsx");

export const sortRolesByVerification = function sortRolesByVerification(tags, tags2) {
  tags = tags.tags;
  let guild_connections;
  if (null != tags) {
    guild_connections = tags.guild_connections;
  }
  tags2 = tags2.tags;
  let guild_connections1;
  if (null != tags2) {
    guild_connections1 = tags2.guild_connections;
  }
  if (undefined === guild_connections) {
    if (tmp2) {
      let num2 = require(1912) /* _createForOfIteratorHelperLoose */.compareGuildRoles(tags, tags2);
      const obj = require(1912) /* _createForOfIteratorHelperLoose */;
    } else {
      num2 = -1;
    }
    let num = num2;
  } else {
    num = 1;
  }
  return num;
};
