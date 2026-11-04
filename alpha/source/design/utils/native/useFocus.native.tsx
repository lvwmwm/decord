// Module ID: 5314
// Function ID: 5315
// Name: useFocus
// Dependencies: [32, 19, 2]
// Exports: useFocus

// Module 5314 (useFocus)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/utils/native/useFocus.native.tsx");

export function useFocus() {
  const tmp = _slicedToArray(react.useState(false), 2);
  let closure_0 = tmp[1];
  const obj = {
    focusProps: react.useMemo(() => ({
      onFocus() {
        return closure_1_0(true);
      },
      onBlur() {
        return closure_1_0(false);
      }
    }), []),
    isFocused: tmp[0]
  };
  return obj;
}
