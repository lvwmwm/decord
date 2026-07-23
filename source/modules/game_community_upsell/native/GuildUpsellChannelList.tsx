// Module ID: 15089
// Function ID: 114856
// Name: GuildUpsellChannelList
// Dependencies: [31, 27, 14590, 653, 33, 4130, 689, 12637, 15090, 566, 675, 11737, 5167, 4126, 1212, 4543, 13999, 15091, 15093, 2]
// Exports: default

// Module 15089 (GuildUpsellChannelList)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
let require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.PANEL_BG };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = obj1;
_createForOfIteratorHelperLoose.headerTitle = { flex: 1 };
let obj2 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_16, flex: 1 };
_createForOfIteratorHelperLoose.twoColumnRow = obj2;
_createForOfIteratorHelperLoose.listContainer = { flex: 1 };
_createForOfIteratorHelperLoose.subheaderWrapper = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.createCard = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BG_SURFACE_RAISED, gap: require("_createForOfIteratorHelperLoose").space.PX_4, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BG_SURFACE_RAISED, gap: require("_createForOfIteratorHelperLoose").space.PX_4, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.descriptionSpacing = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj5 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.joinSection = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj6 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellChannelList.tsx");

export default function GuildUpsellChannelList(style) {
  style = style.style;
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const GameCommunityUpsellMultiExperiment = require(youBarTotalHeight[7]).GameCommunityUpsellMultiExperiment;
  const visualVariant = GameCommunityUpsellMultiExperiment.useConfig({ location: "GuildUpsellChannelList" }).visualVariant;
  const effect = React.useEffect(() => {
    let arr = Array.from(outer1_6.getLastFetchedGameIds());
    arr = Array.from(outer1_6.getDismissedGuildIds());
    const mobileGameCommunities = tmp(youBarTotalHeight[8]).fetchMobileGameCommunities(arr, arr);
  }, []);
  let obj = require(youBarTotalHeight[9]);
  let items = [_isNativeReflectConstruct];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const presentableUpsellGuilds = outer1_6.getPresentableUpsellGuilds();
    let num = 20;
    if ("one-column" === visualVariant) {
      num = 8;
    }
    return presentableUpsellGuilds.slice(0, num);
  });
  let items1 = [visualVariant];
  const callback = React.useCallback((guild_id, game_id) => {
    let obj = callback1(youBarTotalHeight[8]);
    obj.dismissGuild(guild_id);
    obj = { game_id, guild_id, variant: visualVariant };
    visualVariant(youBarTotalHeight[10]).track(outer1_7.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    visualVariant(youBarTotalHeight[11]).openCreateGuildModal();
  }, []);
  let items2 = [callback1, , , , ];
  ({ subheaderWrapper: arr4[1], createCard: arr4[2], descriptionSpacing: arr4[3], joinSection: arr4[4] } = tmp);
  const memo = React.useMemo(() => {
    let obj = { style: tmp.subheaderWrapper };
    obj = { style: tmp.createCard };
    obj = { variant: "heading-md/bold", color: "mobile-text-heading-primary" };
    const intl = tmp(youBarTotalHeight[14]).intl;
    obj.children = intl.string(tmp(youBarTotalHeight[14]).t.B44MTm);
    const items = [outer1_8(tmp(youBarTotalHeight[13]).Text, obj), , ];
    const obj1 = { variant: "text-sm/medium", color: "text-default", style: tmp.descriptionSpacing };
    const intl2 = tmp(youBarTotalHeight[14]).intl;
    obj1.children = intl2.string(tmp(youBarTotalHeight[14]).t.l0tmhq);
    items[1] = outer1_8(tmp(youBarTotalHeight[13]).Text, obj1);
    const obj2 = { variant: "primary", size: "sm", text: null, onPress: null, grow: true };
    const intl3 = tmp(youBarTotalHeight[14]).intl;
    obj2.text = intl3.string(tmp(youBarTotalHeight[14]).t.CumH4u);
    obj2.onPress = callback1;
    items[2] = outer1_8(tmp(youBarTotalHeight[15]).Button, obj2);
    obj.children = items;
    const items1 = [outer1_9(tmp(youBarTotalHeight[12]).Card, obj), ];
    const obj3 = { style: tmp.joinSection };
    const obj4 = { variant: "heading-md/bold", color: "mobile-text-heading-primary" };
    const intl4 = tmp(youBarTotalHeight[14]).intl;
    obj4.children = intl4.string(tmp(youBarTotalHeight[14]).t.rJRote);
    const items2 = [outer1_8(tmp(youBarTotalHeight[13]).Text, obj4), ];
    const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.descriptionSpacing };
    const intl5 = tmp(youBarTotalHeight[14]).intl;
    obj5.children = intl5.string(tmp(youBarTotalHeight[14]).t.pJT2DK);
    items2[1] = outer1_8(tmp(youBarTotalHeight[13]).Text, obj5);
    obj3.children = items2;
    items1[1] = outer1_9(outer1_5, obj3);
    obj.children = items1;
    return outer1_9(outer1_5, obj);
  }, items2);
  let obj1 = require(youBarTotalHeight[16]);
  youBarTotalHeight = obj1.useYouBarTotalHeight();
  const items3 = [youBarTotalHeight];
  const memo1 = React.useMemo(() => ({ paddingHorizontal: visualVariant(youBarTotalHeight[6]).space.PX_16, paddingBottom: visualVariant(youBarTotalHeight[6]).space.PX_16 + youBarTotalHeight }), items3);
  if (0 === stateFromStoresArray.length) {
    obj = {};
    const items4 = [tmp.container, style];
    obj.style = items4;
    obj.children = callback(require(youBarTotalHeight[17]).GuildsEmptyContent, {});
    let tmp21Result = callback(View, obj);
  } else {
    obj = {};
    const items5 = [tmp.container, style];
    obj.style = items5;
    obj1 = { style: tmp.header };
    let obj2 = { style: tmp.headerTitle, color: "mobile-text-heading-primary", variant: "heading-lg/bold" };
    let intl = require(youBarTotalHeight[14]).intl;
    obj2.children = intl.string(require(youBarTotalHeight[14]).t["7hB4kg"]);
    obj1.children = callback(require(youBarTotalHeight[13]).Text, obj2);
    const items6 = [callback(View, obj1), ];
    let obj3 = { style: tmp.listContainer };
    let tmp11 = null;
    if ("one-column" === visualVariant) {
      let obj4 = { suggestedGuilds: stateFromStoresArray, contentContainerStyle: memo1, onDismiss: callback, subheader: memo };
      tmp11 = callback(require(youBarTotalHeight[18]).OneColumnGuildUpsellList, obj4);
    }
    const items7 = [tmp11, ];
    let tmp12 = null;
    if ("two-column" === visualVariant) {
      let obj5 = { suggestedGuilds: stateFromStoresArray, contentContainerStyle: memo1, rowStyle: tmp.twoColumnRow, onDismiss: callback, subheader: memo };
      tmp12 = callback(require(youBarTotalHeight[18]).TwoColumnGuildUpsellList, obj5);
    }
    items7[1] = tmp12;
    obj3.children = items7;
    items6[1] = closure_9(View, obj3);
    obj.children = items6;
    tmp21Result = tmp21(tmp22, obj);
  }
  return tmp21Result;
};
