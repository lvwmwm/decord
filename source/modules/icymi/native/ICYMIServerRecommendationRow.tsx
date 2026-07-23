// Module ID: 15244
// Function ID: 116320
// Name: CutoutGuildBanner
// Dependencies: [57, 5, 31, 27, 4122, 1838, 8306, 653, 33, 15179, 689, 566, 1392, 1387, 7873, 5085, 5515, 8321, 3831, 1212, 5048, 4126, 4543, 15218, 9244, 2]
// Exports: ICYMIServerRecommendationRow

// Module 15244 (CutoutGuildBanner)
import _slicedToArray from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
function CutoutGuildBanner(guild) {
  guild = guild.guild;
  const tmp = callback5();
  let obj = guild(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.useReducedMotion);
  let hasItem = !stateFromStores;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(constants.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    let obj1 = importDefault(1392);
    const animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      let obj = outer1_1(outer1_2[12]);
      obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
  }
  const items1 = [guild];
  obj = { style: tmp.bannerImage };
  const memo = React.useMemo(() => guild(outer1_2[13]).fromClientDiscoverableGuild(guild), items1);
  obj = {};
  obj1 = { shape: guild(7873).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  const items2 = [obj1];
  obj.cutouts = items2;
  if (null != guild.banner) {
    const obj2 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    let tmp15 = callback3(importDefault(5085), obj2);
  } else {
    const obj3 = {};
    const items3 = [, ];
    ({ bannerImage: arr4[0], emptyBanner: arr4[1] } = tmp);
    obj3.style = items3;
    tmp15 = callback3(View, obj3);
  }
  obj.children = tmp15;
  const items4 = [callback3(importDefault(7873), obj), ];
  const obj4 = { style: tmp.guildIcon, guild: memo };
  const tmp10 = View;
  const tmp11 = callback3;
  const tmp12 = importDefault(7873);
  const tmp9 = closure_15;
  obj4.size = guild(5515).GuildIconSizes.LARGE;
  obj4.animate = !stateFromStores;
  items4[1] = callback3(importDefault(5515), obj4);
  obj.children = items4;
  return tmp9(tmp10, obj);
}
function FeaturedServer(guild) {
  guild = guild.guild;
  let closure_1;
  const tmp = callback5();
  let obj = guild(566);
  const items = [closure_8];
  const fn = () => null != outer1_8.getGuild(guild.id);
  const stateFromStores = obj.useStateFromStores(items, fn);
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [guild.id];
  const callback = React.useCallback(callback2(fn), items1);
  const tmp4 = callback(React.useState(false), 2);
  closure_1 = tmp4[1];
  obj = { style: tmp.featuredServerContainer };
  const items2 = [callback3(CutoutGuildBanner, { guild }), , ];
  obj = { style: tmp.featuredServerInnerContainer };
  const obj1 = { maxFontSizeMultiplier: 1, lineClamp: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name };
  const items3 = [callback3(guild(4126).Text, obj1), ];
  const obj2 = { maxFontSizeMultiplier: 1, lineClamp: 3, variant: "text-xs/normal", color: "text-default", children: guild.description };
  items3[1] = callback3(guild(4126).Text, obj2);
  obj.children = items3;
  items2[1] = callback4(View, obj);
  const obj3 = { style: tmp.buttonContainer };
  const obj4 = { disabled: stateFromStores, loading: tmp4[0] };
  const intl = guild(1212).intl;
  const string = intl.string;
  const t = guild(1212).t;
  if (stateFromStores) {
    let stringResult = string(t.cEnaWx);
  } else {
    stringResult = string(t.VJlc0S);
  }
  obj4.text = stringResult;
  obj4.size = "sm";
  obj4.onPress = callback;
  obj4.grow = true;
  obj3.children = callback3(guild(4543).Button, obj4);
  items2[2] = callback3(View, obj3);
  obj.children = items2;
  return callback4(View, obj);
}
function RecommendedGuildsRow(discoverableGuilds) {
  discoverableGuilds = discoverableGuilds.discoverableGuilds;
  [][0] = discoverableGuilds;
  let tmp2 = null;
  if (0 !== discoverableGuilds.length) {
    let obj = {};
    const items = [discoverableGuilds.length];
    obj.sections = items;
    obj.insetStart = importDefault(689).space.PX_16;
    obj.renderItem = tmp;
    obj.estimatedListSize = "windowSize";
    obj.itemSize = 200 + importDefault(689).space.PX_16;
    obj.horizontal = true;
    obj.listId = "recommended-servers-list";
    obj.showsHorizontalScrollIndicator = false;
    tmp2 = callback3(importDefault(9244), obj);
    const tmp6 = importDefault(9244);
  }
  return tmp2;
}
({ AnalyticsObjects: closure_10, AnalyticsPages: closure_11, AnalyticsSections: closure_12, GuildFeatures: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let closure_17 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  let obj = {};
  obj = { marginVertical: importDefault(689).space.PX_24 };
  obj.container = obj;
  obj = { marginBottom: importDefault(689).space.PX_8, marginHorizontal: marginHorizontal.margin };
  obj.title = obj;
  obj.subtitle = { marginBottom: importDefault(689).space.PX_16, marginHorizontal: marginHorizontal.margin };
  const obj1 = { marginBottom: importDefault(689).space.PX_16, marginHorizontal: marginHorizontal.margin };
  obj.featuredServerInnerContainer = { marginHorizontal: importDefault(689).space.PX_12, marginTop: 36 };
  const obj2 = { marginHorizontal: importDefault(689).space.PX_12, marginTop: 36 };
  obj.buttonContainer = { position: "absolute", bottom: importDefault(689).space.PX_12, left: importDefault(689).space.PX_12, right: importDefault(689).space.PX_12 };
  const obj3 = { position: "absolute", bottom: importDefault(689).space.PX_12, left: importDefault(689).space.PX_12, right: importDefault(689).space.PX_12 };
  obj.featuredServerTitle = { marginBottom: importDefault(689).space.PX_8 };
  obj.guildIcon = { position: "absolute", top: 50, left: 12 };
  obj.bannerImage = { height: 72, width: 200 };
  const obj4 = { marginBottom: importDefault(689).space.PX_8 };
  obj.emptyBanner = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_SUBTLE };
  const obj6 = { borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.CARD_BACKGROUND_DEFAULT, height: 244, width: 200, overflow: "hidden" };
  obj.featuredServerContainer = obj6;
  return obj;
});
const result = require("result").fileFinishedImporting("modules/icymi/native/ICYMIServerRecommendationRow.tsx");

export const ICYMIServerRecommendationRow = function ICYMIServerRecommendationRow() {
  let obj = require(566) /* initialize */;
  const items = [closure_9];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => outer1_9.getDiscoverableGuilds());
  const tmp = callback5();
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = {};
    obj = { style: tmp.container };
    const obj1 = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t.lv1tce);
    const items1 = [callback3(require(4126) /* Text */.Text, obj1), , ];
    const obj2 = { style: tmp.subtitle, variant: "heading-sm/normal", color: "text-muted" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.x4OezN);
    items1[1] = callback3(require(4126) /* Text */.Text, obj2);
    const obj3 = { discoverableGuilds: stateFromStoresArray };
    items1[2] = callback3(RecommendedGuildsRow, obj3);
    obj.children = items1;
    const items2 = [callback4(View, obj), callback3(require(15218) /* Separator */.Separator, {})];
    obj.children = items2;
    tmp2 = callback4(closure_16, obj);
  }
  return tmp2;
};
