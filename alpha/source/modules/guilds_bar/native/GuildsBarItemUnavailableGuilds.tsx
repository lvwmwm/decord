// Module ID: 16714
// Function ID: 16715
// Name: GuildsBarItemUnavailableGuilds
// Dependencies: [19, 17, 5972, 21, 5091, 587, 5298, 1126, 558, 576, 504, 6163, 16705, 2]

// Module 16714 (GuildsBarItemUnavailableGuilds)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5298 */;
import FastImageDefault from "FastImage" /* 6163 */;
import AssetRegistryDefault from "AssetRegistry" /* 16705 */;
import react from "react" /* 19 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5972 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarItemUnavailableGuilds() {
  let stateFromStores;
  let tmp5;
  let tmp6;
  const tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(13);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildAvailabilityStore];
    const fn = function o() {
      return GuildAvailabilityStore.totalUnavailableGuilds;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (stateFromStores > 0) {
    let tmp9;
    if (cResult[2] !== stateFromStores) {
      let intl = tmp(1126).intl;
      let obj2 = { count: stateFromStores };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["MEpX+2"], obj2);
      cResult[2] = stateFromStores;
      cResult[3] = formatToPlainStringResult;
      tmp9 = formatToPlainStringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== stateFromStores) {
      class G {
        constructor() {
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
        }
      }
      cResult[4] = stateFromStores;
      cResult[5] = G;
    } else {
      class G {
        constructor() {
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
        }
      }
    }
    if (cResult[6] !== tmp4.unavailableGuildsIcon) {
      class G {
        constructor() {
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
        }
      }
      FastImageDefault;
      const tmp15 = <tmp14 style={tmp4.unavailableGuildsIcon} source={AssetRegistryDefault} />;
      cResult[6] = tmp4.unavailableGuildsIcon;
      cResult[7] = tmp15;
    } else {
      class G {
        constructor() {
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
        }
      }
    }
    if (cResult[8] === tmp4.unavailableGuilds) {
      class G {
        constructor() {
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
        }
      }
    }
    const tmp19 = <Pressable accessibilityRole="button" accessibilityLabel={tmp9} onPress={tmp11} style={tmp4.unavailableGuilds}>{tmp12}</Pressable>;
    cResult[8] = tmp4.unavailableGuilds;
    cResult[9] = tmp9;
    cResult[10] = tmp11;
    cResult[11] = tmp12;
    cResult[12] = tmp19;
  }
  return null;
}) : (function GuildsBarItemUnavailableGuilds() {
  let stateFromStores;
  const tmp = closure_6();
  let obj = stateFromStores(504);
  const items = [GuildAvailabilityStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildAvailabilityStore.totalUnavailableGuilds);
  let tmp5 = null;
  if (stateFromStores > 0) {
    let intl = tmp2(1126).intl;
    const obj3 = { count: stateFromStores };
    ({ style: tmp.unavailableGuildsIcon, source: AssetRegistryDefault });
    FastImageDefault;
    tmp5 = <Pressable accessibilityRole="button" accessibilityLabel={intl.formatToPlainString(stateFromStores(1126).t["MEpX+2"], obj3)} onPress={function onPress() {
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
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default memoResult;
