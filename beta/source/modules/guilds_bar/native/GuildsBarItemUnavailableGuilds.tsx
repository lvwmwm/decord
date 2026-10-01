// Module ID: 15986
// Function ID: 15987
// Name: GuildsBarItemUnavailableGuilds
// Dependencies: [19, 17, 5201, 21, 4836, 576, 5203, 1115, 504, 15977, 2]

// Module 15986 (GuildsBarItemUnavailableGuilds)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import AssetRegistryDefault from "AssetRegistry" /* 15977 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5201 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let size;
({ Image: c3, Pressable: closure_4 } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { unavailableGuilds: obj2, unavailableGuildsIcon: size };
obj2 = { marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_7 = createStyles(obj);
const memoResult = react.memo(function GuildsBarItemUnavailableGuilds() {
  let stateFromStores;
  const tmp = closure_7();
  let obj = stateFromStores(504);
  const items = [GuildAvailabilityStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildAvailabilityStore.totalUnavailableGuilds);
  let tmp5 = null;
  if (stateFromStores > 0) {
    let intl = tmp2(1115).intl;
    const obj3 = { count: stateFromStores };
    ({ style: tmp.unavailableGuildsIcon, source: AssetRegistryDefault });
    tmp5 = <closure_4 accessibilityRole="button" accessibilityLabel={intl.formatToPlainString(stateFromStores(1115).t["MEpX+2"], obj3)} onPress={function onPress() {
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
    }} style={tmp.unavailableGuilds}>{null}</closure_4>;
  }
  return tmp5;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default memoResult;
