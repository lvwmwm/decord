// Module ID: 7232
// Function ID: 7233
// Name: useInputClearButton
// Dependencies: [19, 17, 21, 7233, 1113, 2]
// Exports: useInputClearButton, useInputClearButtonConfig

// Module 7232 (useInputClearButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import CircleXIcon from "CircleXIcon" /* 7233 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export function useInputClearButton(clearProps, clearState) {
  let intl;
  let obj2;
  let obj3;
  const clearable = clearProps.clearable;
  const disabled = clearProps.disabled;
  const readOnly = clearProps.readOnly;
  let tmp4;
  const tmp = undefined !== clearable && clearable;
  const tmp3 = undefined !== readOnly && readOnly;
  if (tmp) {
    if (clearState.hasValue) {
      if (!tmp3) {
        const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs", accessible: false }), pressableProps: obj2 };
        obj2 = { onPress: clearState.clear, disabled: undefined !== disabled && disabled, accessibilityState: obj3, accessibilityLabel: intl.string(intl2.t.VkKicb), accessibilityRole: "button", hitSlop: 4 };
        obj3 = { disabled: undefined !== disabled && disabled };
        intl = intl2.intl;
        tmp4 = obj;
      }
    }
  }
  let tmp9 = null;
  if (null != tmp4) {
    const merged = Object.assign(tmp4.pressableProps);
    tmp9 = <Pressable>{tmp4.content}</Pressable>;
  }
  return tmp9;
}
export function useInputClearButtonConfig(merged, state) {
  let intl;
  let obj2;
  let obj3;
  const clearable = merged.clearable;
  const disabled = merged.disabled;
  const readOnly = merged.readOnly;
  const tmp = undefined !== clearable && clearable;
  const tmp3 = undefined !== readOnly && readOnly;
  if (tmp) {
    if (state.hasValue) {
      if (!tmp3) {
        const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs", accessible: false }), pressableProps: obj2 };
        obj2 = { onPress: state.clear, disabled: undefined !== disabled && disabled, accessibilityState: obj3, accessibilityLabel: intl.string(intl2.t.VkKicb), accessibilityRole: "button", hitSlop: 4 };
        obj3 = { disabled: undefined !== disabled && disabled };
        intl = intl2.intl;
        return obj;
      }
    }
  }
}
