// Module ID: 9722
// Function ID: 9723
// Name: useFocusHandlers
// Dependencies: [32, 19, 2]
// Exports: useFocusHandlers

// Module 9722 (useFocusHandlers)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PostComposerInputs = { TITLE: 0, [0]: "TITLE", CONTENT: 1, [1]: "CONTENT" };
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/useFocusHandlers.tsx");

export { PostComposerInputs };
export const useFocusHandlers = function useFocusHandlers(arg0) {
  let ref;
  let ref2;
  ({ titleInput: _slicedToArray, contentInput: react } = arg0);
  let focusedInput;
  const tmp = _slicedToArray(react.useState(focusedInput.TITLE), 2);
  focusedInput = tmp[0];
  const obj = {
    setFocusedInput: tmp[1],
    focusLastInput() {
      if (obj.TITLE === first) {
        const current2 = _slicedToArray.current;
        if (current2 != null) {
          current2.focus();
        }
      } else if (tmp2.CONTENT === tmp) {
        const current = react.current;
        if (current != null) {
          current.focus();
        }
      }
    },
    blurLastInput() {
      if (obj.TITLE === first) {
        const current2 = _slicedToArray.current;
        if (current2 != null) {
          current2.blur();
        }
      } else if (tmp2.CONTENT === tmp) {
        const current = react.current;
        if (current != null) {
          current.blur();
        }
      }
    },
    focusedInput
  };
  return obj;
};
