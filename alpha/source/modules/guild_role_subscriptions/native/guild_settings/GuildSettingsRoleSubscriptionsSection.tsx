// Module ID: 19595
// Function ID: 19596
// Name: GuildSettingsRoleSubscriptionsSection
// Dependencies: [19, 4876, 1384, 1072, 21, 504, 7054, 1114, 6969, 5730, 11118, 19596, 17301, 7428, 2]
// Exports: default

// Module 19595 (GuildSettingsRoleSubscriptionsSection)
import get_initialized from "get initialized" /* 504 */;
import intl6 from "intl" /* 1114 */;
import GuildRecord from "GuildRecord" /* 4876 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import TableRow5 from "TableRow" /* 6969 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 7428 */;
import TagsIcon from "TagsIcon" /* 11118 */;
import EmojiMoneyMouthFaceIcon from "EmojiMoneyMouthFaceIcon" /* 17301 */;
import WalletIcon from "WalletIcon" /* 19596 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
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
  ({ guild: require, pushScreen: dependencyMap } = arg0);
  let obj = get_initialized;
  const items = [UserStore];
  let stateFromStores = obj.useStateFromStores(items, () => isGuildOwner(require, UserStore.getCurrentUser()));
  const obj2 = { title: intl.string(intl6.t["KzCF/6"]), hasIcons: true, children: items1 };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  intl = intl6.intl;
  const obj3 = {
    label: intl2.string(intl6.t["/CfKoD"]),
    arrow: true,
    icon: closure_6(Icon, obj4),
    onPress() {
      return dependencyMap(hasOwnProperty.ROLE_SUBSCRIPTIONS_BASIC);
    }
  };
  const TableRow = TableRow5.TableRow;
  intl2 = intl6.intl;
  obj4 = { IconComponent: CircleInformationIcon.CircleInformationIcon };
  Icon = TableRow5.TableRow.Icon;
  items1 = [closure_6(TableRow, obj3, "guild-role-subscriptions-basic"), , , ];
  const obj5 = {
    label: intl3.string(intl6.t.pXbGYc),
    arrow: true,
    icon: closure_6(Icon2, obj6),
    onPress() {
      return dependencyMap(hasOwnProperty.ROLE_SUBSCRIPTIONS_TIERS);
    }
  };
  const TableRow2 = TableRow5.TableRow;
  intl3 = intl6.intl;
  obj6 = { IconComponent: TagsIcon.TagsIcon };
  Icon2 = TableRow5.TableRow.Icon;
  items1[1] = closure_6(TableRow2, obj5, "guild-role-subscriptions-tiers");
  const tmp4 = closure_7;
  if (stateFromStores) {
    const obj7 = {
      label: intl4.string(intl6.t.p2Rsdl),
      arrow: true,
      icon: closure_6(Icon3, obj8),
      onPress() {
          const obj = { guildId: require.id };
          return dependencyMap(hasOwnProperty.ROLE_SUBSCRIPTIONS_PAYMENTS, obj);
        }
    };
    const TableRow3 = tmp(6969).TableRow;
    intl4 = tmp(1114).intl;
    obj8 = { IconComponent: WalletIcon.WalletIcon };
    Icon3 = tmp(6969).TableRow.Icon;
    stateFromStores = tmp5(TableRow3, obj7, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj9 = {
    label: intl5.string(intl6.t.C5Dbwn),
    arrow: true,
    icon: closure_6(Icon4, obj10),
    onPress() {
      return dependencyMap(hasOwnProperty.ROLE_SUBSCRIPTIONS_EMOJIS);
    }
  };
  const TableRow4 = tmp(6969).TableRow;
  intl5 = tmp(1114).intl;
  obj10 = { IconComponent: EmojiMoneyMouthFaceIcon.EmojiMoneyMouthFaceIcon };
  Icon4 = tmp(6969).TableRow.Icon;
  items1[3] = closure_6(TableRow4, obj9, "guild-role-subscriptions-emojis");
  return tmp4(TableRowGroup, obj2);
}
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: closure_4, GuildSettingsSections: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx");

export default function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  const pushScreen = guild.pushScreen;
  let tmp = null;
  const obj = GuildRoleSubscriptionSettingUtils;
  if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      const obj2 = { pushScreen, guild };
      tmp = metroRequire(HasCreatedListingsSection, obj2);
    }
  }
  return tmp;
};
