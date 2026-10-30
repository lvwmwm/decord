// Module ID: 19691
// Function ID: 19692
// Name: GuildSettingsServerTagUpsellCard
// Dependencies: [19, 17, 5224, 1072, 21, 5009, 575, 504, 5228, 14044, 14014, 5075, 5582, 6022, 14047, 5619, 1114, 5629, 18224, 2]
// Exports: default

// Module 19691 (GuildSettingsServerTagUpsellCard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Powerups from "Powerups" /* 5228 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 14014 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 14044 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5224 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const colors = ["rgba(88, 101, 242, 0.3)", "rgba(22, 26, 138, 0.3)"];
const colors2 = ["rgba(151, 151, 159, 0.04)", "rgba(151, 151, 159, 0.04)"];
let c13 = "#29292D";
let obj = { card: obj2, imageContainer: { height: 104, justifyContent: "center" }, textBlock: { alignItems: "center" }, centerText: { textAlign: "center" }, body: { maxWidth: 320 }, backgroundLayer: StyleSheet.absoluteFillObject, powerupImage: { width: "92%" } };
obj2 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: "#29292D", overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_20, paddingBottom: nativeDefault.space.PX_24 };
let closure_14 = createStyles.createStyles(obj);
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
  let obj3;
  let tmp8Result;
  guildId = guildId.guildId;
  const onUnlockPress = guildId.onUnlockPress;
  let tmp = closure_14();
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
  const obj2 = { theme: ThemeTypes.DARK, children: closure_8(closure_4, obj3) };
  obj3 = { style: tmp.card, children: items4 };
  const ThemeContextProvider = guildId(5075).ThemeContextProvider;
  const obj4 = { style: tmp.backgroundLayer, colors: items3, locations: [0, 0.7], start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, pointerEvents: "none" };
  items3 = ["rgba(41, 41, 45, 0)", c13];
  items4 = [closure_7(LinearGradientDefault, obj4), , , ];
  const obj5 = { style: tmp.backgroundLayer, colors, start, end, pointerEvents: "none" };
  items4[1] = closure_7(LinearGradientDefault, obj5);
  const obj6 = { style: tmp.backgroundLayer, colors: colors2, start, end, pointerEvents: "none" };
  items4[2] = closure_7(LinearGradientDefault, obj6);
  const obj7 = { spacing: nativeDefault.space.PX_16, children: items5 };
  const Stack = guildId(6022).Stack;
  const obj8 = { style: tmp.imageContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp8Result };
  tmp8Result = null != tmp6;
  if (tmp8Result) {
    const obj9 = { imageUrl: tmp6, style: tmp.powerupImage };
    tmp8Result = tmp8(tmp5(14047), obj9);
  }
  items5 = [closure_7(closure_4, obj8), , ];
  const obj10 = { spacing: nativeDefault.space.PX_8, style: tmp.textBlock, children: items6 };
  const Stack2 = tmp2(6022).Stack;
  const obj11 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText, children: intl.string(tmp2(1114).t["2QmKZ2"]) };
  const Text = tmp2(5619).Text;
  intl = tmp2(1114).intl;
  items6 = [closure_7(Text, obj11), ];
  const obj12 = { variant: "text-sm/medium", color: "text-subtle", style: items7, children: intl2.string(tmp2(1114).t.Tg0fDm) };
  items7 = [, ];
  ({ centerText: arr8[0], body: arr8[1] } = tmp);
  const Text2 = tmp2(5619).Text;
  intl2 = tmp2(1114).intl;
  items6[1] = closure_7(Text2, obj12);
  items5[1] = closure_8(Stack2, obj10);
  const obj13 = { variant: "primary", size: "lg", text: intl3.string(tmp2(1114).t.kMRDWs), icon: closure_7(tmp2(18224).BoostTier2Icon, { color: "white" }), iconPosition: "start", onPress: onUnlockPress };
  const Button = tmp2(5629).Button;
  intl3 = tmp2(1114).intl;
  items5[2] = closure_7(Button, obj13);
  items4[3] = closure_8(Stack, obj7);
  return closure_7(ThemeContextProvider, obj2);
};
