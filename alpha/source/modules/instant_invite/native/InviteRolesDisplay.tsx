// Module ID: 10803
// Function ID: 10804
// Name: InviteRolesDisplay
// Dependencies: [19, 17, 4915, 21, 5009, 504, 5619, 1114, 10804, 2]
// Exports: default

// Module 10803 (InviteRolesDisplay)
import react_native from "react-native" /* 17 */;
import RolePillDefault from "RolePill" /* 10804 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
    const obj3 = { variant: "text-xs/semibold", color: "text-muted", style: tmp.label, children: intl.string(roleIds(1114).t.stcSfI) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
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
