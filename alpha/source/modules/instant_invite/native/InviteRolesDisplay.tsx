// Module ID: 11001
// Function ID: 11002
// Name: InviteRolesDisplay
// Dependencies: [19, 17, 5047, 21, 5141, 504, 5761, 1113, 11002, 2]
// Exports: default

// Module 11001 (InviteRolesDisplay)
import react_native from "react-native" /* 17 */;
import RolePillDefault from "RolePill" /* 11002 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 5047 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { marginTop: 8 }, label: { marginBottom: 4 }, rolesRow: { flexDirection: "row", flexWrap: "wrap" } });
const result = size.fileFinishedImporting("modules/instant_invite/native/InviteRolesDisplay.tsx");

export default function InviteRolesDisplay(roleIds) {
  let intl;
  let items2;
  let role;
  roleIds = roleIds.roleIds;
  const guildId = roleIds.guildId;
  const tmp = closure_7();
  let obj = roleIds(504);
  const items = [GuildRoleStore];
  const items1 = [roleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const mapped = roleIds.map((item) => role.getRole(guildId, item));
    return mapped.filter((item) => null != item);
  }, items1);
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { style: tmp.container, children: items2 };
    const obj3 = { variant: "body-xs/semibold", color: "text-muted", style: tmp.label, children: intl.string(roleIds(1113).t.stcSfI) };
    const Text = tmp2(5761).Text;
    intl = tmp2(1113).intl;
    items2 = [closure_5(Text, obj3), ];
    const obj4 = {
      style: tmp.rolesRow,
      children: stateFromStoresArray.map((role) => {
          const obj = { role, guildId };
          return hasOwnProperty(RolePillDefault, obj, role.id);
        })
    };
    items2[1] = closure_5(View, obj4);
    tmp4 = closure_6(View, obj2);
  }
  return tmp4;
};
