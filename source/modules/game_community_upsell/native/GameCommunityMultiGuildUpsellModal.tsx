// Module ID: 14966
// Function ID: 112633
// Name: trackImpressionForCard
// Dependencies: []
// Exports: default

// Module 14966 (trackImpressionForCard)
function trackImpressionForCard(current, guild_id, game_id, variant, location_stack) {
  current = current.current;
  current.add(guild_id.id);
  let obj = guild_id(dependencyMap[8]);
  obj = { type: guild_id(dependencyMap[9]).ImpressionTypes.PANE, name: guild_id(dependencyMap[9]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD, properties: obj };
  obj = { game_id, guild_id: guild_id.id, location_stack, variant };
  obj.trackImpression(obj);
}
function useOnViewableItemsChanged(stateFromStoresObject, arg1, analyticsLocations) {
  arg1 = stateFromStoresObject;
  const importDefault = arg1;
  const importAll = analyticsLocations;
  let closure_3 = React.useRef(new Set());
  const set = new Set();
  const focusEffect = arg1(closure_3[10]).useFocusEffect(React.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const items = [stateFromStoresObject, analyticsLocations, arg1];
  return React.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const item = viewableItems.forEach((item) => {
      item = item.item;
      if (null != item) {
        let tmp = "left" in item && null != item.left;
        if (tmp) {
          const current = ref.current;
          tmp = !current.has(item.left.id);
        }
        if (tmp) {
          callback(ref, item.left, closure_0[item.left.id], closure_1, closure_2);
        }
        let tmp9 = "right" in item && null != item.right;
        if (tmp9) {
          const current2 = ref.current;
          tmp9 = !current2.has(item.right.id);
        }
        if (tmp9) {
          callback(ref, item.right, closure_0[item.right.id], closure_1, closure_2);
        }
        let tmp17 = "id" in item && null != item.id;
        if (tmp17) {
          const current3 = ref.current;
          tmp17 = !current3.has(item.id);
        }
        if (tmp17) {
          callback(ref, item, closure_0[item.id], closure_1, closure_2);
        }
      }
    });
  }, items);
}
class OneColumnGuildUpsellList {
  constructor(arg0) {
    onDismiss = global.onDismiss;
    arg1 = onDismiss;
    ({ suggestedGuilds, contentContainerStyle, subheader } = global);
    callback = closure_4.useCallback((id) => id.id, []);
    obj = arg1(dependencyMap[11]);
    items = [];
    items[0] = closure_6;
    stateFromStoresObject = obj.useStateFromStoresObject(items, () => guildGameIds.getGuildGameIds());
    importDefault = stateFromStoresObject;
    tmp3 = importDefault(dependencyMap[12]);
    items1 = [, ];
    items1[0] = onDismiss;
    items1[1] = stateFromStoresObject;
    callback1 = closure_4.useCallback((item) => {
      item = item.item;
      let tmp = null;
      const obj = { guild: item, gameId: stateFromStoresObject[item.id], variant: "one-column" };
      if (tmp2) {
        tmp = onDismiss;
      }
      obj.onDismiss = tmp;
      return closure_9(stateFromStoresObject(closure_3[14]), obj, item.id);
    }, items1);
    tmp5 = useOnViewableItemsChanged(stateFromStoresObject, "one-column", tmp3(importDefault(dependencyMap[13]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations);
    obj = { onViewableItemsChanged: tmp5, viewabilityConfig: f112649, contentContainerStyle, keyExtractor: callback, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: callback1 };
    return jsx(arg1(dependencyMap[15]).FlashList, obj);
  }
}
class TwoColumnGuildUpsellList {
  constructor(arg0) {
    suggestedGuilds = global.suggestedGuilds;
    arg1 = suggestedGuilds;
    rowStyle = global.rowStyle;
    importDefault = rowStyle;
    onDismiss = global.onDismiss;
    importAll = onDismiss;
    items = [];
    items[0] = suggestedGuilds;
    ({ contentContainerStyle, subheader } = global);
    memo = closure_4.useMemo(() => suggestedGuilds.reduce((arr, left) => {
      if (arg2 % 2 === 0) {
        const obj = { left, right: closure_0[arg2 + 1] };
        arr.push(obj);
      }
      return arr;
    }, []), items);
    callback = closure_4.useCallback((left) => {
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
    obj = arg1(dependencyMap[11]);
    items1 = [];
    items1[0] = closure_6;
    stateFromStoresObject = obj.useStateFromStoresObject(items1, () => guildGameIds.getGuildGameIds());
    dependencyMap = stateFromStoresObject;
    tmp4 = importDefault(dependencyMap[12]);
    items2 = [, , ];
    items2[0] = rowStyle;
    items2[1] = onDismiss;
    items2[2] = stateFromStoresObject;
    tmp5 = useOnViewableItemsChanged(stateFromStoresObject, "two-column", tmp4(importDefault(dependencyMap[13]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations);
    callback1 = closure_4.useCallback((item) => {
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
        tmp10Result = callback(rowStyle(stateFromStoresObject[14]), obj);
        const tmp10 = callback;
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
        let tmp19Result = callback(rowStyle(stateFromStoresObject[14]), obj);
        const tmp19 = callback;
        const tmp22 = rowStyle(stateFromStoresObject[14]);
      } else {
        const obj1 = {};
        const obj2 = { flex: 1 };
        obj1.style = obj2;
        tmp19Result = callback(closure_5, obj1);
      }
      items[1] = tmp19Result;
      obj.children = items;
      return closure_10(closure_5, obj);
    }, items2);
    obj = { onViewableItemsChanged: tmp5, viewabilityConfig: f112649, contentContainerStyle, keyExtractor: callback, data: memo, ListHeaderComponent: subheader, renderItem: callback1 };
    return jsx(arg1(dependencyMap[15]).FlashList, obj);
  }
}
let closure_4 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_6 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const MIN_HEADER_HEIGHT = arg1(dependencyMap[4]).MIN_HEADER_HEIGHT;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).createStyles((paddingBottom, paddingTop) => {
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
  obj.container = obj;
  obj = { fontSize: null, flex: "stretch", overflow: 16, paddingTop, minHeight: paddingTop + MIN_HEADER_HEIGHT, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8 };
  obj.headerWrapper = obj;
  obj.headerTitle = {};
  obj.subtitle = { alignSelf: "center", marginHorizontal: importDefault(dependencyMap[7]).space.PX_24, marginBottom: importDefault(dependencyMap[7]).space.PX_24, marginTop: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, textAlign: "center" };
  const obj1 = { alignSelf: "center", marginHorizontal: importDefault(dependencyMap[7]).space.PX_24, marginBottom: importDefault(dependencyMap[7]).space.PX_24, marginTop: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, textAlign: "center" };
  obj.listContent = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingBottom };
  const obj3 = { Symbol: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000179126287433, hash: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014283308092159475, Reflect: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001801821707945116, gap: importDefault(dependencyMap[7]).space.PX_16 };
  obj.twoColumnRow = obj3;
  return obj;
});
let closure_12 = { size: "mobile-text-heading-primary", track: "heading-lg/bold" };
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellModal.tsx");

export default function GameCommunityMultiGuildUpsellModal(onClose) {
  let bottom;
  let top;
  ({ top, bottom } = importDefault(dependencyMap[16])());
  let obj = arg1(dependencyMap[17]);
  const gradientTop = obj.useGradientTop();
  const arg1 = gradientTop;
  const tmp3 = callback3(bottom, top);
  const importDefault = tmp3;
  const GameCommunityUpsellMultiExperiment = arg1(dependencyMap[18]).GameCommunityUpsellMultiExperiment;
  const visualVariant = GameCommunityUpsellMultiExperiment.useConfig({ location: "GameCommunityMultiGuildUpsellModal" }).visualVariant;
  const importAll = visualVariant;
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_6];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => presentableUpsellGuilds.getPresentableUpsellGuilds());
  const items1 = [tmp3.headerWrapper, gradientTop];
  const items2 = [tmp3.subtitle];
  const memo = React.useMemo(() => {
    const items = [tmp3.headerWrapper, gradientTop];
    return items;
  }, items1);
  const memo1 = React.useMemo(() => {
    const obj = { style: tmp3.subtitle };
    const intl = gradientTop(closure_3[20]).intl;
    obj.children = intl.string(gradientTop(closure_3[20]).t.PH+G/A);
    return callback(gradientTop(closure_3[19]).Text, obj);
  }, items2);
  const items3 = [visualVariant];
  const callback = React.useCallback((guild_id, game_id) => {
    let obj = visualVariant(closure_3[21]);
    obj.dismissGuild(guild_id);
    obj = { game_id, guild_id, variant: visualVariant };
    tmp3(closure_3[22]).track(constants.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj);
  }, items3);
  obj = { style: tmp3.container };
  obj = { style: memo };
  obj1 = { source: importDefault(dependencyMap[24]), onPress: onClose.onClose };
  const intl = arg1(dependencyMap[20]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[20]).t.cpT0Cq);
  const items4 = [callback(arg1(dependencyMap[23]).HeaderIconButton, obj1), , ];
  const obj2 = { style: tmp3.headerTitle };
  const obj3 = { -9223372036854775808: 201326592, 0: 1358954496, 0: -126609849 };
  const intl2 = arg1(dependencyMap[20]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[20]).t.fs+2Kn);
  obj2.children = callback(arg1(dependencyMap[19]).Text, obj3);
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
