// Module ID: 18550
// Function ID: 18551
// Name: ConjureSecretKeyRow
// Dependencies: [19, 17, 21, 5043, 575, 18549, 7525, 5634, 1112, 4245, 5641, 7274, 8547, 2]
// Exports: default

// Module 18550 (ConjureSecretKeyRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import Text_Text from "Text/Text" /* 5634 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7274 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 7525 */;
import ConjureNativeFieldHeadingDefault from "ConjureNativeFieldHeading" /* 18549 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let tmp11;
const GlobeEarthIcon2 = tmp11(8547);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, connected: obj3, inputSurface: rect, stored: obj4, hosts: obj5, hostsText: { flexShrink: 1 } };
obj2 = { gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
rect = { position: "absolute", top: nativeDefault.space.PX_4, bottom: nativeDefault.space.PX_4, left: 0, right: 0, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingStart: nativeDefault.space.PX_12, paddingEnd: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretKeyRow.tsx");

export default function ConjureSecretKeyRow(onReplace) {
  let Ww9HFO;
  let disabled;
  let errorMessage;
  let formatToPlainString;
  let help;
  let hosts;
  let intl;
  let intl3;
  let intl4;
  let items;
  let items2;
  let items3;
  let label;
  let obj12;
  let obj8;
  let onBlur;
  let onChange;
  let onFocus;
  let replacing;
  let required;
  let stored;
  let tmp2Result;
  let value;
  ({ label, help, hosts, stored, replacing, required } = onReplace);
  onReplace = onReplace.onReplace;
  if (required === undefined) {
    required = false;
  }
  ({ value, disabled, onChange, onFocus, onBlur, errorMessage } = onReplace);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.row, children: null };
  const obj2 = { label, help, status: tmp2Result };
  tmp2Result = undefined;
  const tmp7 = ConjureNativeFieldHeadingDefault;
  if (stored) {
    const obj3 = { style: tmp.connected, children: items };
    const obj4 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
    items = [React3(CircleCheckIcon, obj4), ];
    const obj5 = { variant: "body-xs/semibold", color: "text-feedback-positive", children: intl.string(_modDef4245["6KzZZY"]) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    items[1] = React3(Text, obj5);
    tmp2Result = tmp2(tmp3, obj3);
  }
  const items1 = [React3(tmp7, obj2), , ];
  if (stored) {
    if (!replacing) {
      let obj6;
      if ("" === value) {
        obj6 = { style: tmp.stored, children: items2 };
        items2 = [React3(Text_Text.Text, { variant: "body-sm/normal", color: "text-muted", accessible: false, importantForAccessibility: "no", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        const obj7 = { variant: "secondary", size: "sm", text: intl3.string(_modDef4245.du47JY), accessibilityLabel: intl4.formatToPlainString(_modDef4245.hqR5SF, obj8), disabled, onPress: onReplace };
        const Button = components_Button_Button.Button;
        intl3 = intl5.intl;
        intl4 = intl5.intl;
        obj8 = { label };
        items2[1] = React3(Button, obj7);
      }
      items1[1] = hasOwnProperty(View, obj6);
      let tmp2Result2 = null;
      if (null != hosts) {
        tmp2Result2 = null;
        if (hosts.length > 0) {
          const obj9 = { style: tmp.hosts, children: items3 };
          const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
          const GlobeEarthIcon = GlobeEarthIcon2.GlobeEarthIcon;
          items3 = [React3(GlobeEarthIcon, obj10), ];
          const obj11 = { variant: "body-xs/normal", color: "text-muted", style: tmp.hostsText, children: formatToPlainString(Ww9HFO, obj12) };
          const Text2 = Text_Text.Text;
          const intl2 = intl5.intl;
          formatToPlainString = intl2.formatToPlainString;
          obj12 = { hosts: hosts.join(", ") };
          Ww9HFO = tmp5(4245).Ww9HFO;
          items3[1] = React3(Text2, obj11);
          tmp2Result2 = tmp2(tmp3, obj9);
        }
      }
      items1[2] = tmp2Result2;
      obj.children = items1;
      return hasOwnProperty(View, obj);
    }
  }
  const items4 = [, ];
  const obj13 = { style: tmp.inputSurface };
  items4[0] = React3(View, obj13);
  const obj14 = { accessibilityLabel: label, accessibilityHint: help, secureTextEntry: true, revealable: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, autoFocus: replacing, required, value, errorMessage, onChange, onFocus, onBlur, disabled };
  const TextInput = TextInput_TextInput.TextInput;
  if (required) {
    required = !stored;
  }
  const obj15 = { children: items4 };
  items4[1] = React3(TextInput, obj14);
  obj6 = obj15;
};
