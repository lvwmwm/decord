// Module ID: 11338
// Function ID: 11339
// Name: MemberRolesList
// Dependencies: [19, 17, 2102, 21, 4836, 504, 10409, 2]
// Exports: default

// Module 11338 (MemberRolesList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import RolePillDefault from "RolePill" /* 10409 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let tags;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ wrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
const result = size.fileFinishedImporting("components_native/MemberRolesList.tsx");

export default function MemberRolesList(userRoles) {
  let items1;
  userRoles = userRoles.userRoles;
  const guild = userRoles.guild;
  const style = userRoles.style;
  const tmp = closure_6();
  const items = [GuildRoleStore];
  const obj = userRoles(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
  const tmp4 = <View />;
  let tmp2Result = tmp4;
  const tmp2 = jsx;
  const tmp3 = View;
  if (null != userRoles) {
    let num = 0;
    tmp2Result = tmp4;
    if (userRoles.length > 0) {
      const found = stateFromStores.filter((id) => userRoles.includes(id.id));
      const sorted = found.sort((tags, tags2) => {
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
        if (null === guild_connections) {
          let num2 = 0;
          if (null === guild_connections) {
            num2 = 0;
            if (null !== guild_connections1) {
              num2 = -1;
            }
          }
          num = num2;
        } else {
          num = 1;
        }
        return num;
      });
      const obj2 = { style: items1, children: sorted.map((role) => jsx(RolePillDefault, { role, guildId: guild.id }, role.id)) };
      items1 = [tmp.wrapper, style];
      tmp2Result = tmp2(tmp3, obj2);
    }
  }
  return tmp2Result;
};
