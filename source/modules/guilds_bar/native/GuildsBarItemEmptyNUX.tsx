// Module ID: 14926
// Function ID: 113771
// Dependencies: [31, 27, 3947, 653, 8811, 33, 4130, 689, 3834, 566, 5737, 3991, 4542, 1212, 14927, 14870, 2]

// Module 14926
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { MODE_CHANGE_PHYSICS } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ Pressable: closure_4, Image: closure_5, View: closure_6 } = get_ActivityIndicator);
({ DM_WIDTH: closure_8, EMPTY_NUX_SERVER: closure_9 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = { top: 4, left: 12, bottom: 4, right: 12 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles((width) => {
  let obj = {};
  obj = { position: "relative", flexDirection: "row", alignItems: "center", marginTop: importDefault(689).modules.mobile.GUILD_BAR_ITEM_PADDING, height: 55, width };
  obj.container = obj;
  obj = { position: "absolute", left: -closure_8 - width / 2, top: 4 };
  obj.guildIndicator = obj;
  obj.icon = { width: 59, height: 55, marginLeft: -3, marginRight: -6 };
  const obj1 = { position: "absolute", top: 16, width, height: width - 10, borderRadius: width / 3 };
  obj.backdrop = obj1;
  return obj;
});
let closure_15 = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
const memoResult = importAllResult.memo(function GuildsBarEmptyNUX() {
  let obj = stateFromStores(token[8]);
  const tmp = callback3(obj.useToken(sharedValue(token[7]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  let obj1 = stateFromStores(token[9]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_7.getGuildId() === outer1_9);
  const callback = token1.useCallback(() => {
    stateFromStores(token[10]).transitionToGuild(outer1_9);
  }, []);
  let obj2 = stateFromStores(token[11]);
  sharedValue = obj2.useSharedValue(false);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback1 = token1.useCallback(() => {
    const result = sharedValue.set(true);
  }, items1);
  const callback2 = token1.useCallback(() => {
    const result = sharedValue.set(false);
  }, items2);
  let obj3 = stateFromStores(token[8]);
  token = obj3.useToken(sharedValue(token[7]).colors.BACKGROUND_SURFACE_HIGH);
  token1 = stateFromStores(token[8]).useToken(sharedValue(token[7]).colors.BACKGROUND_BRAND);
  const obj5 = stateFromStores(token[8]);
  const fn = function o() {
    const obj = { backgroundColor: stateFromStores(token[12]).withSpring(stateFromStores ? token1 : token, outer1_10, "animate-always") };
    return obj;
  };
  obj = { withSpring: stateFromStores(token[12]).withSpring, selected: stateFromStores, activeColor: token1, inactiveColor: token, MODE_CHANGE_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 15012639840543;
  fn.__initData = closure_15;
  obj = { style: tmp.container, onPressIn: callback1, onPressOut: callback2, onPress: callback, accessible: true, accessibilityRole: "button" };
  const animatedStyle = stateFromStores(token[11]).useAnimatedStyle(fn);
  const intl = stateFromStores(token[13]).intl;
  obj.accessibilityLabel = intl.string(stateFromStores(token[13]).t["3S2xmm"]);
  obj.accessibilityState = { selected: stateFromStores };
  obj.hitSlop = closure_13;
  const items3 = [tmp.backdrop, animatedStyle];
  const items4 = [callback(sharedValue(token[11]).View, { style: items3 }), , ];
  obj1 = { style: tmp.icon, source: sharedValue(token[14]), resizeMode: "contain" };
  items4[1] = callback(closure_5, obj1);
  obj2 = { style: tmp.guildIndicator, children: callback(stateFromStores(token[15]).UnreadIndicator, obj3) };
  obj3 = { selected: true === stateFromStores };
  items4[2] = callback(closure_6, obj2);
  obj.children = items4;
  return callback2(closure_4, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default memoResult;
