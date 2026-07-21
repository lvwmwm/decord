// Module ID: 11743
// Function ID: 91208
// Name: InviteRolesList
// Dependencies: []
// Exports: default

// Module 11743 (InviteRolesList)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ rolesRow: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default function InviteRolesList(invite) {
  invite = invite.invite;
  const guild = invite.guild;
  const arg1 = guild;
  const roles = invite.roles;
  const importDefault = roles;
  const items = [guild, roles];
  const memo = React.useMemo(() => {
    if (null != guild) {
      if (null != roles) {
        if (0 !== roles.length) {
          const items = [];
          HermesBuiltin.arraySpread(roles, 0);
          const sorted = items.sort(guild(closure_2[4]).sortInviteRoles);
          const mapped = sorted.map((id) => lib(closure_2[4]).inviteRoleToDisplayData(lib.id, id));
        }
        return [];
      }
    }
  }, items);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = null;
    if (0 !== memo.length) {
      let obj = { spacing: 4, style: invite.style };
      obj = {};
      const intl = arg1(dependencyMap[7]).intl;
      obj.children = intl.string(arg1(dependencyMap[7]).t.stcSfI);
      const items1 = [callback(arg1(dependencyMap[6]).Text, obj), ];
      obj = { style: tmp.rolesRow, children: memo.map((id) => callback(roles(closure_2[8]), { role: id, guildId: guild.id }, id.id)) };
      items1[1] = callback(View, obj);
      obj.children = items1;
      tmp2 = callback2(arg1(dependencyMap[5]).Stack, obj);
    }
  }
  return tmp2;
};
