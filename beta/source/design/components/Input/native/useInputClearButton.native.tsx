// Module ID: 7091
// Function ID: 7092
// Name: useInputClearButton
// Dependencies: [19, 17, 21, 7092, 1113, 2]
// Exports: useInputClearButton, useInputClearButtonConfig

// Module 7091 (useInputClearButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import CircleXIcon from "CircleXIcon" /* 7092 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export function useInputClearButton(clearProps, clearState) {
  let intl;
  let obj2;
  const clearable = clearProps.clearable;
  let tmp;
  if (undefined !== clearable) {
    if (clearable) {
      if (clearState.hasValue) {
        const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs" }), pressableProps: obj2 };
        obj2 = { onPress: clearState.clear, accessibilityLabel: intl.string(intl2.t.VkKicb), accessibilityRole: "button", hitSlop: 4 };
        intl = intl2.intl;
        tmp = obj;
      }
    }
  }
  let tmp6 = null;
  if (null != tmp) {
    const merged = Object.assign(tmp.pressableProps);
    tmp6 = <Pressable>{tmp.content}</Pressable>;
  }
  return tmp6;
}
export function useInputClearButtonConfig(merged, state) {
  let intl;
  let obj2;
  const clearable = merged.clearable;
  if (undefined !== clearable) {
    if (clearable) {
      if (state.hasValue) {
        const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs" }), pressableProps: obj2 };
        obj2 = { onPress: state.clear, accessibilityLabel: intl.string(intl2.t.VkKicb), accessibilityRole: "button", hitSlop: 4 };
        intl = intl2.intl;
        return obj;
      }
    }
  }
}
