// Module ID: 16385
// Function ID: 127398
// Name: GuildSettingsServerTagUpsellCard
// Dependencies: [31, 27, 4052, 33, 4165, 689, 566, 4056, 11588, 11556, 4589, 4576, 11591, 4161, 1212, 4578, 15151, 2]
// Exports: default

// Module 16385 (GuildSettingsServerTagUpsellCard)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = { x: 0, y: 0.5 };
let closure_9 = { x: 1, y: 0.5 };
let closure_10 = ["rgba(88, 101, 242, 0.3)", "rgba(22, 26, 138, 0.3)"];
let closure_11 = ["rgba(151, 151, 159, 0.04)", "rgba(151, 151, 159, 0.04)"];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: "#29292D", overflow: "hidden", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_20, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.imageContainer = { height: 104, justifyContent: "center" };
_createForOfIteratorHelperLoose.textBlock = { alignItems: "center" };
_createForOfIteratorHelperLoose.centerText = { textAlign: "center" };
_createForOfIteratorHelperLoose.body = { maxWidth: 320 };
_createForOfIteratorHelperLoose.backgroundLayer = get_ActivityIndicator.StyleSheet.absoluteFillObject;
_createForOfIteratorHelperLoose.powerupImage = { width: "92%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx");

export default function GuildSettingsServerTagUpsellCard(guildId) {
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stateForGuild = outer1_5.getStateForGuild(guildId);
    let tmp2;
    if (null != stateForGuild) {
      tmp2 = stateForGuild.allPowerups[guildId(undefined, outer1_2[7]).GUILD_POWERUP_TAG_SKU_ID];
    }
    return tmp2;
  }, items1);
  const tmp3 = importDefault(11588)(stateFromStores, true);
  const items2 = [guildId];
  const effect = React.useEffect(() => {
    if (outer1_5.shouldFetchCatalogForGuild(guildId)) {
      const powerupCatalogForGuild = guildId(outer1_2[9]).fetchPowerupCatalogForGuild(guildId);
      const obj = guildId(outer1_2[9]);
    }
  }, items2);
  obj = { style: tmp.card };
  obj = { style: tmp.backgroundLayer, colors: items3, locations: [0, 0.7], start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, pointerEvents: "none" };
  items3 = ["rgba(41, 41, 45, 0)", "#29292D"];
  const items4 = [callback(importDefault(4589), obj), callback(importDefault(4589), { style: tmp.backgroundLayer, colors: closure_10, start: closure_8, end: closure_9, pointerEvents: "none" }), callback(importDefault(4589), { style: tmp.backgroundLayer, colors: closure_11, start: closure_8, end: closure_9, pointerEvents: "none" }), ];
  const obj3 = { spacing: importDefault(689).space.PX_16 };
  const obj4 = { style: tmp.imageContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  let tmp8 = null != tmp3;
  if (tmp8) {
    const obj5 = { imageUrl: tmp3, style: tmp.powerupImage };
    tmp8 = callback(importDefault(11591), obj5);
  }
  obj4.children = tmp8;
  const items5 = [callback(View, obj4), , ];
  const obj6 = { spacing: importDefault(689).space.PX_8, style: tmp.textBlock };
  const obj7 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText };
  const intl = guildId(1212).intl;
  obj7.children = intl.string(guildId(1212).t["2QmKZ2"]);
  const items6 = [callback(guildId(4161).Text, obj7), ];
  const obj8 = { variant: "text-sm/medium", color: "text-subtle" };
  const items7 = [, ];
  ({ centerText: arr8[0], body: arr8[1] } = tmp);
  obj8.style = items7;
  const intl2 = guildId(1212).intl;
  obj8.children = intl2.string(guildId(1212).t.Tg0fDm);
  items6[1] = callback(guildId(4161).Text, obj8);
  obj6.children = items6;
  items5[1] = callback2(guildId(4576).Stack, obj6);
  const obj9 = { variant: "primary", size: "lg", text: null, icon: null, iconPosition: "start" };
  const intl3 = guildId(1212).intl;
  obj9.text = intl3.string(guildId(1212).t.kMRDWs);
  obj9.icon = callback(guildId(15151).BoostTier2Icon, { color: "white" });
  obj9.onPress = guildId.onUnlockPress;
  items5[2] = callback(guildId(4578).Button, obj9);
  obj3.children = items5;
  items4[3] = callback2(guildId(4576).Stack, obj3);
  obj.children = items4;
  return callback2(View, obj);
};
