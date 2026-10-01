// Module ID: 16156
// Function ID: 16157
// Name: ICYMIServerRecommendationRow
// Dependencies: [32, 5, 19, 17, 4825, 2067, 7783, 1074, 21, 16091, 576, 504, 1397, 2059, 8276, 5899, 5896, 7799, 4528, 1115, 5832, 4832, 5281, 16130, 6476, 2]
// Exports: ICYMIServerRecommendationRow

// Module 16156 (ICYMIServerRecommendationRow)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2059 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import FastestListDefault from "FastestList" /* 6476 */;
import ClipViewDefault from "ClipView" /* 8276 */;
import ICYMIShared from "ICYMIShared" /* 16130 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildStore from "GuildStore" /* 2067 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size_mod from "module_2" /* 2 */;

let c1, c2, c3, closure_0;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
function CutoutGuildBanner(guild) {
  let animatableSourceWithFallback;
  let items2;
  let items3;
  let items4;
  let tmp12Result;
  let useReducedMotion;
  guild = guild.guild;
  const tmp = closure_17();
  let obj = guild(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(constants.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    let obj2 = AvatarUtilsDefault;
    animatableSourceWithFallback = obj2.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      const obj = AvatarUtilsDefault;
      const obj2 = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj2, hasItem);
    });
  }
  const items1 = [guild];
  const obj3 = { style: tmp.bannerImage, children: items4 };
  const memo = react.useMemo(() => {
    const obj = GuildRecordUtils;
    return obj.fromClientDiscoverableGuild(guild);
  }, items1);
  const obj4 = { cutouts: items2, children: tmp12Result };
  size = { shape: guild(8276).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  items2 = [size];
  const tmp10 = closure_15;
  const tmp14 = ClipViewDefault;
  if (null != guild.banner) {
    const obj5 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    tmp12Result = tmp12(tmp13(5899), obj5);
  } else {
    const obj6 = { style: items3 };
    items3 = [, ];
    ({ bannerImage: arr4[0], emptyBanner: arr4[1] } = tmp);
    tmp12Result = tmp12(tmp11, obj6);
  }
  items4 = [closure_14(tmp14, obj4), ];
  const obj7 = { style: tmp.guildIcon, guild: memo, size: guild(5896).GuildIconSizes.LARGE, animate: !stateFromStores };
  const tmp13Result = GuildIconDefault;
  items4[1] = closure_14(tmp13Result, obj7);
  return tmp10(View, obj3);
}
function FeaturedServer(guild) {
  let Button;
  let closure_1;
  let first;
  let items2;
  let items3;
  let obj7;
  let stringResult;
  guild = guild.guild;
  closure_1 = undefined;
  const tmp = closure_17();
  let obj = guild(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => null != GuildStore.getGuild(guild.id));
  const items1 = [guild.id];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let intl;
    let obj10;
    let obj11;
    if (c3 === 2) {
      c3 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let obj9;
        c3 = 2;
        const tmp4 = c2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp4;
            obj9 = undefined;
            closure_1(true);
            const obj15 = closure_1(c2[17]);
            obj15.itemInteracted("recommended_guilds", "recommended_guilds", "press_join_guild");
            let obj4 = { itemId: guild.id, itemType: "recommended_guilds", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "join", actionDestinationType: "guild" } };
            const obj16 = closure_1(c2[17]);
            obj16.feedItemActioned(obj4);
            const items = [guild.id];
            const obj18 = closure_1(c2[17]);
            c2 = 1;
            c3 = 1;
            let obj5 = { value: obj18.gravityJoinGuild(items, "recommended_guilds"), done: false };
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else if (value) {
            obj9 = { state: obj10 };
            obj10 = { analyticsSource: obj11 };
            obj11 = { page: constants2.ICYMI, section: constants3.ICYMI_RECOMMENDED_SERVERS, object: constants.LIST_ITEM };
            let obj7 = closure_1(c2[17]);
            const result = obj7.addedRecommendedGuild();
            let obj8 = closure_1(c2[17]);
            const dehydrated = obj8.fetchDehydrated({ isReloading: true, forceRefresh: true });
            dehydrated.then(_asyncToGenerator(async (arg0, value) => {
              let v2;
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c2 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_0 = tmp3;
                      const obj6 = c1(c2[17]);
                      c1 = 1;
                      c2 = 1;
                      const obj5 = { value: obj6.reloadICYMITab(), done: false };
                      return obj5;
                    }
                  } else if (1 === c1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj7 = { value, done: true };
                      return obj7;
                    } else {
                      const obj3 = c1(c2[17]);
                      c1 = 2;
                      c2 = 1;
                      const obj8 = { value: obj3.getGuildChannelScores(), done: false };
                      return obj8;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj9 = { value, done: true };
                    return obj9;
                  } else {
                    const obj = c1(c2[17]);
                    const recommendedGuilds = obj.getRecommendedGuilds();
                    c2 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp13) {
                  c2 = 3;
                  throw tmp13;
                }
              }
            }));
            const obj12 = {};
            const transitionToGuildSync = closure_1(c2[20]).transitionToGuildSync;
            const id = closure_129_0.id;
            const tmp32 = closure_1(c2[20]);
            const merged = Object.assign(obj9);
            c2 = 2;
            c3 = 1;
            const obj13 = { value: transitionToGuildSync(id, obj12), done: false };
            return obj13;
          } else {
            const tmp10 = closure_129_1(false);
            const tmp13 = closure_1(c2[18]);
            const obj14 = { key: "RecommeendedServersRow", content: intl.string(tmp(c2[19]).t.CG4Hks) };
            const open = tmp13.open;
            intl = tmp(c2[19]).intl;
            open(obj14);
            c3 = 3;
            const obj17 = { value: undefined, done: true };
            return obj17;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          closure_129_1(false);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp37) {
        c3 = 3;
        throw tmp37;
      }
    }
  }), items1);
  [first, closure_1] = react.useState(false);
  let obj2 = { style: tmp.featuredServerContainer, children: items2 };
  let tmp8 = closure_14;
  let tmp6 = closure_15;
  items2 = [closure_14(CutoutGuildBanner, { guild }), , ];
  let obj3 = { style: tmp.featuredServerInnerContainer, children: items3 };
  let obj4 = { maxFontSizeMultiplier: 1, lineClamp: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name };
  items3 = [closure_14(guild(4832).Text, obj4), ];
  let obj5 = { maxFontSizeMultiplier: 1, lineClamp: 3, variant: "text-xs/normal", color: "text-default", children: guild.description };
  items3[1] = closure_14(guild(4832).Text, obj5);
  items2[1] = closure_15(View, obj3);
  let obj6 = { style: tmp.buttonContainer, children: tmp8(Button, obj7) };
  obj7 = { disabled: stateFromStores, loading: first, text: stringResult, size: "sm", onPress: callback, grow: true };
  Button = guild(5281).Button;
  let intl = guild(1115).intl;
  const string = intl.string;
  const t = guild(1115).t;
  if (stateFromStores) {
    stringResult = string(t.cEnaWx);
  } else {
    stringResult = string(t.VJlc0S);
  }
  items2[2] = tmp8(View, obj6);
  return tmp6(View, obj2);
}
function RecommendedGuildsRow(discoverableGuilds) {
  let items;
  discoverableGuilds = discoverableGuilds.discoverableGuilds;
  [][0] = discoverableGuilds;
  let tmp2 = null;
  if (0 !== discoverableGuilds.length) {
    let obj = { sections: items, insetStart: nativeDefault.space.PX_16, renderItem: tmp, estimatedListSize: "windowSize", itemSize: 200 + nativeDefault.space.PX_16, horizontal: true, listId: "recommended-servers-list", showsHorizontalScrollIndicator: false };
    items = [discoverableGuilds.length];
    const tmp6 = FastestListDefault;
    tmp2 = closure_14(tmp6, obj);
  }
  return tmp2;
}
const View = react_native.View;
({ AnalyticsObjects: c10, AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12, GuildFeatures: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let closure_17 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  let rect;
  const obj = { container: { marginVertical: nativeDefault.space.PX_24 }, title: { marginBottom: nativeDefault.space.PX_8, marginHorizontal: marginHorizontal.margin }, subtitle: { marginBottom: nativeDefault.space.PX_16, marginHorizontal: marginHorizontal.margin }, featuredServerInnerContainer: { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 }, buttonContainer: rect, featuredServerTitle: { marginBottom: nativeDefault.space.PX_8 }, guildIcon: { position: "absolute", top: 50, left: 12 }, bannerImage: { height: 72, width: 200 }, emptyBanner: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, featuredServerContainer: size };
  ({ marginVertical: nativeDefault.space.PX_24 });
  ({ marginBottom: nativeDefault.space.PX_8, marginHorizontal: marginHorizontal.margin });
  ({ marginBottom: nativeDefault.space.PX_16, marginHorizontal: marginHorizontal.margin });
  ({ marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 });
  rect = { position: "absolute", bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
  ({ marginBottom: nativeDefault.space.PX_8 });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  size = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, height: 244, width: 200, overflow: "hidden" };
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIServerRecommendationRow.tsx");

export const ICYMIServerRecommendationRow = function ICYMIServerRecommendationRow() {
  let discoverableGuilds;
  let intl;
  let intl2;
  let items1;
  let items2;
  const items = [ICYMIStore];
  const obj = get_initialized;
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => discoverableGuilds.getDiscoverableGuilds());
  const tmp3 = closure_17();
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { children: items2 };
    const obj3 = { style: tmp3.container, children: items1 };
    const obj4 = { style: tmp3.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.lv1tce) };
    const Text = tmp(4832).Text;
    intl = tmp(1115).intl;
    items1 = [authStore2(Text, obj4), , ];
    const obj5 = { style: tmp3.subtitle, variant: "heading-sm/normal", color: "text-muted", children: intl2.string(intl3.t.x4OezN) };
    const Text2 = tmp(4832).Text;
    intl2 = tmp(1115).intl;
    items1[1] = authStore2(Text2, obj5);
    const obj6 = { discoverableGuilds: stateFromStoresArray };
    items1[2] = authStore2(RecommendedGuildsRow, obj6);
    items2 = [closure_15(View, obj3), authStore2(ICYMIShared.Separator, {})];
    tmp4 = closure_15(authStore3, obj2);
  }
  return tmp4;
};
