// Module ID: 16923
// Function ID: 16924
// Name: UserSettingsCommunityNotifications
// Dependencies: [19, 11106, 21, 4913, 575, 504, 11, 7709, 5929, 7348, 7556, 1112, 4743, 2]
// Exports: default

// Module 16923 (UserSettingsCommunityNotifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import TableRowGroup2 from "TableRowGroup" /* 7348 */;
import TableSwitchRow3 from "TableSwitchRow" /* 7556 */;
import react from "react" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11106 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
let closure_6 = createStyles.createStyles(obj);
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
    const Form = tmp2(7709).Form;
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
              const obj = stateFromStores(closure_2_2[12]);
              const result = obj.updateUserGuildSettings(closure_0, (disableRaidAlertNag) => {
                disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
              }, stateFromStores(closure_2_2[12]).UserSettingsDelay.INFREQUENT_USER_ACTION);
            }
          };
          const TableSwitchRow = TableSwitchRow3.TableSwitchRow;
          intl = intl3.intl;
          items = [React3(TableSwitchRow, obj2), ];
          const obj3 = {
            label: intl2.string(intl3.t.P8MG6q),
            value: !stateFromStores[item].disableRaidAlertPush,
            onValueChange() {
              const obj = stateFromStores(closure_2_2[12]);
              const result = obj.updateUserGuildSettings(closure_0, (disableRaidAlertPush) => {
                disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
              }, stateFromStores(closure_2_2[12]).UserSettingsDelay.INFREQUENT_USER_ACTION);
            }
          };
          const TableSwitchRow2 = TableSwitchRow3.TableSwitchRow;
          intl2 = intl3.intl;
          items[1] = React3(TableSwitchRow2, obj3);
          return hasOwnProperty(TableRowGroup, obj, item);
        })
    };
    Stack = tmp2(5929).Stack;
    tmp5 = closure_4(Form, obj3);
  }
  return tmp5;
};
