// Module ID: 4070
// Function ID: 4071
// Name: useFocus
// Dependencies: [32, 19, 2]
// Exports: useFocus

// Module 4070 (useFocus)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const result = require("set").fileFinishedImporting("design/utils/native/useFocus.native.tsx");

export const useFocus = function useFocus() {
  const tmp = callback(React.useState(false), 2);
  callback = tmp[1];
  return {
    focusProps: React.useMemo(() => ({
      onFocus() {
        return callback(true);
      },
      onBlur() {
        return callback(false);
      }
    }), []),
    isFocused: tmp[0]
  };
};
