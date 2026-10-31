// Module ID: 18409
// Function ID: 18410
// Name: GuildsBarItemUnavailableGuilds
// Dependencies: [19, 17, 6774, 21, 5014, 575, 5958, 1113, 504, 5717, 18400, 2]

// Module 18409 (GuildsBarItemUnavailableGuilds)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5958 */;
import AssetRegistryDefault from "AssetRegistry" /* 18400 */;
import react from "react" /* 19 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6774 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
