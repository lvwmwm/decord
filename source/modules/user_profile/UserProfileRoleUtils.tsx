// Module ID: 5506
// Function ID: 46865
// Name: sortRolesByVerification
// Dependencies: []
// Exports: sortRolesByVerification

// Module 5506 (sortRolesByVerification)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_profile/UserProfileRoleUtils.tsx");

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
      let num2 = require(dependencyMap[0]).compareGuildRoles(tags, tags2);
      const obj = require(dependencyMap[0]);
    } else {
      num2 = -1;
    }
    let num = num2;
  } else {
    num = 1;
  }
  return num;
};
