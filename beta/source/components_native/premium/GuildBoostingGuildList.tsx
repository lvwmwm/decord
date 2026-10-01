// Module ID: 13077
// Function ID: 13078
// Name: GuildBoostingGuildList
// Dependencies: [19, 17, 2067, 5750, 1074, 21, 4836, 576, 4767, 504, 4743, 9203, 6760, 6411, 5896, 4832, 9872, 1115, 13046, 2]
// Exports: default

// Module 13077 (GuildBoostingGuildList)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4743 */;
import useThemeDefault from "useTheme" /* 4767 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6411 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import AssetRegistryDefault from "AssetRegistry" /* 9872 */;
import BoostedGuildTierProgressCircleDefault from "BoostedGuildTierProgressCircle" /* 13046 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let c9;
let closure_4;
let metroImportAll;
let obj2;
function GuildBoostingGuildListItem(guildId) {
  let intl;
  let items1;
  let items2;
  let items3;
  let obj9;
  guildId = guildId.guildId;
  const tmp = closure_10();
  const tmp4 = useThemeDefault();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  useGuildPowerupsBoostCountDefault;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    let obj2 = {
      style: tmp.guildCard,
      activeOpacity: 0.5,
      accessibilityRole: "button",
      onPress() {
          const obj = transitionToGuild;
          obj.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
          const obj2 = UserSettingsModalActionCreatorsDefault;
          obj2.close();
        },
      children: items1
    };
    const obj3 = { guild: stateFromStores, size: guildId(5896).GuildIconSizes.LARGE, style: tmp.guildIcon, selected: false };
    const tmp2Result = TouchableHitBoxDefault;
    const tmp2Result2 = GuildIconDefault;
    items1 = [closure_8(tmp2Result2, obj3), , ];
    const obj4 = { style: tmp.guildCardDescription, children: items2 };
    const obj5 = { variant: "text-md/bold", children: stateFromStores.name };
    items2 = [closure_8(guildId(4832).Text, obj5), ];
    const obj6 = { style: tmp.subscriptionInfo, children: items3 };
    const obj7 = { source: AssetRegistryDefault, style: tmp.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
    items3 = [closure_8(closure_4, obj7), ];
    const obj8 = { variant: "text-xs/medium", children: intl.format(guildId(1115).t.If4iTS, obj9) };
    const Text = tmp5(4832).Text;
    intl = tmp5(1115).intl;
    obj9 = { subscriberCount: tmp8 };
    items3[1] = closure_8(Text, obj8);
    items2[1] = closure_9(closure_3, obj6);
    items1[1] = closure_9(closure_3, obj4);
    const obj10 = { guild: stateFromStores, theme: tmp4 };
    items1[2] = closure_8(BoostedGuildTierProgressCircleDefault, obj10);
    tmp9 = closure_9(tmp2Result, obj2);
  }
  return tmp9;
}
({ View: c3, Image: closure_4 } = react_native);
let closure_7 = Constants.NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { guildCard: obj2, guildIcon: { marginRight: 16 }, guildCardDescription: { flex: 1 }, subscriptionInfo: { flexDirection: "row", alignItems: "center" }, premiumGuildImage: { width: 18, height: 12, marginLeft: -5 } };
obj2 = { padding: 12, paddingLeft: 16, borderRadius: nativeDefault.radii.xs, marginBottom: 8, minHeight: 96, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default function GuildBoostingGuildList(guildCount) {
  let flattenedGuildIds;
  let substr;
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_7;
  }
  const style = guildCount.style;
  let obj = get_initialized;
  const items = [SortedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj2 = {
    style,
    children: substr.map((guildId) => {
      const obj = { guildId };
      return closure_1_8(GuildBoostingGuildListItem, obj, guildId);
    })
  };
  substr = stateFromStores.slice(0, guildCount);
  return metroImportAll(_false, obj2);
};
