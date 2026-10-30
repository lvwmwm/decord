// Module ID: 14277
// Function ID: 14278
// Name: InviteRolesList
// Dependencies: [19, 17, 21, 5009, 4919, 6022, 5619, 1114, 10804, 2]
// Exports: default

// Module 14277 (InviteRolesList)
import react_native from "react-native" /* 17 */;
import GuildRoleUtils from "GuildRoleUtils" /* 4919 */;
import RolePillDefault from "RolePill" /* 10804 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 } });
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default function InviteRolesList(invite) {
  let intl;
  let items1;
  invite = invite.invite;
  const style = invite.style;
  const guild = invite.guild;
  const roles = invite.roles;
  let items = [guild, roles];
  const tmp = closure_7();
  const memo = react.useMemo(() => {
    let id;
    if (null != guild) {
      if (null != roles) {
        if (0 !== roles.length) {
          const items = [];
          HermesBuiltin.arraySpread(items, roles, 0);
          const sorted = items.sort(GuildRoleUtils.sortInviteRoles);
          const mapped = sorted.map((item) => {
            const obj = guild(dependencyMap[4]);
            return obj.inviteRoleToDisplayData(id.id, item);
          });
        }
        return [];
      }
    }
  }, items);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = null;
    if (0 !== memo.length) {
      let obj = { spacing: 4, style, children: items1 };
      const Stack = guild(6022).Stack;
      const obj2 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(guild(1114).t.stcSfI) };
      const Text = guild(5619).Text;
      intl = guild(1114).intl;
      items1 = [closure_5(Text, obj2), ];
      const obj3 = {
        style: tmp.rolesRow,
        children: memo.map((role) => {
              const obj = { role, guildId: guild.id };
              return hasOwnProperty(RolePillDefault, obj, role.id);
            })
      };
      items1[1] = closure_5(View, obj3);
      tmp2 = closure_6(Stack, obj);
    }
  }
  return tmp2;
};
