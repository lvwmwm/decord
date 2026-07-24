// Module ID: 16323
// Function ID: 127027
// Name: GuildSettingsServerTagUpsellCard
// Dependencies: [31, 27, 4017, 33, 4130, 689, 566, 4021, 11582, 11550, 8063, 4554, 4541, 11585, 4126, 1212, 4543, 15089, 2]
// Exports: default

// Module 16323 (GuildSettingsServerTagUpsellCard)
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
  const tmp3 = importDefault(11582)(stateFromStores, true);
  const items2 = [guildId];
  const effect = React.useEffect(() => {
    if (outer1_5.shouldFetchCatalogForGuild(guildId)) {
      const powerupCatalogForGuild = guildId(outer1_2[9]).fetchPowerupCatalogForGuild(guildId);
      const obj = guildId(outer1_2[9]);
    }
  }, items2);
  obj = { style: tmp.card };
  obj = { style: tmp.backgroundLayer, preserveAspectRatio: "none", viewBox: "0 0 100 100", pointerEvents: "none" };
  const obj1 = {};
  const obj2 = { id: "serverTagUpsellVignette", cx: "50%", cy: "100%", rx: "140.02%", ry: "100%", fx: "50%", fy: "100%" };
  const items3 = [callback(guildId(8063).Stop, { offset: "60%", stopColor: "#29292D", stopOpacity: 1 }), callback(guildId(8063).Stop, { offset: "100%", stopColor: "#29292D", stopOpacity: 0 })];
  obj2.children = items3;
  obj1.children = callback2(guildId(8063).RadialGradient, obj2);
  const items4 = [callback(guildId(8063).Defs, obj1), callback(guildId(8063).Rect, { x: "0", y: "0", width: "100", height: "100", fill: "url(#serverTagUpsellVignette)" })];
  obj.children = items4;
  const items5 = [callback2(importDefault(8063), obj), callback(importDefault(4554), { style: tmp.backgroundLayer, colors: closure_10, start: closure_8, end: closure_9, pointerEvents: "none" }), callback(importDefault(4554), { style: tmp.backgroundLayer, colors: closure_11, start: closure_8, end: closure_9, pointerEvents: "none" }), ];
  const obj5 = { spacing: importDefault(689).space.PX_16 };
  const obj6 = { style: tmp.imageContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  let tmp9 = null != tmp3;
  if (tmp9) {
    const obj7 = { imageUrl: tmp3, style: tmp.powerupImage };
    tmp9 = callback(importDefault(11585), obj7);
  }
  obj6.children = tmp9;
  const items6 = [callback(View, obj6), , ];
  const obj8 = { spacing: importDefault(689).space.PX_8, style: tmp.textBlock };
  const obj9 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText };
  const intl = guildId(1212).intl;
  obj9.children = intl.string(guildId(1212).t["2QmKZ2"]);
  const items7 = [callback(guildId(4126).Text, obj9), ];
  const obj10 = { variant: "text-sm/medium", color: "text-subtle" };
  const items8 = [, ];
  ({ centerText: arr9[0], body: arr9[1] } = tmp);
  obj10.style = items8;
  const intl2 = guildId(1212).intl;
  obj10.children = intl2.string(guildId(1212).t.Tg0fDm);
  items7[1] = callback(guildId(4126).Text, obj10);
  obj8.children = items7;
  items6[1] = callback2(guildId(4541).Stack, obj8);
  const obj11 = { variant: "primary", size: "lg", text: null, icon: null, iconPosition: "start" };
  const intl3 = guildId(1212).intl;
  obj11.text = intl3.string(guildId(1212).t.kMRDWs);
  obj11.icon = callback(guildId(15089).BoostTier2Icon, { color: "white" });
  obj11.onPress = guildId.onUnlockPress;
  items6[2] = callback(guildId(4543).Button, obj11);
  obj5.children = items6;
  items5[3] = callback2(guildId(4541).Stack, obj5);
  obj.children = items5;
  return callback2(View, obj);
};
