// Module ID: 14954
// Function ID: 112551
// Dependencies: []

// Module 14954
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = { wrapper: { 314319: "y", 315874: "isArray" }, content: { easing: null, isInteraction: null, useNativeDriver: null, size: null } };
obj = {};
const merged = Object.assign(arg1(dependencyMap[6]).TextStyleSheet.heading-md/bold);
obj["fontSize"] = 18;
obj["marginTop"] = 16;
obj["marginBottom"] = 8;
obj.headerText = obj;
obj.text = { textAlign: "center" };
obj.buttonWrapper = { marginTop: 24 };
obj1 = { "Bool(true)": 291136, "Bool(true)": 1514209280, "Bool(true)": 1358955595, borderRadius: importDefault(dependencyMap[7]).radii.xl };
obj.buttonPill = obj1;
obj.personalizeButtonWrapper = { <string:80547328>: "<string:2552889346>", <string:80609280>: "<string:2938503170>" };
let closure_10 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function ChannelsEmpty(guild) {
  let canCreateChannel;
  let canCustomizeGuild;
  guild = guild.guild;
  const arg1 = guild;
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const items1 = [guild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ canCustomizeGuild: closure_6.can(constants.MANAGE_GUILD, guild), canCreateChannel: closure_6.can(constants.MANAGE_CHANNELS, guild) }), items1);
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  const items2 = [guild.id];
  const items3 = [guild.id];
  const callback = importAllResult.useCallback(() => {
    callback(closure_2[9]).open(guild.id);
  }, items2);
  const callback1 = importAllResult.useCallback(() => {
    callback(closure_2[10]).open(null, guild.id, null, null);
  }, items3);
  let obj1 = arg1(dependencyMap[11]);
  const youBarTotalHeight = obj1.useYouBarTotalHeight(16);
  let obj2 = arg1(dependencyMap[12]);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  if (isFavoritesGuildIdResult) {
    let tmp7Result = tmp7(arg1(dependencyMap[13]).FavoritesSpotIllustration, { "Null": 24, "Null": 24 });
  } else {
    obj = { source: importDefault(dependencyMap[14]) };
    tmp7Result = tmp7(closure_5, obj);
  }
  const intl = arg1(dependencyMap[15]).intl;
  const string = intl.string;
  if (isFavoritesGuildIdResult) {
    let stringResult = string(importDefault(tmp15[16]).wh+Rz1);
  } else {
    stringResult = string(arg1(tmp15[15]).t.o4s29v);
  }
  const intl2 = arg1(dependencyMap[15]).intl;
  const string2 = intl2.string;
  if (isFavoritesGuildIdResult) {
    let string2Result = string2(importDefault(tmp19[16]).+SuGKb);
  } else {
    string2Result = string2(arg1(tmp19[15]).t.iypvFu);
  }
  obj = { style: items4 };
  const items4 = [tmp.wrapper, { paddingBottom: youBarTotalHeight }];
  if (canCustomizeGuild) {
    obj1 = { style: tmp.personalizeButtonWrapper };
    obj2 = {};
    const obj3 = { source: importDefault(dependencyMap[19]), disableColor: true };
    obj2.icon = callback(arg1(dependencyMap[18]).Icon, obj3);
    const intl3 = arg1(dependencyMap[15]).intl;
    obj2.label = intl3.string(arg1(dependencyMap[15]).t.Yhi9/N);
    obj2.onPress = callback;
    obj1.children = callback(arg1(dependencyMap[17]).RowButton, obj2);
    canCustomizeGuild = callback(closure_4, obj1);
  }
  const items5 = [canCustomizeGuild, ];
  const obj4 = { style: tmp.content };
  const items6 = [tmp7Result, , , ];
  const obj5 = { style: items7 };
  const items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  obj5.children = stringResult;
  items6[1] = callback(arg1(dependencyMap[6]).Text, obj5);
  const obj6 = { style: tmp.text, children: string2Result };
  items6[2] = callback(arg1(dependencyMap[6]).Text, obj6);
  if (canCreateChannel) {
    const obj7 = { style: tmp.buttonWrapper };
    const obj8 = { pillStyle: tmp.buttonPill };
    const intl4 = arg1(dependencyMap[15]).intl;
    obj8.text = intl4.string(arg1(dependencyMap[15]).t.63PyJQ);
    obj8.onPress = callback1;
    obj7.children = callback(arg1(dependencyMap[20]).BaseTextButton, obj8);
    canCreateChannel = callback(closure_4, obj7);
  }
  items6[3] = canCreateChannel;
  obj4.children = items6;
  items5[1] = closure_9(closure_4, obj4);
  obj.children = items5;
  return closure_9(closure_4, obj);
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default memoResult;
