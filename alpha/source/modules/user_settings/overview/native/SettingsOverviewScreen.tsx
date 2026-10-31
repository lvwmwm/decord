// Module ID: 18989
// Function ID: 18990
// Name: SettingsOverviewScreen
// Dependencies: [19, 2062, 8432, 21, 1113, 1379, 17469, 2047, 504, 9670, 11539, 16576, 2]
// Exports: default

// Module 18989 (SettingsOverviewScreen)
import Fragment from "Fragment" /* 21 */;
import intl8 from "intl" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17469 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/overview/native/SettingsOverviewScreen.tsx");

export default function SettingsOverviewScreen() {
  let hasPremiumSubscriptionToDisplay;
  let locale;
  let mapleSyrup1Enabled;
  let obj = hasPremiumSubscriptionToDisplay(mapleSyrup1Enabled[7]);
  hasPremiumSubscriptionToDisplay = obj.useHasPremiumSubscriptionToDisplay();
  let obj2 = hasPremiumSubscriptionToDisplay(mapleSyrup1Enabled[8]);
  let items = [LocaleStore];
  const stateFromStores = obj2.useStateFromStores(items, () => locale.locale);
  let obj3 = hasPremiumSubscriptionToDisplay(mapleSyrup1Enabled[9]);
  mapleSyrup1Enabled = obj3.useMapleSyrup1Enabled("SettingsOverviewScreen");
  let obj4 = hasPremiumSubscriptionToDisplay(mapleSyrup1Enabled[9]);
  const mapleSyrup3Enabled = obj4.useMapleSyrup3Enabled("SettingsOverviewScreen");
  let items1 = [hasPremiumSubscriptionToDisplay, stateFromStores, mapleSyrup1Enabled, mapleSyrup3Enabled];
  const node = mapleSyrup3Enabled.useMemo(() => {
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
    const obj = { label: intl.string(intl8.t.C6COaT), settings: items.filter(GlobalUtils.isNotNullish) };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl8.intl;
    let PREMIUM = null;
    const tmp4 = hasPremiumSubscriptionToDisplay;
    const tmp6 = mapleSyrup3Enabled;
    if (!hasPremiumSubscriptionToDisplay) {
      PREMIUM = MobileUserSettings.PREMIUM;
    }
    items = [PREMIUM, , , , , , , , , ];
    ({ ACCOUNT: arr[1], CONTENT_AND_SOCIAL: arr[2], DATA_AND_PRIVACY: arr[3], SPONSORED_CONTENT_PREFERENCES: arr[4], FAMILY_CENTER: arr[5], DEVICES: arr[6], CONNECTIONS: arr[7], CLIPS: arr[8], SCAN_QR_CODE: arr[9] } = MobileUserSettings);
    const items1 = [obj, , , , , , , , , ];
    const obj2 = { label: intl2.string(intl8.t["SuS+RB"]), settings: items2.filter(GlobalUtils.isNotNullish) };
    intl2 = tmp(1113).intl;
    items2 = [, , , , , , , , ];
    ({ COLLECTIBLES_SHOP: arr3[0], QUEST_HOME: arr3[1] } = MobileUserSettings);
    let PREMIUM1 = null;
    if (tmp4) {
      PREMIUM1 = null;
      if (!tmp6) {
        PREMIUM1 = tmp9.PREMIUM;
      }
    }
    items2[2] = PREMIUM1;
    let prop = null;
    if (!mapleSyrup1Enabled) {
      prop = tmp9.PREMIUM_MANAGE_SUBSCRIPTIONS;
    }
    items2[3] = prop;
    ({ PREMIUM_GUILD_BOOSTING: arr3[4], PREMIUM_GIFTING: arr3[5], GUILD_ROLE_SUBSCRIPTIONS: arr3[6], PREMIUM_RESTORE_SUBSCRIPTION: arr3[7] } = MobileUserSettings);
    let prop1 = null;
    if (mapleSyrup1Enabled) {
      prop1 = tmp9.PREMIUM_MANAGE_SUBSCRIPTIONS;
    }
    const obj3 = { sections: items1 };
    items2[8] = prop1;
    items1[1] = obj2;
    const obj4 = { label: intl3.string(intl8.t.f2n1TP), settings: items3.filter(GlobalUtils.isNotNullish) };
    intl3 = tmp(1113).intl;
    items3 = [, , , , , , , , , , ];
    ({ VOICE: arr4[0], APPEARANCE: arr4[1], ACCESSIBILITY: arr4[2], LANGUAGE: arr4[3], CHAT: arr4[4], TYPING_INDICATOR: arr4[5], WEB_BROWSER: arr4[6], NOTIFICATIONS: arr4[7] } = MobileUserSettings);
    items3[8] = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
    ({ APP_ICONS: arr4[9], ADVANCED: arr4[10] } = MobileUserSettings);
    items1[2] = obj4;
    const obj5 = { label: intl4.string(intl8.t["Yl/Riu"]), settings: items4 };
    intl4 = tmp(1113).intl;
    items4 = [, , ];
    ({ SUPPORT: arr5[0], UPLOAD_DEBUG_LOGS: arr5[1], ACKNOWLEDGEMENTS: arr5[2] } = MobileUserSettings);
    items1[3] = obj5;
    const obj6 = { label: intl5.string(intl8.t.LRmNAl), settings: items5 };
    intl5 = tmp(1113).intl;
    items5 = [MobileUserSettings.CHANGE_LOG];
    items1[4] = obj6;
    const obj7 = { settings: items6 };
    items6 = [MobileUserSettings.LOGOUT];
    items1[5] = obj7;
    const obj8 = { label: intl6.string(intl8.t.CbItOL), settings: items7 };
    intl6 = tmp(1113).intl;
    items7 = [, , , , , , ];
    ({ APP_VERSION: arr8[0], DEVICE_INFO: arr8[1], COPY_CLIENT_INFO: arr8[2], VIEW_DEBUG_LOGS: arr8[3], CACHE_ACTIONS: arr8[4], REACT_COMPILER: arr8[5], UPLOAD_INTL_DATA: arr8[6] } = MobileUserSettings);
    items1[6] = obj8;
    const obj9 = { label: intl7.string(intl8.t["/tZh0A"]), settings: items8 };
    intl7 = tmp(1113).intl;
    items8 = [, ];
    ({ BUG_REPORTER: arr9[0], CREATE_BUG_REPORT: arr9[1] } = MobileUserSettings);
    items1[7] = obj9;
    const obj10 = { label: "Build Status", settings: items9 };
    items9 = [, , , ];
    ({ INTERNAL_BUILD_ACTIVE: arr10[0], INTERNAL_BUILD_UPDATE: arr10[1], BUILD_OVERRIDE_ACTIVE: arr10[2], EXPERIMENT_OVERRIDE_ACTIVE: arr10[3] } = MobileUserSettings);
    items1[8] = obj10;
    const obj11 = { label: "Staff Settings", settings: items10 };
    items10 = [, , ];
    ({ SHOW_DEV_WIDGET: arr11[0], SHOW_DEV_TOOLS: arr11[1], DESIGN_SYSTEMS: arr11[2] } = MobileUserSettings);
    items1[9] = obj11;
    return createList(obj3);
  }, items1);
  return jsx(hasPremiumSubscriptionToDisplay(mapleSyrup1Enabled[11]).SearchableSettingsList, { node });
};
