// Module ID: 15421
// Function ID: 15422
// Name: GuildBoostingGuildList
// Dependencies: [19, 17, 4885, 6772, 1072, 21, 5014, 575, 5253, 504, 8468, 9109, 7522, 7161, 6957, 5624, 5717, 10294, 1113, 15390, 2]
// Exports: default

// Module 15421 (GuildBoostingGuildList)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useThemeDefault from "useTheme" /* 5253 */;
import FastImageDefault from "FastImage" /* 5717 */;
import GuildIconDefault from "GuildIcon" /* 6957 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7161 */;
import transitionToGuild from "transitionToGuild" /* 7522 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8468 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9109 */;
import AssetRegistryDefault from "AssetRegistry" /* 10294 */;
import BoostedGuildTierProgressCircleDefault from "BoostedGuildTierProgressCircle" /* 15390 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import SortedGuildStore from "SortedGuildStore" /* 6772 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
function GuildBoostingGuildListItem(guildId) {
  let intl;
  let items1;
  let items2;
  let items3;
  let obj9;
  guildId = guildId.guildId;
  const tmp = closure_9();
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
      onPress: function handleSelectGuild() {
          const obj = transitionToGuild;
          obj.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
          const obj2 = UserSettingsModalActionCreatorsDefault;
          obj2.close();
        },
      children: items1
    };
    const obj3 = { guild: stateFromStores, size: guildId(6957).GuildIconSizes.LARGE, style: tmp.guildIcon, selected: false };
    const tmp2Result = TouchableHitBoxDefault;
    const tmp2Result3 = GuildIconDefault;
    items1 = [closure_7(tmp2Result3, obj3), , ];
    const obj4 = { style: tmp.guildCardDescription, children: items2 };
    const obj5 = { variant: "text-md/bold", children: stateFromStores.name };
    items2 = [closure_7(guildId(5624).Text, obj5), ];
    const obj6 = { style: tmp.subscriptionInfo, children: items3 };
    const obj7 = { source: AssetRegistryDefault, style: tmp.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
    const tmp2Result4 = FastImageDefault;
    items3 = [closure_7(tmp2Result4, obj7), ];
    const obj8 = { variant: "text-xs/medium", children: intl.format(guildId(1113).t.If4iTS, obj9) };
    const Text = tmp5(5624).Text;
    intl = tmp5(1113).intl;
    obj9 = { subscriberCount: tmp8 };
    items3[1] = closure_7(Text, obj8);
    items2[1] = closure_8(View, obj6);
    items1[1] = closure_8(View, obj4);
    const obj10 = { guild: stateFromStores, theme: tmp4 };
    items1[2] = closure_7(BoostedGuildTierProgressCircleDefault, obj10);
    tmp9 = closure_8(tmp2Result, obj2);
  }
  return tmp9;
}
const View = react_native.View;
let closure_6 = Constants.NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { guildCard: obj2, guildIcon: { marginRight: 16 }, guildCardDescription: { flex: 1 }, subscriptionInfo: { flexDirection: "row", alignItems: "center" }, premiumGuildImage: { width: 18, height: 12, marginLeft: -5 } };
obj2 = { padding: 12, paddingLeft: 16, borderRadius: nativeDefault.radii.xs, marginBottom: 8, minHeight: 96, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default function GuildBoostingGuildList(guildCount) {
  let flattenedGuildIds;
  let substr;
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_6;
  }
  const style = guildCount.style;
  let obj = get_initialized;
  const items = [SortedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj2 = {
    style,
    children: substr.map((guildId) => {
      const obj = { guildId };
      return closure_1_7(GuildBoostingGuildListItem, obj, guildId);
    })
  };
  substr = stateFromStores.slice(0, guildCount);
  return metroImportDefault(View, obj2);
};
