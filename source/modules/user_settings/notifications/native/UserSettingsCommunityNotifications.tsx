// Module ID: 14352
// Function ID: 109764
// Name: UserSettingsCommunityNotifications
// Dependencies: [31, 10219, 33, 4130, 566, 21, 7495, 4541, 5503, 5504, 1212, 1331, 2]
// Exports: default

// Module 14352 (UserSettingsCommunityNotifications)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingHorizontal: 16 } });
let result = require("jsxProd").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default function UserSettingsCommunityNotifications() {
  let obj = stateFromStores(566);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuildAlertSettings());
  const tmp = callback2();
  const keys = importDefault(21).keys(stateFromStores);
  let tmp3 = null;
  if (0 !== keys.length) {
    obj = {};
    obj = {
      spacing: 24,
      style: tmp.container,
      children: keys.map((arg0) => {
          const stateFromStores = arg0;
          let obj = { title: stateFromStores[arg0].guildName, hasIcons: false };
          obj = {};
          const intl = stateFromStores(outer1_2[10]).intl;
          obj.label = intl.string(stateFromStores(outer1_2[10]).t.u6dc5B);
          obj.value = !stateFromStores[arg0].disableRaidAlertNag;
          obj.onValueChange = function onValueChange() {
            const result = stateFromStores(outer2_2[11]).updateUserGuildSettings(closure_0, (disableRaidAlertNag) => {
              disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
            }, stateFromStores(outer2_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          const items = [outer1_4(stateFromStores(outer1_2[9]).TableSwitchRow, obj), ];
          obj = {};
          const intl2 = stateFromStores(outer1_2[10]).intl;
          obj.label = intl2.string(stateFromStores(outer1_2[10]).t.P8MG6q);
          obj.value = !stateFromStores[arg0].disableRaidAlertPush;
          obj.onValueChange = function onValueChange() {
            const result = stateFromStores(outer2_2[11]).updateUserGuildSettings(closure_0, (disableRaidAlertPush) => {
              disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
            }, stateFromStores(outer2_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          items[1] = outer1_4(stateFromStores(outer1_2[9]).TableSwitchRow, obj);
          obj.children = items;
          return outer1_5(stateFromStores(outer1_2[8]).TableRowGroup, obj, arg0);
        })
    };
    obj.children = callback(stateFromStores(4541).Stack, obj);
    tmp3 = callback(stateFromStores(7495).Form, obj);
  }
  return tmp3;
};
