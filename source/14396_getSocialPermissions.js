// Module ID: 14396
// Function ID: 108622
// Name: getSocialPermissions
// Dependencies: []
// Exports: ConnectedGamesPage, DiscordPermissionsPage, default

// Module 14396 (getSocialPermissions)
function getSocialPermissions(allServersSelected) {
  const items = [MobileSetting.SAFETY_GUILD_SETTING_GUILD_SELECT, MobileSetting.SAFETY_GUILD_SETTING_DIRECT_MESSAGES, MobileSetting.SAFETY_GUILD_SETTING_MESSAGE_REQUESTS];
  let obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.label = intl.string(arg1(dependencyMap[8]).t.6x5uWQ);
  const items1 = [MobileSetting.ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY];
  obj.settings = items1;
  const items2 = [obj, , , , , , , , , ];
  const items3 = [MobileSetting.ACTIVITY_PRIVACY_DEFAULT_SHARING];
  items2[1] = { settings: items3 };
  const items4 = [MobileSetting.NOTIFY_FRIENDS_ON_COME_ONLINE];
  items2[2] = { settings: items4 };
  obj = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.label = intl2.string(arg1(dependencyMap[8]).t.MeYuqs);
  let tmp = items;
  if (!allServersSelected.allServersSelected) {
    const items5 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
    arraySpreadResult = HermesBuiltin.arraySpread(arg1(dependencyMap[10]).GUILD_SPECIFIC_SETTINGS, arraySpreadResult);
    tmp = items5;
  }
  obj.settings = tmp;
  items2[3] = obj;
  obj = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.label = intl3.string(arg1(dependencyMap[8]).t.XlGG9c);
  const items6 = [MobileSetting.SAFETY_SEND_FRIEND_REQUESTS_EVERYONE, MobileSetting.SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS, MobileSetting.SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS];
  obj.settings = items6;
  items2[4] = obj;
  const items7 = [MobileSetting.FRIEND_REQUEST_NOTES];
  items2[5] = { settings: items7 };
  const obj1 = {};
  const intl4 = arg1(dependencyMap[8]).intl;
  obj1.label = intl4.string(arg1(dependencyMap[8]).t.3wRort);
  const items8 = [MobileSetting.ACCOUNT_BLOCKED_USERS_V2, MobileSetting.ACCOUNT_IGNORED_USERS];
  obj1.settings = items8;
  const intl5 = arg1(dependencyMap[8]).intl;
  const obj2 = {};
  let obj5 = importDefault(dependencyMap[9]);
  obj2.helpArticle = obj5.getArticleURL(HelpdeskArticles.STEALTH_REMEDIATION_FEATURE_GUIDE);
  obj1.subLabel = intl5.format(arg1(dependencyMap[8]).t.0aNQo9, obj2);
  items2[6] = obj1;
  const obj3 = {};
  const intl6 = arg1(dependencyMap[8]).intl;
  obj3.label = intl6.string(arg1(dependencyMap[8]).t.bGSsnc);
  const items9 = [MobileSetting.SYNC_CONTACTS, MobileSetting.SYNC_CONTACTS_NAME, MobileSetting.STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION];
  obj3.settings = items9;
  const intl7 = arg1(dependencyMap[8]).intl;
  const obj4 = { onClick: arg1(dependencyMap[11]).handleOpenLearnMoreLink };
  obj3.subLabel = intl7.format(arg1(dependencyMap[8]).t.TWz/S+, obj4);
  items2[7] = obj3;
  obj5 = {};
  const intl8 = arg1(dependencyMap[8]).intl;
  obj5.label = intl8.string(arg1(dependencyMap[8]).t.aBZ/oQ);
  const items10 = [MobileSetting.DISCOVERY_BY_PHONE, MobileSetting.DISCOVERY_BY_EMAIL];
  obj5.settings = items10;
  items2[8] = obj5;
  const obj6 = {};
  const intl9 = arg1(dependencyMap[8]).intl;
  obj6.label = intl9.string(arg1(dependencyMap[8]).t.+KNdnt);
  const items11 = [MobileSetting.IOS_CONVERSATION_SUGGESTIONS];
  obj6.settings = items11;
  items2[9] = obj6;
  return items2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const MobileSetting = arg1(dependencyMap[3]).MobileSetting;
const HelpdeskArticles = arg1(dependencyMap[4]).HelpdeskArticles;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[7]).space.PX_32 };
obj.loadingIndicator = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.emptyContainer = { flex: 1, gap: importDefault(dependencyMap[7]).space.PX_4, marginTop: importDefault(dependencyMap[7]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
let closure_12 = obj.createStyles(obj);
const obj1 = { flex: 1, gap: importDefault(dependencyMap[7]).space.PX_4, marginTop: importDefault(dependencyMap[7]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/user_settings/content_and_social/native/ContentAndSocialScreen.tsx");

export default function ContentAndSocialSettings(route) {
  const arg1 = route.route;
  const memo = React.useMemo(() => {
    const items = [constants.CONTENT_AND_SOCIAL_DISCORD, constants.CONNECTED_GAMES];
    return items;
  }, []);
  const importDefault = memo;
  const first = callback(React.useState(() => {
    let tab;
    if (null != route) {
      const params = route.params;
      if (null != params) {
        tab = params.tab;
      }
    }
    let num = 0;
    if (tab === constants.CONNECTED_GAMES) {
      num = 1;
    }
    return num;
  }), 2)[0];
  const dependencyMap = first;
  const items = [first, memo];
  const node = React.useMemo(() => {
    let obj = route(first[14]);
    obj = { defaultIndex: first, settings: memo };
    return obj.createSegmentedControl(obj);
  }, items);
  return callback2(importDefault(dependencyMap[16]), { node });
};
export const DiscordPermissionsPage = function DiscordPermissionsPage() {
  let obj = arg1(dependencyMap[12]);
  const allServersOptionSelected = obj.useAllServersOptionSelected();
  const arg1 = allServersOptionSelected;
  const sensitiveContentFilterHelpArticle = arg1(dependencyMap[13]).useSensitiveContentFilterHelpArticle();
  const importDefault = sensitiveContentFilterHelpArticle;
  const items = [allServersOptionSelected, sensitiveContentFilterHelpArticle];
  const memo = React.useMemo(() => {
    let obj = { settings: items };
    const items = [closure_7.SENSITIVE_CONTENT_FILTERS];
    const intl = allServersOptionSelected(memo[8]).intl;
    obj = {};
    let obj2 = sensitiveContentFilterHelpArticle(memo[9]);
    obj.learnMoreLink = obj2.getArticleURL(sensitiveContentFilterHelpArticle);
    obj.subLabel = intl.format(allServersOptionSelected(memo[8]).t.dliU4j, obj);
    const items1 = [obj, , , ];
    obj = { settings: items2 };
    const items2 = [closure_7.DIRECT_MESSAGE_SPAM_FILTER];
    const intl2 = allServersOptionSelected(memo[8]).intl;
    const obj1 = {};
    let obj5 = sensitiveContentFilterHelpArticle(memo[9]);
    obj1.appealLink = obj5.getArticleURL(constants.SAFE_DIRECT_MESSAGING);
    obj.subLabel = intl2.format(allServersOptionSelected(memo[8]).t.RvjRRI, obj1);
    items1[1] = obj;
    obj2 = {};
    const intl3 = allServersOptionSelected(memo[8]).intl;
    obj2.label = intl3.string(allServersOptionSelected(memo[8]).t.MDqARb);
    const items3 = [closure_7.DIRECT_MESSAGE_SAFETY_ALERTS];
    obj2.settings = items3;
    const intl4 = allServersOptionSelected(memo[8]).intl;
    const obj3 = { learnMoreLink: sensitiveContentFilterHelpArticle(memo[9]).getArticleURL(constants.SAFETY_ALERTS) };
    obj2.subLabel = intl4.format(allServersOptionSelected(memo[8]).t.lunaRv, obj3);
    items1[2] = obj2;
    const obj4 = {};
    const intl5 = allServersOptionSelected(memo[8]).intl;
    obj4.label = intl5.string(allServersOptionSelected(memo[8]).t.wCFGLE);
    const items4 = [closure_7.ANDROID_VIEW_NSFW_DM_COMMANDS_V2];
    obj4.settings = items4;
    const intl6 = allServersOptionSelected(memo[8]).intl;
    obj4.subLabel = intl6.string(allServersOptionSelected(memo[8]).t.R9fXyS);
    items1[3] = obj4;
    const items5 = [...items1, ...closure_13(obj5)];
    obj5 = { allServersSelected: allServersOptionSelected };
    return items5;
  }, items);
  const dependencyMap = memo;
  const items1 = [memo];
  obj = {};
  const memo1 = React.useMemo(() => {
    let obj = allServersOptionSelected(memo[14]);
    obj = { sections: memo };
    return obj.createList(obj);
  }, items1);
  obj = {};
  const obj2 = arg1(dependencyMap[13]);
  obj.screen = arg1(dependencyMap[15]).SettingsScreen.CONTENT_AND_SOCIAL;
  const items2 = [callback2(importDefault(dependencyMap[15]), obj), callback2(importDefault(dependencyMap[16]), { node: memo1 })];
  obj.children = items2;
  return callback3(closure_10, obj);
};
export const ConnectedGamesPage = function ConnectedGamesPage() {
  let showLoadingIndicator;
  let slayerSdkApplications;
  const tmp = callback4();
  ({ showLoadingIndicator, slayerSdkApplications } = importDefault(dependencyMap[17])());
  if (showLoadingIndicator) {
    let obj = { style: tmp.loadingIndicator };
    let tmp7 = callback2(closure_5, obj);
  } else if (0 === slayerSdkApplications.length) {
    obj = { style: tmp.emptyContainer };
    const obj1 = {};
    const intl = arg1(dependencyMap[8]).intl;
    obj1.children = intl.string(arg1(dependencyMap[8]).t.+0U77d);
    const items = [callback2(arg1(dependencyMap[18]).Text, obj1), ];
    const obj2 = {};
    const intl2 = arg1(dependencyMap[8]).intl;
    const obj3 = { helpdeskArticle: importDefault(dependencyMap[9]).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    obj2.children = intl2.format(arg1(dependencyMap[8]).t.V8wClM, obj3);
    items[1] = callback2(arg1(dependencyMap[18]).Text, obj2);
    obj.children = items;
    tmp7 = callback3(closure_6, obj);
    const obj6 = importDefault(dependencyMap[9]);
  } else {
    obj = { node: tmp3 };
    tmp7 = callback2(importDefault(dependencyMap[16]), obj);
  }
  return tmp7;
};
