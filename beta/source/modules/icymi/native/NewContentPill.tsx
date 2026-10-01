// Module ID: 16160
// Function ID: 16161
// Name: NewContentPill
// Dependencies: [32, 19, 17, 2067, 7783, 21, 4836, 576, 8276, 5896, 504, 4767, 7796, 7798, 4566, 5280, 1488, 5435, 15348, 4832, 1115, 4685, 2]
// Exports: default

// Module 16160 (NewContentPill)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import ClipView from "ClipView" /* 8276 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function CutoutGuildIcon(guild) {
  let items;
  let obj2;
  let obj3;
  let tmp2;
  let tmp3;
  guild = guild.guild;
  const obj = { style: { width: 24, height: 24 }, children: React4(tmp2, obj2) };
  obj2 = { cutouts: items, children: React4(tmp3, obj3) };
  size = { shape: ClipView.CutoutShape.RoundedRect, x: 18, y: -4, width: 32, height: 32, cornerRadius: nativeDefault.radii.md };
  const tmp = closure_11();
  items = [size];
  tmp2 = ClipViewDefault;
  obj3 = { guild, size: GuildIcon.GuildIconSizes.XSMALL, style: tmp.guildIconBG };
  tmp3 = GuildIconDefault;
  return React4(metroRequire, obj);
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildIconBG: obj3, refreshMorePillContainer: { position: "absolute", top: 0, left: 0, height: 32, width: "100%", zIndex: 100 } };
obj2 = { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_11 = createStyles(obj);
const springConfig = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
const __initData = { code: "function NewContentPillTsx1(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};}" };
const __initData2 = { code: "function NewContentPillTsx2(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};}" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/NewContentPill.tsx");

export default function NewContentPill(onPress) {
  let PressableOpacity;
  let PressableOpacity2;
  let intl;
  let items10;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj13;
  let obj14;
  let obj7;
  let tmp29Result2;
  let tmp30;
  let tmp9Result;
  onPress = onPress.onPress;
  const isRefreshing = onPress.isRefreshing;
  let stateFromStoresArray;
  let first;
  let closure_7;
  let closure_8;
  let isFocused;
  let first1;
  closure_11 = undefined;
  let tmp = closure_11();
  let tmp2 = onPress;
  let tmp3 = stateFromStoresArray;
  let obj = onPress(stateFromStoresArray[10]);
  let items = [closure_8];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => closure_8.getNewUnreadDehydratedItems());
  let obj2 = onPress(stateFromStoresArray[10]);
  const items1 = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items1, () => closure_8.hasNewContent(), []);
  const tmp7 = stateFromStores(first.useState(stateFromStoresArray), 2);
  first = tmp7[0];
  let closure_5 = tmp7[1];
  const items2 = [first];
  const tmp10 = isRefreshing(stateFromStoresArray[11])();
  let closure_6 = first.useMemo(() => {
    const items = [];
    const item = first.forEach((data) => {
      const tmp = onPress;
      const tmp2 = stateFromStoresArray;
      if (items.length < onPress(stateFromStoresArray[12]).MIN_ITEMS_FOR_NEW_PILL) {
        const tmpResult = tmp(tmp2[13]);
        const tmp4 = tmpResult.isGuildItem(data) && !items.includes(data.data.guild_id);
        if (tmp4) {
          items.push(data.data.guild_id);
        }
      }
    });
    return items;
  }, items2);
  const items3 = [closure_7];
  const obj4 = onPress(stateFromStoresArray[10]);
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items3, () => {
    let guild;
    const mapped = closure_6.map((item) => guild.getGuild(item));
    return mapped.filter(Boolean);
  });
  const tmp11 = stateFromStores(first.useState(false), 2);
  closure_7 = tmp11[1];
  closure_8 = tmp12;
  const fn = function y() {
    let items;
    let num2;
    let tmp5;
    let withSpring2;
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (closure_8) {
      num = 12;
    }
    const obj = { transform: items, opacity: withSpring2(num2, tmp5, "respect-motion-settings") };
    items = [{ translateY: withSpring(num, springConfig) }];
    ({ translateY: withSpring(num, springConfig) });
    num2 = 0;
    withSpring2 = tmp(5280).withSpring;
    spring;
    tmp5 = springConfig;
    if (closure_8) {
      num2 = 1;
    }
    return obj;
  };
  const tmp2Result = tmp2(tmp3[14]);
  fn.__closure = { withSpring: tmp2(tmp3[15]).withSpring, showingPill: stateFromStores && tmp11[0], springConfig };
  fn.__workletHash = 13655660855782;
  fn.__initData = __initData;
  ({ withSpring: tmp2(tmp3[15]).withSpring, showingPill: stateFromStores && tmp11[0], springConfig });
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const tmp2Result4 = tmp2(tmp3[14]);
  const tmp6 = stateFromStores;
  class C {
    constructor() {
      let pointerEvents = "none";
      if (closure_8) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  C.__closure = { showingPill: stateFromStores && tmp11[0] };
  C.__workletHash = 876312391659;
  C.__initData = __initData2;
  const animatedProps = tmp2Result4.useAnimatedProps(C);
  const tmp2Result5 = tmp2(tmp3[16]);
  isFocused = tmp2Result5.useIsFocused();
  const tmp6Result = tmp6(first.useState(false), 2);
  first1 = tmp6Result[0];
  closure_11 = tmp6Result[1];
  const items4 = [stateFromStores, isFocused, first1];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let tmp = first1;
    if (!tmp) {
      const tmp2 = isFocused;
      if (tmp2) {
        const tmp3 = stateFromStores;
        if (tmp3) {
          closure_7(false);
        }
        closure_11(isFocused);
      }
    }
    if (tmp) {
      tmp = isFocused;
    }
    if (tmp) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      closure_7(true);
    }
  }, items4);
  const items5 = [isRefreshing, stateFromStoresArray, stateFromStores];
  const effect = obj3.useEffect(() => {
    const tmp = isRefreshing;
    if (!tmp) {
      closure_5(stateFromStoresArray);
    }
  }, items5);
  const items6 = [onPress];
  const callback = obj3.useCallback(() => {
    onPress();
  }, items6);
  if (0 === stateFromStoresArray1.length) {
    const obj6 = { style: items7, animatedProps, children: first1(PressableOpacity, obj7) };
    items7 = [tmp.refreshMorePillContainer, animatedStyle];
    const View = tmp9(tmp3[14]).View;
    obj7 = { onPress: callback, style: tmp.container, children: items8 };
    PressableOpacity = tmp2(tmp3[17]).PressableOpacity;
    items8 = [isFocused(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), ];
    const obj8 = { style: { marginLeft: 4 }, variant: "heading-md/bold", color: "interactive-text-active", children: intl.string(tmp2(tmp3[20]).t["4Nl0Rl"]) };
    const Text = tmp2(tmp3[19]).Text;
    intl = tmp2(tmp3[20]).intl;
    items8[1] = isFocused(Text, obj8);
    tmp29Result2 = isFocused(View, obj6);
  } else {
    let tmp29Result;
    const obj9 = { style: items9, animatedProps, children: tmp30(PressableOpacity2, obj10) };
    items9 = [tmp.refreshMorePillContainer, animatedStyle];
    const View2 = tmp9(tmp3[14]).View;
    obj10 = { onPress: callback, style: tmp.container, children: items10 };
    PressableOpacity2 = tmp2(tmp3[17]).PressableOpacity;
    tmp30 = first1;
    if (isRefreshing) {
      const tmp2Result6 = tmp2(tmp3[21]);
      const isThemeDarkResult = tmp2Result6.isThemeDark(tmp10);
      const unsafe_rawColors = tmp9(tmp3[7]).unsafe_rawColors;
      const obj11 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500 };
      tmp29Result = tmp29(closure_5, obj11);
    } else {
      tmp29Result = tmp29(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" });
    }
    items10 = [tmp29Result, , ];
    let num = 1;
    const substr = stateFromStoresArray1.slice(0, stateFromStoresArray1.length - 1);
    items10[1] = substr.map((guild, index) => {
      let obj2;
      let num = 4;
      const tmp2 = closure_6;
      if (index > 0) {
        num = -2;
      }
      const obj = { style: { marginLeft: num }, children: isFocused(CutoutGuildIcon, obj2) };
      obj2 = { guild };
      return isFocused(tmp2, obj, guild.id);
    });
    let num2 = 4;
    const tmp24 = closure_6;
    if (stateFromStoresArray1.length > 1) {
      num2 = -2;
    }
    const obj12 = { style: obj13, children: isFocused(tmp9Result, obj14) };
    obj13 = { marginLeft: num2 };
    obj14 = { guild: stateFromStoresArray1[stateFromStoresArray1.length - 1], size: tmp2(tmp3[9]).GuildIconSizes.XSMALL, style: tmp.guildIconBG };
    tmp9Result = isRefreshing(tmp3[9]);
    items10[2] = isFocused(tmp24, obj12);
    tmp29Result2 = tmp29(View2, obj9);
  }
  return tmp29Result2;
};
