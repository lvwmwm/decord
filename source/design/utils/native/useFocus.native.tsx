// Module ID: 3839
// Function ID: 32010
// Name: useFocus
// Dependencies: [57, 31, 2]
// Exports: useFocus

// Module 3839 (useFocus)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("set").fileFinishedImporting("design/utils/native/useFocus.native.tsx");

export const useFocus = function useFocus() {
  const tmp = callback(React.useState(false), 2);
  callback = tmp[1];
  return {
    focusProps: React.useMemo(() => ({
      onFocus() {
        return outer1_0(true);
      },
      onBlur() {
        return outer1_0(false);
      }
    }), []),
    isFocused: tmp[0]
  };
};
