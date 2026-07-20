// Module ID: 15115
// Function ID: 114081
// Name: CutoutGuildIcon
// Dependencies: []
// Exports: default

// Module 15115 (CutoutGuildIcon)
function CutoutGuildIcon(guild) {
  let obj = { style: { aze: false, azj: false } };
  obj = {};
  obj = {};
  const tmp = callback3();
  obj.shape = arg1(dependencyMap[8]).CutoutShape.RoundedRect;
  obj.cornerRadius = importDefault(dependencyMap[7]).radii.md;
  const items = [obj];
  obj.cutouts = items;
  const obj1 = { guild: guild.guild };
  const tmp2 = importDefault(dependencyMap[8]);
  obj1.size = arg1(dependencyMap[9]).GuildIconSizes.XSMALL;
  obj1.style = tmp.guildIconBG;
  obj.children = callback2(importDefault(dependencyMap[9]), obj1);
  obj.children = callback2(tmp2, obj);
  return callback2(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { 9223372036854775807: true, 9223372036854775807: "/assets/modules/guild_role_subscriptions/native/images", -9223372036854775808: 24, 9223372036854775807: 24, -9223372036854775808: null, 0: "7b2c77b138d492ded1f4019723f50b05", borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.guildIconBG = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
obj.refreshMorePillContainer = {};
let closure_11 = obj.createStyles(obj);
let closure_12 = {};
let closure_13 = { code: "function NewContentPillTsx1(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};}" };
let closure_14 = { code: "function NewContentPillTsx2(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};}" };
const obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/icymi/native/NewContentPill.tsx");

export default function NewContentPill(onPress) {
  onPress = onPress.onPress;
  const arg1 = onPress;
  const isRefreshing = onPress.isRefreshing;
  const importDefault = isRefreshing;
  let closure_8;
  let isFocused;
  let first2;
  let callback3;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => first1.getNewUnreadDehydratedItems());
  const dependencyMap = stateFromStoresArray;
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items1, () => first1.hasNewContent(), []);
  let callback = stateFromStores;
  const tmp4 = callback(React.useState(stateFromStoresArray), 2);
  const first = tmp4[0];
  const React = first;
  let closure_5 = tmp4[1];
  const items2 = [first];
  let closure_6 = React.useMemo(() => {
    const items = [];
    const onPress = items;
    const item = first.forEach((data) => {
      if (items.length < items(closure_2[12]).MIN_ITEMS_FOR_NEW_PILL) {
        let isGuildItemResult = items(closure_2[13]).isGuildItem(data);
        if (isGuildItemResult) {
          isGuildItemResult = !items.includes(data.data.guild_id);
        }
        if (isGuildItemResult) {
          items.push(data.data.guild_id);
        }
        const obj = items(closure_2[13]);
      }
    });
    return items;
  }, items2);
  let obj2 = arg1(dependencyMap[10]);
  const items3 = [closure_7];
  const stateFromStoresArray1 = obj2.useStateFromStoresArray(items3, () => {
    const mapped = closure_6.map((guildId) => guild.getGuild(guildId));
    return mapped.filter(Boolean);
  });
  const tmp7 = callback(React.useState(false), 2);
  closure_7 = tmp7[1];
  let first1 = stateFromStores;
  if (stateFromStores) {
    first1 = tmp7[0];
  }
  closure_8 = first1;
  let obj3 = arg1(dependencyMap[14]);
  const fn = function y() {
    let obj = {};
    obj = {};
    let num = 0;
    if (first1) {
      num = 12;
    }
    obj.translateY = onPress(stateFromStoresArray[15]).withSpring(num, closure_12);
    const items = [obj];
    obj.transform = items;
    const obj3 = onPress(stateFromStoresArray[15]);
    let num2 = 0;
    if (first1) {
      num2 = 1;
    }
    obj.opacity = onPress(stateFromStoresArray[15]).withSpring(num2, closure_12, "respect-motion-settings");
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[15]).withSpring, showingPill: first1, springConfig: closure_12 };
  fn.__closure = obj;
  fn.__workletHash = 13655660855782;
  fn.__initData = closure_13;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj5 = arg1(dependencyMap[14]);
  class C {
    constructor() {
      obj = {};
      str = "none";
      if (closure_8) {
        str = "box-none";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  obj = { showingPill: first1 };
  C.__closure = obj;
  C.__workletHash = 876312391659;
  C.__initData = closure_14;
  const animatedProps = obj5.useAnimatedProps(C);
  let obj7 = arg1(dependencyMap[16]);
  isFocused = obj7.useIsFocused();
  const tmp12 = callback(React.useState(false), 2);
  first2 = tmp12[0];
  callback3 = tmp12[1];
  const items4 = [stateFromStores, isFocused, first2];
  const layoutEffect = React.useLayoutEffect(() => {
    if (!first2) {
      if (isFocused) {
        if (stateFromStores) {
          callback2(false);
        }
        callback3(isFocused);
      }
    }
    let tmp5 = first2;
    if (first2) {
      tmp5 = isFocused;
    }
    if (tmp5) {
      tmp5 = !stateFromStores;
    }
    if (tmp5) {
      callback2(true);
    }
  }, items4);
  const items5 = [isRefreshing, stateFromStoresArray, stateFromStores];
  const effect = React.useEffect(() => {
    if (!isRefreshing) {
      callback(stateFromStoresArray);
    }
  }, items5);
  const items6 = [onPress];
  callback = React.useCallback(() => {
    onPress();
  }, items6);
  if (0 === stateFromStoresArray1.length) {
    obj1 = {};
    const items7 = [tmp.refreshMorePillContainer, animatedStyle];
    obj1.style = items7;
    obj1.animatedProps = animatedProps;
    obj2 = { onPress: callback, style: tmp.container };
    const items8 = [isFocused(arg1(dependencyMap[18]).ArrowSmallUpIcon, {}), ];
    obj3 = { Promise: "text-sm/semibold", marginTop: "interactive-text-hover", flags: 3 };
    const obj4 = { marginLeft: 4 };
    obj3.style = obj4;
    const intl = arg1(dependencyMap[20]).intl;
    obj3.children = intl.string(arg1(dependencyMap[20]).t.4Nl0Rl);
    items8[1] = isFocused(arg1(dependencyMap[19]).Text, obj3);
    obj2.children = items8;
    obj1.children = first2(arg1(dependencyMap[17]).PressableOpacity, obj2);
    let tmp41Result = isFocused(importDefault(dependencyMap[14]).View, obj1);
  } else {
    obj5 = {};
    const items9 = [tmp.refreshMorePillContainer, animatedStyle];
    obj5.style = items9;
    obj5.animatedProps = animatedProps;
    const obj6 = { onPress: callback, style: tmp.container };
    if (isRefreshing) {
      obj7 = {};
      let obj9 = arg1(dependencyMap[21]);
      const unsafe_rawColors = importDefault(dependencyMap[7]).unsafe_rawColors;
      obj7.color = obj9.isThemeDark(tmp6) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
      tmp47(closure_5, obj7);
      const isThemeDarkResult = obj9.isThemeDark(tmp6);
      const tmp19 = closure_5;
    } else {
      const items10 = [tmp47(arg1(dependencyMap[18]).ArrowSmallUpIcon, {}), , ];
      const substr = stateFromStoresArray1.slice(0, stateFromStoresArray1.length - 1);
      items10[1] = substr.map((guild) => {
        let obj = {};
        obj = {};
        let num = 4;
        if (arg1 > 0) {
          num = -2;
        }
        obj.marginLeft = num;
        obj.style = obj;
        obj = { guild };
        obj.children = isFocused(closure_15, obj);
        return isFocused(closure_6, obj, guild.id);
      });
      const obj8 = {};
      obj9 = {};
      let num4 = 4;
      if (stateFromStoresArray1.length > 1) {
        num4 = -2;
      }
      obj9.marginLeft = num4;
      obj8.style = obj9;
      const obj10 = { guild: stateFromStoresArray1[stateFromStoresArray1.length - 1], size: arg1(dependencyMap[9]).GuildIconSizes.XSMALL, style: tmp.guildIconBG };
      obj8.children = isFocused(importDefault(dependencyMap[9]), obj10);
      items10[2] = isFocused(closure_6, obj8);
      obj6.children = items10;
      obj5.children = tmp44(tmp46, obj6);
      tmp41Result = tmp41(importDefault(dependencyMap[14]).View, obj5);
      const tmp26 = isFocused;
      const tmp27 = closure_6;
      const tmp31 = importDefault(dependencyMap[9]);
    }
    const tmp41 = isFocused;
    const tmp44 = first2;
  }
  return tmp41Result;
};
