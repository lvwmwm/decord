// Module ID: 12585
// Function ID: 96801
// Name: NUFChannelIllustration
// Dependencies: []
// Exports: default

// Module 12585 (NUFChannelIllustration)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { "Bool(false)": false, "Bool(false)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false }, card: { 1507939603: "age", 2021029889: "targetFrames" } };
obj = { borderTopLeftRadius: importDefault(dependencyMap[5]).radii.lg, borderTopRightRadius: importDefault(dependencyMap[5]).radii.lg, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.cardBackground = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.header = { borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.content = { "Null": "<string:2399142344>", "Null": "<string:1358954752>", "Null": "<string:2520852300>", "Null": "<string:1107296959>", "Null": "text-xs/bold", "Null": "text-strong" };
obj.message = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
obj.messageAvatar = { -9223372036854775808: "valueCallback", 9223372036854775807: "<string:1749090560>", 0: "<string:822084842>" };
obj.messageContent = {};
obj.starMedium = { hideWhenScrolling: true, autoCapitalize: true };
obj.starSmall = { hideWhenScrolling: -302624512, autoCapitalize: -1429651183 };
obj.starGreen = {};
obj.starBlue = {};
obj.starPink = { "Bool(false)": "resolve", "Bool(false)": "isArray", "Bool(false)": "isArray" };
obj.starPurple = {};
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function NUFChannelIllustrationTsx1(){const{interpolate,messageListAnimation}=this.__closure;return{transform:[{translateY:interpolate(messageListAnimation.get(),[0,1],[50,0])}]};}" };
const obj1 = { borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelIllustration.tsx");

export default function NUFChannelIllustration() {
  const tmp = callback4();
  const arg1 = tmp;
  const tmp2 = callback(React.useState([]), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  let obj = arg1(closure_2[9]);
  const sharedValue = obj.useSharedValue(0);
  const callback = sharedValue;
  let obj1 = arg1(closure_2[9]);
  const sharedValue1 = obj1.useSharedValue(0);
  const React = sharedValue1;
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => callback((arg0) => {
      const items = [...arg0];
      const intl = callback(closure_2[6]).intl;
      const obj = {};
      const intl2 = callback(closure_2[6]).intl;
      obj.name = intl2.string(callback(closure_2[6]).t.9m/HsX);
      obj.avatar = callback2(closure_2[7]);
      obj.message = intl.string(callback(closure_2[6]).t.5alrl0);
      items[tmp] = obj;
      return items;
    }), 500);
    const timeout2 = setTimeout(() => callback((arg0) => {
      const items = [...arg0];
      const intl = callback(closure_2[6]).intl;
      const obj = {};
      const intl2 = callback(closure_2[6]).intl;
      obj.name = intl2.string(callback(closure_2[6]).t.AW1kM+);
      obj.avatar = callback2(closure_2[8]);
      obj.message = intl.string(callback(closure_2[6]).t.5Oo+vS);
      items[tmp] = obj;
      return items;
    }), 2000);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  const items = [sharedValue1, first];
  const effect1 = React.useEffect(() => {
    if (first.length >= 2) {
      let obj = tmp(closure_2[10]);
      obj = { duration: 250 };
      const result = sharedValue1.set(obj.withTiming(1, obj));
    }
  }, items);
  const items1 = [sharedValue, first];
  const effect2 = React.useEffect(() => {
    const result = sharedValue.set(0);
    const result1 = sharedValue.set(tmp(closure_2[10]).withTiming(1, { duration: 200 }));
  }, items1);
  let obj2 = arg1(closure_2[9]);
  const fn = function b() {
    let obj = {};
    obj = { translateY: tmp(closure_2[9]).interpolate(sharedValue.get(), [77601039, 1612144654], ["values", "application"]) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { interpolate: arg1(closure_2[9]).interpolate, messageListAnimation: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 1240710065054;
  fn.__initData = closure_10;
  obj = { style: tmp.container };
  obj1 = {};
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj1.source = importDefault(closure_2[11]);
  const items2 = [, ];
  ({ starSmall: arr4[0], starBlue: arr4[1] } = tmp);
  obj1.style = items2;
  const items3 = [callback2(closure_6, obj1), , , , , ];
  obj2 = { source: importDefault(closure_2[12]), style: items4 };
  const items4 = [, ];
  ({ starMedium: arr6[0], starPink: arr6[1] } = tmp);
  items3[1] = callback2(closure_6, obj2);
  const items5 = [, ];
  ({ starMedium: arr7[0], starGreen: arr7[1] } = tmp);
  items3[2] = callback2(closure_6, { source: importDefault(closure_2[13]), style: items5 });
  const obj3 = { source: importDefault(closure_2[13]), style: items5 };
  const items6 = [, ];
  ({ starSmall: arr8[0], starPurple: arr8[1] } = tmp);
  items3[3] = callback2(closure_6, { source: importDefault(closure_2[14]), style: items6 });
  items3[4] = callback2(closure_5, { style: tmp.cardBackground });
  const obj6 = { style: tmp.card };
  const obj7 = { style: tmp.header };
  const items7 = [callback2(arg1(closure_2[16]).TextIcon, { size: "sm" }), ];
  const obj8 = {};
  const intl = arg1(closure_2[6]).intl;
  const items8 = [false, intl.string(arg1(closure_2[6]).t.aLOLry)];
  obj8.children = items8;
  items7[1] = callback3(arg1(closure_2[17]).Text, obj8);
  obj7.children = items7;
  const items9 = [callback3(closure_5, obj7), ];
  const obj9 = { style: tmp.content };
  const obj10 = {
    style: animatedStyle,
    children: first.map((avatar) => {
      let obj = { style: tmp.message };
      obj = { source: avatar.avatar, style: tmp.messageAvatar };
      const items = [callback(closure_6, obj), ];
      obj = { style: tmp.messageContent };
      const obj1 = { style: "flex", channelId: "flex-start", children: avatar.name };
      const items1 = [callback(tmp(closure_2[17]).Text, obj1), ];
      const obj2 = { style: false, channelId: false, children: avatar.message };
      items1[1] = callback(tmp(closure_2[17]).Text, obj2);
      obj.children = items1;
      items[1] = callback2(closure_5, obj);
      obj.children = items;
      return callback2(closure_5, obj, avatar.message);
    })
  };
  obj9.children = callback2(importDefault(closure_2[9]).View, obj10);
  items9[1] = callback2(closure_5, obj9);
  obj6.children = items9;
  items3[5] = callback3(arg1(closure_2[15]).Card, obj6);
  obj.children = items3;
  return callback3(closure_5, obj);
};
