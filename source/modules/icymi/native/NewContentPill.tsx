// Module ID: 15248
// Function ID: 116351
// Name: CutoutGuildIcon
// Dependencies: [57, 31, 27, 1838, 8306, 33, 4130, 689, 7873, 5515, 566, 4066, 7087, 8320, 3991, 4542, 1459, 4660, 13953, 4126, 1212, 3976, 2]
// Exports: default

// Module 15248 (CutoutGuildIcon)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function CutoutGuildIcon(guild) {
  let obj = { style: { width: 24, height: 24 } };
  obj = {};
  obj = { shape: null, x: 18, y: -4, width: 32, height: 32 };
  const tmp = _createForOfIteratorHelperLoose();
  obj.shape = require(7873) /* SolidCutout */.CutoutShape.RoundedRect;
  obj.cornerRadius = importDefault(689).radii.md;
  const items = [obj];
  obj.cutouts = items;
  const obj1 = { guild: guild.guild };
  const tmp2 = importDefault(7873);
  obj1.size = require(5515) /* makeSizeStyle */.GuildIconSizes.XSMALL;
  obj1.style = tmp.guildIconBG;
  obj.children = callback(importDefault(5515), obj1);
  obj.children = callback(tmp2, obj);
  return callback(closure_6, obj);
}
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildIconBG = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.refreshMorePillContainer = { position: "absolute", top: 0, left: 0, height: 32, width: "100%", zIndex: 100 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
let closure_13 = { code: "function NewContentPillTsx1(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};}" };
let closure_14 = { code: "function NewContentPillTsx2(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};}" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/NewContentPill.tsx");

export default function NewContentPill(onPress) {
  onPress = onPress.onPress;
  const isRefreshing = onPress.isRefreshing;
  let first1;
  let isFocused;
  let first2;
  let _createForOfIteratorHelperLoose;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = onPress(stateFromStoresArray[10]);
  let items = [first1];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => first1.getNewUnreadDehydratedItems());
  let obj1 = onPress(stateFromStoresArray[10]);
  const items1 = [first1];
  const stateFromStores = obj1.useStateFromStores(items1, () => first1.hasNewContent(), []);
  const tmp4 = stateFromStores(first.useState(stateFromStoresArray), 2);
  first = tmp4[0];
  let closure_5 = tmp4[1];
  const items2 = [first];
  let closure_6 = first.useMemo(() => {
    const items = [];
    const item = first.forEach((data) => {
      if (items.length < onPress(stateFromStoresArray[12]).MIN_ITEMS_FOR_NEW_PILL) {
        let isGuildItemResult = onPress(stateFromStoresArray[13]).isGuildItem(data);
        if (isGuildItemResult) {
          isGuildItemResult = !items.includes(data.data.guild_id);
        }
        if (isGuildItemResult) {
          items.push(data.data.guild_id);
        }
        const obj = onPress(stateFromStoresArray[13]);
      }
    });
    return items;
  }, items2);
  let obj2 = onPress(stateFromStoresArray[10]);
  const items3 = [closure_7];
  const stateFromStoresArray1 = obj2.useStateFromStoresArray(items3, () => {
    const mapped = closure_6.map((guildId) => guild.getGuild(guildId));
    return mapped.filter(Boolean);
  });
  const tmp7 = stateFromStores(first.useState(false), 2);
  closure_7 = tmp7[1];
  first1 = stateFromStores;
  if (stateFromStores) {
    first1 = tmp7[0];
  }
  let obj3 = onPress(stateFromStoresArray[14]);
  const fn = function y() {
    let obj = {};
    obj = {};
    let num = 0;
    if (first1) {
      num = 12;
    }
    obj.translateY = onPress(stateFromStoresArray[15]).withSpring(num, outer1_12);
    const items = [obj];
    obj.transform = items;
    const obj3 = onPress(stateFromStoresArray[15]);
    let num2 = 0;
    if (first1) {
      num2 = 1;
    }
    obj.opacity = onPress(stateFromStoresArray[15]).withSpring(num2, outer1_12, "respect-motion-settings");
    return obj;
  };
  obj = { withSpring: onPress(stateFromStoresArray[15]).withSpring, showingPill: first1, springConfig: closure_12 };
  fn.__closure = obj;
  fn.__workletHash = 13655660855782;
  fn.__initData = closure_13;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj5 = onPress(stateFromStoresArray[14]);
  class C {
    constructor() {
      obj = {};
      str = "none";
      if (c8) {
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
  let obj7 = onPress(stateFromStoresArray[16]);
  isFocused = obj7.useIsFocused();
  const tmp12 = stateFromStores(first.useState(false), 2);
  first2 = tmp12[0];
  _createForOfIteratorHelperLoose = tmp12[1];
  const items4 = [stateFromStores, isFocused, first2];
  const layoutEffect = first.useLayoutEffect(() => {
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
  const effect = first.useEffect(() => {
    if (!isRefreshing) {
      callback(stateFromStoresArray);
    }
  }, items5);
  const items6 = [onPress];
  const callback = first.useCallback(() => {
    onPress();
  }, items6);
  if (0 === stateFromStoresArray1.length) {
    obj1 = {};
    const items7 = [tmp.refreshMorePillContainer, animatedStyle];
    obj1.style = items7;
    obj1.animatedProps = animatedProps;
    obj2 = { onPress: callback, style: tmp.container };
    const items8 = [isFocused(onPress(stateFromStoresArray[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), ];
    obj3 = { style: null, variant: "heading-md/bold", color: "interactive-text-active" };
    const obj4 = { marginLeft: 4 };
    obj3.style = obj4;
    const intl = onPress(stateFromStoresArray[20]).intl;
    obj3.children = intl.string(onPress(stateFromStoresArray[20]).t["4Nl0Rl"]);
    items8[1] = isFocused(onPress(stateFromStoresArray[19]).Text, obj3);
    obj2.children = items8;
    obj1.children = first2(onPress(stateFromStoresArray[17]).PressableOpacity, obj2);
    let tmp41Result = isFocused(isRefreshing(stateFromStoresArray[14]).View, obj1);
  } else {
    obj5 = {};
    const items9 = [tmp.refreshMorePillContainer, animatedStyle];
    obj5.style = items9;
    obj5.animatedProps = animatedProps;
    const obj6 = { onPress: callback, style: tmp.container };
    if (isRefreshing) {
      obj7 = {};
      let obj9 = onPress(stateFromStoresArray[21]);
      const unsafe_rawColors = isRefreshing(stateFromStoresArray[7]).unsafe_rawColors;
      obj7.color = obj9.isThemeDark(tmp6) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
      tmp47(closure_5, obj7);
      const isThemeDarkResult = obj9.isThemeDark(tmp6);
      const tmp19 = closure_5;
    } else {
      const items10 = [tmp47(onPress(stateFromStoresArray[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), , ];
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
        obj.children = isFocused(outer1_15, obj);
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
      const obj10 = { guild: stateFromStoresArray1[stateFromStoresArray1.length - 1], size: onPress(stateFromStoresArray[9]).GuildIconSizes.XSMALL, style: tmp.guildIconBG };
      obj8.children = isFocused(isRefreshing(stateFromStoresArray[9]), obj10);
      items10[2] = isFocused(closure_6, obj8);
      obj6.children = items10;
      obj5.children = tmp44(tmp46, obj6);
      tmp41Result = tmp41(isRefreshing(stateFromStoresArray[14]).View, obj5);
      const tmp26 = isFocused;
      const tmp27 = closure_6;
      const tmp31 = isRefreshing(stateFromStoresArray[9]);
    }
    tmp41 = isFocused;
    tmp44 = first2;
  }
  return tmp41Result;
};
