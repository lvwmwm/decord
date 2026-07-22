// Module ID: 11863
// Function ID: 91869
// Name: StyleSheet
// Dependencies: []
// Exports: default

// Module 11863 (StyleSheet)
let StyleSheet;
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5, StyleSheet } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { width: "header", height: "heading-md/extrabold", borderRadius: "mobile-text-heading-primary", backgroundColor: 1, accessibilityRole: "tail", s: "a", paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.headerContainer = obj;
const obj1 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.headerRow = obj1;
const obj2 = { "Null": true, "Null": true, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.icon = obj2;
const obj3 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.titleContainer = obj3;
obj.headerRight = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
obj.rankPillContainer = { Text: null, applicationId: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", message: true };
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function GameProfileNavigationHeaderTsx1(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}" };
let closure_11 = { code: "function GameProfileNavigationHeaderTsx2(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}" };
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default function GameProfileNavigationHeader(game) {
  game = game.game;
  const arg1 = game;
  const application = game.application;
  const importDefault = application;
  const headerRight = game.headerRight;
  let React;
  const tmp = callback3();
  const dependencyMap = tmp2;
  let obj = arg1(dependencyMap[5]);
  let num = 0;
  if (null != headerRight) {
    num = 1;
  }
  const sharedValue = obj.useSharedValue(num);
  React = sharedValue;
  const items = [null != headerRight, sharedValue];
  const effect = React.useEffect(() => {
    let num = 0;
    if (tmp2) {
      num = 1;
    }
    const result = sharedValue.set(game(tmp2[6]).withTiming(num, { duration: 200 }));
  }, items);
  let obj1 = arg1(dependencyMap[5]);
  const fn = function x() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { headerRightProgress: sharedValue };
  fn.__workletHash = 16001524280109;
  fn.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj2 = arg1(dependencyMap[5]);
  const fn2 = function b() {
    return { opacity: 1 - sharedValue.get() };
  };
  fn2.__closure = { headerRightProgress: sharedValue };
  fn2.__workletHash = 5182160908530;
  fn2.__initData = closure_11;
  const items1 = [game, application];
  const animatedStyle1 = obj2.useAnimatedStyle(fn2);
  const memo = React.useMemo(() => {
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
    const items2 = [callback(arg1(dependencyMap[8]).BackgroundBlurFill, {}), ];
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
    const obj4 = { 803799044: null, 1269170180: null, 711589892: null, children: name };
    const items4 = [callback(arg1(dependencyMap[9]).Heading, obj4), ];
    let l30Rank;
    if (null != game) {
      l30Rank = game.l30Rank;
    }
    let tmp25 = null != l30Rank;
    if (tmp25) {
      const obj5 = { style: tmp.rankPillContainer };
      const obj6 = { rank: game.l30Rank, compact: true };
      const items5 = [callback(importDefault(dependencyMap[10]), obj6), ];
      const obj7 = {};
      const items6 = [StyleSheet.absoluteFill, animatedStyle1];
      obj7.style = items6;
      const obj8 = { rank: game.l30Rank };
      obj7.children = callback(importDefault(dependencyMap[10]), obj8);
      items5[1] = callback(importDefault(dependencyMap[5]).View, obj7);
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
      tmp32 = callback(importDefault(dependencyMap[5]).View, obj9);
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
