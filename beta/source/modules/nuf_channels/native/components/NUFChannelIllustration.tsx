// Module ID: 13314
// Function ID: 13315
// Name: NUFChannelIllustration
// Dependencies: [32, 19, 17, 21, 4836, 576, 1115, 13315, 13316, 4566, 4837, 13317, 13318, 13319, 13320, 5919, 5394, 4832, 2]
// Exports: default

// Module 13314 (NUFChannelIllustration)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "100%", maxWidth: 275, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 24, marginBottom: 24 }, card: { padding: 0, width: "100%" }, cardBackground: size, header: obj2, content: { height: 150, paddingVertical: 8, paddingHorizontal: 16, display: "flex", justifyContent: "flex-end", overflow: "hidden" }, message: { display: "flex", paddingVertical: 8, flexDirection: "row" }, messageAvatar: { width: 40, height: 40, marginRight: 12 }, messageContent: { display: "flex", flex: 1 }, starMedium: { height: 25, width: 15 }, starSmall: { height: 15, width: 10 }, starGreen: { position: "absolute", top: 5, left: -28 }, starBlue: { position: "absolute", top: -15, left: -10 }, starPink: { position: "absolute", bottom: -18, right: -22 }, starPurple: { position: "absolute", bottom: -30, right: -2 } };
size = { width: "90%", height: 12, borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj2 = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
let closure_9 = createStyles(obj);
const __initData = { code: "function NUFChannelIllustrationTsx1(){const{interpolate,messageListAnimation}=this.__closure;return{transform:[{translateY:interpolate(messageListAnimation.get(),[0,1],[50,0])}]};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelIllustration.tsx");

export default function NUFChannelIllustration() {
  let View;
  let closure_0;
  let closure_2;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj15;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_9();
  _require = tmp;
  const tmp2 = sharedValue(sharedValue1.useState([]), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(0);
  const effect = sharedValue1.useEffect(() => {
    let closure_1;
    const timeout = setTimeout(() => closure_1_2((arg0) => {
      let intl2;
      let stringResult;
      const items = [...arg0];
      const intl = closure_1_0(closure_1_2[6]).intl;
      const obj = { name: intl2.string(closure_1_0(closure_1_2[6]).t["9m/HsX"]), avatar: closure_1_1(closure_1_2[7]), message: stringResult };
      stringResult = intl.string(closure_1_0(closure_1_2[6]).t["5alrl0"]);
      intl2 = closure_1_0(closure_1_2[6]).intl;
      items[tmp] = obj;
      return items;
    }), 500);
    const timeout2 = setTimeout(() => closure_1_2((arg0) => {
      let intl2;
      let stringResult;
      const items = [...arg0];
      const intl = closure_1_0(closure_1_2[6]).intl;
      const obj = { name: intl2.string(closure_1_0(closure_1_2[6]).t["AW1kM+"]), avatar: closure_1_1(closure_1_2[8]), message: stringResult };
      stringResult = intl.string(closure_1_0(closure_1_2[6]).t["5Oo+vS"]);
      intl2 = closure_1_0(closure_1_2[6]).intl;
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
      set = sharedValue1.set;
      const obj = timing;
      const result = set(obj.withTiming(1, { duration: 250 }));
    }
  }, items);
  let items1 = [sharedValue, first];
  const effect2 = sharedValue1.useEffect(() => {
    const result = sharedValue.set(0);
    set = sharedValue.set;
    const obj = timing;
    const result1 = set(obj.withTiming(1, { duration: 200 }));
  }, items1);
  let obj3 = require("ReanimatedRexport");
  const fn = function b() {
    let items;
    let obj3;
    const obj = { transform: items };
    const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
    items = [obj2];
    obj3 = ReanimatedRexport;
    return obj;
  };
  let obj4 = { interpolate: require("ReanimatedRexport").interpolate, messageListAnimation: sharedValue };
  fn.__closure = obj4;
  fn.__workletHash = 1240710065054;
  fn.__initData = __initData;
  let obj5 = { style: tmp.container, children: items3 };
  const obj6 = { source: first(13317), style: items2 };
  const animatedStyle = obj3.useAnimatedStyle(fn);
  items2 = [, ];
  ({ starSmall: arr4[0], starBlue: arr4[1] } = tmp);
  items3 = [closure_7(closure_6, obj6), , , , , ];
  const obj7 = { source: first(13318), style: items4 };
  items4 = [, ];
  ({ starMedium: arr6[0], starPink: arr6[1] } = tmp);
  items3[1] = closure_7(closure_6, obj7);
  const obj8 = { source: first(13319), style: items5 };
  items5 = [, ];
  ({ starMedium: arr7[0], starGreen: arr7[1] } = tmp);
  items3[2] = closure_7(closure_6, obj8);
  const obj9 = { source: first(13320), style: items6 };
  items6 = [, ];
  ({ starSmall: arr8[0], starPurple: arr8[1] } = tmp);
  items3[3] = closure_7(closure_6, obj9);
  const obj10 = { style: tmp.cardBackground };
  items3[4] = closure_7(closure_5, obj10);
  const obj11 = { style: tmp.card, shadow: "low", border: "subtle", children: items9 };
  const obj12 = { style: tmp.header, children: items7 };
  const Card = require("Card/Card").Card;
  items7 = [closure_7(require("TextIcon").TextIcon, { size: "sm" }), ];
  const obj13 = { variant: "text-md/bold", allowFontScaling: false, children: items8 };
  const Text = require("Text/Text").Text;
  let intl = require("intl").intl;
  items8 = [" ", intl.string(require("intl").t.aLOLry)];
  items7[1] = closure_8(Text, obj13);
  items9 = [closure_8(closure_5, obj12), ];
  const obj14 = { style: tmp.content, children: closure_7(View, obj15) };
  obj15 = {
    style: animatedStyle,
    children: first.map((children) => {
      let items;
      let items1;
      const obj = { style: closure_0.message, children: items };
      items = [, ];
      const obj2 = { source: children.avatar, style: closure_0.messageAvatar };
      items[0] = metroImportDefault(metroRequire, obj2);
      const obj3 = { style: closure_0.messageContent, children: items1 };
      items1 = [, ];
      const obj4 = { variant: "text-md/semibold", allowFontScaling: false, children: children.name };
      items1[0] = metroImportDefault(Text_Text.Text, obj4);
      const obj5 = { variant: "text-md/medium", allowFontScaling: false, children: children.message };
      items1[1] = metroImportDefault(Text_Text.Text, obj5);
      items[1] = metroImportAll(hasOwnProperty, obj3);
      return metroImportAll(hasOwnProperty, obj, children.message);
    })
  };
  View = first(4566).View;
  items9[1] = closure_7(closure_5, obj14);
  items3[5] = closure_8(Card, obj11);
  return closure_8(closure_5, obj5);
};
