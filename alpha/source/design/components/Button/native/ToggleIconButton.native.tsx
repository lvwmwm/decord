// Module ID: 14245
// Function ID: 14246
// Name: ToggleIconButton
// Dependencies: [109, 19, 21, 558, 576, 14244, 7574, 2]

// Module 14245 (ToggleIconButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14244 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2;
const BaseIconButton2 = tmp2(7574);
let closure_2 = ["pressed", "selectedIcon", "variant", "icon", "ref"];
const jsx = Fragment.jsx;
let closure_5 = { default: { off: "toggle-icon-default-off", on: "toggle-icon-default-on" }, critical: { off: "toggle-icon-critical-off", on: "toggle-icon-critical-on" }, "icon-only": { off: "toggle-icon-only-off", on: "toggle-icon-only-on" } };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ToggleIconButton(arg0) {
  let icon;
  let pressed;
  let ref;
  let selectedIcon;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let variant;
  const obj = react2;
  const cResult = obj.c(20);
  if (cResult[0] !== arg0) {
    ({ pressed, selectedIcon, variant, icon, ref } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = icon;
    cResult[2] = tmp12;
    cResult[3] = ref;
    cResult[4] = selectedIcon;
    cResult[5] = pressed;
    cResult[6] = variant;
    tmp9 = variant;
    tmp8 = pressed;
    tmp7 = selectedIcon;
    tmp6 = ref;
    tmp5 = tmp12;
    tmp4 = icon;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  let str = "default";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  if (tmp7 == null) {
    tmp7 = tmp4;
  }
  if (cResult[7] === tmp5) {
    let tmp14;
    if (cResult[8] === tmp7) {
      tmp14 = cResult[9];
    }
    if (cResult[10] === tmp4) {
      let tmp16;
      if (cResult[11] === tmp5) {
        tmp16 = cResult[12];
      }
      if (cResult[13] === tmp14) {
        let tmp20;
        if (cResult[14] === tmp16) {
          tmp20 = cResult[15];
        }
        const tmpResult = useToggleButtonProps;
        const toggleIconButtonProps = tmpResult.useToggleIconButtonProps(tmp20, tmp13);
        const tmp24 = undefined !== tmp8 && tmp8 ? closure_5[str].on : closure_5[str].off;
        if (cResult[16] === tmp6) {
          if (cResult[17] === tmp24) {
            let tmp25;
            if (cResult[18] === toggleIconButtonProps) {
              tmp25 = cResult[19];
            }
            return tmp25;
          }
        }
        const BaseIconButton = tmp(7574).BaseIconButton;
        const merged = Object.assign(toggleIconButtonProps);
        const tmp30 = <BaseIconButton ref={tmp6} variant={tmp24} />;
        cResult[16] = tmp6;
        cResult[17] = tmp24;
        cResult[18] = toggleIconButtonProps;
        cResult[19] = tmp30;
        tmp25 = tmp30;
      }
      const obj3 = { on: tmp14, off: tmp16 };
      cResult[13] = tmp14;
      cResult[14] = tmp16;
      cResult[15] = obj3;
      tmp20 = obj3;
    }
    const obj4 = { icon: tmp4 };
    const merged1 = Object.assign(tmp5);
    cResult[10] = tmp4;
    cResult[11] = tmp5;
    cResult[12] = obj4;
    tmp16 = obj4;
  }
  const obj5 = { icon: tmp7 };
  const merged2 = Object.assign(tmp5);
  cResult[7] = tmp5;
  cResult[8] = tmp7;
  cResult[9] = obj5;
  tmp14 = obj5;
}) : (function ToggleIconButton(pressed) {
  let obj3;
  let selectedIcon;
  let variant;
  let flag = pressed.pressed;
  if (flag === undefined) {
    flag = false;
  }
  ({ selectedIcon, variant } = pressed);
  if (variant === undefined) {
    variant = "default";
  }
  const icon = pressed.icon;
  const ref = pressed.ref;
  const merged = Object.assign(pressed, Object.assign({ pressed: 0, selectedIcon: 0, variant: 0, icon: 0, ref: 0 }));
  const obj = { icon: selectedIcon };
  const useToggleIconButtonProps = useToggleButtonProps.useToggleIconButtonProps;
  useToggleButtonProps;
  const merged1 = Object.assign(merged);
  if (selectedIcon == null) {
    selectedIcon = icon;
  }
  const obj2 = { on: obj, off: obj3 };
  obj3 = { icon };
  const merged2 = Object.assign(merged);
  const toggleIconButtonProps = useToggleIconButtonProps(obj2, flag);
  const BaseIconButton = BaseIconButton2.BaseIconButton;
  const merged3 = Object.assign(toggleIconButtonProps);
  return <BaseIconButton ref={ref} variant={flag ? closure_5[variant].on : closure_5[variant].off} />;
});
const result = size.fileFinishedImporting("design/components/Button/native/ToggleIconButton.native.tsx");

export const ToggleIconButton = tmp3;
