// Module ID: 17295
// Function ID: 17296
// Name: GuildSettingsRoleSubscriptionsSection
// Dependencies: [19, 2063, 1372, 1074, 21, 504, 5999, 1115, 5917, 17296, 17297, 17298, 17299, 6678, 2]
// Exports: default

// Module 17295 (GuildSettingsRoleSubscriptionsSection)
import get_initialized from "get initialized" /* 504 */;
import intl6 from "intl" /* 1115 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import TableRow5 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 6678 */;
import AssetRegistryDefault from "AssetRegistry" /* 17296 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17297 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 17298 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 17299 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function HasCreatedListingsSection(arg0) {
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let obj10;
  let obj4;
  let obj6;
  let obj8;
  ({ guild: require, pushScreen: importDefault } = arg0);
  let obj = get_initialized;
  const items = [UserStore];
  let stateFromStores = obj.useStateFromStores(items, () => isGuildOwner(require, UserStore.getCurrentUser()));
  const obj2 = { title: intl.string(intl6.t["KzCF/6"]), hasIcons: true, children: items1 };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  intl = intl6.intl;
  const obj3 = {
    label: intl2.string(intl6.t["/CfKoD"]),
    arrow: true,
    icon: closure_7(Icon, obj4),
    onPress() {
      return importDefault(metroRequire.ROLE_SUBSCRIPTIONS_BASIC);
    }
  };
  const TableRow = TableRow5.TableRow;
  intl2 = intl6.intl;
  obj4 = { source: AssetRegistryDefault };
  Icon = TableRow5.TableRow.Icon;
  items1 = [closure_7(TableRow, obj3, "guild-role-subscriptions-basic"), , , ];
  const obj5 = {
    label: intl3.string(intl6.t.pXbGYc),
    arrow: true,
    icon: closure_7(Icon2, obj6),
    onPress() {
      return importDefault(metroRequire.ROLE_SUBSCRIPTIONS_TIERS);
    }
  };
  const TableRow2 = TableRow5.TableRow;
  intl3 = intl6.intl;
  obj6 = { source: AssetRegistryDefault2 };
  Icon2 = TableRow5.TableRow.Icon;
  items1[1] = closure_7(TableRow2, obj5, "guild-role-subscriptions-tiers");
  const tmp4 = closure_8;
  if (stateFromStores) {
    const obj7 = {
      label: intl4.string(intl6.t.p2Rsdl),
      arrow: true,
      icon: closure_7(Icon3, obj8),
      onPress() {
          const obj = { guildId: require.id };
          return importDefault(metroRequire.ROLE_SUBSCRIPTIONS_PAYMENTS, obj);
        }
    };
    const TableRow3 = tmp(5917).TableRow;
    intl4 = tmp(1115).intl;
    obj8 = { source: AssetRegistryDefault3 };
    Icon3 = tmp(5917).TableRow.Icon;
    stateFromStores = tmp5(TableRow3, obj7, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj9 = {
    label: intl5.string(intl6.t.C5Dbwn),
    arrow: true,
    icon: closure_7(Icon4, obj10),
    onPress() {
      return importDefault(metroRequire.ROLE_SUBSCRIPTIONS_EMOJIS);
    }
  };
  const TableRow4 = tmp(5917).TableRow;
  intl5 = tmp(1115).intl;
  obj10 = { source: AssetRegistryDefault4 };
  Icon4 = tmp(5917).TableRow.Icon;
  items1[3] = closure_7(TableRow4, obj9, "guild-role-subscriptions-emojis");
  return tmp4(TableRowGroup, obj2);
}
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: hasOwnProperty, GuildSettingsSections: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx");

export default function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  const pushScreen = guild.pushScreen;
  let tmp = null;
  const obj = GuildRoleSubscriptionSettingUtils;
  if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp = null;
    if (features.has(hasOwnProperty.ROLE_SUBSCRIPTIONS_ENABLED)) {
      const obj2 = { pushScreen, guild };
      tmp = metroImportDefault(HasCreatedListingsSection, obj2);
    }
  }
  return tmp;
};
