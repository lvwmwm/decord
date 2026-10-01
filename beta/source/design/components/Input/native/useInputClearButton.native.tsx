// Module ID: 6033
// Function ID: 6034
// Name: useInputClearButton
// Dependencies: [19, 17, 21, 6034, 1115, 2]
// Exports: useInputClearButton, useInputClearButtonConfig

// Module 6033 (useInputClearButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import CircleXIcon from "CircleXIcon" /* 6034 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export const useInputClearButton = function useInputClearButton(clearProps, clearState) {
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
};
export const useInputClearButtonConfig = function useInputClearButtonConfig(clearable, state) {
  let intl;
  let obj2;
  clearable = clearable.clearable;
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
};
