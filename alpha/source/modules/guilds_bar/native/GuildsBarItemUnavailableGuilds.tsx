// Module ID: 18785
// Function ID: 18786
// Name: GuildsBarItemUnavailableGuilds
// Dependencies: [19, 17, 6832, 21, 5142, 575, 6092, 1113, 504, 5844, 18776, 2]

// Module 18785 (GuildsBarItemUnavailableGuilds)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import FastImageDefault from "FastImage" /* 5844 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6092 */;
import AssetRegistryDefault from "AssetRegistry" /* 18776 */;
import react from "react" /* 19 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6832 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { unavailableGuilds: obj2, unavailableGuildsIcon: size };
obj2 = { marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_6 = createStyles(obj);
const memoResult = react.memo(function GuildsBarItemUnavailableGuilds() {
  let stateFromStores;
  const tmp = closure_6();
  let obj = stateFromStores(504);
  const items = [GuildAvailabilityStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildAvailabilityStore.totalUnavailableGuilds);
  let tmp5 = null;
  if (stateFromStores > 0) {
    let intl = tmp2(1113).intl;
    const obj3 = { count: stateFromStores };
    ({ style: tmp.unavailableGuildsIcon, source: AssetRegistryDefault });
    FastImageDefault;
    tmp5 = <Pressable accessibilityRole="button" accessibilityLabel={intl.formatToPlainString(stateFromStores(1113).t["MEpX+2"], obj3)} onPress={function onPress() {
      let intl;
      let intl2;
      let obj2;
      const obj = { title: intl.string(intl3.t.R0RpRX), body: intl2.format(intl3.t["TnH05/"], obj2) };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = intl3.intl;
      intl2 = intl3.intl;
      obj2 = { count: stateFromStores };
      show(obj);
    }} style={tmp.unavailableGuilds}>{null}</Pressable>;
  }
  return tmp5;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default memoResult;
