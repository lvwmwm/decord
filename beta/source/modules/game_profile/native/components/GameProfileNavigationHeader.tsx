// Module ID: 8369
// Function ID: 8370
// Name: GameProfileNavigationHeader
// Dependencies: [19, 17, 21, 4836, 576, 4531, 4566, 4837, 1397, 8370, 4832, 8172, 2]
// Exports: default

// Module 8369 (GameProfileNavigationHeader)
import nativeDefault from "native" /* 576 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
({ Image: closure_4, View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerContainer: obj2, headerRow: obj3, icon: size, titleContainer: obj4, headerRight: { flexDirection: "row", alignItems: "center" }, rankPillContainer: { flex: 1, flexDirection: "row", alignItems: "center" } };
obj2 = { height: 56, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
let closure_9 = createStyles(obj);
const __initData = { code: "function GameProfileNavigationHeaderTsx1(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}" };
const __initData2 = { code: "function GameProfileNavigationHeaderTsx2(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default function GameProfileNavigationHeader(game) {
  let closure_2;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj12;
  let obj6;
  game = game.game;
  const application = game.application;
  const headerRight = game.headerRight;
  let sharedValue;
  let tmp = closure_9();
  const tmp2 = game;
  let obj = game(4531);
  dependencyMap = tmp6;
  const token = obj.useToken(application(576).colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN);
  let num = 0;
  const useSharedValue = game(4566).useSharedValue;
  const tmp7 = game(4566);
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items = [null != headerRight, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (closure_2) {
      num = 1;
    }
    const result = set(withTiming(num, { duration: 200 }));
  }, items);
  const fn = function b() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { headerRightProgress: sharedValue };
  fn.__workletHash = 16001524280109;
  fn.__initData = __initData;
  const tmp2Result = tmp2(4566);
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const fn2 = function k() {
    const obj = { opacity: 1 - sharedValue.get() };
    return obj;
  };
  fn2.__closure = { headerRightProgress: sharedValue };
  fn2.__workletHash = 5182160908530;
  fn2.__initData = __initData2;
  const items1 = [game, application];
  const tmp2Result2 = tmp2(4566);
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(fn2);
  const memo = sharedValue.useMemo(() => {
    let iconURL;
    const tmp = game;
    if (game != null) {
      const getIconURL = tmp.getIconURL;
      let str = "png";
      if (AvatarUtils.SUPPORTS_WEBP) {
        str = "webp";
      }
      iconURL = getIconURL(32, str);
    }
    if (iconURL == null) {
      let iconURL2;
      const tmp5 = application;
      if (application != null) {
        const getIconURL2 = tmp5.getIconURL;
        let str2 = "png";
        if (AvatarUtils.SUPPORTS_WEBP) {
          str2 = "webp";
        }
        iconURL2 = getIconURL2(32, str2);
      }
      iconURL = iconURL2;
    }
    if (iconURL == null) {
      iconURL = null;
    }
    return iconURL;
  }, items1);
  let name;
  if (game != null) {
    name = game.name;
  }
  if (name == null) {
    let name1;
    if (application != null) {
      name1 = application.name;
    }
    name = name1;
  }
  let tmp16Result2 = null;
  if (null != name) {
    const obj2 = { style: tmp.headerContainer, children: items2 };
    const obj3 = { android_fallbackColor: token };
    items2 = [closure_7(tmp2(8370).BackgroundBlurFill, obj3), ];
    let tmp18Result = null != memo;
    const obj4 = { style: tmp.headerRow, children: items3 };
    if (tmp18Result) {
      const obj5 = { source: obj6, style: tmp.icon };
      obj6 = { uri: memo };
      tmp18Result = tmp18(closure_4, obj5);
    }
    items3 = [tmp18Result, , ];
    const obj7 = { style: tmp.titleContainer, children: items4 };
    const obj8 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
    items4 = [closure_7(tmp2(4832).Heading, obj8), ];
    let l30Rank;
    if (game != null) {
      l30Rank = game.l30Rank;
    }
    let tmp16Result = null != l30Rank;
    if (tmp16Result) {
      const obj10 = { rank: game.l30Rank, compact: true };
      const obj9 = { style: tmp.rankPillContainer, children: items5 };
      items5 = [closure_7(tmp4(8172), obj10), ];
      const obj11 = { style: items6, children: closure_7(application(8172), obj12) };
      items6 = [StyleSheet.absoluteFill, animatedStyle1];
      const View = tmp4(4566).View;
      obj12 = { rank: game.l30Rank };
      items5[1] = closure_7(View, obj11);
      tmp16Result = tmp16(tmp17, obj9);
    }
    items4[1] = tmp16Result;
    items3[1] = closure_8(closure_5, obj7);
    let tmp18Result2 = null != headerRight;
    if (tmp18Result2) {
      const obj13 = { style: items7, children: headerRight() };
      items7 = [tmp.headerRight, animatedStyle];
      const View2 = tmp4(4566).View;
      tmp18Result2 = tmp18(View2, obj13);
    }
    items3[2] = tmp18Result2;
    items2[1] = closure_8(closure_5, obj4);
    tmp16Result2 = tmp16(tmp17, obj2);
  }
  return tmp16Result2;
};
