// Module ID: 19124
// Function ID: 19125
// Name: GuildsBarItemEmptyNUX
// Dependencies: [19, 17, 5349, 19060, 1072, 10030, 21, 5306, 575, 7231, 5902, 504, 1655, 5939, 18742, 19073, 1113, 6020, 10325, 19072, 7722, 19084, 5929, 2]

// Module 19124 (GuildsBarItemEmptyNUX)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import _modDef1655 from "module_1655" /* 1655 */;
import FastImageDefault from "FastImage" /* 6020 */;
import transitionToGuild from "transitionToGuild" /* 7231 */;
import NativeViewDefault from "NativeView" /* 7722 */;
import MainTabsConstants from "MainTabsConstants" /* 10030 */;
import AssetRegistryDefault from "AssetRegistry" /* 10325 */;
import usePressabilityDefault from "usePressability" /* 19073 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;
import GuildsBarConstants from "GuildsBarConstants" /* 19060 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
let closure_15 = { code: "(function GuildsBarItemEmptyNUXTsx1(){let[withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS]=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};})" };
const memoResult = react.memo(function GuildsBarEmptyNUX() {
  let HomeDrawerSharedItem;
  let Text;
  let guildId;
  let intl;
  let intl2;
  let items5;
  let items6;
  let items7;
  let obj12;
  let obj15;
  let obj16;
  let sharedValue;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let obj = sharedValue(5902);
  const token = obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_13(token, closure_8());
  const items = [SelectedGuildStore];
  const obj2 = sharedValue(504);
  const stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId() === EMPTY_NUX_SERVER);
  const obj3 = sharedValue(1655);
  sharedValue = obj3.useSharedValue(false);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(true);
  }, items1);
  const callback1 = react.useCallback(() => {
    const result = sharedValue.set(false);
  }, items2);
  const obj5 = sharedValue(5902);
  const token1 = obj5.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  const obj6 = sharedValue(5902);
  const token2 = obj6.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  const items3 = [closure_15, , , , , ];
  const useAnimatedStyle = sharedValue(1655).useAnimatedStyle;
  sharedValue(1655);
  items3[1] = sharedValue(5939).withSpring;
  items3[2] = stateFromStores;
  items3[3] = token2;
  items3[4] = token1;
  items3[5] = MODE_CHANGE_PHYSICS;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items3;
  const obj4 = react;
  class GuildsBarItemEmptyNUXTsx1 {
    constructor() {
      const obj = { backgroundColor: _undefined(c1 ? c2 : c3, c4, "animate-always") };
      return obj;
    }
  }
  const items4 = [tmp14, tmp15, tmp16, tmp17, tmp18];
  GuildsBarItemEmptyNUXTsx1.__closure = items4;
  GuildsBarItemEmptyNUXTsx1.__workletHash = 11514219811718;
  GuildsBarItemEmptyNUXTsx1.__initData = tmp13;
  const animatedStyle = useAnimatedStyle(GuildsBarItemEmptyNUXTsx1);
  const enableHome = obj4.useContext(tmp(18742).HomeDrawerStateContext).enableHome;
  const obj7 = { onPress: handlePress };
  const tmp20 = usePressabilityDefault(obj7);
  const obj8 = { style: tmp5.container, onPressIn: callback, onPressOut: callback1, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: intl.string(sharedValue(1113).t["3S2xmm"]), accessibilityState: { selected: stateFromStores }, hitSlop, children: items6 };
  intl = tmp(1113).intl;
  const obj9 = { style: items5 };
  items5 = [tmp5.backdrop, animatedStyle];
  items6 = [closure_11(_modDef1655.View, obj9), , ];
  const obj10 = { style: tmp5.icon, source: AssetRegistryDefault, resizeMode: "contain" };
  const tmp3Result = FastImageDefault;
  items6[1] = closure_11(tmp3Result, obj10);
  const obj11 = { style: tmp5.guildIndicator, children: closure_11(sharedValue(19072).UnreadIndicator, obj12) };
  obj12 = { selected: true === stateFromStores };
  items6[2] = closure_11(closure_5, obj11);
  const obj13 = { style: tmp5.root, children: items7 };
  items7 = [closure_12(closure_4, obj8), ];
  let tmp22Result = null;
  closure_12(closure_4, obj8);
  const tmp21 = closure_12;
  const tmp3Result3 = NativeViewDefault;
  if (enableHome) {
    const obj14 = { style: tmp5.expandedChildren, collapsable: false, children: closure_11(HomeDrawerSharedItem, obj15) };
    const tmp3Result4 = NativeViewDefault;
    const merged = Object.assign(tmp20);
    obj15 = { title: closure_11(Text, obj16) };
    HomeDrawerSharedItem = tmp(19084).HomeDrawerSharedItem;
    obj16 = { variant: "body-md/medium", color: "text-default", lineClamp: 1, children: intl2.string(sharedValue(1113).t["3S2xmm"]) };
    Text = tmp(5929).Text;
    intl2 = tmp(1113).intl;
    tmp22Result = tmp22(tmp3Result4, obj14);
  }
  items7[1] = tmp22Result;
  return tmp21(tmp3Result3, obj13);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default memoResult;
