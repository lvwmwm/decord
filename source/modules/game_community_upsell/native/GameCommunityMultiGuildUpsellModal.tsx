// Module ID: 15093
// Function ID: 114878
// Name: trackImpressionForCard
// Dependencies: [31, 27, 14590, 653, 9123, 33, 4130, 689, 8559, 480, 1457, 566, 5464, 5484, 15094, 7879, 1557, 8829, 12637, 4126, 1212, 15090, 675, 9122, 9130, 2]
// Exports: default

// Module 15093 (trackImpressionForCard)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { MIN_HEADER_HEIGHT } from "MIN_HEADER_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function trackImpressionForCard(current, guild_id, game_id, variant, location_stack) {
  current = current.current;
  current.add(guild_id.id);
  let obj = require(8559) /* trackImpression */;
  obj = { type: require(480) /* isThrottled */.ImpressionTypes.PANE, name: require(480) /* isThrottled */.ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD, properties: obj };
  obj = { game_id, guild_id: guild_id.id, location_stack, variant };
  obj.trackImpression(obj);
}
function useOnViewableItemsChanged(stateFromStoresObject, arg1, analyticsLocations) {
  const _require = stateFromStoresObject;
  let closure_1 = arg1;
  let closure_2 = analyticsLocations;
  const dependencyMap = React.useRef(new Set());
  const set = new Set();
  const focusEffect = _require(1457).useFocusEffect(React.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const items = [stateFromStoresObject, analyticsLocations, arg1];
  return React.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      item = item.item;
      if (null != item) {
        let tmp = "left" in item && null != item.left;
        if (tmp) {
          const current = outer1_3.current;
          tmp = !current.has(item.left.id);
        }
        if (tmp) {
          outer2_13(outer1_3, item.left, outer1_0[item.left.id], outer1_1, outer1_2);
        }
        let tmp9 = "right" in item && null != item.right;
        if (tmp9) {
          const current2 = outer1_3.current;
          tmp9 = !current2.has(item.right.id);
        }
        if (tmp9) {
          outer2_13(outer1_3, item.right, outer1_0[item.right.id], outer1_1, outer1_2);
        }
        let tmp17 = "id" in item && null != item.id;
        if (tmp17) {
          const current3 = outer1_3.current;
          tmp17 = !current3.has(item.id);
        }
        if (tmp17) {
          outer2_13(outer1_3, item, outer1_0[item.id], outer1_1, outer1_2);
        }
      }
    });
  }, items);
}
class OneColumnGuildUpsellList {
  constructor(arg0) {
    onDismiss = global.onDismiss;
    ({ suggestedGuilds, contentContainerStyle, subheader } = global);
    callback = result.useCallback((id) => id.id, []);
    obj = require("initialize");
    items = [];
    items[0] = c6;
    stateFromStoresObject = obj.useStateFromStoresObject(items, () => outer1_6.getGuildGameIds());
    closure_1 = stateFromStoresObject;
    tmp3 = require("mergeLocations");
    items1 = [, ];
    items1[0] = onDismiss;
    items1[1] = stateFromStoresObject;
    callback1 = result.useCallback((item) => {
      item = item.item;
      let tmp = null;
      const obj = { guild: item, gameId: stateFromStoresObject[item.id], variant: "one-column" };
      if (tmp2) {
        tmp = onDismiss;
      }
      obj.onDismiss = tmp;
      return outer1_9(stateFromStoresObject(outer1_3[14]), obj, item.id);
    }, items1);
    tmp5 = useOnViewableItemsChanged(stateFromStoresObject, "one-column", tmp3(require("QUICK_SWITCHER").GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations);
    obj = { onViewableItemsChanged: tmp5, viewabilityConfig: f114894, contentContainerStyle, keyExtractor: callback, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: callback1 };
    return jsx(require("defaultMVCPConfig").FlashList, obj);
  }
}
class TwoColumnGuildUpsellList {
  constructor(arg0) {
    suggestedGuilds = global.suggestedGuilds;
    rowStyle = global.rowStyle;
    onDismiss = global.onDismiss;
    items = [];
    items[0] = suggestedGuilds;
    ({ contentContainerStyle, subheader } = global);
    memo = result.useMemo(() => suggestedGuilds.reduce((arr, left) => {
      if (arg2 % 2 === 0) {
        const obj = { left, right: outer1_0[arg2 + 1] };
        arr.push(obj);
      }
      return arr;
    }, []), items);
    callback = result.useCallback((left) => {
      left = left.left;
      let id;
      if (null != left) {
        id = left.id;
      }
      let str = "";
      if (null != id) {
        str = id;
      }
      const right = left.right;
      let id1;
      if (null != right) {
        id1 = right.id;
      }
      let str2 = "";
      if (null != id1) {
        str2 = id1;
      }
      return "" + str + "-" + str2;
    }, []);
    obj = require("initialize");
    items1 = [];
    items1[0] = c6;
    stateFromStoresObject = obj.useStateFromStoresObject(items1, () => outer1_6.getGuildGameIds());
    closure_3 = stateFromStoresObject;
    tmp4 = require("mergeLocations");
    items2 = [, , ];
    items2[0] = rowStyle;
    items2[1] = onDismiss;
    items2[2] = stateFromStoresObject;
    tmp5 = useOnViewableItemsChanged(stateFromStoresObject, "two-column", tmp4(require("QUICK_SWITCHER").GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations);
    callback1 = result.useCallback((item) => {
      item = item.item;
      const left = item.left;
      let id;
      if (null != left) {
        id = left.id;
      }
      let tmp2 = null != id;
      if (tmp2) {
        tmp2 = null != stateFromStoresObject[item.left.id];
      }
      const right = item.right;
      let id1;
      if (null != right) {
        id1 = right.id;
      }
      let tmp5 = null != id1;
      if (tmp5) {
        tmp5 = null != stateFromStoresObject[item.right.id];
      }
      let obj = { style: rowStyle };
      let tmp10Result = null != item.left;
      if (tmp10Result) {
        obj = { guild: item.left, gameId: stateFromStoresObject[item.left.id], variant: "two-column" };
        let tmp15 = null;
        if (tmp2) {
          tmp15 = onDismiss;
        }
        obj.onDismiss = tmp15;
        tmp10Result = outer1_9(rowStyle(stateFromStoresObject[14]), obj);
        const tmp10 = outer1_9;
        const tmp13 = rowStyle(stateFromStoresObject[14]);
      }
      const items = [tmp10Result, ];
      if (null != item.right) {
        obj = { guild: item.right, gameId: stateFromStoresObject[item.right.id], variant: "two-column" };
        let tmp24 = null;
        if (tmp5) {
          tmp24 = onDismiss;
        }
        obj.onDismiss = tmp24;
        let tmp19Result = outer1_9(rowStyle(stateFromStoresObject[14]), obj);
        const tmp19 = outer1_9;
        const tmp22 = rowStyle(stateFromStoresObject[14]);
      } else {
        const obj1 = {};
        const obj2 = { flex: 1 };
        obj1.style = obj2;
        tmp19Result = outer1_9(outer1_5, obj1);
      }
      items[1] = tmp19Result;
      obj.children = items;
      return outer1_10(outer1_5, obj);
    }, items2);
    obj = { onViewableItemsChanged: tmp5, viewabilityConfig: f114894, contentContainerStyle, keyExtractor: callback, data: memo, ListHeaderComponent: subheader, renderItem: callback1 };
    return jsx(require("defaultMVCPConfig").FlashList, obj);
  }
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((paddingBottom, paddingTop) => {
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj.container = obj;
  obj = { flexDirection: "row", alignItems: "center", flexShrink: 0, paddingTop, minHeight: paddingTop + MIN_HEADER_HEIGHT, paddingHorizontal: importDefault(689).space.PX_8 };
  obj.headerWrapper = obj;
  obj.headerTitle = { flex: 1, alignItems: "center", justifyContent: "center" };
  obj.subtitle = { alignSelf: "center", marginHorizontal: importDefault(689).space.PX_24, marginBottom: importDefault(689).space.PX_24, marginTop: importDefault(689).space.PX_8, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, textAlign: "center" };
  const obj1 = { alignSelf: "center", marginHorizontal: importDefault(689).space.PX_24, marginBottom: importDefault(689).space.PX_24, marginTop: importDefault(689).space.PX_8, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, textAlign: "center" };
  obj.listContent = { paddingHorizontal: importDefault(689).space.PX_16, paddingBottom };
  const obj3 = { flexDirection: "row", gap: importDefault(689).space.PX_16, flex: 1 };
  obj.twoColumnRow = obj3;
  return obj;
});
let closure_12 = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellModal.tsx");

export default function GameCommunityMultiGuildUpsellModal(onClose) {
  let bottom;
  let top;
  ({ top, bottom } = importDefault(1557)());
  let obj = gradientTop(8829);
  gradientTop = obj.useGradientTop();
  const tmp3 = callback3(bottom, top);
  importDefault = tmp3;
  const GameCommunityUpsellMultiExperiment = gradientTop(12637).GameCommunityUpsellMultiExperiment;
  const visualVariant = GameCommunityUpsellMultiExperiment.useConfig({ location: "GameCommunityMultiGuildUpsellModal" }).visualVariant;
  let obj1 = gradientTop(566);
  let items = [_isNativeReflectConstruct];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => outer1_6.getPresentableUpsellGuilds());
  const items1 = [tmp3.headerWrapper, gradientTop];
  const items2 = [tmp3.subtitle];
  const memo = React.useMemo(() => {
    const items = [tmp3.headerWrapper, gradientTop];
    return items;
  }, items1);
  const memo1 = React.useMemo(() => {
    const obj = { variant: "text-sm/medium", color: "text-muted", style: tmp3.subtitle };
    const intl = gradientTop(outer1_3[20]).intl;
    obj.children = intl.string(gradientTop(outer1_3[20]).t["PH+G/A"]);
    return outer1_9(gradientTop(outer1_3[19]).Text, obj);
  }, items2);
  const items3 = [visualVariant];
  const callback = React.useCallback((guild_id, game_id) => {
    let obj = visualVariant(outer1_3[21]);
    obj.dismissGuild(guild_id);
    obj = { game_id, guild_id, variant: visualVariant };
    tmp3(outer1_3[22]).track(outer1_7.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj);
  }, items3);
  obj = { style: tmp3.container };
  obj = { style: memo };
  obj1 = { source: importDefault(9130), onPress: onClose.onClose };
  let intl = gradientTop(1212).intl;
  obj1.accessibilityLabel = intl.string(gradientTop(1212).t.cpT0Cq);
  const items4 = [callback(gradientTop(9122).HeaderIconButton, obj1), , ];
  const obj2 = { style: tmp3.headerTitle };
  const obj3 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1 };
  const intl2 = gradientTop(1212).intl;
  obj3.children = intl2.string(gradientTop(1212).t["fs+2Kn"]);
  obj2.children = callback(gradientTop(4126).Text, obj3);
  items4[1] = callback(View, obj2);
  items4[2] = callback(View, { style: { width: 40 } });
  obj.children = items4;
  const items5 = [callback2(View, obj), ];
  const obj4 = { style: { flex: 1 } };
  let tmp11 = null;
  if ("one-column" === visualVariant) {
    const obj5 = { suggestedGuilds: stateFromStoresArray.slice(0, 8), contentContainerStyle: tmp3.listContent, subheader: memo1, onDismiss: callback };
    tmp11 = callback(OneColumnGuildUpsellList, obj5);
  }
  const items6 = [tmp11, ];
  let tmp14 = null;
  if ("two-column" === visualVariant) {
    const obj6 = { suggestedGuilds: stateFromStoresArray.slice(0, 20) };
    ({ listContent: obj10.contentContainerStyle, twoColumnRow: obj10.rowStyle } = tmp3);
    obj6.subheader = memo1;
    obj6.onDismiss = callback;
    tmp14 = callback(TwoColumnGuildUpsellList, obj6);
  }
  items6[1] = tmp14;
  obj4.children = items6;
  items5[1] = callback2(View, obj4);
  obj.children = items5;
  return callback2(View, obj);
};
export { OneColumnGuildUpsellList };
export { TwoColumnGuildUpsellList };
