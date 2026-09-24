// Module ID: 16701
// Function ID: 16702
// Name: GuildsBarItemUnavailableGuilds
// Dependencies: [19, 17, 5140, 21, 4790, 580, 5142, 1119, 558, 568, 504, 16692, 2]

// Module 16701 (GuildsBarItemUnavailableGuilds)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5142 */;
import _modDef16692 from "module_16692" /* 16692 */;
import noop from "module_19" /* 19 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5140 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, Pressable: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj = { unavailableGuilds: { marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING, justifyContent: "center", alignItems: "center" }, unavailableGuildsIcon: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.unavailableGuildsIcon = size;
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING, justifyContent: "center", alignItems: "center" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(568).c(13);
  let unavailableGuilds = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildAvailabilityStore];
    const fn = function t() {
      return GuildAvailabilityStore.totalUnavailableGuilds;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(568);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (stateFromStores <= 0) {
    return null;
  } else {
    if (cResult[2] !== stateFromStores) {
      let intl = tmp(1119).intl;
      let obj2 = { count: stateFromStores };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t["MEpX+2"], obj2);
      cResult[2] = stateFromStores;
      cResult[3] = formatToPlainStringResult;
      let tmp8 = formatToPlainStringResult;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== stateFromStores) {
      class I {
        constructor() {
          obj = closure_1(closure_2[6]);
          obj1 = { title: null, body: null };
          intl = closure_0(closure_2[7]).intl;
          obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
          intl2 = closure_0(closure_2[7]).intl;
          obj4 = { count: closure_0 };
          obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
          showResult = obj.show(obj1);
          return;
        }
      }
      cResult[4] = stateFromStores;
      cResult[5] = I;
    } else {
      class I {
        constructor() {
          obj = closure_1(closure_2[6]);
          obj1 = { title: null, body: null };
          intl = closure_0(closure_2[7]).intl;
          obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
          intl2 = closure_0(closure_2[7]).intl;
          obj4 = { count: closure_0 };
          obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
          showResult = obj.show(obj1);
          return;
        }
      }
    }
    if (cResult[6] !== unavailableGuilds.unavailableGuildsIcon) {
      class I {
        constructor() {
          obj = closure_1(closure_2[6]);
          obj1 = { title: null, body: null };
          intl = closure_0(closure_2[7]).intl;
          obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
          intl2 = closure_0(closure_2[7]).intl;
          obj4 = { count: closure_0 };
          obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
          showResult = obj.show(obj1);
          return;
        }
      }
      const obj3 = { style: unavailableGuilds.unavailableGuildsIcon, source: _modDef16692 };
      const tmp14 = <closure_3 style={unavailableGuilds.unavailableGuildsIcon} source={_modDef16692} />;
      cResult[6] = unavailableGuilds.unavailableGuildsIcon;
      cResult[7] = tmp14;
    } else {
      class I {
        constructor() {
          obj = closure_1(closure_2[6]);
          obj1 = { title: null, body: null };
          intl = closure_0(closure_2[7]).intl;
          obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
          intl2 = closure_0(closure_2[7]).intl;
          obj4 = { count: closure_0 };
          obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
          showResult = obj.show(obj1);
          return;
        }
      }
    }
    if (cResult[8] === unavailableGuilds.unavailableGuilds) {
      class I {
        constructor() {
          obj = closure_1(closure_2[6]);
          obj1 = { title: null, body: null };
          intl = closure_0(closure_2[7]).intl;
          obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
          intl2 = closure_0(closure_2[7]).intl;
          obj4 = { count: closure_0 };
          obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
          showResult = obj.show(obj1);
          return;
        }
      }
    }
    const obj4 = { accessibilityRole: "button", accessibilityLabel: tmp8, onPress: tmp10, style: unavailableGuilds.unavailableGuilds, children: tmp11 };
    const tmp18 = <closure_4 accessibilityRole="button" accessibilityLabel={tmp8} onPress={tmp10} style={unavailableGuilds.unavailableGuilds}>{tmp11}</closure_4>;
    unavailableGuilds = unavailableGuilds.unavailableGuilds;
    cResult[8] = unavailableGuilds;
    cResult[9] = tmp8;
    cResult[10] = tmp10;
    cResult[11] = tmp11;
    cResult[12] = tmp18;
  }
}) : (() => {
  const tmp = closure_7();
  const items = [GuildAvailabilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => GuildAvailabilityStore.totalUnavailableGuilds);
  let tmp5 = null;
  if (stateFromStores > 0) {
    let obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1119).intl;
    const obj3 = { count: stateFromStores };
    obj2.accessibilityLabel = intl.formatToPlainString(tmp2(1119).t["MEpX+2"], obj3);
    obj2.onPress = function onPress() {
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.R0RpRX);
      const intl2 = util.intl;
      obj2.body = intl2.format(util.t["TnH05/"], { count: stateFromStores });
      AlertActionCreatorsDefault.show(obj2);
    };
    obj2.style = tmp.unavailableGuilds;
    const obj4 = { style: tmp.unavailableGuildsIcon, source: _modDef16692 };
    obj2.children = <closure_3 style={tmp.unavailableGuildsIcon} source={_modDef16692} />;
    tmp5 = <closure_4 accessibilityRole="button" accessibilityLabel={null} onPress={null} style={null}>{null}</closure_4>;
  }
  return tmp5;
}));
