// Module ID: 17896
// Function ID: 17897
// Name: ContentAndSocialScreen
// Dependencies: [32, 19, 17, 8432, 1072, 21, 5014, 575, 1113, 2061, 17897, 16706, 14236, 17902, 7472, 11539, 16704, 16575, 17903, 5624, 2]
// Exports: ConnectedGamesPage, DiscordPermissionsPage, default

// Module 17896 (ContentAndSocialScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl16 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import Text_Text from "Text/Text" /* 5624 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14236 */;
import SafetyGuildSettingGuildSelect from "SafetyGuildSettingGuildSelect" /* 17897 */;
import useAuthorizedSlayerApplicationsDefault from "useAuthorizedSlayerApplications" /* 17903 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingIndicator: obj2, emptyContainer: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/ContentAndSocialScreen.tsx");

export default function ContentAndSocialSettings(route) {
  const f113201 = () => {
    let tab;
    if (route != null) {
      const params = route.params;
      if (params != null) {
        tab = params.tab;
      }
    }
    let num = 0;
    if (tab === MobileUserSettings.CONNECTED_GAMES) {
      num = 1;
    }
    return num;
  };
  route = route.route;
  const memo = react.useMemo(() => {
    const items = [, ];
    ({ CONTENT_AND_SOCIAL_DISCORD: arr[0], CONNECTED_GAMES: arr[1] } = MobileUserSettings);
    return items;
  }, []);
  const defaultIndex = _slicedToArray(react.useState(f113201), 2)[0];
  let items = [defaultIndex, memo];
  _slicedToArray(react.useState(f113201), 2);
  const node = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { defaultIndex, settings: memo };
    return obj.createSegmentedControl(obj2);
  }, items);
  return closure_9(memo(defaultIndex[17]), { node });
};
export function DiscordPermissionsPage() {
  let allServersOptionSelected;
  let items2;
  let tinyBroncoMessageRequestsNoticeVariant;
  let obj = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[13]);
  allServersOptionSelected = obj.useAllServersOptionSelected();
  let obj2 = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[14]);
  const sensitiveContentFilterHelpArticle = obj2.useSensitiveContentFilterHelpArticle();
  let obj3 = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[11]);
  tinyBroncoMessageRequestsNoticeVariant = obj3.useTinyBroncoMessageRequestsNoticeVariant();
  let items = [allServersOptionSelected, sensitiveContentFilterHelpArticle, tinyBroncoMessageRequestsNoticeVariant];
  const memo = react.useMemo(() => {
    let RvjRRI;
    let dliU4j;
    let format;
    let format2;
    let format3;
    let format4;
    let format5;
    let intl10;
    let intl12;
    let intl14;
    let intl15;
    let intl3;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let items;
    let items10;
    let items11;
    let items13;
    let items14;
    let items15;
    let items16;
    let items17;
    let items18;
    let items2;
    let items3;
    let items4;
    let items7;
    let items9;
    let lunaRv;
    let obj19;
    let obj2;
    let obj21;
    let obj3;
    let obj5;
    let obj6;
    let obj8;
    let obj9;
    let prop;
    let tmp10;
    let tmp16;
    let tmp5Result;
    let v0aNQo9;
    const obj = { settings: items, subLabel: format(dliU4j, obj2) };
    items = [MobileUserSettings.SENSITIVE_CONTENT_FILTERS];
    const intl = intl16.intl;
    format = intl.format;
    obj2 = { learnMoreLink: obj3.getArticleURL(sensitiveContentFilterHelpArticle) };
    dliU4j = intl16.t.dliU4j;
    const items1 = [obj, , , ];
    obj3 = HelpdeskUtilsDefault;
    const obj4 = { settings: items2, subLabel: format2(RvjRRI, obj5) };
    items2 = [MobileUserSettings.DIRECT_MESSAGE_SPAM_FILTER];
    const intl2 = intl16.intl;
    format2 = intl2.format;
    obj5 = { appealLink: obj6.getArticleURL(HelpdeskArticles.SAFE_DIRECT_MESSAGING) };
    RvjRRI = intl16.t.RvjRRI;
    items1[1] = obj4;
    obj6 = HelpdeskUtilsDefault;
    const obj7 = { label: intl3.string(intl16.t.MDqARb), settings: items3, subLabel: format3(lunaRv, obj8) };
    intl3 = intl16.intl;
    items3 = [MobileUserSettings.DIRECT_MESSAGE_SAFETY_ALERTS];
    const intl4 = intl16.intl;
    format3 = intl4.format;
    obj8 = { learnMoreLink: obj9.getArticleURL(HelpdeskArticles.SAFETY_ALERTS) };
    lunaRv = intl16.t.lunaRv;
    items1[2] = obj7;
    obj9 = HelpdeskUtilsDefault;
    const obj10 = { label: intl5.string(intl16.t.wCFGLE), settings: items4, subLabel: intl6.string(intl16.t.R9fXyS) };
    intl5 = intl16.intl;
    items4 = [MobileUserSettings.ANDROID_VIEW_NSFW_DM_COMMANDS_V2];
    intl6 = intl16.intl;
    items1[3] = obj10;
    const items5 = [...items1];
    const items6 = [, , ];
    ({ SAFETY_GUILD_SETTING_GUILD_SELECT: arr7[0], SAFETY_GUILD_SETTING_DIRECT_MESSAGES: arr7[1], SAFETY_GUILD_SETTING_MESSAGE_REQUESTS: arr7[2] } = MobileUserSettings);
    const obj11 = { label: intl7.string(intl16.t["6x5uWQ"]), settings: items7 };
    const tmp9 = null != tinyBroncoMessageRequestsNoticeVariant;
    intl7 = intl16.intl;
    items7 = [MobileUserSettings.ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY];
    const items8 = [obj11, , , , , , , , , , ];
    const obj12 = { settings: items9 };
    items9 = [MobileUserSettings.ACTIVITY_PRIVACY_DEFAULT_SHARING];
    items8[1] = obj12;
    const obj13 = { settings: items10 };
    items10 = [MobileUserSettings.NOTIFY_FRIENDS_ON_COME_ONLINE];
    items8[2] = obj13;
    const obj14 = { settings: items11 };
    items11 = [MobileUserSettings.NOTIFY_SERVER_MEMBERS_ON_GO_LIVE];
    items8[3] = obj14;
    const obj15 = { label: intl8.string(intl16.t.MeYuqs), settings: tmp10, subLabel: tmp16 };
    intl8 = intl16.intl;
    tmp10 = items6;
    const tmp6 = HelpdeskArticles;
    if (!allServersOptionSelected) {
      const items12 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items12, items6, 0);
      HermesBuiltin.arraySpread(items12, SafetyGuildSettingGuildSelect.GUILD_SPECIFIC_SETTINGS, arraySpreadResult);
      tmp10 = items12;
    }
    tmp16 = undefined;
    if (allServersOptionSelected) {
      if (tmp9) {
        tmp16 = React4(tmp3(16706).MessageRequestsNotice, {});
      }
    }
    items8[4] = obj15;
    const obj16 = { label: intl9.string(intl16.t.XlGG9c), settings: items13 };
    intl9 = tmp3(1113).intl;
    items13 = [, , ];
    ({ SAFETY_SEND_FRIEND_REQUESTS_EVERYONE: arr14[0], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr14[1], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS: arr14[2] } = MobileUserSettings);
    items8[5] = obj16;
    const obj17 = { settings: items14 };
    items14 = [MobileUserSettings.FRIEND_REQUEST_NOTES];
    items8[6] = obj17;
    const obj18 = { label: intl10.string(intl16.t["3wRort"]), settings: items15, subLabel: format4(v0aNQo9, obj19) };
    intl10 = tmp3(1113).intl;
    items15 = [, ];
    ({ ACCOUNT_BLOCKED_USERS_V2: arr16[0], ACCOUNT_IGNORED_USERS: arr16[1] } = MobileUserSettings);
    const intl11 = tmp3(1113).intl;
    format4 = intl11.format;
    obj19 = { helpArticle: tmp5Result.getArticleURL(tmp6.STEALTH_REMEDIATION_FEATURE_GUIDE) };
    v0aNQo9 = tmp3(1113).t["0aNQo9"];
    items8[7] = obj18;
    tmp5Result = HelpdeskUtilsDefault;
    const obj20 = { label: intl12.string(intl16.t.bGSsnc), settings: items16, subLabel: format5(prop, obj21) };
    intl12 = tmp3(1113).intl;
    items16 = [, , ];
    ({ SYNC_CONTACTS: arr17[0], SYNC_CONTACTS_NAME: arr17[1], STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION: arr17[2] } = MobileUserSettings);
    const intl13 = tmp3(1113).intl;
    format5 = intl13.format;
    obj21 = { onClick: ContactSyncUtils.handleOpenLearnMoreLink };
    prop = tmp3(1113).t["TWz/S+"];
    items8[8] = obj20;
    const obj22 = { label: intl14.string(intl16.t["aBZ/oQ"]), settings: items17 };
    intl14 = tmp3(1113).intl;
    items17 = [, ];
    ({ DISCOVERY_BY_PHONE: arr18[0], DISCOVERY_BY_EMAIL: arr18[1] } = MobileUserSettings);
    items8[9] = obj22;
    const obj23 = { label: intl15.string(intl16.t["+KNdnt"]), settings: items18 };
    intl15 = tmp3(1113).intl;
    items18 = [MobileUserSettings.IOS_CONVERSATION_SUGGESTIONS];
    items8[10] = obj23;
    HermesBuiltin.arraySpread(items5, items8, tmp7);
    return items5;
  }, items);
  let items1 = [memo];
  let obj4 = { children: items2 };
  const memo1 = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { sections: memo };
    return obj.createList(obj2);
  }, items1);
  let obj5 = { screen: allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[16]).SettingsScreen.CONTENT_AND_SOCIAL };
  let tmp6 = sensitiveContentFilterHelpArticle(tinyBroncoMessageRequestsNoticeVariant[16]);
  items2 = [closure_9(tmp6, obj5), closure_9(sensitiveContentFilterHelpArticle(tinyBroncoMessageRequestsNoticeVariant[17]), { node: memo1 })];
  return closure_11(closure_10, obj4);
}
export function ConnectedGamesPage() {
  let V8wClM;
  let constants2;
  let format;
  let intl;
  let items;
  let obj6;
  let showLoadingIndicator;
  let slayerSdkApplications;
  let tmp2Result;
  let tmp7;
  const tmp = closure_12();
  ({ showLoadingIndicator, slayerSdkApplications } = useAuthorizedSlayerApplicationsDefault());
  useAuthorizedSlayerApplicationsDefault();
  if (showLoadingIndicator) {
    let obj2 = { style: tmp.loadingIndicator };
    tmp7 = React4(hasOwnProperty, obj2);
  } else if (0 === slayerSdkApplications.length) {
    let obj3 = { style: tmp.emptyContainer, children: items };
    let obj4 = { variant: "text-md/semibold", color: "text-strong", children: intl.string(intl16.t["+0U77d"]) };
    const Text = Text_Text.Text;
    intl = intl16.intl;
    items = [React4(Text, obj4), ];
    let obj5 = { variant: "text-sm/normal", color: "text-muted", children: format(V8wClM, obj6) };
    const Text2 = Text_Text.Text;
    let intl2 = intl16.intl;
    format = intl2.format;
    obj6 = { helpdeskArticle: tmp2Result.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    V8wClM = intl16.t.V8wClM;
    tmp2Result = HelpdeskUtilsDefault;
    items[1] = React4(Text2, obj5);
    tmp7 = unpackModuleId(metroRequire, obj3);
  } else {
    let obj = { node: tmp5 };
    tmp7 = React4(tmp2(16575), obj);
  }
  return tmp7;
}
