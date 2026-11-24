// Module ID: 18320
// Function ID: 18321
// Name: ConjurePublishRemixRow
// Dependencies: [19, 17, 21, 4917, 575, 1112, 4192, 7060, 5508, 8926, 5515, 14620, 2]
// Exports: default

// Module 18320 (ConjurePublishRemixRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import components_Button_Button from "components/Button/Button" /* 5515 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp2;
const ChevronLargeDownIcon = tmp2(14620);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, label: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishRemixRow.tsx");

export default function ConjurePublishRemixRow(remix) {
  let accessibilityHint;
  let c1;
  let intl2;
  let items1;
  let items2;
  let disabled = remix.disabled;
  const tmp = closure_7();
  const options = iter.options;
  const value = iter.value;
  importDefault = value;
  const setValue = iter.setValue;
  const canChange = iter.canChange;
  let tmp2 = options;
  const intl = options(setValue[5]).intl;
  const stringResult = intl.string(require("module_4192")["Z/NFcQ"]);
  let c4 = stringResult;
  const items = [options, value, setValue];
  const memo = canChange.useMemo(() => options.map((label) => {
    let CheckmarkLargeIcon;
    const obj = {
      label: label.label,
      trailingIndicator: CheckmarkLargeIcon,
      action() {
        return setValue(label.value);
      }
    };
    CheckmarkLargeIcon = undefined;
    if (label.value === closure_1) {
      CheckmarkLargeIcon = options(setValue[7]).CheckmarkLargeIcon;
    }
    return obj;
  }), items);
  const found = options.find((value) => value.value === c1);
  const tmp4 = importDefault;
  if (null == found) {
    return null;
  } else {
    let tmp8 = !canChange;
    if (canChange) {
      tmp8 = disabled;
    }
    disabled = tmp8;
    let obj = { style: tmp.row, children: items2 };
    const obj2 = { style: tmp.label, children: items1 };
    const obj3 = { variant: "body-sm/medium", color: "text-subtle", children: stringResult };
    items1 = [found(tmp2(tmp3[8]).Text, obj3), ];
    const obj4 = { variant: "body-xs/normal", color: "text-muted", children: intl2.string(tmp4(setValue[6])["PuID+v"]) };
    const Text = tmp2(tmp3[8]).Text;
    intl2 = tmp2(tmp3[5]).intl;
    items1[1] = found(Text, obj4);
    items2 = [disabled(c4, obj2), ];
    const obj5 = {
      items: memo,
      title: stringResult,
      enabled: !tmp8,
      children(arg0) {
          let accessibilityActions;
          let onAccessibilityAction;
          let onPress;
          let ref;
          let tmpResult;
          ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
          const obj = { ref, variant: "tertiary", size: "sm", text: found.label, icon: tmpResult, iconPosition: "end", disabled, accessibilityHint, onPress, accessibilityActions, onAccessibilityAction };
          tmpResult = undefined;
          const Button = components_Button_Button.Button;
          if (canChange) {
            tmpResult = tmp(ChevronLargeDownIcon.ChevronLargeDownIcon, { size: "xs" });
          }
          return hasOwnProperty(Button, obj);
        }
    };
    items2[1] = found(tmp2(setValue[9]).ContextMenu, obj5);
    return disabled(c4, obj);
  }
};
