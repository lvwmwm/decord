// Module ID: 12498
// Function ID: 12499
// Name: InviteRolesList
// Dependencies: [19, 17, 21, 5090, 558, 576, 2122, 5086, 1126, 10286, 5373, 2]

// Module 12498 (InviteRolesList)
import react_native from "react-native" /* 17 */;
import GuildRoleUtils from "GuildRoleUtils" /* 2122 */;
import RolePillDefault from "RolePill" /* 10286 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteRolesList(arg0) {
  let first;
  let guild;
  let intl;
  let invite;
  let items1;
  let style;
  let obj = guild(576);
  const cResult = obj.c(18);
  ({ invite, style } = arg0);
  const tmp5 = closure_7();
  guild = invite.guild;
  const roles = invite.roles;
  if (null != guild) {
    if (null != roles) {
      if (0 !== roles.length) {
        let tmp7;
        if (cResult[1] === guild) {
          let tmp6;
          if (cResult[2] === roles) {
            tmp6 = cResult[3];
          }
          first = tmp6;
        }
        if (cResult[4] !== guild) {
          const fn = function x(id) {
            const obj = GuildRoleUtils;
            return obj.inviteRoleToDisplayData(guild.id, id);
          };
          cResult[4] = guild;
          cResult[5] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[5];
        }
        const items = [];
        HermesBuiltin.arraySpread(items, roles, 0);
        const sorted = items.sort(tmp2(2122).sortInviteRoles);
        const mapped = sorted.map(tmp7);
        cResult[1] = guild;
        cResult[2] = roles;
        cResult[3] = mapped;
        tmp6 = mapped;
      }
      if (null != guild) {
        if (0 !== first.length) {
          let tmp12;
          let tmp17;
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(guild(1126).t.stcSfI) };
            const Text = tmp2(5086).Text;
            intl = tmp2(1126).intl;
            const tmp14 = closure_5(Text, obj2);
            cResult[6] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] === guild) {
            let tmp16;
            if (cResult[8] === first) {
              tmp16 = cResult[9];
            }
            if (cResult[12] === tmp5.rolesRow) {
              let tmp19;
              if (cResult[13] === tmp16) {
                tmp19 = cResult[14];
              }
              if (cResult[15] === style) {
                let tmp23;
                if (cResult[16] === tmp19) {
                  tmp23 = cResult[17];
                }
                return tmp23;
              }
              const obj3 = { spacing: 4, style, children: items1 };
              items1 = [tmp12, tmp19];
              const tmp25 = closure_6(guild(5373).Stack, obj3);
              cResult[15] = style;
              cResult[16] = tmp19;
              cResult[17] = tmp25;
              tmp23 = tmp25;
            }
            const obj4 = { style: tmp15, children: tmp16 };
            const tmp22 = closure_5(View, obj4);
            cResult[12] = tmp5.rolesRow;
            cResult[13] = tmp16;
            cResult[14] = tmp22;
            tmp19 = tmp22;
          }
          if (cResult[10] !== guild) {
            const fn2 = function b(role) {
              const obj = { role, guildId: guild.id };
              return hasOwnProperty(RolePillDefault, obj, role.id);
            };
            cResult[10] = guild;
            cResult[11] = fn2;
            tmp17 = fn2;
          } else {
            tmp17 = cResult[11];
          }
          const mapped1 = first.map(tmp17);
          cResult[7] = guild;
          cResult[8] = first;
          cResult[9] = mapped1;
          tmp16 = mapped1;
        }
      }
      return null;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    cResult[0] = items2;
    first = items2;
  } else {
    first = cResult[0];
  }
}) : (function InviteRolesList(invite) {
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
            const obj = guild(dependencyMap[6]);
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
      const Stack = guild(5373).Stack;
      const obj2 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(guild(1126).t.stcSfI) };
      const Text = guild(5086).Text;
      intl = guild(1126).intl;
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
});
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default tmp3;
