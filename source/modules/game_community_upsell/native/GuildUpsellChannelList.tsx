// Module ID: 14973
// Function ID: 112688
// Name: GuildUpsellChannelList
// Dependencies: []
// Exports: default

// Module 14973 (GuildUpsellChannelList)
let closure_4 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_6 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.PANEL_BG };
obj.container = obj;
const obj1 = { transformOrigin: null, accessibilityLabel: null, accessible: null, marginHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.header = obj1;
obj.headerTitle = { flex: 1 };
const obj2 = { "Null": "<string:1895825670>", "Null": "type", "Null": "<string:33627458>", gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.twoColumnRow = obj2;
obj.listContainer = { flex: 1 };
const tmp2 = arg1(dependencyMap[4]);
obj.subheaderWrapper = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
const obj3 = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
obj.createCard = { backgroundColor: importDefault(dependencyMap[6]).colors.BG_SURFACE_RAISED, gap: importDefault(dependencyMap[6]).space.PX_4, marginBottom: importDefault(dependencyMap[6]).space.PX_24 };
const obj4 = { backgroundColor: importDefault(dependencyMap[6]).colors.BG_SURFACE_RAISED, gap: importDefault(dependencyMap[6]).space.PX_4, marginBottom: importDefault(dependencyMap[6]).space.PX_24 };
obj.descriptionSpacing = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
const obj5 = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
obj.joinSection = { gap: importDefault(dependencyMap[6]).space.PX_4 };
let closure_10 = obj.createStyles(obj);
const obj6 = { gap: importDefault(dependencyMap[6]).space.PX_4 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellChannelList.tsx");

export default function GuildUpsellChannelList(style) {
  style = style.style;
  const tmp = callback2();
  const arg1 = tmp;
  const GameCommunityUpsellMultiExperiment = arg1(dependencyMap[7]).GameCommunityUpsellMultiExperiment;
  const visualVariant = GameCommunityUpsellMultiExperiment.useConfig({ location: "GuildUpsellChannelList" }).visualVariant;
  const importDefault = visualVariant;
  const effect = React.useEffect(() => {
    let arr = Array.from(store.getLastFetchedGameIds());
    arr = Array.from(store.getDismissedGuildIds());
    const mobileGameCommunities = tmp(youBarTotalHeight[8]).fetchMobileGameCommunities(arr, arr);
  }, []);
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const presentableUpsellGuilds = store.getPresentableUpsellGuilds();
    let num = 20;
    if ("one-column" === visualVariant) {
      num = 8;
    }
    return presentableUpsellGuilds.slice(0, num);
  });
  const items1 = [visualVariant];
  const callback = React.useCallback((guild_id, game_id) => {
    let obj = callback1(youBarTotalHeight[8]);
    obj.dismissGuild(guild_id);
    obj = { game_id, guild_id, variant: visualVariant };
    visualVariant(youBarTotalHeight[10]).track(constants.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    visualVariant(youBarTotalHeight[11]).openCreateGuildModal();
  }, []);
  const importAll = callback1;
  const items2 = [callback1, , , , ];
  ({ subheaderWrapper: arr4[1], createCard: arr4[2], descriptionSpacing: arr4[3], joinSection: arr4[4] } = tmp);
  const memo = React.useMemo(() => {
    let obj = { style: tmp.subheaderWrapper };
    obj = { style: tmp.createCard };
    obj = {};
    const intl = tmp(youBarTotalHeight[14]).intl;
    obj.children = intl.string(tmp(youBarTotalHeight[14]).t.B44MTm);
    const items = [callback(tmp(youBarTotalHeight[13]).Text, obj), , ];
    const obj1 = { style: tmp.descriptionSpacing };
    const intl2 = tmp(youBarTotalHeight[14]).intl;
    obj1.children = intl2.string(tmp(youBarTotalHeight[14]).t.l0tmhq);
    items[1] = callback(tmp(youBarTotalHeight[13]).Text, obj1);
    const obj2 = { <string:3562165089>: 16777601, <string:1383310252>: 44349251, <string:3767060185>: 44348928, <string:74212417>: 30645248, <string:2982962944>: 1196491008 };
    const intl3 = tmp(youBarTotalHeight[14]).intl;
    obj2.text = intl3.string(tmp(youBarTotalHeight[14]).t.CumH4u);
    obj2.onPress = callback1;
    items[2] = callback(tmp(youBarTotalHeight[15]).Button, obj2);
    obj.children = items;
    const items1 = [callback2(tmp(youBarTotalHeight[12]).Card, obj), ];
    const obj3 = { style: tmp.joinSection };
    const obj4 = {};
    const intl4 = tmp(youBarTotalHeight[14]).intl;
    obj4.children = intl4.string(tmp(youBarTotalHeight[14]).t.rJRote);
    const items2 = [callback(tmp(youBarTotalHeight[13]).Text, obj4), ];
    const obj5 = { cachedAt: true, edpbxy: true, style: tmp.descriptionSpacing };
    const intl5 = tmp(youBarTotalHeight[14]).intl;
    obj5.children = intl5.string(tmp(youBarTotalHeight[14]).t.pJT2DK);
    items2[1] = callback(tmp(youBarTotalHeight[13]).Text, obj5);
    obj3.children = items2;
    items1[1] = callback2(closure_5, obj3);
    obj.children = items1;
    return callback2(closure_5, obj);
  }, items2);
  let obj1 = arg1(dependencyMap[16]);
  const youBarTotalHeight = obj1.useYouBarTotalHeight();
  const dependencyMap = youBarTotalHeight;
  const items3 = [youBarTotalHeight];
  const memo1 = React.useMemo(() => ({ paddingHorizontal: visualVariant(youBarTotalHeight[6]).space.PX_16, paddingBottom: visualVariant(youBarTotalHeight[6]).space.PX_16 + youBarTotalHeight }), items3);
  if (0 === stateFromStoresArray.length) {
    obj = {};
    const items4 = [tmp.container, style];
    obj.style = items4;
    obj.children = callback(arg1(dependencyMap[17]).GuildsEmptyContent, {});
    let tmp21Result = callback(View, obj);
  } else {
    obj = {};
    const items5 = [tmp.container, style];
    obj.style = items5;
    obj1 = { style: tmp.header };
    const obj2 = { style: tmp.headerTitle };
    const intl = arg1(dependencyMap[14]).intl;
    obj2.children = intl.string(arg1(dependencyMap[14]).t.7hB4kg);
    obj1.children = callback(arg1(dependencyMap[13]).Text, obj2);
    const items6 = [callback(View, obj1), ];
    const obj3 = { style: tmp.listContainer };
    let tmp11 = null;
    if ("one-column" === visualVariant) {
      const obj4 = { suggestedGuilds: stateFromStoresArray, contentContainerStyle: memo1, onDismiss: callback, subheader: memo };
      tmp11 = callback(arg1(dependencyMap[18]).OneColumnGuildUpsellList, obj4);
    }
    const items7 = [tmp11, ];
    let tmp12 = null;
    if ("two-column" === visualVariant) {
      const obj5 = { suggestedGuilds: stateFromStoresArray, contentContainerStyle: memo1, rowStyle: tmp.twoColumnRow, onDismiss: callback, subheader: memo };
      tmp12 = callback(arg1(dependencyMap[18]).TwoColumnGuildUpsellList, obj5);
    }
    items7[1] = tmp12;
    obj3.children = items7;
    items6[1] = closure_9(View, obj3);
    obj.children = items6;
    tmp21Result = tmp21(tmp22, obj);
  }
  return tmp21Result;
};
