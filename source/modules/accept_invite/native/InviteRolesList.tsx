// Module ID: 11781
// Function ID: 91520
// Name: InviteRolesList
// Dependencies: [31, 27, 33, 4130, 1912, 4541, 4126, 1212, 10214, 2]
// Exports: default

// Module 11781 (InviteRolesList)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 } });
const result = require("jsxProd").fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default function InviteRolesList(invite) {
  invite = invite.invite;
  const guild = invite.guild;
  const roles = invite.roles;
  let items = [guild, roles];
  const memo = React.useMemo(() => {
    if (null != guild) {
      if (null != roles) {
        if (0 !== roles.length) {
          const items = [];
          HermesBuiltin.arraySpread(roles, 0);
          const sorted = items.sort(guild(outer1_2[4]).sortInviteRoles);
          const mapped = sorted.map((id) => guild(outer2_2[4]).inviteRoleToDisplayData(outer1_0.id, id));
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
      obj = { variant: "text-sm/semibold", color: "text-default" };
      const intl = guild(1212).intl;
      obj.children = intl.string(guild(1212).t.stcSfI);
      const items1 = [callback(guild(4126).Text, obj), ];
      obj = { style: tmp.rolesRow, children: memo.map((id) => outer1_5(roles(outer1_2[8]), { role: id, guildId: guild.id }, id.id)) };
      items1[1] = callback(View, obj);
      obj.children = items1;
      tmp2 = callback2(guild(4541).Stack, obj);
    }
  }
  return tmp2;
};
