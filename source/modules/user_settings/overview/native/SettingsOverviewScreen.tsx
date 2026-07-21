// Module ID: 15462
// Function ID: 117942
// Name: getOverviewSettings
// Dependencies: []
// Exports: default

// Module 15462 (getOverviewSettings)
function getOverviewSettings(isPremiumUser) {
  isPremiumUser = isPremiumUser.isPremiumUser;
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.label = intl.string(arg1(dependencyMap[3]).t.C6COaT);
  let PREMIUM = null;
  if (!isPremiumUser) {
    PREMIUM = MobileSetting.PREMIUM;
  }
  const items = [PREMIUM, MobileSetting.ACCOUNT, MobileSetting.CONTENT_AND_SOCIAL, MobileSetting.DATA_AND_PRIVACY, MobileSetting.FAMILY_CENTER, MobileSetting.AUTHORIZED_APPS, MobileSetting.DEVICES, MobileSetting.CONNECTIONS, MobileSetting.CLIPS, MobileSetting.SCAN_QR_CODE];
  obj.settings = items.filter(arg1(dependencyMap[4]).isNotNullish);
  const items1 = [obj, , , , , , , , , ];
  obj = {};
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.label = intl2.string(arg1(dependencyMap[3]).t.SuS+RB);
  const items2 = [MobileSetting.COLLECTIBLES_SHOP, MobileSetting.QUEST_HOME, , , , , , ];
  let PREMIUM1 = null;
  if (isPremiumUser) {
    PREMIUM1 = MobileSetting.PREMIUM;
  }
  items2[2] = PREMIUM1;
  items2[3] = MobileSetting.PREMIUM_MANAGE_SUBSCRIPTIONS;
  items2[4] = MobileSetting.PREMIUM_GUILD_BOOSTING;
  items2[5] = MobileSetting.PREMIUM_GIFTING;
  items2[6] = MobileSetting.GUILD_ROLE_SUBSCRIPTIONS;
  items2[7] = MobileSetting.PREMIUM_RESTORE_SUBSCRIPTION;
  obj.settings = items2.filter(arg1(dependencyMap[4]).isNotNullish);
  items1[1] = obj;
  obj = {};
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.label = intl3.string(arg1(dependencyMap[3]).t.f2n1TP);
  const items3 = [MobileSetting.VOICE, MobileSetting.APPEARANCE, MobileSetting.ACCESSIBILITY, MobileSetting.LANGUAGE, MobileSetting.CHAT, MobileSetting.WEB_BROWSER, MobileSetting.NOTIFICATIONS, MobileSetting.APP_ICONS, MobileSetting.ADVANCED];
  obj.settings = items3.filter(arg1(dependencyMap[4]).isNotNullish);
  items1[2] = obj;
  const obj1 = {};
  const intl4 = arg1(dependencyMap[3]).intl;
  obj1.label = intl4.string(arg1(dependencyMap[3]).t.Yl/Riu);
  const items4 = [MobileSetting.SUPPORT, MobileSetting.UPLOAD_DEBUG_LOGS, MobileSetting.ACKNOWLEDGEMENTS];
  obj1.settings = items4;
  items1[3] = obj1;
  const obj2 = {};
  const intl5 = arg1(dependencyMap[3]).intl;
  obj2.label = intl5.string(arg1(dependencyMap[3]).t.LRmNAl);
  const items5 = [MobileSetting.CHANGE_LOG];
  obj2.settings = items5;
  items1[4] = obj2;
  const items6 = [MobileSetting.LOGOUT];
  items1[5] = { settings: items6 };
  const obj3 = {};
  const intl6 = arg1(dependencyMap[3]).intl;
  obj3.label = intl6.string(arg1(dependencyMap[3]).t.CbItOL);
  const items7 = [MobileSetting.APP_VERSION, MobileSetting.DEVICE_INFO, MobileSetting.COPY_CLIENT_INFO, MobileSetting.VIEW_DEBUG_LOGS, MobileSetting.CACHE_ACTIONS, MobileSetting.REACT_COMPILER, MobileSetting.UPLOAD_INTL_DATA];
  obj3.settings = items7;
  items1[6] = obj3;
  const obj4 = {};
  const intl7 = arg1(dependencyMap[3]).intl;
  obj4.label = intl7.string(arg1(dependencyMap[3]).t./tZh0A);
  const items8 = [MobileSetting.BUG_REPORTER, MobileSetting.CREATE_BUG_REPORT];
  obj4.settings = items8;
  items1[7] = obj4;
  const items9 = [MobileSetting.INTERNAL_BUILD_ACTIVE, MobileSetting.INTERNAL_BUILD_UPDATE, MobileSetting.BUILD_OVERRIDE_ACTIVE, MobileSetting.EXPERIMENT_OVERRIDE_ACTIVE];
  items1[8] = { label: "Build Status", settings: items9 };
  const items10 = [MobileSetting.SHOW_DEV_WIDGET, MobileSetting.SHOW_DEV_TOOLS, MobileSetting.DESIGN_SYSTEMS];
  items1[9] = { label: "Staff Settings", settings: items10 };
  return items1;
}
let closure_2 = importAll(dependencyMap[0]);
const MobileSetting = arg1(dependencyMap[1]).MobileSetting;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/overview/native/SettingsOverviewScreen.tsx");

export default function SettingsOverviewScreen() {
  const hasPremiumSubscriptionToDisplay = arg1(dependencyMap[5]).useHasPremiumSubscriptionToDisplay();
  const arg1 = hasPremiumSubscriptionToDisplay;
  const items = [hasPremiumSubscriptionToDisplay];
  const node = React.useMemo(() => {
    let obj = hasPremiumSubscriptionToDisplay(closure_1[6]);
    obj = { sections: callback(obj) };
    obj = { isPremiumUser: hasPremiumSubscriptionToDisplay };
    return obj.createList(obj);
  }, items);
  return jsx(arg1(dependencyMap[7]).SearchableSettingsList, { node });
};
