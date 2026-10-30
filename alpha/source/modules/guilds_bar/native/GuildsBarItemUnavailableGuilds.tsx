// Module ID: 18366
// Function ID: 18367
// Name: GuildsBarItemUnavailableGuilds
// Dependencies: [19, 17, 6768, 21, 5009, 575, 5953, 1114, 504, 5712, 18357, 2]

// Module 18366 (GuildsBarItemUnavailableGuilds)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
import AssetRegistryDefault from "AssetRegistry" /* 18357 */;
import react from "react" /* 19 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6768 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
    let intl = tmp2(1114).intl;
    const obj3 = { count: stateFromStores };
    ({ style: tmp.unavailableGuildsIcon, source: AssetRegistryDefault });
    FastImageDefault;
    tmp5 = <Pressable accessibilityRole="button" accessibilityLabel={intl.formatToPlainString(stateFromStores(1114).t["MEpX+2"], obj3)} onPress={function onPress() {
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
