// Module ID: 15987
// Function ID: 15988
// Name: GuildsBarItemEmptyNUX
// Dependencies: [19, 17, 4655, 15918, 1074, 10549, 21, 4836, 576, 6760, 4531, 504, 4566, 5280, 15655, 15931, 1115, 15988, 15930, 5901, 15942, 4832, 2]

// Module 15987 (GuildsBarItemEmptyNUX)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import spring from "spring" /* 5280 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import MainTabsConstants from "MainTabsConstants" /* 10549 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildsBarConstants from "GuildsBarConstants" /* 15918 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
function handlePress() {
  const obj = transitionToGuild;
  obj.transitionToGuild(EMPTY_NUX_SERVER);
}
({ Pressable: closure_4, Image: hasOwnProperty, View: metroRequire } = react_native);
({ GUILD_ITEM_HIT_SLOP: metroImportAll, useGuildWrapperSize: c9 } = GuildsBarConstants);
const EMPTY_NUX_SERVER = Constants.EMPTY_NUX_SERVER;
const MODE_CHANGE_PHYSICS = MainTabsConstants.MODE_CHANGE_PHYSICS;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles((width, arg1) => {
  let rect;
  let rect1;
  const diff = width - 10;
  const obj = { root: { alignSelf: "stretch", paddingLeft: metroImportAll.left, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING }, container: { position: "relative", flexDirection: "row", alignItems: "center", height: 55, width }, guildIndicator: rect, icon: { width: 59, height: 55, marginLeft: -3 }, backdrop: size, expandedChildren: rect1 };
  ({ alignSelf: "stretch", paddingLeft: metroImportAll.left, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING });
  rect = { position: "absolute", left: -metroImportAll.left, top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN };
  size = { position: "absolute", top: 16, width, height: diff, borderRadius: nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS };
  rect1 = { position: "absolute", left: arg1 + 16, right: 8, top: 16, height: diff, flexDirection: "row", alignItems: "center" };
  return obj;
});
const __initData = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
const memoResult = react.memo(function GuildsBarEmptyNUX() {
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
  let obj = stateFromStores(token1[10]);
  const token = obj.useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_14(token, closure_9());
  let obj2 = stateFromStores(token1[11]);
  const items = [SelectedGuildStore];
  stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId() === EMPTY_NUX_SERVER);
  const obj3 = stateFromStores(token1[12]);
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
  const obj4 = stateFromStores(token1[10]);
  token1 = obj4.useToken(sharedValue(token1[8]).colors.BACKGROUND_SURFACE_HIGH);
  const obj5 = stateFromStores(token1[10]);
  token2 = obj5.useToken(sharedValue(token1[8]).colors.BACKGROUND_BRAND);
  const fn = function o() {
    const obj = spring;
    const obj2 = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
    return obj2;
  };
  const obj6 = stateFromStores(token1[12]);
  fn.__closure = { withSpring: stateFromStores(token1[13]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 15012639840543;
  fn.__initData = __initData;
  ({ withSpring: stateFromStores(token1[13]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS });
  const animatedStyle = obj6.useAnimatedStyle(fn);
  const enableHome = token2.useContext(stateFromStores(token1[14]).HomeDrawerStateContext).enableHome;
  const obj8 = { onPress: handlePress };
  const tmp13 = sharedValue(token1[15])(obj8);
  const obj9 = { style: tmp5.container, onPressIn: callback, onPressOut: callback1, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: intl.string(stateFromStores(token1[16]).t["3S2xmm"]), accessibilityState: { selected: stateFromStores }, hitSlop, children: items4 };
  intl = stateFromStores(token1[16]).intl;
  const obj10 = { style: items3 };
  items3 = [tmp5.backdrop, animatedStyle];
  items4 = [closure_12(sharedValue(token1[12]).View, obj10), , ];
  const obj11 = { style: tmp5.icon, source: sharedValue(token1[17]), resizeMode: "contain" };
  items4[1] = closure_12(closure_5, obj11);
  const obj12 = { style: tmp5.guildIndicator, children: closure_12(stateFromStores(token1[18]).UnreadIndicator, obj13) };
  obj13 = { selected: true === stateFromStores };
  items4[2] = closure_12(closure_6, obj12);
  const obj14 = { style: tmp5.root, children: items5 };
  items5 = [closure_13(closure_4, obj9), ];
  let tmp15Result = null;
  closure_13(closure_4, obj9);
  const tmp14 = closure_13;
  const tmp17 = sharedValue(token1[19]);
  if (enableHome) {
    const obj15 = { style: tmp5.expandedChildren, collapsable: false, children: closure_12(HomeDrawerSharedItem, obj16) };
    const tmp3Result = tmp3(token1[19]);
    const merged = Object.assign(tmp13);
    obj16 = { title: closure_12(Text, obj17) };
    HomeDrawerSharedItem = tmp(tmp2[20]).HomeDrawerSharedItem;
    obj17 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl2.string(stateFromStores(token1[16]).t["3S2xmm"]) };
    Text = tmp(tmp2[21]).Text;
    intl2 = tmp(tmp2[16]).intl;
    tmp15Result = tmp15(tmp3Result, obj15);
  }
  items5[1] = tmp15Result;
  return tmp14(tmp17, obj14);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default memoResult;
