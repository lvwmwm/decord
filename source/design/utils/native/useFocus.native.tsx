// Module ID: 3993
// Function ID: 3994
// Name: useFocus
// Dependencies: [32, 19, 2]
// Exports: useFocus

// Module 3993 (useFocus)
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
