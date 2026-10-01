// Module ID: 15071
// Function ID: 15072
// Name: UserSettingsCommunityNotifications
// Dependencies: [19, 9540, 21, 4836, 504, 11, 8053, 5279, 5999, 6621, 1115, 2026, 2]
// Exports: default

// Module 15071 (UserSettingsCommunityNotifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl3 from "intl" /* 1115 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import TableSwitchRow3 from "TableSwitchRow" /* 6621 */;
import react from "react" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 9540 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { paddingHorizontal: 16 } });
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default function UserSettingsCommunityNotifications() {
  let Stack;
  let guildAlertSettings;
  let obj4;
  let stateFromStores;
  const tmp = closure_6();
  let obj = stateFromStores(504);
  let items = [GuildIncidentsStore];
  stateFromStores = obj.useStateFromStores(items, () => guildAlertSettings.getGuildAlertSettings());
  let obj2 = SnowflakeUtilsDefault;
  const keys = obj2.keys(stateFromStores);
  let tmp5 = null;
  if (0 !== keys.length) {
    let obj3 = { children: closure_4(Stack, obj4) };
    const Form = tmp2(8053).Form;
    obj4 = {
      spacing: 24,
      style: tmp.container,
      children: keys.map((item) => {
          let intl;
          let intl2;
          let items;
          let closure_0 = item;
          let obj = { title: stateFromStores[item].guildName, hasIcons: false, children: items };
          const TableRowGroup = TableRowGroup2.TableRowGroup;
          const obj2 = {
            label: intl.string(intl3.t.u6dc5B),
            value: !stateFromStores[item].disableRaidAlertNag,
            onValueChange() {
              const obj = stateFromStores(closure_2_2[11]);
              const result = obj.updateUserGuildSettings(closure_0, (disableRaidAlertNag) => {
                disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
              }, stateFromStores(closure_2_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
            }
          };
          const TableSwitchRow = TableSwitchRow3.TableSwitchRow;
          intl = intl3.intl;
          items = [React3(TableSwitchRow, obj2), ];
          const obj3 = {
            label: intl2.string(intl3.t.P8MG6q),
            value: !stateFromStores[item].disableRaidAlertPush,
            onValueChange() {
              const obj = stateFromStores(closure_2_2[11]);
              const result = obj.updateUserGuildSettings(closure_0, (disableRaidAlertPush) => {
                disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
              }, stateFromStores(closure_2_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
            }
          };
          const TableSwitchRow2 = TableSwitchRow3.TableSwitchRow;
          intl2 = intl3.intl;
          items[1] = React3(TableSwitchRow2, obj3);
          return hasOwnProperty(TableRowGroup, obj, item);
        })
    };
    Stack = tmp2(5279).Stack;
    tmp5 = closure_4(Form, obj3);
  }
  return tmp5;
};
