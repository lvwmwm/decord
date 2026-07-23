// Module ID: 9554
// Function ID: 74475
// Name: PostComposerInputs
// Dependencies: [57, 31, 2]
// Exports: useFocusHandlers

// Module 9554 (PostComposerInputs)
import _slicedToArray from "_slicedToArray";
import result from "result";

const obj = { TITLE: 0, [0]: "TITLE", CONTENT: 1, [1]: "CONTENT" };
const result = require("set").fileFinishedImporting("modules/forums/native/composer/hooks/useFocusHandlers.tsx");

export const PostComposerInputs = obj;
export const useFocusHandlers = function useFocusHandlers(arg0) {
  let _slicedToArray;
  let result;
  ({ titleInput: _slicedToArray, contentInput: result } = arg0);
  const tmp = callback(React.useState(first.TITLE), 2);
  first = tmp[0];
  return {
    setFocusedInput: tmp[1],
    focusLastInput() {
      if (first.TITLE === first) {
        const current2 = ref.current;
        if (null != current2) {
          current2.focus();
        }
      } else if (first.CONTENT === tmp) {
        const current = ref2.current;
        if (null != current) {
          current.focus();
        }
      }
    },
    blurLastInput() {
      if (first.TITLE === first) {
        const current2 = ref.current;
        if (null != current2) {
          current2.blur();
        }
      } else if (first.CONTENT === tmp) {
        const current = ref2.current;
        if (null != current) {
          current.blur();
        }
      }
    },
    focusedInput: first
  };
};
