// Module ID: 14220
// Function ID: 107510
// Name: UserSettingsCommunityNotifications
// Dependencies: []
// Exports: default

// Module 14220 (UserSettingsCommunityNotifications)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { paddingHorizontal: 16 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default function UserSettingsCommunityNotifications() {
  let obj = arg1(dependencyMap[4]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => guildAlertSettings.getGuildAlertSettings());
  const arg1 = stateFromStores;
  const tmp = callback2();
  const keys = importDefault(dependencyMap[5]).keys(stateFromStores);
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
          const intl = stateFromStores(closure_2[10]).intl;
          obj.label = intl.string(stateFromStores(closure_2[10]).t.u6dc5B);
          obj.value = !stateFromStores[arg0].disableRaidAlertNag;
          obj.onValueChange = function onValueChange() {
            const result = arg0(closure_2[11]).updateUserGuildSettings(arg0, (disableRaidAlertNag) => {
              disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
            }, arg0(closure_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          const items = [callback(stateFromStores(closure_2[9]).TableSwitchRow, obj), ];
          obj = {};
          const intl2 = stateFromStores(closure_2[10]).intl;
          obj.label = intl2.string(stateFromStores(closure_2[10]).t.P8MG6q);
          obj.value = !stateFromStores[arg0].disableRaidAlertPush;
          obj.onValueChange = function onValueChange() {
            const result = arg0(closure_2[11]).updateUserGuildSettings(arg0, (disableRaidAlertPush) => {
              disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
            }, arg0(closure_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          items[1] = callback(stateFromStores(closure_2[9]).TableSwitchRow, obj);
          obj.children = items;
          return callback2(stateFromStores(closure_2[8]).TableRowGroup, obj, arg0);
        })
    };
    obj.children = callback(arg1(dependencyMap[7]).Stack, obj);
    tmp3 = callback(arg1(dependencyMap[6]).Form, obj);
  }
  return tmp3;
};
