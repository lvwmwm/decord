// Module ID: 10220
// Function ID: 10221
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 10220 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ useEffect: _window, useRef: map } = react);
const result = size.fileFinishedImporting("hooks/useTimeout.tsx");

export default function useTimeout(arg0, arg1) {
  const _window = arg0;
  const tmp = arg1(arg0);
  let closure_2 = tmp;
  const items = [arg0];
  React(() => {
    closure_2.current = current;
  }, items);
  const items1 = [arg1, tmp];
  React(() => {
    let closure_0;
    let ref;
    if (null !== closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => ref.current(), tmp);
      return () => clearTimeout(closure_0);
    }
  }, items1);
};
