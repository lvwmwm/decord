// Module ID: 16143
// Function ID: 124427
// Name: GuildSettingsServerTagUpsellCard
// Dependencies: []
// Exports: default

// Module 16143 (GuildSettingsServerTagUpsellCard)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = { max: false, guildId: false };
let closure_9 = { max: 3211264, guildId: 2042617856 };
let closure_10 = [null, null];
let closure_11 = [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003835185184122267, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003834409859030007];
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xl, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_24, paddingTop: importDefault(dependencyMap[5]).space.PX_20, paddingBottom: importDefault(dependencyMap[5]).space.PX_24 };
obj.card = obj;
obj.imageContainer = { items: "<string:17561153>", width: "<string:2673934592>" };
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
  const obj2 = { "Bool(true)": "\u{1FAF1}\u{1F3FC}\u200D\u{1FAF2}\u{1F3FB}", "Bool(true)": true, "Bool(true)": null, "Bool(true)": 14, "Bool(true)": "perks", "Bool(true)": "message", "Bool(true)": null };
  const items3 = [callback(arg1(dependencyMap[10]).Stop, { <string:3813802319>: true, <string:1629385330>: true, <string:2053329160>: true }), callback(arg1(dependencyMap[10]).Stop, { <string:3813802319>: "Frame Rate", <string:1629385330>: "ADBE Posterize Time-0001", <string:2053329160>: 1 })];
  obj2.children = items3;
  obj1.children = callback2(arg1(dependencyMap[10]).RadialGradient, obj2);
  const items4 = [callback(arg1(dependencyMap[10]).Defs, obj1), callback(arg1(dependencyMap[10]).Rect, {})];
  obj.children = items4;
  const items5 = [callback2(importDefault(dependencyMap[10]), obj), callback(importDefault(dependencyMap[11]), { style: tmp.backgroundLayer, colors: closure_10, start: closure_8, end: closure_9, pointerEvents: "none" }), callback(importDefault(dependencyMap[11]), { style: tmp.backgroundLayer, colors: closure_11, start: closure_8, end: closure_9, pointerEvents: "none" }), ];
  const obj5 = { spacing: importDefault(dependencyMap[5]).space.PX_16 };
  const obj6 = { Text: 5375, string: 1896939776, y: 8000, style: tmp.imageContainer };
  let tmp9 = null != tmp3;
  if (tmp9) {
    const obj7 = { imageUrl: tmp3, style: tmp.powerupImage };
    tmp9 = callback(importDefault(dependencyMap[13]), obj7);
  }
  obj6.children = tmp9;
  const items6 = [callback(View, obj6), , ];
  const obj8 = { spacing: importDefault(dependencyMap[5]).space.PX_8, style: tmp.textBlock };
  const obj9 = { style: tmp.centerText };
  const intl = arg1(dependencyMap[15]).intl;
  obj9.children = intl.string(arg1(dependencyMap[15]).t.2QmKZ2);
  const items7 = [callback(arg1(dependencyMap[14]).Text, obj9), ];
  const obj10 = { style: items8 };
  const items8 = [, ];
  ({ centerText: arr9[0], body: arr9[1] } = tmp);
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
