// Module ID: 16226
// Function ID: 125440
// Name: FeatureCard
// Dependencies: []
// Exports: default

// Module 16226 (FeatureCard)
function FeatureCard(arg0) {
  let body;
  let header;
  let icon;
  ({ icon, header, body } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.featureCard };
  obj = { style: tmp.featureIcon, children: icon() };
  const items = [callback(closure_4, obj), ];
  obj = { style: tmp.featureDescription };
  const obj1 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold", children: header };
  const items1 = [callback(arg1(dependencyMap[10]).Heading, obj1), callback(arg1(dependencyMap[10]).Text, { children: body })];
  obj.children = items1;
  items[1] = callback2(closure_4, obj);
  obj.children = items;
  return callback2(closure_4, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ HelpdeskArticles: closure_9, GuildFeatures: closure_10, GuildSettingsSections: closure_11, Permissions: closure_12 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { container: { height: "100%" }, contentPadding: { padding: 16 }, header: {}, body: { value: 24, marginTop: "recent_games_enabled" }, details: { "Bool(true)": 24, "Bool(true)": "recent_games_enabled" }, headerImage: { width: "100%" }, features: { size: false, progress: false } };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.featureCard = obj;
const obj1 = { "Bool(true)": "0b8a6fa235bbde823695fe5cdeccf7e4", "Bool(true)": "channel_setup_light", "Bool(true)": "png", "Bool(true)": true, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_STRONG };
obj.featureIcon = obj1;
obj.featureDescription = { <string:1660689751>: null, <string:5332066>: null };
let closure_16 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx");

export default function GuildSettingsModalCommunityIntro(contentContainerStyle) {
  let onClose;
  ({ guildId: closure_0, onClose } = contentContainerStyle);
  const importDefault = onClose;
  const tmp = callback3();
  let obj = arg1(dependencyMap[13]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => guild.getGuild(closure_0));
  const React = stateFromStores;
  let obj2 = arg1(dependencyMap[14]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = closure_8.can(constants3.ADMINISTRATOR, stateFromStores);
    }
    return canResult;
  });
  const items2 = [stateFromStores, navigation, onClose];
  const effect = React.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = stateFromStores.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    if (hasItem) {
      let obj = onClose(navigation[15]);
      obj.wait(() => callback(closure_2[16]).setSection(constants.COMMUNITY));
      obj = { onClose };
      const replaced = navigation.replace(constants2.COMMUNITY, obj);
    }
  }, items2);
  let obj3 = arg1(dependencyMap[17]);
  obj = {};
  obj = { style: tmp.container, contentContainerStyle: items3 };
  const items3 = [tmp.contentPadding, contentContainerStyle.contentContainerStyle];
  obj1 = { resizeMode: "contain", source: obj3.useIntroHeaderSource(), style: tmp.headerImage };
  const items4 = [callback(closure_5, obj1), , , , , ];
  obj2 = { style: tmp.header };
  const intl = arg1(dependencyMap[9]).intl;
  obj2.children = intl.string(arg1(dependencyMap[9]).t.M/gBcA);
  items4[1] = callback(arg1(dependencyMap[10]).Heading, obj2);
  obj3 = { style: tmp.body };
  const intl2 = arg1(dependencyMap[9]).intl;
  const obj4 = {};
  let obj10 = importDefault(dependencyMap[19]);
  obj4.helpdeskArticle = obj10.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj3.children = intl2.format(arg1(dependencyMap[9]).t.52EgsM, obj4);
  items4[2] = callback(arg1(dependencyMap[18]).TextWithIOSLinkWorkaround, obj3);
  const obj5 = {};
  const intl3 = arg1(dependencyMap[9]).intl;
  obj5.text = intl3.string(arg1(dependencyMap[9]).t.LhlgY9);
  obj5.onPress = function onPress() {
    if (stateFromStores1) {
      onClose(navigation[21]).open();
      const obj2 = onClose(navigation[21]);
    } else {
      callback(navigation[22]).communityAdminOnly();
      const obj = callback(navigation[22]);
    }
  };
  obj5.disabled = !stateFromStores1;
  items4[3] = callback(arg1(dependencyMap[20]).Button, obj5);
  const obj6 = { style: tmp.details };
  const intl4 = arg1(dependencyMap[9]).intl;
  obj6.children = intl4.string(arg1(dependencyMap[9]).t.HgTI2N);
  items4[4] = callback(arg1(dependencyMap[10]).Text, obj6);
  const obj7 = { style: tmp.features };
  const obj8 = {
    icon() {
      const obj = { color: onClose(navigation[7]).unsafe_rawColors.GREEN_360 };
      return callback2(callback(navigation[8]).AnalyticsIcon, obj);
    }
  };
  const intl5 = arg1(dependencyMap[9]).intl;
  obj8.header = intl5.string(arg1(dependencyMap[9]).t.oVQF2y);
  const intl6 = arg1(dependencyMap[9]).intl;
  obj8.body = intl6.format(arg1(dependencyMap[9]).t.A6G7ak, {
    featureHook(children) {
      const obj = { hasMaxConnections: "r", isBoostOnlySubscription: "accessibilityRole", children };
      return callback2(callback(navigation[10]).Text, obj, arg1);
    }
  });
  const items5 = [obj8, , ];
  obj10 = {
    icon() {
      const obj = { color: onClose(navigation[7]).unsafe_rawColors.YELLOW_300 };
      return callback2(callback(navigation[11]).LightbulbIcon, obj);
    }
  };
  const intl7 = arg1(dependencyMap[9]).intl;
  obj10.header = intl7.string(arg1(dependencyMap[9]).t.0rJl9y);
  const intl8 = arg1(dependencyMap[9]).intl;
  obj10.body = intl8.format(arg1(dependencyMap[9]).t.XsCNky, {
    infoHook() {
      return null;
    },
    featureHook(children) {
      const obj = { hasMaxConnections: "r", isBoostOnlySubscription: "accessibilityRole", children };
      return callback2(callback(navigation[10]).Text, obj, arg1);
    }
  });
  items5[1] = obj10;
  const obj12 = {
    icon() {
      const obj = { color: onClose(navigation[7]).unsafe_rawColors.PLATFORM_PARTNER };
      return callback2(callback(navigation[12]).CircleInformationIcon, obj);
    }
  };
  const intl9 = arg1(dependencyMap[9]).intl;
  obj12.header = intl9.string(arg1(dependencyMap[9]).t.W2kLJC);
  const intl10 = arg1(dependencyMap[9]).intl;
  obj12.body = intl10.string(arg1(dependencyMap[9]).t.hyNkHz);
  items5[2] = obj12;
  obj7.children = items5.map((arg0, arg1) => {
    const merged = Object.assign(arg0);
    return callback2(closure_17, {}, arg1);
  });
  items4[5] = callback(stateFromStores1, obj7);
  obj.children = items4;
  const items6 = [callback2(closure_6, obj), callback(arg1(dependencyMap[23]).NavScrim, {})];
  obj.children = items6;
  return callback2(closure_15, obj);
};
