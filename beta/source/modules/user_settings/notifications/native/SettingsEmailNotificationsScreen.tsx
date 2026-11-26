// Module ID: 16915
// Function ID: 16916
// Name: SettingsEmailNotificationsScreen
// Dependencies: [19, 15029, 8712, 21, 4913, 575, 15672, 16916, 504, 16917, 11942, 1112, 7190, 5929, 7762, 3152, 15997, 2]

// Module 16915 (SettingsEmailNotificationsScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import EmailSettingsActionCreators from "EmailSettingsActionCreators" /* 16917 */;
import react from "react" /* 19 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15029 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let emailSettings;

let items;
let items1;
let obj2;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
let obj = { notice: obj2 };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { categories: items, unsubscribeFromAllMarketing: MobileUserSettings.EMAIL_UNSUBSCRIBE_FROM_ALL_MARKETING };
items = [, , , , ];
({ EMAIL_COMMUNICATION: arr[0], EMAIL_SOCIAL: arr[1], EMAIL_UPDATES_AND_ANNOUNCEMENTS: arr[2], EMAIL_TIPS: arr[3], EMAIL_RECOMMENDATIONS_AND_EVENTS: arr[4] } = MobileUserSettings);
let obj4 = { categories: items1, unsubscribeFromAllMarketing: MobileUserSettings.REDESIGN_EMAIL_UNSUBSCRIBE_FROM_ALL_MARKETING };
items1 = [, , , , ];
({ REDESIGN_EMAIL_COMMUNICATION: arr2[0], REDESIGN_EMAIL_SOCIAL: arr2[1], REDESIGN_EMAIL_UPDATES_AND_ANNOUNCEMENTS: arr2[2], REDESIGN_EMAIL_TIPS: arr2[3], REDESIGN_EMAIL_RECOMMENDATIONS_AND_EVENTS: arr2[4] } = MobileUserSettings);
const memoResult = react.memo(function SettingsEmailNotificationsScreen() {
  let enabled;
  let intl;
  let intl2;
  let isDeclarativeSettingsUIAvailable;
  let obj7;
  let stateFromStores;
  const tmp2 = isDeclarativeSettingsUIAvailable;
  let tmp = closure_6();
  let obj = isDeclarativeSettingsUIAvailable(stateFromStores[6]);
  isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("SettingsEmailNotificationsScreen");
  let obj2 = enabled(stateFromStores[7]);
  enabled = obj2.useConfig({ location: "SettingsEmailNotificationsScreen" }).enabled;
  obj3 = isDeclarativeSettingsUIAvailable(stateFromStores[8]);
  let items = [EmailSettingsStore];
  stateFromStores = obj3.useStateFromStores(items, () => null != emailSettings.getEmailSettings().initialized);
  obj4 = isDeclarativeSettingsUIAvailable(stateFromStores[8]);
  let items1 = [EmailSettingsStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => emailSettings.isFetching);
  const layoutEffect = react.useLayoutEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      const obj = EmailSettingsActionCreators;
      emailSettings = obj.fetchEmailSettings();
    }
  }, items2);
  const items3 = [isDeclarativeSettingsUIAvailable, enabled];
  const memo = react.useMemo(() => {
    let items;
    let items1;
    let stringResult;
    const tmp = isDeclarativeSettingsUIAvailable ? obj4 : obj3;
    const obj = { settings: tmp.categories, subLabel: stringResult };
    stringResult = undefined;
    const createList = SettingBuilders.createList;
    SettingBuilders;
    if (enabled) {
      const intl = tmp2(1112).intl;
      stringResult = intl.string(tmp2(1112).t.WViBDk);
    }
    const obj2 = { sections: items };
    items = [obj, ];
    obj3 = { settings: items1 };
    items1 = [tmp.unsubscribeFromAllMarketing];
    items[1] = obj3;
    return createList(obj2);
  }, items3);
  if (isDeclarativeSettingsUIAvailable) {
    let tmp10Result;
    if (!stateFromStores) {
      if (stateFromStores1) {
        tmp10Result = tmp10(tmp2(tmp3[12]).SceneLoadingIndicator, {});
      } else {
        const obj5 = { style: tmp.notice, children: null };
        const Stack = tmp2(tmp3[13]).Stack;
        ({ type: "warning", role: "status", message: intl.string(enabled(stateFromStores[15]).Nu2TMI), action: obj7 });
        const InlineNotice = tmp2(tmp3[14]).InlineNotice;
        intl = tmp2(tmp3[11]).intl;
        obj7 = { text: intl2.string(tmp2(stateFromStores[11]).t["5911Lb"]), onPress: tmp2(stateFromStores[9]).fetchEmailSettings };
        intl2 = tmp2(tmp3[11]).intl;
        tmp10Result = tmp10(Stack, obj5);
      }
    }
    return tmp10Result;
  }
  tmp10Result = jsx(tmp5(tmp3[16]), { node: memo });
});
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsEmailNotificationsScreen.tsx");

export default memoResult;
