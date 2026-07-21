// Module ID: 14328
// Function ID: 108185
// Name: Content
// Dependencies: []
// Exports: default

// Module 14328 (Content)
function Content() {
  let tmp10;
  let tmp9;
  const tmp = callback4();
  const tmp2 = callback(React.useState(true), 2);
  const first = tmp2[0];
  const arg1 = first;
  const importDefault = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  const first1 = tmp4[0];
  const dependencyMap = first1;
  const tmp6 = callback(React.useState(false), 2);
  const first2 = tmp6[0];
  const callback = first2;
  let obj = arg1(dependencyMap[5]);
  [tmp9, tmp10] = callback(obj.useCanRotate(), 2);
  const tmp11 = callback(React.useState(false), 2);
  const first3 = tmp11[0];
  const React = first3;
  const tmp13 = callback(React.useState("primary"), 2);
  const first4 = tmp13[0];
  const tmp15 = callback(React.useState("none"), 2);
  const first5 = tmp15[0];
  const tmp17 = callback(React.useState("16/9"), 2);
  const first6 = tmp17[0];
  let str = "Show tooltip";
  if (first) {
    str = "Hide tooltip";
  }
  const ref = React.useRef(null);
  const items = [first3, first2, first, first1, first4, first5, first6];
  const memo = React.useMemo(() => {
    let obj = { accessibilityRole: true, y: true };
    let str = "top";
    if (first2) {
      str = "bottom";
    }
    obj.position = str;
    obj.visible = first;
    obj.onDismiss = function onDismiss() {
      return callback(false);
    };
    obj = { type: "image" };
    obj = { uri: callback(first1[6]) };
    obj.src = obj;
    obj.aspectRatio = first6;
    obj.graphic = obj;
    obj.experimental_withBlurBackground = first1;
    let str2;
    if (first3) {
      str2 = "Button";
    }
    obj.buttonLabel = str2;
    obj.onButtonPress = function onButtonPress() {
      return callback(false);
    };
    obj.buttonVariant = first4;
    let tmp;
    if ("none" !== first5) {
      tmp = first5;
    }
    obj.gradientColor = tmp;
    return obj;
  }, items);
  let obj1 = arg1(dependencyMap[7]);
  const coachmark = obj1.useCoachmark(ref, memo);
  obj = {
    ref,
    onPress() {
      callback(!first);
    },
    variant: "primary",
    text: str,
    size: "md"
  };
  const tmp22 = first6(arg1(dependencyMap[8]).Button, obj);
  const tmp23 = importDefault(dependencyMap[9])("Coachmark");
  obj = {};
  if (first1) {
    obj1 = {};
    const obj2 = { height: 300 };
    const items1 = [obj2, tmp.container];
    obj1.style = items1;
    obj1.start = { max: -536870861, guildId: -299892737 };
    obj1.end = {};
    obj1.colors = ["RotateOutDownLeft", "username", "password", "updateAsync", "ang", "eachConnection", "%Uint8ClampedArray%"];
    obj1.children = tmp22;
    let tmp26Result = tmp26(importDefault(dependencyMap[10]), obj1);
  } else {
    const obj3 = {};
    const obj4 = { height: 360 };
    const items2 = [obj4, tmp.container];
    obj3.style = items2;
    obj3.children = tmp22;
    tmp26Result = tmp26(first4, obj3);
  }
  const items3 = [tmp26Result, , , , , , , ];
  const obj5 = { hasIcons: false };
  const items4 = [first6(arg1(dependencyMap[12]).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp6[1] }), first6(arg1(dependencyMap[12]).TableSwitchRow, { label: "Enable Button", value: first3, onValueChange: tmp11[1] })];
  obj5.children = items4;
  items3[1] = callback3(arg1(dependencyMap[11]).TableRowGroup, obj5);
  const obj6 = { style: { marginVertical: 16 } };
  const obj7 = { title: "Button Variant" };
  let str2 = "secondary";
  if (null != first4) {
    str2 = first4;
  }
  obj7.defaultValue = str2;
  obj7.onChange = tmp13[1];
  obj7.hasIcons = false;
  const items5 = ["jpg", "endAudioRecording", "%Uint16ArrayPrototype%"];
  obj7.children = items5.map((value) => first6(first(first1[14]).TableRadioRow, { value, label: value }, value));
  obj6.children = first6(arg1(dependencyMap[13]).TableRadioGroup, obj7);
  items3[2] = first6(first4, obj6);
  let tmp34 = null;
  if (tmp23) {
    const obj8 = {};
    const obj9 = { marginVertical: 16 };
    obj8.style = obj9;
    const obj10 = { title: "Gradient Color", defaultValue: first5, onChange: tmp15[1], hasIcons: false };
    const items6 = [{ raw: "<string:275858829>", body: "<string:1107296256>" }, {}, {}, {}, {}, { raw: true, body: true }, { raw: true, body: true }];
    obj10.children = items6.map((value) => {
      const label = value.label;
      return first6(first(first1[14]).TableRadioRow, { value: value.value, label }, label);
    });
    obj8.children = first6(arg1(dependencyMap[13]).TableRadioGroup, obj10);
    tmp34 = first6(first4, obj8);
  }
  items3[3] = tmp34;
  let tmp40 = null;
  if (tmp23) {
    const obj11 = {};
    const obj12 = { marginVertical: 16 };
    obj11.style = obj12;
    const obj13 = { title: "Aspect Ratio", defaultValue: first6, onChange: tmp17[1], hasIcons: false };
    const items7 = [false, false, false, false, false];
    obj13.children = items7.map((value) => first6(first(first1[14]).TableRadioRow, { value, label: value }, value));
    obj11.children = first6(arg1(dependencyMap[13]).TableRadioGroup, obj13);
    tmp40 = first6(first4, obj11);
  }
  items3[4] = tmp40;
  items3[5] = first6(arg1(dependencyMap[12]).TableSwitchRow, { label: "Enable Blur Background", value: first1, onValueChange: tmp4[1] });
  items3[6] = first6(arg1(dependencyMap[12]).TableSwitchRow, { label: "Unlock Orientation", value: tmp9, onValueChange: tmp10 });
  items3[7] = first6(arg1(dependencyMap[5]).TooltipNote, {});
  obj.children = items3;
  return callback3(closure_9, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[4]).createStyles({ container: {}, flex: { accessibilityRole: true, guildId: null } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemCoachmark.tsx");

export default function UserSettingsDesignSystemCoachmark() {
  let obj = { style: callback4().flex, bottom: true };
  obj = {};
  obj = { children: callback2(Content, {}) };
  obj.children = callback2(arg1(dependencyMap[16]).LayerScope, obj);
  obj.children = callback2(closure_6, obj);
  return callback2(arg1(dependencyMap[15]).SafeAreaPaddingView, obj);
};
