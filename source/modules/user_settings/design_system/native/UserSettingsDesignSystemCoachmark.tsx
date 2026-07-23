// Module ID: 14453
// Function ID: 110413
// Name: Content
// Dependencies: [57, 31, 27, 33, 4130, 14451, 5865, 8563, 4543, 1324, 4554, 5503, 5504, 7519, 7518, 5121, 5449, 2]
// Exports: default

// Module 14453 (Content)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function Content() {
  let tmp10;
  let tmp9;
  let tmp = callback3();
  const tmp2 = first2(first3.useState(true), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  const tmp4 = first2(first3.useState(false), 2);
  const first1 = tmp4[0];
  const tmp6 = first2(first3.useState(false), 2);
  first2 = tmp6[0];
  let obj = first(first1[5]);
  [tmp9, tmp10] = first2(obj.useCanRotate(), 2);
  const tmp11 = first2(first3.useState(false), 2);
  first3 = tmp11[0];
  const tmp13 = first2(first3.useState("primary"), 2);
  const first4 = tmp13[0];
  const tmp15 = first2(first3.useState("none"), 2);
  const first5 = tmp15[0];
  const tmp17 = first2(first3.useState("16/9"), 2);
  const first6 = tmp17[0];
  let str = "Show tooltip";
  if (first) {
    str = "Hide tooltip";
  }
  const ref = first3.useRef(null);
  const items = [first3, first2, first, first1, first4, first5, first6];
  const memo = first3.useMemo(() => {
    let obj = { title: "Title goes here, and it can get really long so we should handle that", description: "Body copy goes here" };
    let str = "top";
    if (first2) {
      str = "bottom";
    }
    obj.position = str;
    obj.visible = first;
    obj.onDismiss = function onDismiss() {
      return outer1_1(false);
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
      return outer1_1(false);
    };
    obj.buttonVariant = first4;
    let tmp;
    if ("none" !== first5) {
      tmp = first5;
    }
    obj.gradientColor = tmp;
    return obj;
  }, items);
  let obj1 = first(first1[7]);
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
  const tmp22 = first6(first(first1[8]).Button, obj);
  const tmp23 = importDefault(first1[9])("Coachmark");
  obj = {};
  if (first1) {
    obj1 = {};
    const obj2 = { height: 300 };
    const items1 = [obj2, tmp.container];
    obj1.style = items1;
    obj1.start = { x: 0, y: 0 };
    obj1.end = { x: 1, y: 0 };
    obj1.colors = ["red", "orange", "yellow", "green", "teal", "blue", "purple"];
    obj1.children = tmp22;
    let tmp26Result = tmp26(importDefault(first1[10]), obj1);
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
  const items4 = [first6(first(first1[12]).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp6[1] }), first6(first(first1[12]).TableSwitchRow, { label: "Enable Button", value: first3, onValueChange: tmp11[1] })];
  obj5.children = items4;
  items3[1] = callback2(first(first1[11]).TableRowGroup, obj5);
  const obj6 = { style: { marginVertical: 16 } };
  const obj7 = { title: "Button Variant" };
  let str2 = "secondary";
  if (null != first4) {
    str2 = first4;
  }
  obj7.defaultValue = str2;
  obj7.onChange = tmp13[1];
  obj7.hasIcons = false;
  const items5 = ["primary", "secondary", "experimental_premium-primary"];
  obj7.children = items5.map((value) => first6(first(first1[14]).TableRadioRow, { value, label: value }, value));
  obj6.children = first6(first(first1[13]).TableRadioGroup, obj7);
  items3[2] = first6(first4, obj6);
  let tmp34 = null;
  if (tmp23) {
    const obj8 = {};
    const obj9 = { marginVertical: 16 };
    obj8.style = obj9;
    const obj10 = { title: "Gradient Color", defaultValue: first5, onChange: tmp15[1], hasIcons: false };
    const items6 = [{ label: "None", value: "none" }, { label: "Purple", value: "purple" }, { label: "Blue", value: "blue" }, { label: "Green", value: "green" }, { label: "Pink", value: "pink" }, { label: "Nitro Pink", value: "nitro-pink" }, { label: "Nitro Green", value: "nitro-green" }];
    obj10.children = items6.map((value) => {
      const label = value.label;
      return first6(first(first1[14]).TableRadioRow, { value: value.value, label }, label);
    });
    obj8.children = first6(first(first1[13]).TableRadioGroup, obj10);
    tmp34 = first6(first4, obj8);
  }
  items3[3] = tmp34;
  let tmp40 = null;
  if (tmp23) {
    const obj11 = {};
    const obj12 = { marginVertical: 16 };
    obj11.style = obj12;
    const obj13 = { title: "Aspect Ratio", defaultValue: first6, onChange: tmp17[1], hasIcons: false };
    const items7 = ["21/9", "16/9", "6/4", "2/1", "1/1"];
    obj13.children = items7.map((value) => first6(first(first1[14]).TableRadioRow, { value, label: value }, value));
    obj11.children = first6(first(first1[13]).TableRadioGroup, obj13);
    tmp40 = first6(first4, obj11);
  }
  items3[4] = tmp40;
  items3[5] = first6(first(first1[12]).TableSwitchRow, { label: "Enable Blur Background", value: first1, onValueChange: tmp4[1] });
  items3[6] = first6(first(first1[12]).TableSwitchRow, { label: "Unlock Orientation", value: tmp9, onValueChange: tmp10 });
  items3[7] = first6(first(first1[5]).TooltipNote, {});
  obj.children = items3;
  return callback2(closure_9, obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingTop: 240, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1, padding: 16 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemCoachmark.tsx");

export default function UserSettingsDesignSystemCoachmark() {
  let obj = { style: callback3().flex, bottom: true };
  obj = {};
  obj = { children: callback(Content, {}) };
  obj.children = callback(require(5449) /* Layer */.LayerScope, obj);
  obj.children = callback(closure_6, obj);
  return callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
