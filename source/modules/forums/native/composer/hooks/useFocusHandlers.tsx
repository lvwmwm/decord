// Module ID: 9546
// Function ID: 74410
// Name: PostComposerInputs
// Dependencies: []
// Exports: useFocusHandlers

// Module 9546 (PostComposerInputs)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
const obj = { TITLE: 0, [0]: "TITLE", CONTENT: 1, [1]: "CONTENT" };
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/forums/native/composer/hooks/useFocusHandlers.tsx");

export const PostComposerInputs = obj;
export const useFocusHandlers = function useFocusHandlers(arg0) {
  ({ titleInput: closure_0, contentInput: closure_1 } = arg0);
  const tmp = callback(React.useState(obj.TITLE), 2);
  const first = tmp[0];
  let obj = first;
  obj = {
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
  return obj;
};
