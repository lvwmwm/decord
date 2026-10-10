// Module ID: 16785
// Function ID: 16786
// Name: GuildsBarItemEmptyNUX
// Dependencies: [19, 17, 4939, 16715, 1085, 10636, 21, 5092, 587, 7052, 558, 576, 4818, 504, 4850, 5378, 16434, 16728, 1126, 6156, 8926, 16727, 6161, 16739, 5088, 2]

// Module 16785 (GuildsBarItemEmptyNUX)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import spring from "spring" /* 5378 */;
import transitionToGuild from "transitionToGuild" /* 7052 */;
import MainTabsConstants from "MainTabsConstants" /* 10636 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16715 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function handlePress() {
  const obj = transitionToGuild;
  obj.transitionToGuild(EMPTY_NUX_SERVER);
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ GUILD_ITEM_HIT_SLOP: metroImportDefault, useGuildWrapperSize: metroImportAll } = GuildsBarConstants);
const EMPTY_NUX_SERVER = Constants.EMPTY_NUX_SERVER;
const MODE_CHANGE_PHYSICS = MainTabsConstants.MODE_CHANGE_PHYSICS;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((width, arg1) => {
  let rect;
  let rect1;
  const diff = width - 10;
  const obj = { root: { alignSelf: "stretch", paddingLeft: metroImportDefault.left, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING }, container: { position: "relative", flexDirection: "row", alignItems: "center", height: 55, width }, guildIndicator: rect, icon: { width: 59, height: 55, marginLeft: -3 }, backdrop: size, expandedChildren: rect1 };
  ({ alignSelf: "stretch", paddingLeft: metroImportDefault.left, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING });
  rect = { position: "absolute", left: -metroImportDefault.left, top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN };
  size = { position: "absolute", top: 16, width, height: diff, borderRadius: nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS };
  rect1 = { position: "absolute", left: arg1 + 16, right: 8, top: 16, height: diff, flexDirection: "row", alignItems: "center" };
  return obj;
});
const __initData = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,\"animate-always\")};}" };
const __initData2 = { code: "function GuildsBarItemEmptyNUXTsx2(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarEmptyNUX() {
  let guildId;
  let items1;
  let items2;
  let sharedValue;
  let stateFromStores;
  let tmp12;
  let tmp17;
  let tmp21;
  let tmp7;
  let tmp8;
  let token1;
  let obj = stateFromStores(token1[11]);
  const cResult = obj.c(36);
  let obj2 = stateFromStores(token1[12]);
  const token = obj2.useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = closure_13(token, closure_8());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function c() {
      return guildId.getGuildId() === EMPTY_NUX_SERVER;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = stateFromStores(token1[13]);
  stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const tmpResult5 = stateFromStores(token1[14]);
  sharedValue = tmpResult5.useSharedValue(false);
  if (cResult[2] !== sharedValue) {
    const fn2 = function v() {
      const result = sharedValue.set(true);
    };
    cResult[2] = sharedValue;
    cResult[3] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== sharedValue) {
    class H {
      constructor() {
        const result = sharedValue.set(false);
      }
    }
    cResult[4] = sharedValue;
    cResult[5] = H;
  } else {
    class H {
      constructor() {
        const result = sharedValue.set(false);
      }
    }
  }
  const tmpResult6 = stateFromStores(token1[12]);
  token1 = tmpResult6.useToken(tmp4(tmp2[8]).colors.BACKGROUND_SURFACE_HIGH);
  const tmpResult7 = stateFromStores(token1[12]);
  const token2 = tmpResult7.useToken(tmp4(tmp2[8]).colors.BACKGROUND_BRAND);
  const tmpResult8 = stateFromStores(token1[14]);
  class P {
    constructor() {
      const obj = spring;
      const obj2 = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
      return obj2;
    }
  }
  P.__closure = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  P.__workletHash = 13334573793151;
  P.__initData = __initData;
  ({ withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS });
  const animatedStyle = tmpResult8.useAnimatedStyle(P);
  const enableHome = token2.useContext(tmp(tmp2[16]).HomeDrawerStateContext).enableHome;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        const result = sharedValue.set(false);
      }
    }
    tmp18[0] = handlePress;
    cResult[6] = tmp18;
    tmp17 = tmp18;
  } else {
    class H {
      constructor() {
        const result = sharedValue.set(false);
      }
    }
  }
  sharedValue(token1[17])(tmp17);
  const container = tmp6.container;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        const result = sharedValue.set(false);
      }
    }
    const stringResult = obj9.string(stateFromStores(token1[18]).t["3S2xmm"]);
    cResult[7] = stringResult;
    tmp21 = stringResult;
  } else {
    class H {
      constructor() {
        const result = sharedValue.set(false);
      }
    }
  }
  if (cResult[8] !== stateFromStores) {
    class H {
      constructor() {
        const result = sharedValue.set(false);
      }
    }
    tmp24[0] = stateFromStores;
    cResult[8] = stateFromStores;
    cResult[9] = tmp24;
  } else {
    class H {
      constructor() {
        const result = sharedValue.set(false);
      }
    }
  }
  if (cResult[10] === animatedStyle) {
    class H {
      constructor() {
        const result = sharedValue.set(false);
      }
    }
    if (cResult[13] !== tmp6.icon) {
      class H {
        constructor() {
          const result = sharedValue.set(false);
        }
      }
      const obj4 = { style: tmp6.icon, source: sharedValue(token1[20]), resizeMode: "contain" };
      const tmp4Result = sharedValue(token1[19]);
      cResult[13] = tmp6.icon;
      cResult[14] = closure_11(tmp4Result, obj4);
      const tmp29 = closure_11(tmp4Result, obj4);
    } else {
      class H {
        constructor() {
          const result = sharedValue.set(false);
        }
      }
    }
    if (cResult[15] !== (true === stateFromStores)) {
      class H {
        constructor() {
          const result = sharedValue.set(false);
        }
      }
      const obj5 = { selected: true === stateFromStores };
      cResult[15] = true === stateFromStores;
      cResult[16] = closure_11(stateFromStores(token1[21]).UnreadIndicator, obj5);
      const tmp32 = closure_11(stateFromStores(token1[21]).UnreadIndicator, obj5);
    } else {
      class H {
        constructor() {
          const result = sharedValue.set(false);
        }
      }
    }
    if (cResult[17] === tmp6.guildIndicator) {
      class H {
        constructor() {
          const result = sharedValue.set(false);
        }
      }
      if (cResult[20] === tmp12) {
        class H {
          constructor() {
            const result = sharedValue.set(false);
          }
        }
      }
      const obj6 = { style: container, onPressIn: tmp12, onPressOut: tmp13, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp21, accessibilityState: tmp23, hitSlop, children: items1 };
      items1 = [tmp25, tmp27, tmp33];
      cResult[20] = tmp12;
      cResult[21] = tmp13;
      cResult[22] = tmp6.container;
      cResult[23] = tmp33;
      cResult[24] = tmp23;
      cResult[25] = tmp25;
      cResult[26] = tmp27;
      cResult[27] = closure_12(closure_4, obj6);
      closure_12(closure_4, obj6);
      class P {
        constructor() {
          const obj = spring;
          const obj2 = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
          return obj2;
        }
      }
    }
    const obj7 = { style: tmp6.guildIndicator, children: tmp31 };
    cResult[17] = tmp6.guildIndicator;
    cResult[18] = tmp31;
    cResult[19] = closure_11(closure_5, obj7);
    const tmp36 = closure_11(closure_5, obj7);
  }
  const obj8 = { style: items2 };
  items2 = [tmp6.backdrop, animatedStyle];
  cResult[10] = animatedStyle;
  cResult[11] = tmp6.backdrop;
  cResult[12] = closure_11(sharedValue(token1[14]).View, obj8);
  const tmp26 = closure_11(sharedValue(token1[14]).View, obj8);
}) : (function GuildsBarEmptyNUX() {
  let HomeDrawerSharedItem;
  let Text;
  let guildId;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let obj13;
  let obj16;
  let obj17;
  let sharedValue;
  let stateFromStores;
  let token1;
  let token2;
  let obj = stateFromStores(token1[12]);
  const token = obj.useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_13(token, closure_8());
  let obj2 = stateFromStores(token1[13]);
  const items = [SelectedGuildStore];
  stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId() === EMPTY_NUX_SERVER);
  const obj3 = stateFromStores(token1[14]);
  const tmp3 = sharedValue;
  sharedValue = obj3.useSharedValue(false);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = token2.useCallback(() => {
    const result = sharedValue.set(true);
  }, items1);
  const callback1 = token2.useCallback(() => {
    const result = sharedValue.set(false);
  }, items2);
  const obj4 = stateFromStores(token1[12]);
  token1 = obj4.useToken(sharedValue(token1[8]).colors.BACKGROUND_SURFACE_HIGH);
  const obj5 = stateFromStores(token1[12]);
  token2 = obj5.useToken(sharedValue(token1[8]).colors.BACKGROUND_BRAND);
  const fn = function o() {
    const obj = spring;
    const obj2 = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
    return obj2;
  };
  const obj6 = stateFromStores(token1[14]);
  fn.__closure = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 9303159016892;
  fn.__initData = __initData2;
  ({ withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS });
  const animatedStyle = obj6.useAnimatedStyle(fn);
  const enableHome = token2.useContext(stateFromStores(token1[16]).HomeDrawerStateContext).enableHome;
  const obj8 = { onPress: handlePress };
  const tmp13 = sharedValue(token1[17])(obj8);
  const obj9 = { style: tmp5.container, onPressIn: callback, onPressOut: callback1, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: intl.string(stateFromStores(token1[18]).t["3S2xmm"]), accessibilityState: { selected: stateFromStores }, hitSlop, children: items4 };
  intl = stateFromStores(token1[18]).intl;
  const obj10 = { style: items3 };
  items3 = [tmp5.backdrop, animatedStyle];
  items4 = [closure_11(sharedValue(token1[14]).View, obj10), , ];
  const obj11 = { style: tmp5.icon, source: sharedValue(token1[20]), resizeMode: "contain" };
  const tmp16 = sharedValue(token1[19]);
  items4[1] = closure_11(tmp16, obj11);
  const obj12 = { style: tmp5.guildIndicator, children: closure_11(stateFromStores(token1[21]).UnreadIndicator, obj13) };
  obj13 = { selected: true === stateFromStores };
  items4[2] = closure_11(closure_5, obj12);
  const obj14 = { style: tmp5.root, children: items5 };
  items5 = [closure_12(closure_4, obj9), ];
  let tmp15Result = null;
  closure_12(closure_4, obj9);
  const tmp14 = closure_12;
  const tmp18 = sharedValue(token1[22]);
  if (enableHome) {
    const obj15 = { style: tmp5.expandedChildren, collapsable: false, children: closure_11(HomeDrawerSharedItem, obj16) };
    const tmp3Result = tmp3(token1[22]);
    const merged = Object.assign(tmp13);
    obj16 = { title: closure_11(Text, obj17) };
    HomeDrawerSharedItem = tmp(tmp2[23]).HomeDrawerSharedItem;
    obj17 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl2.string(stateFromStores(token1[18]).t["3S2xmm"]) };
    Text = tmp(tmp2[24]).Text;
    intl2 = tmp(tmp2[18]).intl;
    tmp15Result = tmp15(tmp3Result, obj15);
  }
  items5[1] = tmp15Result;
  return tmp14(tmp18, obj14);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default memoResult;
