// Module ID: 17542
// Function ID: 17543
// Name: SettingsOverviewScreen
// Dependencies: [19, 2128, 7974, 21, 1126, 1388, 15701, 558, 576, 4728, 504, 10629, 14884, 2]

// Module 17542 (SettingsOverviewScreen)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl8 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import PremiumUtils from "PremiumUtils" /* 4728 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15701 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getOverviewSettings(isPremiumUser) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items10;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  isPremiumUser = isPremiumUser.isPremiumUser;
  const obj = { label: intl.string(intl8.t.C6COaT), settings: items.filter(GlobalUtils.isNotNullish) };
  intl = intl8.intl;
  let PREMIUM = null;
  if (!isPremiumUser) {
    PREMIUM = MobileUserSettings.PREMIUM;
  }
  items = [PREMIUM, , , , , , , , , , ];
  ({ ACCOUNT: arr[1], CONTENT_AND_SOCIAL: arr[2], DATA_AND_PRIVACY: arr[3], SPONSORED_CONTENT_PREFERENCES: arr[4], FAMILY_CENTER: arr[5], AUTHORIZED_APPS: arr[6], DEVICES: arr[7], CONNECTIONS: arr[8], CLIPS: arr[9], SCAN_QR_CODE: arr[10] } = MobileUserSettings);
  const items1 = [obj, , , , , , , , , ];
  const obj2 = { label: intl2.string(intl8.t["SuS+RB"]), settings: items2.filter(GlobalUtils.isNotNullish) };
  intl2 = tmp(1126).intl;
  items2 = [, , , , , , , ];
  ({ COLLECTIBLES_SHOP: arr3[0], QUEST_HOME: arr3[1] } = MobileUserSettings);
  let PREMIUM1 = null;
  if (isPremiumUser) {
    PREMIUM1 = tmp5.PREMIUM;
  }
  items2[2] = PREMIUM1;
  ({ PREMIUM_MANAGE_SUBSCRIPTIONS: arr3[3], PREMIUM_GUILD_BOOSTING: arr3[4], PREMIUM_GIFTING: arr3[5], GUILD_ROLE_SUBSCRIPTIONS: arr3[6], PREMIUM_RESTORE_SUBSCRIPTION: arr3[7] } = MobileUserSettings);
  items1[1] = obj2;
  const obj3 = { label: intl3.string(intl8.t.f2n1TP), settings: items3.filter(GlobalUtils.isNotNullish) };
  intl3 = tmp(1126).intl;
  items3 = [, , , , , , , , , , ];
  ({ VOICE: arr4[0], APPEARANCE: arr4[1], ACCESSIBILITY: arr4[2], LANGUAGE: arr4[3], CHAT: arr4[4], TYPING_INDICATOR: arr4[5], WEB_BROWSER: arr4[6], NOTIFICATIONS: arr4[7] } = MobileUserSettings);
  items3[8] = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
  ({ APP_ICONS: arr4[9], ADVANCED: arr4[10] } = MobileUserSettings);
  items1[2] = obj3;
  const obj4 = { label: intl4.string(intl8.t["Yl/Riu"]), settings: items4 };
  intl4 = tmp(1126).intl;
  items4 = [, , ];
  ({ SUPPORT: arr5[0], UPLOAD_DEBUG_LOGS: arr5[1], ACKNOWLEDGEMENTS: arr5[2] } = MobileUserSettings);
  items1[3] = obj4;
  const obj5 = { label: intl5.string(intl8.t.LRmNAl), settings: items5 };
  intl5 = tmp(1126).intl;
  items5 = [MobileUserSettings.CHANGE_LOG];
  items1[4] = obj5;
  const obj6 = { settings: items6 };
  items6 = [MobileUserSettings.LOGOUT];
  items1[5] = obj6;
  const obj7 = { label: intl6.string(intl8.t.CbItOL), settings: items7 };
  intl6 = tmp(1126).intl;
  items7 = [, , , , , , ];
  ({ APP_VERSION: arr8[0], DEVICE_INFO: arr8[1], COPY_CLIENT_INFO: arr8[2], VIEW_DEBUG_LOGS: arr8[3], CACHE_ACTIONS: arr8[4], REACT_COMPILER: arr8[5], UPLOAD_INTL_DATA: arr8[6] } = MobileUserSettings);
  items1[6] = obj7;
  const obj8 = { label: intl7.string(intl8.t["/tZh0A"]), settings: items8 };
  intl7 = tmp(1126).intl;
  items8 = [, ];
  ({ BUG_REPORTER: arr9[0], CREATE_BUG_REPORT: arr9[1] } = MobileUserSettings);
  items1[7] = obj8;
  const obj9 = { label: "Build Status", settings: items9 };
  items9 = [, , , ];
  ({ INTERNAL_BUILD_ACTIVE: arr10[0], INTERNAL_BUILD_UPDATE: arr10[1], BUILD_OVERRIDE_ACTIVE: arr10[2], EXPERIMENT_OVERRIDE_ACTIVE: arr10[3] } = MobileUserSettings);
  items1[8] = obj9;
  const obj10 = { label: "Staff Settings", settings: items10 };
  items10 = [, , ];
  ({ SHOW_DEV_WIDGET: arr11[0], SHOW_DEV_TOOLS: arr11[1], DESIGN_SYSTEMS: arr11[2] } = MobileUserSettings);
  items1[9] = obj10;
  return items1;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsOverviewScreen() {
  let locale;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(7);
  const obj2 = PremiumUtils;
  const hasPremiumSubscriptionToDisplay = obj2.useHasPremiumSubscriptionToDisplay();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    class E {
      constructor() {
        return closure_1_3.locale;
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp5 = items;
    tmp6 = E;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === hasPremiumSubscriptionToDisplay) {
    let tmp9;
    let tmp12;
    if (cResult[3] === stateFromStores) {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== tmp9) {
      class E {
        constructor() {
          return closure_1_3.locale;
        }
      }
      cResult[5] = tmp9;
      cResult[6] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const createList = SettingBuilders.createList;
  const tmpResult2 = SettingBuilders;
  const obj4 = { sections: getOverviewSettings({ isPremiumUser: hasPremiumSubscriptionToDisplay, locale: stateFromStores }) };
  const list = createList(obj4);
  cResult[2] = hasPremiumSubscriptionToDisplay;
  cResult[3] = stateFromStores;
  cResult[4] = list;
  tmp9 = list;
}) : (function SettingsOverviewScreen() {
  let hasPremiumSubscriptionToDisplay;
  let locale;
  let stateFromStores;
  let obj = hasPremiumSubscriptionToDisplay(stateFromStores[9]);
  hasPremiumSubscriptionToDisplay = obj.useHasPremiumSubscriptionToDisplay();
  let obj2 = hasPremiumSubscriptionToDisplay(stateFromStores[10]);
  const items = [LocaleStore];
  stateFromStores = obj2.useStateFromStores(items, () => locale.locale);
  const items1 = [hasPremiumSubscriptionToDisplay, stateFromStores];
  const node = react.useMemo(() => {
    let obj2;
    const obj = { sections: getOverviewSettings(obj2) };
    const createList = SettingBuilders.createList;
    obj2 = { isPremiumUser: hasPremiumSubscriptionToDisplay, locale: stateFromStores };
    SettingBuilders;
    return createList(obj);
  }, items1);
  return jsx(hasPremiumSubscriptionToDisplay(stateFromStores[12]).SearchableSettingsList, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/overview/native/SettingsOverviewScreen.tsx");

export default tmp2;
