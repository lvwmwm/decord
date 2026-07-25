// Module ID: 6678
// Function ID: 58991
// Name: useInputClearButtonConfig
// Dependencies: [31, 27, 33, 6679, 1212, 2]
// Exports: useInputClearButton

// Module 6678 (useInputClearButtonConfig)
import "result";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function useInputClearButtonConfig(isClearable, state) {
  if (isClearable.isClearable) {
    if (state.hasValue) {
      let obj = {};
      obj = { size: "xs" };
      obj.content = jsx(require(6679) /* CircleXIcon */.CircleXIcon, { size: "xs" });
      obj = { onPress: state.clear };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.VkKicb);
      obj.accessibilityRole = "button";
      obj.hitSlop = 4;
      obj.pressableProps = obj;
      return obj;
    }
  }
}
const result = require("jsxProd").fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export const useInputClearButton = function useInputClearButton(clearProps, clearState) {
  const tmp = useInputClearButtonConfig(clearProps, clearState);
  let tmp2 = null;
  if (null != tmp) {
    const obj = {};
    const merged = Object.assign(tmp.pressableProps);
    obj["children"] = tmp.content;
    tmp2 = <Pressable />;
  }
  return tmp2;
};
export { useInputClearButtonConfig };
