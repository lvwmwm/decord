// Module ID: 15125
// Function ID: 115083
// Dependencies: [31, 27, 3758, 653, 33, 4130, 4126, 689, 624, 8482, 8456, 14049, 5077, 5807, 15126, 1212, 2944, 7639, 1273, 15127, 4544, 2]

// Module 15125
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { wrapper: { flex: 1, paddingTop: 12 }, content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 } };
obj = {};
const merged = Object.assign(require("Text").TextStyleSheet["heading-md/bold"]);
obj["fontSize"] = 18;
obj["marginTop"] = 16;
obj["marginBottom"] = 8;
obj.headerText = obj;
obj.text = { textAlign: "center" };
obj.buttonWrapper = { marginTop: 24 };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, height: 44, paddingHorizontal: 20 };
obj.buttonPill = _createForOfIteratorHelperLoose;
obj.personalizeButtonWrapper = { marginHorizontal: 12, marginBottom: 12 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function ChannelsEmpty(guild) {
  let canCreateChannel;
  let canCustomizeGuild;
  guild = guild.guild;
  const tmp = callback2();
  let obj = guild(624);
  const items = [_isNativeReflectConstruct];
  const items1 = [guild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ canCustomizeGuild: outer1_6.can(outer1_7.MANAGE_GUILD, guild), canCreateChannel: outer1_6.can(outer1_7.MANAGE_CHANNELS, guild) }), items1);
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  const items2 = [guild.id];
  const items3 = [guild.id];
  const callback = importAllResult.useCallback(() => {
    outer1_1(outer1_2[9]).open(guild.id);
  }, items2);
  const callback1 = importAllResult.useCallback(() => {
    outer1_1(outer1_2[10]).open(null, guild.id, null, null);
  }, items3);
  let obj1 = guild(14049);
  const youBarTotalHeight = obj1.useYouBarTotalHeight(16);
  let obj2 = guild(5077);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  if (isFavoritesGuildIdResult) {
    let tmp7Result = tmp7(guild(5807).FavoritesSpotIllustration, { width: 192, height: 108 });
  } else {
    obj = { source: importDefault(15126) };
    tmp7Result = tmp7(closure_5, obj);
  }
  const intl = guild(1212).intl;
  const string = intl.string;
  if (isFavoritesGuildIdResult) {
    let stringResult = string(importDefault(2944)["wh+Rz1"]);
  } else {
    stringResult = string(guild(1212).t.o4s29v);
  }
  const intl2 = guild(1212).intl;
  const string2 = intl2.string;
  if (isFavoritesGuildIdResult) {
    let string2Result = string2(importDefault(2944)["+SuGKb"]);
  } else {
    string2Result = string2(guild(1212).t.iypvFu);
  }
  obj = { style: items4 };
  items4 = [tmp.wrapper, { paddingBottom: youBarTotalHeight }];
  if (canCustomizeGuild) {
    obj1 = { style: tmp.personalizeButtonWrapper };
    obj2 = {};
    const obj3 = { source: importDefault(15127), disableColor: true };
    obj2.icon = callback(guild(1273).Icon, obj3);
    const intl3 = guild(1212).intl;
    obj2.label = intl3.string(guild(1212).t["Yhi9/N"]);
    obj2.onPress = callback;
    obj1.children = callback(guild(7639).RowButton, obj2);
    canCustomizeGuild = callback(closure_4, obj1);
  }
  const items5 = [canCustomizeGuild, ];
  const obj4 = { style: tmp.content };
  const items6 = [tmp7Result, , , ];
  const obj5 = { color: "mobile-text-heading-primary", variant: "heading-md/bold" };
  const items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  obj5.style = items7;
  obj5.children = stringResult;
  items6[1] = callback(guild(4126).Text, obj5);
  const obj6 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: string2Result };
  items6[2] = callback(guild(4126).Text, obj6);
  if (canCreateChannel) {
    const obj7 = { style: tmp.buttonWrapper };
    const obj8 = { shrink: true, size: "md", pillStyle: tmp.buttonPill };
    const intl4 = guild(1212).intl;
    obj8.text = intl4.string(guild(1212).t["63PyJQ"]);
    obj8.onPress = callback1;
    obj7.children = callback(guild(4544).BaseTextButton, obj8);
    canCreateChannel = callback(closure_4, obj7);
  }
  items6[3] = canCreateChannel;
  obj4.children = items6;
  items5[1] = closure_9(closure_4, obj4);
  obj.children = items5;
  return closure_9(closure_4, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default memoResult;
