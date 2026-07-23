// Module ID: 12699
// Function ID: 98957
// Name: NUFChannelIllustration
// Dependencies: [57, 31, 27, 33, 4130, 689, 1212, 12700, 12701, 3991, 4131, 12702, 12703, 12704, 12705, 5167, 4638, 4126, 2]
// Exports: default

// Module 12699 (NUFChannelIllustration)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { width: "100%", maxWidth: 275, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 24, marginBottom: 24 }, card: { padding: 0, width: "100%" } };
_createForOfIteratorHelperLoose = { width: "90%", height: 12, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.cardBackground = _createForOfIteratorHelperLoose;
let obj1 = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderBottomWidth: 1 };
_createForOfIteratorHelperLoose.header = obj1;
_createForOfIteratorHelperLoose.content = { height: 150, paddingVertical: 8, paddingHorizontal: 16, display: "flex", justifyContent: "flex-end", overflow: "hidden" };
_createForOfIteratorHelperLoose.message = { display: "flex", paddingVertical: 8, flexDirection: "row" };
_createForOfIteratorHelperLoose.messageAvatar = { width: 40, height: 40, marginRight: 12 };
_createForOfIteratorHelperLoose.messageContent = { display: "flex", flex: 1 };
_createForOfIteratorHelperLoose.starMedium = { height: 25, width: 15 };
_createForOfIteratorHelperLoose.starSmall = { height: 15, width: 10 };
_createForOfIteratorHelperLoose.starGreen = { position: "absolute", top: 5, left: -28 };
_createForOfIteratorHelperLoose.starBlue = { position: "absolute", top: -15, left: -10 };
_createForOfIteratorHelperLoose.starPink = { position: "absolute", bottom: -18, right: -22 };
_createForOfIteratorHelperLoose.starPurple = { position: "absolute", bottom: -30, right: -2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function NUFChannelIllustrationTsx1(){const{interpolate,messageListAnimation}=this.__closure;return{transform:[{translateY:interpolate(messageListAnimation.get(),[0,1],[50,0])}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelIllustration.tsx");

export default function NUFChannelIllustration() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const tmp2 = sharedValue(sharedValue1.useState([]), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  let obj = require(3991);
  sharedValue = obj.useSharedValue(0);
  let obj1 = require(3991);
  sharedValue1 = obj1.useSharedValue(0);
  const effect = sharedValue1.useEffect(() => {
    const timeout = setTimeout(() => outer1_2((arg0) => {
      const items = [...arg0];
      const intl = callback(1212).intl;
      const obj = {};
      const intl2 = callback(1212).intl;
      obj.name = intl2.string(callback(1212).t["9m/HsX"]);
      obj.avatar = first(12700);
      obj.message = intl.string(callback(1212).t["5alrl0"]);
      items[tmp] = obj;
      return items;
    }), 500);
    const timeout2 = setTimeout(() => outer1_2((arg0) => {
      const items = [...arg0];
      const intl = callback(1212).intl;
      const obj = {};
      const intl2 = callback(1212).intl;
      obj.name = intl2.string(callback(1212).t["AW1kM+"]);
      obj.avatar = first(12701);
      obj.message = intl.string(callback(1212).t["5Oo+vS"]);
      items[tmp] = obj;
      return items;
    }), 2000);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  let items = [sharedValue1, first];
  const effect1 = sharedValue1.useEffect(() => {
    if (first.length >= 2) {
      let obj = tmp(4131);
      obj = { duration: 250 };
      const result = sharedValue1.set(obj.withTiming(1, obj));
    }
  }, items);
  let items1 = [sharedValue, first];
  const effect2 = sharedValue1.useEffect(() => {
    const result = sharedValue.set(0);
    const result1 = sharedValue.set(tmp(4131).withTiming(1, { duration: 200 }));
  }, items1);
  let obj2 = require(3991);
  const fn = function b() {
    let obj = {};
    obj = { translateY: tmp(3991).interpolate(sharedValue.get(), [0, 1], [50, 0]) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { interpolate: require(3991).interpolate, messageListAnimation: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 1240710065054;
  fn.__initData = closure_10;
  obj = { style: tmp.container };
  obj1 = {};
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj1.source = first(12702);
  const items2 = [, ];
  ({ starSmall: arr4[0], starBlue: arr4[1] } = tmp);
  obj1.style = items2;
  const items3 = [callback(closure_6, obj1), , , , , ];
  obj2 = { source: first(12703), style: items4 };
  items4 = [, ];
  ({ starMedium: arr6[0], starPink: arr6[1] } = tmp);
  items3[1] = callback(closure_6, obj2);
  const items5 = [, ];
  ({ starMedium: arr7[0], starGreen: arr7[1] } = tmp);
  items3[2] = callback(closure_6, { source: first(12704), style: items5 });
  const obj3 = { source: first(12704), style: items5 };
  const items6 = [, ];
  ({ starSmall: arr8[0], starPurple: arr8[1] } = tmp);
  items3[3] = callback(closure_6, { source: first(12705), style: items6 });
  items3[4] = callback(closure_5, { style: tmp.cardBackground });
  const obj6 = { style: tmp.card, shadow: "low", border: "subtle" };
  const obj7 = { style: tmp.header };
  const items7 = [callback(require(4638) /* TextIcon */.TextIcon, { size: "sm" }), ];
  const obj8 = { variant: "text-md/bold", allowFontScaling: false };
  let intl = require(1212) /* getSystemLocale */.intl;
  const items8 = [" ", intl.string(require(1212) /* getSystemLocale */.t.aLOLry)];
  obj8.children = items8;
  items7[1] = callback2(require(4126) /* Text */.Text, obj8);
  obj7.children = items7;
  const items9 = [callback2(closure_5, obj7), ];
  const obj9 = { style: tmp.content };
  const obj10 = {
    style: animatedStyle,
    children: first.map((avatar) => {
      let obj = { style: tmp.message };
      obj = { source: avatar.avatar, style: tmp.messageAvatar };
      const items = [outer1_7(outer1_6, obj), ];
      obj = { style: tmp.messageContent };
      const obj1 = { variant: "text-md/semibold", allowFontScaling: false, children: avatar.name };
      const items1 = [outer1_7(tmp(4126).Text, obj1), ];
      const obj2 = { variant: "text-md/medium", allowFontScaling: false, children: avatar.message };
      items1[1] = outer1_7(tmp(4126).Text, obj2);
      obj.children = items1;
      items[1] = outer1_8(outer1_5, obj);
      obj.children = items;
      return outer1_8(outer1_5, obj, avatar.message);
    })
  };
  obj9.children = callback(first(3991).View, obj10);
  items9[1] = callback(closure_5, obj9);
  obj6.children = items9;
  items3[5] = callback2(require(5167) /* getCardBackgroundToken */.Card, obj6);
  obj.children = items3;
  return callback2(closure_5, obj);
};
