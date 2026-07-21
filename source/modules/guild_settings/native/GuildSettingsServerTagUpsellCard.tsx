// Module ID: 16151
// Function ID: 124488
// Name: GuildSettingsServerTagUpsellCard
// Dependencies: []
// Exports: default

// Module 16151 (GuildSettingsServerTagUpsellCard)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = {};
let closure_9 = {};
let closure_10 = ["<string:1074462724>", "y"];
let closure_11 = [];
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xl, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_24, paddingTop: importDefault(dependencyMap[5]).space.PX_20, paddingBottom: importDefault(dependencyMap[5]).space.PX_24 };
obj.card = obj;
obj.imageContainer = {};
obj.textBlock = { alignItems: "center" };
obj.centerText = { textAlign: "center" };
obj.body = { maxWidth: 320 };
obj.backgroundLayer = tmp2.StyleSheet.absoluteFillObject;
obj.powerupImage = { width: "92%" };
let closure_12 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx");

export default function GuildSettingsServerTagUpsellCard(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stateForGuild = closure_5.getStateForGuild(guildId);
    let tmp2;
    if (null != stateForGuild) {
      tmp2 = stateForGuild.allPowerups[closure_0(undefined, closure_2[7]).GUILD_POWERUP_TAG_SKU_ID];
    }
    return tmp2;
  }, items1);
  const tmp3 = importDefault(dependencyMap[8])(stateFromStores, true);
  const items2 = [guildId];
  const effect = React.useEffect(() => {
    if (closure_5.shouldFetchCatalogForGuild(guildId)) {
      const powerupCatalogForGuild = guildId(closure_2[9]).fetchPowerupCatalogForGuild(guildId);
      const obj = guildId(closure_2[9]);
    }
  }, items2);
  obj = { style: tmp.card };
  obj = { style: tmp.backgroundLayer };
  const obj1 = {};
  const obj2 = {};
  const items3 = [callback(arg1(dependencyMap[10]).Stop, { "Bool(false)": 8, "Bool(false)": 300, "Bool(false)": "72%" }), callback(arg1(dependencyMap[10]).Stop, { "Bool(false)": "Frame Rate", "Bool(false)": "ADBE Posterize Time-0001", "Bool(false)": 1 })];
  obj2.children = items3;
  obj1.children = callback2(arg1(dependencyMap[10]).RadialGradient, obj2);
  const items4 = [callback(arg1(dependencyMap[10]).Defs, obj1), callback(arg1(dependencyMap[10]).Rect, { <string:1359503789>: "center", <string:1751376737>: "row", <string:2807217887>: "space-between", <string:1374019962>: 16, <string:39977987>: "center" })];
  obj.children = items4;
  const items5 = [callback2(importDefault(dependencyMap[10]), obj), callback(importDefault(dependencyMap[11]), { style: tmp.backgroundLayer, colors: closure_10, start: closure_8, end: closure_9, pointerEvents: "none" }), callback(importDefault(dependencyMap[11]), { style: tmp.backgroundLayer, colors: closure_11, start: closure_8, end: closure_9, pointerEvents: "none" }), ];
  const obj5 = { spacing: importDefault(dependencyMap[5]).space.PX_16 };
  const obj6 = { canSort: "none", GameDepthTier1SmallBadge: "contain", _monthsRegex: "password", style: tmp.imageContainer };
  let tmp9 = null != tmp3;
  if (tmp9) {
    const obj7 = { imageUrl: tmp3, style: tmp.powerupImage };
    tmp9 = callback(importDefault(dependencyMap[13]), obj7);
  }
  obj6.children = tmp9;
  const items6 = [callback(View, obj6), , ];
  const obj8 = { spacing: importDefault(dependencyMap[5]).space.PX_8, style: tmp.textBlock };
  const obj9 = { hasMaxConnections: "9dd37f954b23d7c3c7ed4428be93436f", isBoostOnlySubscription: "ClydeIcon", style: tmp.centerText };
  const intl = arg1(dependencyMap[15]).intl;
  obj9.children = intl.string(arg1(dependencyMap[15]).t.2QmKZ2);
  const items7 = [callback(arg1(dependencyMap[14]).Text, obj9), ];
  const obj10 = { hasMaxConnections: true, isBoostOnlySubscription: true };
  const items8 = [, ];
  ({ centerText: arr9[0], body: arr9[1] } = tmp);
  obj10.style = items8;
  const intl2 = arg1(dependencyMap[15]).intl;
  obj10.children = intl2.string(arg1(dependencyMap[15]).t.Tg0fDm);
  items7[1] = callback(arg1(dependencyMap[14]).Text, obj10);
  obj8.children = items7;
  items6[1] = callback2(arg1(dependencyMap[12]).Stack, obj8);
  const obj11 = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  obj11.text = intl3.string(arg1(dependencyMap[15]).t.kMRDWs);
  obj11.icon = callback(arg1(dependencyMap[17]).BoostTier2Icon, { color: "white" });
  obj11.onPress = guildId.onUnlockPress;
  items6[2] = callback(arg1(dependencyMap[16]).Button, obj11);
  obj5.children = items6;
  items5[3] = callback2(arg1(dependencyMap[12]).Stack, obj5);
  obj.children = items5;
  return callback2(View, obj);
};
