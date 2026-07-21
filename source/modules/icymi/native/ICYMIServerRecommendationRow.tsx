// Module ID: 15121
// Function ID: 114108
// Name: CutoutGuildBanner
// Dependencies: []
// Exports: ICYMIServerRecommendationRow

// Module 15121 (CutoutGuildBanner)
function CutoutGuildBanner(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const tmp = callback5();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(constants.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    let obj1 = importDefault(dependencyMap[12]);
    const animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      let obj = callback(closure_2[12]);
      obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
  }
  const items1 = [guild];
  obj = { style: tmp.bannerImage };
  const memo = React.useMemo(() => guild(closure_2[13]).fromClientDiscoverableGuild(guild), items1);
  obj = {};
  obj1 = { shape: arg1(dependencyMap[14]).CutoutShape.RoundedRect };
  const items2 = [obj1];
  obj.cutouts = items2;
  if (null != guild.banner) {
    const obj2 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    let tmp15 = callback3(importDefault(dependencyMap[15]), obj2);
  } else {
    const obj3 = {};
    const items3 = [, ];
    ({ bannerImage: arr4[0], emptyBanner: arr4[1] } = tmp);
    obj3.style = items3;
    tmp15 = callback3(View, obj3);
  }
  obj.children = tmp15;
  const items4 = [callback3(importDefault(dependencyMap[14]), obj), ];
  const obj4 = { style: tmp.guildIcon, guild: memo };
  const tmp10 = View;
  const tmp11 = callback3;
  const tmp12 = importDefault(dependencyMap[14]);
  const tmp9 = closure_15;
  obj4.size = arg1(dependencyMap[16]).GuildIconSizes.LARGE;
  obj4.animate = !stateFromStores;
  items4[1] = callback3(importDefault(dependencyMap[16]), obj4);
  obj.children = items4;
  return tmp9(tmp10, obj);
}
function FeaturedServer(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let closure_1;
  const tmp = callback5();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  const fn = () => null != guild.getGuild(guild.id);
  const stateFromStores = obj.useStateFromStores(items, fn);
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [guild.id];
  const callback = React.useCallback(callback2(fn), items1);
  const tmp4 = callback(React.useState(false), 2);
  closure_1 = tmp4[1];
  obj = { style: tmp.featuredServerContainer };
  const items2 = [callback3(CutoutGuildBanner, { guild }), , ];
  obj = { style: tmp.featuredServerInnerContainer };
  const obj1 = { "Bool(false)": "Array", "Bool(false)": "isArray", "Bool(false)": "get", "Bool(false)": "concat", "Bool(false)": "Array", style: tmp.featuredServerTitle, children: guild.name };
  const items3 = [callback3(arg1(dependencyMap[21]).Text, obj1), callback3(arg1(dependencyMap[21]).Text, { children: guild.description })];
  obj.children = items3;
  items2[1] = callback4(View, obj);
  const obj3 = { style: tmp.buttonContainer };
  const obj4 = { disabled: stateFromStores, loading: tmp4[0] };
  const intl = arg1(dependencyMap[19]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[19]).t;
  if (stateFromStores) {
    let stringResult = string(t.cEnaWx);
  } else {
    stringResult = string(t.VJlc0S);
  }
  obj4.text = stringResult;
  obj4.size = "sm";
  obj4.onPress = callback;
  obj4.grow = true;
  obj3.children = callback3(arg1(dependencyMap[22]).Button, obj4);
  items2[2] = callback3(View, obj3);
  obj.children = items2;
  return callback4(View, obj);
}
function RecommendedGuildsRow(discoverableGuilds) {
  discoverableGuilds = discoverableGuilds.discoverableGuilds;
  const arg1 = discoverableGuilds;
  [][0] = discoverableGuilds;
  let tmp2 = null;
  if (0 !== discoverableGuilds.length) {
    const obj = {};
    const items = [discoverableGuilds.length];
    obj.sections = items;
    obj.insetStart = importDefault(dependencyMap[10]).space.PX_16;
    obj.renderItem = tmp;
    obj.estimatedListSize = "windowSize";
    obj.itemSize = 200 + importDefault(dependencyMap[10]).space.PX_16;
    obj.horizontal = true;
    obj.listId = "recommended-servers-list";
    obj.showsHorizontalScrollIndicator = false;
    tmp2 = callback3(importDefault(dependencyMap[24]), obj);
    const tmp6 = importDefault(dependencyMap[24]);
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ AnalyticsObjects: closure_10, AnalyticsPages: closure_11, AnalyticsSections: closure_12, GuildFeatures: closure_13 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
let closure_17 = arg1(dependencyMap[9]).createICYMIStyles((marginHorizontal) => {
  let obj = {};
  obj = { marginVertical: importDefault(dependencyMap[10]).space.PX_24 };
  obj.container = obj;
  obj = { marginBottom: importDefault(dependencyMap[10]).space.PX_8, marginHorizontal: marginHorizontal.margin };
  obj.title = obj;
  obj.subtitle = { marginBottom: importDefault(dependencyMap[10]).space.PX_16, marginHorizontal: marginHorizontal.margin };
  const obj1 = { marginBottom: importDefault(dependencyMap[10]).space.PX_16, marginHorizontal: marginHorizontal.margin };
  obj.featuredServerInnerContainer = { marginHorizontal: importDefault(dependencyMap[10]).space.PX_12, marginTop: 36 };
  const obj2 = { marginHorizontal: importDefault(dependencyMap[10]).space.PX_12, marginTop: 36 };
  obj.buttonContainer = { position: "absolute", bottom: importDefault(dependencyMap[10]).space.PX_12, left: importDefault(dependencyMap[10]).space.PX_12, right: importDefault(dependencyMap[10]).space.PX_12 };
  const obj3 = { position: "absolute", bottom: importDefault(dependencyMap[10]).space.PX_12, left: importDefault(dependencyMap[10]).space.PX_12, right: importDefault(dependencyMap[10]).space.PX_12 };
  obj.featuredServerTitle = { marginBottom: importDefault(dependencyMap[10]).space.PX_8 };
  obj.guildIcon = {};
  obj.bannerImage = { y: true, isArray: true };
  const obj4 = { marginBottom: importDefault(dependencyMap[10]).space.PX_8 };
  obj.emptyBanner = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_SUBTLE };
  const obj5 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_SUBTLE };
  obj.featuredServerContainer = { borderRadius: importDefault(dependencyMap[10]).radii.lg, backgroundColor: importDefault(dependencyMap[10]).colors.CARD_BACKGROUND_DEFAULT };
  return obj;
});
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/icymi/native/ICYMIServerRecommendationRow.tsx");

export const ICYMIServerRecommendationRow = function ICYMIServerRecommendationRow() {
  let obj = arg1(dependencyMap[11]);
  const items = [closure_9];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => discoverableGuilds.getDiscoverableGuilds());
  const tmp = callback5();
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = {};
    obj = { style: tmp.container };
    const obj1 = { delete: true, dispatch: true, raw: true, style: tmp.title };
    const intl = arg1(dependencyMap[19]).intl;
    obj1.children = intl.string(arg1(dependencyMap[19]).t.lv1tce);
    const items1 = [callback3(arg1(dependencyMap[21]).Text, obj1), , ];
    const obj2 = { delete: 23929153, dispatch: 569860352, raw: -389857007, style: tmp.subtitle };
    const intl2 = arg1(dependencyMap[19]).intl;
    obj2.children = intl2.string(arg1(dependencyMap[19]).t.x4OezN);
    items1[1] = callback3(arg1(dependencyMap[21]).Text, obj2);
    const obj3 = { discoverableGuilds: stateFromStoresArray };
    items1[2] = callback3(RecommendedGuildsRow, obj3);
    obj.children = items1;
    const items2 = [callback4(View, obj), callback3(arg1(dependencyMap[23]).Separator, {})];
    obj.children = items2;
    tmp2 = callback4(closure_16, obj);
  }
  return tmp2;
};
