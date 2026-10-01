// Module ID: 17338
// Function ID: 17339
// Name: ExemptRolesActionSheet
// Dependencies: [19, 2103, 2102, 21, 11316, 504, 17339, 1115, 2]
// Exports: default

// Module 17338 (ExemptRolesActionSheet)
import Fragment from "Fragment" /* 21 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2103 */;
import RoleNameDefault from "RoleName" /* 11316 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import size from "module_2" /* 2 */;

function renderRoleName(role) {
  return jsx(RoleNameDefault, { role, children: role.name });
}
function getRoleId(id) {
  return id.id;
}
function getRoleName(name) {
  return name.name;
}
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptRolesActionSheet.tsx");

export default function ExemptRolesActionSheet(guildId) {
  let exemptRoles;
  let onSave;
  guildId = guildId.guildId;
  ({ exemptRoles, onSave } = guildId);
  const items = [GuildRoleStore];
  const items1 = [guildId];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => stateFromStores.filter((item) => !closure_1_4(item)), items2);
  stateFromStores(17339);
  const intl = guildId(1115).intl;
  const intl2 = guildId(1115).intl;
  return <tmp3 title={intl.string(guildId(1115).t["LPJmL/"])} searchPlaceholder={intl2.string(guildId(1115).t.aFO1I6)} listId="automod-exempt-roles" items={memo} initialSelected={exemptRoles} getId={getRoleId} getSearchText={getRoleName} renderLabel={renderRoleName} onSave={onSave} />;
};
