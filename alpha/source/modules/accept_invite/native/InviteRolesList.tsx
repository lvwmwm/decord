// Module ID: 12216
// Function ID: 12217
// Name: InviteRolesList
// Dependencies: [19, 17, 21, 4829, 2105, 5272, 4825, 1115, 10398, 2]
// Exports: default

// Module 12216 (InviteRolesList)
import GuildRoleUtils from "GuildRoleUtils" /* 2105 */;
import RolePillDefault from "RolePill" /* 10398 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles({ rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default function InviteRolesList(invite) {
  invite = invite.invite;
  const guild = invite.guild;
  const roles = invite.roles;
  let items = [guild, roles];
  const memo = noop.useMemo(() => {
    if (null != guild) {
      if (null != roles) {
        if (0 !== arr.length) {
          const items = [];
          HermesBuiltin.arraySpread(arr, 0);
          const sorted = items.sort(GuildRoleUtils.sortInviteRoles);
          const mapped = sorted.map((item) => guild(dependencyMap[4]).inviteRoleToDisplayData(id.id, item));
        }
        return [];
      }
    }
  }, items);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = null;
    if (0 !== memo.length) {
      const obj = { spacing: 4, style: invite.style, children: null };
      const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
      const intl = guild(1115).intl;
      obj2.children = intl.string(guild(1115).t.stcSfI);
      const items1 = [closure_5(guild(4825).Text, obj2), ];
      const obj3 = { style: tmp.rolesRow, children: memo.map((role) => hasOwnProperty(RolePillDefault, { role, guildId: guild.id }, role.id)) };
      items1[1] = closure_5(View, obj3);
      obj.children = items1;
      tmp2 = closure_6(guild(5272).Stack, obj);
    }
  }
  return tmp2;
};
