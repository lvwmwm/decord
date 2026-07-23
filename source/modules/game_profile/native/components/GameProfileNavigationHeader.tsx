// Module ID: 11875
// Function ID: 91922
// Name: StyleSheet
// Dependencies: [31, 27, 33, 4130, 689, 3991, 4131, 1392, 8372, 4126, 8632, 2]
// Exports: default

// Module 11875 (StyleSheet)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ Image: closure_4, View: closure_5, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 56, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" };
_createForOfIteratorHelperLoose.headerContainer = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.headerRow = obj1;
let obj2 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.icon = obj2;
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, minWidth: 0 };
_createForOfIteratorHelperLoose.titleContainer = obj3;
_createForOfIteratorHelperLoose.headerRight = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.rankPillContainer = { flex: 1, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function GameProfileNavigationHeaderTsx1(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}" };
let closure_11 = { code: "function GameProfileNavigationHeaderTsx2(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}" };
let result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default function GameProfileNavigationHeader(game) {
  game = game.game;
  const application = game.application;
  const headerRight = game.headerRight;
  let sharedValue;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp2;
  let obj = game(3991);
  let num = 0;
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  const items = [null != headerRight, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    if (tmp2) {
      num = 1;
    }
    const result = sharedValue.set(game(tmp2[6]).withTiming(num, { duration: 200 }));
  }, items);
  let obj1 = game(3991);
  const fn = function x() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { headerRightProgress: sharedValue };
  fn.__workletHash = 16001524280109;
  fn.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj2 = game(3991);
  const fn2 = function b() {
    return { opacity: 1 - sharedValue.get() };
  };
  fn2.__closure = { headerRightProgress: sharedValue };
  fn2.__workletHash = 5182160908530;
  fn2.__initData = closure_11;
  const items1 = [game, application];
  const animatedStyle1 = obj2.useAnimatedStyle(fn2);
  const memo = sharedValue.useMemo(() => {
    let iconURL;
    if (null != game) {
      let str = "png";
      if (game(game[7]).SUPPORTS_WEBP) {
        str = "webp";
      }
      iconURL = game.getIconURL(32, str);
    }
    if (null == iconURL) {
      let iconURL1;
      if (null != application) {
        let str2 = "png";
        if (game(tmp2[7]).SUPPORTS_WEBP) {
          str2 = "webp";
        }
        iconURL1 = application.getIconURL(32, str2);
      }
      iconURL = iconURL1;
    }
    let tmp10 = null;
    if (null != iconURL) {
      tmp10 = iconURL;
    }
    return tmp10;
  }, items1);
  let name;
  if (null != game) {
    name = game.name;
  }
  if (null == name) {
    let name1;
    if (null != application) {
      name1 = application.name;
    }
    name = name1;
  }
  let tmp11Result = null;
  if (null != name) {
    obj = { style: tmp.headerContainer };
    const items2 = [callback(game(8372).BackgroundBlurFill, {}), ];
    obj = { style: tmp.headerRow };
    let tmp16 = null != memo;
    if (tmp16) {
      obj1 = {};
      obj2 = { uri: memo };
      obj1.source = obj2;
      obj1.style = tmp.icon;
      tmp16 = callback(closure_4, obj1);
    }
    const items3 = [tmp16, , ];
    const obj3 = { style: tmp.titleContainer };
    const obj4 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
    const items4 = [callback(game(4126).Heading, obj4), ];
    let l30Rank;
    if (null != game) {
      l30Rank = game.l30Rank;
    }
    let tmp25 = null != l30Rank;
    if (tmp25) {
      const obj5 = { style: tmp.rankPillContainer };
      const obj6 = { rank: game.l30Rank, compact: true };
      const items5 = [callback(application(8632), obj6), ];
      const obj7 = {};
      const items6 = [StyleSheet.absoluteFill, animatedStyle1];
      obj7.style = items6;
      const obj8 = { rank: game.l30Rank };
      obj7.children = callback(application(8632), obj8);
      items5[1] = callback(application(3991).View, obj7);
      obj5.children = items5;
      tmp25 = callback2(closure_5, obj5);
    }
    items4[1] = tmp25;
    obj3.children = items4;
    items3[1] = callback2(closure_5, obj3);
    let tmp32 = null != headerRight;
    if (tmp32) {
      const obj9 = {};
      const items7 = [tmp.headerRight, animatedStyle];
      obj9.style = items7;
      obj9.children = headerRight();
      tmp32 = callback(application(3991).View, obj9);
    }
    items3[2] = tmp32;
    obj.children = items3;
    items2[1] = callback2(closure_5, obj);
    obj.children = items2;
    tmp11Result = tmp11(tmp12, obj);
    const tmp19 = callback2;
    const tmp20 = closure_5;
  }
  return tmp11Result;
};
