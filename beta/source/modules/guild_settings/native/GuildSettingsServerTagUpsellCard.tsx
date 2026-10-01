// Module ID: 17387
// Function ID: 17388
// Name: GuildSettingsServerTagUpsellCard
// Dependencies: [19, 17, 4723, 21, 4836, 576, 504, 4727, 12016, 11984, 5293, 5279, 12019, 4832, 1115, 5281, 15850, 2]
// Exports: default

// Module 17387 (GuildSettingsServerTagUpsellCard)
import nativeDefault from "native" /* 576 */;
import Powerups from "Powerups" /* 4727 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 11984 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12016 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const colors = ["rgba(88, 101, 242, 0.3)", "rgba(22, 26, 138, 0.3)"];
const colors2 = ["rgba(151, 151, 159, 0.04)", "rgba(151, 151, 159, 0.04)"];
let c12 = "#29292D";
let obj = { card: obj2, imageContainer: { height: 104, justifyContent: "center" }, textBlock: { alignItems: "center" }, centerText: { textAlign: "center" }, body: { maxWidth: 320 }, backgroundLayer: StyleSheet.absoluteFillObject, powerupImage: { width: "92%" } };
obj2 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: "#29292D", overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_20, paddingBottom: nativeDefault.space.PX_24 };
let closure_13 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx");

export default function GuildSettingsServerTagUpsellCard(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let tmp10Result;
  guildId = guildId.guildId;
  const onUnlockPress = guildId.onUnlockPress;
  let tmp = closure_13();
  let tmp2 = guildId;
  let obj = guildId(504);
  const items = [GuildPowerupsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
    let tmp2;
    if (stateForGuild != null) {
      tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
    }
    return tmp2;
  }, items1);
  const tmp6 = useGetGuildPowerupBannerImageDefault(stateFromStores, true);
  const items2 = [guildId];
  const effect = react.useEffect(() => {
    const tmp = guildId;
    if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
      const obj = GuildPowerupsActionCreators;
      const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
    }
  }, items2);
  const obj3 = { style: tmp.backgroundLayer, colors: items3, locations: [0, 0.7], start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, pointerEvents: "none" };
  items3 = ["rgba(41, 41, 45, 0)", c12];
  const obj2 = { style: tmp.card, children: items4 };
  items4 = [closure_6(LinearGradientDefault, obj3), , , ];
  const obj4 = { style: tmp.backgroundLayer, colors, start, end, pointerEvents: "none" };
  items4[1] = closure_6(LinearGradientDefault, obj4);
  const obj5 = { style: tmp.backgroundLayer, colors: colors2, start, end, pointerEvents: "none" };
  items4[2] = closure_6(LinearGradientDefault, obj5);
  const obj6 = { spacing: nativeDefault.space.PX_16, children: items5 };
  const Stack = guildId(5279).Stack;
  const obj7 = { style: tmp.imageContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp10Result };
  tmp10Result = null != tmp6;
  if (tmp10Result) {
    const obj8 = { imageUrl: tmp6, style: tmp.powerupImage };
    tmp10Result = tmp10(tmp5(12019), obj8);
  }
  items5 = [closure_6(closure_4, obj7), , ];
  const obj9 = { spacing: nativeDefault.space.PX_8, style: tmp.textBlock, children: items6 };
  const Stack2 = tmp2(5279).Stack;
  const obj10 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText, children: intl.string(tmp2(1115).t["2QmKZ2"]) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items6 = [closure_6(Text, obj10), ];
  const obj11 = { variant: "text-sm/medium", color: "text-subtle", style: items7, children: intl2.string(tmp2(1115).t.Tg0fDm) };
  items7 = [, ];
  ({ centerText: arr8[0], body: arr8[1] } = tmp);
  const Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items6[1] = closure_6(Text2, obj11);
  items5[1] = closure_7(Stack2, obj9);
  const obj12 = { variant: "primary", size: "lg", text: intl3.string(tmp2(1115).t.kMRDWs), icon: closure_6(tmp2(15850).BoostTier2Icon, { color: "white" }), iconPosition: "start", onPress: onUnlockPress };
  const Button = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  items5[2] = closure_6(Button, obj12);
  items4[3] = closure_7(Stack, obj6);
  return closure_7(closure_4, obj2);
};
