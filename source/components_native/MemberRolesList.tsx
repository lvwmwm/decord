// Module ID: 11004
// Function ID: 85603
// Name: MemberRolesList
// Dependencies: [31, 27, 1910, 33, 4130, 566, 10184, 2]
// Exports: default

// Module 11004 (MemberRolesList)
import "result";
import { View } from "get ActivityIndicator";
import closure_4 from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("components_native/MemberRolesList.tsx");

export default function MemberRolesList(userRoles) {
  userRoles = userRoles.userRoles;
  const guild = userRoles.guild;
  let obj = userRoles(566);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getSortedRoles(guild.id));
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
      obj.children = sorted.map((id) => outer1_5(guild(outer1_2[6]), { role: id, guildId: guild.id }, id.id));
      tmp3 = <View />;
    }
  }
  return tmp3;
};
