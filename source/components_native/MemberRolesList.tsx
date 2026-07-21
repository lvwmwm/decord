// Module ID: 10993
// Function ID: 85529
// Name: MemberRolesList
// Dependencies: []
// Exports: default

// Module 10993 (MemberRolesList)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles({ wrapper: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("components_native/MemberRolesList.tsx");

export default function MemberRolesList(userRoles) {
  userRoles = userRoles.userRoles;
  const arg1 = userRoles;
  const importDefault = userRoles.guild;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => sortedRoles.getSortedRoles(guild.id));
  const tmp2 = <View />;
  let tmp3 = tmp2;
  if (null != userRoles) {
    tmp3 = tmp2;
    if (userRoles.length > 0) {
      const found = stateFromStores.filter((id) => userRoles.includes(id.id));
      const sorted = found.sort((tags, tags2) => {
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
        if (null === guild_connections) {
          let num2 = 0;
          if (!tmp2) {
            num2 = 0;
            if (tmp4) {
              num2 = -1;
            }
          }
          let num = num2;
        } else {
          num = 1;
        }
        return num;
      });
      obj = {};
      const items1 = [tmp.wrapper, userRoles.style];
      obj.style = items1;
      obj.children = sorted.map((id) => callback(guild(closure_2[6]), { role: id, guildId: guild.id }, id.id));
      tmp3 = <View {...obj} />;
    }
  }
  return tmp3;
};
