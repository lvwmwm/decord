// Module ID: 17750
// Function ID: 17751
// Name: SettingsEmailNotificationsScreen
// Dependencies: [19, 15878, 8524, 21, 17751, 16538, 17754, 11703, 1113, 5751, 16846, 2]

// Module 17750 (SettingsEmailNotificationsScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import EmailSettingsActionCreators from "EmailSettingsActionCreators" /* 17751 */;
import react from "react" /* 19 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15878 */;
import size from "module_2" /* 2 */;

let items;
let items1;
function initializeEmailSettings() {
  if (!EmailSettingsStore.getEmailSettings().initialized) {
    obj = EmailSettingsActionCreators;
    const emailSettings = obj.fetchEmailSettings();
  }
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
let obj = { categories: items, unsubscribeFromAllMarketing: MobileUserSettings.EMAIL_UNSUBSCRIBE_FROM_ALL_MARKETING };
items = [, , , , ];
({ EMAIL_COMMUNICATION: arr[0], EMAIL_SOCIAL: arr[1], EMAIL_UPDATES_AND_ANNOUNCEMENTS: arr[2], EMAIL_TIPS: arr[3], EMAIL_RECOMMENDATIONS_AND_EVENTS: arr[4] } = MobileUserSettings);
let obj2 = { categories: items1, unsubscribeFromAllMarketing: MobileUserSettings.REDESIGN_EMAIL_UNSUBSCRIBE_FROM_ALL_MARKETING };
items1 = [, , , , ];
({ REDESIGN_EMAIL_COMMUNICATION: arr2[0], REDESIGN_EMAIL_SOCIAL: arr2[1], REDESIGN_EMAIL_UPDATES_AND_ANNOUNCEMENTS: arr2[2], REDESIGN_EMAIL_TIPS: arr2[3], REDESIGN_EMAIL_RECOMMENDATIONS_AND_EVENTS: arr2[4] } = MobileUserSettings);
const memoResult = react.memo(function SettingsEmailNotificationsScreen() {
  let enabled;
  let isDeclarativeSettingsUIAvailable;
  obj = isDeclarativeSettingsUIAvailable(16538);
  isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("SettingsEmailNotificationsScreen");
  obj2 = enabled(17754);
  enabled = obj2.useConfig({ location: "SettingsEmailNotificationsScreen" }).enabled;
  let items = [isDeclarativeSettingsUIAvailable, enabled];
  const node = react.useMemo(() => {
    let items;
    let items1;
    let stringResult;
    const tmp = isDeclarativeSettingsUIAvailable ? obj2 : obj;
    obj = { settings: tmp.categories, subLabel: stringResult };
    stringResult = undefined;
    const createList = SettingBuilders.createList;
    SettingBuilders;
    if (enabled) {
      const intl = tmp2(1113).intl;
      stringResult = intl.string(tmp2(1113).t.WViBDk);
    }
    obj2 = { sections: items };
    items = [obj, ];
    const obj3 = { settings: items1 };
    items1 = [tmp.unsubscribeFromAllMarketing];
    items[1] = obj3;
    return createList(obj2);
  }, items);
  enabled(5751)(initializeEmailSettings);
  return jsx(enabled(16846), { node });
});
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsEmailNotificationsScreen.tsx");

export default memoResult;
