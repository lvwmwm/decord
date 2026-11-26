// Module ID: 17109
// Function ID: 17110
// Name: SettingsEmailNotificationsScreen
// Dependencies: [19, 15229, 9555, 21, 5043, 575, 15853, 17110, 504, 17111, 11962, 1112, 3207, 7395, 6115, 7941, 16190, 2]

// Module 17109 (SettingsEmailNotificationsScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3207 from "module_3207" /* 3207 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import EmailSettingsActionCreators from "EmailSettingsActionCreators" /* 17111 */;
import react from "react" /* 19 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15229 */;
import createStyles from "createStyles" /* 5043 */;
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
  let tmp2 = isDeclarativeSettingsUIAvailable;
  const tmp3 = stateFromStores;
  let tmp = closure_6();
  let obj = isDeclarativeSettingsUIAvailable(stateFromStores[6]);
  isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("SettingsEmailNotificationsScreen");
  const tmp5 = enabled;
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
    let stringResult1;
    const tmp2 = isDeclarativeSettingsUIAvailable ? obj4 : obj3;
    let stringResult;
    const createList = SettingBuilders.createList;
    SettingBuilders;
    if (isDeclarativeSettingsUIAvailable) {
      const intl = tmp3(1112).intl;
      stringResult = intl.string(_modDef3207.dpeWco);
    }
    const obj = { label: stringResult, settings: tmp2.categories, subLabel: stringResult1 };
    stringResult1 = undefined;
    if (enabled) {
      let WViBDk;
      const intl2 = tmp3(1112).intl;
      const string = intl2.string;
      if (isDeclarativeSettingsUIAvailable) {
        WViBDk = _modDef3207.aPtRHt;
      } else {
        WViBDk = tmp3(1112).t.WViBDk;
      }
      stringResult1 = string(WViBDk);
    }
    const obj2 = { sections: items };
    items = [obj, ];
    obj3 = { settings: items1 };
    items1 = [tmp2.unsubscribeFromAllMarketing];
    items[1] = obj3;
    return createList(obj2);
  }, items3);
  if (isDeclarativeSettingsUIAvailable) {
    let tmp10Result;
    if (!stateFromStores) {
      if (stateFromStores1) {
        tmp10Result = tmp10(tmp2(tmp3[13]).SceneLoadingIndicator, {});
      } else {
        const obj5 = { style: tmp.notice, children: null };
        const Stack = tmp2(tmp3[14]).Stack;
        ({ type: "warning", role: "status", message: intl.string(tmp5(tmp3[12]).Nu2TMI), action: obj7 });
        const InlineNotice = tmp2(tmp3[15]).InlineNotice;
        intl = tmp2(tmp3[11]).intl;
        obj7 = { text: intl2.string(tmp2(tmp3[11]).t["5911Lb"]), onPress: tmp2(tmp3[9]).fetchEmailSettings };
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
