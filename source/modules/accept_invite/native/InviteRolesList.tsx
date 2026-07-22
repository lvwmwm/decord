// Module ID: 11744
// Function ID: 91233
// Name: InviteRolesList
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 11744 (InviteRolesList)
import closure_3 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
let closure_7 = __exportStarResult1.createStyles({ rolesRow: { marginBottom: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041429461884185393, alignSelf: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000051300060092725, textAlignVertical: -0.0000000000000000000000000000000000000000015246127293407848, width: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061780589495861 } });
const result = __exportStarResult1.fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

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
      obj = { cachedAt: "explicit_content_friend_dm", edpbxy: "enum" };
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
