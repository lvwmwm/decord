// Module ID: 20086
// Function ID: 20087
// Name: DefaultMemberPermissionsSheet
// Dependencies: [19, 4914, 21, 504, 7546, 7507, 1112, 20087, 8185, 2]
// Exports: default

// Module 20086 (DefaultMemberPermissionsSheet)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/DefaultMemberPermissionsSheet.tsx");

export default function DefaultMemberPermissionsSheet(guildId) {
  let intl;
  let tmpResult;
  guildId = guildId.guildId;
  const defaultMemberPermissions = guildId.defaultMemberPermissions;
  const items = [GuildStore];
  const items1 = [guildId];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const ActionSheet = tmp(7546).ActionSheet;
    ({ title: intl.string(guildId(1112).t["4gMlpQ"]) });
    const BottomSheetTitleHeader = tmp(7507).BottomSheetTitleHeader;
    intl = tmp(1112).intl;
    ({ guild: stateFromStores, permissions: tmpResult.getRequiredPermissions(defaultMemberPermissions), granted: true });
    const PermissionItems = tmp(20087).PermissionItems;
    tmp4 = <ActionSheet header={null}>{null}</ActionSheet>;
    tmpResult = guildId(8185);
  }
  return tmp4;
};
