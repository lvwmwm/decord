// Module ID: 18003
// Function ID: 18004
// Name: SettingsEmailNotificationsScreen
// Dependencies: [19, 16125, 9136, 21, 18004, 16784, 18007, 12317, 1113, 5836, 17095, 2]

// Module 18003 (SettingsEmailNotificationsScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import EmailSettingsActionCreators from "EmailSettingsActionCreators" /* 18004 */;
import react from "react" /* 19 */;
import EmailSettingsStore from "EmailSettingsStore" /* 16125 */;
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
  obj = isDeclarativeSettingsUIAvailable(16784);
  isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("SettingsEmailNotificationsScreen");
  obj2 = enabled(18007);
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
  enabled(5836)(initializeEmailSettings);
  return jsx(enabled(17095), { node });
});
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsEmailNotificationsScreen.tsx");

export default memoResult;
