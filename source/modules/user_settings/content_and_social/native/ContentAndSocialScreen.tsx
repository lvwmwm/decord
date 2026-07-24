// Module ID: 14578
// Function ID: 111196
// Name: getSocialPermissions
// Dependencies: [57, 31, 27, 7751, 653, 33, 4130, 689, 1212, 1920, 14579, 11736, 14582, 5678, 10127, 13769, 13601, 14583, 4126, 2]
// Exports: ConnectedGamesPage, DiscordPermissionsPage, default

// Module 14578 (getSocialPermissions)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { MobileSetting } from "MobileSetting";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function getSocialPermissions(allServersSelected) {
  const items = [MobileSetting.SAFETY_GUILD_SETTING_GUILD_SELECT, MobileSetting.SAFETY_GUILD_SETTING_DIRECT_MESSAGES, MobileSetting.SAFETY_GUILD_SETTING_MESSAGE_REQUESTS];
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["6x5uWQ"]);
  const items1 = [MobileSetting.ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY];
  obj.settings = items1;
  const items2 = [obj, , , , , , , , , ];
  const items3 = [MobileSetting.ACTIVITY_PRIVACY_DEFAULT_SHARING];
  items2[1] = { settings: items3 };
  const items4 = [MobileSetting.NOTIFY_FRIENDS_ON_COME_ONLINE];
  items2[2] = { settings: items4 };
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.MeYuqs);
  let tmp = items;
  if (!allServersSelected.allServersSelected) {
    const items5 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
    arraySpreadResult = HermesBuiltin.arraySpread(require(14579) /* MobileSetting */.GUILD_SPECIFIC_SETTINGS, arraySpreadResult);
    tmp = items5;
  }
  obj.settings = tmp;
  items2[3] = obj;
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.XlGG9c);
  const items6 = [MobileSetting.SAFETY_SEND_FRIEND_REQUESTS_EVERYONE, MobileSetting.SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS, MobileSetting.SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS];
  obj.settings = items6;
  items2[4] = obj;
  const items7 = [MobileSetting.FRIEND_REQUEST_NOTES];
  items2[5] = { settings: items7 };
  const obj1 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl4.string(require(1212) /* getSystemLocale */.t["3wRort"]);
  const items8 = [MobileSetting.ACCOUNT_BLOCKED_USERS_V2, MobileSetting.ACCOUNT_IGNORED_USERS];
  obj1.settings = items8;
  const intl5 = require(1212) /* getSystemLocale */.intl;
  const obj2 = {};
  let obj5 = importDefault(1920);
  obj2.helpArticle = obj5.getArticleURL(HelpdeskArticles.STEALTH_REMEDIATION_FEATURE_GUIDE);
  obj1.subLabel = intl5.format(require(1212) /* getSystemLocale */.t["0aNQo9"], obj2);
  items2[6] = obj1;
  const obj3 = {};
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl6.string(require(1212) /* getSystemLocale */.t.bGSsnc);
  const items9 = [MobileSetting.SYNC_CONTACTS, MobileSetting.SYNC_CONTACTS_NAME, MobileSetting.STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION];
  obj3.settings = items9;
  const intl7 = require(1212) /* getSystemLocale */.intl;
  const obj4 = { onClick: require(11736) /* isContactSyncAvailable */.handleOpenLearnMoreLink };
  obj3.subLabel = intl7.format(require(1212) /* getSystemLocale */.t["TWz/S+"], obj4);
  items2[7] = obj3;
  obj5 = {};
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj5.label = intl8.string(require(1212) /* getSystemLocale */.t["aBZ/oQ"]);
  const items10 = [MobileSetting.DISCOVERY_BY_PHONE, MobileSetting.DISCOVERY_BY_EMAIL];
  obj5.settings = items10;
  items2[8] = obj5;
  const obj6 = {};
  const intl9 = require(1212) /* getSystemLocale */.intl;
  obj6.label = intl9.string(require(1212) /* getSystemLocale */.t["+KNdnt"]);
  const items11 = [MobileSetting.IOS_CONVERSATION_SUGGESTIONS];
  obj6.settings = items11;
  items2[9] = obj6;
  return items2;
}
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.loadingIndicator = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emptyContainer = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/content_and_social/native/ContentAndSocialScreen.tsx");

export default function ContentAndSocialSettings(route) {
  route = route.route;
  const memo = React.useMemo(() => {
    const items = [outer1_7.CONTENT_AND_SOCIAL_DISCORD, outer1_7.CONNECTED_GAMES];
    return items;
  }, []);
  const first = callback(React.useState(() => {
    let tab;
    if (null != route) {
      const params = route.params;
      if (null != params) {
        tab = params.tab;
      }
    }
    let num = 0;
    if (tab === outer1_7.CONNECTED_GAMES) {
      num = 1;
    }
    return num;
  }), 2)[0];
  let items = [first, memo];
  const node = React.useMemo(() => {
    let obj = route(first[14]);
    obj = { defaultIndex: first, settings: memo };
    return obj.createSegmentedControl(obj);
  }, items);
  return callback2(memo(first[16]), { node });
};
export const DiscordPermissionsPage = function DiscordPermissionsPage() {
  let obj = allServersOptionSelected(memo[12]);
  allServersOptionSelected = obj.useAllServersOptionSelected();
  const sensitiveContentFilterHelpArticle = allServersOptionSelected(memo[13]).useSensitiveContentFilterHelpArticle();
  let items = [allServersOptionSelected, sensitiveContentFilterHelpArticle];
  memo = React.useMemo(() => {
    let obj = { settings: items };
    items = [outer1_7.SENSITIVE_CONTENT_FILTERS];
    const intl = allServersOptionSelected(memo[8]).intl;
    obj = {};
    let obj2 = sensitiveContentFilterHelpArticle(memo[9]);
    obj.learnMoreLink = obj2.getArticleURL(sensitiveContentFilterHelpArticle);
    obj.subLabel = intl.format(allServersOptionSelected(memo[8]).t.dliU4j, obj);
    const items1 = [obj, , , ];
    obj = { settings: items2 };
    items2 = [outer1_7.DIRECT_MESSAGE_SPAM_FILTER];
    const intl2 = allServersOptionSelected(memo[8]).intl;
    const obj1 = {};
    let obj5 = sensitiveContentFilterHelpArticle(memo[9]);
    obj1.appealLink = obj5.getArticleURL(outer1_8.SAFE_DIRECT_MESSAGING);
    obj.subLabel = intl2.format(allServersOptionSelected(memo[8]).t.RvjRRI, obj1);
    items1[1] = obj;
    obj2 = {};
    const intl3 = allServersOptionSelected(memo[8]).intl;
    obj2.label = intl3.string(allServersOptionSelected(memo[8]).t.MDqARb);
    const items3 = [outer1_7.DIRECT_MESSAGE_SAFETY_ALERTS];
    obj2.settings = items3;
    const intl4 = allServersOptionSelected(memo[8]).intl;
    const obj3 = { learnMoreLink: sensitiveContentFilterHelpArticle(memo[9]).getArticleURL(outer1_8.SAFETY_ALERTS) };
    obj2.subLabel = intl4.format(allServersOptionSelected(memo[8]).t.lunaRv, obj3);
    items1[2] = obj2;
    const obj4 = {};
    const intl5 = allServersOptionSelected(memo[8]).intl;
    obj4.label = intl5.string(allServersOptionSelected(memo[8]).t.wCFGLE);
    const items4 = [outer1_7.ANDROID_VIEW_NSFW_DM_COMMANDS_V2];
    obj4.settings = items4;
    const intl6 = allServersOptionSelected(memo[8]).intl;
    obj4.subLabel = intl6.string(allServersOptionSelected(memo[8]).t.R9fXyS);
    items1[3] = obj4;
    const items5 = [...items1, ...outer1_13(obj5)];
    obj5 = { allServersSelected: allServersOptionSelected };
    return items5;
  }, items);
  let items1 = [memo];
  obj = {};
  const memo1 = React.useMemo(() => {
    let obj = allServersOptionSelected(memo[14]);
    obj = { sections: memo };
    return obj.createList(obj);
  }, items1);
  obj = {};
  let obj2 = allServersOptionSelected(memo[13]);
  obj.screen = allServersOptionSelected(memo[15]).SettingsScreen.CONTENT_AND_SOCIAL;
  let items2 = [callback2(sensitiveContentFilterHelpArticle(memo[15]), obj), callback2(sensitiveContentFilterHelpArticle(memo[16]), { node: memo1 })];
  obj.children = items2;
  return callback3(closure_10, obj);
};
export const ConnectedGamesPage = function ConnectedGamesPage() {
  let showLoadingIndicator;
  let slayerSdkApplications;
  const tmp = _createForOfIteratorHelperLoose();
  ({ showLoadingIndicator, slayerSdkApplications } = importDefault(14583)());
  if (showLoadingIndicator) {
    let obj = { style: tmp.loadingIndicator };
    let tmp7 = callback2(closure_5, obj);
  } else if (0 === slayerSdkApplications.length) {
    obj = { style: tmp.emptyContainer };
    let obj1 = { variant: "text-md/semibold", color: "text-strong" };
    let intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t["+0U77d"]);
    let items = [callback2(require(4126) /* Text */.Text, obj1), ];
    let obj2 = { variant: "text-sm/normal", color: "text-muted" };
    let intl2 = require(1212) /* getSystemLocale */.intl;
    const obj3 = { helpdeskArticle: importDefault(1920).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.V8wClM, obj3);
    items[1] = callback2(require(4126) /* Text */.Text, obj2);
    obj.children = items;
    tmp7 = callback3(closure_6, obj);
    const obj6 = importDefault(1920);
  } else {
    obj = { node: tmp3 };
    tmp7 = callback2(importDefault(13601), obj);
  }
  return tmp7;
};
