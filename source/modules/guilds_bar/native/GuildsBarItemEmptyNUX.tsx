// Module ID: 14745
// Function ID: 111181
// Dependencies: []

// Module 14745
const importAllResult = importAll(dependencyMap[0]);
({ Pressable: closure_4, Image: closure_5, View: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ DM_WIDTH: closure_8, EMPTY_NUX_SERVER: closure_9 } = arg1(dependencyMap[3]));
const MODE_CHANGE_PHYSICS = arg1(dependencyMap[4]).MODE_CHANGE_PHYSICS;
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
let closure_13 = { marginTop: 8, marginVertical: 40, maxHeight: 4, maxWidth: "center" };
const tmp4 = arg1(dependencyMap[5]);
let closure_14 = arg1(dependencyMap[6]).createStyles((width) => {
  let obj = {};
  obj = { "Null": "heading-xxl/semibold", "Null": "text-overlay-light", "Null": 2, alignItems: "last_dismissed_version", flex: "scalar", marginTop: importDefault(dependencyMap[7]).modules.mobile.GUILD_BAR_ITEM_PADDING, width };
  obj.container = obj;
  obj = { left: -closure_8 - width / 2 };
  obj.guildIndicator = obj;
  obj.icon = {};
  const obj1 = { "Null": "user", "Null": "flex", width, height: width - 10, borderRadius: width / 3 };
  obj.backdrop = obj1;
  return obj;
});
let closure_15 = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function GuildsBarEmptyNUX() {
  let obj = arg1(dependencyMap[8]);
  const tmp = callback3(obj.useToken(importDefault(dependencyMap[7]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => guildId.getGuildId() === closure_9);
  const arg1 = stateFromStores;
  const callback = importAllResult.useCallback(() => {
    stateFromStores(token[10]).transitionToGuild(closure_9);
  }, []);
  let obj2 = arg1(dependencyMap[11]);
  const sharedValue = obj2.useSharedValue(false);
  const importDefault = sharedValue;
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback1 = importAllResult.useCallback(() => {
    const result = sharedValue.set(true);
  }, items1);
  const callback2 = importAllResult.useCallback(() => {
    const result = sharedValue.set(false);
  }, items2);
  let obj3 = arg1(dependencyMap[8]);
  const token = obj3.useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH);
  const dependencyMap = token;
  const token1 = arg1(dependencyMap[8]).useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND);
  const obj5 = arg1(dependencyMap[8]);
  const fn = function o() {
    const obj = { backgroundColor: stateFromStores(token[12]).withSpring(stateFromStores ? token1 : token, closure_10, "animate-always") };
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[12]).withSpring, selected: stateFromStores, activeColor: token1, inactiveColor: token, MODE_CHANGE_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 15012639840543;
  fn.__initData = closure_15;
  obj = { style: tmp.container, onPressIn: callback1, onPressOut: callback2, onPress: callback, accessible: true, accessibilityRole: "button" };
  const animatedStyle = arg1(dependencyMap[11]).useAnimatedStyle(fn);
  const intl = arg1(dependencyMap[13]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.3S2xmm);
  obj.accessibilityState = { selected: stateFromStores };
  obj.hitSlop = closure_13;
  const items3 = [tmp.backdrop, animatedStyle];
  const items4 = [callback(importDefault(dependencyMap[11]).View, { style: items3 }), , ];
  obj1 = { style: tmp.icon, source: importDefault(dependencyMap[14]), resizeMode: "contain" };
  items4[1] = callback(closure_5, obj1);
  obj2 = { style: tmp.guildIndicator, children: callback(arg1(dependencyMap[15]).UnreadIndicator, obj3) };
  obj3 = { selected: true === stateFromStores };
  items4[2] = callback(closure_6, obj2);
  obj.children = items4;
  return callback2(closure_4, obj);
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default memoResult;
