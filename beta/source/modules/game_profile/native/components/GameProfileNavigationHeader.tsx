// Module ID: 9710
// Function ID: 9711
// Name: GameProfileNavigationHeader
// Dependencies: [19, 17, 21, 5140, 575, 5724, 1652, 5370, 1411, 9072, 5842, 5751, 9458, 2]
// Exports: default

// Module 9710 (GameProfileNavigationHeader)
import nativeDefault from "native" /* 575 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import timing_timing from "timing/timing" /* 5370 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerContainer: obj2, headerRow: obj3, icon: size, titleContainer: obj4, headerRight: { flexDirection: "row", alignItems: "center" }, rankPillContainer: { flex: 1, flexDirection: "row", alignItems: "center" } };
obj2 = { height: 56, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function GameProfileNavigationHeaderTsx1(){let[headerRightProgress]=this.__closure;return{opacity:headerRightProgress.get()};})" };
let closure_10 = { code: "(function GameProfileNavigationHeaderTsx2(){let[headerRightProgress]=this.__closure;return{opacity:1-headerRightProgress.get()};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default function GameProfileNavigationHeader(game) {
  let closure_2;
  let items10;
  let items11;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj13;
  let obj7;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  game = game.game;
  const application = game.application;
  const headerRight = game.headerRight;
  let sharedValue;
  let tmp = closure_8();
  const tmp2 = game;
  let obj = game(5724);
  dependencyMap = tmp6;
  const token = obj.useToken(application(575).colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN);
  let num = 0;
  const useSharedValue = game(1652).useSharedValue;
  const tmp7 = game(1652);
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items = [null != headerRight, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (closure_2) {
      num = 1;
    }
    const result = set(withTiming(num, { duration: 200 }));
  }, items);
  const items1 = [closure_9, sharedValue];
  let c0;
  [tmp10, tmp11] = items1;
  const obj2 = sharedValue;
  const tmp2Result = tmp2(1652);
  class GameProfileNavigationHeaderTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp11];
  GameProfileNavigationHeaderTsx1.__closure = items2;
  GameProfileNavigationHeaderTsx1.__workletHash = 12841236094068;
  GameProfileNavigationHeaderTsx1.__initData = tmp10;
  const animatedStyle = tmp2Result.useAnimatedStyle(GameProfileNavigationHeaderTsx1);
  const items3 = [closure_10, sharedValue];
  c0 = undefined;
  [tmp13, tmp14] = items3;
  const tmp2Result2 = tmp2(1652);
  class GameProfileNavigationHeaderTsx2 {
    constructor() {
      const obj = { opacity: 1 - _undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp14];
  GameProfileNavigationHeaderTsx2.__closure = items4;
  GameProfileNavigationHeaderTsx2.__workletHash = 15239718995275;
  GameProfileNavigationHeaderTsx2.__initData = tmp13;
  const items5 = [game, application];
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(GameProfileNavigationHeaderTsx2);
  const memo = obj2.useMemo(() => {
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
  }, items5);
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
  let tmp20Result2 = null;
  if (null != name) {
    const obj3 = { style: tmp.headerContainer, children: items6 };
    const obj4 = { android_fallbackColor: token };
    items6 = [closure_6(tmp2(9072).BackgroundBlurFill, obj4), ];
    let tmp22Result = null != memo;
    const obj5 = { style: tmp.headerRow, children: items7 };
    if (tmp22Result) {
      const obj6 = { source: obj7, style: tmp.icon };
      obj7 = { uri: memo };
      tmp22Result = tmp22(tmp4(5842), obj6);
    }
    items7 = [tmp22Result, , ];
    const obj8 = { style: tmp.titleContainer, children: items8 };
    const obj9 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
    items8 = [closure_6(tmp2(5751).Heading, obj9), ];
    let l30Rank;
    if (game != null) {
      l30Rank = game.l30Rank;
    }
    let tmp20Result = null != l30Rank;
    if (tmp20Result) {
      const obj10 = { style: tmp.rankPillContainer, children: items9 };
      const obj11 = { rank: game.l30Rank, compact: true };
      items9 = [closure_6(tmp4(9458), obj11), ];
      const obj12 = { style: items10, children: closure_6(application(9458), obj13) };
      items10 = [StyleSheet.absoluteFill, animatedStyle1];
      const View = tmp4(1652).View;
      obj13 = { rank: game.l30Rank };
      items9[1] = closure_6(View, obj12);
      tmp20Result = tmp20(tmp21, obj10);
    }
    items8[1] = tmp20Result;
    items7[1] = closure_7(closure_4, obj8);
    let tmp22Result2 = null != headerRight;
    if (tmp22Result2) {
      const obj14 = { style: items11, children: headerRight() };
      items11 = [tmp.headerRight, animatedStyle];
      const View2 = tmp4(1652).View;
      tmp22Result2 = tmp22(View2, obj14);
    }
    items7[2] = tmp22Result2;
    items6[1] = closure_7(closure_4, obj5);
    tmp20Result2 = tmp20(tmp21, obj3);
  }
  return tmp20Result2;
};
