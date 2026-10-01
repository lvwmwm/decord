// Module ID: 15392
// Function ID: 15393
// Name: UserSettingsDesignSystemCoachmark
// Dependencies: [32, 19, 17, 21, 4836, 15390, 15393, 10589, 5281, 5293, 5999, 6621, 5997, 6000, 6544, 6577, 2]
// Exports: default

// Module 15392 (UserSettingsDesignSystemCoachmark)
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import LayerScope2 from "LayerScope" /* 6577 */;
import _modDef15393 from "module_15393" /* 15393 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function Content() {
  let TableRadioGroup;
  let TableRadioGroup2;
  let TableRadioGroup3;
  let closure_1;
  let first2;
  let first3;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj13;
  let obj9;
  let tmp13;
  let tmp14;
  let tmp29Result;
  let tmp = closure_10();
  let obj = first3;
  const tmp2 = first2(first3.useState(true), 2);
  const visible = tmp2[0];
  importDefault = tmp2[1];
  const tmp4 = first2(first3.useState(false), 2);
  const first1 = tmp4[0];
  const tmp6 = tmp4[1];
  const tmp7 = first2(first3.useState(false), 2);
  first2 = tmp7[0];
  const tmp9 = tmp7[1];
  let obj2 = visible(first1[5]);
  [tmp13, tmp14] = first2(obj2.useCanRotate(), 2);
  first2(obj2.useCanRotate(), 2);
  const tmp15 = first2(first3.useState(false), 2);
  first3 = tmp15[0];
  const tmp17 = tmp15[1];
  const tmp18 = first2(first3.useState("primary"), 2);
  let str = tmp18[0];
  const tmp19 = tmp18[1];
  const tmp20 = first2(first3.useState("none"), 2);
  const first4 = tmp20[0];
  const tmp22 = tmp20[1];
  const tmp23 = first2(first3.useState("16/9"), 2);
  const first5 = tmp23[0];
  let str2 = "Show tooltip";
  const tmp25 = tmp23[1];
  if (visible) {
    str2 = "Hide tooltip";
  }
  const ref = obj.useRef(null);
  const items = [first3, first2, visible, first1, str, first4, first5];
  const memo = obj.useMemo(() => {
    let obj2;
    let str2;
    let tmp;
    str = "top";
    if (first2) {
      str = "bottom";
    }
    const obj = {
      title: "Title goes here, and it can get really long so we should handle that",
      description: "Body copy goes here",
      position: str,
      visible,
      onDismiss() {
        return closure_1_1(false);
      },
      graphic: obj2,
      experimental_withBlurBackground: first1,
      buttonLabel: str2,
      onButtonPress() {
        return closure_1_1(false);
      },
      buttonVariant: str,
      gradientColor: tmp
    };
    str2 = undefined;
    obj2 = { type: "image", src: { uri: _modDef15393 }, aspectRatio: first5 };
    ({ uri: _modDef15393 });
    if (first3) {
      str2 = "Button";
    }
    tmp = undefined;
    if ("none" !== first4) {
      tmp = first4;
    }
    return obj;
  }, items);
  const tmp10Result = visible(first1[7]);
  const coachmark = tmp10Result.useCoachmark(ref, memo);
  const obj3 = {
    ref,
    onPress() {
      closure_1(!first);
    },
    variant: "primary",
    text: str2,
    size: "md"
  };
  const tmp30 = first5(visible(first1[8]).Button, obj3);
  const tmp32 = closure_9;
  if (first1) {
    const obj4 = { style: items1, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"], children: tmp30 };
    items1 = [{ height: 300 }, tmp.container];
    tmp29Result = tmp29(require("LinearGradient"), obj4);
  } else {
    const obj5 = { style: items2, children: tmp30 };
    items2 = [{ height: 360 }, tmp.container];
    tmp29Result = tmp29(str, obj5);
  }
  const items3 = [tmp29Result, , , , , , , ];
  const obj6 = { hasIcons: false, children: items4 };
  const TableRowGroup = tmp10(tmp11[10]).TableRowGroup;
  items4 = [first5(visible(first1[11]).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp9 }), first5(visible(first1[11]).TableSwitchRow, { label: "Enable Button", value: first3, onValueChange: tmp17 })];
  items3[1] = closure_8(TableRowGroup, obj6);
  const obj7 = { style: { marginVertical: 16 }, children: first5(TableRadioGroup, obj9) };
  TableRadioGroup = tmp10(tmp11[12]).TableRadioGroup;
  if (str == null) {
    str = "secondary";
  }
  const obj8 = { children: items3 };
  obj9 = {
    title: "Button Variant",
    defaultValue: str,
    onChange: tmp19,
    hasIcons: false,
    children: items5.map((value) => {
      const obj = { value, label: value };
      return first5(first(first1[13]).TableRadioRow, obj, value);
    })
  };
  items5 = ["primary", "secondary", "experimental_premium-primary"];
  items3[2] = first5(str, obj7);
  const obj10 = { style: { marginVertical: 16 }, children: first5(TableRadioGroup2, obj11) };
  obj11 = {
    title: "Gradient Color",
    defaultValue: first4,
    onChange: tmp22,
    hasIcons: false,
    children: items6.map((value) => {
      const label = value.label;
      return first5(first(first1[13]).TableRadioRow, { value: value.value, label }, label);
    })
  };
  items6 = [{ label: "None", value: "none" }, { label: "Purple", value: "purple" }, { label: "Blue", value: "blue" }, { label: "Green", value: "green" }, { label: "Pink", value: "pink" }, { label: "Nitro Pink", value: "nitro-pink" }, { label: "Nitro Green", value: "nitro-green" }];
  TableRadioGroup2 = tmp10(tmp11[12]).TableRadioGroup;
  items3[3] = first5(str, obj10);
  const obj12 = { style: { marginVertical: 16 }, children: first5(TableRadioGroup3, obj13) };
  obj13 = {
    title: "Aspect Ratio",
    defaultValue: first5,
    onChange: tmp25,
    hasIcons: false,
    children: items7.map((value) => {
      const obj = { value, label: value };
      return first5(first(first1[13]).TableRadioRow, obj, value);
    })
  };
  items7 = ["21/9", "16/9", "6/4", "2/1", "1/1"];
  TableRadioGroup3 = tmp10(tmp11[12]).TableRadioGroup;
  items3[4] = first5(str, obj12);
  items3[5] = first5(visible(first1[11]).TableSwitchRow, { label: "Enable Blur Background", value: first1, onValueChange: tmp6 });
  items3[6] = first5(visible(first1[11]).TableSwitchRow, { label: "Unlock Orientation", value: tmp13, onValueChange: tmp14 });
  items3[7] = first5(visible(first1[5]).TooltipNote, {});
  return closure_8(tmp32, obj8);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { paddingTop: 240, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1, padding: 16 } });
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemCoachmark.tsx");

export default function UserSettingsDesignSystemCoachmark() {
  let LayerScope;
  let obj2;
  let obj3;
  const obj = { style: closure_10().flex, bottom: true, children: metroImportDefault(metroRequire, obj2) };
  obj2 = { children: metroImportDefault(LayerScope, obj3) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj3 = { children: metroImportDefault(Content, {}) };
  LayerScope = LayerScope2.LayerScope;
  return metroImportDefault(SafeAreaPaddingView, obj);
};
